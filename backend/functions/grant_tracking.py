'''
Grant_tracking.py
Saturday october 12 2024
'''

import json
import sqlite3
import csv
'''
The class grant tracking is meant to represent the information gathered from a grant tracking
accounting document filled by the front end
It takes a json string created from user input and gathers information
'''
class GrantTracking:
    # constructor
    def __init__(self, json_string, dragfile = None):

        '''
        The grant tracking class is initally constructed by 
        essential financial information gathered from the grant tracking
        spreadsheet info, or a csv file.

        Json loads works with the format
        [{k:v, k1:v1, ...} , {k:v, k1:v1, ...}] representing [row1, row2, ...]
        such that any given key can be iterated linearly.+
        '''
        
        self._grantTrack = json.loads(json_string) # the json passed by the client call to the server is parsed as builtin list of dictionaries
        if dragfile == None: 
            self._new_dict = {"finalGrant" : self.sum_total("grantAmount") ,  "finalAllocated" : self.sum_total("totalAllocated")}
            
            # run the process of ensuring that the remainder information exists
            self.calculate_remainder()
            self._grantTrack["totalRemainingBalance"] = self.sum_total("remainingBalance")

            # boolean to determine wether or not the given table is balanced. Does it by making sure the total is equal to the other two values
            self._grantTrack["isTotalBalanced"]= self._totalGrant == self._totalAllocated + self._totalRemainder    
        else:
            self._grantTrack = json.loads(json_string) + []
        
    
    def sum_total(self, value_searched):
        '''
        This function sums the total of the value searched throughout a column
        this is, it iterates downwards through the table at the specified field.
        '''
        total = 0
        for row in self._grantTrack:
            total += row[value_searched]
        return total

    def calculate_remainder(self):
        '''
        The calculate remainder function checks that the balance 
        '''
        for row in self._grantTrack:
            if row["totalAllocated"] < row["grantAmount"]:
                row["remainingBalance"] = row["grantAmount"] - row["totalAllocated"]
            else:
                print("ERROR: allocated amount is larger than total fund amount")




    def csv_scan_totals(self,fname):
        '''
        This function takes the file name or the file object, this being a csv, and iterates it in order
        to calculate the extra information that was not gathered as a csv.
        '''
        with open(fname) as csv_file:
            result = []
            totals = {"totalGrant": 0, "totalAllocated": 0, "remainingBalance": 0}
            scanner =  csv.reader(csv_file)
            i = 0
            for line in scanner:
                subresult = {"id": 0, "source": None, "restricted": None, "totalAmount": 0, "allocatedAmount": 0, "remainingBalance": 0, "restrictions": None, "notes": None}

                # process the existing lines
                if i == 0:
                    firstline = line   
                else:
                    for n in range(len(line)):
                        subresult[firstline[n]] = line[n]

                result.append(subresult)

                # add the totals
                try: 
                    totals["totalGrant"] += float(line[2])
                except:
                    pass
                try:
                    totals["totalAllocated"] += float(line[3])
                except:
                    pass
                try:
                    totals["remainingBalance"] += float(line[4])
                except:
                    pass
            # reacommodate balance 
            self.calculate_remainder()

        csv_file.close()
        return result + [totals]
                

    def dump_to_sql(self):
        return json.dumps(self.grantTrack)
        
   
    

