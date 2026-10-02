/**
 * KrushiMitra — Live Search Engine
 * Provides instant indexed search across crops, diseases, medicines, schemes, techniques, and articles.
 */

const SEARCH_DATABASE = [
  // Crops
  {
    title: "Cotton (કપાસ / Kapas)",
    type: "crop",
    category: "Cash Crop",
    desc: "Major commercial fiber crop of Gujarat. Thrives in deep black cotton soils (Regur) with well-timed irrigation and bollworm IPM.",
    url: "crop-details/cotton.html",
    keywords: ["cotton", "kapas", "fiber", "kharif", "bollworm", "black soil", "gujarat"]
  },
  {
    title: "Groundnut (મગફળી / Peanut)",
    type: "crop",
    category: "Oilseed",
    desc: "Key oilseed crop of Saurashtra. Requires well-drained sandy loam soil, proper gypsum application, and white grub management.",
    url: "crop-details/groundnut.html",
    keywords: ["groundnut", "peanut", "magfali", "oilseed", "saurashtra", "gypsum", "tikka"]
  },
  {
    title: "Wheat (ઘઉં / Gehun)",
    type: "crop",
    category: "Cereal",
    desc: "Premier Rabi cereal cultivated extensively in Bhal and North Gujarat. High yield with timely crown root initiation irrigation.",
    url: "crop-details/wheat.html",
    keywords: ["wheat", "gehun", "ghau", "rabi", "cereal", "bhal", "rust", "irrigation"]
  },
  {
    title: "Rice / Paddy (ડાંગર / Dhan)",
    type: "crop",
    category: "Cereal",
    desc: "Essential Kharif staple grown in South and Central Gujarat. Requires puddle transplanting and continuous nutrient monitoring.",
    url: "crop-details/rice.html",
    keywords: ["rice", "paddy", "dangar", "kharif", "water", "blast", "stem borer"]
  },
  {
    title: "Cumin (જીરું / Jeera)",
    type: "crop",
    category: "Spice",
    desc: "Valuable dry-climate Rabi spice crop of North Gujarat and Saurashtra. Highly susceptible to powdery mildew and blight.",
    url: "crop-details/cumin.html",
    keywords: ["cumin", "jeera", "jiru", "spice", "rabi", "powdery mildew", "blight", "unjha"]
  },
  {
    title: "Castor (દિવેલા / Arandi)",
    type: "crop",
    category: "Oilseed",
    desc: "Gujarat is India's leading castor producer. Hardy oilseed suited for varied rainfall conditions and semi-arid tracts.",
    url: "crop-details/castor.html",
    keywords: ["castor", "arandi", "divela", "oilseed", "gujarat", "semilooper", "wilt"]
  },
  {
    title: "Pearl Millet (બાજરી / Bajra)",
    type: "crop",
    category: "Millet",
    desc: "Nutritious climate-resilient coarse grain staple. Drought tolerant, suitable for sandy soils in Banaskantha and Kutch.",
    url: "crop-details/pearl-millet.html",
    keywords: ["pearl millet", "bajra", "bajri", "millet", "drought", "kharif", "summer", "banaskantha"]
  },
  {
    title: "Maize (મકાઈ / Corn)",
    type: "crop",
    category: "Cereal / Fodder",
    desc: "Versatile cereal crop of Eastern tribal belt of Gujarat (Panchmahal, Dahod). Dual purpose grain and livestock fodder.",
    url: "crop-details/maize.html",
    keywords: ["maize", "corn", "makai", "cereal", "kharif", "fall armyworm", "dahod"]
  },

  // Diseases & Pests
  {
    title: "Pink & American Bollworm",
    type: "disease",
    category: "Insect Pest",
    desc: "Devastating pest of cotton attacking squares, flowers, and bolls. Managed via pheromone traps and approved IPM protocols.",
    url: "diseases.html#bollworm",
    keywords: ["bollworm", "pink bollworm", "cotton pest", "larva", "pheromone trap", "ipm"]
  },
  {
    title: "Aphids (મોલો-મશી)",
    type: "disease",
    category: "Sucking Pest",
    desc: "Tiny sap-sucking insects infesting cumin, mustard, wheat, and vegetables. Causes leaf curling and sooty mold excretion.",
    url: "diseases.html#aphids",
    keywords: ["aphids", "molo", "sucking pest", "cumin", "mustard", "honeydew", "neem oil"]
  },
  {
    title: "Whiteflies (સફેદ માખી)",
    type: "disease",
    category: "Sucking Pest & Vector",
    desc: "Major pest and viral disease vector affecting cotton, pulses, and vegetables. Transmits leaf curl virus.",
    url: "diseases.html#whiteflies",
    keywords: ["whiteflies", "safed makhi", "leaf curl", "cotton", "yellow sticky trap"]
  },
  {
    title: "Powdery Mildew (છારો રોગ)",
    type: "disease",
    category: "Fungal Disease",
    desc: "White powdery patches on leaves and umbels of cumin, mustard, and cucurbits during cool, humid Rabi periods.",
    url: "diseases.html#powdery-mildew",
    keywords: ["powdery mildew", "charo", "fungal", "cumin", "wettable sulfur", "white powder"]
  },
  {
    title: "Tikka Leaf Spot of Groundnut",
    type: "disease",
    category: "Fungal Disease",
    desc: "Dark brown necrotic spots with yellow halos on peanut foliage, causing severe early defoliation if left untreated.",
    url: "diseases.html#leaf-spot",
    keywords: ["tikka", "leaf spot", "groundnut disease", "cercospora", "fungicide"]
  },
  {
    title: "Root Rot & Wilt Complex",
    type: "disease",
    category: "Soil-borne Fungus",
    desc: "Causes wilting, root decay, and plant collapse in castor, cotton, and pulses in waterlogged or heavy infected soil.",
    url: "diseases.html#root-rot",
    keywords: ["root rot", "wilt", "fusarium", "rhizoctonia", "trichoderma", "seed treatment"]
  },
  {
    title: "Crop Nutrient Deficiencies (Zinc, Nitrogen, Iron)",
    type: "disease",
    category: "Physiological Disorder",
    desc: "Interveinal chlorosis, stunted growth, and yellowing foliage resulting from deficient soil nutrients or alkaline pH.",
    url: "diseases.html#nutrient-deficiency",
    keywords: ["deficiency", "zinc", "nitrogen", "iron chlorosis", "fertilizer", "soil health"]
  },

  // Agricultural Medicines
  {
    title: "Neem Oil 10,000 PPM (Azadirachtin)",
    type: "medicine",
    category: "Bio-Pesticide",
    desc: "Organic broad-spectrum repellent and anti-feedant for aphids, whiteflies, and early-instar caterpillars.",
    url: "medicines.html#neem-oil",
    keywords: ["neem oil", "azadirachtin", "organic pesticide", "bio-pesticide", "aphids", "safe"]
  },
  {
    title: "Chlorpyrifos 20% EC",
    type: "medicine",
    category: "Insecticide",
    desc: "Organophosphate insecticide for soil application against termites and white grubs. Strict safety PPE required.",
    url: "medicines.html#chlorpyrifos",
    keywords: ["chlorpyrifos", "termite", "white grub", "insecticide", "protective equipment"]
  },
  {
    title: "Imidacloprid 17.8% SL",
    type: "medicine",
    category: "Systemic Insecticide",
    desc: "Systemic neonicotinoid registered for sucking pests in cotton and groundnut. Protect foraging honeybees.",
    url: "medicines.html#imidacloprid",
    keywords: ["imidacloprid", "sucking pest", "aphids", "jassids", "cotton", "bees caution"]
  },
  {
    title: "Mancozeb 75% WP",
    type: "medicine",
    category: "Contact Fungicide",
    desc: "Broad-spectrum protective contact fungicide against leaf spot, blight, and downy mildew in various crops.",
    url: "medicines.html#mancozeb",
    keywords: ["mancozeb", "contact fungicide", "leaf spot", "blight", "protective spray"]
  },
  {
    title: "Azoxystrobin 18.2% + Difenoconazole 11.4% SC",
    type: "medicine",
    category: "Broad Spectrum Fungicide",
    desc: "Combination systemic fungicide for powdery mildew and rust management with dual mode of action.",
    url: "medicines.html#azoxystrobin",
    keywords: ["azoxystrobin", "difenoconazole", "systemic fungicide", "powdery mildew", "rust"]
  },
  {
    title: "Pendimethalin 30% EC",
    type: "medicine",
    category: "Pre-emergence Herbicide",
    desc: "Soil-applied selective pre-emergence herbicide for broadleaf and grassy weeds in cotton, groundnut, and cumin.",
    url: "medicines.html#pendimethalin",
    keywords: ["pendimethalin", "herbicide", "weed control", "pre-emergence", "soil application"]
  },

  // Farming Techniques
  {
    title: "Drip Irrigation System Management",
    type: "technique",
    category: "Water Management",
    desc: "Saves 40-60% irrigation water and improves fertilizer efficiency (fertigation) in cotton, groundnut, and orchard crops.",
    url: "techniques.html#drip-irrigation",
    keywords: ["drip irrigation", "micro irrigation", "fertigation", "water saving", "subsidy", "ggrc"]
  },
  {
    title: "Soil Testing & Soil Health Card",
    type: "technique",
    category: "Soil Health",
    desc: "Standard sampling method, testing macro & micronutrients (N, P, K, Zn, Fe), and balanced fertilizer application.",
    url: "techniques.html#soil-testing",
    keywords: ["soil testing", "soil health card", "sampling", "organic carbon", "ph level"]
  },
  {
    title: "Crop Rotation & Intercropping",
    type: "technique",
    category: "Agronomy",
    desc: "Rotational cultivation of legumes with cereals to replenish soil nitrogen and disrupt recurring pest cycles.",
    url: "techniques.html#crop-rotation",
    keywords: ["crop rotation", "intercropping", "legumes", "pulses", "pest disruption"]
  },
  {
    title: "Organic Composting & Vermicomposting",
    type: "technique",
    category: "Organic Farming",
    desc: "Step-by-step conversion of farm waste and cow dung into nutrient-dense vermicompost using Eisenia fetida.",
    url: "techniques.html#vermicompost",
    keywords: ["vermicompost", "organic farming", "compost", "earthworms", "cow dung", "bio-fertilizer"]
  },

  // Government Schemes
  {
    title: "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
    type: "scheme",
    category: "Central Govt Scheme",
    desc: "Direct income support of ₹6,000 per year transferred in 3 equal installments to eligible landholding farmer families.",
    url: "schemes.html#pm-kisan",
    keywords: ["pm-kisan", "pm kisan", "income support", "6000", "central scheme", "dbt"]
  },
  {
    title: "PMFBY (Pradhan Mantri Fasal Bima Yojana)",
    type: "scheme",
    category: "Crop Insurance",
    desc: "Comprehensive crop insurance cover against unavoidable natural calamities from pre-sowing to post-harvest.",
    url: "schemes.html#pmfby",
    keywords: ["pmfby", "crop insurance", "fasal bima", "drought cover", "flood claim"]
  },
  {
    title: "Gujarat i-Khedut Portal Services",
    type: "scheme",
    category: "Gujarat State Portal",
    desc: "Unified online portal for Gujarat farmers to apply for tractor subsidies, drip irrigation grants, seeds, and equipment.",
    url: "schemes.html#ikhedut",
    keywords: ["ikhedut", "i-khedut", "gujarat portal", "tractor subsidy", "drip subsidy", "khedut sahay"]
  },
  {
    title: "Kisan Call Centre (Toll-Free 1800-180-1551)",
    type: "scheme",
    category: "Farmer Support Service",
    desc: "Free nationwide advisory service providing real-time agricultural officer answers in regional languages 6 AM to 10 PM.",
    url: "schemes.html#kisan-call-centre",
    keywords: ["kisan call centre", "toll free", "18001801551", "expert advice", "helpline"]
  },

  // Articles
  {
    title: "Pre-Monsoon Land Preparation for Kharif Crops in Gujarat",
    type: "article",
    category: "Seasonal Guide",
    desc: "Timely deep summer ploughing, farmyard manure incorporation, and certified seed selection before monsoon arrival.",
    url: "articles.html#pre-monsoon-prep",
    keywords: ["pre monsoon", "kharif", "land preparation", "summer ploughing", "fym"]
  },
  {
    title: "Integrated Management of Sucking Pests in Bt Cotton",
    type: "article",
    category: "Pest Management",
    desc: "Practical steps to curb early season jassids, thrips, and aphids without indiscriminately spraying broad-spectrum toxins.",
    url: "articles.html#bt-cotton-pests",
    keywords: ["bt cotton", "sucking pests", "jassids", "thrips", "ipm", "yellow traps"]
  }
];

// Search Engine Initialization
document.addEventListener('DOMContentLoaded', () => {
  initSearchSystem();
});

function initSearchSystem() {
  const searchTriggers = document.querySelectorAll('.search-trigger-btn, .nav-search-btn');
  const searchModal = document.querySelector('.search-modal');
  const searchClose = document.querySelector('.search-card-close');
  const searchInput = document.querySelector('.search-input-field');
  const searchResultsArea = document.querySelector('.search-results-area');
  const quickTags = document.querySelectorAll('.quick-tag-btn');

  // Also listen on hero compact search input if present
  const heroSearchInput = document.querySelector('.hero-search-input');
  const heroSearchBtn = document.querySelector('.hero-search-btn');

  if (!searchModal) return;

  const openSearch = (initialQuery = '') => {
    searchModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (searchInput) {
      searchInput.value = initialQuery;
      setTimeout(() => searchInput.focus(), 150);
      performSearch(initialQuery);
    }
  };

  const closeSearch = () => {
    searchModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  searchTriggers.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openSearch();
  }));

  if (searchClose) searchClose.addEventListener('click', closeSearch);

  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) closeSearch();
  });

  document.addEventListener('keydown', (e) => {
    // Open on Ctrl+K or /
    if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA')) {
      e.preventDefault();
      openSearch();
    }
    // Close on Escape
    if (e.key === 'Escape' && searchModal.classList.contains('active')) {
      closeSearch();
    }
  });

  if (heroSearchBtn && heroSearchInput) {
    heroSearchBtn.addEventListener('click', () => {
      const q = heroSearchInput.value.trim();
      openSearch(q);
    });
    heroSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        openSearch(heroSearchInput.value.trim());
      }
    });
  }

  // Handle live typing with debounce
  let debounceTimer;
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        performSearch(searchInput.value.trim());
      }, 150);
    });
  }

  // Handle quick search pills
  quickTags.forEach(tag => {
    tag.addEventListener('click', () => {
      const q = tag.getAttribute('data-tag');
      if (searchInput) {
        searchInput.value = q;
        performSearch(q);
      }
    });
  });

  function performSearch(query) {
    if (!searchResultsArea) return;

    if (!query) {
      searchResultsArea.innerHTML = `
        <div style="padding: 24px; text-align: center; color: var(--color-text-light);">
          <p style="font-size: 0.95rem; margin-bottom: 6px;">Type to search crops, pests, medicines, schemes, or techniques.</p>
          <p style="font-size: 0.8rem;">Try: <em>"Cotton"</em>, <em>"Bollworm"</em>, <em>"PM-Kisan"</em>, <em>"Drip"</em>, or <em>"Cumin"</em></p>
        </div>
      `;
      return;
    }

    const cleanQ = query.toLowerCase();
    const results = SEARCH_DATABASE.filter(item => {
      const matchTitle = item.title.toLowerCase().includes(cleanQ);
      const matchDesc = item.desc.toLowerCase().includes(cleanQ);
      const matchCat = item.category.toLowerCase().includes(cleanQ);
      const matchKeywords = item.keywords.some(k => k.toLowerCase().includes(cleanQ));
      return matchTitle || matchDesc || matchCat || matchKeywords;
    });

    if (results.length === 0) {
      searchResultsArea.innerHTML = `
        <div style="padding: 32px 20px; text-align: center;">
          <p style="font-weight: 700; color: var(--color-forest); font-size: 1.05rem; margin-bottom: 6px;">No exact agricultural match for "${query}"</p>
          <p style="font-size: 0.85rem; color: var(--color-text-muted); max-width: 420px; margin: 0 auto 16px;">
            Check spelling or try common Gujarati/English names like Cotton, Groundnut, Cumin, Wheat, or Neem.
          </p>
          <a href="crops.html" class="btn btn-sm btn-secondary" onclick="document.querySelector('.search-modal').classList.remove('active'); document.body.style.overflow='';">Browse Crop Catalog</a>
        </div>
      `;
      return;
    }

    // Determine current root depth to correctly link from root vs subdirectory
    const isInSubdir = window.location.pathname.includes('/crop-details/') || 
                       window.location.pathname.includes('/disease-details/') || 
                       window.location.pathname.includes('/medicine-details/');
    const pathPrefix = isInSubdir ? '../' : '';

    searchResultsArea.innerHTML = results.map(item => `
      <a href="${pathPrefix}${item.url}" class="search-result-item" onclick="document.querySelector('.search-modal').classList.remove('active'); document.body.style.overflow='';">
        <span class="search-res-type ${item.type}">${item.type}</span>
        <div class="search-res-info">
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
        </div>
      </a>
    `).join('');
  }
}
