from django.urls import path
from django.views.generic import TemplateView

from . import views

app_name = "main"

urlpatterns = [
    path('', views.index, name='index'),
    path('web-development-services/', views.services, name='services'),
    path('contact/', views.contact, name='contact'),
    path('sw.js', (TemplateView.as_view(template_name="sw.js", content_type="application/javascript")), name="service_worker")
]
