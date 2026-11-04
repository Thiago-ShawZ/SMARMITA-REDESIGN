import { useEffect } from "react"
import Header from "../components/Header"
import styles from "./Conteudo.module.css"
import smarmita_foto from "../images/smarmita_foto.jpg"
import { GithubLogo, Code, BookOpen, Sparkle } from "@phosphor-icons/react"

function Conteudo() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 120);
      }
    }
  }, []);

  return (
    <div className={styles.conteudoWrapper}>
      <Header />

      <main className={styles.mainContent}>
        {/* CABEÇALHO DA PÁGINA */}
        <section className={styles.heroSection}>
          <div className={styles.heroContainer}>
            <span className={styles.badgeHero}>
              <Sparkle size={16} weight="fill" />
              Trajetória & Desenvolvimento
            </span>
            <h1 className={styles.titleHero}>História e Código Aberto</h1>
            <p className={styles.subtitleHero}>
              Conheça a origem da ideia da Smarmita, o propósito de ajudar trabalhadores e acesse o repositório com o código-fonte do microcontrolador.
            </p>
          </div>
        </section>

        {/* HISTÓRIA DO PROJETO */}
        <section id="historia" className={styles.project_history}>
          <div className={styles.container}>
            <div className={styles.image_history}>
              <div className={styles.imageFrame}>
                <img
                  src={smarmita_foto}
                  alt="Protótipo da marmita inteligente Smarmita"
                  loading="lazy"
                />
              </div>
            </div>

            <div className={styles.text_history}>
              <div className={styles.badge}>
                <BookOpen size={18} weight="bold" />
                <span>Nossa Origem</span>
              </div>

              <h1>HISTÓRIA DO PROJETO</h1>

              <div className={styles.historyParagraphs}>
                <p>Tudo começou em uma conversa de café da tarde na família da Geh.</p>
                <blockquote className={styles.quoteBox}>
                  <p>
                    “Certo dia eu estava em casa conversando com minha família e desesperada para conseguir ter uma ideia boa para o projeto do TCC. Conversa vai, conversa vem, pedindo várias dicas do que fazer, minha vó me deu a ideia de fazer um robô que lavava a louça sozinho, o que com certeza não daria certo (rsrsrsrs).
                  </p>
                  <p>
                    Pensando em um projeto para ajudar outras pessoas, minha vó novamente, decidiu dar a idea de fazer uma marmita para os motoboys. Eu decidi parar para pensar nessa ideia, e pensar em como e qual diferencial poderia ter.
                  </p>
                  <p>
                    Até que enfim, eu e meus queridos amigos Fael, Thithico e Preto chegamos no projeto que finalmente é hoje.”
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* CÓDIGO DO ARDUINO */}
        <section id="codigo" className={styles.code}>
          <div className={styles.codeContainer}>
            <div className={styles.codeBadge}>
              <Code size={18} weight="bold" />
              <span>Repositório Aberto</span>
            </div>

            <h2>CÓDIGO DO ARDUINO</h2>

            <p className={styles.codeDescription}>
              Todo o código-fonte que controla os sensores de temperatura, o acionamento da pastilha Peltier, o visor LCD e os relés está disponível publicamente no GitHub.
            </p>

            <div className={styles.git}>
              <a
                href="https://github.com/Fael011/TCC-Codigo_arduino"
                target="_blank"
                rel="noreferrer"
                className={styles.gitButton}
                aria-label="Acessar código do Arduino no GitHub (abre em nova aba)"
              >
                <GithubLogo size={28} weight="bold" />
                <span>Acessar no GitHub</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Conteudo;
