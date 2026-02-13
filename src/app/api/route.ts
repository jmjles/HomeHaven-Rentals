import { properties } from "@/dummyData";

export async function GET() {
  return Response.json({ rentals: properties });
}
