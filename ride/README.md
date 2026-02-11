# TickRide - Uber-like Progressive Web App

A modern, sleek ride-sharing Progressive Web App built with HTML, CSS, and vanilla JavaScript. **Designed specifically for the Kenyan market** with localized currency (KSh), time zones (EAT), and location settings.

## Features

### 🇰🇪 Kenyan Market Features
- **Currency**: Kenyan Shilling (KSh) formatting
- **Timezone**: East Africa Time (EAT/Africa/Nairobi)
- **Locations**: Nairobi-based locations (Westlands, CBD, etc.)
- **Date/Time**: Localized formatting (en-KE locale)
- **Pricing**: Realistic Kenyan ride-sharing prices

### 🎨 Design
- **Dark theme** with vibrant neon gradients (cyan/green accent colors)
- **Custom typography** using Outfit and JetBrains Mono fonts
- **Smooth animations** throughout the interface
- **Glassmorphism effects** with backdrop blur
- **Responsive design** optimized for mobile devices

### 🚀 Functionality
- Search and set pickup/destination locations
- Choose from multiple ride options (Economy, Shared, XL, Premium)
- Quick action buttons for repeat trips and scheduling
- Promotional code display and copy functionality
- Interactive ride selection with dynamic pricing
- Bottom navigation for different app sections
- Real-time status updates simulation

### 📱 PWA Capabilities
- **Installable** - Add to home screen on mobile devices
- **Offline support** - Service worker caches essential resources
- **Push notifications** - Ready for ride status updates
- **App-like experience** - Standalone display mode
- **Fast loading** - Optimized assets and caching strategy

## File Structure

```
ride/
├── index.html          # Main application file
├── manifest.json       # PWA manifest configuration
├── sw.js              # Service worker for offline support
├── icons/             # App icons (PNG format)
│   ├── icon-72x72.png
│   ├── icon-96x96.png
│   ├── icon-128x128.png
│   ├── icon-144x144.png
│   ├── icon-152x152.png
│   ├── icon-192x192.png
│   ├── icon-384x384.png
│   ├── icon-512x512.png
│   ├── icon-512x512-maskable.png
│   ├── apple-touch-icon.png
│   ├── favicon.png
│   └── favicon.ico
├── README.md          # This file
└── DEPLOYMENT.md      # Deployment guide
```

**Deployment URL**: `https://rakara.github.io/ride`

## How to Use

### GitHub Pages Deployment
This PWA is configured to be hosted at `https://rakara.github.io/ride`

1. Push all files to the `ride` folder in your GitHub repository
2. Enable GitHub Pages in repository settings
3. Set the source to the branch containing the `ride` folder
4. Access your app at `https://rakara.github.io/ride`

### Local Development
### Local Development
1. Clone or download the repository
2. Serve the files using a local server:
   ```bash
   # Using Python
   cd ride
   python -m http.server 8000
   
   # Using Node.js
   cd ride
   npx serve .
   ```
3. Visit `http://localhost:8000/index.html`

**Note**: For local testing, you may need to temporarily update the service worker registration path in `index.html` from `/ride/sw.js` to `./sw.js`

### Install as PWA
1. Visit `https://rakara.github.io/ride` in Chrome/Edge on mobile or desktop
2. Look for the "Install" prompt or click the install icon in the address bar
3. Click "Install" to add TickRide to your home screen/app drawer

The app will work offline after installation thanks to the service worker!

## Customization

### Localization
The app uses Kenyan locale settings by default. To change:
```javascript
const LOCALE = 'en-KE';        // Change to your locale
const CURRENCY = 'KES';         // Change currency code
const TIMEZONE = 'Africa/Nairobi'; // Change timezone
```

### Colors
Edit CSS variables in the `:root` selector:
```css
--bg-primary: #0a0a0a;          /* Main background */
--accent-primary: #00ff88;       /* Primary accent (green) */
--accent-secondary: #00ccff;     /* Secondary accent (cyan) */
```

### Ride Options
Modify the ride cards in the HTML to add/remove options:
```html
<div class="ride-card">
    <div class="ride-icon">🚗</div>
    <div class="ride-name">Your Ride Name</div>
    <div class="ride-details">Details here</div>
    <div class="ride-price">$XX.XX</div>
</div>
```

### Branding
Change the app name by updating:
- `<div class="logo">` in the header
- `manifest.json` name and short_name fields
- Service worker CACHE_NAME

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Safari 14+
- ✅ Firefox 88+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid, Flexbox, animations
- **JavaScript (ES6+)** - Interactive functionality
- **Service Workers** - Offline support and caching
- **Web App Manifest** - PWA configuration
- **Google Fonts** - Outfit & JetBrains Mono typography

## Interactive Features

### Ride Selection
Click any ride card to select it. The selected ride becomes active and updates the CTA button.

### Promo Code
Click the promo code to copy it to your clipboard. Visual feedback confirms the copy action.

### Navigation
Bottom navigation allows switching between Home, Activity, Payment, and Account sections.

### Request Ride
The main CTA button simulates finding a driver with loading states and success messages.

## Performance

- First paint: < 1s
- Interactive: < 1.5s
- Smooth 60fps animations
- Optimized asset loading
- Efficient CSS with hardware acceleration

## Future Enhancements

- Real-time map integration (Google Maps/Mapbox)
- Live driver tracking
- Payment processing integration
- Ride history and receipts
- Multi-language support
- Dark/light theme toggle
- Backend API integration
- Real-time WebSocket updates

## License

MIT License - Feel free to use this as a template for your projects!

## Credits

Designed and developed as a modern take on ride-sharing apps with a focus on aesthetics and user experience.
