import { NextResponse } from 'next/server';
import { QrCodePix } from 'qrcode-pix';

export async function POST(request: Request) {
  try {
    const { amount } = await request.json();
    
    if (!amount || isNaN(amount) || amount <= 0) {
      return NextResponse.json({ error: "Valor inválido" }, { status: 400 });
    }

    const qrCodePix = QrCodePix({
      version: '01',
      key: 'comunidadegetsemani30@gmail.com', // Chave Pix da Campanha
      name: 'AD COMUNIDADE GETSEMANI',
      city: 'SAO PAULO',
      transactionId: 'CAMPANHASOM' + Date.now().toString().slice(-4), // ID único
      value: Number(amount),
    });

    const payload = qrCodePix.payload(); 
    
    return NextResponse.json({ payload });
  } catch (error) {
    console.error("Erro gerando Pix:", error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
