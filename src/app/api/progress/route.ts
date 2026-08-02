import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { rows } = await sql`SELECT collected_amount FROM progress WHERE month = 'Agosto' LIMIT 1;`;
    
    if (rows.length > 0) {
      return NextResponse.json({ collected: Number(rows[0].collected_amount) });
    }
    
    return NextResponse.json({ collected: 850.00 });
  } catch (error) {
    console.error("Erro ao buscar progresso:", error);
    return NextResponse.json({ collected: 850.00 }, { status: 500 });
  }
}
