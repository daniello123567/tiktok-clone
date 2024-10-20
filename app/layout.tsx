import React from 'react'
import './globals.css'
function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang='en'>
      <body>
        <div>
      {children}
      </div>
      </body>
    </html>
  )
}

export default RootLayout
