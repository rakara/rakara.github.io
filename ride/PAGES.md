# TickRide PWA - Pages Overview

This document provides an overview of all pages in the TickRide Progressive Web App and their functionality.

## 📱 Main Application Pages

### 1. **index.html** - Home / Dashboard
**Purpose**: Main landing page where users request rides

**Features**:
- User greeting with personalized name (Wanjiku)
- Map preview showing current location (Westlands, Nairobi)
- Pickup and destination search inputs
- Saved location shortcuts (Home, Work, Saved)
- Quick actions:
  - Repeat Trip (links to Activity page)
  - Schedule (for booking future rides)
  - Share Ride (for carpooling)
- Ride type selector with 4 options:
  - TickX (Economy) - KSh 450
  - TickShare (Shared) - KSh 280
  - TickXL (6 seats) - KSh 680
  - TickPremium (Luxury) - KSh 900
- Promotional offers with copy-to-clipboard code
- Main CTA button to request selected ride
- Bottom navigation to all sections

**Key Interactions**:
- Click ride cards to select ride type
- Click promo code to copy to clipboard
- Request ride button shows loading → success states
- Navigation between main app sections

---

### 2. **activity.html** - Ride History
**Purpose**: View all past and current trips

**Features**:
- Statistics cards showing:
  - Total rides (24)
  - Total distance (348km)
  - Average rating (4.9★)
- Filter tabs:
  - All Trips
  - Completed
  - Cancelled
  - This Month
  - Last Month
- Recent trip cards showing:
  - Trip date and time
  - Trip status (Completed/Cancelled)
  - Pickup and dropoff locations with addresses
  - Ride type and vehicle icon
  - Trip price in KSh
- Visual indicators (green for pickup, blue for dropoff)

**Sample Trips Displayed**:
1. Westlands → CBD (TickX, KSh 450) - Today
2. Kilimani → Karen (TickShare, KSh 680) - Yesterday
3. Parklands → Upperhill (TickPremium, KSh 900) - Feb 9
4. Westlands → Gigiri (TickXL, KSh 350) - Cancelled

**Key Interactions**:
- Filter trips by status or date
- Click trip cards to view full trip details
- View route history on map

---

### 3. **payment.html** - Payment Methods & Transactions
**Purpose**: Manage payment methods and view transaction history

**Features**:
- Wallet balance card with gradient background:
  - Current balance display (KSh 2,450)
  - Top Up button
  - Withdraw button
- Payment methods section:
  - M-PESA (Default) - •••• •••• 4562
  - Visa Card - •••• •••• •••• 8901
  - Cash payment option
  - "Add New" button
- Recent transactions list:
  - Trip payments (debit in red)
  - Wallet top-ups (credit in green)
  - Promo credits
  - Date/time stamps
  - Transaction amounts

**Key Interactions**:
- Select default payment method
- Add new payment methods
- Top up wallet balance
- Withdraw funds
- View transaction details

---

### 4. **account.html** - User Profile & Settings
**Purpose**: Manage user profile and app settings

**Features**:
- Profile card:
  - User avatar (WK)
  - Name (Wanjiku)
  - Phone number (+254 712 345 678)
  - Rating (4.9★)
  - Edit Profile button

- **Account Settings**:
  - Personal Information
  - Saved Places
  - Notifications
  - Privacy & Security

- **Ride Preferences**:
  - Ride Settings
  - Music Preferences

- **Support & Legal**:
  - Help & Support
  - Legal (Terms, Privacy)
  - About TickRide (v1.0.0)

- Logout button (red-themed)

**Key Interactions**:
- Edit profile information
- Navigate to settings subpages
- Logout with confirmation

---

### 5. **login.html** - User Login
**Purpose**: Authenticate existing users

**Features**:
- TickRide logo and tagline
- Welcome back message
- Login form:
  - Phone number input
  - Password input
  - "Forgot Password?" link
  - Login button
- Social login options:
  - Phone authentication
  - Biometric login
  - Social accounts
- "Sign Up" link for new users

**Key Interactions**:
- Enter credentials and login
- Password recovery
- Social login
- Navigate to signup

---

### 6. **signup.html** - User Registration
**Purpose**: Create new user accounts

**Features**:
- TickRide logo
- Registration form:
  - Full Name
  - Email Address
  - Phone Number
  - Password
  - Confirm Password
  - Terms & Conditions checkbox
  - Create Account button
- Link to login page for existing users

**Key Interactions**:
- Fill registration form
- Accept terms and conditions
- Create account
- Navigate to login

---

## 🎨 Design System

### Color Palette
- **Primary Background**: #0a0a0a (Near black)
- **Secondary Background**: #141414 (Dark gray)
- **Tertiary Background**: #1e1e1e (Lighter gray)
- **Primary Text**: #ffffff (White)
- **Secondary Text**: #a0a0a0 (Gray)
- **Primary Accent**: #00ff88 (Neon green)
- **Secondary Accent**: #00ccff (Cyan)
- **Gradient**: Linear gradient from green to cyan
- **Danger**: #ff3366 (Red for cancellations/logout)

### Typography
- **Primary Font**: Outfit (300, 400, 500, 600, 700, 800)
- **Monospace Font**: JetBrains Mono (for prices, codes, phone numbers)

### UI Components
- **Cards**: Rounded corners (16-24px), subtle borders, hover effects
- **Buttons**: Gradient backgrounds, shadow on hover, smooth transitions
- **Icons**: Emoji-based for quick recognition
- **Inputs**: Dark backgrounds with focus states
- **Navigation**: Sticky header, bottom nav with active states

---

## 🔄 Navigation Flow

```
login.html / signup.html
         ↓
    index.html (Home)
    ↙️    ↓    ↘️
activity  payment  account
```

### Bottom Navigation (Present on all main pages)
1. 🏠 Home → index.html
2. 🗓️ Activity → activity.html
3. 💳 Payment → payment.html
4. 👤 Account → account.html

---

## 📍 Kenyan Localization

All pages include:
- **Currency**: Kenyan Shilling (KSh) formatting
- **Locations**: Nairobi-specific (Westlands, CBD, Karen, etc.)
- **Phone Numbers**: +254 format
- **Timezone**: East Africa Time (EAT)
- **Language**: English (en-KE locale)

---

## 🚀 PWA Features

All pages support:
- **Offline Access**: Service worker caching
- **Responsive Design**: Mobile-first approach (max-width: 480px)
- **Fast Loading**: Optimized assets
- **Installable**: Add to home screen
- **Push Notifications**: Ready for implementation

---

## 🔮 Future Pages (Not Yet Implemented)

The following pages are referenced but not yet created:

1. **Trip Details**: Full trip information with map
2. **Schedule Ride**: Book rides in advance
3. **Share Ride**: Invite friends to share rides
4. **Saved Places**: Manage home, work, favorites
5. **Notifications Settings**: Configure alerts
6. **Privacy Settings**: Data and security options
7. **Help & Support**: FAQs and contact
8. **Promo Codes**: View and apply promotions
9. **Referral**: Invite friends program
10. **Driver Profile**: View driver details during ride

---

## 📊 Page Statistics

- **Total Pages Created**: 6
- **Total HTML Files**: 6
- **Lines of Code**: ~1,500+ (across all pages)
- **Design Consistency**: 100% (same design system)
- **Mobile Optimized**: Yes (all pages)
- **PWA Ready**: Yes (all pages)

---

## 🛠️ Technical Implementation

### Shared Components
All pages share:
- Same CSS variables and design tokens
- Consistent header structure
- Bottom navigation (main pages)
- Back button (subpages)
- Smooth transitions and animations
- Glassmorphism effects
- Responsive grid layouts

### JavaScript Features
- Payment method selection
- Filter tab switching
- Form validation (ready)
- Clipboard operations
- Navigation handling
- Logout confirmation
- Ripple effects

---

## 📝 Notes for Developers

### Adding New Pages
1. Use the same HTML structure
2. Import Outfit and JetBrains Mono fonts
3. Include CSS variables from existing pages
4. Add bottom navigation if it's a main section
5. Add back button if it's a subpage
6. Maintain 480px max-width container
7. Use consistent spacing (24px padding)
8. Follow the color scheme exactly

### Best Practices
- Keep pages under 500 lines for maintainability
- Use semantic HTML
- Add transition effects on interactive elements
- Include hover states for better UX
- Test on mobile devices
- Ensure accessibility (ARIA labels)
- Optimize images and assets

---

## 🎯 User Journey Examples

### New User Journey
1. Visit app → **login.html**
2. Click "Sign Up" → **signup.html**
3. Register account → **index.html**
4. Book first ride → Activity logged
5. View history → **activity.html**
6. Add payment → **payment.html**
7. Customize settings → **account.html**

### Regular User Journey
1. Open app → **index.html**
2. Select ride type
3. Request ride
4. Track driver (future feature)
5. Complete trip
6. View in **activity.html**
7. Payment auto-processed

### Account Management Journey
1. Open app → **index.html**
2. Navigate to **account.html**
3. Edit profile
4. Update payment → **payment.html**
5. View trip history → **activity.html**
6. Logout

---

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 480px (primary target)
- **Tablet**: 481px - 768px (scales up)
- **Desktop**: 769px+ (centered with max-width)

---

This documentation will be updated as new pages and features are added to TickRide.
