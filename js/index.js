// PRODUCTOS
const productos = [
  {
    id: "play-5",
    titulo: "Playstation 5",
    imagen: "./img/play5.webp",
    categoria: {
      nombre: "Sony",
      id: "sony",
    },
    precio: 200000,
  },
  {
    id: "play-4",
    titulo: "Playstation 4",
    imagen: "./img/play4.webp",
    categoria: {
      nombre: "Sony",
      id: "sony",
    },
    precio: 130000,
  },
  {
    id: "Xbox",
    titulo: "Xbox Series 5",
    imagen: "./img/xboxseries5.jpg",
    categoria: {
      nombre: "Xbox",
      id: "xbox",
    },
    precio: 200000,
  },
  {
    id: "Joytick-Xbox",
    titulo: "Joystick Xbox Series 5",
    imagen: "./img/joystickxbox.jpg",
    categoria: {
      nombre: "Xbox",
      id: "xbox",
    },
    precio: 25000,
  },
  {
    id: "Joystick-ps4",
    titulo: "Joystick PS4",
    imagen: "./img/joystickps4.jpg",
    categoria: {
      nombre: "Sony",
      id: "sony",
    },
    precio: 20000,
  },
  {
    id: "Jostick-ps5",
    titulo: "Joystick PS5",
    imagen: "./img/joystickps5.jpg",
    categoria: {
      nombre: "Sony",
      id: "sony",
    },
    precio: 30000,
  },
  {
    id: "Iphone-13",
    titulo: "Iphone 13",
    imagen: "./img/iphone13rosa.jpg",
    categoria: {
      nombre: "Apple",
      id: "apple",
    },
    precio: 250000,
  },
  {
    id: "Iphone-14-plus",
    titulo: "Iphone 14 Plus",
    imagen: "./img/iphone14plus.jpg",
    categoria: {
      nombre: "Apple",
      id: "apple",
    },
    precio: 300000,
  },
  {
    id: "Iphone-14-pro-max",
    titulo: "Iphone 14 Pro Max",
    imagen: "./img/iphone14promax.jpg",
    categoria: {
      nombre: "Apple",
      id: "apple",
    },
    precio: 400000,
  },
  {
    id: "Airpods-pro",
    titulo: "Airpods Pro",
    imagen: "./img/airpodspro.webp",
    categoria: {
      nombre: "Apple",
      id: "apple",
    },
    precio: 60000,
  },
  {
    id: "Airpods-pro-max",
    titulo: "Airpods Pro Max",
    imagen: "./img/airpodspromax.jpg",
    categoria: {
      nombre: "Apple",
      id: "apple",
    },
    precio: 80000,
  },
  {
    id: "Ipad-pro",
    titulo: "Ipad Pro",
    imagen: "./img/ipadpro.jpg",
    categoria: {
      nombre: "Apple",
      id: "apple",
    },
    precio: 100000,
  },
  {
    id: "Apple-watch",
    titulo: "Apple Watch",
    imagen: "./img/applewatch.webp",
    categoria: {
      nombre: "Apple",
      id: "apple",
    },
    precio: 50000,
  },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");


function cargarProductos(productosElegidos) {
  contenedorProductos.innerHTML = "";

  productosElegidos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar id="${producto.id}">Agregar</button>
        </div>
        `;

    contenedorProductos.append(div);
  });
  nuevosbotonesAgregar();

  console.log(botonesAgregar)
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
  boton.addEventListener("click", (e) => {
    botonesCategorias.forEach((boton) => boton.classList.remove("active"));

    e.currentTarget.classList.add("active");

    if (e.currentTarget.id != "todos") {
      const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id); 
      tituloPrincipal.innerText = productoCategoria.categoria.nombre;

      const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
      cargarProductos(productosBoton);
    } else {
      tituloPrincipal.innerText = "Todos los productos";
      cargarProductos(productos);
    }
  });
});

function nuevosbotonesAgregar(){
  botonesAgregar = document.querySelectorAll(".producto-agregar")
}