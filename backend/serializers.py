from rest_framework import serializers
from .models import Profile
from .models import Quote
class ProfileSerializer(serializers.ModelSerializer):
	class Meta:
		model = Profile
		fields = ('fullName', 'address1', 'address2', 'city', 'usState', 'zipcode')

class QuoteSerializer(serializers.ModelSerializer):
	class Meta:
		model = Quote
		fields = ('gallons', 'address', 'deliveryDate', 'totalPrice',)