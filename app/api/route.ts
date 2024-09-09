import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export const GET = async (request: NextRequest) => {
  const method = request.nextUrl.searchParams.get("method")?.toUpperCase();

  const requestInit = new Request(new URL("/api/foo", request.url));

  if (!method || !["GET", "POST"].includes(method)) {
    return new Response("`?method` searchParams should be `GET` or `POST`");
  }

  const result = await fetch(requestInit, { method, cache: "no-store" });

  // Use the 'type' variable as needed
  return new Response(await result.text());
};
