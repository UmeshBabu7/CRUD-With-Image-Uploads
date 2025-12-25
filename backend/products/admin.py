from django.contrib import admin
from .models import Product

# Register your models here.

class ProductAdmin(admin.ModelAdmin):
    list_display = ['image', 'name', 'price', 'description', 'category']

admin.site.register(Product, ProductAdmin)
