const carrito = [
    {id: 1, nombre: 'sacapuntas',precio: 200 },
    {id: 2, nombre: 'goma',precio: 200},
    {id: 3, nombre: 'lapiz',precio: 200},
]
let carritoCompleto = []



function agregarCarro (Producto_id) {
    let carritoFiltrado = carrito.filter(carrito => carrito.id == Producto_id);
    carritoCompleto.push(carritoFiltrado)
    console.log(carritoCompleto)

    let final = [...carritoFiltrado,...carritoCompleto]
    console.log(final)
    document.querySelector(".titulo").textContent= `Nombre del producto: ${final[0].nombre}`; 
    document.querySelector(".precio").textContent=`Precio:${final[0].precio}`;  
    
} 
