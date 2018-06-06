from django.db import models

# Create your models here.
class Message(models.Model):
    sender_name = models.CharField(max_length=50)
    sender_email = models.EmailField()
    message = models.TextField()
    time = models.DateTimeField(auto_now_add=True)
