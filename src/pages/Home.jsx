import { useEffect } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import styles from "./Home.module.css"

import smarmita_foto from "../images/smarmita_foto.jpg"
import publico_alvo from "../images/publico_alvo.png"

import {
  ThermometerHot,
  Snowflake,
  ArrowDown,
  Play,
  Users,
  Sparkle,
  Cpu
} from "@phosphor-icons/react"

function Home() {
  // Tratar rolagem suave para âncoras na montagem ou mudança de hash
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  return (
    <div className={styles.homeWrapper}>
      <Header />

      <main>
        {/* HERO / INÍCIO */}
        <section id="inicio" className={styles.heroSection}>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <div className={styles.badgeWrapper}>
                <span className={styles.heroBadge}>
                  <Sparkle size={16} weight="fill" />
                  Inovação em Alimentação e Tecnologia
                </span>
              </div>

              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleBrand}>SMARMITA</span>
              </h1>

              <p className={styles.heroTagline}>
                Uma marmita inteligente que une alimentação e tecnologia.
              </p>

              <p className={styles.heroSubtitle}>
                Projetada para manter sua refeição refrigerada durante o dia e aquecê-la na temperatura ideal no momento exato de comer, com controle integrado e total portabilidade.
              </p>

              <div className={styles.heroActions}>
                <a
                  href="#projeto"
                  onClick={(e) => scrollToSection(e, "projeto")}
                  className={styles.primaryButton}
                >
                  Conheça o projeto
                  <ArrowDown size={18} weight="bold" />
                </a>

                <a
                  href="#funcionamento"
                  onClick={(e) => scrollToSection(e, "funcionamento")}
                  className={styles.secondaryButton}
                >
                  Ver funcionamento
                </a>

                <Link
                  to="/landing"
                  className={styles.secondaryButton}
                  style={{ borderColor: "var(--color-accent)", color: "var(--color-accent)" }}
                >
                  Página Comercial &rarr;
                </Link>
              </div>

              <div className={styles.heroHighlights}>
                <div className={styles.highlightPill}>
                  <Snowflake size={18} weight="bold" className={styles.iconCold} />
                  <span>Refrigeração</span>
                </div>
                <div className={styles.highlightPill}>
                  <ThermometerHot size={18} weight="bold" className={styles.iconHot} />
                  <span>Aquecimento</span>
                </div>
                <div className={styles.highlightPill}>
                  <Cpu size={18} weight="bold" className={styles.iconTech} />
                  <span>Controle Inteligente</span>
                </div>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.heroImageCard}>
                <img
                  src={smarmita_foto}
                  alt="Protótipo da Smarmita inteligente"
                  className={styles.heroImage}
                />
                <div className={styles.floatingCard}>
                  <div className={styles.floatingIcon}>
                    <ThermometerHot size={24} weight="bold" />
                  </div>
                  <div>
                    <span className={styles.floatingLabel}>Temperatura Ajustável</span>
                    <strong className={styles.floatingValue}>Visor Digital Integrado</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APRESENTAÇÃO DO PROJETO */}
        <section id="projeto" className={styles.projectSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Visão Geral</span>
            <h2 className={styles.sectionTitle}>Apresentação do Projeto</h2>
            <p className={styles.sectionDescription}>
              Conheça os detalhes e o propósito por trás do desenvolvimento da Smarmita.
            </p>
          </div>

          <div className={styles.projectGrid}>
            <div className={styles.projectCardImage}>
              <div className={styles.imageFrame}>
                <img
                  src={smarmita_foto}
                  alt="Marmita preta com comida dentro e visor inteligente"
                  className={styles.projectImg}
                />
              </div>
            </div>

            <div className={styles.projectCardText}>
              <div className={styles.projectTextContent}>
                <p>
                  Nosso projeto de TCC, consiste em uma marmita inteligente. Ela terá a função de manter a comida refrigerada e aquecê-lá. O portador poderá selecionar a temperatura que deseja manter no interior da marmita.
                </p>
                <p>
                  A marmita tem um visor que mostra a temperatura ambiente e a temperatura ajustável, dessa maneira o portador poderá conservar a comida e depois comer ela quentinha e fresca.
                </p>
              </div>

              <div className={styles.featuresCards}>
                <div className={styles.featureBox}>
                  <div className={styles.featureIconBoxCold}>
                    <Snowflake size={24} weight="bold" />
                  </div>
                  <div>
                    <h3>Conservação Térmica</h3>
                    <p>Mantém os alimentos frescos mesmo durante longos períodos fora da geladeira.</p>
                  </div>
                </div>

                <div className={styles.featureBox}>
                  <div className={styles.featureIconBoxHot}>
                    <ThermometerHot size={24} weight="bold" />
                  </div>
                  <div>
                    <h3>Aquecimento Sob Medida</h3>
                    <p>Ajuste de temperatura prático para aquecer sua refeição em qualquer lugar.</p>
                  </div>
                </div>
              </div>

              <div className={styles.projectActionLink}>
                <Link to="/Conteudo#historia" className={styles.textLink}>
                  Ler a história completa do desenvolvimento &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FUNCIONAMENTO / PÚBLICO ALVO / PROCESSO */}
        <section id="funcionamento" className={styles.functioningSection}>
          <div className={styles.sectionHeaderLight}>
            <span className={styles.sectionBadgeLight}>Na Prática</span>
            <h2 className={styles.sectionTitleLight}>Funcionamento & Público-Alvo</h2>
            <p className={styles.sectionDescriptionLight}>
              Como a Smarmita resolve problemas reais do cotidiano de quem precisa almoçar fora.
            </p>
          </div>

          {/* Público Alvo */}
          <div className={styles.targetContainer}>
            <div className={styles.targetImageWrapper}>
              <img
                src={publico_alvo}
                alt="Ilustração do público-alvo da Smarmita"
                className={styles.targetImage}
              />
            </div>

            <div className={styles.targetTextWrapper}>
              <div className={styles.targetTag}>
                <Users size={20} weight="bold" />
                <span>Público-Alvo</span>
              </div>
              <h3 className={styles.targetTitle}>Para quem foi criada?</h3>
              <p className={styles.targetParagraph}>
                Nosso público alvo são todas as pessoas que precisam fazer o uso de marmita durante as atividades do dia-a-dia, com prioridade a quem não tem acesso à micro-ondas ou à tomadas próximas para esquentar a comida, e aqueles que não tem possibilidade de almoçar na própria casa.
              </p>
              <p className={styles.targetParagraph}>
                Dessa maneira, nosso objetivo é ajudar e facilitar a vida daqueles que trabalham nas ruas, estudantes, pessoas que passam o dia fora de casa, entre outros.
              </p>
            </div>
          </div>

          {/* Processo em Vídeo */}
          <div className={styles.processContainer}>
            <div className={styles.processHeader}>
              <div className={styles.processTag}>
                <Play size={20} weight="fill" />
                <span>Demonstração</span>
              </div>
              <h3 className={styles.processTitle}>PROCESSO:</h3>
              <p className={styles.processSubtitle}>
                Acompanhe o vídeo demonstrativo do funcionamento e da construção do projeto:
              </p>
            </div>

            <div className={styles.videoWrapper}>
              <iframe
                className={styles.videoIframe}
                src="https://www.youtube.com/embed/nOeBVK2YwNI?si=BfeYf6d_4U574RUl"
                title="Vídeo demonstrativo do processo Smarmita"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
