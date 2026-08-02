import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Webhook Cora recebido:", JSON.stringify(body));

    // A Cora manda o status e o valor. Normalmente no array event.data
    // Vamos assumir um payload de notificação de Pix recebido
    if (body?.type === 'CASH_IN.PIX.RECEIVED' && body?.data?.amount) {
      const valorRecebido = Number(body.data.amount) / 100; // Valor geralmente vem em centavos
      console.log(`Pix recebido no valor de R$ ${valorRecebido}`);
      
      // Atualizar o banco de dados
      await sql`
        UPDATE progress 
        SET collected_amount = collected_amount + ${valorRecebido}
        WHERE month = 'Agosto';
      `;
    }
    
    return NextResponse.json({ received: true });

  } catch (error) {
    console.error("Erro no webhook:", error);
    return NextResponse.json({ error: "Erro processando webhook" }, { status: 500 });
  }
}
