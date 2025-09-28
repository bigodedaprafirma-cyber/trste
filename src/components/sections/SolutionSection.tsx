import { Brain, Zap, Target, Calendar, BookOpen, PenTool } from "lucide-react";

const SolutionSection = () => {
  const solutions = [
    {
      icon: <Calendar className="w-10 h-10 text-accent" />,
      problem: "Perde tempo organizando estudos?",
      solution: "Cronogramas Inteligentes",
      description: "A IA monta seu plano de estudos perfeito em segundos, priorizando suas dificuldades e otimizando seu tempo para o que realmente importa!"
    },
    {
      icon: <Brain className="w-10 h-10 text-accent" />,
      problem: "Material desorganizado e disperso?",
      solution: "Resumos Estratégicos",
      description: "+500 resumos organizados por matéria, com mapas mentais interativos e exercícios direcionados para uma revisão rápida e eficaz."
    },
    {
      icon: <PenTool className="w-10 h-10 text-accent" />,
      problem: "Redação sempre com nota baixa?",
      solution: "Corretor de IA Personalizado",
      description: "Feedback instantâneo e detalhado, com sugestões específicas para melhorar sua nota na redação e alcançar a pontuação máxima."
    },
    {
      icon: <Target className="w-10 h-10 text-accent" />,
      problem: "Não sabe o que estudar primeiro?",
      solution: "Diagnóstico Inteligente",
      description: "A IA identifica suas lacunas de conhecimento e cria um roteiro personalizado para sua aprovação, focando em suas maiores necessidades."
    },
    {
      icon: <Zap className="w-10 h-10 text-accent" />,
      problem: "Dúvidas que não consegue resolver?",
      solution: "Tutor 24/7 Disponível",
      description: "Tire dúvidas a qualquer hora, receba explicações detalhadas e exemplos práticos, como ter um professor particular sempre ao seu lado."
    },
    {
      icon: <BookOpen className="w-10 h-10 text-accent" />,
      problem: "Questões sem explicação adequada?",
      solution: "Banco de Questões Comentadas",
      description: "Milhares de questões do ENEM com explicações passo a passo da IA, para você entender a lógica de cada resposta e fixar o conteúdo."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Descubra como o ENEM IA 360 otimiza sua rotina e garante sua vaga!
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada desafio tem uma solução inteligente. Veja como nossa IA revoluciona seus estudos e te leva à aprovação.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="bg-background/80 border border-accent/20 rounded-2xl p-6 backdrop-blur-sm animate-fade-in hover:border-accent/40 hover:shadow-[0_0_20px_hsl(var(--accent)/0.1)] transition-all duration-300"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-4">
                  {solution.icon}
                </div>

                {/* Problem */}
                <div className="mb-3">
                  <p className="text-sm text-red-400 font-medium mb-1">❌ Problema:</p>
                  <p className="text-sm text-muted-foreground">{solution.problem}</p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <p className="text-sm text-green-400 font-medium mb-1">✅ Solução:</p>
                  <h3 className="text-lg font-bold text-accent mb-2">{solution.solution}</h3>
                  <p className="text-sm text-foreground">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Student Happy Image */}
          <div className="text-center mt-16">
            <div className="relative max-w-2xl mx-auto mb-8">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_0_40px_hsl(var(--accent)/0.2)]">
                <img 
                  src="https://i.postimg.cc/T38j2VXt/estudantesorrindo.webp" 
                  alt="Estudante feliz com os resultados" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                🎯 Resultado Garantido: <span className="text-accent">Sua Aprovação!</span>
              </h3>
              <p className="text-muted-foreground text-lg">
                Com metodologia comprovada e tecnologia de ponta, você terá tudo que precisa para conquistar sua vaga.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;