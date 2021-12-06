// This file is intended to code the logic that pushes the PBS data to firestore
import { db } from '../firebase/config';
import { doc, setDoc } from 'firebase/firestore';

export const usePBSUpload = () => {

  // Start with a single drug entry
  const drugs = {
    '5501M': {
      'program-code': 'GE',
      'atc-level-code': '',
      'atc-type': 'P',
      'atc-print-option': '1',
      'item-code': '5501M',
      'restriction-flag': 'R',
      'has-caution': '',
      'has-note': '',
      mq: '1',
      repeats: '0',
      'manufacturer-code': 'IX',
      'pack-size': '1',
      'markup-band': 'C',
      'fee-code': 'RP',
      'dangerous-drug-code': '',
      'brand-premium': '0.00',
      'therapeutic-premium': '0.00',
      cp2p: '21.45',
      cdpmq: '33.53',
      lp2p: '0.00',
      ldpmq: '0.00',
      mp2p: '0.00',
      mdpmq: '0.00',
      mrvsn: '34.83',
      bioequivalence: 'a',
      'brand-name': [ 'ViruPOS', 'XOROX' ],
      'mp-pt': 'aciclovir',
      'tpuu-or-mpp-pt': 'aciclovir 3% eye ointment, 4.5 g',
      'indication-id': '5964',
      'increase-code': '2',
      'note-ids': [],
      caution_ids: [],
      indications: {
        description: 'Herpes simplex keratitis',
        'misc-res-code': '0',
        'date-req': 'N',
        'text-req': 'N'
      },
      notes: [],
      cautions: [],
      'streamline-code': '',
      atc: 'S01AD03',
      'caution-ids': []
    },
  }

  const itemCodes = Object.keys(drugs);

  // Add a new document to collection 'pbs'
  const addDrug = async (itemCode) => {
    await setDoc(doc(db, 'pbs', itemCode), {
      ...drugs[itemCode],
    });
  }

  addDrug('5501M');

  const newDrug = { ...drugs['5501M'] }
  console.log(newDrug);

  return { newDrug }

}
