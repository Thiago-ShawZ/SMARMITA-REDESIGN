import Header from "../components/Header"
import styles from "./Integrantes.module.css"

import Rafael_imagem from "../images/Fael_image.jpg"
import Geh_imagem from "../images/Geh_image.jpg"
import Preto_imagem from "../images/Preto_imagem.jpg"
import Thiago_imagem from "../images/Thiago_image.jpg"

import { InstagramLogo, LinkedinLogo, Envelope, Users, Sparkle } from "@phosphor-icons/react"

function Integrantes() {
  const membros = [
    {
      nome: "Rafael Lima",
      papel: "Desenvolvimento & Hardware",
      imagem: Rafael_imagem,
      alt: "Foto do integrante Rafael Lima",
      redes: [
        { tipo: "Instagram", url: "https://www.instagram.com/faell.lv/", icone: InstagramLogo, label: "Instagram de Rafael Lima" },
        { tipo: "LinkedIn", url: "https://www.linkedin.com/in/rafael-lima-viana-623538264/", icone: LinkedinLogo, label: "LinkedIn de Rafael Lima" },
        { tipo: "Email", url: "mailto:rlimaviana011@hotmail.com", icone: Envelope, label: "E-mail de Rafael Lima" }
      ]
    },
    {
      nome: "Geovanna Lisboa",
      papel: "Idealização & Pesquisa",
      imagem: Geh_imagem,
      alt: "Foto da integrante Geovanna Lisboa",
      redes: [
        { tipo: "Instagram", url: "https://www.instagram.com/geh.lisboa/", icone: InstagramLogo, label: "Instagram de Geovanna Lisboa" },
        { tipo: "LinkedIn", url: "", icone: LinkedinLogo, label: "LinkedIn de Geovanna Lisboa" },
        { tipo: "Email", url: "mailto:geovanna.lisboa@eaporal.org", icone: Envelope, label: "E-mail de Geovanna Lisboa" }
      ]
    },
    {
      nome: "Pietro Pestana",
      papel: "Desenvolvimento & Montagem",
      imagem: Preto_imagem,
      alt: "Foto do integrante Pietro Pestana",
      redes: [
        { tipo: "Instagram", url: "https://www.instagram.com/pietro_pestana/", icone: InstagramLogo, label: "Instagram de Pietro Pestana" },
        { tipo: "LinkedIn", url: "https://www.linkedin.com/in/pietro-moreira-abreu-pestana-7721b3269/", icone: LinkedinLogo, label: "LinkedIn de Pietro Pestana" },
        { tipo: "Email", url: "mailto:pietropestana@gmail.com", icone: Envelope, label: "E-mail de Pietro Pestana" }
      ]
    },
    {
      nome: "Thiago Costa",
      papel: "Desenvolvimento & Software",
      imagem: Thiago_imagem,
      alt: "Foto do integrante Thiago Costa",
      redes: [
        { tipo: "Instagram", url: "https://www.instagram.com/thiagotoglory/", icone: InstagramLogo, label: "Instagram de Thiago Costa" },
        { tipo: "LinkedIn", url: "", icone: LinkedinLogo, label: "LinkedIn de Thiago Costa" },
        { tipo: "Email", url: "mailto:thagocostanascimento@gmail.com", icone: Envelope, label: "E-mail de Thiago Costa" }
      ]
    }
  ];

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main className={styles.mainContent}>
        {/* HERO / CABEÇALHO */}
        <section className={styles.heroSection}>
          <div className={styles.heroContainer}>
            <span className={styles.badgeHero}>
              <Sparkle size={16} weight="fill" />
              Equipe do Projeto
            </span>
            <h1 className={styles.titleHero}>Quem Faz Acontecer</h1>
            <p className={styles.subtitleHero}>
              Conheça os estudantes e desenvolvedores responsáveis pela concepção, pesquisa, prototipagem e desenvolvimento da Smarmita.
            </p>
          </div>
        </section>

        {/* LISTAGEM DOS INTEGRANTES */}
        <section className={styles.teamSection} aria-label="Integrantes do grupo Smarmita">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>
              <Users size={16} weight="bold" />
              Desenvolvedores
            </span>
            <h2 className={styles.sectionTitle}>INTEGRANTES</h2>
            <p className={styles.sectionSubtitle}>
              Trabalho em equipe unindo tecnologia, design e engenharia para criar uma solução inovadora.
            </p>
          </div>

          <div className={styles.integrantesGrid}>
            {membros.map((membro, index) => (
              <article key={index} className={styles.card}>
                <div className={styles.cardImageContainer}>
                  <img
                    src={membro.imagem}
                    alt={membro.alt}
                    className={styles.imagem}
                    loading="lazy"
                  />
                  <div className={styles.cardOverlay}></div>
                </div>

                <div className={styles.cardInfo}>
                  <h3 className={styles.name}>{membro.nome}</h3>
                  <span className={styles.role}>{membro.papel}</span>
                </div>

                <div className={styles.icons} aria-label={`Redes sociais de ${membro.nome}`}>
                  {membro.redes.map((rede, rIndex) => {
                    const Icone = rede.icone;
                    if (!rede.url) {
                      return (
                        <span
                          key={rIndex}
                          className={`${styles.iconButton} ${styles.iconDisabled}`}
                          title={`${rede.tipo} (não informado)`}
                          aria-disabled="true"
                        >
                          <Icone size={26} weight="bold" />
                        </span>
                      );
                    }
                    return (
                      <a
                        key={rIndex}
                        href={rede.url}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.iconButton}
                        aria-label={rede.label}
                        title={rede.label}
                      >
                        <Icone size={26} weight="bold" />
                      </a>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Integrantes;
