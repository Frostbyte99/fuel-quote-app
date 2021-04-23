from .serializers import ProfileSerializer, QuoteSerializer, UserSerializer
from .models import ClientInformation, FuelQuote, UserCredentials


def calculateTotalPrice(profileName, gallons):

    gallons = int(gallons)

    currentPrice = 1.50
    locationFactor = 0.0
    rateHistoryFactor = 0.0
    gallonsRequestedFactor = 0.0
    companyProfitFactor = 0.1

    clientInfo = ClientInformation.objects.filter(userName=profileName).order_by('id').first()
    infoSerializer = ProfileSerializer(clientInfo, many=False)

    if infoSerializer.data['usState'] == 'TX':
        locationFactor = 0.02
    else:
        locationFactor = 0.04

    if FuelQuote.objects.filter(userName=profileName):
        rateHistoryFactor = 0.01
    else:
        rateHistoryFactor = 0.00

    if gallons > 1000:
        gallonsRequestedFactor = 0.02
    else:
        gallonsRequestedFactor = 0.03

    margin = currentPrice * (locationFactor - rateHistoryFactor + gallonsRequestedFactor + companyProfitFactor)
    suggestedPrice = margin + currentPrice
    totalPrice = suggestedPrice * gallons

    return totalPrice
