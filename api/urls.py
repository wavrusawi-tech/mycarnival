from rest_framework.routers import DefaultRouter
from .views import CarnivalViewSet

router = DefaultRouter()
router.register(r'carnivals', CarnivalViewSet, basename='carnival')

urlpatterns = router.urls