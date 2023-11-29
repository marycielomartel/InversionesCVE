from django.shortcuts import render
from rest_framework import viewsets
from . import models, serializers
from .models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from rest_framework import generics
import jwt, datetime
from rest_framework.decorators import api_view
from rest_framework import status


# Create your views here.

def home(request):
    return render(request, 'myapp/home.html')


class PersonalViewSet(viewsets.ModelViewSet):
    queryset = models.Personal.objects.all()
    serializer_class = serializers.PersonalSerializaer


class clienteViewSet(viewsets.ModelViewSet):
    queryset = models.cliente.objects.all()
    serializer_class = serializers.clienteSerializaer

class facturasViewSet(viewsets.ModelViewSet):
    queryset = models.facturas.objects.all()
    serializer_class = serializers.facturasSerializaer

class usuariosViewSet(viewsets.ModelViewSet):
    queryset = models.usuarios.objects.all()
    serializer_class = serializers.usuariosSerializaer

class contratosViewSet(viewsets.ModelViewSet):
    queryset = models.contratos.objects.all()
    serializer_class = serializers.contratosSerializaer

class TipoEstadoViewSet(viewsets.ModelViewSet):
    queryset = models.Tipo_estado.objects.all()
    serializer_class = serializers.TipoEstadoSerializer

class TipoContratoViewSet(viewsets.ModelViewSet):
    queryset = models.Tipo_contrato.objects.all()
    serializer_class = serializers.TipoContratoSerializer


class RegisterView(APIView):
    def post(self, request):
        serializer = serializers.UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    
class LoginView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        user = User.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed('User not found!')

        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect password!')

        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256')

        response = Response()

        response.set_cookie(key='jwt', value=token, httponly=True)
        response.data = {
            'jwt': token
        }
        return response
    
class UserView(APIView):

    def get(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('No autenticado!')

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('No autenticado!')

        user = User.objects.filter(id=payload['id']).first()
        serializer = serializers.UserSerializer(user)

        return Response(serializer.data)


class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'success'
        }
        return response


