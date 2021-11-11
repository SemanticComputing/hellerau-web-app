import bannerImage from '../../img/main_page/hellerau-banner.jpg'

export const rootUrl = ''

export const defaultLocale = 'en'

export const readTranslationsFromGoogleSheets = false

export const showLanguageButton = false

export const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiZWtrb25lbiIsImEiOiJja2FkbGxiY2owMDZkMnFxcGVqNTZ0dmk2In0.6keLTN8VveJkM5y4_OFmUw' // https://docs.mapbox.com/accounts/overview/tokens/

export const MAPBOX_STYLE = 'light-v10' // https://docs.mapbox.com/api/maps/#styles

// export const documentFinderAPIUrl = 'https://data.finlex.fi/document-finder-backend'

export const backendErrorText = 'The database is not available. Please try again later.'

export const layoutConfig = {
  hundredPercentHeightBreakPoint: 'md',
  reducedHeightBreakpoint: 'xl',
  tabHeight: 58,
  paginationToolbarHeight: 37,
  tableFontSize: '0.8rem',
  topBar: {
    showLanguageButton: true,
    feedbackLink: 'https://link.webropolsurveys.com/',
    // 48 px is minimun for tab targets: https://web.dev/tap-targets/?utm_source=lighthouse&utm_medium=devtools#how-to-fix-your-tap-targets
    reducedHeight: 48,
    defaultHeight: 64,
    mobileMenuBreakpoint: 1360
  },
  mainPage: {
    bannerBackround: `linear-gradient( rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45) ), url(${bannerImage})`,
    bannerMobileHeight: 150,
    bannerReducedHeight: 220,
    bannerDefaultHeight: 350
  },
  infoHeader: {
    default: {
      height: 49,
      expandedContentHeight: 160,
      headingVariant: 'h4',
      infoIconFontSize: 40
    },
    reducedHeight: {
      height: 40,
      expandedContentHeight: 100,
      headingVariant: 'h6',
      infoIconFontSize: 32
    }
  },
  footer: {
    reducedHeight: 44,
    defaultHeight: 64
  }
}
