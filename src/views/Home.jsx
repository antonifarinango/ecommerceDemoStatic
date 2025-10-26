import React from "react";

import img1 from '../img/hero-img-2.jpg';
import img2 from '../img/camiseta-1.jpg';
import img3 from '../img/pantalon-1.jpg';
import productos from '../data/productos.json'
import CardHome from "../components/CardHome";
import { Link } from "react-router-dom";

export default function Home() {


    const productosPromocion = productos.filter(p => p.estado == "Promoción");
    const productosNuevos = productos.filter(p => p.estado == "Nuevo");


    return (
        <>
            <div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
                    <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img className="img-fluid rounded-1" src={img1} alt="" />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left align-self-center">
                                        <h1 className="h1 text-success"><b>Hoddies</b> Urbanos</h1>
                                        <h3 className="h2">Comodidad y estilo en cada prenda</h3>
                                        <p>
                                            Descubre nuestra colección de hoddies suaves y modernas. Perfectas para cualquier ocasión casual.
                                            Mantente cómodo sin perder el estilo, con diseños exclusivos y materiales de alta calidad.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img className="img-fluid rounded-1" src={img3} alt="" />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left">
                                        <h1 className="h1">Pantalones</h1>
                                        <h3 className="h2">Versatilidad para tu día a día</h3>
                                        <p>
                                            Explora nuestra línea de pantalones que combinan comodidad y tendencia. Ideales para la oficina o salidas casuales.
                                            Encuentra el ajuste perfecto para cada estilo y ocasión.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img className="img-fluid rounded-1" src={img2} alt="" />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left">
                                        <h1 className="h1">Camisetas</h1>
                                        <h3 className="h2">Diseños que hablan por ti</h3>
                                        <p>
                                            Nuestras camisetas ofrecen estampados únicos y tejidos suaves para máxima comodidad.
                                            Expresa tu personalidad con cada outfit y mantente siempre a la moda.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel"
                    role="button" data-bs-slide="prev">
                    <i className="fas fa-chevron-left"></i>
                </a>
                <a className="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel"
                    role="button" data-bs-slide="next">
                    <i className="fas fa-chevron-right"></i>
                </a>

            </div>

            <div className="container-fluid">
                <div className="container py-5">
                    <div className="row text-center py-3">
                        <div className="col-lg-6 m-auto">
                            <h1 className="h1">Nuevos Productos</h1>
                            <p>
                                Descubre las últimas novedades en nuestra tienda: hoodies, camisetas y pantalones con estilo y comodidad.
                                Mantente a la vanguardia de la moda con nuestras piezas más recientes.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        {productosNuevos.map((p, i) => (
                            <div key={i} className="col-12 col-md-4 mb-4">
                                <div className="card h-100">
                                    <Link to={"/shop"} onClick={() => window.scrollTo(0, 0)}>
                                        <img src={p.img[0]} className="card-img-top" alt="..." />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className="container-fluid bg-light">
                <div className="container py-5">
                    <div className="row text-center py-3">
                        <div className="col-lg-6 m-auto">
                            <h1 className="h1">Promociones</h1>
                            <p>
                                Aprovecha nuestras ofertas especiales en hoodies, camisetas y pantalones.
                                Encuentra descuentos exclusivos por tiempo limitado y renueva tu estilo.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        {productosPromocion.map((p, i) => (
                            <CardHome key={i} nombre={p.nombre} descripcion={p.descripcion} talla={p.talla} precio={p.precio} img={p.img[0]} />
                        ))}
                    </div>
                </div>
            </div>

        </>

    );
}
