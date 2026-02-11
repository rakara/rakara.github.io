# TickRide - GitHub Pages Deployment Guide

## Quick Deployment Steps

### 1. Repository Setup
Ensure you have a GitHub repository (e.g., `rakara/rakara.github.io`)

### 2. Upload Files
Place all files in a folder named `ride` in your repository:
```
rakara.github.io/
└── ride/
    ├── index.html
    ├── manifest.json
    ├── sw.js
    ├── icons/              # All icon files
    │   ├── icon-*.png
    │   ├── favicon.ico
    │   └── apple-touch-icon.png
    ├── README.md
    └── DEPLOYMENT.md
```

**Important**: Make sure to upload the entire `icons` folder with all PNG files!

### 3. Enable GitHub Pages
1. Go to your repository settings
2. Navigate to "Pages" section
3. Under "Source", select your branch (usually `main` or `master`)
4. Save the settings

### 4. Access Your App
Your PWA will be available at: `https://rakara.github.io/ride`

## Verification Checklist

After deployment, verify the following:

✅ **App Loads**: Visit `https://rakara.github.io/ride` and ensure the app displays correctly

✅ **Icons Load**: Check that the TickRide icon appears in browser tabs and bookmarks

✅ **Service Worker**: Open DevTools → Application → Service Workers and verify registration

✅ **Manifest**: Check DevTools → Application → Manifest to ensure it loads properly
   - Name should show "TickRide - Ride Sharing Kenya"
   - All icon sizes should be listed (72x72 through 512x512)
   - Start URL should be "/ride/"

✅ **Install Prompt**: On mobile/desktop Chrome, verify the install prompt appears
   - Look for "Install TickRide" prompt
   - Icon should display in the install dialog

✅ **Offline Mode**: Install the app, then turn off internet - the app should still work

✅ **Currency Display**: Verify all prices show in KSh (Kenyan Shillings)

✅ **Timezone**: Check that times display in East Africa Time (EAT)

✅ **Android Installation**: On Android, the app should install as a full PWA, not just a shortcut
   - Icon should appear in app drawer
   - App should open in standalone mode (no browser UI)
   - App should appear in system settings under "Apps"

## PWA Installation Requirements (Android)

For proper Android installation (not just shortcuts):

✅ **HTTPS Required**: GitHub Pages provides this automatically

✅ **Manifest File**: Must include:
   - `name` and `short_name`
   - At least one icon 192x192 or larger
   - `start_url` and `display: standalone`
   - Proper scope configuration

✅ **Service Worker**: Must be registered and active

✅ **Icons**: Multiple sizes required (we provide 72x72 through 512x512)
   - Maskable icon included for Android adaptive icons
   - PNG format (not SVG) for better compatibility

✅ **User Engagement**: User must engage with site before install prompt appears

## Troubleshooting

### Service Worker Not Registering
- Ensure GitHub Pages is enabled and the site is live
- Check browser console for errors
- Verify the service worker path is `/ride/sw.js`

### Manifest Not Loading
- Confirm manifest.json is in the same directory as index.html
- Check that the manifest link in index.html is correct
- Verify JSON syntax is valid

### App Not Installing
- PWAs require HTTPS (GitHub Pages provides this automatically)
- Clear browser cache and try again
- Check that manifest.json has all required fields

### Local Testing
For local development, temporarily change the service worker registration:

**In index.html**, change:
```javascript
navigator.serviceWorker.register('/ride/sw.js')
```

To:
```javascript
navigator.serviceWorker.register('./sw.js')
```

**Remember to change it back before pushing to GitHub!**

## Updating the App

After making changes:

1. Update the cache version in `sw.js`:
   ```javascript
   const CACHE_NAME = 'tickride-v2'; // Increment version
   ```

2. Push changes to GitHub

3. GitHub Pages will automatically deploy updates

4. Users will receive the update when they next open the app

## Performance Tips

- Images and assets are already optimized
- Service worker caches resources for fast loading
- App uses minimal external dependencies
- All animations use CSS for better performance

## Support

For issues or questions about deployment:
- Check GitHub Pages documentation: https://docs.github.com/en/pages
- Verify PWA requirements: https://web.dev/progressive-web-apps/
- Test with Lighthouse in Chrome DevTools

---

**Note**: The first deployment may take a few minutes to propagate. Be patient and clear your browser cache if needed.
