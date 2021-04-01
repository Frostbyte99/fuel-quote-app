from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ProfileSerializer
from .serializers import QuoteSerializer
from .serializers import UserSerializer
from .serializers import LoginSerializerWithToken
from .models import ClientInformation, FuelQuote, UserCredentials
# Create your views here.

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'Profile List' : '/profile-list/',
		'Profile Detail' : '/profile-detail/',
		'Profile Create' : '/profile-create/',
		'Profile Update' : '/profile-update/',
		'Profile Delete' : '/profile-delete/',
		'Quote List' : '/quote-list/',
		'Quote Detail' : '/quote-detail/',
		'Quote Create' : '/quote-create/',
		'Quote Update' : '/quote-update/',
		'Quote Delete' : '/quote-delete/',
    	'Login User' : '/login/',
		'User List' : '/user-list/',
		'User Create' : '/user-create/',
		'User UUID' : 'user-getUserUUID/<str:pk>/',
	}

	return Response(api_urls)

# Profile Model

@api_view(['GET'])
def profileList(request):
	profile = ClientInformation.objects.all().order_by('-id')
	serializer = ProfileSerializer(profile, many=True)
	return Response(serializer.data)

@api_view(['GET'])
def profileDetail(request, pk):
	profile = ClientInformation.objects.get(userID=pk)
	serializer = ProfileSerializer(profile, many=False)
	return Response(serializer.data)

@api_view(['POST'])
def profileCreate(request):
	serializer = ProfileSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()
	
	return Response(serializer.data)

@api_view(['POST'])
def profileUpdate(request, pk):
	profile = ClientInformation.objects.get(id=pk)
	serializer = ProfileSerializer(instance=profile, data=request.data)

	if serializer.is_valid():
		serializer.save()
	
	return Response(serializer.data)

@api_view(['DELETE'])
def profileDelete(request, pk):
	profile = ClientInformation.objects.get(id=pk)
	profile.delete()

	return Response('Profile item deleted')

# Fuel Quote Model

@api_view(['GET'])
def quoteList(request):
	quote = FuelQuote.objects.all().order_by('-id')
	serializer = QuoteSerializer(quote, many=True)
	return Response(serializer.data)

@api_view(['GET'])
def quoteDetail(request, pk):
	quote = FuelQuote.objects.filter(userID=pk)
	serializer = QuoteSerializer(quote, many=True)

	return Response(serializer.data)

@api_view(['POST'])
def quoteCreate(request):
	serializer = QuoteSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['POST'])
def quoteUpdate(request, pk):
	quote = FuelQuote.objects.get(id=pk)
	serializer = QuoteSerializer(instance=quote, data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['DELETE'])
def quoteDelete(request, pk):
	quote = FuelQuote.objects.get(id=pk)
	quote.delete()

	return Response('Quote item deleted')
    
@api_view(['POST'])
def login(request, format=None):
    serializer = LoginSerializerWithToken(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)

# User Model

@api_view(['GET'])
def userList(request):
	user = UserCredentials.objects.all().order_by('-userID')
	serializer = UserSerializer(user, many=True)

	return Response(serializer.data)

@api_view(['POST'])
def userCreate(request):
	serializer = UserSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()
	
	return Response(serializer.data)

@api_view(['GET'])
def getUserUUID(request, pk):
	user = UserCredentials.objects.get(userName=pk)
	serializer = UserSerializer(user, many=False)

	return Response(serializer.data['userID'])

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
