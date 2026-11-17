"use client";

import { settings } from "@/settings/settings";
import "@/partials/Topo/topo.scss";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";
import { josefinSans } from "@/lib/fonts";
import HamburgerMenu from "@/components/HamburgerMenu";

const { numeroTelefone, numeroTelefone1, numeroWhatsapp, ddd, whatsappApi, email } = settings;

export default function Topo() {

  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = () => {
    const scroll = window.scrollY;
    setIsFixed(scroll > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMobile = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (

    <header>

      <div className={isFixed ? "topo fixed" : "topo"}>
        <div className="topo-menu">
          <div className="base">

            <div className="flex flex-col gap-4 w-1/2 max-[940px]:w-1/2 justify-center !mt-2 !mb-2">
              <div className="imgLogoLinks flex items-center justify-center flex-col gap-2">
                <Link
                  href="/"
                  className={`w-full ${pathname === "/" ? "active" : ""}`}
                >
                  <Image
                    alt="Imagem"
                    src="/logo.webp"
                    width={100}
                    height={100}
                    quality={100}
                  />
                </Link>
              </div>

              <div className="flex items-center max-[940px]:hidden font-bold text-[#126d82]">
                <Link href={`tel:0${ddd}${numeroTelefone}`}>{`(${ddd}) ${numeroTelefone}`}</Link>
                <Link href={`tel:0${ddd}${numeroTelefone1}`}>{`(${ddd}) ${numeroTelefone1}`}</Link>
              </div>
            </div>

            {/* TELEFONE MOBILE */}
            <div className="min-[940px]:hidden text-white mr-2 text-xs">
              <Link href={`tel:0${ddd}${numeroTelefone}`}>{`(${ddd}) ${numeroTelefone}`}</Link>
            </div>

            {/* MENU DESKTOP */}
            <ul className="topo-links h-full">
              <li className="topo-item text-[#126d82] h-full flex items-center justify-center">
                <Link
                  href="/"
                  className={`flex items-center justify-center h-full ${pathname === "/" ? "active" : ""}`}
                >
                  Home
                </Link>
              </li>

              <li className="topo-item text-[#126d82] h-full flex items-center justify-center">
                <Link
                  href="/informacoes"
                  className={`flex items-center justify-center h-full ${pathname === "/informacoes" ? "active" : ""}`}
                >
                  Produtos
                </Link>
              </li>

              <li className="topo-item text-[#126d82] h-full flex items-center justify-center">
                <Link
                  href="/servicos"
                  className={`flex items-center justify-center h-full ${pathname === "/servicos" ? "active" : ""}`}
                >
                  Serviços
                </Link>
              </li>

              <li className="topo-item text-[#126d82] h-full flex items-center justify-center">
                <Link
                  href="/dicas"
                  className={`flex items-center justify-center h-full ${pathname === "/dicas" ? "active" : ""}`}
                >
                  Dicas
                </Link>
              </li>

              <li className="topo-item text-[#126d82] h-full flex items-center justify-center">
                <Link
                  href="/contato"
                  className={`flex items-center justify-center h-full ${pathname === "/contato" ? "active" : ""}`}
                >
                  Contato
                </Link>
              </li>
            </ul>

            <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMobile} />

          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      <div className={`menu-mobile ${isMenuOpen ? "open" : ""}`}>
        <ul className="topo-links-mobile">
          <li className="topo-item">
            <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
          </li>
          <li className="topo-item">
            <Link href="/informacoes" className={pathname === "/informacoes" ? "active" : ""}>Produtos</Link>
          </li>
          <li className="topo-item">
            <Link href="/servicos" className={pathname === "/servicos" ? "active" : ""}>Serviços</Link>
          </li>
          <li className="topo-item">
            <Link href="/dicas" className={pathname === "/dicas" ? "active" : ""}>Dicas</Link>
          </li>
          <li className="topo-item">
            <Link href="/contato" className={pathname === "/contato" ? "active" : ""}>Contato</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
