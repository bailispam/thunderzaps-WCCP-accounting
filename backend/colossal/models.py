from django.db import models


class fundingAccount(models.Model):
    source = models.CharField(max_length=100)
    restricted = models.BooleanField()
    total_amount = models.FloatField()
    allocated_amount = models.FloatField()
    remaining_balance = models.FloatField()
    restrictions = models.CharField(max_length=500)
    notes = models.CharField(max_length=500)
        
    def __str__(self):
        return f"{self.source}-{self.notes[:50]}" 

class grant(models.Model):
    name = models.CharField(max_length=100)
    grantor = models.CharField(max_length=100)
    grant_amount = models.FloatField()
    allocated = models.FloatField()
    remaining = models.FloatField()
    restrictions = models.CharField(max_length=100)
    due_date = models.DateField()
    notes = models.CharField(max_length=500)
        
    def __str__(self):
        return f"{self.name}-{self.notes[:50]}" 
    

class donor(models.Model):
    donor_name = models.CharField(max_length=100)
    donation_date = models.DateField()
    total_amount = models.FloatField()
    allocated_amount = models.FloatField()
    remaining_balance = models.FloatField()
    
    reciept_issued = models.DateField()
    followup_date = models.DateField()

    form_required = models.BooleanField()
    
    acknowledgment_letter_sent = models.BooleanField()
    
    notes = models.CharField(max_length=500) 
        
    def __str__(self):
        return f"{self.donor_name}-{self.notes[:50]}" 
    
    
class budget(models.Model):
    program_name = models.CharField(max_length=100)
    budgeted_amount = models.FloatField()
    actual_spent = models.FloatField()
    remaining_balance = models.FloatField()
    notes = models.CharField(max_length=500)
        
    def __str__(self):
        return f"{self.program_name}-{self.notes[:50]}" 

    
class incomeStatement(models.Model):
    revenue_source = models.CharField(max_length=100)
    unrestricted_funds = models.FloatField()
    restricted_funds = models.FloatField()
    total = models.FloatField()
        
    def __str__(self):
        return f"{self.revenue_source}" 
    
class irsFilling(models.Model):
    filling_type = models.CharField(max_length=100)
    due_date = models.DateField()
    status = models.CharField(max_length=100)
    notes = models.CharField(max_length=100)
        
    def __str__(self):
        return f"{self.filling_type}-{self.notes[:50]}" 