import './globals.css'

export const metadata = {
  title: 'TechMart Customer Support',
  description: 'AI-driven customer support system',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
