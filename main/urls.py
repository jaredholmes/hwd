from django.urls import path
from . import views

app_name = "main"

urlpatterns = [
    path('', views.index, name='index'),
    path('web-development-services/', views.services, name='services'),
    path('contact/', views.contact, name='contact'),
]
