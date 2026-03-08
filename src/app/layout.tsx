import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Радостная Весть — Evangelical Baptist Church of Philadelphia",
  description:
    "Евангельская Баптистская Церковь Филадельфии «Радостная Весть». Служим Богу и людям с 1913 года. 514 Highland Avenue, Feasterville, PA 19053.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
