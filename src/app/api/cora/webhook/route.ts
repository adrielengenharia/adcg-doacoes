import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const bodyString = JSON.stringify(body);
    console.log("Webhook Cora recebido:", bodyString);

    // A Cora manda o status e o valor. Vamos filtrar pela chave da campanha.
    // Como a estrutura exata do payload pode variar, buscamos pela string da chave no JSON recebido.
    if (body?.type === 'CASH_IN.PIX.RECEIVED' && body?.data?.amount) {
      
      const isCampanhaSom = bodyString.includes('comunidadegetsemani30@gmail.com');
      
      if (isCampanhaSom) {
        const valorRecebido = Number(body.data.amount) / 100;
        console.log(`Pix da campanha recebido no valor de R$ ${valorRecebido}`);
        
        // Atualizar o banco de dados
        await sql`
          UPDATE progress 
          SET collected_amount = collected_amount + ${valorRecebido}
          WHERE month = 'Agosto';
        `;
      } else {
        console.log("Pix recebido, mas não pertence à chave da campanha. Ignorando...");
      }
    }
    
    return NextResponse.json({ received: true });

  } catch (error) {
    console.error("Erro no webhook:", error);
    return NextResponse.json({ error: "Erro processando webhook" }, { status: 500 });
  }
}
