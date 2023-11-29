from django.apps import AppConfig


class CveapiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'CVEapi'

    def ready(self):
        import CVEapi.signals 
