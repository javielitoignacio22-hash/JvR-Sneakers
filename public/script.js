const productos = [
    { nombre: "Nike Air Force 1", precio: 120, imagen: "https://citytenis.online/cdn/shop/files/air-force-1-big-kids-shoes-TlVXsf_8_1024x1024@2x.webp?v=1712421376" },
    { nombre: "Adidas Campus", precio: 95, imagen: "https://citytenis.online/cdn/shop/files/adidas-campus-00s-core-black-2.webp?v=1738184119" },
    { nombre: "Jordan 1 Retro", precio: 180, imagen: "https://stylecasesmex.com/cdn/shop/products/image_e09fa36e-5ddc-444d-86a0-4c25c613182f.jpg?v=1659656214&width=1445" },
    { nombre: "Puma Suede", precio: 85, imagen: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/352634/03/sv01/fnd/PNA/fmt/png" }
];

let carrito = [];
const contenedor = document.getElementById("productos");
const listaCarrito = document.getElementById("lista-carrito");

function mostrarProductos() {
    contenedor.innerHTML = productos.map((p, i) => `
        <div class="card">
            <div class="card-img-container">
                <img src="${p.imagen}" alt="${p.nombre}">
            </div>
            <h3>${p.nombre}</h3>
            <p>$${p.precio}</p>
            <button onclick="agregar(${i})">Agregar</button>
        </div>
    `).join("");
}

function agregar(i) {
    carrito.push(productos[i]);
    actualizarCarrito();
}

function actualizarCarrito() {
    listaCarrito.innerHTML = carrito.map((p, i) => `
        <div class="item-carrito">
            <span>${p.nombre}</span>
            <button onclick="carrito.splice(${i}, 1); actualizarCarrito()">X</button>
        </div>
    `).join("");
    document.getElementById("contador").textContent = carrito.length;
    document.getElementById("total").textContent = carrito.reduce((sum, p) => sum + p.precio, 0);
}

function procesarPago(metodo) {
    if(carrito.length > 0) {
        alert("Pago procesado");
        carrito = [];
        actualizarCarrito();
    }
}

mostrarProductos();