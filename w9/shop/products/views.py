from django.shortcuts import render
from django.http import HttpResponse

def products(request):
    return HttpResponse("Products")

def product(request, id):
    return HttpResponse("Products id: " + id)