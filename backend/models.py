from django.db import models

class UserCredentials(models.Model):
  userName = models.CharField(max_length=100, unique=True)
  password = models.CharField(max_length=200)

class ClientInformation(models.Model):
  userName = models.CharField(max_length=100, blank=True, null=True)
  fullName = models.CharField(max_length=50, default="Example Name")
  address1 = models.CharField(max_length=100, default="Example Address 1")
  address2 = models.CharField(max_length=100, default="Example Address 2")
  city = models.CharField(max_length=100, default="Example City")
  usState = models.CharField(max_length=2, default="TX")
  zipcode = models.CharField(max_length=9, default="22222")

class FuelQuote(models.Model):
  userName = models.CharField(max_length=100, blank=True, null=True)
  gallons = models.IntegerField(default=0)
  address = models.CharField(max_length=100, blank=True, null=True, default="Example Address")
  deliveryDate = models.CharField(max_length=100, blank=True, null=True, default="Example deliveryDate")
  totalPrice = models.IntegerField(default=0)
