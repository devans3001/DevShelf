// app/api/search/mdx/route.js

import { getAllDocs } from "@/lib/mdx-all";


export async function GET() {
  const data = getAllDocs();
  return Response.json(data);
}
