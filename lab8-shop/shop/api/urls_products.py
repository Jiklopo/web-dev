from django.urls import path, re_path

from api import views

urlpatterns = [
    path("", views.products),
    path("<int:product_id>", views.product),
]