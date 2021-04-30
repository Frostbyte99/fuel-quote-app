from django.test import TestCase, Client, RequestFactory
from django.urls import reverse, resolve
from backend.models import *
from backend.views import *
import json

class TestViews(TestCase):

    def setUp(self):
        self.client = Client()
        # Note: The tests seem to use an independent/blank-at-first test database

        self.username = 'User123'
        # Profile URLs:
        self.profile_list_url = reverse('profile-list')
        self.profile_list_user_url = reverse('profile-list-user', args=[self.username])
        self.profile_detail_url = reverse('profile-detail', args=[self.username])
        self.profile_create_url = reverse('profile-create')
        self.profile_update_url = reverse('profile-update', args=[self.username])
        self.profile_delete_url = reverse('profile-delete', args=[self.username])
        # Quote URLs:
        self.quote_list_url = reverse('quote-list')
        self.quote_list_user_url = reverse('quote-list-user', args=[self.username])
        self.quote_detail_url = reverse('quote-detail', args=[self.username])
        self.quote_create_url = reverse('quote-create')
        self.quote_update_url = reverse('quote-update', args=[self.username])
        self.quote_delete_url = reverse('quote-delete', args=[self.username])
        # Login URL:
        self.login_url = reverse('login')
        self.signup_url = reverse('signup')
        # User URLs:
        self.user_list_url = reverse('user-list')
        self.user_create_url = reverse('user-create')
        # self.user_get_UUID_url = reverse('user-getUserUUID', args=[1])
        # self.user_is_unique_url = reverse('user-isUserUnique', args=[1])
        # self.user_username_url = reverse('user-getUserName', args=[1])

        self.request_factory = RequestFactory()

        # self.[...]_url = reverse('')
        # self.[modelExample] = [Model].objects.create( ... )

    # requires a JSON POST (request.form...)
    # def test_login_POST(self):
    #     response = self.client.post(self.login_url, {
    #         'userName': self.username,
    #         'password': 'Pass123'
    #     })
    #     self.assertEquals(response.status_code, 200)

    def test_user_list_GET(self):
        response = self.client.get(self.user_list_url)
        self.assertEquals(response.status_code, 200)

    def test_user_create_POST(self):
        post = self.client.post(self.user_create_url, {
            'userName': self.username, # userName is the ID
            'password': 'Pass123'
        })
        self.assertEquals(post.status_code, 200)
        # print(post.json())
        # response = self.client.get(self.user_list_url)
        # print(response.json())

        # test_login_POST
        response = self.client.post(self.login_url, {
            'userName': self.username,
            'password': 'Pass123'
        })
        self.assertEquals(response.status_code, 200)

    def test_profile_list_GET(self):
        # print("> In profile_list_GET API <")
        response = self.client.get(self.profile_list_url)
        # print("profile_list_GET: "+str(response.status_code))
        self.assertEquals(response.status_code, 200)
        # print(response.json())

    def test_profile_create_POST(self):
        # print('create profile for: '+self.username)
        UserCredentials.objects.create(
            userName=self.username, # userName is the ID
            password='Pass123'
        )
        post = self.client.post(self.profile_create_url, {
            'userName': self.username,
            'fullName': 'Mr. Name',
            'address1': '123 Main Street',
            'address2': '',
            'city': 'Houston',
            'usState': 'TX',
            'zipcode': '77123'
        })
        self.assertEquals(post.status_code, 200)
        # print(post.json())

        # test_profile_list_user_GET
        response = self.client.get(self.profile_list_user_url)
        self.assertEquals(response.status_code, 200)
        # print(response.json())

        # test_profile_detail_GET
        response = self.client.get(self.profile_detail_url)
        self.assertEquals(response.status_code, 200)
        # print(response.json())

        # test_profile_delete
        response = self.client.delete(self.profile_delete_url)
        self.assertEquals(response.status_code, 200)
        # print(response.json())

        # request = self.request_factory.get(self.profile_detail_url)
        # print(request)
        # request.user = User.objects.get(userID=123)
        # response = self.client.get(self.profile_list_url)
        # print(response)
        
        # self.assertEquals(self.userID.[property], '')

    # def test_profile_list_user_GET(self):
    #     response = self.client.get(self.profile_list_user_url)
    #     self.assertEquals(response.status_code, 200)
    #     print(response.json())

    # def test_profile_detail_GET(self):
    #     print(self.profile_detail_url)
    #     response = self.client.get(self.profile_detail_url)
    #     self.assertEquals(response.status_code, 200)
    
    def test_quote_list_GET(self):
        response = self.client.get(self.quote_list_url)
        self.assertEquals(response.status_code, 200)

    def test_quote_create_POST(self):
        # UserCredentials.objects.create(
        #     userName=self.username, # userName is the ID
        #     password='Pass123'
        # )
        post = self.client.post(self.quote_create_url, {
            'userName': self.username,
            'gallons': 2,
            'address': '404 Street',
            'deliveryDate': '2021-04-23',
            'totalPrice': 5
        })
        self.assertEquals(post.status_code, 200)

        # test_quote_list_user_GET
        response = self.client.get(self.quote_list_user_url)
        self.assertEquals(response.status_code, 200)
        # print(response.json())

        # test_quote_detail_GET
        response = self.client.get(self.quote_detail_url)
        self.assertEquals(response.status_code, 200)
        # print(response.json())

        # test_quote_delete
        # response = self.client.delete(self.quote_delete_url)
        # self.assertEquals(response.status_code, 200)
        # print(response.json())

    # def test_quote_list_user_GET(self):
    #     response = self.client.get(self.quote_list_user_url)
    #     self.assertEquals(response.status_code, 200)

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
