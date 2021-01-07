import { argv } from 'process';
import { execSync } from 'child_process';

execSync(
	`git add . && git commit -m "${argv
		.slice(2)
		.join(' ')}" && git pull && git push`,
	{ stdio: 'inherit' }
);
