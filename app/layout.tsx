


import './globals.css'

export const metadata = {
  title: 'MAITRI - Future of Diamonds',
  description: 'Lab-grown sustainable diamonds with environmental stewardship',
}

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}