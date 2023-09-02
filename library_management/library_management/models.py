from django.db import models

class Book(models.Model):
    CATEGORIES = (
        ('Sci-Fi', 'Sci-Fi'),
        ('Fiction', 'Fiction'),
        ('Comedy', 'Comedy'),
    )

    title = models.CharField(max_length=100)
    category = models.CharField(max_length=20, choices=CATEGORIES)

    def __str__(self):
        return self.title

class CustomerUser(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    email = models.EmailField(unique=True)
    address = models.TextField()
    college = models.CharField(max_length=100)

    def __str__(self):
        return self.name
