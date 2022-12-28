export const theme = {
  colors: {
    primary: '#FCC33A',
    secondary: '#78A9FF',
    secondaryDark: '#285AB3',
    text: '#28282C',
    textInverse: '#F0F0F0',
    background: '#FCFCFC',
    backgroundDark: '#36373B',
    lightGrey: '#C9C9C9'
  },
  // Units in REM
  fontSizes: {
    sm: 0.8,
    md: 1,
    lg: 1.6,
    xl: 2.2
  },
  textVariants: {
    h1: {
      fontSize: 'xl',
      lineHeight: 1.8
    },
    h2: {
      fontSize: 'lg',
      lineHeight: 1.8
    },
    h3: {
      fontSize: 'lg',
      lineHeight: 1.6
    },
    h4: {
      fontSize: 'lg',
      lineHeight: 1.6
    },
    h5: {
      fontSize: 'lg',
      lineHeight: 1.6
    },
    h6: {
      fontSize: 'lg',
      lineHeight: 1.6
    },
    p: {
      fontSize: 'md',
      lineHeight: 1.4
    },
    span: {
      fontSize: 'inherit',
      lineHeight: 'inherit'
    }
  },
  radii: [4, 8, 12],
  spacing: {
    sm: 8,
    md: 12,
    lg: 16
  }
} as const

export type AppTheme = typeof theme

export type ThemeColor = keyof AppTheme['colors']

export type FontSize = keyof AppTheme['fontSizes']

export type Sizes = keyof AppTheme['spacing']
declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}
