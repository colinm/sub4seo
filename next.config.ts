import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // Windows — flat → nested
      { source: '/window-styles', destination: '/windows/window-styles', permanent: true },
      { source: '/single_hung', destination: '/windows/single-hung', permanent: true },
      { source: '/double_hung', destination: '/windows/double-hung', permanent: true },
      { source: '/slider', destination: '/windows/slider', permanent: true },
      { source: '/bay_and_bow', destination: '/windows/bay-and-bow', permanent: true },
      { source: '/garden_specialty', destination: '/windows/garden-specialty', permanent: true },
      { source: '/casement', destination: '/windows/casement', permanent: true },
      { source: '/basement', destination: '/windows/basement', permanent: true },
      { source: '/egress', destination: '/windows/egress', permanent: true },
      { source: '/krypton', destination: '/windows/krypton', permanent: true },
      { source: '/window-options', destination: '/windows/window-options', permanent: true },
      { source: '/window-installation', destination: '/windows/window-installation', permanent: true },
      { source: '/storm', destination: '/windows/storm', permanent: true },
      { source: '/replacement_windows_faq', destination: '/windows/replacement-windows-faq', permanent: true },
      { source: '/swing_and_clean', destination: '/patio/swing-and-clean', permanent: true },

      // Siding — flat → nested
      { source: '/steel-siding', destination: '/siding/steel-siding', permanent: true },
      { source: '/composite_siding', destination: '/siding/composite-siding', permanent: true },
      { source: '/vinyl-siding', destination: '/siding/vinyl-siding', permanent: true },
      { source: '/siding-options', destination: '/siding/siding-options', permanent: true },
      { source: '/siding-installation', destination: '/siding/siding-installation', permanent: true },
      { source: '/insulated-siding', destination: '/siding/insulated-siding', permanent: true },
      { source: '/vinyl_siding_faq', destination: '/siding/vinyl-siding-faq', permanent: true },
      { source: '/insulated_siding_faq', destination: '/siding/insulated-siding-faq', permanent: true },

      // Doors — flat → nested
      { source: '/door-styles', destination: '/doors/door-styles', permanent: true },
      { source: '/entry', destination: '/doors/entry', permanent: true },
      { source: '/easy-vent', destination: '/doors/easy-vent', permanent: true },
      { source: '/mini-blinds', destination: '/doors/mini-blinds', permanent: true },
      { source: '/door-app', destination: '/doors/door-app', permanent: true },

      // Gutters — flat → nested
      { source: '/seamless-gutters', destination: '/gutters/seamless-gutters', permanent: true },
      { source: '/shurflo', destination: '/gutters/shurflo', permanent: true },
      { source: '/gutter-cap', destination: '/gutters/gutter-cap', permanent: true },
      { source: '/gutter-installation', destination: '/gutters/gutter-installation', permanent: true },
      { source: '/gutter_cap_faq', destination: '/gutters/gutter-cap-faq', permanent: true },

      // Patio — flat → nested
      { source: '/patio-awning', destination: '/patio/patio-awning', permanent: true },
      { source: '/solar-shades', destination: '/patio/solar-shades', permanent: true },
      { source: '/awning-care', destination: '/patio/awning-care', permanent: true },
      { source: '/canopies', destination: '/patio/canopies', permanent: true },

      // About — flat → nested
      { source: '/our-story', destination: '/about/our-story', permanent: true },
      { source: '/meet_the_owners', destination: '/about/meet-the-owners', permanent: true },
      { source: '/showroom-tour', destination: '/about/showroom-tour', permanent: true },
      { source: '/testimonials', destination: '/about/testimonials', permanent: true },
      { source: '/in_the_news', destination: '/about/in-the-news', permanent: true },
      { source: '/referral_program', destination: '/about/referral-program', permanent: true },
      { source: '/about', destination: '/about/our-story', permanent: true },

      // Resources — flat → nested
      { source: '/faq', destination: '/resources/faq', permanent: true },
      { source: '/condensation_faq', destination: '/resources/condensation-faq', permanent: true },
      { source: '/convection_faq', destination: '/resources/convection-faq', permanent: true },
      { source: '/heater_cap_faq', destination: '/resources/heater-cap-faq', permanent: true },
      { source: '/stain_formula_faq', destination: '/resources/stain-formula-faq', permanent: true },
      { source: '/glossary', destination: '/resources/glossary', permanent: true },
      { source: '/recommended', destination: '/resources/recommended', permanent: true },
      { source: '/warranty_information', destination: '/resources/warranty-information', permanent: true },
      { source: '/downloads', destination: '/resources/downloads', permanent: true },
      { source: '/support', destination: '/resources/support', permanent: true },
    ]
  },
}

export default nextConfig
