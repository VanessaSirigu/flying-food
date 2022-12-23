export const theme = {
  colors: {
    primary: '#FCC33A',
    secondary: '#78A9FF',
    secondaryDark: '#285AB3',
    text: '#28282C',
    textInverse: 'F0F0F0'
  },
  // Units in REM
  fontSizes: {
    xs: 0.6,
    sm: 0.8,
    md: 1,
    lg: 1.6,
    xl: 2.2
  }
}

export type AppTheme = typeof theme

export type ThemeColor = keyof AppTheme['colors']

export type FontSize = keyof AppTheme['fontSizes']

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}
