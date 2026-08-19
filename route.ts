import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const error = request.nextUrl.searchParams.get("error");

  if (error) {
    return NextResponse.json(
      { ok: false, error },
      { status: 400 }
    );
  }

  if (!code) {
    return NextResponse.json({
      ok: true,
      message: "Bullhorn OAuth callback is live. No authorization code was supplied."
    });
  }

  // We will exchange this code for a Bullhorn access token
  // after Bullhorn provides the client ID and client secret.
  return NextResponse.json({
    ok: true,
    message: "Bullhorn returned an authorization code successfully.",
    receivedCode: true
  });
}
