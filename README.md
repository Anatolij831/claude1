# LUMA·SKIN — LED Maske Online-Shop

Moderne, responsive Produkt-/Shopseite für eine **LED-Lichttherapie-Gesichtsmaske**
(8-Farben Lichttherapie, kabellos, 10–15 Min Anwendung/Tag).

Inspiriert vom Produkt „LED Maske Dripdeal – 8-Farben Lichttherapie Gesichtsmaske".
Eigenständige Marke **LUMA·SKIN** mit eigenen, KI-generierten Medien.

## Aufbau

| Datei | Inhalt |
|-------|--------|
| `index.html` | Komplette Seite (Hero/Galerie, Buy-Box, Wirkung, 8 Lichtmodi, Video, Controller, Reviews, FAQ) |
| `styles.css` | Modernes Design, vollständig responsive, Animationen |
| `script.js` | Galerie, Variantenwahl, Mengenwahl, Lichtmodus-Glow, Sticky-Bar, Scroll-Reveal, Video-Autoplay |

## Medien

Alle Bilder und das Produktvideo wurden generiert mit:

- **GPT Image 2** (OpenAI) – Produkt- und Lifestyle-Bilder (2K, high quality)
- **Seedance 2.0** (ByteDance) – cinematisches Produktvideo (1080p, reference-driven mit Hero-Bild als Startframe)

Die Medien werden direkt von der Higgsfield-CDN (CloudFront) eingebunden.
Für einen Produktivbetrieb empfiehlt es sich, die Assets herunterzuladen und
lokal unter `assets/` zu hosten (die Sandbox-Netzwerk-Policy blockierte den
direkten Download während der Erstellung).

## Lokal ansehen

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Hinweis

Warenkorb-/PayPal-Buttons sind Demo-Platzhalter (kein echtes Checkout-Backend).
Preise, Bewertungszahlen und Aussagen dienen Demonstrationszwecken.
