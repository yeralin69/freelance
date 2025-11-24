let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){
    evento.preventDefault()

    let cajausuario=document.getElementById("cajausuario")
    let cajacorreo=document.getElementById("cajacorreo")
    let cajaciudad=document.getElementById("cajaciudad")
    let cajatelefono=document.getElementById("cajatelefono")
    let cajacontraseña=document.getElementById("cajacontraseña")

    

    let datosDelFormulario={

    
        usuario:cajausuario.value,
        correo:cajacorreo.value,
        ciudad:cajaciudad.value,
        telefono:cajatelefono.value,
        contraseña:cajacontraseña.value,
    

    }
      
})