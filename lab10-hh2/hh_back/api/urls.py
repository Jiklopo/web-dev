from django.urls import path
from .views import *


urlpatterns = [
    path('companies/', companies),
    path('companies/<int:company_id>/', company),
    path('companies/<int:company_id>/vacancies/', company_vacancies),
    path('vacancies/', VacanciesView.as_view()),
    path('vacancies/<int:vacancy_id>/', VacancyView.as_view()),
    path('vacancies/top_ten/', VacancyTopTenView.as_view())
]