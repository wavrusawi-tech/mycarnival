from django.db import models

# Create your models here.

class Carnival(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    date = models.DateField()