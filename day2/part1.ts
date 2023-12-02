import { getInput } from "../inputs/get-input";

const lines = getInput("day2.txt");

type ColorKey = "red" | "green" | "blue";

const ALLOWED_CUBES: Record<ColorKey, number> = {
	red: 12,
	green: 13,
	blue: 14,
};

let totalGameNumber = 0;
for (const line of lines) {
	const gameNumber = parseInt(line.split("Game ")?.[1]?.split(":")[0] ?? "");
	const turns = line.split(":")[1]?.split(";") ?? [];

	const validTurns = [];
	for (const turn of turns) {
		const cubes = turn.split(", ");
		for (const cube of cubes) {
			const [cubeNumber, cubeColor] = cube.trim().split(" ");
			validTurns.push(
				parseInt(cubeNumber ?? "") <=
					ALLOWED_CUBES[cubeColor as keyof typeof ALLOWED_CUBES],
			);
		}
	}
	if (validTurns.every((turn) => turn)) totalGameNumber += gameNumber;
}
console.log("Answer: ", totalGameNumber);
