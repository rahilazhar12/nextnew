import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Whatsapp from "./Components/Whatsapp/Whatsapp";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
        <Header />
        {children}
        <Whatsapp />
        <Footer />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollegeOrUniversity",
              name: "PNY Trainings",
              url: "https://www.pnytrainings.com/",
              logo:
                "https://www.pnytrainings.com/assets/uploads//logo/1529168423-school-logo.jpg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "03041111774",
                contactType: "customer service",
                contactOption: "HearingImpairedSupported",
                areaServed: "PK",
                availableLanguage: "en",
              },
              sameAs: [
                "https://www.facebook.com/PNY.Trainings/",
                "https://www.instagram.com/pny.trainings/",
                "https://www.youtube.com/c/PNYTrainingsOfficial",
                "https://pk.linkedin.com/company/pny-trainings",
              ],
            }),
          }}
        />

        {/* <!-- Google tag (gtag.js) --> */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-JWSHEGQWHD"></Script>
        <Script id="gtag-init">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JWSHEGQWHD');
        `}
        </Script>
      </body>
      
    </html>
  );
}
