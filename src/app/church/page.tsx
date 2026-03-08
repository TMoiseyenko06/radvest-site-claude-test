import type { Metadata } from "next";
import ChurchContent from "./ChurchContent";

export const metadata: Metadata = {
  title: "Церковь — Радостная Весть",
  description:
    "История и информация о Евангельской Баптистской Церкви Филадельфии «Радостная Весть».",
};

export default function ChurchPage() {
  return <ChurchContent />;
}
