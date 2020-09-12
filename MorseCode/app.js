MORSE_CODE = {
	"-.-.--": "!",
	".-..-.": '"',
	"...-..-": "$",
	".-...": "&",
	".----.": "'",
	"-.--.": "(",
	"-.--.-": ")",
	".-.-.": "+",
	"--..--": ",",
	"-....-": "-",
	".-.-.-": ".",
	"-..-.": "/",
	"-----": "0",
	".----": "1",
	"..---": "2",
	"...--": "3",
	"....-": "4",
	".....": "5",
	"-....": "6",
	"--...": "7",
	"---..": "8",
	"----.": "9",
	"---...": ":",
	"-.-.-.": ";",
	"-...-": "=",
	"..--..": "?",
	".--.-.": "@",
	".-": "A",
	"-...": "B",
	"-.-.": "C",
	"-..": "D",
	".": "E",
	"..-.": "F",
	"--.": "G",
	"....": "H",
	"..": "I",
	".---": "J",
	"-.-": "K",
	".-..": "L",
	"--": "M",
	"-.": "N",
	"---": "O",
	".--.": "P",
	"--.-": "Q",
	".-.": "R",
	"...": "S",
	"-": "T",
	"..-": "U",
	"...-": "V",
	".--": "W",
	"-..-": "X",
	"-.--": "Y",
	"--..": "Z",
	"..--.-": "_",
	"...---...": "SOS"
};
let decodeMorse = function(morseCode) {
	let i = 0;
	while (morseCode[i] == " ") i++;
	morseCode = morseCode.slice(i);
	i = morseCode.length - 1;
	while (morseCode[i] == " ") i--;
	morseCode = morseCode.slice(0, i + 1);

	let temp = morseCode.split("   ");

	temp = temp.map(function translate(value) {
		value = value.split(" ");
		console.log(value);
		value = value.map(function(value) {
			value = MORSE_CODE[value];
			return value;
		});
		console.log(value);

		return value.join("");
	});

	return temp.join(" ");
};

console.log(
	decodeMorse("                   ... --- ...   ...                      ")
);
