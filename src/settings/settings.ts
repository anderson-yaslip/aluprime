import { SiteSettings } from "@/types";

const siteName = "Soluções Modernas em Envidraçamento e Coberturas | Aluprime";
const title = `${siteName}`;
const description = "Aprenda como conservar sua sacada com segurança e eficiência. Veja dicas práticas de limpeza, uso correto dos painéis e cuidados com envidraçamento";
const keywords = "conservação de sacadas, limpeza de envidraçamento, manutenção de sacadas, cuidados com vidro, dicas para sacadas";
export const url = "https://www.nomesite.com.br/";

// True = Ativo || False = Inativo - Para ativar ou desativar os "includes" das páginas contratadas
export const includes = {
  SaibaMais: true,
  OutrosAssuntos: true,
  MaisVisitados: true,
  TagsPagina: true,
  Copyright: true,
};

export const settings: SiteSettings = {
  title, // Título da página - Obs: Esse titulo é o padrão, cada página deve conter um Metadata
  description, // Descrição da página - Obs: Essa descrição é padrão, cada página deve conter um Metadata
  siteName,
  keywords, // Palavras-chave para SEO index
  canonical: url,
  ddd: "11",
  selosDark: true, // Selos Rodapé - True = Preto ||  False = Branco
  numeroTelefone: "2272-2238",
  numeroTelefone1: "2272-1661",
  whatsappApi: "https://api.whatsapp.com/send?phone=5511996583332",
  whatsappApi1: "https://api.whatsapp.com/send?phone=5511996588395",
  numeroWhatsapp: "99658-3332",
  numeroWhatsapp1: "99658-8395",
  // email: "wesley@yaslip.com.br",
  // emailDestinatario: "wesley@yaslip.com.br",
  email: "andersonmelo.yaslip@gmail.com",
  // email: "aluprime@uol.com.br",
  emailDestinatario: "andersonmelo.yaslip@gmail.com",
  endereco: {
    urlMaps: "https://maps.app.goo.gl/caH1G5Rs1tBdgBRw9",
    rua: "Rua Dr. Sanareli",
    numero: "326",
    cidade: "Vila Prudente",
    estado: "São Paulo/SP",
    cep: "CEP: 03137-100",
    mapaEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7313.3373090575315!2d-46.575423!3d-23.580341000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5c15def69421%3A0xe000ea45df3faa0a!2sR.%20Dr.%20Sanareli%2C%20326%20-%20Vila%20Prudente%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003137-100%2C%20Brasil!5e0!3m2!1spt-PT!2sus!4v1764165416945!5m2!1spt-PT!2sus",
  },
  openGraph: {
    url,
    title,
    description,
    images: [
      {
        url: "/logo.webp",
        width: 300,
        height: 200,
        alt: "Imagem representativa do Site",
      },
    ],
    siteName,
    locale: "pt_BR", // Definindo a localidade do Open Graph
    region: "Brasil", // Definindo a região
  },
  robots: "index, follow",
};
