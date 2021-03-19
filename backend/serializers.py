from rest_framework import serializers
from .models import Profile, Quote, User

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = '__all__'

class ProfileSerializer(serializers.ModelSerializer):
	class Meta:
		model = Profile
		fields = ('userID', 'fullName', 'address1', 'address2', 'city', 'usState', 'zipcode')

class QuoteSerializer(serializers.ModelSerializer):
	class Meta:
		model = Quote
		fields = ('userID', 'gallons', 'address', 'deliveryDate', 'totalPrice',)