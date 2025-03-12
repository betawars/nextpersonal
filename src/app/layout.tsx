//This file cotains the example for how when the layout is set, it will be applied through out the project

import { Metadata } from "next"

//This file also contains the example to use the title object instead of the simple string in the tile field
export const metadata: Metadata = {
  title: {
    default:"Next.js Project", //This parameter will set this title to all the children of this layout if they don't have their personal metadata title property
    template:"%s | Next.js "//This is used to set a particular pattern of template, just pass the "title" parameter from the chile to replace %s
  },
  description: 'A next.js learning project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor:"lightblue",
          }}
        >
          <p>header</p>
        </header>
        {children}
        <footer
          style={{
            backgroundColor:"lightgoldenrodyellow"
          }}
        >
          <p>Footer</p>
        </footer>

      </body>
    </html>
  )
}
