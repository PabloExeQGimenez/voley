export const theme = {
  colors: {
    bg: 'gray',
    text: 'black'
  },
  spacing: (n: number) => `${n * 8}px`,
  radius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px'
  },
  shadow: {
    md: '0 6px 24px rgba(0, 0, 0, .18)'
  }
} as const;

export type AppTheme = typeof theme;