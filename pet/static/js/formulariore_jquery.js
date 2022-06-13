

$("#formulario_registro").validate({
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
        contraseña: {
            required:true
        },
        comuna: {
            required:true,
            
            
        },
        region: {
            required:true,
            
            
        },

        
    },

    messages:{
        nombre: {
            required: "El nombre de usuario es requerido",
            minlength: "Es necesario minimo 4 caracteres"
        },

        contraseña:{
            required: "Es requerida la contraseña",
            minlength: "Minimo 6 caracteres"
        },
        email: {
            required: "El correo es requerido",
            email: "El correo no es valido"
        },
        region:{
            required: "Debe seleccionar una Region"
        },
        comuna: {
            required: "Debe seleccionar una Comuna"
        },
        sex: {
            required: "Debe seleccionar una opcion"
        }
    }
    
})

$("#formulario_registro").click(function() {

    if ($('input[name="sexo"]').is(':checked')) {
        alert('Campo correcto');

    } else {
        alert('Se debe seleccionar un Genero');
    }
});





$("#guardar").click(function() {
    if($("#formulario_registro").valid() == false){
        return;
    }
    let nombre = $("#nombre").val()
    let email = $("#email").val()
    let contraseña = $("#contraseña").val()
    let comuna = $("#comuna").val()
    let region = $("#region").val()
    let sex = $("#sexo").val()

})