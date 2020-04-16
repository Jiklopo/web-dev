from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from .models import *


# Create your views here.
def categories(request):
    cat = Categories.objects.all()
    cat_json = [c.to_json() for c in cat]
    return JsonResponse(cat_json, safe=False)


def category(request, category_id):
    try:
        cat = Categories.objects.get(id=category_id)
    except Categories.DoesNotExist as e:
        return error(str(e))
    return JsonResponse(cat.to_json())


def category_products(request, category_id):
    try:
        cat = Categories.objects.get(id=category_id)
        products = Products.objects.filter(category=cat)
        products_json = [p.to_json() for p in products]
        return JsonResponse(products_json, safe=False)
    except Categories.DoesNotExist as e:
        return error(str(e))
    except Products.DoesNotExist as e:
        return error(str(e))


def products(request):
    return JsonResponse([p.to_json() for p in Products.objects.all()], safe=False)


def product(request, product_id):
    try:
        prd = Products.objects.get(id=product_id)
    except Products.DoesNotExist as e:
        return error(str(e))
    return JsonResponse(prd.to_json())

def error(message):
    return JsonResponse({'error': message})
