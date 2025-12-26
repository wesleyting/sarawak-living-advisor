import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body className="min-h-screen bg-zinc-50 text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  );
}
