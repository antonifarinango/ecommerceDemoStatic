import React, { useState } from "react";
import productos from "../data/productos.json";
import { useParams } from "react-router-dom";
import CardShop from "../components/CardShop";

export default function Producto() {
    const { nombre } = useParams();
    const producto = productos.find((p) => p.nombre === nombre);
    const imgProducto = [...producto.img];

    if (!producto) {
        return <p className="text-center mt-5">Producto no encontrado</p>;
    }

    const [mainImg, setMainImg] = useState(producto.img[0]);

    const nombreFormateado = nombre.replace(" ", "%20");


    const numero = import.meta.env.VITE_NUMERO; // sin + ni espacios
    const mensaje = encodeURIComponent(`Hola, quiero más info sobre el producto ${nombre} : http://localhost:5173/producto/${nombreFormateado}`);
    const url = `https://wa.me/${numero}?text=${mensaje}`;

    return (
        <section className="bg-light">
            <div className="container pb-5">
                <div className="row">
                    {/* IMÁGENES */}
                    <div className="col-lg-5 mt-5">
                        <div className="card mb-3">
                            <img
                                className="card-img img-fluid"
                                src={mainImg}
                                alt={producto.nombre}
                                id="product-detail"
                            />
                        </div>

                        <div className="row">
                            <div
                                id="multi-item-example"
                                className="col-10 carousel slide carousel-multi-item"
                                data-bs-ride="carousel"
                            >
                                <div className="carousel-inner product-links-wap" role="listbox">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            {imgProducto.map((imgSrc, i) => (
                                                <div className="col-4" key={i}>
                                                    <a
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setMainImg(imgSrc);
                                                        }}
                                                    >
                                                        <img
                                                            className="card-img img-fluid"
                                                            src={imgSrc}
                                                            alt={`Imagen ${i + 1}`}
                                                        />
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* INFORMACIÓN */}
                    <div className="col-lg-7 mt-5">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="h2">{producto.nombre}</h1>
                                <p className="h3 py-2">${producto.precio}</p>
                                <p className="py-2">
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                </p>

                                <h6>Descripción:</h6>
                                <p>{producto.descripcion}</p>

                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <h6>Talla:</h6>
                                    </li>
                                    <li className="list-inline-item">
                                        <p className="text-muted">
                                            <strong className="text-success">{producto.talla}</strong>
                                        </p>
                                    </li>
                                </ul>

                                <div className="row pb-3">
                                    <div className="col d-grid">
                                        <a
                                            href={url}
                                            className="btn btn-success btn-lg"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Comprar
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="py-5" style={{backgroundColor:"#fff"}}>
                <div className="container">
                    <div className="row text-left p-2 pb-3">
                        <h4>Otros Productos</h4>
                    </div>
                    <div id="card-shop" className="row">
                        {productos.map((p, i) => (
                            <CardShop key={i} nombre={p.nombre} talla={p.talla} precio={p.precio} img={p.img[0]} />
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
}
