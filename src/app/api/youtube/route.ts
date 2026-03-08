import { NextResponse } from "next/server";

const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_HANDLE = "Radostnayavest";
const YOUTUBE_API = "https://www.googleapis.com/youtube/v3";

interface YouTubeStream {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  scheduledStart: string | null;
  status: "live" | "upcoming" | "none";
}

async function resolveChannelId(): Promise<string | null> {
  // Try with @ prefix (forHandle expects handle without @)
  const url = `${YOUTUBE_API}/channels?part=id&forHandle=${CHANNEL_HANDLE}&key=${API_KEY}`;
  const res = await fetch(url);
  if (res.ok) {
    const data = await res.json();
    if (data.items?.[0]?.id) {
      return data.items[0].id;
    }
  }

  // Fallback: search for the channel by name
  const searchUrl = `${YOUTUBE_API}/search?part=snippet&q=${CHANNEL_HANDLE}&type=channel&maxResults=1&key=${API_KEY}`;
  const searchRes = await fetch(searchUrl);
  if (searchRes.ok) {
    const searchData = await searchRes.json();
    if (searchData.items?.[0]?.snippet?.channelId) {
      return searchData.items[0].snippet.channelId;
    }
    if (searchData.items?.[0]?.id?.channelId) {
      return searchData.items[0].id.channelId;
    }
  }

  return null;
}

async function searchBroadcasts(
  channelId: string,
  eventType: "live" | "upcoming"
): Promise<YouTubeStream[]> {
  const url = `${YOUTUBE_API}/search?part=snippet&channelId=${channelId}&eventType=${eventType}&type=video&order=date&maxResults=5&key=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) return [];
  const data = await res.json();

  return (data.items ?? []).map(
    (item: {
      id: { videoId: string };
      snippet: {
        title: string;
        description: string;
        thumbnails: { high?: { url: string }; medium?: { url: string } };
        liveBroadcastContent: string;
      };
    }) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail:
        item.snippet.thumbnails.high?.url ??
        item.snippet.thumbnails.medium?.url ??
        "",
      scheduledStart: null,
      status: eventType,
    })
  );
}

async function getScheduledStartTimes(
  streams: YouTubeStream[]
): Promise<YouTubeStream[]> {
  if (streams.length === 0) return streams;

  const ids = streams.map((s) => s.id).join(",");
  const url = `${YOUTUBE_API}/videos?part=liveStreamingDetails,snippet&id=${ids}&key=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) return streams;
  const data = await res.json();

  const detailsMap = new Map<
    string,
    { scheduledStart?: string; actualStart?: string }
  >();
  for (const item of data.items ?? []) {
    detailsMap.set(item.id, {
      scheduledStart:
        item.liveStreamingDetails?.scheduledStartTime ?? null,
      actualStart:
        item.liveStreamingDetails?.actualStartTime ?? null,
    });
  }

  return streams.map((s) => ({
    ...s,
    scheduledStart:
      detailsMap.get(s.id)?.scheduledStart ??
      detailsMap.get(s.id)?.actualStart ??
      null,
  }));
}

export async function GET() {
  if (!API_KEY) {
    return NextResponse.json(
      { error: "YouTube API key not configured", live: [], upcoming: [] },
      { status: 200 }
    );
  }

  try {
    const channelId = await resolveChannelId();
    if (!channelId) {
      return NextResponse.json(
        { error: "Could not resolve channel", live: [], upcoming: [], debug: { handle: CHANNEL_HANDLE } },
        { status: 200 }
      );
    }

    const [live, upcoming] = await Promise.all([
      searchBroadcasts(channelId, "live"),
      searchBroadcasts(channelId, "upcoming"),
    ]);

    const upcomingWithTimes = await getScheduledStartTimes(upcoming);

    return NextResponse.json(
      { channelId, live, upcoming: upcomingWithTimes },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        },
      }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch YouTube data", live: [], upcoming: [] },
      { status: 200 }
    );
  }
}
