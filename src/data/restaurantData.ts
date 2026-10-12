export interface MenuItem {
  id: string;
  name: string;
  category:
    | 'rice_biryani'
    | 'starters_grilled'
    | 'shawarma'
    | 'chicken_gravy'
    | 'chicken_dry'
    | 'mutton'
    | 'paneer_gravy'
    | 'paneer_dry'
    | 'roti'
    | 'beverages'
    | 'special_dry';
  price: number;
  description: string;
  isVeg: boolean;
  isSpeciality?: boolean;
  isFeatured?: boolean;
  image?: string;
}

export const RESTAURANT_INFO = {
  name: 'City Madina Restaurant',
  altName: 'City Madina Hotel',
  establishedYear: '2016',
  tagline: 'Authentic Flavours. Unforgettable Moments.',
  description:
    'Discover delicious biryani, smoky grilled chicken, rich Mughlai gravies, shawarma and more at City Madina Restaurant, Channapatna.',
  address: {
    line1: '#1553, Opposite Janata Saw Mill, SH17',
    line2: 'Bengaluru–Mysore Road, Kuvempu Nagar / Sadat Ali Khan Colony',
    city: 'Channapatna',
    state: 'Karnataka',
    pincode: '562160',
    country: 'India',
    full: '#1553, Opposite Janata Saw Mill, SH17, Bengaluru–Mysore Road, Kuvempu Nagar / Sadat Ali Khan Colony, Channapatna, Karnataka 562160, India',
  },
  phones: {
    main: '+91 9886434443',
    mainRaw: '+919886434443',
    delivery: '+91 7204409745',
    deliveryRaw: '+917204409745',
    whatsappNumber: '917204409745',
  },
  hours: 'Every day, 12:00 PM to 12:00 AM',
  averageCost: '₹200–₹400 per person',
  costForTwo: '₹500',
  rating: '4.1 / 5',
  cuisine: 'Biryani, North Indian, Mughlai, Chinese, Shawarma, Grilled Chicken, and Vegetarian dishes',
  services: ['Dine-in', 'Takeaway', 'Home Delivery'],
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=City+Madina+Restaurant+SH17+Bengaluru-Mysore+Road+Channapatna+Karnataka+562160',
  mapsEmbedSrc:
    'https://maps.google.com/maps?q=City%20Madina%20Hotel,%20SH17,%20Channapatna,%20Karnataka%20562160&t=&z=15&ie=UTF8&iwloc=&output=embed',
};

export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Dishes' },
  { id: 'rice_biryani', label: 'Rice & Biryani' },
  { id: 'starters_grilled', label: 'Starters & Grilled' },
  { id: 'shawarma', label: 'Shawarma' },
  { id: 'chicken_gravy', label: 'Chicken Gravy' },
  { id: 'chicken_dry', label: 'Chicken Dry' },
  { id: 'mutton', label: 'Mutton Gravy & Dry' },
  { id: 'paneer_gravy', label: 'Paneer Gravy' },
  { id: 'paneer_dry', label: 'Paneer Dry' },
  { id: 'roti', label: 'Roti & Parota' },
  { id: 'special_dry', label: 'Special Dry' },
  { id: 'beverages', label: 'Cold Drinks & Water' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // ==========================================
  // 1. ROTI (Exact from official menu)
  // ==========================================
  {
    id: 'roti_kerala_parota',
    name: 'Kerala Parota',
    category: 'roti',
    price: 20,
    description: 'Flaky, layered traditional Kerala style parota, freshly pan-toasted.',
    isVeg: true,
    image: '/src/assets/images/dish_kerala_parota_1791816030585.jpg',
  },
  {
    id: 'roti_ceylon_parota',
    name: 'Ceylon Parota',
    category: 'roti',
    price: 30,
    description: 'Crisp and delicate folded Sri Lankan / Ceylon style layered parota.',
    isVeg: true,
    image: '/src/assets/images/dish_kerala_parota_1791816030585.jpg',
  },
  {
    id: 'roti_rumali',
    name: 'Rumali Roti',
    category: 'roti',
    price: 20,
    description: 'Ultra-thin, soft handkerchief flatbread baked hot over an inverted tawa.',
    isVeg: true,
  },

  // ==========================================
  // 2. RICE & BIRYANI (Exact from official menu)
  // ==========================================
  {
    id: 'rice_chicken_biryani',
    name: 'Chicken Biryani',
    category: 'rice_biryani',
    price: 160,
    description: 'Aromatic basmati rice layered with spiced tender chicken, saffron essence, and brown onions.',
    isVeg: false,
    isFeatured: true,
    isSpeciality: true,
    image: '/src/assets/images/dish_chicken_biryani_1791815979283.jpg',
  },
  {
    id: 'rice_mutton_biryani',
    name: 'Mutton Biryani',
    category: 'rice_biryani',
    price: 230,
    description: 'Authentic slow dum mutton biryani packed with succulent meat chunks and rich spices.',
    isVeg: false,
    isFeatured: true,
    isSpeciality: true,
    image: '/src/assets/images/dish_mutton_biryani_1791811410104.jpg',
  },
  {
    id: 'rice_ghee_full',
    name: 'Ghee Rice',
    category: 'rice_biryani',
    price: 80,
    description: 'Fragrant long-grain basmati rice gently tossed in pure desi ghee and mild whole spices.',
    isVeg: true,
  },
  {
    id: 'rice_ghee_half',
    name: 'Ghee Rice - Half',
    category: 'rice_biryani',
    price: 50,
    description: 'Half portion of fragrant desi ghee rice.',
    isVeg: true,
  },
  {
    id: 'rice_biryani_full',
    name: 'Biryani Rice',
    category: 'rice_biryani',
    price: 100,
    description: 'Flavor-infused seasoned dum biryani rice served with raita and gravy (without meat pieces).',
    isVeg: false,
  },
  {
    id: 'rice_biryani_half',
    name: 'Biryani Rice - Half',
    category: 'rice_biryani',
    price: 70,
    description: 'Half portion of authentic seasoned dum biryani rice.',
    isVeg: false,
  },
  {
    id: 'rice_chicken_fried',
    name: 'Chicken Fried Rice',
    category: 'rice_biryani',
    price: 170,
    description: 'Wok-tossed basmati rice with shredded spiced chicken, spring onions, egg, and sauces.',
    isVeg: false,
  },
  {
    id: 'rice_egg_fried',
    name: 'Egg Fried Rice',
    category: 'rice_biryani',
    price: 140,
    description: 'Fluffy stir-fried rice tossed with scrambled eggs, fresh seasonal veggies, and light soy.',
    isVeg: false,
  },
  {
    id: 'rice_veg_fried',
    name: 'Veg Fried Rice',
    category: 'rice_biryani',
    price: 120,
    description: 'Classic Indo-Chinese wok-fried rice with finely chopped carrots, beans, and cabbage.',
    isVeg: true,
  },

  // ==========================================
  // 3. STARTERS (Exact from official menu)
  // ==========================================
  {
    id: 'starter_chicken_kabab_full',
    name: 'Chicken Kabab Full',
    category: 'starters_grilled',
    price: 240,
    description: 'Channapatna style crispy fried red chicken chunks seasoned with aromatic herbs and green chillies.',
    isVeg: false,
    isFeatured: true,
    image: '/src/assets/images/dish_chicken_kabab_1791815854553.jpg',
  },
  {
    id: 'starter_chicken_kabab_half',
    name: 'Chicken Kabab Half',
    category: 'starters_grilled',
    price: 120,
    description: 'Half portion of our signature crispy red fried chicken kabab.',
    isVeg: false,
    isFeatured: true,
    image: '/src/assets/images/dish_chicken_kabab_1791815854553.jpg',
  },
  {
    id: 'starter_chicken_grilled_full',
    name: 'Chicken Grilled Full',
    category: 'starters_grilled',
    price: 470,
    description: 'Whole chicken marinated in our secret tandoori & Mughlai rub, slow charred over open heat.',
    isVeg: false,
    isFeatured: true,
    isSpeciality: true,
    image: '/src/assets/images/speciality_grilled_chicken_1791811378266.jpg',
  },
  {
    id: 'starter_chicken_grilled_half',
    name: 'Chicken Grilled Half',
    category: 'starters_grilled',
    price: 240,
    description: 'Half portion of our signature spicy charred grilled chicken served with lemon and mint chutney.',
    isVeg: false,
    isFeatured: true,
    image: '/src/assets/images/dish_grilled_chicken_half_1791816004786.jpg',
  },
  {
    id: 'starter_chicken_leg_piece',
    name: 'Chicken Leg Piece',
    category: 'starters_grilled',
    price: 70,
    description: 'Juicy single chicken leg quarter marinated in rich spices and roasted to tenderness.',
    isVeg: false,
  },
  {
    id: 'starter_chicken_lollipop_full',
    name: 'Chicken Lollipop Full',
    category: 'starters_grilled',
    price: 400,
    description: 'Crisp fried chicken winglets shaped into lollipops with spicy dipping sauce.',
    isVeg: false,
    image: '/src/assets/images/dish_chicken_lollipop_1791815870258.jpg',
  },
  {
    id: 'starter_chicken_lollipop_half',
    name: 'Chicken Lollipop Half',
    category: 'starters_grilled',
    price: 200,
    description: 'Half portion of crispy fried chicken wing lollipops.',
    isVeg: false,
    isFeatured: true,
    image: '/src/assets/images/dish_chicken_lollipop_1791815870258.jpg',
  },

  // ==========================================
  // 4. CHICKEN GRAVY (Exact from official menu)
  // ==========================================
  {
    id: 'cg_chicken_masala',
    name: 'Chicken Masala',
    category: 'chicken_gravy',
    price: 200,
    description: 'Classic hearty chicken curry simmered in a spiced onion-tomato gravy with garam masala.',
    isVeg: false,
  },
  {
    id: 'cg_chicken_kadai',
    name: 'Chicken Kadai',
    category: 'chicken_gravy',
    price: 200,
    description: 'Chicken simmered with freshly crushed kadai coriander, roasted red chillies, and bell peppers.',
    isVeg: false,
  },
  {
    id: 'cg_chicken_hyderabadi',
    name: 'Chicken Hyderabadi',
    category: 'chicken_gravy',
    price: 200,
    description: 'Rich herb-infused chicken gravy prepared with fresh mint, coriander, yoghurt, and green chillies.',
    isVeg: false,
  },
  {
    id: 'cg_chicken_kolhapuri',
    name: 'Chicken Kolhapuri',
    category: 'chicken_gravy',
    price: 200,
    description: 'Spicy and robust red chicken curry with roasted spices and toasted coconut.',
    isVeg: false,
  },
  {
    id: 'cg_chicken_patiala',
    name: 'Chicken Patiala',
    category: 'chicken_gravy',
    price: 200,
    description: 'Punjabi style decadent chicken curry finished with creamy gravy and royal spices.',
    isVeg: false,
  },
  {
    id: 'cg_chicken_khurma',
    name: 'Chicken Khurma',
    category: 'chicken_gravy',
    price: 200,
    description: 'Mild, aromatic chicken kurma enriched with cashew paste, coconut, and whole spices.',
    isVeg: false,
  },
  {
    id: 'cg_butter_chicken',
    name: 'Butter Chicken',
    category: 'chicken_gravy',
    price: 200,
    description: 'Succulent tandoori chicken simmered in a velvety smooth buttery tomato makhani gravy.',
    isVeg: false,
    image: '/src/assets/images/dish_butter_chicken_1791816062207.jpg',
  },
  {
    id: 'cg_chicken_kalimirch',
    name: 'Chicken Kalimirch',
    category: 'chicken_gravy',
    price: 200,
    description: 'Creamy white and peppery gravy infused with freshly crushed whole black peppercorns.',
    isVeg: false,
  },

  // ==========================================
  // 5. CHICKEN DRY (Exact from official menu)
  // ==========================================
  {
    id: 'cd_chicken_manchurian',
    name: 'Chicken Manchurian',
    category: 'chicken_dry',
    price: 200,
    description: 'Indo-Chinese boneless chicken balls tossed in tangy soya-garlic-ginger Manchurian sauce.',
    isVeg: false,
  },
  {
    id: 'cd_chicken_65',
    name: 'Chicken 65',
    category: 'chicken_dry',
    price: 200,
    description: 'Spicy deep-fried chicken starter tempered with mustard seeds, curry leaves, and green chillies.',
    isVeg: false,
  },
  {
    id: 'cd_chicken_pepper_dry',
    name: 'Chicken Pepper Dry',
    category: 'chicken_dry',
    price: 200,
    description: 'Tender chicken pieces tossed dry with freshly cracked Malabar black pepper and curry leaves.',
    isVeg: false,
  },
  {
    id: 'cd_chicken_chilly',
    name: 'Chicken Chilly',
    category: 'chicken_dry',
    price: 200,
    description: 'Boneless chicken tossed with sliced green chillies, capsicum, onions, and dark soya sauce.',
    isVeg: false,
  },
  {
    id: 'cd_lemon_chicken',
    name: 'Lemon Chicken',
    category: 'chicken_dry',
    price: 200,
    description: 'Tangy and mildly spiced dry chicken tossed with fresh lemon juice and green herbs.',
    isVeg: false,
  },
  {
    id: 'cd_dragon_chicken_boneless_full',
    name: 'Dragon Chicken Boneless Full',
    category: 'chicken_dry',
    price: 440,
    description: 'Crispy fried boneless chicken strips tossed in spicy fiery red dragon sauce with cashews.',
    isVeg: false,
  },
  {
    id: 'cd_dragon_chicken_boneless_half',
    name: 'Dragon Chicken Boneless Half',
    category: 'chicken_dry',
    price: 220,
    description: 'Half portion of crispy dragon boneless chicken with cashews and fiery red glaze.',
    isVeg: false,
  },

  // ==========================================
  // 6. SPECIAL DRY (Exact from official menu)
  // ==========================================
  {
    id: 'sd_teetar_fry',
    name: 'Teetar Fry',
    category: 'special_dry',
    price: 200,
    description: 'Traditional quail (Teetar) marinated in local village spices and shallow fried to crispness.',
    isVeg: false,
  },
  {
    id: 'sd_teetar_pepper_dry',
    name: 'Teetar Pepper Dry',
    category: 'special_dry',
    price: 250,
    description: 'Quail (Teetar) tossed with fiery black pepper masala, browned onions, and curry leaves.',
    isVeg: false,
  },
  {
    id: 'sd_junglee_murg',
    name: 'Junglee Murg (Chicken)',
    category: 'special_dry',
    price: 400,
    description: 'Country style rustic dry chicken cooked with whole dry red chillies, garlic, and pure ghee.',
    isVeg: false,
  },

  // ==========================================
  // 7. SHAWARMA (Exact from official menu)
  // ==========================================
  {
    id: 'sh_shawarma_roll',
    name: 'Shawarma Roll',
    category: 'shawarma',
    price: 90,
    description: 'Juicy spiced shredded chicken wrapped in soft rumali bread with garlic mayonnaise.',
    isVeg: false,
    image: '/src/assets/images/dish_shawarma_roll_1791815896921.jpg',
  },
  {
    id: 'sh_shawarma_roll_special',
    name: 'Shawarma Roll - Special',
    category: 'shawarma',
    price: 120,
    description: 'Special loaded chicken shawarma with extra chicken filling and creamy signature sauce.',
    isVeg: false,
    image: '/src/assets/images/dish_shawarma_roll_1791815896921.jpg',
  },
  {
    id: 'sh_shawarma_roll_jumbo',
    name: 'Shawarma Roll - Jumbo',
    category: 'shawarma',
    price: 150,
    description: 'Jumbo-sized chicken shawarma stuffed with double chicken and creamy garlic tahini.',
    isVeg: false,
  },
  {
    id: 'sh_cheese_shawarma',
    name: 'Cheese Shawarma',
    category: 'shawarma',
    price: 110,
    description: 'Classic chicken shawarma roll layered with melted cheese slice and garlic sauce.',
    isVeg: false,
  },
  {
    id: 'sh_schezwan_shawarma',
    name: 'Schezwan Shawarma',
    category: 'shawarma',
    price: 110,
    description: 'Spicy chicken shawarma spiked with fiery Indo-Chinese Schezwan chutney.',
    isVeg: false,
  },
  {
    id: 'sh_shawarma_cheese_special',
    name: 'Shawarma with Cheese Special',
    category: 'shawarma',
    price: 130,
    description: 'Special chicken shawarma roll with generous melted cheese and garlic spread.',
    isVeg: false,
  },
  {
    id: 'sh_plate_shawarma',
    name: 'Plate Shawarma',
    category: 'shawarma',
    price: 140,
    description: 'Generous platter of shredded shawarma chicken served open with pita, mayo, and pickles.',
    isVeg: false,
  },
  {
    id: 'sh_paneer_shawarma',
    name: 'Paneer Shawarma',
    category: 'shawarma',
    price: 100,
    description: 'Fresh spiced marinated cottage cheese cubes wrapped in soft bread with creamy mayo.',
    isVeg: true,
  },
  {
    id: 'sh_paneer_schezwan_shawarma',
    name: 'Paneer Schezwan Shawarma',
    category: 'shawarma',
    price: 120,
    description: 'Spiced paneer shawarma rolled with spicy Schezwan sauce and fresh salad.',
    isVeg: true,
  },

  // ==========================================
  // 8. MUTTON GRAVY (Exact from official menu)
  // ==========================================
  {
    id: 'mg_mutton_masala',
    name: 'Mutton Masala',
    category: 'mutton',
    price: 230,
    description: 'Slow-cooked bone-in mutton pieces in a thick, rich onion and tomato Mughlai gravy.',
    isVeg: false,
    isFeatured: true,
    isSpeciality: true,
    image: '/src/assets/images/dish_mutton_masala_1791815881383.jpg',
  },
  {
    id: 'mg_mutton_kadai',
    name: 'Mutton Kadai',
    category: 'mutton',
    price: 230,
    description: 'Tender mutton cooked with freshly ground coriander, dry chillies, and bell peppers.',
    isVeg: false,
  },
  {
    id: 'mg_mutton_hyderabadi',
    name: 'Mutton Hyderabadi',
    category: 'mutton',
    price: 230,
    description: 'Herbaceous Hyderabadi mutton gravy cooked with mint, coriander, and royal spices.',
    isVeg: false,
  },
  {
    id: 'mg_mutton_kolhapuri',
    name: 'Mutton Kolhapuri',
    category: 'mutton',
    price: 230,
    description: 'Fiery Maharashtrian style mutton curry cooked with toasted red chillies and coconut.',
    isVeg: false,
  },
  {
    id: 'mg_mutton_patiala',
    name: 'Mutton Patiala',
    category: 'mutton',
    price: 230,
    description: 'Rich royal Patiala style mutton preparation slow simmered in nutty aromatic spices.',
    isVeg: false,
  },
  {
    id: 'mg_mutton_khurma',
    name: 'Mutton Khurma',
    category: 'mutton',
    price: 230,
    description: 'Mild, rich mutton kurma enriched with cashew paste, poppy seeds, and cardamom.',
    isVeg: false,
  },
  {
    id: 'mg_mutton_kalimirchi',
    name: 'Mutton Kalimirchi',
    category: 'mutton',
    price: 230,
    description: 'Succulent mutton simmered in a peppery black pepper and roasted garlic gravy.',
    isVeg: false,
  },
  {
    id: 'mg_mutton_pepper_dry',
    name: 'Mutton Pepper Dry',
    category: 'mutton',
    price: 230,
    description: 'Tender baby mutton morsels pan-fried dry with cracked black pepper and curry leaves.',
    isVeg: false,
  },

  // ==========================================
  // 9. PANEER GRAVY (Exact from official menu)
  // ==========================================
  {
    id: 'pg_paneer_butter_masala',
    name: 'Paneer Butter Masala',
    category: 'paneer_gravy',
    price: 170,
    description: 'Fresh cottage cheese cubes simmered in a velvety smooth buttery tomato and cashew makhani gravy.',
    isVeg: true,
    isFeatured: true,
    isSpeciality: true,
    image: '/src/assets/images/dish_paneer_butter_masala_1791811426784.jpg',
  },
  {
    id: 'pg_paneer_kadai',
    name: 'Paneer Kadai',
    category: 'paneer_gravy',
    price: 170,
    description: 'Paneer cubes tossed with chunky capsicum, onions, and freshly ground kadai spices.',
    isVeg: true,
  },
  {
    id: 'pg_paneer_khurma',
    name: 'Paneer Khurma',
    category: 'paneer_gravy',
    price: 170,
    description: 'Delicate and nutty paneer gravy prepared with cashew cream and fragrant green cardamom.',
    isVeg: true,
  },
  {
    id: 'pg_paneer_hyderabadi',
    name: 'Paneer Hyderabadi',
    category: 'paneer_gravy',
    price: 170,
    description: 'Flavourful green herb gravy with mint, cilantro, green chillies, and soft paneer.',
    isVeg: true,
  },
  {
    id: 'pg_paneer_kolhapuri',
    name: 'Paneer Kolhapuri',
    category: 'paneer_gravy',
    price: 170,
    description: 'Spicy Kolhapuri paneer curry with toasted red chillies and dry coconut masala.',
    isVeg: true,
  },
  {
    id: 'pg_paneer_patiala',
    name: 'Paneer Patiala',
    category: 'paneer_gravy',
    price: 170,
    description: 'Rich North Indian paneer delicacy finished with roasted spices and cream.',
    isVeg: true,
  },

  // ==========================================
  // 10. PANEER DRY (Exact from official menu)
  // ==========================================
  {
    id: 'pd_paneer_manchurian',
    name: 'Paneer Manchurian',
    category: 'paneer_dry',
    price: 180,
    description: 'Crisp paneer bites sautéed in tangy Manchurian sauce with chopped garlic and spring onions.',
    isVeg: true,
  },
  {
    id: 'pd_paneer_chilly',
    name: 'Paneer Chilly',
    category: 'paneer_dry',
    price: 180,
    description: 'Golden fried cottage cheese tossed with sliced green chillies, capsicum, and soya sauce.',
    isVeg: true,
  },
  {
    id: 'pd_paneer_65',
    name: 'Paneer 65',
    category: 'paneer_dry',
    price: 180,
    description: 'Spicy crisp paneer cubes tempered with curd, red chillies, and curry leaves.',
    isVeg: true,
  },
  {
    id: 'pd_paneer_pepper_dry',
    name: 'Paneer Pepper Dry',
    category: 'paneer_dry',
    price: 180,
    description: 'Paneer tossed dry with freshly crushed black peppercorns, onions, and curry leaves.',
    isVeg: true,
  },

  // ==========================================
  // 11. COLD DRINKS & WATER (Exact from official menu)
  // ==========================================
  {
    id: 'drink_cold_300ml',
    name: 'Cold Drink 300 ml',
    category: 'beverages',
    price: 20,
    description: 'Chilled refreshing soft drink bottle (300 ml).',
    isVeg: true,
  },
  {
    id: 'drink_cold_450ml',
    name: 'Cold Drink 450 ml',
    category: 'beverages',
    price: 40,
    description: 'Chilled refreshing soft drink bottle (450 ml).',
    isVeg: true,
  },
  {
    id: 'drink_cold_1litre',
    name: 'Cold Drink 1 litre',
    category: 'beverages',
    price: 50,
    description: 'Chilled refreshing soft drink bottle (1 Litre).',
    isVeg: true,
  },
  {
    id: 'drink_cold_2_2litre',
    name: 'Cold Drink 2.2 litre',
    category: 'beverages',
    price: 100,
    description: 'Family size chilled soft drink bottle (2.2 Litre).',
    isVeg: true,
  },
  {
    id: 'drink_mineral_water_1l',
    name: 'Mineral Water 1 Litre',
    category: 'beverages',
    price: 20,
    description: 'Packaged premium chilled drinking water (1 Litre).',
    isVeg: true,
  },
];

export const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    title: 'Smoky Grilled Chicken',
    category: 'Starters & Grilled',
    image: '/src/assets/images/speciality_grilled_chicken_1791811378266.jpg',
    description: 'Full spiced chicken charred to perfection on our open grill, served with lemon wedges and mint chutney.',
  },
  {
    id: 'gal-2',
    title: 'Signature Chicken Dum Biryani',
    category: 'Rice & Biryani',
    image: '/src/assets/images/dish_chicken_biryani_1791815979283.jpg',
    description: 'Steaming aromatic dum biryani with tender chicken drumstick, saffron rice, boiled egg, and fresh raita.',
  },
  {
    id: 'gal-3',
    title: 'Royal Mutton Dum Biryani',
    category: 'Rice & Biryani',
    image: '/src/assets/images/dish_mutton_biryani_1791811410104.jpg',
    description: 'Succulent mutton slow-cooked with basmati rice, browned onions, boiled eggs, and rich saffron seasoning.',
  },
  {
    id: 'gal-4',
    title: 'Paneer Butter Masala & Naan',
    category: 'Paneer Gravy',
    image: '/src/assets/images/dish_paneer_butter_masala_1791811426784.jpg',
    description: 'Velvety butter paneer gravy in a traditional copper handi with freshly baked Kerala / Ceylon parota.',
  },
  {
    id: 'gal-5',
    title: 'Crispy Chicken Starters',
    category: 'Starters & Dry',
    image: '/src/assets/images/dish_chicken_kabab_1791815854553.jpg',
    description: 'Freshly prepared crispy red chicken kababs and lollipops seasoned with authentic regional spices.',
  },
  {
    id: 'gal-6',
    title: 'Authentic Indian Food Feast',
    category: 'Dine-In Presentation',
    image: '/src/assets/images/dish_restaurant_feast_1791816093648.jpg',
    description: 'Traditional dining setup welcoming families, travellers on Bengaluru-Mysore Highway, and local patrons.',
  },
];

export const SPECIALITIES = [
  {
    id: 'spec-grilled',
    name: 'Smoky Grilled Chicken',
    highlight: 'House Signature Dish',
    description:
      'Whole chicken tenderized in aromatic spices and char-grilled over open coals. Crisp smoky skin on the outside, supremely juicy inside, accompanied by fresh onion rings and chilled mint dip.',
    image: '/src/assets/images/speciality_grilled_chicken_1791811378266.jpg',
    badge: 'Chef Recommendation',
    price: '₹470 (Full) / ₹240 (Half)',
  },
  {
    id: 'spec-biryani',
    name: 'Authentic Chicken Biryani',
    highlight: 'Slow Dum Cooking',
    description:
      'Long-grain basmati rice layered with seasoned marinated chicken and slow cooked on dum to seal all the natural aromas. Every grain is infused with fragrant saffron, ghee, and roasted whole spices.',
    image: '/src/assets/images/dish_chicken_biryani_1791815979283.jpg',
    badge: 'Customer Favourite',
    price: '₹160',
  },
  {
    id: 'spec-mutton',
    name: 'Flavourful Mutton Gravy',
    highlight: 'Rich Mughlai Gravy',
    description:
      'Tender bone-in mutton pieces cooked in a rich, velvety masala of caramelized onions, garlic, ginger, and hand-ground spices. Pairs wonderfully with steaming hot Ceylon Parota or Rumali Roti.',
    image: '/src/assets/images/dish_mutton_masala_1791815881383.jpg',
    badge: 'Speciality Gravy',
    price: '₹230',
  },
  {
    id: 'spec-paneer',
    name: 'Rich Paneer Butter Masala',
    highlight: 'Pure Vegetarian Delight',
    description:
      'Soft cottage cheese cubes gently poached in a creamy, butter-infused tomato gravy finished with fresh malai cream and subtle fenugreek leaves. A rich favourite for our vegetarian diners.',
    image: '/src/assets/images/dish_paneer_butter_masala_1791811426784.jpg',
    badge: 'Vegetarian Pick',
    price: '₹170',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'A Variety of Flavours',
    description: 'Extensive choices spanning Mughlai gravies, authentic biryanis, grilled chicken, Chinese favourites, shawarmas, and vegetarian dishes.',
  },
  {
    title: 'Biryani and Grilled Specialities',
    description: 'Renowned for our distinct dum biryanis and open-charred grilled chicken prepared daily with fresh ingredients.',
  },
  {
    title: 'Convenient Takeaway',
    description: 'Fast counter service and neat parcel packaging, convenient for highway travellers and families in Channapatna.',
  },
  {
    title: 'Home Delivery Contact Available',
    description: 'Direct WhatsApp and phone assistance on +91 7204409745 for quick delivery orders to local residences and workplaces.',
  },
];
