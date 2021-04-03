from django.db import models

class UserCredentials(models.Model):
  userName = models.CharField(max_length=100, unique=True)
  password = models.CharField(max_length=200)

class ClientInformation(models.Model):
  fullName = models.CharField(max_length=50, default="Example Name")
  address1 = models.CharField(max_length=100, default="Example Address 1")
  address2 = models.CharField(max_length=100, default="Example Address 2")
  city = models.CharField(max_length=100, default="Example City")
  userName = models.CharField(max_length=100, blank=True, null=True)
  usState = models.CharField(max_length=2, default="TX")
  zipcode = models.CharField(max_length=9, default="22222")

class FuelQuote(models.Model):
  userName = models.CharField(max_length=100, blank=True, null=True)
  gallons = models.CharField(max_length=500, default="0")
  address = models.CharField(max_length=100, blank=True, null=True, default="Example Address")
  deliveryDate = models.CharField(max_length=100, blank=True, null=True, default="Example deliveryDate")
  totalPrice = models.CharField(max_length=500, default="0")
