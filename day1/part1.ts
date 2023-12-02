import { getInput } from "../inputs/get-input";

const lines = getInput("day1.txt");

let totalSum = 0;

for (const line of lines) {
	let firstDigit: string | undefined;
	let lastDigit: string | undefined;

	for (const char of line) {
		if (Number.isInteger(parseInt(char))) {
			if (!firstDigit) {
				firstDigit = char;
			}
			lastDigit = char;
		}
	}
	if (firstDigit && lastDigit) {
		totalSum += parseInt(firstDigit + lastDigit);
	}
}
console.log("Answer: ", totalSum);
