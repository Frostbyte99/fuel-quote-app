from rest_framework import serializers
from .models import ClientInformation, FuelQuote, UserCredentials

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserCredentials
        fields = '__all__'

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientInformation
        fields = '__all__'

class QuoteSerializer(serializers.ModelSerializer):
	class Meta:
		model = FuelQuote
		fields = '__all__'

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
		model = UserCredentials
		fields = ('token', 'userName', "password")
