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
     'name': 'Hafnarfjörður',
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
     'name': 'Isafjörður',
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
     'name': 'Siglufjörður',
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
     'name': 'Eskifjörður',
     'population': 980,
     'lat': 65.07,
     'lng': -14
   },
   {
     'rank': 31,
     'name': 'Olafsfjörður',
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
     'name': 'Grundarfjörður',
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
     'name': 'Seyðisfjörður',
     'population': 722,
     'lat': 65.25,
     'lng': -14.02
   },
   {
     'rank': 38,
     'name': 'Reyðarfjörður',
     'population': 698,
     'lat': 65.03,
     'lng': -14.22
   },
   {
     'rank': 39,
     'name': 'Patreksfjörður',
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
     'name': 'Fáskrúðsfjörður',
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
     'name': 'Vopnafjörður',
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
     'lat': 65.283851,
     'lng': -14.4306277
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
     'name': 'Talknafjörður',
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
     'lat': 64.1334365,
     'lng': -20.3245818
   },
   {
     'rank': 61,
     'name': 'Stodvarfjörður',
     'population': 257,
     'lat': 64.84,
     'lng': -13.88
   },
   {
     'rank': 62,
     'name': 'Raufarhofn',
     'population': 245,
     'lat': 66.45,
     'lng': -15.95
   },
   {
     'rank': 63,
     'name': 'Budardalur',
     'population': 242,
     'lat': 65.12,
     'lng': -21.77
   },
   {
     'rank': 64,
     'name': 'Bildudalur',
     'population': 226,
     'lat': 65.67,
     'lng': -23.62
   },
   {
     'rank': 65,
     'name': 'Bifrost',
     'population': 209,
     'lat': 64.75,
     'lng': -21.5
   },
   {
     'rank': 66,
     'name': 'Reykjahlid',
     'population': 207,
     'lat': 65.65,
     'lng': -16.92
   },
   {
     'rank': 67,
     'name': 'Svalbardseyri',
     'population': 204,
     'lat': 65.75,
     'lng': -18.1
   },
   {
     'rank': 68,
     'name': 'Hvanneyri',
     'population': 200,
     'lat': 64.57,
     'lng': -21.77
   },
   {
     'rank': 69,
     'name': 'Sudavík',
     'population': 192,
     'lat': 66.03,
     'lng': -23
   },
   {
     'rank': 70,
     'name': 'Laugarvatn',
     'population': 181,
     'lat': 64.22,
     'lng': -20.73
   },
   {
     'rank': 71,
     'name': 'Hofsós',
     'population': 177,
     'lat': 65.9,
     'lng': -19.43
   },
   {
     'rank': 72,
     'name': 'Hrísey',
     'population': 177,
     'lat': 66,
     'lng': -18.38
   },
   {
     'rank': 73,
     'name': 'Breiddalsvík',
     'population': 175,
     'lat': 64.8,
     'lng': -14
   },
   {
     'rank': 74,
     'name': 'Reykholt',
     'population': 170,
     'lat': 64.6651134,
     'lng': -21.289686
   },
   {
     'rank': 75,
     'name': 'Hauganes',
     'population': 163,
     'lat': 65.92,
     'lng': -18.3
   },
   {
     'rank': 76,
     'name': 'Rif',
     'population': 141,
     'lat': 64.93,
     'lng': -23.82
   },
   {
     'rank': 77,
     'name': 'Kirkjubaejarklaustur',
     'population': 141,
     'lat': 63.78,
     'lng': -18.07
   },
   {
     'rank': 78,
     'name': 'Hrafnagil',
     'population': 141,
     'lat': 65.87,
     'lng': -18.37
   },
   {
     'rank': 79,
     'name': 'Kopasker',
     'population': 140,
     'lat': 66.3,
     'lng': -16.45
   },
   {
     'rank': 80,
     'name': 'Litli-arskogssandur',
     'population': 131,
     'lat': 65.95,
     'lng': -18.37
   },
   {
     'rank': 81,
     'name': 'Varmahlid',
     'population': 130,
     'lat': 65.55,
     'lng': -19.47
   },
   {
     'rank': 82,
     'name': 'Hafnir',
     'population': 120,
     'lat': 63.93,
     'lng': -22.68
   },
   {
     'rank': 83,
     'name': 'Reykhólar',
     'population': 119,
     'lat': 65.45,
     'lng': -22.2
   },
   {
     'rank': 84,
     'name': 'Laugaras',
     'population': 117,
     'lat': 64.12,
     'lng': -20.5
   },
   {
     'rank': 85,
     'name': 'Bakkafjörður',
     'population': 104,
     'lat': 66.02,
     'lng': -14.87
   },
   {
     'rank': 86,
     'name': 'Borgarfjörður',
     'population': 98,
     'lat': 65.77,
     'lng': -23.25
   },
   {
     'rank': 87,
     'name': 'Grimsey',
     'population': 96,
     'lat': 66.5429881,
     'lng': -17.9952902
   },
   {
     'rank': 88,
     'name': 'Holar',
     'population': 95,
     'lat': 65.73,
     'lng': -19.13
   },
   {
     'rank': 89,
     'name': 'Laugar',
     'population': 92,
     'lat': 65.2462909,
     'lng': -21.8008523
   },
   {
     'rank': 91,
     'name': 'Drangsnes',
     'population': 85,
     'lat': 65.68,
     'lng': -21.45
   },
   {
     'rank': 92,
     'name': 'Laugarbakki',
     'population': 80,
     'lat': 65.323668,
     'lng': -20.8893434
   },
   {
     'rank': 93,
     'name': 'Solheimar',
     'population': 64,
     'lat': 64.07,
     'lng': -20.65
   },
   {
     'rank': 94,
     'name': 'Árbæjarhverfi í Ölfusi',
     'population': 59,
     'lat': 63.9445326,
     'lng': -21.0227564
   },
   {
     'rank': 95,
     'name': 'Hallormsstadur',
     'population': 59,
     'lat': 65.1,
     'lng': -14.75
   },
   {
     'rank': 96,
     'name': 'Kristnes',
     'population': 52,
     'lat': 65.58,
     'lng': -18.08
   },
   {
     'rank': 97,
     'name': 'Hjalteyri',
     'population': 44,
     'lat': 65.86,
     'lng': -18.2
   },
   {
     'rank': 98,
     'name': 'Kleppjárnsreykir',
     'population': 44,
     'lat': 64.65,
     'lng': -21.4
   },
   {
     'rank': 99,
     'name': 'Eiðar',
     'population': 42,
     'lat': 65.37,
     'lng': -14.38
   },
   {
     'rank': 100,
     'name': 'Raudalaekur',
     'population': 33,
     'lat': 65.68,
     'lng': -18.38
   },
   {
     'rank': 101,
     'name': 'Reykholt',
     'population': 32,
     'lat': 64.67,
     'lng': -21.3
   },
   {
     'rank': 102,
     'name': 'Skógar',
     'population': 26,
     'lat': 63.5270931,
     'lng': -19.5012749
   },
   {
     'rank': 103,
     'name': 'Borðeyri',
     'population': 24,
     'lat': 65.2,
     'lng': -21.13
   },
   {
     'rank': 104,
     'name': 'Krossholt',
     'population': 14,
     'lat': 64.72,
     'lng': -22.3
   }
]