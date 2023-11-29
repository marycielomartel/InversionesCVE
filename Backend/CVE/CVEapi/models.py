from django.db import models
from django.contrib.auth.models import AbstractUser



# Create your models here.

class User(AbstractUser):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    username =  None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

   

class Tipo_contrato(models.Model):
    nombre = models.CharField(max_length=50) 
    

class Tipo_estado(models.Model):
    nombre = models.CharField(max_length=50) 


class Personal(models.Model):
    nombre = models.CharField(max_length=60)
    edad = models.CharField(max_length=10)
    cargo = models.CharField(max_length=60)
    
    def __str__(self):
        return self.nombre + " - " + self.edad+ " - " +self.cargo

#----------------------------------------------

class cliente(models.Model):
    nombre = models.CharField(max_length=255)
    DNI = models.CharField(max_length=10)
    departamento = models.CharField(max_length=255)
    provincia = models.CharField(max_length=255)
    fecha = models.DateTimeField()
    estado = models.ForeignKey(Tipo_estado, on_delete=models.CASCADE)
    
    def __str__(self):
        fecha_formateada = self.fecha.strftime('%Y-%m-%d %H:%M:%S')  # Formatea la fecha como cadena
        return f"{self.nombre} - {self.DNI} - {self.departamento} - {self.provincia} - {fecha_formateada} - Estado: {self.estado.nombre}"

class facturas(models.Model):
    ruc = models.CharField(max_length=13)
    nombre = models.CharField(max_length=255)
    descripcion = models.CharField(max_length=255)
    fecha = models.DateTimeField()
    precio = models.DecimalField(max_digits = 10, decimal_places = 2)
    localidad = models.CharField(max_length=255)
    estado = models.ForeignKey(Tipo_estado, on_delete=models.CASCADE)

    def __str__(self):
        fecha_formateada = self.fecha.strftime('%Y-%m-%d %H:%M:%S')  # Formatea la fecha como cadena
        return f"{self.ruc} - {self.nombre} - {self.descripcion} - {fecha_formateada} - {self.precio} - {self.localidad} - Estado: {self.estado.nombre}"

class usuarios(models.Model):
    nombre = models.CharField(max_length=255)
    apellidos = models.CharField(max_length=255)
    correo_electronico = models.CharField(max_length=255)
    contrasena = models.CharField(max_length=255)
    
    def __str__(self):
        return self.nombre + " - " + self.apellidos+ " - " +self.correo_electronico+ " - " +self.contrasena
    

class contratos(models.Model):
    codigo = models.CharField(max_length=10)
    tipo = models.CharField(max_length=50)
    nombre = models.CharField(max_length=255)
    estado = models.ForeignKey(Tipo_contrato, on_delete=models.CASCADE)

    
    def __str__(self):
        
         return f" {self.codigo} - {self.tipo} - {self.nombre} - Estado: {self.estado.nombre}"
    

#--------------------------------------------------------------------






    


