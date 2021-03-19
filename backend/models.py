import uuid
from django.db import models

class User(models.Model):
  userName = models.CharField(max_length=100, unique=True)
  userID = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
  password = models.CharField(max_length=200)

class Profile(models.Model):
  userID = models.UUIDField(blank=True, null=True)
  fullName = models.CharField(max_length=50, default="Example Name")
  address1 = models.CharField(max_length=100, default="Example Address 1")
  address2 = models.CharField(max_length=100, default="Example Address 2")
  city = models.CharField(max_length=100, default="Example City")
  usState = models.CharField(max_length=2, default="Example State")
  zipcode = models.CharField(max_length=9, default="Example Zip")

class Quote(models.Model):
  userID = models.UUIDField(blank=True, null=True)
  gallons = models.IntegerField(default=0)
  address = models.CharField(max_length=100, blank=True, null=True, default="Example Address")
  deliveryDate = models.CharField(max_length=100, blank=True, null=True, default="Example deliveryDate")
  totalPrice = models.IntegerField(default=0)