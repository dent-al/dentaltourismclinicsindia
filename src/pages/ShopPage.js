import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeroBanner from "../components/HeroBanner";
import FullPageLoader from "../components/FullPageLoader";

const ShopPage = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [selectedProblems, setSelectedProblems] = useState([]);
  const [openGroups, setOpenGroups] = useState({
    ToothBrushes: false,
    Toothpaste: false,
    MouthWash: false,
    TongueCleaner: false,
    Flossers: false,
    GumPaints: false,
    NicotineTablets: false,
    DentalProblems: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const products = [
    {
      id: 1,
      name: "Sensodyne Toothpaste",
      description: "For sensitive teeth. Clinically proven relief.",
      price: "₹180",
      image: require("../assets/Tooth Whitening.png"),
      dateAdded: new Date('2024-01-15'),
    },
    {
      id: 2,
      name: "Herbal Mouthwash",
      description: "Alcohol-free, herbal formula for gum care.",
      price: "₹120",
      image: require("../assets/Mouth Wash.png"),
      dateAdded: new Date('2024-02-20'),
    },
    {
      id: 3,
      name: "Kids Toothbrush",
      description: "Soft bristles, safe for ages 3+.",
      price: "₹60",
      image: require("../assets/Kids Dentistry.png"),
      dateAdded: new Date('2024-03-10'),
    },
    {
      id: 4,
      name: "charcoal Powder",
      description: "Natural whitening, herbal ingredients.",
      price: "₹250",
      image: require("../assets/Ayurvedic Dental.png"),
      dateAdded: new Date('2024-03-25'),
    },
  ];

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

  // Enhanced products with dental problems and sorting data
  const enhancedProducts = products.map(product => ({
    ...product,
    numericPrice: parseInt(product.price.replace('₹', '')),
    category: product.id === 1 || product.id === 4 ? "Toothpaste" :
              product.id === 2 ? "MouthWash" : 
              product.id === 3 ? "ToothBrushes" : "General",
    dentalProblems: product.id === 1 ? ["sensitivity", "teethWhitening"] :
                   product.id === 2 ? ["gumDisease", "badBreath", "bleedingGums"] :
                   product.id === 3 ? ["toothdecay", "gumDisease"] :
                   product.id === 4 ? ["teethWhitening", "badBreath"] : [],
    rating: product.id === 1 ? 4.5 : product.id === 2 ? 4.2 : product.id === 3 ? 4.0 : 4.3
  }));

  // Filter products based on selected dental problems
  const filteredProducts = enhancedProducts.filter(product => {
    if (selectedProblems.length === 0) return true;
    return selectedProblems.some(problem => product.dentalProblems.includes(problem));
  });

  const handleProblemChange = (problem) => {
    setSelectedProblems(prev => 
      prev.includes(problem) 
        ? prev.filter(p => p !== problem)
        : [...prev, problem]
    );
  };

  const clearAllFilters = () => {
    setSelectedProblems([]);
  };

  const toggleGroup = (group) => {
    setOpenGroups((prev) => ({ ...prev, [group]: !prev[group] }));
  };

  if (loading) return <FullPageLoader />;

  return (
    <>
      <HeroBanner 
        title={t('shop.title')}
        subtitle={t('shop.subtitle')}
        showButtons={false}
      />
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
          <h4 className="text-lg font-semibold text-[#2C73D2] mb-3 mt-6">Product Categories</h4>
          
          {/* ToothBrushes */}
          <div className="mb-4">
            <div className="flex items-center justify-between font-semibold text-[#2C73D2] mb-2 cursor-pointer" onClick={() => toggleGroup('ToothBrushes')}>
              <span>ToothBrushes</span>
              <span className="text-lg">{openGroups.ToothBrushes ? '-' : '+'}</span>
            </div>
            {openGroups.ToothBrushes && (
              <div className="flex flex-col gap-2 ml-2">
                <label><input type="checkbox" /> Kids Tooth Brush</label>
                <label><input type="checkbox" /> Soft Bristles Tooth Brush</label>
                <label><input type="checkbox" /> Medium Bristles Tooth Brush</label>
                <label><input type="checkbox" /> Interproxa Tooth Brushes</label>
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
              <div className="flex flex-col gap-2 ml-2">
                <label><input type="checkbox" /> Kids Toothpaste</label>
                <label><input type="checkbox" /> Herbal/Ayurvedic Toothpaste</label>
                <label><input type="checkbox" /> Sensitive Toothpaste</label>
                <label><input type="checkbox" /> Non-fluoridated Toothpaste</label>
                <label><input type="checkbox" /> Gel Toothpaste</label>
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
              <div className="flex flex-col gap-2 ml-2">
                <label><input type="checkbox" /> Sensitive Mouthwash</label>
                <label><input type="checkbox" /> Whitening Mouthwash</label>
                <label><input type="checkbox" /> Antiseptic/Therapeutic Mouthwash</label>
                <label><input type="checkbox" /> Cosmetic Mouthwash</label>
                <label><input type="checkbox" /> Alcohol-free Mouthwash</label>
                <label><input type="checkbox" /> Kids Mouth Wash</label>
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
              <div className="flex flex-col gap-2 ml-2">
                <label><input type="checkbox" /> Metal Tongue Cleaners</label>
                <label><input type="checkbox" /> Plastic Tongue Cleaner</label>
                <label><input type="checkbox" /> Silicone Tongue Cleaner</label>
                <label><input type="checkbox" /> Tongue Cleaning Brushes</label>
                <label><input type="checkbox" /> Eco-Friendly/Biodegradable Tongue Cleaner</label>
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
              <div className="flex flex-col gap-2 ml-2">
                <label><input type="checkbox" /> Power Flossers</label>
                <label><input type="checkbox" /> Flosser</label>
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
              <div className="flex flex-col gap-2 ml-2">
                <label><input type="checkbox" /> Oil Pulling Rinses</label>
                <label><input type="checkbox" /> Allopathic/Pharmaceutical Gum Paints</label>
                <label><input type="checkbox" /> Astringent Gels/Lotions</label>
              </div>
            )}
          </div>

          {/* Nicotine Tablets */}
          <div className="mb-4">
            <div className="flex items-center justify-between font-semibold text-[#2C73D2] mb-2 cursor-pointer" onClick={() => toggleGroup('NicotineTablets')}>
              <span>Nicotine Tablets</span>
              <span className="text-lg">{openGroups.NicotineTablets ? '-' : '+'}</span>
            </div>
            {openGroups.NicotineTablets && (
              <div className="flex flex-col gap-2 ml-2">
                <label><input type="checkbox" /> Nicotine Lozenges</label>
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
          {selectedProblems.length > 0 && (
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
              <div key={product.id} className="bg-white rounded-2xl shadow-lg border border-[#2C73D2]/10 p-4 flex flex-col items-center w-full max-w-xs mx-auto hover:shadow-xl transition-shadow">
                <img src={product.image} alt={product.name} className="w-32 h-32 object-contain mb-3 rounded-lg" />
                
                {/* Product Name */}
                <div className="text-base font-semibold text-[#2C73D2] mb-1 text-center">{product.name}</div>
                
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
                <div className="text-sm text-gray-700 mb-2 text-center">{product.description}</div>
                
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
                
                {/* Price */}
                <div className="text-lg font-bold text-[#F4A300] mb-2">{product.price}</div>
                
                {/* Action Button */}
                <div className="flex flex-row items-center justify-center w-full mb-2 gap-2">
                  <Link
                    to={`/product/${product.id}`}
                    className="px-2 py-1 rounded-lg bg-gradient-to-r from-[#2C73D2] to-[#F4A300] text-white font-semibold shadow drop-shadow-md hover:from-[#F4A300] hover:to-[#2C73D2] transition text-center text-sm"
                    style={{ maxWidth: '110px', width: '100%' }}
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
