import { extendTheme } from "native-base";

export const AppTheme = extendTheme({
  colors: {
    blue: {
      '600': '#364d9d',
      '500': '#647ac7',
    },
    red: {
      '200': '#ee7979',
    },
    gray: {
      '100': '#f7f7f8',
      '200': '#edecee',
      '300': '#d9d8da',
      '400': '#9f9ba1',
      '500': '#5f5b62',
      '600': '#3e3a40',
      '700': '#1a181b'
    },
  },
  fonts: {
    heading: 'Karla_700Bold',
    body: 'Karla_400Regular'
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
  sizes: {
    14: 56,
  },
})