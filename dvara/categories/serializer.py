from rest_framework import serializers
from .models import *


class SubcategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Subcategory
        fields = ('name',)


class CategorySerializer(serializers.ModelSerializer):
    subcategories = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ('id', 'name', 'subcategories')

    def get_subcategories(self, obj):
        return SubcategorySerializer(Subcategory.objects.filter(category=obj), many=True).data


class PostSubCategorySerializer(serializers.ModelSerializer):
    category = serializers.CharField(required=True)

    class Meta:
        model = Subcategory
        fields = ('name', 'category')

    def create(self, validated_data):
        category = Category.objects.filter(name=validated_data.get('category')).first()
        Subcategory.objects.create(name=validated_data.get('name'), category=category)


class PostCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name',)

    def create(self, validated_data):
        Category.objects.create(name=validated_data.get('name'))
