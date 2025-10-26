import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const productosDir = path.join(__dirname, "../content/productos");
const outputFile = path.join(__dirname, "../src/data/productos.json");

const productos = [];

fs.readdirSync(productosDir).forEach(file => {
  if (file.endsWith(".yml") || file.endsWith(".yaml")) {
    const doc = yaml.load(fs.readFileSync(path.join(productosDir, file), "utf8"));

    // Crear array de imágenes con ruta accesible desde React
    const imagenes = [];
    if (doc.img1) imagenes.push(doc.img1.startsWith("/img/") ? doc.img1 : `/img/${path.basename(doc.img1)}`);
    if (doc.img2) imagenes.push(doc.img2.startsWith("/img/") ? doc.img2 : `/img/${path.basename(doc.img2)}`);
    if (doc.img3) imagenes.push(doc.img3.startsWith("/img/") ? doc.img3 : `/img/${path.basename(doc.img3)}`);
    if (doc.img4) imagenes.push(doc.img4.startsWith("/img/") ? doc.img4 : `/img/${path.basename(doc.img4)}`);

    doc.img = imagenes;

    // Eliminar los campos individuales
    delete doc.img1;
    delete doc.img2;
    delete doc.img3;
    delete doc.img4;

    productos.push(doc);
  }
});

fs.writeFileSync(outputFile, JSON.stringify(productos, null, 2));
console.log("✅ productos.json generado con rutas '/img/...' listas para React");
