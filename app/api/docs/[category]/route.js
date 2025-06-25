import { getDocsInCategory } from '@/lib/mdx';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { category } = await params;

  try {
    const docs = getDocsInCategory(category);
    return NextResponse.json(docs);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch docs" },
      { status: 500 }
    );
  }
}