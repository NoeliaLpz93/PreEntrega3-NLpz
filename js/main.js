const productos = [
    {
        id: "top+short",
        titulo: "Top cruzado + Short",
        imagen:"./assets/img-productos1.jpg",
        categoria: {
            nombre: 'Damas',
            id: 'Damas'
        },
        precio: 9790
    },
    {
        id: "Buzo-termico",
        titulo: "Buzo Termico",
        imagen: "./assets/img-productos2.jpg",
        categoria: {
            nombre: 'Hombre',
            id: 'Hombre'
        },
        precio: 7500
    },
    {
        id: "musculosa+short",
        titulo: "Musculosa + Short",
        imagen: "./assets/img-prod3.jpg",
        categoria: {
            nombre: 'Hombre',
            id: 'Hombre'
        },
        precio: 12000
    },
    {
        id: "top+shortconcalza",
        titulo: "Top cruzado + Short con calza",
        imagen: "./assets/img-productos4.jpg",
        categoria: {
            nombre: 'Damas',
            id: 'Damas'
        },
        precio: 11000
    },
    {
        id: "calzaConMicrotul",
        titulo: "Calza Bliss Victory",
        imagen: "./assets/img-producto5.jpg",
        categoria: {
            nombre: 'Damas',
            id: 'Damas'
        },
        precio: 8900
    },
    {
        id: "calza-multicolor",
        titulo: "Calza Universe",
        imagen: "./assets/img-producto6.jpg",
        categoria: {
            nombre: 'Damas',
            id: 'Damas'
        },
        precio: 7800
    },
    {
        id: "Conjunto-Nike",
        titulo: "Conjunto Kids",
        imagen: "./assets/kid1 (1).jpg",
        categoria: {
            nombre: 'kids/junior',
            id: 'kids/junior'
        },
        precio: 7800
    },
    //Damas
    {
        id: "damas1",
        titulo: "Musculosa + PortaCelu",
        imagen:"./assets/img-promo2.jpg",
        categoria: {
            nombre: 'Damas',
            id: 'Damas'
        },
        precio: 7500
    },
    {
        id: "damas2",
        titulo: "Biker + Top",
        imagen: "./assets/portada-woman.jpg",
        categoria: {
            nombre: 'Damas',
            id: 'Damas'
        },
        precio: 15000 
    },
    {
        id: "damas3",
        titulo: "Top Reforzado + Biker",
        imagen: "./assets/producto3.jpg",
        categoria: {
            nombre: 'Damas',
            id: 'Damas'
        },
        precio: 9000
    },
    {
        id: "damas4",
        titulo: "Total White",
        imagen: "./assets/producto8.jpg",
        categoria: {
            nombre: 'Damas',
            id: 'Damas'
        },
        precio: 9300
    },
    {
        id: "damas5",
        titulo: "Total Flex Red/Black",
        imagen: "./assets/promo3.jpg",
        categoria: {
            nombre: 'Damas',
            id: 'Damas'
        },
        precio: 7800
    },
    {
        id: "damas6",
        titulo: "Calza y Top Rose",
        imagen: "./assets/promo4.jpg",
        categoria: {
            nombre: 'Damas',
            id: 'Damas'
        },
        precio: 9300
    },
    {
        id: "damas7",
        titulo: "Top Reinforced fluo",
        imagen: "./assets/promo5.jpg",
        categoria: {
            nombre: 'Damas',
            id: 'Damas'
        },
        precio: 6300
    },
    {
        id: "damas8",
        titulo: "Top + Campera fluo",
        imagen: "./assets/promo8.jpg",
        categoria: {
            nombre: 'Damas',
            id: 'Damas'
        },
        precio: 26300
    },
    {
        id: "damas9",
        titulo: "Campera + Hiyab",
        imagen: "./assets/woman1.jpg",
        categoria: {
            nombre: 'Damas',
            id: 'Damas'
        },
        precio: 20300
    },
    {
        id: "damas10",
        titulo: "Campera Rosa",
        imagen: "./assets/woman2.jpg",
        categoria: {
            nombre: 'Damas',
            id: 'Damas'
        },
        precio: 18000
    },

    //Hombres
    {
        id: "hombre1",
        titulo: "Calza Termica",
        imagen: "./assets/img-productos.jpg",
        categoria: {
            nombre: 'Hombre',
            id: 'Hombre'
        },
        precio: 6700
    },
    {
        id: "hombre2",
        titulo: "Short Black",
        imagen: "./assets/portadaman.jpg",
        categoria: {
            nombre: 'Hombre',
            id: 'Hombre'
        },
        precio: 3900
    },
    {
        id: "hombre3",
        titulo: "Conjunto Surf",
        imagen: "./assets/producto1.jpg",
        categoria: {
            nombre: 'Hombre',
            id: 'Hombre'
        },
        precio: 13000
    },
    {
        id: "hombre4",
        titulo: "Black Classic",
        imagen: "./assets/producto2.jpg",
        categoria: {
            nombre: 'Hombre',
            id: 'Hombre'
        },
        precio: 6900
    },
    {
        id: "hombre4",
        titulo: "Conjunto Hueso",
        imagen: "./assets/men1.jpg",
        categoria: {
            nombre: 'Hombre',
            id: 'Hombre'
        },
        precio: 31900
    },
    {
        id: "hombre5",
        titulo: "Maya Surf",
        imagen: "./assets/men3.jpg",
        categoria: {
            nombre: 'Hombre',
            id: 'Hombre'
        },
        precio: 5000
    },
    {
        id: "hombre5",
        titulo: "Total White",
        imagen: "./assets/men4.jpg",
        categoria: {
            nombre: 'Hombre',
            id: 'Hombre'
        },
        precio: 21900
    },

    //kids/junior
    {
        id: "kids/junior1",
        titulo: "Pollera + Musculosa",
        imagen: "./assets/kid2 (1).jpg",
        categoria: {
            nombre: 'kids/junior',
            id: 'kids/junior'
        },
        precio: 11200
    },
    {
        id: "kids/junior2",
        titulo: "Short + Musculosa",
        imagen: "./assets/kid3 (1).jpg",
        categoria: {
            nombre: 'kids/junior',
            id: 'kids/junior'
        },
        precio: 12800
    },
    {
        id: "kids/junior3",
        titulo: "Mono Red",
        imagen: "./assets/kids5.jpg",
        categoria: {
            nombre: 'kids/junior',
            id: 'kids/junior'
        },
        precio: 10800
    },
    {
        id: "kids/junior4",
        titulo: "Basquetboll",
        imagen: "./assets/kids6.jpg",
        categoria: {
            nombre: 'kids/junior',
            id: 'kids/junior'
        },
        precio: 8000
    },
    {
        id: "kids/junior5",
        titulo: "Porrista Red",
        imagen: "./assets/kids7.jpg",
        categoria: {
            nombre: 'kids/junior',
            id: 'kids/junior'
        },
        precio: 16000
    },
    {
        id: "kids/junior6",
        titulo: "Conjunto Gimnasia",
        imagen: "./assets/kids9.jpg",
        categoria: {
            nombre: 'kids/junior',
            id: 'kids/junior'
        },
        precio: 10800
    },

];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal =  document.querySelector("#titulo-principal");
let botonesAgregar =  document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-img" src="${producto.imagen}" alt="${producto.titulo}">
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
            tituloPrincipal.innerText = "Todos los Productos";
            cargarProductos(productos)
        }

    })
    
});

function actualizarBotonesAgregar() {
    botonesAgregar =  document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach (boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });

}
let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

    if (productosEnCarritoLS) {
        productosEnCarrito =  JSON.parse(productosEnCarritoLS);
        actualizarNumerito();
    } else{
        productosEnCarrito =[];
    }
function agregarAlCarrito(e) {
    
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find (producto  => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {

       const index = productosEnCarrito.findIndex(producto  => producto.id === idBoton);
       productosEnCarrito[index].cantidad++;

    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumerito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
};

function actualizarNumerito() {

    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}




