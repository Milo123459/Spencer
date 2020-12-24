import { promisify } from 'util';
import { readFile, writeFile } from 'fs';
import glob from 'glob';
import consola from 'consola';
const globPromise = promisify(glob);
const readPromise = promisify(readFile);
const writePromise = promisify(writeFile);
const check = (content: string, thingsToCheck: string[]) => {
	const res: string[] = [];
	thingsToCheck.map((value: string) => {
		if (!content.includes(`export const ${value}`)) return res.push(value);
	});
	return res;
};
interface CommandAnalyzed {
	file: string;
	analyzed: string[];
}
interface Fixed {
	file: string;
	fixed: string[];
	unAble: string[];
}
const analyzeCommands = async () => {
	const commands: string[] = await globPromise(
		`${__dirname}/../commands/**/*{.js,.ts}`
	);
	const AnalyzedCommands: CommandAnalyzed[] = [];
	const FixedCommands: Fixed[] = [];
	for (const value of commands) {
		const buffer: Buffer = await readPromise(value);
		const fileContent = buffer.toString();
		const analyzed = check(fileContent, [
			'name',
			'run',
			'category',
			'description',
		]);
		AnalyzedCommands.push({ file: value, analyzed });
	}
	for (const value of AnalyzedCommands.filter(
		(value: CommandAnalyzed) => value.analyzed.length != 0
	)) {
		const fixed: string[] = [];
		const unAble: string[] = [];
		if (value.analyzed.includes('name')) {
			const buffer: Buffer = await readPromise(value.file);
			const content: string = buffer.toString();
			const splitted: string[] = value.file.split('/');
			const fileName: string = splitted[splitted.length - 1];
			await writePromise(
				value.file,
				`${content.trim()}\nexport const name: string = '${fileName
					.split(/command/gi)[0]
					.toLowerCase()}';`
			);
			fixed.push('name');
		}
		if (value.analyzed.includes('category')) {
			const buffer: Buffer = await readPromise(value.file);
			const content: string = buffer.toString();
			const splitted: string[] = value.file.split('/');
			const category: string = splitted[splitted.length - 2];
			await writePromise(
				value.file,
				`${content.trim()}\nexport const category: string = '${category
					.split(/ +/g)[0]
					.toLowerCase()}';`
			);
			fixed.push('category');
		}
		if (value.analyzed.includes('run')) unAble.push('run');
		FixedCommands.push({ file: value.file, fixed, unAble });
		if (value.analyzed.includes('description')) {
			const buffer: Buffer = await readPromise(value.file);
			const content: string = buffer.toString();
			const splitted: string[] = value.file.split('/');
			await writePromise(
				value.file,
				`${content.trim()}\nexport const description: string = 'A cool command';`
			);
			fixed.push('name');
		}
	}
	let ErrorsOriginal: number = 0;
	let FixedErrors: number = 0;
	for (const value of AnalyzedCommands) {
		ErrorsOriginal += value.analyzed.length;
	}
	for (const value of FixedCommands) {
		FixedErrors += value.fixed.length;
	}
	consola.info(
		`[CMD-ANALYZER] Found ${ErrorsOriginal} errors, fixed ${FixedErrors} of them. `
	);
	if (FixedErrors < ErrorsOriginal) return process.exit(1);
};
export { analyzeCommands };
