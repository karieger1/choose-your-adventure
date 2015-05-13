function* chooseYourAdventure() {
//	console.log(yield adventure.say('Hey there!'));
//	console.log(yield adventure.say('Woah', 'This is cool'));
//	console.log(yield adventure.ask('Woah', 'This is cool'));
//	console.log(yield adventure.choose('Woah', 'This is cool'));
//	console.log(yield adventure.say('That\'s all folks!', 'THE END'));

yield adventure.say("Welcome to Miami, bitch.");

var spiritAnimal= yield adventure.ask("What's your spirit animal?");

yield adventure.say("A "  + spiritAnimal + "? Seriously, bruh?");

var myWeapon = yield adventure.choose (
	"You're stranded on a desert island. What's the square root of pi?",
	"lightsaber",
	"18",
	"your mom",
	"a fucking tiger");


}