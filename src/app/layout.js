"use client";

import { Provider } from "react-redux";
import "./globals.css";
import { Geist } from "next/font/google";
import { store } from "./Redux/Store";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geistSans.variable}>
      <title>Netflix</title>
      <link rel="icon" href="/Assets/netflix-logo-icon.svg" />
      <body className="bg-black">
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
