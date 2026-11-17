import { Boxes, Cog, Lightbulb, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import sass from "./esquadrias.module.scss";

function Esquadrias() {

    return (

        <>
            <div className={sass.containerEsquadriasFundo}>
                <div className="w-full lg:w-[80%] !mx-auto h-auto bg-[#e4e4e4] !py-2 !px-0">

                    <div className="w-full md:w-[80%] !mx-auto !mt-30">

                        <h1 className="text-left !m-4 text-[#38adc8] font-bold text-2xl uppercase">
                            Esquadrias de Alumínio
                        </h1>

                        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-[2px] mt-6">
                            <div className="relative basis-[calc(50%-8px)] sm:basis-[calc(25%-8px)] h-[150px] lg:h-[200px] bg-white text-center transition-all transform duration-500 hover:bg-[#b8efff] hover:scale-110">
                                <Link href="/dicas" className="flex flex-col items-center justify-center h-full gap-2 text-[28px] tracking-[1px]">
                                    <Lightbulb size={80} color="#00c4ff" />
                                    <span className="text-[#333] font-medium">Dicas</span>
                                </Link>
                            </div>

                            <div className="relative basis-[calc(50%-8px)] sm:basis-[calc(25%-8px)] h-[150px] lg:h-[200px] bg-white text-center transition-all transform duration-500 hover:bg-[#b8efff] hover:scale-110">
                                <Link href="/informacoes" className="flex flex-col items-center justify-center h-full gap-2 text-[28px] tracking-[1px]">
                                    <Boxes size={80} color="#00c4ff" />
                                    <span className="text-[#333] font-medium">Produtos</span>
                                </Link>
                            </div>

                            <div className="relative basis-[calc(50%-8px)] sm:basis-[calc(25%-8px)] h-[150px] lg:h-[200px] bg-white text-center transition-all transform duration-500 hover:bg-[#b8efff] hover:scale-110">
                                <Link href="/servicos" className="flex flex-col items-center justify-center h-full gap-2 text-[28px] tracking-[1px]">
                                    <div className="relative w-[120px] h-[80px] flex items-center justify-center">
                                        <Cog size={70} strokeWidth={2} color="#00c4ff" className="absolute" />
                                        <Cog size={40} strokeWidth={2} color="#00c4ff" className="absolute -right-2 -top-1" />
                                        <Cog size={35} strokeWidth={2} color="#00c4ff" className="absolute right-[-5px] bottom-1.5" />
                                    </div>
                                    <span className="text-[#333] font-medium">Serviços</span>
                                </Link>
                            </div>

                            <div className="relative basis-[calc(50%-8px)] sm:basis-[calc(25%-8px)] h-[150px] lg:h-[200px] bg-white text-center transition-all transform duration-500 hover:bg-[#b8efff] hover:scale-110">
                                <Link href="/contato" className="flex flex-col items-center justify-center h-full gap-2 text-[28px] tracking-[1px]">
                                    <Phone size={70} color="#fff" fill="#fff" className="bg-[#00c4ff] rounded-2xl !p-2" />
                                    <span className="text-[#333] font-medium">Contato</span>
                                </Link>
                            </div>
                        </div>

                    </div>

                    <div className="w-[100%] lg:w-[80%] !mx-auto flex flex-col lg:flex-row items-center justify-center gap-4 !p-14">
                        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-2">

                            {/* H2 */}
                            <h2 className="text-[#38afcb] font-bold text-lg">
                                Arquitetura de Alumínio - Grades de Alumínio - Pele de Vidro
                            </h2>

                            <p className="tracking-tight">
                                A Aluprime é uma empresa que atua no setor de construção civil oferecendo serviços especializados em arquitetura de alumínio, como esquadrias de alumínio e envidraçamento de sacadas. Além de projetar e fabricar essas estruturas, a Aluprime também as instala. A empresa se empenha em atender bem aos seus clientes, focando em estratégias para entregar produtos com acabamento de alta qualidade, atendimento personalizado, cumprimento de prazos e custos otimizados.
                            </p>
                        </div>

                        <div className="w-full lg:w-1/2 items-center justify-center flex">
                            <Image
                                src="/imagensIndex/img-home.webp"
                                width={400}
                                height={300}
                                quality={100}
                                alt="Grades de Alumínio"
                                className="rounded-2xl"
                            />
                        </div>
                    </div>

                    {/* SEÇÃO PRINCIPAIS PRODUTOS */}
                    <div>
                        <h2 className="!m-6 w-[80%] !mx-auto text-[#38adc8] font-bold uppercase">
                            Principais Produtos - Aluprime
                        </h2>

                        <div className="flex items-center justify-center w-[100%] !mx-auto gap-6 flex-wrap">

                            {/* CARD 1 - H3 */}
                            <Link
                                href="/arquitetura-de-aluminio"
                                className="text-center flex flex-col items-center justify-center h-[350px] !p-2 !bg-[#cfcfcf] shadow-[0_0_5px_5px_rgba(0,0,0,0.2)] rounded-3xl transition-all duration-300 ease-in-out hover:!bg-white w-[250px] gap-3"
                            >
                                <Image
                                    src="/imagensIndex/card1.webp"
                                    width={250}
                                    height={250}
                                    alt="Arquitetura de Alumínio"
                                    quality={100}
                                    className="w-[180px] h-[180px] rounded-full object-cover"
                                />

                                <div className="flex flex-col items-center justify-center">
                                    <h3 className="text-[20px] !mb-4 text-[#38adc8] font-bold">
                                        Arquitetura de Aluminio
                                    </h3>
                                    <p className="text-[14px] text-[#38adc8]">
                                        A escolha moderna para estruturas arquitetônicas sofisticadas, destacando leveza e durabilidade.
                                    </p>
                                </div>
                            </Link>

                            {/* CARD 2 - H4 */}
                            <Link
                                href="/fachadas-de-acm"
                                className="text-center flex flex-col items-center justify-center h-[350px] !p-2 !bg-[#cfcfcf] shadow-[0_0_5px_5px_rgba(0,0,0,0.2)] rounded-3xl transition-all duration-300 ease-in-out hover:!bg-white w-[250px] gap-3"
                            >
                                <Image
                                    src="/imagensIndex/card2.webp"
                                    width={250}
                                    height={250}
                                    alt="Fachada de ACM"
                                    quality={100}
                                    className="w-[200px] h-[200px] rounded-full object-cover"
                                />

                                <div className="flex flex-col items-center justify-center">
                                    <h4 className="text-[20px] !mb-4 text-[#38adc8] font-bold">
                                        Fachada de ACM
                                    </h4>
                                    <p className="text-[14px] text-[#38adc8]">
                                        Elegância contemporânea, leveza e durabilidade, transformando fachadas com modernidade e versatilidade.
                                    </p>
                                </div>
                            </Link>

                            {/* CARD 3 - H5 */}
                            <Link
                                href="/envidracamento-de-sacadas"
                                className="text-center flex flex-col items-center justify-center h-[350px] !p-2 !bg-[#cfcfcf] shadow-[0_0_5px_5px_rgba(0,0,0,0.2)] rounded-3xl transition-all duration-300 ease-in-out hover:!bg-white w-[250px] gap-3"
                            >
                                <Image
                                    src="/imagensIndex/card3.webp"
                                    width={250}
                                    height={250}
                                    alt="Envidraçamento de Sacadas"
                                    quality={100}
                                    className="w-[200px] h-[200px] rounded-full object-cover"
                                />

                                <div className="flex flex-col items-center justify-center">
                                    <h5 className="text-[20px] !mb-4 text-[#38adc8] font-bold">
                                        Envidraçamento de Sacadas
                                    </h5>
                                    <p className="text-[14px] text-[#38adc8]">
                                        Leveza, transparência e elegância redefinem sua experiência ao ar livre.
                                    </p>
                                </div>
                            </Link>

                            {/* CARD 4 - volta para H3 */}
                            <Link
                                href="/serralheria-de-aluminio"
                                className="text-center flex flex-col items-center justify-center h-[350px] !p-2 !bg-[#cfcfcf] shadow-[0_0_5px_5px_rgba(0,0,0,0.2)] rounded-3xl transition-all duration-300 ease-in-out hover:!bg-white w-[250px] gap-3"
                            >
                                <Image
                                    src="/imagensIndex/card4.webp"
                                    width={250}
                                    height={250}
                                    alt="Serralheria de Aluminio"
                                    quality={100}
                                    className="w-[200px] h-[200px] rounded-full object-cover"
                                />

                                <div className="flex flex-col items-center justify-center">
                                    <h3 className="text-[20px] !mb-4 text-[#38adc8] font-bold">
                                        Serralheria de Aluminio
                                    </h3>
                                    <p className="text-[14px] text-[#38adc8]">
                                        Estruturas robustas e elegantes, combinando durabilidade e design moderno com precisão artesanal.
                                    </p>
                                </div>
                            </Link>

                        </div>
                    </div>

                    {/* SEÇÃO PRINCIPAIS SERVIÇOS */}
                    <div className="!mt-10 !mb-4">
                        <h2 className="!m-6 w-[80%] !mx-auto text-[#38adc8] font-bold uppercase">
                            Principais Servicos - Aluprime
                        </h2>

                        <div className="flex items-center justify-center w-[100%] !mx-auto gap-6 flex-wrap">

                            {/* CARD 1 - H3 */}
                            <Link
                                href="/caixilharia-personalizada"
                                className="text-center flex flex-col items-center justify-center h-[350px] !p-2 !bg-[#cfcfcf] shadow-[0_0_5px_5px_rgba(0,0,0,0.2)] rounded-3xl transition-all duration-300 ease-in-out hover:!bg-white w-[250px] gap-3"
                            >

                                <Image
                                    src="/imagensIndex/card5.webp"
                                    width={250}
                                    height={250}
                                    alt="Caixilharia Personalizada"
                                    quality={100}
                                    className="w-[180px] h-[180px] rounded-full object-cover"
                                />

                                <div className="flex flex-col items-center justify-center">
                                    <h3 className="text-[20px] !mb-4 text-[#38adc8] font-bold">
                                        Caixilharia Personalizada
                                    </h3>
                                    <p className="text-[14px] text-[#38adc8]">
                                        Transformamos ideias em realidade, oferecendo serviços especializados para estruturas sob medida.
                                    </p>
                                </div>
                            </Link>

                            {/* CARD 2 - H4 */}
                            <Link
                                href="/esquadrias-de-aluminio"
                                className="text-center flex flex-col items-center justify-center h-[350px] !p-2 !bg-[#cfcfcf] shadow-[0_0_5px_5px_rgba(0,0,0,0.2)] rounded-3xl transition-all duration-300 ease-in-out hover:!bg-white w-[250px] gap-3"
                            >

                                <Image
                                    src="/imagensIndex/card6.webp"
                                    width={250}
                                    height={250}
                                    alt="Esquadrias de Aluminio"
                                    quality={100}
                                    className="w-[200px] h-[200px] rounded-full object-cover"
                                />

                                <div className="flex flex-col items-center justify-center">
                                    <h4 className="text-[20px] !mb-4 text-[#38adc8] font-bold">
                                        Esquadrias de Aluminio
                                    </h4>
                                    <p className="text-[14px] text-[#38adc8]">
                                        Solução personalizadas, unindo design moderno, durabilidade e precisão para transformar seus espaços com estilo.
                                    </p>
                                </div>
                            </Link>

                            {/* CARD 3 - H5 */}
                            <Link
                                href="/grades-de-aluminio"
                                className="text-center flex flex-col items-center justify-center h-[350px] !p-2 !bg-[#cfcfcf] shadow-[0_0_5px_5px_rgba(0,0,0,0.2)] rounded-3xl transition-all duration-300 ease-in-out hover:!bg-white w-[250px] gap-3"
                            >

                                <Image
                                    src="/imagensIndex/card7.webp"
                                    width={250}
                                    height={250}
                                    alt="Grades de Aluminio"
                                    quality={100}
                                    className="w-[200px] h-[200px] rounded-full object-cover"
                                />

                                <div className="flex flex-col items-center justify-center">
                                    <h5 className="text-[20px] !mb-4 text-[#38adc8] font-bold">
                                        Grades de Aluminio
                                    </h5>
                                    <p className="text-[14px] text-[#38adc8]">
                                        Soluções personalizadas oferecem proteção robusta, combinando design moderno e durabilidade excepcional.
                                    </p>
                                </div>
                            </Link>

                            {/* CARD 4 – VOLTA PARA H3 */}
                            <Link
                                href="/portoes-de-aluminio"
                                className="text-center flex flex-col items-center justify-center h-[350px] !p-2 !bg-[#cfcfcf] shadow-[0_0_5px_5px_rgba(0,0,0,0.2)] rounded-3xl transition-all duration-300 ease-in-out hover:!bg-white w-[250px] gap-3"
                            >

                                <Image
                                    src="/imagensIndex/card8.webp"
                                    width={250}
                                    height={250}
                                    alt="Portões de Aluminio"
                                    quality={100}
                                    className="w-[200px] h-[200px] rounded-full object-cover"
                                />

                                <div className="flex flex-col items-center justify-center">
                                    <h3 className="text-[20px] !mb-4 text-[#38adc8] font-bold">
                                        Portões de Aluminio
                                    </h3>
                                    <p className="text-[14px] text-[#38adc8]">
                                        Transforme sua entrada com portões personalizados, unindo durabilidade e design moderno.
                                    </p>
                                </div>
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Esquadrias;
