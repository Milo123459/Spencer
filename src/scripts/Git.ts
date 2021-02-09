import { argv } from 'process';
import { execSync, exec } from 'child_process';

exec('git branch --show-current', (error, stdout) => {
	execSync(
		`git add . && git commit -m "${argv
			.slice(2)
			.join(' ')}" && git pull && git push origin ${stdout.trim()}`,
		{ stdio: 'inherit' }
	);
});
