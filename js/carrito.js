const carrito = [
    {id: 1, nombre: 'sacapuntas',precio: 200 },
    {id: 2, nombre: 'goma',precio: 200},
    {id: 3, nombre: 'lapiz',precio: 200},
]

function agregarCarro (Producto_id) {
    let carritoFiltrado = carrito.filter(carrito => carrito.id == Producto_id);

    document.querySelector(".titulo").textContent= 'Nombre del producto:'+' '+ carritoFiltrado[0].nombre; 
    document.querySelector(".precio").textContent='Precio:'+' '+carritoFiltrado[0].precio;
}