export const theme = {
  colors: {
    primary: '#FCC33A',
    secondary: '#78A9FF',
    secondaryDark: '#285AB3',
    text: '#28282C',
    textInverse: 'F0F0F0'
  }
}

export type AppTheme = typeof theme

export type ThemeColor = keyof AppTheme['colors']

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}
