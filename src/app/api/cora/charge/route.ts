import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Simulação: Na produção, aqui a gente autenticaria na API da Cora (usando as variáveis de ambiente)
    // const clientId = process.env.CORA_CLIENT_ID;
    // const clientSecret = process.env.CORA_CLIENT_SECRET;
    // E então faria um POST para https://api.cora.com.br/v2/invoices 
    
    console.log("Simulando geração de cobrança Cora para o valor:", body.value);

    // Retorna dados falsos para a interface (Mock)
    return NextResponse.json({
      success: true,
      qrCodeBase64: "mock_base64_image_data",
      copyAndPaste: "00020126580014br.gov.bcb.pix0136mock-chave-pix-da-igreja-aqui5204000053039865802BR5923AD COMUNIDADE GETSEMANI6009SAO PAULO62140510DjkEfwNqG763045E7A",
      message: "Cobrança gerada com sucesso (Simulação)"
    });

  } catch (error) {
    return NextResponse.json({ error: "Erro ao gerar cobrança" }, { status: 500 });
  }
}
