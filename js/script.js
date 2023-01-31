var nombreUsuario= (prompt("Ingrese su nombre"))

var nombre = ` Bienvenido ${nombreUsuario}`
document.getElementById("nombre").innerHTML = nombre;

if(nombreUsuario === ""){
    document.getElementById("nombre").style.display = "none";
}