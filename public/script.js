const productos = [
    { nombre: "Nike Air Force 1", precio: 120, imagen: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,q_auto:eco/air-force-1-07-shoes-WrLlWX.png" },
    { nombre: "Adidas Campus", precio: 95, imagen: "https://assets.adidas.com/images/w_600,f_auto,q_auto/campus-00s-shoes.jpg" },
    { nombre: "Jordan 1 Retro", precio: 180, imagen: "https://static.nike.com/a/images/t_PDP_864_v1/jordan-1-retro-high-og-shoes.png" },
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