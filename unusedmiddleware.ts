import { NextRequest, NextResponse } from "next/server";

export async function middleware(
  _req: NextRequest,
  _res: NextResponse,
  next: any
) {
  let response;
  try {
    response = NextResponse.next();
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }

  return response;
}

export const config = {
  matcher: "*",
};
