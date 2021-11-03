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
  'indications': {},
  'notes': [],
  'cautions': [],
  'streamline-code': '',    #If streamline authority is available, the streamline code required will be here
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

# Global variables
drugs = {}
data = []
base_path = 'C:/Users/danie/Documents/Programming/work-projects/optom-rx/info/2021-11-01-v3extracts/'

# Isolate the optometry specific medications (by item code) from the PBS list
# For reference, at the time of writing, there are 64 approved optometry PBS medications
item_codes = set()

# Modify path as necessary, e.g. each new month with new release of PBS data
pres_path = base_path + 'Prescriber_type_20211101.txt'

with open(pres_path) as f:
  pres_lines = f.readlines()
  for line in pres_lines:
    # The PBS text file in question is always of the format "drug-name item-code prescriber-type"; any changes to thios format should be made visible on dev.pbs.gov.au Hnce we can search by prescriber type, and extract item code
    line_arr = line.split()
    if line_arr[-1] == 'O':
      item_codes.add(line_arr[-2])
      drugs[line_arr[-2]] = {}


# Using the item codes obtained, search the drug.txt doc for pricing and quantity info
drug_path = base_path + 'drug_20211101.txt'

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
link_path = base_path + 'LinkExtract_20211101.txt'
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
table_path = base_path + 'Pharmacy_PBS_Item_Table_20211101.txt'

with open(table_path) as f:
  table_lines = f.readlines()
  for line in table_lines:
    line_arr = line.strip().split('\t')
    if line_arr[0] in item_codes:
      filtered = list(filter(remove_space, line_arr))
      item = filtered[0]
      # Extract sub-list of up to 15 note ids, and simplify list to only actual IDs (remove blank elements)
      note_ids = list(filter(lambda x: x != '0', filtered[3:18]))
      # Extract sub-list of up to 5 caution ids
      caution_ids = list(filter(lambda x: x != '0', filtered[18:]))
      
      drugs[line_arr[0]]['note-ids'] = note_ids
      drugs[line_arr[0]]['caution-ids'] = caution_ids


# Using the indication ID, finds the relevant indications for a particular drug restriction
res_path = base_path + 'RestrictionExtractDelimited_20211101.txt'

# Produce a sub-dictionary containing only item-code: restriction-id key: value pairs for referencing
res_dict = {}
id_match = {}
for code in drugs.keys():
  id_match[code] = drugs[code]['indication-id']

# Extract all the restriction/indication details for only the relevant IDs in the ophthalmological drugs
with open(res_path) as f:
  res_lines = f.readlines()
  columns = ['indication-id', 'description', 'misc-res-code', 'date-req', 'text-req']
  for line in res_lines:
    line_arr = line.strip().split('\t')
    if line_arr[0] in id_match.values():
      # There is incredibly large whitespace strings within the strings of some restrictions. The following code removes all of the duplicate whitespace
      new_line_arr = list(map(lambda x: " ".join(x.split()), line_arr))

      # Create an intermediary restriction dict to act as a joining database of sorts for drug dicts and indication/restriction details
      res_item = {}
      for i in range(len(columns)):
        if i == 0:
          res_dict[new_line_arr[i]] = {}
        else:
          res_item[columns[i]] = new_line_arr[i]
      
      res_dict[new_line_arr[0]] = res_item

# Add all the generated indication/restriction data to the main drugs dict
for item_code in id_match:
  if id_match[item_code] in res_dict.keys():
    drugs[item_code]['indications'] = res_dict[id_match[item_code]]


# Produce a sub-dictionary containing only item-code: note-id key: value pairs for referencing. Note the values will be arrays, and only those with length > 0 contain note IDs
item_note = {}
note_dict = {}
for code in drugs.keys():
  item_note[code] = drugs[code]['note-ids']

notes_path = base_path + 'NoteExtract_20211101.txt'

# Flatten values array
flat_item_note = []
for sublist in item_note.values():
    for item in sublist:
        flat_item_note.append(item)

# Remove duplicate note IDs
item_note_final = list(dict.fromkeys(flat_item_note))

# Extract all the notes the relevant IDs in the ophthalmological drugs
with open(notes_path) as f:
  notes_lines = f.readlines()
  columns = ['note-id', 'note']
  for line in notes_lines:
    line_arr = line.strip().split('\t')
    if line_arr[0] in item_note_final:
      # Add all relevant notes to the note_dict for later reference when adding to main drugs dict
      note_dict[line_arr[0]] = line_arr[1]

# # Add all the generated notes data to the main drugs dict
for item_code in item_note:
  # Isolate only those item codes with notes
  if len(item_note[item_code]) > 0:
    # Iterate through all the note IDs, and append each corresponding note to the drug notes array by first forming a temp notes array, and reseting this each loop
    notes = []
    for note_id in item_note[item_code]:
      notes.append(note_dict[note_id])
      drugs[item_code]['notes'] = notes


# Produce a sub-dictionary containing only item-code: caution-id key: value pairs for referencing. Note the values will be arrays, and only those with length > 0 contain caution IDs
item_caution = {}
caution_dict = {}
for code in drugs.keys():
  item_caution[code] = drugs[code]['caution-ids']

caution_path = base_path + 'CautionExtract_20211101.txt'

# Flatten caution array
flat_item_caution = []
for sublist in item_caution.values():
    for item in sublist:
        flat_item_caution.append(item)

# # Remove duplicate note IDs
item_caution_final = list(dict.fromkeys(flat_item_caution))

# # Extract all the caution messages for the relevant IDs in the ophthalmological drugs
with open(caution_path) as f:
  caution_lines = f.readlines()
  columns = ['caution-id', 'caution']
  for line in caution_lines:
    line_arr = line.strip().split('\t')
    if line_arr[0] in item_caution_final:
      # Add all relevant notes to the note_dict for later reference when adding to main drugs dict
      caution_dict[line_arr[0]] = line_arr[1]

# Add all the generated caution data to the main drugs dict
for item_code in item_caution:
  # Isolate only those item codes with cautions
  if len(item_caution[item_code]) > 0:
    # Iterate through all the note IDs, and append each corresponding caution to the drug caution array by first forming a temp caution array, and reseting this each loop
    cautions = []
    for caution_id in item_caution[item_code]:
      cautions.append(caution_dict[caution_id])
      drugs[item_code]['cautions'] = cautions


# Data on which drugs are available with streamlined authority
stream_path = base_path + 'streamlined_20211101.txt'

with open(stream_path) as f:
  stream_lines = f.readlines()
  for line in stream_lines:
    # This PBS text file is always of the format "drug-name item-code indication-code"
    line_arr = line.strip().split()
    if line_arr[-2] in item_codes:
      drugs[line_arr[-2]]['streamline-code'] = line_arr[-1]

