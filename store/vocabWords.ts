// cSpell:disable
const vocabWords = [
    {
        id: 1,
        de: 'der Hund',
        en: 'the dog',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 2,
        de: 'die Katze',
        en: 'the cat',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 3,
        de: 'das Flugzeug',
        en: 'the airplane',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 4,
        de: 'gehen',
        en: 'to go',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 5,
        de: 'laufen',
        en: 'to run',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 6,
        de: 'schwimmen',
        en: 'to swim',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 7,
        de: 'klein',
        en: 'small',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 8,
        de: 'schnell',
        en: 'fast',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 9,
        de: 'kompliziert',
        en: 'complicated',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 10,
        de: 'oft',
        en: 'often',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 11,
        de: 'manchmal',
        en: 'sometimes',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 12,
        de: 'selten',
        en: 'rarely',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 13,
        de: 'das Haus',
        en: 'the house',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 14,
        de: 'der Baum',
        en: 'the tree',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 15,
        de: 'die Universität',
        en: 'the university',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 16,
        de: 'essen',
        en: 'to eat',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 17,
        de: 'trinken',
        en: 'to drink',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 18,
        de: 'verstehen',
        en: 'to understand',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 19,
        de: 'alt',
        en: 'old',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 20,
        de: 'neu',
        en: 'new',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 21,
        de: 'unmöglich',
        en: 'impossible',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 22,
        de: 'heute',
        en: 'today',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 23,
        de: 'gestern',
        en: 'yesterday',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 24,
        de: 'übermorgen',
        en: 'the day after tomorrow',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 25,
        de: 'das Auto',
        en: 'the car',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 26,
        de: 'der Stuhl',
        en: 'the chair',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 27,
        de: 'die Bibliothek',
        en: 'the library',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 28,
        de: 'schreiben',
        en: 'to write',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 29,
        de: 'lesen',
        en: 'to read',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 30,
        de: 'diskutieren',
        en: 'to discuss',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 31,
        de: 'gut',
        en: 'good',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 32,
        de: 'schlecht',
        en: 'bad',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 33,
        de: 'fantastisch',
        en: 'fantastic',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 34,
        de: 'jetzt',
        en: 'now',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 35,
        de: 'bald',
        en: 'soon',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 36,
        de: 'plötzlich',
        en: 'suddenly',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 37,
        de: 'das Buch',
        en: 'the book',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 38,
        de: 'der Tisch',
        en: 'the table',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 39,
        de: 'die Apotheke',
        en: 'the pharmacy',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 40,
        de: 'spielen',
        en: 'to play',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 41,
        de: 'arbeiten',
        en: 'to work',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 42,
        de: 'entwickeln',
        en: 'to develop',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 43,
        de: 'schön',
        en: 'beautiful',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 44,
        de: 'hässlich',
        en: 'ugly',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 45,
        de: 'erstaunlich',
        en: 'amazing',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 46,
        de: 'hier',
        en: 'here',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 47,
        de: 'dort',
        en: 'there',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 48,
        de: 'nirgendwo',
        en: 'nowhere',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 49,
        de: 'der Apfel',
        en: 'the apple',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 50,
        de: 'die Lampe',
        en: 'the lamp',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 51,
        de: 'das Krankenhaus',
        en: 'the hospital',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 52,
        de: 'kaufen',
        en: 'to buy',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 53,
        de: 'verkaufen',
        en: 'to sell',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 54,
        de: 'untersuchen',
        en: 'to investigate',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 55,
        de: 'warm',
        en: 'warm',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 56,
        de: 'kalt',
        en: 'cold',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 57,
        de: 'gefährlich',
        en: 'dangerous',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 58,
        de: 'draußen',
        en: 'outside',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 59,
        de: 'drinnen',
        en: 'inside',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 60,
        de: 'überall',
        en: 'everywhere',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 61,
        de: 'das Bett',
        en: 'the bed',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 62,
        de: 'die Tür',
        en: 'the door',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 63,
        de: 'die Gesellschaft',
        en: 'the society',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 64,
        de: 'singen',
        en: 'to sing',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 65,
        de: 'tanzen',
        en: 'to dance',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 66,
        de: 'analysieren',
        en: 'to analyze',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 67,
        de: 'hell',
        en: 'bright',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 68,
        de: 'dunkel',
        en: 'dark',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 69,
        de: 'unverständlich',
        en: 'incomprehensible',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 70,
        de: 'früh',
        en: 'early',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 71,
        de: 'spät',
        en: 'late',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 72,
        de: 'zufällig',
        en: 'randomly',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 73,
        de: 'der Stift',
        en: 'the pen',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 74,
        de: 'das Fenster',
        en: 'the window',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 75,
        de: 'das Museum',
        en: 'the museum',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 76,
        de: 'kochen',
        en: 'to cook',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 77,
        de: 'fahren',
        en: 'to drive',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 78,
        de: 'korrigieren',
        en: 'to correct',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 79,
        de: 'sauber',
        en: 'clean',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 80,
        de: 'schmutzig',
        en: 'dirty',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 81,
        de: 'unersetzlich',
        en: 'irreplaceable',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 82,
        de: 'gern',
        en: 'gladly',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 83,
        de: 'langsam',
        en: 'slowly',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 84,
        de: 'vorsichtig',
        en: 'carefully',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 85,
        de: 'der Computer',
        en: 'the computer',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 86,
        de: 'der Fernseher',
        en: 'the television',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 87,
        de: 'das Mikroskop',
        en: 'the microscope',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 88,
        de: 'hören',
        en: 'to hear',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 89,
        de: 'sehen',
        en: 'to see',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 90,
        de: 'interpretieren',
        en: 'to interpret',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 91,
        de: 'glücklich',
        en: 'happy',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 92,
        de: 'traurig',
        en: 'sad',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 93,
        de: 'unbeschreiblich',
        en: 'indescribable',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 94,
        de: 'leise',
        en: 'quietly',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 95,
        de: 'laut',
        en: 'loudly',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 96,
        de: 'unbemerkt',
        en: 'unnoticed',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 97,
        de: 'der Uhr',
        en: 'the clock',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 98,
        de: 'der Sofa',
        en: 'the sofa',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 99,
        de: 'die Regierung',
        en: 'the government',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 100,
        de: 'der Garten',
        en: 'the garden',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 101,
        de: 'malen',
        en: 'to paint',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 102,
        de: 'freundlich',
        en: 'friendly',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 103,
        de: 'sofort',
        en: 'immediately',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 104,
        de: 'die Straße',
        en: 'the street',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 105,
        de: 'springen',
        en: 'to jump',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 106,
        de: 'müde',
        en: 'tired',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 107,
        de: 'irgendwo',
        en: 'somewhere',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 108,
        de: 'das Fahrrad',
        en: 'the bicycle',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 109,
        de: 'schlafen',
        en: 'to sleep',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 110,
        de: 'interessant',
        en: 'interesting',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 111,
        de: 'niemals',
        en: 'never',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 112,
        de: 'der Bruder',
        en: 'the brother',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 113,
        de: 'öffnen',
        en: 'to open',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 114,
        de: 'stark',
        en: 'strong',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 115,
        de: 'täglich',
        en: 'daily',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 116,
        de: 'die Schwester',
        en: 'the sister',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 117,
        de: 'schließen',
        en: 'to close',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 118,
        de: 'schwach',
        en: 'weak',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 119,
        de: 'nachts',
        en: 'at night',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 120,
        de: 'das Wasser',
        en: 'the water',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 121,
        de: 'helfen',
        en: 'to help',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 122,
        de: 'wichtig',
        en: 'important',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 123,
        de: 'morgens',
        en: 'in the morning',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 124,
        de: 'der Kaffee',
        en: 'the coffee',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 125,
        de: 'warten',
        en: 'to wait',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 126,
        de: 'lecker',
        en: 'delicious',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 127,
        de: 'abends',
        en: 'in the evening',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 128,
        de: 'die Schule',
        en: 'the school',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 129,
        de: 'lernen',
        en: 'to learn',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 130,
        de: 'schwierig',
        en: 'difficult',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 131,
        de: 'drüben',
        en: 'over there',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 132,
        de: 'das Brot',
        en: 'the bread',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 133,
        de: 'fragen',
        en: 'to ask',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 134,
        de: 'einfach',
        en: 'simple',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 135,
        de: 'vorne',
        en: 'in front',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 136,
        de: 'der Zug',
        en: 'the train',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 137,
        de: 'antworten',
        en: 'to answer',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 138,
        de: 'teuer',
        en: 'expensive',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 139,
        de: 'hinten',
        en: 'at the back',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 140,
        de: 'die Stadt',
        en: 'the city',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 141,
        de: 'reisen',
        en: 'to travel',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 142,
        de: 'billig',
        en: 'cheap',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 143,
        de: 'oben',
        en: 'above',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 144,
        de: 'das Meer',
        en: 'the sea',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 145,
        de: 'spielen',
        en: 'to play',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 146,
        de: 'nass',
        en: 'wet',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 147,
        de: 'unten',
        en: 'below',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 148,
        de: 'der Himmel',
        en: 'the sky',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 149,
        de: 'fliegen',
        en: 'to fly',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 150,
        de: 'trocken',
        en: 'dry',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 151,
        de: 'drunter',
        en: 'underneath',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 152,
        de: 'die Sonne',
        en: 'the sun',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 153,
        de: 'scheinen',
        en: 'to shine',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 154,
        de: 'heiß',
        en: 'hot',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 155,
        de: 'drüber',
        en: 'over',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 156,
        de: 'das Wetter',
        en: 'the weather',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 157,
        de: 'regnen',
        en: 'to rain',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 158,
        de: 'windig',
        en: 'windy',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 159,
        de: 'links',
        en: 'left',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 160,
        de: 'der Schnee',
        en: 'the snow',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 161,
        de: 'schneien',
        en: 'to snow',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 162,
        de: 'kalt',
        en: 'cold',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 163,
        de: 'rechts',
        en: 'right',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 164,
        de: 'die Wolke',
        en: 'the cloud',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 165,
        de: 'bedecken',
        en: 'to cover',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 166,
        de: 'bewölkt',
        en: 'cloudy',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 167,
        de: 'geradeaus',
        en: 'straight ahead',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 168,
        de: 'das Feuer',
        en: 'the fire',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 169,
        de: 'brennen',
        en: 'to burn',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 170,
        de: 'gefährlich',
        en: 'dangerous',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 171,
        de: 'rückwärts',
        en: 'backwards',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 172,
        de: 'der Berg',
        en: 'the mountain',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 173,
        de: 'klettern',
        en: 'to climb',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 174,
        de: 'hoch',
        en: 'high',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 175,
        de: 'vorwärts',
        en: 'forwards',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 176,
        de: 'die Brücke',
        en: 'the bridge',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 177,
        de: 'überqueren',
        en: 'to cross',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 178,
        de: 'stabil',
        en: 'stable',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 179,
        de: 'seitwärts',
        en: 'sideways',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 180,
        de: 'das Papier',
        en: 'the paper',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 181,
        de: 'zeichnen',
        en: 'to draw',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 182,
        de: 'dünn',
        en: 'thin',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 183,
        de: 'nochmals',
        en: 'again',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 184,
        de: 'der Schlüssel',
        en: 'the key',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 185,
        de: 'verlieren',
        en: 'to lose',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 186,
        de: 'verloren',
        en: 'lost',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 187,
        de: 'zuerst',
        en: 'first',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 188,
        de: 'die Tasche',
        en: 'the bag',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 189,
        de: 'tragen',
        en: 'to carry',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 190,
        de: 'schwer',
        en: 'heavy',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 191,
        de: 'zuletzt',
        en: 'last',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 192,
        de: 'das Geld',
        en: 'the money',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 193,
        de: 'sparen',
        en: 'to save',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 194,
        de: 'reich',
        en: 'rich',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 195,
        de: 'besonders',
        en: 'especially',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 196,
        de: 'der Markt',
        en: 'the market',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 197,
        de: 'handeln',
        en: 'to trade',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 198,
        de: 'voll',
        en: 'full',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 199,
        de: 'kaum',
        en: 'barely',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 200,
        de: 'die Küche',
        en: 'the kitchen',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 201,
        de: 'backen',
        en: 'to bake',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 202,
        de: 'lustig',
        en: 'funny',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 203,
        de: 'beinahe',
        en: 'almost',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 204,
        de: 'das Fensterbrett',
        en: 'the windowsill',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 205,
        de: 'putzen',
        en: 'to clean',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 206,
        de: 'sauber',
        en: 'clean',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 207,
        de: 'völlig',
        en: 'completely',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 208,
        de: 'der Spiegel',
        en: 'the mirror',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 209,
        de: 'reflektieren',
        en: 'to reflect',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 210,
        de: 'klar',
        en: 'clear',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 211,
        de: 'teilweise',
        en: 'partially',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 212,
        de: 'die Wand',
        en: 'the wall',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 213,
        de: 'streichen',
        en: 'to paint',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 214,
        de: 'bunt',
        en: 'colorful',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 215,
        de: 'hauptsächlich',
        en: 'mainly',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 216,
        de: 'das Dach',
        en: 'the roof',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 217,
        de: 'reparieren',
        en: 'to repair',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 218,
        de: 'kaputt',
        en: 'broken',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 219,
        de: 'selten',
        en: 'rarely',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 220,
        de: 'der Keller',
        en: 'the basement',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 221,
        de: 'lagern',
        en: 'to store',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 222,
        de: 'dunkel',
        en: 'dark',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 223,
        de: 'häufig',
        en: 'frequently',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 224,
        de: 'die Treppe',
        en: 'the stairs',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 225,
        de: 'steigen',
        en: 'to climb',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 226,
        de: 'steil',
        en: 'steep',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 227,
        de: 'gelegentlich',
        en: 'occasionally',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 228,
        de: 'das Wohnzimmer',
        en: 'the living room',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 229,
        de: 'entspannen',
        en: 'to relax',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 230,
        de: 'gemütlich',
        en: 'cozy',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 231,
        de: 'regelmäßig',
        en: 'regularly',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 232,
        de: 'der Balkon',
        en: 'the balcony',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 233,
        de: 'sitzen',
        en: 'to sit',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 234,
        de: 'sonnig',
        en: 'sunny',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 235,
        de: 'ständig',
        en: 'constantly',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 236,
        de: 'die Garage',
        en: 'the garage',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 237,
        de: 'parken',
        en: 'to park',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 238,
        de: 'eng',
        en: 'narrow',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 239,
        de: 'meistens',
        en: 'mostly',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 240,
        de: 'das Büro',
        en: 'the office',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 241,
        de: 'organisieren',
        en: 'to organize',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 242,
        de: 'ordentlich',
        en: 'tidy',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 243,
        de: 'normalerweise',
        en: 'normally',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 244,
        de: 'der Fluss',
        en: 'the river',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 245,
        de: 'fließen',
        en: 'to flow',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 246,
        de: 'breit',
        en: 'wide',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 247,
        de: 'ständig',
        en: 'constantly',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 248,
        de: 'die Insel',
        en: 'the island',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 249,
        de: 'entdecken',
        en: 'to discover',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 250,
        de: 'einsam',
        en: 'lonely',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 251,
        de: 'gelegentlich',
        en: 'occasionally',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 252,
        de: 'das Tal',
        en: 'the valley',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 253,
        de: 'wandern',
        en: 'to hike',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 254,
        de: 'tief',
        en: 'deep',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 255,
        de: 'regelmäßig',
        en: 'regularly',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 256,
        de: 'der Wald',
        en: 'the forest',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 257,
        de: 'spazieren',
        en: 'to stroll',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 258,
        de: 'ruhig',
        en: 'calm',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 259,
        de: 'meistens',
        en: 'mostly',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 260,
        de: 'die Wiese',
        en: 'the meadow',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 261,
        de: 'liegen',
        en: 'to lie',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 262,
        de: 'grün',
        en: 'green',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 263,
        de: 'ausnahmsweise',
        en: 'exceptionally',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 264,
        de: 'das Feld',
        en: 'the field',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 265,
        de: 'pflanzen',
        en: 'to plant',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 266,
        de: 'fruchtbar',
        en: 'fertile',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 267,
        de: 'direkt',
        en: 'directly',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 268,
        de: 'der Bauernhof',
        en: 'the farm',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 269,
        de: 'ernten',
        en: 'to harvest',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 270,
        de: 'ländlich',
        en: 'rural',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 271,
        de: 'gelegentlich',
        en: 'occasionally',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 272,
        de: 'die Kuh',
        en: 'the cow',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 273,
        de: 'melken',
        en: 'to milk',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 274,
        de: 'gesund',
        en: 'healthy',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 275,
        de: 'regelmäßig',
        en: 'regularly',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 276,
        de: 'das Pferd',
        en: 'the horse',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 277,
        de: 'reiten',
        en: 'to ride',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 278,
        de: 'schnell',
        en: 'fast',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 279,
        de: 'meistens',
        en: 'mostly',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 280,
        de: 'der Vogel',
        en: 'the bird',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 281,
        de: 'zwitschern',
        en: 'to chirp',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 282,
        de: 'bunt',
        en: 'colorful',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 283,
        de: 'neuerdings',
        en: 'recently',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 284,
        de: 'die Blume',
        en: 'the flower',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 285,
        de: 'blühen',
        en: 'to bloom',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 286,
        de: 'schön',
        en: 'beautiful',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 287,
        de: 'ständig',
        en: 'constantly',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 288,
        de: 'das Gras',
        en: 'the grass',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 289,
        de: 'wachsen',
        en: 'to grow',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 290,
        de: 'frisch',
        en: 'fresh',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 291,
        de: 'gelegentlich',
        en: 'occasionally',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 292,
        de: 'der Stein',
        en: 'the stone',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 293,
        de: 'werfen',
        en: 'to throw',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 294,
        de: 'hart',
        en: 'hard',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 295,
        de: 'regelmäßig',
        en: 'regularly',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 296,
        de: 'die Erde',
        en: 'the soil',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 297,
        de: 'graben',
        en: 'to dig',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 298,
        de: 'weich',
        en: 'soft',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 299,
        de: 'meistens',
        en: 'mostly',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 300,
        de: 'das Metall',
        en: 'the metal',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 301,
        de: 'schmieden',
        en: 'to forge',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 302,
        de: 'glänzend',
        en: 'shiny',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 303,
        de: 'selten',
        en: 'rarely',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 304,
        de: 'der Kunststoff',
        en: 'the plastic',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 305,
        de: 'formen',
        en: 'to shape',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 306,
        de: 'flexibel',
        en: 'flexible',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 307,
        de: 'ständig',
        en: 'constantly',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 308,
        de: 'die Baumwolle',
        en: 'the cotton',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 309,
        de: 'weben',
        en: 'to weave',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 310,
        de: 'weich',
        en: 'soft',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 311,
        de: 'gelegentlich',
        en: 'occasionally',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 312,
        de: 'das Leder',
        en: 'the leather',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 313,
        de: 'nähen',
        en: 'to sew',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 314,
        de: 'robust',
        en: 'robust',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 315,
        de: 'regelmäßig',
        en: 'regularly',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 316,
        de: 'der Stoff',
        en: 'the fabric',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 317,
        de: 'schneiden',
        en: 'to cut',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 318,
        de: 'fein',
        en: 'fine',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 319,
        de: 'meistens',
        en: 'mostly',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 320,
        de: 'die Farbe',
        en: 'the color',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 321,
        de: 'mischen',
        en: 'to mix',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 322,
        de: 'kräftig',
        en: 'strong',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 323,
        de: 'selten',
        en: 'rarely',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 324,
        de: 'das Licht',
        en: 'the light',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 325,
        de: 'leuchten',
        en: 'to shine',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 326,
        de: 'hell',
        en: 'bright',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 327,
        de: 'ständig',
        en: 'constantly',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 328,
        de: 'der Schatten',
        en: 'the shadow',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 329,
        de: 'folgen',
        en: 'to follow',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 330,
        de: 'dunkel',
        en: 'dark',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 331,
        de: 'gelegentlich',
        en: 'occasionally',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 332,
        de: 'die Stimme',
        en: 'the voice',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 333,
        de: 'sprechen',
        en: 'to speak',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 334,
        de: 'laut',
        en: 'loud',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 335,
        de: 'regelmäßig',
        en: 'regularly',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 336,
        de: 'das Lied',
        en: 'the song',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 337,
        de: 'komponieren',
        en: 'to compose',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 338,
        de: 'melodisch',
        en: 'melodic',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 339,
        de: 'meistens',
        en: 'mostly',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 340,
        de: 'der Ton',
        en: 'the tone',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 341,
        de: 'klingen',
        en: 'to sound',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 342,
        de: 'klar',
        en: 'clear',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 343,
        de: 'selten',
        en: 'rarely',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 344,
        de: 'die Musik',
        en: 'the music',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 345,
        de: 'spielen',
        en: 'to play',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 346,
        de: 'harmonisch',
        en: 'harmonious',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 347,
        de: 'ständig',
        en: 'constantly',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 348,
        de: 'das Konzert',
        en: 'the concert',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 349,
        de: 'besuchen',
        en: 'to visit',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 350,
        de: 'lebendig',
        en: 'lively',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 351,
        de: 'gelegentlich',
        en: 'occasionally',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 352,
        de: 'der Film',
        en: 'the film',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 353,
        de: 'drehen',
        en: 'to shoot',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 354,
        de: 'spannend',
        en: 'exciting',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 355,
        de: 'regelmäßig',
        en: 'regularly',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 356,
        de: 'die Kamera',
        en: 'the camera',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 357,
        de: 'fotografieren',
        en: 'to photograph',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 358,
        de: 'scharf',
        en: 'sharp',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 359,
        de: 'meistens',
        en: 'mostly',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 360,
        de: 'das Bild',
        en: 'the picture',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 361,
        de: 'malen',
        en: 'to paint',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 362,
        de: 'farbig',
        en: 'colorful',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 363,
        de: 'selten',
        en: 'rarely',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 364,
        de: 'der Künstler',
        en: 'the artist',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 365,
        de: 'erschaffen',
        en: 'to create',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 366,
        de: 'kreativ',
        en: 'creative',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 367,
        de: 'ständig',
        en: 'constantly',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 368,
        de: 'die Ausstellung',
        en: 'the exhibition',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 369,
        de: 'zeigen',
        en: 'to show',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 370,
        de: 'interessant',
        en: 'interesting',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 371,
        de: 'gelegentlich',
        en: 'occasionally',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 372,
        de: 'das Theater',
        en: 'the theater',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 373,
        de: 'aufführen',
        en: 'to perform',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 374,
        de: 'dramatisch',
        en: 'dramatic',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 375,
        de: 'regelmäßig',
        en: 'regularly',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 376,
        de: 'der Schauspieler',
        en: 'the actor',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 377,
        de: 'spielen',
        en: 'to play',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 378,
        de: 'talentiert',
        en: 'talented',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 379,
        de: 'meistens',
        en: 'mostly',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 380,
        de: 'die Bühne',
        en: 'the stage',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 381,
        de: 'betreten',
        en: 'to enter',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 382,
        de: 'groß',
        en: 'big',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 383,
        de: 'selten',
        en: 'rarely',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 384,
        de: 'das Publikum',
        en: 'the audience',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 385,
        de: 'applaudieren',
        en: 'to applaud',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 386,
        de: 'begeistert',
        en: 'enthusiastic',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 387,
        de: 'ständig',
        en: 'constantly',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 388,
        de: 'der Applaus',
        en: 'the applause',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 389,
        de: 'erklingen',
        en: 'to resound',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 390,
        de: 'laut',
        en: 'loud',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 391,
        de: 'gelegentlich',
        en: 'occasionally',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 392,
        de: 'die Zeitung',
        en: 'the newspaper',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 393,
        de: 'berichten',
        en: 'to report',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 394,
        de: 'aktuell',
        en: 'current',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 395,
        de: 'regelmäßig',
        en: 'regularly',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 396,
        de: 'das Magazin',
        en: 'the magazine',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 397,
        de: 'veröffentlichen',
        en: 'to publish',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 398,
        de: 'populär',
        en: 'popular',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 399,
        de: 'meistens',
        en: 'mostly',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 400,
        de: 'der Artikel',
        en: 'the article',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 401,
        de: 'schreiben',
        en: 'to write',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 402,
        de: 'informativ',
        en: 'informative',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 403,
        de: 'grundsätzlich',
        en: 'fundamentally',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 404,
        de: 'die Nachricht',
        en: 'the message',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 405,
        de: 'senden',
        en: 'to send',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 406,
        de: 'wichtig',
        en: 'important',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 407,
        de: 'immer',
        en: 'always',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 408,
        de: 'das Radio',
        en: 'the radio',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 409,
        de: 'hören',
        en: 'to hear',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 410,
        de: 'laut',
        en: 'loud',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 411,
        de: 'gelegentlich',
        en: 'occasionally',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 412,
        de: 'der Sender',
        en: 'the station',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 413,
        de: 'übertragen',
        en: 'to broadcast',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 414,
        de: 'regional',
        en: 'regional',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 415,
        de: 'regelmäßig',
        en: 'regularly',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 416,
        de: 'die Werbung',
        en: 'the advertisement',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 417,
        de: 'zeigen',
        en: 'to show',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 418,
        de: 'auffällig',
        en: 'conspicuous',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 419,
        de: 'meistens',
        en: 'mostly',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 420,
        de: 'das Plakat',
        en: 'the poster',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 421,
        de: 'kleben',
        en: 'to stick',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 422,
        de: 'bunt',
        en: 'colorful',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 423,
        de: 'selten',
        en: 'rarely',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 424,
        de: 'der Brief',
        en: 'the letter',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 425,
        de: 'schicken',
        en: 'to send',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 426,
        de: 'persönlich',
        en: 'personal',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 427,
        de: 'ständig',
        en: 'constantly',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 428,
        de: 'die Post',
        en: 'the mail',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 429,
        de: 'liefern',
        en: 'to deliver',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 430,
        de: 'zuverlässig',
        en: 'reliable',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 431,
        de: 'gelegentlich',
        en: 'occasionally',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 432,
        de: 'das Paket',
        en: 'the package',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 433,
        de: 'öffnen',
        en: 'to open',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 434,
        de: 'schwer',
        en: 'heavy',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 435,
        de: 'regelmäßig',
        en: 'regularly',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 436,
        de: 'der Umschlag',
        en: 'the envelope',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 437,
        de: 'verschließen',
        en: 'to seal',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 438,
        de: 'sicher',
        en: 'secure',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 439,
        de: 'meistens',
        en: 'mostly',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 440,
        de: 'die Adresse',
        en: 'the address',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 441,
        de: 'schreiben',
        en: 'to write',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 442,
        de: 'korrekt',
        en: 'correct',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 443,
        de: 'bestimmt',
        en: 'certainly',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 444,
        de: 'das Telefon',
        en: 'the telephone',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 445,
        de: 'klingeln',
        en: 'to ring',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 446,
        de: 'laut',
        en: 'loud',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 447,
        de: 'durchgehend',
        en: 'continuously',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 448,
        de: 'der Anruf',
        en: 'the call',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 449,
        de: 'beantworten',
        en: 'to answer',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 450,
        de: 'dringend',
        en: 'urgent',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 451,
        de: 'gelegentlich',
        en: 'occasionally',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 452,
        de: 'die Nummer',
        en: 'the number',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 453,
        de: 'wählen',
        en: 'to dial',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 454,
        de: 'richtig',
        en: 'correct',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 455,
        de: 'regelmäßig',
        en: 'regularly',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 456,
        de: 'das Gespräch',
        en: 'the conversation',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 457,
        de: 'führen',
        en: 'to lead',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 458,
        de: 'freundlich',
        en: 'friendly',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 459,
        de: 'meistens',
        en: 'mostly',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 460,
        de: 'der Termin',
        en: 'the appointment',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 461,
        de: 'vereinbaren',
        en: 'to arrange',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 462,
        de: 'wichtig',
        en: 'important',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 463,
        de: 'selten',
        en: 'rarely',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 464,
        de: 'die Uhrzeit',
        en: 'the time',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 465,
        de: 'ablesen',
        en: 'to read',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 466,
        de: 'genau',
        en: 'exact',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 467,
        de: 'gewöhnlich',
        en: 'usually',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 468,
        de: 'das Datum',
        en: 'the date',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 469,
        de: 'notieren',
        en: 'to note',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 470,
        de: 'aktuell',
        en: 'current',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 471,
        de: 'gelegentlich',
        en: 'occasionally',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 472,
        de: 'der Kalender',
        en: 'the calendar',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 473,
        de: 'planen',
        en: 'to plan',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 474,
        de: 'übersichtlich',
        en: 'clear',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 475,
        de: 'regelmäßig',
        en: 'regularly',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 476,
        de: 'die Woche',
        en: 'the week',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 477,
        de: 'vergehen',
        en: 'to pass',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 478,
        de: 'schnell',
        en: 'fast',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 479,
        de: 'meistens',
        en: 'mostly',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 480,
        de: 'das Jahr',
        en: 'the year',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 481,
        de: 'enden',
        en: 'to end',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 482,
        de: 'lang',
        en: 'long',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 483,
        de: 'tatsächlich',
        en: 'actually',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 484,
        de: 'der Monat',
        en: 'the month',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 485,
        de: 'beginnen',
        en: 'to begin',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 486,
        de: 'kurz',
        en: 'short',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 487,
        de: 'fortwährend',
        en: 'perpetually',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 488,
        de: 'die Minute',
        en: 'the minute',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 489,
        de: 'verstreichen',
        en: 'to elapse',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 490,
        de: 'langsam',
        en: 'slow',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 491,
        de: 'gelegentlich',
        en: 'occasionally',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 492,
        de: 'das Jahrhundert',
        en: 'the century',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 493,
        de: 'dauern',
        en: 'to last',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 494,
        de: 'historisch',
        en: 'historical',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 495,
        de: 'regelmäßig',
        en: 'regularly',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 496,
        de: 'der Moment',
        en: 'the moment',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 497,
        de: 'genießen',
        en: 'to enjoy',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 498,
        de: 'einzigartig',
        en: 'unique',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 499,
        de: 'meistens',
        en: 'mostly',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 500,
        de: 'die Sekunde',
        en: 'the second',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 501,
        de: 'zählen',
        en: 'to count',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 502,
        de: 'präzise',
        en: 'precise',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 503,
        de: 'wirklich',
        en: 'really',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 504,
        de: 'das Jahrzehnt',
        en: 'the decade',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 505,
        de: 'prägen',
        en: 'to shape',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 506,
        de: 'bedeutend',
        en: 'significant',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 507,
        de: 'andauernd',
        en: 'continuously',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 508,
        de: 'der Augenblick',
        en: 'the instant',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 509,
        de: 'erleben',
        en: 'to experience',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 510,
        de: 'intensiv',
        en: 'intense',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 511,
        de: 'gelegentlich',
        en: 'occasionally',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 512,
        de: 'die Epoche',
        en: 'the epoch',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 513,
        de: 'beeinflussen',
        en: 'to influence',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 514,
        de: 'kulturell',
        en: 'cultural',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 515,
        de: 'regelmäßig',
        en: 'regularly',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 516,
        de: 'das Zeitalter',
        en: 'the age',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 517,
        de: 'verändern',
        en: 'to change',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 518,
        de: 'revolutionär',
        en: 'revolutionary',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 519,
        de: 'meistens',
        en: 'mostly',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 520,
        de: 'der Zeitraum',
        en: 'the period',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 521,
        de: 'umfassen',
        en: 'to encompass',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 522,
        de: 'begrenzt',
        en: 'limited',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 523,
        de: 'möglicherweise',
        en: 'possibly',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 524,
        de: 'die Ära',
        en: 'the era',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 525,
        de: 'enden',
        en: 'to end',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 526,
        de: 'prägend',
        en: 'formative',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 527,
        de: 'stets',
        en: 'always',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 528,
        de: 'das Millennium',
        en: 'the millennium',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 529,
        de: 'beginnen',
        en: 'to begin',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 530,
        de: 'epochal',
        en: 'epochal',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 531,
        de: 'gelegentlich',
        en: 'occasionally',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 532,
        de: 'der Zyklus',
        en: 'the cycle',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 533,
        de: 'wiederholen',
        en: 'to repeat',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 534,
        de: 'zyklisch',
        en: 'cyclical',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 535,
        de: 'regelmäßig',
        en: 'regularly',
        grammarType: 'adverb',
        level: 'hard'
    },
    {
        id: 536,
        de: 'die Phase',
        en: 'the phase',
        grammarType: 'noun',
        level: 'easy'
    },
    {
        id: 537,
        de: 'durchlaufen',
        en: 'to undergo',
        grammarType: 'verb',
        level: 'medium'
    },
    {
        id: 538,
        de: 'temporär',
        en: 'temporary',
        grammarType: 'adjective',
        level: 'hard'
    },
    {
        id: 539,
        de: 'meistens',
        en: 'mostly',
        grammarType: 'adverb',
        level: 'easy'
    },
    {
        id: 540,
        de: 'das Stadium',
        en: 'the stage',
        grammarType: 'noun',
        level: 'medium'
    },
    {
        id: 541,
        de: 'erreichen',
        en: 'to reach',
        grammarType: 'verb',
        level: 'hard'
    },
    {
        id: 542,
        de: 'fortgeschritten',
        en: 'advanced',
        grammarType: 'adjective',
        level: 'easy'
    },
    {
        id: 543,
        de: 'wahrscheinlich',
        en: 'probably',
        grammarType: 'adverb',
        level: 'medium'
    },
    {
        id: 544,
        de: 'der Abschnitt',
        en: 'the section',
        grammarType: 'noun',
        level: 'hard'
    },
    {
        id: 545,
        de: 'abschließen',
        en: 'to complete',
        grammarType: 'verb',
        level: 'easy'
    },
    {
        id: 546,
        de: 'abgeschlossen',
        en: 'completed',
        grammarType: 'adjective',
        level: 'medium'
    },
    {
        id: 547,
        de: 'pausenlos',
        en: 'incessantly',
        grammarType: 'adverb',
        level: 'hard'
    }
]

export { vocabWords }