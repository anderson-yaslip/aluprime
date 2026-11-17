import { Check } from 'lucide-react';
import sass from './servicos.module.scss'
import Image from 'next/image';
import Link from 'next/link';

function Servicos() {

    return (

        <>
            <div className={sass.container}>
                <div className={sass.containerDicas}>

                    <div className={sass.containerTextos}>
                        <h1>Serviços</h1>

                        {/* Seção 1 – H2 */}
                        <h2>Fechamento de Sacadas</h2>
                        <p>
                            Sistema de Fechamento de Sacadas através de painéis de vidros temperado de 8 ou 10mm que deslizam sobre trilhos horizontais 
                            e giram em um ângulo de 90º, um a um possibilitando a abertura total do ambiente com segurança, conforto e praticidade, 
                            adaptando-se a diversas formas geométricas.
                        </p>
                    </div>

                    <div className={sass.containerServicos}>
                        {/* Seção 2 – H2 */}
                        <h2>Excelente eficiência de vedação, possibilitando melhor aproveitamento do espaço.</h2>

                        <div className={sass.containerLinks}>

                            <div className={sass.containerDivs}>
                                {/* H3 */}
                                <h3>Edifícios Residenciais</h3>

                                <ul>
                                    <li>
                                        <Check size={20} />
                                        <Link href="/persianas-integradas-de-aluminio">Persiana Integrada</Link>
                                    </li>

                                    <li>
                                        <Check size={20} />
                                        <Link href="/portas-de-aluminio">Janelas e Portas</Link>
                                    </li>

                                    <li>
                                        <Check size={20} />
                                        <Link href="/grades-de-aluminio">Grades de Sacadas</Link>
                                    </li>

                                    <li>
                                        <Check size={20} />
                                        <Link href="/portoes-de-aluminio-com-automacao">Portões Basculantes e de Correr</Link>
                                    </li>

                                    <li>
                                        <Check size={20} />
                                        <Link href="/fechamento-de-sacadas">Fechamento de Sacada</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className={sass.containerDivs}>
                                {/* H3 vira H4 (seguindo ordem: H2 → H3 → H4 → H5) */}
                                <h4>Edifícios Comerciais</h4>

                                <ul>
                                    <li>
                                        <Check size={20} />
                                        <Link href="/fachada-pele-de-vidro">Fachada Pele de Vidro ”Structural Glassing”</Link>
                                    </li>

                                    <li>
                                        <Check size={20} />
                                        <Link href="/sistema-de-envidracamento-de-sacada">Sistema de Envidraçamento de Sacada</Link>
                                    </li>

                                    <li>
                                        <Check size={20} />
                                        <Link href="/revestimentos-de-acm">Revestimento Metálico em Painéis de ACM</Link>
                                    </li>

                                    <li>
                                        <Check size={20} />
                                        <Link href="/portas-automatizadas">Portas Automatizadas</Link>
                                    </li>
                                    <br />
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className={sass.containerServicos}>
                        <div className={sass.containerLinks}>

                            <div className={sass.containerDivs}>
                                {/* H5 (seguindo escadinha) */}
                                <h5>Edifícios Hospitalares</h5>

                                <ul>
                                    <li>
                                        <Check size={20} />
                                        Caixilhos Específicos
                                    </li>

                                    <li>
                                        <Check size={20} />
                                        Barras Anti-Pânico
                                    </li>

                                    <li>
                                        <Check size={20} />
                                        Forros Metálicos
                                    </li>

                                    <li>
                                        <Check size={20} />
                                        Bate Macas
                                    </li>
                                </ul>
                            </div>

                            <div className={sass.containerDivs}>
                                {/* Após H5, reinicia como H3 */}
                                <h3>Pintura / Anodização</h3>

                                <ul>
                                    <li>
                                        <Check size={20} />
                                        Branco
                                    </li>

                                    <li>
                                        <Check size={20} />
                                        Natural Fosco
                                    </li>

                                    <li>
                                        <Check size={20} />
                                        Bronze (1001/1002/1003/1004)
                                    </li>

                                    <li>
                                        <Check size={20} />
                                        Qualidade: PRODEC / OLGA COLOR
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className={sass.containerImage}>
                        <div>
                            <Image
                                width={500}
                                height={100}
                                src="/imagensDicas/arquitetura-aluminio-06.webp"
                                quality={100}
                                alt=""
                            />
                            <Link href="/informacoes">
                                CONFIRA NOSSOS PROJETOS
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Servicos;
