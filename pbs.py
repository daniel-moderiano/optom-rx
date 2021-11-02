# All PBS data fields (including those not entirely relevant)
all_fields = {
  'program-code': '',
  'atc-level-code': '',
  'atc-type': '',
  'atc-print-option': '',
  'item-code': '',
  'restriction-flag': '',
  'has-caution': '',
  'has-note': '',
  'mq': '',    # maximum quantity
  'repeats': '',
  'manufacturer-code': '',
  'pack-size': '',
  'markup-band': '',
  'fee-code': '',
  'dangerous-drug-code': '',
  'brand-premium': '',
  'therapeutic-premium': '',
  'cp2p': '',    # commonwealth price to pharmacy
  'cdpmq': '',   # commonwealth dispensed price for maximum quantity
  'lp2p': '',    # lowest price to pharmacist
  'ldpmq': '',   # lowest dispensed price for maximum quantity
  'mp2p': '',    # manufacturer price to pharmacist
  'mdpmq': '',   # manufacturer dispensed price for maximum quantity
  'mrvsn': '',   # maximum recordable value for safety net
  'bioequivalence': '',
  'brand-name': '',
  'mp-pt': '',   # MP preferred term
  'tpuu-or-mpp-pt': '',    #TPUU or MPP preferred term
  'indication-id': '',    # Used to find the indications of a restricted drug
  'increase-code': '',    # Incidates whether the indication applies to normal and/or increased drug quantities
  'note-ids': [],    # Array of up to 15 note IDs; can be used to cross reference note list
  'caution_ids': [],    # Array of up to 5 caution IDs; can be used to cross reference caution list
}


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

# Global variables
drugs = {}
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
      drugs[line_arr[-2]] = {}

# Using the item codes obtained, search the drug.txt doc for pricing and quantity info
drug_path = 'C:/Users/danie/Documents/Programming/work-projects/optom-rx/info/drug_20211101.txt'
with open(drug_path) as f:
  drug_lines = f.readlines()
  columns = drug_lines[0].strip().split('!')
  for line in drug_lines:
    # Drug.txt uses ! markers as delimmiters, and the fields are listed above in the drug fields array. Not all of these are important information in the context of this app, but all will be extracted for now
    line_arr = line.strip().split('!')
    if line_arr[4] in item_codes:
      # Must reset drug variable
      drug = { **all_fields }
      for i in range(len(columns)):
        # Add all data columns under the respective names for every individual medication/drug
        drug[columns[i]] = line_arr[i]
      drugs[line_arr[4]] = drug


# Using the item code, find the indication IDs for the restrictions on the meds. Note that only authorised medications will have indication IDs
link_path = 'C:/Users/danie/Documents/Programming/work-projects/optom-rx/info/2021-11-01-v3extracts/LinkExtract_20211101.txt'
with open(link_path) as f:
  link_lines = f.readlines()
  columns = link_lines[0].strip().split('!')
  for line in link_lines:
    line_arr = line.strip().split('\t')
    if line_arr[0] in item_codes:
      # Grab only the required columns from this datasheet
      drugs[line_arr[0]]['indication-id'] = line_arr[1]
      drugs[line_arr[0]]['increase-code'] = line_arr[2]


# Custom filtering function to remove unwanted whitespace from PBS item table text file
def remove_space(element):
  chars = ['', '\t', '        ']
  if element not in chars:
    return True
  else:
    return False

# Using the item code, find the note and caution IDs, which may be singular or multiple
table_path = 'C:/Users/danie/Documents/Programming/work-projects/optom-rx/info/2021-11-01-v3extracts/Pharmacy_PBS_Item_Table_20211101.txt'
with open(table_path) as f:
  table_lines = f.readlines()
  for line in table_lines:
    line_arr = line.strip().split('\t')
    if line_arr[0] in item_codes:
      filtered = list(filter(remove_space, line_arr))
      item = filtered[0]
      # Extract sub-list of up to 15 note ids
      note_ids = filtered[3:18]
      # Extract sub-list of up to 5 caution ids
      caution_ids = filtered[18:]
      
      drugs[line_arr[0]]['note-ids'] = note_ids
      drugs[line_arr[0]]['caution-ids'] = caution_ids


# Using the indication ID, finds the relevant indications for a particular drug restriction
res_path = 'C:/Users/danie/Documents/Programming/work-projects/optom-rx/info/2021-11-01-v3extracts/RestrictionExtractDelimited_20211101.txt'

# Produce a sub-dictionary containing only item-code: restriction-id key: value pairs for referencing
id_match = {}
for code in drugs.keys():
  id_match[code] = drugs[code]['indication-id']

with open(res_path) as f:
  res_lines = f.readlines()
  for line in res_lines:
    line_arr = line.strip().split('\t')
    if line_arr[0] in id_match.values():
      # There is incredibly large whitespace strings within the strings of some restrictions. The following code removes all of the duplicate whitespace
      new_arr = list(map(lambda x: " ".join(x.split()), line_arr))
      print(new_arr)
      
print(id_match)
# for code in drugs.keys():
#   print(drugs[code]['brand-name'], drugs[code]['note-ids'], drugs[code]['caution-ids'])

