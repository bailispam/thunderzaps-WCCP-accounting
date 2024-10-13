from datetime import datetime
from time import timezone
from django.shortcuts import render
from .models import Budget, Donor, Funding, Grant, IncomeStatement, IrsFilling
from django.http import HttpResponse, JsonResponse
import json

# Create your views here.
def home(request):
    return HttpResponse("Welcome to the Colossal API")

def budget(request):
    if request.method == "GET":
        response = JsonResponse(list(Budget.objects.values()), safe=False)
    elif request.method == "PUT":
        data = json.loads(request.body)
        program_name = data.get('programName')
        budgeted_amount = float(data.get('budgetedAmount', 0))  # Default to 0 if not provided
        actual_spent = float(data.get('actualSpent', 0))  # Default to 0 if not provided
        remaining_balance = float(data.get('remainingBalance', 0))  # Default to 0 if not provided
        notes = data.get('notes', '')

        # Create a new Budget instance
        new_budget = Budget(
            programName=program_name,
            budgetedAmount=budgeted_amount,
            actualSpent=actual_spent,
            remainingBalance=remaining_balance,
            notes=notes
        )

        # Save the new instance to the database
        new_budget.save()
        response = JsonResponse({"message": "Budget added successfully"}, status=201)  # 201 Created
    else:
        response = HttpResponse("Invalid request method")
    response["Access-Control-Allow-Origin"] = "*"
    return response


def donor(request):
    if request.method == "GET":
        response = JsonResponse(list(Donor.objects.values()), safe=False)
    elif request.method == "PUT":
        data = json.loads(request.body)
        donor_name = data.get('donorName')
        donation_date_str = data.get('donationDate')  # Ensure this is in the correct format
        total_amount = float(data.get('totalAmount', 0))  # Default to 0 if not provided
        allocated_amount = float(data.get('allocatedAmount', 0))  # Default to 0 if not provided
        remaining_balance = float(data.get('remainingBalance', 0))  # Default to 0 if not provided
        receipt_issued_str = data.get('receiptIssued')  # Ensure this is in the correct format
        followup_date_str = data.get('followupDate')  # Ensure this is in the correct format
        form_required = data.get('formRequired') == 'true'  # Convert to boolean
        acknowledgment_letter_sent = data.get('acknowledgmentLetterSent') == 'true'  # Convert to boolean
        notes = data.get('notes', '')  # Default to empty string if not provided
        try:
            donation_date = datetime.strptime(donation_date_str, "%Y-%m-%d").date() if donation_date_str else None
        except ValueError:
            return JsonResponse({"error": "Invalid date format. Use MM-DD-YYYY."}, status=400)
        try:
            receipt_issued = datetime.strptime(receipt_issued_str, "%Y-%m-%d").date() if receipt_issued_str else None
        except ValueError:
            return JsonResponse({"error": "Invalid date format. Use MM-DD-YYYY."}, status=400)
        try:
            followup_date = datetime.strptime(followup_date_str, "%Y-%m-%d").date() if followup_date_str else None
        except ValueError:
            return JsonResponse({"error": "Invalid date format. Use MM-DD-YYYY."}, status=400)
        # Create a new Donor instance
        new_donor = Donor(
            donorName=donor_name,
            donationDate=donation_date,  # You may need to convert this to a date object
            totalAmount=total_amount,
            allocatedAmount=allocated_amount,
            remainingBalance=remaining_balance,
            receiptIssued=receipt_issued,  # Convert to date if necessary
            followupDate=followup_date,  # Convert to date if necessary
            formRequired=form_required,
            acknowledgmentLetterSent=acknowledgment_letter_sent,
            notes=notes
        )

        # Save the new instance to the database
        new_donor.save()
        response = JsonResponse({"message": "Donor added successfully"}, status=201)  # 201 Created
    else:
        response = HttpResponse("Invalid request method")
    response["Access-Control-Allow-Origin"] = "*"
    return response

def funding(request):
    if request.method == "GET":
        response = JsonResponse(list(Funding.objects.values()), safe=False)
    elif request.method == "PUT":
        data = json.loads(request.body)
        source = data.get('source')
        restricted = data.get('restricted') == 'true'  # Assuming it's coming as a string
        total_amount = float(data.get('totalAmount', 0))  # Default to 0 if not provided
        allocated_amount = float(data.get('allocatedAmount', 0))
        remaining_balance = float(data.get('remainingBalance', 0))
        restrictions = data.get('restrictions', '')
        notes = data.get('notes', '')
        funding_date_str = data.get('fundingDate')  # Get the date as string
        
        # Convert string to date object
        try:
            funding_date = datetime.strptime(funding_date_str, "%Y-%m-%d").date() if funding_date_str else None
        except ValueError:
            return JsonResponse({"error": "Invalid date format. Use MM-DD-YYYY."}, status=400)

        # Create a new Funding instance
        new_funding = Funding(
            source=source,
            restricted=restricted,
            totalAmount=total_amount,
            allocatedAmount=allocated_amount,
            remainingBalance=remaining_balance,
            restrictions=restrictions,
            notes=notes,
            fundingDate=funding_date  # Set the funding date
        )

        # Save the new instance to the database
        new_funding.save()
        return JsonResponse({"message": "Funding added successfully"}, status=201)  # 201 Created
    else:
        response = HttpResponse("Invalid request method")
    response["Access-Control-Allow-Origin"] = "*"
    return response

def grant(request):
    if request.method == "GET":
        response = JsonResponse(list(Grant.objects.values()), safe=False)
    elif request.method == "PUT":
        data = json.loads(request.body)
        name = data.get('name')
        grantor = data.get('grantor')
        grant_amount = float(data.get('grantAmount', 0))  # Default to 0 if not provided
        allocated = float(data.get('allocated', 0))
        remaining = float(data.get('remaining', 0))
        restrictions = data.get('restrictions', '')
        notes = data.get('notes', '')
        due_date_str = data.get('dueDate')  # Get the due date as string
        
        # Convert string to date object
        try:
            due_date = datetime.strptime(due_date_str, "%Y-%m-%d").date() if due_date_str else None
        except ValueError:
            return JsonResponse({"error": "Invalid date format. Use MM-DD-YYYY."}, status=400)

        # Create a new Funding instance
        new_funding = Grant(
            name=name,
            grantor=grantor,
            grantAmount=grant_amount,
            allocated=allocated,
            remaining=remaining,
            restrictions=restrictions,
            dueDate=due_date,  # Set the due date
            notes=notes
        )
        
        # Save the new instance to the database
        new_funding.save()
        return JsonResponse({"message": "Funding added successfully"}, status=201)  # 201 Created
    else:
        response = HttpResponse("Invalid request method")
    response["Access-Control-Allow-Origin"] = "*"
    return response

def incomeStatement(request):
    if request.method == "GET":
        response = JsonResponse(list(IncomeStatement.objects.values()), safe=False)
    elif request.method == "PUT":
        data = json.loads(request.body)
        source = data.get('source')
        restricted_amount = float(data.get('restrictedAmount', 0))  # Default to 0 if not provided
        unrestricted_amount = float(data.get('unrestrictedAmount', 0))  # Default to 0 if not provided
        total_amount = float(data.get('totalAmount', 0))  # Default to 0 if not provided
        
        # Create a new Grant instance
        new_statement = IncomeStatement(
            revenueSource=source,
            restrictedFunds=restricted_amount,
            unrestrictedFunds=unrestricted_amount,
            total=total_amount
        )

        # Save the new instance to the database
        new_statement.save()
        return JsonResponse({"message": "Grant added successfully"}, status=201)  # 201 Created
    else:
        response = HttpResponse("Invalid request method")
    response["Access-Control-Allow-Origin"] = "*"
    return response

def irsFilling(request):
    if request.method == "GET":
        response = JsonResponse(list(IrsFilling.objects.values()), safe=False)
    if request.method == "PUT":
        data = json.loads(request.body)
        filling_type = data.get('fillingType')
        due_date_str = data.get('dueDate')  # Expecting a string date (e.g., '2024-10-13')
        status = data.get('status', '')  # Default to empty string if not provided
        notes = data.get('notes', '')  # Default to empty string if not provided

        # Convert the due date string to a date object
        try:
            due_date = timezone.datetime.strptime(due_date_str, '%Y-%m-%d').date()
        except ValueError:
            return JsonResponse({"error": "Invalid date format. Please use MM-DD-YYYY."}, status=400)

        # Create a new IrsFilling instance
        new_irs_filing = IrsFilling(
            fillingType=filling_type,
            dueDate=due_date,
            status=status,
            notes=notes
        )

        # Save the new instance to the database
        new_irs_filing.save()
        return JsonResponse({"message": "IRS filing added successfully"}, status=201)  # 201 Created
    else:
        response = HttpResponse("Invalid request method")
    response["Access-Control-Allow-Origin"] = "*"
    return response
'''
# views.py

import csv
from django.http import HttpResponse
from django.shortcuts import render
from .forms import CSVUploadForm  # Make sure to import your form
from .models import Funding, Grant, Donor, Budget, IncomeStatement, IrsFilling  # Import your models

def getCSV(request):
    if request.method == 'PUT':
        form = CSVUploadForm(request.PUT, request.FILES)
        if form.is_valid():
            # Get the uploaded file
            csv_file = request.FILES['csv_file']
            # Read the uploaded CSV file
            decoded_file = csv_file.read().decode('utf-8').splitlines()
            reader = csv.reader(decoded_file)

            # Process the CSV data here
            for row in reader:
                # Process the CSV data
                type = form.cleaned_data['type']  # Get the type from the form
                if type == "BUDGET":
                    budget = Budget(
                        programName=row[0],
                        budgetedAmount=float(row[1]),  # Assuming the second column is a float
                        actualSpent=float(row[2]),      # Assuming the third column is a float
                        remainingBalance=float(row[3]),  # Assuming the fourth column is a float
                        notes=row[4]
                    )
                    budget.save()
                elif type == "DONOR":
                    donor = Donor(
                        donorName=row[0],
                        donationDate=row[1],  # Assuming the second column is a date
                        totalAmount=float(row[2]),  # Assuming the third column is a float
                        allocatedAmount=float(row[3]),
                        remainingBalance=float(row[4]),
                        receiptIssued=row[5],
                        followupDate=row[6],
                        formRequired=row[7].lower() == 'true',  # Assuming a string 'True'/'False'
                        acknowledgmentLetterSent=row[8].lower() == 'true',
                        notes=row[9]
                    )
                    donor.save()
                elif type == "FUNDING":
                    funding = Funding(
                        source=row[0],
                        restricted=row[1].lower() == 'true',
                        totalAmount=float(row[2]),
                        allocatedAmount=float(row[3]),
                        remainingBalance=float(row[4]),
                        restrictions=row[5],
                        notes=row[6]
                    )
                    funding.save()
                elif type == "GRANT":
                    grant = Grant(
                        name=row[0],
                        grantor=row[1],
                        grantAmount=float(row[2]),
                        allocated=float(row[3]),
                        remaining=float(row[4]),
                        restrictions=row[5],
                        dueDate=row[6],  # Assuming the due date is in the correct format
                        notes=row[7]
                    )
                    grant.save()
                elif type == "INCOME":
                    income_statement = IncomeStatement(
                        revenueSource=row[0],
                        unrestrictedFunds=float(row[1]),
                        restrictedFunds=float(row[2]),
                        total=float(row[3])
                    )
                    income_statement.save()
                elif type == "IRS":
                    irs = IrsFilling(
                        fillingType=row[0],
                        dueDate=row[1],  # Assuming the due date is in the correct format
                        status=row[2],
                        notes=row[3]
                    )
                    irs.save()
            return HttpResponse('CSV file processed successfully')
    return render(request, 'upload_csv.html', {'form': form})
'''