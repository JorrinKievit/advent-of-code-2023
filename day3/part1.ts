import { getInput } from "../inputs/get-input";

const lines = getInput("day3.txt");

type Symbol = {
	text: string;
	xStart: number;
	xEnd: number;
	y: number;
};

const adj = (a: Symbol, b: Symbol) => {
	return (
		a.y - 1 <= b.y && a.y + 1 >= b.y && a.xStart <= b.xEnd && a.xEnd >= b.xStart
	);
};

const part1 = () => {
	const numbers: Symbol[] = lines.flatMap((line, y) => {
		const numberMatches = line.trim().matchAll(/\d+/g);
		const numberArray: Symbol[] = [];

		for (const match of numberMatches) {
			const text = match[0];
			const xStart = match.index ?? 0;
			const xEnd = xStart + text.length;
			numberArray.push({ text, xStart, xEnd, y });
		}
		console.log(numberArray);
		return numberArray;
	});
	const operators: Symbol[] = lines.flatMap((line, y) => {
		const operatorMatches = line.trim().matchAll(/[^.\d]/g);
		const operatorArray: Symbol[] = [];

		for (const match of operatorMatches) {
			const text = match[0];
			const xStart = match.index ?? 0;
			const xEnd = xStart + text.length;
			operatorArray.push({ text, xStart, xEnd, y });
		}
		console.log(operatorArray);
		return operatorArray;
	});
	return numbers
		.filter((n) => operators.some((o) => adj(n, o)))
		.map((n) => parseInt(n.text))
		.reduce((a, b) => a + b, 0);
};
console.log(part1());
