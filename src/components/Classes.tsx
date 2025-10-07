import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Users2, Zap, Clock } from "lucide-react";

const Classes = () => {
  const classes = [
    {
      icon: Sparkles,
      title: "Iniciante",
      description: "Perfeito para quem está começando no beach tennis",
      features: ["Fundamentos básicos", "Técnicas de saque e recepção", "Regras do jogo"],
      color: "from-primary to-accent"
    },
    {
      icon: Zap,
      title: "Intermediário",
      description: "Aprimore suas técnicas e estratégias de jogo",
      features: ["Táticas avançadas", "Jogo de duplas", "Condicionamento físico"],
      color: "from-secondary to-primary"
    },
    {
      icon: Users2,
      title: "Avançado",
      description: "Para jogadores experientes que buscam competir",
      features: ["Treinos intensivos", "Preparação para torneios", "Análise de jogo"],
      color: "from-accent to-secondary"
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Nossas <span className="gradient-text">Modalidades</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos aulas para todos os níveis, do iniciante ao profissional. 
            Encontre a turma perfeita para você!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {classes.map((classItem, index) => (
            <Card 
              key={index}
              className="p-8 hover-lift bg-card border-border/50 hover:border-primary/50 transition-all group relative overflow-hidden"
            >
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${classItem.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`}></div>
              
              <div className="relative">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${classItem.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <classItem.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{classItem.title}</h3>
                <p className="text-muted-foreground mb-6">{classItem.description}</p>
                
                <ul className="space-y-3">
                  {classItem.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="p-6 bg-card flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Horários Flexíveis</h4>
              <p className="text-sm text-muted-foreground">Aulas de manhã, tarde e noite</p>
            </div>
          </Card>
          
          <Card className="p-6 bg-card flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
              <Users2 className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Turmas Reduzidas</h4>
              <p className="text-sm text-muted-foreground">Atenção personalizada para cada aluno</p>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="hero"
            onClick={scrollToContact}
            className="px-8 py-6"
          >
            Agende sua Aula Experimental
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Classes;
