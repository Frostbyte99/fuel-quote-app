import uuid
from django.db import models

class User(models.Model):
  userName = models.CharField(max_length=100, unique=True)
  userID = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
  password = models.CharField(max_length=200)

class Profile(models.Model):
  userID = models.UUIDField()
  fullName = models.CharField(max_length=50)
  address1 = models.CharField(max_length=100)
  address2 = models.CharField(max_length=100)
  city = models.CharField(max_length=100)
  usState = models.CharField(max_length=2)
  zipcode = models.CharField(max_length=9)

class Quote(models.Model):
  userID = models.UUIDField()
  gallons = models.IntegerField(default=0)
  address = models.CharField(max_length=100, blank=True, null=True)
  deliveryDate = models.CharField(max_length=100, blank=True, null=True)
  totalPrice = models.IntegerField(default=0)