import { Lexend_Deca, Space_Mono } from "next/font/google";

export const lexend_deca = Lexend_Deca({ 
  subsets: ['latin'],
  variable: '--font-lexend-deca',
  adjustFontFallback: false,
})

export const space_mono = Space_Mono({ 
  subsets: ['latin'],
  weight: '700',
  variable: '--font-space-mono',
  adjustFontFallback: false
})