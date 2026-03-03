const productos = [
  {
    nombre: "Nike Air Force 1",
    precio: 120,
    imagen: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,q_auto:eco/air-force-1-07-shoes-WrLlWX.png"
  },
  {
    nombre: "Adidas Campus",
    precio: 95,
    imagen: "https://assets.adidas.com/images/w_600,f_auto,q_auto/campus-00s-shoes.jpg"
  },
  {
    nombre: "Jordan 1 Retro",
    precio: 180,
    imagen: "https://static.nike.com/a/images/t_PDP_864_v1/jordan-1-retro-high-og-shoes.png"
  }
];

let carrito = [];

const contenedor = document.getElementById("productos");
const listaCarrito = document.getElementById("lista-carrito");
const contador = document.getElementById("contador");
const totalHTML = document.getElementById("total");

function mostrarProductos() {
  productos.forEach((p, index) => {
    contenedor.innerHTML += `
      <div class="card">
        <img src="${p.imagen}">
        <h3>${p.nombre}</h3>
        <p>$${p.precio}</p>
        <button onclick="agregarCarrito(${index})">
          Agregar al carrito
        </button>
      </div>
    `;
  });
}

function agregarCarrito(index) {
  carrito.push(productos[index]);
  actualizarCarrito();
}

function actualizarCarrito() {

  listaCarrito.innerHTML = "";

  let total = 0;

  carrito.forEach(p => {
    total += p.precio;

    listaCarrito.innerHTML += `
      <p>${p.nombre} - $${p.precio}</p>
    `;
  });

  contador.textContent = carrito.length;
  totalHTML.textContent = total;
}

mostrarProductos();