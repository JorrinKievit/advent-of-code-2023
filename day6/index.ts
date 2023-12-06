import { getInput } from "../inputs/get-input";

const lines = getInput("day6.txt", true);

const numbersForPart1 = lines
	.map((line) => line.split(":")[1]?.trim())
	.map((n) => n!.split(/ +/).map(Number));

const numbersForPart2 = lines.map((line) =>
	Number(line.split(":")![1]?.replace(/ /g, "")),
);

const distance = (holdTime: number, duration: number) => {
	return (duration - holdTime) * holdTime;
};

const p1 = numbersForPart1[0]!
	.map((n) =>
		Array(n)
			.fill(0)
			.map((_, i) => distance(i, n)),
	)
	.map((r, i) => r.filter((d) => d > numbersForPart1[1]![i]!))
	.reduce((a, b) => a * b.length, 1);

console.log("Answer: ", p1);

const part2 = Array.from({ length: numbersForPart2[0]! + 1 }, (_, i) =>
	distance(i, numbersForPart2[0]!),
)
	.map<number>((d) => (d > numbersForPart2[1]! ? 1 : 0))
	.reduce((acc, val) => acc + val, 0);

console.log("Answer: ", part2);
