// window.onload = function(){
//   var user = prompt("Please enter your name", "Player 1")
//   while (user == null) {
//     user = prompt("Please enter your name", "Player 1")
//   }
//   var testDiv = byId('test');

//   testDiv.innerHTML = 'Hello '+ user
// };

function myShittySecurity(input) {
  //input password
  //input player 1 or 2
  
}

function byId(a) {
  return document.getElementById(a);
};

function draw(player) {
  //draw one card
}

function gain(type, x, player) {
  player[type] += x;
}

function gainAction(x, player) {
  gain('action', x, player)
}

function gainMoney(x, player) {
  gain('mmoney', x, player);
}

function drawX(x, player) {
  for(var i = 0; i < x; i++) {
    draw(player);
  }
}

function gainVictory(x, player, end) {
  if(end) {
    gain('victory', x, player);
  }
}

window.onload = function() {
  var gameStart = true;
  var card_lib = {
    Copper: {
      name: 'Copper',
      cost: 0,
      type: 'Treasure',
      text: '(1)',
      effect: gainMoney(1,player)
    },
    Curse: {
      name: 'Curse',
      cost: 0,
      type: 'Curse',
      text: '[-1]',
      effect: gainVictory(-1,player,gameStart)
    },
    Estate: {
      name: 'Estate',
      cost: 2,
      type: 'Victory',
      text: '[1]',
      effect: gainVictory(1,player,gameStart)
    },
    Silver: {
      name: 'Silver',
      cost: 3,
      type: 'Treasure',
      text: '(2)',
      effect: gainMoney(2,player)
    },
    Duchy: {
      name: 'Duchy',
      cost: 5,
      type: 'Victory',
      text: '[3]',
      effect: gainVictory(3,player,gameStart)
    },
    Gold: {
      name: 'Gold',
      cost: 6,
      type: 'Treasure',
      text: '(3)',
      effect: gainMoney(3,player)
    },
    Province: {
      name: 'Province',
      cost: 8,
      type: 'Victory',
      text: '[6]',
      effect: gainVictory(6,player,gameStart)
    },

    Celler: {
      name: 'Celler',
      cost: 2,
      type: 'Action',
      text: '<b>+1 Action</b>\n\nDiscard any number of cards, then draw that many.',
      effect: celler(player)
    },
    Chapel: {
      name: 'Chapel',
      cost: 2,
      type: 'Action',
      text: 'Trash up to 4 cards from your hand',
      effect: chapel(player)
    },
    Moat: {
      name: 'Moat',
      cost: 2,
      type: 'Action - Reaction',
      text: '<b>+2 Cards</b><br><span class="reactionLine"></span><br>When another player plays an Attack card, you may first reveal this from your hand, to be unaffected by it.',
      effect: moat(player)
    },

    Harbinger: {
      name: 'Harbinger',
      cost: 3,
      type: 'Action',
      text: '<b>+1 Card</b><br><b>+1 Action</b><br><br>Look through yoru discard pile. You may put a card from it onto your deck.',
      effect: harbinger(player)
    },

    Merchant: {
      name: 'Merchant',
      cost: 3,
      type: 'Action',
      text: '<b>+1 Card</b><br><b>+1 Action</b><br><br>The first time yo uplay a Silver this turn, +(1)',
      effect: merchant(player)
    },

    Vassal: {
      name: 'Vassal',
      cost: 3,
      type: 'Action',
      text: '+(2)<br><br>Discard the top card of your deck. If it'+"'"+'s an Action card, you may play it',
      effect: vassal(player)
    },
    Village: {
      name: 'Village',
      cost: 3,
      type: 'Action',
      text: '<b>+1 Card</b><br><b>+2 Action</b>',
      effect: village(player)
    },
    Workshop: {
      name: 'Workshop',
      cost: 3,
      type: 'Action',
      text: 'Gain a card costing up to (4)',
      effect: workshop(player)
    },
    Bureaucrat: {
      name: 'Bureaucrat',
      cost: 4,
      type: 'Action - Attack',
      text: 'Gain a Silver onto your deck. Each other player reveals a Victory card from their hand and puts it onto their deck (or reveals a hand with no Victory cards).',
      effect: bureaucrat(player)
    },
    Gardens: {
      name: 'Gardens',
      cost: 4,
      type: 'Victory',
      text: 'Worth [1] per 10 cards yo uhave (round down).',
      effect: gardens(player)
    },
    Militia: {
      name: 'Militia',
      cost: 4,
      type: 'Action - Attack',
      text: '+(2)<br><br>Each other player discards down to 3 cards in hand.',
      effect: militia(player)
    },
    Moneylender: {
      name: 'Moneylender',
      cost: 4,
      type: 'Action',
      text: 'You may trash a Copper from your hand for +(3)',
      effect: moneylender(player)
    },
    Poacher: {
      name: 'Poacher',
      cost: 4,
      type: 'Action',
      text: '<b>+1 Card</b><br><b>+1 Action</b><br>+(1)<br><br>Discard a card per empty Supply pile.',
      effect: poacher(player)
    },
    Remodel: {
      name: 'Remodel',
      cost: 4,
      type: 'Action',
      text: 'Trash a card from your hand. Gain a card costing up to (2) more than it.',
      effect: remodel(player)
    },
    Smithy: {
      name: 'Smithy',
      cost: 4,
      type: 'Action',
      text: '<b>+3 Cards</b>',
      effect: smithy(player)
    },
    ThroneRoom: {
      name: 'Throne Room',
      cost: 4,
      type: 'Action',
      text: 'You may play an Action card from your hand twice',
      effect: throneRoom(player)
    },
    Bandit: {
      name: 'Bandit',
      cost: 5,
      type: 'Action - Attack',
      text: 'Gain a Gold. Each other player reveals the top 2 cards of their deck, trashes a revealed Treasure other than Copper, and discards the rest.',
      effect: bandit(player)
    },
    CouncilRoom: {
      name: 'Council Room',
      cost: 5,
      type: 'Action',
      text: '<b>+4 Cards</b><br><b>+1 Buy</b><br><br>Each other player draws a card.',
      effect: councilRoom(player)
    },
    Festival: {
      name: 'Festival',
      cost: 5,
      type: 'Action',
      text: '<b>+2 Actions</b><br><b>+1 Buy</b><br>+(2)',
      effect: festival(player)
    },
    Laboratory: {
      name: 'Laboratory',
      cost: 5,
      type: 'Action',
      text: '<b>+2 Card</b><br><b>+1 Action</b>',
      effect: laboratory(player)
    },
    Library: {
      name: 'Library',
      cost: 5,
      type: 'Action',
      text: 'Draw until you have 7 cards in hand, skipping any Action cards yo ushoose to; set those aside, discarding them afterwards.',
      effect: library(player)
    },
    Market: {
      name: 'Market',
      cost: 5,
      type: 'Action',
      text: '<b>+1 Card</b><br><b>+1 Action</b><br><b>+1 Buy</b><br>+(1)',
      effect: market(player)
    },
    Mine: {
      name: 'Mine',
      cost: 5,
      type: 'Action',
      text: 'You may trash a Treasure from your hand. Gain a Treasure to your hand costing up to (3) more than it.',
      effect: mine(player)
    },
    Sentry: {
      name: 'Sentry',
      cost: 5,
      type: 'Action',
      text: '<b>+1 Card</b><br><b>+1 Action</b><br><br>Look at the top 2 cards of your deck. Trash and/or discard any number of them. Put the rest back on top in any order.',
      effect: sentry(player)
    },
    Witch: {
      name: 'Witch',
      cost: 5,
      type: 'Action - Attack',
      text: '<b>+w Cards</b><br>Each other player gains a Curse.',
      effect: witch(player)
    },
    Artisan: {
      name: 'Artisan',
      cost: 6,
      type: 'Action',
      text: 'Gain a card to your hand costing up to (5).<br><br> Put a card from your hand onto your deck.',
      effect: artisan(player)
    }
  }
  
  var gameState = {
    turn: 0,

  }
}