from xml.dom.minidom import Document
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import  admincli, edicionCliente, home
from . import views




urlpatterns =[
    path('', home,name="home"),
    path('galeria', views.galeria,name="galeria"),
    path('contacto', views.contacto,name="contacto"),
    path('quienessomos', views.quienessomos,name="quienessomos"),
    path('registro', views.registro,name="registro"),
    path('login', views.login,name="login"),
    path('adminpro',views.adminpro,name="adminpro"),
    path('registrarProducto/', views.registrarProducto),
    path('edicionAccesorio/<codigo>', views.edicionAccesorio),
    path('editarAccesorio/',views.editarAccesorio),
    path('eliminarAccesorio/<codigo>', views.eliminarAccesorio),
    path('admincli', views.admincli,name="admincli"),
    path('registrarcliente/', views.registrarCliente),
    path('edicionCliente/<rut>', views.edicionCliente),
    path('editarCliente/',views.editarCliente),
    path('eliminarCliente/<rut>', views.eliminarCliente),
    

    
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)