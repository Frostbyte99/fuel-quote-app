from django.urls import path
from . import views

urlpatterns = [
	# Profile API
	path('profile-list/', views.profileList, name="profile-list"),
	path('profile-list-user/<str:pk>/', views.profileListUsers, name="profile-list-user"),
	path('profile-detail/<str:pk>/', views.profileDetail, name="profile-detail"),
	path('profile-create/', views.profileCreate, name="profile-create"),
	path('profile-update/<str:name>/', views.profileUpdate, name="profile-update"),
	path('profile-delete/<str:pk>/', views.profileDelete, name="profile-delete"),
	# Quote API
	path('quote-list/', views.quoteList, name="quote-list"),
	path('quote-list-user/<str:pk>/', views.quoteListUsers, name="quote-list-user"),
	path('quote-detail/<str:pk>/', views.quoteDetail, name="quote-detail"),
	path('quote-create/', views.quoteCreate, name="quote-create"),
	path('quote-update/<str:pk>/', views.quoteUpdate, name="quote-update"),
	path('quote-delete/<str:pk>/', views.quoteDelete, name="quote-delete"),
	path('quote-price/<str:name>/<str:gallons>/', views.getQuotePrice, name="quote-price"),
	# Login
	path('login/', views.login, name="login"),
  	path('signup/', views.signup, name="signup"),
	# User API
	path('user-list/', views.userList, name="user-list"),
	path('user-create/', views.userCreate, name="user-create"),
	# path('user-isUserUnique/<str:pk>/', views.isUserUnique, name="user-isUserUnique"),
	# path('user-getUserName/<str:pk>/', views.getUserName, name="user-getUserName"),
	
]
