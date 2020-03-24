from django.contrib import admin

# Register your models here.
from api.models import Categories, Products

admin.site.register(Categories)
admin.site.register(Products)