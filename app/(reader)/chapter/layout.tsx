

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
      <main className="w-screen overflow-hidden">{children}</main>
  
  )
}
