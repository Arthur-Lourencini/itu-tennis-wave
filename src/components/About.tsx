import { Card } from "@/components/ui/card";
import { Trophy, Users, Target, Heart } from "lucide-react";
import playersImage from "@/assets/players-action.jpg";

const About = () => {
  const features = [
    {
      icon: Trophy,
      title: "Excelência",
      description: "Estrutura profissional com quadras de alta qualidade e cobertas"
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Ambiente acolhedor para todas as idades"
    },
    {
      icon: Target,
      title: "Resultados",
      description: "Metodologia italiana por Doriano Beccaccioli feita para sua evolução"
    },
    {
      icon: Heart,
      title: "Paixão",
      description: "Time dedicado e apaixonado pelo esporte"
    }
  ];

  return (
    <section id="sobre" className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
            <img 
              src={playersImage}
              alt="Jogadores de Beach Tennis"
              className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover hover-lift"
            />
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Sobre a <span className="gradient-text">Academia</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Academia ZUMA é a principal academia de beach tennis da região. 
                Oferecemos aulas para iniciantes e avançados, com professores qualificados 
                e infraestrutura completa.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nosso objetivo é proporcionar uma experiência única, combinando esporte, 
                diversão e bem-estar em um ambiente profissional e acolhedor.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <Card 
                  key={index}
                  className="p-6 hover-lift bg-card border-border/50 hover:border-primary/50 transition-colors"
                >
                  <feature.icon className="w-10 h-10 text-primary mb-3" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
