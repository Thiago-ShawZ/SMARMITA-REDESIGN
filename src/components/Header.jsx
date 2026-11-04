import { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { List, X } from "@phosphor-icons/react"
import styles from "./Header.module.css"
import logo_smarmita from "../images/logo_smarmita.png"

function Header() {
  const [abrirMenu, setAbrirMenu] = useState(false);
  const [activeItem, setActiveItem] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Efeito para sombra e estilo ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fechar menu mobile com tecla ESC, ao redimensionar e travar scroll do fundo
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && abrirMenu) {
        setAbrirMenu(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 900 && abrirMenu) {
        setAbrirMenu(false);
      }
    };

    if (abrirMenu) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [abrirMenu]);

  // Monitorar rota e seções para determinar item ativo
  useEffect(() => {
    const pathname = location.pathname;
    const hash = location.hash;

    if (pathname === "/Componentes") {
      setActiveItem("componentes");
      return;
    }

    if (pathname === "/Integrantes") {
      setActiveItem("equipe");
      return;
    }

    if (pathname === "/Conteudo") {
      if (hash === "#historia") {
        setActiveItem("projeto");
      } else {
        setActiveItem("codigo");
      }
      return;
    }

    if (pathname === "/") {
      if (hash === "#projeto") {
        setActiveItem("projeto");
        return;
      }
      if (hash === "#funcionamento") {
        setActiveItem("funcionamento");
        return;
      }

      const observerCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveItem(entry.target.id);
          }
        });
      };

      const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);
      const sectionIds = ["inicio", "projeto", "funcionamento"];
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });

      return () => observer.disconnect();
    }
  }, [location]);

  // Tratar clique em âncoras e fechar menu imediatamente
  const handleAnchorClick = (e, targetHash, itemId) => {
    setActiveItem(itemId);
    setAbrirMenu(false);

    if (location.pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(targetHash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", targetHash);
      }
    } else {
      navigate("/" + targetHash);
    }
  };

  const navLinks = [
    { id: "inicio", label: "Início", type: "anchor", target: "#inicio" },
    { id: "projeto", label: "Projeto", type: "anchor", target: "#projeto" },
    { id: "funcionamento", label: "Funcionamento", type: "anchor", target: "#funcionamento" },
    { id: "componentes", label: "Componentes", type: "route", to: "/Componentes" },
    { id: "codigo", label: "Código", type: "route", to: "/Conteudo#codigo" },
    { id: "equipe", label: "Equipe", type: "route", to: "/Integrantes" },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
      <div className={styles.headerContainer}>
        {/* Marca & Logotipo */}
        <Link
          to="/"
          className={styles.brand}
          onClick={() => {
            setActiveItem("inicio");
            setAbrirMenu(false);
            if (location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          aria-label="Página inicial Smarmita"
        >
          <img src={logo_smarmita} alt="Logo Smarmita" className={styles.brandLogo} />
          <div className={styles.brandText}>
            <span className={styles.brandName}>SMARMITA</span>
            <span className={styles.brandTagline}>Smart Food Tech</span>
          </div>
        </Link>

        {/* Menu Desktop */}
        <nav className={styles.desktopNav} aria-label="Navegação principal">
          <ul className={styles.navList}>
            {navLinks.map((item) => (
              <li key={item.id} className={styles.navItem}>
                {item.type === "anchor" ? (
                  <a
                    href={item.target}
                    onClick={(e) => handleAnchorClick(e, item.target, item.id)}
                    className={`${styles.navLink} ${activeItem === item.id ? styles.active : ""}`}
                    aria-current={activeItem === item.id ? "page" : undefined}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.to}
                    onClick={() => { setActiveItem(item.id); setAbrirMenu(false); }}
                    className={`${styles.navLink} ${activeItem === item.id ? styles.active : ""}`}
                    aria-current={activeItem === item.id ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Botão Hambúrguer Mobile */}
        <button
          type="button"
          onClick={() => setAbrirMenu(!abrirMenu)}
          className={styles.menuToggle}
          aria-label={abrirMenu ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          aria-expanded={abrirMenu}
        >
          {abrirMenu ? <X size={28} weight="bold" /> : <List size={28} weight="bold" />}
        </button>
      </div>

      {/* Backdrop Mobile com toque suave */}
      {abrirMenu && (
        <div
          className={styles.backdrop}
          onClick={() => setAbrirMenu(false)}
          aria-hidden="true"
        />
      )}

      {/* Gaveta Lateral Mobile */}
      <div
        className={`${styles.mobileDrawer} ${abrirMenu ? styles.drawerOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu móvel"
      >
        <div className={styles.drawerHeader}>
          <div className={styles.drawerBrand}>
            <img src={logo_smarmita} alt="Logo Smarmita" className={styles.drawerLogo} />
            <span className={styles.brandName}>SMARMITA</span>
          </div>
          <button
            type="button"
            onClick={() => setAbrirMenu(false)}
            className={styles.drawerClose}
            aria-label="Fechar menu móvel"
          >
            <X size={24} />
          </button>
        </div>

        <nav aria-label="Navegação móvel">
          <ul className={styles.mobileNavList}>
            {navLinks.map((item) => (
              <li key={item.id} className={styles.mobileNavItem}>
                {item.type === "anchor" ? (
                  <a
                    href={item.target}
                    onClick={(e) => handleAnchorClick(e, item.target, item.id)}
                    className={`${styles.mobileNavLink} ${activeItem === item.id ? styles.mobileActive : ""}`}
                    aria-current={activeItem === item.id ? "page" : undefined}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.to}
                    onClick={() => { setActiveItem(item.id); setAbrirMenu(false); }}
                    className={`${styles.mobileNavLink} ${activeItem === item.id ? styles.mobileActive : ""}`}
                    aria-current={activeItem === item.id ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
