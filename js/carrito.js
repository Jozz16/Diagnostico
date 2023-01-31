let divCarrito = document.querySelector("#divCarrito")

const catalogo = [
    {id: 1, nombre: 'Reloj',precio: 300 },
    {id: 2, nombre: 'Audífonos',precio: 200},
    {id: 3, nombre: 'Audífonos',precio: 100},
    {id: 4, nombre: 'Silla',precio: 400},
]
let carrito = []

let vacio =""

function agregarCarro (producto_id) {
    let productoAgregado = catalogo.filter(carrito => carrito.id == producto_id);
    carrito.push(...productoAgregado)

    

    divCarrito.innerHTML= vacio
    carrito.forEach(elemento => {
        let parrafo =document.createElement("div")
        parrafo.innerHTML = `
            <p>Producto: ${elemento.nombre}</p>
            <p>Producto: ${elemento.precio}</p>
        `;
        
        divCarrito.appendChild(parrafo)

        
        // carrito.innerHTML= 'Nombre del producto:' + elemento.nombre; 
        // document.querySelector("#carrito").innerHTML='Precio:' + elemento.precio;  
    })
}  
