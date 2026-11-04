import { useState } from 'react'
import Header from '../components/Header'
import style from './Componentes.module.css'

import imgArduino from '../images/ARDUINO.png'
import imgPeltier from '../images/PELTIER.png'
import imgDht from '../images/DHT11.png'
import imgRele from '../images/RELE.png'
import imgPilhas from '../images/PILHAS.png'
import imgLCD from '../images/LCD.png'

import {
  Cpu,
  Thermometer,
  Monitor,
  ToggleRight,
  Snowflake,
  BatteryCharging,
  ArrowRight,
  ArrowDown,
  Info,
  CheckCircle,
  Sparkle
} from '@phosphor-icons/react'

function Componentes() {
  // Estado para armazenar o componente ativo no diagrama
  const [componenteAtivoId, setComponenteAtivoId] = useState('arduino');

  // Dados completos dos componentes estruturados
  const componentesData = {
    dht11: {
      id: 'dht11',
      nome: 'Sensor DHT-11',
      categoria: 'Entrada de Dados (Sensoriamento)',
      imagem: imgDht,
      alt: 'Sensor de temperatura e umidade DHT-11',
      icone: Thermometer,
      fluxo: 'Mede a temperatura interna da marmita e envia as leituras para o Arduino.',
      oQueE: 'O sensor DHT-11 é um sensor digital de temperatura e umidade relativa de baixo custo e alta precisão para prototipagem.',
      paraQueServe: 'O sensor DHT11 é amplamente utilizado em projetos de eletrônica e automação residencial. Ele serve para medir a temperatura ambiente e a umidade relativa do ar e é particularmente útil em situações em que o controle desses parâmetros é importante.',
      comoUsamos: 'Utilizamos o sensor de temperatura DHT-11 para medir a temperatura dentro da marmita. Tendo o valor da temperatura em mãos, pegamos esse valor e fizemos algumas contas para que assim o arduíno saiba o momento de conservar e o momento de esquentar, além de imprimir o valor da temperatura ao usuário.'
    },
    arduino: {
      id: 'arduino',
      nome: 'Arduino UNO',
      categoria: 'Processamento Central (Cérebro)',
      imagem: imgArduino,
      alt: 'Placa de microcontrolador Arduino UNO',
      icone: Cpu,
      fluxo: 'Recebe as leituras do DHT-11, processa a lógica de controle, atualiza o display LCD e comanda o acionamento do relé.',
      oQueE: 'O Arduino UNO é uma placa de desenvolvimento baseada no microcontrolador ATmega328P, com entradas e saídas digitais e analógicas.',
      paraQueServe: 'O Arduino é uma plataforma de hardware de código aberto que consiste em uma placa com um microcontrolador e um ambiente de desenvolvimento integrado (IDE) que permite programar e controlar dispositivos eletrônicos. O Arduino é amplamente utilizado por entusiastas, estudantes e profissionais para uma variedade de aplicações.',
      comoUsamos: 'O arduino UNO é basicamente o componente mais importante para o funcionamento do projeto, já que ele é o componente que vai ler todo o código e "passar" as funções que cada componente deverá exercer. Sem ele, seria inviável fazer o projeto dessa forma.'
    },
    lcd: {
      id: 'lcd',
      nome: 'Display LCD 16x2',
      categoria: 'Interface com o Usuário (Saída Visual)',
      imagem: imgLCD,
      alt: 'Display LCD 16x2 com backlight',
      icone: Monitor,
      fluxo: 'Apresenta a temperatura interna em tempo real e o modo de operação (conservando ou esquentando).',
      oQueE: 'Um display alfanumérico com retroiluminação, capaz de exibir 32 caracteres distribuídos em 2 linhas de 16 colunas.',
      paraQueServe: 'Um LCD 16x2, abreviação de "Liquid Crystal Display 16x2", é um tipo de tela de cristal líquido (LCD) que consiste em 16 colunas e 2 linhas de caracteres alfanuméricos. Cada "16x2" refere-se ao número de caracteres que a tela pode exibir em cada linha e ao número total de linhas de texto.',
      comoUsamos: 'O LCD 16x2 foi utilizado em nosso projeto fornecer ao usuário, algumas informações sobre a situação de sua comida, como: se ela esta sendo conservada ou esquentada, qual a temperatura dentro da marmita, a temperatura que o usuário esta selecionando, entre outras.'
    },
    rele: {
      id: 'rele',
      nome: 'Módulo Relé',
      categoria: 'Controle de Potência (Comutação)',
      imagem: imgRele,
      alt: 'Módulo Relé eletromecânico para Arduino',
      icone: ToggleRight,
      fluxo: 'Acionado pelo Arduino para ligar ou desligar com segurança o circuito elétrico da pastilha Peltier.',
      oQueE: 'O relé é um interruptor eletromecânico acionado por sinal de baixa corrente para chavear cargas elétricas de maior potência.',
      paraQueServe: 'O relé (ou relê) é um dispositivo frequentemente usado com o Arduino e outros sistemas de controle para controlar cargas elétricas de maior potência, como luzes, motores, eletrodomésticos, equipamentos industriais e outros dispositivos que requerem mais corrente ou tensão do que um microcontrolador como o Arduino pode fornecer diretamente. O relé do Arduino serve para realizar a comutação (abertura ou fechamento) de circuitos elétricos externos.',
      comoUsamos: 'O relé é acionado diretamente pelo Arduino para controlar com segurança a alimentação da pastilha Peltier, ligando e desligando o sistema térmico conforme a temperatura desejada.'
    },
    peltier: {
      id: 'peltier',
      nome: 'Pastilha Peltier',
      categoria: 'Atuador Térmico (Climatização)',
      imagem: imgPeltier,
      alt: 'Pastilha Peltier termoelétrica TEC1-12706',
      icone: Snowflake,
      fluxo: 'Gera aquecimento ou resfriamento através do efeito termoelétrico para manter ou esquentar a refeição.',
      oQueE: 'Módulo semicondutor termoelétrico de estado sólido que realiza transferência de calor ao receber corrente elétrica.',
      paraQueServe: 'As pastilhas Peltier, também conhecidas como módulos Peltier, são dispositivos termoelétricos que possuem uma variedade de aplicações, sendo projetadas para realizar transferência de calor entre duas superfícies. Essas pastilhas são construídas com material semicondutor e funcionam com base no efeito Peltier, que é a capacidade de absorver ou liberar calor quando uma corrente elétrica é aplicada a elas.',
      comoUsamos: 'A pastilha é um dos componentes mais importantes desse projeto, pois ela nos possibilita esquentar e conservar a comida do usuário, ja que a pastilha, quando ligada, ela tem o poder de esfriar e esquentar ao mesmo tempo. Colocamos ela no fundo da marmita para que assim que acionada, ela possa cumprir suas funções (conservar e esquentar).'
    },
    pilhas: {
      id: 'pilhas',
      nome: 'Conjunto de Pilhas',
      categoria: 'Fonte de Energia Autônoma',
      imagem: imgPilhas,
      alt: 'Pilhas recarregáveis para alimentação portátil',
      icone: BatteryCharging,
      fluxo: 'Fornece alimentação autônoma e recarregável ao microcontrolador e ao circuito da Smarmita sem depender de tomadas fixas.',
      oQueE: 'Dispositivos eletroquímicos recarregáveis que convertem energia química em eletricidade para autonomia sem fio.',
      paraQueServe: 'As pilhas são dispositivos que servem para fornecer energia elétrica a dispositivos eletrônicos e elétricos. Elas convertem energia química em energia elétrica por meio de uma reação química interna. As pilhas desempenham um papel fundamental em nossas vidas cotidianas e são utilizadas para uma variedade de finalidades.',
      comoUsamos: 'Como nossa marmita não precisa ser colocada na tomada, a fonte de energia escolhida para o funcionamento do arduíno e das pastilhas peltier, foi as pilhas. Com elas o usuário tem a possibilidade de recarrega-las, para que assim, não tenha um limite estabelecido para o uso do produto.'
    }
  };

  // Ordem lógica do fluxo dos 5 componentes do diagrama
  const diagramaKeys = ['dht11', 'arduino', 'lcd', 'rele', 'peltier'];
  const componenteAtivo = componentesData[componenteAtivoId] || componentesData.arduino;

  return (
    <div className={style.pageWrapper}>
      <Header />

      <main className={style.mainContent}>
        {/* CABEÇALHO DA SEÇÃO */}
        <section className={style.heroSection}>
          <div className={style.heroContainer}>
            <span className={style.badgeHero}>
              <Sparkle size={16} weight="fill" />
              Arquitetura & Hardware Integrado
            </span>
            <h1 className={style.titleHero}>Funcionamento e Componentes</h1>
            <p className={style.subtitleHero}>
              Conheça a relação entre os componentes da Smarmita e o fluxo funcional que une medição, processamento, interface e controle térmico.
            </p>
          </div>
        </section>

        {/* DIAGRAMA INTERATIVO DO FLUXO DE FUNCIONAMENTO */}
        <section className={style.diagramSection} aria-label="Diagrama interativo do funcionamento da Smarmita">
          <div className={style.diagramHeader}>
            <span className={style.sectionTag}>Diagrama Interativo</span>
            <h2 className={style.sectionTitle}>Fluxo de Funcionamento do Sistema</h2>
            <p className={style.diagramInstruction}>
              Clique em qualquer componente no diagrama abaixo para visualizar sua função detalhada, para que serve e como é utilizado na Smarmita:
            </p>
          </div>

          <div className={style.diagramContainer}>
            {/* LINHA / FLUXO DE COMPONENTES */}
            <div className={style.flowTrack}>
              {/* NÓ 1: SENSOR DHT-11 */}
              <div className={style.flowNodeWrapper}>
                <button
                  type="button"
                  className={`${style.diagramNode} ${componenteAtivoId === 'dht11' ? style.nodeActive : ''}`}
                  onClick={() => setComponenteAtivoId('dht11')}
                  aria-pressed={componenteAtivoId === 'dht11'}
                  aria-label="Selecionar Sensor DHT-11"
                >
                  <div className={style.nodeIconWrapper}>
                    <Thermometer size={28} weight="bold" />
                  </div>
                  <div className={style.nodeInfo}>
                    <span className={style.nodeStep}>1. Sensoriamento</span>
                    <strong className={style.nodeName}>Sensor DHT-11</strong>
                    <span className={style.nodeAction}>Mede temperatura interna</span>
                  </div>
                </button>
              </div>

              {/* CONECTOR 1 &rarr; 2 */}
              <div className={style.flowConnector}>
                <div className={style.connectorLine}></div>
                <div className={style.connectorBadge}>
                  <ArrowRight size={16} weight="bold" className={style.arrowDesktop} />
                  <ArrowDown size={16} weight="bold" className={style.arrowMobile} />
                  <span>Leitura</span>
                </div>
              </div>

              {/* NÓ 2: ARDUINO UNO (CENTRAL) */}
              <div className={style.flowNodeWrapper}>
                <button
                  type="button"
                  className={`${style.diagramNode} ${style.nodeCentral} ${componenteAtivoId === 'arduino' ? style.nodeActive : ''}`}
                  onClick={() => setComponenteAtivoId('arduino')}
                  aria-pressed={componenteAtivoId === 'arduino'}
                  aria-label="Selecionar Arduino UNO"
                >
                  <div className={style.nodeIconWrapper}>
                    <Cpu size={32} weight="bold" />
                  </div>
                  <div className={style.nodeInfo}>
                    <span className={style.nodeStepCentral}>2. Cérebro do Sistema</span>
                    <strong className={style.nodeName}>Arduino UNO</strong>
                    <span className={style.nodeAction}>Processa e comanda</span>
                  </div>
                </button>
              </div>

              {/* RAMIFICAÇÃO: ARDUINO &rarr; LCD e ARDUINO &rarr; RELÉ */}
              <div className={style.branchContainer}>
                {/* RAMO A: ARDUINO &rarr; DISPLAY LCD */}
                <div className={style.branchItem}>
                  <div className={style.flowConnectorSmall}>
                    <div className={style.connectorLine}></div>
                    <div className={style.connectorBadgeSmall}>
                      <ArrowRight size={14} weight="bold" className={style.arrowDesktop} />
                      <ArrowDown size={14} weight="bold" className={style.arrowMobile} />
                      <span>Exibe dados</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className={`${style.diagramNode} ${componenteAtivoId === 'lcd' ? style.nodeActive : ''}`}
                    onClick={() => setComponenteAtivoId('lcd')}
                    aria-pressed={componenteAtivoId === 'lcd'}
                    aria-label="Selecionar Display LCD 16x2"
                  >
                    <div className={style.nodeIconWrapper}>
                      <Monitor size={28} weight="bold" />
                    </div>
                    <div className={style.nodeInfo}>
                      <span className={style.nodeStep}>3. Interface Visual</span>
                      <strong className={style.nodeName}>Display LCD 16x2</strong>
                      <span className={style.nodeAction}>Status e temperatura</span>
                    </div>
                  </button>
                </div>

                {/* RAMO B: ARDUINO &rarr; RELÉ &rarr; PELTIER */}
                <div className={style.branchItem}>
                  <div className={style.flowConnectorSmall}>
                    <div className={style.connectorLine}></div>
                    <div className={style.connectorBadgeSmall}>
                      <ArrowRight size={14} weight="bold" className={style.arrowDesktop} />
                      <ArrowDown size={14} weight="bold" className={style.arrowMobile} />
                      <span>Acionamento</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className={`${style.diagramNode} ${componenteAtivoId === 'rele' ? style.nodeActive : ''}`}
                    onClick={() => setComponenteAtivoId('rele')}
                    aria-pressed={componenteAtivoId === 'rele'}
                    aria-label="Selecionar Módulo Relé"
                  >
                    <div className={style.nodeIconWrapper}>
                      <ToggleRight size={28} weight="bold" />
                    </div>
                    <div className={style.nodeInfo}>
                      <span className={style.nodeStep}>4. Comutação</span>
                      <strong className={style.nodeName}>Módulo Relé</strong>
                      <span className={style.nodeAction}>Chaveia a pastilha</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* CONECTOR RELÉ &rarr; PELTIER */}
              <div className={style.flowConnector}>
                <div className={style.connectorLine}></div>
                <div className={style.connectorBadge}>
                  <ArrowRight size={16} weight="bold" className={style.arrowDesktop} />
                  <ArrowDown size={16} weight="bold" className={style.arrowMobile} />
                  <span>Alimentação</span>
                </div>
              </div>

              {/* NÓ 5: PASTILHA PELTIER */}
              <div className={style.flowNodeWrapper}>
                <button
                  type="button"
                  className={`${style.diagramNode} ${componenteAtivoId === 'peltier' ? style.nodeActive : ''}`}
                  onClick={() => setComponenteAtivoId('peltier')}
                  aria-pressed={componenteAtivoId === 'peltier'}
                  aria-label="Selecionar Pastilha Peltier"
                >
                  <div className={style.nodeIconWrapper}>
                    <Snowflake size={28} weight="bold" />
                  </div>
                  <div className={style.nodeInfo}>
                    <span className={style.nodeStep}>5. Ação Térmica</span>
                    <strong className={style.nodeName}>Pastilha Peltier</strong>
                    <span className={style.nodeAction}>Esquenta ou conserva</span>
                  </div>
                </button>
              </div>
            </div>

            {/* PAINEL DE DETALHES DO COMPONENTE SELECIONADO */}
            <div className={style.detailsCard} tabIndex={0} aria-live="polite">
              <div className={style.detailsHeader}>
                <div className={style.detailsTag}>
                  <Info size={20} weight="bold" />
                  <span>{componenteAtivo.categoria}</span>
                </div>
                <h3 className={style.detailsTitle}>{componenteAtivo.nome}</h3>
                <p className={style.detailsFluxo}>
                  <strong>Papel no fluxo:</strong> {componenteAtivo.fluxo}
                </p>
              </div>

              <div className={style.detailsBody}>
                <div className={style.detailsImageContainer}>
                  <img
                    src={componenteAtivo.imagem}
                    alt={componenteAtivo.alt}
                    className={style.detailsImage}
                  />
                </div>

                <div className={style.detailsContent}>
                  {/* O QUE É */}
                  <div className={style.detailsBlock}>
                    <h4 className={style.blockTitle}>
                      <CheckCircle size={20} weight="bold" className={style.blockIcon} />
                      O que é?
                    </h4>
                    <p className={style.blockText}>{componenteAtivo.oQueE}</p>
                  </div>

                  {/* PARA QUE SERVE */}
                  <div className={style.detailsBlock}>
                    <h4 className={style.blockTitle}>
                      <CheckCircle size={20} weight="bold" className={style.blockIcon} />
                      Para que serve?
                    </h4>
                    <p className={style.blockText}>{componenteAtivo.paraQueServe}</p>
                  </div>

                  {/* COMO USAMOS */}
                  <div className={style.detailsBlock}>
                    <h4 className={style.blockTitle}>
                      <CheckCircle size={20} weight="bold" className={style.blockIcon} />
                      Como usamos na Smarmita?
                    </h4>
                    <p className={style.blockText}>{componenteAtivo.comoUsamos}</p>
                  </div>
                </div>
              </div>

              {/* SELETOR RÁPIDO ENTRE OS COMPONENTES */}
              <div className={style.quickNav}>
                <span className={style.quickNavLabel}>Explorar outro componente do fluxo:</span>
                <div className={style.quickNavButtons}>
                  {diagramaKeys.map((key) => {
                    const comp = componentesData[key];
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setComponenteAtivoId(key)}
                        className={`${style.quickBtn} ${componenteAtivoId === key ? style.quickBtnActive : ''}`}
                      >
                        {comp.nome}
                      </button>
                    );
                  })}
                  <button
                    type="button"
                    onClick={() => setComponenteAtivoId('pilhas')}
                    className={`${style.quickBtn} ${componenteAtivoId === 'pilhas' ? style.quickBtnActive : ''}`}
                  >
                    Pilhas (Energia)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FONTE DE ENERGIA: PILHAS (PRESERVAÇÃO DO CONTEÚDO ORIGINAL) */}
        <section className={style.pilhasSection}>
          <div className={style.pilhasContainer}>
            <div className={style.pilhasImageWrapper}>
              <img
                src={imgPilhas}
                alt="Pilhas recarregáveis utilizadas no projeto Smarmita"
                className={style.pilhasImage}
              />
            </div>

            <div className={style.pilhasContent}>
              <div className={style.pilhasBadge}>
                <BatteryCharging size={20} weight="bold" />
                <span>Alimentação Autônoma</span>
              </div>

              <h2 className={style.pilhasTitle}>PILHAS E AUTONOMIA</h2>

              <div className={style.pilhasBlock}>
                <h3>Para que serve?</h3>
                <p>
                  As pilhas são dispositivos que servem para fornecer energia elétrica a dispositivos eletrônicos e elétricos. Elas convertem energia química em energia elétrica por meio de uma reação química interna. As pilhas desempenham um papel fundamental em nossas vidas cotidianas e são utilizadas para uma variedade de finalidades.
                </p>
              </div>

              <div className={style.pilhasBlock}>
                <h3>Como usamos na Smarmita?</h3>
                <p>
                  Como nossa marmita não precisa ser colocada na tomada, a fonte de energia escolhida para o funcionamento do arduíno e das pastilhas peltier, foi as pilhas. Com elas o usuário tem a possibilidade de recarrega-las, para que assim, não tenha um limite estabelecido para o uso do produto.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CATÁLOGO COMPLETO DE COMPONENTES */}
        <section className={style.catalogSection}>
          <div className={style.catalogHeader}>
            <span className={style.sectionTag}>Visão Geral Completa</span>
            <h2 className={style.sectionTitle}>Todos os Componentes do Projeto</h2>
            <p className={style.catalogSubtitle}>
              Documentação técnica detalhada de cada elemento utilizado na construção da Smarmita:
            </p>
          </div>

          <div className={style.catalogGrid}>
            {Object.values(componentesData).map((comp) => {
              const Icone = comp.icone;
              return (
                <div key={comp.id} className={style.catalogCard}>
                  <div className={style.cardTop}>
                    <div className={style.cardIconWrapper}>
                      <Icone size={24} weight="bold" />
                    </div>
                    <span className={style.cardCategory}>{comp.categoria}</span>
                  </div>

                  <h3 className={style.cardTitle}>{comp.nome}</h3>

                  <div className={style.cardImageWrapper}>
                    <img src={comp.imagem} alt={comp.alt} className={style.cardImage} />
                  </div>

                  <div className={style.cardTexts}>
                    <div>
                      <h4 className={style.cardSectionTitle}>Para que serve?</h4>
                      <p className={style.cardDescription}>{comp.paraQueServe}</p>
                    </div>

                    <div>
                      <h4 className={style.cardSectionTitle}>Como usamos?</h4>
                      <p className={style.cardDescription}>{comp.comoUsamos}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setComponenteAtivoId(comp.id);
                      window.scrollTo({ top: 380, behavior: 'smooth' });
                    }}
                    className={style.cardSelectBtn}
                  >
                    Ver no diagrama funcional &uarr;
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Componentes;
