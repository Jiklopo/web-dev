from django.db import models


# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=500)
    city = models.CharField(max_length=100)
    address = models.TextField(max_length=100)

    class Meta:
        verbose_name_plural = 'Companies'


class Vacancy(models.Model):
    company = models.ForeignKey(Company, models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=300)
    salary = models.FloatField(default=0)

    class Meta:
        verbose_name_plural = 'Vacancies'
