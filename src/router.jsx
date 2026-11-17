import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Conteudo from "./pages/Conteudo.jsx"
import Integrantes from "./pages/Integrantes.jsx"
import Componentes from "./pages/Componentes.jsx"
import Landing from "./pages/Landing.jsx"

function Router() {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-transition-wrapper">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/Conteudo" element={<Conteudo />} />
        <Route path="/Integrantes" element={<Integrantes />} />
        <Route path="/Componentes" element={<Componentes />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/comercial" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default Router;
