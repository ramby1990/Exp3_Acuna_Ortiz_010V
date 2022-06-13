
from django.shortcuts import render, redirect
from .models import Accesorio, Cliente


# Create your views here.



def home(request):
    return render(request, 'pet/index.html')

def galeria(request):
    return render(request, 'pet/galeria.html')

def quienessomos(request):
    return render(request, 'pet/quienessomos.html')

def contacto(request):
    return render(request, 'pet/contacto.html')

def registro(request):
    return render(request, 'pet/registro.html')

def login(request):
    return redirect('login')




def adminpro(request):
    accesorioList = Accesorio.objects.all()
    return render(request, 'pet/adminpro.html', {'accesorio': accesorioList})


def registrarProducto(request):
    codigo = request.POST['txtCodigo']
    nombre = request.POST['txtNombre']
    precio = request.POST['numPrecio']
    descripcion = request.POST['txtDescripcion']
    imagen = request.FILES.get('txtImagen')
    

    accesorio = Accesorio.objects.create(codigo=codigo, nombre=nombre, precio=precio, imagen=imagen, descripcion=descripcion)
    return redirect('adminpro')

def edicionAccesorio(request, codigo):
    accesorio = Accesorio.objects.get(codigo=codigo)
    return render(request, 'pet/edicionAccesorio.html', {'accesorio':accesorio})

def editarAccesorio(request):
    codigo = request.POST['txtCodigo']
    nombre = request.POST['txtNombre']
    precio = request.POST['numPrecio']
    descripcion = request.POST['txtDescripcion']
    imagen = request.FILES.get('txtImagen')

    accesorio = Accesorio.objects.get(codigo=codigo)
    accesorio.nombre = nombre
    accesorio.precio = precio
    accesorio.descripcion = descripcion
    accesorio.imagen = imagen
    accesorio.save()

    return redirect('adminpro') 

def eliminarAccesorio(request, codigo):
    accesorio = Accesorio.objects.get(codigo=codigo)
    accesorio.delete()

    return redirect('adminpro')

def admincli(request):
    clienteList = Cliente.objects.all()
    return render(request, 'pet/admincli.html', {'cliente': clienteList})

def registrarCliente(request):
    rut = request.POST['txtRut']
    nombre = request.POST['txtnombreCli']
    email = request.POST['txtEmail']
    region = request.POST['txtRegion']
    comuna = request.POST['txtComuna']
    contraseña = request.POST['txtContraseña']
    
    

    cliente = Cliente.objects.create(rut=rut, nombre=nombre, email=email, region=region, comuna=comuna, contraseña=contraseña)
    return redirect('admincli')

def edicionCliente(request, rut):
    cliente = Cliente.objects.get(rut=rut)
    return render(request, 'pet/edicionCliente.html' , {'cliente':cliente})

def editarCliente(request):
    rut = request.POST['txtRut']
    nombre = request.POST['txtnombreCli']
    email = request.POST['txtEmail']
    region = request.POST['txtRegion']
    comuna = request.POST['txtComuna']
    contraseña = request.POST['txtContraseña']

    cliente = Cliente.objects.get(rut=rut)
    cliente.nombre = nombre
    cliente.email = email
    cliente.region = region
    cliente.comuna = comuna
    cliente.contraseña = contraseña
    cliente.save()

    return redirect('admincli') 

def eliminarCliente(request, rut):
    cliente = Cliente.objects.get(rut=rut)
    cliente.delete()

    return redirect('admincli')