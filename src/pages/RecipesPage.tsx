import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, Users, ChefHat } from "lucide-react";
import { useNavigate } from "react-router-dom";

const recipes = [
  {
    id: 1,
    name: "Modak",
    nameHindi: "मोदक",
    description: "Lord Ganesha's favorite sweet - steamed rice flour dumplings with jaggery filling",
    prepTime: "45 mins",
    servings: "12 pieces",
    difficulty: "Medium",
    significance: "The divine favorite offering to Lord Ganesha",
    ingredients: [
      "2 cups rice flour",
      "1 cup jaggery (gur)",
      "1 cup fresh coconut (grated)",
      "1 tsp ghee",
      "1/2 tsp cardamom powder",
      "Pinch of salt"
    ],
    instructions: [
      "Heat jaggery in a pan until it melts completely",
      "Add grated coconut and cardamom powder, cook until thick",
      "Let the filling cool completely",
      "Boil water with salt and ghee, add rice flour gradually",
      "Knead into smooth dough when cool enough to handle",
      "Make small portions, flatten and add filling",
      "Shape into dumplings and steam for 10-12 minutes",
      "Offer to Lord Ganesha with devotion"
    ],
    tips: "Use fresh coconut for best taste. The dough should be soft but not sticky."
  },
  {
    id: 2,
    name: "Puran Poli",
    nameHindi: "पुरण पोली",
    description: "Sweet flatbread stuffed with jaggery and lentil filling",
    prepTime: "60 mins",
    servings: "8 pieces",
    difficulty: "Medium",
    significance: "Traditional Maharashtrian festival sweet",
    ingredients: [
      "2 cups all-purpose flour",
      "1 cup chana dal (split Bengal gram)",
      "1 cup jaggery",
      "1/2 tsp cardamom powder",
      "2 tbsp ghee",
      "Pinch of salt",
      "Oil for cooking"
    ],
    instructions: [
      "Pressure cook chana dal until soft and mash well",
      "Cook mashed dal with jaggery until thick paste forms",
      "Add cardamom powder and let it cool",
      "Make dough with flour, ghee, salt and water",
      "Roll small portions, add filling and seal edges",
      "Roll again gently and cook on tawa with ghee",
      "Serve hot with ghee"
    ],
    tips: "The filling should be completely dry before using. Roll gently to avoid breaking."
  },
  {
    id: 3,
    name: "Rava Ladoo",
    nameHindi: "रवा लड्डू",
    description: "Sweet spherical treats made with semolina, ghee and sugar",
    prepTime: "30 mins",
    servings: "15 ladoos",
    difficulty: "Easy",
    significance: "Symbol of happiness and prosperity",
    ingredients: [
      "2 cups semolina (rava/sooji)",
      "1 cup powdered sugar",
      "1/2 cup ghee",
      "1/4 cup chopped almonds",
      "1/4 cup raisins",
      "1/2 tsp cardamom powder",
      "2-3 tbsp milk"
    ],
    instructions: [
      "Dry roast semolina until golden and aromatic",
      "Heat ghee and fry almonds and raisins",
      "Mix roasted rava, fried nuts, sugar and cardamom",
      "Add warm milk gradually to bind the mixture",
      "When cool enough to handle, make round ladoos",
      "Let them set for 30 minutes before serving"
    ],
    tips: "Roast rava on low heat to avoid burning. Add milk gradually to get right consistency."
  },
  {
    id: 4,
    name: "Sundal",
    nameHindi: "सुंडल",
    description: "Savory South Indian snack made with legumes and spices",
    prepTime: "20 mins",
    servings: "4 people",
    difficulty: "Easy",
    significance: "Healthy offering during festivals",
    ingredients: [
      "1 cup black chickpeas (kala chana)",
      "2 tbsp coconut oil",
      "1 tsp mustard seeds",
      "1 tsp urad dal",
      "2-3 green chilies",
      "Curry leaves",
      "1/4 cup grated coconut",
      "Salt to taste"
    ],
    instructions: [
      "Soak chickpeas overnight and pressure cook until tender",
      "Heat oil and add mustard seeds, urad dal",
      "Add green chilies and curry leaves",
      "Add cooked chickpeas and salt",
      "Stir well and cook for 5 minutes",
      "Garnish with fresh grated coconut"
    ],
    tips: "Don't overcook the chickpeas. They should hold their shape well."
  }
];

export default function RecipesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          <div>
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-primary">
              Festival Dishes
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
              Traditional recipes for Ganeshotsav celebrations
            </p>
          </div>
        </div>

        <div className="grid gap-8">
          {recipes.map((recipe) => (
            <Card key={recipe.id} variant="festival" className="overflow-hidden">
              <CardHeader className="bg-gradient-golden text-white">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl lg:text-3xl font-display text-white">
                      {recipe.name}
                    </CardTitle>
                    <div className="text-xl font-display text-white/90 mt-1">
                      {recipe.nameHindi}
                    </div>
                    <CardDescription className="text-white/80 mt-2 text-base">
                      {recipe.description}
                    </CardDescription>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 lg:gap-6 text-center">
                    <div className="bg-white/20 rounded-lg p-3">
                      <Clock className="w-5 h-5 mx-auto mb-1" />
                      <div className="text-xs font-medium">PREP TIME</div>
                      <div className="text-sm">{recipe.prepTime}</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <Users className="w-5 h-5 mx-auto mb-1" />
                      <div className="text-xs font-medium">SERVES</div>
                      <div className="text-sm">{recipe.servings}</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <ChefHat className="w-5 h-5 mx-auto mb-1" />
                      <div className="text-xs font-medium">LEVEL</div>
                      <div className="text-sm">{recipe.difficulty}</div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6 space-y-6">
                <div className="bg-accent/10 rounded-lg p-4">
                  <h3 className="font-display text-accent font-semibold mb-2">Festival Significance</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {recipe.significance}
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-display text-primary font-semibold">
                      Ingredients
                    </h3>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <ul className="space-y-2">
                        {recipe.ingredients.map((ingredient, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm sm:text-base">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span>{ingredient}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-display text-primary font-semibold">
                      Instructions
                    </h3>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <ol className="space-y-3">
                        {recipe.instructions.map((step, index) => (
                          <li key={index} className="flex gap-3 text-sm sm:text-base">
                            <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                              {index + 1}
                            </span>
                            <span className="leading-relaxed">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/10 rounded-lg p-4">
                  <h4 className="font-display text-secondary font-semibold mb-2">
                    💡 Chef's Tips
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {recipe.tips}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}