import type { Metadata } from "next";
import MediaContent from "./MediaContent";

export const metadata: Metadata = {
  title: "Медиа — Радостная Весть",
  description:
    "Архив служений, проповеди, музыка и другие медиа-материалы церкви «Радостная Весть».",
};

export default function MediaPage() {
  return <MediaContent />;
}
