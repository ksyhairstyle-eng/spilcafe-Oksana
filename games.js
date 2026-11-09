const games = [
  // Mord mysterie
  { id: 1, title: "Cluedo", category: "Mord mysterie", minTime: 45, maxTime: 60, minPlayers: 2, maxPlayers: 6, difficulty: "Mellem", description: "Opklar mordgåden! Find ud af, hvem der gjorde det, hvor og med hvilket våben.", image: "images/cluedo-forside.png" },
  { id: 2, title: "Mysterium", category: "Mord mysterie", minTime: 45, maxTime: 60, minPlayers: 2, maxPlayers: 7, difficulty: "Mellem", description: "Samarbejd om at løse et mystisk mord. Én spiller er et spøgelse, som giver ledetråde gennem billeder.", image: "images/mysterium-forside.png" },
  { id: 3, title: "Deception", category: "Mord mysterie", minTime: 20, maxTime: 30, minPlayers: 4, maxPlayers: 12, difficulty: "Let", description: "Opklar et mystisk mord ved at undersøge spor og afsløre morderen, som gemmer sig blandt spillerne.", image: "images/deception-forside.png" },

  // Selskab
  { id: 4, title: "Hitster", category: "Selskab", minTime: 30, maxTime: 30, minPlayers: 2, maxPlayers: 10, difficulty: "Let", description: "Lyt til populære hits, placer sangene på tidslinjen, og bliv aftenens musikekspert!", image: "images/hitster-forside.png" },
  { id: 5, title: "Bezzerwizzer", category: "Selskab", minTime: 45, maxTime: 60, minPlayers: 2, maxPlayers: 10, difficulty: "Mellem", description: "Test din viden, vælg dine stærkeste kategorier, og udfordr de andre i en sjov quiz.", image: "images/bezzerwizzer-forside.png" },
  { id: 6, title: "Partners", category: "Selskab", minTime: 45, maxTime: 60, minPlayers: 4, maxPlayers: 4, difficulty: "Mellem", description: "Spil sammen med din makker, læg en god strategi, og få alle jeres brikker i mål.", image: "images/partners-forside.png" },
  { id: 7, title: "Ludo", category: "Selskab", minTime: 30, maxTime: 60, minPlayers: 2, maxPlayers: 4, difficulty: "Mellem", description: "Slå med terningen, flyt dine brikker rundt på spillepladen, og bliv den første til at få alle brikker i mål.", image: "images/ludo-forside.png" },

  // Brug kroppen
  { id: 8, title: "Twister", category: "Brug kroppen", minTime: 10, maxTime: 20, minPlayers: 2, maxPlayers: 10, difficulty: "Let", description: "Sæt hænder og fødder på de rigtige farver, og hold balancen længst muligt!", image: "images/twisterrigtig.png" },
  { id: 9, title: "Grab the mic", category: "Brug kroppen", minTime: 20, maxTime: 30, minPlayers: 2, maxPlayers: 10, difficulty: "Let", description: "Træk et kort med et ord, og vær hurtigst til at gribe mikrofonen og synge en sang, der indeholder ordet.", image: "images/gtm-forside.png" },
  { id: 10, title: "Hint", category: "Brug kroppen", minTime: 45, maxTime: 60, minPlayers: 4, maxPlayers: 10, difficulty: "Mellem", description: "Forklar, tegn, mim eller nyn, mens dit hold forsøger at gætte de rigtige svar.", image: "images/hint-forside.png" },
  { id: 11, title: "Tegn og gæt", category: "Brug kroppen", minTime: 30, maxTime: 60, minPlayers: 3, maxPlayers: 10, difficulty: "Let", description: "Tegn ord og begreber, mens de andre spillere forsøger at gætte, hvad du tegner. Et sjovt og kreativt spil for hele familien.", image: "images/tog-forside.png" },

  // Kortspil
  { id: 12, title: "Det dårlige selskab", category: "Kortspil", minTime: 30, maxTime: 60, minPlayers: 3, maxPlayers: 10, difficulty: "Let", description: "Fuldfør sjove og skøre sætninger med dine kort, og vælg de svar, der får de andre til at grine mest.", image: "images/dds-forside.png" },
  { id: 13, title: "Uno", category: "Kortspil", minTime: 15, maxTime: 30, minPlayers: 2, maxPlayers: 10, difficulty: "Let", description: "Match farver og tal, brug specialkort, og kom først af med alle dine kort.", image: "images/uno-forside.png" },
  { id: 14, title: "Skip-bo", category: "Kortspil", minTime: 20, maxTime: 45, minPlayers: 2, maxPlayers: 6, difficulty: "Let", description: "Læg kort i rækkefølge fra 1 til 12, brug dine jokere smart, og bliv den første til at komme af med alle dine kort.", image: "images/skipbo-forside.png" },
  { id: 15, title: "Kortspil", category: "Kortspil", minTime: 45, maxTime: 60, minPlayers: 4, maxPlayers: 4, difficulty: "Mellem", description: "Kortspil du kan spille på en masse måder, fantasien har ingen grænser.", image: "images/kortspil-forside.png" },

  // Gammeldags
  { id: 16, title: "Kalaha", category: "Gammeldags", minTime: 20, maxTime: 30, minPlayers: 2, maxPlayers: 3, difficulty: "Mellem", description: "Flyt kuglerne rundt på spillepladen, og prøv at samle så mange som muligt i din egen store skål. Det kræver både taktik og overblik.", image: "images/kalaha-forside.png" },
  { id: 17, title: "Bedstemor med slaw i", category: "Gammeldags", minTime: 15, maxTime: 30, minPlayers: 2, maxPlayers: 4, difficulty: "Let", description: "Vend kortene, og hold øje med de andre spilleres kort. Når to kort har samme værdi, gælder det om at være hurtigst til at slå i bordet.", image: "images/bms-forside.png" },
  { id: 18, title: "Klods major", category: "Gammeldags", minTime: 30, maxTime: 40, minPlayers: 2, maxPlayers: 6, difficulty: "Mellem", description: "Fjern forsigtigt en klods fra tårnet, og læg den øverst. Pas på, at tårnet ikke vælter!", image: "images/klodsmajor-forside.png" },
  { id: 19, title: "Vildkatten", category: "Gammeldags", minTime: 30, maxTime: 40, minPlayers: 2, maxPlayers: 6, difficulty: "Mellem", description: "Vend et billedkort, og find det tilsvarende billede på spillepladen før de andre spillere. Her gælder det om at være hurtig og opmærksom.", image: "images/vildkat-forside.png" },

  // Brain twister
  { id: 20, title: "Pensum", category: "Brain twister", minTime: 30, maxTime: 60, minPlayers: 2, maxPlayers: 6, difficulty: "Svær", description: "Et quizspil, hvor alle svarer på samme tid. Spørgsmålene varierer fra lette til svære.", image: "images/pensum-forside.png" },
  { id: 21, title: "Mod spil", category: "Brain twister", minTime: 45, maxTime: 60, minPlayers: 2, maxPlayers: 10, difficulty: "Svær", description: "Et quizspil for hele familien, hvor du selv vælger kategori og sværhedsgrad. Brug din viden og taktik til at slå modstanderne.", image: "images/modspil-forside.png" },
  { id: 22, title: "Danmark quiz", category: "Brain twister", minTime: 30, maxTime: 45, minPlayers: 2, maxPlayers: 10, difficulty: "Svær", description: "Test din viden om Danmark med spørgsmål om blandt andet historie, geografi, kultur og sport. Vælg selv, hvor svære spørgsmålene skal være.", image: "images/danmark-forside.png" },
  { id: 23, title: "Trivial Pursuit", category: "Brain twister", minTime: 30, maxTime: 90, minPlayers: 2, maxPlayers: 6, difficulty: "Svær", description: "Et klassisk quizspil med spørgsmål om geografi, underholdning, historie, kunst og litteratur, naturvidenskab og sport.", image: "images/trivial-forside.png" }
];
