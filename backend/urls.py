from django.urls import path
from . import views

urlpatterns = [
	# Profile API
	path('profile-list/', views.profileList, name="profile-list"),
	path('profile-detail/<str:pk>/', views.profileDetail, name="profile-detail"),
	path('profile-create/', views.profileCreate, name="profile-create"),
	path('profile-update/<str:pk>/', views.profileUpdate, name="profile-update"),
	path('profile-delete/<str:pk>/', views.profileDelete, name="profile-delete"),
	# Quote API
	path('quote-list/', views.quoteList, name="quote-list"),
	path('quote-detail/<str:pk>/', views.quoteDetail, name="quote-detail"),
	path('quote-create/', views.quoteCreate, name="quote-create"),
	path('quote-update/<str:pk>/', views.quoteUpdate, name="quote-update"),
	path('quote-delete/<str:pk>/', views.quoteDelete, name="quote-delete"),
]
