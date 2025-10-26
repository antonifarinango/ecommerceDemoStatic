import React, { useState } from "react";
import CardShop from "../components/CardShop";
import productos from '../data/productos.json';

export default function Home() {
  const [mostrarPromos, setMostrarPromos] = useState(false);
  const [categoria, setCategoria] = useState("todo");
  const [pagina, setPagina] = useState(1);
  const porPagina = 9;

  // Filtrar productos según promoción y categoría
  const listaBase = mostrarPromos 
    ? productos.filter(p => p.estado === "Promoción")
    : productos;

  const listaFiltrada = categoria === "todo" 
  ? listaBase 
  : listaBase.filter(p => p.categoria.toLowerCase() === categoria.toLowerCase());


  const totalPaginas = Math.ceil(listaFiltrada.length / porPagina);
  const productosPagina = listaFiltrada.slice(
    (pagina - 1) * porPagina,
    pagina * porPagina
  );

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-3">
          <h1 className="h2 pb-4">Categorías</h1>
          <ul className="list-unstyled templatemo-accordion">
            <li className="pb-2">
              <button
                className={`w-75 btn ${!mostrarPromos && categoria === "todo" ? "btn-success" : "btn-outline-success"}`}
                onClick={() => { setMostrarPromos(false); setCategoria("todo"); setPagina(1); }}
              >
                Todo
              </button>
            </li>
            <li className="pb-2">
              <button
                className={`w-75 btn ${categoria === "hoddies" && !mostrarPromos ? "btn-success" : "btn-outline-success"}`}
                onClick={() => { setCategoria("hoddies"); setMostrarPromos(false); setPagina(1); }}
              >
                Hoddies
              </button>
            </li>
            <li className="pb-2">
              <button
                className={`w-75 btn ${categoria === "camisetas" && !mostrarPromos ? "btn-success" : "btn-outline-success"}`}
                onClick={() => { setCategoria("camisetas"); setMostrarPromos(false); setPagina(1); }}
              >
                Camisetas
              </button>
            </li>
            <li className="pb-2">
              <button
                className={`w-75 btn ${categoria === "pantalones" && !mostrarPromos ? "btn-success" : "btn-outline-success"}`}
                onClick={() => { setCategoria("pantalones"); setMostrarPromos(false); setPagina(1); }}
              >
                Pantalones
              </button>
            </li>
            <li className="pb-2">
              <button
                className={`w-75 btn ${mostrarPromos ? "btn-success" : "btn-outline-success"}`}
                onClick={() => { setMostrarPromos(true); setCategoria("todo"); setPagina(1); }}
              >
                Promociones
              </button>
            </li>
          </ul>
        </div>

        <div className="col-lg-9">
          <div id="card-shop" className="row">
            {productosPagina.map((p, i) => (
              <CardShop key={i} nombre={p.nombre} talla={p.talla} precio={p.precio} img={p.img[0]}  />
            ))}
          </div>

          <div className="row">
            <ul className="pagination pagination-lg justify-content-end">
              {Array.from({ length: totalPaginas }).map((_, i) => (
                <li key={i} className={`page-item ${pagina === i + 1 ? "active" : ""}`}>
                  <button
                    className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0"
                    onClick={() => setPagina(i + 1)}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
