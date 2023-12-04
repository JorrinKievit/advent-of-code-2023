import { getInput } from "../inputs/get-input";

const lines = getInput("day4.txt");

let totalAmount = 0;
const cardInstances: { count: number; matches: number }[] = [];
for (const line of lines) {
	const winningNumbers = line.split("|")[0]?.split(":")[1]?.trim().split(" ");
	const cardInput = line
		.split("|")[1]
		?.trim()
		.split(" ")
		.filter((n) => n);

	const intersection =
		winningNumbers?.filter((n) => cardInput?.includes(n)) ?? [];
	const matchesCount = intersection?.length ?? 0;

	// part 1
	const amount = matchesCount === 0 ? 0 : 2 ** (matchesCount ?? 1) / 2;
	totalAmount += amount;

	// part 2
	cardInstances.push({ count: 1, matches: matchesCount });
}
// part 1
console.log("Total Amount: ", totalAmount);

// part 2
for (let i = 0; i < cardInstances.length; i++) {
	// biome-ignore lint/style/noNonNullAssertion: <explanation>
	for (let j = 0; j < cardInstances[i]?.matches!; j++) {
		// biome-ignore lint/style/noNonNullAssertion: <explanation>
		cardInstances[i + j + 1]!.count! += cardInstances[i]!.count;
	}
}
console.log(
	"Total Amount: ",
	cardInstances.reduce((a, b) => a + b.count, 0),
);
