# PBS fields in drug.txt
fields = [
  'program-code',
  'atc-level-code',
  'atc-type',
  'atc-print-option',
  'item-code',
  'restriction-flag',
  'has-caution',
  'has-note',
  'mq',    # maximum quantity
  'repeats',
  'manufacturer-code',
  'pack-size',
  'markup-band',
  'fee-code',
  'dangerous-drug-code',
  'brand-premium',
  'therapeutic-premium',
  'cp2p',    # commonwealth price to pharmacy
  'cdpmq',   # commonwealth dispensed price for maximum quantity
  'lp2p',    # lowest price to pharmacist
  'ldpmq',   # lowest dispensed price for maximum quantity
  'mp2p',    # manufacturer price to pharmacist
  'mdpmq',   # manufacturer dispensed price for maximum quantity
  'mrvsn',   # maximum recordable value for safety net
  'bioequivalence',
  'brand-name',
  'mp-pt',   # MP preferred term
  'tpuu-or-mpp-pt'    #TPUU or MPP preferred term
]

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

item_codes = []

# Isolate the optometry specific medications from the PBS list
pbs_path = 'C:/Users/danie/Documents/Programming/work-projects/optom-rx/info/Prescriber_type_20211101.txt'
with open(pbs_path) as f:
  pbs_lines = f.readlines()
  for line in pbs_lines:
    # The PBS text file in question is always of the format "drug-name item-code prescriber-type"; any changes to thios format should be made visible on dev.pbs.gov.au Hnce we can search by prescriber type, and extract item code
    line_arr = line.split()
    if line_arr[-1] == 'O':
      item_codes.append(line_arr[-2])

print(item_codes)

# Write mode (switch the 'w' to an 'a' for append mode)\
# counter = 0
# with open('C:/Users/danie/Documents/Programming/work-projects/optom-rx/info/pbs-format.txt', 'w') as f:
#   for field in pbs.split('!'):
#     print(fields[counter], '\t', field, file=f)
#     counter += 1


