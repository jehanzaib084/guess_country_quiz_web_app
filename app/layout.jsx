import { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "Country Quiz App | FA22-BSE-084",
  description: "Test your knowledge of countries around the world with this interactive quiz app. Advanced Web Assignment by FA22-BSE-084.",
  keywords: ["country quiz", "geography quiz", "web application", "NextJS", "FA22-BSE-084"],
  authors: [{ name: "FA22-BSE-084" }],
  creator: "FA22-BSE-084",
  publisher: "FA22-BSE-084",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
  openGraph: {
    title: "Country Quiz App | FA22-BSE-084",
    description: "Test your knowledge of countries around the world with this interactive quiz app.",
    type: "website",
    locale: "en_US",
    siteName: "Country Quiz App"
  }
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
