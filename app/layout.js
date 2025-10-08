import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import {ClerkProvider} from "@clerk/nextjs";

const inter = Inter({subsets: ["latin"]});
export const metadata = {
  title: "Vehiql",
  description: "Find Your Dream Car",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <Header />
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
