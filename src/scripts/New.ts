import prompts from 'prompts';
import glob from 'glob';
import fs from 'fs/promises';
import prettier from 'prettier';
import { promisify } from 'util';

const globPromise = promisify(glob);
(async () => {
	const categorySet: Set<string> = new Set();
	const paths: Array<{ type: 'command' | 'event' | 'model'; path: string }> = [
		{
			type: 'command',
			path: `${__dirname}/../commands/`,
		},
		{
			type: 'event',
			path: `${__dirname}/../events/`,
		},
		{
			type: 'model',
			path: `${__dirname}/../models/`,
		},
	];
	const what = await prompts({
		name: 'type',
		message: 'What should be generated?',
		type: 'select',
		choices: [
			{ title: 'Command', value: 'command' },
			{ title: 'Event', value: 'event' },
			{ title: 'DB module', value: 'model' },
		],
	});
	(
		await globPromise(
			`${paths.find((value) => value.type == what.type).path}**/**`
		)
	)
		.filter(async (value: string) => (await fs.lstat(value)).isDirectory())
		.map((value: string) => categorySet.add(value.split(/ +/g)[0]));
	const otherStuff = await prompts([
		{
			name: 'category',
			type: 'select',
			message: 'What should the category be?',
			choices: [...categorySet]
				.filter((value: string) => {
					const splitted: string[] = value.split('/');
					return !['Commands', 'Events', 'Models'].includes(
						splitted[splitted.length - 1][0].toUpperCase() +
							splitted[splitted.length - 1].toLowerCase().slice(1)
					);
				})
				.map((value: string) => {
					const splitted: string[] = value.split('/');
					return {
						title:
							splitted[splitted.length - 1][0].toUpperCase() +
							splitted[splitted.length - 1].toLowerCase().slice(1),
						value: value.toLowerCase(),
					};
				}),
		},
		{
			name: 'name',
			type: 'text',
			message: `What should the ${what.type} name be?`,
		},
	]);
	if (['command', 'event'].includes(what.type)) {
		const splitted: string[] = otherStuff.category.split('/');
		const path: string = `${
			paths.find((value) => value.type == what.type).path
		}${
			splitted[splitted.length - 1][0].toUpperCase() +
			splitted[splitted.length - 1].slice(1).toLowerCase()
		} ${
			(what.type as string)[0].toUpperCase() +
			(what.type as string).slice(1).toLowerCase()
		}s/${
			(otherStuff.name as string)[0].toUpperCase() +
			(otherStuff.name as string).slice(1)
		}${
			(what.type as string)[0].toUpperCase() +
			(what.type as string).toLowerCase().slice(1)
		}.ts`;
		const source: string = `
        import { RunFunction } from '../../interfaces/${
					(what.type as string)[0].toUpperCase() +
					(what.type as string).slice(1).toLowerCase()
				}';
        export const run: RunFunction = async(client, ${
					(what.type as string) == 'command'
						? 'message, args'
						: '/* OTHER_PARAMS_HERE!!!! */'
				}) => {
            // do some funky code
		};
		export const name: string = '${(otherStuff.name as string).toLowerCase()}';
		${
			(what.type as string) == 'command'
				? `export const category: string = '${splitted[
						splitted.length - 1
				  ].toLowerCase()}';`
				: ''
		}${
			(what.type as string) == 'command'
				? "export const description: string = 'A cool command.';"
				: ''
		}
        `.trim();
		return fs.writeFile(
			path,
			prettier.format(source, { parser: 'babel' })
		);
	} else {
		const splitted: string[] = otherStuff.category.split('/');
		const path: string = `${
			paths.find((value) => value.type == what.type).path
		}${
			splitted[splitted.length - 1][0].toUpperCase() +
			splitted[splitted.length - 1].slice(1).toLowerCase()
		} Models/${
			(otherStuff.name as string)[0].toUpperCase() +
			(otherStuff.name as string).slice(1)
		}.ts`;
		const source: string = `
		import { model, Schema } from 'mongoose';
		export const name: string = '${(otherStuff.name as string).toLowerCase()}';
		export const data = model(
			'${(otherStuff.name as string).toLowerCase()}', new Schema({})
		)
		`.trim();
		return fs.writeFile(
			path,
			prettier.format(source, { parser: 'babel' })
		);
	}
})();
