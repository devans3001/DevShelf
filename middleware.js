import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const CONTENT_PATH = path.join(process.cwd(), 'contents');

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Only check documentation routes
  if (pathname.startsWith('/docs/')) {
    try {
      // Convert URL to filesystem path
      const slug = pathname
        .replace('/docs/', '')
        .split('/')
        .filter(Boolean);
      
      const filePath = path.join(CONTENT_PATH, ...slug) + '.mdx';

      // Validate file exists
      if (!fs.existsSync(filePath)) {
        console.warn(`Missing MDX file: ${filePath}`);
        return NextResponse.rewrite(new URL('/not-found', request.url));
      }
    } catch (error) {
      console.error('Middleware validation failed:', error);
    }
  }

  return NextResponse.next();
}