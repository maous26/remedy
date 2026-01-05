import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json(
    { ok: true },
    {
      status: 200,
      headers: {
        'cache-control': 'no-store',
      },
    }
  );
}


