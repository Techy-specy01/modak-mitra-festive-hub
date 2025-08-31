import { Button } from "@/components/ui/button";
import ganeshaHero from "@/assets/ganesha-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-festival overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-50 left-100 w-32 h-32 rounded-full bg-accent animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-primary-glow animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full bg-secondary animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight">
                ModakMitra
              </h1>
              <div className="text-2xl lg:text-3xl font-display text-primary-foreground/90">
                मोदकमित्र
              </div>
              <p className="text-xl lg:text-2xl text-primary-foreground/80 max-w-2xl">
                Celebrate Ganeshotsav with devotion & tradition
              </p>
              <p className="text-lg text-primary-foreground/70 max-w-xl">
                Your spiritual companion for authentic aartis, traditional recipes, and festival wisdom
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="divine" size="lg" className="text-lg px-8 py-6">
                🪔 Read Aarti
              </Button>
              <Button variant="golden" size="lg" className="text-lg px-8 py-6">
                🍲 Cook Dishes
              </Button>
              
            </div>
          </div>

          {/* Ganesha Illustration */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-golden rounded-full blur-3xl opacity-20 animate-glow"></div>
              <img 
                src={ganeshaHero} 
                alt="Lord Ganesha - ModakMitra" 
                className="relative z-10 w-full max-w-lg rounded-3xl shadow-divine animate-float"
              />
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};