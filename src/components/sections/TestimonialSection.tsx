import { Star, Quote, CircleCheck as CheckCircle, TrendingUp } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      course: "Medicina - USP",
      rating: 5,
      text: "Consegui 980 pontos no ENEM usando o Pack! A IA me ajudou muito com redação e os resumos são perfeitos para revisão.",
      image: "https://i.postimg.cc/J4kcWDZ4/converted-07d42496eb61d2a4762d1e523f67014a.webp",
      highlight: true
    },
    {
      name: "João Santos",
      course: "Engenharia - UFMG",
      rating: 5,
      text: "Os mapas mentais salvaram minha vida! Consegui organizar todo o conteúdo e passei em 1º lugar no meu curso.",
      image: "https://i.postimg.cc/zGYwDzFq/converted-217ca01824921c24740281d72b893f60.webp",
      highlight: false
    },
    {
      name: "Ana Costa",
      course: "Direito - UERJ",
      rating: 5,
      text: "A correção de redação da IA é incrível. Melhorei de 600 para 940 pontos em apenas 2 meses!",
      image: "https://i.postimg.cc/nhfKVFGV/converted-26edc19b1dff12c0a4df3a6b05f5e7b1.webp",
      highlight: true
    },
    {
      name: "Pedro Lima",
      course: "Psicologia - UnB",
      rating: 5,
      text: "Estudei apenas 3 meses com o material e passei! O plano de estudos personalizado fez toda a diferença.",
      image: "https://i.postimg.cc/dVcRQsjq/converted-8d0885fb6a07623d9b4e31ce5b7d1914.webp",
      highlight: false
    },
    {
      name: "Juliana Oliveira",
      course: "Arquitetura - UFRJ",
      rating: 5,
      text: "Melhor investimento que fiz! Material organizado, IA responsiva e suporte excelente. Recomendo 100%!",
      image: "https://i.postimg.cc/Dw3QfvPy/converted-c3c947d89ac180f15d1a148ea8035da5.webp",
      highlight: false
    },
    {
      name: "Lucas Ferreira",
      course: "Educação Física - UNICAMP",
      rating: 5,
      text: "Consegui conciliar trabalho e estudos com o cronograma da IA. Aprovado na minha primeira tentativa!",
      image: "https://i.postimg.cc/XY6KNjkZ/converted-e8c457e9d3102067adb21180e51cede8.webp",
      highlight: true
    }
  ];

  const stats = [
    { number: "15.000+", label: "Aprovados", icon: "🎓" },
    { number: "98%", label: "Satisfação", icon: "⭐" },
    { number: "4.9/5", label: "Avaliação", icon: "📊" },
    { number: "24/7", label: "Suporte", icon: "🤝" }
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 font-semibold text-sm mb-6">
              <CheckCircle className="w-4 h-4" />
              Resultados Comprovados
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Veja o que Nossos Aprovados Estão Falando
              <br />
              <span className="text-accent">sobre o ENEM IA 360!</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Histórias reais de estudantes que transformaram seus estudos e conquistaram suas vagas dos sonhos com a nossa IA
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-background/80 border border-accent/10 rounded-2xl animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-accent mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-background border rounded-2xl p-6 transition-all duration-300 animate-fade-in relative ${
                  testimonial.highlight 
                    ? 'border-accent/40 shadow-[0_0_20px_hsl(var(--accent)/0.1)]' 
                    : 'border-accent/20 hover:border-accent/30'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Highlight Badge */}
                {testimonial.highlight && (
                  <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded-full">
                    ⭐ DESTAQUE
                  </div>
                )}

                {/* Quote Icon */}
                <Quote className="w-6 h-6 text-accent/40 mb-3" />

                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground text-sm leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-accent/20"
                  />
                  <div>
                    <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-xs text-accent">{testimonial.course}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Proof CTA */}
          <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              🚀 Junte-se a mais de 15.000 aprovados!
            </h3>
            
            <p className="text-lg text-muted-foreground mb-6">
              Cada dia que passa, mais estudantes conquistam suas vagas usando nosso método. 
              <br />
              <strong className="text-accent">Não deixe para depois, sua vaga está esperando!</strong>
            </p>

            <div className="flex justify-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Método Testado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Resultados Garantidos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Suporte Total</span>
              </div>
            </div>

            {/* Social Proof Footer */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/10 border border-green-500/20 rounded-full text-green-400">
              <TrendingUp className="w-4 h-4" />
              <span className="font-semibold">+2.847 alunos compraram nas últimas 48h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;