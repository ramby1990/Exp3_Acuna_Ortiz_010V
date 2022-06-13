function Cambiar()
{
    var a = prompt('Escribe un nuevo titulo: ');
    document.getElementById('titulo1').innerHTML = a;
}




function CambiarMayusculas()
{
    var a = document.getElementById('nombre');
    a.value = a.value.toUpperCase();
}


function CambiaColor(a)
{
    a.style.background = "black";
}


function Mover(obj)
{
    obj.innerHTML="Alla vamos!!!!";
    obj.style.background="green";
   
}

function MoverFuera(obj)
{
    obj.innerHTML="Saber mas";
    obj.style.background= "#D95A21";
    
}
