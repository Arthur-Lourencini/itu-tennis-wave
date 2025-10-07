import heroImage from "@/assets/hero-beach-tennis.jpg";
import playersImage from "@/assets/players-action.jpg";
import equipmentImage from "@/assets/equipment.jpg";

const Gallery = () => {
  const images = [
    { src: heroImage, alt: "Quadra de Beach Tennis" },
    { src: playersImage, alt: "Jogadores em ação" },
    { src: equipmentImage, alt: "Equipamentos profissionais" }
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Nossa <span className="gradient-text">Estrutura</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça nossa academia e veja onde a magia acontece
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-2xl aspect-square"
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-background font-semibold p-6">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
