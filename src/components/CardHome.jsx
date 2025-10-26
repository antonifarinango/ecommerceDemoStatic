import React from "react";

import { Link } from "react-router-dom";

export default function CardHome({nombre, talla, descripcion, precio, img}) {
    return (
        <>
        <div className="col-12 col-md-4 mb-4">
                                <div className="card h-100">
                                    <Link onClick={() => window.scrollTo(0,0)} to={"/shop"} className="h2 text-decoration-none text-dark">
                                        <img src={img} className="card-img-top" alt="..." />
                                    </Link>
                                    <div className="card-body">
                                        <ul className="list-unstyled d-flex justify-content-between">
                                            <li>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                                <i className="text-warning fa fa-star"></i>
                                            </li>
                                            <li className="text-muted text-right">${precio}</li>
                                        </ul>
                                        <Link onClick={() => window.scrollTo(0,0)} to={"/shop"} className="h2 text-decoration-none text-dark">{nombre}</Link>
                                        <p className="card-text">
                                            {descripcion}
                                        </p>
                                        <p className="text-muted">{talla}</p>
                                    </div>
                                </div>
                            </div>
            
        </>
    )

}