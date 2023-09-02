from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import BookViewSet, CustomerUserViewSet

router = DefaultRouter()
router.register(r'books', BookViewSet)
router.register(r'users', CustomerUserViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
