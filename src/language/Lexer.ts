const NUMBERS = /[0-9]/;
export const lexer = (contents: string) => {
	let tokens = contents.split(/\s/);
	let current = 0;
	while (current < tokens.length) {
		let char = tokens[current];
	}
};
/*
 if (char === '"') {
      // Keep a `value` variable for building up our string token.
      let value = '';

      // We'll skip the opening double quote in our token.
      char = input[++current];

      // Then we'll iterate through each character until we reach another
      // double quote.
      while (char !== '"') {
        value += char;
        char = input[++current];
      }

      // Skip the closing double quote.
      char = input[++current];

      // And add our `string` token to the `tokens` array.
      tokens.push({ type: 'string', value });

      continue;
    }
*/

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
