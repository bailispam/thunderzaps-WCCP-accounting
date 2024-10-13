from django.shortcuts import render
from .models import Budget, Donor, Funding, Grant, IncomeStatement, IrsFilling
from django.http import HttpResponse, JsonResponse

# Create your views here.
def budget(request):
	if request.method == "GET":
		return JsonResponse(list(Budget.objects.values()), safe=False)
	else:
		return HttpResponse("Invalid request method")

def donor(request):
	if request.method == "GET":
		return JsonResponse(list(Donor.objects.values()), safe=False)
	else:
		return HttpResponse("Invalid request method")

def funding(request):
	if request.method == "GET":
		return JsonResponse(list(Funding.objects.values()), safe=False)
	else:
		return HttpResponse("Invalid request method")
	
	
def grant(request):
	if request.method == "GET":
		return JsonResponse(list(Grant.objects.values()), safe=False)
	else:
		return HttpResponse("Invalid request method")

def incomeStatement(request):
	if request.method == "GET":
		return JsonResponse(list(IncomeStatement.objects.values()), safe=False)
	else:
		return HttpResponse("Invalid request method")

def irsFilling(request):
	if request.method == "GET":
		return JsonResponse(list(IrsFilling.objects.values()), safe=False)
	else:
		return HttpResponse("Invalid request method")