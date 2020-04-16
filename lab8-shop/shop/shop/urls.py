from django.contrib import admin
from django.urls import path, include
urlpatterns = [
    path('admin/', admin.site.urls),
    path('products/', include('api.urls_products')),
    path('categories/', include("api.urls_catiegories"))
]
