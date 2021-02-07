interface WarnFn {
	(msg: string): unknown;
}

export default async function run(input: string, warn: WarnFn): Promise<void> {
	// comment remover
	let lines: string[] = input.split(/\n/gi);
	for (const [lineNumber, line] of lines.entries()) {
		if (line.includes('#')) {
			const char = line.split('');
			char.map((value: string, index: number) => {
				if (value == '#' && !char.slice(0, index).includes('#')) {
					return (lines[lineNumber] = char.slice(0, index - 1).join(''));
				}
			});
		}
	}
	lines = lines
		.filter((value: string) => !!value.trim().length)
		.map((value: string) => value.trim());
}
