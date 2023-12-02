import { getInput } from "../inputs/get-input";

const lines = getInput("day2.txt");

let totalSum = 0;
for (const line of lines) {
	const highestCubeAmount = {
		red: 0,
		green: 0,
		blue: 0,
	};
	const turns = line.split(":")[1]?.split(";") ?? [];

	for (const turn of turns) {
		const cubes = turn.split(", ");
		for (const cube of cubes) {
			const [cubeNumber, cubeColor] = cube.trim().split(" ");
			const cubeNumberInt = parseInt(cubeNumber ?? "");
			const cubeColorKey = cubeColor as keyof typeof highestCubeAmount;
			if (cubeNumberInt > highestCubeAmount[cubeColorKey]) {
				highestCubeAmount[cubeColorKey] = cubeNumberInt;
			}
		}
	}
	totalSum += Object.values(highestCubeAmount).reduce(
		(acc, cur) => acc * cur,
		1,
	);
}
console.log("Answer: ", totalSum);
