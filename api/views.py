from django.shortcuts import render
from rest_framework import viewsets
from .models import Carnival
from .serializers import CarnivalSerializer
# Create your views here.

class CarnivalViewSet(viewsets.ModelViewSet):   
    queryset = Carnival.objects.all()
    serializer_class = CarnivalSerializer

