from django.urls import path
from .views import mockList, mockCreate, mock_server

urlpatterns = [
    path('mock/create/', mockCreate.as_view()),
    path('mock/<str:mockLocation>', mockList.as_view()),
    path('mock_server/', mock_server, name='mock_server'),
]
