'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'pokeLists',
      [
        {
          id: 1,
          name: 'Bulbasaur',
          type_ids: '[12,4]',
          // created_at: new Date()
        },
        {
          id: 2,
          name: 'Ivysaur',
          type_ids: '[12,4]',
          // created_at: new Date()
        },
        {
          id: 3,
          name: 'Venusaur',
          type_ids: '[12,4]',
          // created_at: new Date()
        },
        {
          id: 4,
          name: 'Charmander',
          type_ids: '[10]',
          // created_at: new Date()
        },
        {
          id: 5,
          name: 'Charmeleon',
          type_ids: '[10]',
          // created_at: new Date()
        },
        {
          id: 6,
          name: 'Charizard',
          type_ids: '[10,3]',
          // created_at: new Date()
        },
        {
          id: 7,
          name: 'Squirtle',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 8,
          name: 'Wartortle',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 9,
          name: 'Blastoise',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 10,
          name: 'Caterpie',
          type_ids: '[7]',
          // created_at: new Date()
        },
        {
          id: 11,
          name: 'Metapod',
          type_ids: '[7]',
          // created_at: new Date()
        },
        {
          id: 12,
          name: 'Butterfree',
          type_ids: '[7,3]',
          // created_at: new Date()
        },
        {
          id: 13,
          name: 'Weedle',
          type_ids: '[7,4]',
          // created_at: new Date()
        },
        {
          id: 14,
          name: 'Kakuna',
          type_ids: '[7,4]',
          // created_at: new Date()
        },
        {
          id: 15,
          name: 'Beedrill',
          type_ids: '[7,4]',
          // created_at: new Date()
        },
        {
          id: 16,
          name: 'Pidgey',
          type_ids: '[1,3]',
          // created_at: new Date()
        },
        {
          id: 17,
          name: 'Pidgeotto',
          type_ids: '[1,3]',
          // created_at: new Date()
        },
        {
          id: 18,
          name: 'Pidgeot',
          type_ids: '[1,3]',
          // created_at: new Date()
        },
        {
          id: 19,
          name: 'Rattata',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 20,
          name: 'Raticate',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 21,
          name: 'Spearow',
          type_ids: '[1,3]',
          // created_at: new Date()
        },
        {
          id: 22,
          name: 'Fearow',
          type_ids: '[1,3]',
          // created_at: new Date()
        },
        {
          id: 23,
          name: 'Ekans',
          type_ids: '[4]',
          // created_at: new Date()
        },
        {
          id: 24,
          name: 'Arbok',
          type_ids: '[4]',
          // created_at: new Date()
        },
        {
          id: 25,
          name: 'Pikachu',
          type_ids: '[13]',
          // created_at: new Date()
        },
        {
          id: 26,
          name: 'Raichu',
          type_ids: '[13]',
          // created_at: new Date()
        },
        {
          id: 27,
          name: 'Sandshrew',
          type_ids: '[5]',
          // created_at: new Date()
        },
        {
          id: 28,
          name: 'Sandslash',
          type_ids: '[5]',
          // created_at: new Date()
        },
        {
          id: 29,
          name: 'Nidoran♀',
          type_ids: '[4]',
          // created_at: new Date()
        },
        {
          id: 30,
          name: 'Nidorina',
          type_ids: '[4]',
          // created_at: new Date()
        },
        {
          id: 31,
          name: 'Nidoqueen',
          type_ids: '[4,5]',
          // created_at: new Date()
        },
        {
          id: 32,
          name: 'Nidoran♂',
          type_ids: '[4]',
          // created_at: new Date()
        },
        {
          id: 33,
          name: 'Nidorino',
          type_ids: '[4]',
          // created_at: new Date()
        },
        {
          id: 34,
          name: 'Nidoking',
          type_ids: '[4,5]',
          // created_at: new Date()
        },
        {
          id: 35,
          name: 'Clefairy',
          type_ids: '[18]',
          // created_at: new Date()
        },
        {
          id: 36,
          name: 'Clefable',
          type_ids: '[18]',
          // created_at: new Date()
        },
        {
          id: 37,
          name: 'Vulpix',
          type_ids: '[10]',
          // created_at: new Date()
        },
        {
          id: 38,
          name: 'Ninetales',
          type_ids: '[10]',
          // created_at: new Date()
        },
        {
          id: 39,
          name: 'Jigglypuff',
          type_ids: '[1,18]',
          // created_at: new Date()
        },
        {
          id: 40,
          name: 'Wigglytuff',
          type_ids: '[1,18]',
          // created_at: new Date()
        },
        {
          id: 41,
          name: 'Zubat',
          type_ids: '[4,3]',
          // created_at: new Date()
        },
        {
          id: 42,
          name: 'Golbat',
          type_ids: '[4,3]',
          // created_at: new Date()
        },
        {
          id: 43,
          name: 'Oddish',
          type_ids: '[12,4]',
          // created_at: new Date()
        },
        {
          id: 44,
          name: 'Gloom',
          type_ids: '[12,4]',
          // created_at: new Date()
        },
        {
          id: 45,
          name: 'Vileplume',
          type_ids: '[12,4]',
          // created_at: new Date()
        },
        {
          id: 46,
          name: 'Paras',
          type_ids: '[7,12]',
          // created_at: new Date()
        },
        {
          id: 47,
          name: 'Parasect',
          type_ids: '[7,12]',
          // created_at: new Date()
        },
        {
          id: 48,
          name: 'Venonat',
          type_ids: '[7,4]',
          // created_at: new Date()
        },
        {
          id: 49,
          name: 'Venomoth',
          type_ids: '[7,4]',
          // created_at: new Date()
        },
        {
          id: 50,
          name: 'Diglett',
          type_ids: '[5]',
          // created_at: new Date()
        },
        {
          id: 51,
          name: 'Dugtrio',
          type_ids: '[5]',
          // created_at: new Date()
        },
        {
          id: 52,
          name: 'Meowth',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 53,
          name: 'Persian',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 54,
          name: 'Psyduck',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 55,
          name: 'Golduck',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 56,
          name: 'Mankey',
          type_ids: '[2]',
          // created_at: new Date()
        },
        {
          id: 57,
          name: 'Primeape',
          type_ids: '[2]',
          // created_at: new Date()
        },
        {
          id: 58,
          name: 'Growlithe',
          type_ids: '[10]',
          // created_at: new Date()
        },
        {
          id: 59,
          name: 'Arcanine',
          type_ids: '[10]',
          // created_at: new Date()
        },
        {
          id: 60,
          name: 'Poliwag',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 61,
          name: 'Poliwhirl',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 62,
          name: 'Poliwrath',
          type_ids: '[11,2]',
          // created_at: new Date()
        },
        {
          id: 63,
          name: 'Abra',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 64,
          name: 'Kadabra',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 65,
          name: 'Alakazam',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 66,
          name: 'Machop',
          type_ids: '[2]',
          // created_at: new Date()
        },
        {
          id: 67,
          name: 'Machoke',
          type_ids: '[2]',
          // created_at: new Date()
        },
        {
          id: 68,
          name: 'Machamp',
          type_ids: '[2]',
          // created_at: new Date()
        },
        {
          id: 69,
          name: 'Bellsprout',
          type_ids: '[12,4]',
          // created_at: new Date()
        },
        {
          id: 70,
          name: 'Weepinbell',
          type_ids: '[12,4]',
          // created_at: new Date()
        },
        {
          id: 71,
          name: 'Victreebel',
          type_ids: '[12,4]',
          // created_at: new Date()
        },
        {
          id: 72,
          name: 'Tentacool',
          type_ids: '[11,4]',
          // created_at: new Date()
        },
        {
          id: 73,
          name: 'Tentacruel',
          type_ids: '[11,4]',
          // created_at: new Date()
        },
        {
          id: 74,
          name: 'Geodude',
          type_ids: '[6,5]',
          // created_at: new Date()
        },
        {
          id: 75,
          name: 'Graveler',
          type_ids: '[6,5]',
          // created_at: new Date()
        },
        {
          id: 76,
          name: 'Golem',
          type_ids: '[6,5]',
          // created_at: new Date()
        },
        {
          id: 77,
          name: 'Ponyta',
          type_ids: '[10]',
          // created_at: new Date()
        },
        {
          id: 78,
          name: 'Rapidash',
          type_ids: '[10]',
          // created_at: new Date()
        },
        {
          id: 79,
          name: 'Slowpoke',
          type_ids: '[11,14]',
          // created_at: new Date()
        },
        {
          id: 80,
          name: 'Slowbro',
          type_ids: '[11,14]',
          // created_at: new Date()
        },
        {
          id: 81,
          name: 'Magnemite',
          type_ids: '[13,9]',
          // created_at: new Date()
        },
        {
          id: 82,
          name: 'Magneton',
          type_ids: '[13,9]',
          // created_at: new Date()
        },
        {
          id: 83,
          name: "Farfetch'd",
          type_ids: '[1,3]',
          // created_at: new Date()
        },
        {
          id: 84,
          name: 'Doduo',
          type_ids: '[1,3]',
          // created_at: new Date()
        },
        {
          id: 85,
          name: 'Dodrio',
          type_ids: '[1,3]',
          // created_at: new Date()
        },
        {
          id: 86,
          name: 'Seel',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 87,
          name: 'Dewgong',
          type_ids: '[11,15]',
          // created_at: new Date()
        },
        {
          id: 88,
          name: 'Grimer',
          type_ids: '[4]',
          // created_at: new Date()
        },
        {
          id: 89,
          name: 'Muk',
          type_ids: '[4]',
          // created_at: new Date()
        },
        {
          id: 90,
          name: 'Shellder',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 91,
          name: 'Cloyster',
          type_ids: '[11,15]',
          // created_at: new Date()
        },
        {
          id: 92,
          name: 'Gastly',
          type_ids: '[8,4]',
          // created_at: new Date()
        },
        {
          id: 93,
          name: 'Haunter',
          type_ids: '[8,4]',
          // created_at: new Date()
        },
        {
          id: 94,
          name: 'Gengar',
          type_ids: '[8,4]',
          // created_at: new Date()
        },
        {
          id: 95,
          name: 'Onix',
          type_ids: '[6,5]',
          // created_at: new Date()
        },
        {
          id: 96,
          name: 'Drowzee',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 97,
          name: 'Hypno',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 98,
          name: 'Krabby',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 99,
          name: 'Kingler',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 100,
          name: 'Voltorb',
          type_ids: '[13]',
          // created_at: new Date()
        },
        {
          id: 101,
          name: 'Electrode',
          type_ids: '[13]',
          // created_at: new Date()
        },
        {
          id: 102,
          name: 'Exeggcute',
          type_ids: '[12,14]',
          // created_at: new Date()
        },
        {
          id: 103,
          name: 'Exeggutor',
          type_ids: '[12,14]',
          // created_at: new Date()
        },
        {
          id: 104,
          name: 'Cubone',
          type_ids: '[5]',
          // created_at: new Date()
        },
        {
          id: 105,
          name: 'Marowak',
          type_ids: '[5]',
          // created_at: new Date()
        },
        {
          id: 106,
          name: 'Hitmonlee',
          type_ids: '[2]',
          // created_at: new Date()
        },
        {
          id: 107,
          name: 'Hitmonchan',
          type_ids: '[2]',
          // created_at: new Date()
        },
        {
          id: 108,
          name: 'Lickitung',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 109,
          name: 'Koffing',
          type_ids: '[4]',
          // created_at: new Date()
        },
        {
          id: 110,
          name: 'Weezing',
          type_ids: '[4]',
          // created_at: new Date()
        },
        {
          id: 111,
          name: 'Rhyhorn',
          type_ids: '[5,6]',
          // created_at: new Date()
        },
        {
          id: 112,
          name: 'Rhydon',
          type_ids: '[5,6]',
          // created_at: new Date()
        },
        {
          id: 113,
          name: 'Chansey',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 114,
          name: 'Tangela',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 115,
          name: 'Kangaskhan',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 116,
          name: 'Horsea',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 117,
          name: 'Seadra',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 118,
          name: 'Goldeen',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 119,
          name: 'Seaking',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 120,
          name: 'Staryu',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 121,
          name: 'Starmie',
          type_ids: '[11,14]',
          // created_at: new Date()
        },
        {
          id: 122,
          name: 'Mr. Mime',
          type_ids: '[14,18]',
          // created_at: new Date()
        },
        {
          id: 123,
          name: 'Scyther',
          type_ids: '[7,3]',
          // created_at: new Date()
        },
        {
          id: 124,
          name: 'Jynx',
          type_ids: '[15,14]',
          // created_at: new Date()
        },
        {
          id: 125,
          name: 'Electabuzz',
          type_ids: '[13]',
          // created_at: new Date()
        },
        {
          id: 126,
          name: 'Magmar',
          type_ids: '[10]',
          // created_at: new Date()
        },
        {
          id: 127,
          name: 'Pinsir',
          type_ids: '[7]',
          // created_at: new Date()
        },
        {
          id: 128,
          name: 'Tauros',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 129,
          name: 'Magikarp',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 130,
          name: 'Gyarados',
          type_ids: '[11,3]',
          // created_at: new Date()
        },
        {
          id: 131,
          name: 'Lapras',
          type_ids: '[11,15]',
          // created_at: new Date()
        },
        {
          id: 132,
          name: 'Ditto',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 133,
          name: 'Eevee',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 134,
          name: 'Vaporeon',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 135,
          name: 'Jolteon',
          type_ids: '[13]',
          // created_at: new Date()
        },
        {
          id: 136,
          name: 'Flareon',
          type_ids: '[10]',
          // created_at: new Date()
        },
        {
          id: 137,
          name: 'Porygon',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 138,
          name: 'Omanyte',
          type_ids: '[6,11]',
          // created_at: new Date()
        },
        {
          id: 139,
          name: 'Omastar',
          type_ids: '[6,11]',
          // created_at: new Date()
        },
        {
          id: 140,
          name: 'Kabuto',
          type_ids: '[6,11]',
          // created_at: new Date()
        },
        {
          id: 141,
          name: 'Kabutops',
          type_ids: '[6,11]',
          // created_at: new Date()
        },
        {
          id: 142,
          name: 'Aerodactyl',
          type_ids: '[6,3]',
          // created_at: new Date()
        },
        {
          id: 143,
          name: 'Snorlax',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 144,
          name: 'Articuno',
          type_ids: '[15,3]',
          // created_at: new Date()
        },
        {
          id: 145,
          name: 'Zapdos',
          type_ids: '[13,3]',
          // created_at: new Date()
        },
        {
          id: 146,
          name: 'Moltres',
          type_ids: '[10,3]',
          // created_at: new Date()
        },
        {
          id: 147,
          name: 'Dratini',
          type_ids: '[16]',
          // created_at: new Date()
        },
        {
          id: 148,
          name: 'Dragonair',
          type_ids: '[16]',
          // created_at: new Date()
        },
        {
          id: 149,
          name: 'Dragonite',
          type_ids: '[16,3]',
          // created_at: new Date()
        },
        {
          id: 150,
          name: 'Mewtwo',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 151,
          name: 'Mew',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 152,
          name: 'Chikorita',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 153,
          name: 'Bayleef',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 154,
          name: 'Meganium',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 155,
          name: 'Cyndaquil',
          type_ids: '[10]',
          // created_at: new Date()
        },
        {
          id: 156,
          name: 'Quilava',
          type_ids: '[10]',
          // created_at: new Date()
        },
        {
          id: 157,
          name: 'Typhlosion',
          type_ids: '[10]',
          // created_at: new Date()
        },
        {
          id: 158,
          name: 'Totodile',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 159,
          name: 'Croconaw',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 160,
          name: 'Feraligatr',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 161,
          name: 'Sentret',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 162,
          name: 'Furret',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 163,
          name: 'Hoothoot',
          type_ids: '[1,3]',
          // created_at: new Date()
        },
        {
          id: 164,
          name: 'Noctowl',
          type_ids: '[1,3]',
          // created_at: new Date()
        },
        {
          id: 165,
          name: 'Ledyba',
          type_ids: '[7,3]',
          // created_at: new Date()
        },
        {
          id: 166,
          name: 'Ledian',
          type_ids: '[7,3]',
          // created_at: new Date()
        },
        {
          id: 167,
          name: 'Spinarak',
          type_ids: '[7,4]',
          // created_at: new Date()
        },
        {
          id: 168,
          name: 'Ariados',
          type_ids: '[7,4]',
          // created_at: new Date()
        },
        {
          id: 169,
          name: 'Crobat',
          type_ids: '[4,3]',
          // created_at: new Date()
        },
        {
          id: 170,
          name: 'Chinchou',
          type_ids: '[11,13]',
          // created_at: new Date()
        },
        {
          id: 171,
          name: 'Lanturn',
          type_ids: '[11,13]',
          // created_at: new Date()
        },
        {
          id: 172,
          name: 'Pichu',
          type_ids: '[13]',
          // created_at: new Date()
        },
        {
          id: 173,
          name: 'Cleffa',
          type_ids: '[18]',
          // created_at: new Date()
        },
        {
          id: 174,
          name: 'Igglybuff',
          type_ids: '[1,18]',
          // created_at: new Date()
        },
        {
          id: 175,
          name: 'Togepi',
          type_ids: '[18]',
          // created_at: new Date()
        },
        {
          id: 176,
          name: 'Togetic',
          type_ids: '[18,3]',
          // created_at: new Date()
        },
        {
          id: 177,
          name: 'Natu',
          type_ids: '[14,3]',
          // created_at: new Date()
        },
        {
          id: 178,
          name: 'Xatu',
          type_ids: '[14,3]',
          // created_at: new Date()
        },
        {
          id: 179,
          name: 'Mareep',
          type_ids: '[13]',
          // created_at: new Date()
        },
        {
          id: 180,
          name: 'Flaaffy',
          type_ids: '[13]',
          // created_at: new Date()
        },
        {
          id: 181,
          name: 'Ampharos',
          type_ids: '[13]',
          // created_at: new Date()
        },
        {
          id: 182,
          name: 'Bellossom',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 183,
          name: 'Marill',
          type_ids: '[11,18]',
          // created_at: new Date()
        },
        {
          id: 184,
          name: 'Azumarill',
          type_ids: '[11,18]',
          // created_at: new Date()
        },
        {
          id: 185,
          name: 'Sudowoodo',
          type_ids: '[6]',
          // created_at: new Date()
        },
        {
          id: 186,
          name: 'Politoed',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 187,
          name: 'Hoppip',
          type_ids: '[12,3]',
          // created_at: new Date()
        },
        {
          id: 188,
          name: 'Skiploom',
          type_ids: '[12,3]',
          // created_at: new Date()
        },
        {
          id: 189,
          name: 'Jumpluff',
          type_ids: '[12,3]',
          // created_at: new Date()
        },
        {
          id: 190,
          name: 'Aipom',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 191,
          name: 'Sunkern',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 192,
          name: 'Sunflora',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 193,
          name: 'Yanma',
          type_ids: '[7,3]',
          // created_at: new Date()
        },
        {
          id: 194,
          name: 'Wooper',
          type_ids: '[11,5]',
          // created_at: new Date()
        },
        {
          id: 195,
          name: 'Quagsire',
          type_ids: '[11,5]',
          // created_at: new Date()
        },
        {
          id: 196,
          name: 'Espeon',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 197,
          name: 'Umbreon',
          type_ids: '[17]',
          // created_at: new Date()
        },
        {
          id: 198,
          name: 'Murkrow',
          type_ids: '[17,3]',
          // created_at: new Date()
        },
        {
          id: 199,
          name: 'Slowking',
          type_ids: '[11,14]',
          // created_at: new Date()
        },
        {
          id: 200,
          name: 'Misdreavus',
          type_ids: '[8]',
          // created_at: new Date()
        },
        {
          id: 201,
          name: 'Unown',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 202,
          name: 'Wobbuffet',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 203,
          name: 'Girafarig',
          type_ids: '[1,14]',
          // created_at: new Date()
        },
        {
          id: 204,
          name: 'Pineco',
          type_ids: '[7]',
          // created_at: new Date()
        },
        {
          id: 205,
          name: 'Forretress',
          type_ids: '[7,9]',
          // created_at: new Date()
        },
        {
          id: 206,
          name: 'Dunsparce',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 207,
          name: 'Gligar',
          type_ids: '[5,3]',
          // created_at: new Date()
        },
        {
          id: 208,
          name: 'Steelix',
          type_ids: '[9,5]',
          // created_at: new Date()
        },
        {
          id: 209,
          name: 'Snubbull',
          type_ids: '[18]',
          // created_at: new Date()
        },
        {
          id: 210,
          name: 'Granbull',
          type_ids: '[18]',
          // created_at: new Date()
        },
        {
          id: 211,
          name: 'Qwilfish',
          type_ids: '[11,4]',
          // created_at: new Date()
        },
        {
          id: 212,
          name: 'Scizor',
          type_ids: '[7,9]',
          // created_at: new Date()
        },
        {
          id: 213,
          name: 'Shuckle',
          type_ids: '[7,6]',
          // created_at: new Date()
        },
        {
          id: 214,
          name: 'Heracross',
          type_ids: '[7,2]',
          // created_at: new Date()
        },
        {
          id: 215,
          name: 'Sneasel',
          type_ids: '[17,15]',
          // created_at: new Date()
        },
        {
          id: 216,
          name: 'Teddiursa',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 217,
          name: 'Ursaring',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 218,
          name: 'Slugma',
          type_ids: '[10]',
          // created_at: new Date()
        },
        {
          id: 219,
          name: 'Magcargo',
          type_ids: '[10,6]',
          // created_at: new Date()
        },
        {
          id: 220,
          name: 'Swinub',
          type_ids: '[15,5]',
          // created_at: new Date()
        },
        {
          id: 221,
          name: 'Piloswine',
          type_ids: '[15,5]',
          // created_at: new Date()
        },
        {
          id: 222,
          name: 'Corsola',
          type_ids: '[11,6]',
          // created_at: new Date()
        },
        {
          id: 223,
          name: 'Remoraid',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 224,
          name: 'Octillery',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 225,
          name: 'Delibird',
          type_ids: '[15,3]',
          // created_at: new Date()
        },
        {
          id: 226,
          name: 'Mantine',
          type_ids: '[11,3]',
          // created_at: new Date()
        },
        {
          id: 227,
          name: 'Skarmory',
          type_ids: '[9,3]',
          // created_at: new Date()
        },
        {
          id: 228,
          name: 'Houndour',
          type_ids: '[17,10]',
          // created_at: new Date()
        },
        {
          id: 229,
          name: 'Houndoom',
          type_ids: '[17,10]',
          // created_at: new Date()
        },
        {
          id: 230,
          name: 'Kingdra',
          type_ids: '[11,16]',
          // created_at: new Date()
        },
        {
          id: 231,
          name: 'Phanpy',
          type_ids: '[5]',
          // created_at: new Date()
        },
        {
          id: 232,
          name: 'Donphan',
          type_ids: '[5]',
          // created_at: new Date()
        },
        {
          id: 233,
          name: 'Porygon2',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 234,
          name: 'Stantler',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 235,
          name: 'Smeargle',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 236,
          name: 'Tyrogue',
          type_ids: '[2]',
          // created_at: new Date()
        },
        {
          id: 237,
          name: 'Hitmontop',
          type_ids: '[2]',
          // created_at: new Date()
        },
        {
          id: 238,
          name: 'Smoochum',
          type_ids: '[15,14]',
          // created_at: new Date()
        },
        {
          id: 239,
          name: 'Elekid',
          type_ids: '[13]',
          // created_at: new Date()
        },
        {
          id: 240,
          name: 'Magby',
          type_ids: '[10]',
          // created_at: new Date()
        },
        {
          id: 241,
          name: 'Miltank',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 242,
          name: 'Blissey',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 243,
          name: 'Raikou',
          type_ids: '[13]',
          // created_at: new Date()
        },
        {
          id: 244,
          name: 'Entei',
          type_ids: '[10]',
          // created_at: new Date()
        },
        {
          id: 245,
          name: 'Suicune',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 246,
          name: 'Larvitar',
          type_ids: '[6,5]',
          // created_at: new Date()
        },
        {
          id: 247,
          name: 'Pupitar',
          type_ids: '[6,5]',
          // created_at: new Date()
        },
        {
          id: 248,
          name: 'Tyranitar',
          type_ids: '[6,17]',
          // created_at: new Date()
        },
        {
          id: 249,
          name: 'Lugia',
          type_ids: '[14,3]',
          // created_at: new Date()
        },
        {
          id: 250,
          name: 'Ho-Oh',
          type_ids: '[10,3]',
          // created_at: new Date()
        },
        {
          id: 251,
          name: 'Celebi',
          type_ids: '[14,12]',
          // created_at: new Date()
        },
        {
          id: 252,
          name: 'Treecko',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 253,
          name: 'Grovyle',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 254,
          name: 'Sceptile',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 255,
          name: 'Torchic',
          type_ids: '[10]',
          // created_at: new Date()
        },
        {
          id: 256,
          name: 'Combusken',
          type_ids: '[10,2]',
          // created_at: new Date()
        },
        {
          id: 257,
          name: 'Blaziken',
          type_ids: '[10,2]',
          // created_at: new Date()
        },
        {
          id: 258,
          name: 'Mudkip',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 259,
          name: 'Marshtomp',
          type_ids: '[11,5]',
          // created_at: new Date()
        },
        {
          id: 260,
          name: 'Swampert',
          type_ids: '[11,5]',
          // created_at: new Date()
        },
        {
          id: 261,
          name: 'Poochyena',
          type_ids: '[17]',
          // created_at: new Date()
        },
        {
          id: 262,
          name: 'Mightyena',
          type_ids: '[17]',
          // created_at: new Date()
        },
        {
          id: 263,
          name: 'Zigzagoon',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 264,
          name: 'Linoone',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 265,
          name: 'Wurmple',
          type_ids: '[7]',
          // created_at: new Date()
        },
        {
          id: 266,
          name: 'Silcoon',
          type_ids: '[7]',
          // created_at: new Date()
        },
        {
          id: 267,
          name: 'Beautifly',
          type_ids: '[7,3]',
          // created_at: new Date()
        },
        {
          id: 268,
          name: 'Cascoon',
          type_ids: '[7]',
          // created_at: new Date()
        },
        {
          id: 269,
          name: 'Dustox',
          type_ids: '[7,4]',
          // created_at: new Date()
        },
        {
          id: 270,
          name: 'Lotad',
          type_ids: '[11,12]',
          // created_at: new Date()
        },
        {
          id: 271,
          name: 'Lombre',
          type_ids: '[11,12]',
          // created_at: new Date()
        },
        {
          id: 272,
          name: 'Ludicolo',
          type_ids: '[11,12]',
          // created_at: new Date()
        },
        {
          id: 273,
          name: 'Seedot',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 274,
          name: 'Nuzleaf',
          type_ids: '[12,17]',
          // created_at: new Date()
        },
        {
          id: 275,
          name: 'Shiftry',
          type_ids: '[12,17]',
          // created_at: new Date()
        },
        {
          id: 276,
          name: 'Taillow',
          type_ids: '[1,3]',
          // created_at: new Date()
        },
        {
          id: 277,
          name: 'Swellow',
          type_ids: '[1,3]',
          // created_at: new Date()
        },
        {
          id: 278,
          name: 'Wingull',
          type_ids: '[11,3]',
          // created_at: new Date()
        },
        {
          id: 279,
          name: 'Pelipper',
          type_ids: '[11,3]',
          // created_at: new Date()
        },
        {
          id: 280,
          name: 'Ralts',
          type_ids: '[14,18]',
          // created_at: new Date()
        },
        {
          id: 281,
          name: 'Kirlia',
          type_ids: '[14,18]',
          // created_at: new Date()
        },
        {
          id: 282,
          name: 'Gardevoir',
          type_ids: '[14,18]',
          // created_at: new Date()
        },
        {
          id: 283,
          name: 'Surskit',
          type_ids: '[7,11]',
          // created_at: new Date()
        },
        {
          id: 284,
          name: 'Masquerain',
          type_ids: '[7,3]',
          // created_at: new Date()
        },
        {
          id: 285,
          name: 'Shroomish',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 286,
          name: 'Breloom',
          type_ids: '[12,2]',
          // created_at: new Date()
        },
        {
          id: 287,
          name: 'Slakoth',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 288,
          name: 'Vigoroth',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 289,
          name: 'Slaking',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 290,
          name: 'Nincada',
          type_ids: '[7,5]',
          // created_at: new Date()
        },
        {
          id: 291,
          name: 'Ninjask',
          type_ids: '[7,3]',
          // created_at: new Date()
        },
        {
          id: 292,
          name: 'Shedinja',
          type_ids: '[7,8]',
          // created_at: new Date()
        },
        {
          id: 293,
          name: 'Whismur',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 294,
          name: 'Loudred',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 295,
          name: 'Exploud',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 296,
          name: 'Makuhita',
          type_ids: '[2]',
          // created_at: new Date()
        },
        {
          id: 297,
          name: 'Hariyama',
          type_ids: '[2]',
          // created_at: new Date()
        },
        {
          id: 298,
          name: 'Azurill',
          type_ids: '[1,18]',
          // created_at: new Date()
        },
        {
          id: 299,
          name: 'Nosepass',
          type_ids: '[6]',
          // created_at: new Date()
        },
        {
          id: 300,
          name: 'Skitty',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 301,
          name: 'Delcatty',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 302,
          name: 'Sableye',
          type_ids: '[17,8]',
          // created_at: new Date()
        },
        {
          id: 303,
          name: 'Mawile',
          type_ids: '[9,18]',
          // created_at: new Date()
        },
        {
          id: 304,
          name: 'Aron',
          type_ids: '[9,6]',
          // created_at: new Date()
        },
        {
          id: 305,
          name: 'Lairon',
          type_ids: '[9,6]',
          // created_at: new Date()
        },
        {
          id: 306,
          name: 'Aggron',
          type_ids: '[9,6]',
          // created_at: new Date()
        },
        {
          id: 307,
          name: 'Meditite',
          type_ids: '[2,14]',
          // created_at: new Date()
        },
        {
          id: 308,
          name: 'Medicham',
          type_ids: '[2,14]',
          // created_at: new Date()
        },
        {
          id: 309,
          name: 'Electrike',
          type_ids: '[13]',
          // created_at: new Date()
        },
        {
          id: 310,
          name: 'Manectric',
          type_ids: '[13]',
          // created_at: new Date()
        },
        {
          id: 311,
          name: 'Plusle',
          type_ids: '[13]',
          // created_at: new Date()
        },
        {
          id: 312,
          name: 'Minun',
          type_ids: '[13]',
          // created_at: new Date()
        },
        {
          id: 313,
          name: 'Volbeat',
          type_ids: '[7]',
          // created_at: new Date()
        },
        {
          id: 314,
          name: 'Illumise',
          type_ids: '[7]',
          // created_at: new Date()
        },
        {
          id: 315,
          name: 'Roselia',
          type_ids: '[12,4]',
          // created_at: new Date()
        },
        {
          id: 316,
          name: 'Gulpin',
          type_ids: '[4]',
          // created_at: new Date()
        },
        {
          id: 317,
          name: 'Swalot',
          type_ids: '[4]',
          // created_at: new Date()
        },
        {
          id: 318,
          name: 'Carvanha',
          type_ids: '[11,17]',
          // created_at: new Date()
        },
        {
          id: 319,
          name: 'Sharpedo',
          type_ids: '[11,17]',
          // created_at: new Date()
        },
        {
          id: 320,
          name: 'Wailmer',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 321,
          name: 'Wailord',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 322,
          name: 'Numel',
          type_ids: '[10,5]',
          // created_at: new Date()
        },
        {
          id: 323,
          name: 'Camerupt',
          type_ids: '[10,5]',
          // created_at: new Date()
        },
        {
          id: 324,
          name: 'Torkoal',
          type_ids: '[10]',
          // created_at: new Date()
        },
        {
          id: 325,
          name: 'Spoink',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 326,
          name: 'Grumpig',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 327,
          name: 'Spinda',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 328,
          name: 'Trapinch',
          type_ids: '[5]',
          // created_at: new Date()
        },
        {
          id: 329,
          name: 'Vibrava',
          type_ids: '[5,16]',
          // created_at: new Date()
        },
        {
          id: 330,
          name: 'Flygon',
          type_ids: '[5,16]',
          // created_at: new Date()
        },
        {
          id: 331,
          name: 'Cacnea',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 332,
          name: 'Cacturne',
          type_ids: '[12,17]',
          // created_at: new Date()
        },
        {
          id: 333,
          name: 'Swablu',
          type_ids: '[1,3]',
          // created_at: new Date()
        },
        {
          id: 334,
          name: 'Altaria',
          type_ids: '[16,3]',
          // created_at: new Date()
        },
        {
          id: 335,
          name: 'Zangoose',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 336,
          name: 'Seviper',
          type_ids: '[4]',
          // created_at: new Date()
        },
        {
          id: 337,
          name: 'Lunatone',
          type_ids: '[6,14]',
          // created_at: new Date()
        },
        {
          id: 338,
          name: 'Solrock',
          type_ids: '[6,14]',
          // created_at: new Date()
        },
        {
          id: 339,
          name: 'Barboach',
          type_ids: '[11,5]',
          // created_at: new Date()
        },
        {
          id: 340,
          name: 'Whiscash',
          type_ids: '[11,5]',
          // created_at: new Date()
        },
        {
          id: 341,
          name: 'Corphish',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 342,
          name: 'Crawdaunt',
          type_ids: '[11,17]',
          // created_at: new Date()
        },
        {
          id: 343,
          name: 'Baltoy',
          type_ids: '[5,14]',
          // created_at: new Date()
        },
        {
          id: 344,
          name: 'Claydol',
          type_ids: '[5,14]',
          // created_at: new Date()
        },
        {
          id: 345,
          name: 'Lileep',
          type_ids: '[6,12]',
          // created_at: new Date()
        },
        {
          id: 346,
          name: 'Cradily',
          type_ids: '[6,12]',
          // created_at: new Date()
        },
        {
          id: 347,
          name: 'Anorith',
          type_ids: '[6,7]',
          // created_at: new Date()
        },
        {
          id: 348,
          name: 'Armaldo',
          type_ids: '[6,7]',
          // created_at: new Date()
        },
        {
          id: 349,
          name: 'Feebas',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 350,
          name: 'Milotic',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 351,
          name: 'Castform',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 352,
          name: 'Kecleon',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 353,
          name: 'Shuppet',
          type_ids: '[8]',
          // created_at: new Date()
        },
        {
          id: 354,
          name: 'Banette',
          type_ids: '[8]',
          // created_at: new Date()
        },
        {
          id: 355,
          name: 'Duskull',
          type_ids: '[8]',
          // created_at: new Date()
        },
        {
          id: 356,
          name: 'Dusclops',
          type_ids: '[8]',
          // created_at: new Date()
        },
        {
          id: 357,
          name: 'Tropius',
          type_ids: '[12,3]',
          // created_at: new Date()
        },
        {
          id: 358,
          name: 'Chimecho',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 359,
          name: 'Absol',
          type_ids: '[17]',
          // created_at: new Date()
        },
        {
          id: 360,
          name: 'Wynaut',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 361,
          name: 'Snorunt',
          type_ids: '[15]',
          // created_at: new Date()
        },
        {
          id: 362,
          name: 'Glalie',
          type_ids: '[15]',
          // created_at: new Date()
        },
        {
          id: 363,
          name: 'Spheal',
          type_ids: '[15,11]',
          // created_at: new Date()
        },
        {
          id: 364,
          name: 'Sealeo',
          type_ids: '[15,11]',
          // created_at: new Date()
        },
        {
          id: 365,
          name: 'Walrein',
          type_ids: '[15,11]',
          // created_at: new Date()
        },
        {
          id: 366,
          name: 'Clamperl',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 367,
          name: 'Huntail',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 368,
          name: 'Gorebyss',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 369,
          name: 'Relicanth',
          type_ids: '[11,6]',
          // created_at: new Date()
        },
        {
          id: 370,
          name: 'Luvdisc',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 371,
          name: 'Bagon',
          type_ids: '[16]',
          // created_at: new Date()
        },
        {
          id: 372,
          name: 'Shelgon',
          type_ids: '[16]',
          // created_at: new Date()
        },
        {
          id: 373,
          name: 'Salamence',
          type_ids: '[16,3]',
          // created_at: new Date()
        },
        {
          id: 374,
          name: 'Beldum',
          type_ids: '[9,14]',
          // created_at: new Date()
        },
        {
          id: 375,
          name: 'Metang',
          type_ids: '[9,14]',
          // created_at: new Date()
        },
        {
          id: 376,
          name: 'Metagross',
          type_ids: '[9,14]',
          // created_at: new Date()
        },
        {
          id: 377,
          name: 'Regirock',
          type_ids: '[6]',
          // created_at: new Date()
        },
        {
          id: 378,
          name: 'Regice',
          type_ids: '[15]',
          // created_at: new Date()
        },
        {
          id: 379,
          name: 'Registeel',
          type_ids: '[9]',
          // created_at: new Date()
        },
        {
          id: 380,
          name: 'Latias',
          type_ids: '[16,14]',
          // created_at: new Date()
        },
        {
          id: 381,
          name: 'Latios',
          type_ids: '[16,14]',
          // created_at: new Date()
        },
        {
          id: 382,
          name: 'Kyogre',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 383,
          name: 'Groudon',
          type_ids: '[5]',
          // created_at: new Date()
        },
        {
          id: 384,
          name: 'Rayquaza',
          type_ids: '[16,3]',
          // created_at: new Date()
        },
        {
          id: 385,
          name: 'Jirachi',
          type_ids: '[9,14]',
          // created_at: new Date()
        },
        {
          id: 386,
          name: 'Deoxys',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 387,
          name: 'Turtwig',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 388,
          name: 'Grotle',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 389,
          name: 'Torterra',
          type_ids: '[12,5]',
          // created_at: new Date()
        },
        {
          id: 390,
          name: 'Chimchar',
          type_ids: '[10]',
          // created_at: new Date()
        },
        {
          id: 391,
          name: 'Monferno',
          type_ids: '[10,2]',
          // created_at: new Date()
        },
        {
          id: 392,
          name: 'Infernape',
          type_ids: '[10,2]',
          // created_at: new Date()
        },
        {
          id: 393,
          name: 'Piplup',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 394,
          name: 'Prinplup',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 395,
          name: 'Empoleon',
          type_ids: '[11,9]',
          // created_at: new Date()
        },
        {
          id: 396,
          name: 'Starly',
          type_ids: '[1,3]',
          // created_at: new Date()
        },
        {
          id: 397,
          name: 'Staravia',
          type_ids: '[1,3]',
          // created_at: new Date()
        },
        {
          id: 398,
          name: 'Staraptor',
          type_ids: '[1,3]',
          // created_at: new Date()
        },
        {
          id: 399,
          name: 'Bidoof',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 400,
          name: 'Bibarel',
          type_ids: '[1,11]',
          // created_at: new Date()
        },
        {
          id: 401,
          name: 'Kricketot',
          type_ids: '[7]',
          // created_at: new Date()
        },
        {
          id: 402,
          name: 'Kricketune',
          type_ids: '[7]',
          // created_at: new Date()
        },
        {
          id: 403,
          name: 'Shinx',
          type_ids: '[13]',
          // created_at: new Date()
        },
        {
          id: 404,
          name: 'Luxio',
          type_ids: '[13]',
          // created_at: new Date()
        },
        {
          id: 405,
          name: 'Luxray',
          type_ids: '[13]',
          // created_at: new Date()
        },
        {
          id: 406,
          name: 'Budew',
          type_ids: '[12,4]',
          // created_at: new Date()
        },
        {
          id: 407,
          name: 'Roserade',
          type_ids: '[12,4]',
          // created_at: new Date()
        },
        {
          id: 408,
          name: 'Cranidos',
          type_ids: '[6]',
          // created_at: new Date()
        },
        {
          id: 409,
          name: 'Rampardos',
          type_ids: '[6]',
          // created_at: new Date()
        },
        {
          id: 410,
          name: 'Shieldon',
          type_ids: '[6,9]',
          // created_at: new Date()
        },
        {
          id: 411,
          name: 'Bastiodon',
          type_ids: '[6,9]',
          // created_at: new Date()
        },
        {
          id: 412,
          name: 'Burmy',
          type_ids: '[7]',
          // created_at: new Date()
        },
        {
          id: 413,
          name: 'Wormadam',
          type_ids: '[7,12]',
          // created_at: new Date()
        },
        {
          id: 414,
          name: 'Mothim',
          type_ids: '[7,3]',
          // created_at: new Date()
        },
        {
          id: 415,
          name: 'Combee',
          type_ids: '[7,3]',
          // created_at: new Date()
        },
        {
          id: 416,
          name: 'Vespiquen',
          type_ids: '[7,3]',
          // created_at: new Date()
        },
        {
          id: 417,
          name: 'Pachirisu',
          type_ids: '[13]',
          // created_at: new Date()
        },
        {
          id: 418,
          name: 'Buizel',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 419,
          name: 'Floatzel',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 420,
          name: 'Cherubi',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 421,
          name: 'Cherrim',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 422,
          name: 'Shellos',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 423,
          name: 'Gastrodon',
          type_ids: '[11,5]',
          // created_at: new Date()
        },
        {
          id: 424,
          name: 'Ambipom',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 425,
          name: 'Drifloon',
          type_ids: '[8,3]',
          // created_at: new Date()
        },
        {
          id: 426,
          name: 'Drifblim',
          type_ids: '[8,3]',
          // created_at: new Date()
        },
        {
          id: 427,
          name: 'Buneary',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 428,
          name: 'Lopunny',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 429,
          name: 'Mismagius',
          type_ids: '[8]',
          // created_at: new Date()
        },
        {
          id: 430,
          name: 'Honchkrow',
          type_ids: '[17,3]',
          // created_at: new Date()
        },
        {
          id: 431,
          name: 'Glameow',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 432,
          name: 'Purugly',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 433,
          name: 'Chingling',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 434,
          name: 'Stunky',
          type_ids: '[4,17]',
          // created_at: new Date()
        },
        {
          id: 435,
          name: 'Skuntank',
          type_ids: '[4,17]',
          // created_at: new Date()
        },
        {
          id: 436,
          name: 'Bronzor',
          type_ids: '[9,14]',
          // created_at: new Date()
        },
        {
          id: 437,
          name: 'Bronzong',
          type_ids: '[9,14]',
          // created_at: new Date()
        },
        {
          id: 438,
          name: 'Bonsly',
          type_ids: '[6]',
          // created_at: new Date()
        },
        {
          id: 439,
          name: 'Mime Jr.',
          type_ids: '[14,18]',
          // created_at: new Date()
        },
        {
          id: 440,
          name: 'Happiny',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 441,
          name: 'Chatot',
          type_ids: '[1,3]',
          // created_at: new Date()
        },
        {
          id: 442,
          name: 'Spiritomb',
          type_ids: '[8,17]',
          // created_at: new Date()
        },
        {
          id: 443,
          name: 'Gible',
          type_ids: '[16,5]',
          // created_at: new Date()
        },
        {
          id: 444,
          name: 'Gabite',
          type_ids: '[16,5]',
          // created_at: new Date()
        },
        {
          id: 445,
          name: 'Garchomp',
          type_ids: '[16,5]',
          // created_at: new Date()
        },
        {
          id: 446,
          name: 'Munchlax',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 447,
          name: 'Riolu',
          type_ids: '[2]',
          // created_at: new Date()
        },
        {
          id: 448,
          name: 'Lucario',
          type_ids: '[2,9]',
          // created_at: new Date()
        },
        {
          id: 449,
          name: 'Hippopotas',
          type_ids: '[5]',
          // created_at: new Date()
        },
        {
          id: 450,
          name: 'Hippowdon',
          type_ids: '[5]',
          // created_at: new Date()
        },
        {
          id: 451,
          name: 'Skorupi',
          type_ids: '[4,7]',
          // created_at: new Date()
        },
        {
          id: 452,
          name: 'Drapion',
          type_ids: '[4,17]',
          // created_at: new Date()
        },
        {
          id: 453,
          name: 'Croagunk',
          type_ids: '[4,2]',
          // created_at: new Date()
        },
        {
          id: 454,
          name: 'Toxicroak',
          type_ids: '[4,2]',
          // created_at: new Date()
        },
        {
          id: 455,
          name: 'Carnivine',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 456,
          name: 'Finneon',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 457,
          name: 'Lumineon',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 458,
          name: 'Mantyke',
          type_ids: '[11,3]',
          // created_at: new Date()
        },
        {
          id: 459,
          name: 'Snover',
          type_ids: '[12,15]',
          // created_at: new Date()
        },
        {
          id: 460,
          name: 'Abomasnow',
          type_ids: '[12,15]',
          // created_at: new Date()
        },
        {
          id: 461,
          name: 'Weavile',
          type_ids: '[17,15]',
          // created_at: new Date()
        },
        {
          id: 462,
          name: 'Magnezone',
          type_ids: '[13,9]',
          // created_at: new Date()
        },
        {
          id: 463,
          name: 'Lickilicky',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 464,
          name: 'Rhyperior',
          type_ids: '[5,6]',
          // created_at: new Date()
        },
        {
          id: 465,
          name: 'Tangrowth',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 466,
          name: 'Electivire',
          type_ids: '[13]',
          // created_at: new Date()
        },
        {
          id: 467,
          name: 'Magmortar',
          type_ids: '[10]',
          // created_at: new Date()
        },
        {
          id: 468,
          name: 'Togekiss',
          type_ids: '[18,3]',
          // created_at: new Date()
        },
        {
          id: 469,
          name: 'Yanmega',
          type_ids: '[7,3]',
          // created_at: new Date()
        },
        {
          id: 470,
          name: 'Leafeon',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 471,
          name: 'Glaceon',
          type_ids: '[15]',
          // created_at: new Date()
        },
        {
          id: 472,
          name: 'Gliscor',
          type_ids: '[5,3]',
          // created_at: new Date()
        },
        {
          id: 473,
          name: 'Mamoswine',
          type_ids: '[15,5]',
          // created_at: new Date()
        },
        {
          id: 474,
          name: 'Porygon-Z',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 475,
          name: 'Gallade',
          type_ids: '[14,2]',
          // created_at: new Date()
        },
        {
          id: 476,
          name: 'Probopass',
          type_ids: '[6,9]',
          // created_at: new Date()
        },
        {
          id: 477,
          name: 'Dusknoir',
          type_ids: '[8]',
          // created_at: new Date()
        },
        {
          id: 478,
          name: 'Froslass',
          type_ids: '[15,8]',
          // created_at: new Date()
        },
        {
          id: 479,
          name: 'Rotom',
          type_ids: '[13,8]',
          // created_at: new Date()
        },
        {
          id: 480,
          name: 'Uxie',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 481,
          name: 'Mesprit',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 482,
          name: 'Azelf',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 483,
          name: 'Dialga',
          type_ids: '[9,16]',
          // created_at: new Date()
        },
        {
          id: 484,
          name: 'Palkia',
          type_ids: '[11,16]',
          // created_at: new Date()
        },
        {
          id: 485,
          name: 'Heatran',
          type_ids: '[10,9]',
          // created_at: new Date()
        },
        {
          id: 486,
          name: 'Regigigas',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 487,
          name: 'Giratina',
          type_ids: '[8,16]',
          // created_at: new Date()
        },
        {
          id: 488,
          name: 'Cresselia',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 489,
          name: 'Phione',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 490,
          name: 'Manaphy',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 491,
          name: 'Darkrai',
          type_ids: '[17]',
          // created_at: new Date()
        },
        {
          id: 492,
          name: 'Shaymin',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 493,
          name: 'Arceus',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 494,
          name: 'Victini',
          type_ids: '[14,10]',
          // created_at: new Date()
        },
        {
          id: 495,
          name: 'Snivy',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 496,
          name: 'Servine',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 497,
          name: 'Serperior',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 498,
          name: 'Tepig',
          type_ids: '[10]',
          // created_at: new Date()
        },
        {
          id: 499,
          name: 'Pignite',
          type_ids: '[10,2]',
          // created_at: new Date()
        },
        {
          id: 500,
          name: 'Emboar',
          type_ids: '[10,2]',
          // created_at: new Date()
        },
        {
          id: 501,
          name: 'Oshawott',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 502,
          name: 'Dewott',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 503,
          name: 'Samurott',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 504,
          name: 'Patrat',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 505,
          name: 'Watchog',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 506,
          name: 'Lillipup',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 507,
          name: 'Herdier',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 508,
          name: 'Stoutland',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 509,
          name: 'Purrloin',
          type_ids: '[17]',
          // created_at: new Date()
        },
        {
          id: 510,
          name: 'Liepard',
          type_ids: '[17]',
          // created_at: new Date()
        },
        {
          id: 511,
          name: 'Pansage',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 512,
          name: 'Simisage',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 513,
          name: 'Pansear',
          type_ids: '[10]',
          // created_at: new Date()
        },
        {
          id: 514,
          name: 'Simisear',
          type_ids: '[10]',
          // created_at: new Date()
        },
        {
          id: 515,
          name: 'Panpour',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 516,
          name: 'Simipour',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 517,
          name: 'Munna',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 518,
          name: 'Musharna',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 519,
          name: 'Pidove',
          type_ids: '[1,3]',
          // created_at: new Date()
        },
        {
          id: 520,
          name: 'Tranquill',
          type_ids: '[1,3]',
          // created_at: new Date()
        },
        {
          id: 521,
          name: 'Unfezant',
          type_ids: '[1,3]',
          // created_at: new Date()
        },
        {
          id: 522,
          name: 'Blitzle',
          type_ids: '[13]',
          // created_at: new Date()
        },
        {
          id: 523,
          name: 'Zebstrika',
          type_ids: '[13]',
          // created_at: new Date()
        },
        {
          id: 524,
          name: 'Roggenrola',
          type_ids: '[6]',
          // created_at: new Date()
        },
        {
          id: 525,
          name: 'Boldore',
          type_ids: '[6]',
          // created_at: new Date()
        },
        {
          id: 526,
          name: 'Gigalith',
          type_ids: '[6]',
          // created_at: new Date()
        },
        {
          id: 527,
          name: 'Woobat',
          type_ids: '[14,3]',
          // created_at: new Date()
        },
        {
          id: 528,
          name: 'Swoobat',
          type_ids: '[14,3]',
          // created_at: new Date()
        },
        {
          id: 529,
          name: 'Drilbur',
          type_ids: '[5]',
          // created_at: new Date()
        },
        {
          id: 530,
          name: 'Excadrill',
          type_ids: '[5,9]',
          // created_at: new Date()
        },
        {
          id: 531,
          name: 'Audino',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 532,
          name: 'Timburr',
          type_ids: '[2]',
          // created_at: new Date()
        },
        {
          id: 533,
          name: 'Gurdurr',
          type_ids: '[2]',
          // created_at: new Date()
        },
        {
          id: 534,
          name: 'Conkeldurr',
          type_ids: '[2]',
          // created_at: new Date()
        },
        {
          id: 535,
          name: 'Tympole',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 536,
          name: 'Palpitoad',
          type_ids: '[11,5]',
          // created_at: new Date()
        },
        {
          id: 537,
          name: 'Seismitoad',
          type_ids: '[11,5]',
          // created_at: new Date()
        },
        {
          id: 538,
          name: 'Throh',
          type_ids: '[2]',
          // created_at: new Date()
        },
        {
          id: 539,
          name: 'Sawk',
          type_ids: '[2]',
          // created_at: new Date()
        },
        {
          id: 540,
          name: 'Sewaddle',
          type_ids: '[7,12]',
          // created_at: new Date()
        },
        {
          id: 541,
          name: 'Swadloon',
          type_ids: '[7,12]',
          // created_at: new Date()
        },
        {
          id: 542,
          name: 'Leavanny',
          type_ids: '[7,12]',
          // created_at: new Date()
        },
        {
          id: 543,
          name: 'Venipede',
          type_ids: '[7,4]',
          // created_at: new Date()
        },
        {
          id: 544,
          name: 'Whirlipede',
          type_ids: '[7,4]',
          // created_at: new Date()
        },
        {
          id: 545,
          name: 'Scolipede',
          type_ids: '[7,4]',
          // created_at: new Date()
        },
        {
          id: 546,
          name: 'Cottonee',
          type_ids: '[12,18]',
          // created_at: new Date()
        },
        {
          id: 547,
          name: 'Whimsicott',
          type_ids: '[12,18]',
          // created_at: new Date()
        },
        {
          id: 548,
          name: 'Petilil',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 549,
          name: 'Lilligant',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 550,
          name: 'Basculin',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 551,
          name: 'Sandile',
          type_ids: '[5,17]',
          // created_at: new Date()
        },
        {
          id: 552,
          name: 'Krokorok',
          type_ids: '[5,17]',
          // created_at: new Date()
        },
        {
          id: 553,
          name: 'Krookodile',
          type_ids: '[5,17]',
          // created_at: new Date()
        },
        {
          id: 554,
          name: 'Darumaka',
          type_ids: '[10]',
          // created_at: new Date()
        },
        {
          id: 555,
          name: 'Darmanitan',
          type_ids: '[10]',
          // created_at: new Date()
        },
        {
          id: 556,
          name: 'Maractus',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 557,
          name: 'Dwebble',
          type_ids: '[7,6]',
          // created_at: new Date()
        },
        {
          id: 558,
          name: 'Crustle',
          type_ids: '[7,6]',
          // created_at: new Date()
        },
        {
          id: 559,
          name: 'Scraggy',
          type_ids: '[17,2]',
          // created_at: new Date()
        },
        {
          id: 560,
          name: 'Scrafty',
          type_ids: '[17,2]',
          // created_at: new Date()
        },
        {
          id: 561,
          name: 'Sigilyph',
          type_ids: '[14,3]',
          // created_at: new Date()
        },
        {
          id: 562,
          name: 'Yamask',
          type_ids: '[8]',
          // created_at: new Date()
        },
        {
          id: 563,
          name: 'Cofagrigus',
          type_ids: '[8]',
          // created_at: new Date()
        },
        {
          id: 564,
          name: 'Tirtouga',
          type_ids: '[11,6]',
          // created_at: new Date()
        },
        {
          id: 565,
          name: 'Carracosta',
          type_ids: '[11,6]',
          // created_at: new Date()
        },
        {
          id: 566,
          name: 'Archen',
          type_ids: '[6,3]',
          // created_at: new Date()
        },
        {
          id: 567,
          name: 'Archeops',
          type_ids: '[6,3]',
          // created_at: new Date()
        },
        {
          id: 568,
          name: 'Trubbish',
          type_ids: '[4]',
          // created_at: new Date()
        },
        {
          id: 569,
          name: 'Garbodor',
          type_ids: '[4]',
          // created_at: new Date()
        },
        {
          id: 570,
          name: 'Zorua',
          type_ids: '[17]',
          // created_at: new Date()
        },
        {
          id: 571,
          name: 'Zoroark',
          type_ids: '[17]',
          // created_at: new Date()
        },
        {
          id: 572,
          name: 'Minccino',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 573,
          name: 'Cinccino',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 574,
          name: 'Gothita',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 575,
          name: 'Gothorita',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 576,
          name: 'Gothitelle',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 577,
          name: 'Solosis',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 578,
          name: 'Duosion',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 579,
          name: 'Reuniclus',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 580,
          name: 'Ducklett',
          type_ids: '[11,3]',
          // created_at: new Date()
        },
        {
          id: 581,
          name: 'Swanna',
          type_ids: '[11,3]',
          // created_at: new Date()
        },
        {
          id: 582,
          name: 'Vanillite',
          type_ids: '[15]',
          // created_at: new Date()
        },
        {
          id: 583,
          name: 'Vanillish',
          type_ids: '[15]',
          // created_at: new Date()
        },
        {
          id: 584,
          name: 'Vanilluxe',
          type_ids: '[15]',
          // created_at: new Date()
        },
        {
          id: 585,
          name: 'Deerling',
          type_ids: '[1,12]',
          // created_at: new Date()
        },
        {
          id: 586,
          name: 'Sawsbuck',
          type_ids: '[1,12]',
          // created_at: new Date()
        },
        {
          id: 587,
          name: 'Emolga',
          type_ids: '[13,3]',
          // created_at: new Date()
        },
        {
          id: 588,
          name: 'Karrablast',
          type_ids: '[7]',
          // created_at: new Date()
        },
        {
          id: 589,
          name: 'Escavalier',
          type_ids: '[7,9]',
          // created_at: new Date()
        },
        {
          id: 590,
          name: 'Foongus',
          type_ids: '[12,4]',
          // created_at: new Date()
        },
        {
          id: 591,
          name: 'Amoonguss',
          type_ids: '[12,4]',
          // created_at: new Date()
        },
        {
          id: 592,
          name: 'Frillish',
          type_ids: '[11,8]',
          // created_at: new Date()
        },
        {
          id: 593,
          name: 'Jellicent',
          type_ids: '[11,8]',
          // created_at: new Date()
        },
        {
          id: 594,
          name: 'Alomomola',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 595,
          name: 'Joltik',
          type_ids: '[7,13]',
          // created_at: new Date()
        },
        {
          id: 596,
          name: 'Galvantula',
          type_ids: '[7,13]',
          // created_at: new Date()
        },
        {
          id: 597,
          name: 'Ferroseed',
          type_ids: '[12,9]',
          // created_at: new Date()
        },
        {
          id: 598,
          name: 'Ferrothorn',
          type_ids: '[12,9]',
          // created_at: new Date()
        },
        {
          id: 599,
          name: 'Klink',
          type_ids: '[9]',
          // created_at: new Date()
        },
        {
          id: 600,
          name: 'Klang',
          type_ids: '[9]',
          // created_at: new Date()
        },
        {
          id: 601,
          name: 'Klinklang',
          type_ids: '[9]',
          // created_at: new Date()
        },
        {
          id: 602,
          name: 'Tynamo',
          type_ids: '[13]',
          // created_at: new Date()
        },
        {
          id: 603,
          name: 'Eelektrik',
          type_ids: '[13]',
          // created_at: new Date()
        },
        {
          id: 604,
          name: 'Eelektross',
          type_ids: '[13]',
          // created_at: new Date()
        },
        {
          id: 605,
          name: 'Elgyem',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 606,
          name: 'Beheeyem',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 607,
          name: 'Litwick',
          type_ids: '[8,10]',
          // created_at: new Date()
        },
        {
          id: 608,
          name: 'Lampent',
          type_ids: '[8,10]',
          // created_at: new Date()
        },
        {
          id: 609,
          name: 'Chandelure',
          type_ids: '[8,10]',
          // created_at: new Date()
        },
        {
          id: 610,
          name: 'Axew',
          type_ids: '[16]',
          // created_at: new Date()
        },
        {
          id: 611,
          name: 'Fraxure',
          type_ids: '[16]',
          // created_at: new Date()
        },
        {
          id: 612,
          name: 'Haxorus',
          type_ids: '[16]',
          // created_at: new Date()
        },
        {
          id: 613,
          name: 'Cubchoo',
          type_ids: '[15]',
          // created_at: new Date()
        },
        {
          id: 614,
          name: 'Beartic',
          type_ids: '[15]',
          // created_at: new Date()
        },
        {
          id: 615,
          name: 'Cryogonal',
          type_ids: '[15]',
          // created_at: new Date()
        },
        {
          id: 616,
          name: 'Shelmet',
          type_ids: '[7]',
          // created_at: new Date()
        },
        {
          id: 617,
          name: 'Accelgor',
          type_ids: '[7]',
          // created_at: new Date()
        },
        {
          id: 618,
          name: 'Stunfisk',
          type_ids: '[5,13]',
          // created_at: new Date()
        },
        {
          id: 619,
          name: 'Mienfoo',
          type_ids: '[2]',
          // created_at: new Date()
        },
        {
          id: 620,
          name: 'Mienshao',
          type_ids: '[2]',
          // created_at: new Date()
        },
        {
          id: 621,
          name: 'Druddigon',
          type_ids: '[16]',
          // created_at: new Date()
        },
        {
          id: 622,
          name: 'Golett',
          type_ids: '[5,8]',
          // created_at: new Date()
        },
        {
          id: 623,
          name: 'Golurk',
          type_ids: '[5,8]',
          // created_at: new Date()
        },
        {
          id: 624,
          name: 'Pawniard',
          type_ids: '[17,9]',
          // created_at: new Date()
        },
        {
          id: 625,
          name: 'Bisharp',
          type_ids: '[17,9]',
          // created_at: new Date()
        },
        {
          id: 626,
          name: 'Bouffalant',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 627,
          name: 'Rufflet',
          type_ids: '[1,3]',
          // created_at: new Date()
        },
        {
          id: 628,
          name: 'Braviary',
          type_ids: '[1,3]',
          // created_at: new Date()
        },
        {
          id: 629,
          name: 'Vullaby',
          type_ids: '[17,3]',
          // created_at: new Date()
        },
        {
          id: 630,
          name: 'Mandibuzz',
          type_ids: '[17,3]',
          // created_at: new Date()
        },
        {
          id: 631,
          name: 'Heatmor',
          type_ids: '[10]',
          // created_at: new Date()
        },
        {
          id: 632,
          name: 'Durant',
          type_ids: '[7,9]',
          // created_at: new Date()
        },
        {
          id: 633,
          name: 'Deino',
          type_ids: '[17,16]',
          // created_at: new Date()
        },
        {
          id: 634,
          name: 'Zweilous',
          type_ids: '[17,16]',
          // created_at: new Date()
        },
        {
          id: 635,
          name: 'Hydreigon',
          type_ids: '[17,16]',
          // created_at: new Date()
        },
        {
          id: 636,
          name: 'Larvesta',
          type_ids: '[7,10]',
          // created_at: new Date()
        },
        {
          id: 637,
          name: 'Volcarona',
          type_ids: '[7,10]',
          // created_at: new Date()
        },
        {
          id: 638,
          name: 'Cobalion',
          type_ids: '[9,2]',
          // created_at: new Date()
        },
        {
          id: 639,
          name: 'Terrakion',
          type_ids: '[6,2]',
          // created_at: new Date()
        },
        {
          id: 640,
          name: 'Virizion',
          type_ids: '[12,2]',
          // created_at: new Date()
        },
        {
          id: 641,
          name: 'Tornadus',
          type_ids: '[3]',
          // created_at: new Date()
        },
        {
          id: 642,
          name: 'Thundurus',
          type_ids: '[13,3]',
          // created_at: new Date()
        },
        {
          id: 643,
          name: 'Reshiram',
          type_ids: '[16,10]',
          // created_at: new Date()
        },
        {
          id: 644,
          name: 'Zekrom',
          type_ids: '[16,13]',
          // created_at: new Date()
        },
        {
          id: 645,
          name: 'Landorus',
          type_ids: '[5,3]',
          // created_at: new Date()
        },
        {
          id: 646,
          name: 'Kyurem',
          type_ids: '[16,15]',
          // created_at: new Date()
        },
        {
          id: 647,
          name: 'Keldeo',
          type_ids: '[11,2]',
          // created_at: new Date()
        },
        {
          id: 648,
          name: 'Meloetta',
          type_ids: '[1,14]',
          // created_at: new Date()
        },
        {
          id: 649,
          name: 'Genesect',
          type_ids: '[7,9]',
          // created_at: new Date()
        },
        {
          id: 650,
          name: 'Chespin',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 651,
          name: 'Quilladin',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 652,
          name: 'Chesnaught',
          type_ids: '[12,2]',
          // created_at: new Date()
        },
        {
          id: 653,
          name: 'Fennekin',
          type_ids: '[10]',
          // created_at: new Date()
        },
        {
          id: 654,
          name: 'Braixen',
          type_ids: '[10]',
          // created_at: new Date()
        },
        {
          id: 655,
          name: 'Delphox',
          type_ids: '[10,14]',
          // created_at: new Date()
        },
        {
          id: 656,
          name: 'Froakie',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 657,
          name: 'Frogadier',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 658,
          name: 'Greninja',
          type_ids: '[11,17]',
          // created_at: new Date()
        },
        {
          id: 659,
          name: 'Bunnelby',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 660,
          name: 'Diggersby',
          type_ids: '[1,5]',
          // created_at: new Date()
        },
        {
          id: 661,
          name: 'Fletchling',
          type_ids: '[1,3]',
          // created_at: new Date()
        },
        {
          id: 662,
          name: 'Fletchinder',
          type_ids: '[10,3]',
          // created_at: new Date()
        },
        {
          id: 663,
          name: 'Talonflame',
          type_ids: '[10,3]',
          // created_at: new Date()
        },
        {
          id: 664,
          name: 'Scatterbug',
          type_ids: '[7]',
          // created_at: new Date()
        },
        {
          id: 665,
          name: 'Spewpa',
          type_ids: '[7]',
          // created_at: new Date()
        },
        {
          id: 666,
          name: 'Vivillon',
          type_ids: '[7,3]',
          // created_at: new Date()
        },
        {
          id: 667,
          name: 'Litleo',
          type_ids: '[10,1]',
          // created_at: new Date()
        },
        {
          id: 668,
          name: 'Pyroar',
          type_ids: '[10,1]',
          // created_at: new Date()
        },
        {
          id: 669,
          name: 'Flabébé',
          type_ids: '[18]',
          // created_at: new Date()
        },
        {
          id: 670,
          name: 'Floette',
          type_ids: '[18]',
          // created_at: new Date()
        },
        {
          id: 671,
          name: 'Florges',
          type_ids: '[18]',
          // created_at: new Date()
        },
        {
          id: 672,
          name: 'Skiddo',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 673,
          name: 'Gogoat',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 674,
          name: 'Pancham',
          type_ids: '[2]',
          // created_at: new Date()
        },
        {
          id: 675,
          name: 'Pangoro',
          type_ids: '[2,17]',
          // created_at: new Date()
        },
        {
          id: 676,
          name: 'Furfrou',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 677,
          name: 'Espurr',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 678,
          name: 'Meowstic',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 679,
          name: 'Honedge',
          type_ids: '[9,8]',
          // created_at: new Date()
        },
        {
          id: 680,
          name: 'Doublade',
          type_ids: '[9,8]',
          // created_at: new Date()
        },
        {
          id: 681,
          name: 'Aegislash',
          type_ids: '[9,8]',
          // created_at: new Date()
        },
        {
          id: 682,
          name: 'Spritzee',
          type_ids: '[18]',
          // created_at: new Date()
        },
        {
          id: 683,
          name: 'Aromatisse',
          type_ids: '[18]',
          // created_at: new Date()
        },
        {
          id: 684,
          name: 'Swirlix',
          type_ids: '[18]',
          // created_at: new Date()
        },
        {
          id: 685,
          name: 'Slurpuff',
          type_ids: '[18]',
          // created_at: new Date()
        },
        {
          id: 686,
          name: 'Inkay',
          type_ids: '[17,14]',
          // created_at: new Date()
        },
        {
          id: 687,
          name: 'Malamar',
          type_ids: '[17,14]',
          // created_at: new Date()
        },
        {
          id: 688,
          name: 'Binacle',
          type_ids: '[6,11]',
          // created_at: new Date()
        },
        {
          id: 689,
          name: 'Barbaracle',
          type_ids: '[6,11]',
          // created_at: new Date()
        },
        {
          id: 690,
          name: 'Skrelp',
          type_ids: '[4,11]',
          // created_at: new Date()
        },
        {
          id: 691,
          name: 'Dragalge',
          type_ids: '[4,16]',
          // created_at: new Date()
        },
        {
          id: 692,
          name: 'Clauncher',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 693,
          name: 'Clawitzer',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 694,
          name: 'Helioptile',
          type_ids: '[13,1]',
          // created_at: new Date()
        },
        {
          id: 695,
          name: 'Heliolisk',
          type_ids: '[13,1]',
          // created_at: new Date()
        },
        {
          id: 696,
          name: 'Tyrunt',
          type_ids: '[6,16]',
          // created_at: new Date()
        },
        {
          id: 697,
          name: 'Tyrantrum',
          type_ids: '[6,16]',
          // created_at: new Date()
        },
        {
          id: 698,
          name: 'Amaura',
          type_ids: '[6,15]',
          // created_at: new Date()
        },
        {
          id: 699,
          name: 'Aurorus',
          type_ids: '[6,15]',
          // created_at: new Date()
        },
        {
          id: 700,
          name: 'Sylveon',
          type_ids: '[18]',
          // created_at: new Date()
        },
        {
          id: 701,
          name: 'Hawlucha',
          type_ids: '[2,3]',
          // created_at: new Date()
        },
        {
          id: 702,
          name: 'Dedenne',
          type_ids: '[13,18]',
          // created_at: new Date()
        },
        {
          id: 703,
          name: 'Carbink',
          type_ids: '[6,18]',
          // created_at: new Date()
        },
        {
          id: 704,
          name: 'Goomy',
          type_ids: '[16]',
          // created_at: new Date()
        },
        {
          id: 705,
          name: 'Sliggoo',
          type_ids: '[16]',
          // created_at: new Date()
        },
        {
          id: 706,
          name: 'Goodra',
          type_ids: '[16]',
          // created_at: new Date()
        },
        {
          id: 707,
          name: 'Klefki',
          type_ids: '[9,18]',
          // created_at: new Date()
        },
        {
          id: 708,
          name: 'Phantump',
          type_ids: '[8,12]',
          // created_at: new Date()
        },
        {
          id: 709,
          name: 'Trevenant',
          type_ids: '[8,12]',
          // created_at: new Date()
        },
        {
          id: 710,
          name: 'Pumpkaboo',
          type_ids: '[8,12]',
          // created_at: new Date()
        },
        {
          id: 711,
          name: 'Gourgeist',
          type_ids: '[8,12]',
          // created_at: new Date()
        },
        {
          id: 712,
          name: 'Bergmite',
          type_ids: '[15]',
          // created_at: new Date()
        },
        {
          id: 713,
          name: 'Avalugg',
          type_ids: '[15]',
          // created_at: new Date()
        },
        {
          id: 714,
          name: 'Noibat',
          type_ids: '[3,16]',
          // created_at: new Date()
        },
        {
          id: 715,
          name: 'Noivern',
          type_ids: '[3,16]',
          // created_at: new Date()
        },
        {
          id: 716,
          name: 'Xerneas',
          type_ids: '[18]',
          // created_at: new Date()
        },
        {
          id: 717,
          name: 'Yveltal',
          type_ids: '[17,3]',
          // created_at: new Date()
        },
        {
          id: 718,
          name: 'Zygarde',
          type_ids: '[16,5]',
          // created_at: new Date()
        },
        {
          id: 719,
          name: 'Diancie',
          type_ids: '[6,18]',
          // created_at: new Date()
        },
        {
          id: 720,
          name: 'Hoopa',
          type_ids: '[14,8]',
          // created_at: new Date()
        },
        {
          id: 721,
          name: 'Volcanion',
          type_ids: '[10,11]',
          // created_at: new Date()
        },
        {
          id: 722,
          name: 'Rowlet',
          type_ids: '[12,3]',
          // created_at: new Date()
        },
        {
          id: 723,
          name: 'Dartrix',
          type_ids: '[12,3]',
          // created_at: new Date()
        },
        {
          id: 724,
          name: 'Decidueye',
          type_ids: '[12,8]',
          // created_at: new Date()
        },
        {
          id: 725,
          name: 'Litten',
          type_ids: '[10]',
          // created_at: new Date()
        },
        {
          id: 726,
          name: 'Torracat',
          type_ids: '[10]',
          // created_at: new Date()
        },
        {
          id: 727,
          name: 'Incineroar',
          type_ids: '[10,17]',
          // created_at: new Date()
        },
        {
          id: 728,
          name: 'Popplio',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 729,
          name: 'Brionne',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 730,
          name: 'Primarina',
          type_ids: '[11,18]',
          // created_at: new Date()
        },
        {
          id: 731,
          name: 'Pikipek',
          type_ids: '[1,3]',
          // created_at: new Date()
        },
        {
          id: 732,
          name: 'Trumbeak',
          type_ids: '[1,3]',
          // created_at: new Date()
        },
        {
          id: 733,
          name: 'Toucannon',
          type_ids: '[1,3]',
          // created_at: new Date()
        },
        {
          id: 734,
          name: 'Yungoos',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 735,
          name: 'Gumshoos',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 736,
          name: 'Grubbin',
          type_ids: '[7]',
          // created_at: new Date()
        },
        {
          id: 737,
          name: 'Charjabug',
          type_ids: '[7,13]',
          // created_at: new Date()
        },
        {
          id: 738,
          name: 'Vikavolt',
          type_ids: '[7,13]',
          // created_at: new Date()
        },
        {
          id: 739,
          name: 'Crabrawler',
          type_ids: '[2]',
          // created_at: new Date()
        },
        {
          id: 740,
          name: 'Crabominable',
          type_ids: '[2,15]',
          // created_at: new Date()
        },
        {
          id: 741,
          name: 'Oricorio',
          type_ids: '[10,3]',
          // created_at: new Date()
        },
        {
          id: 742,
          name: 'Cutiefly',
          type_ids: '[7,18]',
          // created_at: new Date()
        },
        {
          id: 743,
          name: 'Ribombee',
          type_ids: '[7,18]',
          // created_at: new Date()
        },
        {
          id: 744,
          name: 'Rockruff',
          type_ids: '[6]',
          // created_at: new Date()
        },
        {
          id: 745,
          name: 'Lycanroc',
          type_ids: '[6]',
          // created_at: new Date()
        },
        {
          id: 746,
          name: 'Wishiwashi',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 747,
          name: 'Mareanie',
          type_ids: '[4,11]',
          // created_at: new Date()
        },
        {
          id: 748,
          name: 'Toxapex',
          type_ids: '[4,11]',
          // created_at: new Date()
        },
        {
          id: 749,
          name: 'Mudbray',
          type_ids: '[5]',
          // created_at: new Date()
        },
        {
          id: 750,
          name: 'Mudsdale',
          type_ids: '[5]',
          // created_at: new Date()
        },
        {
          id: 751,
          name: 'Dewpider',
          type_ids: '[11,7]',
          // created_at: new Date()
        },
        {
          id: 752,
          name: 'Araquanid',
          type_ids: '[11,7]',
          // created_at: new Date()
        },
        {
          id: 753,
          name: 'Fomantis',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 754,
          name: 'Lurantis',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 755,
          name: 'Morelull',
          type_ids: '[12,18]',
          // created_at: new Date()
        },
        {
          id: 756,
          name: 'Shiinotic',
          type_ids: '[12,18]',
          // created_at: new Date()
        },
        {
          id: 757,
          name: 'Salandit',
          type_ids: '[4,10]',
          // created_at: new Date()
        },
        {
          id: 758,
          name: 'Salazzle',
          type_ids: '[4,10]',
          // created_at: new Date()
        },
        {
          id: 759,
          name: 'Stufful',
          type_ids: '[1,2]',
          // created_at: new Date()
        },
        {
          id: 760,
          name: 'Bewear',
          type_ids: '[1,2]',
          // created_at: new Date()
        },
        {
          id: 761,
          name: 'Bounsweet',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 762,
          name: 'Steenee',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 763,
          name: 'Tsareena',
          type_ids: '[12]',
          // created_at: new Date()
        },
        {
          id: 764,
          name: 'Comfey',
          type_ids: '[18]',
          // created_at: new Date()
        },
        {
          id: 765,
          name: 'Oranguru',
          type_ids: '[1,14]',
          // created_at: new Date()
        },
        {
          id: 766,
          name: 'Passimian',
          type_ids: '[2]',
          // created_at: new Date()
        },
        {
          id: 767,
          name: 'Wimpod',
          type_ids: '[7,11]',
          // created_at: new Date()
        },
        {
          id: 768,
          name: 'Golisopod',
          type_ids: '[7,11]',
          // created_at: new Date()
        },
        {
          id: 769,
          name: 'Sandygast',
          type_ids: '[8,5]',
          // created_at: new Date()
        },
        {
          id: 770,
          name: 'Palossand',
          type_ids: '[8,5]',
          // created_at: new Date()
        },
        {
          id: 771,
          name: 'Pyukumuku',
          type_ids: '[11]',
          // created_at: new Date()
        },
        {
          id: 772,
          name: 'Type: Null',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 773,
          name: 'Silvally',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 774,
          name: 'Minior',
          type_ids: '[6,3]',
          // created_at: new Date()
        },
        {
          id: 775,
          name: 'Komala',
          type_ids: '[1]',
          // created_at: new Date()
        },
        {
          id: 776,
          name: 'Turtonator',
          type_ids: '[10,16]',
          // created_at: new Date()
        },
        {
          id: 777,
          name: 'Togedemaru',
          type_ids: '[13,9]',
          // created_at: new Date()
        },
        {
          id: 778,
          name: 'Mimikyu',
          type_ids: '[8,18]',
          // created_at: new Date()
        },
        {
          id: 779,
          name: 'Bruxish',
          type_ids: '[11,14]',
          // created_at: new Date()
        },
        {
          id: 780,
          name: 'Drampa',
          type_ids: '[1,16]',
          // created_at: new Date()
        },
        {
          id: 781,
          name: 'Dhelmise',
          type_ids: '[8,12]',
          // created_at: new Date()
        },
        {
          id: 782,
          name: 'Jangmo-o',
          type_ids: '[16]',
          // created_at: new Date()
        },
        {
          id: 783,
          name: 'Hakamo-o',
          type_ids: '[16,2]',
          // created_at: new Date()
        },
        {
          id: 784,
          name: 'Kommo-o',
          type_ids: '[16,2]',
          // created_at: new Date()
        },
        {
          id: 785,
          name: 'Tapu Koko',
          type_ids: '[13,18]',
          // created_at: new Date()
        },
        {
          id: 786,
          name: 'Tapu Lele',
          type_ids: '[14,18]',
          // created_at: new Date()
        },
        {
          id: 787,
          name: 'Tapu Bulu',
          type_ids: '[12,18]',
          // created_at: new Date()
        },
        {
          id: 788,
          name: 'Tapu Fini',
          type_ids: '[11,18]',
          // created_at: new Date()
        },
        {
          id: 789,
          name: 'Cosmog',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 790,
          name: 'Cosmoem',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 791,
          name: 'Solgaleo',
          type_ids: '[14,9]',
          // created_at: new Date()
        },
        {
          id: 792,
          name: 'Lunala',
          type_ids: '[14,8]',
          // created_at: new Date()
        },
        {
          id: 793,
          name: 'Nihilego',
          type_ids: '[6,4]',
          // created_at: new Date()
        },
        {
          id: 794,
          name: 'Buzzwole',
          type_ids: '[7,2]',
          // created_at: new Date()
        },
        {
          id: 795,
          name: 'Pheromosa',
          type_ids: '[7,2]',
          // created_at: new Date()
        },
        {
          id: 796,
          name: 'Xurkitree',
          type_ids: '[13]',
          // created_at: new Date()
        },
        {
          id: 797,
          name: 'Celesteela',
          type_ids: '[9,3]',
          // created_at: new Date()
        },
        {
          id: 798,
          name: 'Kartana',
          type_ids: '[12,9]',
          // created_at: new Date()
        },
        {
          id: 799,
          name: 'Guzzlord',
          type_ids: '[17,16]',
          // created_at: new Date()
        },
        {
          id: 800,
          name: 'Necrozma',
          type_ids: '[14]',
          // created_at: new Date()
        },
        {
          id: 801,
          name: 'Magearna',
          type_ids: '[9,18]',
          // created_at: new Date()
        },
        {
          id: 802,
          name: 'Marshadow',
          type_ids: '[2,8]',
          // created_at: new Date()
        },
        {
          id: 803,
          name: 'Poipole',
          type_ids: '[4]',
          // created_at: new Date()
        },
        {
          id: 804,
          name: 'Naganadel',
          type_ids: '[4,16]',
          // created_at: new Date()
        },
        {
          id: 805,
          name: 'Stakataka',
          type_ids: '[6,9]',
          // created_at: new Date()
        },
        {
          id: 806,
          name: 'Blacephalon',
          type_ids: '[10,8]',
          // created_at: new Date()
        },
        {
          id: 807,
          name: 'Zeraora',
          type_ids: '[13]',
          // created_at: new Date()
        },
        {
          id: 808,
          name: 'Meltan',
          type_ids: '[9]',
          // created_at: new Date()
        },
        {
          id: 809,
          name: 'Melmetal',
          type_ids: '[9]',
          // created_at: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pokeLists', null, {});
  },
};
