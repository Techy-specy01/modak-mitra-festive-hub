import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Clock, Calendar, Waves, Sunrise, Sun, Sunset } from "lucide-react";
import { useNavigate } from "react-router-dom";

const dailyRituals = [
  {
    day: "Day 1 - Ganesh Chaturthi",
    title: "प्राणप्रतिष्ठा (Prana Pratishtha)",
    description: "Installation and invocation of Lord Ganesha",
    rituals: [
      "Clean the house and prepare the altar",
      "Install Ganesha idol with proper rituals",
      "Perform Prana Pratishtha (invoking life)",
      "Offer 21 modaks and durva grass",
      "Chant Ganesh mantras and perform aarti"
    ]
  },
  {
    day: "Days 2-10",
    title: "दैनिक पूजा (Daily Worship)",
    description: "Daily worship and offerings",
    rituals: [
      "Wake up early and take bath",
      "Offer fresh flowers and incense",
      "Present daily bhog (food offerings)",
      "Read Ganesh stories or mantras",
      "Perform evening aarti with family"
    ]
  },
  {
    day: "Final Day",
    title: "विसर्जन (Visarjan)",
    description: "Farewell ceremony for Lord Ganesha",
    rituals: [
      "Perform final puja with complete rituals",
      "Seek blessings for the year ahead",
      "Carry idol in procession with music",
      "Immerse in water body with devotion",
      "Pray for early return next year"
    ]
  }
];

const pujaTimings = [
  {
    time: "Early Morning",
    icon: Sunrise,
    period: "5:00 AM - 7:00 AM",
    title: "प्रातःकाल पूजा",
    activities: [
      "Abhishek (ritual bathing of deity)",
      "Offer fresh flowers and tulsi leaves",
      "Light incense and deepam",
      "Chant Ganesha Sahasranama"
    ]
  },
  {
    time: "Morning",
    icon: Sun,
    period: "8:00 AM - 11:00 AM",
    title: "सकाळची आरती",
    activities: [
      "Main puja with all sixteen upacharas",
      "Offer breakfast bhog",
      "Perform Ganesh Aarti",
      "Read Ganesh Puran or stories"
    ]
  },
  {
    time: "Evening",
    icon: Sunset,
    period: "6:00 PM - 8:00 PM",
    title: "संध्याकाळची आरती",
    activities: [
      "Light oil lamps around the altar",
      "Offer dinner bhog and sweets",
      "Community aarti with singing",
      "Distribution of prasad to devotees"
    ]
  }
];

const visarjanGuide = {
  preparation: [
    "Complete final puja with all family members",
    "Offer special bhog including 21 modaks",
    "Take blessings and make wishes for next year",
    "Decorate the idol with flowers and ornaments",
    "Prepare for the farewell procession"
  ],
  procession: [
    "Carry Ganesha on decorated palki or in hands",
    "Sing devotional songs and play dhol-tasha",
    "Dance and celebrate with 'Ganpati Bappa Morya'",
    "Invite neighbors to join the procession",
    "Maintain festive but respectful atmosphere"
  ],
  immersion: [
    "Choose clean water body (sea, river, lake)",
    "Perform final aarti at the water's edge",
    "Seek forgiveness for any ritual mistakes",
    "Gently immerse while chanting mantras",
    "Pray 'Pudchya varshi lavkar ya' (Come back soon next year)"
  ],
  ecoFriendly: [
    "Use clay idol instead of Plaster of Paris",
    "Avoid chemical colors and decorations",
    "Use natural flowers and biodegradable materials",
    "Consider artificial pond for home immersion",
    "Collect nirmalya (flowers) for composting"
  ]
};

export default function FestivalGuidePage() {
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
              Festival Guide
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
              Complete guide for Ganeshotsav celebration
            </p>
          </div>
        </div>

        <Tabs defaultValue="rituals" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="rituals" className="text-sm sm:text-base">
              Daily Rituals
            </TabsTrigger>
            <TabsTrigger value="timings" className="text-sm sm:text-base">
              Puja Timings
            </TabsTrigger>
            <TabsTrigger value="visarjan" className="text-sm sm:text-base">
              Visarjan Guide
            </TabsTrigger>
          </TabsList>

          <TabsContent value="rituals" className="space-y-6">
            <div className="grid gap-6">
              {dailyRituals.map((ritual, index) => (
                <Card key={index} variant="floating" className="overflow-hidden">
                  <CardHeader className="bg-gradient-saffron text-white">
                    <CardTitle className="text-xl lg:text-2xl font-display text-white">
                      {ritual.day}
                    </CardTitle>
                    <div className="text-lg font-display text-white/90">
                      {ritual.title}
                    </div>
                    <CardDescription className="text-white/80">
                      {ritual.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h3 className="font-display text-primary font-semibold mb-4 text-lg">
                      Ritual Steps
                    </h3>
                    <div className="grid gap-3">
                      {ritual.rituals.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                          <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                            {stepIndex + 1}
                          </span>
                          <span className="text-sm sm:text-base leading-relaxed">{step}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="timings" className="space-y-6">
            <div className="grid gap-6">
              {pujaTimings.map((timing, index) => {
                const IconComponent = timing.icon;
                return (
                  <Card key={index} variant="divine" className="overflow-hidden">
                    <CardHeader className="bg-gradient-maroon text-white">
                      <div className="flex items-center gap-4">
                        <div className="bg-white/20 rounded-full p-3">
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl lg:text-2xl font-display text-white">
                            {timing.time} Puja
                          </CardTitle>
                          <div className="text-lg font-display text-white/90">
                            {timing.title}
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <Clock className="w-4 h-4" />
                            <span className="text-white/80">{timing.period}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <h3 className="font-display text-primary font-semibold mb-4 text-lg">
                        Activities
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {timing.activities.map((activity, actIndex) => (
                          <div key={actIndex} className="flex items-start gap-2 p-3 bg-muted/30 rounded-lg">
                            <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm sm:text-base">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="visarjan" className="space-y-6">
            <div className="grid gap-6">
              <Card variant="festival" className="overflow-hidden">
                <CardHeader className="bg-gradient-golden text-white">
                  <div className="flex items-center gap-4">
                    <Waves className="w-10 h-10" />
                    <div>
                      <CardTitle className="text-2xl lg:text-3xl font-display text-white">
                        Visarjan Process
                      </CardTitle>
                      <CardDescription className="text-white/80 text-base">
                        Complete guide for the farewell ceremony
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-8">
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-display text-primary font-semibold">
                        🏠 Preparation at Home
                      </h3>
                      <div className="space-y-2">
                        {visarjanGuide.preparation.map((step, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                            <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">
                              {index + 1}
                            </span>
                            <span className="text-sm leading-relaxed">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-display text-primary font-semibold">
                        🎵 Procession
                      </h3>
                      <div className="space-y-2">
                        {visarjanGuide.procession.map((step, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                            <span className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">
                              {index + 1}
                            </span>
                            <span className="text-sm leading-relaxed">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-display text-primary font-semibold">
                        🌊 Immersion Ceremony
                      </h3>
                      <div className="space-y-2">
                        {visarjanGuide.immersion.map((step, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                            <span className="w-6 h-6 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">
                              {index + 1}
                            </span>
                            <span className="text-sm leading-relaxed">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-display text-primary font-semibold">
                        🌱 Eco-Friendly Tips
                      </h3>
                      <div className="space-y-2">
                        {visarjanGuide.ecoFriendly.map((tip, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 bg-accent/10 rounded-lg">
                            <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">
                              ✓
                            </span>
                            <span className="text-sm leading-relaxed">{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/10 rounded-lg p-6 text-center">
                    <h4 className="text-2xl font-display text-primary font-bold mb-4">
                      गणपति बाप्पा मोरया!
                    </h4>
                    <p className="text-lg font-display text-primary">
                      पुढच्या वर्षी लवकर या!
                    </p>
                    <p className="text-base text-muted-foreground mt-2">
                      (Ganpati Bappa Morya! Come back soon next year!)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}