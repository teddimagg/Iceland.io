const cities = [
   {
     'rank': 1,
     'name': 'Reykjavik',
     'population': 113400,
     'lat': 64.14,
     'lng': -21.92
   },
   {
     'rank': 2,
     'name': 'Kopavogur',
     'population': 25700,
     'lat': 64.12,
     'lng': -21.92
   },
   {
     'rank': 3,
     'name': 'Hafnarfjordur',
     'population': 21600,
     'lat': 64.06,
     'lng': -21.95
   },
   {
     'rank': 4,
     'name': 'Akureyri',
     'population': 16300,
     'lat': 65.69,
     'lng': -18.12
   },
   {
     'rank': 5,
     'name': 'Gardabaer',
     'population': 9000,
     'lat': 64.09,
     'lng': -21.99
   },
   {
     'rank': 6,
     'name': 'Keflavik',
     'population': 8000,
     'lat': 64.01,
     'lng': -22.56
   },
   {
     'rank': 7,
     'name': 'Mosfellsbaer',
     'population': 6700,
     'lat': 64.15,
     'lng': -21.65
   },
   {
     'rank': 8,
     'name': 'Akranes',
     'population': 5600,
     'lat': 64.33,
     'lng': -22.09
   },
   {
     'rank': 9,
     'name': 'Selfoss',
     'population': 5200,
     'lat': 63.94,
     'lng': -21.01
   },
   {
     'rank': 10,
     'name': 'Seltjarnarnes',
     'population': 4600,
     'lat': 64.13,
     'lng': -21.93
   },
   {
     'rank': 11,
     'name': 'Vestmannaeyjar',
     'population': 4300,
     'lat': 63.44,
     'lng': -20.27
   },
   {
     'rank': 12,
     'name': 'Njardvik',
     'population': 2800,
     'lat': 63.97,
     'lng': -22.55
   },
   {
     'rank': 13,
     'name': 'Isafjordur',
     'population': 2600,
     'lat': 66.08,
     'lng': -23.14
   },
   {
     'rank': 14,
     'name': 'Saudarkrokur',
     'population': 2600,
     'lat': 65.74,
     'lng': -19.66
   },
   {
     'rank': 15,
     'name': 'Grindavik',
     'population': 2500,
     'lat': 63.85,
     'lng': -22.45
   },
   {
     'rank': 16,
     'name': 'Husavik',
     'population': 2400,
     'lat': 66.05,
     'lng': -17.35
   },
   {
     'rank': 17,
     'name': 'Alftanes',
     'population': 2000,
     'lat': 64.11,
     'lng': -22.03
   },
   {
     'rank': 18,
     'name': 'Hveragerdi',
     'population': 1900,
     'lat': 64.01,
     'lng': -21.21
   },
   {
     'rank': 19,
     'name': 'Egilsstadir',
     'population': 1800,
     'lat': 65.26,
     'lng': -14.4
   },
   {
     'rank': 20,
     'name': 'Borgarnes',
     'population': 1800,
     'lat': 64.54,
     'lng': -21.95
   },
   {
     'rank': 21,
     'name': 'Hofn',
     'population': 1700,
     'lat': 64.26,
     'lng': -15.21
   },
   {
     'rank': 22,
     'name': 'Neskaupstadur',
     'population': 1400,
     'lat': 65.15,
     'lng': -13.7
   },
   {
     'rank': 23,
     'name': 'Siglufjordur',
     'population': 1400,
     'lat': 66.16,
     'lng': -18.93
   },
   {
     'rank': 24,
     'name': 'Sandgerdi',
     'population': 1400,
     'lat': 64.05,
     'lng': -22.71
   },
   {
     'rank': 25,
     'name': 'Dalvik',
     'population': 1400,
     'lat': 65.98,
     'lng': -18.58
   },
   {
     'rank': 26,
     'name': 'Þorlakshofn',
     'population': 1300,
     'lat': 63.86,
     'lng': -21.4
   },
   {
     'rank': 27,
     'name': 'Gardur',
     'population': 1300,
     'lat': 64.07,
     'lng': -22.65
   },
   {
     'rank': 28,
     'name': 'Stykkisholmur',
     'population': 1100,
     'lat': 65.07,
     'lng': -22.74
   },
   {
     'rank': 29,
     'name': 'Olafsvik',
     'population': 1000,
     'lat': 64.89,
     'lng': -23.74
   },
   {
     'rank': 30,
     'name': 'Eskifjordur',
     'population': 980,
     'lat': 65.07,
     'lng': -14
   },
   {
     'rank': 31,
     'name': 'Olafsfjordur',
     'population': 972,
     'lat': 66.07,
     'lng': -18.65
   },
   {
     'rank': 32,
     'name': 'Bolungarvik',
     'population': 933,
     'lat': 66.15,
     'lng': -23.27
   },
   {
     'rank': 33,
     'name': 'Blonduos',
     'population': 902,
     'lat': 65.66,
     'lng': -20.31
   },
   {
     'rank': 34,
     'name': 'Vogar',
     'population': 867,
     'lat': 63.97,
     'lng': -22.37
   },
   {
     'rank': 35,
     'name': 'Grundarfjordur',
     'population': 828,
     'lat': 64.92,
     'lng': -23.27
   },
   {
     'rank': 36,
     'name': 'Hvolsvollur',
     'population': 726,
     'lat': 63.75,
     'lng': -20.23
   },
   {
     'rank': 37,
     'name': 'Seydisfjordur',
     'population': 722,
     'lat': 65.25,
     'lng': -14.02
   },
   {
     'rank': 38,
     'name': 'Reydarfjordur',
     'population': 698,
     'lat': 65.03,
     'lng': -14.22
   },
   {
     'rank': 39,
     'name': 'Patreksfjordur',
     'population': 690,
     'lat': 65.58,
     'lng': -24
   },
   {
     'rank': 40,
     'name': 'Hella',
     'population': 642,
     'lat': 63.83,
     'lng': -20.4
   },
   {
     'rank': 41,
     'name': 'Faskrudsfjordur',
     'population': 619,
     'lat': 64.93,
     'lng': -14.02
   },
   {
     'rank': 42,
     'name': 'Eyrarbakki',
     'population': 585,
     'lat': 63.87,
     'lng': -21.15
   },
   {
     'rank': 43,
     'name': 'Hvammstangi',
     'population': 579,
     'lat': 65.4,
     'lng': -20.95
   },
   {
     'rank': 44,
     'name': 'Skagastrond',
     'population': 571,
     'lat': 65.83,
     'lng': -20.32
   },
   {
     'rank': 45,
     'name': 'Vopnafjordur',
     'population': 560,
     'lat': 65.75,
     'lng': -14.83
   },
   {
     'rank': 46,
     'name': 'Grundarhverfi',
     'population': 525,
     'lat': 64.25,
     'lng': -21.85
   },
   {
     'rank': 47,
     'name': 'Stokkseyri',
     'population': 464,
     'lat': 63.83,
     'lng': -21.07
   },
   {
     'rank': 48,
     'name': 'Hnifsdalur',
     'population': 414,
     'lat': 66.11,
     'lng': -23.15
   },
   {
     'rank': 49,
     'name': 'Hellissandur',
     'population': 410,
     'lat': 64.92,
     'lng': -23.9
   },
   {
     'rank': 50,
     'name': 'Holmavik',
     'population': 405,
     'lat': 65.72,
     'lng': -21.68
   },
   {
     'rank': 51,
     'name': 'Djupivogur',
     'population': 388,
     'lat': 64.65,
     'lng': -14.28
   },
   {
     'rank': 52,
     'name': 'Fellabaer',
     'population': 382,
     'lat': 65.25,
     'lng': -14.7
   },
   {
     'rank': 53,
     'name': 'Þorshofn',
     'population': 365,
     'lat': 66.2,
     'lng': -15.33
   },
   {
     'rank': 54,
     'name': 'Sudureyri',
     'population': 338,
     'lat': 66.12,
     'lng': -23.53
   },
   {
     'rank': 55,
     'name': 'Talknafjordur',
     'population': 327,
     'lat': 65.62,
     'lng': -23.88
   },
   {
     'rank': 56,
     'name': 'Þingeyri',
     'population': 325,
     'lat': 65.87,
     'lng': -23.5
   },
   {
     'rank': 57,
     'name': 'Flateyri',
     'population': 307,
     'lat': 66.05,
     'lng': -23.52
   },
   {
     'rank': 58,
     'name': 'Grenivik',
     'population': 298,
     'lat': 65.95,
     'lng': -18.18
   },
   {
     'rank': 59,
     'name': 'Vik i myrdal',
     'population': 297,
     'lat': 63.42,
     'lng': -19.02
   },
   {
     'rank': 60,
     'name': 'Fludir',
     'population': 295,
     'lat': 64.25,
     'lng': -20.13
   }
]