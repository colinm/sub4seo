export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavDropdown {
  label: string;
  items: NavItem[];
}

export const navDropdowns: NavDropdown[] = [
  {
    label: "Windows",
    items: [
      { label: "Window Styles", href: "/windows/window-styles" },
      { label: "Single Hung", href: "/windows/single-hung" },
      { label: "Double Hung", href: "/windows/double-hung" },
      { label: "Slider / Glider", href: "/windows/slider" },
      { label: "Bay & Bow", href: "/windows/bay-and-bow" },
      { label: "Garden Specialty", href: "/windows/garden-specialty" },
      { label: "Casement / Awning", href: "/windows/casement" },
      { label: "Basement Windows", href: "/windows/basement" },
      { label: "Egress Windows", href: "/windows/egress" },
      { label: "Triple Pane Krypton", href: "/windows/krypton" },
      { label: "Window Options", href: "/windows/window-options" },
      { label: "Installation", href: "/windows/window-installation" },
      { label: "Storm Windows", href: "/windows/storm" },
      { label: "Windows FAQ", href: "/windows/replacement-windows-faq" },
      { label: "Download PDF", href: "/windows.pdf", external: true },
    ],
  },
  {
    label: "Siding",
    items: [
      { label: "Steel Siding", href: "/siding/steel-siding" },
      { label: "Composite Siding", href: "/siding/composite-siding" },
      { label: "Vinyl Siding", href: "/siding/vinyl-siding" },
      { label: "Insulated Siding", href: "/siding/insulated-siding" },
      { label: "Siding Options", href: "/siding/siding-options" },
      { label: "Installation", href: "/siding/siding-installation" },
      { label: "Download PDF", href: "/siding.pdf", external: true },
    ],
  },
  {
    label: "Doors",
    items: [
      { label: "Door Styles", href: "/doors/door-styles" },
      { label: "Entry Doors", href: "/doors/entry" },
      { label: "Storm Doors", href: "/doors/storm" },
      { label: "Easy Vent Storms", href: "/doors/easy-vent" },
      { label: "Mini-Blinds", href: "/doors/mini-blinds" },
      {
        label: "Door Installation",
        href: "https://youtu.be/oQPwjnB87WY",
        external: true,
      },
      { label: "Pre-finished Colors", href: "/prefinish.pdf", external: true },
    ],
  },
  {
    label: "Gutters",
    items: [
      { label: "Seamless Gutters", href: "/gutters/seamless-gutters" },
      { label: "Shur Flow System", href: "/gutters/shurflo" },
      { label: "Gutter Cap System", href: "/gutters/gutter-cap" },
      { label: "Gutter Installation", href: "/gutters/gutter-installation" },
      { label: "Gutters FAQ", href: "/gutters/gutter-cap-faq" },
      {
        label: "Watch Installation",
        href: "https://youtu.be/m2OHb9zzLOA",
        external: true,
      },
    ],
  },
  {
    label: "About Us",
    items: [
      { label: "Our Company Story", href: "/about/our-story" },
      { label: "Meet the Owners", href: "/about/meet-the-owners" },
      { label: "Visit the Showroom", href: "/about/showroom-tour" },
      { label: "Testimonials", href: "/about/testimonials" },
      { label: "In the News", href: "/about/in-the-news" },
      { label: "Referral Program", href: "/about/referral-program" },
      { label: "Service Areas", href: "/service-areas" },
      { label: "Contact Us", href: "/contact" },
      { label: "Download Our Jingle", href: "/webjingle.mp3", external: true },
    ],
  },
];

export const PHONE_LOCAL = "563-391-4000";
export const PHONE_TOLL_FREE = "1-800-717-3066";
export const PHONE_LOCAL_HREF = "tel:+15633914000";
export const PHONE_TOLL_FREE_HREF = "tel:+18007173066";
