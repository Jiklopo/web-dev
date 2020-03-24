from django.http import HttpResponse

def categories(request):
    return HttpResponse("Categories")

def category(request, id):
    return HttpResponse(id)

def products(request, id):
    return HttpResponse(id)
