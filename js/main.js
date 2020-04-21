function validarNombre(nombre){
    if (nombre.length === 0){
        return "Este campo debe tener al menos 1 caracter";
    }

    if (nombre.length >= 50){
        return "Este campo debe tener menos de 50 caracteres";
    }

    if(!/^[A-z]+$/i.test(nombre)){
        return "el nombre solo acepta letras"
    }

    return "";
}

function validarCiudad(ciudad){
    if (ciudad.length === 0){
        return "Este campo debe tener al menos 1 caracter"; 
    }
    return "";
}

function validarDescripcionRegalo(regalo){
    if(regalo.length === 0){
        return "este campo debe tener al menos 1 caracter";
    }

    if(regalo.length >= 100){
        return "este campo debe tener menos de 100 caracteres";
    }

    if(!/^[a-z0-9]+$/i.test(regalo)){
        return "la descripcion del regalo solo acepta letras o numeros";
    }
    return "";
    
}

function validarFormulario(event){
    
    const $form = document.formulario;
    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form["descripcion-regalo"].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        "descripcion-regalo": errorDescripcionRegalo,
    }

    const esExitoso = manejarErrores(errores) === 0;

    if (esExitoso) {
        $form.className = "oculto";
        document.querySelector("#exito").className = "";

        setTimeout(function(){
            window.location.href = `wishlist.html`;
        }, 5000);
    };

    
    manejarErrores(errores);
    event.preventDefault();
    
    
}

function manejarErrores(errores){
    
    const llaves = Object.keys(errores);
    const $errores = document.querySelector("#errores");
    let cantidadErrores = 0;

    $errores.textContent = "";


    
        llaves.forEach((llave) => {
        let error = errores[llave];

        if (error) {
            cantidadErrores ++;
            $form[llave].className = "error";

            const $error = document.createElement("li");
            $error.innerText = error;
            $errores.appendChild($error);    

        } else {
            $form[key].className = "";
        }

        
    }
    
    );

    return cantidadErrores;

    // errorNombre = errores.nombre;
    // errorCiudad = errores.ciudad;
    // errorDescripcionRegalo = errores.descripcionRegalo;

    // if (errorNombre) {
    //     $form.nombre.className = "error";
    // } else $form.nombre.className = "";

    

    // if (errorCiudad) {
    //     $form.ciudad.className = "error";
    // } else $form.ciudad.className = "";

    // if (errorDescripcionRegalo) {
    //     $form["descripcion-regalo"].className = "error";
    // } else $form["descripcion-regalo"].className = "";


}

const $form = document.formulario;
$form.onsubmit = validarFormulario;

