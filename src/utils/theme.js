import { colors } from "./colors"

export const theme = {
  colors,
  media: {
    biggerThanMobile: "@media (min-width: 728px)"
  },
  gridTemplate: {
    dashboardDesktop: "15% auto 15%",
    dashboardMobile: "5% auto 5%",
    barDesktop: "30% 30% 40%",
    barMobile: "auto",
    modal: "5% auto 5%"
  },
  fontFamily: {
    main: "'Montserrat', sans-serif"
  },
  fontWeight: {
    bold: 600,
    normal: 400
  }
}
