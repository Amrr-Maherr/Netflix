"use client"; // مهم جداً

import { Provider } from "react-redux";
import "./globals.css";
import { Geist } from "next/font/google";
import { store } from "./Redux/Store";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

// export const metadata = {
//   title: "Netflix",
//   description: "Unlimited movies, TV shows, and more.",
//   icons: {
//     icon: "/Assets/netflix-logo-icon.svg",
//   },
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body className="bg-black">
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
