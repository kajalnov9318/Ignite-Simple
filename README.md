# IGNITE 2026: Cape Town Program Page

Yeh IGNITE 2026 event (Cape Town, 10-13 September 2026) ka ek page hai.
Ise **HTML + Tailwind CSS + JavaScript** se banaya gaya hai, aur **Vite** isko chalata hai.

## Kaise chalayein

```bash
cd ~/Desktop/ignite-simple
npm install      # sirf pehli baar (packages download)
npm run dev      # browser mein http://localhost:5173 kholo
```

Band karna ho toh terminal mein `Ctrl + C` dabao.

Final files banani hon (submit ya host karne ke liye):
```bash
npm run build    # dist/ folder banega
npm run preview  # dist/ wala page check karo
```

## Folder structure

```
ignite-simple/
├── index.html            → Lucide icons script + ek khali <div id="app">
├── vite.config.js        → Vite ko Tailwind plugin dena
├── package.json          → packages ki list aur commands (dev, build)
├── public/
│   ├── header.jpeg       → hero image
│   └── favicon.svg       → browser tab ka icon
└── src/
    ├── main.js           → saare components jod ke page banata hai
    ├── style.css         → sirf Tailwind import
    ├── data.js           → saara text/data (days, activities, weather)
    └── components/       → har section ki alag file
        ├── Header.js
        ├── InfoCard.js
        ├── WeatherStrip.js
        ├── Itinerary.js
        ├── DayCard.js
        └── Footer.js
```

## Poora flow ek nazar mein

```
Browser index.html kholta hai (sirf khali <div id="app">)
   ▼
<script src="/src/main.js"> chalta hai
   │
   ├─► style.css import → Tailwind classes lag gayi
   ├─► data.js se data liya
   ├─► Header() + InfoCard() + WeatherStrip() + Itinerary() + Footer()
   │     → sab HTML text jud ke #app mein daala
   └─► lucide.createIcons() → data-lucide="..." wale icons dikhne lagte hain
```

**React use nahi hua.** Yeh plain HTML + Tailwind CSS + vanilla JavaScript hai.
"Component" yahan sirf ek normal JS function hai jo HTML ka text return karta hai.
