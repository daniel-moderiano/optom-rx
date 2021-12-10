// This object is the direct output of PBS.py, in the form of a python dict, or JS object.
// This PBS 'raw' data is used for the firebase backend, however for other features such as drug autocomplete, the data must be 'distilled' into the relevant fields, and subsequently sorted in several ways

const PBSData = {
  "5501M": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5501M",
      "restriction-flag": "R",
      "has-caution": "",
      "has-note": "",
      "mq": "1",
      "repeats": "0",
      "manufacturer-code": "IX",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "21.45",
      "cdpmq": "33.53",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "34.83",
      "bioequivalence": "a",
      "brand-name": [
          "ViruPOS",
          "XOROX"
      ],
      "mp-pt": "aciclovir",
      "tpuu-or-mpp-pt": "aciclovir 3% eye ointment, 4.5 g",
      "indication-id": "5964",
      "increase-code": "2",
      "note-ids": [],
      "caution_ids": [],
      "indications": {
          "description": "Herpes simplex keratitis",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01AD03",
      "caution-ids": []
  },
  "5502N": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5502N",
      "restriction-flag": "A",
      "has-caution": "",
      "has-note": "",
      "mq": "3",
      "repeats": "5",
      "manufacturer-code": "AQ",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "6.98",
      "cdpmq": "33.01",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "34.31",
      "bioequivalence": "",
      "brand-name": [
          "Poly Gel"
      ],
      "mp-pt": "carbomer-974P",
      "tpuu-or-mpp-pt": "carbomer-974P 0.3% eye gel, 30 x 500 mg unit doses",
      "indication-id": "6172",
      "increase-code": "2",
      "note-ids": [],
      "caution_ids": [],
      "indications": {
          "description": "Severe dry eye syndrome Clinical criteria: * Patient must be sensitive to preservatives in multi-dose eye drops.",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [],
      "cautions": [],
      "streamline-code": "6172",
      "atc": "S01XA20",
      "caution-ids": []
  },
  "5503P": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5503P",
      "restriction-flag": "R",
      "has-caution": "",
      "has-note": "",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "UO",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "3.64",
      "therapeutic-premium": "0.00",
      "cp2p": "3.03",
      "cdpmq": "15.11",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "6.67",
      "mdpmq": "18.75",
      "mrvsn": "16.41",
      "bioequivalence": "a",
      "brand-name": [
          "Optifresh eye gel",
          "PAA",
          "Viscotears"
      ],
      "mp-pt": "carbomer-980",
      "tpuu-or-mpp-pt": "carbomer-980 0.2% eye gel, 10 g",
      "indication-id": "6153",
      "increase-code": "2",
      "note-ids": [],
      "caution_ids": [],
      "indications": {
          "description": "Severe dry eye syndrome, including Sjogren's syndrome",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01XA20",
      "caution-ids": []
  },
  "5504Q": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5504Q",
      "restriction-flag": "A",
      "has-caution": "",
      "has-note": "",
      "mq": "3",
      "repeats": "5",
      "manufacturer-code": "UO",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "8.60",
      "cdpmq": "37.87",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "39.17",
      "bioequivalence": "",
      "brand-name": [
          "Viscotears Gel PF"
      ],
      "mp-pt": "carbomer-980",
      "tpuu-or-mpp-pt": "carbomer-980 0.2% eye drops, 30 x 0.6 mL unit doses",
      "indication-id": "6172",
      "increase-code": "2",
      "note-ids": [],
      "caution_ids": [],
      "indications": {
          "description": "Severe dry eye syndrome Clinical criteria: * Patient must be sensitive to preservatives in multi-dose eye drops.",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [],
      "cautions": [],
      "streamline-code": "6172",
      "atc": "S01XA20",
      "caution-ids": []
  },
  "5505R": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5505R",
      "restriction-flag": "A",
      "has-caution": "",
      "has-note": "",
      "mq": "3",
      "repeats": "5",
      "manufacturer-code": "PP",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "5.86",
      "cdpmq": "29.65",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "30.95",
      "bioequivalence": "a",
      "brand-name": [
          "Celluvisc",
          "Optifresh Plus"
      ],
      "mp-pt": "carmellose sodium",
      "tpuu-or-mpp-pt": "carmellose sodium 1% eye drops, 30 x 0.4 mL unit doses",
      "indication-id": "6172",
      "increase-code": "2",
      "note-ids": [],
      "caution_ids": [],
      "indications": {
          "description": "Severe dry eye syndrome Clinical criteria: * Patient must be sensitive to preservatives in multi-dose eye drops.",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [],
      "cautions": [],
      "streamline-code": "6172",
      "atc": "S01XA20",
      "caution-ids": []
  },
  "5506T": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5506T",
      "restriction-flag": "A",
      "has-caution": "",
      "has-note": "",
      "mq": "3",
      "repeats": "5",
      "manufacturer-code": "PP",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "5.86",
      "cdpmq": "29.65",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "30.95",
      "bioequivalence": "a",
      "brand-name": [
          "Cellufresh",
          "Optifresh Tears"
      ],
      "mp-pt": "carmellose sodium",
      "tpuu-or-mpp-pt": "carmellose sodium 0.5% eye drops, 30 x 0.4 mL unit doses",
      "indication-id": "6172",
      "increase-code": "2",
      "note-ids": [],
      "caution_ids": [],
      "indications": {
          "description": "Severe dry eye syndrome Clinical criteria: * Patient must be sensitive to preservatives in multi-dose eye drops.",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [],
      "cautions": [],
      "streamline-code": "6172",
      "atc": "S01XA20",
      "caution-ids": []
  },
  "5507W": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5507W",
      "restriction-flag": "R",
      "has-caution": "",
      "has-note": "",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "AG",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "3.15",
      "cdpmq": "15.23",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "16.53",
      "bioequivalence": "",
      "brand-name": [
          "Refresh Tears Plus"
      ],
      "mp-pt": "carmellose sodium",
      "tpuu-or-mpp-pt": "carmellose sodium 0.5% eye drops, 15 mL",
      "indication-id": "6120",
      "increase-code": "2",
      "note-ids": [],
      "caution_ids": [],
      "indications": {
          "description": "Severe dry eye syndrome, including Sjogren's syndrome",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01XA20",
      "caution-ids": []
  },
  "5508X": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5508X",
      "restriction-flag": "R",
      "has-caution": "",
      "has-note": "",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "AG",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "3.15",
      "cdpmq": "15.23",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "16.53",
      "bioequivalence": "",
      "brand-name": [
          "Refresh Liquigel"
      ],
      "mp-pt": "carmellose sodium",
      "tpuu-or-mpp-pt": "carmellose sodium 1% eye drops, 15 mL",
      "indication-id": "6120",
      "increase-code": "2",
      "note-ids": [],
      "caution_ids": [],
      "indications": {
          "description": "Severe dry eye syndrome, including Sjogren's syndrome",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01XA20",
      "caution-ids": []
  },
  "5513E": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5513E",
      "restriction-flag": "U",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "0",
      "manufacturer-code": "AG",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "3.16",
      "cdpmq": "15.24",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "16.54",
      "bioequivalence": "",
      "brand-name": [
          "FML Liquifilm"
      ],
      "mp-pt": "fluorometholone",
      "tpuu-or-mpp-pt": "fluorometholone 0.1% eye drops, 5 mL",
      "indication-id": "",
      "increase-code": "",
      "note-ids": [
          "13615",
          "13290"
      ],
      "caution_ids": [],
      "indications": {},
      "notes": [
          "No applications for increased maximum quantities will be authorised.",
          "No applications for increased repeats will be authorised."
      ],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01BA07",
      "caution-ids": []
  },
  "5516H": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5516H",
      "restriction-flag": "U",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "0",
      "manufacturer-code": "AS",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "5.48",
      "cdpmq": "17.56",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "18.86",
      "bioequivalence": "",
      "brand-name": [
          "Hycor"
      ],
      "mp-pt": "hydrocortisone acetate",
      "tpuu-or-mpp-pt": "hydrocortisone acetate 1% eye ointment, 5 g",
      "indication-id": "",
      "increase-code": "",
      "note-ids": [
          "13615",
          "13290"
      ],
      "caution_ids": [],
      "indications": {},
      "notes": [
          "No applications for increased maximum quantities will be authorised.",
          "No applications for increased repeats will be authorised."
      ],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01BA02",
      "caution-ids": []
  },
  "5517J": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5517J",
      "restriction-flag": "R",
      "has-caution": "",
      "has-note": "",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "AF",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "3.53",
      "cdpmq": "15.61",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "16.91",
      "bioequivalence": "",
      "brand-name": [
          "Methopt"
      ],
      "mp-pt": "hypromellose",
      "tpuu-or-mpp-pt": "hypromellose 0.5% eye drops, 15 mL",
      "indication-id": "6120",
      "increase-code": "2",
      "note-ids": [],
      "caution_ids": [],
      "indications": {
          "description": "Severe dry eye syndrome, including Sjogren's syndrome",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01XA20",
      "caution-ids": []
  },
  "5519L": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5519L",
      "restriction-flag": "R",
      "has-caution": "",
      "has-note": "",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "IQ",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "3.53",
      "cdpmq": "15.61",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "16.91",
      "bioequivalence": "a",
      "brand-name": [
          "Genteal gel",
          "HPMC PAA"
      ],
      "mp-pt": "hypromellose + carbomer-980",
      "tpuu-or-mpp-pt": "hypromellose 0.3% + carbomer-980 0.2% eye gel, 10 g",
      "indication-id": "6120",
      "increase-code": "2",
      "note-ids": [],
      "caution_ids": [],
      "indications": {
          "description": "Severe dry eye syndrome, including Sjogren's syndrome",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01XA20",
      "caution-ids": []
  },
  "5520M": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5520M",
      "restriction-flag": "R",
      "has-caution": "",
      "has-note": "",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "IQ",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "3.70",
      "cdpmq": "15.78",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "17.08",
      "bioequivalence": "a",
      "brand-name": [
          "Tears Naturale",
          "Poly-Tears"
      ],
      "mp-pt": "dextran-70 + hypromellose",
      "tpuu-or-mpp-pt": "dextran-70 0.1% + hypromellose 0.3% eye drops, 15 mL",
      "indication-id": "6120",
      "increase-code": "2",
      "note-ids": [],
      "caution_ids": [],
      "indications": {
          "description": "Severe dry eye syndrome, including Sjogren's syndrome",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01XA20",
      "caution-ids": []
  },
  "5521N": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5521N",
      "restriction-flag": "A",
      "has-caution": "",
      "has-note": "",
      "mq": "3",
      "repeats": "5",
      "manufacturer-code": "AQ",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "8.30",
      "cdpmq": "36.97",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "38.27",
      "bioequivalence": "",
      "brand-name": [
          "Bion Tears"
      ],
      "mp-pt": "dextran-70 + hypromellose",
      "tpuu-or-mpp-pt": "dextran-70 0.1% + hypromellose 0.3% eye drops, 28 x 0.4 mL unit doses",
      "indication-id": "6172",
      "increase-code": "2",
      "note-ids": [],
      "caution_ids": [],
      "indications": {
          "description": "Severe dry eye syndrome Clinical criteria: * Patient must be sensitive to preservatives in multi-dose eye drops.",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [],
      "cautions": [],
      "streamline-code": "6172",
      "atc": "S01XA20",
      "caution-ids": []
  },
  "5522P": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5522P",
      "restriction-flag": "U",
      "has-caution": "",
      "has-note": "",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "PE",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "12.33",
      "cdpmq": "24.41",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "25.71",
      "bioequivalence": "a",
      "brand-name": [
          "Refresh Night Time",
          "Poly Visc",
          "Ircal"
      ],
      "mp-pt": "paraffin",
      "tpuu-or-mpp-pt": "paraffin 1 g/g eye ointment, 2 x 3.5 g",
      "indication-id": "",
      "increase-code": "",
      "note-ids": [],
      "caution_ids": [],
      "indications": {},
      "notes": [],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01XA20",
      "caution-ids": []
  },
  "5523Q": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5523Q",
      "restriction-flag": "U",
      "has-caution": "",
      "has-note": "",
      "mq": "2",
      "repeats": "5",
      "manufacturer-code": "IQ",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "6.44",
      "cdpmq": "24.96",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "26.26",
      "bioequivalence": "",
      "brand-name": [
          "Poly Visc"
      ],
      "mp-pt": "paraffin",
      "tpuu-or-mpp-pt": "paraffin 1 g/g eye ointment, 3.5 g",
      "indication-id": "",
      "increase-code": "",
      "note-ids": [],
      "caution_ids": [],
      "indications": {},
      "notes": [],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01XA20",
      "caution-ids": []
  },
  "5524R": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5524R",
      "restriction-flag": "R",
      "has-caution": "",
      "has-note": "",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "AQ",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "3.16",
      "cdpmq": "15.24",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "16.54",
      "bioequivalence": "",
      "brand-name": [
          "Systane"
      ],
      "mp-pt": "polyethylene glycol-400 + propylene glycol",
      "tpuu-or-mpp-pt": "polyethylene glycol-400 0.4% + propylene glycol 0.3% eye drops, 15 mL",
      "indication-id": "6120",
      "increase-code": "2",
      "note-ids": [],
      "caution_ids": [],
      "indications": {
          "description": "Severe dry eye syndrome, including Sjogren's syndrome",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01XA20",
      "caution-ids": []
  },
  "5526W": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5526W",
      "restriction-flag": "R",
      "has-caution": "",
      "has-note": "",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "PE",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "3.53",
      "cdpmq": "15.61",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "16.91",
      "bioequivalence": "a",
      "brand-name": [
          "Liquifilm Tears",
          "PVA Tears"
      ],
      "mp-pt": "polyvinyl alcohol",
      "tpuu-or-mpp-pt": "polyvinyl alcohol 1.4% eye drops, 15 mL",
      "indication-id": "6120",
      "increase-code": "2",
      "note-ids": [],
      "caution_ids": [],
      "indications": {
          "description": "Severe dry eye syndrome, including Sjogren's syndrome",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01XA20",
      "caution-ids": []
  },
  "5532E": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5532E",
      "restriction-flag": "A",
      "has-caution": "",
      "has-note": "",
      "mq": "2",
      "repeats": "5",
      "manufacturer-code": "AQ",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "9.77",
      "cdpmq": "31.62",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "32.92",
      "bioequivalence": "",
      "brand-name": [
          "Systane"
      ],
      "mp-pt": "polyethylene glycol-400 + propylene glycol",
      "tpuu-or-mpp-pt": "polyethylene glycol-400 0.4% + propylene glycol 0.3% eye drops, 28 x 0.8 mL unit doses",
      "indication-id": "6172",
      "increase-code": "2",
      "note-ids": [],
      "caution_ids": [],
      "indications": {
          "description": "Severe dry eye syndrome Clinical criteria: * Patient must be sensitive to preservatives in multi-dose eye drops.",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [],
      "cautions": [],
      "streamline-code": "6172",
      "atc": "S01XA20",
      "caution-ids": []
  },
  "5533F": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5533F",
      "restriction-flag": "U",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "0",
      "manufacturer-code": "NV",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "3.16",
      "cdpmq": "15.24",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "16.54",
      "bioequivalence": "",
      "brand-name": [
          "Flarex"
      ],
      "mp-pt": "fluorometholone acetate",
      "tpuu-or-mpp-pt": "fluorometholone acetate 0.1% eye drops, 5 mL",
      "indication-id": "",
      "increase-code": "",
      "note-ids": [
          "13615",
          "13290"
      ],
      "caution_ids": [],
      "indications": {},
      "notes": [
          "No applications for increased maximum quantities will be authorised.",
          "No applications for increased repeats will be authorised."
      ],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01BA07",
      "caution-ids": []
  },
  "5534G": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5534G",
      "restriction-flag": "U",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "PE",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "11.93",
      "cdpmq": "24.01",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "25.31",
      "bioequivalence": "a",
      "brand-name": [
          "Alphagan",
          "Enidin"
      ],
      "mp-pt": "brimonidine",
      "tpuu-or-mpp-pt": "brimonidine tartrate 0.2% eye drops, 5 mL",
      "indication-id": "",
      "increase-code": "",
      "note-ids": [
          "14807"
      ],
      "caution_ids": [],
      "indications": {},
      "notes": [
          " For prescribing in accordance with Optometry Board of Australia guidelines."
      ],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01EA05",
      "caution-ids": []
  },
  "5535H": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5535H",
      "restriction-flag": "R",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "AG",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "17.05",
      "cdpmq": "29.13",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "30.43",
      "bioequivalence": "",
      "brand-name": [
          "Combigan"
      ],
      "mp-pt": "brimonidine + timolol",
      "tpuu-or-mpp-pt": "brimonidine tartrate 0.2% + timolol 0.5% eye drops, 5 mL",
      "indication-id": "5038",
      "increase-code": "2",
      "note-ids": [
          "14807"
      ],
      "caution_ids": [],
      "indications": {
          "description": "Elevated intra-ocular pressure Clinical criteria: * The condition must have been inadequately controlled with monotherapy, AND * Patient must have open-angle glaucoma; OR * Patient must have ocular hypertension.",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [
          " For prescribing in accordance with Optometry Board of Australia guidelines."
      ],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01EA",
      "caution-ids": []
  },
  "5536J": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5536J",
      "restriction-flag": "U",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "NV",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "5.35",
      "cdpmq": "17.43",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "18.73",
      "bioequivalence": "",
      "brand-name": [
          "Isopto Carpine"
      ],
      "mp-pt": "pilocarpine",
      "tpuu-or-mpp-pt": "pilocarpine hydrochloride 1% eye drops, 15 mL",
      "indication-id": "",
      "increase-code": "",
      "note-ids": [
          "14807"
      ],
      "caution_ids": [],
      "indications": {},
      "notes": [
          " For prescribing in accordance with Optometry Board of Australia guidelines."
      ],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01EB01",
      "caution-ids": []
  },
  "5537K": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5537K",
      "restriction-flag": "U",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "NV",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "6.40",
      "cdpmq": "18.48",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "19.78",
      "bioequivalence": "",
      "brand-name": [
          "Isopto Carpine"
      ],
      "mp-pt": "pilocarpine",
      "tpuu-or-mpp-pt": "pilocarpine hydrochloride 2% eye drops, 15 mL",
      "indication-id": "",
      "increase-code": "",
      "note-ids": [
          "14807"
      ],
      "caution_ids": [],
      "indications": {},
      "notes": [
          " For prescribing in accordance with Optometry Board of Australia guidelines."
      ],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01EB01",
      "caution-ids": []
  },
  "5538L": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5538L",
      "restriction-flag": "U",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "NV",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "8.88",
      "cdpmq": "20.96",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "22.26",
      "bioequivalence": "",
      "brand-name": [
          "Isopto Carpine"
      ],
      "mp-pt": "pilocarpine",
      "tpuu-or-mpp-pt": "pilocarpine hydrochloride 4% eye drops, 15 mL",
      "indication-id": "",
      "increase-code": "",
      "note-ids": [
          "14807"
      ],
      "caution_ids": [],
      "indications": {},
      "notes": [
          " For prescribing in accordance with Optometry Board of Australia guidelines."
      ],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01EB01",
      "caution-ids": []
  },
  "5540N": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5540N",
      "restriction-flag": "U",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "NV",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "4.78",
      "therapeutic-premium": "0.00",
      "cp2p": "14.22",
      "cdpmq": "26.30",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "19.00",
      "mdpmq": "31.08",
      "mrvsn": "27.60",
      "bioequivalence": "a",
      "brand-name": [
          "BrinzoQuin",
          "Azopt"
      ],
      "mp-pt": "brinzolamide",
      "tpuu-or-mpp-pt": "brinzolamide 1% eye drops, 5 mL",
      "indication-id": "",
      "increase-code": "",
      "note-ids": [
          "14807"
      ],
      "caution_ids": [],
      "indications": {},
      "notes": [
          " For prescribing in accordance with Optometry Board of Australia guidelines."
      ],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01EC04",
      "caution-ids": []
  },
  "5541P": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5541P",
      "restriction-flag": "U",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "MF",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "7.85",
      "cdpmq": "19.93",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "21.23",
      "bioequivalence": "a",
      "brand-name": [
          "Trusamide",
          "Trusopt"
      ],
      "mp-pt": "dorzolamide",
      "tpuu-or-mpp-pt": "dorzolamide 2% eye drops, 5 mL",
      "indication-id": "",
      "increase-code": "",
      "note-ids": [
          "14807"
      ],
      "caution_ids": [],
      "indications": {},
      "notes": [
          " For prescribing in accordance with Optometry Board of Australia guidelines."
      ],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01EC03",
      "caution-ids": []
  },
  "5542Q": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5542Q",
      "restriction-flag": "R",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "MF",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "1.00",
      "therapeutic-premium": "0.00",
      "cp2p": "10.59",
      "cdpmq": "22.67",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "11.59",
      "mdpmq": "23.67",
      "mrvsn": "23.97",
      "bioequivalence": "a",
      "brand-name": [
          "Cosdor",
          "Cosopt"
      ],
      "mp-pt": "dorzolamide + timolol",
      "tpuu-or-mpp-pt": "dorzolamide 2% + timolol 0.5% eye drops, 5 mL",
      "indication-id": "5038",
      "increase-code": "2",
      "note-ids": [
          "14807"
      ],
      "caution_ids": [],
      "indications": {
          "description": "Elevated intra-ocular pressure Clinical criteria: * The condition must have been inadequately controlled with monotherapy, AND * Patient must have open-angle glaucoma; OR * Patient must have ocular hypertension.",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [
          " For prescribing in accordance with Optometry Board of Australia guidelines."
      ],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01EC",
      "caution-ids": []
  },
  "5544T": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5544T",
      "restriction-flag": "U",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "NV",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "4.76",
      "therapeutic-premium": "0.00",
      "cp2p": "7.26",
      "cdpmq": "19.34",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "12.02",
      "mdpmq": "24.10",
      "mrvsn": "20.64",
      "bioequivalence": "a",
      "brand-name": [
          "BetoQuin",
          "Betoptic"
      ],
      "mp-pt": "betaxolol",
      "tpuu-or-mpp-pt": "betaxolol 0.5% eye drops, 5 mL",
      "indication-id": "",
      "increase-code": "",
      "note-ids": [
          "14807"
      ],
      "caution_ids": [],
      "indications": {},
      "notes": [
          " For prescribing in accordance with Optometry Board of Australia guidelines."
      ],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01ED02",
      "caution-ids": []
  },
  "5545W": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5545W",
      "restriction-flag": "A",
      "has-caution": "",
      "has-note": "",
      "mq": "2",
      "repeats": "5",
      "manufacturer-code": "RB",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "11.02",
      "cdpmq": "34.12",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "35.42",
      "bioequivalence": "",
      "brand-name": [
          "tearsagain"
      ],
      "mp-pt": "soy lecithin + tocopherol + vitamin A",
      "tpuu-or-mpp-pt": "soy lecithin 1% + tocopherol 0.002% + vitamin A palmitate 0.025% spray, 100 actuations",
      "indication-id": "6172",
      "increase-code": "2",
      "note-ids": [],
      "caution_ids": [],
      "indications": {
          "description": "Severe dry eye syndrome Clinical criteria: * Patient must be sensitive to preservatives in multi-dose eye drops.",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [],
      "cautions": [],
      "streamline-code": "6172",
      "atc": "S01XA20",
      "caution-ids": []
  },
  "5548B": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5548B",
      "restriction-flag": "U",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "MF",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "5.73",
      "cdpmq": "17.81",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "19.11",
      "bioequivalence": "",
      "brand-name": [
          "Timoptol"
      ],
      "mp-pt": "timolol",
      "tpuu-or-mpp-pt": "timolol 0.5% eye drops, 5 mL",
      "indication-id": "",
      "increase-code": "",
      "note-ids": [
          "14807"
      ],
      "caution_ids": [],
      "indications": {},
      "notes": [
          " For prescribing in accordance with Optometry Board of Australia guidelines."
      ],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01ED01",
      "caution-ids": []
  },
  "5550D": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5550D",
      "restriction-flag": "U",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "MF",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "5.79",
      "cdpmq": "17.87",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "19.17",
      "bioequivalence": "",
      "brand-name": [
          "Timoptol XE"
      ],
      "mp-pt": "timolol",
      "tpuu-or-mpp-pt": "timolol 0.5% eye drops, 2.5 mL",
      "indication-id": "",
      "increase-code": "",
      "note-ids": [
          "14807"
      ],
      "caution_ids": [],
      "indications": {},
      "notes": [
          " For prescribing in accordance with Optometry Board of Australia guidelines."
      ],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01ED01",
      "caution-ids": []
  },
  "5551E": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5551E",
      "restriction-flag": "U",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "TY",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "24.92",
      "cdpmq": "37.00",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "38.30",
      "bioequivalence": "a",
      "brand-name": [
          "Bimtop",
          "Lumigan",
          "Bimatoprost Sandoz",
          "Bimprozt"
      ],
      "mp-pt": "bimatoprost",
      "tpuu-or-mpp-pt": "bimatoprost 0.03% eye drops, 3 mL",
      "indication-id": "",
      "increase-code": "",
      "note-ids": [
          "14807"
      ],
      "caution_ids": [],
      "indications": {},
      "notes": [
          " For prescribing in accordance with Optometry Board of Australia guidelines."
      ],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01EE03",
      "caution-ids": []
  },
  "5552F": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5552F",
      "restriction-flag": "U",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "TX",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "5.83",
      "cdpmq": "17.91",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "19.21",
      "bioequivalence": "a",
      "brand-name": [
          "Xalaprost",
          "Xalatan",
          "Latanoprost Sandoz",
          "APO-Latanoprost"
      ],
      "mp-pt": "latanoprost",
      "tpuu-or-mpp-pt": "latanoprost 0.005% eye drops, 2.5 mL",
      "indication-id": "",
      "increase-code": "",
      "note-ids": [
          "14807"
      ],
      "caution_ids": [],
      "indications": {},
      "notes": [
          " For prescribing in accordance with Optometry Board of Australia guidelines."
      ],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01EE01",
      "caution-ids": []
  },
  "5553G": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5553G",
      "restriction-flag": "R",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "TX",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "10.28",
      "cdpmq": "22.36",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "23.66",
      "bioequivalence": "a",
      "brand-name": [
          "Xalamol 50/5",
          "Xalacom",
          "Latanoprost/Timolol Sandoz 50/5",
          "APO-Latanoprost/Timolol 0.05/5"
      ],
      "mp-pt": "latanoprost + timolol",
      "tpuu-or-mpp-pt": "latanoprost 0.005% + timolol 0.5% eye drops, 2.5 mL",
      "indication-id": "5038",
      "increase-code": "2",
      "note-ids": [
          "14807"
      ],
      "caution_ids": [],
      "indications": {
          "description": "Elevated intra-ocular pressure Clinical criteria: * The condition must have been inadequately controlled with monotherapy, AND * Patient must have open-angle glaucoma; OR * Patient must have ocular hypertension.",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [
          " For prescribing in accordance with Optometry Board of Australia guidelines."
      ],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01EE",
      "caution-ids": []
  },
  "5554H": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5554H",
      "restriction-flag": "U",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "NV",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "25.36",
      "cdpmq": "37.44",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "38.74",
      "bioequivalence": "",
      "brand-name": [
          "Travatan"
      ],
      "mp-pt": "travoprost",
      "tpuu-or-mpp-pt": "travoprost 0.004% eye drops, 2.5 mL",
      "indication-id": "",
      "increase-code": "",
      "note-ids": [
          "14807"
      ],
      "caution_ids": [],
      "indications": {},
      "notes": [
          " For prescribing in accordance with Optometry Board of Australia guidelines."
      ],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01EE04",
      "caution-ids": []
  },
  "5555J": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5555J",
      "restriction-flag": "R",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "NV",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "29.82",
      "cdpmq": "41.90",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "41.30",
      "bioequivalence": "",
      "brand-name": [
          "Duotrav"
      ],
      "mp-pt": "travoprost + timolol",
      "tpuu-or-mpp-pt": "travoprost 0.004% + timolol 0.5% eye drops, 2.5 mL",
      "indication-id": "5038",
      "increase-code": "2",
      "note-ids": [
          "14807"
      ],
      "caution_ids": [],
      "indications": {
          "description": "Elevated intra-ocular pressure Clinical criteria: * The condition must have been inadequately controlled with monotherapy, AND * Patient must have open-angle glaucoma; OR * Patient must have ocular hypertension.",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [
          " For prescribing in accordance with Optometry Board of Australia guidelines."
      ],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01EE",
      "caution-ids": []
  },
  "5556K": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5556K",
      "restriction-flag": "R",
      "has-caution": "",
      "has-note": "",
      "mq": "1",
      "repeats": "3",
      "manufacturer-code": "AG",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "3.15",
      "cdpmq": "15.23",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "16.53",
      "bioequivalence": "",
      "brand-name": [
          "Optive"
      ],
      "mp-pt": "carmellose sodium + glycerol",
      "tpuu-or-mpp-pt": "carmellose sodium 0.5% + glycerol 0.9% eye drops, 15 mL",
      "indication-id": "6097",
      "increase-code": "2",
      "note-ids": [],
      "caution_ids": [],
      "indications": {
          "description": "Severe dry eye syndrome, including Sjogren's syndrome",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01XA20",
      "caution-ids": []
  },
  "5557L": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5557L",
      "restriction-flag": "U",
      "has-caution": "",
      "has-note": "",
      "mq": "1",
      "repeats": "2",
      "manufacturer-code": "SW",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "3.26",
      "cdpmq": "15.34",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "16.64",
      "bioequivalence": "",
      "brand-name": [
          "Soframycin"
      ],
      "mp-pt": "framycetin sulfate",
      "tpuu-or-mpp-pt": "framycetin sulfate 0.5% eye/ear drops, 8 mL",
      "indication-id": "",
      "increase-code": "",
      "note-ids": [],
      "caution_ids": [],
      "indications": {},
      "notes": [],
      "cautions": [],
      "streamline-code": "",
      "atc": "S03AA",
      "caution-ids": []
  },
  "5558M": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5558M",
      "restriction-flag": "R",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "AG",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "29.37",
      "cdpmq": "41.45",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "41.30",
      "bioequivalence": "",
      "brand-name": [
          "Ganfort 0.3/5"
      ],
      "mp-pt": "bimatoprost + timolol",
      "tpuu-or-mpp-pt": "bimatoprost 0.03% + timolol 0.5% eye drops, 3 mL",
      "indication-id": "5038",
      "increase-code": "2",
      "note-ids": [
          "14807"
      ],
      "caution_ids": [],
      "indications": {
          "description": "Elevated intra-ocular pressure Clinical criteria: * The condition must have been inadequately controlled with monotherapy, AND * Patient must have open-angle glaucoma; OR * Patient must have ocular hypertension.",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [
          " For prescribing in accordance with Optometry Board of Australia guidelines."
      ],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01EE",
      "caution-ids": []
  },
  "5562R": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5562R",
      "restriction-flag": "R",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "NV",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "17.79",
      "cdpmq": "29.87",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "31.17",
      "bioequivalence": "",
      "brand-name": [
          "Azarga"
      ],
      "mp-pt": "brinzolamide + timolol",
      "tpuu-or-mpp-pt": "brinzolamide 1% + timolol 0.5% eye drops, 5 mL",
      "indication-id": "5038",
      "increase-code": "2",
      "note-ids": [
          "14807"
      ],
      "caution_ids": [],
      "indications": {
          "description": "Elevated intra-ocular pressure Clinical criteria: * The condition must have been inadequately controlled with monotherapy, AND * Patient must have open-angle glaucoma; OR * Patient must have ocular hypertension.",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [
          " For prescribing in accordance with Optometry Board of Australia guidelines."
      ],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01EC54",
      "caution-ids": []
  },
  "5563T": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5563T",
      "restriction-flag": "U",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "AG",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "11.93",
      "cdpmq": "24.01",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "25.31",
      "bioequivalence": "",
      "brand-name": [
          "Alphagan P 1.5"
      ],
      "mp-pt": "brimonidine",
      "tpuu-or-mpp-pt": "brimonidine tartrate 0.15% eye drops, 5 mL",
      "indication-id": "",
      "increase-code": "",
      "note-ids": [
          "14807"
      ],
      "caution_ids": [],
      "indications": {},
      "notes": [
          " For prescribing in accordance with Optometry Board of Australia guidelines."
      ],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01EA05",
      "caution-ids": []
  },
  "5564W": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5564W",
      "restriction-flag": "A",
      "has-caution": "",
      "has-note": "",
      "mq": "2",
      "repeats": "0",
      "manufacturer-code": "NV",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "4.36",
      "therapeutic-premium": "0.00",
      "cp2p": "9.59",
      "cdpmq": "31.26",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "11.77",
      "mdpmq": "35.62",
      "mrvsn": "32.56",
      "bioequivalence": "a",
      "brand-name": [
          "CiloQuin",
          "Ciloxan"
      ],
      "mp-pt": "ciprofloxacin",
      "tpuu-or-mpp-pt": "ciprofloxacin 0.3% eye drops, 5 mL",
      "indication-id": "4181",
      "increase-code": "2",
      "note-ids": [],
      "caution_ids": [],
      "indications": {
          "description": "Bacterial keratitis Treatment criteria: * Must be treated by an ophthalmologist or in consultation with an ophthalmologist.",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01AE03",
      "caution-ids": []
  },
  "5565X": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5565X",
      "restriction-flag": "U",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "0",
      "manufacturer-code": "NV",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "16.03",
      "cdpmq": "28.11",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "29.41",
      "bioequivalence": "",
      "brand-name": [
          "Maxidex"
      ],
      "mp-pt": "dexamethasone",
      "tpuu-or-mpp-pt": "dexamethasone 0.1% eye drops, 5 mL",
      "indication-id": "",
      "increase-code": "",
      "note-ids": [
          "13615",
          "13290"
      ],
      "caution_ids": [],
      "indications": {},
      "notes": [
          "No applications for increased maximum quantities will be authorised.",
          "No applications for increased repeats will be authorised."
      ],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01BA01",
      "caution-ids": []
  },
  "5566Y": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5566Y",
      "restriction-flag": "R",
      "has-caution": "",
      "has-note": "",
      "mq": "1",
      "repeats": "2",
      "manufacturer-code": "AG",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "10.32",
      "cdpmq": "22.40",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "23.70",
      "bioequivalence": "",
      "brand-name": [
          "Genoptic"
      ],
      "mp-pt": "gentamicin",
      "tpuu-or-mpp-pt": "gentamicin 0.3% eye drops, 5 mL",
      "indication-id": "5477",
      "increase-code": "2",
      "note-ids": [],
      "caution_ids": [],
      "indications": {
          "description": "Suspected Pseudomonal eye infection",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01AA11",
      "caution-ids": []
  },
  "5567B": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5567B",
      "restriction-flag": "A",
      "has-caution": "",
      "has-note": "",
      "mq": "2",
      "repeats": "0",
      "manufacturer-code": "AG",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "10.20",
      "cdpmq": "32.48",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "33.78",
      "bioequivalence": "",
      "brand-name": [
          "Ocuflox"
      ],
      "mp-pt": "ofloxacin",
      "tpuu-or-mpp-pt": "ofloxacin 0.3% eye drops, 5 mL",
      "indication-id": "4181",
      "increase-code": "2",
      "note-ids": [],
      "caution_ids": [],
      "indications": {
          "description": "Bacterial keratitis Treatment criteria: * Must be treated by an ophthalmologist or in consultation with an ophthalmologist.",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01AE01",
      "caution-ids": []
  },
  "5568C": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5568C",
      "restriction-flag": "R",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "0",
      "manufacturer-code": "AG",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "16.87",
      "cdpmq": "28.95",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "30.25",
      "bioequivalence": "",
      "brand-name": [
          "Prednefrin Forte"
      ],
      "mp-pt": "prednisolone acetate + phenylephrine",
      "tpuu-or-mpp-pt": "prednisolone acetate 1% + phenylephrine hydrochloride 0.12% eye drops, 10 mL",
      "indication-id": "6087",
      "increase-code": "3",
      "note-ids": [
          "7606",
          "7607"
      ],
      "caution_ids": [],
      "indications": {
          "description": "Uveitis",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [
          "No increase in the maximum quantity or number of units may be authorised.",
          "No increase in the maximum number of repeats may be authorised."
      ],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01BB02",
      "caution-ids": []
  },
  "5569D": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5569D",
      "restriction-flag": "R",
      "has-caution": "",
      "has-note": "",
      "mq": "1",
      "repeats": "2",
      "manufacturer-code": "NV",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "10.62",
      "cdpmq": "22.70",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "24.00",
      "bioequivalence": "",
      "brand-name": [
          "Tobrex"
      ],
      "mp-pt": "tobramycin",
      "tpuu-or-mpp-pt": "tobramycin 0.3% eye drops, 5 mL",
      "indication-id": "5477",
      "increase-code": "2",
      "note-ids": [],
      "caution_ids": [],
      "indications": {
          "description": "Suspected Pseudomonal eye infection",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01AA12",
      "caution-ids": []
  },
  "5570E": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "5570E",
      "restriction-flag": "R",
      "has-caution": "",
      "has-note": "",
      "mq": "1",
      "repeats": "0",
      "manufacturer-code": "NV",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "13.18",
      "cdpmq": "25.26",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "26.56",
      "bioequivalence": "",
      "brand-name": [
          "Tobrex"
      ],
      "mp-pt": "tobramycin",
      "tpuu-or-mpp-pt": "tobramycin 0.3% eye ointment, 3.5 g",
      "indication-id": "5477",
      "increase-code": "2",
      "note-ids": [],
      "caution_ids": [],
      "indications": {
          "description": "Suspected Pseudomonal eye infection",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01AA12",
      "caution-ids": []
  },
  "2184Y": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "2184Y",
      "restriction-flag": "A",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "AE",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "22.47",
      "cdpmq": "34.55",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "35.85",
      "bioequivalence": "",
      "brand-name": [
          "Hylo-Fresh"
      ],
      "mp-pt": "hyaluronate sodium",
      "tpuu-or-mpp-pt": "hyaluronate sodium 0.1% eye drops, 10 mL",
      "indication-id": "4105",
      "increase-code": "2",
      "note-ids": [
          "7873"
      ],
      "caution_ids": [],
      "indications": {
          "description": "Severe dry eye syndrome Clinical criteria: * Patient must be sensitive to preservatives in multi-dose eye drops.",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [
          "The in-use shelf life of Hylo-Fresh and Hylo-Forte is 6 months from the date of opening."
      ],
      "cautions": [],
      "streamline-code": "4105",
      "atc": "S01XA20",
      "caution-ids": []
  },
  "2171G": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "2171G",
      "restriction-flag": "A",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "AE",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "22.47",
      "cdpmq": "34.55",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "35.85",
      "bioequivalence": "",
      "brand-name": [
          "Hylo-Forte"
      ],
      "mp-pt": "hyaluronate sodium",
      "tpuu-or-mpp-pt": "hyaluronate sodium 0.2% eye drops, 10 mL",
      "indication-id": "4105",
      "increase-code": "2",
      "note-ids": [
          "7873"
      ],
      "caution_ids": [],
      "indications": {
          "description": "Severe dry eye syndrome Clinical criteria: * Patient must be sensitive to preservatives in multi-dose eye drops.",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [
          "The in-use shelf life of Hylo-Fresh and Hylo-Forte is 6 months from the date of opening."
      ],
      "cautions": [],
      "streamline-code": "4105",
      "atc": "S01XA20",
      "caution-ids": []
  },
  "2167C": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "2167C",
      "restriction-flag": "U",
      "has-caution": "",
      "has-note": "N",
      "mq": "2",
      "repeats": "5",
      "manufacturer-code": "AE",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "6.44",
      "cdpmq": "24.96",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "26.26",
      "bioequivalence": "",
      "brand-name": [
          "VitA-POS"
      ],
      "mp-pt": "retinol palmitate + paraffin",
      "tpuu-or-mpp-pt": "retinol palmitate 0.0138% + paraffin eye ointment, 5 g",
      "indication-id": "",
      "increase-code": "",
      "note-ids": [
          "8019"
      ],
      "caution_ids": [],
      "indications": {},
      "notes": [
          "The in-use shelf life of VitA-POS is 6 months from the date of opening."
      ],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01XA20",
      "caution-ids": []
  },
  "2748P": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "2748P",
      "restriction-flag": "U",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "MF",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "22.63",
      "cdpmq": "34.71",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "36.01",
      "bioequivalence": "",
      "brand-name": [
          "Saflutan"
      ],
      "mp-pt": "tafluprost",
      "tpuu-or-mpp-pt": "tafluprost 0.0015% eye drops, 30 x 0.3 mL unit doses",
      "indication-id": "",
      "increase-code": "",
      "note-ids": [
          "14807"
      ],
      "caution_ids": [],
      "indications": {},
      "notes": [
          " For prescribing in accordance with Optometry Board of Australia guidelines."
      ],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01EE05",
      "caution-ids": []
  },
  "10053D": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "10053D",
      "restriction-flag": "U",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "AG",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "20.92",
      "cdpmq": "33.00",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "34.30",
      "bioequivalence": "",
      "brand-name": [
          "Lumigan PF"
      ],
      "mp-pt": "bimatoprost",
      "tpuu-or-mpp-pt": "bimatoprost 0.03% eye drops, 30 x 0.4 mL unit doses",
      "indication-id": "",
      "increase-code": "",
      "note-ids": [
          "14807"
      ],
      "caution_ids": [],
      "indications": {},
      "notes": [
          " For prescribing in accordance with Optometry Board of Australia guidelines."
      ],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01EE03",
      "caution-ids": []
  },
  "10108B": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "10108B",
      "restriction-flag": "R",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "AG",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "25.71",
      "cdpmq": "37.79",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "39.09",
      "bioequivalence": "",
      "brand-name": [
          "GANfort PF 0.3/5"
      ],
      "mp-pt": "bimatoprost + timolol",
      "tpuu-or-mpp-pt": "bimatoprost 0.03% + timolol 0.5% eye drops, 30 x 0.4 mL unit doses",
      "indication-id": "5038",
      "increase-code": "2",
      "note-ids": [
          "14807"
      ],
      "caution_ids": [],
      "indications": {
          "description": "Elevated intra-ocular pressure Clinical criteria: * The condition must have been inadequately controlled with monotherapy, AND * Patient must have open-angle glaucoma; OR * Patient must have ocular hypertension.",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [
          " For prescribing in accordance with Optometry Board of Australia guidelines."
      ],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01EE",
      "caution-ids": []
  },
  "10547D": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "10547D",
      "restriction-flag": "R",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "NV",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "16.56",
      "cdpmq": "28.64",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "29.94",
      "bioequivalence": "",
      "brand-name": [
          "Simbrinza 1%/0.2%"
      ],
      "mp-pt": "brinzolamide + brimonidine",
      "tpuu-or-mpp-pt": "brinzolamide 1% + brimonidine tartrate 0.2% eye drops, 5 mL",
      "indication-id": "5038",
      "increase-code": "2",
      "note-ids": [
          "14807"
      ],
      "caution_ids": [],
      "indications": {
          "description": "Elevated intra-ocular pressure Clinical criteria: * The condition must have been inadequately controlled with monotherapy, AND * Patient must have open-angle glaucoma; OR * Patient must have ocular hypertension.",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [
          " For prescribing in accordance with Optometry Board of Australia guidelines."
      ],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01EC54",
      "caution-ids": []
  },
  "11112W": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "11112W",
      "restriction-flag": "R",
      "has-caution": "",
      "has-note": "",
      "mq": "1",
      "repeats": "2",
      "manufacturer-code": "AS",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "4.11",
      "cdpmq": "16.19",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "17.49",
      "bioequivalence": "",
      "brand-name": [
          "Chlorsig"
      ],
      "mp-pt": "chloramphenicol",
      "tpuu-or-mpp-pt": "chloramphenicol 0.5% eye drops, 10 mL",
      "indication-id": "5835",
      "increase-code": "2",
      "note-ids": [],
      "caution_ids": [],
      "indications": {
          "description": "For treatment of a patient identifying as Aboriginal or Torres Strait Islander",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01AA01",
      "caution-ids": []
  },
  "11439C": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "11439C",
      "restriction-flag": "A",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "AE",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "21.50",
      "cdpmq": "33.58",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "34.88",
      "bioequivalence": "",
      "brand-name": [
          "Novatears"
      ],
      "mp-pt": "perfluorohexyloctane",
      "tpuu-or-mpp-pt": "perfluorohexyloctane 100% eye drops, 3 mL",
      "indication-id": "6172",
      "increase-code": "2",
      "note-ids": [
          "21971"
      ],
      "caution_ids": [],
      "indications": {
          "description": "Severe dry eye syndrome Clinical criteria: * Patient must be sensitive to preservatives in multi-dose eye drops.",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [
          "The in-use shelf life of Novatears is 6 months from the date of opening."
      ],
      "cautions": [],
      "streamline-code": "6172",
      "atc": "S01XA20",
      "caution-ids": []
  },
  "11634H": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "11634H",
      "restriction-flag": "R",
      "has-caution": "",
      "has-note": "",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "IQ",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "2.49",
      "cdpmq": "14.57",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "15.87",
      "bioequivalence": "a",
      "brand-name": [
          "Genteal",
          "In a Wink Moisturising"
      ],
      "mp-pt": "hypromellose",
      "tpuu-or-mpp-pt": "hypromellose 0.3% w/w eye drops, 10 mL",
      "indication-id": "6120",
      "increase-code": "2",
      "note-ids": [],
      "caution_ids": [],
      "indications": {
          "description": "Severe dry eye syndrome, including Sjogren's syndrome",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01XA20",
      "caution-ids": []
  },
  "11853W": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "11853W",
      "restriction-flag": "A",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "CX",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "18.28",
      "cdpmq": "30.36",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "31.66",
      "bioequivalence": "",
      "brand-name": [
          "Evolve Carmellose"
      ],
      "mp-pt": "carmellose sodium",
      "tpuu-or-mpp-pt": "carmellose sodium 0.5% eye drops, 10 mL",
      "indication-id": "6172",
      "increase-code": "2",
      "note-ids": [
          "22372"
      ],
      "caution_ids": [],
      "indications": {
          "description": "Severe dry eye syndrome Clinical criteria: * Patient must be sensitive to preservatives in multi-dose eye drops.",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [
          "The in-use shelf life of Evolve carmellose 0.5% and Evolve hypromellose 0.3% is 3 months from the date of opening."
      ],
      "cautions": [],
      "streamline-code": "6172",
      "atc": "S01XA20",
      "caution-ids": []
  },
  "11849P": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "11849P",
      "restriction-flag": "A",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "CX",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "18.28",
      "cdpmq": "30.36",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "31.66",
      "bioequivalence": "",
      "brand-name": [
          "Evolve Hypromellose"
      ],
      "mp-pt": "hypromellose",
      "tpuu-or-mpp-pt": "hypromellose 0.3% w/v eye drops, 10 mL",
      "indication-id": "6172",
      "increase-code": "2",
      "note-ids": [
          "22372"
      ],
      "caution_ids": [],
      "indications": {
          "description": "Severe dry eye syndrome Clinical criteria: * Patient must be sensitive to preservatives in multi-dose eye drops.",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [
          "The in-use shelf life of Evolve carmellose 0.5% and Evolve hypromellose 0.3% is 3 months from the date of opening."
      ],
      "cautions": [],
      "streamline-code": "6172",
      "atc": "S01XA20",
      "caution-ids": []
  },
  "12612T": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "12612T",
      "restriction-flag": "A",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "CS",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "25.59",
      "cdpmq": "37.67",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "38.97",
      "bioequivalence": "",
      "brand-name": [
          "Cationorm"
      ],
      "mp-pt": "liquid paraffin + glycerol + tyloxapol + poloxamer-188 + trometamol hydrochlorid",
      "tpuu-or-mpp-pt": "liquid paraffin + glycerol + tyloxapol + poloxamer-188 + trometamol hydrochloride + trometamol + cetalkonium chloride eye drops, 10 mL",
      "indication-id": "6172",
      "increase-code": "2",
      "note-ids": [
          "26237"
      ],
      "caution_ids": [],
      "indications": {
          "description": "Severe dry eye syndrome Clinical criteria: * Patient must be sensitive to preservatives in multi-dose eye drops.",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [
          "The in-use shelf life of Cationorm is 3 months from the date of opening."
      ],
      "cautions": [],
      "streamline-code": "6172",
      "atc": "S01XA20",
      "caution-ids": []
  },
  "12663L": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "12663L",
      "restriction-flag": "A",
      "has-caution": "C",
      "has-note": "N",
      "mq": "1",
      "repeats": "5",
      "manufacturer-code": "CS",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "69.89",
      "cdpmq": "81.97",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "41.30",
      "bioequivalence": "",
      "brand-name": [
          "Ikervis"
      ],
      "mp-pt": "ciclosporin",
      "tpuu-or-mpp-pt": "ciclosporin 0.1% eye drops, 30 x 0.3 mL unit doses",
      "indication-id": "12284",
      "increase-code": "2",
      "note-ids": [
          "27773",
          "27774",
          "25796"
      ],
      "caution_ids": [],
      "indications": {
          "description": "Chronic severe dry eye disease with keratitis Treatment Phase: Continuing treatment Clinical criteria: * Patient must have received PBS-subsidised treatment with this drug for this condition, AND * The condition must have improved to an extent that corneal fluorescein staining, using the same scale used at the time of the first authority application, shows an improvement (reduction) by at least 3 grades from baseline (the grade stated in the first authority application) - the improvement need only be demonstrated by staining once only with the first Continuing treatment authority application, AND * The condition must have improved to an extent that the patient's ocular surface disease index score at the time of this authority application, has improved (reduced) by at least 30% compared to the value stated in the first authority application (i.e. baseline). Treatment criteria: * Must be treated by an ophthalmologist or by an accredited ophthalmology registrar in consultation with an ophthalmologist; OR * Must be treated by an optometrist in accordance with Optometry Board of Australia guidelines. Prescribing instructions: State in the first continuing treatment authority application for this drug: (i) an improved corneal fluorescein staining grade (a numerical value that has improved by 3 grades from that provided in the first Initial 1 treatment authority application). State in all continuing treatment authority applications: (ii) the ocular surface disease index score at the time of this authority application (a numerical value that is at least 30% lower than that stated in the first Initial 1 treatment authority application).",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [
          "The Oxford scale, modified Oxford scale and Ocular Surface Disease Index (OSDI) were relied upon in the submission supporting initial PBS listing.The Oxford scale uses a chart system consisting of a series of panels, labelled A to E in order of increasing severity. In each chart, staining is represented by dots. To grade staining, comparisons are made between the panels and the appearance of staining on the exposed interpalpebral conjunctiva and cornea of the patient. The details of the chart are presented in Figure 1 and, in a simplified form in Figure 4 (where the criteria, dot count and log columns are not displayed), in the following literature article: Bron A, Evans V, Smith, J. Grading of corneal and conjunctival staining in the context of other dry eye tests. Cornea. 2003;22(7):640-650.The modified Oxford scale is as above, but with the first grade depiction (Grade 0), termed 'Grade 0.5'.A list of equivalent scales to the Oxford scale is not provided. Prescribers should be satisfied that a scale other than the Oxford scale, if used, is equivalent to the Oxford scale.The Ocular Surface Disease Index (OSDI) is a 12-item questionnaire created by the Outcomes Research Group at Allergan Inc, Irvine, CA, USA, to assess dry eye symptoms and the effects on vision-related function.The questionnaire has 3 subscales: ocular symptoms, vision-related function, and environmental triggers. Patients rate their responses on a 0 to 4 scale with 0 corresponding to 'none of the time' and 4 corresponding to 'all of the time'. A final score is calculated which ranges from 0 to 100 with scores 0 to 12 representing normal, 13 to 22 representing mild dry eye disease, 23 to 32 representing moderate dry eye disease, and greater than 33 representing severe dry eye disease.The OSDI questionnaire asks the following:Presence of ocular symptoms - Have you experienced any of the following during the last week?1. Eyes that are sensitive to light2. Eyes that feel gritty3. Painful or sore eyes4. Blurred vision5. Poor visionImpact on daily activities - Have you had problems with your eyes limited you in performing any of the following during the last week?1. Reading2. Driving at night3. Working with a computer or bank machine (ATM)4. Watching TVEnvironmental factors - Have your eyes felt uncomfortable in any of the following situations during the last week?1. Windy conditions2. Places or areas with low humidity (very dry)3. Areas that are airconditionedRate responses on a scale of 0 to 4; 0 = none of the time, 1 = some of the time, 2 = half of the time, 3 = most of the time, and 4 = all of the time.Further information on this index is in the following literature article: Walt J, Rowe M, Stern K. Evaluating the functional impact of dry eye: the Ocular Surface Disease Index. Drug Information Journal. 1997;31:1436The 'Dry Eye OSDI 'Questionnaire' app developed by Allergan Inc is available to download for iPhone.",
          "If the maximum number of repeats stated in this listing is not requested in this application, further supplies can be obtained through this treatment phase listing to continue treatment for up to the first 180 days of treatment, but the OSDI score and CFS grade need not be re-stated. Alternatively, treatment may be continued under the 'Continuing treatment' phase listing, provided the patient meets all eligibility criteria specified in that treatment phase listing.",
          "Applications for authorisation under this restriction may be made in real time using the Online PBS Authorities system (see www.servicesaustralia.gov.au/HPOS) or by telephone by contacting Services Australia on 1800 888 333."
      ],
      "cautions": [
          "It is recommended that the potential for immunosuppression with long term use of this drug be clinically reviewed after at least 24 months of treatment, if not already reviewed."
      ],
      "streamline-code": "",
      "atc": "S01XA18",
      "caution-ids": [
          "27780"
      ]
  },
  "12572Q": {
      "program-code": "GE",
      "atc-level-code": "",
      "atc-type": "P",
      "atc-print-option": "1",
      "item-code": "12572Q",
      "restriction-flag": "R",
      "has-caution": "",
      "has-note": "N",
      "mq": "1",
      "repeats": "0",
      "manufacturer-code": "AG",
      "pack-size": "1",
      "markup-band": "C",
      "fee-code": "RP",
      "dangerous-drug-code": "",
      "brand-premium": "0.00",
      "therapeutic-premium": "0.00",
      "cp2p": "11.52",
      "cdpmq": "23.60",
      "lp2p": "0.00",
      "ldpmq": "0.00",
      "mp2p": "0.00",
      "mdpmq": "0.00",
      "mrvsn": "24.90",
      "bioequivalence": "",
      "brand-name": [
          "PRED FORTE"
      ],
      "mp-pt": "prednisolone acetate",
      "tpuu-or-mpp-pt": "prednisolone acetate 1% eye drops, 10 mL",
      "indication-id": "6087",
      "increase-code": "3",
      "note-ids": [
          "7606",
          "7607"
      ],
      "caution_ids": [],
      "indications": {
          "description": "Uveitis",
          "misc-res-code": "0",
          "date-req": "N",
          "text-req": "N"
      },
      "notes": [
          "No increase in the maximum quantity or number of units may be authorised.",
          "No increase in the maximum number of repeats may be authorised."
      ],
      "cautions": [],
      "streamline-code": "",
      "atc": "S01BB02",
      "caution-ids": []
  }
}

// This is the recommended order based loosely on the ranking of most prescribed optometrical medications. Note all non-PBS drugs will remain at the bottom of the list, so do not impact this ordering
const PBSOrder = [
  "5552F",
  "5513E",
  "5553G",
  "10108B",
  "5558M",
  "5568C",
  "5555J",
  "5550D",
  "5548B",
  "5533F",
  "11112W",
  "2184Y",
  "2171G",
  "5524R",
  "5532E",
  "5508X",
  "5505R",
  "5507W",
  "5506T",
  "5504Q",
  "5502N",
  "5503P",
  "5556K",
  "11853W",
  "5562R",
  "5542Q",
  "5554H",
  "5551E",
  "5565X",
  "5569D",
  "5570E",
  "5535H",
  "10053D",
  "10547D",
  "5563T",
  "5534G",
  "5540N",
  "5520M",
  "5521N",
  "5523Q",
  "5516H",
  "2748P",
  "5501M",
  "5517J",
  "5545W",
  "5522P",
  "5519L",
  "5526W",
  "2167C",
  "5541P",
  "5536J",
  "5537K",
  "5538L",
  "5544T",
  "11439C",
  "11634H",
  "11849P",
  "12612T",
  "5564W",
  "5567B",
  "5566Y",
  "5557L",
  "12663L",
  "12572Q"
];

// Using a map function, the distilled PBS data may be re-mapped to a new ordered set
const orderPBSData = (rawPBSData, recommendedOrder) => {
  // Use the raw PBS data, which references each drug under an itemCode key, as the source of drug data for mapping the recommended order array with actual data
  const orderedData = recommendedOrder.map((item) => (rawPBSData[item]));
  return orderedData;
}

// Produce the distilled data set for drug autocomplete. The fields required can be adjusted within the body of the function
const distillPBSData = (orderedData) => {
  const dataFields = [
    'item-code',
    'brand-name',
    'mp-pt',
    'tpuu-or-mpp-pt'
  ];
  
  const distilledPBSData = [];
  
  // Iterate through each drug (item) in the raw data
  orderedData.forEach((item) => {
    const newItem = {};
    // For each of the required fields, create a property in the newItem to be added to the distilled data set
    dataFields.forEach((field) => {
      newItem[field] = item[field];
    });
    distilledPBSData.push(newItem);
  });

  return distilledPBSData;
}

// These schedule two and four JSON arrays have been manually created for non-PBS drugs, and will rarely change. They are in the same format as distilledPBSData at this stage. Note that neither have been split into individual brand names. They need to be added to the PBS data at this stage
const addNonPBSDrugs = (distilledPBSData) => {
  const scheduleFourDrugs = [
    {
      "item-code": "",
      "brand-name": [
        "Atropt"
      ],
      "mp-pt": "atropine",
      "tpuu-or-mpp-pt": "atropine sulphate monohydrate 1% eye drops, 15 mL"
    },
    {
      "item-code": "",
      "brand-name": [
        "Eikance"
      ],
      "mp-pt": "atropine",
      "tpuu-or-mpp-pt": "atropine sulphate monohydrate 0.01% eye drops, 5 x 0.3 mL unit doses"
    },
    {
      "item-code": "",
      "brand-name": [
        "Eikance"
      ],
      "mp-pt": "atropine",
      "tpuu-or-mpp-pt": "atropine sulphate monohydrate 0.01% eye drops, 30 x 0.3 mL unit doses"
    },
    {
      "item-code": "",
      "brand-name": [
        "Eikance"
      ],
      "mp-pt": "atropine",
      "tpuu-or-mpp-pt": "atropine sulphate monohydrate 0.01% eye drops, 60 x 0.3 mL unit doses"
    },
    {
      "item-code": "",
      "brand-name": [
        "Minims Atropine"
      ],
      "mp-pt": "atropine",
      "tpuu-or-mpp-pt": "atropine sulphate monohydrate 1% eye drops, 20 x 0.5 mL unit doses"
    },
    {
      "item-code": "",
      "brand-name": [
        "Voltaren Ophtha"
      ],
      "mp-pt": "diclofenac",
      "tpuu-or-mpp-pt": "diclofenac sodium 0.1% eye drops, 5 mL"
    },
    {
      "item-code": "",
      "brand-name": [
        "Acular"
      ],
      "mp-pt": "ketorolac",
      "tpuu-or-mpp-pt": "ketorolac trometamol 0.5% eye drops, 5 mL"
    },
    {
      "item-code": "",
      "brand-name": [
        "Minims Prednisolone"
      ],
      "mp-pt": "prednisolone sodium phosphate",
      "tpuu-or-mpp-pt": "prednisolone sodium phosphate 0.5% eye drops, 20 x 0.5 mL unit doses"
    },
    {
      "item-code": "",
      "brand-name": [
        "Patanol"
      ],
      "mp-pt": "olopatadine",
      "tpuu-or-mpp-pt": "olopatadine hydrochloride 0.1% eye drops, 5 mL"
    },
    {
      "item-code": "",
      "brand-name": [
        "Iopidine"
      ],
      "mp-pt": "apraclonidine",
      "tpuu-or-mpp-pt": "apraclonidine hydrochloride 0.5% eye drops, 10 mL"
    },
    {
      "item-code": "",
      "brand-name": [
        "Cyclogyl"
      ],
      "mp-pt": "cyclopentolate",
      "tpuu-or-mpp-pt": "cyclopentolate hydrochloride 1.0% eye drops, 15 mL"
    },
    {
      "item-code": "",
      "brand-name": [
        "Minims Cyclopentolate"
      ],
      "mp-pt": "cyclopentolate",
      "tpuu-or-mpp-pt": "cyclopentolate hydrochloride 0.5% eye drops, 20 x 0.5 mL unit doses"
    },
    {
      "item-code": "",
      "brand-name": [
        "Minims Cyclopentolate"
      ],
      "mp-pt": "cyclopentolate",
      "tpuu-or-mpp-pt": "cyclopentolate hydrochloride 1.0% eye drops, 20 x 0.5 mL unit doses"
    },
    {
      "item-code": "",
      "brand-name": [
        "Mydriacyl"
      ],
      "mp-pt": "tropicamide",
      "tpuu-or-mpp-pt": "tropicamide 0.5% eye drops, 15 mL"
    },
    {
      "item-code": "",
      "brand-name": [
        "Mydriacyl"
      ],
      "mp-pt": "tropicamide",
      "tpuu-or-mpp-pt": "tropicamide 1.0% eye drops, 15 mL"
    },
    {
      "item-code": "",
      "brand-name": [
        "Minims Tropicamide"
      ],
      "mp-pt": "tropicamide",
      "tpuu-or-mpp-pt": "tropicamide 0.5% eye drops, 20 x 0.5 mL unit doses"
    },
    {
      "item-code": "",
      "brand-name": [
        "Minims Tropicamide"
      ],
      "mp-pt": "tropicamide",
      "tpuu-or-mpp-pt": "tropicamide 1.0% eye drops, 20 x 0.5 mL unit doses"
    },
    {
      "item-code": "",
      "brand-name": [
        "Minims Amethocaine (Tetracaine)"
      ],
      "mp-pt": "amethocaine (tetracaine)",
      "tpuu-or-mpp-pt": "amethocaine (tetracaine) hydrochloride 0.5% eye drops, 20 x 0.5 mL unit doses"
    },
    {
      "item-code": "",
      "brand-name": [
        "Minims Amethocaine (Tetracaine)"
      ],
      "mp-pt": "amethocaine (tetracaine)",
      "tpuu-or-mpp-pt": "amethocaine (tetracaine) hydrochloride 1.0% eye drops, 20 x 0.5 mL unit doses"
    },
    {
      "item-code": "",
      "brand-name": [
        "Minims Lignocaine (Lidocaine) and Fluorescein Sodium"
      ],
      "mp-pt": "lignocaine (lidocaine) and fluorescein sodium",
      "tpuu-or-mpp-pt": "lignocaine (lidocaine) 4% and fluorescein sodium 0.25% eye drops, 20 x 0.5 mL unit doses"
    },
    {
      "item-code": "",
      "brand-name": [
        "Minims Oxybuprocaine"
      ],
      "mp-pt": "oxybuprocaine",
      "tpuu-or-mpp-pt": "oxybuprocaine hydrochloride 0.4% eye drops, 20 x 0.5 mL unit doses"
    },
    {
      "item-code": "",
      "brand-name": [
        "Alcaine"
      ],
      "mp-pt": "proxymetacaine",
      "tpuu-or-mpp-pt": "proxymetacaine hydrochloride 0.5% eye drops, 15 mL"
    },
    {
      "item-code": "",
      "brand-name": [
        "Minims Phenylephrine"
      ],
      "mp-pt": "phenylephrine",
      "tpuu-or-mpp-pt": "phenylephrine hydrochloride 2.5% eye drops, 20 x 0.5 mL unit doses"
    },
    {
      "item-code": "",
      "brand-name": [
        "Minims Phenylephrine"
      ],
      "mp-pt": "phenylephrine",
      "tpuu-or-mpp-pt": "phenylephrine hydrochloride 10% eye drops, 20 x 0.5 mL unit doses"
    }
  ];
  
  const scheduleTwoDrugs = [
    {
      "item-code": "",
      "brand-name": [
        "Cromo-Fresh"
      ],
      "mp-pt": "sodium cromoglycate",
      "tpuu-or-mpp-pt": "sodium cromoglycate 2% eye drops, 10 mL"
    },
    {
      "item-code": "",
      "brand-name": [
        "Zyrtec",
        "Livostin"
      ],
      "mp-pt": "levocabastine",
      "tpuu-or-mpp-pt": "levocabastine hydrochloride 0.05% eye drops, 4 mL"
    },
    {
      "item-code": "",
      "brand-name": [
        "Lomide"
      ],
      "mp-pt": "lodoxamide",
      "tpuu-or-mpp-pt": "lodoxamide trometamol 0.1% eye drops, 10 mL"
    },
    {
      "item-code": "",
      "brand-name": [
        "Albalon-A"
      ],
      "mp-pt": "naphazoline + antazoline",
      "tpuu-or-mpp-pt": "naphazoline 0.05% + antazoline phosphate 0.5% mg/mL eye drops, 15 mL"
    },
    {
      "item-code": "",
      "brand-name": [
        "Brolene"
      ],
      "mp-pt": "propamidine",
      "tpuu-or-mpp-pt": "propamidine isethionate 0.1% eye drops, 10 mL"
    },
    {
      "item-code": "",
      "brand-name": [
        "Eyezep"
      ],
      "mp-pt": "azelastine",
      "tpuu-or-mpp-pt": "azelastine hydrochloride 0.0457% mg/mL eye drops, 6 mL"
    },
    {
      "item-code": "",
      "brand-name": [
        "Visine Allergy",
        "Naphcon-A"
      ],
      "mp-pt": "naphazoline + pheniramine",
      "tpuu-or-mpp-pt": "naphazoline hydrochloride 0.025% + pheniramine maleate 0.3% eye drops, 15 mL"
    },
    {
      "item-code": "",
      "brand-name": [
        "Naphcon-Forte",
        "Albalon",
        "Systane Red Eyes"
      ],
      "mp-pt": "naphazoline",
      "tpuu-or-mpp-pt": "naphazoline hydrochloride 0.1% eye drops, 15 mL"
    },
    {
      "item-code": "",
      "brand-name": [
        "Optrex Eye Drops"
      ],
      "mp-pt": "naphazoline",
      "tpuu-or-mpp-pt": "naphazoline hydrochloride 0.01% eye drops, 10 mL"
    },
    {
      "item-code": "",
      "brand-name": [
        "Murine Clear eyes"
      ],
      "mp-pt": "naphazoline",
      "tpuu-or-mpp-pt": "naphazoline hydrochloride 0.012% eye drops, 10 mL"
    },
    {
      'item-code': '',
      'brand-name': [ 'Optrex Actimist' ],
      'mp-pt': 'soy lecithin + tocopherol + vitamin A',
      'tpuu-or-mpp-pt': 'soy lecithin 1% + tocopherol 0.002% + vitamin A palmitate 0.025% spray, 100 actuations'
    }
  ];

  return distilledPBSData.concat(scheduleTwoDrugs, scheduleFourDrugs);
};

// Prior to splitting by individual brand, the brand name arrays should be ordered by relative popularity or commercial availability. For simplicity, the most common brand will be placed at the start of the array, and the remainder will be left. In most all cases this is appropriate, since there is one clear front runner in practice
const orderBrands = (unorderedBrandData) => {
  const topBrands = [
    'Xalatan',
    'Xalacom',
    'Cosopt',
    'Lumigan',
    'Alphagan',
    'BrinzoQuin',
    'Trusopt'
  ];

  unorderedBrandData.forEach((item) => {
    // Nested loop (bad practice I am aware) through brand names
    topBrands.forEach((name) => {
      // Isolate brand name array and check for any of the above brand names
      if (item['brand-name'].includes(name)) {
        // Find the current index of the brand name in the array of brand names for that drug item
        const index = item['brand-name'].indexOf(name);
        // Remove it
        item['brand-name'].splice(index, 1)
        // And re-add to the start of the array
        item['brand-name'].unshift(name);
      }
    });
  });

  // Now ordered
  return unorderedBrandData;
}

// This operation creates individual drug object entries in the JSON data for every unique brand name, as opposed to aggregating the brand names under one umbrella for a given active ingredient. This is done to enable unique searching and autocomplete by brand name
const splitDataByBrands = (brandAggregateData) => {
  const individualBrandData = [];

  brandAggregateData.forEach((item) => {
    // Check for items with >1 brand name
    if (item['brand-name'].length > 1) {
      // Create individual entry for each brand name, with identical info otherwise
      item['brand-name'].forEach((name) => {
        let newDrugItem = { ...item, "brand-name": [name] };
        individualBrandData.push(newDrugItem);
      })
    } else {
      // Otherwise a single entry for one brand name is required
      individualBrandData.push(item);
    }
  });

  return individualBrandData;
};

// There are certain drugs that are simply not commercially available yet. These should be removed until further notice
const removeListedItems = (individualBrandData) => {
  const itemsToRemove = [
    'Eikance'
  ];

  // Data will only ever have one brand item in array, hence the notation [0]
  const filtered = individualBrandData.filter((item) => !itemsToRemove.includes(item['brand-name'][0]));
  return filtered;
}


// Step 1
const orderedData = orderPBSData(PBSData, PBSOrder);

// Step 2
const distilledPBSData = distillPBSData(orderedData);

// Step 3
const allDistilledData = addNonPBSDrugs(distilledPBSData);

// Step 4
const orderedBrandData = orderBrands(allDistilledData);

// Step 5
const splitBrandData = splitDataByBrands(orderedBrandData);

// Step 6
const filteredData = removeListedItems(splitBrandData);

console.log(JSON.stringify(filteredData));




