from django.shortcuts import render
from .models import Budget, Donor, Funding, Grant, IncomeStatement, IrsFilling
from django.http import HttpResponse, JsonResponse

# Create your views here.
def budget(request):
	if request.method == "GET":
		response = JsonResponse(list(Budget.objects.values()), safe=False)
	else:
		response = HttpResponse("Invalid request method")
	response["Access-Control-Allow-Origin"] = "*"
	return response

def donor(request):
	if request.method == "GET":
		response = JsonResponse(list(Donor.objects.values()), safe=False)
	else:
		response = HttpResponse("Invalid request method")
	response["Access-Control-Allow-Origin"] = "*"
	return response

def funding(request):
	if request.method == "GET":
		response = JsonResponse(list(Funding.objects.values()), safe=False)
	else:
		response = HttpResponse("Invalid request method")
	response["Access-Control-Allow-Origin"] = "*"
	return response

def grant(request):
	if request.method == "GET":
		response = JsonResponse(list(Grant.objects.values()), safe=False)
	else:
		response = HttpResponse("Invalid request method")
	response["Access-Control-Allow-Origin"] = "*"
	return response

def incomeStatement(request):
	if request.method == "GET":
		response = JsonResponse(list(IncomeStatement.objects.values()), safe=False)
	else:
		response = HttpResponse("Invalid request method")
	response["Access-Control-Allow-Origin"] = "*"
	return response

def irsFilling(request):
	if request.method == "GET":
		response = JsonResponse(list(IrsFilling.objects.values()), safe=False)
	else:
		response = HttpResponse("Invalid request method")
	response["Access-Control-Allow-Origin"] = "*"
	return response