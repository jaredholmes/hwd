from django.urls import path
from . import views

app_name = "main"

urlpatterns = [
    path('', views.index, name='index'),
    path('web-development-services/', views.services, name='services'),
    path('contact/', views.contact, name='contact'),
    path('.well-known/acme-challenge/iG4DmbUu18tATgXkFPUe8E7_C8LiVcqnt8z5heY1yOc', views.lets_encrypt, name='lets_encrypt')
    path('.well-known/acme-challenge/W1AzD_lSSMDgN5oRe5U-qkuYOz562tFsi_RQZsfq7X8', views.lets_encrypt_2, name='lets_encrypt_2')
]
