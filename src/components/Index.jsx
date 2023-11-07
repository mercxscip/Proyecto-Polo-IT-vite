import "./main.css";
import EmpresasContainer from "./EmpresasContainer";
import React, { useEffect, useState } from "react";
// import data from "../api.json";
import Empresa from "./Empresa";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import SuperiorFooter from "./SuperiorFooter";
import { PageController } from "./PageController";

const Index = () => {
  const [filtroPildoras, setFiltroPildoras] = useState([]);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [navCollapse, setNavCollapse] = useState(false)
  useEffect(() => {
    fetch(
      `http://localhost:3000/?categoria=${filtroPildoras[0] || ""}&page=${page}`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res.data);
      });
  }, [filtroPildoras, page]);
  const handleFiltrarPildora = (pildora) => {
    setPage(1);
    if (filtroPildoras.includes(pildora)) {
      setFiltroPildoras(filtroPildoras.filter((item) => item !== pildora));
    } else {
      setFiltroPildoras([...filtroPildoras, pildora]);
    }
  };

  return (
    <div className="body">
      <Header />
      <Hero />
      <div className="main">
          
        <div className={`sidebar__box ${navCollapse  ? "navCollaps" : ""}`}>
        <div className="mobile__toggler" onClick={e => setNavCollapse(!navCollapse)}>
            <a href="" data-bs-toggle="modal" data-bs-target="#navbarModal">
              <i className="toggler bi bi-filter"></i>
            </a>
          </div>
          <h1 className="sidebar__title__max">FILTRAR</h1>
          <h2 className="sidebar__title">IT</h2>
          {["Tecnología", "Programación", "Sistemas", "Software"].map(
            (pildora) => (
              <label key={pildora}>
                <input
                  type="checkbox"
                  className="checkbox__styles"
                  checked={filtroPildoras.includes(pildora)}
                  onChange={() => handleFiltrarPildora(pildora)}
                />
                {pildora}
              </label>
            )
          )}
          <h2 className="sidebar__title">SERVICIOS</h2>
          {["Abogados", "Consultores", "Soluciones", "Pagos", "Asesores"].map(
            (pildora) => (
              <label key={pildora}>
                <input
                  type="checkbox"
                  className="checkbox__styles"
                  checked={filtroPildoras.includes(pildora)}
                  onChange={() => handleFiltrarPildora(pildora)}
                />
                {pildora}
              </label>
            )
          )}
          <h2 className="sidebar__title">OTROS</h2>
          {["Marketing", "Internet", "Idiomas"].map((pildora) => (
            <label key={pildora}>
              <input
                type="checkbox"
                className="checkbox__styles"
                checked={filtroPildoras.includes(pildora)}
                onChange={() => handleFiltrarPildora(pildora)}
              />
              {pildora}
            </label>
          ))}
          <h2 className="sidebar__title">TODOS</h2>
          <p className="sidebar__text">
            Deselecciona todas las píldoras para mostrar todas las tarjetas
            nuevamente.
          </p>
        </div>

        <EmpresasContainer>
          {data.docs?.map((organizacion) => (
            <Empresa
              key={organizacion.id}
              link={organizacion.url}
              img={organizacion.logoUrl}
              name={organizacion.name}
              pills={organizacion.pills}
              desc={organizacion.description}
              socialMedia={organizacion.socialMedia}
              contact={organizacion.contact}
            />
          ))}
        </EmpresasContainer>
      </div>
      <PageController
        currentPage={data.page}
        prevPage={data.prevPage}
        nextPage={data.nextPage}
        hasPrevPage={data.hasPrevPage}
        hasNextPage={data.hasNextPage}
        setPage={setPage}
        totalPages={data.totalPages}
      />
      <SuperiorFooter />
      <Footer />
    </div>
  );
};

export default Index;
