export interface Options {
	/**
	Use a key distance-based score to leniently accept typos of `yes` and `no`.
	@default false
	*/
	readonly lenient?: boolean;

	/**
	The default value if no match was found.
	@default undefined
	*/
	readonly default?: boolean | undefined;
}

export interface OptionsWithDefault extends Options {
	readonly default: boolean;
}

const YES_MATCH_SCORE_THRESHOLD = 2;
const NO_MATCH_SCORE_THRESHOLD = 1.25;

const yMatch = new Map<string | number, number>([
	[5, 0.25],
	[6, 0.25],
	[7, 0.25],
	['t', 0.75],
	['y', 1],
	['u', 0.75],
	['g', 0.25],
	['h', 0.25],
	['j', 0.25],
]);

const eMatch = new Map<string | number, number>([
	[2, 0.25],
	[3, 0.25],
	[4, 0.25],
	['w', 0.75],
	['e', 1],
	['r', 0.75],
	['s', 0.25],
	['d', 0.25],
	['f', 0.25],
]);

const sMatch = new Map([
	['q', 0.25],
	['w', 0.25],
	['e', 0.25],
	['a', 0.75],
	['s', 1],
	['d', 0.75],
	['z', 0.25],
	['x', 0.25],
	['c', 0.25],
]);

const nMatch = new Map([
	['h', 0.25],
	['j', 0.25],
	['k', 0.25],
	['b', 0.75],
	['n', 1],
	['m', 0.75],
]);

const oMatch = new Map<string | number, number>([
	[9, 0.25],
	[0, 0.25],
	['i', 0.75],
	['o', 1],
	['p', 0.75],
	['k', 0.25],
	['l', 0.25],
]);

function getYesMatchScore(value: string) {
	// eslint-disable-next-line unicorn/prevent-abbreviations
	const [y, e, s] = value;
	let score = 0;

	if (yMatch.has(y)) {
		score += yMatch.get(y);
	}

	if (eMatch.has(e)) {
		score += eMatch.get(e);
	}

	if (sMatch.has(s)) {
		score += sMatch.get(s);
	}

	return score;
}

function getNoMatchScore(value: string) {
	const [n, o] = value;
	let score = 0;

	if (nMatch.has(n)) {
		score += nMatch.get(n);
	}

	if (oMatch.has(o)) {
		score += oMatch.get(o);
	}

	return score;
}

export function lenientFunction<T>(input: string, default_: T) {
	if (getYesMatchScore(input) >= YES_MATCH_SCORE_THRESHOLD) {
		return true;
	}

	if (getNoMatchScore(input) >= NO_MATCH_SCORE_THRESHOLD) {
		return false;
	}

	return default_;
}

/**
Parse yes/no like values.

The following case-insensitive values are recognized: `'y', 'yes', 'true', true, '1', 1, 'n', 'no', 'false', false, '0', 0`, 'on', 'off'

@param input - The value that should be converted.
@returns The parsed input if it can be parsed or the default value defined in the `default` option.
@example
```
import yn from 'yn';
yn('y');
//=> true

yn('NO');
//=> false

yn(true);
//=> true

yn('abomasum');
//=> undefined

yn('abomasum', {default: false});
//=> false

yn('mo', {lenient: true});
//=> false	
```
*/
export function yn(input: unknown, options: OptionsWithDefault): boolean;
export function yn(input: unknown, options?: Options): boolean | undefined;
export function yn(
	value: string,
	{ lenient = false, default: default_ }: Options = {}
) {
	if (default_ !== undefined && typeof default_ !== 'boolean') {
		throw new TypeError(
			`Expected the \`default\` option to be of type \`boolean\`, got \`${typeof default_}\``
		);
	}

	if (value === undefined || value === null) {
		return default_;
	}

	value = String(value).trim();

	if (/^(?:y|yes|true|1|on)$/i.test(value)) {
		return true;
	}

	if (/^(?:n|no|false|0|off)$/i.test(value)) {
		return false;
	}

	if (lenient === true) {
		return lenientFunction(value, default_);
	}

	return default_;
}
