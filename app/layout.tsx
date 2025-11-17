


import './globals.css'

export const metadata = {
  title: 'MAITRI - Future of Diamonds',
  description: 'Lab-grown sustainable diamonds with environmental stewardship',
}

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
        <head>
        <link
          rel="preload"
          as="image"
          href="/images/Hero_section.png"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}