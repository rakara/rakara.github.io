# TickRide PWA - Installation Checklist

This document helps you verify that TickRide is properly configured as a Progressive Web App and will install correctly on Android devices (not just as a shortcut).

## ✅ Pre-Deployment Checklist

### Required Files
- [x] `index.html` - Main application file
- [x] `manifest.json` - Web app manifest
- [x] `sw.js` - Service worker
- [x] `icons/` folder with all PNG files (72x72 to 512x512)
- [x] Favicon and Apple touch icon

### Manifest Configuration
- [x] `name`: "TickRide - Ride Sharing Kenya"
- [x] `short_name`: "TickRide"
- [x] `start_url`: "/ride/"
- [x] `scope`: "/ride/"
- [x] `display`: "standalone"
- [x] `theme_color` and `background_color` set to "#0a0a0a"
- [x] Multiple icon sizes (72, 96, 128, 144, 152, 192, 384, 512)
- [x] Maskable icon for Android adaptive icons
- [x] `purpose: "any"` for standard icons
- [x] `purpose: "maskable"` for adaptive icon
- [x] Categories, language, and direction specified

### Service Worker
- [x] Registered at `/ride/sw.js`
- [x] Caches essential resources
- [x] Handles offline fallback
- [x] Cache name: `tickride-v1`
- [x] Base path configured for GitHub Pages: `/ride`

### HTML Head
- [x] Manifest link: `<link rel="manifest" href="manifest.json">`
- [x] Theme color meta tag
- [x] Favicon links (ICO and PNG)
- [x] Apple touch icon link
- [x] Viewport meta tag for mobile

## 🧪 Testing Checklist

### Desktop Testing (Chrome/Edge)
1. Open DevTools (F12)
2. Go to **Application** tab
3. Check **Manifest** section:
   - Name should show "TickRide - Ride Sharing Kenya"
   - All 9 icons should be listed
   - Installable should show "Yes"
4. Check **Service Workers** section:
   - Should show `sw.js` as activated and running
5. Check **Storage** section:
   - Cache Storage should show `tickride-v1`
6. Click the install icon in address bar
7. Verify TickRide icon appears in install dialog
8. Install and verify app opens in standalone window

### Mobile Testing (Android)
1. Visit `https://rakara.github.io/ride` in Chrome
2. Tap the three-dot menu
3. Look for "Install TickRide" or "Add to Home screen"
4. Install the app
5. **CRITICAL CHECK**: Verify full installation:
   - App appears in app drawer (not just home screen)
   - App icon shows TickRide hexagon logo
   - Opening app shows NO browser UI (no address bar)
   - App appears in system Settings → Apps
   - Long-press icon shows "App info" not "Remove"

### Offline Testing
1. Install the app
2. Open the app
3. Turn off WiFi/mobile data
4. Close and reopen the app
5. Verify app loads successfully offline
6. Check that cached content displays

### Icon Testing
1. After installation, check icon quality:
   - Should show hexagon with gradient (green to cyan)
   - Should have tick mark in center
   - Should not appear pixelated or blurry
   - On Android 8+, icon should adapt to system shape

### Functionality Testing
1. **Currency**: All prices show KSh (not $)
2. **Location**: Shows Nairobi locations
3. **Timezone**: Times display in EAT
4. **User name**: Greeting shows "Wanjiku"
5. **Ride selection**: Clicking rides updates selection
6. **CTA button**: Shows loading then success state
7. **Promo code**: Copies to clipboard when clicked
8. **Navigation**: Bottom nav switches active state

## 🐛 Troubleshooting

### "Add to Home screen" instead of "Install app"
**Problem**: Android shows shortcut option, not full install
**Solutions**:
- Clear browser cache and try again
- Ensure all icon files uploaded correctly
- Check manifest has `display: "standalone"`
- Verify service worker is active (check DevTools)
- Make sure you're on HTTPS (GitHub Pages does this)

### Icons not appearing
**Problem**: Generic icon shows instead of TickRide logo
**Solutions**:
- Verify all icon files in `/icons/` folder uploaded
- Check manifest.json paths: `/ride/icons/icon-*.png`
- Ensure PNG format (not JPEG or WebP)
- Check icon files aren't corrupted
- Hard refresh the page (Ctrl+Shift+R)

### Service Worker not registering
**Problem**: Cache not working, no offline support
**Solutions**:
- Check browser console for errors
- Verify path: `/ride/sw.js` is correct
- Make sure file uploaded to correct location
- Check GitHub Pages is enabled and live
- Try unregister old SW and refresh

### App not working offline
**Problem**: Blank screen when offline
**Solutions**:
- Check service worker is active
- Verify cache includes essential files
- Test with DevTools → Application → Service Workers → "Offline" checkbox
- Check sw.js has correct BASE_PATH

### Manifest errors in DevTools
**Problem**: DevTools shows manifest warnings
**Solutions**:
- Validate JSON syntax (no trailing commas)
- Check all icon paths are absolute: `/ride/icons/...`
- Ensure all required fields present
- Verify start_url matches actual URL

## 📱 Platform-Specific Notes

### Android
- Requires Chrome 76+ for full PWA install
- Icons must be PNG (SVG not supported in manifest)
- Maskable icon enables adaptive icons on Android 8+
- App will appear in launcher and system settings

### iOS/Safari
- iOS 16.4+ supports PWA installation
- Uses apple-touch-icon for home screen
- Limited service worker support
- "Add to Home Screen" is the install method

### Desktop (Windows/Mac/Linux)
- Chrome, Edge support full PWA installation
- Apps appear in Start Menu/Applications folder
- Can be launched from desktop/taskbar
- Runs in standalone window

## 🎯 Success Criteria

Your PWA is properly installed when:

✅ App opens in standalone mode (no browser UI)
✅ App appears in system app drawer/launcher
✅ App appears in Settings → Apps (Android)
✅ TickRide icon displays correctly (not generic)
✅ App works offline after installation
✅ Manifest passes all DevTools checks
✅ Service worker is active and caching
✅ Install prompt appears automatically

## 📊 Validation Tools

Use these tools to validate your PWA:

1. **Lighthouse** (Chrome DevTools)
   - Run audit in "Progressive Web App" category
   - Should score 90+ for production PWA

2. **PWA Builder** (pwabuilder.com)
   - Enter your URL: `https://rakara.github.io/ride`
   - Check PWA score and recommendations

3. **Web.dev Measure**
   - Test PWA compliance
   - Get detailed improvement suggestions

## 🔄 Update Process

When updating the PWA:

1. Increment cache version in `sw.js`:
   ```javascript
   const CACHE_NAME = 'tickride-v2'; // v1 → v2
   ```

2. Push changes to GitHub

3. Users get update on next app launch

4. Old cache automatically cleared

---

**Need Help?** Check the DEPLOYMENT.md guide or GitHub Pages documentation.
