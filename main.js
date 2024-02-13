
const productos = [
    {
        "img": "./assets/monitor1.png",
        "nombre": "Monitor LED 24 pulgadas",
        "precio": 199.99,
        "descripcion": "Pantalla LED de alta resolución para una experiencia visual inmersiva.",
        "cantidad": 50,
        "id": 1
    },
    {
        "img": "./assets/mouse2.png",
        "nombre": "Mouse inalámbrico ergonómico",
        "precio": 29.99,
        "descripcion": "Diseño ergonómico para un uso cómodo, conexión inalámbrica para mayor libertad de movimiento.",
        "cantidad": 100,
        "id": 2
    },
    {
        "img": "./assets/teclado.png",
        "nombre": "Teclado mecánico RGB",
        "precio": 79.99,
        "descripcion": "Teclas mecánicas para una respuesta táctil precisa, retroiluminación RGB personalizable.",
        "cantidad": 80,
        "id": 3
    },
    {
        "img": "./assets/telefono.png",
        "nombre": "Teléfono inteligente Android",
        "precio": 499.99,
        "descripcion": "Teléfono con sistema operativo Android, cámara de alta resolución y rendimiento potente.",
        "cantidad": 30,
        "id": 4
    },
    {
        "img": "./assets/impresora.png",
        "nombre": "Impresora láser monocromática",
        "precio": 179.99,
        "descripcion": "Impresora láser de alta velocidad para impresiones rápidas y de calidad profesional.",
        "cantidad": 25,
        "id": 5
    },
    {
        "img": "./assets/tablet.png",
        "nombre": "Tableta gráfica profesional",
        "precio": 249.99,
        "descripcion": "Tableta digitalizadora con alta sensibilidad y precisión para diseñadores y artistas.",
        "cantidad": 20,
        "id": 6
    },
    {
        "img": "./assets/camara.png",
        "nombre": "Cámara de seguridad inteligente",
        "precio": 89.99,
        "descripcion": "Cámara de vigilancia con detección de movimiento y capacidad de transmisión en tiempo real.",
        "cantidad": 35,
        "id": 7
    },
    {
        "img": "./assets/altavoz.png",
        "nombre": "Altavoces Bluetooth portátiles",
        "precio": 59.99,
        "descripcion": "Altavoces inalámbricos compactos con sonido potente y batería de larga duración.",
        "cantidad": 60,
        "id": 8
    },
    {
        "img": "./assets/router.png",
        "nombre": "Router Wi-Fi de doble banda",
        "precio": 129.99,
        "descripcion": "Router inalámbrico con doble banda para una conexión rápida y estable.",
        "cantidad": 15,
        "id": 9
    },
    {
        "img": "./assets/reloj.png",
        "nombre": "Smartwatch con monitor de actividad",
        "precio": 149.99,
        "descripcion": "Reloj inteligente con funciones de monitorización de actividad física y notificaciones inteligentes.",
        "cantidad": 50,
        "id": 10
    },
    {
        "img": "./assets/microssd.png",
        "nombre": "Unidad de estado sólido (SSD) de 1TB",
        "precio": 129.99,
        "descripcion": "Almacenamiento SSD de alta velocidad para mejorar el rendimiento de tu computadora.",
        "cantidad": 30,
        "id": 11
    },
    {
        "img": "./assets/impresora2.png",
        "nombre": "Impresora de fotos instantáneas",
        "precio": 79.99,
        "descripcion": "Impresora compacta que imprime fotos instantáneas desde dispositivos móviles.",
        "cantidad": 25,
        "id": 12
    },
    {
        "img": "./assets/base.png",
        "nombre": "Soporte para portátil ajustable",
        "precio": 34.99,
        "descripcion": "Soporte ergonómico para portátil con ajustes de altura y ángulo para una postura cómoda.",
        "cantidad": 40,
        "id": 13
    },
    {
        "img": "./assets/microfono.png",
        "nombre": "Micrófono USB para streaming",
        "precio": 69.99,
        "descripcion": "Micrófono de alta calidad para transmisiones en vivo y grabaciones de voz nítidas.",
        "cantidad": 15,
        "id": 14
    },
    {
        "img": "./assets/lampara.png",
        "nombre": "Lámpara inteligente con control remoto",
        "precio": 49.99,
        "descripcion": "Lámpara LED inteligente con opciones de color y control remoto a través de una aplicación.",
        "cantidad": 50,
        "id": 15
    },
    {
        "img": "./assets/bolso.png",
        "nombre": "Mochila antirrobo con puerto USB",
        "precio": 39.99,
        "descripcion": "Mochila con diseño antirrobo y puerto USB para cargar dispositivos electrónicos.",
        "cantidad": 30,
        "id": 16
    },
    {
        "img": "./assets/cargador.png",
        "nombre": "Base de carga inalámbrica para smartphone",
        "precio": 29.99,
        "descripcion": "Base de carga inalámbrica rápida para smartphones compatibles con tecnología Qi.",
        "cantidad": 20,
        "id": 17
    },
    {
        "img": "./assets/camara2.png",
        "nombre": "Cámara de acción 4K resistente al agua",
        "precio": 149.99,
        "descripcion": "Cámara compacta para capturar aventuras en 4K, resistente al agua y con amplio ángulo de visión.",
        "cantidad": 15,
        "id": 18
    },
    {
        "img": "./assets/tecladoymouse.png",
        "nombre": "Teclado y mouse inalámbricos para juegos",
        "precio": 89.99,
        "descripcion": "Combo inalámbrico diseñado específicamente para juegos, con retroiluminación RGB.",
        "cantidad": 25,
        "id": 19
    },
    {
        "img": "./assets/cargador2.png",
        "nombre": "Cargador portátil de 20,000 mAh",
        "precio": 49.99,
        "descripcion": "Cargador portátil de alta capacidad con múltiples puertos para cargar dispositivos simultáneamente.",
        "cantidad": 20,
        "id": 20
    },
    {
        "img": "./assets/camara3.png",
        "nombre": "Cámara web HD con micrófono",
        "precio": 59.99,
        "descripcion": "Cámara web de alta definición con micrófono incorporado para videoconferencias y transmisiones en vivo.",
        "cantidad": 30,
        "id": 21
    },
    {
        "img": "./assets/wifi.png",
        "nombre": "Repetidor de señal Wi-Fi",
        "precio": 39.99,
        "descripcion": "Amplificador de señal Wi-Fi para extender la cobertura y mejorar la velocidad de la red inalámbrica.",
        "cantidad": 15,
        "id": 22
    },
    {
        "img": "./assets/multicaragador.png",
        "nombre": "Estación de carga para múltiples dispositivos",
        "precio": 69.99,
        "descripcion": "Estación de carga con puertos USB para cargar varios dispositivos electrónicos al mismo tiempo.",
        "cantidad": 25,
        "id": 23
    },
    {
        "img": "./assets/audifonos2.png",
        "nombre": "Auriculares deportivos resistentes al agua",
        "precio": 39.99,
        "descripcion": "Auriculares inalámbricos diseñados para deportes, resistentes al agua y con ajuste seguro.",
        "cantidad": 35,
        "id": 24
    },
    {
        "img": "./assets/mouse.png",
        "nombre": "Ratón ergonómico vertical",
        "precio": 34.99,
        "descripcion": "Ratón con diseño vertical ergonómico para reducir la tensión en la muñeca durante largas sesiones de trabajo.",
        "cantidad": 20,
        "id": 25
    },
    {
        "img": "./assets/tecladopegable.png",
        "nombre": "Teclado plegable Bluetooth",
        "precio": 59.99,
        "descripcion": "Teclado compacto plegable con conexión Bluetooth para mayor portabilidad.",
        "cantidad": 15,
        "id": 26
    },
    {
        "img": "./assets/hdmi.png",
        "nombre": "Adaptador USB-C a HDMI",
        "precio": 24.99,
        "descripcion": "Adaptador para conectar dispositivos con puerto USB-C a pantallas HDMI externas.",
        "cantidad": 40,
        "id": 27
    },
    {
        "img": "./assets/monitorcurvo.png",
        "nombre": "Monitor curvo de 27 pulgadas",
        "precio": 299.99,
        "descripcion": "Monitor curvo con resolución QHD para una experiencia de visualización inmersiva.",
        "cantidad": 10,
        "id": 28
    },
    {
        "img": "./assets/camara3.png",
        "nombre": "Cámara de vigilancia para el hogar con detección de movimiento",
        "precio": 79.99,
        "descripcion": "Cámara de seguridad para el hogar con capacidad de detección de movimiento y notificaciones en tiempo real.",
        "cantidad": 30,
        "id": 29
    },
    {
        "img": "./assets/memoria2.png",
        "nombre": "Lector de tarjetas de memoria USB 3.0",
        "precio": 19.99,
        "descripcion": "Lector de tarjetas de memoria con velocidad USB 3.0 para transferencias rápidas de datos.",
        "cantidad": 25,
        "id": 30
    },
    {
        "img": "./assets/audifonos3.png",
        "nombre": "Auriculares con cancelación de ruido activa",
        "precio": 149.99,
        "descripcion": "Auriculares inalámbricos con tecnología de cancelación de ruido activa para un sonido envolvente.",
        "cantidad": 15,
        "id": 31
    },
    {
        "img": "./assets/audifonos4.png",
        "nombre": "Auriculares Bluetooth con cancelación de ruido",
        "precio": 129.99,
        "descripcion": "Auriculares inalámbricos con tecnología de cancelación de ruido para una experiencia auditiva premium.",
        "cantidad": 40,
        "id": 32
    },
]

// Variables !!}
const inputBusqueda = document.getElementById('input')
const contenedorCarrito = document.getElementById('contenedorCarrito')
const factura = document.getElementById('factura')
const montoPagar = document.getElementById('montoPagar')
document.getElementById('cerrarFactura').addEventListener('click', cerrarFactura)
contenedorCarrito.addEventListener('click', eliminarProducto)
document.getElementById('vaciar').addEventListener('click', vaciarCarrito)
const principal = document.getElementById('principal')
let contenedor = document.getElementById('contenedor');
const revelar = document.querySelector('.carrito');
const contenedorDescripcion = document.getElementById('contenedorDescripcion');
const contenedorFactura = document.getElementById('contenedorFactura')
document.getElementById('carrito').addEventListener('click', mostraQuitar);
let productosCarrito = [];

// Manejo de paginación !!

document.getElementById('home').addEventListener('click', () => {mostrarSeccion('seccion1');});
document.getElementById('products').addEventListener('click', () => {mostrarSeccion('seccion2');});
document.getElementById('products2').addEventListener('click', () => {mostrarSeccion('seccion2');});
mostrarSeccion('seccion1');


// Funciones !!

function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('main section');
    secciones.forEach(seccion => {
        if (seccion.id === id) {
            seccion.style.display = 'block';
        } else {
            seccion.style.display = 'none';
        }
    });
}

function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('main section');
    secciones.forEach(seccion => {
        if (seccion.id === id) {
            seccion.style.display = 'block';
        } else {
            seccion.style.display = 'none';
        }
    });
}

// función para mostrar y quitar el carrito !!

function mostraQuitar() {
    if (revelar.classList.contains('oculto')) {
        revelar.classList.remove('oculto')
        revelar.classList.add('visible')
    } else {
        revelar.classList.remove('visible')
        revelar.classList.add('oculto')
    }
}

const articulos = [];

// Función para agregar elementos al carrito !!

function agregarCarrito(e) {
    const infoProducto = {
        img: e.target.parentElement.parentElement.querySelector('img:nth-child(1)').src,
        nombre: e.target.parentElement.parentElement.querySelector('p:nth-child(2)').innerText,
        precio: e.target.parentElement.parentElement.querySelector('p:nth-child(3)').innerText,
        cantidad: 1,
        id: e.target.parentElement.parentElement.querySelector('img:nth-child(1)').getAttribute('id')
    };
    console.log(e.target.id)

    console.log(productosCarrito)

    // funcion para incrementar la cantidad
    const existe = productosCarrito.some( item => item.id == infoProducto.id );
    console.log(existe)
    if(existe) {
        // Actualizamos la cantidad
        const items = productosCarrito.map( item => {
            if(item.id == infoProducto.id) {
                item.cantidad++
                return item // retorna el objeto actualizado 
            } else {
                return item // retorna los objetos que no son duplicados
            }
        }); 
        productosCarrito = [...items]
    } else {
        // Agregamos el productos al carrito        
        productosCarrito = [...productosCarrito, infoProducto]
    }
    // Llamo la funcion carrrito 
    carritoHTML()
    hayElementos()
}

function carritoHTML() {

    //llamo a la funcion para limpiar el html del carrrito
    LimpiarHTML()

    productosCarrito.map(articulo => {
        const { img, nombre, precio, cantidad, id } = articulo;
        const itemCarrito = document.createElement('div');
        itemCarrito.className = "cuadrillaCarrito";
        itemCarrito.innerHTML = `
                <img src="${img}" class="max-w-[70px] max-h-[70px] bg-gradient-to-t from-sky-900 to-blue-950 rounded-full ">
                <p class="text-lg font-bold max-w-[100px]"> ${nombre} </p>
                <p class="text-lg font-bold max-w-[100px]"> ${precio} </p>
                <p class="text-lg font-bold max-w-[100px]"> ${cantidad} </p>
                <p id='${id}' class="eliminar w-[20px] h-[20px] cursor-pointer flex justify-center items-center font-bold bg-red-700 hover:bg-red-500 hover:text-white hover:scale-125 rounded-full">X</p>
            `
        contenedorCarrito.appendChild(itemCarrito)

        sincronizarStorage()
    })
}
// Creando boton para realizar la compra

const pagar = document.getElementById('pagar')
pagar.addEventListener('click', mostrarFactura)

// agregando factura

function agregarFactura() {
    // mostrarFactura();
    // agregarBlur()

    facturaHTML()
}

function facturaHTML() {
    // Llamo a la función para limpiar el HTML del carrito
    LimpiarFacturaHTML();
    LimpiarMostoPagarHTML()

    let totalPrecio = 0; // Variable para mantener la sumatoria de precios

    productosCarrito.forEach(articulo => {
        const { img, nombre, precio, cantidad } = articulo;
        const precioNumerico = parseFloat(precio * cantidad)
        const itemFactura = document.createElement('div');
        itemFactura.className = "cuadrillaFactura";
        itemFactura.innerHTML = `
            <img src="${img}" class="max-w-[70px] max-h-[70px] bg-gradient-to-t from-sky-900 to-blue-950 rounded-full ">
            <p class="text-2xl font-bold max-w-[70%]"> ${nombre} </p>
            <p class="text-2xl font-bold max-w-[70%]"> ${precio * cantidad} </p>
            <p class="text-2xl font-bold max-w-[70%]">Articulos totales: ${cantidad} </p>

        `;
        factura.appendChild(itemFactura);
        
        totalPrecio += precioNumerico ; // Sumar el precio total de este producto al total
    });

    // Mostrar la sumatoria total de cantidades en el carrito
    // const sumatoriaCantidadElement = document.createElement('p');
    // sumatoriaCantidadElement.textContent = `Sumatoria de Cantidades: ${totalCantidad}`;
    // factura.appendChild(sumatoriaCantidadElement);

    // Mostrar la sumatoria total de precios en el carrito
    const sumatoriaPrecioElement = document.createElement('p');
    sumatoriaPrecioElement.textContent = `Sumatoria de Precios: ${totalPrecio.toFixed(2)}`;
    factura.appendChild(sumatoriaPrecioElement);

    // Mostrar el monto total a pagar
    const montoPagarElement = document.createElement('p');
    montoPagarElement.textContent = `Monto total: ${totalPrecio.toFixed(2)}`;
    montoPagar.appendChild(montoPagarElement); // supongo que montoPagar es el contenedor correcto, ajusta según necesites

    sincronizarStorage();
}

function mostrarFactura() {
    if (contenedorFactura.classList.contains('hidden')) {
        contenedorFactura.classList.remove('hidden');
        contenedorFactura.classList.add('block');
        agregarFactura()
    }
}

function cerrarFactura() {
    contenedorFactura.classList.remove('block');
    contenedorFactura.classList.add('hidden');
}

function hayElementos() {
    if (contenedorCarrito.innerHTML.trim() !== '') {
        // Ejecutar este código si hay al menos un elemento en el carrito
        pagar.classList.remove('bg-green-700/70');
        pagar.classList.add('bg-green-600', 'hover:bg-green-500')
        pagar.disabled = false;
    } else {
        // Ejecutar este código si el carrito está vacío
        pagar.disabled = true;
        pagar.classList.add('bg-green-700/70');
        pagar.classList.remove('bg-green-600', 'hover:bg-green-500')
    };
}

// Obteniendo datos del local storage

function sincronizarStorage() {   
    localStorage.setItem("carrito", JSON.stringify(productosCarrito));
}

document.addEventListener('DOMContentLoaded', () => {
    productosCarrito = JSON.parse( localStorage.getItem('carrito') ) || [];

    carritoHTML()
})

//  Eliminando productos del carrito

function eliminarProducto(e){
    if(e.target.classList.contains('eliminar')) {
        const itemId = e.target.getAttribute('id');
        const itemIndex = productosCarrito.findIndex(item => item.id === itemId);
        const modificarHtml = e.target.parentElement.querySelector('p:nth-child(4)');

        if(productosCarrito[itemIndex].cantidad > 1) {
            productosCarrito[itemIndex].cantidad--;
            +modificarHtml.innerText--
        } else{
            productosCarrito = productosCarrito.filter(item => item.id !== itemId);
            localStorage.removeItem('carrito')
        }
        carritoHTML()
        hayElementos()
    }
}

function vaciarCarrito() {
    productosCarrito = [];
    localStorage.removeItem('carrito')
    LimpiarHTML()
    hayElementos()
}

// Mostrando y cerrando descripción

function mostrarDescripcion() {
    if (contenedorDescripcion.classList.contains('hidden')) {
        contenedorDescripcion.classList.remove('hidden');
        contenedorDescripcion.classList.add('block');
    }
}

function cerrarDescripcion() {
    contenedorDescripcion.classList.remove('block');
    contenedorDescripcion.classList.add('hidden');
}

// Agregando y quitando blur

function agregarBlur() {
    if (contenedorDescripcion.classList.contains('block')) {
        principal.classList.add('blur-sm')
    } 
}

function cerrarBlur() {
    principal.classList.remove('blur-sm')
}


// agregando productos al carrito 

function agregarDescripcion(e) {
    mostrarDescripcion();
    agregarBlur()

    const imageSrc = e.target.parentElement.parentElement.querySelector('img:nth-child(1)').src;
    const nombreText = e.target.parentElement.parentElement.querySelector('p:nth-child(2)').innerText;
    const precioText = e.target.parentElement.parentElement.querySelector('p:nth-child(3)').innerText;
    const cantidadText = e.target.parentElement.parentElement.querySelector('p:nth-child(4)').innerText;

    // Crear elementos
    const imgElement = document.createElement('img');
    imgElement.src = imageSrc;
    imgElement.className = "imgDescripcion";

    const nombreElement = document.createElement('p');
    nombreElement.innerText = nombreText;
    nombreElement.className = "nombreDescripcion";

    const precioElement = document.createElement('p');
    precioElement.innerText = precioText;
    precioElement.className = "precioDescripcion";

    const cantidadElement = document.createElement('p');
    cantidadElement.innerText = cantidadText;
    cantidadElement.className = "cantidadDescripcion";

    const btnElement = document.createElement('button')
    btnElement.textContent = 'Cerrar';
    btnElement.className = "btnDescripción";
    btnElement.addEventListener('click', cerrarDescripcion)
    btnElement.addEventListener('click', cerrarBlur)


    // Limpiar el contenedor antes de agregar nuevos elementos
    contenedorDescripcion.innerHTML = '';

    // Agregar elementos al contenedor
    contenedorDescripcion.appendChild(imgElement);
    contenedorDescripcion.appendChild(nombreElement);
    contenedorDescripcion.appendChild(precioElement);
    contenedorDescripcion.appendChild(cantidadElement);
    contenedorDescripcion.appendChild(btnElement);
}

// agregando poductos al contenedor 

function articulosCuadrilla() {
    productos.map(articulo => {
        const { img, nombre, precio, descripcion, cantidad, id } = articulo;
        const cuadrilla = document.createElement('div');
        cuadrilla.className = "cuadrilla";
        cuadrilla.innerHTML = `
                <img src="${img}" id="${id}" class="max-w-60 max-h-60 flex justify-center aling-center">
                <p class="text-2xl font-bold"> ${nombre} </p>
                <p class="text-3xl font-bold mt-[10px]"> ${precio} </p>
                <p class="text-2xl mt-[10px] "> ${descripcion} </p>
                <p class="text-2xl font-bold  mt-[10px]"> Cantidad: ${cantidad} </p>
                <div class="w-[100%] flex justify-center items-center mt-[10px] gap-8">
                    <button onClick="agregarCarrito(event)" class="w-[50%] h-[30px] bg-slate-500 rounded-lg text-xl font-bold text-white hover:scale-105 hover:bg-slate-600" > Agregar al carrito </button> 
                    <button onClick="agregarDescripcion(event)" class="w-[50%] h-[30px] bg-slate-500 rounded-lg  text-xl font-bold text-white  hover:scale-105 hover:bg-slate-600"  > Descripción</button>
                </div>
                `;
        contenedor.appendChild(cuadrilla);
    });
}
articulosCuadrilla()

function LimpiarMostoPagarHTML() {
    while (montoPagar.firstChild) {
        montoPagar.removeChild(montoPagar.firstChild)
    }
}
articulosCuadrilla()
function LimpiarFacturaHTML() {
    while (factura.firstChild) {
        factura.removeChild(factura.firstChild)
    }
}

function LimpiarHTML() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}
function limpiarNuevoHTML(){
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild)
    }
}

// Funciones para filtrar la busqueda 

const busquedaNombre = {
    nombres: ''
};

inputBusqueda.addEventListener('input',(e) => {
    busquedaNombre.nombres = e.target.value;
    filtrarBusqueda()
});

function filtrarBusqueda() {
    const resultado = productos.filter(filtrarNombre);

    console.log(resultado)
}

function filtrarNombre(producto) {
    const { nombres } = busquedaNombre;
    if(nombres){
        return producto.nombre.toLowerCase() === nombres.toLowerCase();
    }
    return productos; // Devuelve true si no hay filtro de nombre
}

function mostrarArticulo(productos) {
    limpiarNuevoHTML();

    productos.forEach(item => { 
        const productosHTML = document.createElement('div');
        productosHTML.innerHTML = `
            ${item.nombre}
        `;
        contenedor.appendChild(productosHTML);
    });
}

function noResultado() {
    limpiarNuevoHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('w-[50%]', 'h-[30%]', 'bg-red-700', 'text-white', 'rounded-xl', 'text-3xl');
    noResultado.textContent = 'No hay Resultados de auto que busca';
    contenedor.appendChild(noResultado);
}
