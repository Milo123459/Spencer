const nums = '0123456789';
// Just a basic lexer, will improve later.
export const lexer = (contents: string) => {
	type lexed = Array<{ token: string; value: string | number }>;
	let tokens: string[] = contents.split(/\s/);
	let current: number = 0;
	let lexedOutput: lexed = [];
	let buffer: string[] = [];
	while (current < tokens.length) {
		let token: string = tokens[current];

		if (!nums.includes(token) && buffer.length > 0) {
			lexedOutput.push({
				token: 'int',
				value: +buffer.join(''),
			});
		}

		if (token === '+') {
			lexedOutput.push({
				token: 'add',
				value: '+',
			});
		} else if (token === '-') {
			lexedOutput.push({
				token: 'sub',
				value: '-',
			});
		} else if (token === '/') {
			lexedOutput.push({
				token: 'div',
				value: '/',
			});
		} else if (token === '*') {
			lexedOutput.push({
				token: 'mul',
				value: '*',
			});
		} else if (nums.includes(token)) {
			buffer.push(token);
		}
	}
	if (buffer.length > 0) {
		lexedOutput.push({
			token: 'int',
			value: +buffer.join(''),
		});
		buffer.splice(0, buffer.length);
	}
	return lexedOutput;
};
/*
EXAMPLE CODE
# this is a comment
# {} allows you to access variables
# example command to say hi
# (variable_name): value to create variables

(embed): !embed {
    description 'Hey, how are ya?'
    fields [ { name 'hi!' value 'hi!!!!!!!!!!1' } { name: 'Your name is {member:name}' } ]
}

!send(embed)

this code creates an embed, and sends it


*/
