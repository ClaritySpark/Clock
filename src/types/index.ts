export type City =
  | "Seoul"
  | "Tokyo"
  | "Beijing"
  | "Dubai"
  | "Moscow"
  | "Paris"
  | "London"
  | "New York"
  | "Los Angeles"
  | "Sydney"
  | "Rio de Janeiro"
  | "Cairo"
  | "Mumbai"
  | "Singapore";

export interface TimeZoneInfo {
  city: City;
  timeZone: string;
}

export const TIME_ZONES: TimeZoneInfo[] = [
  { city: "Seoul", timeZone: "Asia/Seoul" },
  { city: "Tokyo", timeZone: "Asia/Tokyo" },
  { city: "Beijing", timeZone: "Asia/Shanghai" },
  { city: "Dubai", timeZone: "Asia/Dubai" },
  { city: "Moscow", timeZone: "Europe/Moscow" },
  { city: "Paris", timeZone: "Europe/Paris" },
  { city: "London", timeZone: "Europe/London" },
  { city: "New York", timeZone: "America/New_York" },
  { city: "Los Angeles", timeZone: "America/Los_Angeles" },
  { city: "Sydney", timeZone: "Australia/Sydney" },
  { city: "Rio de Janeiro", timeZone: "America/Sao_Paulo" },
  { city: "Cairo", timeZone: "Africa/Cairo" },
  { city: "Mumbai", timeZone: "Asia/Kolkata" },
  { city: "Singapore", timeZone: "Asia/Singapore" },
];
