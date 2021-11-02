# PBS fields in drug.txt
# data = {
#   'program-code': '',
#   'atc-level-code': '',
#   'atc-type': '',
#   'atc-print-option': '',
#   'item-code': '',
#   'restriction-flag': '',
#   'has-caution': '',
#   'has-note': '',
#   'mq': '',    # maximum quantity
#   'repeats': '',
#   'manufacturer-code': '',
#   'pack-size': '',
#   'markup-band': '',
#   'fee-code': '',
#   'dangerous-drug-code': '',
#   'brand-premium': '',
#   'therapeutic-premium': '',
#   'cp2p': '',    # commonwealth price to pharmacy
#   'cdpmq': '',   # commonwealth dispensed price for maximum quantity
#   'lp2p': '',    # lowest price to pharmacist
#   'ldpmq': '',   # lowest dispensed price for maximum quantity
#   'mp2p': '',    # manufacturer price to pharmacist
#   'mdpmq': '',   # manufacturer dispensed price for maximum quantity
#   'mrvsn': '',   # maximum recordable value for safety net
#   'bioequivalence': '',
#   'brand-name': '',
#   'mp-pt': '',   # MP preferred term
#   'tpuu-or-mpp-pt': '',    #TPUU or MPP preferred term
# }

# Anatomical Therapeutic Chemical (ATC) classification index is used to classify drugs based on area of intended use. 
# The ATC level code is a combination of flags that categorise a drug, e.g.
# Program code - mainly/all will be GE => 'Generally available pharmaceutical benefits'

# For the prescriber_type.txt
pres_fields = [
  'drug-name',
  'item-code',
  'prescriber-type'
]
# This can be searched using the 'O' prescriber type, and then grabbing the item-codes to then look up more details in drug.txt and restrictions.txt

data = []

# Isolate the optometry specific medications (by item code) from the PBS list
# For reference, at the time of writing, there are 64 approved optometry PBS medications
item_codes = set()
# item_set = set(item_codes)

# Modify path as necessary, e.g. each new month with new release of PBS data
pres_path = 'C:/Users/danie/Documents/Programming/work-projects/optom-rx/info/Prescriber_type_20211101.txt'
with open(pres_path) as f:
  pres_lines = f.readlines()
  for line in pres_lines:
    # The PBS text file in question is always of the format "drug-name item-code prescriber-type"; any changes to thios format should be made visible on dev.pbs.gov.au Hnce we can search by prescriber type, and extract item code
    line_arr = line.split()
    if line_arr[-1] == 'O':
      item_codes.add(line_arr[-2])

print(item_codes)

# Using the item codes obtained, search the drug.txt doc for pricing and quantity info
drug_path = 'C:/Users/danie/Documents/Programming/work-projects/optom-rx/info/drug_20211101.txt'
with open(drug_path) as f:
  drug = {}
  drug_lines = f.readlines()
  columns = drug_lines[0].strip().split('!')
  for line in drug_lines:
    # Drug.txt uses ! markers as delimmiters, and the fields are listed above in the drug fields array. Not all of these are important information in the context of this app, but all will be extracted for now
    line_arr = line.strip().split('!')
    if line_arr[4] in item_codes:
      for i in range(len(columns)):
        # Add all data columns under the respective names for every individual medication/drug
        drug[columns[i]] = line_arr[i]
      data.append(drug)
      # Must reset drug variable
      drug = {}

for drug in data:
  print(drug['brand-name'])

# print(data[1]['item-code'])
# Write mode (switch the 'w' to an 'a' for append mode)\
# counter = 0
# with open('C:/Users/danie/Documents/Programming/work-projects/optom-rx/info/pbs-format.txt', 'w') as f:
#   for field in pbs.split('!'):
#     print(fields[counter], '\t', field, file=f)
#     counter += 1


