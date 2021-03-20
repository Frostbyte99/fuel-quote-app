from django.test import TestCase, Client
from django.urls import reverse
from backend.models import *
import json

class TestViews(TestCase):

    def setUp(self):
        self.client = Client()
        self.profile_list_url = reverse('profile-list')
        self.profile_detail_url = reverse('profile-detail', args=[1])
        self.profile_create_url = reverse('profile-create')

        # self.[...]_url = reverse('')
        # self.[modelExample] = [Model].objects.create( ... )

    def test_profile_list_GET(self):
        response = self.client.get(self.profile_list_url)
        self.assertEquals(response.status_code, 200)

    # def test_profile_detail_GET(self):
    #     print(self.profile_detail_url)
    #     response = self.client.get(self.profile_detail_url)
    #     self.assertEquals(response.status_code, 200)

    def test_profile_create_POST(self):
        User.objects.create(
            userName='User123',
            userID=123,
            password='Pass123'
        )
        response = self.client.post(self.profile_create_url, {
            'userID': 123,
            'fullName': 'Mr. Name',
            'address1': '123 Main Street',
            'address2': '',
            'city': 'Houston',
            'usState': 'TX',
            'zipcode': '77123',
        })
        self.assertEquals(response.status_code, 200)
        # self.assertEquals(self.[modelExample].[property], '')
    
    # def test_[...]_GET(self):
    #     response = self.client.get(reverse('...'))
    #     self.assertEquals()
    #     self.assertTemplateUsed(response, 'frontend/[...].html')

    # def test_[...]_POST(self):
    #     [Model].objects.create( ... )
    #     response = self.client.post(self.[...]_url, {
    #         [json]
    #     })
    #     self.assertEquals(response.status_code, ###)
    #     self.assertEquals(self.[modelExample].[property], '')
