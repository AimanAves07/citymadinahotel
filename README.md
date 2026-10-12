# City Madina Restaurant — Official Website

Official website for **City Madina Restaurant** (also known as **City Madina Hotel**), located in Channapatna, Karnataka, India.

## 📋 Official Menu & Pricing (Transcribed from In-Restaurant Menu)

All dishes and prices are exact to the official restaurant cards:

- **Roti & Parota:** Kerala Parota (₹20), Ceylon Parota (₹30), Rumali Roti (₹20)
- **Rice & Biryani:** Chicken Biryani (₹160), Mutton Biryani (₹230), Ghee Rice (₹80 / Half ₹50), Biryani Rice (₹100 / Half ₹70), Chicken Fried Rice (₹170), Egg Fried Rice (₹140), Veg Fried Rice (₹120)
- **Starters & Grilled:** Chicken Kabab (Full ₹240 / Half ₹120), Chicken Grilled (Full ₹470 / Half ₹240), Chicken Leg Piece (₹70), Chicken Lollipop (Full ₹400 / Half ₹200)
- **Chicken Gravy:** Chicken Masala (₹200), Chicken Kadai (₹200), Chicken Hyderabadi (₹200), Chicken Kolhapuri (₹200), Chicken Patiala (₹200), Chicken Khurma (₹200), Butter Chicken (₹200), Chicken Kalimirch (₹200)
- **Chicken Dry:** Chicken Manchurian (₹200), Chicken 65 (₹200), Chicken Pepper Dry (₹200), Chicken Chilly (₹200), Lemon Chicken (₹200), Dragon Chicken Boneless (Full ₹440 / Half ₹220)
- **Special Dry:** Teetar Fry (₹200), Teetar Pepper Dry (₹250), Junglee Murg [Chicken] (₹400)
- **Shawarma:** Shawarma Roll (₹90), Shawarma Roll Special (₹120), Shawarma Roll Jumbo (₹150), Cheese Shawarma (₹110), Schezwan Shawarma (₹110), Shawarma with Cheese Special (₹130), Plate Shawarma (₹140), Paneer Shawarma (₹100), Paneer Schezwan Shawarma (₹120)
- **Mutton Gravy & Dry:** Mutton Masala (₹230), Mutton Kadai (₹230), Mutton Hyderabadi (₹230), Mutton Kolhapuri (₹230), Mutton Patiala (₹230), Mutton Khurma (₹230), Mutton Kalimirchi (₹230), Mutton Pepper Dry (₹230)
- **Paneer Gravy:** Paneer Butter Masala (₹170), Paneer Kadai (₹170), Paneer Khurma (₹170), Paneer Hyderabadi (₹170), Paneer Kolhapuri (₹170), Paneer Patiala (₹170)
- **Paneer Dry:** Paneer Manchurian (₹180), Paneer Chilly (₹180), Paneer 65 (₹180), Paneer Pepper Dry (₹180)
- **Cold Drinks & Water:** Cold Drink 300 ml (₹20), Cold Drink 450 ml (₹40), Cold Drink 1 Litre (₹50), Cold Drink 2.2 Litre (₹100), Mineral Water 1 Litre (₹20)

---

## 🚀 Key Features

1. **Brand-Focused Aesthetic:**
   - **Background (`bg`):** `#F8F7FF` (soft lavender canvas)
   - **Primary (`primary`):** `#A78BFA` (violet/purple interactive tone)
   - **Accent (`accent`):** `#5EEAD4` (fresh teal highlights & WhatsApp ordering)
   - **Text (`text`):** `#2D2A4A` (deep indigo readability)
   - **Typography:** `Playfair Display` (editorial serif) + `Plus Jakarta Sans` (modern clean body)
2. **Interactive Ordering & WhatsApp Cart:**
   - Add/remove dishes, quantity adjustments, live subtotal in ₹.
   - Generates a pre-formatted WhatsApp message sent directly to the restaurant's home delivery line (+91 7204409745).
   - Delivery address and notes capture with transparent order request disclaimer.
3. **Menu Categorization & Search:**
   - Filter by Roti, Rice & Biryani, Starters, Chicken Gravies, Grilled & Dry, Mutton, Paneer & Veg, and Cold Drinks.
   - Live search by dish name or ingredient.
   - Veg / Non-Veg dietary filters.
4. **Food Gallery & Lightbox:**
   - High-resolution food photography showcasing biryanis, grilled chicken, mutton specialties, and paneer dishes with keyboard navigation (Arrows, Escape).
5. **SEO & Local Search Optimization:**
   - Custom meta title, descriptions, OpenGraph card tags, and Schema.org `Restaurant` JSON-LD structured data with opening hours, geolocation cues, and phone numbers.
6. **Mobile-First Responsive Layout:**
   - Sticky navigation with mobile hamburger drawer and click-to-call buttons.
   - Interactive Google Maps embed and directions links.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React

---

## 💻 Local Setup & Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 📝 How to Update Menu Items & Prices

All dishes and prices are centralized in:
`src/data/restaurantData.ts`

To add, edit, or adjust a price:
1. Open `src/data/restaurantData.ts`.
2. Locate the `MENU_ITEMS` array.
3. Edit the dish's `price`, `name`, `description`, or `category`.
   Example:
   ```typescript
   {
     id: 'b1',
     name: 'Chicken Biryani',
     category: 'biryani',
     price: 160, // Update price here
     description: 'Aromatic basmati dum biryani...',
     isVeg: false,
   }
   ```
4. Save the file and rebuild with `npm run build`.

---

## 🌐 Deployment Instructions

### Vercel
1. Push code to GitHub repository.
2. Import project in [Vercel](https://vercel.com).
3. Framework Preset: `Vite`.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.

### Netlify
1. Connect your repository in [Netlify](https://netlify.com).
2. Build command: `npm run build`.
3. Publish directory: `dist`.

### GitHub Pages
1. Set `"base": "./"` in `vite.config.ts`.
2. Run `npm run build`.
3. Deploy the generated `dist` folder to GitHub Pages via gh-pages or GitHub Actions.
