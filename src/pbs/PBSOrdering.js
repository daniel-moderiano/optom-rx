const test = [{
  "item-code": "5552F",
  "brand-name": [
    "Xalaprost",
    "Xalatan",
    "Latanoprost Actavis",
    "Latanoprost Sandoz",
    "APO-Latanoprost"
  ],
  "mp-pt": "latanoprost",
  "tpuu-or-mpp-pt": "latanoprost 0.005% eye drops, 2.5 mL"
},
{
  "item-code": "5513E",
  "brand-name": [
    "FML Liquifilm"
  ],
  "mp-pt": "fluorometholone",
  "tpuu-or-mpp-pt": "fluorometholone 0.1% eye drops, 5 mL"
},
{
  "item-code": "5553G",
  "brand-name": [
    "Xalamol 50/5",
    "Xalacom",
    "Latanoprost/Timolol Sandoz 50/5",
    "APO-Latanoprost/Timolol 0.05/5"
  ],
  "mp-pt": "latanoprost + timolol",
  "tpuu-or-mpp-pt": "latanoprost 0.005% + timolol 0.5% eye drops, 2.5 mL"
}];

const topBrands = [
  'Xalatan',
  'Xalacom',
  'Cosopt',
  'Lumigan',
  'Alphagan',
  'BrinzoQuin',
  'Trusopt'
];

test.forEach((item) => {
  // Nested loop (bad practice I am aware) through brand names
  topBrands.forEach((name) => {
    // Isolate brand name array and check for any of the above brand names
    if (item['brand-name'].includes(name)) {
      // Find the current index of the brand name in the array of brand names for that drug item
      const index = item['brand-name'].indexOf(name);
      // Remove it
      item['brand-name'].splice(index, 1)
      // And re-add to the start of the array
      // console.log(name);
      item['brand-name'].unshift(name);
      // console.log(index, name);
    }
  });
});

// test.unshift('TEST')

console.log(test);