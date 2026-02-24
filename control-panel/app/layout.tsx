import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {/* header que ficará em toda pagina */}
        <h1>Hello World!</h1>
        {children}
      </body>
    </html>
  );
}
