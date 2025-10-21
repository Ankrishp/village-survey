import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Village Survey App",
  description: "A web application for managing village surveys in Tamil Nadu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="w-full border-b bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="text-lg font-bold">Village Survey</a>
            <nav className="space-x-4">
              <a href="/" className="text-sm text-gray-700 hover:underline">Home</a>
              <a href="/village-heads" className="text-sm text-gray-700 hover:underline">Village Heads (TN)</a>
              <a href="/surveys" className="text-sm text-gray-700 hover:underline">Surveys</a>
            </nav>
          </div>
        </header>

        <div className="max-w-6xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
