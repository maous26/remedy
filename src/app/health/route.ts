import { NextResponse } from 'next/server';

export function GET(request: Request) {
  // Useful to debug Railway healthchecks (they may use a different Host header)
  try {
    const host = request.headers.get('host');
    const ua = request.headers.get('user-agent');
    console.log('[health] ok', { url: request.url, host, ua });
  } catch {
    // ignore
  }

  return new NextResponse('ok', {
    status: 200,
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      // avoid any caching surprises for platform health checks
      'cache-control': 'no-store',
    },
  });
}


