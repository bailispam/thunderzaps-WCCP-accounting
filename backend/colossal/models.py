from django.db import models

class Funding(models.Model):
    source = models.CharField(max_length=100)
    restricted = models.BooleanField()
    totalAmount = models.FloatField()
    allocatedAmount = models.FloatField()
    remainingBalance = models.FloatField()
    restrictions = models.CharField(max_length=500, default="")
    notes = models.CharField(max_length=500, default="")
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"{self.source}-{self.notes[:50]}" 

class Grant(models.Model):
    name = models.CharField(max_length=100)
    grantor = models.CharField(max_length=100)
    grantAmount = models.FloatField()
    allocated = models.FloatField()
    remaining = models.FloatField()
    restrictions = models.CharField(max_length=100, default="")
    dueDate = models.DateField()
    notes = models.CharField(max_length=500, default="")
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"{self.name}-{self.notes[:50]}" 
    

class Donor(models.Model):
    donorName = models.CharField(max_length=100)
    donationDate = models.DateField()
    totalAmount = models.FloatField()
    allocatedAmount = models.FloatField()
    remainingBalance = models.FloatField()
    
    receiptIssued = models.DateField()
    followupDate = models.DateField()

    formRequired = models.BooleanField()
    
    acknowledgmentLetterSent = models.BooleanField()
    
    notes = models.CharField(max_length=500, default="") 
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"{self.donorName}-{self.notes[:50]}" 
    
    
class Budget(models.Model):
    programName = models.CharField(max_length=100)
    budgetedAmount = models.FloatField()
    actualSpent = models.FloatField()
    remainingBalance = models.FloatField()
    notes = models.CharField(max_length=500, default="")
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"{self.programName}-{self.notes[:50]}" 

    
class IncomeStatement(models.Model):
    revenueSource = models.CharField(max_length=100)
    unrestrictedFunds = models.FloatField()
    restrictedFunds = models.FloatField()
    total = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"{self.revenueSource}" 
    
class IrsFilling(models.Model):
    fillingType = models.CharField(max_length=100)
    dueDate = models.DateField()
    status = models.CharField(max_length=100, default="")
    notes = models.CharField(max_length=100, default="")
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"{self.fillingType}-{self.notes[:50]}" 