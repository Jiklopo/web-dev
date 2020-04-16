from django.urls import path

from api import views
urlpatterns = [
    path("", views.categories),
    path('<int:category_id>/', views.category),
    path('<int:category_id>/products', views.category_products)
]
