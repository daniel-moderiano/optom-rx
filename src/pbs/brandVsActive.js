// Active prescribing guidelines exist for PBS items on the LEMI, but otherwise apply for all medications with four or more active ingredients. Included here are the PBS items only. These should be prescribed by brand only. Default to 'brand name only' but do not check 'brand name substitution not permitted'.
const excludedItems = [

];

// This should be added as 'lemi: true'

// Items listed for brand consideration should include both active ingredient and brand name, although it is not strictly required
// Default to include brand name, but do not check 'brand substitution not permitted' or 'brand name only'
const brandConsideration = [
  '5551E',
  '10053D',
  '10108B',
  '5558M',
  '5540N',
  '10547D',
  '5562R',
  '5535H',
  '5563T',
  '5534G',
  '5541P',
  '5542Q',
  '5552F',
  '5553G',
  '5548B',
  '5550D',
];

// This should be added as 'lmbc: true'

// All other items should be prescribed by active ingredient only, except in niche circumstances where brand is critical (for optometry this is essentialy nil)

