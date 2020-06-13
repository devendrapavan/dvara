from django.db import models


class CustomModel(models.Model):
    createdAt = models.DateTimeField(auto_now_add=True)
    isDeleted = models.BooleanField(default=False)

    @classmethod
    def get_field_names(cls):
        field_names = list()
        for field in CustomModel._meta.fields:
            field_names.append(field.attname)
        return field_names

    class Meta:
        abstract = True


class Category(CustomModel):
    name = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return self.name


class Subcategory(CustomModel):
    name = models.CharField(max_length=20, unique=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='categories')

    def __str__(self):
        return self.name
