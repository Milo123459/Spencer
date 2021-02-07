import run from './index';
(async () => {
	const now = Date.now();
	await run(
		`
    # hello! #h # eqwhueiwqhs
    # world!
    #h
    this is actual code
    `,
		console.log
	);
	console.log(Date.now() - now);
})();
