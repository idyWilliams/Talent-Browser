
import { NextResponse } from 'next/server';
import talents from '@/public/talents.json';

export async function GET() {
  return NextResponse.json(talents);
}
