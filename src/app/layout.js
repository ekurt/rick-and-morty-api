import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="container mx-auto">
          <Header />
          <main className="mt-5">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
