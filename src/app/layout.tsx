import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kesch",
  description: "Kesch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="flex flex-row justify-between items-center mx-4 my-2">
          <nav className="flex flex-row gap-4 items-center">
            <a href="/">
              <div className="text-xl font-bold">Kesch.dev</div>
            </a>
            <ul className="flex flex-row gap-4">
              <li>
                <a href="/projects">Projects</a>
              </li>
            </ul>
          </nav>
          <nav>
            <ul className="flex flex-row items-center gap-4">
              <li>
                <a href="https://focusjournal.io" target="_blank">
                  Focus Journal
                </a>
              </li>
              <li>
                <a href="https://github.com/lukaskesch" target="_blank">
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
