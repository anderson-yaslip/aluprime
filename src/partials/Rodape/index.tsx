"use client";

import { BsTelephoneForward } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import "@/partials/Rodape/rodape.scss";
import ScrollToTop from "@/components/ScrollToTop";
import { url, settings } from "@/settings/settings";
import { usePathname } from "next/navigation";
import { FaMapMarkedAlt } from "react-icons/fa";

export default function Rodape() {

  const { siteName, selosDark, numeroTelefone, numeroTelefone1, numeroWhatsapp, numeroWhatsapp1, whatsappApi1, ddd, email, whatsappApi } =
    settings;
  const { rua, numero, cidade, estado, cep, urlMaps } = settings.endereco;
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const urlFormatted = url.replace(/\/$/, "");
  const fullUrl = `${urlFormatted}${pathname}`;

  return (

    <footer className="!bg-[#458796]">

      <div className="top">

        <Link className="logoFooter" href={`/`}>
          <Image src="/logo.webp" width={200} height={60} alt="" />
        </Link>

        <div className="menuFooter">
          <h2>Menu</h2>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Dicas</Link>
            </li>
            <li>
              <Link href="/">Serviços</Link>
            </li>
            <li>
              <Link href="/informacoes">+</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
        </div>

        <div className="contactNumeros">
          <h2>Contato</h2>
          <Link
            href={`tel:0${ddd}${numeroTelefone}`}
          >
            {`(${ddd}) ${numeroTelefone}`}
          </Link>
          <Link
            href={`tel:0${ddd}${numeroTelefone1}`}
          >
            {`(${ddd}) ${numeroTelefone1}`}
          </Link>

          <Link
            href={`${whatsappApi}`}
            target="_blank"
          >
            {`(${ddd}) ${numeroWhatsapp}`}
          </Link>

          <Link
            href={`${whatsappApi1}`}
            target="_blank"
          >
            {`(${ddd}) ${numeroWhatsapp1}`}
          </Link>
        </div>

        <div className="contactFooter">
          <h2>Endereço</h2>
          <ul>
            {/* <li>
              <IoMailOutline size={20} />
              <Link href={`mailto:${email}`}>{`${email}`}</Link>
            </li> */}

            <li>
              {/* className="flex flex-col !items-start"> */}
              <Link href={urlMaps} target="_blank">{`${rua}, ${numero}`}</Link>
              <Link href={urlMaps} target="_blank">{`${cidade} ${estado}, ${cep}`}</Link>
            </li>
          </ul>
        </div>

        <div className="footerSelos">
          <div className="logoYaslip">
            <object
              data={`/selos/${selosDark ? "selo-branco.svg" : "selo-preto.svg"
                }`}
              type="image/svg+xml"
            ></object>
          </div>
          <ul>
            <li>
              <Link
                href={`http://validator.w3.org/check?uri=${fullUrl}`}
                target="_blank"
              >
                <Image
                  alt="W3C HTML Validator"
                  src={`/selos/${selosDark ? "w3c-html.webp" : "w3c-html-preto.webp"
                    }`}
                  width={40}
                  height={60}
                />
              </Link>
            </li>
            <li>
              <Link
                href={`http://jigsaw.w3.org/css-validator/validator?uri=${fullUrl}`}
                target="_blank"
              >
                <Image
                  alt="W3C CSS Validator"
                  src={`/selos/${selosDark ? "w3c-css.webp" : "w3c-css-preto.webp"
                    }`}
                  width={40}
                  height={60}
                />
              </Link>
            </li>
            <li>
              <Link
                href={`https://developers.google.com/speed/pagespeed/insights/?url=${fullUrl}`}
                target="_blank"
              >
                <Image
                  alt="Google PageSpeed"
                  src={`/selos/${selosDark ? "pagespeed.webp" : "pagespeed-preto.webp"
                    }`}
                  width={40}
                  height={60}
                />
              </Link>
            </li>
            <li>
              {typeof window !== "undefined" &&
                window.location.protocol === "https:" && (
                  <Link
                    href={`https://developers.google.com/speed/pagespeed/insights/?url=${fullUrl}`}
                    target="_blank"
                  >
                    <Image
                      alt="SSL"
                      src={`/selos/${selosDark ? "ssl.webp" : "ssl-preto.webp"
                        }`}
                      width={40}
                      height={60}
                    />
                  </Link>
                )}
            </li>
          </ul>
        </div>
      </div>

      <div className="bottomRowFooter">
        <p>
          Copyright © {year} {siteName}. Todos os direitos reservados{" "}
          <Link href="/mapa-site">.</Link>
        </p>
      </div>

      <div className="whatsapp-btn">
        <a
          target="blank"
          rel="nofollow"
          href={whatsappApi}
          aria-label="Botão Whatsapp"
        >
          <div className="animated infinite zoomIn whatsapp-animate-circulo-pulse"></div>
          <div className="animated infinite pulse whatsapp-btn-bg"></div>
          <div className="animated infinite tada whatsapp-btn-config"></div>
          <span style={{ display: "none" }}>.</span>
        </a>
      </div>

      <ScrollToTop />

    </footer >
  );
}
