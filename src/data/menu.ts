export type MenuItem = {
  name: string
  desc?: string
  price?: string
  prices?: [string, string]
  weight?: string
}

export type MenuCategory = {
  id: string
  label: string
  note?: string
  sizes?: [string, string]
  items: MenuItem[]
}

export const MENU: MenuCategory[] = [
  {
    id: 'dorucak',
    label: 'Doručak',
    note: 'Doručak i sendviče služimo do 13h',
    items: [
      { name: 'Focaccia sa dva jaja, domaćim sirom, šunkom i paradajzom', price: '660' },
      { name: 'Focaccia sa dva jaja, domaćim sirom, pršutom, rukolom i paradajzom', price: '720' },
      { name: 'Focaccia sa dva jaja, domaćim sirom, slaninom, rukolom i paradajzom', price: '690' },
      { name: 'Voćni musli sa sojinim mlekom', desc: 'musli, sojino mleko', price: '570' },
      { name: 'Grill Cheese', desc: 'ementaler, čedar, gauda', price: '570' },
      {
        name: 'Tost sa dimljenim lososom',
        desc: 'dimljeni losos, masline, rukola, dresing sa mirođijom i senfom, gauda sir',
        price: '1.050',
      },
      { name: 'Tost sendvič sa šunkom', desc: 'tost hleb, šunka, gauda, paradajz', price: '590' },
      {
        name: 'Tost Carpaccio biftek',
        desc: 'tost, biftek, pesto genoveze, rukola, dresing cipriani, parmezan',
        price: '1.030',
      },
      {
        name: 'Tuna doručak',
        desc: 'tost, tunjevina, majonez, limunov sok, kiseli krastavci, crveni luk',
        price: '680',
      },
    ],
  },
  {
    id: 'antipasto',
    label: 'Antipasto',
    items: [
      {
        name: 'Verdure Marinate',
        desc: 'masline, marinirane pečurke, marinirani paradajz, divlji kapar, ljute čeri paprike',
        weight: '200g',
        price: '880',
      },
      {
        name: 'Carne Essiccata',
        desc: 'mortadela, ventričina, goveđa pršuta, italijanska pršuta',
        weight: '200g',
        price: '1.450',
      },
      {
        name: 'Gramina selekcija sireva',
        desc: 'gorgonzola, mocarela, kozji sir u ulju, parmezan',
        price: '1.330',
      },
      {
        name: 'Carpaccio Salmone',
        desc: 'dimljeni losos, kapar, rukola, skandinavski dresing, čeri',
        price: '1.080',
      },
      { name: 'Carpaccio Biftek', desc: 'biftek, rukola, parmezan, pesto genoveze', price: '1.250' },
      { name: 'Gramina Burrata', desc: 'rukola, čeri', price: '980' },
    ],
  },
  {
    id: 'bruschetti',
    label: 'Bruschetti',
    items: [
      {
        name: 'Bruschetti Pomodoro',
        desc: 'stracciatella, brusketi, bosiljak, beli luk, sušeni paradajz',
        price: '650',
      },
      {
        name: 'Bruschetti Prosciutto',
        desc: 'stracciatella, brusketi, pršuta, sušeni paradajz, bosiljak',
        price: '740',
      },
      {
        name: 'Bruschetti Salmone',
        desc: 'stracciatella, brusketi, dimljeni losos, masline, kapar, beli luk, sušeni paradajz',
        price: '880',
      },
    ],
  },
  {
    id: 'focaccia',
    label: 'Focaccia',
    items: [
      {
        name: 'Focaccia Aglio e Olio',
        desc: 'pizza testo, beli luk, maslinovo ulje, krupna morska so, origano',
        price: '360',
      },
      {
        name: 'Focaccia Pomodoro',
        desc: 'pizza testo, čeri, krupna morska so, ruzmarin, maslinovo ulje',
        price: '390',
      },
    ],
  },
  {
    id: 'sendvici',
    label: 'Sendviči',
    items: [
      {
        name: 'Paposcia Da Luca',
        desc: 'italijanska pršuta, mozzarella, pesto genoveze, stracciatella, pelat, rukola',
        price: '820',
      },
      {
        name: 'Paposcia Ventričina',
        desc: 'ventričina, sušeni paradajz, mozzarella, paradajz, rukola',
        price: '780',
      },
      {
        name: 'Paposcia Tonno',
        desc: 'tunjevina, sušeni paradajz, kisela pavlaka, baby spanać, paradajz',
        price: '770',
      },
      {
        name: 'Paposcia Mortadela',
        desc: 'mortadela, mozzarella, baby spanać, pesto genovese, kisela pavlaka',
        price: '790',
      },
      {
        name: 'Paposcia Tacchino',
        desc: 'dimljena ćuretina, šargarepa, marinirane pečurke, mozzarella, mix zelenih salata',
        price: '810',
      },
      {
        name: 'Paposcia Bresaola',
        desc: 'goveđa pršuta, mozzarella, mix zelenih salata, paradajz, mladi sir, majonez',
        price: '870',
      },
    ],
  },
  {
    id: 'piadine',
    label: 'Piadine',
    items: [
      {
        name: 'Piadina Mortadela',
        desc: 'puter, mortadela, mozzarella, pesto genoveze, kisela pavlaka, mix zelenih salata, paradajz, topljeni čedar',
        price: '970',
      },
      {
        name: 'Piadina Salmone',
        desc: 'puter, mozzarella, mix zelenih salata, masline, kapar, paradajz, dimljeni losos',
        price: '1.290',
      },
      {
        name: 'Piadina Vege',
        desc: 'pelat, mozzarella, tikvice, paprika, pečurke, rukola, čeri, sušeni paradajz, dresing pesto genovese',
        price: '870',
      },
      {
        name: 'Piadina Cesar',
        desc: 'pečena piletina, mozzarella, mix zelenih salata, cezar dresing, čeri',
        price: '910',
      },
      {
        name: 'Piadina Tonno',
        desc: 'puter, mozzarella, mix zelenih salata, tunjevina, masline, kapar',
        price: '960',
      },
    ],
  },
  {
    id: 'salate',
    label: 'Salate',
    items: [
      {
        name: 'Insalata Prosciutto Crudo',
        desc: 'mix zelenih salata, sušeni paradajz, italijanska pršuta, burrata, masline',
        price: '1.480',
      },
      {
        name: 'Insalata Vegetariana con Burrata Pesto Genoveze',
        desc: 'mix zelenih salata, rukola, spanać, šargarepa, sušeni paradajz, čeri, burrata pesto genoveze, tikvice',
        price: '1.340',
      },
      {
        name: 'Insalata Giardino Pomodori',
        desc: 'paradajz, krutoni, parmezan, čeri, bosiljak, beli luk, sušeni paradajz, halapenjo paprika, žuti paradajz',
        price: '980',
      },
      {
        name: 'Insalata Tacchino con Peperoncino Dolce',
        desc: 'mix zelenih salata, dimljena ćuretina, rukola, baby spanać, lešnik, slatki čili, paprika, krastavac, šargarepa',
        price: '1.260',
      },
      {
        name: 'Insalata Cesar',
        desc: 'mix zelenih salata, slanina, parmezan, krutoni, čeri, cezar dresing, pečena piletina',
        price: '1.090',
      },
      {
        name: 'Insalata Tonno',
        desc: 'paradajz, mix zelenih salata, kiseli krastavac, crveni luk, baby spanać, limun dresing, tunjevina',
        price: '1.050',
      },
      {
        name: 'Insalata Salmone',
        desc: 'mix zelenih salata, masline, segmenti pomorandže, kapar, čeri, paradajz, krastavac, dimljeni losos',
        price: '1.520',
      },
      { name: 'Caprese con Burrata', desc: 'paradajz, bosiljak, burrata', price: '980' },
    ],
  },
  {
    id: 'pizza-classica',
    label: 'Pizza Classica',
    sizes: ['25cm', '32cm'],
    items: [
      { name: 'Margherita', desc: 'pelat, mozzarella, bosiljak', prices: ['710', '870'] },
      {
        name: 'Ventričina',
        desc: 'pelat, mozzarella, ventričina, ricotta, pasta od ljutih svežih paprika',
        prices: ['910', '1.220'],
      },
      {
        name: 'Capricciosa',
        desc: 'pelat, mozzarella, šunka, masline, šampinjoni, origano',
        prices: ['870', '1.090'],
      },
      {
        name: 'Bresaola',
        desc: 'pelat, mozzarella, goveđa pršuta, rukola, čeri',
        prices: ['990', '1.330'],
      },
      {
        name: 'Romeo e Giulietta',
        desc: 'pelat, mozzarella, panceta, rukola, ementaler',
        prices: ['970', '1.310'],
      },
      {
        name: 'Tre Colori',
        desc: 'pelat, mozzarella, italijanska pršuta, rukola, čeri',
        prices: ['960', '1.290'],
      },
      {
        name: 'Pizza Carbonara',
        desc: 'neutralna pavlaka, jaja, parmezan, panceta, kajmak',
        prices: ['810', '1.120'],
      },
      {
        name: 'Pizza Gramina',
        desc: 'pelat, mozzarella, kozji sir, panceta, baby spanać, sušeni paradajz',
        prices: ['1.050', '1.420'],
      },
      {
        name: 'Pizza Genovese con Mortadela',
        desc: 'kisela pavlaka, pesto genovese, mozzarella, mortadela, baby spanać, čeri',
        prices: ['890', '1.240'],
      },
      {
        name: 'Quattro Formaggio',
        desc: 'mozzarella, parmezan, gorgonzola, kozji sir',
        prices: ['960', '1.340'],
      },
      {
        name: 'Vegeteriana',
        desc: 'pelat, mozzarella, tikvice, paprike, čeri, baby spanać, ricotta',
        prices: ['870', '1.160'],
      },
      {
        name: 'Pizza Giros',
        desc: 'pelat, mozzarella, pileći file, crveni luk, tzatziki',
        prices: ['890', '1.120'],
      },
      {
        name: 'Pizza Salsiccia Gramina',
        desc: 'pelat, mozzarella, senf, homoljske kobasice, crveni luk, halapenjo paprika',
        prices: ['960', '1.240'],
      },
      {
        name: 'Pizza Verde',
        desc: 'domaći pesto sos, pileći file, pinjoli, parmezan, sušeni paradajz, sušeni čeri',
        prices: ['940', '1.350'],
      },
      {
        name: 'Pizza Tonno e Cipolla',
        desc: 'pelat, mozzarella, tunjevina, crveni luk',
        prices: ['840', '1.140'],
      },
      {
        name: 'Verdure con Pollo',
        desc: 'mozzarella, mix povrća, slatko-ljuti sos, soja sos, piletina',
        prices: ['910', '1.140'],
      },
      {
        name: 'La Rustica',
        desc: 'pelat, mozzarella, pečurke, pečenica, jaja, sušeni paradajz',
        prices: ['940', '1.160'],
      },
      { name: 'Gamberetta', desc: 'mozzarella, gamberi, paradajz, limun', prices: ['920', '1.150'] },
    ],
  },
  {
    id: 'pizza-premium',
    label: 'Pizza Premium',
    sizes: ['25cm', '32cm'],
    items: [
      {
        name: 'Pizza Salmone',
        desc: 'pelat, mozzarella, dimljeni losos, masline, baby spanać, tikvice',
        prices: ['1.340', '1.590'],
      },
      {
        name: 'Pizza Burrata',
        desc: 'pelat, mozzarella, italijanska pršuta, burrata, rukola, čeri',
        prices: ['1.650', '1.820'],
      },
      {
        name: 'Quattro Carne',
        desc: 'pelat, mozzarella, panceta, ventričina, šunka, italijanska pršuta',
        prices: ['1.290', '1.670'],
      },
      {
        name: 'Pizza Tartuffo',
        desc: 'kisela pavlaka, burrata tartuf, marinirani čeri, marinirane pečurke, mozzarella, čeri, pileći file',
        prices: ['1.720', '1.990'],
      },
      {
        name: 'Pizza Tacchino con Burrata Pesto Genoveze',
        desc: 'dimljena ćuretina, burrata pesto genoveze, sušeni paradajz, mozzarella, rukola, crveni luk',
        prices: ['1.730', '1.960'],
      },
      {
        name: 'Pizza Burgerica',
        desc: 'senf, mozzarella, burger meso, čedar, med, čeri, mix zelenih salata, pelat',
        prices: ['1.270', '1.890'],
      },
      {
        name: 'Pizza con Bistecca',
        desc: 'pelat, mozzarella, biftek, parmezan, pesto, rukola',
        prices: ['1.470', '1.750'],
      },
      {
        name: 'Pizza Mortadela con Pistacchio',
        desc: 'kisela pavlaka, pesto genovese, pista krem, pistaći, mortadela, burrata',
        prices: ['1.490', '1.780'],
      },
    ],
  },
  {
    id: 'ponuda-dana',
    label: 'Ponuda dana',
    items: [
      {
        name: 'Lasagne alla Bolognese',
        desc: 'lazanje, pelat, juneće meso, gauda, bešamel sos',
        price: '1.090',
      },
      {
        name: 'Gnocchi Prosciutto e Formaggio',
        desc: 'njoke, dimljeni sir, pršuta, neutralna pavlaka',
        price: '940',
      },
    ],
  },
  {
    id: 'deserti',
    label: 'Deserti',
    items: [
      { name: 'Raw višnja', price: '680' },
      { name: 'Čizkejk sa pistaćima', price: '640' },
      { name: 'Čoko malina', price: '520' },
      { name: 'Čoko torta', price: '550' },
      { name: 'Beli grilijaš', price: '600' },
    ],
  },
]
