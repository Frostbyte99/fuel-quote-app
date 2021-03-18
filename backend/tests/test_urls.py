from django.test import SimpleTestCase
from django.urls import reverse, resolve
from backend.views import *

class TestUrls(SimpleTestCase):

    def test_profile_list_url_resolves(self):
        url = reverse('profile-list')
        self.assertEquals(resolve(url).func, profileList)

    # def test_[...]_url_resolves(self):
    #     url = reverse('...')
    #     self.assertEquals(resolve(url).func, ...)

