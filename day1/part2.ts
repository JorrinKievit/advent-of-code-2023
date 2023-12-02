import { getInput } from "../inputs/get-input";

const VALID_STRING_NUMBERS: Record<string, string> = {
	zero: "0",
	one: "1",
	two: "2",
	three: "3",
	four: "4",
	five: "5",
	six: "6",
	seven: "7",
	eight: "8",
	nine: "9",
};

const lines = getInput("day1.txt");

const totalSum = lines
	.map((line) => {
		const numbers = [];
		for (const stringNumber of Object.keys(VALID_STRING_NUMBERS)) {
			const matches = [...line.matchAll(new RegExp(stringNumber, "g"))];

			for (const match of matches) {
				numbers.push({
					value: Number(VALID_STRING_NUMBERS[stringNumber]),
					index: match.index ?? 0,
				});
			}
		}

		for (let i = 0; i < line.length; i++) {
			if (!Number.isNaN(parseInt(line[i] ?? ""))) {
				numbers.push({
					value: parseInt(line[i] ?? ""),
					index: i,
				});
			}
		}

		numbers.sort((a, b) => a.index - b.index);

		return parseInt(
			String(numbers[0]?.value) + String(numbers[numbers.length - 1]?.value),
		);
	})
	.reduce((acc, curr) => {
		return acc + curr;
	}, 0);

console.log("Answer: ", totalSum);
