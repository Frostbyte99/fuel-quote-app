from django.test import TestCase
from backend.models import *

class TestModels(TestCase):

    def setUp(self):
        self.user = UserCredentials.objects.create(
            userName = 'User123',
            userID = 123,
            password = 'Pass123'
        )
        self.profile = ClientInformation.objects.create(
            userID = self.user.userID,
            fullName = 'Mr. Name',
            address1 = '123 Main Street',
            address2 = '',
            city = 'Houston',
            usState = 'TX',
            zipcode = '77123',
        )
        self.quote = FuelQuote.objects.create(
            userID = self.user.userID,
            gallons = '10',
            address = (self.profile.address1+" "+self.profile.address2).strip(),
            deliveryDate = '2021-10-10',
            totalPrice = 21.99
        )

    def test(self):
        self.assertEquals(self.user.userID, 123)
        self.assertEquals(self.profile.userID, self.user.userID)
        self.assertEquals(self.quote.userID, self.user.userID)
        
        self.assertEquals(self.profile.address1, '123 Main Street')
        self.assertEquals(self.quote.address, self.profile.address1)

    # def test_[...](self):
    #     [Model].objects.create( ... )
    #     self.assertEquals(..., ...)
