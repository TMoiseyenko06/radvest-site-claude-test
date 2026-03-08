import { NextRequest, NextResponse } from "next/server";
import { getTempServices, addTempService, deleteTempService } from "@/lib/temp-services";

function checkAuth(request: NextRequest): boolean {
  const authHeader = request.headers.get("authorization");
  if (!authHeader) return false;
  const password = authHeader.replace("Bearer ", "");
  return password === process.env.ADMIN_PASSWORD;
}

export async function GET(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  // Admin GET returns all (including past for review)
  const services = getTempServices();
  return NextResponse.json(services);
}

export async function POST(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { date, hour, minute, name, nameEn, durationHours } = body;

  if (!date || hour === undefined || minute === undefined || !name) {
    return NextResponse.json(
      { error: "Missing required fields: date, hour, minute, name" },
      { status: 400 }
    );
  }

  const service = addTempService({
    date,
    hour: Number(hour),
    minute: Number(minute),
    name,
    nameEn: nameEn || name,
    durationHours: Number(durationHours) || 2,
  });

  return NextResponse.json(service, { status: 201 });
}

export async function DELETE(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Missing id parameter" }, { status: 400 });
  }

  const deleted = deleteTempService(id);
  if (!deleted) {
    return NextResponse.json({ error: "Service not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
