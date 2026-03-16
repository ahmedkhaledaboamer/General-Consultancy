import { Cairo } from "next/font/google";
import "./globals.css";
const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${cairo.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
