import { readFileSync } from "fs";

type Days =
	| 1
	| 2
	| 3
	| 4
	| 5
	| 6
	| 7
	| 8
	| 9
	| 10
	| 11
	| 12
	| 13
	| 14
	| 15
	| 16
	| 17
	| 18
	| 19
	| 20
	| 21
	| 22
	| 23
	| 24
	| 25;

type FileNames = `day${Days}`;
type FileNamesWithExtension = `${FileNames}.txt` | "test.txt";

export const getInput = (name: FileNamesWithExtension): string[] => {
	return readFileSync(`${__dirname}\\${name}`, "utf-8").split("\n");
};
