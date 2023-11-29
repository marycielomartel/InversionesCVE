from rest_framework import serializers
from . import models



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = ['id', 'name', 'email', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
    

class TipoEstadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Tipo_estado
        fields = '__all__'

class TipoContratoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Tipo_contrato
        fields = '__all__'

class PersonalSerializaer(serializers.ModelSerializer):
    class Meta:
        model = models.Personal
        fields = "__all__"

#------------------------------------------------------------

class clienteSerializaer(serializers.ModelSerializer):
    estado_nombre = serializers.ReadOnlyField(source='estado.nombre')
    fecha = serializers.DateTimeField(format="%d/%m/%Y %H:%M:%S",
        input_formats=(['%d/%m/%Y %H:%M:%S','iso-8601']))
    class Meta:
        model = models.cliente
        fields = "__all__"


class facturasSerializaer(serializers.ModelSerializer):
    estado_nombre = serializers.ReadOnlyField(source='estado.nombre')
    fecha = serializers.DateTimeField(format="%d/%m/%Y %H:%M:%S",
        input_formats=(['%d/%m/%Y %H:%M:%S','iso-8601']))
    class Meta:
        model = models.facturas
        fields = "__all__"

class usuariosSerializaer(serializers.ModelSerializer):
    class Meta:
        model = models.usuarios
        fields = "__all__"

class contratosSerializaer(serializers.ModelSerializer):
    estado_nombre = serializers.ReadOnlyField(source='estado.nombre')
    class Meta:
        model = models.contratos
        fields = "__all__"


