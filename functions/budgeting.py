'''
budgeting.py
Saturday october 12 2024
'''

import json

class Budgeting:
    # constructor
    def __init__(self, json_string):
        self._budget = json.loads(json_string) 
        
    def sum_total(self, value):
        total = 0
        for row in self._funds:
            total += row[value]
        return total

    def calculate_remainder(self):
        for row in self._funds:
            if row["budgetedAmount"] > row["actualSpent"]:
                row["remainingBalance"] = row["budgetedAmount"] - row["actualSpent"]
            else:
                print("ERROR: actual spent is larger than budgeted amount")



            
