from django.shortcuts import render
from django.http import JsonResponse

from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.status import (
    HTTP_400_BAD_REQUEST,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK
)

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ProfileSerializer
from .serializers import QuoteSerializer
from .serializers import UserSerializer
from .models import ClientInformation, FuelQuote, UserCredentials
from .pricing_module import calculateTotalPrice

import json

# Create your views here.

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'Profile List': '/profile-list/',
		'Profile List User': 'profile-list-user/<userName>/',
		'Profile Detail': '/profile-detail/',
		'Profile Create': '/profile-create/',
		'Profile Update': '/profile-update/',
		'Profile Delete': '/profile-delete/',
		'Quote List': '/quote-list/',
		'Quote List User': '/quote-list-user/<userName>/',
		'Quote Detail': '/quote-detail/',
		'Quote Create': '/quote-create/',
		'Quote Update': '/quote-update/',
		'Quote Delete': '/quote-delete/',
        'Login User': '/login/',
        'Signup User': '/signup/',
		'User List': '/user-list/',
		'User Create': '/user-create/',
	}

	return Response(api_urls)

# Profile Model

@permission_classes((AllowAny,))
@api_view(['GET'])
def profileList(request):
	profile = ClientInformation.objects.all().order_by('-userName')
	serializer = ProfileSerializer(profile, many=True)
	return Response(serializer.data)


@permission_classes((AllowAny,))
@api_view(['GET'])
def profileListUsers(request, pk):
	profile = ClientInformation.objects.filter(userName=pk)
	serializer = ProfileSerializer(profile, many=True)
	return Response(serializer.data)


@permission_classes((AllowAny,))
@api_view(['GET'])
def profileDetail(request, pk):
	profile = ClientInformation.objects.get(userName=pk)
	serializer = ProfileSerializer(profile, many=False)
	return Response(serializer.data)


@permission_classes((AllowAny,))
@api_view(['POST'])
def profileCreate(request):
	print(request.data)
	serializer = ProfileSerializer(data=request.data)
	
	if serializer.is_valid():
		serializer.save()
		return Response(serializer.data)


	print(serializer.errors)
	return Response(serializer.errors)


@permission_classes((AllowAny,))
@api_view(['POST'])
def profileUpdate(request, pk):
	profile = ClientInformation.objects.get(id=pk)
	serializer = ProfileSerializer(instance=profile, data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)


@permission_classes((AllowAny,))
@api_view(['DELETE'])
def profileDelete(request, pk):
	profile = ClientInformation.objects.get(id=pk)
	profile.delete()

	return Response('Profile item deleted')

# Fuel Quote Model


@permission_classes((AllowAny,))
@api_view(['GET'])
def quoteList(request):
	quote = FuelQuote.objects.all().order_by('-id')
	serializer = QuoteSerializer(quote, many=True)
	return Response(serializer.data)


@permission_classes((AllowAny,))
@api_view(['GET'])
def quoteListUsers(request, pk):
	quote = FuelQuote.objects.filter(userName=pk)
	serializer = QuoteSerializer(quote, many=True)
	return Response(serializer.data)


@permission_classes((AllowAny,))
@api_view(['GET'])
def quoteDetail(request, pk):
	quote = FuelQuote.objects.filter(userName=pk)
	serializer = QuoteSerializer(quote, many=True)

	return Response(serializer.data)


@permission_classes((AllowAny,))
@api_view(['POST'])
def quoteCreate(request):
	serializer = QuoteSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)


@permission_classes((AllowAny,))
@api_view(['POST'])
def quoteUpdate(request, pk):
	quote = FuelQuote.objects.get(id=pk)
	serializer = QuoteSerializer(instance=quote, data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)


@permission_classes((AllowAny,))
@api_view(['DELETE'])
def quoteDelete(request, pk):
	quote = FuelQuote.objects.get(id=pk)
	quote.delete()

	return Response('Quote item deleted')


@permission_classes((AllowAny,))
@api_view(['GET'])
def getQuotePrice(request, name, gallons):
	
	price = calculateTotalPrice(name, gallons)
	price = json.dumps(price)
	return Response(price)


@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def login(request):
	#serializer = LoginSerializerWithToken(data=request.data)
	#user = UserSerializer(data=request.data)
	username = request.data['userName']
	password = request.data['password']

	dbUser = UserCredentials.objects.get(userName=username)
	serializer = UserSerializer(dbUser, many=False)
	dbUsername = getattr(dbUser, 'userName')
	dbPassword = getattr(dbUser, 'password')

	if password == dbPassword:
		return Response(status=HTTP_200_OK)
		#token = Token.objects.get_or_create(user=serializer)
		#return Response({'token': token.key}, status=HTTP_200_OK)

	errorMessage = 'Password or username is incorrect'
	return Response({'error': errorMessage}, status=HTTP_400_BAD_REQUEST)

@csrf_exempt
@api_view(['POST'])
@permission_classes((AllowAny,))
def signup(request):
	serializer = UserSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()
		return Response({'token': 'token.key'})

	errorMessage = serializer.errors
	return Response({'error': errorMessage}, status=HTTP_400_BAD_REQUEST)

# User Model


@permission_classes((AllowAny,))
@api_view(['GET'])
@csrf_exempt
def userList(request):
	user = UserCredentials.objects.all().order_by('-id')
	serializer = UserSerializer(user, many=True)

	return Response(serializer.data)


@api_view(['POST'])
def userCreate(request):
	serializer = UserSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['GET'])
def isUserUnique(request, pk):
	user = UserCredentials.objects.get(userName=pk)
	serializer = UserSerializer(user, many=False)

	if pk == serializer.data['userID']:
		return Response('True')
	else:
		return Response('False')


@api_view(['GET'])
def getUserName(request, pk):
	user = UserCredentials.objects.get(userID=pk)
	serializer = UserSerializer(user, many=False)

	return Response(serializer.data['userName'])
