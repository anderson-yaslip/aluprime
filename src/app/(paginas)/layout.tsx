import { settings } from "@/settings/settings";
// import Script from "next/script";
import "normalize.css";
import "@/styles/globals.css";

import { frankRuhl, josefinSans, poppins, openSans } from "@/lib/fonts";

import type { Metadata } from "next";

import Topo from "@/partials/Topo";
import Rodape from "@/partials/Rodape";
import RodapeMobile from "@/partials/RodapeMobile";
import Form from "@/components/Home/Form";

const { title, description, keywords, canonical, openGraph, robots } = settings;

export const metadata: Metadata = {
  metadataBase: new URL(canonical),
  title, // Usando o título do arquivo de configuração
  description, // Usando a descrição
  keywords, // Usando as palavras-chave
  alternates: {
    canonical, // URL canônica
    languages: {
      "pt-BR": "/",
    },
  },
  openGraph: {
    url: openGraph.url,
    title: openGraph.title,
    description: openGraph.description,
    images: openGraph.images,
    siteName: openGraph.siteName,
    locale: openGraph.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: openGraph.images,
  },
  robots: robots,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KSW687X');
      `,
          }}
        />
      </head>
      <body
        className={`${frankRuhl.variable} ${poppins.variable} ${josefinSans.variable} ${openSans.variable} `}
      >
        {/* bg-[#e4e4e4] */}
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KSW687X"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Topo />
        {children}
        {/* <Form /> */}
        <Rodape />
        <RodapeMobile />
      </body>
    </html>
  );
}
