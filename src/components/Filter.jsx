import React, { useEffect, useState } from "react";

const Filter = (props) => {
    const { filtroPildoras, setFiltroPildoras, setPage, className, totalCards } = props
    const [navCollapse, setNavCollapse] = useState(true);

    const handleFiltrarPildora = (pildora) => {
        setPage(1);
        if (filtroPildoras.includes(pildora)) {
          setFiltroPildoras(filtroPildoras.filter((item) => item !== pildora));
        } else {
          setFiltroPildoras([...filtroPildoras, pildora]);
        }
      };
  return (
    <div className={`sidebar__box ${navCollapse ? "navCollaps" : ""} ${className}`}>
          <div
            className="mobile__toggler"
            onClick={(e) => setNavCollapse(!navCollapse)}
          >
            <a href="" data-bs-toggle="modal" data-bs-target="#navbarModal">
              <i className="toggler bi bi-filter"></i>
            </a>
          </div>
          <h1 className="sidebar__title__max">FILTRAR</h1>
          <span className="total__cards">Total: {totalCards}</span>
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
  )
}

export default Filter