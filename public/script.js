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
  },
  {
    nombre: "Puma Suede Classic",
    precio: 85,
    imagen: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/352634/03/sv01/fnd/PNA/fmt/png"
  },
  {
    nombre: "New Balance 550",
    precio: 110,
    imagen: "https://nb.scene7.com/is/image/NB/bb550wt1_nb_02_i?$pdpflexf2$&wid=440&hei=440"
  },
  {
    nombre: "Converse Chuck Taylor All Star",
    precio: 75,
    imagen: "https://www.converse.com/on/demandware.static/-/Sites-masterCatalog_Converse/default/dw2c6a9e99/images/hi/101010C_01X1.jpg"
  },
  {
    nombre: "Vans Old Skool",
    precio: 70,
    imagen: "https://images.vans.com/is/image/VansEU/VN000D3HY28-HERO?$PDP-FULL-IMAGE$"
  },
  {
    nombre: "Reebok Club C 85",
    precio: 90,
    imagen: "https://assets.reebok.com/images/w_600,f_auto,q_auto/club-c-85-shoes.jpg"
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