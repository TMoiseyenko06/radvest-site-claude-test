import fs from "fs";
import path from "path";

export interface TempService {
  id: string;
  date: string; // ISO date string YYYY-MM-DD
  hour: number;
  minute: number;
  name: string;
  nameEn: string;
  durationHours: number;
}

const DATA_FILE = path.join(process.cwd(), "src/data/temp-services.json");

export function getTempServices(): TempService[] {
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    const services: TempService[] = JSON.parse(raw);
    // Filter out past services (keep today and future)
    const today = new Date().toISOString().split("T")[0];
    return services.filter((s) => s.date >= today);
  } catch {
    return [];
  }
}

export function addTempService(service: Omit<TempService, "id">): TempService {
  const services = getTempServices();
  const newService: TempService = {
    ...service,
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
  };
  services.push(newService);
  fs.writeFileSync(DATA_FILE, JSON.stringify(services, null, 2));
  return newService;
}

export function deleteTempService(id: string): boolean {
  const services = getTempServices();
  const filtered = services.filter((s) => s.id !== id);
  if (filtered.length === services.length) return false;
  fs.writeFileSync(DATA_FILE, JSON.stringify(filtered, null, 2));
  return true;
}
