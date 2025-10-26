import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function Contact() {
  useEffect(() => {
    const coords = [-0.2186, -78.5120];
    const map = L.map("mapid").setView(coords, 16);

    L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19,
      }
    ).addTo(map);

    L.marker(coords)
      .addTo(map)
      .bindPopup("<b>El Panecillo</b><br />Quito, Ecuador")
      .openPopup();

    map.scrollWheelZoom.disable();
    map.touchZoom.disable();

    return () => map.remove();
  }, []);


  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const numero = import.meta.env.VITE_NUMERO;
    const text = `Nombre: ${nombre}%0AEmail: ${email}%0AMensaje: ${mensaje}`;
    window.open(`https://wa.me/${numero}?text=${text}`, "_blank");

    setNombre("");
    setEmail("");
    setMensaje("");
  };


  return (
    <>
      <div className="container-fluid bg-light py-5">
        <div className="col-md-6 m-auto text-center">
          <h1 className="h1">Contáctanos</h1>
          <p>
            ¿Tienes alguna duda o consulta sobre nuestros productos?
            Escríbenos y nuestro equipo te responderá lo antes posible.
          </p>
        </div>

      </div>

      <div id="mapid" style={{ width: "100%", height: "300px" }}></div>

      <div className="container py-5">
        <div className="row py-5">
          <form className="col-md-9 m-auto" method="post" role="form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-group col-md-6 mb-3">
                <label htmlFor="inputname">Nombre</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  id="name"
                  name="name"
                  placeholder="Nombre"
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className="form-group col-md-6 mb-3">
                <label htmlFor="inputemail">Email</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="inputmessage">Mensaje</label>
              <textarea
                className="form-control mt-1"
                id="message"
                name="message"
                placeholder="Mensaje"
                rows="8"
                onChange={(e) => setMensaje(e.target.value)}
              ></textarea>
            </div>
            <div className="row">
              <div className="col text-end mt-2">
                <button
                  type="submit"
                  className="btn btn-success btn-lg px-3"
                >
                  Contactar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
