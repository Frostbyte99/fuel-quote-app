from rest_framework import serializers
from .models import Profile
from .models import Quote
from .models import User
class ProfileSerializer(serializers.ModelSerializer):
	class Meta:
		model = Profile
		fields = ('fullName', 'address1', 'address2', 'city', 'usState', 'zipcode')

class QuoteSerializer(serializers.ModelSerializer):
	class Meta:
		model = Quote
		fields = ('gallons', 'address', 'deliveryDate', 'totalPrice',)

class LoginSerializerWithToken(serializers.ModelSerializer):

    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ('token', 'userName', "password")
