from django.http import HttpResponse

def categories(request):
    return HttpResponse("Categories")

def category(request, id):
    return HttpResponse("Id: " + id)

def products(request, id):
    return HttpResponse("Products of category id == " + id)
