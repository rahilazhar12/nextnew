import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Whatsapp from "./Components/Whatsapp/Whatsapp";
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.css"
  rel="stylesheet"
/>




const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Header />
        {children}
        <Whatsapp />
        <Footer />
      </body>
    </html>
  );
}
