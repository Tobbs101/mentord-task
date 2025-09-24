import type { Metadata } from "next";
import Link from "next/link";
import { Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Store",
  description: "Fake Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.variable} antialiased`}>
        <header className="w-full border-b border-[#161616]/20 bg-white">
          <nav className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="text-[#161616] font-semibold tracking-tight"
            >
              Store
            </Link>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/products" className="hover:underline">
                Products
              </Link>
              <Link href="/cart" className="hover:underline">
                Cart
              </Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
