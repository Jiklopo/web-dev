from django.urls import path, re_path
from .views import *


urlpatterns = [
    path('companies/', companies),
    path('companies/<int:company_id>/', company),
    path('companies/<int:company_id>/vacancies/', company_vacancies),
    path('vacancies/', vacancies),
    path('vacancies/<int:vacancy_id>/', vacancy),
    path('vacancies/top_ten/', vacancies_top_ten)
]