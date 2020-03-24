from django.urls import path, re_path

from . import views

urlpatterns = [
    path('', views.products),
    path('<int:id>', views.product)
]