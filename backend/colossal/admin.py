from django.contrib import admin
from .models import Budget, Donor, Funding, Grant, IncomeStatement, IrsFilling

# Register your models here.
admin.site.register(Budget)
admin.site.register(Donor)
admin.site.register(Funding)
admin.site.register(Grant)
admin.site.register(IncomeStatement)
admin.site.register(IrsFilling)