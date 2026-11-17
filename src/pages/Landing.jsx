import { useState } from "react"
import { Link } from "react-router-dom"
import styles from "./Landing.module.css"

import logo_smarmita from "../images/logo_smarmita.png"
import smarmita_foto from "../images/smarmita_foto.jpg"
import imgArduino from "../images/ARDUINO.png"
import imgPeltier from "../images/PELTIER.png"
import imgDht from "../images/DHT11.png"
import imgLCD from "../images/LCD.png"

import {
  Sparkle,
  ArrowRight,
  CheckCircle,
  ThermometerHot,
  Snowflake,
  Cpu,
  Lightning,
  ShieldCheck,
  Timer,
  ShoppingCart,
  BatteryCharging,
  X
} from "@phosphor-icons/react"

function Landing() {
  const [modalAberto, setModalAberto] = useState(false);
  const [interesseEnviado, setInteresseEnviado] = useState(false);
  const [emailInteresse, setEmailInteresse] = useState("");

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleEnviarInteresse = (e) => {
    e.preventDefault();
    if (emailInteresse.trim()) {
      setInteresseEnviado(true);
      setTimeout(() => {
        setInteresseEnviado(false);
        setModalAberto(false);
        setEmailInteresse("");
      }, 2500);
    }
  };

  return (
    <div className={styles.landingContainer}>
      {/* NAVBAR COMERCIAL */}
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          <Link to="/" className={styles.brand}>
            <img src={logo_smarmita} alt="Logo Smarmita" className={styles.brandLogo} />
            <div>
              <span className={styles.brandName}>SMARMITA</span>
              <span className={styles.brandBadge}>Inovação Térmica</span>
            </div>
          </Link>
          <div className={styles.navActions}>
            <Link to="/" className={styles.backLink}>Ver Projeto TCC</Link>
            <button onClick={() => scrollTo("comercial")} className={styles.navCta}>
              Garantir a Minha
            </button>
          </div>
        </div>
      </nav>

      {/* 1. HERO */}
      <header className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <span className={styles.pillBadge}>
              <Sparkle size={16} weight="fill" /> Nova Geração de Alimentação Portátil
            </span>
            <h1 className={styles.heroTitle}>
              Tecnologia que cuida da sua <span>refeição</span>.
            </h1>
            <p className={styles.heroPhrase}>
              "Uma marmita inteligente que une alimentação e tecnologia."
            </p>
            <p className={styles.heroSubtext}>
              Conserve sua comida fresca o dia todo e aqueça na temperatura perfeita na hora de comer. Sem depender de micro-ondas ou tomadas.
            </p>
            <div className={styles.heroButtons}>
              <button onClick={() => scrollTo("solucao")} className={styles.btnPrimary}>
                Conheça a solução <ArrowRight size={18} weight="bold" />
              </button>
              <button onClick={() => scrollTo("comercial")} className={styles.btnSecondary}>
                Tenho interesse
              </button>
            </div>
            <div className={styles.heroPills}>
              <span><Snowflake size={18} /> Refrigera</span>
              <span><ThermometerHot size={18} /> Aquece</span>
              <span><BatteryCharging size={18} /> 100% Portátil</span>
            </div>
          </div>
          <div className={styles.heroMedia}>
            <div className={styles.imageCard}>
              <img src={smarmita_foto} alt="Smarmita em funcionamento" className={styles.mainProductImg} />
              <div className={styles.productBadge}>
                <ThermometerHot size={24} weight="bold" />
                <div>
                  <small>Controle Digital</small>
                  <strong>Aquece & Conserva</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. PROBLEMA E SOLUÇÃO */}
      <section id="solucao" className={styles.problemSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.tag}>O Desafio do Dia a Dia</span>
          <h2>Comer bem fora de casa nunca foi tão simples</h2>
          <p>Esqueça a comida azeda no calor ou as longas filas do micro-ondas compartilhado.</p>
        </div>
        <div className={styles.problemGrid}>
          <div className={styles.problemCard}>
            <div className={styles.cardIconAlert}><Timer size={32} /></div>
            <h3>O Problema Atual</h3>
            <ul>
              <li>Comida que perde o frescor por falta de refrigeração.</li>
              <li>Dependência de micro-ondas sujos ou tomadas no trabalho e na rua.</li>
              <li>Gastos altos com refeições de rua de qualidade duvidosa.</li>
            </ul>
          </div>
          <div className={`${styles.problemCard} ${styles.solutionCard}`}>
            <div className={styles.cardIconSuccess}><ShieldCheck size={32} /></div>
            <h3>A Solução Smarmita</h3>
            <ul>
              <li><strong>Preservação Térmica:</strong> refrigera para manter os nutrientes.</li>
              <li><strong>Aquecimento Autônomo:</strong> atinja a temperatura ideal com 1 clique.</li>
              <li><strong>Total Liberdade:</strong> funcione em trânsito, escritórios e parques.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. COMO FUNCIONA */}
      <section className={styles.howItWorks}>
        <div className={styles.sectionHeaderLight}>
          <span className={styles.tagLight}>Simplicidade & Praticidade</span>
          <h2>Como a Smarmita funciona</h2>
          <p>O ciclo inteligente que garante comida caseira impecável onde você estiver.</p>
        </div>
        <div className={styles.stepsGrid}>
          <div className={styles.stepItem}>
            <div className={styles.stepNumber}>01</div>
            <h4>Armazene & Conserve</h4>
            <p>Coloque sua refeição pela manhã. O sistema estabiliza a temperatura contra o calor externo.</p>
          </div>
          <div className={styles.stepItem}>
            <div className={styles.stepNumber}>02</div>
            <h4>Monitore no Visor</h4>
            <p>O display LCD integrado informa em tempo real o status térmico no interior da marmita.</p>
          </div>
          <div className={styles.stepItem}>
            <div className={styles.stepNumber}>03</div>
            <h4>Aqueça Sob Demanda</h4>
            <p>Acione o aquecimento e, em poucos minutos, saboreie sua comida quentinha como feita na hora.</p>
          </div>
        </div>
      </section>

      {/* 4. TECNOLOGIA */}
      <section className={styles.techSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.tag}>Engenharia de Ponta</span>
          <h2>Tecnologia em cada detalhe</h2>
          <p>Conheça os componentes desenvolvidos para unir máxima eficiência e segurança alimentar.</p>
        </div>
        <div className={styles.techGrid}>
          <div className={styles.techCard}>
            <img src={imgPeltier} alt="Pastilha Peltier" />
            <h4>Pastilha Termoelétrica</h4>
            <p>Permite alternar entre refrigeração e aquecimento com estado sólido, sem peças móveis ou ruídos.</p>
          </div>
          <div className={styles.techCard}>
            <img src={imgArduino} alt="Arduino UNO" />
            <h4>Cérebro Microcontrolador</h4>
            <p>Processamento dos algoritmos térmicos para manter o equilíbrio exato da temperatura.</p>
          </div>
          <div className={styles.techCard}>
            <img src={imgDht} alt="Sensor DHT-11" />
            <h4>Sensor de Alta Precisão</h4>
            <p>Leitura contínua das condições térmicas internas para controle seguro e automatizado.</p>
          </div>
          <div className={styles.techCard}>
            <img src={imgLCD} alt="Display LCD" />
            <h4>Interface LCD Digital</h4>
            <p>Visualização limpa e intuitiva da temperatura e dos modos de operação ativos.</p>
          </div>
        </div>
      </section>

      {/* 5. DIFERENCIAIS */}
      <section className={styles.diffSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.tag}>Vantagens Exclusivas</span>
          <h2>Por que a Smarmita é diferente?</h2>
        </div>
        <div className={styles.diffGrid}>
          <div className={styles.diffCard}>
            <Lightning size={32} className={styles.diffIcon} />
            <h4>Dualidade Térmica</h4>
            <p>A única compacta com tecnologia reversível capaz de resfriar para conservar e esquentar para servir.</p>
          </div>
          <div className={styles.diffCard}>
            <BatteryCharging size={32} className={styles.diffIcon} />
            <h4>100% Sem Fio</h4>
            <p>Bateria interna de alto rendimento que liberta você da busca por tomadas no meio do dia.</p>
          </div>
          <div className={styles.diffCard}>
            <CheckCircle size={32} className={styles.diffIcon} />
            <h4>Alimentação Saudável</h4>
            <p>Leve comida de verdade preparada em casa, economizando dinheiro e ganhando tempo precioso.</p>
          </div>
        </div>
      </section>

      {/* 6. CHAMADA COMERCIAL & CONVERSÃO */}
      <section id="comercial" className={styles.conversionSection}>
        <div className={styles.conversionBox}>
          <span className={styles.tagLight}>Lote Especial de Lançamento</span>
          <h2 className={styles.conversionTitle}>O futuro da alimentação começa aqui</h2>
          <p className={styles.conversionDesc}>
            Seja um dos primeiros a experimentar a revolução da marmita inteligente. Tenha praticidade e qualidade na sua rotina diária.
          </p>

          <div className={styles.pricingCard}>
            <div className={styles.pricingBadge}>Oferta de Pré-Venda</div>
            <div className={styles.priceContainer}>
              <span className={styles.currency}>R$</span>
              <span className={styles.priceValue}>249</span>
              <span className={styles.cents}>,90</span>
            </div>
            <p className={styles.priceSub}>Ou em até 12x de R$ 24,90 no cartão</p>
            <ul className={styles.pricingList}>
              <li><CheckCircle size={18} weight="fill" /> 1x Unidade Smarmita com Display Digital</li>
              <li><CheckCircle size={18} weight="fill" /> Módulo Termoelétrico Bivolt + Bateria Recarregável</li>
              <li><CheckCircle size={18} weight="fill" /> Cabo de Carregamento Rápido + Manual em Português</li>
              <li><CheckCircle size={18} weight="fill" /> Suporte e Garantia Oficial Smarmita</li>
            </ul>

            <button onClick={() => setModalAberto(true)} className={styles.btnCtaLarge}>
              <ShoppingCart size={22} weight="bold" /> Tenho interesse
            </button>
            <small className={styles.secureText}>Vagas limitadas para o primeiro lote de produção</small>
          </div>
        </div>
      </section>

      {/* 7. RODAPÉ INSTITUCIONAL */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <img src={logo_smarmita} alt="Smarmita" className={styles.footerLogo} />
            <div>
              <h3>SMARMITA</h3>
              <p>Uma marmita inteligente que une alimentação e tecnologia.</p>
            </div>
          </div>
          <div className={styles.footerNav}>
            <h4>Navegação</h4>
            <Link to="/">Início TCC</Link>
            <Link to="/Componentes">Componentes</Link>
            <Link to="/Conteudo">História & Código</Link>
            <Link to="/Integrantes">Equipe</Link>
          </div>
          <div className={styles.footerInfo}>
            <h4>Contato & Projeto</h4>
            <p>Projeto acadêmico e comercial focado em inovação térmica e IoT.</p>
            <p>&copy; {new Date().getFullYear()} Smarmita. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* MODAL DE INTERESSE */}
      {modalAberto && (
        <div className={styles.modalOverlay} onClick={() => setModalAberto(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setModalAberto(false)}>
              <X size={20} />
            </button>
            {!interesseEnviado ? (
              <>
                <h3>Garantir Reserva na Pré-Venda</h3>
                <p>Deixe seu e-mail para receber prioridade na produção e condições exclusivas de lançamento:</p>
                <form onSubmit={handleEnviarInteresse} className={styles.modalForm}>
                  <input
                    type="email"
                    required
                    placeholder="Seu melhor e-mail"
                    value={emailInteresse}
                    onChange={(e) => setEmailInteresse(e.target.value)}
                    className={styles.modalInput}
                  />
                  <button type="submit" className={styles.btnPrimary}>
                    Confirmar Interesse
                  </button>
                </form>
              </>
            ) : (
              <div className={styles.successMessage}>
                <CheckCircle size={48} weight="fill" className={styles.successIcon} />
                <h3>Interesse Registrado!</h3>
                <p>Obrigado! Entraremos em contato assim que o lote for liberado para envio.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Landing;
