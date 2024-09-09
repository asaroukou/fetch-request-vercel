export const dynamic = "force-dynamic";

export const GET = () => {
  console.log("requesting get");
  return new Response("Response from GET /api/foo");
};

export const POST = () => {
  console.log("requesting post");
  return new Response("Response from POST /api/foo");
};
