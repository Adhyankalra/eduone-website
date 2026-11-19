# EDUONE – Complete School Solutions
## Premium Corporate Website for Educational Procurement & Infrastructure

**Tagline:** *Everything Your School Needs, Under One Roof.*  
**Target Audience:** School owners, principals, trustees, administrative directors, procurement heads and IT managers of private schools in Delhi NCR, India.

---

## 1. Brand Identity & Design System

EDUONE is designed with an institutional, enterprise-grade aesthetic (McKinsey / Tata / Cisco B2B style) reflecting reliability, operational discipline, and transparency.

### Exact Brand Palette
- **Dominant Brand Navy:** `#12345A` (Headers, hero accents, deep corporate sections)
- **Dark Navy:** `#0D2744` (Footer, top utility bar)
- **Action Green:** `#16A36A` (Primary CTA buttons, badges, status indicators)
- **Very Light Green:** `#EAF6EF` (Tag backgrounds, check chips)
- **Light Grey:** `#F3F6FA` (Alternating section backgrounds)
- **Light Blue:** `#EAF0F7` (Container tints, icon backgrounds)
- **Charcoal Text:** `#202B38` (High-contrast, readable body copy)
- **Secondary Slate:** `#64748B` (Descriptions, subtitles)
- **Border Grey:** `#E2E8F0` (Crisp 1px card and section borders)
- **White:** `#FFFFFF` (Primary backgrounds)

### Strict Aesthetic Principles
- **No Unnecessary Gradients:** 100% solid, premium colour blocking.
- **No Fake Claims:** Zero fabricated client logos, testimonials or unverified statistics.
- **Controlled Radius System:** Buttons (6–8px), Cards (10–12px), Panels (12–16px).
- **Institutional Tone:** Focus on single point of contact, vendor coordination, verified specifications and continued AMC support.

---

## 2. Completed Pages & Architecture

The website includes 10 fully implemented pages and system routes:

1. **Home (`/`)**:
   - Institutional top utility bar with regional coverage & direct contacts
   - Two-column hero with value proposition, dual CTAs, and trust statement
   - Introduction with 3 core value propositions (Simplified Procurement, Integrated Solutions, Ongoing Support)
   - Category portfolio with 5 sophisticated service cards + 1 custom RFP card
   - "Why Choose EDUONE" with comparative 4-pillar benefits
   - 5-step horizontal process timeline (desktop) / vertical timeline (mobile)
   - Institutional coverage breakdown (CBSE, ICSE, International, Chains)
   - Solid Navy CTA section

2. **About EDUONE (`/about`)**:
   - Corporate profile explaining why EDUONE was established
   - The integrated procurement coordination model
   - Official Mission & Vision statements
   - 3-pillar procurement philosophy
   - Side-by-side comparison: Traditional fragmented vendors vs. EDUONE model

3. **Student Essentials (`/solutions/student-essentials`)**:
   - Uniforms (Summer, Winter, Sports, House jerseys)
   - Shoes & Socks (Formal leather, sneakers, ribbed socks)
   - Ergonomic school bags & backpacks
   - Woven jacquard ties, belts & enamel house badges
   - Standardized academic notebooks & exam stationery
   - RFID & barcode student identity cards

4. **IT & Digital Infrastructure (`/solutions/it-infrastructure`)**:
   - Commercial desktops & laptops for labs and administration
   - Turnkey computer laboratory setup (modular furniture, cable raceways, UPS)
   - 4K interactive smart boards & digital touch panels
   - Examination duplex printers and OMR scanners
   - Campus servers, RAID storage & automated cloud backup
   - School ERP & student management software setup

5. **Security & Surveillance (`/solutions/security-surveillance`)**:
   - High-definition IP CCTV systems with night vision
   - Regulatory-compliant NVR video retention (30–90 days)
   - Touchless biometric facial recognition & fingerprint terminals
   - Turnstiles, boom barriers & access control
   - Digital visitor management kiosks with photo & OTP logging

6. **Networking Solutions (`/solutions/networking-solutions`)**:
   - Structured Cat6/Fiber optic backbone between campus blocks
   - Campus-wide high-density Wi-Fi 6 access points
   - Layer 2 & Layer 3 managed PoE+ switches & dual-WAN routers
   - Next-generation firewalls with student safe browsing & content filtering

7. **AMC & Technical Support (`/solutions/amc-support`)**:
   - Comprehensive & non-comprehensive Annual Maintenance Contracts
   - Scheduled computer lab servicing during vacations
   - Smart board, projector & CCTV diagnostic health checks
   - Exam-period standby technician coverage
   - Full-time resident campus IT engineer stationing

8. **Our Process (`/process`)**:
   - Full 9-stage customer journey with documented deliverables and quality gates
   - Stages: Requirement Discussion → Site Visit → Product Recommendations → Quotation → Purchase Order → Procurement & Quality Verification → Delivery & Installation → Administrative Handover → Warranty & AMC

9. **Contact Us (`/contact`)**:
   - Institutional enquiry form with real-time validation
   - Multi-category solution selector
   - Delhi NCR office details, regional helpline, and official email
   - Instant WhatsApp messaging link with pre-filled message

10. **Request a Quote (`/quote`)**:
    - Dedicated 4-phase institutional RFP form
    - Institution details, affiliation (CBSE, ICSE, IB), timeline selector
    - Detailed requirement text area + optional document/BOQ upload simulator
    - Immediate confirmation and summary modal

11. **System Pages & Utilities**:
    - Custom 404 Page (`/not-found.tsx`)
    - Dynamic XML Sitemap (`/sitemap.xml`)
    - Robots.txt (`/robots.txt`)
    - Code-generated Favicon (`/icon`)
    - REST API Route for Enquiry Processing (`/api/enquiry`)

---

## 3. Technology Stack

- **Framework:** Next.js 14 (App Router, React 18, TypeScript)
- **Styling:** Tailwind CSS with custom institutional design tokens
- **Icons:** Lucide React
- **Typography:** Native high-performance system typography stack (Inter, system-ui, -apple-system)
- **Runtime:** Node.js v20+

---

## 4. How to Run Locally

### Prerequisites
- Node.js (v18.0.0 or later)
- npm (v9.0.0 or later)

### Running Development Server
```bash
# Navigate to the project directory
cd /Users/adhyankalra/.gemini/antigravity/scratch/eduone

# Start development server
npm run dev
```
Open `http://localhost:3000` in your browser.

### Building for Production
```bash
# Run production build
npm run build

# Start production server
npm run start
```

---

## 5. Configuration Guide

### Configuring Contact Details
Open `lib/constants.ts` to adjust phone numbers, official email addresses, coverage areas, or WhatsApp numbers:

```typescript
export const SITE_CONFIG = {
  name: "EDUONE",
  fullName: "EDUONE – Complete School Solutions",
  email: "cyber.itsolutions@gmail.com",
  phone: "+91 98110 99529",
  whatsappNumber: "919811099529",
  address: "Institutional Area, Delhi NCR, India",
  coverage: "Delhi • Noida • Gurugram • Faridabad • Ghaziabad",
  // ...
};
```

### Connecting the Enquiry & Quote Forms
Both forms submit to `/api/enquiry` via `POST`. To forward submissions to an institutional mailbox or CRM:

Open `app/api/enquiry/route.ts`:
```typescript
// Replace console logging with your email provider (e.g., Resend, SendGrid, or Nodemailer):
// import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);
// await resend.emails.send({ ... });
```

---

## 6. Production Deployment

### Deploying to Vercel
1. Push the code to a Git repository (GitHub / GitLab / Bitbucket).
2. Import the project into [Vercel](https://vercel.com).
3. Framework preset will automatically detect Next.js.
4. Deploy! Zero additional configuration required.

### Deploying to a Self-Hosted Node.js Server (AWS / DigitalOcean / VPS)
```bash
npm run build
NODE_ENV=production npm run start -p 8080
```
Or manage via PM2:
```bash
pm2 start npm --name "eduone-website" -- start
```
