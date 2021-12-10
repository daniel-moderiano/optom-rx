const original = [
  {
      "item-code": "5552F",
      "brand-name": [
          "Xalatan"
      ],
      "mp-pt": "latanoprost",
      "tpuu-or-mpp-pt": "latanoprost 0.005% eye drops, 2.5 mL"
  },
  {
      "item-code": "5552F",
      "brand-name": [
          "Latanoprost Sandoz"
      ],
      "mp-pt": "latanoprost",
      "tpuu-or-mpp-pt": "latanoprost 0.005% eye drops, 2.5 mL"
  },
  {
      "item-code": "5552F",
      "brand-name": [
          "Latanoprost Actavis"
      ],
      "mp-pt": "latanoprost",
      "tpuu-or-mpp-pt": "latanoprost 0.005% eye drops, 2.5 mL"
  },
  {
      "item-code": "5552F",
      "brand-name": [
          "Xalaprost"
      ],
      "mp-pt": "latanoprost",
      "tpuu-or-mpp-pt": "latanoprost 0.005% eye drops, 2.5 mL"
  },
  {
      "item-code": "5552F",
      "brand-name": [
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
          "Xalacom"
      ],
      "mp-pt": "latanoprost + timolol",
      "tpuu-or-mpp-pt": "latanoprost 0.005% + timolol 0.5% eye drops, 2.5 mL"
  },
  {
      "item-code": "5553G",
      "brand-name": [
          "Latanoprost/Timolol Sandoz 50/5"
      ],
      "mp-pt": "latanoprost + timolol",
      "tpuu-or-mpp-pt": "latanoprost 0.005% + timolol 0.5% eye drops, 2.5 mL"
  },
  {
      "item-code": "5553G",
      "brand-name": [
          "Xalamol 50/5"
      ],
      "mp-pt": "latanoprost + timolol",
      "tpuu-or-mpp-pt": "latanoprost 0.005% + timolol 0.5% eye drops, 2.5 mL"
  },
  {
      "item-code": "5553G",
      "brand-name": [
          "APO-Latanoprost/Timolol 0.05/5"
      ],
      "mp-pt": "latanoprost + timolol",
      "tpuu-or-mpp-pt": "latanoprost 0.005% + timolol 0.5% eye drops, 2.5 mL"
  },
  {
      "item-code": "10108B",
      "brand-name": [
          "GANfort PF 0.3/5"
      ],
      "mp-pt": "bimatoprost + timolol",
      "tpuu-or-mpp-pt": "bimatoprost 0.03% + timolol 0.5% eye drops, 30 x 0.4 mL unit doses"
  },
  {
      "item-code": "5558M",
      "brand-name": [
          "Ganfort 0.3/5"
      ],
      "mp-pt": "bimatoprost + timolol",
      "tpuu-or-mpp-pt": "bimatoprost 0.03% + timolol 0.5% eye drops, 3 mL"
  },
  {
      "item-code": "5568C",
      "brand-name": [
          "Prednefrin Forte"
      ],
      "mp-pt": "prednisolone acetate + phenylephrine",
      "tpuu-or-mpp-pt": "prednisolone acetate 1% + phenylephrine hydrochloride 0.12% eye drops, 10 mL"
  },
  {
      "item-code": "5555J",
      "brand-name": [
          "Duotrav"
      ],
      "mp-pt": "travoprost + timolol",
      "tpuu-or-mpp-pt": "travoprost 0.004% + timolol 0.5% eye drops, 2.5 mL"
  },
  {
      "item-code": "5550D",
      "brand-name": [
          "Timoptol XE"
      ],
      "mp-pt": "timolol",
      "tpuu-or-mpp-pt": "timolol 0.5% eye drops, 2.5 mL"
  },
  {
      "item-code": "5548B",
      "brand-name": [
          "Timoptol"
      ],
      "mp-pt": "timolol",
      "tpuu-or-mpp-pt": "timolol 0.5% eye drops, 5 mL"
  },
  {
      "item-code": "5533F",
      "brand-name": [
          "Flarex"
      ],
      "mp-pt": "fluorometholone acetate",
      "tpuu-or-mpp-pt": "fluorometholone acetate 0.1% eye drops, 5 mL"
  },
  {
      "item-code": "11112W",
      "brand-name": [
          "Chlorsig"
      ],
      "mp-pt": "chloramphenicol",
      "tpuu-or-mpp-pt": "chloramphenicol 0.5% eye drops, 10 mL"
  },
  {
      "item-code": "2184Y",
      "brand-name": [
          "Hylo-Fresh"
      ],
      "mp-pt": "hyaluronate sodium",
      "tpuu-or-mpp-pt": "hyaluronate sodium 0.1% eye drops, 10 mL"
  },
  {
      "item-code": "2171G",
      "brand-name": [
          "Hylo-Forte"
      ],
      "mp-pt": "hyaluronate sodium",
      "tpuu-or-mpp-pt": "hyaluronate sodium 0.2% eye drops, 10 mL"
  },
  {
      "item-code": "5524R",
      "brand-name": [
          "Systane"
      ],
      "mp-pt": "polyethylene glycol-400 + propylene glycol",
      "tpuu-or-mpp-pt": "polyethylene glycol-400 0.4% + propylene glycol 0.3% eye drops, 15 mL"
  },
  {
      "item-code": "5532E",
      "brand-name": [
          "Systane"
      ],
      "mp-pt": "polyethylene glycol-400 + propylene glycol",
      "tpuu-or-mpp-pt": "polyethylene glycol-400 0.4% + propylene glycol 0.3% eye drops, 28 x 0.8 mL unit doses"
  },
  {
      "item-code": "5508X",
      "brand-name": [
          "Refresh Liquigel"
      ],
      "mp-pt": "carmellose sodium",
      "tpuu-or-mpp-pt": "carmellose sodium 1% eye drops, 15 mL"
  },
  {
      "item-code": "5505R",
      "brand-name": [
          "Celluvisc"
      ],
      "mp-pt": "carmellose sodium",
      "tpuu-or-mpp-pt": "carmellose sodium 1% eye drops, 30 x 0.4 mL unit doses"
  },
  {
      "item-code": "5505R",
      "brand-name": [
          "Optifresh Plus"
      ],
      "mp-pt": "carmellose sodium",
      "tpuu-or-mpp-pt": "carmellose sodium 1% eye drops, 30 x 0.4 mL unit doses"
  },
  {
      "item-code": "5507W",
      "brand-name": [
          "Refresh Tears Plus"
      ],
      "mp-pt": "carmellose sodium",
      "tpuu-or-mpp-pt": "carmellose sodium 0.5% eye drops, 15 mL"
  },
  {
      "item-code": "5506T",
      "brand-name": [
          "Cellufresh"
      ],
      "mp-pt": "carmellose sodium",
      "tpuu-or-mpp-pt": "carmellose sodium 0.5% eye drops, 30 x 0.4 mL unit doses"
  },
  {
      "item-code": "5506T",
      "brand-name": [
          "Optifresh Tears"
      ],
      "mp-pt": "carmellose sodium",
      "tpuu-or-mpp-pt": "carmellose sodium 0.5% eye drops, 30 x 0.4 mL unit doses"
  },
  {
      "item-code": "5504Q",
      "brand-name": [
          "Viscotears Gel PF"
      ],
      "mp-pt": "carbomer-980",
      "tpuu-or-mpp-pt": "carbomer-980 0.2% eye drops, 30 x 0.6 mL unit doses"
  },
  {
      "item-code": "5502N",
      "brand-name": [
          "Poly Gel"
      ],
      "mp-pt": "carbomer-974P",
      "tpuu-or-mpp-pt": "carbomer-974P 0.3% eye gel, 30 x 500 mg unit doses"
  },
  {
      "item-code": "5503P",
      "brand-name": [
          "Viscotears"
      ],
      "mp-pt": "carbomer-980",
      "tpuu-or-mpp-pt": "carbomer-980 0.2% eye gel, 10 g"
  },
  {
      "item-code": "5503P",
      "brand-name": [
          "Optifresh eye gel"
      ],
      "mp-pt": "carbomer-980",
      "tpuu-or-mpp-pt": "carbomer-980 0.2% eye gel, 10 g"
  },
  {
      "item-code": "5503P",
      "brand-name": [
          "PAA"
      ],
      "mp-pt": "carbomer-980",
      "tpuu-or-mpp-pt": "carbomer-980 0.2% eye gel, 10 g"
  },
  {
      "item-code": "5556K",
      "brand-name": [
          "Optive"
      ],
      "mp-pt": "carmellose sodium + glycerol",
      "tpuu-or-mpp-pt": "carmellose sodium 0.5% + glycerol 0.9% eye drops, 15 mL"
  },
  {
      "item-code": "11853W",
      "brand-name": [
          "Evolve Carmellose"
      ],
      "mp-pt": "carmellose sodium",
      "tpuu-or-mpp-pt": "carmellose sodium 0.5% eye drops, 10 mL"
  },
  {
      "item-code": "5562R",
      "brand-name": [
          "Azarga"
      ],
      "mp-pt": "brinzolamide + timolol",
      "tpuu-or-mpp-pt": "brinzolamide 1% + timolol 0.5% eye drops, 5 mL"
  },
  {
      "item-code": "5542Q",
      "brand-name": [
          "Cosopt"
      ],
      "mp-pt": "dorzolamide + timolol",
      "tpuu-or-mpp-pt": "dorzolamide 2% + timolol 0.5% eye drops, 5 mL"
  },
  {
      "item-code": "5542Q",
      "brand-name": [
          "Cosdor"
      ],
      "mp-pt": "dorzolamide + timolol",
      "tpuu-or-mpp-pt": "dorzolamide 2% + timolol 0.5% eye drops, 5 mL"
  },
  {
      "item-code": "5542Q",
      "brand-name": [
          "APO-Dorzolamide/Timolol 20/5"
      ],
      "mp-pt": "dorzolamide + timolol",
      "tpuu-or-mpp-pt": "dorzolamide 2% + timolol 0.5% eye drops, 5 mL"
  },
  {
      "item-code": "5554H",
      "brand-name": [
          "Travatan"
      ],
      "mp-pt": "travoprost",
      "tpuu-or-mpp-pt": "travoprost 0.004% eye drops, 2.5 mL"
  },
  {
      "item-code": "5551E",
      "brand-name": [
          "Lumigan"
      ],
      "mp-pt": "bimatoprost",
      "tpuu-or-mpp-pt": "bimatoprost 0.03% eye drops, 3 mL"
  },
  {
      "item-code": "5551E",
      "brand-name": [
          "Bimatoprost Sandoz"
      ],
      "mp-pt": "bimatoprost",
      "tpuu-or-mpp-pt": "bimatoprost 0.03% eye drops, 3 mL"
  },
  {
      "item-code": "5551E",
      "brand-name": [
          "Bimtop"
      ],
      "mp-pt": "bimatoprost",
      "tpuu-or-mpp-pt": "bimatoprost 0.03% eye drops, 3 mL"
  },
  {
      "item-code": "5551E",
      "brand-name": [
          "APO-Bimatoprost"
      ],
      "mp-pt": "bimatoprost",
      "tpuu-or-mpp-pt": "bimatoprost 0.03% eye drops, 3 mL"
  },
  {
      "item-code": "5551E",
      "brand-name": [
          "Bimprozt"
      ],
      "mp-pt": "bimatoprost",
      "tpuu-or-mpp-pt": "bimatoprost 0.03% eye drops, 3 mL"
  },
  {
      "item-code": "5565X",
      "brand-name": [
          "Maxidex"
      ],
      "mp-pt": "dexamethasone",
      "tpuu-or-mpp-pt": "dexamethasone 0.1% eye drops, 5 mL"
  },
  {
      "item-code": "5569D",
      "brand-name": [
          "Tobrex"
      ],
      "mp-pt": "tobramycin",
      "tpuu-or-mpp-pt": "tobramycin 0.3% eye drops, 5 mL"
  },
  {
      "item-code": "5570E",
      "brand-name": [
          "Tobrex"
      ],
      "mp-pt": "tobramycin",
      "tpuu-or-mpp-pt": "tobramycin 0.3% eye ointment, 3.5 g"
  },
  {
      "item-code": "5535H",
      "brand-name": [
          "Combigan"
      ],
      "mp-pt": "brimonidine + timolol",
      "tpuu-or-mpp-pt": "brimonidine tartrate 0.2% + timolol 0.5% eye drops, 5 mL"
  },
  {
      "item-code": "10053D",
      "brand-name": [
          "Lumigan PF"
      ],
      "mp-pt": "bimatoprost",
      "tpuu-or-mpp-pt": "bimatoprost 0.03% eye drops, 30 x 0.4 mL unit doses"
  },
  {
      "item-code": "10547D",
      "brand-name": [
          "Simbrinza 1%/0.2%"
      ],
      "mp-pt": "brinzolamide + brimonidine",
      "tpuu-or-mpp-pt": "brinzolamide 1% + brimonidine tartrate 0.2% eye drops, 5 mL"
  },
  {
      "item-code": "5563T",
      "brand-name": [
          "Alphagan P 1.5"
      ],
      "mp-pt": "brimonidine",
      "tpuu-or-mpp-pt": "brimonidine tartrate 0.15% eye drops, 5 mL"
  },
  {
      "item-code": "5534G",
      "brand-name": [
          "Alphagan"
      ],
      "mp-pt": "brimonidine",
      "tpuu-or-mpp-pt": "brimonidine tartrate 0.2% eye drops, 5 mL"
  },
  {
      "item-code": "5534G",
      "brand-name": [
          "Enidin"
      ],
      "mp-pt": "brimonidine",
      "tpuu-or-mpp-pt": "brimonidine tartrate 0.2% eye drops, 5 mL"
  },
  {
      "item-code": "5540N",
      "brand-name": [
          "BrinzoQuin"
      ],
      "mp-pt": "brinzolamide",
      "tpuu-or-mpp-pt": "brinzolamide 1% eye drops, 5 mL"
  },
  {
      "item-code": "5540N",
      "brand-name": [
          "Azopt"
      ],
      "mp-pt": "brinzolamide",
      "tpuu-or-mpp-pt": "brinzolamide 1% eye drops, 5 mL"
  },
  {
      "item-code": "5520M",
      "brand-name": [
          "Poly-Tears"
      ],
      "mp-pt": "dextran-70 + hypromellose",
      "tpuu-or-mpp-pt": "dextran-70 0.1% + hypromellose 0.3% eye drops, 15 mL"
  },
  {
      "item-code": "5520M",
      "brand-name": [
          "Tears Naturale"
      ],
      "mp-pt": "dextran-70 + hypromellose",
      "tpuu-or-mpp-pt": "dextran-70 0.1% + hypromellose 0.3% eye drops, 15 mL"
  },
  {
      "item-code": "5521N",
      "brand-name": [
          "Bion Tears"
      ],
      "mp-pt": "dextran-70 + hypromellose",
      "tpuu-or-mpp-pt": "dextran-70 0.1% + hypromellose 0.3% eye drops, 28 x 0.4 mL unit doses"
  },
  {
      "item-code": "5523Q",
      "brand-name": [
          "Poly Visc"
      ],
      "mp-pt": "paraffin",
      "tpuu-or-mpp-pt": "paraffin 1 g/g eye ointment, 3.5 g"
  },
  {
      "item-code": "5516H",
      "brand-name": [
          "Hycor"
      ],
      "mp-pt": "hydrocortisone acetate",
      "tpuu-or-mpp-pt": "hydrocortisone acetate 1% eye ointment, 5 g"
  },
  {
      "item-code": "2748P",
      "brand-name": [
          "Saflutan"
      ],
      "mp-pt": "tafluprost",
      "tpuu-or-mpp-pt": "tafluprost 0.0015% eye drops, 30 x 0.3 mL unit doses"
  },
  {
      "item-code": "5501M",
      "brand-name": [
          "ViruPOS"
      ],
      "mp-pt": "aciclovir",
      "tpuu-or-mpp-pt": "aciclovir 3% eye ointment, 4.5 g"
  },
  {
      "item-code": "5501M",
      "brand-name": [
          "XOROX"
      ],
      "mp-pt": "aciclovir",
      "tpuu-or-mpp-pt": "aciclovir 3% eye ointment, 4.5 g"
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
      "item-code": "5517J",
      "brand-name": [
          "Methopt"
      ],
      "mp-pt": "hypromellose",
      "tpuu-or-mpp-pt": "hypromellose 0.5% eye drops, 15 mL"
  },
  {
      "item-code": "5545W",
      "brand-name": [
          "tearsagain"
      ],
      "mp-pt": "soy lecithin + tocopherol + vitamin A",
      "tpuu-or-mpp-pt": "soy lecithin 1% + tocopherol 0.002% + vitamin A palmitate 0.025% spray, 100 actuations"
  },
  {
      "item-code": "5522P",
      "brand-name": [
          "Poly Visc"
      ],
      "mp-pt": "paraffin",
      "tpuu-or-mpp-pt": "paraffin 1 g/g eye ointment, 2 x 3.5 g"
  },
  {
      "item-code": "5522P",
      "brand-name": [
          "Refresh Night Time"
      ],
      "mp-pt": "paraffin",
      "tpuu-or-mpp-pt": "paraffin 1 g/g eye ointment, 2 x 3.5 g"
  },
  {
      "item-code": "5522P",
      "brand-name": [
          "Ircal"
      ],
      "mp-pt": "paraffin",
      "tpuu-or-mpp-pt": "paraffin 1 g/g eye ointment, 2 x 3.5 g"
  },
  {
      "item-code": "5519L",
      "brand-name": [
          "Genteal gel"
      ],
      "mp-pt": "hypromellose + carbomer-980",
      "tpuu-or-mpp-pt": "hypromellose 0.3% + carbomer-980 0.2% eye gel, 10 g"
  },
  {
      "item-code": "5519L",
      "brand-name": [
          "HPMC PAA"
      ],
      "mp-pt": "hypromellose + carbomer-980",
      "tpuu-or-mpp-pt": "hypromellose 0.3% + carbomer-980 0.2% eye gel, 10 g"
  },
  {
      "item-code": "5526W",
      "brand-name": [
          "PVA Tears"
      ],
      "mp-pt": "polyvinyl alcohol",
      "tpuu-or-mpp-pt": "polyvinyl alcohol 1.4% eye drops, 15 mL"
  },
  {
      "item-code": "5526W",
      "brand-name": [
          "Liquifilm Tears"
      ],
      "mp-pt": "polyvinyl alcohol",
      "tpuu-or-mpp-pt": "polyvinyl alcohol 1.4% eye drops, 15 mL"
  },
  {
      "item-code": "2167C",
      "brand-name": [
          "VitA-POS"
      ],
      "mp-pt": "retinol palmitate + paraffin",
      "tpuu-or-mpp-pt": "retinol palmitate 0.0138% + paraffin eye ointment, 5 g"
  },
  {
      "item-code": "5541P",
      "brand-name": [
          "Trusopt"
      ],
      "mp-pt": "dorzolamide",
      "tpuu-or-mpp-pt": "dorzolamide 2% eye drops, 5 mL"
  },
  {
      "item-code": "5541P",
      "brand-name": [
          "Trusamide"
      ],
      "mp-pt": "dorzolamide",
      "tpuu-or-mpp-pt": "dorzolamide 2% eye drops, 5 mL"
  },
  {
      "item-code": "5541P",
      "brand-name": [
          "APO-Dorzolamide"
      ],
      "mp-pt": "dorzolamide",
      "tpuu-or-mpp-pt": "dorzolamide 2% eye drops, 5 mL"
  },
  {
      "item-code": "5536J",
      "brand-name": [
          "Isopto Carpine"
      ],
      "mp-pt": "pilocarpine",
      "tpuu-or-mpp-pt": "pilocarpine hydrochloride 1% eye drops, 15 mL"
  },
  {
      "item-code": "5537K",
      "brand-name": [
          "Isopto Carpine"
      ],
      "mp-pt": "pilocarpine",
      "tpuu-or-mpp-pt": "pilocarpine hydrochloride 2% eye drops, 15 mL"
  },
  {
      "item-code": "5538L",
      "brand-name": [
          "Isopto Carpine"
      ],
      "mp-pt": "pilocarpine",
      "tpuu-or-mpp-pt": "pilocarpine hydrochloride 4% eye drops, 15 mL"
  },
  {
      "item-code": "5544T",
      "brand-name": [
          "BetoQuin"
      ],
      "mp-pt": "betaxolol",
      "tpuu-or-mpp-pt": "betaxolol 0.5% eye drops, 5 mL"
  },
  {
      "item-code": "5544T",
      "brand-name": [
          "Betoptic"
      ],
      "mp-pt": "betaxolol",
      "tpuu-or-mpp-pt": "betaxolol 0.5% eye drops, 5 mL"
  },
  {
      "item-code": "11439C",
      "brand-name": [
          "Novatears"
      ],
      "mp-pt": "perfluorohexyloctane",
      "tpuu-or-mpp-pt": "perfluorohexyloctane 100% eye drops, 3 mL"
  },
  {
      "item-code": "11634H",
      "brand-name": [
          "Genteal"
      ],
      "mp-pt": "hypromellose",
      "tpuu-or-mpp-pt": "hypromellose 0.3% w/w eye drops, 10 mL"
  },
  {
      "item-code": "11634H",
      "brand-name": [
          "In a Wink Moisturising"
      ],
      "mp-pt": "hypromellose",
      "tpuu-or-mpp-pt": "hypromellose 0.3% w/w eye drops, 10 mL"
  },
  {
      "item-code": "11849P",
      "brand-name": [
          "Evolve Hypromellose"
      ],
      "mp-pt": "hypromellose",
      "tpuu-or-mpp-pt": "hypromellose 0.3% w/v eye drops, 10 mL"
  },
  {
      "item-code": "12612T",
      "brand-name": [
          "Cationorm"
      ],
      "mp-pt": "liquid paraffin + glycerol + tyloxapol + poloxamer-188 + trometamol hydrochlorid",
      "tpuu-or-mpp-pt": "liquid paraffin + glycerol + tyloxapol + poloxamer-188 + trometamol hydrochloride + trometamol + cetalkonium chloride eye drops, 10 mL"
  },
  {
      "item-code": "5564W",
      "brand-name": [
          "CiloQuin"
      ],
      "mp-pt": "ciprofloxacin",
      "tpuu-or-mpp-pt": "ciprofloxacin 0.3% eye drops, 5 mL"
  },
  {
      "item-code": "5564W",
      "brand-name": [
          "Ciloxan"
      ],
      "mp-pt": "ciprofloxacin",
      "tpuu-or-mpp-pt": "ciprofloxacin 0.3% eye drops, 5 mL"
  },
  {
      "item-code": "5567B",
      "brand-name": [
          "Ocuflox"
      ],
      "mp-pt": "ofloxacin",
      "tpuu-or-mpp-pt": "ofloxacin 0.3% eye drops, 5 mL"
  },
  {
      "item-code": "5566Y",
      "brand-name": [
          "Genoptic"
      ],
      "mp-pt": "gentamicin",
      "tpuu-or-mpp-pt": "gentamicin 0.3% eye drops, 5 mL"
  },
  {
      "item-code": "5557L",
      "brand-name": [
          "Soframycin"
      ],
      "mp-pt": "framycetin sulfate",
      "tpuu-or-mpp-pt": "framycetin sulfate 0.5% eye/ear drops, 8 mL"
  },
  {
      "item-code": "12663L",
      "brand-name": [
          "Ikervis"
      ],
      "mp-pt": "ciclosporin",
      "tpuu-or-mpp-pt": "ciclosporin 0.1% eye drops, 30 x 0.3 mL unit doses"
  },
  {
      "item-code": "12572Q",
      "brand-name": [
          "PRED FORTE"
      ],
      "mp-pt": "prednisolone acetate",
      "tpuu-or-mpp-pt": "prednisolone acetate 1% eye drops, 10 mL"
  },
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
  },
  {
      "item-code": "",
      "brand-name": [
          "Optrex Actimist"
      ],
      "mp-pt": "soy lecithin + tocopherol + vitamin A",
      "tpuu-or-mpp-pt": "soy lecithin 1% + tocopherol 0.002% + vitamin A palmitate 0.025% spray, 100 actuations"
  },
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
          "Zyrtec"
      ],
      "mp-pt": "levocabastine",
      "tpuu-or-mpp-pt": "levocabastine hydrochloride 0.05% eye drops, 4 mL"
  },
  {
      "item-code": "",
      "brand-name": [
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
          "Visine Allergy"
      ],
      "mp-pt": "naphazoline + pheniramine",
      "tpuu-or-mpp-pt": "naphazoline hydrochloride 0.025% + pheniramine maleate 0.3% eye drops, 15 mL"
  },
  {
      "item-code": "",
      "brand-name": [
          "Naphcon-A"
      ],
      "mp-pt": "naphazoline + pheniramine",
      "tpuu-or-mpp-pt": "naphazoline hydrochloride 0.025% + pheniramine maleate 0.3% eye drops, 15 mL"
  },
  {
      "item-code": "",
      "brand-name": [
          "Naphcon-Forte"
      ],
      "mp-pt": "naphazoline",
      "tpuu-or-mpp-pt": "naphazoline hydrochloride 0.1% eye drops, 15 mL"
  },
  {
      "item-code": "",
      "brand-name": [
          "Albalon"
      ],
      "mp-pt": "naphazoline",
      "tpuu-or-mpp-pt": "naphazoline hydrochloride 0.1% eye drops, 15 mL"
  },
  {
      "item-code": "",
      "brand-name": [
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
  }
]

const newData = [
  {
      "item-code": "5552F",
      "brand-name": [
          "Xalatan"
      ],
      "mp-pt": "latanoprost",
      "tpuu-or-mpp-pt": "latanoprost 0.005% eye drops, 2.5 mL"
  },
  {
      "item-code": "5552F",
      "brand-name": [
          "Xalaprost"
      ],
      "mp-pt": "latanoprost",
      "tpuu-or-mpp-pt": "latanoprost 0.005% eye drops, 2.5 mL"
  },
  {
      "item-code": "5552F",
      "brand-name": [
          "Latanoprost Actavis"
      ],
      "mp-pt": "latanoprost",
      "tpuu-or-mpp-pt": "latanoprost 0.005% eye drops, 2.5 mL"
  },
  {
      "item-code": "5552F",
      "brand-name": [
          "Latanoprost Sandoz"
      ],
      "mp-pt": "latanoprost",
      "tpuu-or-mpp-pt": "latanoprost 0.005% eye drops, 2.5 mL"
  },
  {
      "item-code": "5552F",
      "brand-name": [
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
          "Xalacom"
      ],
      "mp-pt": "latanoprost + timolol",
      "tpuu-or-mpp-pt": "latanoprost 0.005% + timolol 0.5% eye drops, 2.5 mL"
  },
  {
      "item-code": "5553G",
      "brand-name": [
          "Xalamol 50/5"
      ],
      "mp-pt": "latanoprost + timolol",
      "tpuu-or-mpp-pt": "latanoprost 0.005% + timolol 0.5% eye drops, 2.5 mL"
  },
  {
      "item-code": "5553G",
      "brand-name": [
          "Latanoprost/Timolol Sandoz 50/5"
      ],
      "mp-pt": "latanoprost + timolol",
      "tpuu-or-mpp-pt": "latanoprost 0.005% + timolol 0.5% eye drops, 2.5 mL"
  },
  {
      "item-code": "5553G",
      "brand-name": [
          "APO-Latanoprost/Timolol 0.05/5"
      ],
      "mp-pt": "latanoprost + timolol",
      "tpuu-or-mpp-pt": "latanoprost 0.005% + timolol 0.5% eye drops, 2.5 mL"
  },
  {
      "item-code": "10108B",
      "brand-name": [
          "GANfort PF 0.3/5"
      ],
      "mp-pt": "bimatoprost + timolol",
      "tpuu-or-mpp-pt": "bimatoprost 0.03% + timolol 0.5% eye drops, 30 x 0.4 mL unit doses"
  },
  {
      "item-code": "5558M",
      "brand-name": [
          "Ganfort 0.3/5"
      ],
      "mp-pt": "bimatoprost + timolol",
      "tpuu-or-mpp-pt": "bimatoprost 0.03% + timolol 0.5% eye drops, 3 mL"
  },
  {
      "item-code": "5568C",
      "brand-name": [
          "Prednefrin Forte"
      ],
      "mp-pt": "prednisolone acetate + phenylephrine",
      "tpuu-or-mpp-pt": "prednisolone acetate 1% + phenylephrine hydrochloride 0.12% eye drops, 10 mL"
  },
  {
      "item-code": "5555J",
      "brand-name": [
          "Duotrav"
      ],
      "mp-pt": "travoprost + timolol",
      "tpuu-or-mpp-pt": "travoprost 0.004% + timolol 0.5% eye drops, 2.5 mL"
  },
  {
      "item-code": "5550D",
      "brand-name": [
          "Timoptol XE"
      ],
      "mp-pt": "timolol",
      "tpuu-or-mpp-pt": "timolol 0.5% eye drops, 2.5 mL"
  },
  {
      "item-code": "5548B",
      "brand-name": [
          "Timoptol"
      ],
      "mp-pt": "timolol",
      "tpuu-or-mpp-pt": "timolol 0.5% eye drops, 5 mL"
  },
  {
      "item-code": "5533F",
      "brand-name": [
          "Flarex"
      ],
      "mp-pt": "fluorometholone acetate",
      "tpuu-or-mpp-pt": "fluorometholone acetate 0.1% eye drops, 5 mL"
  },
  {
      "item-code": "11112W",
      "brand-name": [
          "Chlorsig"
      ],
      "mp-pt": "chloramphenicol",
      "tpuu-or-mpp-pt": "chloramphenicol 0.5% eye drops, 10 mL"
  },
  {
      "item-code": "2184Y",
      "brand-name": [
          "Hylo-Fresh"
      ],
      "mp-pt": "hyaluronate sodium",
      "tpuu-or-mpp-pt": "hyaluronate sodium 0.1% eye drops, 10 mL"
  },
  {
      "item-code": "2171G",
      "brand-name": [
          "Hylo-Forte"
      ],
      "mp-pt": "hyaluronate sodium",
      "tpuu-or-mpp-pt": "hyaluronate sodium 0.2% eye drops, 10 mL"
  },
  {
      "item-code": "5524R",
      "brand-name": [
          "Systane"
      ],
      "mp-pt": "polyethylene glycol-400 + propylene glycol",
      "tpuu-or-mpp-pt": "polyethylene glycol-400 0.4% + propylene glycol 0.3% eye drops, 15 mL"
  },
  {
      "item-code": "5532E",
      "brand-name": [
          "Systane"
      ],
      "mp-pt": "polyethylene glycol-400 + propylene glycol",
      "tpuu-or-mpp-pt": "polyethylene glycol-400 0.4% + propylene glycol 0.3% eye drops, 28 x 0.8 mL unit doses"
  },
  {
      "item-code": "5508X",
      "brand-name": [
          "Refresh Liquigel"
      ],
      "mp-pt": "carmellose sodium",
      "tpuu-or-mpp-pt": "carmellose sodium 1% eye drops, 15 mL"
  },
  {
      "item-code": "5505R",
      "brand-name": [
          "Celluvisc"
      ],
      "mp-pt": "carmellose sodium",
      "tpuu-or-mpp-pt": "carmellose sodium 1% eye drops, 30 x 0.4 mL unit doses"
  },
  {
      "item-code": "5505R",
      "brand-name": [
          "Optifresh Plus"
      ],
      "mp-pt": "carmellose sodium",
      "tpuu-or-mpp-pt": "carmellose sodium 1% eye drops, 30 x 0.4 mL unit doses"
  },
  {
      "item-code": "5507W",
      "brand-name": [
          "Refresh Tears Plus"
      ],
      "mp-pt": "carmellose sodium",
      "tpuu-or-mpp-pt": "carmellose sodium 0.5% eye drops, 15 mL"
  },
  {
      "item-code": "5506T",
      "brand-name": [
          "Cellufresh"
      ],
      "mp-pt": "carmellose sodium",
      "tpuu-or-mpp-pt": "carmellose sodium 0.5% eye drops, 30 x 0.4 mL unit doses"
  },
  {
      "item-code": "5506T",
      "brand-name": [
          "Optifresh Tears"
      ],
      "mp-pt": "carmellose sodium",
      "tpuu-or-mpp-pt": "carmellose sodium 0.5% eye drops, 30 x 0.4 mL unit doses"
  },
  {
      "item-code": "5504Q",
      "brand-name": [
          "Viscotears Gel PF"
      ],
      "mp-pt": "carbomer-980",
      "tpuu-or-mpp-pt": "carbomer-980 0.2% eye drops, 30 x 0.6 mL unit doses"
  },
  {
      "item-code": "5502N",
      "brand-name": [
          "Poly Gel"
      ],
      "mp-pt": "carbomer-974P",
      "tpuu-or-mpp-pt": "carbomer-974P 0.3% eye gel, 30 x 500 mg unit doses"
  },
  {
      "item-code": "5503P",
      "brand-name": [
          "Optifresh eye gel"
      ],
      "mp-pt": "carbomer-980",
      "tpuu-or-mpp-pt": "carbomer-980 0.2% eye gel, 10 g"
  },
  {
      "item-code": "5503P",
      "brand-name": [
          "PAA"
      ],
      "mp-pt": "carbomer-980",
      "tpuu-or-mpp-pt": "carbomer-980 0.2% eye gel, 10 g"
  },
  {
      "item-code": "5503P",
      "brand-name": [
          "Viscotears"
      ],
      "mp-pt": "carbomer-980",
      "tpuu-or-mpp-pt": "carbomer-980 0.2% eye gel, 10 g"
  },
  {
      "item-code": "5556K",
      "brand-name": [
          "Optive"
      ],
      "mp-pt": "carmellose sodium + glycerol",
      "tpuu-or-mpp-pt": "carmellose sodium 0.5% + glycerol 0.9% eye drops, 15 mL"
  },
  {
      "item-code": "11853W",
      "brand-name": [
          "Evolve Carmellose"
      ],
      "mp-pt": "carmellose sodium",
      "tpuu-or-mpp-pt": "carmellose sodium 0.5% eye drops, 10 mL"
  },
  {
      "item-code": "5562R",
      "brand-name": [
          "Azarga"
      ],
      "mp-pt": "brinzolamide + timolol",
      "tpuu-or-mpp-pt": "brinzolamide 1% + timolol 0.5% eye drops, 5 mL"
  },
  {
      "item-code": "5542Q",
      "brand-name": [
          "Cosopt"
      ],
      "mp-pt": "dorzolamide + timolol",
      "tpuu-or-mpp-pt": "dorzolamide 2% + timolol 0.5% eye drops, 5 mL"
  },
  {
      "item-code": "5542Q",
      "brand-name": [
          "Cosdor"
      ],
      "mp-pt": "dorzolamide + timolol",
      "tpuu-or-mpp-pt": "dorzolamide 2% + timolol 0.5% eye drops, 5 mL"
  },
  {
      "item-code": "5542Q",
      "brand-name": [
          "APO-Dorzolamide/Timolol 20/5"
      ],
      "mp-pt": "dorzolamide + timolol",
      "tpuu-or-mpp-pt": "dorzolamide 2% + timolol 0.5% eye drops, 5 mL"
  },
  {
      "item-code": "5554H",
      "brand-name": [
          "Travatan"
      ],
      "mp-pt": "travoprost",
      "tpuu-or-mpp-pt": "travoprost 0.004% eye drops, 2.5 mL"
  },
  {
      "item-code": "5551E",
      "brand-name": [
          "Lumigan"
      ],
      "mp-pt": "bimatoprost",
      "tpuu-or-mpp-pt": "bimatoprost 0.03% eye drops, 3 mL"
  },
  {
      "item-code": "5551E",
      "brand-name": [
          "Bimtop"
      ],
      "mp-pt": "bimatoprost",
      "tpuu-or-mpp-pt": "bimatoprost 0.03% eye drops, 3 mL"
  },
  {
      "item-code": "5551E",
      "brand-name": [
          "Bimatoprost Sandoz"
      ],
      "mp-pt": "bimatoprost",
      "tpuu-or-mpp-pt": "bimatoprost 0.03% eye drops, 3 mL"
  },
  {
      "item-code": "5551E",
      "brand-name": [
          "APO-Bimatoprost"
      ],
      "mp-pt": "bimatoprost",
      "tpuu-or-mpp-pt": "bimatoprost 0.03% eye drops, 3 mL"
  },
  {
      "item-code": "5551E",
      "brand-name": [
          "Bimprozt"
      ],
      "mp-pt": "bimatoprost",
      "tpuu-or-mpp-pt": "bimatoprost 0.03% eye drops, 3 mL"
  },
  {
      "item-code": "5565X",
      "brand-name": [
          "Maxidex"
      ],
      "mp-pt": "dexamethasone",
      "tpuu-or-mpp-pt": "dexamethasone 0.1% eye drops, 5 mL"
  },
  {
      "item-code": "5569D",
      "brand-name": [
          "Tobrex"
      ],
      "mp-pt": "tobramycin",
      "tpuu-or-mpp-pt": "tobramycin 0.3% eye drops, 5 mL"
  },
  {
      "item-code": "5570E",
      "brand-name": [
          "Tobrex"
      ],
      "mp-pt": "tobramycin",
      "tpuu-or-mpp-pt": "tobramycin 0.3% eye ointment, 3.5 g"
  },
  {
      "item-code": "5535H",
      "brand-name": [
          "Combigan"
      ],
      "mp-pt": "brimonidine + timolol",
      "tpuu-or-mpp-pt": "brimonidine tartrate 0.2% + timolol 0.5% eye drops, 5 mL"
  },
  {
      "item-code": "10053D",
      "brand-name": [
          "Lumigan PF"
      ],
      "mp-pt": "bimatoprost",
      "tpuu-or-mpp-pt": "bimatoprost 0.03% eye drops, 30 x 0.4 mL unit doses"
  },
  {
      "item-code": "10547D",
      "brand-name": [
          "Simbrinza 1%/0.2%"
      ],
      "mp-pt": "brinzolamide + brimonidine",
      "tpuu-or-mpp-pt": "brinzolamide 1% + brimonidine tartrate 0.2% eye drops, 5 mL"
  },
  {
      "item-code": "5563T",
      "brand-name": [
          "Alphagan P 1.5"
      ],
      "mp-pt": "brimonidine",
      "tpuu-or-mpp-pt": "brimonidine tartrate 0.15% eye drops, 5 mL"
  },
  {
      "item-code": "5534G",
      "brand-name": [
          "Alphagan"
      ],
      "mp-pt": "brimonidine",
      "tpuu-or-mpp-pt": "brimonidine tartrate 0.2% eye drops, 5 mL"
  },
  {
      "item-code": "5534G",
      "brand-name": [
          "Enidin"
      ],
      "mp-pt": "brimonidine",
      "tpuu-or-mpp-pt": "brimonidine tartrate 0.2% eye drops, 5 mL"
  },
  {
      "item-code": "5540N",
      "brand-name": [
          "BrinzoQuin"
      ],
      "mp-pt": "brinzolamide",
      "tpuu-or-mpp-pt": "brinzolamide 1% eye drops, 5 mL"
  },
  {
      "item-code": "5540N",
      "brand-name": [
          "Azopt"
      ],
      "mp-pt": "brinzolamide",
      "tpuu-or-mpp-pt": "brinzolamide 1% eye drops, 5 mL"
  },
  {
      "item-code": "5520M",
      "brand-name": [
          "Tears Naturale"
      ],
      "mp-pt": "dextran-70 + hypromellose",
      "tpuu-or-mpp-pt": "dextran-70 0.1% + hypromellose 0.3% eye drops, 15 mL"
  },
  {
      "item-code": "5520M",
      "brand-name": [
          "Poly-Tears"
      ],
      "mp-pt": "dextran-70 + hypromellose",
      "tpuu-or-mpp-pt": "dextran-70 0.1% + hypromellose 0.3% eye drops, 15 mL"
  },
  {
      "item-code": "5521N",
      "brand-name": [
          "Bion Tears"
      ],
      "mp-pt": "dextran-70 + hypromellose",
      "tpuu-or-mpp-pt": "dextran-70 0.1% + hypromellose 0.3% eye drops, 28 x 0.4 mL unit doses"
  },
  {
      "item-code": "5523Q",
      "brand-name": [
          "Poly Visc"
      ],
      "mp-pt": "paraffin",
      "tpuu-or-mpp-pt": "paraffin 1 g/g eye ointment, 3.5 g"
  },
  {
      "item-code": "5516H",
      "brand-name": [
          "Hycor"
      ],
      "mp-pt": "hydrocortisone acetate",
      "tpuu-or-mpp-pt": "hydrocortisone acetate 1% eye ointment, 5 g"
  },
  {
      "item-code": "2748P",
      "brand-name": [
          "Saflutan"
      ],
      "mp-pt": "tafluprost",
      "tpuu-or-mpp-pt": "tafluprost 0.0015% eye drops, 30 x 0.3 mL unit doses"
  },
  {
      "item-code": "5501M",
      "brand-name": [
          "ViruPOS"
      ],
      "mp-pt": "aciclovir",
      "tpuu-or-mpp-pt": "aciclovir 3% eye ointment, 4.5 g"
  },
  {
      "item-code": "5501M",
      "brand-name": [
          "XOROX"
      ],
      "mp-pt": "aciclovir",
      "tpuu-or-mpp-pt": "aciclovir 3% eye ointment, 4.5 g"
  },
  {
      "item-code": "5517J",
      "brand-name": [
          "Methopt"
      ],
      "mp-pt": "hypromellose",
      "tpuu-or-mpp-pt": "hypromellose 0.5% eye drops, 15 mL"
  },
  {
      "item-code": "5545W",
      "brand-name": [
          "tearsagain"
      ],
      "mp-pt": "soy lecithin + tocopherol + vitamin A",
      "tpuu-or-mpp-pt": "soy lecithin 1% + tocopherol 0.002% + vitamin A palmitate 0.025% spray, 100 actuations"
  },
  {
      "item-code": "5522P",
      "brand-name": [
          "Refresh Night Time"
      ],
      "mp-pt": "paraffin",
      "tpuu-or-mpp-pt": "paraffin 1 g/g eye ointment, 2 x 3.5 g"
  },
  {
      "item-code": "5522P",
      "brand-name": [
          "Poly Visc"
      ],
      "mp-pt": "paraffin",
      "tpuu-or-mpp-pt": "paraffin 1 g/g eye ointment, 2 x 3.5 g"
  },
  {
      "item-code": "5522P",
      "brand-name": [
          "Ircal"
      ],
      "mp-pt": "paraffin",
      "tpuu-or-mpp-pt": "paraffin 1 g/g eye ointment, 2 x 3.5 g"
  },
  {
      "item-code": "5519L",
      "brand-name": [
          "Genteal gel"
      ],
      "mp-pt": "hypromellose + carbomer-980",
      "tpuu-or-mpp-pt": "hypromellose 0.3% + carbomer-980 0.2% eye gel, 10 g"
  },
  {
      "item-code": "5519L",
      "brand-name": [
          "HPMC PAA"
      ],
      "mp-pt": "hypromellose + carbomer-980",
      "tpuu-or-mpp-pt": "hypromellose 0.3% + carbomer-980 0.2% eye gel, 10 g"
  },
  {
      "item-code": "5526W",
      "brand-name": [
          "Liquifilm Tears"
      ],
      "mp-pt": "polyvinyl alcohol",
      "tpuu-or-mpp-pt": "polyvinyl alcohol 1.4% eye drops, 15 mL"
  },
  {
      "item-code": "5526W",
      "brand-name": [
          "PVA Tears"
      ],
      "mp-pt": "polyvinyl alcohol",
      "tpuu-or-mpp-pt": "polyvinyl alcohol 1.4% eye drops, 15 mL"
  },
  {
      "item-code": "2167C",
      "brand-name": [
          "VitA-POS"
      ],
      "mp-pt": "retinol palmitate + paraffin",
      "tpuu-or-mpp-pt": "retinol palmitate 0.0138% + paraffin eye ointment, 5 g"
  },
  {
      "item-code": "5541P",
      "brand-name": [
          "Trusopt"
      ],
      "mp-pt": "dorzolamide",
      "tpuu-or-mpp-pt": "dorzolamide 2% eye drops, 5 mL"
  },
  {
      "item-code": "5541P",
      "brand-name": [
          "Trusamide"
      ],
      "mp-pt": "dorzolamide",
      "tpuu-or-mpp-pt": "dorzolamide 2% eye drops, 5 mL"
  },
  {
      "item-code": "5541P",
      "brand-name": [
          "APO-Dorzolamide"
      ],
      "mp-pt": "dorzolamide",
      "tpuu-or-mpp-pt": "dorzolamide 2% eye drops, 5 mL"
  },
  {
      "item-code": "5536J",
      "brand-name": [
          "Isopto Carpine"
      ],
      "mp-pt": "pilocarpine",
      "tpuu-or-mpp-pt": "pilocarpine hydrochloride 1% eye drops, 15 mL"
  },
  {
      "item-code": "5537K",
      "brand-name": [
          "Isopto Carpine"
      ],
      "mp-pt": "pilocarpine",
      "tpuu-or-mpp-pt": "pilocarpine hydrochloride 2% eye drops, 15 mL"
  },
  {
      "item-code": "5538L",
      "brand-name": [
          "Isopto Carpine"
      ],
      "mp-pt": "pilocarpine",
      "tpuu-or-mpp-pt": "pilocarpine hydrochloride 4% eye drops, 15 mL"
  },
  {
      "item-code": "5544T",
      "brand-name": [
          "BetoQuin"
      ],
      "mp-pt": "betaxolol",
      "tpuu-or-mpp-pt": "betaxolol 0.5% eye drops, 5 mL"
  },
  {
      "item-code": "5544T",
      "brand-name": [
          "Betoptic"
      ],
      "mp-pt": "betaxolol",
      "tpuu-or-mpp-pt": "betaxolol 0.5% eye drops, 5 mL"
  },
  {
      "item-code": "11439C",
      "brand-name": [
          "Novatears"
      ],
      "mp-pt": "perfluorohexyloctane",
      "tpuu-or-mpp-pt": "perfluorohexyloctane 100% eye drops, 3 mL"
  },
  {
      "item-code": "11634H",
      "brand-name": [
          "Genteal"
      ],
      "mp-pt": "hypromellose",
      "tpuu-or-mpp-pt": "hypromellose 0.3% w/w eye drops, 10 mL"
  },
  {
      "item-code": "11634H",
      "brand-name": [
          "In a Wink Moisturising"
      ],
      "mp-pt": "hypromellose",
      "tpuu-or-mpp-pt": "hypromellose 0.3% w/w eye drops, 10 mL"
  },
  {
      "item-code": "11849P",
      "brand-name": [
          "Evolve Hypromellose"
      ],
      "mp-pt": "hypromellose",
      "tpuu-or-mpp-pt": "hypromellose 0.3% w/v eye drops, 10 mL"
  },
  {
      "item-code": "12612T",
      "brand-name": [
          "Cationorm"
      ],
      "mp-pt": "liquid paraffin + glycerol + tyloxapol + poloxamer-188 + trometamol hydrochlorid",
      "tpuu-or-mpp-pt": "liquid paraffin + glycerol + tyloxapol + poloxamer-188 + trometamol hydrochloride + trometamol + cetalkonium chloride eye drops, 10 mL"
  },
  {
      "item-code": "5564W",
      "brand-name": [
          "CiloQuin"
      ],
      "mp-pt": "ciprofloxacin",
      "tpuu-or-mpp-pt": "ciprofloxacin 0.3% eye drops, 5 mL"
  },
  {
      "item-code": "5564W",
      "brand-name": [
          "Ciloxan"
      ],
      "mp-pt": "ciprofloxacin",
      "tpuu-or-mpp-pt": "ciprofloxacin 0.3% eye drops, 5 mL"
  },
  {
      "item-code": "5567B",
      "brand-name": [
          "Ocuflox"
      ],
      "mp-pt": "ofloxacin",
      "tpuu-or-mpp-pt": "ofloxacin 0.3% eye drops, 5 mL"
  },
  {
      "item-code": "5566Y",
      "brand-name": [
          "Genoptic"
      ],
      "mp-pt": "gentamicin",
      "tpuu-or-mpp-pt": "gentamicin 0.3% eye drops, 5 mL"
  },
  {
      "item-code": "5557L",
      "brand-name": [
          "Soframycin"
      ],
      "mp-pt": "framycetin sulfate",
      "tpuu-or-mpp-pt": "framycetin sulfate 0.5% eye/ear drops, 8 mL"
  },
  {
      "item-code": "12663L",
      "brand-name": [
          "Ikervis"
      ],
      "mp-pt": "ciclosporin",
      "tpuu-or-mpp-pt": "ciclosporin 0.1% eye drops, 30 x 0.3 mL unit doses"
  },
  {
      "item-code": "12572Q",
      "brand-name": [
          "PRED FORTE"
      ],
      "mp-pt": "prednisolone acetate",
      "tpuu-or-mpp-pt": "prednisolone acetate 1% eye drops, 10 mL"
  },
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
          "Zyrtec"
      ],
      "mp-pt": "levocabastine",
      "tpuu-or-mpp-pt": "levocabastine hydrochloride 0.05% eye drops, 4 mL"
  },
  {
      "item-code": "",
      "brand-name": [
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
          "Visine Allergy"
      ],
      "mp-pt": "naphazoline + pheniramine",
      "tpuu-or-mpp-pt": "naphazoline hydrochloride 0.025% + pheniramine maleate 0.3% eye drops, 15 mL"
  },
  {
      "item-code": "",
      "brand-name": [
          "Naphcon-A"
      ],
      "mp-pt": "naphazoline + pheniramine",
      "tpuu-or-mpp-pt": "naphazoline hydrochloride 0.025% + pheniramine maleate 0.3% eye drops, 15 mL"
  },
  {
      "item-code": "",
      "brand-name": [
          "Naphcon-Forte"
      ],
      "mp-pt": "naphazoline",
      "tpuu-or-mpp-pt": "naphazoline hydrochloride 0.1% eye drops, 15 mL"
  },
  {
      "item-code": "",
      "brand-name": [
          "Albalon"
      ],
      "mp-pt": "naphazoline",
      "tpuu-or-mpp-pt": "naphazoline hydrochloride 0.1% eye drops, 15 mL"
  },
  {
      "item-code": "",
      "brand-name": [
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

const newNonPBS = [];
const oldNonPBS = [];
const newPBS = [];
const oldPBS = [];

newData.forEach((drug, index) => {
  if (drug['item-code'] === "") {
    newNonPBS.push(drug);
  } else {
    newPBS.push(drug)
  }
});

original.forEach((drug, index) => {
  if (drug['item-code'] === "") {
    oldNonPBS.push(drug);
  } else {
    oldPBS.push(drug)
  }
});

console.log([newPBS.length], [oldPBS.length]);
console.log([newNonPBS.length], [oldNonPBS.length]);
console.log([newData.length], [original.length]);
console.log(oldNonPBS);

const olderNonPBS = [
  {
    'item-code': '',
    'brand-name': [ 'Patanol' ],
    'mp-pt': 'olopatadine',
    'tpuu-or-mpp-pt': 'olopatadine hydrochloride 0.1% eye drops, 5 mL'
  },
  {
    'item-code': '',
    'brand-name': [ 'Atropt' ],
    'mp-pt': 'atropine',
    'tpuu-or-mpp-pt': 'atropine sulphate monohydrate 1% eye drops, 15 mL'
  },
  {
    'item-code': '',
    'brand-name': [ 'Minims Atropine' ],
    'mp-pt': 'atropine',
    'tpuu-or-mpp-pt': 'atropine sulphate monohydrate 1% eye drops, 20 x 0.5 mL unit doses'
  },
  {
    'item-code': '',
    'brand-name': [ 'Voltaren Ophtha' ],
    'mp-pt': 'diclofenac',
    'tpuu-or-mpp-pt': 'diclofenac sodium 0.1% eye drops, 5 mL'
  },
  {
    'item-code': '',
    'brand-name': [ 'Acular' ],
    'mp-pt': 'ketorolac',
    'tpuu-or-mpp-pt': 'ketorolac trometamol 0.5% eye drops, 5 mL'
  },
  {
    'item-code': '',
    'brand-name': [ 'Minims Prednisolone' ],
    'mp-pt': 'prednisolone sodium phosphate',
    'tpuu-or-mpp-pt': 'prednisolone sodium phosphate 0.5% eye drops, 20 x 0.5 mL unit doses'
  },
  {
    'item-code': '',
    'brand-name': [ 'Iopidine' ],
    'mp-pt': 'apraclonidine',
    'tpuu-or-mpp-pt': 'apraclonidine hydrochloride 0.5% eye drops, 10 mL'
  },
  {
    'item-code': '',
    'brand-name': [ 'Cyclogyl' ],
    'mp-pt': 'cyclopentolate',
    'tpuu-or-mpp-pt': 'cyclopentolate hydrochloride 1.0% eye drops, 15 mL'
  },
  {
    'item-code': '',
    'brand-name': [ 'Minims Cyclopentolate' ],
    'mp-pt': 'cyclopentolate',
    'tpuu-or-mpp-pt': 'cyclopentolate hydrochloride 0.5% eye drops, 20 x 0.5 mL unit doses'
  },
  {
    'item-code': '',
    'brand-name': [ 'Minims Cyclopentolate' ],
    'mp-pt': 'cyclopentolate',
    'tpuu-or-mpp-pt': 'cyclopentolate hydrochloride 1.0% eye drops, 20 x 0.5 mL unit doses'
  },
  {
    'item-code': '',
    'brand-name': [ 'Mydriacyl' ],
    'mp-pt': 'tropicamide',
    'tpuu-or-mpp-pt': 'tropicamide 0.5% eye drops, 15 mL'
  },
  {
    'item-code': '',
    'brand-name': [ 'Mydriacyl' ],
    'mp-pt': 'tropicamide',
    'tpuu-or-mpp-pt': 'tropicamide 1.0% eye drops, 15 mL'
  },
  {
    'item-code': '',
    'brand-name': [ 'Minims Tropicamide' ],
    'mp-pt': 'tropicamide',
    'tpuu-or-mpp-pt': 'tropicamide 0.5% eye drops, 20 x 0.5 mL unit doses'
  },
  {
    'item-code': '',
    'brand-name': [ 'Minims Tropicamide' ],
    'mp-pt': 'tropicamide',
    'tpuu-or-mpp-pt': 'tropicamide 1.0% eye drops, 20 x 0.5 mL unit doses'
  },
  {
    'item-code': '',
    'brand-name': [ 'Minims Amethocaine (Tetracaine)' ],
    'mp-pt': 'amethocaine (tetracaine)',
    'tpuu-or-mpp-pt': 'amethocaine (tetracaine) hydrochloride 0.5% eye drops, 20 x 0.5 mL unit doses'
  },
  {
    'item-code': '',
    'brand-name': [ 'Minims Amethocaine (Tetracaine)' ],
    'mp-pt': 'amethocaine (tetracaine)',
    'tpuu-or-mpp-pt': 'amethocaine (tetracaine) hydrochloride 1.0% eye drops, 20 x 0.5 mL unit doses'
  },
  {
    'item-code': '',
    'brand-name': [ 'Minims Lignocaine (Lidocaine) and Fluorescein Sodium' ],
    'mp-pt': 'lignocaine (lidocaine) and fluorescein sodium',
    'tpuu-or-mpp-pt': 'lignocaine (lidocaine) 4% and fluorescein sodium 0.25% eye drops, 20 x 0.5 mL unit doses'
  },
  {
    'item-code': '',
    'brand-name': [ 'Minims Oxybuprocaine' ],
    'mp-pt': 'oxybuprocaine',
    'tpuu-or-mpp-pt': 'oxybuprocaine hydrochloride 0.4% eye drops, 20 x 0.5 mL unit doses'
  },
  {
    'item-code': '',
    'brand-name': [ 'Alcaine' ],
    'mp-pt': 'proxymetacaine',
    'tpuu-or-mpp-pt': 'proxymetacaine hydrochloride 0.5% eye drops, 15 mL'
  },
  {
    'item-code': '',
    'brand-name': [ 'Minims Phenylephrine' ],
    'mp-pt': 'phenylephrine',
    'tpuu-or-mpp-pt': 'phenylephrine hydrochloride 2.5% eye drops, 20 x 0.5 mL unit doses'
  },
  {
    'item-code': '',
    'brand-name': [ 'Minims Phenylephrine' ],
    'mp-pt': 'phenylephrine',
    'tpuu-or-mpp-pt': 'phenylephrine hydrochloride 10% eye drops, 20 x 0.5 mL unit doses'
  },
  {
    'item-code': '',
    'brand-name': [ 'Optrex Actimist' ],
    'mp-pt': 'soy lecithin + tocopherol + vitamin A',
    'tpuu-or-mpp-pt': 'soy lecithin 1% + tocopherol 0.002% + vitamin A palmitate 0.025% spray, 100 actuations'
  },
  {
    'item-code': '',
    'brand-name': [ 'Cromo-Fresh' ],
    'mp-pt': 'sodium cromoglycate',
    'tpuu-or-mpp-pt': 'sodium cromoglycate 2% eye drops, 10 mL'
  },
  {
    'item-code': '',
    'brand-name': [ 'Zyrtec' ],
    'mp-pt': 'levocabastine',
    'tpuu-or-mpp-pt': 'levocabastine hydrochloride 0.05% eye drops, 4 mL'
  },
  {
    'item-code': '',
    'brand-name': [ 'Livostin' ],
    'mp-pt': 'levocabastine',
    'tpuu-or-mpp-pt': 'levocabastine hydrochloride 0.05% eye drops, 4 mL'
  },
  {
    'item-code': '',
    'brand-name': [ 'Lomide' ],
    'mp-pt': 'lodoxamide',
    'tpuu-or-mpp-pt': 'lodoxamide trometamol 0.1% eye drops, 10 mL'
  },
  {
    'item-code': '',
    'brand-name': [ 'Albalon-A' ],
    'mp-pt': 'naphazoline + antazoline',
    'tpuu-or-mpp-pt': 'naphazoline 0.05% + antazoline phosphate 0.5% mg/mL eye drops, 15 mL'
  },
  {
    'item-code': '',
    'brand-name': [ 'Brolene' ],
    'mp-pt': 'propamidine',
    'tpuu-or-mpp-pt': 'propamidine isethionate 0.1% eye drops, 10 mL'
  },
  {
    'item-code': '',
    'brand-name': [ 'Eyezep' ],
    'mp-pt': 'azelastine',
    'tpuu-or-mpp-pt': 'azelastine hydrochloride 0.0457% mg/mL eye drops, 6 mL'
  },
  {
    'item-code': '',
    'brand-name': [ 'Visine Allergy' ],
    'mp-pt': 'naphazoline + pheniramine',
    'tpuu-or-mpp-pt': 'naphazoline hydrochloride 0.025% + pheniramine maleate 0.3% eye drops, 15 mL'
  },
  {
    'item-code': '',
    'brand-name': [ 'Naphcon-A' ],
    'mp-pt': 'naphazoline + pheniramine',
    'tpuu-or-mpp-pt': 'naphazoline hydrochloride 0.025% + pheniramine maleate 0.3% eye drops, 15 mL'
  },
  {
    'item-code': '',
    'brand-name': [ 'Naphcon-Forte' ],
    'mp-pt': 'naphazoline',
    'tpuu-or-mpp-pt': 'naphazoline hydrochloride 0.1% eye drops, 15 mL'
  },
  {
    'item-code': '',
    'brand-name': [ 'Albalon' ],
    'mp-pt': 'naphazoline',
    'tpuu-or-mpp-pt': 'naphazoline hydrochloride 0.1% eye drops, 15 mL'
  },
  {
    'item-code': '',
    'brand-name': [ 'Systane Red Eyes' ],
    'mp-pt': 'naphazoline',
    'tpuu-or-mpp-pt': 'naphazoline hydrochloride 0.1% eye drops, 15 mL'
  },
  {
    'item-code': '',
    'brand-name': [ 'Optrex Eye Drops' ],
    'mp-pt': 'naphazoline',
    'tpuu-or-mpp-pt': 'naphazoline hydrochloride 0.01% eye drops, 10 mL'
  },
  {
    'item-code': '',
    'brand-name': [ 'Murine Clear eyes' ],
    'mp-pt': 'naphazoline',
    'tpuu-or-mpp-pt': 'naphazoline hydrochloride 0.012% eye drops, 10 mL'
  }
]















