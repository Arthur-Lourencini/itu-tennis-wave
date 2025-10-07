import { Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="font-bold text-xl">Academia Zuma</span>
            </div>
            <p className="text-background/70 text-sm">
              A melhor academia de beach tennis em Itu. 
              Venha fazer parte da nossa comunidade!
            </p>
            <div className="text-background/70 text-sm space-y-1">
              <p>Rua Gerson Mendes - Itu, SP</p>
              <p>Tel: +55 11 91033-4425</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#sobre" className="text-background/70 hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#modalidades" className="text-background/70 hover:text-primary transition-colors">
                  Modalidades
                </a>
              </li>
              <li>
                <a href="#contato" className="text-background/70 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/academiazuma" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary transition-colors flex items-center justify-center"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-background/70 text-sm mt-4">@academiazuma</p>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 text-center text-sm text-background/70">
          <p>© {currentYear} Academia Zuma. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
