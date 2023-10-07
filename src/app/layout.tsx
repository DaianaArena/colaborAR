import './globals.css'


//Tab info
export const metadata = {
  title: 'ColaborAR',
  description: "Una red de colaboradores de IT autogestiva.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      {/*Head meta data for social media*/}
      <head>
      
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>

      <meta name="title" content="ColaborAR"/>
      <meta name="description" content="Una red de colaboradores de IT autogestiva."/>


      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://daianaarena.vercel.app/"/>
      <meta property="og:title" content="ColaborAR"/>
      <meta property="og:description" content="Una red de colaboradores de IT autogestiva."/>
      <meta property="og:image" content="https://i.imgur.com/9HFm2Wo.png"/>


      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://daianaarena.vercel.app/"/>
      <meta property="twitter:title" content="ColaborAR"/>
      <meta property="twitter:description" content="Una red de colaboradores de IT autogestiva."/>
      <meta property="twitter:image" content="https://i.imgur.com/9HFm2Wo.png"/>


      </head>

      <body className="flex flex-col h-screen bg-purple-900">

        
        {children}

        <script
        type="text/javascript"
        src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js"></script>
        
      </body>
    </html>
  )
}