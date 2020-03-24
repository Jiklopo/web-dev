from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.categories),
    path('<int:id>', views.category),
    path('<int:id>/products', views.products)
]
