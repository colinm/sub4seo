import type { PageSeoConfig } from './metadata'

export const pageSeoData: Record<string, PageSeoConfig> = {
  // Homepage
  '/': {
    title: 'Replacement Windows, Siding & Doors | Quad Cities General Contractor',
    description:
      "Suburban Construction — the Quad Cities' trusted home improvement contractor since 1985. Replacement windows, siding, doors, and gutters. Serving Davenport, Bettendorf, Moline, Rock Island, and surrounding 90-mile radius.",
    keywords: [
      'replacement windows Quad Cities',
      'siding contractor Davenport IA',
      'doors Bettendorf Iowa',
      'general contractor Quad Cities',
      'triple pane windows Davenport',
      'vinyl siding installation',
      'entry doors Rock Island IL',
      'gutter cap Moline IL',
      'home improvement Quad Cities',
    ],
    canonicalPath: '/',
    ogImage: '/main.jpg',
  },

  // Windows
  '/windows/window-styles': {
    title: 'Window Styles — Replacement Windows in the Quad Cities',
    description:
      'Browse our complete line of replacement window styles: single hung, double hung, slider, bay & bow, casement, garden, basement, and egress windows. Professional installation in Davenport, Bettendorf, Moline, Rock Island.',
    keywords: [
      'window styles Quad Cities',
      'replacement window types',
      'double hung windows Davenport',
      'casement windows Iowa',
      'window installation Bettendorf',
    ],
    canonicalPath: '/windows/window-styles',
    ogImage: '/double-hung.jpg',
  },
  '/windows/single-hung': {
    title: 'Single Hung Replacement Windows | Suburban Construction',
    description:
      'Single hung windows offer classic style with a fixed upper sash and operable lower sash. Energy-efficient, triple pane options available. Serving the Quad Cities area.',
    keywords: [
      'single hung windows',
      'single hung replacement windows Quad Cities',
      'window installation Davenport IA',
    ],
    canonicalPath: '/windows/single-hung',
    ogImage: '/single-hung.jpg',
  },
  '/windows/double-hung': {
    title: 'Double Hung Replacement Windows | Suburban Construction',
    description:
      'Double hung windows feature two operable sashes for easy cleaning and great ventilation. Triple pane krypton glass available. Expert installation across the Quad Cities.',
    keywords: [
      'double hung windows Quad Cities',
      'double hung replacement windows',
      'energy efficient windows Davenport',
    ],
    canonicalPath: '/windows/double-hung',
    ogImage: '/double-hung.jpg',
  },
  '/windows/slider': {
    title: 'Slider & Glider Replacement Windows | Suburban Construction',
    description:
      'Slider and glider windows provide wide views and easy operation. Perfect for wider openings. Available in triple pane with Argon or Krypton gas fill.',
    keywords: ['slider windows', 'glider windows Quad Cities', 'sliding windows Davenport IA'],
    canonicalPath: '/windows/slider',
    ogImage: '/sliding-window1.jpg',
  },
  '/windows/bay-and-bow': {
    title: 'Bay & Bow Replacement Windows | Suburban Construction',
    description:
      'Bay and bow windows add space, light, and curb appeal to any room. Custom-built and professionally installed by Suburban Construction in the Quad Cities.',
    keywords: ['bay windows Quad Cities', 'bow windows Davenport', 'bay and bow window installation'],
    canonicalPath: '/windows/bay-and-bow',
    ogImage: '/bayandbow.jpg',
  },
  '/windows/garden-specialty': {
    title: 'Garden & Specialty Windows | Suburban Construction',
    description:
      'Garden windows bring the outdoors in. Perfect for kitchens and sunrooms. Specialty window shapes available for unique architectural needs.',
    keywords: ['garden windows Iowa', 'specialty windows Quad Cities', 'garden window installation'],
    canonicalPath: '/windows/garden-specialty',
    ogImage: '/main.jpg',
  },
  '/windows/casement': {
    title: 'Casement & Awning Windows | Suburban Construction',
    description:
      'Casement and awning windows provide excellent ventilation and a tight seal when closed. Energy Star certified options available in the Quad Cities.',
    keywords: [
      'casement windows Davenport',
      'awning windows Iowa',
      'casement window installation Quad Cities',
    ],
    canonicalPath: '/windows/casement',
    ogImage: '/casement1.jpg',
  },
  '/windows/basement': {
    title: 'Basement Replacement Windows | Suburban Construction',
    description:
      'Improve natural light and ventilation in your basement with quality replacement windows. Properly sealed for moisture protection. Serving the Quad Cities.',
    keywords: ['basement windows Quad Cities', 'basement window replacement Davenport', 'basement windows Iowa'],
    canonicalPath: '/windows/basement',
    ogImage: '/basement.png',
  },
  '/windows/egress': {
    title: 'Egress Windows | Safety & Code Compliance | Suburban Construction',
    description:
      'Egress windows provide emergency exit and meet building codes for basement bedrooms. Professionally installed across the Quad Cities area.',
    keywords: ['egress windows Quad Cities', 'egress window installation Iowa', 'basement egress Davenport'],
    canonicalPath: '/windows/egress',
    ogImage: '/basement.png',
  },
  '/windows/krypton': {
    title: 'Triple Pane Krypton Glass Windows | Maximum Energy Efficiency',
    description:
      'Suburban Construction specializes in triple pane krypton glass windows — the most energy-efficient option available. Lower your heating and cooling bills in the Quad Cities.',
    keywords: [
      'triple pane windows Quad Cities',
      'krypton gas windows Davenport',
      'energy efficient windows Iowa',
      'triple pane krypton glass',
    ],
    canonicalPath: '/windows/krypton',
    ogImage: '/main.jpg',
  },
  '/windows/window-options': {
    title: 'Window Options & Upgrades | Suburban Construction',
    description:
      'Explore window options including grids, hardware finishes, low-e coatings, Argon/Krypton gas fills, and specialty glass. Customize your replacement windows.',
    keywords: ['window options Quad Cities', 'window upgrades Iowa', 'window grids hardware'],
    canonicalPath: '/windows/window-options',
    ogImage: '/main.jpg',
  },
  '/windows/window-installation': {
    title: 'Window Installation Process | Suburban Construction',
    description:
      "Learn about Suburban Construction's expert window installation process. Lifetime workmanship guarantee on all window installations across the Quad Cities.",
    keywords: [
      'window installation Davenport IA',
      'window installation process',
      'window replacement Quad Cities',
    ],
    canonicalPath: '/windows/window-installation',
    ogImage: '/main.jpg',
  },
  '/windows/storm': {
    title: 'Storm Windows | Extra Protection & Energy Savings',
    description:
      'Storm windows add an extra layer of insulation and weather protection to existing windows. Affordable energy upgrade for Quad Cities homeowners.',
    keywords: ['storm windows Quad Cities', 'storm windows Iowa', 'storm window installation Davenport'],
    canonicalPath: '/windows/storm',
    ogImage: '/main.jpg',
  },
  '/windows/replacement-windows-faq': {
    title: 'Replacement Windows FAQ | Common Questions Answered',
    description:
      'Frequently asked questions about replacement windows: costs, installation time, energy savings, warranties, and more. Serving the Quad Cities since 1985.',
    keywords: [
      'replacement windows FAQ',
      'window replacement questions Quad Cities',
      'how long does window installation take',
    ],
    canonicalPath: '/windows/replacement-windows-faq',
    ogImage: '/main.jpg',
  },
  '/windows/window-replacement-cost': {
    title: 'Window Replacement Cost Guide | Quad Cities Pricing',
    description:
      'How much does window replacement cost in the Quad Cities? Honest price ranges by window style, plus the key factors that affect your quote. Free estimates from Suburban Construction.',
    keywords: [
      'window replacement cost Quad Cities',
      'how much do replacement windows cost Iowa',
      'window installation price Davenport',
      'replacement window cost estimate',
    ],
    canonicalPath: '/windows/window-replacement-cost',
    ogImage: '/double-hung.jpg',
  },
  '/windows/double-hung-vs-casement': {
    title: 'Double Hung vs. Casement Windows | Which Is Right for You?',
    description:
      'Compare double hung and casement replacement windows side-by-side. Ventilation, energy efficiency, cleaning, price, and more. Expert guidance from Suburban Construction.',
    keywords: [
      'double hung vs casement windows',
      'double hung or casement windows Quad Cities',
      'casement vs double hung window comparison',
    ],
    canonicalPath: '/windows/double-hung-vs-casement',
    ogImage: '/casement1.jpg',
  },

  // Siding
  '/siding/steel-siding': {
    title: 'Steel Siding Installation | Durable & Low Maintenance | Quad Cities',
    description:
      'Steel siding offers unmatched durability and fire resistance for Quad Cities homes. Available in a wide range of colors and profiles. Professional installation by Suburban Construction.',
    keywords: [
      'steel siding Quad Cities',
      'steel siding Davenport IA',
      'steel siding installation Iowa',
    ],
    canonicalPath: '/siding/steel-siding',
    ogImage: '/steel-siding.jpg',
  },
  '/siding/composite-siding': {
    title: 'Composite Siding | Cedar Look Without the Maintenance | Quad Cities',
    description:
      'Composite siding gives your home the beauty of real wood without the maintenance. Ideal for Quad Cities homes. Expert installation by Suburban Construction.',
    keywords: [
      'composite siding Quad Cities',
      'composite siding Davenport',
      'wood look siding Iowa',
    ],
    canonicalPath: '/siding/composite-siding',
    ogImage: '/composite1.jpg',
  },
  '/siding/vinyl-siding': {
    title: 'Vinyl Siding Installation | Freedom Series | Suburban Construction',
    description:
      'Vinyl siding is the most popular choice for Quad Cities homeowners. Suburban Construction installs Freedom Series vinyl siding — durable, beautiful, and virtually maintenance-free.',
    keywords: [
      'vinyl siding Quad Cities',
      'vinyl siding Davenport IA',
      'vinyl siding installation Iowa',
      'Freedom Series siding',
    ],
    canonicalPath: '/siding/vinyl-siding',
    ogImage: '/vinyl.jpg',
  },
  '/siding/insulated-siding': {
    title: 'Insulated Siding | Extra Energy Efficiency | Suburban Construction',
    description:
      'Insulated vinyl siding reduces energy costs while improving the look of your home. Extra foam backing provides superior insulation for Quad Cities homes.',
    keywords: [
      'insulated siding Quad Cities',
      'insulated vinyl siding Iowa',
      'energy efficient siding Davenport',
    ],
    canonicalPath: '/siding/insulated-siding',
    ogImage: '/sidinghouse.jpg',
  },
  '/siding/siding-options': {
    title: 'Siding Options & Colors | Suburban Construction',
    description:
      'Explore siding color options, profiles, trim details, and accessories. Suburban Construction offers a wide selection of styles to match any Quad Cities home.',
    keywords: ['siding options Iowa', 'siding colors Quad Cities', 'siding styles Davenport'],
    canonicalPath: '/siding/siding-options',
    ogImage: '/sidinghouse.jpg',
  },
  '/siding/siding-installation': {
    title: 'Siding Installation Process | Suburban Construction',
    description:
      'Professional siding installation with attention to detail and a lifetime workmanship guarantee. Serving all of the Quad Cities area since 1985.',
    keywords: [
      'siding installation Davenport IA',
      'siding installation process',
      'siding contractor Quad Cities',
    ],
    canonicalPath: '/siding/siding-installation',
    ogImage: '/sidinghouse.jpg',
  },
  '/siding/vinyl-siding-faq': {
    title: 'Vinyl Siding FAQ | Suburban Construction',
    description:
      'Answers to common questions about vinyl siding: maintenance, durability, cost, installation, and more. Suburban Construction has been siding Quad Cities homes since 1985.',
    keywords: ['vinyl siding FAQ', 'vinyl siding questions', 'siding FAQ Quad Cities'],
    canonicalPath: '/siding/vinyl-siding-faq',
    ogImage: '/sidinghouse.jpg',
  },
  '/siding/insulated-siding-faq': {
    title: 'Insulated Siding FAQ | Suburban Construction',
    description:
      "Frequently asked questions about insulated siding's energy savings, installation, and cost. Learn how insulated siding can lower your heating and cooling bills.",
    keywords: ['insulated siding FAQ', 'insulated siding questions Iowa'],
    canonicalPath: '/siding/insulated-siding-faq',
    ogImage: '/sidinghouse.jpg',
  },
  '/siding/siding-replacement-cost': {
    title: 'Siding Replacement Cost Guide | Quad Cities Pricing',
    description:
      'How much does new siding cost in the Quad Cities? Transparent price ranges for vinyl, steel, and composite siding. Free estimates from Suburban Construction.',
    keywords: [
      'siding replacement cost Quad Cities',
      'how much does siding cost Iowa',
      'vinyl siding price Davenport',
      'siding installation cost estimate',
    ],
    canonicalPath: '/siding/siding-replacement-cost',
    ogImage: '/sidinghouse.jpg',
  },
  '/siding/steel-vs-vinyl-siding': {
    title: 'Steel vs. Vinyl Siding | Which Is Right for Your Home?',
    description:
      'Compare steel and vinyl siding side-by-side: durability, cost, maintenance, appearance, and more. Honest guidance from Suburban Construction in the Quad Cities.',
    keywords: [
      'steel vs vinyl siding',
      'steel or vinyl siding Quad Cities',
      'siding comparison Iowa',
      'best siding material Davenport',
    ],
    canonicalPath: '/siding/steel-vs-vinyl-siding',
    ogImage: '/steel-siding.jpg',
  },
  '/siding/vinyl-vs-composite-siding': {
    title: 'Vinyl vs. Composite Siding | Side-by-Side Comparison',
    description:
      'Vinyl or composite siding — which is right for your Quad Cities home? Compare appearance, cost, maintenance, and durability. Expert advice from Suburban Construction.',
    keywords: [
      'vinyl vs composite siding',
      'composite siding vs vinyl Quad Cities',
      'best siding Iowa',
    ],
    canonicalPath: '/siding/vinyl-vs-composite-siding',
    ogImage: '/composite1.jpg',
  },

  // Doors
  '/doors/door-styles': {
    title: 'Entry & Storm Door Styles | Suburban Construction',
    description:
      'Browse our selection of entry doors and storm doors. Available in a wide range of styles, colors, and glass options. Expert installation across the Quad Cities.',
    keywords: ['door styles Quad Cities', 'entry doors Iowa', 'storm doors Davenport IA'],
    canonicalPath: '/doors/door-styles',
    ogImage: '/main.jpg',
  },
  '/doors/entry': {
    title: 'Entry Door Installation | Suburban Construction',
    description:
      'Beautiful, energy-efficient entry doors custom-ordered and professionally installed by Suburban Construction. Serving the Quad Cities area since 1985.',
    keywords: [
      'entry doors Quad Cities',
      'entry door installation Davenport',
      'front doors Iowa',
    ],
    canonicalPath: '/doors/entry',
    ogImage: '/main.jpg',
  },
  '/doors/easy-vent': {
    title: 'Easy Vent Storm Doors | Suburban Construction',
    description:
      'Easy Vent storm doors let in fresh air while keeping bugs and weather out. Available in multiple styles and colors. Installed across the Quad Cities.',
    keywords: ['storm doors Quad Cities', 'easy vent doors Iowa', 'storm door installation Davenport'],
    canonicalPath: '/doors/easy-vent',
    ogImage: '/main.jpg',
  },
  '/doors/mini-blinds': {
    title: 'Doors with Built-In Mini Blinds | Suburban Construction',
    description:
      'Doors with built-in mini blinds offer the convenience of light control without the hassle of traditional blinds. No dusting, no cords.',
    keywords: ['door mini blinds', 'built-in blinds door Quad Cities', 'doors with blinds Iowa'],
    canonicalPath: '/doors/mini-blinds',
    ogImage: '/main.jpg',
  },
  '/doors/door-app': {
    title: 'Door Catalog & Applications | Suburban Construction',
    description:
      'Explore our full door catalog. Find the perfect entry door, storm door, or patio door for your Quad Cities home.',
    keywords: ['door catalog Quad Cities', 'door options Iowa'],
    canonicalPath: '/doors/door-app',
    ogImage: '/main.jpg',
  },

  // Gutters
  '/gutters/seamless-gutters': {
    title: 'Seamless Gutters | Custom Fabricated On-Site | Quad Cities',
    description:
      'Seamless gutters are custom fabricated on-site for a perfect fit with no leaky seams. Suburban Construction installs seamless gutters throughout the Quad Cities.',
    keywords: [
      'seamless gutters Quad Cities',
      'seamless gutters Davenport IA',
      'gutter installation Iowa',
    ],
    canonicalPath: '/gutters/seamless-gutters',
    ogImage: '/main.jpg',
  },
  '/gutters/shurflo': {
    title: 'Shur Flow Gutter System | Suburban Construction',
    description:
      'The Shur Flow gutter system keeps gutters clear of leaves and debris year-round. No more climbing ladders to clean gutters. Professional installation in the Quad Cities.',
    keywords: [
      'Shur Flow gutters Quad Cities',
      'gutter protection Iowa',
      'gutter guard Davenport IA',
    ],
    canonicalPath: '/gutters/shurflo',
    ogImage: '/main.jpg',
  },
  '/gutters/gutter-cap': {
    title: 'Gutter Cap System | Never Clean Your Gutters Again | Quad Cities',
    description:
      'The Gutter Cap system uses surface tension to guide water into gutters while leaves and debris fall to the ground. Suburban Construction is your local Gutter Cap installer.',
    keywords: [
      'Gutter Cap Quad Cities',
      'gutter guard Davenport',
      'gutter protection system Iowa',
      'never clean gutters',
    ],
    canonicalPath: '/gutters/gutter-cap',
    ogImage: '/main.jpg',
  },
  '/gutters/gutter-installation': {
    title: 'Gutter Installation | Suburban Construction',
    description:
      "Learn about Suburban Construction's gutter installation process. Proper drainage protects your home's foundation, siding, and landscaping.",
    keywords: [
      'gutter installation Davenport IA',
      'gutter installer Quad Cities',
      'gutter installation process',
    ],
    canonicalPath: '/gutters/gutter-installation',
    ogImage: '/main.jpg',
  },
  '/gutters/gutter-cap-faq': {
    title: 'Gutter Cap FAQ | Suburban Construction',
    description:
      'Frequently asked questions about the Gutter Cap system. Learn how it works, how it compares to other gutter guards, and what installation involves.',
    keywords: ['gutter cap FAQ', 'gutter guard questions Iowa', 'gutter protection FAQ'],
    canonicalPath: '/gutters/gutter-cap-faq',
    ogImage: '/main.jpg',
  },
  '/gutters/gutter-installation-cost': {
    title: 'Gutter Installation Cost Guide | Quad Cities Pricing',
    description:
      'How much does gutter installation cost in the Quad Cities? Price ranges for seamless gutters, Gutter Cap, and Shur Flow systems. Free estimates from Suburban Construction.',
    keywords: [
      'gutter installation cost Quad Cities',
      'how much do gutters cost Iowa',
      'seamless gutter price Davenport',
      'gutter replacement cost estimate',
    ],
    canonicalPath: '/gutters/gutter-installation-cost',
    ogImage: '/main.jpg',
  },
  '/doors/door-installation-cost': {
    title: 'Door Installation Cost Guide | Quad Cities Pricing',
    description:
      'How much does entry door or storm door installation cost in the Quad Cities? Honest price ranges by door type. Free estimates from Suburban Construction.',
    keywords: [
      'door installation cost Quad Cities',
      'entry door price Iowa',
      'storm door installation cost Davenport',
      'new door cost estimate',
    ],
    canonicalPath: '/doors/door-installation-cost',
    ogImage: '/main.jpg',
  },

  // Patio
  '/patio': {
    title: 'Patio Enclosures & Awnings | Suburban Construction',
    description:
      'Transform your outdoor living space with a custom patio enclosure or awning from Suburban Construction. Serving the Quad Cities area since 1985.',
    keywords: ['patio enclosures Quad Cities', 'patio awnings Iowa', 'sunrooms Davenport IA'],
    canonicalPath: '/patio',
    ogImage: '/main.jpg',
  },
  '/patio/patio-awning': {
    title: 'Patio Awnings | Shade & Style | Suburban Construction',
    description:
      'Patio awnings provide shade and protection while enhancing your outdoor living area. Available in retractable and fixed styles. Installed throughout the Quad Cities.',
    keywords: ['patio awnings Quad Cities', 'awning installation Iowa', 'retractable awnings Davenport'],
    canonicalPath: '/patio/patio-awning',
    ogImage: '/main.jpg',
  },
  '/patio/swing-and-clean': {
    title: 'Swing & Clean Windows for Porches | Suburban Construction',
    description:
      'Swing and clean windows are perfect for porch enclosures — they tilt in for easy cleaning. Available in the Quad Cities from Suburban Construction.',
    keywords: ['swing and clean windows Iowa', 'porch windows Quad Cities'],
    canonicalPath: '/patio/swing-and-clean',
    ogImage: '/main.jpg',
  },
  '/patio/solar-shades': {
    title: 'Solar Shades for Patios & Porches | Suburban Construction',
    description:
      'Solar shades block UV rays and reduce heat gain on your patio or porch while maintaining your view. Available from Suburban Construction.',
    keywords: ['solar shades Quad Cities', 'porch solar shades Iowa', 'UV protection shades Davenport'],
    canonicalPath: '/patio/solar-shades',
    ogImage: '/main.jpg',
  },
  '/patio/awning-care': {
    title: 'Awning Care & Maintenance | Suburban Construction',
    description:
      'Tips and instructions for caring for your awning to maximize its lifespan and keep it looking great year after year.',
    keywords: ['awning care Iowa', 'awning maintenance Quad Cities'],
    canonicalPath: '/patio/awning-care',
    ogImage: '/main.jpg',
  },
  '/patio/canopies': {
    title: 'Canopies | Outdoor Shade Solutions | Suburban Construction',
    description:
      'Custom canopies for your patio, deck, or outdoor space. Professional installation throughout the Quad Cities by Suburban Construction.',
    keywords: ['canopies Quad Cities', 'patio canopy Iowa', 'outdoor canopy Davenport'],
    canonicalPath: '/patio/canopies',
    ogImage: '/main.jpg',
  },

  // About
  '/about/our-story': {
    title: 'Our Company Story | Suburban Construction Since 1985',
    description:
      'Suburban Construction has been serving the Quad Cities area since 1985. Learn about our history, our commitment to quality, and why homeowners keep choosing us.',
    keywords: [
      'Suburban Construction history',
      'home improvement company Davenport IA',
      'Quad Cities contractor since 1985',
    ],
    canonicalPath: '/about/our-story',
    ogImage: '/bettoffice.jpg',
  },
  '/about/meet-the-owners': {
    title: 'Meet the Owners | Suburban Construction',
    description:
      'Meet the team behind Suburban Construction — a family-owned home improvement company serving the Quad Cities with integrity since 1985.',
    keywords: ['Suburban Construction owners', 'family owned contractor Quad Cities'],
    canonicalPath: '/about/meet-the-owners',
    ogImage: '/bettoffice.jpg',
  },
  '/about/showroom-tour': {
    title: 'Visit Our Showroom | Davenport, Iowa | Suburban Construction',
    description:
      'Visit the Suburban Construction showroom at 3602 North Harrison, Davenport, Iowa. See our full selection of windows, siding, and doors in person. Open Mon-Fri 7:30AM–4:30PM.',
    keywords: [
      'Suburban Construction showroom',
      'window showroom Davenport IA',
      'home improvement showroom Quad Cities',
    ],
    canonicalPath: '/about/showroom-tour',
    ogImage: '/davoffice.jpg',
  },
  '/about/testimonials': {
    title: 'Customer Testimonials | Suburban Construction Reviews',
    description:
      'Read what Quad Cities homeowners say about Suburban Construction. Over 53 testimonials from satisfied customers in Davenport, Bettendorf, Moline, Rock Island, and beyond.',
    keywords: [
      'Suburban Construction reviews',
      'customer testimonials Davenport IA',
      'home improvement reviews Quad Cities',
    ],
    canonicalPath: '/about/testimonials',
    ogImage: '/main.jpg',
  },
  '/about/in-the-news': {
    title: 'In the News | Suburban Construction',
    description:
      'See Suburban Construction featured in local news and publications. Serving the Quad Cities with award-winning home improvement services since 1985.',
    keywords: ['Suburban Construction news', 'home improvement news Quad Cities'],
    canonicalPath: '/about/in-the-news',
    ogImage: '/main.jpg',
  },
  '/about/referral-program': {
    title: 'Referral Program | Suburban Construction',
    description:
      'Refer a friend to Suburban Construction and earn rewards. Join our referral program and help your neighbors get the best home improvement service in the Quad Cities.',
    keywords: ['Suburban Construction referral', 'home improvement referral program Iowa'],
    canonicalPath: '/about/referral-program',
    ogImage: '/main.jpg',
  },

  // Contact
  '/contact': {
    title: 'Contact Us | Free Estimate | Suburban Construction',
    description:
      'Contact Suburban Construction for a free home improvement estimate. Call 563-391-4000 or 1-800-717-3066. Serving Davenport, Bettendorf, Moline, Rock Island, and the surrounding Quad Cities.',
    keywords: [
      'contact Suburban Construction',
      'free estimate Quad Cities',
      'home improvement estimate Davenport IA',
    ],
    canonicalPath: '/contact',
    ogImage: '/main.jpg',
  },
  '/sent': {
    title: 'Message Sent | Suburban Construction',
    description: "Thank you for contacting Suburban Construction. We'll be in touch shortly.",
    canonicalPath: '/sent',
  },

  // Resources
  '/resources/faq': {
    title: 'FAQ | Home Improvement Questions | Suburban Construction',
    description:
      'Find answers to frequently asked questions about replacement windows, siding, doors, gutters, and more. Suburban Construction has served the Quad Cities since 1985.',
    keywords: ['home improvement FAQ Quad Cities', 'window FAQ Iowa', 'siding FAQ Davenport'],
    canonicalPath: '/resources/faq',
    ogImage: '/main.jpg',
  },
  '/resources/condensation-faq': {
    title: 'Window Condensation FAQ | Suburban Construction',
    description:
      'Learn about window condensation — what causes it, what it means, and how to address it. Expert answers from Suburban Construction.',
    keywords: ['window condensation FAQ', 'condensation on windows Iowa'],
    canonicalPath: '/resources/condensation-faq',
    ogImage: '/main.jpg',
  },
  '/resources/convection-faq': {
    title: 'Window Convection FAQ | Suburban Construction',
    description:
      'Understand window convection, how it affects heat loss, and how triple pane windows reduce convection. Technical answers from Suburban Construction.',
    keywords: ['window convection FAQ', 'window heat loss Iowa'],
    canonicalPath: '/resources/convection-faq',
    ogImage: '/main.jpg',
  },
  '/resources/heater-cap-faq': {
    title: 'Heater Cap FAQ | Suburban Construction',
    description:
      'Frequently asked questions about the Heater Cap gutter system — how it prevents ice dams and keeps gutters clear in winter.',
    keywords: ['heater cap FAQ', 'gutter heater Iowa', 'ice dam prevention Quad Cities'],
    canonicalPath: '/resources/heater-cap-faq',
    ogImage: '/main.jpg',
  },
  '/resources/stain-formula-faq': {
    title: 'Stain Formulas for Siding & Windows | Suburban Construction',
    description:
      'Find the correct stain formulas for matching and touching up your siding or windows. Helpful resource from Suburban Construction.',
    keywords: ['siding stain formula Iowa', 'window stain matching'],
    canonicalPath: '/resources/stain-formula-faq',
    ogImage: '/main.jpg',
  },
  '/resources/glossary': {
    title: 'Home Improvement Glossary | Suburban Construction',
    description:
      'Learn the terminology used in home improvement: windows, siding, doors, gutters, and more. A complete A-Z glossary from Suburban Construction.',
    keywords: [
      'home improvement glossary',
      'window terms definitions',
      'siding terminology Quad Cities',
    ],
    canonicalPath: '/resources/glossary',
    ogImage: '/main.jpg',
  },
  '/resources/recommended': {
    title: 'Recommended Maintenance | Suburban Construction',
    description:
      'Keep your windows, siding, doors, and gutters in top condition with these recommended maintenance tips from Suburban Construction.',
    keywords: ['window maintenance Iowa', 'siding maintenance tips', 'home maintenance Quad Cities'],
    canonicalPath: '/resources/recommended',
    ogImage: '/main.jpg',
  },
  '/resources/warranty-information': {
    title: 'Warranty Information | Suburban Construction',
    description:
      'Learn about manufacturer warranties and our lifetime workmanship guarantee. Suburban Construction stands behind every installation.',
    keywords: ['window warranty Iowa', 'siding warranty Quad Cities', 'lifetime guarantee home improvement'],
    canonicalPath: '/resources/warranty-information',
    ogImage: '/main.jpg',
  },
  '/resources/downloads': {
    title: 'Downloads | Product Brochures & PDFs | Suburban Construction',
    description:
      'Download product brochures, installation guides, warranty documents, and care instructions from Suburban Construction.',
    keywords: ['Suburban Construction downloads', 'window brochure PDF Iowa'],
    canonicalPath: '/resources/downloads',
    ogImage: '/main.jpg',
  },
  '/resources/support': {
    title: 'Support | Suburban Construction',
    description:
      'Need help with your windows, siding, doors, or gutters? Suburban Construction provides excellent after-sale support for all products.',
    keywords: ['Suburban Construction support', 'window repair Quad Cities', 'home improvement support Iowa'],
    canonicalPath: '/resources/support',
    ogImage: '/main.jpg',
  },

  // Service Areas
  '/service-areas': {
    title: 'Service Areas | Quad Cities & Surrounding 90-Mile Radius',
    description:
      'Suburban Construction serves Davenport, Bettendorf, Moline, Rock Island, East Moline, Sterling, Rock Falls, Muscatine, Clinton, DeWitt, and the surrounding 90-mile radius.',
    keywords: [
      'Suburban Construction service areas',
      'home improvement Quad Cities',
      'window installer near me Iowa Illinois',
    ],
    canonicalPath: '/service-areas',
    ogImage: '/main.jpg',
  },
}
