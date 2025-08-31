import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Play, Pause } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const aartis = [
  {
    id: 1,
    title: "Sukhkarta Dukhharta🙏🏻",
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
        "दर्शनमात्रे मनकामना पुर्ती",
        "",
"लंबोदर पितांबर फनी वरवंदना |",
"सरळ सोंड वक्रतुंड त्रिनयना |"  ,
"दास रामाचा वाट पाहे सदना |"  ,
"संकटी पावावे निर्वाणी रक्षावे सुरवंदना |",  
"जय देव जय देव जय मंगलमूर्ती |"  ,
"दर्शनमात्रे मनकामना पुरती || ३ ||",

"",
"",
"",
"लवथवती विक्राळा ब्रह्मांडी माळा ।",  
"वीषें कंठ काळा त्रिनेत्रीं ज्वाळा ॥",  
"लावण्यसुंदर मस्तकीं बाळा ।",  
"तेथुनियां जल निर्मळ वाहे झुळझूळां ॥०१॥",  
"",
"जय देव जय देव जय श्रीशंकरा ।",  
"आरती ओवाळूं तुज कर्पूरगौरा ॥",  
"",
"कर्पूरगौरा भोळा नयनीं विशाळा ।",  
"अर्धांगीं पार्वती सुमनांच्या माळा ॥",  
"विभुतीचें उधळण शितिकंठ नीळा ।",  
"ऐसा शंकर शोभे उमावेल्हाळा॥०२॥",  
"",
"जय देव जय देव जय श्रीशंकरा ।",  
"आरती ओवाळूं तुज कर्पूरगौरा ॥",  
"",
"देवीं दैत्य सागरमंथन पै केलें ।",  
"त्यामाजीं जें अवचित हळाहळ उठिलें ॥",  
"तें त्वां असुरपणें प्राशन केलें ।",  
"नीळकंठ नाम प्रसिद्ध झालें ॥०३॥",  
"",
"जय देव जय देव जय श्रीशंकरा ।",  
"आरती ओवाळूं तुज कर्पूरगौरा ॥",  
"",
"व्याघ्रांबर फणिवरधर सुंदर मदनारी ।",  
"पंचानन मनमोहन मुनिजनसुखकारी ॥",  
"शतकोटीचें बीज वाचे उच्चारी ।",  
"रघुकुळटिळक रामदासा अंतरीं ॥०४॥",  
"",
"जय देव जय देव जय श्रीशंकरा ।",  
"आरती ओवाळूं तुज कर्पूरगौरा ॥"  ,
"",
"",

  "दुर्गे दुर्घट भारी तुजविण संसारी ।",
  "अनाथनाथे अंबे करुणा विस्तारी ॥",
  "वारी वारीं जन्ममरणाते वारी ।",
  "हारी पडलो आता संकट नीवारी ॥ १ ॥",
  "",
  
  "जय देवी जय देवी जय महिषासुरमथनी ।",
  "सुरवरईश्वरवरदे तारक संजीवनी ॥ धृ. ॥",
  "",
  "त्रिभुवनी भुवनी पाहतां तुज ऎसे नाही ।",
  "चारी श्रमले परंतु न बोलावे काहीं ॥",
  "साही विवाद करितां पडिले प्रवाही ।",
  "ते तूं भक्तालागी पावसि लवलाही ॥ २ ॥",
  "",
  "प्रसन्न वदने प्रसन्न होसी निजदासां ।",
  "क्लेशापासूनि सोडी तोडी भवपाशा ॥",
  "अंबे तुजवांचून कोण पुरविल आशा ।",
  "नरहरि तल्लिन झाला पदपंकजलेशा ॥ ३ ॥",
  "",
  "",






        
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
        "Darshan Matre Man-kamana Purti",
"",
"Lambodara Pitambara Phani Varavandana",
"Sarala Sonda Vakratunda Trinayana",  
"Daasa Ramacha Vaata Paahe Sadanaa",  
"Sankati Paavaave Nirvaani Rakshaave Suravandana",  
"Jaya Deva Jaya Deva Jaya Mangalamurti",  
"Darshanamaatre Manakaamana Purati" , 
"",
"",
"",



"Lavthavati vikral brahmandi mala |",  
"vishe kantha kala trinetri jwala ||",  

"Lavanya sundar mastaki baala |",  
"Tethuniya nirmal jal vahe zulzula ||1||",  
"",
"Jay dev jay dev jay shri shankara |",  
"Arati ovalu tuj karpurgaura || ||",  
"",
"Karpurgaura bhola nayani vishala |",  
"Ardhangi parvati sumananchya mala ||",  

"Vibhutiche udhalan shivakantha neela |",  
"Esa shankar shobhe uma velhala ||2||",  
"",
"Jay dev jay dev jay shri shankara |",  
"Arati ovalu tuj karpurgaura || ||",  
"",
"Devidyatya sagar manthan pai kele |",  
"Tya maji avachit halahal uthile ||",  

"Te tya asurpane prashan kele |",  
"Neelkanth nam prasidha zale ||3||",  
"",
"Jay dev jay dev jay shri shankara |",  
"Arati ovalu tuj karpurgaura || ||",  
"",
"Vyagrambar-fanivardhar sundar madanari |",  
"Panchanan manmohan munijan sukhalari ||",  

"Shatakotiche beej vache ucchari |",  
"Ragukultilak ramdasa antari ||4||",  
"",
"Jay dev jay dev jay shri shankara |",  
"Arati ovalu tuj karpurgaura ||" ,
"",
"",

[
  "Durge Durghat Bhari Tujvin Sansari।",
  "Anathanathe Ambe Karuna Vistari।",
  "Vari Vari Janma Maranate Vari।",
  "Hari Padalo Ata Sankat Nivari॥",
  "",
  
  "Jai Devi Jai Devi Mahishasuramathini।",
  "Suravara Ishwara Varade Taraka Sanjivani॥",
  "",
  "Tribhuvana Bhuvani Pahata Tuja Aisi Nahi।",
  "Chari Shramale Parantu Na Bolve Kahi।",
  "Sahi Vivad Karita Padale Pravahi।",
  "Te Tu Bhaktalagi Pavasi Lavalahi॥",
  "",
  "Jai Devi Jai Devi Mahishasuramathini।",
  "Suravara Ishwara Varade Taraka Sanjivani॥",
  "",
  "Prasanna Vadane Prasanna Hosi Nijadasa।",
  "Kleshampasuni Sodavi Todi Bhavapasha।",
  "Ambe Tujvachun Kon Purvila Asha।",
  "Narahari Tallina Jhala Padapankajalesha॥",
  "",
  "Jai Devi Jai Devi Mahishasuramathini।",
  "Suravara Ishwara Varade Taraka Sanjivani॥",
  "",
  "",
  "",
]


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
        "शेंदुर लाल चढ़ायो अच्छा गजमुख को",  
"दोंदिल लाल बिराजे सुत गौरिहर को",  
"हाथ लिए गुडलद्दु सांई सुरवर को",  
"महिमा कहे न जाय लागत हूं पद को",  
"जय देव जय देव",  
"जय जय श्री गणराज विद्या सुखदाता",  
"धन्य तुम्हारो दर्शन मेरा मन रमता",  
"जय देव जय देव",  
"",
"भावभगत से कोई शरणागत आवे",  
"संतति संपत्ति सबहि भरपूर पावे",  
"ऐसे तुम महाराज मोको अति भावे",  
"गोसावीनन्दन निशिदिन गुण गावे",  
"जय देव जय देव",  
"जय जय श्री गणराज विद्या सुखदाता",  
"धन्य तुम्हारो दर्शन मेरा मन रमता",  
"जय देव जय देव"

      ],
      transliteration: [
        "Shendur lal chadhayo achchha gajmukhko ||",  
"Dondil lal biraje sut gauriharko ||",  
"Hath liye gudladdu sai survarko ||",  
"Mahima kahe na jay lagat hoo padko || 1 ||",  
"Jai jai shri ganraj vidhyasukhdata ||",  
"Dhanya tumara darshan mera man ramata ||",  
"Jai Dev Jai Dev",  
"",
"Bhavbhagat se koi sharanagat aave ||",  
"Santat santat sabhi bharpur pave ||",  
"Aise tum Maharaj moko ati bhave ||",  
"Gosavinandan nishidin gun gave || 3 ||",  
"Jai jai shri ganraj vidhyasukhdata ||",  
"Dhanya tumara darshan mera man ramata",  
"Jai Dev Jai Dev"

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
       " श्री गणेशाय नम:।।",

"त्वमेव प्रत्यक्षं तत्वमसि।।",
"त्वमेव केवलं कर्त्ताऽसि।",
"त्वमेव केवलं धर्तासि।।",
"त्वमेव केवलं हर्ताऽसि।",
"त्वमेव सर्वं खल्विदं ब्रह्मासि।।",
"त्वं साक्षादत्मासि नित्यम्।",
"ऋतं वच्मि।। सत्यं वच्मि।।",
"अव त्वं मां।। अव वक्तारं।।",
"अव श्रोतारं। अवदातारं।।",
"अव धातारम अवानूचानमवशिष्यं।।",
"अव पश्चातात्।। अवं पुरस्तात्।।",
"अवोत्तरातात्।। अव दक्षिणात्तात्।।",
"अवचोर्ध्वात्तात्।। अवाधरात्तात्।।",
"सर्वतो माँ पाहि-पाहि समंतात्।।3।।",

"त्वं वाङग्मयचस्त्वं चिन्मय।",
"त्वं वाङग्मयचस्त्वं ब्रह्ममय:।।",
"त्वं सच्चिदानंदा द्वितियोऽसि।",
"त्वं प्रत्यक्षं ब्रह्मासि।",
"त्वं ज्ञानमयो विज्ञानमयोऽसि।4।",

"सर्व जगदि‍दं त्वत्तो जायते।",
"सर्व जगदिदं त्वत्तस्तिष्ठति।",
"सर्व जगदिदं त्वयि लयमेष्यति।।",
"सर्व जगदिदं त्वयि प्रत्येति।।",
"त्वं भूमिरापोनलोऽनिलो नभ:।।",
"त्वं चत्वारिवाक्पदानी।।5।।",

"त्वं गुणयत्रयातीत: त्वमवस्थात्रयातीत:।",
"त्वं देहत्रयातीत: त्वं कालत्रयातीत:।",
"त्वं मूलाधार स्थितोऽसि नित्यं।",
"त्वं शक्ति त्रयात्मक:।।",
"त्वां योगिनो ध्यायंति नित्यम्।",
"त्वं शक्तित्रयात्मक:।।",
"त्वां योगिनो ध्यायंति नित्यम्।",
"त्वं ब्रह्मा त्वं विष्णुस्त्वं रुद्रस्त्वं इन्द्रस्त्वं अग्निस्त्वं।",
"वायुस्त्वं सूर्यस्त्वं चंद्रमास्त्वं ब्रह्मभूर्भुव: स्वरोम्।।6।।",

"गणादिं पूर्वमुच्चार्य वर्णादिं तदनंतरं।।",
"अनुस्वार: परतर:।। अर्धेन्दुलसितं।।",
"तारेण ऋद्धं।। एतत्तव मनुस्वरूपं।।",
"गकार: पूर्व रूपं अकारो मध्यरूपं।",
"अनुस्वारश्चान्त्य रूपं।। बिन्दुरूत्तर रूपं।।",
"नाद: संधानं।। संहिता संधि: सैषा गणेश विद्या।।",
"गणक ऋषि: निचृद्रायत्रीछंद:।। ग‍णपति देवता।।",
"ॐ गं गणपतये नम:।।7।।",

"एकदंताय विद्महे। वक्रतुण्डाय धीमहि तन्नोदंती प्रचोद्यात।।",
"एकदंत चतुर्हस्तं पारामंकुशधारिणम्।।",
"रदं च वरदं च हस्तै र्विभ्राणं मूषक ध्वजम्।।",
"रक्तं लम्बोदरं शूर्पकर्णकं रक्तवाससम्।।",
"रक्त गंधाऽनुलिप्तागं रक्तपुष्पै सुपूजितम्।।8।।",

"भक्तानुकंपिन देवं जगत्कारणम्च्युतम्।।",
"आविर्भूतं च सृष्टयादौ प्रकृतै: पुरुषात्परम।।",
"एवं ध्यायति यो नित्यं स योगी योगिनांवर:।। 9।।",

"नमो व्रातपतये नमो गणपतये।। नम: प्रथमपत्तये।।",
"नमस्तेऽस्तु लंबोदारायैकदंताय विघ्ननाशिने शिव सुताय।",
"श्री वरदमूर्तये नमोनम:।।10।।",

"एतदथर्वशीर्ष योऽधीते।। स: ब्रह्मभूयाय कल्पते।।",
"स सर्वविघ्नैर्न बाध्यते स सर्वत: सुख मेधते।। 11।।",

"सायमधीयानो दिवसकृतं पापं नाशयति।।",
"प्रातरधीयानो रात्रिकृतं पापं नाशयति।।",
"सायं प्रात: प्रयुंजानो पापोद्‍भवति।",
"सर्वत्राधीयानोऽपविघ्नो भवति।।",
"धर्मार्थ काममोक्षं च विदंति।।12।।",

"इदमथर्वशीर्षम शिष्यायन देयम।।",
"यो यदि मोहाददास्यति स पापीयान भवति।।",
"सहस्त्रावर्तनात् यं यं काममधीते तं तमनेन साधयेत।।13 ।।",

"अनेन गणपतिमभिषिं‍चति स वाग्मी भ‍वति।।",
"चतुर्थत्यां मनश्रन्न जपति स विद्यावान् भवति।।",
"इत्यर्थर्वण वाक्यं।। ब्रह्माद्यारवरणं विद्यात् न विभेती कदाचनेति।।14।।",

"यो दूर्वां कुरैर्यजति स वैश्रवणोपमो भवति।।",
"यो लाजैर्यजति स यशोवान भवति।। स: मेधावान भवति।।",
"यो मोदक सहस्त्रैण यजति।",
"स वांञ्छित फलम् वाप्नोति।।",
"य: साज्य समिभ्दर्भयजति, स सर्वं लभते स सर्वं लभते।।15।।",

"अष्टो ब्राह्मणानां सम्यग्राहयित्वा सूर्यवर्चस्वी भवति।।",
"सूर्य गृहे महानद्यां प्रतिभासंनिधौ वा जपत्वा सिद्ध मंत्रोन् भवति।।",

"महाविघ्नात्प्रमुच्यते।। महादोषात्प्रमुच्यते।। महापापात् प्रमुच्यते।",
"स सर्व विद्भवति स सर्वविद्भवति। य एवं वेद इत्युपनिषद।।16।।",

"ॐ भद्रं कर्णेभि शृणुयाम देवा:।",
"भद्रं पश्येमाक्षभिर्यजत्रा:।।",
"स्थिरै रंगै स्तुष्टुवां सहस्तनुभि::।",
"व्यशेम देवहितं यदायु:।।",
"ॐ स्वस्ति न इन्द्रो वृद्धश्रवा:।",
"स्वस्ति न: पूषा विश्ववेदा:।",
"स्वस्ति न स्तार्क्ष्र्यो अरिष्ट नेमि:।।",
"स्वस्ति नो बृहस्पतिर्दधातु।।",
"ॐ शांति:। शांति:।। शांति:।।।",

      ],
      transliteration: [
       

"॥Ath Shri Ganapati Atharvashirsha Stuti॥",



"Om Namaste Ganapataye।",
"Tvameva Pratyaksham Tatvamasi॥",
"Tvameva Kevalam Kartasi ।",
"Tvameva Kevalam Dhartasi॥",
"Tvameva Kevalam Hartasi।",
"Tvameva Sarvam Khalvidam Brahmasi॥",
"Tvam Sakshadatmasi Nityam॥",




"Ritam Vachmi। Satyam Vachmi ॥",
"Ava Tvam Mam। Ava Vaktaram ॥",
"Ava Shrotaram। Avadataram ॥",
"Ava Dhataram Avanuchanamavashishyam ॥",
"Ava Paschatat। Avam Purastat ॥",
"Avottaratat। Ava Dakshinatat ॥",
"Avachordhvatat। Avadharatat ॥",
"Sarvato Mam Pahi Pahi Samantat ॥",

"Tvam Vangmayastvam Chinmaya।",
"Tvam Vangmayastvam Brahmamayah॥",
"Tvam Sachchidananda Dvitiyosi।",
"Tvam Pratyaksham Brahmasi।",
"Tvam Gyanmayo Vignyanmayosi॥",

"Sarva Jagadidam Tvatto Jayate।",
"Sarva Jagadidam Tvattastishthati।",
"Sarva Jagadidam Tvayi Layameshyati॥",
"Sarva Jagadidam Tvayi Pratyeti॥",
"Tvam Bhumiraponalo'nilo Nabha॥",
"Tvam Chatvarivakpadani॥",

"Tvam Gunatrayatitah Tvamavasthatrayatitah।",
"Tvam Dehatrayatitah Tvam Kalatrayatitah।",
"Tvam Muladhara Sthito'si Nityam।",
"Tvam Shakti Trayatmakah॥",
"Tvam Yogino Dhyayanti Nityam।",
"Tvam Shaktitrayatmakah॥",
"Tvam Yogino Dhyayanti Nityam।",
"Tvam Brahma Tvam Vishnustvam Rudrastvam Indrastvam Agnistvam।",
"Vayustvam Suryastvam Chandramastvam Brahmabhurbhuvah Swarom॥",




"Ganadim Purvamuchcharya Varnadim Tadanantaram॥",
"Anusvarah Paratarah॥ Ardhaendulasitam॥",
"Tarena Riddham॥ Etattava Manusvarupam॥",
"Gakarah Purva Rupam Akaro Madhyarupam।",
"Anusvarashchantya Rupam॥ Binduruttara Rupam॥",
"Nadah Sandhanam॥ Samhita Sandhih Saisha Ganesh Vidya॥",
"Ganaka Rishi Nichrudgayatri Chhandah॥ Ganapati Devata॥",
"Om Gam Ganapataye Namah॥",




"Ekadantaya Vidmahe। Vakratundaya Dhimahi Tanno Danti Prachodayat॥",




"Ekadant Chaturhastam Paramankushadharinam॥",
"Radam Cha Varadam Cha Hastair Vibhranam Mushakadhvajam॥",
"Raktam Lambodaram Shoorpakarnakam Raktavasasam॥",
"Rakta Gandhanuliptangam Rakta Pushpaihi Supujitam॥",

"Bhaktanukampin Devam Jagatkaranam Achyutam॥",
"Avirbhutam Cha Srishtyadau Prakriteh Purushat Param॥",
"Evam Dhyayati Yo Nityam Sa Yogi Yoginam Varah॥",




"Namo Vratapataye Namo Ganapataye॥ Namo Prathamapataye॥",
"Namaste’stu Lambodaraya Ekadantaya Vighnanashine Shiva Sutaya।",
"Shri Varadamurtaye Namonamah॥",



"Etadatharvashirsha Yo'dhite॥ Sa Brahmabhuyaya Kalpate॥",
"Sa Sarvavighnair Na Badhyate Sa Sarvatah Sukha Medhate॥",

"Sayamadhiyano Divasakritam Papam Nashayati॥",
"Prataradhiyano Ratikritam Papam Nashayati॥",
"Sayam Pratah Prayunjano Papodbhavati।",
"Sarvatradhiyano'pavighno Bhavati॥",
"Dharmartha Kamamoksham Cha Vidanti॥",

"Idam Atharvashirsham Shishyayan Deyam॥",
"Yo Yadi Mohad Dasyati Sa Papiyan Bhavati॥",
"Sahasravartanat Yam Yam Kamamadhite Tam Tanena Sadhayet॥",

"Anena Ganapatimabhisinchati Sa Vagmi Bhavati॥",
"Chaturthyam Manashnan Japati Sa Vidyavan Bhavati॥",
"Ityartha Vakyam॥ Brahmadhyavarannam Vidyat Na Vibheti Kadachaneti॥",

"Yo Durvankuraish Yajati Sa Vaishravanopamo Bhavati॥",
"Yo Lajair Yajati Sa Yashovan Bhavati। Sa Medhavan Bhavati॥",
"Yo Modaka Sahasrena Yajati।",
"Sa Vanchita Phalam Avapnoti॥",
"Yah Sajya Samidhvarbhayajati, Sa Sarvam Labhate Sa Sarvam Labhate॥",

"Ashto Brahmananam Samyakgrahayitva Suryavarchasvi Bhavati॥",
"Surya Grihe Mahanadyam Pratimhasannidhau Va Japatva Siddha Mantron Bhavati॥",

"Mahavighnat Pramuchyate॥ Mahadoshat Pramuchyate॥ Mahapapat Pramuchyate।",
"Sa Sarva Vid Bhavati Sa Sarvavid Bhavati। Ya Evam Veda Ityupanishad॥",

"Om Bhadram Karnebhih Shrinuyama Devah।",
"Bhadram Pashyemakshabhiryajatrah॥",
"Sthirairangais Tushtuvamsastanubhih।",
"Vyashema Devahitam Yadayuh॥",
"Om Swasti Na Indro Vriddhashravah।",
"Swasti Nah Pusha Vishvavedah।",
"Swasti Nas Tarksyo Arishtanemih॥",
"Swasti No Brihaspatirdadhatu॥",
"Om Shantih Shantih Shantih॥",

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