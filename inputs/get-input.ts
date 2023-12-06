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

export const getInput = <T extends boolean>(
	name: FileNamesWithExtension,
	shoudSplit: T,
): T extends true ? string[] : string => {
	const data = readFileSync(`./inputs/${name}`, "utf-8");
	return (shoudSplit ? data.split("\n") : data) as T extends true
		? string[]
		: string;
};
