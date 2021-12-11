// Active prescribing guidelines exist for PBS items on the LEMI, but otherwise apply for all medications with four or more active ingredients. Included here are the PBS items only. These should be prescribed by brand only. Default to 'brand name only' but do not check 'brand name substitution not permitted'.
const excludedItems = [
  '5502N',
  '5504Q',
  '5503P',
  '5506T',
  '11853W',
  '5508X',
  '5505R',
  '5507W',
  '5556K',
  '5521N',
  '5520M',
  '2171G',
  '2184Y',
  '5517J',
  '11634H',
  '11849P',
  '5519L',
  '5522P',
  '5523Q',
  '5524R',
  '5532E',
  '5526W',
  '2167C',
  
];

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

// All other items should be prescribed by active ingredient only, except in niche circumstances where brand is critical (for optometry this is essentialy nil)
