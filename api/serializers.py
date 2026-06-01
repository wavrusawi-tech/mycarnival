from rest_framework import serializers
from .models import Carnival

class CarnivalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carnival
        fields = '__all__'