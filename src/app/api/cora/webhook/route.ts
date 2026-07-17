import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Essa rota será chamada AUTOMATICAMENTE pela Cora quando um Pix for pago
    console.log("Webhook Cora recebido!", body);

    // Na vida real:
    // 1. Verificamos se o status é "PAID"
    // 2. Pegamos o valor pago
    // 3. Atualizamos o Vercel Postgres / Supabase somando o valor na parcela de "Agosto"
    
    return NextResponse.json({ received: true });

  } catch (error) {
    return NextResponse.json({ error: "Erro processando webhook" }, { status: 500 });
  }
}
