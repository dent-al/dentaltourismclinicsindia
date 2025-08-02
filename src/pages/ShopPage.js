import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeroBanner from "../components/HeroBanner";
import FullPageLoader from "../components/FullPageLoader";
import { loadProductsFromCSV, mapCategoryToDentalProblems } from "../data/csvLoader";

const ShopPage = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [selectedProblems, setSelectedProblems] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [openGroups, setOpenGroups] = useState({
    ToothBrush: false,
    SoftBristlesToothbrushes: false,
    InterproxaBrushes: false,
    KidsToothBrushes: false,
    Toothpaste: false,
    KidsToothpaste: false,
    AyurvedicToothpaste: false,
    SensitiveToothpaste: false,
    NonFluoridatedToothpaste: false,
    WhiteningToothpaste: false,
    GelToothpaste: false,
    MouthWash: false,
    TongueCleaner: false,
    Flossers: false,
    GumPaints: false,
    NicotineTablets: false,
    DentalProblems: false,
    ProductCategories: false,
  });

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        
        // Try to load from CSV first
        try {
          // TEMPORARILY SKIP CSV LOADING - UNCOMMENT BELOW TO RE-ENABLE
          // const csvProducts = await loadProductsFromCSV('/catalog_product.CSV');
          // const enhancedProducts = csvProducts.map(product => ({
          //   ...product,
          //   dentalProblems: mapCategoryToDentalProblems(product.category, product.description)
          // }));
          // setProducts(enhancedProducts);
          // console.log(`Loaded ${enhancedProducts.length} products from CSV`);
          
          // FORCE USE MANUAL PRODUCTS FOR NOW
          throw new Error('Using manual products');
        } catch (csvError) {
          console.warn('Could not load CSV, using fallback products:', csvError);
          // Fallback to hardcoded products - you can add your products here
          const fallbackProducts = [
            // NICOTINE PRODUCTS
            {
              id: 1,
              name: "Cipla Nicotex Nicotine Transdermal Patch 14mg",
              description: "Helps to quit smoking, reducing cravings and withdrawal symptoms. WHO endorsed.",
              price: "₹699",
              image: require("../assets/Tooth Whitening.png"),
              dateAdded: new Date('2024-01-01'),
              category: "NicotineTablets",
              brand: "Cipla",
              rating: 4.3,
              numericPrice: 699,
              dentalProblems: ["badBreath", "gumDisease"]
            },
            {
              id: 2,
              name: "Nicogum 1mg Mint Plus Flavour Sugar Free Mini Lozenge",
              description: "Perfect for dental patients seeking a minty fresh, sugar-free solution to curb cravings.",
              price: "₹80",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-01-02'),
              category: "NicotineTablets",
              brand: "Nicogum",
              rating: 4.1,
              numericPrice: 80,
              dentalProblems: ["badBreath"]
            },
            {
              id: 3,
              name: "2baconil 2mg Nicotine Chewing Gum Ice Mint",
              description: "Sugar-free gum with refreshing Ice Mint flavor for oral care.",
              price: "₹370",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-01-03'),
              category: "NicotineTablets",
              brand: "2baconil",
              rating: 4.2,
              numericPrice: 370,
              dentalProblems: ["badBreath", "gumDisease"]
            },

            // GUM PAINTS
            {
              id: 4,
              name: "Tannic Acid Gum Paint 15ml",
              description: "Alleviates inflammation and promotes healing for gum health.",
              price: "₹81",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-04'),
              category: "GumPaints",
              brand: "Medical",
              rating: 4.0,
              numericPrice: 81,
              dentalProblems: ["gumDisease", "bleedingGums"]
            },
            {
              id: 5,
              name: "HiOra-GA Gel, Himalaya",
              description: "Advanced gel enhances dental care with unique formulation for gum health.",
              price: "₹90",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-05'),
              category: "GumPaints",
              brand: "Himalaya",
              rating: 4.4,
              numericPrice: 90,
              dentalProblems: ["gumDisease", "bleedingGums"]
            },

            // KIDS TOOTHPASTE
            {
              id: 6,
              name: "Pigeon Strawberry Toothpaste (45g, Pack of 2)",
              description: "Specially formulated for children with irresistible strawberry flavor.",
              price: "₹350",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-01-06'),
              category: "Toothpaste",
              brand: "Pigeon",
              rating: 4.5,
              numericPrice: 350,
              dentalProblems: ["toothdecay"]
            },
            {
              id: 7,
              name: "Mamaearth Fruit Punch Toothpaste - 50g",
              description: "Infused with Sorbitol, Silica & Glycerin for excellent dental care.",
              price: "₹149",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-01-07'),
              category: "Toothpaste",
              brand: "Mamaearth",
              rating: 4.3,
              numericPrice: 149,
              dentalProblems: ["toothdecay", "gumDisease"]
            },

            // REGULAR TOOTHPASTE
            {
              id: 8,
              name: "Sensodyne Toothpaste",
              description: "For sensitive teeth. Clinically proven relief.",
              price: "₹180",
              image: require("../assets/Tooth Whitening.png"),
              dateAdded: new Date('2024-01-08'),
              category: "Toothpaste",
              brand: "Sensodyne",
              rating: 4.5,
              numericPrice: 180,
              dentalProblems: ["sensitivity", "teethWhitening"]
            },
            {
              id: 9,
              name: "Pepsodent Germicheck 200g 8 Actions",
              description: "Whole mouth toothpaste fights teeth, gum issues with eight powerful actions.",
              price: "₹128",
              image: require("../assets/Tooth Whitening.png"),
              dateAdded: new Date('2024-01-09'),
              category: "Toothpaste",
              brand: "Pepsodent",
              rating: 4.2,
              numericPrice: 128,
              dentalProblems: ["gumDisease", "toothdecay", "badBreath"]
            },
            {
              id: 10,
              name: "Colgate MaxFresh Red Gel with Menthol",
              description: "Red gel infused with menthol for super fresh breath and revitalizing experience.",
              price: "₹275",
              image: require("../assets/Tooth Whitening.png"),
              dateAdded: new Date('2024-01-10'),
              category: "Toothpaste",
              brand: "Colgate",
              rating: 4.4,
              numericPrice: 275,
              dentalProblems: ["badBreath", "teethWhitening"]
            },

            // HERBAL TOOTHPASTE
            {
              id: 11,
              name: "Vicco Vajradanti Ayurvedic Paste (Pack of 2)",
              description: "Crafted with 18 essential herbs and barks for natural oral care.",
              price: "₹240",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-11'),
              category: "Toothpaste",
              brand: "Vicco",
              rating: 4.6,
              numericPrice: 240,
              dentalProblems: ["gumDisease", "badBreath", "toothdecay"]
            },
            {
              id: 12,
              name: "Dabur Red Toothpaste - 800g (200g x 4)",
              description: "Natural ingredients like clove oil and mint for effective protection.",
              price: "₹530",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-12'),
              category: "Toothpaste",
              brand: "Dabur",
              rating: 4.3,
              numericPrice: 530,
              dentalProblems: ["gumDisease", "toothdecay", "badBreath"]
            },

            // SOFT BRISTLES TOOTHBRUSHES
            {
              id: 13,
              name: "Matra Natural Bamboo Toothbrush With Ultra Soft Bristles",
              description: "Eco-friendly bamboo toothbrush with ultra soft bristles for gentle cleaning.",
              price: "₹170",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-01-13'),
              category: "SoftBristlesToothbrushes",
              brand: "Matra",
              rating: 4.3,
              numericPrice: 170,
              dentalProblems: ["sensitivity", "gumDisease"]
            },
            {
              id: 14,
              name: "Stim Ortho MB Super Soft Toothbrush",
              description: "Specially designed for orthodontic care with super soft bristles.",
              price: "₹215",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-01-14'),
              category: "SoftBristlesToothbrushes",
              brand: "Stim",
              rating: 4.5,
              numericPrice: 215,
              dentalProblems: ["sensitivity", "gumDisease"]
            },
            {
              id: 15,
              name: "Sensodyne Soft Sensitive Toothbrush",
              description: "Designed specifically for sensitive teeth with soft bristles.",
              price: "₹65",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-01-15'),
              category: "SoftBristlesToothbrushes",
              brand: "Sensodyne",
              rating: 4.4,
              numericPrice: 65,
              dentalProblems: ["sensitivity", "gumDisease"]
            },
            {
              id: 16,
              name: "Perfora Manual Toothbrush with Ultra Soft Bristles",
              description: "BPA free plastic, 2700 filaments for gentle yet effective cleaning.",
              price: "₹195",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-01-16'),
              category: "SoftBristlesToothbrushes",
              brand: "Perfora",
              rating: 4.6,
              numericPrice: 195,
              dentalProblems: ["sensitivity", "gumDisease"]
            },
            {
              id: 17,
              name: "Oral-B Pro-Health Anti-Bacterial Toothbrush",
              description: "Buy 2 Get 1 Free offer with anti-bacterial protection.",
              price: "₹193",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-01-17'),
              category: "SoftBristlesToothbrushes",
              brand: "Oral-B",
              rating: 4.5,
              numericPrice: 193,
              dentalProblems: ["gumDisease", "badBreath"]
            },
            {
              id: 18,
              name: "Oral-B Cavity Defense Bacteria Fighter Toothbrush",
              description: "Soft bristles designed to fight bacteria and prevent cavities.",
              price: "₹109",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-01-18'),
              category: "SoftBristlesToothbrushes",
              brand: "Oral-B",
              rating: 4.3,
              numericPrice: 109,
              dentalProblems: ["toothdecay", "gumDisease"]
            },
            {
              id: 19,
              name: "Oral-B Gentle Care Toothbrush with Clove Extract",
              description: "Extra soft bristles infused with clove extract for gentle care.",
              price: "₹250",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-01-19'),
              category: "SoftBristlesToothbrushes",
              brand: "Oral-B",
              rating: 4.4,
              numericPrice: 250,
              dentalProblems: ["sensitivity", "gumDisease"]
            },
            {
              id: 20,
              name: "Oral-B Sensitive Teeth & Gums Extra Soft Toothbrush",
              description: "Specially designed for sensitive teeth and gums with extra soft bristles.",
              price: "₹120",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-01-20'),
              category: "SoftBristlesToothbrushes",
              brand: "Oral-B",
              rating: 4.5,
              numericPrice: 120,
              dentalProblems: ["sensitivity", "gumDisease"]
            },
            {
              id: 21,
              name: "Colgate Slim Soft Charcoal Toothbrush",
              description: "Buy 2 Get 2 Free offer with charcoal-infused soft bristles.",
              price: "₹190",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-01-21'),
              category: "SoftBristlesToothbrushes",
              brand: "Colgate",
              rating: 4.2,
              numericPrice: 190,
              dentalProblems: ["badBreath", "teethWhitening"]
            },
            {
              id: 22,
              name: "Colgate Visible White O2 Toothbrush",
              description: "Ultra soft bristles designed for whitening and gentle cleaning.",
              price: "₹260",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-01-22'),
              category: "SoftBristlesToothbrushes",
              brand: "Colgate",
              rating: 4.3,
              numericPrice: 260,
              dentalProblems: ["teethWhitening", "sensitivity"]
            },
            {
              id: 23,
              name: "Colgate Gentle UltraFoam Ultra Soft Bristles Toothbrush",
              description: "Ultra soft bristles with foam technology for gentle cleaning.",
              price: "₹254",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-01-23'),
              category: "SoftBristlesToothbrushes",
              brand: "Colgate",
              rating: 4.4,
              numericPrice: 254,
              dentalProblems: ["sensitivity", "gumDisease"]
            },
            {
              id: 24,
              name: "Snow LED Whitening Electric Toothbrush",
              description: "Multiple modes with cosmetic whitening focus and LED technology.",
              price: "₹9,780",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-01-24'),
              category: "SoftBristlesToothbrushes",
              brand: "Snow",
              rating: 4.7,
              numericPrice: 9780,
              dentalProblems: ["teethWhitening", "sensitivity"]
            },
            {
              id: 25,
              name: "Waterpik Sensonic Sonic Electric Toothbrush",
              description: "High-speed bristle motion for stain removal and deep cleaning.",
              price: "₹16,670",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-01-25'),
              category: "SoftBristlesToothbrushes",
              brand: "Waterpik",
              rating: 4.8,
              numericPrice: 16670,
              dentalProblems: ["teethWhitening", "gumDisease"]
            },
            {
              id: 26,
              name: "Perfora Sonic Electric Toothbrush Models 001-005",
              description: "AAA battery/rechargeable options with sonic technology.",
              price: "₹1,290",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-01-26'),
              category: "SoftBristlesToothbrushes",
              brand: "Perfora",
              rating: 4.5,
              numericPrice: 1290,
              dentalProblems: ["gumDisease", "badBreath"]
            },
            {
              id: 27,
              name: "AGARO Cosmic Plus Sonic Electric Toothbrush",
              description: "40,000 strokes/min with 5 cleaning modes for thorough care.",
              price: "₹3,690",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-01-27'),
              category: "SoftBristlesToothbrushes",
              brand: "AGARO",
              rating: 4.6,
              numericPrice: 3690,
              dentalProblems: ["gumDisease", "teethWhitening"]
            },
            {
              id: 28,
              name: "Colgate ProClinical 150 Charcoal Sonic Battery-Powered Toothbrush",
              description: "Charcoal-infused sonic toothbrush with battery power.",
              price: "₹1,190",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-01-28'),
              category: "SoftBristlesToothbrushes",
              brand: "Colgate",
              rating: 4.4,
              numericPrice: 1190,
              dentalProblems: ["teethWhitening", "badBreath"]
            },
            {
              id: 29,
              name: "Caresmith Spark Rechargeable Electric Toothbrush",
              description: "Sonic technology with DuPont bristles for effective cleaning.",
              price: "₹1,890",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-01-29'),
              category: "SoftBristlesToothbrushes",
              brand: "Caresmith",
              rating: 4.5,
              numericPrice: 1890,
              dentalProblems: ["gumDisease", "sensitivity"]
            },
            {
              id: 30,
              name: "Seven Oral Care SuperBrush Electric Toothbrush Kit",
              description: "24,000–33,000 vibrations/min for superior cleaning performance.",
              price: "₹5,990",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-01-30'),
              category: "SoftBristlesToothbrushes",
              brand: "Seven Oral Care",
              rating: 4.7,
              numericPrice: 5990,
              dentalProblems: ["gumDisease", "teethWhitening"]
            },
            {
              id: 31,
              name: "Philips Sonicare ProtectiveClean 6100",
              description: "Sonic vibrations with customizable intensity for personalized care.",
              price: "₹2,490",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-01-31'),
              category: "SoftBristlesToothbrushes",
              brand: "Philips",
              rating: 4.6,
              numericPrice: 2490,
              dentalProblems: ["sensitivity", "gumDisease"]
            },
            {
              id: 32,
              name: "Oral-B Pro 1000",
              description: "Oscillating-rotating technology with pressure sensor for optimal cleaning.",
              price: "₹5,190",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-02-01'),
              category: "SoftBristlesToothbrushes",
              brand: "Oral-B",
              rating: 4.7,
              numericPrice: 5190,
              dentalProblems: ["gumDisease", "toothdecay"]
            },

            // INTERPROXA BRUSHES
            {
              id: 33,
              name: "Watsons 0.7mm I Type Interdental Brush 5pcs",
              description: "Precision interdental cleaning with 0.7mm brush head.",
              price: "₹499",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-02-02'),
              category: "InterproxaBrushes",
              brand: "Watsons",
              rating: 4.2,
              numericPrice: 499,
              dentalProblems: ["gumDisease", "toothdecay"]
            },
            {
              id: 34,
              name: "Bentodent Biodegradable Wirefree Interdental Brushes Sticks",
              description: "Eco-friendly wirefree interdental brushes for gentle cleaning.",
              price: "₹249",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-02-03'),
              category: "InterproxaBrushes",
              brand: "Bentodent",
              rating: 4.3,
              numericPrice: 249,
              dentalProblems: ["gumDisease", "toothdecay"]
            },
            {
              id: 35,
              name: "Bamboo Interdental Brushes (4 Pack)",
              description: "Sustainable bamboo interdental brushes for eco-conscious cleaning.",
              price: "₹99",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-02-04'),
              category: "InterproxaBrushes",
              brand: "Generic",
              rating: 4.0,
              numericPrice: 99,
              dentalProblems: ["gumDisease", "toothdecay"]
            },
            {
              id: 36,
              name: "Colgate Total Interdental Manual Brush For Adult",
              description: "Improved mouth health with interdental cleaning technology.",
              price: "₹150",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-02-05'),
              category: "InterproxaBrushes",
              brand: "Colgate",
              rating: 4.1,
              numericPrice: 150,
              dentalProblems: ["gumDisease", "badBreath"]
            },
            {
              id: 37,
              name: "Curaprox CS 1006 Special Tuft Toothbrush",
              description: "For implants, braces & gum line care with special tuft design.",
              price: "₹575",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-02-06'),
              category: "InterproxaBrushes",
              brand: "Curaprox",
              rating: 4.5,
              numericPrice: 575,
              dentalProblems: ["gumDisease", "sensitivity"]
            },
            {
              id: 38,
              name: "STIM Interdental Angular Brush",
              description: "For narrow gaps, implants & crowns with deep cleaning bristles.",
              price: "₹250",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-02-07'),
              category: "InterproxaBrushes",
              brand: "STIM",
              rating: 4.3,
              numericPrice: 250,
              dentalProblems: ["gumDisease", "toothdecay"]
            },
            {
              id: 39,
              name: "Tepe Interdental Brush, Lt Red X Soft - 0.5mm",
              description: "8 pieces per packet with 0.5mm soft bristles for gentle cleaning.",
              price: "₹2,700",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-02-08'),
              category: "InterproxaBrushes",
              brand: "Tepe",
              rating: 4.6,
              numericPrice: 2700,
              dentalProblems: ["gumDisease", "sensitivity"]
            },
            {
              id: 40,
              name: "Thermoseal Proxa Ws Interdental Brushes",
              description: "Professional interdental brushes for thorough plaque removal.",
              price: "₹331",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-02-09'),
              category: "InterproxaBrushes",
              brand: "Thermoseal",
              rating: 4.2,
              numericPrice: 331,
              dentalProblems: ["gumDisease", "toothdecay"]
            },
            {
              id: 41,
              name: "Thermoseal Proxa NS Brush",
              description: "Narrow space interdental brush for tight areas between teeth.",
              price: "₹335",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-02-10'),
              category: "InterproxaBrushes",
              brand: "Thermoseal",
              rating: 4.2,
              numericPrice: 335,
              dentalProblems: ["gumDisease", "toothdecay"]
            },

            // KIDS TOOTH BRUSHES
            {
              id: 42,
              name: "Colgate Kids Battery Powered Toothbrush, Batman",
              description: "Extra soft bristles with Batman theme for fun brushing experience.",
              price: "₹999",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-02-11'),
              category: "KidsToothBrushes",
              brand: "Colgate",
              rating: 4.5,
              numericPrice: 999,
              dentalProblems: ["toothdecay", "gumDisease"]
            },
            {
              id: 43,
              name: "Colgate Minions Kids Manual Toothbrush",
              description: "Battery-powered toothbrush for kids with fun Minions design.",
              price: "₹640",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-02-12'),
              category: "KidsToothBrushes",
              brand: "Colgate",
              rating: 4.4,
              numericPrice: 640,
              dentalProblems: ["toothdecay", "gumDisease"]
            },
            {
              id: 44,
              name: "Colgate Kids Battery Powered Electric Toothbrush - Barbie",
              description: "Extra soft bristles with Barbie theme for delightful brushing.",
              price: "₹799",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-02-13'),
              category: "KidsToothBrushes",
              brand: "Colgate",
              rating: 4.5,
              numericPrice: 799,
              dentalProblems: ["toothdecay", "gumDisease"]
            },
            {
              id: 45,
              name: "Colgate Kids Barbie Extra Soft Toothbrush",
              description: "Manual toothbrush with Barbie design and extra soft bristles.",
              price: "₹27",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-02-14'),
              category: "KidsToothBrushes",
              brand: "Colgate",
              rating: 4.2,
              numericPrice: 27,
              dentalProblems: ["toothdecay"]
            },
            {
              id: 46,
              name: "The Mouth Company Premium Bamboo Toothbrush for KIDS",
              description: "Flat and low pressure with eco-friendly bamboo construction.",
              price: "₹298",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-02-15'),
              category: "KidsToothBrushes",
              brand: "The Mouth Company",
              rating: 4.3,
              numericPrice: 298,
              dentalProblems: ["toothdecay", "gumDisease"]
            },
            {
              id: 47,
              name: "Caresmith Spark Junior Electric Sonic Toothbrush for Kids",
              description: "Ocean Edition with cute animal designs for fun brushing.",
              price: "₹1,100",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-02-16'),
              category: "KidsToothBrushes",
              brand: "Caresmith",
              rating: 4.6,
              numericPrice: 1100,
              dentalProblems: ["toothdecay", "gumDisease"]
            },
            {
              id: 48,
              name: "Kids Bamboo Toothbrush with Activated Charcoal",
              description: "Soft bristles with activated charcoal, 100% eco-friendly.",
              price: "₹200",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-02-17'),
              category: "KidsToothBrushes",
              brand: "Generic",
              rating: 4.1,
              numericPrice: 200,
              dentalProblems: ["toothdecay", "badBreath"]
            },
            {
              id: 49,
              name: "Chicco Manual Toothbrush For Kids (3Y-8Y)",
              description: "With suction cup, extra soft tapered bristles for ages 3-8.",
              price: "₹119",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-02-18'),
              category: "KidsToothBrushes",
              brand: "Chicco",
              rating: 4.2,
              numericPrice: 119,
              dentalProblems: ["toothdecay", "gumDisease"]
            },
            {
              id: 50,
              name: "Johnson's Baby - Tooth Brush",
              description: "Color may vary, 1 piece pack designed for babies and toddlers.",
              price: "₹33",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-02-19'),
              category: "KidsToothBrushes",
              brand: "Johnson's",
              rating: 4.0,
              numericPrice: 33,
              dentalProblems: ["toothdecay"]
            },
            {
              id: 51,
              name: "Pepsodent Kids Toothbrush - 1pc",
              description: "Basic kids toothbrush with soft bristles for daily use.",
              price: "₹20",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-02-20'),
              category: "KidsToothBrushes",
              brand: "Pepsodent",
              rating: 3.9,
              numericPrice: 20,
              dentalProblems: ["toothdecay"]
            },
            {
              id: 52,
              name: "Oral B Kids Spiderman Rechargeable Rotating Electric Toothbrush",
              description: "2 brushing modes with Spiderman theme for exciting oral care.",
              price: "₹2,199",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-02-21'),
              category: "KidsToothBrushes",
              brand: "Oral-B",
              rating: 4.7,
              numericPrice: 2199,
              dentalProblems: ["toothdecay", "gumDisease"]
            },
            {
              id: 53,
              name: "Oral-B Pro-Health Stages Power Battery Toothbrush For Kid",
              description: "Manual with color pink, designed for kids with gentle care.",
              price: "₹999",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-02-22'),
              category: "KidsToothBrushes",
              brand: "Oral-B",
              rating: 4.5,
              numericPrice: 999,
              dentalProblems: ["toothdecay", "gumDisease"]
            },
            {
              id: 54,
              name: "Oral B Pro-Health Jr. Battery Powered Kid's Toothbrush",
              description: "Automatic toothbrush featuring Disney characters for fun brushing.",
              price: "₹3,599",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-02-23'),
              category: "KidsToothBrushes",
              brand: "Oral-B",
              rating: 4.6,
              numericPrice: 3599,
              dentalProblems: ["toothdecay", "gumDisease"]
            },
            {
              id: 55,
              name: "Oral-B Manual Toothbrush, Stages 1 (4-24 Months)",
              description: "Baby Soft S1, 1 toothbrush designed for infants 4-24 months.",
              price: "₹6,431",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-02-24'),
              category: "KidsToothBrushes",
              brand: "Oral-B",
              rating: 4.8,
              numericPrice: 6431,
              dentalProblems: ["toothdecay"]
            },
            {
              id: 56,
              name: "DentoShine Kids Fun Pack Strawberry - 80 gm",
              description: "Fun strawberry-flavored toothbrush pack for kids.",
              price: "₹109",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-02-25'),
              category: "KidsToothBrushes",
              brand: "DentoShine",
              rating: 4.1,
              numericPrice: 109,
              dentalProblems: ["toothdecay", "badBreath"]
            },
            {
              id: 57,
              name: "Colgate Kids Batman Toothbrush pack of 3",
              description: "Extra soft bristles with Batman design, pack of 3 toothbrushes.",
              price: "₹199",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-02-26'),
              category: "KidsToothBrushes",
              brand: "Colgate",
              rating: 4.3,
              numericPrice: 199,
              dentalProblems: ["toothdecay", "gumDisease"]
            },
            {
              id: 58,
              name: "Oral-B Kids Toothbrush - Extra Soft (Pack of 3)",
              description: "Pack of 3 extra soft toothbrushes designed for children.",
              price: "₹60",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-02-27'),
              category: "KidsToothBrushes",
              brand: "Oral-B",
              rating: 4.2,
              numericPrice: 60,
              dentalProblems: ["toothdecay", "gumDisease"]
            },
            {
              id: 59,
              name: "Colgate Kids Ultra Soft For 0 To 2 Years",
              description: "Ultra soft bristles specifically designed for infants 0-2 years.",
              price: "₹30",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-02-28'),
              category: "KidsToothBrushes",
              brand: "Colgate",
              rating: 4.1,
              numericPrice: 30,
              dentalProblems: ["toothdecay"]
            },
            {
              id: 60,
              name: "Perfora Kids Electric Toothbrush",
              description: "Zi and Zou models for ages 3-8 with fun electric brushing action.",
              price: "₹990",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-03-01'),
              category: "KidsToothBrushes",
              brand: "Perfora",
              rating: 4.4,
              numericPrice: 990,
              dentalProblems: ["toothdecay", "gumDisease"]
            },

            // MOUTHWASHES
            {
              id: 61,
              name: "Listerine Original Mouthwash 500ml",
              description: "Removes 99.9% of germs for healthier smile and comprehensive germ protection.",
              price: "₹355",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-01-16'),
              category: "MouthWash",
              brand: "Listerine",
              rating: 4.6,
              numericPrice: 355,
              dentalProblems: ["badBreath", "gumDisease"]
            },
            {
              id: 62,
              name: "Sensodyne Complete Protection+ Mouthwash 100ml",
              description: "Designed for sensitive teeth, offers comprehensive protection and freshness.",
              price: "₹130",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-01-17'),
              category: "MouthWash",
              brand: "Sensodyne",
              rating: 4.4,
              numericPrice: 130,
              dentalProblems: ["sensitivity", "gumDisease", "badBreath"]
            },
            {
              id: 63,
              name: "LISTERINE® TOTAL CARE Kids Fluoride Mouthwash",
              description: "Berry Splash flavor with 6 benefits in one, gentle on young mouths.",
              price: "₹375",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-01-18'),
              category: "MouthWash",
              brand: "Listerine",
              rating: 4.5,
              numericPrice: 375,
              dentalProblems: ["toothdecay", "badBreath"]
            },

            // TONGUE CLEANERS
            {
              id: 64,
              name: "Perfora Copper Tongue Cleaner (Handcrafted)",
              description: "Finely crafted tool for enhanced oral hygiene with antibacterial properties.",
              price: "₹250",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-19'),
              category: "TongueCleaner",
              brand: "Perfora",
              rating: 4.7,
              numericPrice: 250,
              dentalProblems: ["badBreath"]
            },
            {
              id: 65,
              name: "Bamboo Fresh Tongue Cleaner (BambooIndia)",
              description: "Eco-friendly tongue cleaner crafted from sustainable bamboo.",
              price: "₹35",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-20'),
              category: "TongueCleaner",
              brand: "BambooIndia",
              rating: 4.2,
              numericPrice: 35,
              dentalProblems: ["badBreath"]
            },

            // FLOSSERS
            {
              id: 66,
              name: "Oral-B Glide Complete Floss Picks (75 count)",
              description: "Dental floss picks with Scope Outlast for thorough cleaning between teeth.",
              price: "₹659",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-01-21'),
              category: "Flossers",
              brand: "Oral-B",
              rating: 4.5,
              numericPrice: 659,
              dentalProblems: ["gumDisease", "toothdecay"]
            },
            {
              id: 67,
              name: "STIM Flosser with Toothpick",
              description: "Removes plaque and food between teeth with convenient toothpick on back.",
              price: "₹99",
              image: require("../assets/Kids Dentistry.png"),
              dateAdded: new Date('2024-01-22'),
              category: "Flossers",
              brand: "STIM",
              rating: 4.3,
              numericPrice: 99,
              dentalProblems: ["gumDisease", "toothdecay"]
            },

            // TOOTHPASTE - KIDS TOOTHPASTE
            {
              id: 68,
              name: "Pigeon Strawberry Toothpaste (Oral Care,45g, Pack of 2)",
              description: "Children's strawberry flavored toothpaste for oral care.",
              price: "₹350",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-23'),
              category: "KidsToothpaste",
              brand: "Pigeon",
              rating: 4.2,
              numericPrice: 350,
              dentalProblems: ["toothdecay", "sensitivity"]
            },
            {
              id: 69,
              name: "Chicco Toothpaste Strawberry + Brush Green 6-36M, Enamel Protection",
              description: "Strawberry toothpaste with enamel protection for babies and toddlers.",
              price: "₹179",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-23'),
              category: "KidsToothpaste",
              brand: "Chicco",
              rating: 4.1,
              numericPrice: 179,
              dentalProblems: ["toothdecay", "sensitivity"]
            },
            {
              id: 70,
              name: "Mother Sparsh kids natural toothpaste",
              description: "Natural toothpaste specially formulated for children's oral care.",
              price: "₹199",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-23'),
              category: "KidsToothpaste",
              brand: "Mother Sparsh",
              rating: 4.3,
              numericPrice: 199,
              dentalProblems: ["toothdecay", "sensitivity"]
            },
            {
              id: 71,
              name: "Mamaearth Fruit Punch Toothpaste - 50g | Infused with Sorbitol, Silica & Glyceri",
              description: "Fruit punch flavored toothpaste with natural ingredients for kids.",
              price: "₹149",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-23'),
              category: "KidsToothpaste",
              brand: "Mamaearth",
              rating: 4.0,
              numericPrice: 149,
              dentalProblems: ["toothdecay", "sensitivity"]
            },
            {
              id: 72,
              name: "Bentodent 100% Natural Kids super saver pack bubble gum 100g & mango 100g Toothp",
              description: "Natural kids toothpaste in bubble gum and mango flavors.",
              price: "₹320",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-23'),
              category: "KidsToothpaste",
              brand: "Bentodent",
              rating: 4.2,
              numericPrice: 320,
              dentalProblems: ["toothdecay", "sensitivity"]
            },
            {
              id: 73,
              name: "Dente91 Kids Toothpaste, Protects against dental caries & Hypersensitivity, Fluo",
              description: "Fluoride toothpaste for kids, protecting against caries and hypersensitivity.",
              price: "₹149",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-23'),
              category: "KidsToothpaste",
              brand: "Dente91",
              rating: 4.1,
              numericPrice: 149,
              dentalProblems: ["toothdecay", "sensitivity"]
            },
            {
              id: 74,
              name: "Kids Toothpaste – Bubblegum Blast",
              description: "Fun bubblegum flavored toothpaste designed for children.",
              price: "₹199",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-23'),
              category: "KidsToothpaste",
              brand: "Generic",
              rating: 4.0,
              numericPrice: 199,
              dentalProblems: ["toothdecay", "sensitivity"]
            },
            {
              id: 75,
              name: "Amway Glister kids toothpaste",
              description: "Premium kids toothpaste from Amway Glister range.",
              price: "₹217",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-23'),
              category: "KidsToothpaste",
              brand: "Amway",
              rating: 4.2,
              numericPrice: 217,
              dentalProblems: ["toothdecay", "sensitivity"]
            },
            {
              id: 76,
              name: "Himalaya, Botanique, Kids Toothpaste, Bubble Gum, 4 oz (113 g)",
              description: "Natural bubble gum flavored toothpaste from Himalaya Botanique.",
              price: "₹601",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-23'),
              category: "KidsToothpaste",
              brand: "Himalaya",
              rating: 4.3,
              numericPrice: 601,
              dentalProblems: ["toothdecay", "sensitivity"]
            },
            {
              id: 77,
              name: "Colgate Toothpaste For Kids (6-9 Years),Natural Strawberry Mint Flavour Tooth Pa",
              description: "Age-appropriate toothpaste with natural strawberry mint flavor.",
              price: "₹299",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-23'),
              category: "KidsToothpaste",
              brand: "Colgate",
              rating: 4.4,
              numericPrice: 299,
              dentalProblems: ["toothdecay", "sensitivity"]
            },
            {
              id: 78,
              name: "Pepsodent Kids Toothpaste, Strawberry Flavour, Cavity & Enamel Protection, 45G",
              description: "Strawberry flavored kids toothpaste with cavity and enamel protection.",
              price: "₹285",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-23'),
              category: "KidsToothpaste",
              brand: "Pepsodent",
              rating: 4.2,
              numericPrice: 285,
              dentalProblems: ["toothdecay", "sensitivity"]
            },

            // TOOTHPASTE - AYURVEDIC/HERBAL TOOTHPASTE
            {
              id: 79,
              name: "Himalaya Herbals Complete Care Plaque Removal Toothpaste, 80g",
              description: "Herbal toothpaste for complete oral care and plaque removal.",
              price: "₹59",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-24'),
              category: "AyurvedicToothpaste",
              brand: "Himalaya",
              rating: 4.3,
              numericPrice: 59,
              dentalProblems: ["gumDisease", "toothdecay", "bleedingGums"]
            },
            {
              id: 80,
              name: "Vicco Vajradanti Ayurvedic Paste with 18 essential Herbs and Barks (Pack of 2)",
              description: "Traditional Ayurvedic toothpaste with 18 essential herbs and barks.",
              price: "₹240",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-24'),
              category: "AyurvedicToothpaste",
              brand: "Vicco",
              rating: 4.5,
              numericPrice: 240,
              dentalProblems: ["gumDisease", "toothdecay", "bleedingGums"]
            },
            {
              id: 81,
              name: "Vicco Vajradanti Saunf Flavor Toothpaste 160 g",
              description: "Fennel flavored Ayurvedic toothpaste with traditional herbs.",
              price: "₹144",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-24'),
              category: "AyurvedicToothpaste",
              brand: "Vicco",
              rating: 4.4,
              numericPrice: 144,
              dentalProblems: ["gumDisease", "toothdecay", "bleedingGums"]
            },
            {
              id: 82,
              name: "Vicco Vajradanti Toothpaste 100gm Ayurvedic for Gum and Teeth (Pack of 3)",
              description: "Ayurvedic toothpaste specifically formulated for gum and teeth care.",
              price: "₹240",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-24'),
              category: "AyurvedicToothpaste",
              brand: "Vicco",
              rating: 4.3,
              numericPrice: 240,
              dentalProblems: ["gumDisease", "toothdecay", "bleedingGums"]
            },
            {
              id: 83,
              name: "Patanjali Dant Kanti Natural Toothpaste 800G (200G X 4), Super Saver Value Pack",
              description: "Natural Ayurvedic toothpaste with herbal ingredients, value pack.",
              price: "₹389",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-24'),
              category: "AyurvedicToothpaste",
              brand: "Patanjali",
              rating: 4.2,
              numericPrice: 389,
              dentalProblems: ["gumDisease", "toothdecay", "bleedingGums"]
            },
            {
              id: 84,
              name: "Dabur Red Toothpaste - 800g (200g x 4)",
              description: "Traditional Ayurvedic red toothpaste with natural ingredients.",
              price: "₹530",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-24'),
              category: "AyurvedicToothpaste",
              brand: "Dabur",
              rating: 4.4,
              numericPrice: 530,
              dentalProblems: ["gumDisease", "toothdecay", "bleedingGums"]
            },
            {
              id: 85,
              name: "Dabur Babool Toothpaste",
              description: "Herbal toothpaste with Babool extract for strong teeth and gums.",
              price: "₹130",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-24'),
              category: "AyurvedicToothpaste",
              brand: "Dabur",
              rating: 4.3,
              numericPrice: 130,
              dentalProblems: ["gumDisease", "toothdecay", "bleedingGums"]
            },

            // TOOTHPASTE - SENSITIVE TOOTHPASTE
            {
              id: 86,
              name: "Colgate Sensitive Plus Relief Toothpaste, 70G, With Pro-Argin Technology, Clinic",
              description: "Advanced sensitivity relief toothpaste with Pro-Argin technology.",
              price: "₹180",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-25'),
              category: "SensitiveToothpaste",
              brand: "Colgate",
              rating: 4.5,
              numericPrice: 180,
              dentalProblems: ["sensitivity", "toothache"]
            },
            {
              id: 87,
              name: "Sensodyne ProNamel Toothpaste, Fluoride, Gentle Whitening, Alpine Breeze, 4 oz.",
              description: "Gentle whitening toothpaste for sensitive teeth with enamel protection.",
              price: "₹629",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-25'),
              category: "SensitiveToothpaste",
              brand: "Sensodyne",
              rating: 4.6,
              numericPrice: 629,
              dentalProblems: ["sensitivity", "teethWhitening"]
            },
            {
              id: 88,
              name: "Sensodyne Fresh Mint Sensitivity Relief Toothpaste Combo Pack For Daily Protecti",
              description: "Daily protection toothpaste combo for sensitive teeth with fresh mint.",
              price: "₹184",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-25'),
              category: "SensitiveToothpaste",
              brand: "Sensodyne",
              rating: 4.4,
              numericPrice: 184,
              dentalProblems: ["sensitivity", "toothache"]
            },
            {
              id: 89,
              name: "Sensodyne Toothpaste Repair & Protect Combo pack, tooth paste for deep repair of",
              description: "Deep repair toothpaste combo for sensitive teeth protection.",
              price: "₹270",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-25'),
              category: "SensitiveToothpaste",
              brand: "Sensodyne",
              rating: 4.5,
              numericPrice: 270,
              dentalProblems: ["sensitivity", "toothache"]
            },
            {
              id: 90,
              name: "Sensodyne Rapid Relief Toothpaste 80gm",
              description: "Fast-acting sensitivity relief toothpaste for immediate comfort.",
              price: "₹210",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-25'),
              category: "SensitiveToothpaste",
              brand: "Sensodyne",
              rating: 4.3,
              numericPrice: 210,
              dentalProblems: ["sensitivity", "toothache"]
            },
            {
              id: 91,
              name: "Sensodyne Natural White Whitening Toothpaste, Charcoal Toothpaste for Whitening",
              description: "Natural whitening toothpaste with charcoal for sensitive teeth.",
              price: "₹5500",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-25'),
              category: "SensitiveToothpaste",
              brand: "Sensodyne",
              rating: 4.4,
              numericPrice: 5500,
              dentalProblems: ["sensitivity", "teethWhitening"]
            },

            // TOOTHPASTE - NON-FLUORIDATED TOOTHPASTE
            {
              id: 92,
              name: "Patanjali Dant Kanti Natural Toothpaste 800G (200G X 4), Super Saver Value Pack (Non-Fluoride)",
              description: "Natural fluoride-free Ayurvedic toothpaste with herbal ingredients.",
              price: "₹389",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-26'),
              category: "NonFluoridatedToothpaste",
              brand: "Patanjali",
              rating: 4.2,
              numericPrice: 389,
              dentalProblems: ["gumDisease", "toothdecay"]
            },
            {
              id: 93,
              name: "Dabur Babool Toothpaste (Non-Fluoride)",
              description: "Fluoride-free herbal toothpaste with Babool extract for natural oral care.",
              price: "₹130",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-26'),
              category: "NonFluoridatedToothpaste",
              brand: "Dabur",
              rating: 4.3,
              numericPrice: 130,
              dentalProblems: ["gumDisease", "toothdecay"]
            },

            // TOOTHPASTE - WHITENING TOOTHPASTE
            {
              id: 94,
              name: "Pepsodent Whitening Toothpaste, 150 g",
              description: "Effective whitening toothpaste for brighter, whiter teeth.",
              price: "₹130",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-27'),
              category: "WhiteningToothpaste",
              brand: "Pepsodent",
              rating: 4.1,
              numericPrice: 130,
              dentalProblems: ["teethWhitening", "toothdecay"]
            },
            {
              id: 95,
              name: "Unwind - Teeth Whitening Toothpaste",
              description: "Premium whitening toothpaste for effective stain removal.",
              price: "₹299",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-27'),
              category: "WhiteningToothpaste",
              brand: "Unwind",
              rating: 4.3,
              numericPrice: 299,
              dentalProblems: ["teethWhitening", "toothdecay"]
            },
            {
              id: 96,
              name: "Close Up Toothpaste | Long lasting 18 Hours Of Fresh Breath & White Teeth - 600g",
              description: "Long-lasting freshness with whitening action for 18 hours.",
              price: "₹472",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-27'),
              category: "WhiteningToothpaste",
              brand: "Close Up",
              rating: 4.2,
              numericPrice: 472,
              dentalProblems: ["teethWhitening", "badBreath"]
            },
            {
              id: 97,
              name: "Colgate Visible White, Toothpaste",
              description: "Visible whitening results with advanced whitening formula.",
              price: "₹248",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-27'),
              category: "WhiteningToothpaste",
              brand: "Colgate",
              rating: 4.4,
              numericPrice: 248,
              dentalProblems: ["teethWhitening", "toothdecay"]
            },

            // TOOTHPASTE - GEL TOOTHPASTE
            {
              id: 98,
              name: "Colgate MaxFresh Toothpaste, Red Gel Tooth Paste with Menthol for Super Fresh Br",
              description: "Red gel toothpaste with menthol for super fresh breath.",
              price: "₹275",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-28'),
              category: "GelToothpaste",
              brand: "Colgate",
              rating: 4.3,
              numericPrice: 275,
              dentalProblems: ["badBreath", "toothdecay"]
            },
            {
              id: 99,
              name: "Close Up Toothpaste Gel | Long lasting 18 Hours Of Fresh Breath & White Teeth - 600g",
              description: "Gel formula for long-lasting freshness and whitening action.",
              price: "₹472",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-01-28'),
              category: "GelToothpaste",
              brand: "Close Up",
              rating: 4.2,
              numericPrice: 472,
              dentalProblems: ["badBreath", "teethWhitening"]
            },

            // WHITENING MOUTHWASH
            {
              id: 100,
              name: "Perfora Teeth Whitening Mouthwash",
              description: "Advanced whitening formula for brighter teeth and fresh breath.",
              price: "₹199",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-03-01'),
              category: "WhiteningMouthwash",
              brand: "Perfora",
              rating: 4.4,
              numericPrice: 199,
              dentalProblems: ["teethWhitening", "badBreath"]
            },
            {
              id: 101,
              name: "Oral-B Complete Lasting Freshness Arctic Mint Mouthwash, 250ml",
              description: "Long-lasting freshness with arctic mint flavor for complete oral care.",
              price: "₹1,929",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-03-01'),
              category: "WhiteningMouthwash",
              brand: "Oral-B",
              rating: 4.5,
              numericPrice: 1929,
              dentalProblems: ["teethWhitening", "badBreath", "gumDisease"]
            },
            {
              id: 102,
              name: "HIMALAYA Active Fresh Mint Mouthwash-No Alcohol-Whiter Teeth,12hr Protection",
              description: "Alcohol-free mouthwash with natural ingredients for 12-hour protection and whiter teeth.",
              price: "₹140",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-03-01'),
              category: "WhiteningMouthwash",
              brand: "Himalaya",
              rating: 4.3,
              numericPrice: 140,
              dentalProblems: ["teethWhitening", "badBreath", "gumDisease"]
            },
            {
              id: 103,
              name: "Listerine Cool Mint Antiseptic Mouthwash",
              description: "Classic antiseptic mouthwash with cool mint flavor for complete germ protection.",
              price: "₹544",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-03-01'),
              category: "WhiteningMouthwash",
              brand: "Listerine",
              rating: 4.6,
              numericPrice: 544,
              dentalProblems: ["teethWhitening", "badBreath", "gumDisease"]
            },
            {
              id: 104,
              name: "Colgate Plax Mouthwash - Peppermint, 500ml Bottle",
              description: "Peppermint flavored mouthwash for comprehensive oral care and fresh breath.",
              price: "₹210",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-03-01'),
              category: "WhiteningMouthwash",
              brand: "Colgate",
              rating: 4.2,
              numericPrice: 210,
              dentalProblems: ["teethWhitening", "badBreath", "gumDisease"]
            },

            // SENSITIVE MOUTHWASH
            {
              id: 105,
              name: "Salt. Oral Care Hydra Sensitivity Mouthwash",
              description: "Specially formulated for sensitive teeth with hydrating properties.",
              price: "₹550",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-03-02'),
              category: "SensitiveMouthwash",
              brand: "Salt",
              rating: 4.3,
              numericPrice: 550,
              dentalProblems: ["sensitivity", "gumDisease", "badBreath"]
            },
            {
              id: 106,
              name: "Perfora Teeth Whitening Mouthwash (Sensitive)",
              description: "Gentle whitening formula designed specifically for sensitive teeth.",
              price: "₹199",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-03-02'),
              category: "SensitiveMouthwash",
              brand: "Perfora",
              rating: 4.4,
              numericPrice: 199,
              dentalProblems: ["sensitivity", "teethWhitening", "badBreath"]
            },
            {
              id: 107,
              name: "DENTE91 Cool Mint Mouthwash| Pack Of 1 | Sugar-Free, Alcohol-Free, No Burning Sensation",
              description: "Gentle mouthwash without burning sensation, perfect for sensitive mouths.",
              price: "₹199",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-03-02'),
              category: "SensitiveMouthwash",
              brand: "DENTE91",
              rating: 4.2,
              numericPrice: 199,
              dentalProblems: ["sensitivity", "badBreath", "gumDisease"]
            },
            {
              id: 108,
              name: "Colgate Plax Mouthwash - Peppermint, 500ml Bottle (Sensitive Formula)",
              description: "Gentle peppermint mouthwash formulated for sensitive teeth and gums.",
              price: "₹210",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-03-02'),
              category: "SensitiveMouthwash",
              brand: "Colgate",
              rating: 4.1,
              numericPrice: 210,
              dentalProblems: ["sensitivity", "gumDisease", "badBreath"]
            },

            // ANTISEPTIC/THERAPEUTIC MOUTHWASH
            {
              id: 109,
              name: "Hexidine Antiseptic-Antiplaque Mouthwash, 80 ml",
              description: "Professional antiseptic mouthwash for plaque control and gum health.",
              price: "₹78",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-03-03'),
              category: "AntisepticMouthwash",
              brand: "Hexidine",
              rating: 4.5,
              numericPrice: 78,
              dentalProblems: ["gumDisease", "bleedingGums", "badBreath"]
            },
            {
              id: 110,
              name: "BIOAYURVEDA Anti-Bacterial Germ Defense Mouth Wash | Ayurvedic Oral Rinse with Natural Ingredients",
              description: "Ayurvedic antibacterial mouthwash with natural ingredients for complete germ defense.",
              price: "₹230",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-03-03'),
              category: "AntisepticMouthwash",
              brand: "BIOAYURVEDA",
              rating: 4.3,
              numericPrice: 230,
              dentalProblems: ["gumDisease", "badBreath", "bleedingGums"]
            },
            {
              id: 111,
              name: "Oral-B Complete Lasting Freshness Arctic Mint Mouthwash, 250ml (Therapeutic)",
              description: "Therapeutic formulation with lasting freshness for comprehensive oral health.",
              price: "₹1,929",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-03-03'),
              category: "AntisepticMouthwash",
              brand: "Oral-B",
              rating: 4.6,
              numericPrice: 1929,
              dentalProblems: ["gumDisease", "badBreath", "bleedingGums"]
            },
            {
              id: 112,
              name: "DENTE91 Cool Mint Mouthwash (Antiseptic Formula)",
              description: "Antiseptic mouthwash with cool mint, sugar-free and alcohol-free for gentle care.",
              price: "₹199",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-03-03'),
              category: "AntisepticMouthwash",
              brand: "DENTE91",
              rating: 4.2,
              numericPrice: 199,
              dentalProblems: ["gumDisease", "badBreath", "bleedingGums"]
            },
            {
              id: 113,
              name: "HIMALAYA Active Fresh Mint Mouthwash (Therapeutic)",
              description: "Therapeutic herbal mouthwash with 12-hour protection and natural ingredients.",
              price: "₹140",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-03-03'),
              category: "AntisepticMouthwash",
              brand: "Himalaya",
              rating: 4.4,
              numericPrice: 140,
              dentalProblems: ["gumDisease", "badBreath", "bleedingGums"]
            },
            {
              id: 114,
              name: "Listerine Cool Mint Antiseptic Mouthwash (Professional)",
              description: "Professional-grade antiseptic mouthwash for maximum germ protection.",
              price: "₹544",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-03-03'),
              category: "AntisepticMouthwash",
              brand: "Listerine",
              rating: 4.7,
              numericPrice: 544,
              dentalProblems: ["gumDisease", "badBreath", "bleedingGums"]
            },

            // KIDS MOUTHWASH
            {
              id: 115,
              name: "Tiny Smilez Kids Anti Cavity Mouthwash (Sparkling Strawberry)",
              description: "Fun strawberry-flavored mouthwash specially designed for kids' cavity protection.",
              price: "₹259",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-03-04'),
              category: "KidsMouthwash",
              brand: "Tiny Smilez",
              rating: 4.3,
              numericPrice: 259,
              dentalProblems: ["toothdecay", "badBreath"]
            },
            {
              id: 116,
              name: "SmiloShine Unicorn Kids Mouthwash-Alcohol Free-For Fresh Breath & Protection Against Cavities",
              description: "Magical unicorn-themed alcohol-free mouthwash for kids with cavity protection.",
              price: "₹175",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-03-04'),
              category: "KidsMouthwash",
              brand: "SmiloShine",
              rating: 4.4,
              numericPrice: 175,
              dentalProblems: ["toothdecay", "badBreath"]
            },
            {
              id: 117,
              name: "LISTERINE® TOTAL CARE Kids Fluoride Mouthwash (Berry Splash)",
              description: "Berry splash flavored fluoride mouthwash with 6 benefits in one for kids.",
              price: "₹375",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-03-04'),
              category: "KidsMouthwash",
              brand: "Listerine",
              rating: 4.5,
              numericPrice: 375,
              dentalProblems: ["toothdecay", "badBreath", "gumDisease"]
            },
            {
              id: 118,
              name: "Kidodent Mouth Wash Bubble Fruit",
              description: "Exciting bubble fruit flavored mouthwash designed specifically for children.",
              price: "₹130",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-03-04'),
              category: "KidsMouthwash",
              brand: "Kidodent",
              rating: 4.2,
              numericPrice: 130,
              dentalProblems: ["toothdecay", "badBreath"]
            },

            // COSMETIC MOUTHWASH
            {
              id: 119,
              name: "Crest Pro Health Mouth Wash with Refreshing Clean Mint - 1 ltr",
              description: "Professional cosmetic mouthwash with refreshing clean mint for optimal oral health.",
              price: "₹6,999",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-03-05'),
              category: "CosmeticMouthwash",
              brand: "Crest",
              rating: 4.8,
              numericPrice: 6999,
              dentalProblems: ["teethWhitening", "badBreath", "gumDisease"]
            },
            {
              id: 120,
              name: "Habbits Teeth Whitening Natural Mouthwash (Charcoal & Spearmint)",
              description: "Natural charcoal and spearmint mouthwash for effective teeth whitening and fresh breath.",
              price: "₹348",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-03-05'),
              category: "CosmeticMouthwash",
              brand: "Habbits",
              rating: 4.4,
              numericPrice: 348,
              dentalProblems: ["teethWhitening", "badBreath"]
            },
            {
              id: 121,
              name: "Oral-B Complete Lasting Freshness Arctic Mint Mouthwash (Cosmetic), 250ml",
              description: "Cosmetic-grade mouthwash with arctic mint for lasting freshness and oral beauty.",
              price: "₹1,929",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-03-05'),
              category: "CosmeticMouthwash",
              brand: "Oral-B",
              rating: 4.5,
              numericPrice: 1929,
              dentalProblems: ["teethWhitening", "badBreath", "gumDisease"]
            },
            {
              id: 122,
              name: "Listerine Cool Mint Antiseptic Mouthwash (Cosmetic Formula)",
              description: "Cosmetic formulation of classic Listerine for enhanced oral aesthetics.",
              price: "₹544",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-03-05'),
              category: "CosmeticMouthwash",
              brand: "Listerine",
              rating: 4.6,
              numericPrice: 544,
              dentalProblems: ["teethWhitening", "badBreath", "gumDisease"]
            },
            {
              id: 123,
              name: "Colgate Plax Mouthwash - Peppermint (Cosmetic), 500ml Bottle",
              description: "Cosmetic peppermint mouthwash for enhanced oral care and aesthetic benefits.",
              price: "₹210",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-03-05'),
              category: "CosmeticMouthwash",
              brand: "Colgate",
              rating: 4.3,
              numericPrice: 210,
              dentalProblems: ["teethWhitening", "badBreath", "gumDisease"]
            },

            // ALCOHOL-FREE MOUTHWASH
            {
              id: 124,
              name: "Spicta Peach Mint Alcohol-Free Organic Mouthwash",
              description: "Organic alcohol-free mouthwash with refreshing peach mint flavor.",
              price: "₹269",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-03-06'),
              category: "AlcoholFreeMouthwash",
              brand: "Spicta",
              rating: 4.3,
              numericPrice: 269,
              dentalProblems: ["sensitivity", "badBreath", "gumDisease"]
            },
            {
              id: 125,
              name: "Nature Sure Aloe Vera Mouthwash with Neem and Clove",
              description: "Natural alcohol-free mouthwash with aloe vera, neem, and clove for gentle oral care.",
              price: "₹220",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-03-06'),
              category: "AlcoholFreeMouthwash",
              brand: "Nature Sure",
              rating: 4.4,
              numericPrice: 220,
              dentalProblems: ["sensitivity", "gumDisease", "badBreath"]
            },
            {
              id: 126,
              name: "The Mouth Company Cool Mint Alcohol-Free Mouthwash",
              description: "Cool mint alcohol-free mouthwash for sensitive mouths and gentle daily care.",
              price: "₹249",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-03-06'),
              category: "AlcoholFreeMouthwash",
              brand: "The Mouth Company",
              rating: 4.5,
              numericPrice: 249,
              dentalProblems: ["sensitivity", "badBreath", "gumDisease"]
            },
            {
              id: 127,
              name: "Auromere Ayurvedic Mouthwash - Vegan, Fluoride Free, Alcohol Free, Natural, Non-GMO",
              description: "Ayurvedic alcohol-free mouthwash that's vegan, fluoride-free, and made with natural ingredients.",
              price: "₹704",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-03-06'),
              category: "AlcoholFreeMouthwash",
              brand: "Auromere",
              rating: 4.6,
              numericPrice: 704,
              dentalProblems: ["sensitivity", "gumDisease", "badBreath"]
            },
            {
              id: 128,
              name: "Perfora Teeth Whitening Mouthwash (Alcohol-Free)",
              description: "Alcohol-free whitening mouthwash gentle enough for daily use without irritation.",
              price: "₹199",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-03-06'),
              category: "AlcoholFreeMouthwash",
              brand: "Perfora",
              rating: 4.3,
              numericPrice: 199,
              dentalProblems: ["sensitivity", "teethWhitening", "badBreath"]
            },
            {
              id: 129,
              name: "Listerine Original Mouthwash Liquid, Removes 99.9% Germs, 500ml (Alcohol-Free Formula)",
              description: "Alcohol-free version of classic Listerine that removes 99.9% of germs without the burn.",
              price: "₹355",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-03-06'),
              category: "AlcoholFreeMouthwash",
              brand: "Listerine",
              rating: 4.5,
              numericPrice: 355,
              dentalProblems: ["sensitivity", "gumDisease", "badBreath"]
            },
            {
              id: 130,
              name: "Colgate Plax Mouthwash - Peppermint (Alcohol-Free), 500ml Bottle",
              description: "Alcohol-free peppermint mouthwash for comprehensive oral care without irritation.",
              price: "₹210",
              image: require("../assets/Mouth Wash.png"),
              dateAdded: new Date('2024-03-06'),
              category: "AlcoholFreeMouthwash",
              brand: "Colgate",
              rating: 4.2,
              numericPrice: 210,
              dentalProblems: ["sensitivity", "gumDisease", "badBreath"]
            },

            // METAL TONGUE CLEANERS
            {
              id: 131,
              name: "Zandu Copper Tongue Cleaner (Pack of 2)",
              description: "Traditional copper tongue cleaners with antimicrobial properties, pack of 2 for family use.",
              price: "₹199",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-07'),
              category: "MetalTongueCleaner",
              brand: "Zandu",
              rating: 4.4,
              numericPrice: 199,
              dentalProblems: ["badBreath"]
            },
            {
              id: 132,
              name: "Vega EasyGlide Tongue Cleaner (Metal with Handle)",
              description: "Ergonomic metal tongue cleaner with comfortable handle for easy gliding action.",
              price: "₹179",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-07'),
              category: "MetalTongueCleaner",
              brand: "Vega",
              rating: 4.3,
              numericPrice: 179,
              dentalProblems: ["badBreath"]
            },
            {
              id: 133,
              name: "Matra Stainless Steel Tongue Cleaner Scraper",
              description: "High-quality stainless steel tongue scraper for effective cleaning and oral hygiene.",
              price: "₹199",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-07'),
              category: "MetalTongueCleaner",
              brand: "Matra",
              rating: 4.5,
              numericPrice: 199,
              dentalProblems: ["badBreath"]
            },
            {
              id: 134,
              name: "Greenfeels Surgical Grade Stainless Steel Tongue Cleaner",
              description: "Medical-grade stainless steel tongue cleaner for professional oral care at home.",
              price: "₹225",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-07'),
              category: "MetalTongueCleaner",
              brand: "Greenfeels",
              rating: 4.6,
              numericPrice: 225,
              dentalProblems: ["badBreath"]
            },
            {
              id: 135,
              name: "Perfora Original Steel Tongue Cleaner (Pack of 2)",
              description: "Premium steel tongue cleaners with sleek design, pack of 2 for convenience.",
              price: "₹198",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-07'),
              category: "MetalTongueCleaner",
              brand: "Perfora",
              rating: 4.7,
              numericPrice: 198,
              dentalProblems: ["badBreath"]
            },
            {
              id: 136,
              name: "Alisha Copper Tongue Cleaner",
              description: "Affordable copper tongue cleaner with traditional Ayurvedic benefits for daily use.",
              price: "₹65",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-07'),
              category: "MetalTongueCleaner",
              brand: "Alisha",
              rating: 4.2,
              numericPrice: 65,
              dentalProblems: ["badBreath"]
            },
            {
              id: 137,
              name: "Matra Copper Tongue Cleaner Scraper for Optimal Oral Hygiene & Digestive Health",
              description: "Premium copper tongue scraper designed for optimal oral hygiene and digestive wellness.",
              price: "₹341",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-07'),
              category: "MetalTongueCleaner",
              brand: "Matra",
              rating: 4.5,
              numericPrice: 341,
              dentalProblems: ["badBreath"]
            },
            {
              id: 138,
              name: "Copper & Stainless Steel Tongue Cleaners",
              description: "Combination pack featuring both copper and stainless steel tongue cleaners for variety.",
              price: "₹429",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-07'),
              category: "MetalTongueCleaner",
              brand: "Generic",
              rating: 4.4,
              numericPrice: 429,
              dentalProblems: ["badBreath"]
            },

            // PLASTIC TONGUE CLEANERS
            {
              id: 139,
              name: "Apollo Pharmacy Tongue Cleaner with 3 Cleaning Edges",
              description: "Innovative plastic tongue cleaner with 3 cleaning edges for thorough cleaning action.",
              price: "₹40",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-08'),
              category: "PlasticTongueCleaner",
              brand: "Apollo Pharmacy",
              rating: 4.1,
              numericPrice: 40,
              dentalProblems: ["badBreath"]
            },
            {
              id: 140,
              name: "Trisa Tongue Cleaner (Kids and Regular)",
              description: "Versatile plastic tongue cleaner suitable for both kids and adults with gentle design.",
              price: "₹150",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-08'),
              category: "PlasticTongueCleaner",
              brand: "Trisa",
              rating: 4.3,
              numericPrice: 150,
              dentalProblems: ["badBreath"]
            },
            {
              id: 141,
              name: "KCCB Plastic Tongue Cleaner",
              description: "Durable plastic tongue cleaner designed for effective plaque removal and fresh breath.",
              price: "₹299",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-08'),
              category: "PlasticTongueCleaner",
              brand: "KCCB",
              rating: 4.2,
              numericPrice: 299,
              dentalProblems: ["badBreath"]
            },
            {
              id: 142,
              name: "BigPlayer Plastic Tongue Cleaner",
              description: "Ergonomic plastic tongue cleaner with comfortable grip for easy daily use.",
              price: "₹138",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-08'),
              category: "PlasticTongueCleaner",
              brand: "BigPlayer",
              rating: 4.0,
              numericPrice: 138,
              dentalProblems: ["badBreath"]
            },
            {
              id: 143,
              name: "MeeMee Plastic Tongue Cleaner Single Pack",
              description: "Gentle plastic tongue cleaner from MeeMee, perfect for sensitive tongues.",
              price: "₹179",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-08'),
              category: "PlasticTongueCleaner",
              brand: "MeeMee",
              rating: 4.2,
              numericPrice: 179,
              dentalProblems: ["badBreath"]
            },
            {
              id: 144,
              name: "Plastic Tongue Cleaner for Fresh People of India for Adult & Children, Tongue Scraper",
              description: "Versatile plastic tongue scraper designed for both adults and children in India.",
              price: "₹499",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-08'),
              category: "PlasticTongueCleaner",
              brand: "Fresh People",
              rating: 4.1,
              numericPrice: 499,
              dentalProblems: ["badBreath"]
            },

            // SILICONE TONGUE CLEANERS
            {
              id: 145,
              name: "Babyhug Silicone Candy Shape Baby Tongue Cleaner- Blue",
              description: "Fun candy-shaped silicone tongue cleaner designed specifically for babies in blue color.",
              price: "₹39",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-09'),
              category: "SiliconeTongueCleaner",
              brand: "Babyhug",
              rating: 4.3,
              numericPrice: 39,
              dentalProblems: ["badBreath"]
            },
            {
              id: 146,
              name: "1st Step Silicone Tongue Cleaner",
              description: "Premium silicone tongue cleaner with soft texture for gentle yet effective cleaning.",
              price: "₹206",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-09'),
              category: "SiliconeTongueCleaner",
              brand: "1st Step",
              rating: 4.4,
              numericPrice: 206,
              dentalProblems: ["badBreath"]
            },
            {
              id: 147,
              name: "Tongue Cleaner Adults, 2Pcs Silicone Tongue Scraper Soft Tongue Cleaner Helps Fight Bad Breath",
              description: "Pack of 2 soft silicone tongue scrapers specifically designed for adults to fight bad breath.",
              price: "₹269",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-09'),
              category: "SiliconeTongueCleaner",
              brand: "Generic",
              rating: 4.2,
              numericPrice: 269,
              dentalProblems: ["badBreath"]
            },
            {
              id: 148,
              name: "VSR Silicone Tongue Cleaner",
              description: "High-quality silicone tongue cleaner with flexible design for comfortable use.",
              price: "₹399",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-09'),
              category: "SiliconeTongueCleaner",
              brand: "VSR",
              rating: 4.3,
              numericPrice: 399,
              dentalProblems: ["badBreath"]
            },
            {
              id: 149,
              name: "Buddsbuddy Premium Silicone Tongue Cleaner 1pc (Blue)",
              description: "Premium blue silicone tongue cleaner from Buddsbuddy for gentle oral care.",
              price: "₹199",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-09'),
              category: "SiliconeTongueCleaner",
              brand: "Buddsbuddy",
              rating: 4.4,
              numericPrice: 199,
              dentalProblems: ["badBreath"]
            },

            // TONGUE CLEANING BRUSHES
            {
              id: 150,
              name: "TUNG Peak Essentials The Original Brush",
              description: "Professional-grade tongue cleaning brush from TUNG Peak Essentials for deep cleaning.",
              price: "₹2,000",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-10'),
              category: "TongueCleaningBrushes",
              brand: "TUNG",
              rating: 4.8,
              numericPrice: 2000,
              dentalProblems: ["badBreath"]
            },
            {
              id: 151,
              name: "Bamboo Tongue Brush",
              description: "Eco-friendly bamboo tongue brush with soft bristles for natural oral care.",
              price: "₹95",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-10'),
              category: "TongueCleaningBrushes",
              brand: "Generic",
              rating: 4.2,
              numericPrice: 95,
              dentalProblems: ["badBreath"]
            },

            // ECO-FRIENDLY/BIODEGRADABLE TONGUE CLEANERS
            {
              id: 152,
              name: "Avino Eco Friendly Wooden Tongue Scraper",
              description: "Sustainable wooden tongue scraper made from eco-friendly materials for natural oral care.",
              price: "₹169.75",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-11'),
              category: "EcoFriendlyTongueCleaner",
              brand: "Avino",
              rating: 4.3,
              numericPrice: 169.75,
              dentalProblems: ["badBreath"]
            },
            {
              id: 153,
              name: "Prakratam Bamboo Tongue Cleaner",
              description: "Natural bamboo tongue cleaner with antimicrobial properties for eco-conscious users.",
              price: "₹80",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-11'),
              category: "EcoFriendlyTongueCleaner",
              brand: "Prakratam",
              rating: 4.1,
              numericPrice: 80,
              dentalProblems: ["badBreath"]
            },
            {
              id: 154,
              name: "Bamboo Fresh Tongue Cleaner (BambooIndia)",
              description: "Eco-friendly tongue cleaner crafted from sustainable bamboo by BambooIndia.",
              price: "₹35",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-11'),
              category: "EcoFriendlyTongueCleaner",
              brand: "BambooIndia",
              rating: 4.2,
              numericPrice: 35,
              dentalProblems: ["badBreath"]
            },

            // Power Flosser Category (13 products)
            {
              id: 155,
              name: "Perfora Smart & Power Flosser",
              description: "Replaceable nozzles available for Smart & Power models, effective water flossing",
              price: "₹390",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-12'),
              category: "PowerFlosser",
              brand: "Perfora",
              rating: 4.2,
              numericPrice: 390,
              dentalProblems: ["plaque", "gingivitis", "gumDisease"]
            },
            {
              id: 156,
              name: "Perfora Super Dental Flosser",
              description: "Super effective dental flosser for thorough interdental cleaning",
              price: "₹1,590",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-12'),
              category: "PowerFlosser",
              brand: "Perfora",
              rating: 4.4,
              numericPrice: 1590,
              dentalProblems: ["plaque", "gingivitis", "tartar"]
            },
            {
              id: 157,
              name: "Perfora Power Dental Flosser",
              description: "High-power dental flosser for deep cleaning between teeth",
              price: "₹2,190",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-12'),
              category: "PowerFlosser",
              brand: "Perfora",
              rating: 4.5,
              numericPrice: 2190,
              dentalProblems: ["plaque", "gingivitis", "gumDisease"]
            },
            {
              id: 158,
              name: "Perfora Smart Dental Flosser",
              description: "Smart dental flosser with advanced cleaning technology",
              price: "₹3,390",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-12'),
              category: "PowerFlosser",
              brand: "Perfora",
              rating: 4.6,
              numericPrice: 3390,
              dentalProblems: ["plaque", "gingivitis", "tartar"]
            },
            {
              id: 159,
              name: "Oral-Advanced Cordless Irrigator",
              description: "Cordless design with effective cleaning, portable and convenient",
              price: "₹7,130",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-12'),
              category: "PowerFlosser",
              brand: "Oral-Advanced",
              rating: 4.7,
              numericPrice: 7130,
              dentalProblems: ["plaque", "gingivitis", "gumDisease", "tartar"]
            },
            {
              id: 160,
              name: "Agaro Oral Irrigator",
              description: "Basic to mid-range water flosser with reliable performance",
              price: "₹1,490",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-12'),
              category: "PowerFlosser",
              brand: "Agaro",
              rating: 4.1,
              numericPrice: 1490,
              dentalProblems: ["plaque", "gingivitis"]
            },
            {
              id: 161,
              name: "Electric Power Water Flosser",
              description: "Multiple pressure settings for customized cleaning experience",
              price: "₹1,990",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-12'),
              category: "PowerFlosser",
              brand: "PowerClean",
              rating: 4.3,
              numericPrice: 1990,
              dentalProblems: ["plaque", "gingivitis", "gumDisease"]
            },
            {
              id: 162,
              name: "Airfloss Pro Water Flosser",
              description: "Known for sonic technology and ease of use, professional grade",
              price: "₹1,890",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-12'),
              category: "PowerFlosser",
              brand: "AirFloss",
              rating: 4.4,
              numericPrice: 1890,
              dentalProblems: ["plaque", "gingivitis", "tartar"]
            },
            {
              id: 163,
              name: "Waterpik Ultra (WP-100)",
              description: "10 pressure settings, 6 tips, 650ml reservoir, ADA approved",
              price: "₹7,980",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-12'),
              category: "PowerFlosser",
              brand: "Waterpik",
              rating: 4.8,
              numericPrice: 7980,
              dentalProblems: ["plaque", "gingivitis", "gumDisease", "tartar"]
            },
            {
              id: 164,
              name: "Waterpik Aquarius",
              description: "10 power levels and 7 tips, suitable for families and hard-to-reach areas",
              price: "₹4,340",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-12'),
              category: "PowerFlosser",
              brand: "Waterpik",
              rating: 4.7,
              numericPrice: 4340,
              dentalProblems: ["plaque", "gingivitis", "gumDisease", "tartar"]
            },
            {
              id: 165,
              name: "OC150 Smart Water Flosser",
              description: "Compact, travel-friendly, 150ml tank, 360° rotary nozzle",
              price: "₹1,790",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-12'),
              category: "PowerFlosser",
              brand: "OralCare",
              rating: 4.2,
              numericPrice: 1790,
              dentalProblems: ["plaque", "gingivitis"]
            },
            {
              id: 166,
              name: "OC200 Smart PLUS",
              description: "Professional-grade, 8 adjustable pressure settings, 200ml tank",
              price: "₹2,360",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-12'),
              category: "PowerFlosser",
              brand: "OralCare",
              rating: 4.5,
              numericPrice: 2360,
              dentalProblems: ["plaque", "gingivitis", "gumDisease"]
            },
            {
              id: 167,
              name: "OC300 Smart Pro",
              description: "Premium model with micro-bubble technology, 6 pressure settings",
              price: "₹2,780",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-12'),
              category: "PowerFlosser",
              brand: "OralCare",
              rating: 4.6,
              numericPrice: 2780,
              dentalProblems: ["plaque", "gingivitis", "gumDisease", "tartar"]
            },
            {
              id: 168,
              name: "Professional Cordless Oral Flosser",
              description: "3 modes (Normal, Soft, Pulse), rotatable tip for comprehensive cleaning",
              price: "₹3,999",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-12'),
              category: "PowerFlosser",
              brand: "ProDental",
              rating: 4.5,
              numericPrice: 3999,
              dentalProblems: ["plaque", "gingivitis", "gumDisease", "tartar"]
            },

            // Oil Pulling Rinses - Category 1 (6 products)
            {
              id: 169,
              name: "EGA Ayurvedic Sesame Oil Pulling Mouthwash",
              description: "Traditional Ayurvedic sesame oil pulling mouthwash for natural oral detox",
              price: "₹395",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-13'),
              category: "OilPullingRinses",
              brand: "EGA",
              rating: 4.3,
              numericPrice: 395,
              dentalProblems: ["gumDisease", "badBreath", "plaque"]
            },
            {
              id: 170,
              name: "Gurunanda Natural Oil Pulling Oral Rinse (Coconut + Mint)",
              description: "Natural coconut and mint oil pulling rinse for fresh breath and healthy gums",
              price: "₹1,998",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-13'),
              category: "OilPullingRinses",
              brand: "Gurunanda",
              rating: 4.5,
              numericPrice: 1998,
              dentalProblems: ["gumDisease", "badBreath", "plaque"]
            },
            {
              id: 171,
              name: "Greenfeels Natural Oil Pulling Mouthwash",
              description: "Premium natural oil pulling mouthwash for comprehensive oral care",
              price: "₹2,155",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-13'),
              category: "OilPullingRinses",
              brand: "Greenfeels",
              rating: 4.4,
              numericPrice: 2155,
              dentalProblems: ["gumDisease", "badBreath", "plaque"]
            },
            {
              id: 172,
              name: "Natuur Oil Pulling Blend with Coconut Oil",
              description: "Specially formulated coconut oil blend for effective oil pulling therapy",
              price: "₹338",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-13'),
              category: "OilPullingRinses",
              brand: "Natuur",
              rating: 4.2,
              numericPrice: 338,
              dentalProblems: ["gumDisease", "badBreath", "plaque"]
            },
            {
              id: 173,
              name: "Jiva Ayurveda Oil Pulling (200ml)",
              description: "Traditional Ayurvedic oil pulling solution in convenient 200ml bottle",
              price: "₹275",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-13'),
              category: "OilPullingRinses",
              brand: "Jiva Ayurveda",
              rating: 4.1,
              numericPrice: 275,
              dentalProblems: ["gumDisease", "badBreath", "plaque"]
            },
            {
              id: 174,
              name: "Perfora Vedic Rinse Coco Mint Oil Pulling",
              description: "Modern Vedic coconut mint oil pulling rinse for daily oral wellness",
              price: "₹299",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-13'),
              category: "OilPullingRinses",
              brand: "Perfora",
              rating: 4.3,
              numericPrice: 299,
              dentalProblems: ["gumDisease", "badBreath", "plaque"]
            },

            // Herbal/Ayurvedic Gum Paints - Category 2 (3 products)
            {
              id: 175,
              name: "Medfe Herbal Gum Paint",
              description: "Natural herbal gum paint for treating gum inflammation and bleeding",
              price: "₹65",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-13'),
              category: "HerbalGumPaints",
              brand: "Medfe",
              rating: 4.0,
              numericPrice: 65,
              dentalProblems: ["gumDisease", "gingivitis", "bleeding"]
            },
            {
              id: 176,
              name: "TASNODENT GUM PAINT (HERBAL GUM PAINT)",
              description: "Herbal gum paint from Psychocare Health for comprehensive gum care",
              price: "₹82",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-13'),
              category: "HerbalGumPaints",
              brand: "Psychocare Health",
              rating: 4.1,
              numericPrice: 82,
              dentalProblems: ["gumDisease", "gingivitis", "bleeding"]
            },
            {
              id: 177,
              name: "HiOra-GA Gel, Himalaya",
              description: "Himalaya's herbal gum and tooth gel for natural oral care",
              price: "₹90",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-13'),
              category: "HerbalGumPaints",
              brand: "Himalaya",
              rating: 4.4,
              numericPrice: 90,
              dentalProblems: ["gumDisease", "gingivitis", "bleeding"]
            },

            // Allopathic/Pharmaceutical Gum Paints - Category 3 (8 products)
            {
              id: 178,
              name: "Gum Paint 15ml",
              description: "Pharmaceutical grade gum paint for effective gum treatment",
              price: "₹98",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-13'),
              category: "PharmaceuticalGumPaints",
              brand: "Generic",
              rating: 4.0,
              numericPrice: 98,
              dentalProblems: ["gumDisease", "gingivitis", "infection"]
            },
            {
              id: 179,
              name: "Truworth Trufresh Dental Gum Paint",
              description: "Liquid form dental gum paint with 98% purity, store in cool conditions",
              price: "₹100",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-13'),
              category: "PharmaceuticalGumPaints",
              brand: "Truworth",
              rating: 4.2,
              numericPrice: 100,
              dentalProblems: ["gumDisease", "gingivitis", "infection"]
            },
            {
              id: 180,
              name: "Ortis Tooth-S Gum Paint",
              description: "Topical astringent solution with antiseptic agents for gum care",
              price: "₹89",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-13'),
              category: "PharmaceuticalGumPaints",
              brand: "Ortis",
              rating: 4.1,
              numericPrice: 89,
              dentalProblems: ["gumDisease", "gingivitis", "infection"]
            },
            {
              id: 181,
              name: "Dentalar Dental Gum Paint",
              description: "Professional dental gum paint for treating gum problems",
              price: "₹30",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-13'),
              category: "PharmaceuticalGumPaints",
              brand: "Dentalar",
              rating: 3.9,
              numericPrice: 30,
              dentalProblems: ["gumDisease", "gingivitis", "infection"]
            },
            {
              id: 182,
              name: "DENT GLOW GUM PAINT",
              description: "Effective gum paint for maintaining healthy gums and teeth",
              price: "₹60",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-13'),
              category: "PharmaceuticalGumPaints",
              brand: "Dent Glow",
              rating: 4.0,
              numericPrice: 60,
              dentalProblems: ["gumDisease", "gingivitis", "infection"]
            },
            {
              id: 183,
              name: "Tooth Guard Gum Paint",
              description: "Premium gum paint with MRP 109/- per piece for comprehensive gum protection",
              price: "₹109",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-13'),
              category: "PharmaceuticalGumPaints",
              brand: "Tooth Guard",
              rating: 4.2,
              numericPrice: 109,
              dentalProblems: ["gumDisease", "gingivitis", "infection"]
            },
            {
              id: 184,
              name: "Dentosens Gum Paint Pain Relieving Gel 15 Ml",
              description: "Pain relieving gum paint gel for immediate relief from gum discomfort",
              price: "₹70",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-13'),
              category: "PharmaceuticalGumPaints",
              brand: "Dentosens",
              rating: 4.3,
              numericPrice: 70,
              dentalProblems: ["gumDisease", "gingivitis", "pain"]
            },
            {
              id: 185,
              name: "Sensoform Paint Liquid 20ml",
              description: "Liquid gum paint in 20ml bottle for precise application and treatment",
              price: "₹118",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-13'),
              category: "PharmaceuticalGumPaints",
              brand: "Sensoform",
              rating: 4.1,
              numericPrice: 118,
              dentalProblems: ["gumDisease", "gingivitis", "infection"]
            },

            // Antifungal/Medicated Gum Paints - Category 4 (1 product)
            {
              id: 186,
              name: "Candid Mouth Paint",
              description: "Antifungal medicated mouth paint for treating oral fungal infections",
              price: "₹180",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-13'),
              category: "AntifungalGumPaints",
              brand: "Candid",
              rating: 4.4,
              numericPrice: 180,
              dentalProblems: ["fungalInfection", "oralThrush", "infection"]
            },

            // Astringent Gels/Lotions - Category 5 (3 products)
            {
              id: 187,
              name: "Tannic Acid Gum Paint 15 Ml",
              description: "Astringent tannic acid gum paint for tightening and strengthening gums",
              price: "₹81",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-13'),
              category: "AstringentGels",
              brand: "Generic",
              rating: 4.0,
              numericPrice: 81,
              dentalProblems: ["gumDisease", "gingivitis", "bleeding"]
            },
            {
              id: 188,
              name: "DENT GLOW GUM PAINT (Astringent)",
              description: "Astringent formulation of Dent Glow gum paint for enhanced gum care",
              price: "₹60",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-13'),
              category: "AstringentGels",
              brand: "Dent Glow",
              rating: 4.0,
              numericPrice: 60,
              dentalProblems: ["gumDisease", "gingivitis", "bleeding"]
            },
            {
              id: 189,
              name: "Sensoform Paint Liquid 20ml (Astringent)",
              description: "Astringent liquid paint for comprehensive gum tightening and care",
              price: "₹118",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-13'),
              category: "AstringentGels",
              brand: "Sensoform",
              rating: 4.1,
              numericPrice: 118,
              dentalProblems: ["gumDisease", "gingivitis", "bleeding"]
            },

            // Nicotex Gums - Category 1 (6 products)
            {
              id: 190,
              name: "2baconil 2mg Nicotine Chewing Gum Sugar-Free Ice Mint",
              description: "Sugar-free nicotine chewing gum with ice mint flavor for smoking cessation",
              price: "₹362.60",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-14'),
              category: "NicotexGums",
              brand: "2baconil",
              rating: 4.2,
              numericPrice: 362.60,
              dentalProblems: ["smokingCessation", "nicotineWithdrawal"]
            },
            {
              id: 191,
              name: "Nicosure Nicotine Gum 4mg Pack of 9-90 Gums",
              description: "Tobacco control aid nicotine gum 4mg strength, pack of 90 gums",
              price: "₹854.46",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-14'),
              category: "NicotexGums",
              brand: "Nicosure",
              rating: 4.3,
              numericPrice: 854.46,
              dentalProblems: ["smokingCessation", "nicotineWithdrawal"]
            },
            {
              id: 192,
              name: "Mint Nicosure Nicotine Polacrilex Lozenges 2mg",
              description: "Mint flavored nicotine polacrilex lozenges 2mg for gradual nicotine reduction",
              price: "₹380",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-14'),
              category: "NicotexGums",
              brand: "Nicosure",
              rating: 4.1,
              numericPrice: 380,
              dentalProblems: ["smokingCessation", "nicotineWithdrawal"]
            },
            {
              id: 193,
              name: "Nicogum 2 Nicotine Gum Fresh Mint",
              description: "Fresh mint flavored nicotine gum 2mg for effective smoking cessation",
              price: "₹107.80",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-14'),
              category: "NicotexGums",
              brand: "Nicogum",
              rating: 4.0,
              numericPrice: 107.80,
              dentalProblems: ["smokingCessation", "nicotineWithdrawal"]
            },
            {
              id: 194,
              name: "Nicotex Gums 4mg Mint Plus Strip - 12 Gums",
              description: "Nicotex mint plus flavored gums 4mg strength, strip of 12 gums",
              price: "₹144.53",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-14'),
              category: "NicotexGums",
              brand: "Nicotex",
              rating: 4.4,
              numericPrice: 144.53,
              dentalProblems: ["smokingCessation", "nicotineWithdrawal"]
            },
            {
              id: 195,
              name: "Cipla Nicotex Nicotine Sugar Free Mint Plus Gums 2mg",
              description: "Sugar-free mint plus gums 2mg, helps to quit smoking effectively",
              price: "₹388.80",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-14'),
              category: "NicotexGums",
              brand: "Cipla",
              rating: 4.5,
              numericPrice: 388.80,
              dentalProblems: ["smokingCessation", "nicotineWithdrawal"]
            },

            // Nicotine Lozenges - Category 2 (2 products)
            {
              id: 196,
              name: "Nicogum 1mg Mint Plus Flavour Sugar Free Mini Lozenge 10'S",
              description: "Sugar-free mini lozenges with mint plus flavor, 1mg nicotine strength",
              price: "₹80",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-14'),
              category: "NicotineLozenges",
              brand: "Nicogum",
              rating: 4.0,
              numericPrice: 80,
              dentalProblems: ["smokingCessation", "nicotineWithdrawal"]
            },
            {
              id: 197,
              name: "Cipla Nicotex Mints Nicotine 2mg Lozenges (30 Pcs)",
              description: "Nicotine 2mg lozenges, pack of 30 pieces, helps quit smoking",
              price: "₹277.34",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-14'),
              category: "NicotineLozenges",
              brand: "Cipla",
              rating: 4.3,
              numericPrice: 277.34,
              dentalProblems: ["smokingCessation", "nicotineWithdrawal"]
            },

            // Nicotine Patches - Category 3 (2 products)
            {
              id: 198,
              name: "Cipla Nicotex Nicotine Transdermal Patch 14mg (7 Patches)",
              description: "Nicotine transdermal patch 14mg strength, helps to quit smoking, 7 patches",
              price: "₹594.15",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-14'),
              category: "NicotinePatches",
              brand: "Cipla",
              rating: 4.4,
              numericPrice: 594.15,
              dentalProblems: ["smokingCessation", "nicotineWithdrawal"]
            },
            {
              id: 199,
              name: "Cipla Nicotex Nicotine Transdermal Patch (7 Patches)",
              description: "Nicotine transdermal patch for effective smoking cessation, pack of 7 patches",
              price: "₹569.05",
              image: require("../assets/Ayurvedic Dental.png"),
              dateAdded: new Date('2024-03-14'),
              category: "NicotinePatches",
              brand: "Cipla",
              rating: 4.2,
              numericPrice: 569.05,
              dentalProblems: ["smokingCessation", "nicotineWithdrawal"]
            }
          ];
          setProducts(fallbackProducts);
        }
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Dental problems with translation keys
  const getDentalProblems = () => [
    { key: "sensitivity", label: t("shop.problems.sensitivity") },
    { key: "gumDisease", label: t("shop.problems.gumDisease") },
    { key: "badBreath", label: t("shop.problems.badBreath") },
    { key: "toothdecay", label: t("shop.problems.toothdecay") },
    { key: "bleedingGums", label: t("shop.problems.bleedingGums") },
    { key: "drySockets", label: t("shop.problems.drySockets") },
    { key: "teethWhitening", label: t("shop.problems.teethWhitening") },
    { key: "jawPain", label: t("shop.problems.jawPain") },
    { key: "crookedTeeth", label: t("shop.problems.crookedTeeth") },
    { key: "missingTeeth", label: t("shop.problems.missingTeeth") },
    { key: "oralCancer", label: t("shop.problems.oralCancer") },
    { key: "toothache", label: t("shop.problems.toothache") }
  ];

  const dentalProblems = getDentalProblems();

  // Enhanced products for display (products already have dentalProblems from CSV or fallback)
  const enhancedProducts = products.map(product => ({
    ...product,
    // Ensure numeric price exists
    numericPrice: product.numericPrice || parseInt(product.price?.replace(/[₹$€£,]/g, '') || '0'),
    // Ensure category exists
    category: product.category || "General",
    // Ensure rating exists
    rating: product.rating || 4.0
  }));

  // Helper function to get products by category
  const getProductsByCategory = (category) => {
    return enhancedProducts.filter(product => product.category === category);
  };

  // Helper function to get product name by ID
  const getProductNameById = (id) => {
    const product = enhancedProducts.find(product => product.id.toString() === id.toString());
    return product ? product.name : id;
  };

  // Filter products based on selected dental problems and categories
  const filteredProducts = enhancedProducts.filter(product => {
    // Filter by dental problems
    const problemMatch = selectedProblems.length === 0 || 
      selectedProblems.some(problem => product.dentalProblems.includes(problem));
    
    // Filter by categories - support both category names and product IDs
    const categoryMatch = selectedCategories.length === 0 || 
      selectedCategories.includes(product.category) ||
      selectedCategories.includes(product.id.toString());
    
    return problemMatch && categoryMatch;
  });

  const handleProblemChange = (problem) => {
    setSelectedProblems(prev => 
      prev.includes(problem) 
        ? prev.filter(p => p !== problem)
        : [...prev, problem]
    );
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const clearAllFilters = () => {
    setSelectedProblems([]);
    setSelectedCategories([]);
  };

  const toggleGroup = (group) => {
    setOpenGroups((prev) => ({ ...prev, [group]: !prev[group] }));
  };

  if (loading) return <FullPageLoader />;

  return (
    <>
      <div className="min-h-screen bg-[#f7f7f7] w-full flex flex-col items-center py-8 px-2">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8">
        {/* Filter Sidebar */}
        <aside className="bg-white rounded-2xl shadow-lg p-6 w-full md:w-72 mb-6 md:mb-0">
          <h3 className="text-xl font-bold text-[#2C73D2] mb-4">{t('shop.filter.clear')}</h3>
          
          {/* Dental Problems Filter */}
          <div className="mb-4">
            <div className="flex items-center justify-between font-semibold text-[#2C73D2] mb-2 cursor-pointer" onClick={() => toggleGroup('DentalProblems')}>
              <span>{t('shop.filter.problem')}</span>
              <span className="text-lg">{openGroups.DentalProblems ? '-' : '+'}</span>
            </div>
            {openGroups.DentalProblems && (
              <div className="flex flex-col gap-2 ml-2 max-h-48 overflow-y-auto">
                {dentalProblems.map(problem => (
                  <label key={problem.key} className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#2C73D2]">
                    <input 
                      type="checkbox" 
                      checked={selectedProblems.includes(problem.key)}
                      onChange={() => handleProblemChange(problem.key)}
                      className="accent-[#2C73D2]"
                    />
                    <span>{problem.label}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Product Categories */}
          <div className="mb-4">
            <div className="flex items-center justify-between font-semibold text-[#2C73D2] mb-2 cursor-pointer" onClick={() => toggleGroup('ProductCategories')}>
              <span>Filter by Product Category</span>
              <span className="text-lg">{openGroups.ProductCategories ? '-' : '+'}</span>
            </div>
            {openGroups.ProductCategories && (
              <div className="ml-2">
                {/* Tooth Brush Main Category */}
                <div className="mb-4">
                  <div className="flex items-center justify-between font-semibold text-[#2C73D2] mb-2 cursor-pointer" onClick={() => toggleGroup('ToothBrush')}>
                    <span>Tooth Brush</span>
                    <span className="text-lg">{openGroups.ToothBrush ? '-' : '+'}</span>
                  </div>
                  {openGroups.ToothBrush && (
                    <div className="ml-4">
                {/* Soft Bristles Toothbrushes */}
                <div className="mb-3">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#2C73D2]">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes('SoftBristlesToothbrushes')}
                      onChange={() => handleCategoryChange('SoftBristlesToothbrushes')}
                      className="accent-[#2C73D2]"
                    />
                    <span>Soft Bristles Toothbrushes ({getProductsByCategory('SoftBristlesToothbrushes').length})</span>
                  </label>
                </div>

                {/* Interproxa Brushes */}
                <div className="mb-3">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#2C73D2]">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes('InterproxaBrushes')}
                      onChange={() => handleCategoryChange('InterproxaBrushes')}
                      className="accent-[#2C73D2]"
                    />
                    <span>Interproxa Brushes ({getProductsByCategory('InterproxaBrushes').length})</span>
                  </label>
                </div>

                {/* Kids Tooth Brushes */}
                <div className="mb-3">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#2C73D2]">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes('KidsToothBrushes')}
                      onChange={() => handleCategoryChange('KidsToothBrushes')}
                      className="accent-[#2C73D2]"
                    />
                    <span>Kids Tooth Brushes ({getProductsByCategory('KidsToothBrushes').length})</span>
                  </label>
                </div>
                    </div>
                  )}
                </div>

                {/* Toothpaste */}
                <div className="mb-4">
                  <div className="flex items-center justify-between font-semibold text-[#2C73D2] mb-2 cursor-pointer" onClick={() => toggleGroup('Toothpaste')}>
                    <span>Toothpaste</span>
                    <span className="text-lg">{openGroups.Toothpaste ? '-' : '+'}</span>
                  </div>
                  {openGroups.Toothpaste && (
                    <div className="ml-4">
                {/* Kids Toothpaste */}
                <div className="mb-3">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#2C73D2]">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes('KidsToothpaste')}
                      onChange={() => handleCategoryChange('KidsToothpaste')}
                      className="accent-[#2C73D2]"
                    />
                    <span>Kids Toothpaste ({getProductsByCategory('KidsToothpaste').length})</span>
                  </label>
                </div>

                {/* Ayurvedic/Herbal Toothpaste */}
                <div className="mb-3">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#2C73D2]">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes('AyurvedicToothpaste')}
                      onChange={() => handleCategoryChange('AyurvedicToothpaste')}
                      className="accent-[#2C73D2]"
                    />
                    <span>Ayurvedic/Herbal Toothpaste ({getProductsByCategory('AyurvedicToothpaste').length})</span>
                  </label>
                </div>

                {/* Sensitive Toothpaste */}
                <div className="mb-3">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#2C73D2]">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes('SensitiveToothpaste')}
                      onChange={() => handleCategoryChange('SensitiveToothpaste')}
                      className="accent-[#2C73D2]"
                    />
                    <span>Sensitive Toothpaste ({getProductsByCategory('SensitiveToothpaste').length})</span>
                  </label>
                </div>

                {/* Non-Fluoridated Toothpaste */}
                <div className="mb-3">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#2C73D2]">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes('NonFluoridatedToothpaste')}
                      onChange={() => handleCategoryChange('NonFluoridatedToothpaste')}
                      className="accent-[#2C73D2]"
                    />
                    <span>Non-Fluoridated Toothpaste ({getProductsByCategory('NonFluoridatedToothpaste').length})</span>
                  </label>
                </div>

                {/* Whitening Toothpaste */}
                <div className="mb-3">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#2C73D2]">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes('WhiteningToothpaste')}
                      onChange={() => handleCategoryChange('WhiteningToothpaste')}
                      className="accent-[#2C73D2]"
                    />
                    <span>Whitening Toothpaste ({getProductsByCategory('WhiteningToothpaste').length})</span>
                  </label>
                </div>

                {/* Gel Toothpaste */}
                <div className="mb-3">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#2C73D2]">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes('GelToothpaste')}
                      onChange={() => handleCategoryChange('GelToothpaste')}
                      className="accent-[#2C73D2]"
                    />
                    <span>Gel Toothpaste ({getProductsByCategory('GelToothpaste').length})</span>
                  </label>
                </div>
              </div>
            )}
          </div>

                {/* MouthWash */}
                <div className="mb-4">
                  <div className="flex items-center justify-between font-semibold text-[#2C73D2] mb-2 cursor-pointer" onClick={() => toggleGroup('MouthWash')}>
                    <span>MouthWash</span>
                    <span className="text-lg">{openGroups.MouthWash ? '-' : '+'}</span>
                  </div>
                  {openGroups.MouthWash && (
                    <div className="ml-4">
                {/* Whitening Mouthwash */}
                <div className="mb-3">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#2C73D2]">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes('WhiteningMouthwash')}
                      onChange={() => handleCategoryChange('WhiteningMouthwash')}
                      className="accent-[#2C73D2]"
                    />
                    <span>Whitening Mouthwash ({getProductsByCategory('WhiteningMouthwash').length})</span>
                  </label>
                </div>

                {/* Sensitive Mouthwash */}
                <div className="mb-3">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#2C73D2]">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes('SensitiveMouthwash')}
                      onChange={() => handleCategoryChange('SensitiveMouthwash')}
                      className="accent-[#2C73D2]"
                    />
                    <span>Sensitive Mouthwash ({getProductsByCategory('SensitiveMouthwash').length})</span>
                  </label>
                </div>

                {/* Antiseptic Mouthwash */}
                <div className="mb-3">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#2C73D2]">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes('AntisepticMouthwash')}
                      onChange={() => handleCategoryChange('AntisepticMouthwash')}
                      className="accent-[#2C73D2]"
                    />
                    <span>Antiseptic Mouthwash ({getProductsByCategory('AntisepticMouthwash').length})</span>
                  </label>
                </div>

                {/* Kids Mouthwash */}
                <div className="mb-3">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#2C73D2]">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes('KidsMouthwash')}
                      onChange={() => handleCategoryChange('KidsMouthwash')}
                      className="accent-[#2C73D2]"
                    />
                    <span>Kids Mouthwash ({getProductsByCategory('KidsMouthwash').length})</span>
                  </label>
                </div>

                {/* Cosmetic Mouthwash */}
                <div className="mb-3">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#2C73D2]">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes('CosmeticMouthwash')}
                      onChange={() => handleCategoryChange('CosmeticMouthwash')}
                      className="accent-[#2C73D2]"
                    />
                    <span>Cosmetic Mouthwash ({getProductsByCategory('CosmeticMouthwash').length})</span>
                  </label>
                </div>

                {/* Alcohol Free Mouthwash */}
                <div className="mb-3">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#2C73D2]">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes('AlcoholFreeMouthwash')}
                      onChange={() => handleCategoryChange('AlcoholFreeMouthwash')}
                      className="accent-[#2C73D2]"
                    />
                    <span>Alcohol Free Mouthwash ({getProductsByCategory('AlcoholFreeMouthwash').length})</span>
                  </label>
                </div>
              </div>
            )}
          </div>

                {/* Tongue Cleaner */}
                <div className="mb-4">
                  <div className="flex items-center justify-between font-semibold text-[#2C73D2] mb-2 cursor-pointer" onClick={() => toggleGroup('TongueCleaner')}>
                    <span>Tongue Cleaner</span>
                    <span className="text-lg">{openGroups.TongueCleaner ? '-' : '+'}</span>
                  </div>
                  {openGroups.TongueCleaner && (
                    <div className="ml-4">
                {/* Metal Tongue Cleaner */}
                <div className="mb-3">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#2C73D2]">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes('MetalTongueCleaner')}
                      onChange={() => handleCategoryChange('MetalTongueCleaner')}
                      className="accent-[#2C73D2]"
                    />
                    <span>Metal Tongue Cleaner ({getProductsByCategory('MetalTongueCleaner').length})</span>
                  </label>
                </div>

                {/* Plastic Tongue Cleaner */}
                <div className="mb-3">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#2C73D2]">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes('PlasticTongueCleaner')}
                      onChange={() => handleCategoryChange('PlasticTongueCleaner')}
                      className="accent-[#2C73D2]"
                    />
                    <span>Plastic Tongue Cleaner ({getProductsByCategory('PlasticTongueCleaner').length})</span>
                  </label>
                </div>

                {/* Silicone Tongue Cleaner */}
                <div className="mb-3">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#2C73D2]">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes('SiliconeTongueCleaner')}
                      onChange={() => handleCategoryChange('SiliconeTongueCleaner')}
                      className="accent-[#2C73D2]"
                    />
                    <span>Silicone Tongue Cleaner ({getProductsByCategory('SiliconeTongueCleaner').length})</span>
                  </label>
                </div>

                {/* Tongue Cleaning Brushes */}
                <div className="mb-3">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#2C73D2]">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes('TongueCleaningBrushes')}
                      onChange={() => handleCategoryChange('TongueCleaningBrushes')}
                      className="accent-[#2C73D2]"
                    />
                    <span>Tongue Cleaning Brushes ({getProductsByCategory('TongueCleaningBrushes').length})</span>
                  </label>
                </div>

                {/* Eco-Friendly Tongue Cleaner */}
                <div className="mb-3">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#2C73D2]">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes('EcoFriendlyTongueCleaner')}
                      onChange={() => handleCategoryChange('EcoFriendlyTongueCleaner')}
                      className="accent-[#2C73D2]"
                    />
                    <span>Eco-Friendly Tongue Cleaner ({getProductsByCategory('EcoFriendlyTongueCleaner').length})</span>
                  </label>
                </div>
              </div>
            )}
          </div>

                {/* Flossers */}
                <div className="mb-4">
                  <div className="flex items-center justify-between font-semibold text-[#2C73D2] mb-2 cursor-pointer" onClick={() => toggleGroup('Flossers')}>
                    <span>Flossers</span>
                    <span className="text-lg">{openGroups.Flossers ? '-' : '+'}</span>
                  </div>
                  {openGroups.Flossers && (
                    <div className="ml-4">
                {/* Power Flosser */}
                <div className="mb-3">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#2C73D2]">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes('PowerFlosser')}
                      onChange={() => handleCategoryChange('PowerFlosser')}
                      className="accent-[#2C73D2]"
                    />
                    <span>Power Flosser ({getProductsByCategory('PowerFlosser').length})</span>
                  </label>
                </div>
              </div>
            )}
          </div>

                {/* Gum Paints */}
                <div className="mb-4">
                  <div className="flex items-center justify-between font-semibold text-[#2C73D2] mb-2 cursor-pointer" onClick={() => toggleGroup('GumPaints')}>
                    <span>Gum Paints</span>
                    <span className="text-lg">{openGroups.GumPaints ? '-' : '+'}</span>
                  </div>
                  {openGroups.GumPaints && (
                    <div className="ml-4">
                {/* Oil Pulling Rinses */}
                <div className="mb-3">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#2C73D2]">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes('OilPullingRinses')}
                      onChange={() => handleCategoryChange('OilPullingRinses')}
                      className="accent-[#2C73D2]"
                    />
                    <span>Oil Pulling Rinses ({getProductsByCategory('OilPullingRinses').length})</span>
                  </label>
                </div>

                {/* Herbal Gum Paints */}
                <div className="mb-3">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#2C73D2]">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes('HerbalGumPaints')}
                      onChange={() => handleCategoryChange('HerbalGumPaints')}
                      className="accent-[#2C73D2]"
                    />
                    <span>Herbal Gum Paints ({getProductsByCategory('HerbalGumPaints').length})</span>
                  </label>
                </div>

                {/* Pharmaceutical Gum Paints */}
                <div className="mb-3">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#2C73D2]">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes('PharmaceuticalGumPaints')}
                      onChange={() => handleCategoryChange('PharmaceuticalGumPaints')}
                      className="accent-[#2C73D2]"
                    />
                    <span>Pharmaceutical Gum Paints ({getProductsByCategory('PharmaceuticalGumPaints').length})</span>
                  </label>
                </div>

                {/* Antifungal Gum Paints */}
                <div className="mb-3">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#2C73D2]">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes('AntifungalGumPaints')}
                      onChange={() => handleCategoryChange('AntifungalGumPaints')}
                      className="accent-[#2C73D2]"
                    />
                    <span>Antifungal Gum Paints ({getProductsByCategory('AntifungalGumPaints').length})</span>
                  </label>
                </div>

                {/* Astringent Gels */}
                <div className="mb-3">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#2C73D2]">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes('AstringentGels')}
                      onChange={() => handleCategoryChange('AstringentGels')}
                      className="accent-[#2C73D2]"
                    />
                    <span>Astringent Gels ({getProductsByCategory('AstringentGels').length})</span>
                  </label>
                </div>
              </div>
            )}
          </div>

                {/* Nicotine Tablets */}
                <div className="mb-4">
                  <div className="flex items-center justify-between font-semibold text-[#2C73D2] mb-2 cursor-pointer" onClick={() => toggleGroup('NicotineTablets')}>
                    <span>Nicotine Products</span>
                    <span className="text-lg">{openGroups.NicotineTablets ? '-' : '+'}</span>
                  </div>
                  {openGroups.NicotineTablets && (
                    <div className="ml-4">
                {/* Nicotex Gums */}
                <div className="mb-3">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#2C73D2]">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes('NicotexGums')}
                      onChange={() => handleCategoryChange('NicotexGums')}
                      className="accent-[#2C73D2]"
                    />
                    <span>Nicotex Gums ({getProductsByCategory('NicotexGums').length})</span>
                  </label>
                </div>

                {/* Nicotine Lozenges */}
                <div className="mb-3">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#2C73D2]">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes('NicotineLozenges')}
                      onChange={() => handleCategoryChange('NicotineLozenges')}
                      className="accent-[#2C73D2]"
                    />
                    <span>Nicotine Lozenges ({getProductsByCategory('NicotineLozenges').length})</span>
                  </label>
                </div>

                {/* Nicotine Patches */}
                <div className="mb-3">
                  <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[#2C73D2]">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes('NicotinePatches')}
                      onChange={() => handleCategoryChange('NicotinePatches')}
                      className="accent-[#2C73D2]"
                    />
                    <span>Nicotine Patches ({getProductsByCategory('NicotinePatches').length})</span>
                  </label>
                </div>
                    </div>
                  )}
                </div>
          
              </div>
            )}
          </div>

          <div className="flex gap-2 mt-4">
            <button className="px-4 py-2 rounded bg-[#2C73D2] text-white font-semibold hover:bg-[#1f5aa6] transition">
              Apply
            </button>
            <button 
              onClick={clearAllFilters}
              className="px-4 py-2 rounded bg-gray-200 text-[#2C73D2] font-semibold hover:bg-gray-300 transition"
            >
              Clear All
            </button>
          </div>
          
          {/* Active Filters Display */}
          {(selectedProblems.length > 0 || selectedCategories.length > 0) && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <div className="text-sm font-semibold text-[#2C73D2] mb-2">Active Filters:</div>
              <div className="flex flex-wrap gap-1">
                {selectedProblems.map(problemKey => {
                  const problemObj = dentalProblems.find(p => p.key === problemKey);
                  return problemObj ? (
                    <span key={problemKey} className="text-xs bg-[#2C73D2] text-white px-2 py-1 rounded-full">
                      {problemObj.label}
                    </span>
                  ) : null;
                })}
                {selectedCategories.map(category => (
                  <span key={category} className="text-xs bg-[#F4A300] text-white px-2 py-1 rounded-full">
                    {category}
                  </span>
                ))}
              </div>
            </div>
          )}
        </aside>

        {/* Product Grid */}
        <section className="flex-1">
          {/* Results Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-[#2C73D2]">
              {t('shop.title')} ({filteredProducts.length} {t('common.search')})
            </h2>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg border border-[#2C73D2]/10 p-4 flex flex-col justify-between h-full hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center">
                  <img src={product.image} alt={product.name} className="w-32 h-32 object-contain mb-3 rounded-lg" />
                  
                  {/* Product Name */}
                  <div className="text-base font-semibold text-[#2C73D2] mb-1 text-center min-h-[3rem] flex items-center">{product.name}</div>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  
                  {/* Date Added (only show if sorting by date) */}
                  {false && (
                    <div className="text-xs text-gray-500 mb-2">
                      Added: {product.dateAdded.toLocaleDateString('en-IN', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                  )}
                  
                  {/* Description */}
                  <div className="text-sm text-gray-700 mb-2 text-center flex-grow">{product.description}</div>
                  
                  {/* Dental Problems Tags */}
                  <div className="flex flex-wrap gap-1 mb-3 justify-center">
                    {product.dentalProblems.slice(0, 2).map(problemKey => {
                      const problemObj = dentalProblems.find(p => p.key === problemKey);
                      return problemObj ? (
                        <span key={problemKey} className="text-xs bg-blue-100 text-[#2C73D2] px-2 py-1 rounded-full">
                          {problemObj.label}
                        </span>
                      ) : null;
                    })}
                    {product.dentalProblems.length > 2 && (
                      <span className="text-xs text-gray-500">+{product.dentalProblems.length - 2} more</span>
                    )}
                  </div>
                </div>
                
                {/* Bottom section with Price and Button */}
                <div className="flex flex-col items-center mt-auto">
                  {/* Price */}
                  <div className="text-lg font-bold text-[#F4A300] mb-3">{product.price}</div>
                  
                  {/* Action Button */}
                  <Link
                    to={`/product/${product.id}`}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white font-semibold shadow drop-shadow-md hover:from-[#F4A300] hover:to-[#2C73D2] transition text-center text-sm w-full max-w-[120px]"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl text-gray-300 mb-4">🦷</div>
              <div className="text-xl font-semibold text-gray-600 mb-2">No products found</div>
              <div className="text-gray-500 mb-4">Try adjusting your filters or search criteria</div>
              <button 
                onClick={clearAllFilters}
                className="px-6 py-2 bg-[#2C73D2] text-white rounded-lg font-semibold hover:bg-[#1f5aa6] transition"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
    </>
  );
};

export default ShopPage;
