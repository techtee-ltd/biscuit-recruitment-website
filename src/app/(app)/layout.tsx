import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import StickyFooter from "@/src/components/StickyFooter";
import type { Metadata } from "next";
import "@/src/app/globals.scss";

export const metadata: Metadata = {
  title: "Biscuit Recruitment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <StickyFooter isGlobalScope={true} />
      </body>
    </html>
  );
}
