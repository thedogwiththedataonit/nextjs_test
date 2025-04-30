import { NextResponse } from "next/server";

export async function middleware() {
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
