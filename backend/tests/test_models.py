from django.test import TestCase
from backend.models import *

class TestModels(TestCase):

    def setUp(self):
        self.user = UserCredentials.objects.create(
            userName = 'User123',
            password = 'Pass123'
        )
        self.profile = ClientInformation.objects.create(
            userName = self.user.userName,
            fullName = 'Mr. Name',
            address1 = '123 Main Street',
            address2 = '',
            city = 'Houston',
            usState = 'TX',
            zipcode = '77123',
        )
        self.quote = FuelQuote.objects.create(
            userName = self.user.userName,
            gallons = '10',
            address = (self.profile.address1+" "+self.profile.address2).strip(),
            deliveryDate = '2021-10-10',
            totalPrice = 21.99
        )

    def test(self):
        self.assertEquals(self.user.userName, 'User123')
        self.assertEquals(self.profile.userName, self.user.userName)
        self.assertEquals(self.quote.userName, self.user.userName)
        
        self.assertEquals(self.profile.address1, '123 Main Street')
        self.assertEquals(self.quote.address, self.profile.address1)

    # def test_user(self):
    #     self.assertEquals(self.user, ...)

    # def test_[...](self):
    #     [Model].objects.create( ... )
    #     self.assertEquals(..., ...)
