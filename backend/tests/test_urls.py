from django.test import SimpleTestCase  # When there's no interaction with the Database
from django.urls import reverse, resolve
from backend.views import *

class TestUrls(SimpleTestCase):

    def test_profile_list_url_resolves(self):
        url = reverse('profile-list')
        self.assertEquals(resolve(url).func, profileList)

    def test_profile_detail_url_resolves(self):
        url = reverse('profile-detail', args=[1])
        self.assertEquals(resolve(url).func, profileDetail)

    def test_profile_create_url_resolves(self):
        url = reverse('profile-create')
        self.assertEquals(resolve(url).func, profileCreate)

    def test_profile_update_url_resolves(self):
        url = reverse('profile-update', args=[1])
        self.assertEquals(resolve(url).func, profileUpdate)

    def test_profile_delete_url_resolves(self):
        url = reverse('profile-delete', args=[1])
        self.assertEquals(resolve(url).func, profileDelete)

    def test_quote_list_url_resolves(self):
        url = reverse('quote-list')
        self.assertEquals(resolve(url).func, quoteList)

    def test_quote_detail_url_resolves(self):
        url = reverse('quote-detail', args=[1])
        self.assertEquals(resolve(url).func, quoteDetail)

    def test_quote_create_url_resolves(self):
        url = reverse('quote-create')
        self.assertEquals(resolve(url).func, quoteCreate)

    def test_quote_update_url_resolves(self):
        url = reverse('quote-update', args=[1])
        self.assertEquals(resolve(url).func, quoteUpdate)

    def test_quote_delete_url_resolves(self):
        url = reverse('quote-delete', args=[1])
        self.assertEquals(resolve(url).func, quoteDelete)

    def test_login_url_resolves(self):
        url = reverse('login')
        self.assertEquals(resolve(url).func, login)

    def test_user_list_url_resolves(self):
        url = reverse('user-list')
        self.assertEquals(resolve(url).func, userList)

    def test_user_create_url_resolves(self):
        url = reverse('user-create')
        self.assertEquals(resolve(url).func, userCreate)

    # def test_user_get_UUID_url_resolves(self):
    #     url = reverse('user-getUserUUID', args=[1])
    #     self.assertEquals(resolve(url).func, getUserUUID)

    # def test_user_is_unique_url_resolves(self):
    #     url = reverse('user-isUserUnique', args=[1])
    #     self.assertEquals(resolve(url).func, isUserUnique)

    # def test_user_username_resolves(self):
    #     url = reverse('user-getUserName', args=[1])
    #     self.assertEquals(resolve(url).func, getUserName)

    # def test_[...]_url_resolves(self):
    #     url = reverse('...')
    #     self.assertEquals(resolve(url).func, ...)
