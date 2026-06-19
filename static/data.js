const ROLE_DISTS = {
  4: ["Sheriff","Renegade","Outlaw","Outlaw"],
  5: ["Sheriff","Renegade","Deputy","Outlaw","Outlaw"],
  6: ["Sheriff","Renegade","Deputy","Outlaw","Outlaw","Outlaw"],
  7: ["Sheriff","Renegade","Deputy","Deputy","Outlaw","Outlaw","Outlaw"],
  8: ["Sheriff","Renegade","Deputy","Deputy","Outlaw","Outlaw","Outlaw","Outlaw"],
};

const CHARACTERS = {
  "Apache Kid": {
    "life_points": 3,
    "expansion": "Dodge City",
    "official_text": "Unaffected by Diamonds-suit cards played by other players.",
    "notes": [
      "Applies only to cards played by other players, not his own cards.",
      "Does not work during Duel (Duel requires BANG! responses, and the immunity is not applied there).",
      "Doc Holyday vs Apache Kid: if Doc discards 2 cards to produce a BANG!-type effect against Apache Kid, at least one of the discarded cards must not be Diamonds."
    ],
    "aliases": [
      "Apache",
      "ApacheKid",
      "Kid",
      "Apache Kid"
    ]
  },
  "Bart Cassidy": {
    "life_points": 4,
    "expansion": "Base",
    "official_text": "Each time he loses 1 life point, he immediately draws 1 card.",
    "notes": [
      "Draws 1 per life lost, including multi-damage (e.g., Dynamite for 3 life: draw 3).",
      "Does not trigger if damage is prevented (no life lost).",
      "If he is eliminated and cannot be saved, no extra draw after elimination."
    ],
    "aliases": [
      "Bart",
      "Cassidy",
      "BartCassidy",
      "Bart Cassidy"
    ]
  },
  "Belle Star": {
    "life_points": 4,
    "expansion": "Dodge City",
    "official_text": "During her turn, no card in play in front of any other player has any effect.",
    "notes": [
      "Works only during her turn; cards function normally again when her turn ends.",
      "Disables other players’ in-play cards (blue/green) only for the duration of her turn."
    ],
    "aliases": [
      "Belle",
      "Star",
      "BelleStar",
      "Belle Star"
    ]
  },
  "Big Spencer": {
    "life_points": 9,
    "expansion": "Wild West Show",
    "official_text": "Starts with 5 cards. Cannot play Missed!.",
    "notes": [
      "The 5-card hand applies only at game start.",
      "The restriction on Missed! applies whenever he would normally play one."
    ],
    "aliases": [
      "Spencer",
      "BigSpencer",
      "Big Spencer"
    ]
  },
  "Bill Noface": {
    "life_points": 4,
    "expansion": "Dodge City",
    "official_text": "In Phase 1, he draws 1 card plus 1 additional card for each wound (life point missing).",
    "notes": [
      "Compute his draw as (1 + missing life), then apply any external modifiers after that (if relevant).",
      "Ghost Town: Bill Noface starts his ghost turn with 5 cards (because he has no life points, so 'missing life' is treated as 4)."
    ],
    "aliases": [
      "Bill No-Face",
      "BillNoFace",
      "NoFace",
      "Bill",
      "Bill Noface"
    ]
  },
  "Black Flower": {
    "life_points": 4,
    "expansion": "Valley of Shadows",
    "official_text": "You may use a Clubs card as a BANG! in addition to your normal one BANG! per turn.",
    "notes": [
      "This grants one extra possible BANG!, not unlimited BANG! plays.",
      "The extra BANG! must come from a Clubs-suit card."
    ],
    "aliases": [
      "BlackFlower",
      "Flower",
      "Black Flower"
    ]
  },
  "Black Jack": {
    "life_points": 4,
    "expansion": "Base",
    "official_text": "In Phase 1, he reveals the second card he draws; if it’s Hearts or Diamonds, he draws 1 extra card.",
    "notes": [
      "Works only if he actually draws a second card in Phase 1.",
      "If an effect reduces his draw so he only draws 1 card in Phase 1, there is no 'second card' to reveal, so the ability does nothing."
    ],
    "aliases": [
      "BlackJack",
      "Jack",
      "Black Jack"
    ]
  },
  "Calamity Janet": {
    "life_points": 4,
    "expansion": "Base",
    "official_text": "She may play BANG! as Missed! and Missed! as BANG!.",
    "notes": [
      "Normal play restrictions still apply: if an effect forbids playing BANG!, treating a Missed! as BANG! is still blocked.",
      "If she plays a Missed! as a BANG!, it counts as playing a BANG! for limits like the normal 1 BANG!/turn (unless something like Volcanic changes it).",
      "Duel: she can respond using Missed! as BANG!."
    ],
    "aliases": [
      "Janet",
      "Calamity",
      "CalamityJanet",
      "Calamity Janet"
    ]
  },
  "Chuck Wengam": {
    "life_points": 4,
    "expansion": "Dodge City",
    "official_text": "During his turn, he may lose 1 life point to draw 2 cards; he may repeat, but cannot reduce himself to 0 life by doing so.",
    "notes": [
      "Ghost Town: Chuck can use Beer to gain a life, which he may then spend for cards; he is eliminated after his turn regardless of his life count.",
      "If his turn is skipped or he otherwise cannot act (no usable turn), he cannot use this ability."
    ],
    "aliases": [
      "Chuck",
      "Wengam",
      "ChuckWengam",
      "Chuck Wengam"
    ]
  },
  "Colorado Bill": {
    "life_points": 4,
    "expansion": "Valley of Shadows",
    "official_text": "Each time you play a BANG!, you 'draw!'; if it is Spades, the shot cannot be avoided.",
    "notes": [
      "A Spades result bypasses Missed!, Barrel, and Jourdonnais’ ability (those defences do not work against that shot)."
    ],
    "aliases": [
      "ColoradoBill",
      "Colorado",
      "Bill",
      "Colorado Bill"
    ]
  },
  "Der Spot-Burst Ringer": {
    "life_points": 4,
    "expansion": "Valley of Shadows",
    "official_text": "Once during your turn, you may use a BANG! card as a Gatling.",
    "notes": [
      "The BANG! used this way does not count toward the 'one BANG! per turn' limit."
    ],
    "aliases": [
      "Spot-Burst Ringer",
      "Der Spot Burst Ringer",
      "DerSpotBurstRinger",
      "Spot Burst Ringer"
    ]
  },
  "Doc Holyday": {
    "life_points": 4,
    "expansion": "Dodge City",
    "official_text": "Once during his turn, he may discard any 2 cards to produce the effect of a BANG! against a target in range; this does not count toward the 1 BANG!/turn limit.",
    "notes": [
      "Still needs a legal target in range.",
      "It is a BANG!-type effect, so normal cancellation responses apply.",
      "Apache Kid interaction: if targeting Apache Kid this way, at least one discarded card must not be Diamonds."
    ],
    "aliases": [
      "Doc Holliday",
      "DocHolyday",
      "Holyday",
      "Doc",
      "Holliday",
      "Doc Holyday"
    ]
  },
  "El Gringo": {
    "life_points": 3,
    "expansion": "Base",
    "official_text": "Each time he loses 1 life due to a card played by another player, he draws 1 random card from that player’s hand (one per life).",
    "notes": [
      "Triggers only when an opponent’s card directly causes the life loss.",
      "Does not trigger if the life loss is not caused by a player (e.g., Dynamite), or is caused by a card he played himself.",
      "If El Gringo plays Duel and loses, his ability does not trigger (he played the Duel)."
    ],
    "aliases": [
      "Gringo",
      "ElGringo",
      "El Gringo"
    ]
  },
  "Elena Fuente": {
    "life_points": 3,
    "expansion": "Dodge City",
    "official_text": "She may play any card from her hand as Missed!.",
    "notes": [
      "Cancels BANG!-style attacks where Missed! is normally valid.",
      "Does not help in Duel: Duel requires BANG! responses, not Missed!."
    ],
    "aliases": [
      "Elene Fuente",
      "ElenaFuente",
      "Elena",
      "Fuente",
      "Elena Fuente"
    ]
  },
  "Evelyn Shebang": {
    "life_points": 4,
    "expansion": "Valley of Shadows",
    "official_text": "During your draw phase, you may skip drawing 0, 1, or 2 cards; for each card skipped, you shoot a BANG! at a different reachable target.",
    "notes": [
      "You must decide before drawing whether to skip 0, 1, or 2 cards (no peeking then deciding).",
      "Targets must be different and within normal distance rules."
    ],
    "aliases": [
      "Evelyn",
      "EvelynShebang",
      "Shebang",
      "Evelyn Shebang"
    ]
  },
  "Flint Westwood": {
    "life_points": 4,
    "expansion": "Wild West Show",
    "official_text": "Once per turn, during his turn, he may trade 1 card from his hand with up to 2 random cards from another player’s hand.",
    "notes": [
      "The card Flint gives is his choice, not random.",
      "If the target has only 1 card, Flint takes only 1.",
      "Ability can be used only on his turn and only once per turn."
    ],
    "aliases": [
      "Flint",
      "Flintwestwood",
      "Flint West Wood",
      "WestWood",
      "Westwood"
    ]
  },
  "Gary Looter": {
    "life_points": 5,
    "expansion": "Wild West Show",
    "official_text": "He draws all excess cards discarded by other players at the end of their turn.",
    "notes": [
      "Only triggers on end-of-turn hand-limit discards.",
      "Does not collect cards discarded during a turn for other reasons."
    ],
    "aliases": [
      "Gary",
      "Looter",
      "GaryLooter",
      "Gary Looter"
    ]
  },
  "Greg Digger": {
    "life_points": 4,
    "expansion": "Dodge City",
    "official_text": "Each time another character is eliminated, he regains 2 life points (up to his maximum).",
    "notes": [
      "Triggers per elimination, including multiple eliminations.",
      "Ghost Town: when a ghost later 'leaves play' again, that counts as being eliminated again for Greg’s trigger."
    ],
    "aliases": [
      "Greg",
      "Digger",
      "GregDigger",
      "Greg Digger"
    ]
  },
  "Greygory Deck": {
    "life_points": 4,
    "expansion": "Wild West Show",
    "official_text": "At the start of his turn, he may draw 2 characters at random and gains all their abilities.",
    "notes": [
      "Only base-game characters may be drawn.",
      "At the start of each of his turns (including game start), he may either keep the same two characters or replace both with two new ones.",
      "Partial replacement is not allowed."
    ],
    "aliases": [
      "Gregory Deck",
      "GreygoryDeck",
      "Deck",
      "Greygory",
      "Greygory Deck"
    ]
  },
  "Henry Block": {
    "life_points": 4,
    "expansion": "Valley of Shadows",
    "official_text": "Whenever another player draws or discards one of your cards (from hand or in play), that player becomes the target of a BANG!.",
    "notes": [
      "Works against Panic! and Cat Balou.",
      "The BANG! is resolved before the card is actually taken or discarded; the draw/discard happens only after the BANG! is resolved.",
      "Triggers against Jesse Jones’ or Pat Brennan’s draw replacements.",
      "Does not trigger on automatic abilities like El Gringo’s."
    ],
    "aliases": [
      "HenryBlock",
      "Henry",
      "Block",
      "Henry Block"
    ]
  },
  "Herb Hunter": {
    "life_points": 4,
    "expansion": "Dodge City",
    "official_text": "Each time another character is eliminated, he draws 2 cards.",
    "notes": [
      "Ghost Town: when a ghost later 'leaves play' again, that counts as being eliminated again for Herb’s trigger.",
      "Stacks with Outlaw rewards if the elimination also grants those."
    ],
    "aliases": [
      "Herb",
      "Hunter",
      "HerbHunter",
      "Herb Hunter"
    ]
  },
  "Jesse Jones": {
    "life_points": 4,
    "expansion": "Base",
    "official_text": "In Phase 1, he may draw his first card from the deck or randomly from another player’s hand; his second draw is from the deck.",
    "notes": [
      "If the chosen player has no hand cards, he draws from the deck."
    ],
    "aliases": [
      "Jesse",
      "Jones",
      "JesseJones",
      "Jesse Jones"
    ]
  },
  "John Pain": {
    "life_points": 4,
    "expansion": "Wild West Show",
    "official_text": "If he has fewer than 6 cards in hand, each time any player 'draws!', John adds the drawn card to his hand.",
    "notes": [
      "Triggers only on explicit 'draw!' checks (Barrel, Dynamite, Jail, etc.), not normal card draws.",
      "Cards gained this way cannot be used immediately during the resolving effect.",
      "Example: a Beer gained this way cannot save him if he simultaneously loses his last life."
    ],
    "aliases": [
      "JohnPain",
      "John",
      "Pain",
      "John Pain"
    ]
  },
  "Jose Delgado": {
    "life_points": 4,
    "expansion": "Dodge City",
    "official_text": "During his turn, he may discard a blue-bordered card from hand to draw 2 cards; he may do this twice per turn.",
    "notes": [
      "The 'twice per turn' limit is an official erratum/clarification.",
      "This is discarding a blue card from hand (not playing it into play)."
    ],
    "aliases": [
      "Jose",
      "JoseDelgado",
      "Delgado",
      "Jose Delgado"
    ]
  },
  "Jourdonnais": {
    "life_points": 4,
    "expansion": "Base",
    "official_text": "He is considered to have a Barrel in play at all times.",
    "notes": [
      "When targeted by a BANG!, he may 'draw!' like Barrel.",
      "Can stack with a real Barrel for two separate Barrel-style 'draw!' checks.",
      "Versus Slab the Killer: a successful Barrel-style cancel counts as only 1 Missed!, so Slab still requires another Missed! to fully cancel."
    ],
    "aliases": [
      "Jourdonnais"
    ]
  },
  "Kit Carlson": {
    "life_points": 4,
    "expansion": "Base",
    "official_text": "In Phase 1, he looks at the top 3 cards of the deck, takes 2 into hand, and puts the remaining card back on top face down.",
    "notes": [
      "If an effect changes how many cards he draws in Phase 1, the 'look at 3' remains, but how many he keeps can change accordingly."
    ],
    "aliases": [
      "Kit",
      "Carlson",
      "KitCarlson",
      "Kit Carlson"
    ]
  },
  "Lee Van Kliff": {
    "life_points": 4,
    "expansion": "Wild West Show",
    "official_text": "During his turn, he may discard a BANG! to repeat the effect of a brown-bordered card he just played.",
    "notes": [
      "The brown card may itself be another BANG!.",
      "Each effect may be repeated only once.",
      "If repeating Stagecoach or Wells Fargo, Wild West Show 'change' effects apply only the first time.",
      "The repeated effect counts as one played card for effects like Miss Susanna."
    ],
    "aliases": [
      "LeeVanKliff",
      "Van Kliff",
      "Lee",
      "VanKliff",
      "Lee Van Kliff"
    ]
  },
  "Lemonade Jim": {
    "life_points": 4,
    "expansion": "Valley of Shadows",
    "official_text": "Each time another player plays a Beer, you may discard 1 card to regain 1 life point.",
    "notes": [
      "Optional each time a Beer is played by someone else."
    ],
    "aliases": [
      "LemonadeJim",
      "Lemonade",
      "Jim",
      "Lemonade Jim"
    ]
  },
  "Lucky Duke": {
    "life_points": 4,
    "expansion": "Base",
    "official_text": "Whenever he must 'draw!', he flips 2 cards and chooses one result; then discards both.",
    "notes": [
      "Applies to every separate 'draw!' check (Barrel, Dynamite, Jail, etc.)."
    ],
    "aliases": [
      "Lucky",
      "LuckyDuke",
      "Duke",
      "Lucky Duke"
    ]
  },
  "Mick Defender": {
    "life_points": 4,
    "expansion": "Valley of Shadows",
    "official_text": "If you are the target of a brown card (not BANG!), you may play a Missed! to avoid its effect.",
    "notes": [
      "Works against multi-player attacks like Gatling and Indians.",
      "The Missed! prevents the effect only on you, not on other players."
    ],
    "aliases": [
      "Mick",
      "MickDefender",
      "Defender",
      "Mick Defender"
    ]
  },
  "Molly Stark": {
    "life_points": 4,
    "expansion": "Dodge City",
    "official_text": "Each time she plays or voluntarily discards a Missed!, Beer, or BANG! when it is not her turn, she draws 1 card.",
    "notes": [
      "Does not apply to involuntary discards (e.g., Panic! or Cat Balou).",
      "In Duel, her draw from out-of-turn BANG!/discard happens after the Duel ends (not in the middle)."
    ],
    "aliases": [
      "Molly",
      "MollyStark",
      "Stark",
      "Molly Stark"
    ]
  },
  "Pat Brennan": {
    "life_points": 4,
    "expansion": "Dodge City",
    "official_text": "In Phase 1, instead of drawing 2 from the deck, he may draw 1 card from any player’s in-play cards.",
    "notes": [
      "This is an either/or replacement: either draw 2 from the deck, or draw 1 from the table.",
      "The taken card goes into his hand as a drawn card."
    ],
    "aliases": [
      "Pat",
      "PatBrennan",
      "Brennan",
      "Pat Brennan"
    ]
  },
  "Paul Regret": {
    "life_points": 3,
    "expansion": "Base",
    "official_text": "He is always at +1 distance to other players (as if he had Mustang).",
    "notes": [
      "Stacks with a real Mustang for +2."
    ],
    "aliases": [
      "Paul",
      "Regret",
      "PaulRegret",
      "Paul Regret"
    ]
  },
  "Pedro Ramirez": {
    "life_points": 4,
    "expansion": "Base",
    "official_text": "In Phase 1, he may draw his first card from the discard pile instead of the deck; his second draw is from the deck.",
    "notes": [
      "If the discard pile is empty, he draws from the deck by necessity.",
      "Still applies if he returns temporarily via effects that give him a turn."
    ],
    "aliases": [
      "Pedro",
      "Ramirez",
      "PedroRamirez",
      "Pedro Ramirez"
    ]
  },
  "Pixie Pete": {
    "life_points": 3,
    "expansion": "Dodge City",
    "official_text": "In Phase 1, he draws 3 cards instead of 2.",
    "notes": [
      "Ghost Town: Pixie Pete starts his ghost turn with 3 cards (his normal draw).",
      "High Noon: during Thirst or Train Arrival he draws 2 and 4 cards respectively."
    ],
    "aliases": [
      "Pixie",
      "PixiePete",
      "Pete",
      "Pixie Pete"
    ]
  },
  "Rose Doolan": {
    "life_points": 4,
    "expansion": "Base",
    "official_text": "She always sees other players at -1 distance (as if she had Scope).",
    "notes": [
      "Stacks with a real Scope/Binocular for -2."
    ],
    "aliases": [
      "Rose",
      "Doolan",
      "RoseDoolan",
      "Rose Doolan"
    ]
  },
  "Sean Mallory": {
    "life_points": 3,
    "expansion": "Dodge City",
    "official_text": "In Phase 3, his hand limit is 10 cards.",
    "notes": [
      "If he has 11 or more cards, he discards down to 10.",
      "If his ability is suppressed, he reverts to the normal hand limit rule."
    ],
    "aliases": [
      "Sean",
      "SeanMallory",
      "Mallory",
      "Sean Mallory"
    ]
  },
  "Sid Ketchum": {
    "life_points": 4,
    "expansion": "Base",
    "official_text": "At any time, he may discard 2 cards from hand to regain 1 life point.",
    "notes": [
      "Can be used outside his turn, including to avoid elimination, if he can pay the 2-card discard cost."
    ],
    "aliases": [
      "Sid",
      "SidKetchum",
      "Ketchum",
      "Sid Ketchum"
    ]
  },
  "Slab the Killer": {
    "life_points": 4,
    "expansion": "Base",
    "official_text": "To cancel his BANG! cards, the target needs 2 Missed!.",
    "notes": [
      "Applies only to BANG! cards, not to effects that are not BANG! cards.",
      "Barrel-style cancels still count as only 1 Missed! toward the two required.",
      "Gatling requires only 1 Missed! even if Slab played it (because Gatling is not a BANG! card)."
    ],
    "aliases": [
      "Slab",
      "SlabTheKiller",
      "Slab The Killer",
      "The Killer",
      "Killer"
    ]
  },
  "Suzy Lafayette": {
    "life_points": 4,
    "expansion": "Base",
    "official_text": "As soon as she has no cards in hand, she draws 1 card.",
    "notes": [
      "Triggers only after fully resolving the action that emptied her hand (no mid-effect 'interrupt draws').",
      "Duel: if she plays her last card during Duel, she does not draw immediately; she draws only after the Duel is fully resolved."
    ],
    "aliases": [
      "Suzy",
      "SuzyLafayette",
      "Lafayette",
      "Suzy Lafayette"
    ]
  },
  "Tequila Joe": {
    "life_points": 4,
    "expansion": "Dodge City",
    "official_text": "Each time he plays a Beer, he regains 2 life points instead of 1.",
    "notes": [
      "Applies only to the Beer card itself, not to other healing effects."
    ],
    "aliases": [
      "Tequila",
      "TequilaJoe",
      "Joe",
      "Tequila Joe"
    ]
  },
  "Teren Kill": {
    "life_points": 3,
    "expansion": "Wild West Show",
    "official_text": "Each time he would be eliminated, he 'draw!'; if the card is not Spades, he stays at 1 life point and draws 1 card, otherwise he is eliminated.",
    "notes": [
      "The +1 life and +1 card on a non-Spade is official.",
      "If the draw is Spades, he cannot play Beer to save himself."
    ],
    "aliases": [
      "TerenKill",
      "Teren",
      "Kill",
      "Teren Kill"
    ]
  },
  "Tuco Franziskaner": {
    "life_points": 5,
    "expansion": "Valley of Shadows",
    "official_text": "During your draw phase, if you have no blue cards in play, draw 2 extra cards.",
    "notes": [
      "Applies on the first turn as well.",
      "With no blue cards in play, he draws 4 cards total instead of 2.",
      "If he has even one blue card in play, the bonus is lost."
    ],
    "aliases": [
      "Tuco",
      "TucoFranziskaner",
      "Franziskaner",
      "Tuco Franziskaner"
    ]
  },
  "Vera Custer": {
    "life_points": 3,
    "expansion": "Dodge City",
    "official_text": "At the start of her turn, before drawing, she chooses a living character and copies that character’s ability until her next turn.",
    "notes": [
      "Copies one ability for the whole round; if the chosen character dies later, the copied ability remains until her next turn.",
      "There are specific rulings for copying Vulture Sam regarding who takes eliminated players’ cards when Vulture Sam is present."
    ],
    "aliases": [
      "Vera",
      "VeraCuster",
      "Custer",
      "Vera Custer"
    ]
  },
  "Vulture Sam": {
    "life_points": 4,
    "expansion": "Base",
    "official_text": "Whenever a player is eliminated, he takes in hand all that player’s cards (from hand and in play).",
    "notes": [
      "If Vulture Sam is eliminated by Dynamite, he does not take his own cards.",
      "If someone else is eliminated by Dynamite, Vulture Sam does take their cards.",
      "If Vulture Sam, as the Sheriff eliminates the Deputy, the Deputy’s cards are discarded as penalty, so Vulture Sam gets nothing from that elimination."
    ],
    "aliases": [
      "Sam",
      "VultureSam",
      "Vulture",
      "Vulture Sam"
    ]
  },
  "Willy the Kid": {
    "life_points": 4,
    "expansion": "Base",
    "official_text": "He can play any number of BANG! cards on his turn.",
    "notes": [
      "Still must follow range rules.",
      "Does not bypass separate restrictions that forbid BANG! entirely."
    ],
    "aliases": [
      "Willy",
      "WillyTheKid",
      "The Kid",
      "Willy The Kid"
    ]
  },
  "Youl Grinner": {
    "life_points": 4,
    "expansion": "Wild West Show",
    "official_text": "Before drawing, players with more hand cards than him must give him 1 card of their choice.",
    "notes": [
      "Happens before his normal draw.",
      "Only affects players with strictly more hand cards than Youl.",
      "Giving player chooses which card to give."
    ],
    "aliases": [
      "YoulGrinner",
      "Grinner",
      "Youl",
      "Youl Grinner"
    ]
  }
};

const BROWN = {
  "Aim": {
    "official_text": "Play together with a Bang! card. If the target is hit, they lose 2 life instead of 1.",
    "notes": [
      "The target avoids it with the normal defence for a Bang effect; no extra defences are required just because Aim is attached."
    ],
    "aliases": [
      "Aim",
      "Mira",
      "AIM"
    ]
  },
  "Backfire": {
    "official_text": "Counts as a Missed!. The player who shot becomes the target of a Bang effect.",
    "notes": [
      "Playable only when a Bang effect is aimed at you.",
      "The return shot is a normal Bang effect and can be cancelled normally by the shooter’s defence."
    ],
    "aliases": [
      "Backfire",
      "Ritorno di Fiamma",
      "Ritorno di fiamma",
      "Ritorno"
    ]
  },
  "Bandidos": {
    "official_text": "Each player chooses: discard 2 cards from hand (or 1 if they only have 1), or lose 1 life.",
    "notes": [
      "If you have 0 cards, you cannot discard, so you must lose 1 life.",
      "Affects everyone, including the player who played it (unless your edition rules say otherwise)."
    ],
    "aliases": [
      "Bandidos"
    ]
  },
  "Bang!": {
    "official_text": "Choose a player in range. They must cancel it with a valid defence or lose 1 life.",
    "notes": [
      "You can play only 1 Bang! card per turn unless a rule/card explicitly changes that (e.g., Volcanic)."
    ],
    "aliases": [
      "Bang!",
      "Bang",
      "BANG",
      "BANG!"
    ]
  },
  "Beer": {
    "official_text": "Regain 1 life (up to your starting life).",
    "notes": [
      "The only healing card you may use immediately when you are losing your last life to avoid elimination.",
      "Other healing cards (Saloon, Tequila, Whisky, Canteen, etc.) cannot be used as last-second saves like Beer.",
      "Beer has no effect with only 2 players left."
    ],
    "aliases": [
      "Beer",
      "Birra"
    ]
  },
  "Brawl": {
    "official_text": "Discard Brawl + 1 other card from your hand. Then all other players discard 1 card (you decide for each player whether it’s random from hand or a chosen in-play card).",
    "notes": [
      "No distance limit.",
      "If a player has no cards at all, they discard nothing."
    ],
    "aliases": [
      "Brawl",
      "Rissa"
    ]
  },
  "Cat Balou": {
    "official_text": "Choose any player; discard 1 random card from their hand or choose and discard 1 in-play card in front of them.",
    "notes": [
      "No distance limit.",
      "Can remove in-play cards (e.g., Jail, Dynamite, green cards) before they trigger or get used."
    ],
    "aliases": [
      "Cat Balou",
      "CatBalou",
      "Balou"
    ]
  },
  "Dodge": {
    "official_text": "Counts as a Missed! effect, then draw the top card of the deck into your hand.",
    "notes": [
      "Works as defence against any Bang-symbol attack.",
      "After cancelling, you still draw the card."
    ],
    "aliases": [
      "Dodge",
      "Schivata"
    ]
  },
  "Duel": {
    "official_text": "Target player discards a Bang! card, then you discard a Bang! card, alternating. First player who fails loses 1 life.",
    "notes": [
      "High Noon (Sermon): if you start a Duel on your turn during Sermon, you cannot use Bang! cards on your turn, so you will be unable to discard when it becomes your step and you will lose 1 life if your opponent can discard at least once."
    ],
    "aliases": [
      "Duel",
      "Duello"
    ]
  },
  "Escape": {
    "official_text": "May be played out of turn. Avoid the effects of a brown card (other than Bang!) that includes you as a target.",
    "notes": [
      "Cancels the effect only on you; it does not stop the card from affecting other players.",
      "Official clarifications treat it as usable versus multi-player brown attacks (e.g., Gatling, Indians) for your own protection."
    ],
    "aliases": [
      "Escape",
      "Fuga"
    ]
  },
  "Fanning": {
    "official_text": "Counts as your normal Bang! per turn. Also targets one additional player of your choice who is at distance 1 from the first target (excluding you) with a Bang effect.",
    "notes": [
      "The second shot is mandatory and is fired even if the first shot is cancelled."
    ],
    "aliases": [
      "Fanning",
      "Sventagliata"
    ]
  },
  "Gatling": {
    "official_text": "A Bang effect against all other players (each may defend or lose 1 life).",
    "notes": [
      "Gatling is not a 'Bang! card', so it does not consume your '1 Bang! card per turn' limit."
    ],
    "aliases": [
      "Gatling"
    ]
  },
  "General Store": {
    "official_text": "Reveal as many cards as players. Starting with you and then clockwise, each player takes 1 card into hand.",
    "notes": [
      "No interruptions mid-selection; complete the entire store selection, then the turn continues."
    ],
    "aliases": [
      "General Store",
      "GeneralStore",
      "Emporio",
      "Store"
    ]
  },
  "Indians!": {
    "official_text": "All other players discard a Bang! card or lose 1 life.",
    "notes": [
      "This is not a Bang attack, so normal Bang defences do not apply unless something explicitly allows it."
    ],
    "aliases": [
      "Indians!",
      "Indians",
      "Indiani!",
      "Indiani"
    ]
  },
  "Last Call": {
    "official_text": "Regain 1 life. It is not counted as Beer.",
    "notes": [
      "Cannot be used as a last-second save like Beer.",
      "Playable even with 2 players left because the 2-player restriction is specific to Beer."
    ],
    "aliases": [
      "Last Call",
      "LastCall",
      "Ultimo Giro",
      "Ultimo giro",
      "UltimoGiro"
    ]
  },
  "Missed!": {
    "official_text": "Cancel a Bang effect aimed at you.",
    "notes": [
      "Cancels one Bang effect instance.",
      "Cannot be used against effects that do not use the Bang/Missed interaction unless a rule says otherwise."
    ],
    "aliases": [
      "Missed!",
      "Missed",
      "Mancato!",
      "Mancato"
    ]
  },
  "Panic!": {
    "official_text": "Choose a player at distance 1. Take 1 random card from their hand or choose 1 in-play card in front of them and take it into your hand.",
    "notes": [
      "Taking an in-play card (including Dynamite, Jail, green cards) puts it into your hand; you decide later what to do with it on your turn."
    ],
    "aliases": [
      "Panic!",
      "Panic",
      "Panico!",
      "Panico"
    ]
  },
  "Poker": {
    "official_text": "All other players discard 1 card from hand simultaneously. If no Ace was discarded, you draw up to 2 of those discarded cards.",
    "notes": [
      "If even one Ace is among the discarded cards, you take zero cards from the pile."
    ],
    "aliases": [
      "Poker"
    ]
  },
  "Punch": {
    "official_text": "A Bang effect against any one player at distance 1. Does not count as Bang!.",
    "notes": [
      "Still defended like a normal Bang effect."
    ],
    "aliases": [
      "Punch",
      "Pugno"
    ]
  },
  "Rag Time": {
    "official_text": "Discard Rag Time + 1 other card from hand. Draw 1 card from any one player, regardless of distance (random from hand or choose from in-play), into your hand.",
    "notes": [
      "If the target has no cards at all, you gain nothing."
    ],
    "aliases": [
      "Rag Time",
      "RagTime",
      "Ragtime"
    ]
  },
  "Saloon": {
    "official_text": "All players regain 1 life (up to their starting life).",
    "notes": [
      "Not usable as a last-second save like Beer.",
      "With 2 players, it heals both players."
    ],
    "aliases": [
      "Saloon"
    ]
  },
  "Saved!": {
    "official_text": "May be played out of turn. Prevent another player from losing 1 life. If they survive, draw 2 cards either from their hand or from the deck (depending on your edition/choice).",
    "notes": [
      "Official clarifications allow using it to prevent damage you dealt to yourself (self-inflicted loss)."
    ],
    "aliases": [
      "Saved!",
      "Saved",
      "Salvo!",
      "Salvo"
    ]
  },
  "Springfield": {
    "official_text": "Discard Springfield + 1 other card from hand to apply a Bang effect to any chosen player, regardless of distance.",
    "notes": [
      "This is a Bang effect card, not a 'Bang! card', so it does not consume the '1 Bang! card per turn' limit."
    ],
    "aliases": [
      "Springfield"
    ]
  },
  "Stagecoach": {
    "official_text": "Draw 2 cards from the deck.",
    "notes": [
      "Wild West Show: official rulings treat Stagecoach (and Wells Fargo) as triggers that advance the Wild West Show event deck."
    ],
    "aliases": [
      "Stagecoach",
      "StageCoach",
      "Diligenza"
    ]
  },
  "Tequila": {
    "official_text": "Discard Tequila + 1 other card from hand. Any chosen player (including you) regains 1 life (up to their starting life).",
    "notes": [
      "Cannot be used out of turn as a death save."
    ],
    "aliases": [
      "Tequila"
    ]
  },
  "Tomahawk": {
    "official_text": "A Bang effect with maximum distance 2. Does not count as a Bang!.",
    "notes": [
      "Can still be used at distance 1."
    ],
    "aliases": [
      "Tomahawk"
    ]
  },
  "Tornado": {
    "official_text": "Each player discards 1 card from hand (if possible), then draws 2 cards from the deck.",
    "notes": [
      "If a player has no card to discard, they still draw 2."
    ],
    "aliases": [
      "Tornado"
    ]
  },
  "Wells Fargo": {
    "official_text": "Draw 3 cards from the deck.",
    "notes": [
      "Wild West Show: official rulings treat Wells Fargo (and Stagecoach) as triggers that advance the Wild West Show event deck."
    ],
    "aliases": [
      "Wells Fargo",
      "WellsFargo",
      "Fargo"
    ]
  },
  "Whisky": {
    "official_text": "Discard Whisky + 1 other card from hand. You regain 2 life (up to your starting life).",
    "notes": [
      "Cannot be used out of turn as a death save."
    ],
    "aliases": [
      "Whisky",
      "Whiskey"
    ]
  }
};

const BLUE = {
  "Barrel": {
    "official_text": "When you are the target of a Bang effect, you may 'draw!': if Hearts, it counts as a Missed effect.",
    "notes": [
      "Works only on Bang-symbol attacks (not on requirements to discard a Bang! card, such as Indians! or Duel)."
    ],
    "aliases": [
      "Barrel",
      "Barile"
    ]
  },
  "Binocular": {
    "official_text": "You view all other players at distance -1.",
    "notes": [
      "Stacks with other distance modifiers of different names."
    ],
    "aliases": [
      "Binocular",
      "Binoculars",
      "Binocolo"
    ]
  },
  "Bounty": {
    "official_text": "Play on any player. If that player is hit by a Bang! card, the shooter draws 1 card from the deck.",
    "notes": [
      "Triggers only when a real Bang! card hits (not Punch, Knife, Tomahawk, Gatling, etc.).",
      "If Aim makes the Bang deal 2, it is still only one 'hit' for Bounty."
    ],
    "aliases": [
      "Bounty",
      "Taglia"
    ]
  },
  "Dynamite": {
    "official_text": "At the start of your turn, 'draw!': on Spades 2–9, lose 3 life and discard it; otherwise pass it left (clockwise).",
    "notes": [
      "If it doesn’t explode, pass it to the first player on your left who does not already have a Dynamite.",
      "Start-of-turn ordering can interact with other hazards; follow your ruleset’s official ordering."
    ],
    "aliases": [
      "Dynamite",
      "Dinamite"
    ]
  },
  "Ghost": {
    "official_text": "Play on an eliminated player. That player returns to the game but cannot gain or lose life points (has no life points).",
    "notes": [
      "The ghost draws and plays normally, but cannot gain or lose life points.",
      "In Ghost Town context, official ghost rules force discarding all hand cards at the end of the ghost’s turn."
    ],
    "aliases": [
      "Ghost",
      "Fantasma"
    ]
  },
  "Hideout": {
    "official_text": "Other players view you at distance +1.",
    "notes": [
      "Stacks with other different-name distance increasers."
    ],
    "aliases": [
      "Hideout",
      "Riparo"
    ]
  },
  "Jail": {
    "official_text": "Play in front of a target (normally not the Sheriff). At the start of their turn, they 'draw!': if Hearts, discard Jail and they play normally; otherwise discard Jail and they skip the entire turn.",
    "notes": [
      "Standard rule forbids jailing the Sheriff; some variants remove the Sheriff role, in which case Jail can be played on anyone."
    ],
    "aliases": [
      "Jail",
      "Prigione"
    ]
  },
  "LeMat": {
    "official_text": "Weapon. During your turn, you may use any card in your hand as a Bang! card.",
    "notes": [
      "The card you use counts as a Bang! card, so it is limited by the normal 'one Bang! per turn' unless something else changes that."
    ],
    "aliases": [
      "LeMat",
      "Le Mat"
    ]
  },
  "Mustang": {
    "official_text": "Other players view you at distance +1.",
    "notes": [
      "Stacks with Hideout (different names)."
    ],
    "aliases": [
      "Mustang"
    ]
  },
  "Rattlesnake": {
    "official_text": "Play on any player. At the beginning of their turn, they 'draw!': on Spades, they lose 1 life point.",
    "notes": [
      "Official ordering is Dynamite, then Jail, then Rattlesnake.",
      "Rattlesnake stays in play after triggering unless removed."
    ],
    "aliases": [
      "Rattlesnake",
      "Serpente a Sonagli",
      "Serpente a sonagli",
      "Serpente"
    ]
  },
  "Scope": {
    "official_text": "You view other players at distance -1.",
    "notes": [
      "Stacks with Binocular (different names)."
    ],
    "aliases": [
      "Scope",
      "Mirino"
    ]
  },
  "Shotgun": {
    "official_text": "Each time you hit a player, they must discard a card of their choice from their hand.",
    "notes": [
      "Weapon. 'Hit' means the attack was not cancelled.",
      "If the target cancels the Bang effect, no discard happens."
    ],
    "aliases": [
      "Shotgun"
    ]
  },
  "Schofield": {
    "official_text": "Weapon, distance 2.",
    "notes": [
      "Only one weapon can be in play in front of you; playing a new weapon replaces the old one."
    ],
    "aliases": [
      "Schofield"
    ]
  },
  "Remington": {
    "official_text": "Weapon, distance 3.",
    "notes": [
      "Only one weapon can be in play in front of you; playing a new weapon replaces the old one."
    ],
    "aliases": [
      "Remington"
    ]
  },
  "Rev. Carabine": {
    "official_text": "Weapon, distance 4.",
    "notes": [
      "Range modifies only what is 'in range' for attacks, not cards that specify their own distance rules."
    ],
    "aliases": [
      "Rev. Carabine",
      "Rev Carabine",
      "Rev. Carbine",
      "Rev Carbine",
      "Reverend Carabine",
      "Carabine",
      "Carbine"
    ]
  },
  "Winchester": {
    "official_text": "Weapon, distance 5.",
    "notes": [
      "Only one weapon can be in play in front of you; playing a new weapon replaces the old one."
    ],
    "aliases": [
      "Winchester"
    ]
  },
  "Volcanic": {
    "official_text": "Weapon, distance 1. You may play any number of Bang! cards.",
    "notes": [
      "This changes only the Bang! card limit; it does not change other restrictions printed on other cards."
    ],
    "aliases": [
      "Volcanic"
    ]
  }
};

const GREEN = {
  "Bible": {
    "official_text": "Discard from play to get a Missed effect, then draw the top card of the deck into your hand.",
    "notes": [
      "Green version of Dodge.",
      "Because it is green, you must play it a turn earlier; it can be removed before it ever saves you."
    ],
    "aliases": [
      "Bible",
      "Bibbia"
    ]
  },
  "Buffalo Rifle": {
    "official_text": "Discard from play to apply a Bang effect to any chosen player, regardless of distance.",
    "notes": [
      "Still a Bang effect, so it is defended normally.",
      "If removed before use, it does nothing."
    ],
    "aliases": [
      "Buffalo Rifle",
      "BuffaloRifle",
      "Fucile da Caccia",
      "Fucile da caccia",
      "Fucile",
      "Rifle"
    ]
  },
  "Can-Can": {
    "official_text": "Discard from play to force any player to discard 1 card (random from hand or choose an in-play card).",
    "notes": [
      "If the target has no cards, it does nothing."
    ],
    "aliases": [
      "Can-Can",
      "Can Can",
      "CanCan"
    ]
  },
  "Canteen": {
    "official_text": "Discard from play to regain 1 life (only the user).",
    "notes": [
      "Cannot be used out of turn like Beer."
    ],
    "aliases": [
      "Canteen",
      "Borraccia"
    ]
  },
  "Conestoga": {
    "official_text": "Discard from play to draw 1 card from any one player regardless of distance (random from hand or choose from in-play), into your hand.",
    "notes": [
      "If the target has no cards at all, you gain nothing."
    ],
    "aliases": [
      "Conestoga"
    ]
  },
  "Derringer": {
    "official_text": "Discard from play to apply a Bang effect to a player at distance 1, then draw the top card of the deck into your hand.",
    "notes": [
      "The draw is part of the effect of using the card."
    ],
    "aliases": [
      "Derringer"
    ]
  },
  "Howitzer": {
    "official_text": "Discard from play to apply a Bang effect to all other players, regardless of distance.",
    "notes": [
      "Green version of Gatling.",
      "Each target defends individually as usual."
    ],
    "aliases": [
      "Howitzer"
    ]
  },
  "Iron Plate": {
    "official_text": "Discard from play to get a Missed effect.",
    "notes": [
      "One stored defence.",
      "If you need multiple defences against multiple separate Bang effects, one Iron Plate covers only one."
    ],
    "aliases": [
      "Iron Plate",
      "IronPlate",
      "Placca di Ferro",
      "Placca di ferro",
      "Placca"
    ]
  },
  "Knife": {
    "official_text": "Discard from play to apply a Bang effect to any one player at distance 1.",
    "notes": [
      "Still defended like a Bang effect."
    ],
    "aliases": [
      "Knife",
      "Pugnale"
    ]
  },
  "Pepperbox": {
    "official_text": "Discard from play to apply a Bang effect to any one player, provided they are within reachable distance.",
    "notes": [
      "Reachable distance uses your current range after all distance modifiers."
    ],
    "aliases": [
      "Pepperbox"
    ]
  },
  "Pony Express": {
    "official_text": "Discard from play to draw 3 cards from the deck into your hand.",
    "notes": [
      "Green version of Wells Fargo.",
      "If removed before use, you get nothing."
    ],
    "aliases": [
      "Pony Express",
      "PonyExpress"
    ]
  },
  "Sombrero": {
    "official_text": "Discard from play to get a Missed effect.",
    "notes": [
      "Pre-loaded defence.",
      "Only usable starting from the next turn after you play it."
    ],
    "aliases": [
      "Sombrero"
    ]
  },
  "Ten Gallon Hat": {
    "official_text": "Discard from play to get a Missed effect.",
    "notes": [
      "Same timing and vulnerability rules as Sombrero."
    ],
    "aliases": [
      "Ten Gallon Hat",
      "TenGallonHat",
      "Cappello",
      "Hat"
    ]
  }
};

const EVENTS = {
  "Blessing": {
    "expansion": "High Noon",
    "official_text": "All cards are considered Hearts (♥).",
    "notes": [
      "Barrels always succeed automatically.",
      "Dynamite will never explode while this event is active."
    ],
    "aliases": [
      "Benedizione",
      "Blessing (Benedizione)"
    ]
  },
  "Curse": {
    "expansion": "High Noon",
    "official_text": "All cards are considered Spades (♠).",
    "notes": [
      "Barrels automatically fail.",
      "Dynamite explodes on any draw from 2 to 9."
    ],
    "aliases": [
      "Maledizione",
      "Curse (Maledizione)"
    ]
  },
  "The Daltons": {
    "expansion": "High Noon",
    "official_text": "When entered, each player who has blue cards in play must choose and discard one.",
    "notes": [
      "Triggers immediately upon being revealed.",
      "If a player has no blue cards in play, they are unaffected."
    ],
    "aliases": [
      "I Dalton",
      "Daltons",
      "The Daltons (I Dalton)"
    ]
  },
  "The Doctor": {
    "expansion": "High Noon",
    "official_text": "When entered, the player(s) with the fewest current life points recover 1 life point.",
    "notes": [
      "Triggers immediately upon being revealed.",
      "If multiple players are tied for the lowest life points, all of them recover 1 life."
    ],
    "aliases": [
      "Il Dottore",
      "Doctor",
      "The Doctor (Il Dottore)"
    ]
  },
  "Ghost Town": {
    "expansion": "High Noon",
    "official_text": "Eliminated players return to the game as ghosts during their turn only.",
    "notes": [
      "Ghosts draw 3 cards instead of 2 during Phase 1.",
      "They cannot be eliminated during their turn.",
      "They discard all cards and return to being dead as soon as their turn ends."
    ],
    "aliases": [
      "Città Fantasma",
      "Ghost Town (Città Fantasma)"
    ]
  },
  "Gold Rush": {
    "expansion": "High Noon",
    "official_text": "The game proceeds counter-clockwise, starting from the Sheriff.",
    "notes": [
      "Turn order reverses completely.",
      "Card-specific directions (like passing cards via General Store) still move clockwise."
    ],
    "aliases": [
      "Corsa all'Oro",
      "Gold Rush (Corsa all'Oro)"
    ]
  },
  "Hangover": {
    "expansion": "High Noon",
    "official_text": "All characters lose their special abilities.",
    "notes": [
      "Suppresses both active and passive character abilities for the entire round."
    ],
    "aliases": [
      "Sbornia",
      "Hangover (Sbornia)"
    ]
  },
  "Shootout": {
    "expansion": "High Noon",
    "official_text": "Each player may play one additional BANG! card during their turn.",
    "notes": [
      "Allows players to play up to 2 BANG! cards per turn naturally."
    ],
    "aliases": [
      "Sparatoria",
      "Shootout (Sparatoria)"
    ]
  },
  "The Reverend": {
    "expansion": "High Noon",
    "official_text": "Players cannot play Beer cards.",
    "notes": [
      "Bans healing via Beer completely for the round."
    ],
    "aliases": [
      "Il Reverendo",
      "Reverend",
      "The Reverend (Il Reverendo)"
    ]
  },
  "The Sermon": {
    "expansion": "High Noon",
    "official_text": "Players cannot play BANG! cards during their turn.",
    "notes": [
      "Using BANG! cards out of turn (e.g., responding to Indians! or a Duel) is still permitted."
    ],
    "aliases": [
      "Il Predicatore",
      "Sermon",
      "The Sermon (Il Predicatore)"
    ]
  },
  "Thirst": {
    "expansion": "High Noon",
    "official_text": "Players draw 1 less card during Phase 1.",
    "notes": [
      "Reduces the standard Phase 1 draw down to 1 card."
    ],
    "aliases": [
      "Sete",
      "Thirst (Sete)"
    ]
  },
  "Train Arrival": {
    "expansion": "High Noon",
    "official_text": "Players draw 1 extra card during Phase 1.",
    "notes": [
      "Increases the standard Phase 1 draw up to 3 cards."
    ],
    "aliases": [
      "Arrivo del Treno",
      "Train Arrival (Arrivo del Treno)"
    ]
  },
  "High Noon": {
    "expansion": "High Noon",
    "official_text": "At the start of their turn, each player loses 1 life point.",
    "notes": [
      "This is the final card and stays active permanently until the game ends.",
      "Can eliminate a player at the very start of their turn before they can act."
    ],
    "aliases": [
      "Mezzogiorno di Fuoco",
      "High Noon (Mezzogiorno di Fuoco)"
    ]
  },
  "Abandoned Mine": {
    "expansion": "A Fistful of Cards",
    "official_text": "During Phase 1, players must draw their cards face-up from the discard pile.",
    "notes": [
      "If the discard pile runs out, players draw the remaining required cards from the main deck."
    ],
    "aliases": [
      "Miniera Abbandonata",
      "Abandoned Mine (Miniera Abbandonata)"
    ]
  },
  "Ambush": {
    "expansion": "A Fistful of Cards",
    "official_text": "The base distance between all players is considered exactly 1.",
    "notes": [
      "Seating arrangements are ignored for distance rules.",
      "Modifying cards like Mustangs, Scopes, and Weapons still alter this base value normally."
    ],
    "aliases": [
      "Imboscata",
      "Ambush (Imboscata)"
    ]
  },
  "Blood Brothers": {
    "expansion": "A Fistful of Cards",
    "official_text": "At the start of their turn, a player may choose to give 1 of their life points to any other player.",
    "notes": [
      "The player must have more than 1 life point remaining to use this ability."
    ],
    "aliases": [
      "Fratelli di Sangue",
      "Blood Brothers (Fratelli di Sangue)"
    ]
  },
  "Dead Man": {
    "expansion": "A Fistful of Cards",
    "official_text": "On their turn, the first player who was eliminated returns to the game with 2 life points and 2 cards.",
    "notes": [
      "Applies strictly to the very first player eliminated in the match."
    ],
    "aliases": [
      "Il Morto",
      "Dead Man",
      "DeadMan",
      "Il Morto (Dead Man)"
    ]
  },
  "Hard Liquor": {
    "expansion": "A Fistful of Cards",
    "official_text": "A player may choose to skip Phase 1 entirely to instantly regain 1 life point.",
    "notes": [
      "Forfeits drawing cards for the turn in exchange for healing 1 point."
    ],
    "aliases": [
      "Liquore Forte",
      "Hard Liquor (Liquore Forte)"
    ]
  },
  "Lasso": {
    "expansion": "A Fistful of Cards",
    "official_text": "All cards in play (blue-bordered and green-bordered) lose their effects for the round.",
    "notes": [
      "Temporarily disables all equipped weapons, barrels, and items on the table."
    ],
    "aliases": [
      "Lasso",
      "Lasso (Lasso)"
    ]
  },
  "Law of the West": {
    "expansion": "A Fistful of Cards",
    "official_text": "During Phase 1, players must reveal the second card they draw; if it can be legally played, they must play it.",
    "notes": [
      "If the card cannot be legally played on their turn, it is kept in hand normally."
    ],
    "aliases": [
      "Legge del West",
      "Law of the West (Legge del West)"
    ]
  },
  "Peyote": {
    "expansion": "A Fistful of Cards",
    "official_text": "In Phase 1, the player guesses the suit color (Red/Black) before drawing each card.",
    "notes": [
      "If correct, the player keeps the card and guesses again.",
      "If wrong, the card is discarded and Phase 1 ends immediately."
    ],
    "aliases": [
      "Peyote",
      "Peyote (Peyote)"
    ]
  },
  "Ranch": {
    "expansion": "A Fistful of Cards",
    "official_text": "At the end of Phase 1, you may discard any number of cards from your hand to draw an equal amount of replacements.",
    "notes": [
      "Can only be performed once per turn at the conclusion of drawing."
    ],
    "aliases": [
      "Ranch",
      "Ranch (Ranch)"
    ]
  },
  "Ricochet": {
    "expansion": "A Fistful of Cards",
    "official_text": "A player can discard a BANG! card to target any card in play; it is discarded unless the owner plays a Missed!.",
    "notes": [
      "Allows targeted discarding of an opponent's table assets unless they burn a defensive card."
    ],
    "aliases": [
      "Rimbalzo",
      "Ricochet",
      "Rimbalzo (Ricochet)"
    ]
  },
  "Russian Roulette": {
    "expansion": "A Fistful of Cards",
    "official_text": "When entered, starting from the Sheriff and moving clockwise, each player must discard a Missed! or lose 2 life points.",
    "notes": [
      "Triggers immediately upon reveal.",
      "The effect ends instantly as soon as one player fails to discard and takes the 2 damage."
    ],
    "aliases": [
      "Roulette Russa",
      "Russian Roulette (Roulette Russa)"
    ]
  },
  "Sniper": {
    "expansion": "A Fistful of Cards",
    "official_text": "A player can discard 2 BANG! cards together to target an opponent; it requires 2 Missed! cards to cancel.",
    "notes": [
      "Functions identically to a standard shot from Slab the Killer."
    ],
    "aliases": [
      "Cecchino",
      "Sniper",
      "Cecchino (Sniper)"
    ]
  },
  "The Judge": {
    "expansion": "A Fistful of Cards",
    "official_text": "Players cannot play cards in front of themselves or any other player.",
    "notes": [
      "Bans any new blue or green cards from entering play for the round."
    ],
    "aliases": [
      "Il Giudice",
      "The Judge",
      "Judge",
      "Il Giudice (The Judge)"
    ]
  },
  "Vendetta": {
    "expansion": "A Fistful of Cards",
    "official_text": "At the end of their turn, a player 'draws!': if Hearts (♥), they immediately take another complete turn.",
    "notes": [
      "Allows players to chain multiple consecutive turns if they get lucky checks."
    ],
    "aliases": [
      "Vendetta",
      "Vendetta (Vendetta)"
    ]
  },
  "A Fistful of Cards": {
    "expansion": "A Fistful of Cards",
    "official_text": "At the start of their turn, the active player is targeted by a number of BANG! shots equal to the number of cards in their hand.",
    "notes": [
      "This is the final card and stays active permanently until the game ends.",
      "Each individual shot must be resolved and defended against sequentially."
    ],
    "aliases": [
      "Per un Pugno di Carte",
      "A Fistful of Cards (Per un Pugno di Carte)"
    ]
  },
  "Bone Orchard": {
    "expansion": "Wild West Show",
    "official_text": "Eliminated players return to the game permanently with 1 life point.",
    "notes": [
      "Returned players stay alive even after this event card is later replaced by another Wild West Show card."
    ],
    "aliases": [
      "Cimitero",
      "Bone Orchard (Cimitero)"
    ]
  },
  "Darling Valentine": {
    "expansion": "Wild West Show",
    "official_text": "At the start of their turn, players discard their hand and draw a new hand of equal size plus 2 cards.",
    "notes": [
      "Completely recycles a player's hand options right before their turn actions."
    ],
    "aliases": [
      "Darling Valentine",
      "Darling Valentine (Darling Valentine)"
    ]
  },
  "Dorothy Rage": {
    "expansion": "Wild West Show",
    "official_text": "On their turn, the active player may name a card; if an opponent has it, they must play it immediately as directed.",
    "notes": [
      "The active player chooses who targets whom with the forced card.",
      "If the opponent claims they do not have the card, they must reveal their hand as proof."
    ],
    "aliases": [
      "Dorothy Rage",
      "Dorothy Rage (Dorothy Rage)"
    ]
  },
  "Gag": {
    "expansion": "Wild West Show",
    "official_text": "No players are allowed to talk. Anyone who speaks out loud loses 1 life point.",
    "notes": [
      "Forces complete table silence. Accidental talking deals automatic damage."
    ],
    "aliases": [
      "Silenzio",
      "Gag",
      "Gag (Silenzio)"
    ]
  },
  "Helena Zontero": {
    "expansion": "Wild West Show",
    "official_text": "When entered, all players 'draw!': on Hearts (♥) or Diamonds (♦), they randomly swap their role card with an unused one from the box.",
    "notes": [
      "Triggers immediately when revealed. Shifts alignment goals mid-game."
    ],
    "aliases": [
      "Helena Zontero",
      "Helena Zontero (Helena Zontero)"
    ]
  },
  "Lady Rose of Texas": {
    "expansion": "Wild West Show",
    "official_text": "On their turn, a player may physically switch seats with the player sitting to their right.",
    "notes": [
      "Alters layout configurations and changes targeting distances instantly."
    ],
    "aliases": [
      "Lady Rose of Texas",
      "Lady Rose of Texas (Lady Rose of Texas)"
    ]
  },
  "Miss Susanna": {
    "expansion": "Wild West Show",
    "official_text": "Players must play at least 3 cards on their turn or they lose 1 life point.",
    "notes": [
      "This restriction does not apply if the active player is trapped in Jail."
    ],
    "aliases": [
      "Miss Susanna",
      "Miss Susanna (Miss Susanna)"
    ]
  },
  "Sacagaway": {
    "expansion": "Wild West Show",
    "official_text": "All players must play with their entire hand laid completely face-up on the table.",
    "notes": [
      "Removes hand secrecy completely for the duration of the event."
    ],
    "aliases": [
      "Sacagaway",
      "Sacagaway (Sacagaway)"
    ]
  },
  "Showdown": {
    "expansion": "Wild West Show",
    "official_text": "Every card in a player's hand can be played as if it were a standard BANG! card.",
    "notes": [
      "Turns utility cards, defenses, and equipment into offensive capabilities."
    ],
    "aliases": [
      "Showdown",
      "Showdown (Showdown)"
    ]
  },
  "Wild West Show": {
    "expansion": "Wild West Show",
    "official_text": "Secret roles are inverted: every player adopts the Renegade win condition (be the last survivor alive).",
    "notes": [
      "This is the final card of the deck and stays active permanently.",
      "The game no longer ends if the Sheriff is eliminated; victory is purely individual."
    ],
    "aliases": [
      "Wild West Show",
      "Wild West Show (Wild West Show)"
    ]
  }
};

const CATEGORY_RULES = {
  "green": {
    "rule": "Green cards are played in front of you and cannot be used the same turn. To use them later, discard them from play to get their effect. Only green cards with a Missed! symbol can be used out of turn."
  }
};

const DB = { characters: CHARACTERS, brown: BROWN, blue: BLUE, green: GREEN, events: EVENTS, category_rules: CATEGORY_RULES };