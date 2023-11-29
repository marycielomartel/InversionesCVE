from rest_framework import routers
from . import views
from django.urls import path

router = routers.DefaultRouter()
router.register("Personal", views.PersonalViewSet)
router.register("Cliente", views.clienteViewSet)
router.register("Facturas", views.facturasViewSet)
router.register("Usuarios", views.usuariosViewSet)
router.register("Contratos", views.contratosViewSet)
router.register("tipocontrato", views.TipoContratoViewSet)
router.register("tipoestado", views.TipoEstadoViewSet)


# Usar las rutas generadas por DefaultRouter
urlpatterns = router.urls

# Agregar rutas adicionales
urlpatterns += [
    path('register', views.RegisterView.as_view()),
    path('login', views.LoginView.as_view()),
    path('user', views.UserView.as_view()),
    path('logout', views.LogoutView.as_view()),
]



