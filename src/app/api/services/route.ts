import { NextResponse } from "next/server";
import { getTempServices } from "@/lib/temp-services";

export const dynamic = "force-dynamic";

export async function GET() {
  const services = getTempServices();
  return NextResponse.json(services);
}
