# views.py
import requests
from rest_framework.views import APIView

from rest_framework import generics, status
from rest_framework.response import Response

from .models import mockedResponses
from .serializers import MockSerializer
from django.shortcuts import render


# a lot of this doesn't make sense.
class mockList(generics.RetrieveAPIView):
    serializer_class = MockSerializer
    lookup_field = "mockLocation"    
    # lookup_url_kwarg = 'mockLocation'  # override the lookup URL keyword argument

    def get_queryset(self, *args, **kwargs):
        queryset = mockedResponses.objects.only("mockJSON")
        return queryset

    def get(self, request, *args, **kwargs):
        instance = self.get_object()
        return Response(instance.mockJSON)

class mockCreate(generics.CreateAPIView):
    serializer_class = MockSerializer

class ProxyAPIView(APIView):
    def get(self, request, format=None):
        url = request.GET.get('url', None)

        if url is None:
            return Response("Missing 'url' parameter.", status=status.HTTP_400_BAD_REQUEST)

        try:
            response = requests.get(url)
        except requests.exceptions.RequestException as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

        return Response(response.text, status=response.status_code)


def mock_server(request):
    return render(request, 'mock_server.html')
