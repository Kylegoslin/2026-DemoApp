
import { NextResponse } from "next/server";
import { db, authenticate } from "@/lib/database";

export async function GET() {

 await authenticate();

  const products = await db.collection("products").getFullList({
    sort: "-created",
  });



  return NextResponse.json(products);
}