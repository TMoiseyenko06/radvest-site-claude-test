import type { Metadata } from "next";
import LivestreamContent from "./LivestreamContent";

export const metadata: Metadata = {
  title: "Прямая Трансляция — Радостная Весть",
  description:
    "Смотрите прямую трансляцию богослужений церкви «Радостная Весть» онлайн.",
};

export default function LiveStreamPage() {
  return <LivestreamContent />;
}
