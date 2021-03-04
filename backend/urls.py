from django.urls import path
from . import views

urlpatterns = [
    path('', views.backendOverview, name="backend-overview")
]
