from django.contrib import admin
from .models import budget,donor,funding_account,grant,income_statement,irsFilling

# Register your models here.
admin.site.register(budget)
admin.site.register(donor)
admin.site.register(funding_account)
admin.site.register(grant)
admin.site.register(income_statement)
admin.site.register(irsFilling)