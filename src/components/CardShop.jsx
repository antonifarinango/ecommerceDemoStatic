import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

export default function CardShop({nombre, talla, precio,img}) {

    return (
        <>
        <div className="col-md-4">
            <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                    <img className="card-img rounded-0 img-fluid" src={img} alt={nombre}/>
                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                            <ul className="list-unstyled">
                                <li><Link onClick={() => actualizar()} className="btn btn-success text-white mt-2" to={`/producto/${nombre}`}><i className="far fa-eye"></i></Link></li>
                            </ul>
                        </div>
                </div>
                <div className="card-body">
                    <a href="shop-single.html" className="h3 text-decoration-none">{nombre}</a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                        <li>{talla}</li>
                        <li className="pt-2">
                            <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                        </li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1">
                        <li>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-warning fa fa-star"></i>
                        </li>
                    </ul>
                    <p className="text-center mb-0">${precio}</p>
                </div>
            </div>
        </div>
            
        </>
    )

}