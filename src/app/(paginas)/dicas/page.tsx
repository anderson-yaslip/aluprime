import { Check } from 'lucide-react';
import sass from './dicas.module.scss';
import Image from 'next/image';
import Link from 'next/link';

function Dicas() {

    return (

        <>
            <div className={sass.container}>

                <div className={sass.containerDicas}>

                    <div className={sass.titulo}>
                        <h1>Dicas para conservação de sacadas</h1>
                        <h2>Confira algumas de nossas dicas</h2>

                        <h3>Orientações para o uso e conservação do sistema de envidraçamento de sacadas</h3>

                        <div className=''>
                            <Check size={20} />
                            <p>Para sua limpeza e conservação, utilizar água e sabão neutro ou limpador de vidro. Evite a utilização de produtos químicos. Limpe os painéis pela parte interna, evitando debruçar sobre o guarda corpo</p>
                        </div>

                        <div>
                            <Check size={20} />
                            <p> Para o recolhimento total dos painéis ou para movimentação parcial é necessário destravar o primeiro e gira-lo até o ângulo de 90º e a partir do segundo painel ao último, siga a orientação do sentido de abertura. Manuseie cada painel individualmente deslizando até o seu limite de abertura.</p>
                        </div>

                        <div>
                            <Check size={20} />
                            <p>  Para o completo fechamento, retorne individualmente cada painel no trilho para que este possa deslizar por todo o percurso de volta à sua posição inicial.</p>
                        </div>

                        <div>
                            <Check size={20} />
                            <p> mantenha a trava de segurança fechada e a chave fora do alcance das crianças.</p>
                        </div>

                        <h3>Confira Nossos Portfolio</h3>
                        <div className=''>
                            <Check size={20} />
                            <p>Não use produtos de limpeza abrasivos ou altamente alcalinos, como por exemplo: saponáceos ou limpadores a base de amoníaco.</p>
                        </div>

                        <div>
                            <Check size={20} />
                            <p>Não use Butilo Celusolo nem Isopropanol na superfície protetora do Policarbonato. Confira nossa cobertura de policarbonato.</p>
                        </div>

                        <div>
                            <Check size={20} />
                            <p>Não lave as chapas de Policarbonato em dias de sol forte ou temperatura elevada.</p>
                        </div>

                        <div>
                            <Check size={20} />
                            <p>Não aplique esforços físicos nas estruturas ou chapas sem orientação prévia, apenas a equipe pode fazer isso.</p>
                        </div>

                    </div>

                    <div className={sass.portfolio}>
                        <h2>Confira Nossos Portfolio</h2>

                        <div className='!w-full text-center'>
                            <div>
                                <Image
                                    width={500}
                                    height={100}
                                    src={'/imagensDicas/arquitetura-aluminio-01.webp'}
                                    quality={100}
                                    alt=''
                                />
                                <Link
                                    href={'/informacoes'}
                                >
                                    CONFIRA NOSSOS PROJETOS
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Dicas;