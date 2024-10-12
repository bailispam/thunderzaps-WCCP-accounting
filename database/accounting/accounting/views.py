from django.http import HttpResponse, JsonResponse

money = 0

def hello_view(request):
    # This view will handle a GET request
    if request.method == 'GET':
        return HttpResponse(str(money))
    else:
        return HttpResponse("Only GET requests are allowed!", status=405)  # Method Not Allowed
    
def submit_view(request):
    global money
    if request.method == 'POST':
        # Get data from the request (for example, from a submitted form)
        number = request.POST.get('number')

        # Process the data and return a response
        if number:
            money += int(number)
            response_data = {
                'message': f"your number is {number}"
            }
            return JsonResponse(response_data)
        else:
            return JsonResponse({'error': 'Missing input'}, status=400)
    else:
        return HttpResponse("Only POST requests are allowed!", status=405)

def funds(request):
    # This view will handle a GET request
    if request.method == 'GET':
        return HttpResponse("Work in progress") #!todo
    else:
        return HttpResponse("Only GET requests are allowed!", status=405)  # Method Not Allowed
    
def add_funds(request):
    if request.method == 'POST':
        # Get data from the request where date is key and funds is value
        funds = request.POST.get('funds')
        date = request.POST.get('date')

        # Process the data and return a response
        if funds and date:
            #todo update database
            '''
            response_data = {
                'message': f"your number is {number}"
            }
            '''
            return JsonResponse(response_data)
        else:
            return JsonResponse({'error': 'Missing input'}, status=400)
    else:
        return HttpResponse("Only POST requests are allowed!", status=405)
