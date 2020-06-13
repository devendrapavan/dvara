from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import *
from rest_framework import status
from rest_framework import generics
from categories.models import Category


class CreateCategory(generics.GenericAPIView):
    serializer_class = PostCategorySerializer

    def post(self, request):
        """this method is used to create the category"""
        try:
            data = self.serializer_class(data=request.data)
            if data.is_valid() is False:
                return Response(data.errors, status=status.HTTP_400_BAD_REQUEST)
            data.create(data.validated_data)
            return Response("success", status.HTTP_200_OK)
        except Exception as e:
            return Response(e, status.HTTP_500_INTERNAL_SERVER_ERROR)


class CreateSubCategory(generics.GenericAPIView):
    serializer_class = PostSubCategorySerializer

    def post(self, request):
        """this method is used to create the sub category"""
        try:
            data = self.serializer_class(data=request.data)
            if data.is_valid() is False:
                return Response(data.errors, status=status.HTTP_400_BAD_REQUEST)
            data.create(data.validated_data)
            return Response("success", status.HTTP_200_OK)

        except Exception as e:
            return Response(str(e), status.HTTP_500_INTERNAL_SERVER_ERROR)


class ViewCategories(APIView):

    def get(self, request):
        """this method is used to get all the categories"""
        try:
            category_data = Category.objects.all()
            if category_data:
                cat_list = CategorySerializer(category_data, many=True).data
                return Response(cat_list, status=status.HTTP_200_OK)
            return Response(data=[], status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(e, status.HTTP_500_INTERNAL_SERVER_ERROR)

class GetNamesCategories(APIView):

    def get(self, request):
        """this method is used to get the distinct categories"""
        try:
            category_names = Category.objects.values_list('name', flat=True).distinct()
            return Response(category_names, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(e, status.HTTP_500_INTERNAL_SERVER_ERROR)


