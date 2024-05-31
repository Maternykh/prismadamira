import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Providers } from "./Providers";

const rubik = Rubik({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Bubble tea г.Ясный",
  description: "Самые вкусные Bubble tea в г.Ясном",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${rubik.className} bg-gray-900 text-white p-5`}>
          <Header />
          {children}
        </body>
      </html>
    </Providers>
  );
}
