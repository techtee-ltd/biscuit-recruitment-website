import "@/src/app/globals.scss";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import LoadingPage from "@/src/components/LoadingPage";
import StickyFooter from "@/src/components/StickyFooter";
import type { Metadata } from "next";

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
        <LoadingPage>{children}</LoadingPage>
        <Footer />
        <StickyFooter isGlobalScope={true} />
      </body>
    </html>
  );
}
