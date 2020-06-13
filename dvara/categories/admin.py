from django.contrib import admin

from categories.models import Category, Subcategory

class CategoryAdmin(admin.ModelAdmin):
    """  Team view for admin"""

    list_display = (
        'id', 'name'

    )
    list_per_page = 50

class SubCategoryAdmin(admin.ModelAdmin):
    """  Team view for admin"""

    list_display = (
        'id', 'name', 'category'

    )
    list_per_page = 50

admin.site.register(Category, CategoryAdmin)
admin.site.register(Subcategory, SubCategoryAdmin)
