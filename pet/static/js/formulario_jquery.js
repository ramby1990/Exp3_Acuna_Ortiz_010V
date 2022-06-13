
$("#formulario_contacto").validate({
    rules: {
        nombre: {
            required:true,
            minlength:3,
            maxlength:30
        },
        email: {
            required: true,
            email:true
        },
        tipo_solicitud: {
            required:true
        },
        mensaje: {
            required:true,
            minlength:5,
            maxlength:200
            
        }
    },

    messages:{
        tipo_solicitud: {
            required: "Debe seleccionar al menos una opcion",
            
        }
    }    
})



$("#guardar").click(function() {
    if($("#formulario_contacto").valid() == false){
        return;
    }
    let nombre = $("#nombre").val()
    let email = $("#email").val()
    let tiposolicitud = $("#tipo_solicitud").val()
    let mensaje = $("#mensaje").val()
    let avisos = $("#avisos").is(":checked")

})
 

/*-------------------------------------REGISTRO---------------------------------------------------*/



