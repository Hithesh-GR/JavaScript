/*************************************************************************************************
 *  @Purpose        : To print the cards received by 4 players using 2D array.          
 *  @file           : deckOfCards.js
 *  @overview       : To initialize deck of cards having suit and Rank then shuffle the cards using 
                      Random method and then distribute 9 Cards to 4 Players and Print the Cards the 
                      received by the 4 Players.
 *  @author         : HITHESH G R
 *  @version        : v8.15.0
 *  @since          : 18-01-2019
 ***************************************************************************************************/
/**
 * Initialize deck of cards having suit and Rank then shuffle the cards using Random  method and
 * then distribute 9 Cards to 4 Players and Print the Cards the received by the 4 Players
 * @param suits @param values,to shuffle the cards using random method
 */
function deckOfCards() {
    var suits = ["♣️", "♦️", "♥️", "♠️"];
    var values = ["King", "Queen", "Jack", "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    /**
     * to calculate length of suits and values
     */
    var n = suits.length * values.length;
    /**
     * to create new array of deck
     */
    var deck = new Array(n);
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < suits.length; j++) {
            /**
             * print value of suits and rank in array
             */
            deck[suits.length * i + j] = values[i] + suits[j];
        }
    }
    /**
     * shuffle deck
     */
    for (i = 0; i < n; i++) {
        /**
         * parsing random method
         */
        var r = i + parseInt(Math.random() * (n - i));
        /**
         * swapping
         */
        var temp = deck[r];
        deck[r] = deck[i];
        deck[i] = temp;
    }
    /**
     * print shuffled deck
     */
    for (let i = 0; i < 4; i++) {
        console.log();
        /**
         * cards received by each player
         */
        console.log("cards recieved by player no. " + (i + 1));
        for (let j = 0; j < 9; j++) {
            var arr = [[],[],[],[]];
            /**
             * push each randomly calculated array values
             */
            arr.push(deck[i + j * 4]);
            console.log(arr);
        }
    }
}
deckOfCards();
