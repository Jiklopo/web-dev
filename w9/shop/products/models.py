from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.FloatField(default=0)
    description = models.TextField(max_length=500)
    count = models.IntegerField(default=0)
