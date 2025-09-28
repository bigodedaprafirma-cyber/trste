import { useState } from "react";
import { ChevronLeft, ChevronRight, Brain, BookOpen, PenTool, Target } from "lucide-react";

// Import resume images
import eletrostatica from "https://i.postimg.cc/8zkL40Db/1-731x1024.jpg";
import poluicaoAmbiental from "https://i.postimg.cc/fTfxxN4L/10-731x1024.jpg";
import equilibrioQuimico from "https://i.postimg.cc/LswfH4Py/2-731x1024.jpg";
import ondas from "https://i.postimg.cc/9frZ5wDR/3-731x1024.jpg";
import circulatorio from "https://i.postimg.cc/rwhxPNw2/4-732x1024.jpg";
import genitalFeminino from "https://i.postimg.cc/50zzjcqf/5-731x1024.jpg";
import mendel from "https://i.postimg.cc/PJkww62Y/6-724x1024.jpg";
import estadosUnidos from "https://i.postimg.cc/8khWSSzH/7-731x1024.jpg";
import periodoRegencial from "https://i.postimg.cc/hvb7b95w/8-731x1024.jpg";
import urbanizacaoBrasil from "https://i.postimg.cc/L62P4bqM/9-731x1024.jpg";

// Import mind map images
import cinematica from "https://i.postimg.cc/QNkqVqCc/1f8c7cbb700c047bb022b7988097806d-compressed.webp";
import ligacoesQuimicas from "https://i.postimg.cc/QM2qK4cJ/2980536d7965cfd3dc882e8019690cb3-compressed.webp";
import figurasLinguagem from "https://i.postimg.cc/BQ4MCVkh/435a5d91159383bb22f7386d20017977-compressed.webp";
import filosofiaContemporanea from "https://i.postimg.cc/y8NjMSVc/5164636fa0123862ac1eb93eaaad1ad2-compressed.webp";
import reproducao from "https://i.postimg.cc/MHxbdnPc/8c3c427c36202c85ceecb5c4b008c893-compressed.webp";
import persas from "https://i.postimg.cc/VNrR6Q0N/ca14a3cc-6396-47f1-aba5-0395a02fa3e9-1.webp";
import equacaoHubble from "https://i.postimg.cc/L80D26X7/f052dd69-6742-4f2e-9dfd-9c55b9eaff57-1-compressed.webp";

const ProductMockupsSection = () => {
  const resumos = [
    { img: eletrostatica, title: "Eletrostática" },
    { img: poluicaoAmbiental, title: "Poluição Ambiental" },
    { img: equilibrioQuimico, title: "Equilíbrio Químico" },
    { img: ondas, title: "Ondas" },
    { img: circulatorio, title: "Sistema Circulatório" },
    { img: genitalFeminino, title: "Sistema Genital Feminino" },
    { img: mendel, title: "Primeira Lei de Mendel" },
    { img: estadosUnidos, title: "Estados Unidos Séc. XIX" },
    { img: periodoRegencial, title: "Período Regencial" },
    { img: urbanizacaoBrasil, title: "Urbanização do Brasil" },
  ];

  const mapasMentais = [
    { img: cinematica, title: "Cinemática" },
    { img: ligacoesQuimicas, title: "Ligações Químicas" },
    { img: figurasLinguagem, title: "Figuras de Linguagem" },
    { img: filosofiaContemporanea, title: "Filosofia Contemporânea" },
    { img: reproducao, title: "Reprodução" },
    { img: persas, title: "Persas" },
    { img: equacaoHubble, title: "Equação de Hubble" },
  ];

  const [currentResumo, setCurrentResumo] = useState(0);
  const [currentMapa, setCurrentMapa] = useState(0);

  const nextResumo = () => {
    setCurrentResumo((prev) => (prev + 1) % resumos.length);
  };

  const prevResumo = () => {
    setCurrentResumo((prev) => (prev - 1 + resumos.length) % resumos.length);
  };

  const nextMapa = () => {
    setCurrentMapa((prev) => (prev + 1) % mapasMentais.length);
  };

  const prevMapa = () => {
    setCurrentMapa((prev) => (prev - 1 + mapasMentais.length) % mapasMentais.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-card/20 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Veja o ENEM IA 360 em Ação:
              <br />
              <span className="text-accent">Sua Ferramenta Definitiva para a Aprovação!</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore a interface intuitiva e os recursos poderosos que transformarão seus estudos
            </p>
          </div>

          {/* Resumos Estratégicos Carousel */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                📚 Resumos Estratégicos que Realmente Funcionam!
              </h3>
              <p className="text-muted-foreground">
                Navegue por exemplos de nossos resumos otimizados pela IA, focados nos temas mais recorrentes do ENEM
              </p>
            </div>

            <div className="bg-card/30 border border-accent/20 rounded-3xl p-8 backdrop-blur-sm shadow-[0_0_30px_hsl(var(--accent)/0.1)]">
              <div className="relative">
                <div className="bg-background/80 border border-accent/10 rounded-2xl p-8 min-h-[500px] flex flex-col items-center justify-center">
                  <div className="max-w-md mx-auto">
                    <img 
                      src={resumos[currentResumo].img} 
                      alt={`Resumo de ${resumos[currentResumo].title}`}
                      className="w-full h-auto rounded-xl shadow-lg border border-accent/20"
                    />
                    <h4 className="text-xl font-bold text-foreground mt-4 text-center">
                      {resumos[currentResumo].title}
                    </h4>
                  </div>
                </div>

                {/* Navigation Controls */}
                <button
                  onClick={prevResumo}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-accent/20 hover:bg-accent/30 border border-accent/30 rounded-full p-3 transition-all"
                >
                  <ChevronLeft className="w-6 h-6 text-accent" />
                </button>
                
                <button
                  onClick={nextResumo}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-accent/20 hover:bg-accent/30 border border-accent/30 rounded-full p-3 transition-all"
                >
                  <ChevronRight className="w-6 h-6 text-accent" />
                </button>
              </div>

              {/* Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {resumos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentResumo(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentResumo 
                        ? 'w-8 bg-accent' 
                        : 'bg-accent/30 hover:bg-accent/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mapas Mentais Carousel */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                🧠 Mapas Mentais Interativos para Fixar o Conteúdo!
              </h3>
              <p className="text-muted-foreground">
                Visualize a complexidade dos temas do ENEM de forma simplificada e interativa
              </p>
            </div>

            <div className="bg-card/30 border border-accent/20 rounded-3xl p-8 backdrop-blur-sm shadow-[0_0_30px_hsl(var(--accent)/0.1)]">
              <div className="relative">
                <div className="bg-background/80 border border-accent/10 rounded-2xl p-8 min-h-[500px] flex flex-col items-center justify-center">
                  <div className="max-w-md mx-auto">
                    <img 
                      src={mapasMentais[currentMapa].img} 
                      alt={`Mapa Mental de ${mapasMentais[currentMapa].title}`}
                      className="w-full h-auto rounded-xl shadow-lg border border-accent/20"
                    />
                    <h4 className="text-xl font-bold text-foreground mt-4 text-center">
                      {mapasMentais[currentMapa].title}
                    </h4>
                  </div>
                </div>

                {/* Navigation Controls */}
                <button
                  onClick={prevMapa}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-accent/20 hover:bg-accent/30 border border-accent/30 rounded-full p-3 transition-all"
                >
                  <ChevronLeft className="w-6 h-6 text-accent" />
                </button>
                
                <button
                  onClick={nextMapa}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-accent/20 hover:bg-accent/30 border border-accent/30 rounded-full p-3 transition-all"
                >
                  <ChevronRight className="w-6 h-6 text-accent" />
                </button>
              </div>

              {/* Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {mapasMentais.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMapa(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentMapa 
                        ? 'w-8 bg-accent' 
                        : 'bg-accent/30 hover:bg-accent/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* AI Features Demo */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background border border-accent/20 rounded-2xl p-8 text-center">
              <PenTool className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">
                IA Corrigindo Redação
              </h3>
              <p className="text-muted-foreground mb-4">
                Feedback detalhado e instantâneo em cada parágrafo
              </p>
              <div className="text-6xl mb-4">🤖✍️</div>
              <p className="text-sm text-accent">
                Interface da IA analisando estrutura, coesão, gramática e argumentação
              </p>
            </div>

            <div className="bg-background border border-accent/20 rounded-2xl p-8 text-center">
              <Target className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">
                Plano de Estudos Personalizado
              </h3>
              <p className="text-muted-foreground mb-4">
                Cronograma adaptado às suas necessidades
              </p>
              <div className="text-6xl mb-4">📅🎯</div>
              <p className="text-sm text-accent">
                Sistema inteligente que prioriza suas lacunas de conhecimento
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductMockupsSection;