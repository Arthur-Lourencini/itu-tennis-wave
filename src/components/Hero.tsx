import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-beach-tennis.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-foreground/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-background">Itu - SP</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-background leading-tight">
            Academia
            <span className="block gradient-text mt-2">ZUMA</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-background/90 max-w-2xl mx-auto font-light">
            Venha descobrir a energia do beach tennis! Aulas para todos os níveis em um ambiente profissional e acolhedor.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              variant="hero"
              onClick={scrollToContact}
              className="text-lg px-8 py-6"
            >
              Agende sua Aula
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-6"
            >
              Conheça a Academia
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-2 bg-background/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
