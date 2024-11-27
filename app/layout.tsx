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
  title: "Beacon - Local Social Network",
  description: "Beacon is a revolutionary location-based social network that connects you with your local community. Built with cutting-edge technology including real-time location services, secure authentication, and seamless media sharing. Created by Group 13 as part of our innovative approach to local social networking.",
  keywords: ["Beacon", "Social Network", "Location Based", "Community", "Android App", "Mobile App", "Social Media"],
  authors: [
    { name: "Omar Elshehawi" },
    { name: "Jonathan Gibbons" },
    { name: "Zaid Arshad" },
    { name: "Lex Rohweder" }
  ],
  openGraph: {
    title: "Beacon - Connect with Your Local Community",
    description: "Discover a new way to connect with people around you through Beacon's innovative location-based social network.",
    type: "website",
  }
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
        {children}
      </body>
    </html>
  );
}
