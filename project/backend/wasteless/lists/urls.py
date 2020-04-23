from django.urls import path
from .views import ListsView

urlpatterns = [
    path('lists/', ListsView.as_view()),
]
