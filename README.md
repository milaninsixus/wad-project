# KrushiMitra (કૃષિમિત્ર) — Smart Farming Guidance Portal

> **Practical, Scientifically Grounded Agricultural Intelligence for Indian Farmers**

KrushiMitra is a comprehensive, production-ready agricultural information portal designed to empower farmers—especially across Gujarat and Western India—with authentic crop cultivation packages, verified pest and disease diagnosis, strict agrochemical safety compliance, and direct links to official government welfare schemes.

---

## 🌾 Key Highlights & Features

- **No Frameworks:** Built exclusively with **semantic HTML5**, **modular CSS3** (custom design tokens, selective glassmorphism, responsive CSS grid/flexbox), and **Vanilla JavaScript**.
- **Regional Agronomic Focus:** Prioritizes key commercial and food crops of Gujarat:
  - **Cotton (કપાસ)** — Deep black soil cultivation, drip fertigation, and pink bollworm IPM.
  - **Groundnut (મગફળી)** — Saurashtra focus, gypsum scheduling at pegging, and Tikka leaf spot control.
  - **Wheat (ઘઉં)** — Irrigated GW varieties and dryland Bhal Daudkhani durum wheat.
  - **Rice / Paddy (ડાંગર)** — Puddle transplanting, SRI methods, zinc nutrition, and stem borer management.
  - **Cumin (જીરું)** — High-value Unjha spice agronomy, light irrigation rules, and powdery mildew prophylaxis.
  - **Castor (દિવેલા)** — GCH hybrids, wide row spacing, semilooper IPM, and multi-flush harvesting.
  - **Pearl Millet (બાજરી)** — Climate-resilient coarse grain for Banaskantha and Kutch.
  - **Maize (મકાઈ)** — Dual-purpose grain and fodder for Eastern Gujarat tribal belts.
- **Strict Agrochemical Safety (CIBRC Label Compliance):**
  - Explicit dosage, formulation, pre-harvest intervals (PHI), re-entry intervals (REI), and pollinator toxicity warnings.
  - Zero fabricated chemical brands or speculative tank mixtures.
- **Comprehensive Plant Disease & Pest Identification:**
  - Visual symptom diagnosis with practical distinguishing features, contributing weather triggers, and threshold-based IPM.
- **Official Government Schemes Directory:**
  - Verified programs: PM-KISAN, PMFBY (Crop Insurance), Soil Health Card, e-NAM Mandis, Kisan Call Centre (Toll-Free `1800-180-1551`), and the Gujarat **i-Khedut** portal.
- **Live Search & Filter Engine:**
  - Instant searchable catalog indexed across all crops, diseases, medicines, techniques, and articles.
  - Category, season, and keyword filtering.
- **Accessible & Truthful UI:**
  - Client-side form validation with honest user feedback.
  - Fully responsive across mobile phones (320px, 375px), tablets (768px), laptops (1024px), and desktop displays (1440px+).

---

## 📁 Project Structure

```text
krushimitra/
├── index.html                   # Homepage (Hero, category strip, featured crops, seasonal tasks, IPM, footer)
├── crops.html                   # Searchable Crop Catalog with category & season filters
├── diseases.html                # Plant Disease & Pest Library (differential diagnosis, triggers, IPM)
├── medicines.html               # Agricultural Medicines Directory (CIBRC label compliance, PPE, PHI, REI)
├── techniques.html              # Modern Farming Techniques (Drip descaling, Soil testing, Vermicomposting)
├── schemes.html                 # Government Schemes Directory (PM-KISAN, PMFBY, i-Khedut, Kisan Call Centre)
├── articles.html                # Field Research Guides & Seasonal Agronomic Articles
├── about.html                   # About KrushiMitra (Mission, editorial standards, institutional disclaimer)
├── contact.html                 # Contact form with client-side validation & helpline resources
├── privacy.html                 # Privacy policy
├── disclaimer.html              # Agricultural and legal disclaimer
│
├── crop-details/                # Dedicated Crop Cultivation Manuals
│   ├── cotton.html
│   ├── groundnut.html
│   ├── wheat.html
│   ├── rice.html
│   ├── cumin.html
│   ├── castor.html
│   ├── pearl-millet.html
│   └── maize.html
│
├── assets/
│   ├── css/
│   │   ├── style.css            # Design tokens, typography, glassmorphism, components
│   │   └── responsive.css       # Mobile-first media queries (320px to 1440px)
│   ├── js/
│   │   ├── main.js              # Nav scroll, mobile drawer, accordions, back-to-top, toast, lang modal
│   │   ├── search.js            # Live indexed search engine across all agri entities
│   │   ├── filters.js           # Multi-category filtering and seasonal tab switching
│   │   └── forms.js             # Client-side validation & honest demonstration feedback
│   └── images/
│
├── images/                      # Local images used across the website
│   ├── kapas.jpg
│   ├── groundnut.jpg
│   ├── wheat.jpg
│   ├── rice.jpg
│   ├── cumin.jpg
│   ├── castor.jpg
│   ├── pearl_millet.jpg
│   ├── maize.jpg
│   ├── pink_bollworm.jpg
│   ├── aphids.jpg
│   ├── white_flies.jpg
│   ├── powdery_mildew.jpg
│   ├── leaf_spot.jpg
│   ├── root_rot.jpg
│   ├── nutrient.jpg
│   └── IPM.jpg
└── README.md                    # Project documentation
```

---

## 🚀 Running the Website Locally

Because KrushiMitra is built with standard HTML5, CSS3, and Vanilla JavaScript, it requires **no build step, no npm install, and no transpilation**.

### Option 1: Python Built-in HTTP Server (Recommended)
Open your terminal in the `krushimitra` directory and run:

```bash
# Python 3
python -m http.server 8000
```
Then visit: `http://localhost:8000`

### Option 2: Node.js `serve` or `http-server`
```bash
npx serve .
# or
npx http-server -p 8000
```

### Option 3: VS Code Live Server
Right-click on `index.html` inside VS Code and select **"Open with Live Server"**.

---

## 🌐 Features Requiring Backend / API Integration in Production

KrushiMitra is delivered as a production-grade frontend prototype with honest UI states. In an enterprise cloud deployment, the following features would be backed by live APIs:

1. **Live Weather & Monsoon Tracking:**
   - Integration with the **India Meteorological Department (IMD / Mausam API)** for taluka-level 5-day rainfall forecasts and extreme heatwave warnings.
2. **Real-Time Mandi Prices (APMC Rates):**
   - Integration with the **Agmarknet / data.gov.in API** to feed live daily modal prices for commodities across Gondal, Rajkot, Unjha, and Dahod mandis.
3. **SMS / WhatsApp Advisory Gateway:**
   - Integration with Kisan SMS portal or Twilio/Gupshup for sending automated pest alerts based on degree-day models.
4. **Farmer Query Ticketing & Photo Diagnostic Backend:**
   - Secure cloud storage (e.g., AWS S3 / Google Cloud Storage) and ticketing database (PostgreSQL) enabling agricultural extension officers to review farmer-uploaded pest photos and respond via phone or WhatsApp.

---

## 📚 Authoritative Research References

Agronomic protocols and chemical data in this project are referenced from:
- **ICAR** — Indian Council of Agricultural Research ([icar.org.in](https://icar.org.in))
- **AAU** — Anand Agricultural University ([aau.in](https://www.aau.in))
- **JAU** — Junagadh Agricultural University ([jau.in](https://www.jau.in))
- **SDAU** — Sardarkrushinagar Dantiwada Agricultural University ([sdau.edu.in](https://www.sdau.edu.in))
- **CIBRC / DPPQS** — Central Insecticide Board & Directorate of Plant Protection, Quarantine & Storage ([ppqs.gov.in](https://ppqs.gov.in))
- **Ministry of Agriculture & Farmers Welfare** — ([agricoop.nic.in](https://agricoop.nic.in))
