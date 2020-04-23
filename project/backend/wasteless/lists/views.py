from rest_framework.views import APIView
from rest_framework.response import Response

from .models import List, ListItem
from .serializers import ListSerializer


class ListsView(APIView):
    """
    View to get all lists belonging to current user
    """
    def get(self, request, format=None):
        my_lists = [ListSerializer(obj).data for obj in List.objects.filter(user=request.user)]
        return Response(my_lists)
