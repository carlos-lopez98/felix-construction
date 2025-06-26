import type { Metadata } from "next";
import { Anton, Bebas_Neue, Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
});

const anton = Anton({
  weight: "400", // Anton also only has one weight
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
});

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Felix Construction Co.",
  description: "Your Friendly Neighborhood Contractor",
  icons: {
    icon: './favicon.png'
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});




export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {


  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} ${bebasNeue.variable} ${anton.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
