import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-gradient-maroon text-secondary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold text-accent">
              ModakMitra
            </h3>
            <p className="text-secondary-foreground/80">
              Your spiritual companion for authentic Ganeshotsav celebrations
            </p>
            <div className="text-3xl">🕉️</div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">Aartis</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">Recipes</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">Festival Guide</a></li>
            </ul>
          </div>

          {/* Devotional */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Devotional</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">Daily Prayers</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">Festival Calendar</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">Mantras</a></li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Community</h4>
            <ul className="space-y-2">
              
              
             
              <li><a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-secondary-foreground/70">
            © 2024 ModakMitra🙏
          </p>
          <div className="mt-4 text-2xl space-x-4">
            <span>गणपति बप्पा मोरया</span>
          </div>
        </div>
      </div>
    </footer>
  );
};