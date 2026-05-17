import './globals.css'

export const metadata = {
  title: 'Acar Sineklik Sistemleri',
  description: 'Evinizin Konfor ve Güvenliği',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        {/* İkonlar için FontAwesome bağlantısı */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
        {/* Google Fonts bağlantısı */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>{children}</body>
    </html>
  )
}