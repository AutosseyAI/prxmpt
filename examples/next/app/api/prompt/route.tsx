/** @jsxImportSource @autossey/prxmpt */
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.json({
    text: (
      <text>Hello from Prxmpt!</text>
    )
  });
}
