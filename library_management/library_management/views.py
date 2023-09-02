from rest_framework import viewsets
from .models import Book, CustomerUser
from .serializers import BookSerializer, CustomerUserSerializer

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class CustomerUserViewSet(viewsets.ModelViewSet):
    queryset = CustomerUser.objects.all()
    serializer_class = CustomerUserSerializer
