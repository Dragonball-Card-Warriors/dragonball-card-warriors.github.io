const rarityColor = {
  1: '#808080',
  2: '#cd7f32',
  3: '#aaa9ad',
  4: '#d4af37',
}

const cardList = [
  {
    "set": "BS",
    "name": "Frog",
    "sub_name": "Ginyu's Fate",
    "groups": [
      "Frog"
    ],
    "rarity": "1",
    "energy_cost": "0",
    "type": "Unit", // not sure where to put this
    "icon": "Blue", // show this in top/bottom right/left?
    "attack": "1000",
    "hit_points": "1000",
    "abilities": "Guard",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "In Good Hands",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "0",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Removes any effects applied to all androids on the field. (Always effects not removed)",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Mom's the Boss",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "0",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Draws 1 card. Afterward, select 1 card from your hand and return it to the deck",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Precious Friends",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "0",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Adds 3000 HP to one friendly Character",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Namekian Shield",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "3",
    "energy_cost": "0",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Gives Guard to one character on the field",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Scouter Malfunction",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "0",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Removes any effects applied to one regular character on the field. (Always effects not removed)",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Not a Bad Guy",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "0",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Returns one regular character on your side of the field that has taken damage to your hand",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Gohan (Kid)",
    "sub_name": "Suited Up",
    "groups": [
      "Gohan",
      "Saiyan"
    ],
    "rarity": "3",
    "energy_cost": "1",
    "type": "Unit",
    "icon": "Blue",
    "attack": "3000",
    "hit_points": "4000",
    "abilities": "Guard",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "BS",
    "name": "Goten",
    "sub_name": "If I win…",
    "groups": [
      "Goten",
      "Saiyan"
    ],
    "rarity": "1",
    "energy_cost": "1",
    "type": "Unit",
    "icon": "Blue",
    "attack": "1000",
    "hit_points": "3000",
    "abilities": "",
    "effect": "Draw a card",
    "requirements": "Blue owned",
    "trigger": "Upon Appearance"
  },
  {
    "set": "BS",
    "name": "Saibaman",
    "sub_name": "Weird Warriors",
    "groups": [
      "Saibaman",
      "Frieza Force"
    ],
    "rarity": "1",
    "energy_cost": "1",
    "type": "Unit",
    "icon": "",
    "attack": "1000",
    "hit_points": "1000",
    "abilities": "Swift",
    "effect": "",
    "requirements": "",
    "trigger": "Upon Appearance"
  },
  {
    "set": "BS",
    "name": "Planetary Warrior B",
    "sub_name": "Loyal Subject",
    "groups": [
      "Planetary Warrior",
      "Frieza Force"
    ],
    "rarity": "1",
    "energy_cost": "1",
    "type": "Unit",
    "icon": "",
    "attack": "1000",
    "hit_points": "3000",
    "abilities": "",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "BS",
    "name": "Planetary Warrior A",
    "sub_name": "Officer",
    "groups": [
      "Planetary Warrior",
      "Frieza Force"
    ],
    "rarity": "1",
    "energy_cost": "1",
    "type": "Unit",
    "icon": "",
    "attack": "3000",
    "hit_points": "1000",
    "abilities": "",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Majin Buu (Innocent)",
    "sub_name": "Buu's Back",
    "groups": [
      "Majin Buu"
    ],
    "rarity": "3",
    "energy_cost": "1",
    "type": "Unit",
    "icon": "Purple",
    "attack": "2000",
    "hit_points": "3000",
    "abilities": "",
    "effect": "1 Bank Energy",
    "requirements": "",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Chi-Chi",
    "sub_name": "Mad Mama",
    "groups": [
      "Chi-Chi"
    ],
    "rarity": "1",
    "energy_cost": "2",
    "type": "Unit",
    "icon": "Blue",
    "attack": "4000",
    "hit_points": "4000",
    "abilities": "",
    "effect": "3000 ATK to self when Goku is on the enemy field ",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Kami",
    "sub_name": "Earth's Guardian",
    "groups": [
      "Kami",
      "Namekian"
    ],
    "rarity": "1",
    "energy_cost": "1",
    "type": "Unit",
    "icon": "Blue",
    "attack": "2000",
    "hit_points": "2000",
    "abilities": "",
    "effect": "2000 ATK & HP to one Friendly Unit",
    "requirements": "Blue owned",
    "trigger": ""
  },
  {
    "set": "BS",
    "name": "Mr. Popo",
    "sub_name": "Kami's Assistant",
    "groups": [
      "Mr. Popo"
    ],
    "rarity": "1",
    "energy_cost": "1",
    "type": "Unit",
    "icon": "Purple",
    "attack": "2000",
    "hit_points": "4000",
    "abilities": "",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Dende",
    "sub_name": "Child of Namek",
    "groups": [
      "Dende",
      "Namekian"
    ],
    "rarity": "1",
    "energy_cost": "1",
    "type": "Unit",
    "icon": "Blue",
    "attack": "2000",
    "hit_points": "3000",
    "abilities": "",
    "effect": "1000 ATK & HP to one Friendly Unit",
    "requirements": "",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Mr. Satan",
    "sub_name": "Earth's Champion?",
    "groups": [
      "Mr. Satan"
    ],
    "rarity": "1",
    "energy_cost": "1",
    "type": "Unit",
    "icon": "Purple",
    "attack": "1000",
    "hit_points": "5000",
    "abilities": "Guard",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "BS",
    "name": "Videl",
    "sub_name": "Mr. Satan's Daughter",
    "groups": [
      "Videl"
    ],
    "rarity": "1",
    "energy_cost": "1",
    "type": "Unit",
    "icon": "Purple",
    "attack": "5000",
    "hit_points": "1000",
    "abilities": "",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "x3 Kaioken",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "4",
    "energy_cost": "1",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "3x ATK of one Friendly Unit for this turn.",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Fated Confrontation",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "2",
    "energy_cost": "1",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Select 1 Friendly Unit & 1 Enemy Unit, deal damage to each other respective to their ATK",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Past Self",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "1",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Draw 1 Unit with a cost of 2 or less. (If there are none, draw 1 other card)",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Entrusted Spirit Bomb",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "2",
    "energy_cost": "1",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Unlocks your bank and immediately restores it",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "BS",
    "name": "Catch the Monkey!",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "1",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Gives Swift to 1 Friendly Unit for this turn.",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "BS",
    "name": "Cheer",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "1",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "3000 ATK to one friendly Unit",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "On Edge",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "2",
    "energy_cost": "1",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Returns 1 card from your hand to your deck. Draw 2 cards",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "The Best Team Ever Assembled",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "3",
    "energy_cost": "1",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Gives Negate Damage to all Friendly Units for this turn.",
    "requirements": "",
    "trigger": "5 Friendly Units"
  },
  {
    "set": "C1",
    "name": "Help from the Future",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "1",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Draw 1 random 7 cost or higher card. (If there are none, draw 1 other card)",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Classmates",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "1",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Draw 1 event card that costs 3 or less. (If there are none, draw 1 other card)",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "The Krillin Household",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "2",
    "energy_cost": "1",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Draw 1 card. If the card costs 1 or less draw a card",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Please don't die, Mr. Piccolo!",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "2",
    "energy_cost": "1",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Returns one Unit on the field that has taken damage to their respective hand",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Retreat",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "1",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Returns one Friendly Unit to your hand",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "To Outer Space!",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "1",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Draw 1 card. If the card is an Event card, draw a card",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Senzu Bean",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "2",
    "energy_cost": "1",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Completely restores the HP of one friendly Unit",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Reunification",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "2",
    "energy_cost": "2",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Return 2 Friendly Units to your hand. Summon 1 SP card equal to or less than the combined cost of the 2 Returned",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Goku's Mistake",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "2",
    "energy_cost": "1",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Draw 1 event card with a cost of 6 or less. (If there are none, draw 1 other card)",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Return to the Future",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "3",
    "energy_cost": "1",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Restores your Bank",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Cover Blown",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "1",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Draw 1 Gohan (If there are none, draw 1 other card)",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Buu the Builder",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "1",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Draw 1 Card. If the card is Majin Buu, draw 1 more card",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Breather",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "2",
    "energy_cost": "1",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Recover 4000 HP for all friendly Units",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Proud Warrior",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "3",
    "energy_cost": "1",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Remove any effects applied to one Unit (Always effects not removed)",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Goku",
    "sub_name": "Super Gravity Training",
    "groups": [
      "Goku",
      "Saiyan"
    ],
    "rarity": "1",
    "energy_cost": "2",
    "type": "Unit",
    "icon": "Blue",
    "attack": "4000",
    "hit_points": "4000",
    "abilities": "",
    "effect": "Gain 3000 ATK",
    "requirements": "Blue Owned",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Gohan (Kid)",
    "sub_name": "Waiting for Goku",
    "groups": [
      "Gohan",
      "Saiyan"
    ],
    "rarity": "2",
    "energy_cost": "2",
    "type": "Unit",
    "icon": "Purple",
    "attack": "5000",
    "hit_points": "4000",
    "abilities": "Guard",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "BS",
    "name": "Vegeta",
    "sub_name": "Least Favorite Shirt",
    "groups": [
      "Vegeta",
      "Saiyan"
    ],
    "rarity": "1",
    "energy_cost": "2",
    "type": "Unit",
    "icon": "Purple",
    "attack": "3000",
    "hit_points": "6000",
    "abilities": "",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Trunks (Kid)",
    "sub_name": "I'm gonna win!",
    "groups": [
      "Trunks",
      "Saiyan"
    ],
    "rarity": "2",
    "energy_cost": "2",
    "type": "Unit",
    "icon": "Blue",
    "attack": "5000",
    "hit_points": "4000",
    "abilities": "",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "BS",
    "name": "Krillin",
    "sub_name": "Trepidation",
    "groups": [
      "Krillin"
    ],
    "rarity": "2",
    "energy_cost": "2",
    "type": "Unit",
    "icon": "Purple",
    "attack": "4000",
    "hit_points": "5000",
    "abilities": "",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "BS",
    "name": "Planetary Warrior C",
    "sub_name": "Scout",
    "groups": [
      "Planetary Warrior",
      "Frieza Force"
    ],
    "rarity": "1",
    "energy_cost": "2",
    "type": "Unit",
    "icon": "",
    "attack": "4000",
    "hit_points": "2000",
    "abilities": "",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "BS",
    "name": "Planetary Warrior D",
    "sub_name": "The Stolen Dragon Ball",
    "groups": [
      "Planetary Warrior",
      "Frieza Force"
    ],
    "rarity": "1",
    "energy_cost": "2",
    "type": "Unit",
    "icon": "",
    "attack": "3000",
    "hit_points": "3000",
    "abilities": "",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "BS",
    "name": "Cui",
    "sub_name": "Arrogant Rival",
    "groups": [
      "Cui",
      "Frieza Force"
    ],
    "rarity": "1",
    "energy_cost": "2",
    "type": "Unit",
    "icon": "Blue",
    "attack": "6000",
    "hit_points": "3000",
    "abilities": "",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Guldo",
    "sub_name": "Time Stopper",
    "groups": [
      "Guldo",
      "Ginyu Force",
      "Frieza Force"
    ],
    "rarity": "2",
    "energy_cost": "2",
    "type": "Unit",
    "icon": "Blue",
    "attack": "3000",
    "hit_points": "6000",
    "abilities": "Guard",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Yamu",
    "sub_name": "Terrifying Mission",
    "groups": [
      "Yamu"
    ],
    "rarity": "1",
    "energy_cost": "2",
    "type": "Unit",
    "icon": "Purple",
    "attack": "3000",
    "hit_points": "3000",
    "abilities": "",
    "effect": "Gain 4000 ATK",
    "requirements": "Friendly Spopovich",
    "trigger": "Always"
  },
  {
    "set": "C1",
    "name": "Babidi",
    "sub_name": "Wizard of the Demon Realm",
    "groups": [
      "Babidi"
    ],
    "rarity": "2",
    "energy_cost": "2",
    "type": "Unit",
    "icon": "Purple",
    "attack": "2000",
    "hit_points": "3000",
    "abilities": "",
    "effect": "3000 ATK & HP to one Friendly Unit",
    "requirements": "Consume 1 Purple",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Bulma",
    "sub_name": "Android Solution",
    "groups": [
      "Bulma"
    ],
    "rarity": "1",
    "energy_cost": "2",
    "type": "Unit",
    "icon": "Blue",
    "attack": "1000",
    "hit_points": "7000",
    "abilities": "",
    "effect": "Removes any effects applied to all androids on the field. (Always effects not removed)",
    "requirements": "",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Bulma",
    "sub_name": "Worried about Vegeta",
    "groups": [
      "Bulma"
    ],
    "rarity": "1",
    "energy_cost": "2",
    "type": "Unit",
    "icon": "Purple",
    "attack": "1000",
    "hit_points": "2000",
    "abilities": "",
    "effect": "Add 2 Energy to your Bank",
    "requirements": "",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Yajirobe",
    "sub_name": "Master Korin's Errand Boy",
    "groups": [
      "Yajirobe"
    ],
    "rarity": "1",
    "energy_cost": "2",
    "type": "Unit",
    "icon": "Blue",
    "attack": "3000",
    "hit_points": "2000",
    "abilities": "",
    "effect": "5000 HP to one Friendly Unit",
    "requirements": "Blue owned",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Dende",
    "sub_name": "The New Guardian",
    "groups": [
      "Dende",
      "Namekian"
    ],
    "rarity": "1",
    "energy_cost": "2",
    "type": "Unit",
    "icon": "Blue",
    "attack": "2000",
    "hit_points": "3000",
    "abilities": "",
    "effect": "2000 ATK & HP to one Friendly Unit",
    "requirements": "",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Mr. Satan",
    "sub_name": "Supposedly Undefeated",
    "groups": [
      "Mr. Satan"
    ],
    "rarity": "2",
    "energy_cost": "2",
    "type": "Unit",
    "icon": "Purple",
    "attack": "5000",
    "hit_points": "4000",
    "abilities": "",
    "effect": "Gain Guard",
    "requirements": "Friendly Unit",
    "trigger": "Always"
  },
  {
    "set": "C1",
    "name": "Chiaotzu",
    "sub_name": "Telekinesis",
    "groups": [
      "Chiaotzu"
    ],
    "rarity": "1",
    "energy_cost": "2",
    "type": "Unit",
    "icon": "Purple",
    "attack": "3000",
    "hit_points": "1000",
    "abilities": "",
    "effect": "Deal 2000 DMG to Opponent's Leader or Unit",
    "requirements": "Purple owned",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Android 19",
    "sub_name": "Energy Absorption",
    "groups": [
      "Android 19",
      "Android"
    ],
    "rarity": "1",
    "energy_cost": "2",
    "type": "Unit",
    "icon": "Blue",
    "attack": "1000",
    "hit_points": "2000",
    "abilities": "",
    "effect": "For every 2 or less cost enemy Unit, add 1 Energy to your Bank",
    "requirements": "",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Earth's Mightiest Assemble!",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "4",
    "energy_cost": "2",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Summon 1 SP Unit with a cost of 3 or less",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Strength in Numbers",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "2",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Deal 1000 DMG to the Opponent's Leader for every Friendly Unit",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Peons",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "2",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Summon 3 Peons (Cost 1, ATK 1000, HP 1000)",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "BS",
    "name": "Here to Watch",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "2",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Draw 2 cards. Return 1 card in your hand to your deck.",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Interlude",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "2",
    "energy_cost": "2",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Return as many cards as you like from your hand to your deck; draw the same amount.",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Commemorative Photo",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "2",
    "energy_cost": "2",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Return an Enemy Unit to your opponent's hand with a cost of 4 or less.",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Two Buus",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "3",
    "energy_cost": "2",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Summon 1 Majin Buu SP Unit, Cost equal or less than your energy limit.",
    "requirements": "Majin Buu on the field",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "The Adventure Begins!",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "2",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Draw 1 card. If the cost is 3 or less, draw a card.",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Saiyan weak Point",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "2",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Removes any effects applied to all Enemy Units on the field. (Always effects not removed)",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Welcome to King Kai's Planet",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "2",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Draw 1 card. If the cost is 5 or more, draw a card.",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Ancient Spaceship",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "2",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Draw as many cards as your opponent currently holds.",
    "requirements": "Last card in hand",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Downgrade",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "2",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Removes any effects applied to one Unit on the field. (Always effects not removed) Draw a card",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "This was the only place…",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "2",
    "energy_cost": "2",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Kill 1 Enemy Unit, Kill all Friendly Units",
    "requirements": "Units on both sides of the field",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Let's Head Back",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "2",
    "energy_cost": "2",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Returns one Unit on the field to their respective hand.",
    "requirements": "HP must be Less than ATK",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Victorious and Tired",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "2",
    "energy_cost": "2",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Recover 6000 HP to one Friendly Unit or your Leader",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "The Hunted",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "2",
    "energy_cost": "2",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Draw 3 cards. Return 2 cards to your Deck.",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "The People of Earth",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "2",
    "energy_cost": "2",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Add 1 Energy to your bank for each Friendly Unit",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Bad Idea",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "2",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Kill 1 Unit that costs 3 or less",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Gohan (Kid)",
    "sub_name": "All Trained Up",
    "groups": [
      "Gohan",
      "Saiyan"
    ],
    "rarity": "2",
    "energy_cost": "3",
    "type": "Unit",
    "icon": "Blue",
    "attack": "6000",
    "hit_points": "4000",
    "abilities": "",
    "effect": "Add 3000 ATK",
    "requirements": "Blue owned, Your turn",
    "trigger": "Always"
  },
  {
    "set": "BS",
    "name": "Gohan",
    "sub_name": "The Ultimate High School Student",
    "groups": [
      "Gohan",
      "Saiyan"
    ],
    "rarity": "2",
    "energy_cost": "3",
    "type": "Unit",
    "icon": "Purple",
    "attack": "6000",
    "hit_points": "5000",
    "abilities": "Guard",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "BS",
    "name": "Vegeta",
    "sub_name": "Confidence in Spades",
    "groups": [
      "Vegeta",
      "Saiyan",
      "Frieza Force"
    ],
    "rarity": "1",
    "energy_cost": "3",
    "type": "Unit",
    "icon": "Purple",
    "attack": "4000",
    "hit_points": "7000",
    "abilities": "",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "BS",
    "name": "Piccolo",
    "sub_name": "Prepping for the Saiyans",
    "groups": [
      "Piccolo",
      "Namekian"
    ],
    "rarity": "1",
    "energy_cost": "3",
    "type": "Unit",
    "icon": "Blue",
    "attack": "6000",
    "hit_points": "5000",
    "abilities": "",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Krillin",
    "sub_name": "Destructo-Disc",
    "groups": [
      "Krillin"
    ],
    "rarity": "1",
    "energy_cost": "3",
    "type": "Unit",
    "icon": "Blue",
    "attack": "2000",
    "hit_points": "1000",
    "abilities": "",
    "effect": "Deal 3000 DMG to an Enemy",
    "requirements": "",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Yamcha",
    "sub_name": "Warning of Danger",
    "groups": [
      "Yamcha"
    ],
    "rarity": "2",
    "energy_cost": "3",
    "type": "Unit",
    "icon": "Blue",
    "attack": "4000",
    "hit_points": "7000",
    "abilities": "Guard",
    "effect": "",
    "requirements": "Blue owned",
    "trigger": "Always"
  },
  {
    "set": "C1",
    "name": "Zarbon",
    "sub_name": "Bargaining",
    "groups": [
      "Zarbon",
      "Frieza Force"
    ],
    "rarity": "1",
    "energy_cost": "3",
    "type": "Unit",
    "icon": "Blue",
    "attack": "5000",
    "hit_points": "6000",
    "abilities": "",
    "effect": "Add 2000 ATK",
    "requirements": "Your Turn",
    "trigger": "Always"
  },
  {
    "set": "C1",
    "name": "Recoome",
    "sub_name": "Beefed-up Bod",
    "groups": [
      "Recoome",
      "Ginyu Force",
      "Frieza Force"
    ],
    "rarity": "2",
    "energy_cost": "3",
    "type": "Unit",
    "icon": "Blue",
    "attack": "3000",
    "hit_points": "7000",
    "abilities": "Guard",
    "effect": "Add 2000 ATK when this takes damage",
    "requirements": "",
    "trigger": "Always"
  },
  {
    "set": "BS",
    "name": "Android 19",
    "sub_name": "Loyal Servant",
    "groups": [
      "Android 19",
      "Android"
    ],
    "rarity": "1",
    "energy_cost": "3",
    "type": "Unit",
    "icon": "Purple",
    "attack": "4000",
    "hit_points": "4000",
    "abilities": "",
    "effect": "Heal 1000 HP to your Leader",
    "requirements": "",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Android 18",
    "sub_name": "Show Me the Money",
    "groups": [
      "Android 18",
      "Android"
    ],
    "rarity": "3",
    "energy_cost": "3",
    "type": "Unit",
    "icon": "Purple",
    "attack": "4000",
    "hit_points": "5000",
    "abilities": "",
    "effect": "Add 1 Energy to your bank for each Card in your Hand",
    "requirements": "Purple owned",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Spopovich",
    "sub_name": "Rampaging Puppet",
    "groups": [
      "Spopovich"
    ],
    "rarity": "1",
    "energy_cost": "3",
    "type": "Unit",
    "icon": "Purple",
    "attack": "5000",
    "hit_points": "3000",
    "abilities": "",
    "effect": "Gain 4000 ATK",
    "requirements": "Friendly Yamu",
    "trigger": "Always"
  },
  {
    "set": "C1",
    "name": "Yakon",
    "sub_name": "Magical Beast of Dark Star",
    "groups": [
      "Yakon"
    ],
    "rarity": "2",
    "energy_cost": "3",
    "type": "Unit",
    "icon": "Purple",
    "attack": "2000",
    "hit_points": "7000",
    "abilities": "",
    "effect": "Gain 8000 ATK",
    "requirements": "3 Banked Energy",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Master Roshi",
    "sub_name": "A Master's Premonition",
    "groups": [
      "Master Roshi"
    ],
    "rarity": "1",
    "energy_cost": "3",
    "type": "Unit",
    "icon": "Blue",
    "attack": "3000",
    "hit_points": "7000",
    "abilities": "",
    "effect": "Add 3000 HP to a Friendly Goku Unit",
    "requirements": "",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "King Kai",
    "sub_name": "Guardian of the North Galaxy",
    "groups": [
      "King Kai"
    ],
    "rarity": "2",
    "energy_cost": "3",
    "type": "Unit",
    "icon": "Blue",
    "attack": "3000",
    "hit_points": "3000",
    "abilities": "",
    "effect": "Summon 1 Friendly Bubbles (Cost 1, ATK 1000, HP 1000)",
    "requirements": "3 Purple owned",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Videl",
    "sub_name": "Less Hair, More Moxie",
    "groups": [
      "Videl"
    ],
    "rarity": "2",
    "energy_cost": "3",
    "type": "Unit",
    "icon": "Purple",
    "attack": "3000",
    "hit_points": "7000",
    "abilities": "",
    "effect": "Gain 6000 ATK",
    "requirements": "",
    "trigger": "Upon Appearance"
  },
  {
    "set": "BS",
    "name": "Goku",
    "sub_name": "KameHameHa",
    "groups": [
      "Goku",
      "Saiyan"
    ],
    "rarity": "1",
    "energy_cost": "3",
    "type": "Unit",
    "icon": "Blue",
    "attack": "4000",
    "hit_points": "4000",
    "abilities": "",
    "effect": "Deal 4000 DMG to an Enemy",
    "requirements": "Consume 1 Blue",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Lend me your energy!",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "3",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Add energy to your bank equal to your energy limit",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Heaven's Gaze",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "3",
    "energy_cost": "3",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Draw 3 Cards. Return 1 card to your Deck.",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "BS",
    "name": "Stall Tactics",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "3",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Return an Enemy Unit to your opponent's hand.",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Planetary Warriors",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "2",
    "energy_cost": "3",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Summon 3 Planetary Warriors (Cost 1, ATK 2000, HP 1000)",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Trained in the Other World",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "3",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Add 1000 ATK to a Friendly Unit for each card in your Hand.",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Harbinger of Doom",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "3",
    "energy_cost": "3",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Summon 1 SP Unit with a cost Equal or Less than your energy limit called Frieza",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Family Bonds",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "3",
    "energy_cost": "3",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Heal 3000 HP to your Leader for each Friendly Unit",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Dragon Balls Collected",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "3",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Draw 2 Cards.",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Special Beam Cannon",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "2",
    "energy_cost": "3",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Kill 1 Unit",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "The Final Blow",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "2",
    "energy_cost": "3",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Kill 1 Unit with 10000 HP or Less",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Terrifying Broadcast",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "3",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Return all of your cards to the deck. Draw 3 cards",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Silent Goodbye",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "2",
    "energy_cost": "3",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Return 1 card to your hand, add energy to your bank equal to the cost.",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "BS",
    "name": "Golden Fighter",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "3",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Deal 7000 DMG to 1 Unit",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Pure Heart",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "3",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Add 2000 HP to a friendly Unit for each friendly Unit",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Back in a Body",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "3",
    "energy_cost": "3",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Summon 1 SP Unit with a cost Equal or Less than your energy limit called Vegeta",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Buying Time",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "3",
    "energy_cost": "3",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Add 4000 ATK & HP to all Vegeta & Majin Buu Units on the field",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Lending a Hand",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "2",
    "energy_cost": "3",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Add 1000 ATK & HP to a Friendly Unit for each Friendly Unit",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Overjoyed Friends",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "2",
    "energy_cost": "3",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Add 4000 HP to all Friendly Units",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Gohan (Kid)",
    "sub_name": "Ready to Fight",
    "groups": [
      "Gohan",
      "Saiyan"
    ],
    "rarity": "1",
    "energy_cost": "4",
    "type": "Unit",
    "icon": "Green",
    "attack": "4000",
    "hit_points": "6000",
    "abilities": "Guard",
    "effect": "Adds 2000 ATK whenever this takes DMG",
    "requirements": "",
    "trigger": "Always"
  },
  {
    "set": "C1",
    "name": "Gohan (Great Saiyaman)",
    "sub_name": "Anger Rising",
    "groups": [
      "Gohan",
      "Saiyan"
    ],
    "rarity": "4",
    "energy_cost": "4",
    "type": "Unit",
    "icon": "Purple",
    "attack": "4000",
    "hit_points": "9000",
    "abilities": "Guard",
    "effect": "Give Guard to all friendly Units",
    "requirements": "2 Purple owned",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Vegeta",
    "sub_name": "A Warrior's Pride",
    "groups": [
      "Vegeta",
      "Saiyan"
    ],
    "rarity": "3",
    "energy_cost": "4",
    "type": "Unit",
    "icon": "Blue",
    "attack": "9000",
    "hit_points": "4000",
    "abilities": "Guard",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Trunks",
    "sub_name": "A New Saiyan",
    "groups": [
      "Trunks",
      "Saiyan"
    ],
    "rarity": "1",
    "energy_cost": "4",
    "type": "Unit",
    "icon": "Blue",
    "attack": "9000",
    "hit_points": "3000",
    "abilities": "",
    "effect": "Restores your Bank",
    "requirements": "Blue owned",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Goten",
    "sub_name": "Unyielding",
    "groups": [
      "Goten",
      "Saiyan"
    ],
    "rarity": "2",
    "energy_cost": "4",
    "type": "Unit",
    "icon": "Green",
    "attack": "6000",
    "hit_points": "5000",
    "abilities": "",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Piccolo",
    "sub_name": "Firm and Focused",
    "groups": [
      "Piccolo",
      "Namekian"
    ],
    "rarity": "2",
    "energy_cost": "4",
    "type": "Unit",
    "icon": "Blue",
    "attack": "7000",
    "hit_points": "5000",
    "abilities": "",
    "effect": "Gives itself Swift",
    "requirements": "Blue owned",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Tien",
    "sub_name": "Risking His Life",
    "groups": [
      "Tien"
    ],
    "rarity": "1",
    "energy_cost": "4",
    "type": "Unit",
    "icon": "Purple",
    "attack": "6000",
    "hit_points": "6000",
    "abilities": "",
    "effect": "Gives itself Guard whenever this takes DMG",
    "requirements": "",
    "trigger": "Always"
  },
  {
    "set": "BS",
    "name": "Raditz",
    "sub_name": "Saiyan Dread",
    "groups": [
      "Raditz",
      "Saiyan",
      "Frieza Force"
    ],
    "rarity": "1",
    "energy_cost": "4",
    "type": "Unit",
    "icon": "Purple",
    "attack": "5000",
    "hit_points": "7000",
    "abilities": "",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Dodoria",
    "sub_name": "Overconfidence",
    "groups": [
      "Dodoria",
      "Frieza Force"
    ],
    "rarity": "1",
    "energy_cost": "4",
    "type": "Unit",
    "icon": "Purple",
    "attack": "6000",
    "hit_points": "5000",
    "abilities": "",
    "effect": "Adds 3000 ATK when it's your turn",
    "requirements": "",
    "trigger": "Always"
  },
  {
    "set": "C1",
    "name": "Jeice",
    "sub_name": "Red Magma",
    "groups": [
      "Jeice",
      "Ginyu Force",
      "Frieza Force"
    ],
    "rarity": "2",
    "energy_cost": "4",
    "type": "Unit",
    "icon": "Green",
    "attack": "4000",
    "hit_points": "5000",
    "abilities": "",
    "effect": "Deal 2000 DMG to an Enemy",
    "requirements": "",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Frieza (1st Form)",
    "sub_name": "Galactic Emperor",
    "groups": [
      "Frieza",
      "Frieza Force"
    ],
    "rarity": "3",
    "energy_cost": "4",
    "type": "Unit",
    "icon": "Blue",
    "attack": "11000",
    "hit_points": "5000",
    "abilities": "",
    "effect": "You must have 1 energy in your bank to Attack with this Unit",
    "requirements": "",
    "trigger": "Always"
  },
  {
    "set": "BS",
    "name": "Android 20",
    "sub_name": "Deceptive Doctor",
    "groups": [
      "Android 20",
      "Android"
    ],
    "rarity": "1",
    "energy_cost": "4",
    "type": "Unit",
    "icon": "Purple",
    "attack": "3000",
    "hit_points": "8000",
    "abilities": "",
    "effect": "Restores your Bank",
    "requirements": "",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Android 17",
    "sub_name": "Biting the Hand that Feeds",
    "groups": [
      "Android 19",
      "Android"
    ],
    "rarity": "3",
    "energy_cost": "4",
    "type": "Unit",
    "icon": "Purple",
    "attack": "5000",
    "hit_points": "8000",
    "abilities": "",
    "effect": "Gives itself Swift",
    "requirements": "Purple owned",
    "trigger": "Upon Appearance"
  },
  {
    "set": "BS",
    "name": "Pui Pui",
    "sub_name": "Warrior from Planet Zoon",
    "groups": [
      "Pui Pui"
    ],
    "rarity": "1",
    "energy_cost": "4",
    "type": "Unit",
    "icon": "Purple",
    "attack": "4000",
    "hit_points": "8000",
    "abilities": "",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "BS",
    "name": "Nail",
    "sub_name": "Guru's Guardian",
    "groups": [
      "Nail",
      "Namekian"
    ],
    "rarity": "1",
    "energy_cost": "4",
    "type": "Unit",
    "icon": "Blue",
    "attack": "3000",
    "hit_points": "9000",
    "abilities": "",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Krillin",
    "sub_name": "Solar Flare",
    "groups": [
      "Krillin"
    ],
    "rarity": "2",
    "energy_cost": "4",
    "type": "Unit",
    "icon": "Green",
    "attack": "3000",
    "hit_points": "6000",
    "abilities": "",
    "effect": "Remove any effects applied to all other Units (SP Included)",
    "requirements": "",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Goku",
    "sub_name": "Spirit Bomb",
    "groups": [
      "Goku",
      "Saiyan"
    ],
    "rarity": "2",
    "energy_cost": "4",
    "type": "Unit",
    "icon": "Blue",
    "attack": "4000",
    "hit_points": "7000",
    "abilities": "",
    "effect": "Adds 6000 ATK when it's your turn",
    "requirements": "2 Blue owned",
    "trigger": "Always"
  },
  {
    "set": "C1",
    "name": "Android 19",
    "sub_name": "Precision Strike",
    "groups": [
      "Android 19",
      "Android"
    ],
    "rarity": "1",
    "energy_cost": "4",
    "type": "Unit",
    "icon": "Purple",
    "attack": "5000",
    "hit_points": "6000",
    "abilities": "",
    "effect": "Gives itself Swift",
    "requirements": "1 Bank Energy owned",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Majin Buu (Innocent)",
    "sub_name": "The Birth of a Majin",
    "groups": [
      "Majin Buu"
    ],
    "rarity": "1",
    "energy_cost": "4",
    "type": "Unit",
    "icon": "Purple",
    "attack": "6000",
    "hit_points": "6000",
    "abilities": "",
    "effect": "Adds 1 Energy to your bank",
    "requirements": "",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Parting Words",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "4",
    "energy_cost": "4",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Deals 7000 DMG to an Enemy",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Unthinkable Change",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "2",
    "energy_cost": "4",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Kills all Units that cost 3 or less",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "BS",
    "name": "Emergency Contact",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "4",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Summon an SP Unit that costs 3 or less and give it Swift",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Judgment",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "4",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Kill a Unit that costs 4 or more",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Dormant Power",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "2",
    "energy_cost": "4",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "5000 ATK & HP to one Friendly Unit that costs 3 or less",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "A Voice from Beyond",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "2",
    "energy_cost": "4",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Return all Enemy Units that cost 6 or more to the opponent's hand",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Training Partner",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "2",
    "energy_cost": "4",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "2000 ATK & HP to allfriendly Units that cost 4 or less",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "View from the Top",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "4",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Draw 4 cards, return 2 to your Deck",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "The Battle for Earth",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "4",
    "energy_cost": "4",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Summon 1 SP Unit that costs 4 or less, give it Swift",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Spaceship Modifications",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "2",
    "energy_cost": "4",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Draw cards until you hold as many as your opponent",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "To a New Planet",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "4",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Return all Units to their owner's hands that cost 2 or less",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Seeking More Power",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "3",
    "energy_cost": "4",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Make the ATK of one Unit equal to the Highest ATK Unit on the Field",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Family Reunion",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "3",
    "energy_cost": "4",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "6000 HP to all Friendly Units",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Goku (Super Saiyan)",
    "sub_name": "Back from Heaven",
    "groups": [
      "Goku",
      "Saiyan"
    ],
    "rarity": "3",
    "energy_cost": "5",
    "type": "Unit",
    "icon": "Green",
    "attack": "3000",
    "hit_points": "4000",
    "abilities": "",
    "effect": "3000 ATK to all Friendly Units",
    "requirements": "",
    "trigger": "Always"
  },
  {
    "set": "C1",
    "name": "Gohan (Kid)",
    "sub_name": "Play Pals",
    "groups": [
      "Gohan",
      "Saiyan"
    ],
    "rarity": "2",
    "energy_cost": "5",
    "type": "Unit",
    "icon": "Purple",
    "attack": "6000",
    "hit_points": "6000",
    "abilities": "",
    "effect": "Heal 5000 HP to your Leader or a Friendly Unit",
    "requirements": "Purple owned",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Gohan (Great Saiyaman)",
    "sub_name": "Enter the Great Saiyaman!",
    "groups": [
      "Gohan",
      "Saiyan"
    ],
    "rarity": "3",
    "energy_cost": "5",
    "type": "Unit",
    "icon": "Yellow",
    "attack": "6000",
    "hit_points": "7000",
    "abilities": "",
    "effect": "Give Swift to all Friendly Units",
    "requirements": "2 Blue owned",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Vegeta",
    "sub_name": "New Battle Suit",
    "groups": [
      "Vegeta",
      "Saiyan"
    ],
    "rarity": "4",
    "energy_cost": "5",
    "type": "Unit",
    "icon": "Yellow",
    "attack": "6000",
    "hit_points": "4000",
    "abilities": "Guard",
    "effect": "Deal 7000 DMG to all other Units",
    "requirements": "Consume 2 Purple",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Krillin",
    "sub_name": "Tournament Winnings",
    "groups": [
      "Krillin"
    ],
    "rarity": "1",
    "energy_cost": "5",
    "type": "Unit",
    "icon": "Green",
    "attack": "6000",
    "hit_points": "6000",
    "abilities": "",
    "effect": "Add 1 Energy to your bank for each Card in your Hand",
    "requirements": "Green owned",
    "trigger": "Upon Appearance"
  },
  {
    "set": "BS",
    "name": "Nappa",
    "sub_name": "Brimming with Arrogance",
    "groups": [
      "Nappa",
      "Saiyan",
      "Frieza Force"
    ],
    "rarity": "2",
    "energy_cost": "5",
    "type": "Unit",
    "icon": "Purple",
    "attack": "10000",
    "hit_points": "6000",
    "abilities": "",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Burter",
    "sub_name": "Blue Hurricane",
    "groups": [
      "Burter",
      "Ginyu Force",
      "Frieza Force"
    ],
    "rarity": "2",
    "energy_cost": "5",
    "type": "Unit",
    "icon": "Purple",
    "attack": "7000",
    "hit_points": "7000",
    "abilities": "Swift",
    "effect": "Add 3000 ATK when there is a friendly Jeice",
    "requirements": "",
    "trigger": "Always"
  },
  {
    "set": "C1",
    "name": "Frieza (2nd Form)",
    "sub_name": "Looming Nightmare",
    "groups": [
      "Frieza",
      "Frieza Force"
    ],
    "rarity": "3",
    "energy_cost": "5",
    "type": "Unit",
    "icon": "Purple",
    "attack": "8000",
    "hit_points": "10000",
    "abilities": "",
    "effect": "You must have 1 energy in your bank to Attack with this Unit",
    "requirements": "",
    "trigger": "Always"
  },
  {
    "set": "C1",
    "name": "Android 18",
    "sub_name": "Killer Counter",
    "groups": [
      "Android 18",
      "Android"
    ],
    "rarity": "3",
    "energy_cost": "5",
    "type": "Unit",
    "icon": "Green",
    "attack": "8000",
    "hit_points": "7000",
    "abilities": "",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Cell (1st Form)",
    "sub_name": "Kame Hame Ha of Doom",
    "groups": [
      "Cell",
      "Android"
    ],
    "rarity": "2",
    "energy_cost": "5",
    "type": "Unit",
    "icon": "Green",
    "attack": "6000",
    "hit_points": "7000",
    "abilities": "",
    "effect": "Restores your bank",
    "requirements": "",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Nail",
    "sub_name": "Namekian Warrior",
    "groups": [
      "Nail",
      "Namekian"
    ],
    "rarity": "2",
    "energy_cost": "5",
    "type": "Unit",
    "icon": "Green",
    "attack": "5000",
    "hit_points": "8000",
    "abilities": "",
    "effect": "Gives itself Guard when this takes DMG. Adds 2000 ATK to itself when it takes DMG",
    "requirements": "",
    "trigger": "Always"
  },
  {
    "set": "C1",
    "name": "Kibito Kai",
    "sub_name": "Potara Practitioner",
    "groups": [
      "Kibito Kai"
    ],
    "rarity": "2",
    "energy_cost": "5",
    "type": "Unit",
    "icon": "Green",
    "attack": "5000",
    "hit_points": "8000",
    "abilities": "",
    "effect": "Heal 3000 HP to a Friendly Unit or Leader",
    "requirements": "",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Vegeta",
    "sub_name": "Burst Open and Mix!",
    "groups": [
      "Vegeta",
      "Saiyan",
      "Frieza Force"
    ],
    "rarity": "2",
    "energy_cost": "5",
    "type": "Unit",
    "icon": "Purple",
    "attack": "6000",
    "hit_points": "4000",
    "abilities": "",
    "effect": "6000 ATK & HP to itself",
    "requirements": "Consume 3 Banked Energy",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Dodoria",
    "sub_name": "Genocidal Rage",
    "groups": [
      "Dodoria",
      "Frieza Force"
    ],
    "rarity": "1",
    "energy_cost": "5",
    "type": "Unit",
    "icon": "Purple",
    "attack": "7000",
    "hit_points": "5000",
    "abilities": "",
    "effect": "Add 5000 ATK on your Turn",
    "requirements": "",
    "trigger": "Always"
  },
  {
    "set": "C1",
    "name": "Recoome",
    "sub_name": "Warmup",
    "groups": [
      "Recoome",
      "Ginyu Force",
      "Frieza Force"
    ],
    "rarity": "1",
    "energy_cost": "5",
    "type": "Unit",
    "icon": "Purple",
    "attack": "7000",
    "hit_points": "9000",
    "abilities": "Guard",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Captain Ginyu",
    "sub_name": "Body Change",
    "groups": [
      "Captain Ginyu",
      "Ginyu Force",
      "Frieza Force"
    ],
    "rarity": "1",
    "energy_cost": "5",
    "type": "Unit",
    "icon": "Green",
    "attack": "5000",
    "hit_points": "5000",
    "abilities": "",
    "effect": "Return one enemy Unit to the opponent's hand",
    "requirements": "",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Piccolo",
    "sub_name": "Light Grenade",
    "groups": [
      "Piccolo",
      "Namekian"
    ],
    "rarity": "2",
    "energy_cost": "5",
    "type": "Unit",
    "icon": "Green",
    "attack": "4000",
    "hit_points": "5000",
    "abilities": "",
    "effect": "Deal 3000 DMG to an Enemy",
    "requirements": "",
    "trigger": "Upon Appearance"
  },
  {
    "set": "BS",
    "name": "Cell (2nd Form)",
    "sub_name": "Evolving Power",
    "groups": [
      "Cell",
      "Android"
    ],
    "rarity": "2",
    "energy_cost": "5",
    "type": "Unit",
    "icon": "Green",
    "attack": "6000",
    "hit_points": "7000",
    "abilities": "",
    "effect": "Kill an Enemy Unit that costs 4 or less",
    "requirements": "Consume 1 Blue",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Majin Buu (Innocent)",
    "sub_name": "Candy Beam",
    "groups": [
      "Majin Buu"
    ],
    "rarity": "2",
    "energy_cost": "5",
    "type": "Unit",
    "icon": "Green",
    "attack": "4000",
    "hit_points": "6000",
    "abilities": "",
    "effect": "Kill a Random Unit",
    "requirements": "",
    "trigger": "Upon Appearance"
  },
  {
    "set": "BS",
    "name": "World Tournament",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "5",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Summon 1 SP Unit with cost equal to or less, than the highest cost enemy Unit",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Shenron",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "5",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Perform 3 of the following actions in any combination:- 1. Heal 8000 HP to a friendly Unit, 2. Draw 2 Cards, Return 1 card to your Deck from your hand",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "The Battle for Earth",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "3",
    "energy_cost": "5",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Summon 1 or 2 SP Cards that cost 5 Cost or less in total. 1000 ATK to all Vegeta and Nappa Friendly Units",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Planetary Protector",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "2",
    "energy_cost": "5",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Summon 1-3 SP Cards that cost 4 or less in total.",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Hyperbolic Time Chamber",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "3",
    "energy_cost": "5",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "1000 ATK & HP to one Friendly Unit for each energy in your energy limit",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Alive for a Day",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "5",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Discard 1 card from your hand. Summon 1 SP Goku Unit",
    "requirements": "No Friendly Goku",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Hostage",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "5",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Select 1 Enemy Unit that costs 2 or less. Return it from the enemy Field to YOUR hand",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "All Trained Up",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "2",
    "energy_cost": "5",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Select 1 Friendly Unit; Kill all Enemy Units with HP less than the Attack",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Homecoming",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "5",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Summon 1 SP Goku that is equal or less than the cost of your Energy Limit",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Trunks' Death",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "3",
    "energy_cost": "5",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Kill 1 Unit",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "For the Family",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "3",
    "energy_cost": "5",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "3000 ATK & HP to all Friendly Units",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Goku",
    "sub_name": "The Grand Finale",
    "groups": [
      "Goku",
      "Saiyan"
    ],
    "rarity": "4",
    "energy_cost": "6",
    "type": "Unit",
    "icon": "Yellow",
    "attack": "9000",
    "hit_points": "8000",
    "abilities": "",
    "effect": "3000 ATK & HP to all Friendly Units",
    "requirements": "3 Blue owned",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Gohan (Kid)",
    "sub_name": "Survival Training",
    "groups": [
      "Gohan",
      "Saiyan"
    ],
    "rarity": "1",
    "energy_cost": "6",
    "type": "Unit",
    "icon": "Green",
    "attack": "9000",
    "hit_points": "9000",
    "abilities": "",
    "effect": "Summon 1 Dinosaur (Cost 1, ATK 3000, HP 3000)",
    "requirements": "Purple owned",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Gohan (Super Saiyan)",
    "sub_name": "Like Father, Like Son",
    "groups": [
      "Gohan",
      "Saiyan"
    ],
    "rarity": "3",
    "energy_cost": "6",
    "type": "Unit",
    "icon": "Green",
    "attack": "8000",
    "hit_points": "13000",
    "abilities": "Guard",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Trunks",
    "sub_name": "A Son's Doubt",
    "groups": [
      "Trunks",
      "Saiyan"
    ],
    "rarity": "2",
    "energy_cost": "6",
    "type": "Unit",
    "icon": "Green",
    "attack": "10000",
    "hit_points": "11000",
    "abilities": "",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Frieza (3rd Form)",
    "sub_name": "Nightmare Fuel",
    "groups": [
      "Frieza",
      "Frieza Force"
    ],
    "rarity": "4",
    "energy_cost": "6",
    "type": "Unit",
    "icon": "Green",
    "attack": "8000",
    "hit_points": "12000",
    "abilities": "",
    "effect": "You must have 1 energy in your bank to Attack with this Unit / Adds 8000 ATK to self on Opponent's Turn",
    "requirements": "None / Purple Owned",
    "trigger": "Always"
  },
  {
    "set": "C1",
    "name": "Android 16",
    "sub_name": "Mysterious Prototype",
    "groups": [
      "Android 16",
      "Android"
    ],
    "rarity": "2",
    "energy_cost": "6",
    "type": "Unit",
    "icon": "Green",
    "attack": "8000",
    "hit_points": "13000",
    "abilities": "",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Cell (2nd Form)",
    "sub_name": "Unwelcome Guests",
    "groups": [
      "Cell",
      "Android"
    ],
    "rarity": "2",
    "energy_cost": "6",
    "type": "Unit",
    "icon": "Green",
    "attack": "7000",
    "hit_points": "11000",
    "abilities": "",
    "effect": "Adds 5000 ATK to itself on Opponent's Turn",
    "requirements": "",
    "trigger": "Always"
  },
  {
    "set": "C1",
    "name": "Dabura",
    "sub_name": "King of the Demon Realm",
    "groups": [
      "Dabura"
    ],
    "rarity": "3",
    "energy_cost": "6",
    "type": "Unit",
    "icon": "Green",
    "attack": "11000",
    "hit_points": "6000",
    "abilities": "",
    "effect": "Gives itself Swift",
    "requirements": "Green owned",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Majin Buu (Evil)",
    "sub_name": "The Evil Within",
    "groups": [
      "Majin Buu"
    ],
    "rarity": "3",
    "energy_cost": "6",
    "type": "Unit",
    "icon": "Green",
    "attack": "12000",
    "hit_points": "8000",
    "abilities": "",
    "effect": "Adds 3000 ATK to itself",
    "requirements": "Consume 1 Banked Energy",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Supreme Kai",
    "sub_name": "Godly Panic",
    "groups": [
      "Supreme Kai"
    ],
    "rarity": "3",
    "energy_cost": "6",
    "type": "Unit",
    "icon": "Yellow",
    "attack": "6000",
    "hit_points": "8000",
    "abilities": "",
    "effect": "Add 6000 ATK to a Friendly Unit",
    "requirements": "",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Raditz",
    "sub_name": "Mysterious Visitor",
    "groups": [
      "Raditz",
      "Saiyan",
      "Frieza Force"
    ],
    "rarity": "1",
    "energy_cost": "6",
    "type": "Unit",
    "icon": "Yellow",
    "attack": "8000",
    "hit_points": "8000",
    "abilities": "",
    "effect": "Gives itself Swift",
    "requirements": "Green owned",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Piccolo",
    "sub_name": "Special Beam Cannon",
    "groups": [
      "Piccolo",
      "Namekian"
    ],
    "rarity": "2",
    "energy_cost": "6",
    "type": "Unit",
    "icon": "Yellow",
    "attack": "9000",
    "hit_points": "10000",
    "abilities": "",
    "effect": "Kill one enemy Unit",
    "requirements": "Purple, Green, Blue owned",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Nappa",
    "sub_name": "Energy Wave",
    "groups": [
      "Nappa",
      "Saiyan",
      "Frieza Force"
    ],
    "rarity": "1",
    "energy_cost": "6",
    "type": "Unit",
    "icon": "Green",
    "attack": "9000",
    "hit_points": "9000",
    "abilities": "",
    "effect": "Deal 4000 DMG to an Enemy",
    "requirements": "2 Purple owned",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Vegeta",
    "sub_name": "Limitless Power",
    "groups": [
      "Vegeta",
      "Saiyan",
      "Frieza Force"
    ],
    "rarity": "1",
    "energy_cost": "6",
    "type": "Unit",
    "icon": "Green",
    "attack": "10000",
    "hit_points": "6000",
    "abilities": "",
    "effect": "Deal 5000 DMG to an Enemy",
    "requirements": "2 Blue owned",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Recoome",
    "sub_name": "The Final Blow",
    "groups": [
      "Recoome",
      "Ginyu Force",
      "Frieza Force"
    ],
    "rarity": "2",
    "energy_cost": "6",
    "type": "Unit",
    "icon": "Green",
    "attack": "5000",
    "hit_points": "9000",
    "abilities": "",
    "effect": "Kill one enemy Unit with 6000 HP or Less",
    "requirements": "",
    "trigger": "Upon Appearance"
  },
  {
    "set": "BS",
    "name": "Android 17",
    "sub_name": "Duking it Out",
    "groups": [
      "Android 17",
      "Android"
    ],
    "rarity": "1",
    "energy_cost": "6",
    "type": "Unit",
    "icon": "Green",
    "attack": "10000",
    "hit_points": "9000",
    "abilities": "",
    "effect": "Adds 3000 ATK to itself",
    "requirements": "Purple owned",
    "trigger": "Always"
  },
  {
    "set": "C1",
    "name": "Gotenks (Super Saiyan)",
    "sub_name": "Galactic Donuts",
    "groups": [
      "Gotenks",
      "Saiyan"
    ],
    "rarity": "2",
    "energy_cost": "6",
    "type": "Unit",
    "icon": "Green",
    "attack": "9000",
    "hit_points": "9000",
    "abilities": "",
    "effect": "Kill an Enemy Unit",
    "requirements": "2 Yellow, 1 Green owned",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Goku (Super Saiyan 3)",
    "sub_name": "Pushing Past Limits",
    "groups": [
      "Goku",
      "Saiyan"
    ],
    "rarity": "2",
    "energy_cost": "6",
    "type": "Unit",
    "icon": "Green",
    "attack": "11000",
    "hit_points": "10000",
    "abilities": "",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Dream Team",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "4",
    "energy_cost": "6",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Summon 1 or 2 SP Units that cost 6 or less in total. Add 1000 ATK to all Friendly Units",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Problem Children",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "6",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Summon 3 Cell Jr. (Cost 2, ATK 4000, HP 1000)",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Let the Cell Games Begin!",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "4",
    "energy_cost": "6",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Summon 1 SP Unit. Your opponent gains Banked Energy equal to the cost",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "From Bad to Worse",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "3",
    "energy_cost": "6",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Add 10000 ATK a Friendly Unit for this Turn",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Gohan (Teen, Super Saiyan)",
    "sub_name": "More Determined Than Ever",
    "groups": [
      "Gohan",
      "Saiyan"
    ],
    "rarity": "4",
    "energy_cost": "7",
    "type": "Unit",
    "icon": "Yellow",
    "attack": "9000",
    "hit_points": "13000",
    "abilities": "",
    "effect": "Add 6000 ATK to itself whenever it takes DMG",
    "requirements": "",
    "trigger": "Always"
  },
  {
    "set": "C1",
    "name": "Vegeta",
    "sub_name": "Tournament Ready",
    "groups": [
      "Vegeta",
      "Saiyan"
    ],
    "rarity": "2",
    "energy_cost": "7",
    "type": "Unit",
    "icon": "Green",
    "attack": "11000",
    "hit_points": "10000",
    "abilities": "Guard",
    "effect": "Add 3000 ATK to all Friendly Units",
    "requirements": "1 Green, 1 Blue owned",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Trunks",
    "sub_name": "Concerned Spectator",
    "groups": [
      "Trunks",
      "Saiyan"
    ],
    "rarity": "2",
    "energy_cost": "7",
    "type": "Unit",
    "icon": "Green",
    "attack": "11000",
    "hit_points": "13000",
    "abilities": "",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Gotenks",
    "sub_name": "Brimming with Confidence",
    "groups": [
      "Gotenks",
      "Saiyan"
    ],
    "rarity": "3",
    "energy_cost": "7",
    "type": "Unit",
    "icon": "Green",
    "attack": "13000",
    "hit_points": "12000",
    "abilities": "",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Piccolo",
    "sub_name": "The World Tournament, Again!",
    "groups": [
      "Piccolo",
      "Namekian"
    ],
    "rarity": "3",
    "energy_cost": "7",
    "type": "Unit",
    "icon": "Yellow",
    "attack": "9000",
    "hit_points": "5000",
    "abilities": "",
    "effect": "5000 ATK & HP to a Friendly Unit",
    "requirements": "",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Captain Ginyu",
    "sub_name": "Noble Leader",
    "groups": [
      "Captain Ginyu",
      "Ginyu Force",
      "Frieza Force"
    ],
    "rarity": "2",
    "energy_cost": "7",
    "type": "Unit",
    "icon": "Yellow",
    "attack": "10000",
    "hit_points": "10000",
    "abilities": "",
    "effect": "5000 ATK to all Friendly Ginyu Force Units",
    "requirements": "",
    "trigger": "Always"
  },
  {
    "set": "C1",
    "name": "King Cold",
    "sub_name": "Most Feared Family",
    "groups": [
      "King Cold",
      "Frieza Force"
    ],
    "rarity": "2",
    "energy_cost": "7",
    "type": "Unit",
    "icon": "Yellow",
    "attack": "8000",
    "hit_points": "14000",
    "abilities": "",
    "effect": "3000 ATK to all Friendly Frieza Units",
    "requirements": "",
    "trigger": "Always"
  },
  {
    "set": "C1",
    "name": "Super Buu",
    "sub_name": "Innocence Consumed",
    "groups": [
      "Majin Buu"
    ],
    "rarity": "4",
    "energy_cost": "7",
    "type": "Unit",
    "icon": "Green",
    "attack": "15000",
    "hit_points": "11000",
    "abilities": "",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Elder Kai",
    "sub_name": "Sealed in the Sword",
    "groups": [
      "Elder Kai"
    ],
    "rarity": "1",
    "energy_cost": "7",
    "type": "Unit",
    "icon": "Yellow",
    "attack": "4000",
    "hit_points": "10000",
    "abilities": "",
    "effect": "Heal your Leader for 10000",
    "requirements": "Yellow owned",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Frieza (Final Form)",
    "sub_name": "Powerful Blow",
    "groups": [
      "Frieza",
      "Frieza Force"
    ],
    "rarity": "2",
    "energy_cost": "7",
    "type": "Unit",
    "icon": "Green",
    "attack": "13000",
    "hit_points": "7000",
    "abilities": "Swift",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "BS",
    "name": "Dabura",
    "sub_name": "Unprecedented Struggle",
    "groups": [
      "Dabura"
    ],
    "rarity": "1",
    "energy_cost": "7",
    "type": "Unit",
    "icon": "Green",
    "attack": "9000",
    "hit_points": "12000",
    "abilities": "",
    "effect": "Add 5000 ATK on Opponent's Turn",
    "requirements": "",
    "trigger": "Always"
  },
  {
    "set": "BS",
    "name": "Goku (Super Saiyan 3)",
    "sub_name": "All-Out Kamehameha!",
    "groups": [
      "Goku",
      "Saiyan"
    ],
    "rarity": "2",
    "energy_cost": "7",
    "type": "Unit",
    "icon": "Yellow",
    "attack": "10000",
    "hit_points": "12000",
    "abilities": "",
    "effect": "Gain 5000 ATK",
    "requirements": "1 Purple, 1 Blue, 1 Green owned",
    "trigger": "Always"
  },
  {
    "set": "BS",
    "name": "Back from the Other World",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "1",
    "energy_cost": "7",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Discard 1 card from your hand. Summon 1 SP Unit equal to or less than the cost",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Porunga",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "4",
    "energy_cost": "7",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Perform 3 of the following actions in any combination:- 1. Heal 5000 HP to a friendly Unit or Leader, 2. Draw 2 Cards",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Hurry, Goku!",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "2",
    "energy_cost": "7",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Summon 1 SP Unit that costs 7 or less. If it's a Goku Unit, add 3000 ATK",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Rescue Mission Accomplished",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "3",
    "energy_cost": "7",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Summon 1 or 2 SP Units that cost 7 or less in total. Draw a card",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Gohan (Super Saiyan)",
    "sub_name": "Power of the Z-Sword",
    "groups": [
      "Gohan",
      "Saiyan"
    ],
    "rarity": "4",
    "energy_cost": "8",
    "type": "Unit",
    "icon": "Yellow",
    "attack": "10000",
    "hit_points": "14000",
    "abilities": "",
    "effect": "5000 ATK & HP to itself",
    "requirements": "Yellow owned",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Gotenks (Super Saiyan)",
    "sub_name": "Unbelievable Power",
    "groups": [
      "Gotenks",
      "Saiyan"
    ],
    "rarity": "4",
    "energy_cost": "8",
    "type": "Unit",
    "icon": "Yellow",
    "attack": "7000",
    "hit_points": "12000",
    "abilities": "",
    "effect": "8000 ATK & HP to itself",
    "requirements": "2 Green owned",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Cell (Perfect)",
    "sub_name": "True Form",
    "groups": [
      "Cell",
      "Android"
    ],
    "rarity": "3",
    "energy_cost": "8",
    "type": "Unit",
    "icon": "Yellow",
    "attack": "15000",
    "hit_points": "12000",
    "abilities": "Swift",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Frieza (Final Form)",
    "sub_name": "Death Beam",
    "groups": [
      "Frieza",
      "Frieza Force"
    ],
    "rarity": "2",
    "energy_cost": "8",
    "type": "Unit",
    "icon": "Yellow",
    "attack": "6000",
    "hit_points": "9000",
    "abilities": "",
    "effect": "Kill an enemy Unit",
    "requirements": "",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Kid Buu",
    "sub_name": "Barely Breaking a Sweat",
    "groups": [
      "Majin Buu"
    ],
    "rarity": "2",
    "energy_cost": "8",
    "type": "Unit",
    "icon": "Yellow",
    "attack": "14000",
    "hit_points": "16000",
    "abilities": "",
    "effect": "Deal 4000 DMG to an Enemy",
    "requirements": "Blue owned",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Vegeta (Majin)",
    "sub_name": "Majin and Mad",
    "groups": [
      "Vegeta",
      "Saiyan"
    ],
    "rarity": "3",
    "energy_cost": "9",
    "type": "Unit",
    "icon": "Yellow",
    "attack": "10000",
    "hit_points": "26000",
    "abilities": "",
    "effect": "Gains the following: (Always: 3000 ATK to itself for each enemy Unit)",
    "requirements": "1 Purple, 1 Yellow owned",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Trunks (Super Saiyan)",
    "sub_name": "Beyond Super Saiyan",
    "groups": [
      "Trunks",
      "Saiyan"
    ],
    "rarity": "3",
    "energy_cost": "9",
    "type": "Unit",
    "icon": "Yellow",
    "attack": "20000",
    "hit_points": "17000",
    "abilities": "",
    "effect": "",
    "requirements": "",
    "trigger": ""
  },
  {
    "set": "C1",
    "name": "Frieza (Final Form)",
    "sub_name": "Full Power Unleashed",
    "groups": [
      "Frieza",
      "Frieza Force"
    ],
    "rarity": "3",
    "energy_cost": "9",
    "type": "Unit",
    "icon": "Yellow",
    "attack": "13000",
    "hit_points": "23000",
    "abilities": "",
    "effect": "Unlocks your bank. Adds 3000 ATK to itself for each Frieza card in your hand",
    "requirements": "3 Banked Energy owned",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Frieza (Final Form)",
    "sub_name": "Emperor's Rage",
    "groups": [
      "Frieza",
      "Frieza Force"
    ],
    "rarity": "4",
    "energy_cost": "10",
    "type": "Unit",
    "icon": "Yellow",
    "attack": "13000",
    "hit_points": "26000",
    "abilities": "",
    "effect": "Kill all Units",
    "requirements": "Consume 1 Purple, 1 Blue, 1 Green, 1 Yellow",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Vegeta (Great Ape)",
    "sub_name": "Angered Great Ape",
    "groups": [
      "Vegeta",
      "Saiyan",
      "Frieza Force"
    ],
    "rarity": "2",
    "energy_cost": "10",
    "type": "Unit",
    "icon": "Yellow",
    "attack": "10000",
    "hit_points": "20000",
    "abilities": "",
    "effect": "Adds 20000 ATK & 10000 to itself",
    "requirements": "Consume 10 Banked Energy",
    "trigger": "Upon Appearance"
  },
  {
    "set": "C1",
    "name": "Sight for Sore Eyes",
    "sub_name": "",
    "groups": [
      ""
    ],
    "rarity": "4",
    "energy_cost": "10",
    "type": "Event",
    "icon": "",
    "attack": "",
    "hit_points": "",
    "abilities": "",
    "effect": "Add 10000 ATK to all Friendly Units",
    "requirements": "",
    "trigger": ""
  }
];
