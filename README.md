# KrushiMitra 🌾 — Smart Farming Guidance Portal

> **Practical Agricultural Information for Indian Farmers**

KrushiMitra is a web-based agricultural information portal designed to help farmers access organized information about crop cultivation, plant diseases and pests, agricultural medicines, modern farming techniques, government schemes, and agricultural articles. The website focuses on crops commonly cultivated in Gujarat and Western India.

Built using **HTML5, CSS3, and Vanilla JavaScript**, KrushiMitra provides a responsive interface with searchable information, category filtering, crop-specific guides, and visual references for crop identification and plant health.

---

## 🌱 Key Features

### 1. Crop Cultivation Guides

Explore cultivation information for major agricultural crops, including:

- **Cotton:** Cultivation practices and pink bollworm management.
- **Groundnut:** Crop management and leaf spot information.
- **Wheat:** Cultivation practices and crop nutrition.
- **Rice:** Paddy cultivation and crop management.
- **Cumin:** Cultivation practices and powdery mildew information.
- **Castor:** Cultivation practices and pest management.
- **Pearl Millet:** Information about a major drought-tolerant cereal crop.
- **Maize:** Grain and fodder cultivation information.

Dedicated crop detail pages organize cultivation information for individual crops.

### 2. Plant Diseases and Pest Identification

The disease and pest section provides information to help users understand common agricultural problems, including:

- Aphids and whiteflies.
- Pink bollworm.
- Leaf spot.
- Powdery mildew.
- Root rot.
- Nutrient deficiencies.

The website includes visual references to support the identification of crop diseases and pests. Diagnosis should be confirmed using reliable agricultural guidance when symptoms are uncertain.

### 3. Agricultural Medicines

The medicines section organizes information about agricultural treatments and responsible pesticide use. Consult the relevant product label and qualified agricultural experts before selecting or applying any chemical treatment.

### 4. Modern Farming Techniques

Access information about agricultural practices such as:

- Drip irrigation and water management.
- Soil testing and nutrient management.
- Vermicomposting.
- Integrated Pest Management (IPM).
- Other cultivation and crop-management techniques.

### 5. Government Schemes and Farmer Resources

The website provides information and links related to agricultural welfare programs and public resources, including:

- PM-KISAN.
- Pradhan Mantri Fasal Bima Yojana (PMFBY).
- Soil Health Card Scheme.
- e-NAM.
- Gujarat i-Khedut portal.
- Kisan Call Centre.

Users should consult the respective official portals for current eligibility requirements, application procedures, and scheme updates.

### 6. Agricultural Articles

The articles section presents agricultural guides and educational content to help users explore farming practices, crop management, and related topics.

### 7. Search and Filtering

The website includes client-side search and filtering features to help users find relevant agricultural information more efficiently.

Depending on the page, users can explore information by category, season, or keyword.

### 8. Responsive User Interface

The interface is designed to adapt to different screen sizes, including desktop computers, laptops, tablets, and mobile phones.

### 9. Additional Pages

The website also includes supporting pages for:

- About KrushiMitra.
- Contact information and form.
- Privacy policy.
- Agricultural and legal disclaimer.

---

## 🖼️ Latest Image Updates

The latest commit, `50a022b` — **“crops and diseases images fixed”** — improves image references throughout the website and adds image assets for agricultural content.

The update includes changes to:

- `index.html`
- `crops.html`
- `diseases.html`
- `articles.html`

New image assets include:

| Image file | Purpose |
|---|---|
| `images/castor.jpg` | Castor crop |
| `images/cumin.jpg` | Cumin crop |
| `images/groundnut.jpg` | Groundnut crop |
| `images/kapas.jpg` | Cotton crop |
| `images/maize.jpg` | Maize crop |
| `images/pearl_millet.jpg` | Pearl millet crop |
| `images/rice.jpg` | Rice crop |
| `images/wheat.jpg` | Wheat crop |
| `images/aphids.jpg` | Aphid pest |
| `images/white_flies.jpg` | Whitefly pest |
| `images/pink_bollworm.jpg` | Pink bollworm pest |
| `images/leaf_spot.jpg` | Leaf spot disease |
| `images/powdery_mildew.jpg` | Powdery mildew disease |
| `images/root_rot.jpg` | Root rot disease |
| `images/nutrient.jpg` | Nutrient deficiency reference |
| `images/IPM.jpg` | Integrated Pest Management reference |

These images provide visual context for crop and plant-health information.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure and semantic content |
| CSS3 | Styling, layout, and responsive design |
| Vanilla JavaScript | Search, filtering, navigation, and client-side interactions |
| Git | Version control |
| GitHub | Source code hosting and collaboration |

**No frontend framework is required.** The website uses standard web technologies and can run locally without a build process.

---

## 📁 Project Structure

```text
wad-project/
├── index.html
├── crops.html
├── diseases.html
├── medicines.html
├── techniques.html
├── schemes.html
├── articles.html
├── about.html
├── contact.html
├── privacy.html
├── disclaimer.html
│
├── crop-details/
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
│   │   ├── style.css
│   │   └── responsive.css
│   └── js/
│       ├── main.js
│       ├── search.js
│       ├── filters.js
│       └── forms.js
│
├── images/
│   ├── castor.jpg
│   ├── cumin.jpg
│   ├── groundnut.jpg
│   ├── kapas.jpg
│   ├── maize.jpg
│   ├── pearl_millet.jpg
│   ├── rice.jpg
│   ├── wheat.jpg
│   ├── aphids.jpg
│   ├── white_flies.jpg
│   ├── pink_bollworm.jpg
│   ├── leaf_spot.jpg
│   ├── powdery_mildew.jpg
│   ├── root_rot.jpg
│   ├── nutrient.jpg
│   └── IPM.jpg
│
└── README.md
```

*Note: This structure summarizes the known project files and image assets introduced in the latest commit. Retain any additional files and folders already present in your repository.*

---

## 🚀 Running the Website Locally

KrushiMitra uses standard HTML, CSS, and JavaScript. No dependency installation or compilation is required for basic local development.

### Option 1: VS Code Live Server

1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension if it is not already installed.
3. Open `index.html`.
4. Right-click the file and select **Open with Live Server**.

### Option 2: Python HTTP Server

Make sure Python is installed, then open a terminal in the project directory and run:

```bash
python -m http.server 8000
```

Open the following address in your browser:

```text
http://localhost:8000
```

### Option 3: Node.js

If Node.js is installed, you can use a static development server:

```bash
npx serve .
```

Follow the local URL displayed in the terminal.

---

## 🔍 Testing and Verification

After running the website locally, verify the following:

- The homepage loads correctly.
- Crop images display on the homepage and crop catalog.
- Disease and pest images display on the disease page.
- Article images and references load correctly.
- Navigation links lead to the appropriate pages.
- Search and filtering work as expected.
- The layout adapts to mobile and desktop screens.
- No unexpected missing-image icons appear.

---

## 🌾 Project Objective

The objective of KrushiMitra is to make agricultural information more accessible by organizing crop cultivation guidance, plant-health references, farming techniques, and government resources in a single website.

The project demonstrates how fundamental web technologies can be used to develop an accessible, responsive agricultural information portal.

---

## ⚠️ Disclaimer

KrushiMitra is an informational project and should not replace professional agricultural advice. Crop conditions, pest severity, local climate, soil type, and regional regulations may affect the suitability of agricultural practices.

Always verify pesticide selection, dosage, safety precautions, and application instructions against the current product label and recommendations from qualified agricultural authorities.

Government scheme details and eligibility requirements may change. Refer to official government sources for the latest information.

---

## 👨‍💻 Development

KrushiMitra is developed using HTML5, CSS3, and Vanilla JavaScript. Git and GitHub are used to manage source code and track project updates.

For questions, suggestions, or contributions, use the repository's GitHub Issues or the contact options provided by the project.
