export const SITE_CONFIG = {
  name: "EDUONE",
  fullName: "EDUONE – Complete School Solutions",
  descriptor: "COMPLETE SCHOOL SOLUTIONS",
  tagline: "Everything Your School Needs, Under One Roof.",
  positioning:
    "One reliable partner for your school's procurement, infrastructure, technology and ongoing support requirements.",
  shortDescription:
    "EDUONE is an integrated procurement and technology solutions partner for private schools and educational institutions in Delhi NCR, India.",
  region: "Delhi NCR, India",
  coverage: "Delhi • Noida • Gurugram • Faridabad • Ghaziabad",
  email: "cyber.itsolutions@gmail.com",
  phone: "+91 98110 99529",
  whatsappNumber: "919811099529",
  whatsappDefaultMessage: "Hello EDUONE, I would like to enquire about school procurement and infrastructure solutions.",
  address: "Delhi NCR, India",
};

export interface SolutionItem {
  id: string;
  title: string;
  shortTitle: string;
  slug: string;
  href: string;
  badge: string;
  summary: string;
  iconName: string;
  items: string[];
  heroImage: string;
  ctaText: string;
}

export const SOLUTIONS: SolutionItem[] = [
  {
    id: "student-essentials",
    title: "Student Essentials",
    shortTitle: "Student Essentials",
    slug: "student-essentials",
    href: "/solutions/student-essentials",
    badge: "Apparel & Stationery",
    summary:
      "Uniforms, footwear, bags, stationery and everyday student requirements coordinated to strict institution specifications.",
    iconName: "Shirt",
    items: [
      "School Uniforms (Summer, Winter & Sports)",
      "Shoes, Socks & Accessories",
      "School Bags & Custom Backpacks",
      "Belts, Ties & Custom Badges",
      "Classroom & Exam Stationery",
      "Student & Staff Identity Cards",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
    ctaText: "Enquire About Student Essentials",
  },
  {
    id: "it-infrastructure",
    title: "IT & Digital Infrastructure",
    shortTitle: "IT & Infrastructure",
    slug: "it-infrastructure",
    href: "/solutions/it-infrastructure",
    badge: "Hardware & Labs",
    summary:
      "Computers, laptops, printers, interactive smart boards, projectors and school management software setup.",
    iconName: "Monitor",
    items: [
      "Desktop Computers & Laptops for Labs & Admin",
      "High-Volume Printers & Document Scanners",
      "Interactive Smart Boards & Digital Panels",
      "Classroom & Auditorium Projectors",
      "School Management & ERP Software Setup",
      "Campus Servers, Storage & Backup Systems",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    ctaText: "Discuss Your IT Requirements",
  },
  {
    id: "security-surveillance",
    title: "Security & Surveillance",
    shortTitle: "CCTV & Security",
    slug: "security-surveillance",
    href: "/solutions/security-surveillance",
    badge: "Campus Safety",
    summary:
      "CCTV, IP cameras, access control, biometric attendance and visitor management designed around campus layouts.",
    iconName: "ShieldCheck",
    items: [
      "High-Definition CCTV & IP Cameras",
      "Network Video Recorders (NVR) & Video Storage",
      "Biometric Staff & Student Attendance Systems",
      "Smart Access Control & Turnstiles",
      "Digital Visitor Management Systems",
      "Perimeter & Gate Security Infrastructure",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80",
    ctaText: "Request a Security Assessment",
  },
  {
    id: "networking-solutions",
    title: "Networking & Connectivity",
    shortTitle: "Networking & Wi-Fi",
    slug: "networking-solutions",
    href: "/solutions/networking-solutions",
    badge: "Campus Network",
    summary:
      "Structured LAN cabling, campus-wide Wi-Fi, enterprise switches, routers, firewalls and cybersecurity.",
    iconName: "Network",
    items: [
      "Campus-wide Structured LAN & Cat6/Fiber Cabling",
      "High-Density Wi-Fi for Classrooms & Campuses",
      "Managed Network Switches & Core Routers",
      "Next-Gen Firewalls & Content Filtering",
      "Cybersecurity & Student Safe Browsing Controls",
      "Network Rack Setup & Server Room Organization",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    ctaText: "Discuss Your Network Requirements",
  },
  {
    id: "amc-support",
    title: "AMC & Technical Support",
    shortTitle: "AMC & Maintenance",
    slug: "amc-support",
    href: "/solutions/amc-support",
    badge: "SLA Support",
    summary:
      "Annual maintenance contracts, equipment repairs, preventive maintenance and responsive on-site technical support.",
    iconName: "Wrench",
    items: [
      "Comprehensive & Non-Comprehensive School AMCs",
      "Computer, Laptop & Printer Servicing & Repairs",
      "CCTV System Health Checks & Camera Realignment",
      "Network Infrastructure Diagnostics & Routine Checks",
      "Dedicated On-Site or Scheduled Technical Support",
      "Preventive Maintenance to Prevent Exam/Classroom Downtime",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
    ctaText: "Enquire About AMC Services",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Solutions",
    href: "/solutions/student-essentials",
    children: [
      {
        label: "Student Essentials",
        href: "/solutions/student-essentials",
        description: "Uniforms, shoes, bags, stationery and identity cards.",
      },
      {
        label: "IT & Infrastructure",
        href: "/solutions/it-infrastructure",
        description: "Computers, smart boards, projectors, printers and servers.",
      },
      {
        label: "Security & Surveillance",
        href: "/solutions/security-surveillance",
        description: "CCTV, biometric attendance and visitor management.",
      },
      {
        label: "Networking Solutions",
        href: "/solutions/networking-solutions",
        description: "LAN cabling, campus Wi-Fi, switches and firewalls.",
      },
      {
        label: "AMC & Technical Support",
        href: "/solutions/amc-support",
        description: "Annual maintenance, preventive care and technician support.",
      },
    ],
  },
  { label: "Our Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    name: "Understand",
    title: "Requirement Discussion",
    description:
      "We conduct a thorough consultation with school leadership and administration to understand your exact curriculum, session timelines, technical specifications and budget parameters.",
  },
  {
    step: "02",
    name: "Assess",
    title: "Site Visit & Technical Evaluation",
    description:
      "When required, our team visits your campus in Delhi NCR to assess existing infrastructure, physical layout, cabling pathways, power availability and device requirements.",
  },
  {
    step: "03",
    name: "Recommend",
    title: "Specification & Commercial Quotation",
    description:
      "We prepare a transparent proposal detailing recommended specifications, product samples or datasheets, delivery milestones and clear commercial terms.",
  },
  {
    step: "04",
    name: "Coordinate",
    title: "Procurement & Quality Verification",
    description:
      "We coordinate with vetted manufacturers and authorized suppliers, verifying that uniforms, hardware and network components strictly conform to approved specifications.",
  },
  {
    step: "05",
    name: "Deploy",
    title: "Delivery, Installation & Commissioning",
    description:
      "Our technical personnel oversee scheduled on-site delivery, structured cabling, hardware setup, software configuration and initial testing with minimum classroom disruption.",
  },
  {
    step: "06",
    name: "Support",
    title: "Handover & Continued Support",
    description:
      "We conduct a formal administrative handover, complete warranty registrations, and provide continued assistance through our structured AMC and support contracts.",
  },
];

export const TARGET_INSTITUTIONS = [
  {
    name: "CBSE Affiliated Schools",
    desc: "Procurement aligned with board curriculum standards, computer lab guidelines and sports requirements.",
  },
  {
    name: "ICSE & ISC Schools",
    desc: "Robust infrastructure, premium apparel specifications and modern laboratory equipment coordination.",
  },
  {
    name: "International & IB Schools",
    desc: "Advanced interactive smart panels, campus-wide high-density Wi-Fi and premium identity solutions.",
  },
  {
    name: "Independent Private K-12",
    desc: "Consolidated vendor management for principals and trustees seeking dependable operational execution.",
  },
  {
    name: "School Groups & Chains",
    desc: "Centralized coordination across multiple branch campuses with standardized quality and pricing.",
  },
  {
    name: "Higher Secondary & Colleges",
    desc: "Enterprise network backbones, auditorium AV systems, large-scale biometric attendance and IT AMCs.",
  },
];
