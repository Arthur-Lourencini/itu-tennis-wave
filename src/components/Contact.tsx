import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Localização",
      content: "Itu - SP",
      action: "Ver no Mapa"
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 9999-9999",
      action: "Ligar Agora"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contato@beachtennisitu.com.br",
      action: "Enviar Email"
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: "@beachtennisitu",
      action: "Seguir"
    }
  ];

  const schedule = [
    { day: "Segunda a Sexta", hours: "06:00 - 22:00" },
    { day: "Sábado", hours: "08:00 - 18:00" },
    { day: "Domingo", hours: "08:00 - 14:00" }
  ];

  return (
    <section id="contato" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos prontos para receber você! Agende sua aula experimental gratuita.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Cards */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="p-6 hover-lift bg-card border-border/50 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    <p className="text-muted-foreground mb-3">{info.content}</p>
                    <Button variant="link" className="p-0 h-auto text-primary">
                      {info.action} →
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Schedule */}
          <div>
            <Card className="p-8 bg-gradient-to-br from-primary to-accent text-white h-full">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Horário de Funcionamento</h3>
              </div>
              
              <div className="space-y-6">
                {schedule.map((item, index) => (
                  <div key={index} className="flex justify-between items-center pb-4 border-b border-white/20 last:border-0">
                    <span className="font-medium text-lg">{item.day}</span>
                    <span className="text-lg">{item.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm opacity-90 mb-4">
                  Aulas experimentais gratuitas para novos alunos!
                </p>
                <Button 
                  variant="secondary"
                  size="lg"
                  className="w-full"
                >
                  Agendar Aula Experimental
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
