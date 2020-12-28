import fs from 'fs';
import { lexer } from './Lexer';

const contents: string = fs.readFileSync('./test/test.spencer').toString();
const lexedOutput = lexer(contents);
