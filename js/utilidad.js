
const nav = `
<nav class="navbar navbar-expand-lg ">
<div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="container collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav me-auto">
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="index.html">Inicio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="ventas.html">Venta</a>
            </li>
            
        </ul>
    </div>
</div>
</nav>`;


document.getElementById("divNav").innerHTML = nav;