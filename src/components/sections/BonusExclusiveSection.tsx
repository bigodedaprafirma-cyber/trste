import { Gift, BookOpen, Users, Calendar, Brain, Sparkles } from "lucide-react";

const BonusExclusiveSection = () => {
  const bonuses = [
    {
      icon: <BookOpen className="w-8 h-8 text-accent" />,
      title: "Guia Completo de Redação Nota 1000",
      value: "R$ 297",
      description: "Passo a passo para escrever redações que conquistam a nota máxima, com modelos e correções da IA"
    },
    {
      icon: <Calendar className="w-8 h-8 text-accent" />,
      title: "Planner de Estudos Inteligente",
      value: "R$ 197",
      description: "Cronograma personalizado que se adapta ao seu ritmo e metas, com lembretes automáticos"
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Comunidade Exclusiva VIP",
      value: "R$ 497",
      description: "Grupo privado com outros estudantes, monitores e acesso direto aos criadores do método",
      highlight: true
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "Simulados Personalizados",
      value: "R$ 397",
      description: "Provas adaptativas que focam nas suas dificuldades, com correção instantânea da IA"
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "Aulas Express de Revisão",
      value: "R$ 597",
      description: "50+ videoaulas de 5-10 minutos com os tópicos mais cobrados no ENEM"
    },
    {
      icon: <Gift className="w-8 h-8 text-accent" />,
      title: "Kit Motivacional Completo",
      value: "R$ 97",
      description: "Wallpapers, frases motivacionais e técnicas de produtividade para manter o foco"
    }
  ];

  const totalValue = bonuses.reduce((acc, bonus) => {
    return acc + parseInt(bonus.value.replace('R$ ', ''));
  }, 0);

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-yellow-600/10 border border-yellow-500/30 rounded-full text-yellow-400 font-bold text-sm mb-6 animate-glow-pulse">
              <Gift className="w-5 h-5" />
              BÔNUS EXCLUSIVOS POR TEMPO LIMITADO
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              E Não Para Por Aí! Receba
              <br />
              <span className="text-accent">Bônus Exclusivos para Turbinar Sua Aprovação!</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Além do Pack completo, você leva todos estes materiais de presente, 
              por tempo limitado, ao escolher o Pacote Premium:
            </p>
          </div>

          {/* Bonus Image */}
          <div className="text-center mb-12">
            <div className="relative max-w-md mx-auto">
              <img 
                src="https://i.postimg.cc/gkfj6p4S/presente.webp" 
                alt="Bônus Exclusivos ENEM IA 360" 
                className="w-full h-auto rounded-2xl shadow-[0_0_30px_hsl(var(--accent)/0.2)]"
              />
            </div>
          </div>

          {/* Bonus Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {bonuses.map((bonus, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-card/60 to-card/30 border rounded-2xl p-6 transition-all duration-300 animate-fade-in relative overflow-hidden ${
                  bonus.highlight 
                    ? 'border-accent/40 shadow-[0_0_20px_hsl(var(--accent)/0.2)]' 
                    : 'border-accent/20 hover:border-accent/30 hover:shadow-[0_0_15px_hsl(var(--accent)/0.1)]'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Highlight Badge */}
                {bonus.highlight && (
                  <div className="absolute -top-1 -right-1 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
                    MAIS VALIOSO
                  </div>
                )}

                {/* Icon and Value */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${bonus.highlight ? 'bg-accent/20' : 'bg-accent/10'}`}>
                    {bonus.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground line-through">
                      {bonus.value}
                    </div>
                    <div className="text-lg font-bold text-green-400">
                      GRÁTIS
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {bonus.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {bonus.description}
                </p>

                {/* Bottom highlight for featured bonus */}
                {bonus.highlight && (
                  <div className="mt-4 p-2 bg-accent/10 rounded-lg text-center">
                    <span className="text-xs text-accent font-semibold">
                      ⭐ BÔNUS MAIS VALIOSO
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Total Value Highlight */}
          <div className="bg-gradient-to-br from-accent/20 to-primary/20 border-2 border-accent/30 rounded-3xl p-8 text-center shadow-[0_0_40px_hsl(var(--accent)/0.2)]">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                💰 Valor Total dos Bônus Exclusivos
              </h3>
              
              <div className="flex items-center justify-center gap-8 mb-6">
                <div>
                  <div className="text-lg text-muted-foreground">Valor Individual:</div>
                  <div className="text-3xl font-bold text-muted-foreground line-through">
                    R$ {totalValue.toLocaleString('pt-BR')}
                  </div>
                </div>
                
                <div className="text-4xl text-accent">→</div>
                
                <div>
                  <div className="text-lg text-accent">Você paga:</div>
                  <div className="text-4xl font-bold text-green-400">
                    R$ 0,00
                  </div>
                </div>
              </div>

              <button className="bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent text-accent-foreground font-bold py-6 px-12 rounded-xl text-xl transition-all duration-300 shadow-[0_0_30px_hsl(var(--accent)/0.4)] hover:shadow-[0_0_40px_hsl(var(--accent)/0.6)] animate-pulse">
                🎁 GARANTA SEUS BÔNUS E SUA APROVAÇÃO AGORA!
              </button>

              <p className="text-sm text-red-400 mt-4 font-semibold">
                ⚠️ Todos os bônus são seus de presente quando você adquire o Pack ENEM 360 hoje!
                <br />
                Oferta limitada - Bônus podem ser removidos a qualquer momento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusExclusiveSection;