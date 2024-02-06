
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
const principal = document.getElementById('principal')
let contenedor = document.getElementById('contenedor');
const revelar = document.querySelector('.carrito');
const contenedorDescripcion = document.getElementById('contenedorDescripcion');
// document.querySelector('.descripcion').addEventListener('click', agregarDescripcion);
document.getElementById('carrito').addEventListener('click', mostraQuitar);
const productosCarrito = [];
let contador = 1;

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

// Manejo de paginación !!

document.getElementById('home').addEventListener('click', () => {
    mostrarSeccion('seccion1');
});

document.getElementById('products').addEventListener('click', () => {
    mostrarSeccion('seccion2');
});

document.getElementById('products2').addEventListener('click', () => {
    mostrarSeccion('seccion2');
});
mostrarSeccion('seccion1');

// función para mostrar y quitar el carrito !!

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

function mostraQuitar() {
    if (revelar.classList.contains('oculto')) {
        revelar.classList.remove('oculto')
        revelar.classList.add('visible')
    } else {
        revelar.classList.remove('visible')
        revelar.classList.add('oculto')
    }
}

// Función para agregar elementos al carrito !!

// function agregarCarrito(e) {
//     const existe = productosCarrito.some((item) => {
//         item.nombre === document.querySelector(`#nombre-${e.target.id}`).innerText
//     }) 
//     // console.table(productosCarrito)
//     if (!existe) {
//         // console.log(document.querySelector(`#nombre-${e.target.id}`).innerText)
//         productosCarrito.push({
//             img: e.target.parentElement.parentElement.querySelector('img:nth-child(1)').src,
//             nombre: e.target.parentElement.parentElement.querySelector('p:nth-child(2)').innerText,
//             precio: e.target.parentElement.parentElement.querySelector('p:nth-child(3)').innerText,
//             cantidad: 1,
//         });
//         localStorage.setItem("carrito", JSON.stringify(productosCarrito));
//         // console.log(localStorage.getItem("carrito"))

//         // console.log(productosCarrito)
//     } else {
//         let temporal = productosCarrito.find(
//             (item) => {
//                 item.nombre === document.querySelector(`#nombre-${e.target.id}`).innerText
//             }
//         )
//         const indiceProducto = productosCarrito.findIndex((producto) => { producto === temporal })
//         console.log(indiceProducto)
//         // productos[temporal]
//         // temporal.cantidad+=1
//     }
// }

function agregarCarrito(e) {
    productosCarrito.push({
        img: e.target.parentElement.parentElement.querySelector('img:nth-child(1)').src,
        nombre: e.target.parentElement.parentElement.querySelector('p:nth-child(2)').innerText,
        precio: e.target.parentElement.parentElement.querySelector('p:nth-child(3)').innerText,
        cantidad: 1,
        // id: e.target.parentElement.parentElement.querySelector('p:nth-child(6)').innerText
    });
    localStorage.setItem("carrito", JSON.stringify(productosCarrito));
    // console.log(localStorage.getItem("carrito"))

    console.log(productosCarrito)

    // funcion para incrementar la cantidad
    const existe = productosCarrito.some( item => item.id === productosCarrito.id );

    if(existe) {
        // Atualizo la cantidad
        const items = productosCarrito.map(item => {
            if( item.id ===  productosCarrito.id ) {
                // console.log('Se incrementa')
                LimpiarHTML()
                item.cantidad++
                return item // retorna el obejto actualizado
            } else {
                return item // retorna los obejtos que no son duplicados 
            }
        } );
        articulosCarrito = [...items]
    } else {
        // Agregamos curso al carrito 
        // console.log('Queda igual')
        articulosCarrito = [...cuadrilla, articulosCuadrilla]
    }
    // Llamo la funcion carrrito 
    carritoHTML()
}

function carritoHTML() {

    //llamo a la funcion para limpiar el html del carrrito
    LimpiarHTML()
    // Obtengo los productos del carrito desde el almacenamiento local
    const productosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

    productosCarrito.map(articulo => {
        const { img, nombre, precio, cantidad, id } = articulo;
        const itemCarrito = document.createElement('div');
        itemCarrito.className = "cuadrillaCarrito";
        itemCarrito.innerHTML = `
                <img src="${img}" class="max-w-[70px] max-h-[70px] ">
                <p class="text-lg font-bold max-w-[100px]"> ${nombre} </p>
                <p class="text-lg font-bold max-w-[100px]"> $${precio} </p>
                <p class="text-lg font-bold max-w-[100px]"> Cantidad: ${cantidad} </p>
                <p class="hidden"> ${id} </ p>
            `
        revelar.appendChild(itemCarrito)
    })
}
const productosDescripcion = [];

function mostrarDescripcion() {
    if (contenedorDescripcion.classList.contains('hidden')) {
        contenedorDescripcion.classList.remove('hidden');
        contenedorDescripcion.classList.add('block');
    }
}

function agregarBlur() {
    if (contenedorDescripcion.classList.contains('block')) {
        principal.classList.add('blur-sm')
    } 
}

function cerrarBlur() {
    principal.classList.remove('blur-sm')
}

function cerrarDescripcion() {
    contenedorDescripcion.classList.remove('block');
    contenedorDescripcion.classList.add('hidden');
}



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

const articulos = [];

function articulosCuadrilla() {
    productos.map(articulo => {
        const { img, nombre, precio, descripcion, cantidad, id } = articulo;
        const cuadrilla = document.createElement('div');
        cuadrilla.className = "cuadrilla";
        cuadrilla.innerHTML = `
                <img src="${img}" class="max-w-60 max-h-60 flex justify-center aling-center">
                <p class="text-2xl font-bold " id="nombre-${contador}"> ${nombre} </p>
                <p class="text-3xl font-bold mt-[10px]"> $${precio} </p>
                <p class="text-2xl mt-[10px] "> ${descripcion} </p>
                <p class="text-2xl font-bold  mt-[10px]"> Cantidad: ${cantidad} </p>
                <p class="hidden"> ${id} </ p>
                <div class="w-[100%] flex justify-center items-center mt-[10px] gap-8">
                    <button onClick="agregarCarrito(event)" id="${contador}" class="w-[50%] h-[30px] bg-slate-500 rounded-lg text-xl font-bold text-white hover:scale-105 hover:bg-slate-600" > Agregar al carrito </button> 
                    <button onClick="agregarDescripcion(event)" class="w-[50%] h-[30px] bg-slate-500 rounded-lg  text-xl font-bold text-white  hover:scale-105 hover:bg-slate-600"  > Descripción</button>
                </div>
                `;
        contador++
        contenedor.appendChild(cuadrilla);
    });
}
articulosCuadrilla()

function LimpiarHTML() {
    while (revelar.firstChild) {
        revelar.removeChild(revelar.firstChild)
    }
}



