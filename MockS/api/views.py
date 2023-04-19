from rest_framework import generics
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

def mock_server(request):
    return render(request, 'mock_server.html')
