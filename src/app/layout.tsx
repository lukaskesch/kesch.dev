import localFont from "next/font/local";
import "./globals.css";
import GoogleAnalyticsWrapper from "@/components/GoogleAnalyticsWrapper";
import Link from "next/link";
import NavLink from "@/components/nav-link";

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



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index,follow" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="flex flex-row justify-between items-center mx-4 my-2">
          <nav className="flex flex-row gap-4 items-center">
            <Link href="/">
              <div className="text-2xl font-bold">Kesch.dev</div>
            </Link>
            <ul className="flex flex-row items-center gap-4">
              {/* <li>
                <NavLink href="/">Home</NavLink>
              </li> */}
              {/* <li>
                <NavLink href="/blog">Blog</NavLink>
              </li> */}
            </ul>
          </nav>
          <nav>
            <ul className="flex flex-row items-center gap-4">
              <li>
                <a href="https://github.com/lukaskesch" target="_blank">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/lukaskesch" target="_blank">
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <GoogleAnalyticsWrapper />
      </body>
    </html>
  );
}
