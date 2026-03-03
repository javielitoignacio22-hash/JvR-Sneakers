const sneakers = [
  {
    title: "Nike Air Force 1 White",
    price: 120,
    img: "/images/airforce1.jpg"
  },
  {
    title: "Nike Dunk Low Panda",
    price: "$140",
    img: "/images/dunkpanda.jpg"
  },
  {
    title: "Jordan 1 Retro High",
    price: "$180",
    img: "/images/jordan1.jpg"
  },
  {
    title: "Jordan 4 Military Black",
    price: "$220",
    img: "/images/jordan4.jpg"
  },
  {
    title: "Adidas Yeezy Boost 350",
    price: "$260",
    img: "/images/yeezy350.jpg"
  },
  {
    title: "Nike Air Max 90",
    price: "$150",
    img: "/images/airmax90.jpg"
  },
  {
    title: "Nike Air Max 97",
    price: "$170",
    img: "/images/airmax97.jpg"
  },
  {
    title: "New Balance 550",
    price: "$130",
    img: "/images/nb550.jpg"
  },
  {
    title: "New Balance 2002R",
    price: "$160",
    img: "/images/nb2002r.jpg"
  },
  {
    title: "Puma RS-X",
    price: "$110",
    img: "/images/pumarsx.jpg"
  },
  {
    title: "Converse Chuck 70",
    price: "$85",
    img: "/images/converse70.jpg"
  },
  {
    title: "Vans Old Skool",
    price: "$75",
    img: "/images/vansoldskool.jpg"
  },
  {
    title: "Jordan 11 Concord",
    price: "$240",
    img: "/images/jordan11.jpg"
  },
  {
    title: "Nike Blazer Mid",
    price: "$105",
    img: "/images/blazer.jpg"
  },
  {
    title: "Adidas Forum Low",
    price: "$100",
    img: "/images/forumlow.jpg"
  },
  {
    title: "Nike Zoom Vomero 5",
    price: "$160",
    img: "/images/vomero5.jpg"
  },
  {
    title: "ASICS Gel Kayano 14",
    price: "$155",
    img: "/images/asicskayano.jpg"
  },
  {
    title: "Jordan 3 White Cement",
    price: "$210",
    img: "/images/jordan3.jpg"
  },
  {
    title: "Nike Air Presto",
    price: "$130",
    img: "/images/presto.jpg"
  },
  {
    title: "Adidas Ultraboost 22",
    price: "$190",
    img: "/images/ultraboost22.jpg"
  }
];

let carrito = [];

const contenedor = document.getElementById("productos");
const listaCarrito = document.getElementById("lista-carrito");
const contador = document.getElementById("contador");
const totalHTML = document.getElementById("total");

function mostrarProductos() {
  sneakers.forEach((p, index) => {
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
  carrito.push(sneakers[index]);
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