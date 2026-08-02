"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Camera, Heart, CheckCircle2, Copy, CreditCard, MessageCircle, Mail, MapPin } from "lucide-react";
import Image from "next/image";

// Meta dados
const TOTAL_VALUE = 38307.50;
const MONTHLY_INSTALLMENT = 1741.25;
const CURRENT_MONTH = "Agosto";

// Todas as fotos do processo
const fotosProcesso = [
  "Screenshot_20260717_021957_Photos.jpg",
  "Adriel.jpg",
  "Screenshot_20260717_022043_Photos.jpg",
  "Screenshot_20260717_022115_Photos.jpg",
  "Screenshot_20260717_022142_Photos.jpg", // Possível foto do relógio
  "Screenshot_20260717_022205_Photos.jpg",
  "Screenshot_20260717_022232_Photos.jpg",
  "Screenshot_20260717_022319_Photos.jpg",
  "Screenshot_20260717_022346_Photos.jpg",
  "Screenshot_20260717_022605_Photos.jpg",
  "Screenshot_20260717_022730_Photos.jpg",
  "Screenshot_20260717_022810_Photos.jpg",
  "Screenshot_20260717_023140_Photos.jpg",
  "Screenshot_20260717_023310_Photos.jpg",
  "Screenshot_20260717_023505_Photos.jpg",
  "Screenshot_20260717_023533_Photos.jpg",
  "Screenshot_20260717_023842_Photos.jpg",
  "Screenshot_20260717_023928_Photos.jpg",
  "Screenshot_20260717_024656_Photos.jpg",
  "Screenshot_20260717_025026_Photos.jpg",
  "Screenshot_20260717_025109_Photos.jpg",
  "Screenshot_20260717_025133_Photos.jpg",
  "Screenshot_20260717_025256_Photos.jpg",
  "Screenshot_20260717_025315_Photos.jpg",
  "Screenshot_20260717_025443_Photos.jpg",
  "Screenshot_20260717_025509_Photos.jpg",
  "Screenshot_20260717_050729_Photos.jpg",
  "Screenshot_20260717_050941_Photos.jpg"
];

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0a0a0a]">
      {/* Imagem de Fundo Hero com transparência maior */}
      <div className="absolute inset-0 opacity-40">
        <Image 
          src="/images/Gemini_Generated_Image_1yqlpz1yqlpz1yql.png" 
          alt="Fundo" 
          fill 
          className="object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#0a0a0a] opacity-90" />
      </div>

      {/* Luzes dinâmicas fluidas */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[40%] right-[-10%] w-[60%] h-[60%] rounded-full bg-yellow-600/10 blur-[150px]"
      />
      
      {/* Partículas flutuantes */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
          }}
          animate={{
            y: [null, Math.random() * -500],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [collected, setCollected] = useState(0);

  useEffect(() => {
    setIsClient(true);
    fetch('/api/progress')
      .then(res => res.json())
      .then(data => setCollected(data.collected))
      .catch(err => console.error(err));
  }, []);

  const PROGRESS_PERCENTAGE = (collected / MONTHLY_INSTALLMENT) * 100;

  const handleCopyPix = () => {
    navigator.clipboard.writeText("00020126580014br.gov.bcb.pix0136mock-chave-pix-da-igreja-aqui5204000053039865802BR5923AD COMUNIDADE GETSEMANI6009SAO PAULO62140510DjkEfwNqG763045E7A");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMessage = encodeURIComponent("Olá, vim através do site de contribuição e gostaria de tirar uma dúvida!");
  const whatsappUrl = `https://wa.me/5521973079220?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen text-foreground pb-0 relative overflow-hidden font-sans">
      {isClient && <AnimatedBackground />}

      {/* Header */}
      <header className="pt-8 pb-4 px-6 max-w-5xl mx-auto flex flex-col items-center justify-center gap-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-28 h-28 md:w-36 md:h-36 relative mx-auto mb-4 bg-transparent p-0 overflow-hidden rounded-full border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
             <Image src="/images/perfil vetor preto pnng.jpg" alt="Logo AD Comunidade Getsêmani" fill className="object-cover" />
          </div>
          <h1 className="text-xl font-bold tracking-wider text-primary mt-2">AD COMUNIDADE GETSÊMANI</h1>
        </motion.div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-8 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gradient leading-tight">
            Juntos por uma causa
          </h2>
          <p className="text-gray-300 text-lg md:text-xl font-light">
            Fizemos um investimento de fé para melhorar toda a estrutura de som em nossa igreja. 
            Faça parte dessa causa e nos ajude a honrar este compromisso.
          </p>
        </motion.div>

        {/* Progress Card (Glassmorphism) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card mt-12 p-6 md:p-8 text-left bg-black/40"
        >
          <div className="flex justify-between items-end mb-2">
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Parcela de {CURRENT_MONTH}</span>
              <div className="text-3xl font-bold mt-1 text-white">
                R$ {collected.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} 
                <span className="text-sm text-gray-400 font-normal ml-1">/ R$ {MONTHLY_INSTALLMENT.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs text-gray-400 uppercase tracking-wider">Faltam</span>
              <div className="text-xl font-semibold text-white">R$ {Math.max(0, MONTHLY_INSTALLMENT - collected).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-800/80 rounded-full h-5 mt-4 overflow-hidden relative shadow-inner">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(PROGRESS_PERCENTAGE, 100)}%` }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="bg-gradient-to-r from-yellow-600 to-primary h-5 rounded-full relative"
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
            </motion.div>
          </div>
          
          <div className="mt-4 p-3 bg-white/5 rounded-lg border border-white/10">
            <p className="text-xs text-gray-300 leading-relaxed">
              <span className="text-primary font-semibold">Como funciona:</span> Este índice está integrado de forma segura com a conta bancária da igreja (Banco Cora). A cada doação realizada, o site recebe uma notificação automática do banco e atualiza este progresso em tempo real.
            </p>
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center font-medium">Valor total do investimento: R$ {TOTAL_VALUE.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
        </motion.div>
      </section>

      {/* Donation Area */}
      <section className="px-6 py-12 max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold mb-3 text-white">Como contribuir</h3>
          <p className="text-gray-400 text-base">Escolha um valor ou faça uma doação livre. Toda ajuda é uma semente preciosa!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Pix Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card p-6 lg:col-span-2 flex flex-col items-center justify-center border-primary/30 bg-black/60 shadow-2xl"
          >
            <div className="w-48 h-48 bg-white p-3 rounded-full flex items-center justify-center mb-6 relative overflow-hidden border-2 border-white/10">
              <Image src="/images/perfil vetor preto pnng.jpg" alt="QR Code" fill className="object-cover opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center backdrop-blur-[1px] z-10">
                 <span className="text-white text-xs font-bold px-4 py-2 bg-primary/90 rounded-full shadow-lg">QR Code Pix</span>
              </div>
            </div>

            <button 
              onClick={handleCopyPix}
              className="w-full py-4 px-4 bg-primary text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-500 transition-all shadow-lg active:scale-95"
            >
              {copied ? <CheckCircle2 size={22} /> : <Copy size={22} />}
              {copied ? "Chave Pix Copiada!" : "Copiar Chave Pix"}
            </button>
            
          </motion.div>

          {/* Quick Values & Extra Info */}
          <div className="flex flex-col justify-between gap-6 lg:col-span-3">
             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4">
                {[20, 50, 100, 200].map((val) => (
                  <motion.button
                    key={val}
                    whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    whileTap={{ scale: 0.97 }}
                    className="glass-card p-5 flex flex-col items-center justify-center border border-white/10 hover:border-primary/60 transition-all bg-white/5"
                  >
                    <span className="text-sm text-gray-400 mb-1">Contribuir com</span>
                    <span className="text-3xl font-extrabold text-white">R$ {val}</span>
                  </motion.button>
                ))}
             </div>

             <div className="flex flex-col gap-3">
                <motion.a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full relative overflow-hidden rounded-xl bg-gradient-to-r from-green-900/40 to-emerald-900/40 p-4 border border-green-500/30 flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                      <Heart size={24} fill="currentColor" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-white text-lg">Torne-se um Doador Mensal</h4>
                      <p className="text-sm text-green-200/70">Abrace essa causa de forma contínua com a gente.</p>
                    </div>
                  </div>
                </motion.a>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="glass-card p-4 flex items-center gap-3 bg-white/5">
                    <CreditCard className="text-gray-400" size={24} />
                    <p className="text-xs text-gray-300">Prefere cartão? Temos <strong className="text-white">maquininha</strong> disponível em nossa secretaria.</p>
                  </div>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="glass-card p-4 flex items-center gap-3 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                    <MessageCircle className="text-primary" size={24} />
                    <div>
                      <p className="text-sm font-semibold text-white">Ficou com dúvida?</p>
                      <p className="text-xs text-gray-400">Fale no nosso WhatsApp</p>
                    </div>
                  </a>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Nossa História */}
      <section className="px-4 py-16 max-w-7xl mx-auto border-t border-white/5 mt-10 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 text-primary mb-4 shadow-[0_0_20px_rgba(202,138,4,0.3)]">
            <Camera size={28} />
          </div>
          <h3 className="text-3xl font-bold mb-3 text-white">Acompanhe um pouco desse processo</h3>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Desde a compra até a instalação dos nossos novos equipamentos, tudo feito com muito amor, conhecimento e excelência.
          </p>
        </div>

        {/* Galeria Responsiva (2 colunas mobile, 4 colunas desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 auto-rows-[150px] md:auto-rows-[250px]">
           {fotosProcesso.map((foto, index) => {
             // Lógica para variar o tamanho de algumas fotos no grid para ficar um masonry estiloso
             const isLarge = index === 0 || index === 7 || index === 14 || index === 21;
             const isWide = index === 4 || index === 11 || index === 18;
             
             let spanClass = "col-span-1 row-span-1";
             if (isLarge) spanClass = "col-span-2 row-span-2 md:col-span-2 md:row-span-2";
             else if (isWide) spanClass = "col-span-2 row-span-1 md:col-span-2 md:row-span-1";
             
             // Ajuste específico para garantir que a foto do relógio ou pessoas apareçam corretamente sem cortar o principal
             // Dando ênfase pro lado direito (relógio) na foto 022142
             const isWatchPhoto = foto.includes("022142");
             const isStorePhoto = foto === "Adriel.jpg";
             
             let objectPosition = "object-center";
             if (isWatchPhoto) objectPosition = "object-[80%_60%]";
             else if (isStorePhoto) objectPosition = "object-[60%_30%]";

             return (
               <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
                  key={index} 
                  className={`relative rounded-xl overflow-hidden cursor-pointer group shadow-lg bg-black/20 ${spanClass}`}
               >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-4">
                    <span className="text-white font-medium text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Ver momento</span>
                  </div>
                  <Image 
                    src={`/images/processo/${foto}`} 
                    alt={`Processo de compra e instalação ${index + 1}`} 
                    fill 
                    className={`object-cover group-hover:scale-105 transition-transform duration-700 ease-out ${objectPosition}`} 
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
               </motion.div>
             )
           })}
        </div>
      </section>

      {/* Nossa História - Texto Emotivo */}
      <section className="px-6 py-20 max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 bg-black/50 border-primary/20 relative overflow-hidden"
        >
          {/* Detalhe de fundo */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px]" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 blur-[50px]" />

          <h3 className="text-3xl font-bold mb-8 text-primary">Nossa Trajetória</h3>
          
          <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed font-light text-left md:text-justify">
            <p>
              Nossa igreja sempre desejou muito ter um equipamento de som digno da grandeza do que vivemos aqui. Já passamos por muitos desafios no passado — a ponto de, durante grandes eventos e cultos importantes, o som parar completamente pelo fato de estar muito antigo e desgastado. Sempre fez muita falta um equipamento de qualidade sonora que acompanhasse o mover que experimentamos.
            </p>
            <p>
              Nós somos completamente apaixonados pela obra de Deus e vivemos isso intensamente todos os dias. Todo esse movimento lindo que Ele tem nos proporcionado tem nos impulsionado a crescer, amadurecer e investir em todas as áreas do nosso ministério, para que possamos oferecer sempre o nosso melhor.
            </p>
            <p>
              E os projetos não param por aqui: ainda temos o fator acústico, onde em breve trataremos o ambiente da igreja para receber perfeitamente esse som de qualidade que hoje conquistamos, tudo para a glória de Deus!
            </p>
            <div className="pt-6 border-t border-white/10 mt-8 text-center">
              <p className="text-xl font-medium text-white mb-4">
                Queremos deixar um convite especial para você que está lendo!
              </p>
              <p className="text-primary font-semibold">
                Venha nos fazer uma visita e testemunhe de perto o quanto evoluímos e estamos evoluindo. Será uma alegria ter você cultuando a Deus aqui conosco.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 border-t border-white/5 pt-12 pb-8 px-6 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start gap-4">
             <div className="w-20 h-20 md:w-24 md:h-24 relative bg-transparent overflow-hidden rounded-full border border-white/10">
               <Image src="/images/perfil vetor preto pnng.jpg" alt="Logo AD Comunidade Getsêmani" fill className="object-cover" />
             </div>
             <div>
               <h4 className="font-bold text-white text-lg">AD Comunidade Getsêmani</h4>
               <p className="text-gray-500 text-sm mt-1">CNPJ: 65.027.942/0001-09</p>
             </div>
          </div>

          <div className="flex flex-col items-center md:items-start gap-3">
             <h4 className="font-bold text-white mb-2">Contato & Visita</h4>
             <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm">
               <MessageCircle size={16} /> (21) 97307-9220
             </a>
             <div className="flex items-start gap-2 text-gray-400 text-sm text-left">
               <MapPin size={16} className="mt-1 flex-shrink-0" /> 
               <span>Venha nos visitar e conhecer nossa nova estrutura!</span>
             </div>
          </div>

          <div className="flex flex-col items-center md:items-start gap-3">
             <h4 className="font-bold text-white mb-2">Nossas Redes Sociais</h4>
             <div className="flex gap-4">
               <a href="https://instagram.com/juventudechamavivaa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-all">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
               </a>
               <a href="https://youtube.com/@comunidadegetsemani" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-all">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
               </a>
               <a href="https://www.facebook.com/adcg.oficial.ig" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-all">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
               </a>
             </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/10 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} AD Comunidade Getsêmani. Todos os direitos reservados.</p>
          <p className="mt-1">"Juntos por uma causa"</p>
        </div>
      </footer>
    </main>
  );
}
