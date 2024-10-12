
from django.http import HttpResponse

def hello_view(request):
    # This view will handle a GET request
    if request.method == 'GET':
        return HttpResponse("Hello, this is a GET request!")
    else:
        return HttpResponse("Only GET requests are allowed!", status=405)  # Method Not Allowed
