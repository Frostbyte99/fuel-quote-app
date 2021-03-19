from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import ProfileSerializer
from .serializers import QuoteSerializer

from .models import Profile
from .models import Quote
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
		'Quote Delete' : '/quote-delete/'
	}

	return Response(api_urls)

# Profile Model

@api_view(['GET'])
def profileList(request):
	profile = Profile.objects.all().order_by('-id')
	serializer = ProfileSerializer(profile, many=True)
	return Response(serializer.data)

@api_view(['GET'])
def profileDetail(request, pk):
	profile = Profile.objects.get(id=pk)
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
	profile = Profile.objects.get(id=pk)
	serializer = ProfileSerializer(instance=profile, data=request.data)

	if serializer.is_valid():
		serializer.save()
	
	return Response(serializer.data)

@api_view(['DELETE'])
def profileDelete(request, pk):
	profile = Profile.objects.get(id=pk)
	profile.delete()

	return Response('Profile item deleted')

# Fuel Quote Model

@api_view(['GET'])
def quoteList(request):
	quote = Quote.objects.all().order_by('-id')
	serializer = QuoteSerializer(quote, many=True)
	return Response(serializer.data)

@api_view(['GET'])
def quoteDetail(request, pk):
	quote = Quote.objects.get(id=pk)
	serializer = QuoteSerializer(quote, many=False)

	return Response(serializer.data)

@api_view(['POST'])
def quoteCreate(request):
	serializer = QuoteSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['POST'])
def quoteUpdate(request, pk):
	quote = Quote.objects.get(id=pk)
	serializer = QuoteSerializer(instance=quote, data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['DELETE'])
def quoteDelete(request, pk):
	quote = Quote.objects.get(id=pk)
	quote.delete()

	return Response('Quote item deleted')