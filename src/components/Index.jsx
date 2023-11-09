import "./main.css";
import EmpresasContainer from "./EmpresasContainer";
import React, { useEffect, useState, useMemo } from "react";
// import data from "../api.json";
import Empresa from "./Empresa";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import SuperiorFooter from "./SuperiorFooter";
import { PageController } from "./PageController";
import Filter from "./Filter";

const Index = () => {
  const [filtroPildoras, setFiltroPildoras] = useState([]);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [resto, setResto] = useState(0);

  useEffect(() => {
    fetch(
      `http://localhost:3000/?categoria=${filtroPildoras[0] || ""}&page=${page}`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setResto(9 - res.data.docs.length)
        setData(res.data);
      });
  }, [filtroPildoras, page]);

  const listEmpty = new Array(resto).fill(" ")
  console.log(resto)
  console.log(listEmpty)

  return (
    <div className="body">
      <Header />
      <Hero />
      <div className="main">
        <Filter
          className="filter__desktop"
          filtroPildoras={filtroPildoras}
          setFiltroPildoras={setFiltroPildoras}
          setPage={setPage}
          totalCards={data.totalDocs}
        />
        <EmpresasContainer>
          <Filter
            className="filter__mobile"
            filtroPildoras={filtroPildoras}
            setFiltroPildoras={setFiltroPildoras}
            setPage={setPage}
            totalCards={data.totalDocs}
          />
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
          {listEmpty.map((_,index)=> {
            return (
              <Empresa
              key={"cardEmpty-"+index}
              link={""}
              img={""}
              name={"cardEmpty"}
              pills={[]}
              desc={""}
              socialMedia={""}
              contact={""}
            />
            )
          })}
          <PageController
            currentPage={data.page}
            prevPage={data.prevPage}
            nextPage={data.nextPage}
            hasPrevPage={data.hasPrevPage}
            hasNextPage={data.hasNextPage}
            setPage={setPage}
            totalPages={data.totalPages}
          />
        </EmpresasContainer>
      </div>
      {/* <SuperiorFooter /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
