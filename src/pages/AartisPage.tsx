import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Play, Pause } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const aartis = [
  {
    id: 1,
    title: "Sukhkarta Dukhharta",
    titleMarathi: "सुखकर्ता दुःखहर्ता",
    description: "Most popular Ganesh Aarti",
    lyrics: {
      marathi: [
        "सुखकर्ता दुःखहर्ता वार्ता विघ्नाची",
        "नुरवी पुरवी प्रेम कृपा जयाची",
        "सर्वांगी सुंदर उटी शेंदुराची",
        "कंठी झळके माळ मुक्ताफळांची",
        "जय देव जय देव जय मंगलमूर्ती",
        "दर्शनमात्रे मनकामना पुर्ती",
        "",
        "रत्नखचित फरा तुजगावी",
        "चंदनाची उटी कुमकुमकेशरी",
        "हिरवळीत पानां गाजर तुझ्या",
        "रुणझुणत्या नूपुरा पादरी",
        "जय देव जय देव जय मंगलमूर्ती",
        "दर्शनमात्रे मनकामना पुर्ती"
      ],
      transliteration: [
        "Sukhkarta Dukhharta Varta Vighnachi",
        "Nurvi Purvi Prem Krupa Jayachi",
        "Sarvangi Sundar Uti Shendurachi",
        "Kanthi Jhalke Maal Muktafalanchi",
        "Jai Dev Jai Dev Jai Mangalmurti",
        "Darshan Matre Man-kamana Purti",
        "",
        "Ratnakhachit Fara Tujgavi",
        "Chandanachi Uti Kumkum-keshari",
        "Hirvali Panan Gajar Tuzhya",
        "Runjhunjhatya Nupura Padari",
        "Jai Dev Jai Dev Jai Mangalmurti",
        "Darshan Matre Man-kamana Purti"
      ]
    },
    meaning: "O Lord Ganesha, you are the giver of happiness and the remover of sorrows..."
  },
  {
    id: 2,
    title: "Ganesh Aarti",
    titleMarathi: "गणेश आरती",
    description: "Traditional Ganesh Aarti",
    lyrics: {
      marathi: [
        "गजानना श्री गणराया आदि वंदावा",
        "निर्विघ्न कर्ता करुणामाया आदि वंदावा",
        "एकदंता इष्टदायका आदि वंदावा",
        "त्रिनेत्रा हर्षविनायका आदि वंदावा",
        "",
        "आरती आरती ओवाळूं तुज श्री गणराया",
        "माझ्या घरदारी निवडले आले गणपति बाप्पा"
      ],
      transliteration: [
        "Gajanan Shri Ganraya Aadi Vandava",
        "Nirvighna Karta Karunamaya Aadi Vandava", 
        "Ekdanta Ishtadayaka Aadi Vandava",
        "Trinetra Harshavinayaka Aadi Vandava",
        "",
        "Aarti Aarti Owalu Tuj Shri Ganraya",
        "Majhya Ghardari Nivadle Ale Ganpati Bappa"
      ]
    },
    meaning: "We bow to Lord Ganesha with the elephant head, the remover of obstacles..."
  },
  {
    id: 3,
    title: "Ganpati Atharvashirsha",
    titleMarathi: "गणपति अथर्वशीर्ष",
    description: "Sacred Vedic hymn to Lord Ganesha",
    lyrics: {
      marathi: [
        "ॐ भद्रं कर्णेभिः शृणुयाम देवाः",
        "भद्रं पश्येमाक्षभिर्यजत्राः",
        "स्थिरैरङ्गैस्तुष्टुवाँसस्तनूभिः",
        "व्यशेम देवहितं यदायुः",
        "",
        "ॐ नमस्ते गणपतये",
        "त्वमेव प्रत्यक्षं तत्त्वमसि",
        "त्वमेव केवलं कर्ताऽसि",
        "त्वमेव केवलं धर्ताऽसि"
      ],
      transliteration: [
        "Om Bhadram Karnebhih Shrunuyam Devah",
        "Bhadram Pashyemakshabhir Yajatraah", 
        "Sthirair Angais Tushtuvaamsas Tanubhih",
        "Vyashema Devahitam Yadayuh",
        "",
        "Om Namaste Ganapataye",
        "Tvameva Pratyaksham Tattvamaasi",
        "Tvameva Kevalam Kartaasi",
        "Tvameva Kevalam Dhartaasi"
      ]
    },
    meaning: "This is a sacred Vedic hymn praising Lord Ganesha as the ultimate reality..."
  }
];

export default function AartisPage() {
  const navigate = useNavigate();
  const [playingId, setPlayingId] = useState<number | null>(null);

  const togglePlay = (id: number) => {
    setPlayingId(playingId === id ? null : id);
  };

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
              Sacred Aartis
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
              Divine hymns for Lord Ganesha
            </p>
          </div>
        </div>

        <div className="grid gap-8">
          {aartis.map((aarti) => (
            <Card key={aarti.id} variant="divine" className="overflow-hidden">
              <CardHeader className="bg-gradient-festival text-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-display text-white">
                      {aarti.title}
                    </CardTitle>
                    <div className="text-xl font-display text-white/90 mt-1">
                      {aarti.titleMarathi}
                    </div>
                    <CardDescription className="text-white/80 mt-2">
                      {aarti.description}
                    </CardDescription>
                  </div>
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => togglePlay(aarti.id)}
                    className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white border-white/30"
                  >
                    {playingId === aarti.id ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                    {playingId === aarti.id ? 'Pause' : 'Play'}
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <Tabs defaultValue="marathi" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="marathi" className="text-sm sm:text-base">
                      Marathi
                    </TabsTrigger>
                    <TabsTrigger value="transliteration" className="text-sm sm:text-base">
                      Transliteration
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="marathi" className="space-y-4">
                    <div className="bg-muted/30 rounded-lg p-6">
                      <h3 className="font-display text-lg text-primary mb-4">
                        Marathi Lyrics
                      </h3>
                      <div className="space-y-2">
                        {aarti.lyrics.marathi.map((line, index) => (
                          <p 
                            key={index} 
                            className={`text-base sm:text-lg font-display leading-relaxed ${
                              line === '' ? 'h-2' : 'text-foreground'
                            }`}
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="transliteration" className="space-y-4">
                    <div className="bg-muted/30 rounded-lg p-6">
                      <h3 className="font-display text-lg text-primary mb-4">
                        English Transliteration
                      </h3>
                      <div className="space-y-2">
                        {aarti.lyrics.transliteration.map((line, index) => (
                          <p 
                            key={index} 
                            className={`text-base sm:text-lg leading-relaxed ${
                              line === '' ? 'h-2' : 'text-foreground'
                            }`}
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <h4 className="font-display text-accent font-semibold mb-2">Meaning:</h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {aarti.meaning}
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