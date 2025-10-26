import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "./style/bootstrap.min.css";
import "./style/templatemo.css";
import "./style/custom.css";

// Vistas
import Inicio from "./views/Home";
import Tienda from "./views/Shop";
import Contact from "./views/Contact";
import Producto from "./views/Producto";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav
          className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block"
          id="templatemo_nav_top"
        >
          <div className="container text-light">
            <div className="w-100 d-flex justify-content-between">
              <div>
                <i className="fa fa-envelope mx-2"></i>
                <a
                  className="navbar-sm-brand text-light text-decoration-none"
                  href="mailto:info@company.com"
                >
                  info@company.com
                </a>
                <i className="fa fa-phone mx-2"></i>
                <a
                  className="navbar-sm-brand text-light text-decoration-none"
                  href="tel:010-020-0340"
                >
                  010-020-0340
                </a>
              </div>
            </div>
          </div>
        </nav>

        <nav className="navbar navbar-expand-lg navbar-light shadow">
          <div className="container d-flex justify-content-between align-items-center">
            <Link className="navbar-brand text-success logo h1 align-self-center" to="/">
              Ecommerce
            </Link>

            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#templatemo_main_nav"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
              id="templatemo_main_nav"
            >
              <div className="flex-fill">
                <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Inicio</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/shop">Tienda</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contacto">Contacto</Link>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </nav>
      </header>

      <section>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/shop" element={<Tienda />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/producto/:nombre" element={<Producto key={window.location.pathname} />} />
        </Routes>
      </section>

      <footer className="bg-dark" id="tempaltemo_footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pt-5">
              <h2 className="h2 text-success border-bottom pb-3 border-light logo">Ecommerce Shop</h2>
              <ul className="list-unstyled text-light footer-link-list">
                <li>
                  <i className="fas fa-map-marker-alt fa-fw"></i>
                  123 Consectetur at ligula 10660
                </li>
                <li>
                  <i className="fa fa-phone fa-fw"></i>
                  <a className="text-decoration-none" href="tel:010-020-0340">0896572000</a>
                </li>
                <li>
                  <i className="fa fa-envelope fa-fw"></i>
                  <a className="text-decoration-none" href="mailto:info@company.com">info@company.com</a>
                </li>
              </ul>
            </div>

            <div className="col-md-4 pt-5">
              <h2 className="h2 text-light border-bottom pb-3 border-light">Products</h2>
              <ul className="list-unstyled text-light footer-link-list">
                <li><a className="text-decoration-none" href="#">Luxury</a></li>
                <li><a className="text-decoration-none" href="#">Sport Wear</a></li>
                <li><a className="text-decoration-none" href="#">Men's Shoes</a></li>
                <li><a className="text-decoration-none" href="#">Women's Shoes</a></li>
                <li><a className="text-decoration-none" href="#">Popular Dress</a></li>
                <li><a className="text-decoration-none" href="#">Gym Accessories</a></li>
                <li><a className="text-decoration-none" href="#">Sport Shoes</a></li>
              </ul>
            </div>

            <div className="col-md-4 pt-5">
              <h2 className="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
              <ul className="list-unstyled text-light footer-link-list">
                <li><Link className="nav-link" to="/">Inicio</Link></li>
                <li><Link className="nav-link" to="/shop">Tienda</Link></li>
                <li><Link className="nav-link" to="/contacto">Contacto</Link></li>
              </ul>
            </div>
          </div>

          <div className="row text-light mb-4">
            <div className="col-12 mb-3">
              <div className="w-100 my-3 border-top border-light"></div>
            </div>
            <div className="col-auto me-auto">
              <ul className="list-inline text-left footer-icons">
                <li className="list-inline-item border border-light rounded-circle text-center">
                  <a className="text-light text-decoration-none" target="_blank" href="http://facebook.com/"><i
                    className="fab fa-facebook-f fa-lg fa-fw"></i></a>
                </li>
                <li className="list-inline-item border border-light rounded-circle text-center">
                  <a className="text-light text-decoration-none" target="_blank"
                    href="https://www.instagram.com/"><i className="fab fa-instagram fa-lg fa-fw"></i></a>
                </li>
                <li className="list-inline-item border border-light rounded-circle text-center">
                  <a className="text-light text-decoration-none" target="_blank" href="https://twitter.com/"><i
                    className="fab fa-twitter fa-lg fa-fw"></i></a>
                </li>
                <li className="list-inline-item border border-light rounded-circle text-center">
                  <a className="text-light text-decoration-none" target="_blank"
                    href="https://www.linkedin.com/"><i className="fab fa-linkedin fa-lg fa-fw"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-100 bg-black py-3">
          <div className="container">
            <div className="row pt-2">
              <div className="col-12">
                <p className="text-left text-light">
                  Designed by <a rel="sponsored" href="https://templatemo.com"
                    target="_blank">SystemWeb</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;