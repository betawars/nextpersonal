//This file cotains the example for how when the layout is set, it will be applied theough out the project

export const metadata = {
  title: 'NextPersonal',
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
