const productos = [
  {
      id: "airpods-pro",
      titulo: "Airpods Pro",
      imagen: "./img/airpodspro.webp",
      categoria: {
          nombre: "Apple",
          id: "apple"
      },
      precio: 100000
  },
  {
      id: "airpods-pro-max",
      titulo: "Airpods Pro Max",
      imagen: "./img/airpodspromax.jpg",
      categoria: {
          nombre: "Apple",
          id: "apple"
      },
      precio: 150000
  },
  {
      id: "apple-watch",
      titulo: "Apple Watch",
      imagen: "./img/applewatch.jpg",
      categoria: {
          nombre: "Apple",
          id: "apple"
      },
      precio: 120000
  },
  {
      id: "ipad-pro",
      titulo: "Ipad Pro",
      imagen: "./img/ipadpro.jpg",
      categoria: {
          nombre: "Apple",
          id: "apple"
      },
      precio: 170000
  },
  {
      id: "iphone-13",
      titulo: "Iphone 13",
      imagen: "./img/iphone13rosa.jpg",
      categoria: {
          nombre: "Apple",
          id: "apple"
      },
      precio: 200000
  },
  {
      id: "iphone-14-plus",
      titulo: "Iphone 14",
      imagen: "./img/iphone14plus.jpg",
      categoria: {
          nombre: "Apple",
          id: "apple"
      },
      precio: 250000
  },
  {
      id: "iphone-14-pro-max",
      titulo: "Iphone 14",
      imagen: "./img/iphone14promax.jpg",
      categoria: {
          nombre: "Apple",
          id: "apple"
      },
      precio: 300000
  },
  {
      id: "joystick-ps4",
      titulo: "Joystick PS4",
      imagen: "./img/joystickps4.jpg",
      categoria: {
          nombre: "Sony",
          id: "sony"
      },
      precio: 15000
  },
  {
      id: "joystick-ps5",
      titulo: "Joystick PS5",
      imagen: "./img/controlps5negro.png",
      categoria: {
          nombre: "Sony",
          id: "sony"
      },
      precio: 25000
  },
  {
      id: "joytick-xbox",
      titulo: "Joystick Xbox",
      imagen: "./img/joystickxbox.jpg",
      categoria: {
          nombre: "Xbox",
          id: "xbox"
      },
      precio: 25000
  },
  {
      id: "play-4",
      titulo: "Playstation 4",
      imagen: "./img/play4.jpg",
      categoria: {
          nombre: "Sony",
          id: "sony"
      },
      precio: 50000
  },
  {
      id: "play-5",
      titulo: "Playstation 5",
      imagen: "./img/play5.png",
      categoria: {
          nombre: "Sony",
          id: "sony"
      },
      precio: 200000
  },
  {
      id: "xbox-series5",
      titulo: "Xbox Series 5",
      imagen: "./img/xboxseries5.jpg",
      categoria: {
          nombre: "Xbox",
          id: "xbox"
      },
      precio: 200000
  }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

  contenedorProductos.innerHTML = "";

  productosElegidos.forEach(producto => {

      const div = document.createElement("div");
      div.classList.add("producto");
      div.innerHTML = `
          <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
          <div class="producto-detalles">
              <h3 class="producto-titulo">${producto.titulo}</h3>
              <p class="producto-precio">$${producto.precio}</p>
              <button class="producto-agregar" id="${producto.id}">Agregar</button>
          </div>
      `;

      contenedorProductos.append(div);
  })

  actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
  boton.addEventListener("click", (e) => {

      botonesCategorias.forEach(boton => boton.classList.remove("active"));
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

  })
});

function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".producto-agregar");

  botonesAgregar.forEach(boton => {
      boton.addEventListener("click", agregarAlCarrito);
  });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
  productosEnCarrito = JSON.parse(productosEnCarritoLS);
  actualizarNumerito();
} else {
  productosEnCarrito = [];
}

function agregarAlCarrito(e) {
  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(producto => producto.id === idBoton);

  if(productosEnCarrito.some(producto => producto.id === idBoton)) {
      const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
      productosEnCarrito[index].cantidad++;
  } else {
      productoAgregado.cantidad = 1;
      productosEnCarrito.push(productoAgregado);
  }

  actualizarNumerito();

  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
  numerito.innerText = nuevoNumerito;
}