import '@/shared/styles/app.css'
import React from 'react'

import { Rubik as FontRubik } from 'next/font/google'

import { ThemeProvider } from '@/components/providers/theme-provider'
import { siteConfig } from '@/constants/config'
import { cn } from '@/lib/utils'

export const fontRubik = FontRubik({
  subsets: ['latin'],
  variable: '--font-rubik'
})

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/favicon.png'
  },
  manifest: `${siteConfig.url}/site.webmanifest`
}

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={cn('font-rubik antialiased min-h-screen', fontRubik.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <React.Fragment>
            {children}
          </React.Fragment>
        </ThemeProvider>
      </body>
    </html>
  )
}
