from django.test import TestCase, Client
from django.urls import reverse
from backend.models import *
import json

class TestViews(TestCase):

    def setUp(self):
        self.client = Client()
        self.profile_list_url = reverse('profile-list')
        # self.[...]_url = reverse('')
        # self.[modelExample] = [Model].objects.create( ... )

    def test_profile_list_GET(self):
        response = self.client.get(self.profile_list_url)
        self.assertEquals(response.status_code, 200)

    # def test_[...]_GET(self):
    #     response = self.client.get(reverse('...'))
    #     self.assertEquals()
    #     self.assertTemplateUsed(response, 'frontend/[...].html')

    # def test_[...]_POST(self):
    #     [Model].objects.create( ... )
    #     response = self.client.post(self.[...]_url, {
    #         [json]
    #     })
    #     self.assertEquals(response.status_code, 200)
    #     self.assertEquals(self.[modelExample].[property], 200)
