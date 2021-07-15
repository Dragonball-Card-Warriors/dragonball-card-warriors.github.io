export enum Rarity {
  Normal = 1,
  Rare,
  SuperRare,
  Legendary,
}

export enum CardType {
  Character = 'Character',
  Event = 'Event',
  Special = 'Special',
  Support = 'Support',
}

export enum IconType {
  Purple = 'Purple',
  Blue = 'Blue',
  Green = 'Green',
  Yellow = 'Yellow',
  None = '',
}

export enum AbilityType {
  Guard = 'Guard',
  Swift = 'Swift',
  PiercingStrike = 'Piercing Strike',
  NaturalRecovery = 'Natural Recovery',
  NegateDamage = 'Negate Damage',
  Rush = 'Rush',
  Overpower = 'Overpower',
}

export enum EffectType {
  Other = 'Other',
  DrawCard = 'Draw Card',
  AddAttack = 'Add Attack',
  AddHitPoints = 'Add Hit Points',
  SwiftAttack = 'Swift Attack',
  DealDamage = 'Deal Damage',
  Guard = 'Guard',
  Rush = 'Rush',
  Overpower = 'Overpower',
  KillCharacter = 'Kill Character',
  RemoveEffects = 'Remove Effects',
  ReturnCharacter = 'Return Character',
  AddBankEnergy = 'Add Bank Energy',
  UnlockBank = 'Unlock Bank',
  RestoreBank = 'Restore Bank',
  NegateDamage = 'Negate Damage',
  SummonSpecial = 'Summon Special Character',
  RecoverHitPoints = 'Recover Hit Points',
  RecoverLifePoints = 'Recover Life Points',
  UnableToAttack = 'Unable To Attack',
  PiercingStrike = 'Piercing Strike',
  IncreaseEnergyLimit = 'Increase Energy Limit',
  NaturalRecovery = 'Natural Recovery',
  SacrificeCharacter = 'Sacrifice Character',
  UnableToAttackLeader = 'Unable To Attack Leader',
  ReturnOpponentCardToDeck = 'Return Opponent Card To Deck',
  GainSymbol = 'Gain Symbol',
  ConsumeBank = 'Consume Bank',
  SummonSupport = 'Summon Support',
  SummonFromHand = 'Summon From Hand',
  SummonFromDeck = 'Summon From Deck',
  ReducedCost = 'Reduced Cost',
  InstantAppearance = 'Instant Appearance',
  ReturnFromGraveyard = 'Return From Graveyard',
  ReturnCardToDeck = 'Return Card To Deck',
  DiscardCard = 'Discard Card',
  SurgeDecrease = 'Surge Decrease'
}

// Not used yet

export enum TriggerType {
  UponAppearance = 'Upon Appearance',
  Always = 'Always',
  EventCard = '',
  Other = '',
}

export const rarityColor = {
  [Rarity.Normal]: '#a6a3cf',
  [Rarity.Rare]: '#d9a083',
  [Rarity.SuperRare]: '#c5d7da',
  [Rarity.Legendary]: '#f2d63a',
};

// Not used yet
export class Effect {
  constructor(
    public type: EffectType[],
    public description: string,
    public trigger?: TriggerType,
    public requirements?: string
  ) {}
}

export const cardList: Array<{
  id: number,
  set: string,
  name: string,
  sub_name: string,
  groups: string[],
  rarity: Rarity,
  energy_cost: number,
  type: CardType,
  icon: IconType,
  attack?: number,
  hit_points?: number,
  abilities?: AbilityType[],
  effects?: Effect[],
}> = [
  {
    'id': 1089,
    'set': 'BS',
    'name': 'Frog',
    'sub_name': 'Ginyu\'s Fate',
    'groups': ['Frog'],
    'rarity': Rarity.Normal,
    'energy_cost': 0,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 1000,
    'hit_points': 1000,
    'abilities': [AbilityType.Guard],
  },
  {
    'id': 1213,
    'set': 'C1',
    'name': 'In Good Hands',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 0,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.RemoveEffects],
        'Removes any effects applied to all androids on the field. (Always effects not removed)'
      ),
    ],
  },
  {
    'id': 1223,
    'set': 'C1',
    'name': 'Mom\'s the Boss',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 0,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draws 1 card. Afterward, select 1 card from your hand and return it to the deck'
      ),
    ],
  },
  {
    'id': 1247,
    'set': 'C1',
    'name': 'Precious Friends',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 0,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.AddHitPoints],
        'Adds 3000 HP to one friendly Character'
      ),
    ],
  },
  {
    'id': 1257,
    'set': 'C1',
    'name': 'Namekian Shield',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.SuperRare,
    'energy_cost': 0,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.Guard],
        'Gives Guard to one character on the field'
      ),
    ],
  },
  {
    'id': 1266,
    'set': 'C1',
    'name': 'Scouter Malfunction',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 0,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.RemoveEffects],
        'Removes any effects applied to one regular character on the field. (Always effects not removed)'
      ),
    ],
  },
  {
    'id': 1294,
    'set': 'C1',
    'name': 'Not a Bad Guy',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 0,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.ReturnCharacter],
        'Returns one regular character on your side of the field that has taken damage to your hand'
      ),
    ],
  },
  {
    'id': 1009,
    'set': 'C1',
    'name': 'Gohan (Kid)',
    'sub_name': 'Suited Up',
    'groups': [
      'Gohan',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 1,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 3000,
    'hit_points': 4000,
    'abilities': [AbilityType.Guard],
  },
  {
    'id': 1026,
    'set': 'BS',
    'name': 'Goten',
    'sub_name': 'If I win…',
    'groups': [
      'Goten',
      'Saiyan',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 1000,
    'hit_points': 3000,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draw a card',
        TriggerType.UponAppearance,
        'Blue owned'
      ),
    ],
  },
  {
    'id': 1041,
    'set': 'BS',
    'name': 'Saibaman',
    'sub_name': 'Weird Warriors',
    'groups': [
      'Saibaman',
      'Frieza Force',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Character,
    'icon': IconType.None,
    'attack': 1000,
    'hit_points': 1000,
    'abilities': [AbilityType.Swift],
  },
  {
    'id': 1042,
    'set': 'BS',
    'name': 'Planetary Warrior B',
    'sub_name': 'Loyal Subject',
    'groups': [
      'Planetary Warrior',
      'Frieza Force',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Character,
    'icon': IconType.None,
    'attack': 1000,
    'hit_points': 3000,
  },
  {
    'id': 1043,
    'set': 'BS',
    'name': 'Planetary Warrior A',
    'sub_name': 'Officer',
    'groups': [
      'Planetary Warrior',
      'Frieza Force',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Character,
    'icon': IconType.None,
    'attack': 3000,
    'hit_points': 1000,
  },
  {
    'id': 1074,
    'set': 'C1',
    'name': 'Majin Buu (Innocent)',
    'sub_name': 'Buu\'s Back',
    'groups': ['Majin Buu'],
    'rarity': Rarity.SuperRare,
    'energy_cost': 1,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 2000,
    'hit_points': 3000,
    'effects': [
      new Effect(
        [EffectType.AddBankEnergy],
        '1 Bank Energy',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1079,
    'set': 'C1',
    'name': 'Chi-Chi',
    'sub_name': 'Mad Mama',
    'groups': ['Chi-Chi'],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 4000,
    'hit_points': 4000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        '3000 ATK to self when Goku is on the enemy field '
      ),
    ],
  },
  {
    'id': 1082,
    'set': 'C1',
    'name': 'Kami',
    'sub_name': 'Earth\'s Guardian',
    'groups': [
      'Kami',
      'Namekian',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 2000,
    'hit_points': 2000,
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.AddHitPoints],
        '2000 ATK & HP to one Friendly Unit',
        TriggerType.EventCard,
        'Blue owned'
      ),
    ],
  },
  {
    'id': 1083,
    'set': 'BS',
    'name': 'Mr. Popo',
    'sub_name': 'Kami\'s Assistant',
    'groups': ['Mr. Popo'],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 2000,
    'hit_points': 4000,
  },
  {
    'id': 1085,
    'set': 'C1',
    'name': 'Dende',
    'sub_name': 'Child of Namek',
    'groups': [
      'Dende',
      'Namekian',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 2000,
    'hit_points': 3000,
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.AddHitPoints],
        '1000 ATK & HP to one Friendly Unit',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1090,
    'set': 'C1',
    'name': 'Mr. Satan',
    'sub_name': 'Earth\'s Champion?',
    'groups': ['Mr. Satan'],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 1000,
    'hit_points': 5000,
    'abilities': [AbilityType.Guard],
  },
  {
    'id': 1092,
    'set': 'BS',
    'name': 'Videl',
    'sub_name': 'Mr. Satan\'s Daughter',
    'groups': ['Videl'],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 5000,
    'hit_points': 1000,
  },
  {
    'id': 1204,
    'set': 'C1',
    'name': 'x3 Kaioken',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Legendary,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Triples the ATK of one character on your side of the field until the end of the turn. (You cannot attack opponent\'s leader.)'
      ),
    ],
  },
  {
    'id': 1206,
    'set': 'C1',
    'name': 'Fated Confrontation',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Select one character on your side of the field and one on the opponent\'s side. Each will deal damage to the other equal to their respective ATK values.'
      ),
    ],
  },
  {
    'id': 1209,
    'set': 'C1',
    'name': 'Past Self',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draw 1 Unit with a cost of 2 or less. (If there are none, draw 1 other card)'
      ),
    ],
  },
  {
    'id': 1210,
    'set': 'C1',
    'name': 'Entrusted Spirit Bomb',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.UnlockBank, EffectType.RestoreBank],
        'Unlocks your bank and immediately restores it'
      ),
    ],
  },
  {
    'id': 1216,
    'set': 'BS',
    'name': 'Catch the Monkey!',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SwiftAttack],
        'Gives Swift to 1 Friendly Unit for this turn.'
      ),
    ],
  },
  {
    'id': 1224,
    'set': 'BS',
    'name': 'Cheer',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        '3000 ATK to one friendly Unit'
      ),
    ],
  },
  {
    'id': 1230,
    'set': 'C1',
    'name': 'On Edge',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Returns 1 card from your hand to your deck. Draw 2 cards'
      ),
    ],
  },
  {
    'id': 1232,
    'set': 'C1',
    'name': 'The Best Team Ever Assembled',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.SuperRare,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.NegateDamage],
        'Gives Negate Damage to all Units on your side of the field for this turn.',
        TriggerType.EventCard,
        '5 Units on your side of the field'
      ),
    ],
  },
  {
    'id': 1238,
    'set': 'C1',
    'name': 'Help from the Future',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draw 1 random 7 cost or higher card. (If there are none, draw 1 other card)'
      ),
    ],
  },
  {
    'id': 1239,
    'set': 'C1',
    'name': 'Classmates',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draw 1 event card that costs 3 or less. (If there are none, draw 1 other card)'
      ),
    ],
  },
  {
    'id': 1243,
    'set': 'C1',
    'name': 'The Krillin Household',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draw 1 card. If the card costs 1 or less draw a card'
      ),
    ],
  },
  {
    'id': 1258,
    'set': 'C1',
    'name': 'Please don\'t die, Mr. Piccolo!',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.ReturnCharacter],
        'Returns one Unit on the field that has taken damage to their respective hand'
      ),
    ],
  },
  {
    'id': 1262,
    'set': 'C1',
    'name': 'Retreat',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.ReturnCharacter],
        'Returns one Friendly Unit to your hand'
      ),
    ],
  },
  {
    'id': 1264,
    'set': 'C1',
    'name': 'To Outer Space!',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draw 1 card. If the card is an Event card, draw a card'
      ),
    ],
  },
  {
    'id': 1267,
    'set': 'C1',
    'name': 'Senzu Bean',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.RecoverHitPoints],
        'Completely restores the HP of one friendly Unit'
      ),
    ],
  },
  {
    'id': 1270,
    'set': 'C1',
    'name': 'Reunification',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.ReturnCharacter, EffectType.SummonSpecial],
        'Return 2 regular characters on your side of the field to your hand. Summon 1 SP card equal to or less than the combined cost of the 2 Returned'
      ),
    ],
  },
  {
    'id': 1273,
    'set': 'C1',
    'name': 'Goku\'s Mistake',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draw 1 event card with a cost of 6 or less. (If there are none, draw 1 other card)'
      ),
    ],
  },
  {
    'id': 1279,
    'set': 'C1',
    'name': 'Return to the Future',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.SuperRare,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.RestoreBank],
        'Restores your Bank'
      ),
    ],
  },
  {
    'id': 1282,
    'set': 'C1',
    'name': 'Cover Blown',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draw 1 Gohan (If there are none, draw 1 other card)'
      ),
    ],
  },
  {
    'id': 1285,
    'set': 'C1',
    'name': 'Buu the Builder',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draw 1 Card. If the card is Majin Buu, draw 1 more card'
      ),
    ],
  },
  {
    'id': 1295,
    'set': 'C1',
    'name': 'Breather',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.RecoverHitPoints],
        'Recover 4000 HP for all friendly Units'
      ),
    ],
  },
  {
    'id': 1296,
    'set': 'C1',
    'name': 'Proud Warrior',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.SuperRare,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.RemoveEffects],
        'Remove any effects applied to one Unit (Always effects not removed)'
      ),
    ],
  },
  {
    'id': 1001,
    'set': 'C1',
    'name': 'Goku',
    'sub_name': 'Super Gravity Training',
    'groups': [
      'Goku',
      'Saiyan',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 4000,
    'hit_points': 4000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Gain 3000 ATK',
        TriggerType.UponAppearance,
        'Blue Owned'
      ),
    ],
  },
  {
    'id': 1008,
    'set': 'C1',
    'name': 'Gohan (Kid)',
    'sub_name': 'Waiting for Goku',
    'groups': [
      'Gohan',
      'Saiyan',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 2,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 5000,
    'hit_points': 4000,
    'abilities': [AbilityType.Guard],
  },
  {
    'id': 1018,
    'set': 'BS',
    'name': 'Vegeta',
    'sub_name': 'Least Favorite Shirt',
    'groups': [
      'Vegeta',
      'Saiyan',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 3000,
    'hit_points': 6000,
  },
  {
    'id': 1028,
    'set': 'C1',
    'name': 'Trunks (Kid)',
    'sub_name': 'I\'m gonna win!',
    'groups': [
      'Trunks',
      'Saiyan',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 2,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 5000,
    'hit_points': 4000,
  },
  {
    'id': 1035,
    'set': 'BS',
    'name': 'Krillin',
    'sub_name': 'Trepidation',
    'groups': ['Krillin'],
    'rarity': Rarity.Rare,
    'energy_cost': 2,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 4000,
    'hit_points': 5000,
  },
  {
    'id': 1044,
    'set': 'BS',
    'name': 'Planetary Warrior C',
    'sub_name': 'Scout',
    'groups': [
      'Planetary Warrior',
      'Frieza Force',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Character,
    'icon': IconType.None,
    'attack': 4000,
    'hit_points': 2000,
  },
  {
    'id': 1045,
    'set': 'BS',
    'name': 'Planetary Warrior D',
    'sub_name': 'The Stolen Dragon Ball',
    'groups': [
      'Planetary Warrior',
      'Frieza Force',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Character,
    'icon': IconType.None,
    'attack': 3000,
    'hit_points': 3000,
  },
  {
    'id': 1046,
    'set': 'BS',
    'name': 'Cui',
    'sub_name': 'Arrogant Rival',
    'groups': [
      'Cui',
      'Frieza Force',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 6000,
    'hit_points': 3000,
  },
  {
    'id': 1052,
    'set': 'C1',
    'name': 'Guldo',
    'sub_name': 'Time Stopper',
    'groups': [
      'Guldo',
      'Ginyu Force',
      'Frieza Force',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 2,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 3000,
    'hit_points': 6000,
    'abilities': [AbilityType.Guard],
  },
  {
    'id': 1068,
    'set': 'C1',
    'name': 'Yamu',
    'sub_name': 'Terrifying Mission',
    'groups': ['Yamu'],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 3000,
    'hit_points': 3000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Gain 4000 ATK',
        TriggerType.Always,
        'Friendly Spopovich'
      ),
    ],
  },
  {
    'id': 1070,
    'set': 'C1',
    'name': 'Babidi',
    'sub_name': 'Wizard of the Demon Realm',
    'groups': ['Babidi'],
    'rarity': Rarity.Rare,
    'energy_cost': 2,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 2000,
    'hit_points': 3000,
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.AddHitPoints],
        '3000 ATK & HP to one Friendly Unit',
        TriggerType.UponAppearance,
        'Purple Consumed'
      ),
    ],
  },
  {
    'id': 1077,
    'set': 'C1',
    'name': 'Bulma',
    'sub_name': 'Android Solution',
    'groups': ['Bulma'],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 1000,
    'hit_points': 7000,
    'effects': [
      new Effect(
        [EffectType.RemoveEffects],
        'Removes any effects applied to all androids on the field. (Always effects not removed)',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1078,
    'set': 'C1',
    'name': 'Bulma',
    'sub_name': 'Worried about Vegeta',
    'groups': ['Bulma'],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 1000,
    'hit_points': 2000,
    'effects': [
      new Effect(
        [EffectType.AddBankEnergy],
        'Add 2 Energy to your Bank',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1081,
    'set': 'C1',
    'name': 'Yajirobe',
    'sub_name': 'Master Korin\'s Errand Boy',
    'groups': ['Yajirobe'],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 3000,
    'hit_points': 2000,
    'effects': [
      new Effect(
        [EffectType.AddHitPoints],
        '5000 HP to one Friendly Unit',
        TriggerType.UponAppearance,
        'Blue owned'
      ),
    ],
  },
  {
    'id': 1086,
    'set': 'C1',
    'name': 'Dende',
    'sub_name': 'The New Guardian',
    'groups': [
      'Dende',
      'Namekian',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 2000,
    'hit_points': 3000,
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.AddHitPoints],
        '2000 ATK & HP to one Friendly Unit',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1091,
    'set': 'C1',
    'name': 'Mr. Satan',
    'sub_name': 'Supposedly Undefeated',
    'groups': ['Mr. Satan'],
    'rarity': Rarity.Rare,
    'energy_cost': 2,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 5000,
    'hit_points': 4000,
    'effects': [
      new Effect(
        [EffectType.Guard],
        'Gain Guard',
        TriggerType.Always,
        'Friendly Unit'
      ),
    ],
  },
  {
    'id': 1101,
    'set': 'C1',
    'name': 'Chiaotzu',
    'sub_name': 'Telekinesis',
    'groups': ['Chiaotzu'],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 3000,
    'hit_points': 1000,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deals 2000 damage to your opponent\'s leader or one character on the field',
        TriggerType.UponAppearance,
        'Purple owned'
      ),
    ],
  },
  {
    'id': 1114,
    'set': 'C1',
    'name': 'Android 19',
    'sub_name': 'Energy Absorption',
    'groups': [
      'Android 19',
      'Android',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 1000,
    'hit_points': 2000,
    'effects': [
      new Effect(
        [EffectType.AddBankEnergy],
        'For every 2 or less cost enemy Unit, add 1 Energy to your Bank',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1226,
    'set': 'C1',
    'name': 'Earth\'s Mightiest Assemble!',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Legendary,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SummonSpecial],
        'Summon 1 SP Unit with a cost of 3 or less'
      ),
    ],
  },
  {
    'id': 1227,
    'set': 'C1',
    'name': 'Strength in Numbers',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deal 1000 DMG to the Opponent\'s Leader for every Friendly Unit'
      ),
    ],
  },
  {
    'id': 1228,
    'set': 'C1',
    'name': 'Peons',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SummonSupport],
        'Summon 3 Peons (Cost 1, ATK 1000, HP 1000)'
      ),
    ],
  },
  {
    'id': 1236,
    'set': 'BS',
    'name': 'Here to Watch',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draw 2 cards. Return 1 card in your hand to your deck.'
      ),
    ],
  },
  {
    'id': 1245,
    'set': 'C1',
    'name': 'Interlude',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Return as many cards as you like from your hand to your deck; draw the same amount.'
      ),
    ],
  },
  {
    'id': 1246,
    'set': 'C1',
    'name': 'Commemorative Photo',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.ReturnCharacter],
        'Return an Enemy Unit to your opponent\'s hand with a cost of 4 or less.'
      ),
    ],
  },
  {
    'id': 1248,
    'set': 'C1',
    'name': 'Two Buus',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.SuperRare,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SummonSpecial],
        'Summon 1 Majin Buu SP Unit, Cost equal or less than your energy limit.',
        TriggerType.EventCard,
        'Majin Buu on the field'
      ),
    ],
  },
  {
    'id': 1250,
    'set': 'C1',
    'name': 'The Adventure Begins!',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draw 1 card. If the cost is 3 or less, draw a card.'
      ),
    ],
  },
  {
    'id': 1252,
    'set': 'C1',
    'name': 'Saiyan weak Point',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.RemoveEffects],
        'Removes any effects applied to all Enemy Units on the field. (Always effects not removed)'
      ),
    ],
  },
  {
    'id': 1254,
    'set': 'C1',
    'name': 'Welcome to King Kai\'s Planet',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draw 1 card. If the cost is 5 or more, draw a card.'
      ),
    ],
  },
  {
    'id': 1263,
    'set': 'C1',
    'name': 'Ancient Spaceship',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draw as many cards as your opponent currently holds.',
        TriggerType.EventCard,
        'Last card in hand'
      ),
    ],
  },
  {
    'id': 1274,
    'set': 'C1',
    'name': 'Downgrade',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.RemoveEffects],
        'Removes any effects applied to one Unit on the field. (Always effects not removed) Draw a card'
      ),
    ],
  },
  {
    'id': 1275,
    'set': 'C1',
    'name': 'This was the only place…',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.KillCharacter],
        'Kill 1 Enemy Unit, Kill all Friendly Units',
        TriggerType.EventCard,
        'Units on both sides of the field'
      ),
    ],
  },
  {
    'id': 1276,
    'set': 'C1',
    'name': 'Let\'s Head Back',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.ReturnCharacter],
        'Returns one Unit on the field to their respective hand.',
        TriggerType.EventCard,
        'HP must be Less than ATK'
      ),
    ],
  },
  {
    'id': 1278,
    'set': 'C1',
    'name': 'Victorious and Tired',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.RecoverHitPoints, EffectType.RecoverLifePoints],
        'Recover 6000 HP to one Friendly Unit or your Leader'
      ),
    ],
  },
  {
    'id': 1283,
    'set': 'C1',
    'name': 'The Hunted',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draw 3 cards. Return 2 cards to your Deck.'
      ),
    ],
  },
  {
    'id': 1284,
    'set': 'C1',
    'name': 'The People of Earth',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.AddBankEnergy],
        'Add 1 Energy to your bank for each Friendly Unit'
      ),
    ],
  },
  {
    'id': 1287,
    'set': 'C1',
    'name': 'Bad Idea',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.KillCharacter],
        'Kill 1 Unit that costs 3 or less'
      ),
    ],
  },
  {
    'id': 1006,
    'set': 'C1',
    'name': 'Gohan (Kid)',
    'sub_name': 'All Trained Up',
    'groups': [
      'Gohan',
      'Saiyan',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 3,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 6000,
    'hit_points': 4000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Add 3000 ATK',
        TriggerType.Always,
        'Blue owned, Your turn'
      ),
    ],
  },
  {
    'id': 1013,
    'set': 'BS',
    'name': 'Gohan',
    'sub_name': 'The Ultimate High School Student',
    'groups': [
      'Gohan',
      'Saiyan',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 3,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 6000,
    'hit_points': 5000,
    'abilities': [AbilityType.Guard],
  },
  {
    'id': 1016,
    'set': 'BS',
    'name': 'Vegeta',
    'sub_name': 'Confidence in Spades',
    'groups': [
      'Vegeta',
      'Saiyan',
      'Frieza Force',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 3,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 4000,
    'hit_points': 7000,
  },
  {
    'id': 1031,
    'set': 'BS',
    'name': 'Piccolo',
    'sub_name': 'Prepping for the Saiyans',
    'groups': [
      'Piccolo',
      'Namekian',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 3,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 6000,
    'hit_points': 5000,
  },
  {
    'id': 1034,
    'set': 'C1',
    'name': 'Krillin',
    'sub_name': 'Destructo-Disc',
    'groups': ['Krillin'],
    'rarity': Rarity.Normal,
    'energy_cost': 3,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 2000,
    'hit_points': 1000,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deal 3000 DMG to an Enemy',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1038,
    'set': 'C1',
    'name': 'Yamcha',
    'sub_name': 'Warning of Danger',
    'groups': ['Yamcha'],
    'rarity': Rarity.Rare,
    'energy_cost': 3,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 4000,
    'hit_points': 7000,
    'effects': [
      new Effect(
        [EffectType.Guard],
        'Gains Guard',
        TriggerType.Always,
        'Blue owned'
      ),
    ],
  },
  {
    'id': 1048,
    'set': 'C1',
    'name': 'Zarbon',
    'sub_name': 'Bargaining',
    'groups': [
      'Zarbon',
      'Frieza Force',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 3,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 5000,
    'hit_points': 6000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Add 2000 ATK',
        TriggerType.Always,
        'Your Turn'
      ),
    ],
  },
  {
    'id': 1049,
    'set': 'C1',
    'name': 'Recoome',
    'sub_name': 'Beefed-up Bod',
    'groups': [
      'Recoome',
      'Ginyu Force',
      'Frieza Force',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 3,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 3000,
    'hit_points': 7000,
    'abilities': [AbilityType.Guard],
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Add 2000 ATK when this takes damage',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1059,
    'set': 'BS',
    'name': 'Android 19',
    'sub_name': 'Loyal Servant',
    'groups': [
      'Android 19',
      'Android',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 3,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 4000,
    'hit_points': 4000,
    'effects': [
      new Effect(
        [EffectType.RecoverLifePoints],
        'Heal 1000 HP to your Leader',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1064,
    'set': 'C1',
    'name': 'Android 18',
    'sub_name': 'Show Me the Money',
    'groups': [
      'Android 18',
      'Android',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 3,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 4000,
    'hit_points': 5000,
    'effects': [
      new Effect(
        [EffectType.AddBankEnergy],
        'Add 1 Energy to your bank for each Card in your Hand',
        TriggerType.UponAppearance,
        'Purple owned'
      ),
    ],
  },
  {
    'id': 1069,
    'set': 'C1',
    'name': 'Spopovich',
    'sub_name': 'Rampaging Puppet',
    'groups': ['Spopovich'],
    'rarity': Rarity.Normal,
    'energy_cost': 3,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 5000,
    'hit_points': 3000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Gain 4000 ATK',
        TriggerType.Always,
        'Friendly Yamu'
      ),
    ],
  },
  {
    'id': 1073,
    'set': 'C1',
    'name': 'Yakon',
    'sub_name': 'Magical Beast of Dark Star',
    'groups': ['Yakon'],
    'rarity': Rarity.Rare,
    'energy_cost': 3,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 2000,
    'hit_points': 7000,
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.ConsumeBank],
        'Gain 8000 ATK',
        TriggerType.UponAppearance,
        'Consumes 3 Banked Energy'
      ),
    ],
  },
  {
    'id': 1080,
    'set': 'C1',
    'name': 'Master Roshi',
    'sub_name': 'A Master\'s Premonition',
    'groups': ['Master Roshi'],
    'rarity': Rarity.Normal,
    'energy_cost': 3,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 3000,
    'hit_points': 7000,
    'effects': [
      new Effect(
        [EffectType.AddHitPoints],
        'Add 3000 HP to a Friendly Goku Unit',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1084,
    'set': 'C1',
    'name': 'King Kai',
    'sub_name': 'Guardian of the North Galaxy',
    'groups': ['King Kai'],
    'rarity': Rarity.Rare,
    'energy_cost': 3,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 3000,
    'hit_points': 3000,
    'effects': [
      new Effect(
        [EffectType.SummonSupport],
        'Summon 1 Friendly Bubbles (Cost 1, ATK 1000, HP 1000)',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1093,
    'set': 'C1',
    'name': 'Videl',
    'sub_name': 'Less Hair, More Moxie',
    'groups': ['Videl'],
    'rarity': Rarity.Rare,
    'energy_cost': 3,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 3000,
    'hit_points': 7000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Gain 6000 ATK',
        TriggerType.UponAppearance,
        'Purple Purple Purple owned'
      ),
    ],
  },
  {
    'id': 1097,
    'set': 'BS',
    'name': 'Goku',
    'sub_name': 'KameHameHa',
    'groups': [
      'Goku',
      'Saiyan',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 3,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 4000,
    'hit_points': 4000,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deal 4000 DMG to an Enemy',
        TriggerType.UponAppearance,
        'Blue Consumed'
      ),
    ],
  },
  {
    'id': 1205,
    'set': 'C1',
    'name': 'Lend me your energy!',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 3,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.AddBankEnergy],
        'Add energy to your bank equal to your energy limit'
      ),
    ],
  },
  {
    'id': 1214,
    'set': 'C1',
    'name': 'Heaven\'s Gaze',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.SuperRare,
    'energy_cost': 3,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draw 3 Cards. Return 1 card to your Deck.'
      ),
    ],
  },
  {
    'id': 1217,
    'set': 'BS',
    'name': 'Stall Tactics',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 3,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.ReturnCharacter],
        'Return an Enemy Unit to your opponent\'s hand.'
      ),
    ],
  },
  {
    'id': 1231,
    'set': 'C1',
    'name': 'Planetary Warriors',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 3,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SummonSupport],
        'Summon 3 Planetary Warriors (Cost 1, ATK 2000, HP 1000)'
      ),
    ],
  },
  {
    'id': 1233,
    'set': 'C1',
    'name': 'Trained in the Other World',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 3,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Add 1000 ATK to a Friendly Unit for each card in your Hand.'
      ),
    ],
  },
  {
    'id': 1234,
    'set': 'C1',
    'name': 'Harbinger of Doom',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.SuperRare,
    'energy_cost': 3,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SummonSpecial],
        'Summon 1 SP Unit with a cost Equal or Less than your energy limit called Frieza'
      ),
    ],
  },
  {
    'id': 1242,
    'set': 'C1',
    'name': 'Family Bonds',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.SuperRare,
    'energy_cost': 3,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.RecoverLifePoints],
        'Heal 3000 HP to your Leader for each Friendly Unit'
      ),
    ],
  },
  {
    'id': 1249,
    'set': 'C1',
    'name': 'Dragon Balls Collected',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 3,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draw 2 Cards.'
      ),
    ],
  },
  {
    'id': 1253,
    'set': 'C1',
    'name': 'Special Beam Cannon',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 3,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.KillCharacter],
        'Kill 1 Unit'
      ),
    ],
  },
  {
    'id': 1261,
    'set': 'C1',
    'name': 'The Final Blow',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 3,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.KillCharacter],
        'Kill 1 Unit with 10000 HP or Less'
      ),
    ],
  },
  {
    'id': 1271,
    'set': 'C1',
    'name': 'Terrifying Broadcast',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 3,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Return all of your cards to the deck. Draw 3 cards'
      ),
    ],
  },
  {
    'id': 1280,
    'set': 'C1',
    'name': 'Silent Goodbye',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 3,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.AddBankEnergy],
        'Return 1 card to your hand, add energy to your bank equal to the cost.'
      ),
    ],
  },
  {
    'id': 1281,
    'set': 'BS',
    'name': 'Golden Fighter',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 3,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deal 7000 DMG to 1 Unit'
      ),
    ],
  },
  {
    'id': 1286,
    'set': 'C1',
    'name': 'Pure Heart',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 3,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.AddHitPoints],
        'Add 2000 HP to a friendly Unit for each friendly Unit'
      ),
    ],
  },
  {
    'id': 1290,
    'set': 'C1',
    'name': 'Back in a Body',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.SuperRare,
    'energy_cost': 3,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SummonSpecial],
        'Summon 1 SP Unit with a cost Equal or Less than your energy limit called Vegeta'
      ),
    ],
  },
  {
    'id': 1292,
    'set': 'C1',
    'name': 'Buying Time',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.SuperRare,
    'energy_cost': 3,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.AddHitPoints],
        'Add 4000 ATK & HP to all Vegeta & Majin Buu Units on the field'
      ),
    ],
  },
  {
    'id': 1293,
    'set': 'C1',
    'name': 'Lending a Hand',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 3,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.AddHitPoints],
        'Add 1000 ATK & HP to a Friendly Unit for each Friendly Unit'
      ),
    ],
  },
  {
    'id': 1300,
    'set': 'C1',
    'name': 'Overjoyed Friends',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 3,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.AddHitPoints],
        'Add 4000 HP to all Friendly Units'
      ),
    ],
  },
  {
    'id': 1007,
    'set': 'C1',
    'name': 'Gohan (Kid)',
    'sub_name': 'Ready to Fight',
    'groups': [
      'Gohan',
      'Saiyan',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 4,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 4000,
    'hit_points': 6000,
    'abilities': [AbilityType.Guard],
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Adds 2000 ATK whenever this takes DMG',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1015,
    'set': 'C1',
    'name': 'Gohan (Great Saiyaman)',
    'sub_name': 'Anger Rising',
    'groups': [
      'Gohan',
      'Saiyan',
    ],
    'rarity': Rarity.Legendary,
    'energy_cost': 4,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 4000,
    'hit_points': 9000,
    'abilities': [AbilityType.Guard],
    'effects': [
      new Effect(
        [EffectType.Guard],
        'Give Guard to all friendly Units',
        TriggerType.UponAppearance,
        'Purple Purple owned'
      ),
    ],
  },
  {
    'id': 1019,
    'set': 'C1',
    'name': 'Vegeta',
    'sub_name': 'A Warrior\'s Pride',
    'groups': [
      'Vegeta',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 4,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 9000,
    'hit_points': 4000,
    'abilities': [AbilityType.Guard],
  },
  {
    'id': 1022,
    'set': 'C1',
    'name': 'Trunks',
    'sub_name': 'A New Saiyan',
    'groups': [
      'Trunks',
      'Saiyan',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 4,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 9000,
    'hit_points': 3000,
    'effects': [
      new Effect(
        [EffectType.RestoreBank],
        'Restores your Bank',
        TriggerType.UponAppearance,
        'Blue owned'
      ),
    ],
  },
  {
    'id': 1027,
    'set': 'C1',
    'name': 'Goten',
    'sub_name': 'Unyielding',
    'groups': [
      'Goten',
      'Saiyan',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 4,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 6000,
    'hit_points': 5000,
  },
  {
    'id': 1032,
    'set': 'C1',
    'name': 'Piccolo',
    'sub_name': 'Firm and Focused',
    'groups': [
      'Piccolo',
      'Namekian',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 4,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 7000,
    'hit_points': 5000,
    'effects': [
      new Effect(
        [EffectType.SwiftAttack],
        'Gives itself Swift',
        TriggerType.UponAppearance,
        'Blue owned'
      ),
    ],
  },
  {
    'id': 1037,
    'set': 'C1',
    'name': 'Tien',
    'sub_name': 'Risking His Life',
    'groups': ['Tien'],
    'rarity': Rarity.Normal,
    'energy_cost': 4,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 6000,
    'hit_points': 6000,
    'effects': [
      new Effect(
        [EffectType.Guard],
        'Gives itself Guard whenever this takes DMG',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1039,
    'set': 'BS',
    'name': 'Raditz',
    'sub_name': 'Saiyan Dread',
    'groups': [
      'Raditz',
      'Saiyan',
      'Frieza Force',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 4,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 5000,
    'hit_points': 7000,
  },
  {
    'id': 1047,
    'set': 'C1',
    'name': 'Dodoria',
    'sub_name': 'Overconfidence',
    'groups': [
      'Dodoria',
      'Frieza Force',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 4,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 6000,
    'hit_points': 5000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Adds 3000 ATK when it\'s your turn',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1051,
    'set': 'C1',
    'name': 'Jeice',
    'sub_name': 'Red Magma',
    'groups': [
      'Jeice',
      'Ginyu Force',
      'Frieza Force',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 4,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 4000,
    'hit_points': 4000,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deal 2000 DMG to an Enemy',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1054,
    'set': 'C1',
    'name': 'Frieza (1st Form)',
    'sub_name': 'Galactic Emperor',
    'groups': [
      'Frieza',
      'Frieza Force',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 4,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 11000,
    'hit_points': 5000,
    'effects': [
      new Effect(
        [EffectType.Other],
        'You must have 1 energy in your bank to Attack with this Unit',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1060,
    'set': 'BS',
    'name': 'Android 20',
    'sub_name': 'Deceptive Doctor',
    'groups': [
      'Android 20',
      'Android',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 4,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 3000,
    'hit_points': 8000,
    'effects': [
      new Effect(
        [EffectType.RestoreBank],
        'Restores your Bank',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1062,
    'set': 'C1',
    'name': 'Android 17',
    'sub_name': 'Biting the Hand that Feeds',
    'groups': [
      'Android 17',
      'Android',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 4,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 5000,
    'hit_points': 8000,
    'effects': [
      new Effect(
        [EffectType.SwiftAttack],
        'Gives itself Swift',
        TriggerType.UponAppearance,
        'Purple owned'
      ),
    ],
  },
  {
    'id': 1072,
    'set': 'BS',
    'name': 'Pui Pui',
    'sub_name': 'Warrior from Planet Zoon',
    'groups': ['Pui Pui'],
    'rarity': Rarity.Normal,
    'energy_cost': 4,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 4000,
    'hit_points': 8000,
  },
  {
    'id': 1087,
    'set': 'BS',
    'name': 'Nail',
    'sub_name': 'Guru\'s Guardian',
    'groups': [
      'Nail',
      'Namekian',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 4,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 3000,
    'hit_points': 9000,
  },
  {
    'id': 1100,
    'set': 'C1',
    'name': 'Krillin',
    'sub_name': 'Solar Flare',
    'groups': ['Krillin'],
    'rarity': Rarity.Rare,
    'energy_cost': 4,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 3000,
    'hit_points': 6000,
    'effects': [
      new Effect(
        [EffectType.RemoveEffects],
        'Remove any effects applied to all other Units (SP Included)',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1112,
    'set': 'C1',
    'name': 'Goku',
    'sub_name': 'Spirit Bomb',
    'groups': [
      'Goku',
      'Saiyan',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 4,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 4000,
    'hit_points': 7000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Adds 6000 ATK when it\'s your turn',
        TriggerType.Always,
        'Blue Blue owned'
      ),
    ],
  },
  {
    'id': 1115,
    'set': 'C1',
    'name': 'Android 19',
    'sub_name': 'Precision Strike',
    'groups': [
      'Android 19',
      'Android',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 4,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 5000,
    'hit_points': 6000,
    'effects': [
      new Effect(
        [EffectType.SwiftAttack],
        'Gives itself Swift',
        TriggerType.UponAppearance,
        '1 Bank Energy owned'
      ),
    ],
  },
  {
    'id': 1119,
    'set': 'C1',
    'name': 'Majin Buu (Innocent)',
    'sub_name': 'The Birth of a Majin',
    'groups': ['Majin Buu'],
    'rarity': Rarity.Normal,
    'energy_cost': 4,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 6000,
    'hit_points': 6000,
    'effects': [
      new Effect(
        [EffectType.AddBankEnergy],
        'Adds 1 Energy to your bank',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1207,
    'set': 'C1',
    'name': 'Parting Words',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Legendary,
    'energy_cost': 4,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deals 7000 DMG to an Enemy'
      ),
    ],
  },
  {
    'id': 1208,
    'set': 'C1',
    'name': 'Unthinkable Change',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 4,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.KillCharacter],
        'Kills all Units that cost 3 or less'
      ),
    ],
  },
  {
    'id': 1211,
    'set': 'BS',
    'name': 'Emergency Contact',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 4,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SummonSpecial],
        'Summon an SP Unit that costs 3 or less and give it Swift'
      ),
    ],
  },
  {
    'id': 1215,
    'set': 'C1',
    'name': 'Judgment',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 4,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.KillCharacter],
        'Kill a Unit that costs 4 or more'
      ),
    ],
  },
  {
    'id': 1218,
    'set': 'C1',
    'name': 'Dormant Power',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 4,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.AddHitPoints],
        '5000 ATK & HP to one Friendly Unit that costs 3 or less'
      ),
    ],
  },
  {
    'id': 1240,
    'set': 'C1',
    'name': 'A Voice from Beyond',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 4,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.ReturnCharacter],
        'Return all Enemy Units that cost 6 or more to the opponent\'s hand'
      ),
    ],
  },
  {
    'id': 1244,
    'set': 'C1',
    'name': 'Training Partner',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 4,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.AddHitPoints],
        '2000 ATK & HP to allfriendly Units that cost 4 or less'
      ),
    ],
  },
  {
    'id': 1255,
    'set': 'C1',
    'name': 'View from the Top',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 4,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draw 4 cards, return 2 to your Deck'
      ),
    ],
  },
  {
    'id': 1260,
    'set': 'C1',
    'name': 'The Battle for Earth',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Legendary,
    'energy_cost': 4,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SummonSpecial, EffectType.SwiftAttack],
        'Summon 1 SP Unit that costs 4 or less, give it Swift'
      ),
    ],
  },
  {
    'id': 1265,
    'set': 'C1',
    'name': 'Spaceship Modifications',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 4,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draw cards until you hold as many as your opponent'
      ),
    ],
  },
  {
    'id': 1268,
    'set': 'C1',
    'name': 'To a New Planet',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 4,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.ReturnCharacter],
        'Return all Units to their owner\'s hands that cost 2 or less'
      ),
    ],
  },
  {
    'id': 1288,
    'set': 'C1',
    'name': 'Seeking More Power',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.SuperRare,
    'energy_cost': 4,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Make the ATK of one Unit equal to the Highest ATK Unit on the Field'
      ),
    ],
  },
  {
    'id': 1297,
    'set': 'C1',
    'name': 'Family Reunion',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.SuperRare,
    'energy_cost': 4,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.AddHitPoints],
        '6000 HP to all Friendly Units'
      ),
    ],
  },
  {
    'id': 1002,
    'set': 'C1',
    'name': 'Goku (Super Saiyan)',
    'sub_name': 'Back from Heaven',
    'groups': [
      'Goku',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 5,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 3000,
    'hit_points': 4000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        '3000 ATK to all Friendly Units',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1004,
    'set': 'C1',
    'name': 'Gohan (Kid)',
    'sub_name': 'Play Pals',
    'groups': [
      'Gohan',
      'Saiyan',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 5,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 6000,
    'hit_points': 6000,
    'effects': [
      new Effect(
        [EffectType.RecoverLifePoints, EffectType.RecoverHitPoints],
        'Heal 5000 HP to your Leader or a Friendly Unit',
        TriggerType.UponAppearance,
        'Purple owned'
      ),
    ],
  },
  {
    'id': 1014,
    'set': 'C1',
    'name': 'Gohan (Great Saiyaman)',
    'sub_name': 'Enter the Great Saiyaman!',
    'groups': [
      'Gohan',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 5,
    'type': CardType.Character,
    'icon': IconType.Yellow,
    'attack': 6000,
    'hit_points': 7000,
    'effects': [
      new Effect(
        [EffectType.SwiftAttack],
        'Give Swift to all Friendly Units',
        TriggerType.UponAppearance,
        'Blue Blue owned'
      ),
    ],
  },
  {
    'id': 1017,
    'set': 'C1',
    'name': 'Vegeta',
    'sub_name': 'New Battle Suit',
    'groups': [
      'Vegeta',
      'Saiyan',
    ],
    'rarity': Rarity.Legendary,
    'energy_cost': 5,
    'type': CardType.Character,
    'icon': IconType.Yellow,
    'attack': 6000,
    'hit_points': 4000,
    'abilities': [AbilityType.Guard],
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deal 7000 DMG to all other Units',
        TriggerType.UponAppearance,
        'Purple Purple Consumed'
      ),
    ],
  },
  {
    'id': 1036,
    'set': 'C1',
    'name': 'Krillin',
    'sub_name': 'Tournament Winnings',
    'groups': ['Krillin'],
    'rarity': Rarity.Normal,
    'energy_cost': 5,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 6000,
    'hit_points': 6000,
    'effects': [
      new Effect(
        [EffectType.AddBankEnergy],
        'Add 1 Energy to your bank for each Card in your Hand',
        TriggerType.UponAppearance,
        'Green owned'
      ),
    ],
  },
  {
    'id': 1040,
    'set': 'BS',
    'name': 'Nappa',
    'sub_name': 'Brimming with Arrogance',
    'groups': [
      'Nappa',
      'Saiyan',
      'Frieza Force',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 5,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 10000,
    'hit_points': 6000,
  },
  {
    'id': 1050,
    'set': 'C1',
    'name': 'Burter',
    'sub_name': 'Blue Hurricane',
    'groups': [
      'Burter',
      'Ginyu Force',
      'Frieza Force',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 5,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 7000,
    'hit_points': 7000,
    'abilities': [AbilityType.Swift],
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Add 3000 ATK when there is a friendly Jeice',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1055,
    'set': 'C1',
    'name': 'Frieza (2nd Form)',
    'sub_name': 'Looming Nightmare',
    'groups': [
      'Frieza',
      'Frieza Force',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 5,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 8000,
    'hit_points': 10000,
    'effects': [
      new Effect(
        [EffectType.Other],
        'You must have 1 energy in your bank to Attack with this Unit',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1063,
    'set': 'C1',
    'name': 'Android 18',
    'sub_name': 'Killer Counter',
    'groups': [
      'Android 18',
      'Android',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 5,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 8000,
    'hit_points': 7000,
  },
  {
    'id': 1065,
    'set': 'C1',
    'name': 'Cell (1st Form)',
    'sub_name': 'Kame Hame Ha of Doom',
    'groups': [
      'Cell',
      'Android',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 5,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 6000,
    'hit_points': 7000,
    'effects': [
      new Effect(
        [EffectType.RestoreBank],
        'Restores your bank',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1088,
    'set': 'C1',
    'name': 'Nail',
    'sub_name': 'Namekian Warrior',
    'groups': [
      'Nail',
      'Namekian',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 5,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 5000,
    'hit_points': 8000,
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.Guard],
        'Gives itself Guard when this takes DMG. Adds 2000 ATK to itself when it takes DMG',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1095,
    'set': 'C1',
    'name': 'Kibito Kai',
    'sub_name': 'Potara Practitioner',
    'groups': ['Kibito Kai'],
    'rarity': Rarity.Rare,
    'energy_cost': 5,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 5000,
    'hit_points': 8000,
    'effects': [
      new Effect(
        [EffectType.RecoverHitPoints, EffectType.RecoverLifePoints],
        'Heal 3000 HP to a Friendly Unit or Leader',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1103,
    'set': 'C1',
    'name': 'Vegeta',
    'sub_name': 'Burst Open and Mix!',
    'groups': [
      'Vegeta',
      'Saiyan',
      'Frieza Force',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 5,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 6000,
    'hit_points': 4000,
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.AddHitPoints, EffectType.ConsumeBank],
        'Add 6000 ATK & HP to itself',
        TriggerType.UponAppearance,
        'Consume 3 Banked Energy'
      ),
    ],
  },
  {
    'id': 1105,
    'set': 'C1',
    'name': 'Dodoria',
    'sub_name': 'Genocidal Rage',
    'groups': [
      'Dodoria',
      'Frieza Force',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 5,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 7000,
    'hit_points': 5000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Add 5000 ATK on your Turn',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1107,
    'set': 'C1',
    'name': 'Recoome',
    'sub_name': 'Warmup',
    'groups': [
      'Recoome',
      'Ginyu Force',
      'Frieza Force',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 5,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 7000,
    'hit_points': 9000,
    'abilities': [AbilityType.Guard],
  },
  {
    'id': 1109,
    'set': 'C1',
    'name': 'Captain Ginyu',
    'sub_name': 'Body Change',
    'groups': [
      'Captain Ginyu',
      'Ginyu Force',
      'Frieza Force',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 5,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 5000,
    'hit_points': 5000,
    'effects': [
      new Effect(
        [EffectType.ReturnCharacter],
        'Return one enemy Unit to the opponent\'s hand',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1116,
    'set': 'C1',
    'name': 'Piccolo',
    'sub_name': 'Light Grenade',
    'groups': [
      'Piccolo',
      'Namekian',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 5,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 4000,
    'hit_points': 5000,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deal 3000 DMG to an Enemy',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1118,
    'set': 'BS',
    'name': 'Cell (2nd Form)',
    'sub_name': 'Evolving Power',
    'groups': [
      'Cell',
      'Android',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 5,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 6000,
    'hit_points': 7000,
    'effects': [
      new Effect(
        [EffectType.KillCharacter],
        'Kill an Enemy Unit that costs 4 or less',
        TriggerType.UponAppearance,
        'Blue Consumed'
      ),
    ],
  },
  {
    'id': 1121,
    'set': 'C1',
    'name': 'Majin Buu (Innocent)',
    'sub_name': 'Candy Beam',
    'groups': ['Majin Buu'],
    'rarity': Rarity.Rare,
    'energy_cost': 5,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 4000,
    'hit_points': 6000,
    'effects': [
      new Effect(
        [EffectType.KillCharacter],
        'Kill a Random Unit',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1219,
    'set': 'BS',
    'name': 'World Tournament',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 5,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SummonSpecial],
        'Summon 1 SP Unit with cost equal to or less, than the highest cost enemy Unit'
      ),
    ],
  },
  {
    'id': 1220,
    'set': 'C1',
    'name': 'Shenron',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 5,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.RecoverHitPoints, EffectType.DrawCard],
        'Perform 3 of the following actions in any combination:- 1. Heal 8000 HP to a friendly Unit, 2. Draw 2 Cards, Return 1 card to your Deck from your hand'
      ),
    ],
  },
  {
    'id': 1225,
    'set': 'C1',
    'name': 'The Battle for Earth',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.SuperRare,
    'energy_cost': 5,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SummonSpecial],
        'Summon 1 or 2 SP Cards that cost 5 Cost or less in total. 1000 ATK to all Vegeta and Nappa Friendly Units'
      ),
    ],
  },
  {
    'id': 1229,
    'set': 'C1',
    'name': 'Planetary Protector',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 5,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SummonSpecial],
        'Summon 1-3 SP Cards that cost 4 or less in total.'
      ),
    ],
  },
  {
    'id': 1237,
    'set': 'C1',
    'name': 'Hyperbolic Time Chamber',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.SuperRare,
    'energy_cost': 5,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.AddHitPoints],
        '1000 ATK & HP to one Friendly Unit for each energy in your energy limit'
      ),
    ],
  },
  {
    'id': 1241,
    'set': 'C1',
    'name': 'Alive for a Day',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 5,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DiscardCard, EffectType.SummonSpecial],
        'Discard 1 card from your hand. Summon 1 SP Goku Unit',
        TriggerType.EventCard,
        'No Goku on your side of the field'
      ),
    ],
  },
  {
    'id': 1251,
    'set': 'C1',
    'name': 'Hostage',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 5,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.ReturnCharacter],
        'Select 1 Enemy Unit that costs 2 or less. Return it from the enemy Field to YOUR hand'
      ),
    ],
  },
  {
    'id': 1259,
    'set': 'C1',
    'name': 'All Trained Up',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 5,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.KillCharacter],
        'Select 1 Friendly Unit; Kill all Enemy Units with HP less than the Attack'
      ),
    ],
  },
  {
    'id': 1269,
    'set': 'C1',
    'name': 'Homecoming',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 5,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SummonSpecial],
        'Summon 1 SP Goku that is equal or less than the cost of your Energy Limit'
      ),
    ],
  },
  {
    'id': 1277,
    'set': 'C1',
    'name': 'Trunks\' Death',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.SuperRare,
    'energy_cost': 5,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.KillCharacter],
        'Kill 1 Unit'
      ),
    ],
  },
  {
    'id': 1298,
    'set': 'C1',
    'name': 'For the Family',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.SuperRare,
    'energy_cost': 5,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.AddHitPoints],
        '3000 ATK & HP to all Friendly Units'
      ),
    ],
  },
  {
    'id': 1003,
    'set': 'C1',
    'name': 'Goku',
    'sub_name': 'The Grand Finale',
    'groups': [
      'Goku',
      'Saiyan',
    ],
    'rarity': Rarity.Legendary,
    'energy_cost': 6,
    'type': CardType.Character,
    'icon': IconType.Yellow,
    'attack': 9000,
    'hit_points': 8000,
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.AddHitPoints],
        '3000 ATK & HP to all Friendly Units',
        TriggerType.UponAppearance,
        'Blue Blue Blue owned'
      ),
    ],
  },
  {
    'id': 1005,
    'set': 'C1',
    'name': 'Gohan (Kid)',
    'sub_name': 'Survival Training',
    'groups': [
      'Gohan',
      'Saiyan',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 6,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 9000,
    'hit_points': 9000,
    'effects': [
      new Effect(
        [EffectType.SummonSupport],
        'Summon 1 Dinosaur (Cost 1, ATK 3000, HP 3000)',
        TriggerType.UponAppearance,
        'Purple owned'
      ),
    ],
  },
  {
    'id': 1011,
    'set': 'C1',
    'name': 'Gohan (Super Saiyan)',
    'sub_name': 'Like Father, Like Son',
    'groups': [
      'Gohan',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 6,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 8000,
    'hit_points': 13000,
    'abilities': [AbilityType.Guard],
  },
  {
    'id': 1023,
    'set': 'C1',
    'name': 'Trunks',
    'sub_name': 'A Son\'s Doubt',
    'groups': [
      'Trunks',
      'Saiyan',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 6,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 10000,
    'hit_points': 11000,
  },
  {
    'id': 1056,
    'set': 'C1',
    'name': 'Frieza (3rd Form)',
    'sub_name': 'Nightmare Fuel',
    'groups': [
      'Frieza',
      'Frieza Force',
    ],
    'rarity': Rarity.Legendary,
    'energy_cost': 6,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 8000,
    'hit_points': 12000,
    'effects': [
      new Effect(
        [EffectType.Other],
        'You must have 1 energy in your bank to Attack with this Unit.',
        TriggerType.Always
      ),
      new Effect(
        [EffectType.AddAttack],
        'Adds 8000 ATK to self on Opponent\'s Turn',
        TriggerType.Always,
        'Purple Owned'
      ),
    ],
  },
  {
    'id': 1061,
    'set': 'C1',
    'name': 'Android 16',
    'sub_name': 'Mysterious Prototype',
    'groups': [
      'Android 16',
      'Android',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 6,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 8000,
    'hit_points': 13000,
  },
  {
    'id': 1066,
    'set': 'C1',
    'name': 'Cell (2nd Form)',
    'sub_name': 'Unwelcome Guests',
    'groups': [
      'Cell',
      'Android',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 6,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 7000,
    'hit_points': 11000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Adds 5000 ATK to itself on Opponent\'s Turn',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1071,
    'set': 'C1',
    'name': 'Dabura',
    'sub_name': 'King of the Demon Realm',
    'groups': ['Dabura'],
    'rarity': Rarity.SuperRare,
    'energy_cost': 6,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 11000,
    'hit_points': 6000,
    'effects': [
      new Effect(
        [EffectType.SwiftAttack],
        'Gives itself Swift',
        TriggerType.UponAppearance,
        'Green owned'
      ),
    ],
  },
  {
    'id': 1075,
    'set': 'C1',
    'name': 'Majin Buu (Evil)',
    'sub_name': 'The Evil Within',
    'groups': ['Majin Buu'],
    'rarity': Rarity.SuperRare,
    'energy_cost': 6,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 12000,
    'hit_points': 8000,
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.ConsumeBank],
        'Adds 3000 ATK to itself',
        TriggerType.UponAppearance,
        'Consume 1 Banked Energy'
      ),
    ],
  },
  {
    'id': 1094,
    'set': 'C1',
    'name': 'Supreme Kai',
    'sub_name': 'Godly Panic',
    'groups': ['Supreme Kai'],
    'rarity': Rarity.SuperRare,
    'energy_cost': 6,
    'type': CardType.Character,
    'icon': IconType.Yellow,
    'attack': 6000,
    'hit_points': 8000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Add 6000 ATK to a Friendly Unit',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1098,
    'set': 'C1',
    'name': 'Raditz',
    'sub_name': 'Mysterious Visitor',
    'groups': [
      'Raditz',
      'Saiyan',
      'Frieza Force',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 6,
    'type': CardType.Character,
    'icon': IconType.Yellow,
    'attack': 8000,
    'hit_points': 8000,
    'effects': [
      new Effect(
        [EffectType.SwiftAttack],
        'Gives itself Swift',
        TriggerType.UponAppearance,
        'Green owned'
      ),
    ],
  },
  {
    'id': 1099,
    'set': 'C1',
    'name': 'Piccolo',
    'sub_name': 'Special Beam Cannon',
    'groups': [
      'Piccolo',
      'Namekian',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 6,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 9000,
    'hit_points': 10000,
    'effects': [
      new Effect(
        [EffectType.KillCharacter],
        'Kill one enemy Unit',
        TriggerType.UponAppearance,
        'Purple Green Blue owned'
      ),
    ],
  },
  {
    'id': 1102,
    'set': 'C1',
    'name': 'Nappa',
    'sub_name': 'Energy Wave',
    'groups': [
      'Nappa',
      'Saiyan',
      'Frieza Force',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 6,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 9000,
    'hit_points': 9000,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deal 4000 DMG to an Enemy',
        TriggerType.UponAppearance,
        'Purple Purple owned'
      ),
    ],
  },
  {
    'id': 1106,
    'set': 'C1',
    'name': 'Vegeta',
    'sub_name': 'Limitless Power',
    'groups': [
      'Vegeta',
      'Saiyan',
      'Frieza Force',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 6,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 10000,
    'hit_points': 6000,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deal 5000 DMG to an Enemy',
        TriggerType.UponAppearance,
        'Blue Blue owned'
      ),
    ],
  },
  {
    'id': 1108,
    'set': 'C1',
    'name': 'Recoome',
    'sub_name': 'The Final Blow',
    'groups': [
      'Recoome',
      'Ginyu Force',
      'Frieza Force',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 6,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 5000,
    'hit_points': 9000,
    'effects': [
      new Effect(
        [EffectType.KillCharacter],
        'Kill one enemy Unit with 6000 HP or Less',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1117,
    'set': 'BS',
    'name': 'Android 17',
    'sub_name': 'Duking it Out',
    'groups': [
      'Android 17',
      'Android',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 6,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 10000,
    'hit_points': 9000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Adds 3000 ATK to itself',
        TriggerType.Always,
        'Purple owned'
      ),
    ],
  },
  {
    'id': 1122,
    'set': 'C1',
    'name': 'Gotenks (Super Saiyan)',
    'sub_name': 'Galactic Donuts',
    'groups': [
      'Gotenks',
      'Saiyan',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 6,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 9000,
    'hit_points': 9000,
    'effects': [
      new Effect(
        [EffectType.KillCharacter],
        'Kill an Enemy Unit',
        TriggerType.UponAppearance,
        'Yellow Yellow Green owned'
      ),
    ],
  },
  {
    'id': 1124,
    'set': 'C1',
    'name': 'Goku (Super Saiyan 3)',
    'sub_name': 'Pushing Past Limits',
    'groups': [
      'Goku',
      'Saiyan',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 6,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 11000,
    'hit_points': 10000,
  },
  {
    'id': 1222,
    'set': 'C1',
    'name': 'Dream Team',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Legendary,
    'energy_cost': 6,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SummonSpecial],
        'Summon 1 or 2 SP Units that cost 6 or less in total. Add 1000 ATK to all Friendly Units'
      ),
    ],
  },
  {
    'id': 1235,
    'set': 'C1',
    'name': 'Problem Children',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 6,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SummonSupport],
        'Summon 3 Cell Jr. (Cost 2, ATK 4000, HP 1000)'
      ),
    ],
  },
  {
    'id': 1272,
    'set': 'C1',
    'name': 'Let the Cell Games Begin!',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Legendary,
    'energy_cost': 6,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SummonSpecial],
        'Summon 1 SP Unit. Your opponent gains Banked Energy equal to the cost'
      ),
    ],
  },
  {
    'id': 1289,
    'set': 'C1',
    'name': 'From Bad to Worse',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.SuperRare,
    'energy_cost': 6,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Add 10000 ATK a Friendly Unit for this Turn'
      ),
    ],
  },
  {
    'id': 1010,
    'set': 'C1',
    'name': 'Gohan (Teen, Super Saiyan)',
    'sub_name': 'More Determined Than Ever',
    'groups': [
      'Gohan',
      'Saiyan',
    ],
    'rarity': Rarity.Legendary,
    'energy_cost': 7,
    'type': CardType.Character,
    'icon': IconType.Yellow,
    'attack': 9000,
    'hit_points': 13000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Add 6000 ATK to itself whenever it takes DMG',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1020,
    'set': 'C1',
    'name': 'Vegeta',
    'sub_name': 'Tournament Ready',
    'groups': [
      'Vegeta',
      'Saiyan',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 7,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 11000,
    'hit_points': 10000,
    'abilities': [AbilityType.Guard],
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Add 3000 ATK to all Friendly Units',
        TriggerType.UponAppearance,
        'Green Blue owned'
      ),
    ],
  },
  {
    'id': 1025,
    'set': 'C1',
    'name': 'Trunks',
    'sub_name': 'Concerned Spectator',
    'groups': [
      'Trunks',
      'Saiyan',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 7,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 11000,
    'hit_points': 13000,
  },
  {
    'id': 1029,
    'set': 'C1',
    'name': 'Gotenks',
    'sub_name': 'Brimming with Confidence',
    'groups': [
      'Gotenks',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 7,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 13000,
    'hit_points': 12000,
  },
  {
    'id': 1033,
    'set': 'C1',
    'name': 'Piccolo',
    'sub_name': 'The World Tournament, Again!',
    'groups': [
      'Piccolo',
      'Namekian',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 7,
    'type': CardType.Character,
    'icon': IconType.Yellow,
    'attack': 9000,
    'hit_points': 5000,
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.AddHitPoints],
        '5000 ATK & HP to a Friendly Unit',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1053,
    'set': 'C1',
    'name': 'Captain Ginyu',
    'sub_name': 'Noble Leader',
    'groups': [
      'Captain Ginyu',
      'Ginyu Force',
      'Frieza Force',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 7,
    'type': CardType.Character,
    'icon': IconType.Yellow,
    'attack': 10000,
    'hit_points': 10000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        '5000 ATK to all Friendly Ginyu Force Units',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1058,
    'set': 'C1',
    'name': 'King Cold',
    'sub_name': 'Most Feared Family',
    'groups': [
      'King Cold',
      'Frieza Force',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 7,
    'type': CardType.Character,
    'icon': IconType.Yellow,
    'attack': 8000,
    'hit_points': 14000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        '3000 ATK to all Friendly Frieza Units',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1076,
    'set': 'C1',
    'name': 'Super Buu',
    'sub_name': 'Innocence Consumed',
    'groups': ['Majin Buu'],
    'rarity': Rarity.Legendary,
    'energy_cost': 7,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 15000,
    'hit_points': 11000,
  },
  {
    'id': 1096,
    'set': 'C1',
    'name': 'Elder Kai',
    'sub_name': 'Sealed in the Sword',
    'groups': ['Elder Kai'],
    'rarity': Rarity.Normal,
    'energy_cost': 7,
    'type': CardType.Character,
    'icon': IconType.Yellow,
    'attack': 4000,
    'hit_points': 10000,
    'effects': [
      new Effect(
        [EffectType.RecoverLifePoints],
        'Heal your Leader for 10000',
        TriggerType.UponAppearance,
        'Yellow owned'
      ),
    ],
  },
  {
    'id': 1110,
    'set': 'C1',
    'name': 'Frieza (Final Form)',
    'sub_name': 'Powerful Blow',
    'groups': [
      'Frieza',
      'Frieza Force',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 7,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 13000,
    'hit_points': 7000,
    'abilities': [AbilityType.Swift],
  },
  {
    'id': 1120,
    'set': 'BS',
    'name': 'Dabura',
    'sub_name': 'Unprecedented Struggle',
    'groups': ['Dabura'],
    'rarity': Rarity.Normal,
    'energy_cost': 7,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 9000,
    'hit_points': 12000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Add 5000 ATK on Opponent\'s Turn',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1125,
    'set': 'BS',
    'name': 'Goku (Super Saiyan 3)',
    'sub_name': 'All-Out Kamehameha!',
    'groups': [
      'Goku',
      'Saiyan',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 7,
    'type': CardType.Character,
    'icon': IconType.Yellow,
    'attack': 10000,
    'hit_points': 12000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Gain 5000 ATK',
        TriggerType.Always,
        'Purple Blue Green owned'
      ),
    ],
  },
  {
    'id': 1212,
    'set': 'BS',
    'name': 'Back from the Other World',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 7,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DiscardCard, EffectType.SummonSpecial],
        'Discard 1 card from your hand. Summon 1 SP Unit equal to or less than the cost'
      ),
    ],
  },
  {
    'id': 1221,
    'set': 'C1',
    'name': 'Porunga',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Legendary,
    'energy_cost': 7,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.RecoverLifePoints, EffectType.RecoverHitPoints, EffectType.DrawCard],
        'Perform 3 of the following actions in any combination:- 1. Heal 5000 HP to a friendly Unit or Leader, 2. Draw 2 Cards',
        TriggerType.EventCard
      ),
    ],
  },
  {
    'id': 1256,
    'set': 'C1',
    'name': 'Hurry, Goku!',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 7,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SummonSpecial],
        'Summon 1 SP Unit that costs 7 or less. If it\'s a Goku Unit, add 3000 ATK'
      ),
    ],
  },
  {
    'id': 1291,
    'set': 'C1',
    'name': 'Rescue Mission Accomplished',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.SuperRare,
    'energy_cost': 7,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DrawCard, EffectType.SummonSpecial],
        'Summon 1 or 2 SP Units that cost 7 or less in total. Draw a card'
      ),
    ],
  },
  {
    'id': 1012,
    'set': 'C1',
    'name': 'Gohan (Super Saiyan)',
    'sub_name': 'Power of the Z-Sword',
    'groups': [
      'Gohan',
      'Saiyan',
    ],
    'rarity': Rarity.Legendary,
    'energy_cost': 8,
    'type': CardType.Character,
    'icon': IconType.Yellow,
    'attack': 10000,
    'hit_points': 14000,
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.AddHitPoints],
        '5000 ATK & HP to itself',
        TriggerType.UponAppearance,
        'Yellow owned'
      ),
    ],
  },
  {
    'id': 1030,
    'set': 'C1',
    'name': 'Gotenks (Super Saiyan)',
    'sub_name': 'Unbelievable Power',
    'groups': [
      'Gotenks',
      'Saiyan',
    ],
    'rarity': Rarity.Legendary,
    'energy_cost': 8,
    'type': CardType.Character,
    'icon': IconType.Yellow,
    'attack': 7000,
    'hit_points': 12000,
    'effects': [
      new Effect(
        [EffectType.AddHitPoints, EffectType.AddAttack],
        '8000 ATK & HP to itself',
        TriggerType.UponAppearance,
        'Green Green owned'
      ),
    ],
  },
  {
    'id': 1067,
    'set': 'C1',
    'name': 'Cell (Perfect)',
    'sub_name': 'True Form',
    'groups': [
      'Cell',
      'Android',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 8,
    'type': CardType.Character,
    'icon': IconType.Yellow,
    'attack': 15000,
    'hit_points': 12000,
    'abilities': [AbilityType.Swift],
  },
  {
    'id': 1111,
    'set': 'C1',
    'name': 'Frieza (Final Form)',
    'sub_name': 'Death Beam',
    'groups': [
      'Frieza',
      'Frieza Force',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 8,
    'type': CardType.Character,
    'icon': IconType.Yellow,
    'attack': 6000,
    'hit_points': 9000,
    'effects': [
      new Effect(
        [EffectType.KillCharacter],
        'Kill an enemy Unit',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1123,
    'set': 'C1',
    'name': 'Kid Buu',
    'sub_name': 'Barely Breaking a Sweat',
    'groups': ['Majin Buu'],
    'rarity': Rarity.Rare,
    'energy_cost': 8,
    'type': CardType.Character,
    'icon': IconType.Yellow,
    'attack': 14000,
    'hit_points': 16000,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deal 4000 DMG to an Enemy',
        TriggerType.UponAppearance,
        'Blue owned'
      ),
    ],
  },
  {
    'id': 1021,
    'set': 'C1',
    'name': 'Vegeta (Majin)',
    'sub_name': 'Majin and Mad',
    'groups': [
      'Vegeta',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 9,
    'type': CardType.Character,
    'icon': IconType.Yellow,
    'attack': 10000,
    'hit_points': 26000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Gains the following: (Always: 3000 ATK to itself for each enemy Unit)',
        TriggerType.UponAppearance,
        'Purple Yellow owned'
      ),
    ],
  },
  {
    'id': 1024,
    'set': 'C1',
    'name': 'Trunks (Super Saiyan)',
    'sub_name': 'Beyond Super Saiyan',
    'groups': [
      'Trunks',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 9,
    'type': CardType.Character,
    'icon': IconType.Yellow,
    'attack': 20000,
    'hit_points': 17000,
  },
  {
    'id': 1113,
    'set': 'C1',
    'name': 'Frieza (Final Form)',
    'sub_name': 'Full Power Unleashed',
    'groups': [
      'Frieza',
      'Frieza Force',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 9,
    'type': CardType.Character,
    'icon': IconType.Yellow,
    'attack': 13000,
    'hit_points': 23000,
    'effects': [
      new Effect(
        [EffectType.UnlockBank, EffectType.AddAttack],
        'Unlocks your bank. Adds 3000 ATK to itself for each Frieza card in your hand',
        TriggerType.UponAppearance,
        '3 Banked Energy owned'
      ),
    ],
  },
  {
    'id': 1057,
    'set': 'C1',
    'name': 'Frieza (Final Form)',
    'sub_name': 'Emperor\'s Rage',
    'groups': [
      'Frieza',
      'Frieza Force',
    ],
    'rarity': Rarity.Legendary,
    'energy_cost': 10,
    'type': CardType.Character,
    'icon': IconType.Yellow,
    'attack': 13000,
    'hit_points': 26000,
    'effects': [
      new Effect(
        [EffectType.KillCharacter],
        'Kill all Units',
        TriggerType.UponAppearance,
        'Purple Blue Green Yellow Consumed'
      ),
    ],
  },
  {
    'id': 1104,
    'set': 'C1',
    'name': 'Vegeta (Great Ape)',
    'sub_name': 'Angered Great Ape',
    'groups': [
      'Vegeta',
      'Saiyan',
      'Frieza Force',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 10,
    'type': CardType.Character,
    'icon': IconType.Yellow,
    'attack': 10000,
    'hit_points': 20000,
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.AddHitPoints, EffectType.ConsumeBank],
        'Adds 20000 ATK & 10000 HP to itself',
        TriggerType.UponAppearance,
        'Consume 10 Banked Energy'
      ),
    ],
  },
  {
    'id': 1299,
    'set': 'C1',
    'name': 'Sight for Sore Eyes',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Legendary,
    'energy_cost': 10,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Add 10000 ATK to all Friendly Units'
      ),
    ],
  },
  {
    'id': 1163,
    'set': 'C1',
    'name': 'Goku',
    'sub_name': 'Dragon Hammer Strike',
    'groups': [
      'Goku',
      'Saiyan',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 4,
    'type': CardType.Special,
    'icon': IconType.Blue,
    'attack': 7000,
    'hit_points': 7000,
    'effects': [
      new Effect(
        [EffectType.SwiftAttack],
        'Gains Swift Attack',
        TriggerType.UponAppearance,
        'Blue owned'
      ),
    ],
  },
  {
    'id': 1181,
    'set': 'C1',
    'name': 'Vegeta (Majin)',
    'sub_name': 'Strength is Everything',
    'groups': [
      'Vegeta',
      'Saiyan',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 1,
    'type': CardType.Special,
    'icon': IconType.Blue,
    'attack': 5000,
    'hit_points': 3000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Adds 10000 ATK to itself when it has taken DMG',
        TriggerType.Always,
        'Yellow owned'
      ),
    ],
  },
  {
    'id': 1187,
    'set': 'C1',
    'name': 'Goten',
    'sub_name': 'This is good, huh, Trunks?',
    'groups': [
      'Goten',
      'Saiyan',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Special,
    'icon': IconType.Blue,
    'attack': 5000,
    'hit_points': 3000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Adds 1000 ATK to all Friendly Units',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1194,
    'set': 'C1',
    'name': 'Chiaotzu',
    'sub_name': 'This is delicious',
    'groups': ['Chiaotzu'],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Special,
    'icon': IconType.Blue,
    'attack': 3000,
    'hit_points': 5000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Adds 1000 ATK to all Friendly Units',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1150,
    'set': 'C1',
    'name': 'Goten & Trunks',
    'sub_name': 'Settling the Score',
    'groups': [
      'Goten',
      'Trunks',
      'Saiyan',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Special,
    'icon': IconType.Blue,
    'attack': 7000,
    'hit_points': 6000,
    'effects': [
      new Effect(
        [EffectType.ReturnCharacter],
        'Return all Friendly Goten & Trunks Units to your hand',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1153,
    'set': 'BS',
    'name': 'Babidi & Dabura',
    'sub_name': 'Lying in Wait',
    'groups': [
      'Babidi',
      'Dabura',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Special,
    'icon': IconType.Blue,
    'attack': 7000,
    'hit_points': 6000,
    'effects': [
      new Effect(
        [EffectType.ReturnCharacter],
        'Return all Friendly Babidi & Dabura Units to your hand',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1164,
    'set': 'C1',
    'name': 'Piccolo',
    'sub_name': 'Energy Wave',
    'groups': [
      'Piccolo',
      'Namekian',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 2,
    'type': CardType.Special,
    'icon': IconType.Blue,
    'attack': 4000,
    'hit_points': 7000,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deal 1000 DMG to an Enemy',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1167,
    'set': 'C1',
    'name': 'Gohan (Kid)',
    'sub_name': 'Masenko',
    'groups': [
      'Gohan',
      'Saiyan',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Special,
    'icon': IconType.Purple,
    'attack': 3000,
    'hit_points': 8000,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deal 2000 DMG to an Enemy',
        TriggerType.UponAppearance,
        'Purple owned'
      ),
    ],
  },
  {
    'id': 1179,
    'set': 'C1',
    'name': 'Gohan',
    'sub_name': 'Flying Nimbus',
    'groups': [
      'Gohan',
      'Saiyan',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Special,
    'icon': IconType.Purple,
    'attack': 4000,
    'hit_points': 7000,
    'effects': [
      new Effect(
        [EffectType.SwiftAttack],
        'Gains Swift Attack',
        TriggerType.UponAppearance,
        'Blue owned'
      ),
    ],
  },
  {
    'id': 1186,
    'set': 'C1',
    'name': 'Gohan (Kid)',
    'sub_name': 'It\'s all delicious!',
    'groups': [
      'Gohan',
      'Saiyan',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Special,
    'icon': IconType.Purple,
    'attack': 6000,
    'hit_points': 5000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Adds 1000 ATK to all Friendly Units',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1193,
    'set': 'C1',
    'name': 'Tien',
    'sub_name': 'I could eat more of this!',
    'groups': ['Tien'],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Special,
    'icon': IconType.Blue,
    'attack': 5000,
    'hit_points': 6000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Adds 1000 ATK to all Friendly Units',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1138,
    'set': 'C1',
    'name': 'Piccolo',
    'sub_name': 'Fused with Kami',
    'groups': [
      'Piccolo',
      'Namekian',
    ],
    'rarity': Rarity.Legendary,
    'energy_cost': 3,
    'type': CardType.Special,
    'icon': IconType.Purple,
    'attack': 7000,
    'hit_points': 5000,
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.AddHitPoints, EffectType.ConsumeBank],
        '2000 ATK & HP to a Friendly Unit',
        TriggerType.UponAppearance,
        'Consume 1 Bank Energy'
      ),
    ],
  },
  {
    'id': 1145,
    'set': 'BS',
    'name': 'Krillin, Yamcha & Tien',
    'sub_name': 'Earth\'s Mightiest',
    'groups': [
      'Krillin',
      'Yamcha',
      'Tien',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 3,
    'type': CardType.Special,
    'icon': IconType.Blue,
    'attack': 7000,
    'hit_points': 7000,
    'effects': [
      new Effect(
        [EffectType.ReturnCharacter],
        'Return all Friendly Krillin, Yamcha & Tien Units to your hand',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1152,
    'set': 'C1',
    'name': 'Yamu & Spopovich',
    'sub_name': 'On a Malicious Mission',
    'groups': [
      'Yamu',
      'Spopovich',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 3,
    'type': CardType.Special,
    'icon': IconType.Blue,
    'attack': 8000,
    'hit_points': 2000,
    'effects': [
      new Effect(
        [EffectType.AddBankEnergy],
        'Adds 1 Energy to your bank for each Enemy Unit',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1154,
    'set': 'C1',
    'name': 'Goten & Trunks',
    'sub_name': 'Calling out a Majin',
    'groups': [
      'Goten',
      'Trunks',
      'Saiyan',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 3,
    'type': CardType.Special,
    'icon': IconType.Blue,
    'attack': 5000,
    'hit_points': 5000,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draw a card',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1165,
    'set': 'C1',
    'name': 'Gohan (Kid)',
    'sub_name': 'Wrathful Power',
    'groups': [
      'Gohan',
      'Saiyan',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 3,
    'type': CardType.Special,
    'icon': IconType.Green,
    'attack': 4000,
    'hit_points': 5000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Adds 500 ATK to itself when it has taken DMG'
      ),
    ],
  },
  {
    'id': 1168,
    'set': 'C1',
    'name': 'Vegeta',
    'sub_name': 'Energy Cutter',
    'groups': [
      'Vegeta',
      'Saiyan',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 3,
    'type': CardType.Special,
    'icon': IconType.Purple,
    'attack': 6000,
    'hit_points': 7000,
    'effects': [
      new Effect(
        [EffectType.KillCharacter],
        'Kill an Enemy Unit with 5000 HP or Less',
        TriggerType.UponAppearance,
        'Purple owned'
      ),
    ],
  },
  {
    'id': 1171,
    'set': 'C1',
    'name': 'Goku (Super Saiyan)',
    'sub_name': 'Power Awakened',
    'groups': [
      'Goku',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 3,
    'type': CardType.Special,
    'icon': IconType.Blue,
    'attack': 5000,
    'hit_points': 7000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Add 4000 ATK to itself on your turn',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1188,
    'set': 'C1',
    'name': 'Vegeta',
    'sub_name': 'Hmph. Not bad',
    'groups': [
      'Vegeta',
      'Saiyan',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 3,
    'type': CardType.Special,
    'icon': IconType.Blue,
    'attack': 5000,
    'hit_points': 7000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Adds 1000 ATK to all Friendly Units',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1189,
    'set': 'C1',
    'name': 'Trunks',
    'sub_name': 'It\'s amazing!',
    'groups': [
      'Trunks',
      'Saiyan',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 3,
    'type': CardType.Special,
    'icon': IconType.Purple,
    'attack': 6000,
    'hit_points': 6000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Adds 1000 ATK to all Friendly Units',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1191,
    'set': 'C1',
    'name': 'Krillin',
    'sub_name': 'A Feast with Family',
    'groups': ['Krillin'],
    'rarity': Rarity.Normal,
    'energy_cost': 3,
    'type': CardType.Special,
    'icon': IconType.Purple,
    'attack': 7000,
    'hit_points': 5000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Adds 1000 ATK to all Friendly Units',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1126,
    'set': 'C1',
    'name': 'Goku (Super Saiyan)',
    'sub_name': 'Legendary Warrior Awakened',
    'groups': [
      'Goku',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 4,
    'type': CardType.Special,
    'icon': IconType.Blue,
    'attack': 9000,
    'hit_points': 7000,
  },
  {
    'id': 1130,
    'set': 'C1',
    'name': 'Vegeta (Great Ape)',
    'sub_name': 'Artificial Moon',
    'groups': [
      'Vegeta',
      'Saiyan',
      'Frieza Force',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 4,
    'type': CardType.Special,
    'icon': IconType.Green,
    'attack': 4000,
    'hit_points': 12000,
    'abilities': [AbilityType.Guard],
    'effects': [
      new Effect(
        [EffectType.Other],
        'You must have 1 energy in your bank to Attack with this Unit',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1136,
    'set': 'C1',
    'name': 'Gotenks (Super Saiyan 3)',
    'sub_name': 'The Final Blow',
    'groups': [
      'Gotenks',
      'Saiyan',
    ],
    'rarity': Rarity.Legendary,
    'energy_cost': 4,
    'type': CardType.Special,
    'icon': IconType.Green,
    'attack': 5000,
    'hit_points': 8000,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deal 5000 DMG to an Enemy.',
        TriggerType.UponAppearance,
        'Green Consumed'
      ),
      new Effect(
        [EffectType.AddAttack],
        'Adds 1000 ATK to itself for Each Goten & Trunks card in your hand',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1155,
    'set': 'C1',
    'name': 'Vegeta & Goku',
    'sub_name': 'Vegeta\'s Got a Plan',
    'groups': [
      'Vegeta',
      'Goku',
      'Saiyan',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 4,
    'type': CardType.Special,
    'icon': IconType.Blue,
    'attack': 7000,
    'hit_points': 6000,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draw a card',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1156,
    'set': 'C1',
    'name': 'Goku & Vegeta',
    'sub_name': 'The Toughest Team-up',
    'groups': [
      'Goku',
      'Vegeta',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 4,
    'type': CardType.Special,
    'icon': IconType.Blue,
    'attack': 2000,
    'hit_points': 7000,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deal 3000 DMG to an Enemy for each Goku & Vegeta card in your hand',
        TriggerType.UponAppearance,
        'Purple Blue Consumed'
      ),
    ],
  },
  {
    'id': 1170,
    'set': 'BS',
    'name': 'Frieza (1st Form)',
    'sub_name': 'Enraged Emperor',
    'groups': [
      'Frieza',
      'Frieza Force',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 4,
    'type': CardType.Special,
    'icon': IconType.Purple,
    'attack': 7000,
    'hit_points': 7000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Addds 3000 ATK to itself',
        TriggerType.Always,
        'Purple owned'
      ),
    ],
  },
  {
    'id': 1173,
    'set': 'C1',
    'name': 'Trunks (Super Saiyan)',
    'sub_name': 'Overwhelming Ability',
    'groups': [
      'Trunks',
      'Saiyan',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 4,
    'type': CardType.Special,
    'icon': IconType.Green,
    'attack': 6000,
    'hit_points': 6000,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deal 4000 DMG to an Enemy',
        TriggerType.UponAppearance,
        'Blue Consumed'
      ),
    ],
  },
  {
    'id': 1185,
    'set': 'C1',
    'name': 'Goku',
    'sub_name': 'Tasty!',
    'groups': [
      'Goku',
      'Saiyan',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 4,
    'type': CardType.Special,
    'icon': IconType.Green,
    'attack': 5000,
    'hit_points': 5000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Adds 2000 ATK to all Friendly Units',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1192,
    'set': 'C1',
    'name': 'Yamcha',
    'sub_name': 'I can win when it comes to eating!',
    'groups': ['Yamcha'],
    'rarity': Rarity.Normal,
    'energy_cost': 4,
    'type': CardType.Special,
    'icon': IconType.Purple,
    'attack': 6000,
    'hit_points': 8000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Adds 1000 ATK to all Friendly Units',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1199,
    'set': 'C1',
    'name': 'Android 18',
    'sub_name': 'World Tournament Champion',
    'groups': [
      'Android 18',
      'Android',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 4,
    'type': CardType.Special,
    'icon': IconType.Purple,
    'attack': 4000,
    'hit_points': 6000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Adds 2000 ATK to all Friendly Units',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1128,
    'set': 'C1',
    'name': 'Gohan (Teen, Super Saiyan 2)',
    'sub_name': 'At the Breaking Point',
    'groups': [
      'Gohan',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 5,
    'type': CardType.Special,
    'icon': IconType.Green,
    'attack': 5000,
    'hit_points': 11000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Adds 5000 ATK to itself when it has taken DMG',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1134,
    'set': 'C1',
    'name': 'Goten (Super Saiyan)',
    'sub_name': 'Hidden Power',
    'groups': [
      'Goten',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 5,
    'type': CardType.Special,
    'icon': IconType.Green,
    'attack': 6000,
    'hit_points': 9000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Adds 8000 ATK to itself on your turn',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1139,
    'set': 'C1',
    'name': 'Zarbon',
    'sub_name': 'Hideous Transformation',
    'groups': [
      'Zarbon',
      'Frieza Force',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 5,
    'type': CardType.Special,
    'icon': IconType.Green,
    'attack': 7000,
    'hit_points': 7000,
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.AddHitPoints],
        'Adds 6000 ATK & HP to itself',
        TriggerType.UponAppearance,
        'Blue Blue owned'
      ),
    ],
  },
  {
    'id': 1141,
    'set': 'C1',
    'name': 'Mecha Frieza',
    'sub_name': 'Seeking Revenge',
    'groups': [
      'Frieza',
      'Frieza Force',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 5,
    'type': CardType.Special,
    'icon': IconType.Green,
    'attack': 13000,
    'hit_points': 1000,
    'effects': [
      new Effect(
        [EffectType.AddHitPoints],
        'Adds 20000 HP to itself',
        TriggerType.UponAppearance,
        'Yellow Consumed'
      ),
    ],
  },
  {
    'id': 1146,
    'set': 'C1',
    'name': 'Android 19 & 20',
    'sub_name': 'Mysterious Android',
    'groups': [
      'Android 19',
      'Android 20',
      'Android',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 5,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 8000,
    'hit_points': 8000,
    'effects': [
      new Effect(
        [EffectType.ReturnCharacter],
        'Return all Friendly Android 19 & Android 20 Units to your hand',
        TriggerType.UponAppearance,
        'None'
      ),
      new Effect(
        [EffectType.AddAttack],
        'Add 1000 ATK to itself for each Android 19 and Android 20 card in your hand',
        TriggerType.Always,
        'Purple Owned'
      ),
    ],
  },
  {
    'id': 1157,
    'set': 'C1',
    'name': 'Goku, Vegeta & Trunks',
    'sub_name': 'Triple Threat',
    'groups': [
      'Goku',
      'Vegeta',
      'Trunks',
      'Saiyan',
    ],
    'rarity': Rarity.Legendary,
    'energy_cost': 5,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 4000,
    'hit_points': 4000,
    'effects': [
      new Effect(
        [EffectType.ReturnCharacter],
        'Return all Friendly Goku, Vegeta & Trunks Units to your hand',
        TriggerType.UponAppearance,
        'None'
      ),
      new Effect(
        [EffectType.DealDamage],
        'Deal 3000 DMG to the enemy Leader for each Goku, Vegeta and Trunks card in your hand',
        TriggerType.UponAppearance,
        'Yellow Consumed'
      ),
    ],
  },
  {
    'id': 1159,
    'set': 'C1',
    'name': 'Gohan, Goten & Trunks',
    'sub_name': 'The Next Generation',
    'groups': [
      'Gohan',
      'Goten',
      'Trunks',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 5,
    'type': CardType.Special,
    'icon': IconType.Blue,
    'attack': 7000,
    'hit_points': 5000,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draw 2 Cards',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1166,
    'set': 'C1',
    'name': 'Piccolo',
    'sub_name': 'Destroying the Moon',
    'groups': [
      'Piccolo',
      'Namekian',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 5,
    'type': CardType.Special,
    'icon': IconType.Green,
    'attack': 6000,
    'hit_points': 11000,
    'effects': [
      new Effect(
        [EffectType.RemoveEffects],
        'Removes any effects applied to 1 Unit',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1169,
    'set': 'C1',
    'name': 'Vegeta',
    'sub_name': 'Intense Energy',
    'groups': [
      'Vegeta',
      'Saiyan',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 5,
    'type': CardType.Special,
    'icon': IconType.Blue,
    'attack': 4000,
    'hit_points': 3000,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deal 5000 DMG to an Enemy',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1177,
    'set': 'C1',
    'name': 'Cell (Perfect)',
    'sub_name': 'The Ultimate Evolution',
    'groups': [
      'Cell',
      'Android',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 5,
    'type': CardType.Special,
    'icon': IconType.Purple,
    'attack': 8000,
    'hit_points': 8000,
    'abilities': [AbilityType.Guard],
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.AddHitPoints],
        '4000 HP & ATK to itself',
        TriggerType.UponAppearance,
        'Green owned'
      ),
    ],
  },
  {
    'id': 1190,
    'set': 'C1',
    'name': 'Trunks (Kid)',
    'sub_name': 'Here, try this, Goten!',
    'groups': [
      'Trunks',
      'Saiyan',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 5,
    'type': CardType.Special,
    'icon': IconType.Green,
    'attack': 5000,
    'hit_points': 7000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Adds 2000 ATK to all Friendly Units',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1195,
    'set': 'C1',
    'name': 'Master Roshi & Ox-King',
    'sub_name': 'Peace at Last',
    'groups': [
      'Master Roshi',
      'Ox King',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 5,
    'type': CardType.Special,
    'icon': IconType.Green,
    'attack': 6000,
    'hit_points': 6000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Adds 2000 ATK to all Friendly Units',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1196,
    'set': 'C1',
    'name': 'Tien',
    'sub_name': 'Traveling to Train',
    'groups': ['Tien'],
    'rarity': Rarity.Normal,
    'energy_cost': 5,
    'type': CardType.Special,
    'icon': IconType.Purple,
    'attack': 6000,
    'hit_points': 11000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Adds 1000 ATK to all Friendly Units',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1197,
    'set': 'C1',
    'name': 'King Kai & Bubbles',
    'sub_name': 'All\'s Well That Ends Well',
    'groups': [
      'King Kai',
      'Bubbles',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 5,
    'type': CardType.Special,
    'icon': IconType.Green,
    'attack': 3000,
    'hit_points': 9000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Adds 2000 ATK to all Friendly Units',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1198,
    'set': 'C1',
    'name': 'Yajirobe & Master Korin',
    'sub_name': 'Between heaven & Earth',
    'groups': [
      'Yajirobe',
      'Korin',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 5,
    'type': CardType.Special,
    'icon': IconType.Purple,
    'attack': 5000,
    'hit_points': 8000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Adds 2000 ATK to all Friendly Units',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1200,
    'set': 'C1',
    'name': 'Krillin',
    'sub_name': 'Daddy\'s Pride and Joy',
    'groups': ['Krillin'],
    'rarity': Rarity.Normal,
    'energy_cost': 6,
    'type': CardType.Special,
    'icon': IconType.Green,
    'attack': 4000,
    'hit_points': 8000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Adds 2000 ATK to all Friendly Units',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1202,
    'set': 'BS',
    'name': 'Goku (Super Saiyan)',
    'sub_name': 'Even Stronger Guys',
    'groups': [
      'Goku',
      'Saiyan',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 6,
    'type': CardType.Special,
    'icon': IconType.Purple,
    'attack': 7000,
    'hit_points': 10000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Adds 1000 ATK to all Friendly Units',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1131,
    'set': 'C1',
    'name': 'Vegeta (Super Saiyan)',
    'sub_name': 'The Prince Again',
    'groups': [
      'Vegeta',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 6,
    'type': CardType.Special,
    'icon': IconType.Green,
    'attack': 14000,
    'hit_points': 11000,
  },
  {
    'id': 1133,
    'set': 'C1',
    'name': 'Trunks (Super Saiyan)',
    'sub_name': 'Fighting for the Future',
    'groups': [
      'Trunks',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 6,
    'type': CardType.Special,
    'icon': IconType.Green,
    'attack': 12000,
    'hit_points': 12000,
    'abilities': [AbilityType.Guard],
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Add 2000 ATK to itself on your turn',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1135,
    'set': 'C1',
    'name': 'Trunks (Kid, Super Saiyan)',
    'sub_name': 'Confidence in Spades',
    'groups': [
      'Trunks',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 6,
    'type': CardType.Special,
    'icon': IconType.Green,
    'attack': 8000,
    'hit_points': 10000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Add 10000 ATK to itself on your turn',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1142,
    'set': 'C1',
    'name': 'Super Buu',
    'sub_name': 'The Tables Have Turned',
    'groups': ['Majin Buu'],
    'rarity': Rarity.SuperRare,
    'energy_cost': 6,
    'type': CardType.Special,
    'icon': IconType.Purple,
    'attack': 9000,
    'hit_points': 16000,
    'effects': [
      new Effect(
        [EffectType.ReturnCharacter],
        'Returns all Goten and Trunks Units to their owners\' hands',
        TriggerType.UponAppearance,
        'None'
      ),
      new Effect(
        [EffectType.AddAttack],
        'Adds 1000 ATK to itself for each Goten and Trunks card in your hand',
        TriggerType.Always,
        'Purple Owned'
      ),
    ],
  },
  {
    'id': 1147,
    'set': 'C1',
    'name': 'Android 17 & 18',
    'sub_name': 'Freewheeling Fiends',
    'groups': [
      'Android 17',
      'Android 18',
      'Android',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 6,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 11000,
    'hit_points': 11000,
    'effects': [
      new Effect(
        [EffectType.ReturnCharacter],
        'Returns all Android 17 and Android 18 Units to their owners\' hands',
        TriggerType.UponAppearance,
        'None'
      ),
      new Effect(
        [EffectType.AddAttack],
        'Adds 1000 ATK to itself for each Android 17 and Android 18 card in your hand',
        TriggerType.Always,
        'Purple Owned'
      ),
    ],
  },
  {
    'id': 1158,
    'set': 'C1',
    'name': 'Goku, Gohan, Vegeta & Trunks',
    'sub_name': 'The Four Great Super Saiyans',
    'groups': [
      'Goku',
      'Gohan',
      'Vegeta',
      'Trunks',
      'Saiyan',
    ],
    'rarity': Rarity.Legendary,
    'energy_cost': 6,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 7000,
    'hit_points': 7000,
    'effects': [
      new Effect(
        [EffectType.ReturnCharacter],
        'Return all Friendly Goku, Gohan, Vegeta & Trunks Units to your hand',
        TriggerType.UponAppearance,
        'None'
      ),
      new Effect(
        [EffectType.DealDamage],
        'Deal 3000 DMG to the enemy Leader for each Goku, Gohan, Vegeta and Trunks card in your hand',
        TriggerType.UponAppearance,
        'Yellow Consumed'
      ),
    ],
  },
  {
    'id': 1172,
    'set': 'C1',
    'name': 'Frieza (Final Form)',
    'sub_name': 'Death Ball',
    'groups': [
      'Frieza',
      'Frieza Force',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 6,
    'type': CardType.Special,
    'icon': IconType.Green,
    'attack': 11000,
    'hit_points': 11000,
    'effects': [
      new Effect(
        [EffectType.KillCharacter],
        'Kill all other Units',
        TriggerType.UponAppearance,
        'Yellow Yellow Yellow Consumed'
      ),
    ],
  },
  {
    'id': 1180,
    'set': 'BS',
    'name': 'Gohan',
    'sub_name': 'KameHameHa',
    'groups': [
      'Gohan',
      'Saiyan',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 6,
    'type': CardType.Special,
    'icon': IconType.Green,
    'attack': 5000,
    'hit_points': 4000,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deal 5000 DMG to an Enemy',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1127,
    'set': 'C1',
    'name': 'Goku (Super Saiyan 3)',
    'sub_name': 'On Borrowed Time',
    'groups': [
      'Goku',
      'Saiyan',
    ],
    'rarity': Rarity.Legendary,
    'energy_cost': 7,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 9000,
    'hit_points': 12000,
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.AddHitPoints],
        '2000 ATK & HP to all Friendly Units',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1140,
    'set': 'C1',
    'name': 'Frieza (Final Form)',
    'sub_name': 'Full Power',
    'groups': [
      'Frieza',
      'Frieza Force',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 7,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 10000,
    'hit_points': 16000,
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.ConsumeBank],
        '10000 ATK to itself',
        TriggerType.UponAppearance,
        'Consume 5 Banked Energy'
      ),
    ],
  },
  {
    'id': 1149,
    'set': 'C1',
    'name': 'Gohan & Goten',
    'sub_name': 'Ready to Train',
    'groups': [
      'Gohan',
      'Goten',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 7,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 13000,
    'hit_points': 13000,
    'effects': [
      new Effect(
        [EffectType.ReturnCharacter],
        'Return all Friendly Gohan & Goten Units to your hand',
        TriggerType.UponAppearance,
        'None'
      ),
      new Effect(
        [EffectType.AddAttack],
        '1000 ATK to itself for each Gohan & Goten in your hand',
        TriggerType.Always,
        'Blue owned'
      ),
    ],
  },
  {
    'id': 1160,
    'set': 'C1',
    'name': 'Gohan, Goten & Trunks',
    'sub_name': 'Earth\'s Defenders',
    'groups': [
      'Gohan',
      'Goten',
      'Trunks',
      'Saiyan',
    ],
    'rarity': Rarity.Legendary,
    'energy_cost': 7,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 9000,
    'hit_points': 9000,
    'effects': [
      new Effect(
        [EffectType.ReturnCharacter],
        'Return all Friendly Gohan, Goten & Trunks Units to your hand',
        TriggerType.UponAppearance,
        'None'
      ),
      new Effect(
        [EffectType.DealDamage],
        '4000 DMG to the Enemy Leader for each Gohan, Goten & Trunks in your hand',
        TriggerType.UponAppearance,
        'Yellow Consumed'
      ),
    ],
  },
  {
    'id': 1176,
    'set': 'C1',
    'name': 'Gohan (Teen, Super Saiyan 2)',
    'sub_name': 'Duking it Out',
    'groups': [
      'Gohan',
      'Saiyan',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 7,
    'type': CardType.Special,
    'icon': IconType.Green,
    'attack': 17000,
    'hit_points': 11000,
  },
  {
    'id': 1178,
    'set': 'C1',
    'name': 'Cell (Perfect)',
    'sub_name': 'Absolute Confidence',
    'groups': [
      'Cell',
      'Android',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 7,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 13000,
    'hit_points': 11000,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deal 4000 DMG to an Enemy',
        TriggerType.UponAppearance,
        'Blue Owned'
      ),
    ],
  },
  {
    'id': 1183,
    'set': 'C1',
    'name': 'Super Buu',
    'sub_name': 'Evil Energy',
    'groups': ['Majin Buu'],
    'rarity': Rarity.Rare,
    'energy_cost': 7,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 13000,
    'hit_points': 12000,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deal 5000 DMG to an Enemy',
        TriggerType.UponAppearance,
        'Yellow Owned'
      ),
    ],
  },
  {
    'id': 1201,
    'set': 'C1',
    'name': 'Vegeta',
    'sub_name': 'Unending Battle',
    'groups': [
      'Vegeta',
      'Saiyan',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 7,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 12000,
    'hit_points': 12000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Adds 1000 ATK to all Friendly Units',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1129,
    'set': 'C1',
    'name': 'Gohan (Potential Unleashed)',
    'sub_name': 'Savior',
    'groups': [
      'Gohan',
      'Saiyan',
    ],
    'rarity': Rarity.Legendary,
    'energy_cost': 8,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 12000,
    'hit_points': 15000,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draw 1 Card',
        TriggerType.UponAppearance,
        'None'
      ),
      new Effect(
        [EffectType.AddAttack],
        'Add 8000 ATK to itself on your turn',
        TriggerType.Always,
        'Yellow Owned'
      ),
    ],
  },
  {
    'id': 1143,
    'set': 'C1',
    'name': 'Super Buu',
    'sub_name': 'Gohan\'s Power',
    'groups': ['Majin Buu'],
    'rarity': Rarity.Rare,
    'energy_cost': 8,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 16000,
    'hit_points': 16000,
    'effects': [
      new Effect(
        [EffectType.ReturnCharacter],
        'Return all Enemy Goten, Trunks, Piccolo & Gohan Units to your opponents hand',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 1148,
    'set': 'C1',
    'name': 'Vegeta & Trunks',
    'sub_name': 'Powered Up',
    'groups': [
      'Vegeta',
      'Trunks',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 8,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 17000,
    'hit_points': 17000,
    'effects': [
      new Effect(
        [EffectType.ReturnCharacter],
        'Return all Friendly Vegeta and Trunks Units to your hand',
        TriggerType.UponAppearance,
        'None'
      ),
      new Effect(
        [EffectType.AddAttack],
        'Add 1000 ATK to itself for each Vegeta and Trunks card in your hand',
        TriggerType.Always,
        'Blue Owned'
      ),
    ],
  },
  {
    'id': 1161,
    'set': 'C1',
    'name': 'Goku, Gohan & Gotenks',
    'sub_name': 'Super Warriors Assembled',
    'groups': [
      'Goku',
      'Gohan',
      'Gotenks',
      'Saiyan',
    ],
    'rarity': Rarity.Legendary,
    'energy_cost': 8,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 13000,
    'hit_points': 13000,
    'effects': [
      new Effect(
        [EffectType.ReturnCharacter],
        'Return all Friendly Goku, Gohan & Gotenks Units to your hand',
        TriggerType.UponAppearance,
        'None'
      ),
      new Effect(
        [EffectType.DealDamage],
        'Deal 4000 DMG to the Enemy Leader for each Gohan, Goku and Gotenks card in your hand',
        TriggerType.UponAppearance,
        'Yellow Owned'
      ),
    ],
  },
  {
    'id': 1174,
    'set': 'C1',
    'name': 'Vegeta (Super Saiyan)',
    'sub_name': 'Big Bang Attack',
    'groups': [
      'Vegeta',
      'Saiyan',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 8,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 15000,
    'hit_points': 15000,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deal 7000 DMG to an Enemy',
        TriggerType.UponAppearance,
        'Yellow Owned'
      ),
    ],
  },
  {
    'id': 1175,
    'set': 'C1',
    'name': 'Trunks',
    'sub_name': 'Burning Attack',
    'groups': [
      'Trunks',
      'Saiyan',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 10,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 14000,
    'hit_points': 18000,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deal 5000 DMG to an Enemy',
        TriggerType.UponAppearance,
        'Blue Blue Owned'
      ),
    ],
  },
  {
    'id': 1182,
    'set': 'C1',
    'name': 'Gotenks (Super Saiyan 3)',
    'sub_name': 'Unstoppable Rage',
    'groups': [
      'Gotenks',
      'Saiyan',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 8,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 12000,
    'hit_points': 20000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Add 8000 ATK to itself when it has taken damage',
        TriggerType.Always,
        'Yellow Owned'
      ),
    ],
  },
  {
    'id': 1132,
    'set': 'C1',
    'name': 'Vegeta (Super Saiyan)',
    'sub_name': 'Back from the Dead',
    'groups': [
      'Vegeta',
      'Saiyan',
    ],
    'rarity': Rarity.Legendary,
    'energy_cost': 9,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 17000,
    'hit_points': 17000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Add 10000 ATK to itself on your turn',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1151,
    'set': 'C1',
    'name': 'Supreme Kai & Kibito',
    'sub_name': 'Enigmatic Duo',
    'groups': [
      'Supreme Kai',
      'Kibito',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 9,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 18000,
    'hit_points': 18000,
    'effects': [
      new Effect(
        [EffectType.ReturnCharacter],
        'Returns all Friendly Supreme Kai Units to your hand',
        TriggerType.UponAppearance,
        'None'
      ),
      new Effect(
        [EffectType.AddAttack],
        'Adds 1000 ATK to itself for each Supreme Kai in your hand',
        TriggerType.Always,
        'Blue Owned'
      ),
    ],
  },
  {
    'id': 1162,
    'set': 'C1',
    'name': 'Vegito, Gotenks  & Gohan',
    'sub_name': 'The Ultimate Warriors',
    'groups': [
      'Vegito',
      'Gotenks',
      'Gohan',
      'Saiyan',
    ],
    'rarity': Rarity.Legendary,
    'energy_cost': 9,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 15000,
    'hit_points': 15000,
    'effects': [
      new Effect(
        [EffectType.ReturnCharacter],
        'Return all Friendly Gotenks & Gohan Units to your hand',
        TriggerType.UponAppearance,
        'None'
      ),
      new Effect(
        [EffectType.DealDamage],
        'Deal 5000 DMG to the enemy leader for each Gotenks & Gohan card in your hand',
        TriggerType.UponAppearance,
        'Yellow Yellow Consumed'
      ),
    ],
  },
  {
    'id': 1184,
    'set': 'C1',
    'name': 'Kid Buu',
    'sub_name': 'Spirit Bomb Stopped',
    'groups': ['Majin Buu'],
    'rarity': Rarity.Rare,
    'energy_cost': 9,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 17000,
    'hit_points': 20000,
    'abilities': [AbilityType.Guard],
  },
  {
    'id': 1137,
    'set': 'C1',
    'name': 'Vegito (Super Saiyan)',
    'sub_name': 'Fusion for the Win',
    'groups': [
      'Vegito',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 10,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 14000,
    'hit_points': 24000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Adds 3000 ATK to all Friendly Units on your Turn',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 1144,
    'set': 'C1',
    'name': 'Kid Buu',
    'sub_name': 'The Original Majin',
    'groups': [
      'Majin Buu',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 10,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 25000,
    'hit_points': 14000,
    'abilities': [AbilityType.Swift],
  },
  {
    'id': 1203,
    'set': 'C1',
    'name': 'Cell (Perfect)',
    'sub_name': 'Back and Better Than Ever',
    'groups': [
      'Cell',
      'Android',
    ],
    'rarity': Rarity.Legendary,
    'energy_cost': 10,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 14000,
    'hit_points': 26000,
    'abilities': [AbilityType.Guard],
    'effects': [
      new Effect(
        [EffectType.RecoverHitPoints],
        'Complete restore the HP of all Friendly Units',
        TriggerType.UponAppearance,
        'Purple Purple Purple Consumed'
      ),
    ],
  },
  {
    'id': 2009,
    'set': 'C2',
    'name': 'Goten (Super Saiyan)',
    'sub_name': 'Born to transform',
    'groups': [
      'Goten',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 0,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 1000,
    'hit_points': 1000,
    'effects': [
      new Effect(
        [EffectType.ReturnCharacter, EffectType.SummonSpecial],
        'Returns this card and 1 regular Trunks card on your side of the field to your deck, then causes one Gotenks card with a cost +1 or lower than the cost of the Trunks card returned to appear from your SP deck',
        TriggerType.UponAppearance,
        '1 Trunks on your side of the field'
      ),
    ],
  },
  {
    'id': 2098,
    'set': 'C2',
    'name': 'Feelin\' Full',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 0,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.RecoverLifePoints],
        'Restores your leader\'s HP by 2000, then restores it by an additional 5000 if you can reference the Purple symbol',
        TriggerType.EventCard,
        'Purple Owned'
      ),
    ],
  },
  {
    'id': 2005,
    'set': 'C2',
    'name': 'Gohan (Kid)',
    'sub_name': 'Power Pole',
    'groups': [
      'Gohan',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 1,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 5000,
    'hit_points': 4000,
    'abilities': [AbilityType.Guard],
    'effects': [
      new Effect(
        [EffectType.UnableToAttack],
        'Unable to attack',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 2010,
    'set': 'C2',
    'name': 'Trunks (Kid)',
    'sub_name': 'Thirst for Adventure',
    'groups': [
      'Trunks',
      'Saiyan',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 3000,
    'hit_points': 4000,
  },
  {
    'id': 2016,
    'set': 'C2',
    'name': 'Krillin',
    'sub_name': 'Battle Suit',
    'groups': ['Krillin'],
    'rarity': Rarity.SuperRare,
    'energy_cost': 1,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 3000,
    'hit_points': 3000,
    'abilities': [AbilityType.PiercingStrike],
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.AddHitPoints],
        'Adds +1000 to its own Attack and +1000 to its own Hit Points if there is a character with Guard on the opponent\'s side of the field',
        TriggerType.UponAppearance,
        'Opponent on field with Guard'
      ),
    ],
  },
  {
    'id': 2032,
    'set': 'C2',
    'name': 'Android 17',
    'sub_name': 'Thirst for Adventure',
    'groups': [
      'Android 17',
      'Android',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 1,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 4000,
    'hit_points': 2000,
    'abilities': [AbilityType.NaturalRecovery],
    'effects': [
      new Effect(
        [EffectType.SwiftAttack, EffectType.PiercingStrike],
        'Gives itself Piercing Strike and Swift Attack when Android 18 is on your side of the field',
        TriggerType.Always,
        'Android 18 on your side of the field'
      ),
    ],
  },
  {
    'id': 2038,
    'set': 'C2',
    'name': 'Bulma',
    'sub_name': 'Ready for Space Travel',
    'groups': ['Bulma'],
    'rarity': Rarity.Rare,
    'energy_cost': 1,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 1000,
    'hit_points': 2000,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draws 1 card. If the card drawn is an event card, you will draw 1 more card',
        TriggerType.UponAppearance,
        'Blue Owned'
      ),
    ],
  },
  {
    'id': 2039,
    'set': 'C2',
    'name': 'Videl',
    'sub_name': 'Answering the Call',
    'groups': ['Videl'],
    'rarity': Rarity.SuperRare,
    'energy_cost': 1,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 3000,
    'hit_points': 3000,
    'effects': [
      new Effect(
        [EffectType.RecoverLifePoints, EffectType.RestoreBank],
        'Restores 5000 of your leader\'s HP when you unlock your bank with 7 or more energy in it, then restores your bank',
        TriggerType.Always,
        'Purple Owned, Unlock bank with 7 or more energy'
      ),
    ],
  },
  {
    'id': 2054,
    'set': 'C2',
    'name': 'Farewell, Tien',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'KOs 1 Chiaotzu card on your side of the field, then deals 5000 damage at random to the opponent\'s leader or 1 character on the opponent\'s side of the field',
        TriggerType.EventCard,
        'Chiaotzu on your side of the field'
      ),
    ],
  },
  {
    'id': 2079,
    'set': 'C2',
    'name': 'Strange Technique',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deals 4000 damage to 1 character on the field'
      ),
    ],
  },
  {
    'id': 2082,
    'set': 'C2',
    'name': 'Put Your Hands Up',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Legendary,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.IncreaseEnergyLimit, EffectType.DrawCard],
        'Increases your energy limit by 1, Draws 1 card',
        TriggerType.EventCard,
        'Purple Consumed'
      ),
    ],
  },
  {
    'id': 2085,
    'set': 'C2',
    'name': 'Fly, Nimbus!',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.PiercingStrike],
        'Gives Piercing Strike to 1 character on your side of the field'
      ),
    ],
  },
  {
    'id': 2087,
    'set': 'C2',
    'name': 'Full Moon',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.AddHitPoints],
        'Adds +2000 to the Attack and +2000 to the Hit Points of 1 of the Saiyan cards on your side of the field',
        TriggerType.EventCard,
        'Saiyan on your side of the field'
      ),
    ],
  },
  {
    'id': 2089,
    'set': 'C2',
    'name': 'Machine Treatment',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.NaturalRecovery],
        'Gives Natural Recovery to 1 character on your side of the field'
      ),
    ],
  },
  {
    'id': 2093,
    'set': 'C2',
    'name': 'Momentary Lapse of Judgment',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SacrificeCharacter, EffectType.DrawCard],
        'KOs 1 Android on your side of the field, then draws 2 cards',
        TriggerType.EventCard,
        'Android on your side of the field'
      ),
    ],
  },
  {
    'id': 2099,
    'set': 'C2',
    'name': 'Reunited',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draws 1 card, if the card drawn is a Goku card, you will draw 1 more card'
      ),
    ],
  },
  {
    'id': 2100,
    'set': 'C2',
    'name': 'Here Comes the Ginyu Force!',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.SuperRare,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.NegateDamage],
        'Gives Negate Damage to all Ginyu Force cards on your side of the field until your opponents turn ends',
        TriggerType.EventCard,
        'Recoome, Jeice, Burter, Guldo and Captain Ginyu on your side of the field'
      ),
    ],
  },
  {
    'id': 2002,
    'set': 'C2',
    'name': 'Goku',
    'sub_name': 'Let the Battle Begin!',
    'groups': [
      'Goku',
      'Saiyan',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 2,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 4000,
    'hit_points': 4000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Adds +2000 to its own Attack when a Saiyan card other than this one is on the field',
        TriggerType.Always,
        'Saiyan card other than this one on the field'
      ),
    ],
  },
  {
    'id': 2003,
    'set': 'C2',
    'name': 'Goku',
    'sub_name': 'Back from Space',
    'groups': [
      'Goku',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 2,
    'type': CardType.Character,
    'icon': IconType.Yellow,
    'attack': 4000,
    'hit_points': 3000,
    'effects': [
      new Effect(
        [EffectType.UnableToAttackLeader],
        'Unable to Attack Opponent\'s Leader',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 2012,
    'set': 'C2',
    'name': 'Trunks',
    'sub_name': 'Mysterious Warrior',
    'groups': [
      'Trunks',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 2,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 4000,
    'hit_points': 3000,
    'effects': [
      new Effect(
        [EffectType.KillCharacter],
        'KOs 1 character on the opponent\'s side of the field with a cost equal or less than the energy in your bank',
        TriggerType.UponAppearance,
        'Green Consumed'
      ),
    ],
  },
  {
    'id': 2019,
    'set': 'C2',
    'name': 'Saibaman',
    'sub_name': 'Bio-weapon',
    'groups': ['Saibaman'],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 5000,
    'hit_points': 3000,
    'abilities': [AbilityType.PiercingStrike],
  },
  {
    'id': 2021,
    'set': 'C2',
    'name': 'Frieza Force Soldier',
    'sub_name': 'Doctor',
    'groups': ['Frieza Force'],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 3000,
    'hit_points': 5000,
    'abilities': [AbilityType.NaturalRecovery],
  },
  {
    'id': 2026,
    'set': 'C2',
    'name': 'Jeice',
    'sub_name': 'Bad News',
    'groups': [
      'Jeice',
      'Frieza Force',
      'Ginyu Force',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 2,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 2000,
    'hit_points': 5000,
    'abilities': [AbilityType.Guard],
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draws 1 Captain Ginyu, Draws nothing if you don\'t have any',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 2033,
    'set': 'C2',
    'name': 'Android 18',
    'sub_name': 'Taunt',
    'groups': [
      'Android 18',
      'Android',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 2,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 4000,
    'hit_points': 4000,
    'abilities': [AbilityType.NaturalRecovery],
    'effects': [
      new Effect(
        [EffectType.NegateDamage, EffectType.Guard],
        'Gives itself Negate Damage and Guard when Android 17 is on your side of the field',
        TriggerType.Always,
        'Android 17 on your side of the field'
      ),
    ],
  },
  {
    'id': 2042,
    'set': 'C2',
    'name': 'Mercenary Tao',
    'sub_name': 'Know Your Enemy',
    'groups': ['Mercenary Tao'],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 2000,
    'hit_points': 4000,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draws 1 card, afterward, select 1 card from your hand and return it to the deck',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 2063,
    'set': 'C2',
    'name': 'Final Resistance',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deals 3000 damage to all characters on the field'
      ),
    ],
  },
  {
    'id': 2074,
    'set': 'C2',
    'name': 'Vengeance',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.SuperRare,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DealDamage, EffectType.RecoverLifePoints],
        'Deals 5000 damage to 1 character on the field, then restores your leaders HP by 5000 if you can reference the Purple symbol',
        TriggerType.EventCard,
        'Purple Owned'
      ),
    ],
  },
  {
    'id': 2075,
    'set': 'C2',
    'name': 'Galick Gun',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.SuperRare,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DealDamage, EffectType.DrawCard],
        'Deals 4000 damage at random to the opponent\'s leader or 1 character on your opponent\'s side of the field, then draws 1 card if you can reference the Blue symbol',
        TriggerType.EventCard,
        'Blue Owned'
      ),
    ],
  },
  {
    'id': 2076,
    'set': 'C2',
    'name': 'Exoskeleton',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Select 1 Android card from your hand and return it to the deck, afterwards draws 3 cards'
      ),
    ],
  },
  {
    'id': 2077,
    'set': 'C2',
    'name': 'Foreboding Premonition',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.ReturnOpponentCardToDeck],
        'Randomly returns 1 card to your opponents deck from their hand'
      ),
    ],
  },
  {
    'id': 2095,
    'set': 'C2',
    'name': 'Stuck in Other World',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.RestoreBank, EffectType.DrawCard],
        'Restores your bank, then draws 1 card'
      ),
    ],
  },
  {
    'id': 2097,
    'set': 'C2',
    'name': 'Petrified',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.KillCharacter],
        'Destroys 1 character with a cost of 2 or less on your opponent\'s side of the field'
      ),
    ],
  },
  {
    'id': 2001,
    'set': 'C2',
    'name': 'Goku',
    'sub_name': 'Passing the Torch',
    'groups': [
      'Goku',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 3,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 3000,
    'hit_points': 4000,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draws 1 card every time a Saiyan card other than this one appears on your side of the field',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 2011,
    'set': 'C2',
    'name': 'Vegeta (Majin)',
    'sub_name': 'Do or Die',
    'groups': [
      'Vegeta',
      'Saiyan',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 3,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 5000,
    'hit_points': 5000,
    'effects': [
      new Effect(
        [EffectType.Guard, EffectType.AddAttack, EffectType.AddHitPoints],
        'Adds +2000 to its own Attack, +2000 to its own Hit Points, and gives itself Guard if there is one Babidi, Dabura or Majin Buu on your opponents side of the field',
        TriggerType.UponAppearance,
        'Babidi, Dabura or Majin Buu on your opponents side of the field'
      ),
    ],
  },
  {
    'id': 2014,
    'set': 'C2',
    'name': 'Gotenks (Super Saiyan 3)',
    'sub_name': 'Enormous Power',
    'groups': [
      'Gotenks',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 3,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 5000,
    'hit_points': 1000,
    'abilities': [
      AbilityType.PiercingStrike,
      AbilityType.Swift,
    ],
    'effects': [
      new Effect(
        [EffectType.GainSymbol],
        'Gains Green symbol',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 2015,
    'set': 'C2',
    'name': 'Piccolo',
    'sub_name': 'Lone Guardian',
    'groups': [
      'Piccolo',
      'Namekian',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 3,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 5000,
    'hit_points': 5000,
    'abilities': [AbilityType.NaturalRecovery],
    'effects': [
      new Effect(
        [EffectType.NegateDamage],
        'Gives itself Negate Damage until end of the turn when it has taken damage',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 2017,
    'set': 'C2',
    'name': 'Tien',
    'sub_name': 'Do or Die',
    'groups': ['Tien'],
    'rarity': Rarity.Rare,
    'energy_cost': 3,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 6000,
    'hit_points': 5000,
    'effects': [
      new Effect(
        [EffectType.KillCharacter],
        'Randomly KOs 1 character on the opponents side of the field, then KOs itself',
        TriggerType.UponAppearance,
        'Blue Consumed'
      ),
    ],
  },
  {
    'id': 2018,
    'set': 'C2',
    'name': 'Raditz',
    'sub_name': 'Brutal Brother',
    'groups': [
      'Raditz',
      'Saiyan',
      'Frieza Force',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 3,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 5000,
    'hit_points': 6000,
    'abilities': [AbilityType.Guard],
    'effects': [
      new Effect(
        [EffectType.KillCharacter],
        'KOs 1 character on the opponent\'s side of the field with a cost of 2 or less',
        TriggerType.UponAppearance,
        'Purple Consumed'
      ),
    ],
  },
  {
    'id': 2020,
    'set': 'C2',
    'name': 'King Vegeta',
    'sub_name': 'Regal Pride',
    'groups': [
      'King Vegeta',
      'Saiyan',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 3,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 4000,
    'hit_points': 4000,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draws 1 card, if the cards drawn is a Saiyan card, you will draw 1 more card',
        TriggerType.UponAppearance,
        'Blue Owned'
      ),
    ],
  },
  {
    'id': 2023,
    'set': 'C2',
    'name': 'Guldo',
    'sub_name': 'Tricky Timestopper',
    'groups': [
      'Guldo',
      'Ginyu Force',
      'Frieza Force',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 3,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 1000,
    'hit_points': 1000,
    'effects': [
      new Effect(
        [EffectType.SwiftAttack],
        'Gives Swift Attack to Ginyu Force cards other than this one on your side of the field',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 2025,
    'set': 'C2',
    'name': 'Burter',
    'sub_name': 'Quick Thinking',
    'groups': [
      'Burter',
      'Ginyu Force',
      'Frieza Force',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 3,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 4000,
    'hit_points': 7000,
    'effects': [
      new Effect(
        [EffectType.NegateDamage, EffectType.PiercingStrike],
        'Gives itself Negate Damage and Piercing Strike when Jeice is on your side of the field',
        TriggerType.Always,
        'Jeice on your side of the field'
      ),
    ],
  },
  {
    'id': 2028,
    'set': 'C2',
    'name': 'Frieza (1st Form)',
    'sub_name': 'The Emperor Arrives',
    'groups': [
      'Frieza',
      'Frieza Force',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 3,
    'type': CardType.Character,
    'icon': IconType.Yellow,
    'attack': 5000,
    'hit_points': 5000,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Sends all cards in your hand to the graveyard, then draws 1 Frieza card of each energy cost: 4, 5, 6, 7 or 8. (Activates even when you have no cards in your hand)',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 2031,
    'set': 'C2',
    'name': 'Android 20',
    'sub_name': 'Android Awakening',
    'groups': [
      'Android 20',
      'Android',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 3,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 4000,
    'hit_points': 3000,
    'abilities': [AbilityType.NaturalRecovery],
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draws 1 Android 17 and Android 18 at a time, Draws nothing if you don\'t have any',
        TriggerType.UponAppearance,
        'Android 17 or Android 18 in deck'
      ),
    ],
  },
  {
    'id': 2036,
    'set': 'C2',
    'name': 'Super Buu',
    'sub_name': 'Mysterious Cloud',
    'groups': ['Majin Buu'],
    'rarity': Rarity.Normal,
    'energy_cost': 3,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 5000,
    'hit_points': 3000,
    'effects': [
      new Effect(
        [EffectType.RecoverLifePoints, EffectType.AddHitPoints],
        'Recovers 3000 HP for your leader, Adds +1000 to its own Hit Points for each energy unit in your bank',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 2078,
    'set': 'C2',
    'name': 'Off With his Tail!',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 3,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.KillCharacter, EffectType.AddBankEnergy],
        'KOs 1 Saiyan card on the field, then add 1 energy to your bank',
        TriggerType.EventCard,
        'Saiyan on the field'
      ),
    ],
  },
  {
    'id': 2080,
    'set': 'C2',
    'name': 'Family of the Future',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 3,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.KillCharacter, EffectType.RecoverLifePoints],
        'KOs 1 Android card on the field, then restores your leader\'s HP by 5000',
        TriggerType.EventCard,
        'Android on the field'
      ),
    ],
  },
  {
    'id': 2081,
    'set': 'C2',
    'name': 'Super Ghost Kamikaze Attack!',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.SuperRare,
    'energy_cost': 3,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SummonSupport],
        'You must have Gotenks card on your side of the field to use this card, Causes as many Super Ghost Kamikaze Attack cards (cost: 0; Attack: 2000; Hit Points: 1; [Always] Swift Attack) as possible to appear on your side of the field',
        TriggerType.EventCard,
        'Gotenks card on your side of the field'
      ),
    ],
  },
  {
    'id': 2083,
    'set': 'C2',
    'name': 'Miraculous Fusion',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.SuperRare,
    'energy_cost': 3,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SummonSpecial],
        'Causes 1 Gotenks with a cost of your energy limit or less to appear from your SP deck'
      ),
    ],
  },
  {
    'id': 2092,
    'set': 'C2',
    'name': 'A Parting Kiss',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Legendary,
    'energy_cost': 3,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SwiftAttack, EffectType.Other],
        'You must have Android 18 on your side of the field to use this card, Takes control of 1 character on your opponents side of the field and gives them Swift Attack until the end of your opponents turn',
        TriggerType.EventCard,
        'Android 18 on your side of the field'
      ),
    ],
  },
  {
    'id': 2094,
    'set': 'C2',
    'name': 'Ultimate Regeneration',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 3,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.AddHitPoints],
        'Adds +1000 to the Attack and +3000 to the Hit Points of all Android cards on your side of the field'
      ),
    ],
  },
  {
    'id': 2022,
    'set': 'C2',
    'name': 'Zarbon',
    'sub_name': 'Bent on Beauty',
    'groups': [
      'Zarbon',
      'Frieza Force',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 4,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 4000,
    'hit_points': 6000,
    'abilities': [AbilityType.NaturalRecovery],
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Adds +3000 to its own Attack until end of turn when it has taken damage',
        TriggerType.Always,
        'Taken damage'
      ),
    ],
  },
  {
    'id': 2035,
    'set': 'C2',
    'name': 'Dabura',
    'sub_name': 'Demon King Danger',
    'groups': ['Dabura'],
    'rarity': Rarity.Normal,
    'energy_cost': 4,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 7000,
    'hit_points': 4000,
    'abilities': [AbilityType.PiercingStrike],
  },
  {
    'id': 2037,
    'set': 'C2',
    'name': 'Kid Buu',
    'sub_name': 'Wicked Power',
    'groups': ['Majin Buu'],
    'rarity': Rarity.SuperRare,
    'energy_cost': 4,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 7000,
    'hit_points': 6000,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deals 10000 damage to 1 random character other than this one with a cost of 4 or higher when your energy limit is 7 or higher',
        TriggerType.UponAppearance,
        'Energy limit of 7 or higher'
      ),
    ],
  },
  {
    'id': 2040,
    'set': 'C2',
    'name': 'Supreme Kai',
    'sub_name': 'Harbringer of Dispair',
    'groups': ['Supreme Kai'],
    'rarity': Rarity.Rare,
    'energy_cost': 4,
    'type': CardType.Character,
    'icon': IconType.Yellow,
    'attack': 3000,
    'hit_points': 7000,
    'abilities': [AbilityType.Guard],
  },
  {
    'id': 2091,
    'set': 'C2',
    'name': 'The Ultimate Final battle',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.SuperRare,
    'energy_cost': 4,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.AddHitPoints],
        'Adds +4000 to the Attack and +4000 to the Hit Points of all Goku and Frieza cards on your side of the field',
        TriggerType.EventCard,
        'Goku or Frieza cards on your side of the field'
      ),
    ],
  },
  {
    'id': 2004,
    'set': 'C2',
    'name': 'Goku (Super Saiyan)',
    'sub_name': 'Going Solo',
    'groups': [
      'Goku',
      'Saiyan',
    ],
    'rarity': Rarity.Legendary,
    'energy_cost': 5,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 8000,
    'hit_points': 7000,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deals 7000 damage to all characters on your opponent\'s side of the field if there are no characters on your side other than this one',
        TriggerType.UponAppearance,
        'Purple and Green Owned, No other characters on your side of the field'
      ),
    ],
  },
  {
    'id': 2006,
    'set': 'C2',
    'name': 'Gohan (Teen, Super Saiyan)',
    'sub_name': 'Awakened',
    'groups': [
      'Gohan',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 5,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 4000,
    'hit_points': 4000,
    'effects': [
      new Effect(
        [EffectType.ReducedCost],
        '-1 to the cost of this card in your hand for each event card in your graveyard',
        TriggerType.Other
      ),
      new Effect(
        [EffectType.AddAttack, EffectType.AddHitPoints, EffectType.SwiftAttack],
        'Adds +2000 to its own Attack, +2000 to its own Hit Points and gives itself Swift Attack',
        TriggerType.UponAppearance,
        'Blue Owned'
      ),
    ],
  },
  {
    'id': 2007,
    'set': 'C2',
    'name': 'Gohan (Teen, Super Saiyan 2)',
    'sub_name': 'Gohan Means Business',
    'groups': [
      'Gohan',
      'Saiyan',
    ],
    'rarity': Rarity.Legendary,
    'energy_cost': 5,
    'type': CardType.Character,
    'icon': IconType.Yellow,
    'attack': 7000,
    'hit_points': 5000,
    'abilities': [AbilityType.PiercingStrike],
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deals 3000 damage at random to the opponent\'s leader or 1 character on your opponent\'s side of the field every time a Saiyan other than this one appears on your side',
        TriggerType.Always,
        'Purple Owned'
      ),
    ],
  },
  {
    'id': 2024,
    'set': 'C2',
    'name': 'Recoome',
    'sub_name': 'Final Pose',
    'groups': [
      'Recoome',
      'Ginyu Force',
      'Frieza Force',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 5,
    'type': CardType.Character,
    'icon': IconType.Yellow,
    'attack': 4000,
    'hit_points': 4000,
    'abilities': [AbilityType.PiercingStrike],
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.AddHitPoints],
        'Adds +1000 to its own Attack and +1000 to its own Hit Points for each Ginyu Force card you have in your hand',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 2086,
    'set': 'C2',
    'name': 'Saiyan Dread',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 5,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deals 2000 damage to your opponent\'s leader for each Saiyan card on your side of the field',
        TriggerType.EventCard,
        'Saiyan card on your side of the field'
      ),
    ],
  },
  {
    'id': 2090,
    'set': 'C2',
    'name': 'The Death of a Friend',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 5,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SummonSpecial],
        'This card cannot be used if no characters on your side of the field have been KO\'d this turn, Causes 1 SP character with a cost of 6 or less to appear from your SP deck',
        TriggerType.EventCard,
        'Character KO\'d on your side of the field this turn'
      ),
    ],
  },
  {
    'id': 2013,
    'set': 'C2',
    'name': 'Vegito',
    'sub_name': 'World\'s #1 Dads',
    'groups': [
      'Vegito',
      'Saiyan',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 6,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 10000,
    'hit_points': 10000,
    'effects': [
      new Effect(
        [EffectType.SwiftAttack, EffectType.PiercingStrike],
        'Gives itself Swift Attack and Piercing Strike',
        TriggerType.UponAppearance,
        'Blue Consumed'
      ),
      new Effect(
        [EffectType.Guard, EffectType.NaturalRecovery],
        'Gives itself Guard and Natural Recovery',
        TriggerType.UponAppearance,
        'Purple Consumed'
      ),
    ],
  },
  {
    'id': 2027,
    'set': 'C2',
    'name': 'Captain Ginyu',
    'sub_name': 'Ginyu Force Assembled',
    'groups': [
      'Captain Ginyu',
      'Ginyu Force',
      'Frieza Force',
    ],
    'rarity': Rarity.Legendary,
    'energy_cost': 6,
    'type': CardType.Character,
    'icon': IconType.Yellow,
    'attack': 5000,
    'hit_points': 5000,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draws 1 Recoome, Burter, Jeice and Guldo cards each with a cost of 3 or lower',
        TriggerType.UponAppearance
      ),
      new Effect(
        [EffectType.SummonFromHand],
        'Causes 1 Recoome, Burter, Jeice and Guldo cards each with a cost of 3 or less to appear from your hand ("Upon Appearance" effects are not triggered)',
        TriggerType.UponAppearance,
        'Yellow Consumed'
      ),
    ],
  },
  {
    'id': 2041,
    'set': 'C2',
    'name': 'Elder Kai',
    'sub_name': 'Detection',
    'groups': ['Elder Kai'],
    'rarity': Rarity.Normal,
    'energy_cost': 6,
    'type': CardType.Character,
    'icon': IconType.Yellow,
    'attack': 8000,
    'hit_points': 8000,
    'effects': [
      new Effect(
        [EffectType.RecoverHitPoints, EffectType.RecoverLifePoints],
        'Recovers 4000 Hit Points for your leader and all character on your side of the field',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 2084,
    'set': 'C2',
    'name': 'Growing Up Goku',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Legendary,
    'energy_cost': 6,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SwiftAttack, EffectType.Other],
        'Causes 3 Goku cards from your hand to randomly appear, then gives Swift Attack to all Goku cards on your side of the field ("Upon Appearance" effects are not triggered)',
        TriggerType.EventCard,
        'Goku cards in hand'
      ),
    ],
  },
  {
    'id': 2096,
    'set': 'C2',
    'name': 'Earths Savior',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 6,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SummonSpecial],
        'Causes 1 SP character with a cost of 7 or less to appear from your SP deck'
      ),
    ],
  },
  {
    'id': 2029,
    'set': 'C2',
    'name': 'Frieza (Final Form)',
    'sub_name': 'Control Freak',
    'groups': [
      'Frieza',
      'Frieza Force',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 7,
    'type': CardType.Character,
    'icon': IconType.Yellow,
    'attack': 6000,
    'hit_points': 6000,
    'effects': [
      new Effect(
        [EffectType.ReducedCost],
        '-1 to the cost of this card in your hand for each Frieza card in your graveyard',
        TriggerType.Other
      ),
      new Effect(
        [EffectType.RecoverHitPoints, EffectType.RecoverLifePoints],
        'Adds +4000 to its own Attack and +4000 to its own Hit Points',
        TriggerType.UponAppearance,
        'Yellow Owned'
      ),
    ],
  },
  {
    'id': 2034,
    'set': 'C2',
    'name': 'Cell (Perfect)',
    'sub_name': 'Perfect Attack',
    'groups': [
      'Cell',
      'Android',
    ],
    'rarity': Rarity.Legendary,
    'energy_cost': 7,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 5000,
    'hit_points': 5000,
    'effects': [
      new Effect(
        [EffectType.SummonFromDeck, EffectType.InstantAppearance],
        'Appears from your deck at no energy cost at all if you consume a symbol and have Android 17 and Android 18 on your side of the field',
        TriggerType.Other,
        'Purple and Green Consumed'
      ),
      new Effect(
        [EffectType.AddAttack, EffectType.AddHitPoints, EffectType.KillCharacter],
        'KOs all Android 17 and Android 18 cards on your side of the field, Adds +5000 to its own Attack and +5000 to its own Hit Points and KOs a random character on the opponent\'s side of the field for each android killed by this effect',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 2048,
    'set': 'C2',
    'name': 'New Z Warriors',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 7,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SummonSpecial],
        'Causes 1 SP character with a cost of 8 or less to appear from your SP deck'
      ),
    ],
  },
  {
    'id': 2088,
    'set': 'C2',
    'name': 'Evil Empire',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 7,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SummonSupport, EffectType.AddAttack, EffectType.AddHitPoints],
        'Causes 1 regular Planetary Warriors A-D each to appear on your side of the field, then adds +2000 Attack and +2000 Hit Points to all Frieza Force cards on your side of the field when Frieza is on your side of the field'
      ),
    ],
  },
  {
    'id': 2030,
    'set': 'C2',
    'name': 'Mecha Frieza',
    'sub_name': 'Another Nightmare',
    'groups': [
      'Frieza',
      'Frieza Force',
    ],
    'rarity': Rarity.Legendary,
    'energy_cost': 8,
    'type': CardType.Character,
    'icon': IconType.Yellow,
    'attack': 11000,
    'hit_points': 12000,
    'abilities': [AbilityType.NaturalRecovery],
    'effects': [
      new Effect(
        [EffectType.KillCharacter],
        'KOs one random character on the opponent\'s side of the field for each Frieza card in your graveyard',
        TriggerType.UponAppearance,
        'Yellow Yellow Consumed, Frieza card in graveyard'
      ),
    ],
  },
  {
    'id': 2049,
    'set': 'C2',
    'name': 'Goku\'s Family',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Legendary,
    'energy_cost': 8,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.Other],
        'Causes 1 Goku, Gohan, Goten and Chi-Chi cards each to randomly appear from your hand ("Upon Appearance" effects are not triggered)',
        TriggerType.EventCard,
        'Goku, Gohan, Goten or Chi-Chi cards in your hand'
      ),
    ],
  },
  {
    'id': 2008,
    'set': 'C2',
    'name': 'Gohan (Super Saiyan)',
    'sub_name': 'Getting Serious',
    'groups': [
      'Gohan',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 9,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 5000,
    'hit_points': 6000,
    'effects': [
      new Effect(
        [EffectType.ReducedCost],
        '-1 to the cost of this card in your hand for each character card in your graveyard',
        TriggerType.Other
      ),
      new Effect(
        [EffectType.AddAttack, EffectType.AddHitPoints, EffectType.Guard],
        'Adds +4000 to its own Attack, +4000 to its own Hit Points and gives itself Guard',
        TriggerType.UponAppearance,
        'Purple Purple Owned'
      ),
    ],
  },
  {
    'id': 2060,
    'set': 'C2',
    'name': 'Cell (1st Form)',
    'sub_name': 'Stealthy Absorption',
    'groups': [
      'Cell',
      'Android',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Special,
    'icon': IconType.Green,
    'attack': 3000,
    'hit_points': 4000,
    'effects': [
      new Effect(
        [EffectType.AddBankEnergy],
        'Adds 1 energy to your bank',
        TriggerType.UponAppearance
      ),
      new Effect(
        [EffectType.SwiftAttack],
        'Gives itself Swift Attack',
        TriggerType.UponAppearance,
        'Purple Blue Green Consumed'
      ),
    ],
  },
  {
    'id': 2070,
    'set': 'C2',
    'name': 'Gotenks',
    'sub_name': 'Fusion FTW',
    'groups': [
      'Gotenks',
      'Saiyan',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Special,
    'icon': IconType.Green,
    'attack': 5000,
    'hit_points': 6000,
    'effects': [
      new Effect(
        [EffectType.UnableToAttackLeader],
        'Unable to attack Opponent\'s leader',
        TriggerType.Always
      ),
      new Effect(
        [EffectType.SummonSupport],
        'Causes 1 Super Ghost Kamikaze Attack card (cost: 0; Attack: 2000; Hit Points: 1; [Always] Swift Attack) to appear on your side of the field',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 2059,
    'set': 'C2',
    'name': 'Trunks (Super Saiyan)',
    'sub_name': 'I\'m Here To Kill You',
    'groups': [
      'Trunks',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 3,
    'type': CardType.Special,
    'icon': IconType.Green,
    'attack': 5000,
    'hit_points': 6000,
    'effects': [
      new Effect(
        [EffectType.InstantAppearance],
        'Appears from your SP deck at no energy cost if you consume a symbol',
        TriggerType.Other,
        'Green Green Green Consumed'
      ),
      new Effect(
        [EffectType.KillCharacter],
        'Destroys 1 character with 3000 Hit Points or less on your opponent\'s side of the field',
        TriggerType.UponAppearance,
        'Purple Owned'
      ),
    ],
  },
  {
    'id': 2061,
    'set': 'C2',
    'name': 'Android 16',
    'sub_name': 'Android Protector',
    'groups': [
      'Android 16',
      'Android',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 3,
    'type': CardType.Special,
    'icon': IconType.Green,
    'attack': 3000,
    'hit_points': 6000,
    'abilities': [AbilityType.Guard],
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draws 1 Android card, Draws nothing if you don\'t have any',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 2067,
    'set': 'C2',
    'name': 'Dabura',
    'sub_name': 'Assualt',
    'groups': ['Dabura'],
    'rarity': Rarity.Rare,
    'energy_cost': 3,
    'type': CardType.Special,
    'icon': IconType.Green,
    'attack': 7000,
    'hit_points': 6000,
  },
  {
    'id': 2043,
    'set': 'C2',
    'name': 'Androids 17 & 18',
    'sub_name': 'Nightmare of the Future',
    'groups': [
      'Android 17',
      'Android 18',
      'Android',
    ],
    'rarity': Rarity.Legendary,
    'energy_cost': 4,
    'type': CardType.Special,
    'icon': IconType.Purple,
    'attack': 4000,
    'hit_points': 5000,
    'effects': [
      new Effect(
        [EffectType.ConsumeBank, EffectType.SummonSupport],
        'Causes 1 regular "Android 17: Biting the Hand that Feeds" card (cost: 4; Attack: 5000; Hit Points: 8000) to appear on your side of the field. ("Upon Appearance" effects are not triggered)',
        TriggerType.UponAppearance,
        '2 Bank Energy Consumed'
      ),
      new Effect(
        [EffectType.SwiftAttack],
        'Gives Swift Attack to all Android 17 cards other than this one on your side of the field',
        TriggerType.UponAppearance,
        'Purple Owned'
      ),
    ],
  },
  {
    'id': 2045,
    'set': 'C2',
    'name': 'Babidi & Dabura',
    'sub_name': 'Demon Realm Power',
    'groups': [
      'Babidi',
      'Dabura',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 4,
    'type': CardType.Special,
    'icon': IconType.Purple,
    'attack': 4000,
    'hit_points': 10000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        '2x to its own Attack until the end of your opponents turn',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 2046,
    'set': 'C2',
    'name': 'Babidi & Majin Buu',
    'sub_name': 'Hell Begins',
    'groups': [
      'Babidi',
      'Majin Buu',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 4,
    'type': CardType.Special,
    'icon': IconType.Purple,
    'attack': 7000,
    'hit_points': 9000,
    'effects': [
      new Effect(
        [EffectType.InstantAppearance],
        'Appears from your SP deck at no energy cost',
        TriggerType.Other,
        'Spend energy from bank, Have regular Majin Buu and Babidi characters on your side of the field'
      ),
      new Effect(
        [EffectType.ReturnCharacter],
        'Returns all regular Majin Buu and Babidi cards on your side of the field to your hand',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 2053,
    'set': 'C2',
    'name': 'Nappa',
    'sub_name': 'Terrifying Saiyan',
    'groups': [
      'Nappa',
      'Saiyan',
      'Frieza Force',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 4,
    'type': CardType.Special,
    'icon': IconType.Blue,
    'attack': 6000,
    'hit_points': 8000,
    'abilities': [AbilityType.PiercingStrike],
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.Guard],
        'Adds +2000 to its own Attack and gives itself Guard when a Saiyan card other than this one is on the field',
        TriggerType.Always,
        'Another Saiyan on the field'
      ),
    ],
  },
  {
    'id': 2055,
    'set': 'C2',
    'name': 'Tien',
    'sub_name': 'Tri-beam',
    'groups': ['Tien'],
    'rarity': Rarity.Rare,
    'energy_cost': 4,
    'type': CardType.Special,
    'icon': IconType.Green,
    'attack': 6000,
    'hit_points': 5000,
    'effects': [
      new Effect(
        [EffectType.KillCharacter],
        'KOs 1 character on the opponent\'s side of the field with a cost of 8 or more',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 2044,
    'set': 'C2',
    'name': 'Supreme Kai & Kibito',
    'sub_name': 'To the Rescue',
    'groups': [
      'Supreme Kai',
      'Kibito',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 5,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 7000,
    'hit_points': 7000,
    'effects': [
      new Effect(
        [EffectType.RestoreBank],
        'Restores your bank',
        TriggerType.UponAppearance,
        'Purple Owned'
      ),
      new Effect(
        [EffectType.DrawCard],
        'Draws 1 card',
        TriggerType.UponAppearance,
        'Blue Owned'
      ),
    ],
  },
  {
    'id': 2050,
    'set': 'C2',
    'name': 'Goku (Super Saiyan)',
    'sub_name': 'Super Kamehameha',
    'groups': [
      'Goku',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 5,
    'type': CardType.Special,
    'icon': IconType.Blue,
    'attack': 7000,
    'hit_points': 7000,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deals 7000 damage to your opponent\'s leader or 1 character on the field',
        TriggerType.UponAppearance,
        'Blue Blue Blue Blue Consumed'
      ),
    ],
  },
  {
    'id': 2057,
    'set': 'C2',
    'name': 'Vegeta',
    'sub_name': 'Dirty Fireworks',
    'groups': [
      'Vegeta',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 5,
    'type': CardType.Special,
    'icon': IconType.Green,
    'attack': 7000,
    'hit_points': 8000,
    'effects': [
      new Effect(
        [EffectType.InstantAppearance],
        'Appears from your SP deck at no energy cost if you consume a symbol and have Vegeta in your graveyard',
        TriggerType.Other,
        'Purple Purple Purple Consumed'
      ),
      new Effect(
        [EffectType.DealDamage],
        'Deals 7000 damage to all other characters on the field',
        TriggerType.UponAppearance,
        'Green Green Consumed'
      ),
    ],
  },
  {
    'id': 2064,
    'set': 'C2',
    'name': 'Vegeta',
    'sub_name': 'Explosive Rage',
    'groups': [
      'Vegeta',
      'Saiyan',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 5,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 9000,
    'hit_points': 7000,
    'abilities': [AbilityType.PiercingStrike],
    'effects': [
      new Effect(
        [EffectType.KillCharacter],
        'KOs all other characters on the field other than this one when Majin Buu is on the field, then KOs itself',
        TriggerType.UponAppearance,
        'Purple Consumed'
      ),
    ],
  },
  {
    'id': 2065,
    'set': 'C2',
    'name': 'Vegeta',
    'sub_name': 'Final Flash',
    'groups': [
      'Vegeta',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 5,
    'type': CardType.Special,
    'icon': IconType.Blue,
    'attack': 5000,
    'hit_points': 7000,
    'effects': [
      new Effect(
        [EffectType.KillCharacter],
        'Destroys 1 character on the oppponent\'s side of the field, then deals 2000 damage to the opponent\'s leader',
        TriggerType.UponAppearance,
        'Blue Purple Owned'
      ),
    ],
  },
  {
    'id': 2066,
    'set': 'C2',
    'name': 'Gohan (Teen, Super Saiyan 2)',
    'sub_name': 'Power Unleashed',
    'groups': [
      'Gohan',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 5,
    'type': CardType.Special,
    'icon': IconType.Blue,
    'attack': 8000,
    'hit_points': 7000,
    'effects': [
      new Effect(
        [EffectType.InstantAppearance],
        'Appears from your SP deck at no energy cost if you consume a symbol and have Android 16 in your graveyard',
        TriggerType.Other,
        'Blue Blue Blue Consumed'
      ),
      new Effect(
        [EffectType.KillCharacter],
        'KOs all characters with Guard on the opponent\'s side of the field',
        TriggerType.UponAppearance,
        'Green Green Consumed'
      ),
    ],
  },
  {
    'id': 2052,
    'set': 'C2',
    'name': 'Gohan (Great Ape)',
    'sub_name': 'Suprising Transformation',
    'groups': [
      'Gohan',
      'Saiyan',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 6,
    'type': CardType.Special,
    'icon': IconType.Purple,
    'attack': 7000,
    'hit_points': 8000,
    'abilities': [AbilityType.Guard],
    'effects': [
      new Effect(
        [EffectType.KillCharacter],
        'KOs all charcters on the field with a cost of 3 or less',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 2056,
    'set': 'C2',
    'name': 'Goku',
    'sub_name': 'Kaioken Charge',
    'groups': [
      'Goku',
      'Saiyan',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 6,
    'type': CardType.Special,
    'icon': IconType.Blue,
    'attack': 7000,
    'hit_points': 7000,
    'effects': [
      new Effect(
        [EffectType.InstantAppearance],
        'Appears from your SP deck at no energy cost if you consume a symbol',
        TriggerType.Other,
        'Purple Blue Green Consumed'
      ),
      new Effect(
        [EffectType.SwiftAttack, EffectType.UnableToAttackLeader],
        'Gives itself Swift Attack and "Unable to attack opponent\'s leader"',
        TriggerType.Other,
        ''
      ),
    ],
  },
  {
    'id': 2062,
    'set': 'C2',
    'name': 'Android 16',
    'sub_name': 'Hell Flash',
    'groups': [
      'Android 16',
      'Android',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 6,
    'type': CardType.Special,
    'icon': IconType.Purple,
    'attack': 7000,
    'hit_points': 10000,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deals 7000 damage to 1 character on the opponent\'s side of the field',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 2072,
    'set': 'C2',
    'name': 'Kid Buu',
    'sub_name': 'The Ultimate Majin',
    'groups': ['Majin Buu'],
    'rarity': Rarity.Normal,
    'energy_cost': 6,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 9000,
    'hit_points': 9000,
    'abilities': [AbilityType.PiercingStrike],
    'effects': [
      new Effect(
        [EffectType.RestoreBank],
        'Restores your bank',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 2051,
    'set': 'C2',
    'name': 'Raditz',
    'sub_name': 'Fools like you don\'t deserve to live!',
    'groups': [
      'Raditz',
      'Saiyan',
      'Frieza Force',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 7,
    'type': CardType.Special,
    'icon': IconType.Green,
    'attack': 9000,
    'hit_points': 8000,
    'effects': [
      new Effect(
        [EffectType.KillCharacter],
        'Destroys 1 regular character on your opponent\'s side of the field',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 2068,
    'set': 'C2',
    'name': 'Majin Buu (Innocent)',
    'sub_name': 'Buu really really... HATE YOU!',
    'groups': ['Majin Buu'],
    'rarity': Rarity.Normal,
    'energy_cost': 7,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 12000,
    'hit_points': 12000,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deals 4000 damage to all other characters on the field if your energy limit is 7 or higher',
        TriggerType.UponAppearance,
        'Energy limit is 7 or higher'
      ),
    ],
  },
  {
    'id': 2047,
    'set': 'C2',
    'name': 'Gohan (Teen, Super Saiyan 2)',
    'sub_name': 'Father-Son Kamehameha',
    'groups': [
      'Gohan',
      'Saiyan',
    ],
    'rarity': Rarity.Legendary,
    'energy_cost': 8,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 15000,
    'hit_points': 15000,
    'effects': [
      new Effect(
        [EffectType.InstantAppearance],
        'Appears from your SP deck at no energy cost if you consume a symbol and have Goku in your graveyard',
        TriggerType.Other,
        'Blue Green Yellow Consumed'
      ),
      new Effect(
        [EffectType.DealDamage],
        'Deals 5000 damage to 1 character on your opponent\'s side of the field for each Saiyan card in your graveyard',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 2069,
    'set': 'C2',
    'name': 'Majin Buu',
    'sub_name': 'When it Rains, It Pours',
    'groups': ['Majin Buu'],
    'rarity': Rarity.Rare,
    'energy_cost': 8,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 15000,
    'hit_points': 14000,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deals 4000 damage to 1 character other than this one on the field if your energy limit is 7 or higher (Can be repeated 5 times)',
        TriggerType.UponAppearance,
        'Energy limit is 7 or higher'
      ),
    ],
  },
  {
    'id': 2071,
    'set': 'C2',
    'name': 'Vegito (Super Saiyan)',
    'sub_name': 'Spirit Sword',
    'groups': [
      'Vegito',
      'Saiyan',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 8,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 12000,
    'hit_points': 10000,
    'effects': [
      new Effect(
        [EffectType.ReturnOpponentCardToDeck],
        'Randomly returns 2 cards to your opponent\'s deck from their hand',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 2058,
    'set': 'C2',
    'name': 'Frieza (Final Form)',
    'sub_name': 'Emperor\'s Will',
    'groups': [
      'Frieza',
      'Frieza Force',
    ],
    'rarity': Rarity.SuperRare,
    'energy_cost': 9,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 12000,
    'hit_points': 11000,
    'effects': [
      new Effect(
        [EffectType.InstantAppearance],
        'Appears from your SP deck at no energy cost if you consume a symbol and have Frieza in your graveyard',
        TriggerType.Other,
        'Purple Blue Green Consumed'
      ),
      new Effect(
        [EffectType.SwiftAttack, EffectType.NegateDamage],
        'Gives itself Swift Attack and Negate Damage when you have 2 or more Frieza cards in your graveyard',
        TriggerType.Always,
        'Yellow Yellow Owned'
      ),
    ],
  },
  {
    'id': 2073,
    'set': 'C2',
    'name': 'Majin Buu',
    'sub_name': 'Vanishing ball',
    'groups': ['Majin Buu'],
    'rarity': Rarity.SuperRare,
    'energy_cost': 10,
    'type': CardType.Special,
    'icon': IconType.Yellow,
    'attack': 20000,
    'hit_points': 10000,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deals 1000 damage to your opponent\'s leader and all characters on their side of the field for each unit of energy in your bank',
        TriggerType.UponAppearance,
        'Yellow Yellow Consumed'
      ),
    ],
  },
  {
    'id': 1301,
    'set': 'C1',
    'name': 'Dinosaur',
    'sub_name': '',
    'groups': ['Dinosaur'],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Support,
    'icon': IconType.None,
    'attack': 3000,
    'hit_points': 3000,
  },
  {
    'id': 1302,
    'set': 'C1',
    'name': 'Bubbles',
    'sub_name': '',
    'groups': ['Bubbles'],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Support,
    'icon': IconType.None,
    'attack': 1000,
    'hit_points': 2000,
  },
  {
    'id': 1303,
    'set': 'C1',
    'name': 'Peon',
    'sub_name': '',
    'groups': [
      'Peon',
      'Frieza Force',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Support,
    'icon': IconType.None,
    'attack': 1000,
    'hit_points': 1000,
  },
  {
    'id': 1304,
    'set': 'C1',
    'name': 'Planetary Warrior',
    'sub_name': '',
    'groups': [
      'Planetary Warrior',
      'Frieza Force',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Support,
    'icon': IconType.None,
    'attack': 2000,
    'hit_points': 1000,
  },
  {
    'id': 1305,
    'set': 'C1',
    'name': 'Cell Jr.',
    'sub_name': '',
    'groups': [
      'Cell Jr.',
      'Android',
    ],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Support,
    'icon': IconType.None,
    'attack': 4000,
    'hit_points': 1000,
  },
  {
    'id': 2101,
    'set': 'C2',
    'name': 'Super Ghost Kamikaze Attack',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 0,
    'type': CardType.Support,
    'icon': IconType.None,
    'attack': 2000,
    'hit_points': 1,
    'abilities': [AbilityType.Swift],
  },
  {
    'id': 3013,
    'set': 'C3',
    'name': 'Captain Ginyu',
    'sub_name': 'Goku\'s Body',
    'groups': [
      'Captain Ginyu',
      'Ginyu Force',
      'Frieza Force',
    ],
    'rarity': Rarity.Rare,
    'energy_cost': 0,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 1000,
    'hit_points': 1000,
  },
  {
    'id': 3021,
    'set': 'C3',
    'name': 'Bulma',
    'sub_name': 'Namek-Bound',
    'groups': ['Bulma'],
    'rarity': Rarity.SuperRare,
    'energy_cost': 0,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 1000,
    'hit_points': 1000,
    'effects': [
      new Effect(
        [EffectType.AddBankEnergy],
        'Adds 1 energy to your bank',
        TriggerType.UponAppearance,
        'Purple Owned'
      ),
    ],
  },
  {
    'id': 3065,
    'set': 'C3',
    'name': 'Feigned Illness',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 0,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.KillCharacter],
        'KOs 1 character on your side of the field'
      ),
    ],
  },
  {
    'id': 3073,
    'set': 'C3',
    'name': 'No Problem',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 0,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.ReturnFromGraveyard],
        'Randomly returns 1 SP character in your graveyard to your SP deck (not including any originally owned by the opponent)'
      ),
    ],
  },
  {
    'id': 3087,
    'set': 'C3',
    'name': 'Angry Awakening',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.SuperRare,
    'energy_cost': 0,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.ConsumeBank, EffectType.SummonSpecial, EffectType.AddHitPoints, EffectType.AddAttack],
        'Spends all energy in your bank to cause 1 SP character with a cost equal to or less than the energy spent to appear from your SP deck. If an SP character with a cost of 7 or higher appears, that character receives +3000 to their Attack and +3000 to their HitPoints'
      ),
    ],
  },
  {
    'id': 3003,
    'set': 'C3',
    'name': 'Gohan (Kid)',
    'sub_name': 'Travel Attire',
    'groups': ['Gohan', 'Saiyan'],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 2000,
    'hit_points': 4000,
    'effects': [
      new Effect(
        [EffectType.AddAttack],
        'Adds +1000 to its own Attack whenever a Saiyan other than this one appears on your side of the field',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 3015,
    'set': 'C3',
    'name': 'Android 17',
    'sub_name': '18\'s Partner in Crime',
    'groups': ['Android 17', 'Android'],
    'rarity': Rarity.Rare,
    'energy_cost': 1,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 3000,
    'hit_points': 2000,
    'effects': [
      new Effect(
        [EffectType.DrawCard, EffectType.ConsumeBank],
        'Draws 1 Android 18 card. Draws nothing if you have none',
        TriggerType.UponAppearance,
        'Consume 1 Bank energy'
      ),
    ],
  },
  {
    'id': 3016,
    'set': 'C3',
    'name': 'Android 18',
    'sub_name': '17\'s Partner in Crime',
    'groups': ['Android 18', 'Android'],
    'rarity': Rarity.Rare,
    'energy_cost': 1,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 2000,
    'hit_points': 3000,
    'effects': [
      new Effect(
        [EffectType.DrawCard, EffectType.ConsumeBank],
        'Draws 1 Android 17 card. Draws nothing if you have none',
        TriggerType.UponAppearance,
        'Consume 1 Bank energy'
      ),
    ],
  },
  {
    'id': 3022,
    'set': 'C3',
    'name': 'Chi-Chi',
    'sub_name': 'Mad Mother',
    'groups': ['Chi-Chi'],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 2000,
    'hit_points': 4000,
    'abilities': [AbilityType.Rush],
  },
  {
    'id': 3023,
    'set': 'C3',
    'name': 'Videl',
    'sub_name': 'Training for the Tournament',
    'groups': ['Videl'],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 2000,
    'hit_points': 2000,
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.AddHitPoints],
        'Adds +1000 to its own Attack and +1000 to its own HitPoints',
        TriggerType.UponAppearance,
        'Surge 3'
      ),
      new Effect(
        [EffectType.AddAttack, EffectType.AddHitPoints],
        'Adds +1000 to its own Attack and +1000 to its own HitPoints in addition to the first "Upon Appearance" effect',
        TriggerType.UponAppearance,
        'Surge 4'
      ),
    ],
  },
  {
    'id': 3053,
    'set': 'C3',
    'name': 'Instant Transmission',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.SuperRare,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SummonFromDeck, EffectType.ReturnCharacter],
        'Activates from your deck at no energy cost if you consume a symbol. Returns 1 regular character on your side of the field to your hand. (Symbols not required when played from your hand.)',
        TriggerType.EventCard,
        'Green Consumed'
      ),
    ],
  },
  {
    'id': 3055,
    'set': 'C3',
    'name': 'Kamekameha',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deals 7000 damage to 1 character on the field',
        TriggerType.EventCard,
        'Goten in your hand'
      ),
    ],
  },
  {
    'id': 3060,
    'set': 'C3',
    'name': 'Optimism',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draws 1 card',
        TriggerType.EventCard,
        'Blue Consumed'
      ),
      new Effect(
        [EffectType.AddBankEnergy],
        'Adds 2 energy to your bank',
        TriggerType.EventCard,
        'Purple Consumed'
      ),
    ],
  },
  {
    'id': 3063,
    'set': 'C3',
    'name': 'Legendary Instructor',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SummonSpecial],
        'Causes 1 SP character with a cost of 1 to appear from your SP deck',
        TriggerType.EventCard
      ),
    ],
  },
  {
    'id': 3064,
    'set': 'C3',
    'name': 'Match of the Century',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.AddHitPoints, EffectType.DrawCard],
        'Adds +1000 to the Attack and +1000 to the HitPoints of 1 charcter on your side of the field, then draws 1 card',
        TriggerType.EventCard
      ),
    ],
  },
  {
    'id': 3066,
    'set': 'C3',
    'name': 'Gripped by Fear',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DiscardCard],
        'Discards all cards in your hand',
        TriggerType.EventCard
      ),
    ],
  },
  {
    'id': 3067,
    'set': 'C3',
    'name': 'Warriors of Other World',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.ReturnFromGraveyard],
        'Returns all SP characters in your graveyard to your SP deck (not including any originally owned by the opponent)',
        TriggerType.EventCard
      ),
    ],
  },
  {
    'id': 3070,
    'set': 'C3',
    'name': 'Royal Defense Force',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SummonSupport],
        'Causes 3 Royal Defense Soldiers (Cost: 1, Attack: 2000, HitPoints: 1000), [Always] Unable to Attack Leader) to appear',
        TriggerType.EventCard
      ),
    ],
  },
  {
    'id': 3074,
    'set': 'C3',
    'name': 'Uncontrollable Anger',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.Rush],
        'Gives Rush to 1 character on your side of the field',
        TriggerType.EventCard
      ),
    ],
  },
  {
    'id': 3077,
    'set': 'C3',
    'name': 'Amazement',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.RemoveEffects, EffectType.SummonFromDeck],
        'Activates from your deck at no energy cost if you consume a symbol. Removes effects from 1 character on the field. ("Always" effects are not removed, and symbols not required when played from your hand.)',
        TriggerType.EventCard,
        'Blue Consumed'
      ),
    ],
  },
  {
    'id': 3078,
    'set': 'C3',
    'name': 'A Glimmer of Hope',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.UnableToAttackLeader],
        'Gives 1 character on your opponent\'s side of the field "Unable to Attack Leader" until the end of your opponent\'s turn',
        TriggerType.EventCard
      ),
    ],
  },
  {
    'id': 3079,
    'set': 'C3',
    'name': 'Departure',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.SuperRare,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DrawCard, EffectType.SummonFromDeck],
        'Activates from your deck at no energy cost if you consume a symbol. Draws 1 card. (Symbols not required when played from your hand.)',
        TriggerType.EventCard,
        'Yellow Consumed'
      ),
    ],
  },
  {
    'id': 3090,
    'set': 'C3',
    'name': 'Intimidation',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.Overpower],
        'Gives Overpower to 1 character on the field',
        TriggerType.EventCard
      ),
    ],
  },
  {
    'id': 3094,
    'set': 'C3',
    'name': 'You Are Number One',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DiscardCard],
        'Randomly sends 2 of the Saiyan cards in your deck to the graveyard',
        TriggerType.EventCard
      ),
    ],
  },
  {
    'id': 3098,
    'set': 'C3',
    'name': 'Inert Dragon Balls',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.ReturnCardToDeck, EffectType.DrawCard],
        'Returns your hand to your deck. Afterward, draw 2 cards',
        TriggerType.EventCard
      ),
    ],
  },
  {
    'id': 3005,
    'set': 'C3',
    'name': 'Gohan (Great Saiyaman)',
    'sub_name': 'Tournament Ready',
    'groups': ['Gohan', 'Saiyan'],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 5000,
    'hit_points': 4000,
    'effects': [
      new Effect(
        [EffectType.DrawCard, EffectType.DiscardCard],
        'Draws 1 card, Discards 1 card from your hand',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 3011,
    'set': 'C3',
    'name': 'Krillin',
    'sub_name': 'Namek-Bound',
    'groups': ['Krillin'],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Character,
    'icon': IconType.Purple,
    'attack': 3000,
    'hit_points': 4000,
    'effects': [
      new Effect(
        [EffectType.DrawCard, EffectType.DiscardCard],
        'Draws 2 cards, Discards 2 cards from your hand',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 3012,
    'set': 'C3',
    'name': 'Tien',
    'sub_name': 'Neo Tri-Beam',
    'groups': ['Tien'],
    'rarity': Rarity.Rare,
    'energy_cost': 2,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 7000,
    'hit_points': 2000,
    'effects': [
      new Effect(
        [EffectType.ReturnCharacter],
        'Returns 1 regular character on the opponent\'s side of the field o their hand. Afterwards, this card returns to your hand',
        TriggerType.UponAppearance,
        'Blue Green Consumed'
      ),
    ],
  },
  {
    'id': 3056,
    'set': 'C3',
    'name': 'Ki Wave',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deals 4000 damage to all characters on the opponent\'s side of the field',
        TriggerType.EventCard,
        'Trunks in your hand'
      ),
    ],
  },
  {
    'id': 3059,
    'set': 'C3',
    'name': 'Death Slicer',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.SuperRare,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.KillCharacter, EffectType.DiscardCard],
        'Discards 1 of the Frieza cards in your hand, then randomly KOs 2 characters on the opponent\'s side of the field',
        TriggerType.EventCard,
        'Frieza in hand'
      ),
    ],
  },
  {
    'id': 3062,
    'set': 'C3',
    'name': 'Return from Training',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SummonSpecial, EffectType.Rush],
        'Causes 1 SP character with a cost of 2 or less to appear from your SP deck and gives them Rush',
        TriggerType.EventCard
      ),
    ],
  },
  {
    'id': 3071,
    'set': 'C3',
    'name': 'Majin regeneration',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draws 2 Majin Buu cards. Draws nothing if you have none',
        TriggerType.EventCard
      ),
    ],
  },
  {
    'id': 3076,
    'set': 'C3',
    'name': 'Fusion!',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Legendary,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SummonFromDeck],
        'Causes 1 of the Trunks cards in your deck with a cost of 2 or less to randomly appear ("Upon Appearance" effects are not triggered). Draws nothing if you have none',
        TriggerType.EventCard
      ),
      new Effect(
        [EffectType.DrawCard],
        'Draws 1 of the Goten cards in your deck with a cost of 2 or less. Draws nothing if you have none',
        TriggerType.EventCard
      ),
    ],
  },
  {
    'id': 3086,
    'set': 'C3',
    'name': 'Killer Kids',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SummonSupport],
        'Causes 2 Cell Juniors (Cost: 2, Attack: 4000, HitPoints: 1000) to appear',
        TriggerType.EventCard
      ),
    ],
  },
  {
    'id': 3093,
    'set': 'C3',
    'name': 'Potara Power',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Legendary,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.GainSymbol],
        'Gains 1 Yellow Symbol',
        TriggerType.EventCard
      ),
    ],
  },
  {
    'id': 3100,
    'set': 'C3',
    'name': 'Cookie Time',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 2,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.KillCharacter],
        'Destroys 1 character on the field with a cost equal to or less than the energy in your bank',
        TriggerType.EventCard,
        'Energy in bank'
      ),
    ],
  },
  {
    'id': 3002,
    'set': 'C3',
    'name': 'Goku',
    'sub_name': 'Gravity-Trained',
    'groups': ['Goku', 'Saiyan'],
    'rarity': Rarity.SuperRare,
    'energy_cost': 3,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 6000,
    'hit_points': 3000,
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.AddHitPoints, EffectType.NaturalRecovery, EffectType.Rush, EffectType.SurgeDecrease],
        'Adds +3000 to its own Attack and +3000 to its own HitPoints, and gives itself Natural Recovery and Rush. Surge decreases by 1 for every Saiyan card in your graveyard',
        TriggerType.UponAppearance,
        'Surge 10'
      ),
    ],
    'abilities': [AbilityType.Swift],
  },
  {
    'id': 3004,
    'set': 'C3',
    'name': 'Gohan (Teen, Super Saiyan)',
    'sub_name': 'Rage against the Bio-Android',
    'groups': ['Gohan', 'Saiyan'],
    'rarity': Rarity.Legendary,
    'energy_cost': 3,
    'type': CardType.Character,
    'icon': IconType.Blue,
    'attack': 5000,
    'hit_points': 5000,
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.AddHitPoints, EffectType.DealDamage, EffectType.SurgeDecrease],
        'Adds +3000 to its own Attack and +3000 to its own HitPoints, then deals 30000 damage to a random character on your opponent\'s side of the field. Surge decreases by 1 for every Saiyan card in your graveyard',
        TriggerType.UponAppearance,
        'Surge 15'
      ),
      new Effect(
        [EffectType.DrawCard],
        'Draws 1 of the Saiyan card with Surge in your deck. Draws nothing if you have none',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 3010,
    'set': 'C3',
    'name': 'Vegito (Super Saiyan)',
    'sub_name': 'Brimming with Arrogance',
    'groups': ['Vegito', 'Saiyan'],
    'rarity': Rarity.Normal,
    'energy_cost': 3,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 4000,
    'hit_points': 9000,
    'effects': [
      new Effect(
        [EffectType.UnableToAttack],
        'Gives itself "Unable to Attack"',
        TriggerType.UponAppearance
      ),
    ],
    'abilities': [AbilityType.Guard, AbilityType.NaturalRecovery, AbilityType.Overpower],
  },
  {
    'id': 3024,
    'set': 'C3',
    'name': 'Upa',
    'sub_name': 'Familiar Face',
    'groups': ['Upa'],
    'rarity': Rarity.Normal,
    'energy_cost': 3,
    'type': CardType.Character,
    'icon': IconType.Green,
    'attack': 3000,
    'hit_points': 5000,
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.Overpower],
        'Adds +2000 to the Attack of 1 cahracter on your side of the field and gives it Overpower until the end of your opponent\'s turn',
        TriggerType.UponAppearance
      ),
    ],
  },
  {
    'id': 3028,
    'set': 'C3',
    'name': 'Goku and His Kids',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Legendary,
    'energy_cost': 3,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DrawCard],
        'Draws 1 of the Goku, Gohan and Goten cards in your deck. Draws nothing if you have none',
        TriggerType.EventCard
      ),
    ],
  },
  {
    'id': 3057,
    'set': 'C3',
    'name': 'Rapid-Fire Super Donuts',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.SuperRare,
    'energy_cost': 3,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.DealDamage],
        'Deals 1000 damage to all character on your opponent\'s side of the field for each event card in your graveyard, then deals 4000 damage to your opponents leader',
        TriggerType.EventCard,
        'Gotenks on your side of the field'
      ),
    ],
  },
  {
    'id': 3058,
    'set': 'C3',
    'name': 'Destructo-Disc',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.SuperRare,
    'energy_cost': 3,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.KillCharacter],
        'KOs 1 SP character on the field',
        TriggerType.EventCard
      ),
    ],
  },
  {
    'id': 3061,
    'set': 'C3',
    'name': 'Naughty Book',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 3,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.AddAttack, EffectType.AddHitPoints],
        'Adds +5000 to the Attack and +5000 to the HitPoints of 1 of the Krillin and Master Roshi cards on your side of the field',
        TriggerType.EventCard
      ),
    ],
  },
  {
    'id': 3068,
    'set': 'C3',
    'name': 'Namekian Power',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Normal,
    'energy_cost': 3,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SummonFromDeck, EffectType.RecoverLifePoints, EffectType.RecoverHitPoints],
        'Activates from your deck at no energy cost if you consume a symbol. Restores 7000 HitPoints for your leader or 1 character on your side of the field. (Symbols not required when played from your hand.)',
        TriggerType.EventCard,
        'Purple Consumed'
      ),
    ],
  },
  {
    'id': 3069,
    'set': 'C3',
    'name': 'Hovercar Hijinks',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.Rare,
    'energy_cost': 3,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SummonSpecial],
        'Causes up to 2 SP characters to appear from your SP deck with a total cost of 2 or less',
        TriggerType.EventCard
      ),
    ],
  },
  {
    'id': 3081,
    'set': 'C3',
    'name': 'Path to Greatness',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.SuperRare,
    'energy_cost': 3,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.SummonFromHand],
        'Causes 1 of the Gohan cards in your hand with a cost equal or less than your energy limit to randomly appear. ("Upon Appearance" effects are not triggered.)',
        TriggerType.EventCard
      ),
    ],
  },
  {
    'id': 3095,
    'set': 'C3',
    'name': 'Earth\'s Champion',
    'sub_name': '',
    'groups': [],
    'rarity': Rarity.SuperRare,
    'energy_cost': 3,
    'type': CardType.Event,
    'icon': IconType.None,
    'effects': [
      new Effect(
        [EffectType.UnableToAttackLeader],
        'Gives "Unable to Attack Leader" to all characters on your opponent\'s side of the field until the end of your opponent\'s turn',
        TriggerType.EventCard
      ),
    ],
  },
  {
    'id': 3101,
    'set': 'CB3',
    'name': 'Royal Defense Soldier',
    'sub_name': '',
    'groups': ['Royal Defense Soldier'],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Support,
    'icon': IconType.None,
    'attack': 2000,
    'hit_points': 1000,
    'effects': [
      new Effect(
        [EffectType.UnableToAttackLeader],
        'Unable to Attack Opponent\'s Leader',
        TriggerType.Always
      ),
    ],
  },
  {
    'id': 3102,
    'set': 'CB3',
    'name': 'Exhausted Yamcha',
    'sub_name': '',
    'groups': ['Yamcha'],
    'rarity': Rarity.Normal,
    'energy_cost': 1,
    'type': CardType.Support,
    'icon': IconType.None,
    'attack': 1000,
    'hit_points': 1000,
    'effects': [
      new Effect(
        [EffectType.UnableToAttack],
        'Unable to Attack',
        TriggerType.Always
      ),
    ],
  },
];
