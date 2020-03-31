from django.db import models


# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=500)
    city = models.CharField(max_length=167)
    # https://vseznaesh.ru/samye-dlinnye-nazvaniya-gorodov-v-mire
    address = models.TextField(max_length=250)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }


class Vacancy(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=500)
    salary = models.FloatField(default=0)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'company': self.company.to_json(),
            'description': self.description,
            'salary': self.salary
        }
