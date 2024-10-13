import json

class FundAccounting:
    def __init__(self, json_string):
        self._funds = json.loads(json_string) # list of dictionaries

    def sum_total(self, value):
        total = 0
        for row in self._funds:
            total += row[value]
        return total
    
    def calculate_remainder(self):
        for row in self._funds:
            if row["totalAmount"] > row["allocatedAmount"]:
                row["remainingBalance"] = row["totalAmount"] - row["allocatedAmount"]
            else:
                print("ERROR: allocated amount is larger than total fund amount")

    def total_dict(self):
        self.sum_total("")