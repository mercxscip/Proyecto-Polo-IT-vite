import './main.css'
import EmpresasContainer from './EmpresasContainer'
import React, { useState } from 'react';
import data from '../api.json';
import Empresa from './Empresa';
import Header from './Header'
import Hero from './Hero'
import Footer from './Footer'
import 'bootstrap-icons/font/bootstrap-icons.css'
import SuperiorFooter from './SuperiorFooter';


const Index = () => {
    const [filtroPildoras, setFiltroPildoras] = useState([]);
  
    const handleFiltrarPildora = pildora => {
      if (filtroPildoras.includes(pildora)) {
        setFiltroPildoras(filtroPildoras.filter(item => item !== pildora));
      } else {
        setFiltroPildoras([...filtroPildoras, pildora]);
      }
    };
  
    const tarjetasFiltradas = data
      .filter(organizacion => {
        if (filtroPildoras.length === 0) {
          return true;
        } else {
          return (
            filtroPildoras.some(pildora => organizacion.pildora === pildora) ||
            filtroPildoras.some(pildora => organizacion.pildora2 === pildora)
          );
        }
      })
      .sort((a, b) => a.id - b.id);
    

  return (
      
    <div className="body">
      <Header/>
      <Hero/>
      <div className="main">
        <div className="sidebar__box">
        <h1 className='sidebar__title__max'>FILTRAR</h1>
      <h2 className='sidebar__title'>IT</h2>
      {['Tecnología', 'Programación', 'Sistemas', 'Software'].map(pildora => (
        <label key={pildora}>
          <input
            type="checkbox"
            className='checkbox__styles'
            checked={filtroPildoras.includes(pildora)}
            onChange={() => handleFiltrarPildora(pildora)}
          />
          {pildora}
        </label>
      ))}
      <h2 className='sidebar__title'>SERVICIOS</h2>
      {['Abogados', 'Consultores', 'Soluciones', 'Pagos'].map(pildora => (
        <label key={pildora}>
          <input
            type="checkbox"
            className='checkbox__styles'
            checked={filtroPildoras.includes(pildora)}
            onChange={() => handleFiltrarPildora(pildora)}
          />
          {pildora}
        </label>
      ))}
      <h2 className='sidebar__title'>OTROS</h2>
      {['Marketing', 'Internet', 'Idiomas'].map(pildora => (
        <label key={pildora}>
          <input
            type="checkbox"
            className='checkbox__styles'
            checked={filtroPildoras.includes(pildora)}
            onChange={() => handleFiltrarPildora(pildora)}
          />
          {pildora}
        </label>
      ))}
      <h2 className='sidebar__title'>TODOS</h2>
      <p>Deselecciona todas las píldoras para mostrar todas las tarjetas nuevamente.</p>
      </div>
      
      
      <EmpresasContainer>
      {tarjetasFiltradas.map(organizacion => (
        <Empresa
          key={organizacion.id}
          link={organizacion.page}
          img={organizacion.logo}
          name={organizacion.nombre}
          pill={organizacion.pildora}
          pill2={organizacion.pildora2}
          desc={organizacion.descripcion}
          redA={organizacion.linkedin}
          redB={organizacion.twitter}
          redC={organizacion.facebook}
          redD={organizacion.youtube}
          redE={organizacion.instagram}
          redF={organizacion.pinterest}
          redG={organizacion.github}
          redH={organizacion.dribbble}
          redI={organizacion.figma}
          redJ={organizacion.twitch}
          redK={organizacion.spotify}
          redL={organizacion.podcast}
          redM={organizacion.feedly}
          redN={organizacion.blog}
          contact={organizacion.contacto}
        />
      ))}
      </EmpresasContainer>
      </div>
      <SuperiorFooter/>
      <Footer/>
    </div>
  );
};

export default Index;