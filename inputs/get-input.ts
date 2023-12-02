import { readFileSync } from "fs";

type FileNames = "day1" | "day2";
type FileNamesWithExtension = `${FileNames}.txt`;

export const getInput = (name: FileNamesWithExtension): string[] => {
	return readFileSync(`${__dirname}\\${name}`, "utf-8").split("\n");
};
