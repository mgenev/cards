// Handler for .ready() called.
var stack1 = new Stack();
var player1 = new Player('martin');
var player2 = new Player('johnny');

stack1.makeDeck(1);
stack1.shuffle(3);
showCardCount();

$('.deck .hand').append(stack1.cards[0].createDomNode());

function showCardCount() {
	$('.cardCount').text(stack1.cardCount());	
} 

$('.draw').click(function () {    
	var player = Number($(this).data('player'));

	if (player === 1) {
		player1.getCard(stack1);		
		$('.player1 .hand').append(player1.hand[player1.hand.length-1].createDomNode());
		showCardCount();
	} else if (player === 2) {
		player2.getCard(stack1);
		$('.player2 .hand').append(player2.hand[player2.hand.length-1].createDomNode());
		showCardCount();
	}
		
	$('.deck .hand').append(stack1.cards[0].createDomNode());
});