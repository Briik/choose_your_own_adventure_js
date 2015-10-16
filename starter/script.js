var move = 'script';
function getMove() {
  prompt("Please input a Move: up, down, left, right, flashlight");
  return move;
}
var game = function(move){
  var rooms = ['bedroom', 'hallway', 'livingroom', 'bathroom', 'kitchen', 'shrew'];
  console.log(rooms);
  var playerName = prompt("Please enter a name...");
  var player = {
    name: playerName,
    location: rooms[0],
    flashlight: false
  }
  console.log("Welcome, " + playerName + "!");
  console.log("You have awoken from a deep trance, having spent all night programming your text-based RPG. Sadly, you did not have time to recreate Zork. :(");
  if (player.location === rooms[0]){
    console.log("You are on a bed, your laptop's battery is dead, and there is a deep pain in your gut.  It is dark, and you cannot see your way.  The space feels familiar - probably the apartment you just moved into and don't know the layout of yet.");
  } else if (player.location == rooms[1]) {
    console.log("You exit into a hallway. You remember that your room is down from here, with something to the left and right of it.");
  } else if (player.location == rooms[2]) {
    console.log("You stub your toe on the couch and resent upgrading from a futon. You are in the livingroom. The hallway is to the right, and a dim light emanates from below you - that means down.");
  } else if (player.location == room[3]) {
    console.log("The dim light you followed is the blinking from your heretofore lost Roomba's low-battery light.  You did notice a flashlight on the floor. You have taken the flashlight");
    player.flashlight = true;
  } else if (player.location == room[4]) {
    if (player.flashlight == false) {
      console.log("It's too dark in here to see anything! If you venture further without light you are likely to be eaten by a shrew.");
    } else if (player.flashlight == true) {
      console.log("The miniscule ammount of light you had been relying on to get you this far fades as you enter a larger room. You turn on your flashlight and see that you are in the kitchen. You proceed to eat and immediately pass into a food-coma. Congrats.");
    }
  }
  getMove();

}
game();
