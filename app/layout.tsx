import { Cairo } from "next/font/google";
import "./globals.css";
import { getLocale } from "next-intl/server";
const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body className={`${cairo.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
