import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import diyaIcon from "@/assets/diya-icon.jpg";
import modakIcon from "@/assets/modak-icon.jpg";
import omIcon from "@/assets/om-icon.jpg";

const tiles = [
  {
    id: 1,
    title: "Aartis",
    titleHindi: "आरती",
    description: "Sacred hymns and prayers for Lord Ganesha",
    icon: diyaIcon,
    items: ["Sukhkarta Dukhharta", "Ganesh Aarti", "Ganpati Atharvashirsha"],
    buttonText: "Explore Aartis",
    variant: "festival" as const,
  },
  {
    id: 2,
    title: "Festival Dishes",
    titleHindi: "पारंपरिक पकवान", 
    description: "Traditional recipes for Ganeshotsav celebrations",
    icon: modakIcon,
    items: ["Modak", "Puran Poli", "Rava Ladoo", "Sundal"],
    buttonText: "View Recipes",
    variant: "divine" as const,
  },
  {
    id: 3,
    title: "Festival Guide",
    titleHindi: "उत्सव मार्गदर्शन",
    description: "Daily rituals, puja timings, and visarjan info",
    icon: omIcon,
    items: ["Daily Rituals", "Puja Timings", "Visarjan Guide"],
    buttonText: "Learn More",
    variant: "floating" as const,
  },
];

export const QuickAccessTiles = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary mb-4">
            Explore Traditions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the sacred world of Ganeshotsav through authentic practices
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiles.map((tile) => (
            <Card key={tile.id} variant={tile.variant} className="group cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-warm">
                  <img 
                    src={tile.icon} 
                    alt={tile.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-2xl font-display text-primary group-hover:text-accent transition-colors">
                  {tile.title}
                </CardTitle>
                <div className="text-lg font-display text-secondary">
                  {tile.titleHindi}
                </div>
                <CardDescription className="text-muted-foreground">
                  {tile.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="text-center space-y-4">
                <div className="space-y-2">
                  {tile.items.map((item, index) => (
                    <div key={index} className="text-sm text-muted-foreground bg-muted/50 rounded-lg px-3 py-2">
                      {item}
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="festival" 
                  className="w-full"
                  onClick={() => console.log(`Navigate to ${tile.title}`)}
                >
                  {tile.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};