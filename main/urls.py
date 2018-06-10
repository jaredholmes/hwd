from django.urls import path
from . import views

app_name = "main"

urlpatterns = [
    path('', views.index, name='index'),
    path('web-development-services/', views.services, name='services'),
    path('contact/', views.contact, name='contact'),
    path('.well-known/acme-challenge/jjSzgCYyp_mF37teGk9kpk_ieQgOdXujkAPR-s0YeUY', views.lets_encrypt, name='lets_encrypt'),
    path('.well-known/acme-challenge/tGSRpMQ_x1ZmSTKsOypvLq_0n7Jgp2dh3jeayY-SuBI', views.lets_encrypt_2, name='lets_encrypt_2')
]
