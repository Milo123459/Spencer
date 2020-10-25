interface RepeatOptions {
	(): void;
}

interface UntilOptions {
	(): boolean;
}

interface RepeatUntilOptions {
	repeat: RepeatOptions;
	until: UntilOptions;
}

const RepeatUntil = (options: RepeatUntilOptions): void => {
	while (true) {
		if (options.until() == true) break;
		else options.repeat();
	}
};
export default RepeatUntil;
