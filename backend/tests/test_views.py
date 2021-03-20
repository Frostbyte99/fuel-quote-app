from django.test import TestCase, Client, RequestFactory
from django.urls import reverse, resolve
from backend.models import *
from backend.views import *
import json

class TestViews(TestCase):

    def setUp(self):
        self.client = Client()
        # Note: The tests seem to use an independent/blank-at-first test database

        # Profile URLs:
        self.profile_list_url = reverse('profile-list')
        self.profile_detail_url = reverse('profile-detail', args=[1])
        self.profile_create_url = reverse('profile-create')
        self.profile_update_url = reverse('profile-update', args=[1])
        self.profile_delete_url = reverse('profile-delete', args=[1])
        # Quote URLs:
        self.quote_list_url = reverse('quote-list')
        self.quote_detail_url = reverse('quote-detail', args=[1])
        self.quote_create_url = reverse('quote-create')
        self.quote_update_url = reverse('quote-update', args=[1])
        self.quote_delete_url = reverse('quote-delete', args=[1])
        # Login URL:
        self.login_url = reverse('login')
        # User URLs:
        self.user_list_url = reverse('user-list')
        self.user_create_url = reverse('user-create')
        self.user_get_UUID_url = reverse('user-getUserUUID', args=[1])
        self.user_is_unique_url = reverse('user-isUserUnique', args=[1])
        self.user_username_url = reverse('user-getUserName', args=[1])

        self.userID = 123
        self.request_factory = RequestFactory()

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
            userID=self.userID,
            password='Pass123'
        )
        response = self.client.post(self.profile_create_url, {
            'userID': self.userID,
            'fullName': 'Mr. Name',
            'address1': '123 Main Street',
            'address2': '',
            'city': 'Houston',
            'usState': 'TX',
            'zipcode': '77123',
        })
        self.assertEquals(response.status_code, 200)
        
        # request = self.request_factory.get(self.profile_detail_url)
        # print(request)
        # request.user = User.objects.get(userID=123)
        # response = self.client.get(self.profile_list_url)
        # print(response)
        
        # self.assertEquals(self.userID.[property], '')
    
    def test_quote_list_GET(self):
        response = self.client.get(self.quote_list_url)
        self.assertEquals(response.status_code, 200)

    def test_quote_create_POST(self):
        response = self.client.post(self.quote_create_url)
        self.assertEquals(response.status_code, 200)

    def test_login_POST(self):
        response = self.client.post(self.login_url)
        self.assertEquals(response.status_code, 200)

    def test_user_list_GET(self):
        response = self.client.get(self.user_list_url)
        self.assertEquals(response.status_code, 200)

    def test_user_create_POST(self):
        response = self.client.post(self.user_create_url)
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
    #     self.assertEquals(response.status_code, ###)
    #     self.assertEquals(self.[modelExample].[property], '')
