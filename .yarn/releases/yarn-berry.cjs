module.exports = (() => {
	var __webpack_modules__ = {
			80150: (e, t, r) => {
				'use strict';
				r.r(t), r.d(t, { default: () => g });
				var n = r(32741);
				const i = { optional: !0 },
					A = [
						[
							'@samverschueren/stream-to-observable@*',
							{ peerDependenciesMeta: { rxjs: i, zenObservable: i } },
						],
						[
							'any-observable@<0.5.1',
							{ peerDependenciesMeta: { rxjs: i, zenObservable: i } },
						],
						['@pm2/agent@<1.0.4', { dependencies: { debug: '*' } }],
						['debug@*', { peerDependenciesMeta: { 'supports-color': i } }],
						[
							'got@<11',
							{
								dependencies: {
									'@types/responselike': '^1.0.0',
									'@types/keyv': '^3.1.1',
								},
							},
						],
						[
							'cacheable-lookup@<4.1.2',
							{ dependencies: { '@types/keyv': '^3.1.1' } },
						],
						[
							'http-link-dataloader@*',
							{ peerDependencies: { graphql: '^0.13.1 || ^14.0.0' } },
						],
						[
							'typescript-language-server@*',
							{
								dependencies: {
									'vscode-jsonrpc': '^5.0.1',
									'vscode-languageserver-protocol': '^3.15.0',
								},
							},
						],
						[
							'postcss-syntax@*',
							{
								peerDependenciesMeta: {
									'postcss-html': i,
									'postcss-jsx': i,
									'postcss-less': i,
									'postcss-markdown': i,
									'postcss-scss': i,
								},
							},
						],
						[
							'jss-plugin-rule-value-function@<=10.1.1',
							{ dependencies: { 'tiny-warning': '^1.0.2' } },
						],
						['ink-select-input@*', { peerDependencies: { react: '^16.8.2' } }],
						['promise-inflight@*', { peerDependenciesMeta: { bluebird: i } }],
						['reactcss@*', { peerDependencies: { react: '*' } }],
						['react-color@<=2.19.0', { peerDependencies: { react: '*' } }],
						['gatsby-plugin-i18n@*', { dependencies: { ramda: '^0.24.1' } }],
						[
							'useragent@^2.0.0',
							{
								dependencies: {
									request: '^2.88.0',
									yamlparser: '0.0.x',
									semver: '5.5.x',
								},
							},
						],
						[
							'@apollographql/apollo-tools@*',
							{ peerDependencies: { graphql: '^14.2.1 || ^15.0.0' } },
						],
						[
							'material-table@^2.0.0',
							{ dependencies: { '@babel/runtime': '^7.11.2' } },
						],
						['@babel/parser@*', { dependencies: { '@babel/types': '^7.8.3' } }],
						[
							'fork-ts-checker-webpack-plugin@*',
							{
								peerDependencies: {
									eslint: '>= 6',
									typescript: '>= 2.7',
									webpack: '>= 4',
								},
								peerDependenciesMeta: { eslint: i },
							},
						],
						[
							'rc-animate@*',
							{
								peerDependencies: {
									react: '^15.0.0 || ^16.0.0',
									'react-dom': '^15.0.0 || ^16.0.0',
								},
							},
						],
					];
				let o, s, a;
				const c = new Map([
						[
							n.structUtils.makeIdent(null, 'fsevents').identHash,
							function () {
								return (
									void 0 === o &&
										(o = r(78761)
											.brotliDecompressSync(
												Buffer.from(
													'G1gUAIzCtr2xMzjJgJA88r/l8s7l9OoQ+WtKxU5uIQ1k15mQ1bamroyXoMKC0yqx44/BZ2Kp0oH6z9/XdLihMONU+ufec9+07fv777XvQJOVjRaHnkmAASXQQzhvDK3lC18lfWMQhmk/hyqMS39FA4d4X8na/QZocXQ3LmObAWWccY/xG5ZSBm6J6brPQ3E9pQ9DGJyhaurt4KyaZ+syHd/CnvYuraXnvJwez3WGhy6s6ecrfJVYeBDArI75wxB2HxweIqw0/gT+qXpDEji4JdFGZ5Do7yg5nV8J1f33B2JUENlw97TRDgNjq3yzyqD4IoFfFgJqt3Ga003n9/+eOFU1KYz99N6eCCDmOTGq8usWP53fU1IK8D0qzI3bK5KkKGgUjkG1dRyJBAC/T4SK5AOiInV6kSnLcQGMDKTOwrPxN8919kVydBmns6kfSdr1DhMISD0Q1qGeqWAowNVB+MlACshFFA8GHqpUTfgPlAi3RRDj6lJGtDcafGRQNymNVsmoKySzioKxwowoUiDaisGalJQCq7cw/5n3ETx7nKiI0iqiVdn885HOYSf2yH4hATXJEesF2nOfqp2bzLO2T2uI0hX/0JwMdac692S4i9/UzJ5PPqsqAVnxooXrvlQ/1ibnqvhIvgBqLWtP+p8kNU8NSlso1fnR6P8ir9txAdrm+XaYQpbns6D5hqqKw6WkVuPP2cNXIXqf22EaIHq/FDSg/sUFz5s4K0JyemiYYFrc5HBiLmmE5qqpIStviMHER2BVSUZlRCUOzCaHkCisRn3ltIMkNegRhip+9sT3nKpPPFIASnM1QVvE25LUteytfyIxhi2C4zcl3oloipwOLj6/qJOtPAPEAnKf105va2Lf3B1CndU2yBIrW2urW8N6wbdSYoBvisT5KlRosuRJcV9TL7dGdNXzUA7aqJSIfGdtxCJi8dK7/dx2uFksGP773q3ioNgRNkUAIS6y+CJBY2U5zV0P/XqaWeE3RYDV//Sv7mgs+kEVZ5ST1tCArNYcidRe9ZudVIfLfzxcpbzIv+Lc3ZvJD1cXzeVNM25FDyRmU2fd1F/bdVAqOWnKk1Q52pkEfMDeVC0GW4Q/lmckM5Z5r7Nz3WlkQcEICtc3JDVTXIl3r9YXggjAkDzU4r4NQehHbLEQ/uINXzYTISLiZQsFICKVpU69ME8bYLnLZlwmBJSZYAehatIhj3gC6Iho0uFsc8w92muCdflw5SouKRfSodbNZoLcxbG48Rc6Ng3mU+TcU65b2pRVwaIO0N0TNYmptsxD5WTDtG5SWskELYsSSoqpH6VNkXxcg3vwQGWaF5XL2XI5GgG6iA6kETJUICJE1GBXQ1TJT1OvRjNQFRutEg8EXZHQEHCYv8fWDiL+o7rWbEBqFvhMEZWL9uQLQqyNLrxq7wfa2P5dXv+PYsQqrih/3/6/5zLNAQ==',
													'base64'
												)
											)
											.toString()),
									o
								);
							},
						],
						[
							n.structUtils.makeIdent(null, 'resolve').identHash,
							function () {
								return (
									void 0 === s &&
										(s = r(78761)
											.brotliDecompressSync(
												Buffer.from(
													'G1QTIIzURnVBnGa0VPvr81orV8AFIqdU0sqrdcVgCdukgAZwi8a50gLk9+19Z2NcUILjmzXkzt4dzm5a6Yoys+/9qnKiaApXukOiuoyUaMcynG4X7X4vBaIE/PL30gwG6HSGJkLxb9PnLjfMr+748n7sM6C/NycK6ber/bX1reVVxta6W/31tZIhfrS+upoE/TPRHj0S/l0T59gTGdtKOp1OmMOJt9rhfucDdLJ2tgyfnO+u4YMkQAcYq/nebTcDmbXhqhgo6iQA4M3m4xya4Cos3p6klmkmQT+S4DLDZfwfMF+sUCx36KleOtaHLQfEIz0Bmncj/Ngi3lqOl4391EWEfIss6gVp3oDUGwsSZJKeOVONJWZg+Mue3KUMV3aMqYJ+7b2219D+GFDi8EV5y/Y+5J+He0oNjKAgqLsJziEsS9uIaCu3BHBKSXxNKKa2ShbfglcWoiiVT2kfGI7Gw+YJ/Sqy1H6wdFWtyVUQIa82JPwbeV25YKLzc5ZIFM6GCPSA+J9dTvJbs5LuuKnLP3f09gCu2jxqsAv6CA+ZySVaUJr2d3A70BC/uBCKr2OVrWgC3fSwb7NlfkgSEEiejrMGvhya9lMbVI6lMsFKN330A1/FOaefHQdNGLEZ3IwFF87H3xVlM0Xxsmbi/7A60oymRcIe0tH90alG6ez/yA7jwYotxuHWZdR+1HlMcddGHAV6QD/gXYPV0wnNv47I+5FGevzZFMqWSO8GU4nQ3FjsdgdJcD+c1rvudERKuLyd7bxiBpnsMDHsvPP4nXdXkld/gUNks3GAE1Otmb90bavDyiw4Mrx496Iw+jbLTgsCZGZXSZ9vM55C7KGe4HyJAKXEk0iT/Cj/PFwLJBN7pcP7ZFfYtUApGTWKkYhI9IE2zt/5ByH72wdvH+88b71zuv/FMCX3w6x5nzhY44Cg5IYv9LeKwHuHIWgPbfgrAcUxOlKkPRdQOIDF/aBuLPJAXD+TgxCNXx4jQxeR/qlBWVikFPfEI4rXMUc4kZ2w9KbPKYRvFUag0dVlVoyUP4zfidbTXAdZF88jAckl+NHjLFCNdX7EQ1PbLSOl+P+MqgwEOCi6dxgWZ7NCwJBjWKpk1LaxwKrhZ4aEC/0lMPJYe5S8xAakDcmA2kSS86GjEMTrv3VEu0S0YGZcxToMV524G4WAc4CReePePdipvs4aXRL5p+aeN96yfMGjsiTbQNxgbdRKc+keQ+NxYIEm1mBtEO29WrcbrqNbQRMR66KpGG4aG0NtmRyZ2JhUvu0paCklRlID8PT3gSiwZrqr4XZXoBBzBMrveWCuOg7iTgGDXDdbGi8XHkQf5KXDGFUxWueu5wkSa6gMWY1599g2piQjwBKIAPt4N5cOZdFBidz2feGwEAy1j1UydGxDSCCUsh314cUIIRV/dWCheceubL2gU8CibewmP7UxmN5kN4I7zfQhPxkP0NCcei8GXQpw4c3krEzW7PR2hgi/hqqqR58UJ/ZVfWxfcH5ZKMo4itkmPK0FCGxzzIRP20lK/gz28Y03sY233KvSVWUKl9rcbX6MbHjpUG8MvNlw72p6FwTejv92zgpnCxVJnIHHZhCBxNcHF5RTveRp513hUtTHHq4BIndlytZT5xoTSYfHKqKNr4o9kcGINIz6tZSKRdtbON3Ydr9cgqxHIeisMNIsvPg/IFMZuBbSqqDLeSO5dak1cGr76FtH2PC7hs0S0Oq3GsmF1Ga4YABAMGcdPAWzTk26B7cKV91I2b0V/GYvnsEQ1YGntRqi5EQqTlgZszbV/32GuZtUF49JOA/r4jAdwUOsbPo6mNoBlJPYjM5axrZaWQf33bFsLWqiyvvDOM4x0Ng802T7cuP2a3q98GWq6yiq6q3M77hcZlOUnmryctRYmI4Hb2F5XixFohkBmySCjU+M7/WQVE5YAtnlxiUJDhFN0y1tNeMWY9E0MfZi2rQ4eC72WXjsAA==',
													'base64'
												)
											)
											.toString()),
									s
								);
							},
						],
						[
							n.structUtils.makeIdent(null, 'typescript').identHash,
							function () {
								return (
									void 0 === a &&
										(a = r(78761)
											.brotliDecompressSync(
												Buffer.from(
													'W873FUXgPCgqnJsVRTlfQz4SIWwcQBZWbUDrA9uY+lR9ougyuDJatOpy2ogPR8RnaDUcYRVZtX6gxcmQzgB3ckRC+qcjTNlldgn5SoHMuAnHU5YzZ9YrLSBAL9PZn89r8TUJyzJcacSp1WlVJ5AMe2OER7uBVPh+c9N6U8QPeRgEKoRNq0JDe6PXID0zCtWhiP+eq+wOwbYly7r+wUjSBrJtqVq76YWFgf6FYfhw8eP96VsbIjkMVZoyXKVOlaJKT2/u3HsSSU8fJH+QLIdoGWbm3qcn+/n/AHsBoNpyudpt6m3a5Xord7XMITAsV0QV0P9OU7rNpAzZWXLWgAF4QuyvzM1yLIFJC2Cm1LEZKNyYFsA7M3xDeupSt6xko3Oh3/x5tGDojPBt+ddjmHnbct/bxgAiIhq1jbPnD38a3Fj2y5noTvMgokcho9qqYD84EUnvkpGf/LiqIEsjM9i89iDnDPX/wOC90cL6HYLm2Nrxe6VP6JPocXP7B2EMgIg/pMnMR2h88OWQn2Gx+MmfhfhE/ZOlDMcHaTlSPN/iD2RnUXNUftJTu7GfIwqRV3D625f7uPXjG/3RI3E9KOI8VfT6UASFdQRsvwJDyaGPvnjIBU/RAJVC7JNKeG3ZnmrLcSdLe0ww4BGS4Hp7Da7+AvccFVzii5fg/i1nzBCoMlgU0VCgp7Hio8eSvOdd3inmq+BKtXW3QuEWRuB2tyJWL+uuhKE+3xLxXyfOWcja+EKivbRkC7YtwtvwsCKiaemfFQr/Zu78i0VwObqMC7sNEXBQ4cvQzoIP8rZAMKQjpdYIUMA98QdPpmu9VDuYoXxUwGFzuFWhB4j8abMmzsp64rJjJvd3J0qy3EWh95OW8Xez7Ea2ESsg1duQmjC8eLl0ZXuXhOsgQz5pYmEf9Glo4BwSBMwS47drurENQuGJD7rSoHDmWkllmQVvQNeXwncY19xfb6P6oiFVkicIecPval2ND86HIXqCTETwizxQVE/AA0m9fXqMhAM3Rtjkqm48+9pd9TEDiouvpzEgicH3kxOkK2V/2+sWJkySD26+NA0yh2Sfmc2bbg3eNzjNtnbP3R2i5WWHxiuGe2RCMmg7HpoHGr0+J3GeNdwHnzOgFMBu+64uAogyCWs5r+XPIab57s932DWlKgBjARkS+kKBaFKA4ASUguqBEy8ImBNuC1BL/tGxBScTVcMBDhLheoaP+rU8KS1ZhA7Kn+IZZPoYi8UAVkgRTdNfPBnBcO0uQlebM1C9KlE/vaFuwtAyuC0KQoXUXF4Bg4FeV9EHsgr8+qlx5gWvoi4vhH1LR5Ps7ThmEklyMLABBEkowprsTF9B9OMLSGdn5gIouK4jagoKts3uGsWh5VOPdXiJJ2+gjvc+1YuivIruxpyGvIKjkaqos/wQg0J1/VQeIkmPk8AGc+uEELK4GQPVl6fGBvfxJLLCuBHDDtldZzp25uSA9IZ8iMXXbxIr41OF/4nHRjXJFRX03QE6wwKQJyFzBb1lpr54sr90u5igwAXXcCHrF0TND4+nEvqk2cIpukDqdWBRWqfOc1fKpnhUoqJoHyvP1YE+nIlPX3VkvVLsUtqBYsuFzjlsCpXz7Th6He0oTIlxSLrjWW85dk33v50xxRiTbVPlkJsmw7nbVP6UQmLc9FjqQ0CE2NDtZfpVSz5UJvxey773nOnF5oM9aLJUr0yXXKc5LtufoH59XtLWYoJCkvB0LxSPucVj7aA9mILuCdu4erFo4U3PRFUQqIs833xGIET0jBMmB5hj3McrGp03JS6905mU1VBk1/DpzKnt+3Ddk8j8g/fiFmr2kaOP3U8jQJGLYCjoqJ739cU5WB1zhZk+QNgvj2ZO9dP+AsRJXruVZKdjd9nEkl5f8r9OznyHv5Bb1damGQUI3wXxV1w5XIZIv+kmiE2IyPFFgfnJut1MPh9MIj8oDmThLWYZz9hAT5RzhZgibdzE1JS2tMHY5zxcqO17gN7hQlZ0Unmtwe0aB/Yx0K7SB36XOWy3A/exwlhyZ25ekDFbFj/g+VTmdkYqrhgq/yok1fI+KQhHTFuaGR3ObbsSdEU1ANKL9ILLQE/VTCOtyqvoVEKZgiA7WyXJZQICaiCqkdiIDfFt9MIlwdsdq2OVE3bFV7vAyYbOLOhIJa9IHKjk2kqXtA6ppLmt7F/ch2ZWDwDgdWujhPjTfOs/SA9/PBTFACVB5t0HlOtMcgtDNV7gUslR7pGEIkbOvI/Mlog4IQpMccmI+DoiIfgYrJSkSwrEAkiSRSMuHmkbFy+WIfQBYEJZg53iYpN4OcOkpSiWbge6+qLyIZGUG1UpOIhhhBi4wwgREB7RFjDPHPm7tz/1G7rfPAGpn+3KlyOEDaxHd+GkydtKjqPwSZvuw6rKgHf22wTRabhboROvLkFl6DtUXj19aea5YVvAFGFC63OLd4geZtOtYsBKSMteIa6TwevReUoG9sTL5WZgJcyicWSBelfe6T+gYR5HY41VbYeivHecnWoNkrpvkCyiXQ6pBl9roXUea9/TlQ70+iYAnmoMnJXDWM+EM1z5nXRQqGfAVp7XL8NCy1QSrbEsBtt8FdAeektNTfcOiXUhk41l/p2KbWhF3gEur//+lAJVZepMhsrhjSP5RlcYKwjChdOnXAM//RPXVAhLThA9CrW4e2YLX8y/HoKCY++rQdHdK36RhScQ3mzUgERIMvfWwOF+IyFXUTuPPOp7dfI/6hDLsV6j6uRI3cCW5HzG8k4tbGt/m30RS6fuao5axwucIkrOHWijfnleWadt8/plKBcD/4miYZuECkp2j8IKcs4RHv/vmrxaRduBGXwUeDf+oLwyRVymsI57O/IHi9wjSCndr8L4qkqAwYZnmIarqupInQxkjQb/HH7nXOG9whG+8KhJNUl6ev8aQ5w+EpjX2HV2g3gFQMNSTLyzfiDPK0zt2wmsYK4v0WB/KdwfRp/+nH4BAqQ4VW/Zs4UiJ+0OxLJT6gFbyyoMoe3eAqR9fYDlP5k9SUst2K1fDr7UyT8nGHAgu8OsptkPujQH927PYz/NpyX3Z0Z/LHVyjI96DDINfrWhYq/Xnjs5OlzaSrXYBJPtnS0Sl2lYstc8BKRsdwSyPEfPE7t1MU/FCb3yUNElklHEAWb0AJx5zNjkFgAw6NgNZOKZwuIaa107Scc6KuO5GgEAMuWGOrFAQMyqPdDlOa6efd7LuHNC1EPB69IQQgewbHcDpjxW3uwWAChTrXu98CTVUuvbIaolN3sEALAEq8yALce6A2OeYwdinruBOgFfnAp/qsiOBVhzvJ/VvgoAzPnWf/9//64+D+ddjnYF3jxHNZuLH2YU9CY9P/CQHQce8T7wmMOS4xYAkMjX7k1hOQn1WO1tIrsD4meNAID5dAYb55itYt0d8AR/9zzHXxRVKFTP5FY0yZ5s0jIAADxj8vE0AFrKWWtMc6DyzxyBaEVOOXsFSLQwkV5fcFHM9pixf5oD3tP0jV4Yz9krOgxONum3AAA+DiqTE+qBdCZ8PTHTl0ujVjBVrMvZlWmi4up/jQCApoK4mmocU+RhtC6phYPu9/bZhJWFVQxkxgGnLQAQIG+N4SFvlXY7jYHa+dklAJA8vDTnhC9/M7hT33od2soCKjpwTzZpbAEAQDmgZQsXCUlGe5zMNAKJP2sEAIJFGGkcE5BeZPHlc4Kx7ensBpjFVTqvAgBw5muhcYUM7YR09XDP7wQ/+s4ONguu6MBgTTpbAKCIbEwbw0We1PZbZRXhSd8IAPCpzDN+By+vCPp77BPuxNGxTadoVNxoTIjRivZkk5YBAOBS81Ya+9l98zMnKFMMA43tdjYhM8HeSzH3EV/CcWvBbDzW/SKhPGd/UIVyskm/BQCwPLmTxn6KN4MrmjIammhstc8S2SSIn2YCAOaY8ITLU/W9APbTCcm2gWWRN9IYhxy3AECIfKVuCKuCiIYgjPZlskngJ5cAwPJ7yK5TZ5vZ3oRbivylTnCZ/x8OOm4BgCAR5YAwhM1EA8BoF5NNAD/ZBADEMcESX/qtd6Faa1I7C2IW9af7KgAgZ778jqt3YvPG2P3pjWuv9dT6JfouGpOYYE3aWwCgoOzasYbT5MFwF3n4WSMAIOK+uMtT/Igs3XDM2LSfXSLRtqyRoPqkbDC9UG/1W9AcfJe656Nw76bgqRepPiZhydqRXaTsBBjkNDp4yTtFRAzC/iYmZGf+4V35tFGxi59DLMFFNcjS69dM5g7f6u9itbu9ez/xN6NAe8BQxaKPOJnF7yjwwSQfmU/9lgZWh8k3Qh3Mo0S824h4hQxzm48bxdMUsvVr6Zyl11osb8eHJR9SfFpmKIgjANKZHwqqka1FZQJ9idNraexJjN8Kb05vQYmH40ruR1TSc09zmt0TwlDIUG8lOP+qevsS4k0/ibh86bWXwd4Yajn/R4W0A15v6RV/UtEIcGigokADHi/eK8ZAusAwzUidZjxqSzy/TnauUAvMcA3MiXRW3jvMsNVQHCO1cIjYF7j+SDxJb9q2BoikIbq2qaaoGCwFdm6tYKbF9nE1KkZ3kESGz6fKYoRCSMchzv11+byHaAUzIj89RsVZIxT+ngWWxKzHwF+lozuPYsDfWnsilyaHKyR6np9jzbOWxm7SYcnmSeQ7epvhlsOH+nm7rxTYyS6/+4wzmomCJRvlPjAUQTqd4JScwjTt7nFLiKpgiC6WUXSevgDNluqY1BKBGSoq6zLsZz5ijAE+7qdEIDOW+K3pY5G0r4oIWbB9WWwcYBN3QsZ2H8LfXjkkypPxJJMU9OL4BkjVu0p2eI4fs3WG33/uG0whj+Lcu0LXj+DqX3Qy5T2+IMDZ2F88XhN9I470u3ZkFIgVgClAO99kSWgknPBI45+oyG0fG71OGsYcMiVPCBJFifm6xz58FiPS0pzszcoEZr8L5/l4eqKvvGvZBq+Tz6FDUs+IXFogRchWmLxzJZR4Paea2P+JVA/yyJBps9NFi3ZxN1pzTt069MHlwyxn+8u2PIPNRSUvVr8/Wo5KqE8sMQHT+IIbDW5UkzVRAHbY94MVN6oXz0UTs3FD2840Flt3SwXIfjLJ3V9OSsCPF8mnxn5pgayF1+4G2Kme7PWRwM0I5fL0/m1511xf6rsJkM+SSV9UDo5Q5/3VkYKZ/jk26S6er21hLoxunIXj0hnuGcYbixBiWcRK32HB8svAdAt4Myhfv7J3J2TvLGE0ImEP6MBct3eZk+VqC0fmJ82FUB+1/kBV4cOEOsPjaJ3lcbTyReh7hL5H6IyP9D1C3+Wc+TGWV4IuTzzSCNxYMA+leJyJWSxybccqft411pd38AcyuGP9Yyz829/m/1xWkgYLLiTmnFiPXD0/t5QKyifOUzW+LStJundip+xiek53B+Xm6B4DQoBdWDz5VunBlcmSB9i07DA/xw0gT69TguQUnE/HQAqpLCxRldhD/mKO2DzfPvgLxWXJasJPE21t1pkt13MVgxuDSTsWs1Huy1SoT7/uIMF/ooFLbt1NSngVPq4yev1qkQErXVLm1qhTNglLcqIvf46Ky4pQzDOXcJpijU/37O5g4qmf3pqyPSExuXnnmOWojLro81DXSmghJg8olU+qJejZRLstNYNJ1bFlKl6dMyoq7rOX3SyIKFZluIu4AqcET8+Rr+qVXqiANwrnITMPnt6RqdclkSdX19LVrs36THGuUB9X4iOhCpbkXgJjMA/cthSAoz1kEQ7hHZqx50nF1BIu+Vps2IrrjDRt9HUzgsRMpZPfist2aoBhh386lvITinRq4iULrFx5fse2z5g3jnfvOB+4+coU4SJXM7Qt5chQzaYvEYAphS9OR01EbCbTrEbLQtaS2LUSGqnxDh3zI/4IPiF7lY47Z0oTtaM5omqNtQrVl2dWWwYAJDsHzTOFV0LPaB9JPYcmADCqjdfKZWrqjQS2OANY/Zo+7nA6YP+apkky6A5r9CPOOY9pPznumUGL2swcEV5jDTNW3nQZAGggOj/SM47NM9qZGJ/UJpoAAGdbW62Vb1Cr3FAglyM1G/aJjO1u9BSgpA659SM+OSPy8IqHpjytdqkAeGrK63BwP+JZXXqf7X1+mnIEL80RwTXWIGPSZssAgBbVeeWWCwta146Q0CaaAIBDNfZa+TQ1amOAGQaVJMtXkJu/c/T6sSsH7Usb1LVPXBY46ZRGFP28FKJT23KmNisDALZ0KkL9ywlkNCjz0rlqwPp2gFOxO78zHy7QG8RZYvl/4K8dLI7GsewYTIi5VoXZYpMPkpBWRsaI5YIEqMqe0gX84nBQn5bFLjfS7IgqairGN9rT+oAg0/0Cij209CvGCNTccWjho5Fk1ykD6pVMyz6FgUoQNeDsFwQhzVvyRjiFhwKjzpmAyKoCPFwfbmTCRpDFVD8mjd+LTDv2UEGQtZaL/9F+osJzv6XklzkUFn7IJVJBUuSWVBgSKn+VuZC0XARV7YvkqRTp7VhZggbx6dEhjf1wCPvSV4GSIv24PjEbe5qnD7rbm2kmEkuhMKzijKjKw/7YT6w9UalquAtJcb4rOksf2iQQZNIcx7Jn6cjQmKqiyFGFZl3ud+aRv7XVju/Qb3zwInUd934flPSO9adwXYT5GUf3M6/j6UEWCd20l1GAOy8HVieurQetApJINHHowxv+ZBsT5IMdhtfvOezMrUvdRe6jDus6ABq7hrAm+ppXIr+GlgLiPvB30wJWeL7ZO2fpHHmiuAPxJXAGILQRYrSLAzSKU3L+Skwv9DbMI5vXcMzkmrab1iuR5CAdMpHDf+wKfBbuvpI4ctv6BtwKS0tJHGiOzHUXhU8HAOcbOYfK/wxcXMcOK6uXVHWqEUWnnmMZAJBONWN+RdhEuMWn2KvfZu+IqrJ5TgcWfy8TAOhgkVszsN6H/+POwNoyBy4WMF/EOIyZejlG+YySnBgBvGH1O3vKfPANzz6p50fcHEzwBS37HLwWiGsbw0ibzLZv9iT1CMTNOVnDyZVyZ+peWmj9GwP/89kCZf7oQBo3fhy/6iqPGEqVPMlM+uV9+bd90uON5xTUA9GMpnf9p2w/il6fgSPtKWQobG3FPvvfew6Ye5T3I1gW+okRSzkeG175/Xw+4SfQrfpSfYnRb73xEcN4dmnKrrPQZiO1QPqNRvHT7kFG/1Pv0pl1agTOocQiwY41P4xO9puivzmN46dTDFhhkcMVPsL9CvbEPAacvJVL4Enfy8JnMls6M3+5n3xOzkpH5b55pXU0fNTGs1lqQWmC4ivLr7+Q2jGwHiXDyX68Xj0dVWZJVFKWVjHh4s8PdFGDXFa9iagyESJFNuof60bRCEw6lwEAEjQ0hKc1lPY6smW3p0DTLk0AYAQ2b7tnAOy9GyUAYAZNQtwyuSoCsW5pciQ8suSLh4EV9VBrAW7eVtpdKuLs0lE5AAUiOAanmePH/K14kwFABVjfcS4YIU5aKQeggATflHBzfFxdOeetAsRzXicz3+IRgkUGCbVczTAiaOddywBAewhgGsLd5VAjkMZuT4DUDk0AIEGzzKT7Xepq3CYBAASv7KpzQ5tD8yXiCca+TBUFp9iqCbBQyxCFnQXIn5UBABTtbICbn1JPp3IAi52pnq6kgcR8SzsWOz/g1dvbvPYmFXMvCXP6275tc32Ll8G/n1/STN3l0O2e0XfzA07QPfI9836BBhV4dXGfv94Hxo8inWI184FSkl01k8uosXglVh1azg3vqcevZp7koU+OLNLPt+9j/o1FwDOz3Ea65lt99qDT5HGo0t9XgtMrfXqe0jt2+aOryf4xn4eHlh7kpEQXBL4l5VEo1MwoKqZRUGd5W+vuFPkC+cc9gbfDPQXqNgX9nVXtrLfbixQ7pVkGAER7meBmMNXTjgjAZO/Gh+lpwxtxdyYAwPZ2y9VXVUFdK/R0DyApKXwG0+81ntaE/KZeVMqUpYuckeIgwx1RObUYNV8qjmpOsE5KeWbP3wRRzH00ikvm0IXrLZoO5mePrAmOKV2SwyQke1OaOBvwTRo6y1twX+UVT/C6j8TFnQgOGbpNxWY/y1T19k4MpFsZAMhUT68ywL9PYKlwikVNAj8Nm716EhiM8Md1hyYAoG4CDK6/SRFAeRsQZ2li5N3rAMBU0D7hTpecyiWcDKY0TUHwCLL5I7P7SFdvVCJo0ZDHHlwzbNa1NwD1BzjmpJzlNcOzf5oGoIrvHXkHERqRsna9AahPwDeG4yx/41K9umRBouMS4vchPIHjNgWW/SxTFfYi2LtmGQAQ7WWAm8FQb6/XN9kdNeEX7Lexyo/ApQkA1ILpf+As8EwS0DTN5XGpAwBJAA==',
													'base64'
												)
											)
											.toString()),
									a
								);
							},
						],
					]),
					g = {
						hooks: {
							registerPackageExtensions: async (e, t) => {
								for (const [e, r] of A)
									t(n.structUtils.parseDescriptor(e, !0), r);
							},
							getBuiltinPatch: async (e, t) => {
								var r;
								if (!t.startsWith('compat/')) return;
								const i = n.structUtils.parseIdent(t.slice('compat/'.length)),
									A =
										null === (r = c.get(i.identHash)) || void 0 === r
											? void 0
											: r();
								return void 0 !== A ? A : null;
							},
							reduceDependency: async (e, t, r, i) =>
								void 0 === c.get(e.identHash)
									? e
									: n.structUtils.makeDescriptor(
											e,
											n.structUtils.makeRange({
												protocol: 'patch:',
												source: n.structUtils.stringifyDescriptor(e),
												selector: `builtin<compat/${n.structUtils.stringifyIdent(
													e
												)}>`,
												params: null,
											})
									  ),
						},
					};
			},
			10420: (e, t, r) => {
				'use strict';
				r.r(t), r.d(t, { default: () => h });
				var n = r(36370),
					i = r(95397),
					A = r(32741),
					o = r(40822);
				class s extends i.BaseCommand {
					constructor() {
						super(...arguments), (this.quiet = !1), (this.args = []);
					}
					async execute() {
						const e = [];
						this.pkg && e.push('--package', this.pkg),
							this.quiet && e.push('--quiet');
						const t = A.structUtils.parseIdent(this.command),
							r = A.structUtils.makeIdent(t.scope, 'create-' + t.name);
						return this.cli.run([
							'dlx',
							...e,
							A.structUtils.stringifyIdent(r),
							...this.args,
						]);
					}
				}
				(0, n.gn)(
					[
						o.Command.String('-p,--package', {
							description: 'The package to run the provided command from',
						}),
					],
					s.prototype,
					'pkg',
					void 0
				),
					(0, n.gn)(
						[
							o.Command.Boolean('-q,--quiet', {
								description:
									'Only report critical errors instead of printing the full install logs',
							}),
						],
						s.prototype,
						'quiet',
						void 0
					),
					(0, n.gn)([o.Command.String()], s.prototype, 'command', void 0),
					(0, n.gn)([o.Command.Proxy()], s.prototype, 'args', void 0),
					(0, n.gn)([o.Command.Path('create')], s.prototype, 'execute', null);
				var a = r(27122),
					c = r(40376),
					g = r(56537),
					l = r(46009);
				class u extends i.BaseCommand {
					constructor() {
						super(...arguments), (this.quiet = !1), (this.args = []);
					}
					async execute() {
						return (
							(a.VK.telemetry = null),
							await g.xfs.mktempPromise(async (e) => {
								const t = l.y1.join(e, 'dlx-' + process.pid);
								await g.xfs.mkdirPromise(t),
									await g.xfs.writeFilePromise(
										l.y1.join(t, 'package.json'),
										'{}\n'
									),
									await g.xfs.writeFilePromise(l.y1.join(t, 'yarn.lock'), '');
								const r = l.y1.join(t, '.yarnrc.yml'),
									n = await a.VK.findProjectCwd(
										this.context.cwd,
										l.QS.lockfile
									),
									o = null !== n ? l.y1.join(n, '.yarnrc.yml') : null;
								null !== o && g.xfs.existsSync(o)
									? (await g.xfs.copyFilePromise(o, r),
									  await a.VK.updateConfiguration(t, (e) => {
											const t = {
												...e,
												enableGlobalCache: !0,
												enableTelemetry: !1,
											};
											return (
												Array.isArray(e.plugins) &&
													(t.plugins = e.plugins.map((e) => {
														const t = 'string' == typeof e ? e : e.path,
															r = l.cS.isAbsolute(t)
																? t
																: l.cS.resolve(l.cS.fromPortablePath(n), t);
														return 'string' == typeof e
															? r
															: { path: r, spec: e.spec };
													})),
												t
											);
									  }))
									: await g.xfs.writeFilePromise(
											r,
											'enableGlobalCache: true\nenableTelemetry: false\n'
									  );
								const s = void 0 !== this.pkg ? [this.pkg] : [this.command],
									u = A.structUtils.parseDescriptor(this.command).name,
									h = await this.cli.run(['add', '--', ...s], {
										cwd: t,
										quiet: this.quiet,
									});
								if (0 !== h) return h;
								this.quiet || this.context.stdout.write('\n');
								const p = await a.VK.find(t, this.context.plugins),
									{ project: f, workspace: d } = await c.I.find(p, t);
								if (null === d) throw new i.WorkspaceRequiredError(f.cwd, t);
								return (
									await f.restoreInstallState(),
									await A.scriptUtils.executeWorkspaceAccessibleBinary(
										d,
										u,
										this.args,
										{
											cwd: this.context.cwd,
											stdin: this.context.stdin,
											stdout: this.context.stdout,
											stderr: this.context.stderr,
										}
									)
								);
							})
						);
					}
				}
				(u.usage = o.Command.Usage({
					description: 'run a package in a temporary environment',
					details:
						"\n      This command will install a package within a temporary environment, and run its binary script if it contains any. The binary will run within the current cwd.\n\n      By default Yarn will download the package named `command`, but this can be changed through the use of the `-p,--package` flag which will instruct Yarn to still run the same command but from a different package.\n\n      Using `yarn dlx` as a replacement of `yarn add` isn't recommended, as it makes your project non-deterministic (Yarn doesn't keep track of the packages installed through `dlx` - neither their name, nor their version).\n    ",
					examples: [
						[
							'Use create-react-app to create a new React app',
							'yarn dlx create-react-app ./my-app',
						],
					],
				})),
					(0, n.gn)(
						[
							o.Command.String('-p,--package', {
								description: 'The package to run the provided command from',
							}),
						],
						u.prototype,
						'pkg',
						void 0
					),
					(0, n.gn)(
						[
							o.Command.Boolean('-q,--quiet', {
								description:
									'Only report critical errors instead of printing the full install logs',
							}),
						],
						u.prototype,
						'quiet',
						void 0
					),
					(0, n.gn)([o.Command.String()], u.prototype, 'command', void 0),
					(0, n.gn)([o.Command.Proxy()], u.prototype, 'args', void 0),
					(0, n.gn)([o.Command.Path('dlx')], u.prototype, 'execute', null);
				const h = { commands: [s, u] };
			},
			51202: (e, t, r) => {
				'use strict';
				r.r(t), r.d(t, { suggestUtils: () => n, default: () => Oe });
				var n = {};
				r.r(n),
					r.d(n, {
						Modifier: () => A,
						Strategy: () => o,
						Target: () => i,
						applyModifier: () => D,
						extractDescriptorFromPath: () => k,
						extractRangeModifier: () => b,
						fetchDescriptorFrom: () => N,
						findProjectDescriptors: () => S,
						getModifier: () => Q,
						getSuggestedDescriptors: () => M,
					});
				var i,
					A,
					o,
					s = r(27122),
					a = r(36370),
					c = r(95397),
					g = r(28148),
					l = r(62152),
					u = r(92659),
					h = r(40376),
					p = r(15815),
					f = r(32741),
					d = r(40822),
					C = r(61899),
					I = r(33720),
					E = r(46611),
					m = r(46009),
					B = r(56537),
					y = r(53887),
					w = r.n(y);
				function Q(e, t) {
					return e.exact
						? A.EXACT
						: e.caret
						? A.CARET
						: e.tilde
						? A.TILDE
						: t.configuration.get('defaultSemverRangePrefix');
				}
				!(function (e) {
					(e.REGULAR = 'dependencies'),
						(e.DEVELOPMENT = 'devDependencies'),
						(e.PEER = 'peerDependencies');
				})(i || (i = {})),
					(function (e) {
						(e.CARET = '^'), (e.TILDE = '~'), (e.EXACT = '');
					})(A || (A = {})),
					(function (e) {
						(e.KEEP = 'keep'),
							(e.REUSE = 'reuse'),
							(e.PROJECT = 'project'),
							(e.LATEST = 'latest'),
							(e.CACHE = 'cache');
					})(o || (o = {}));
				const v = /^([\^~]?)[0-9]+(?:\.[0-9]+){0,2}(?:-\S+)?$/;
				function b(e, { project: t }) {
					const r = e.match(v);
					return r ? r[1] : t.configuration.get('defaultSemverRangePrefix');
				}
				function D(e, t) {
					let {
						protocol: r,
						source: n,
						params: i,
						selector: A,
					} = f.structUtils.parseRange(e.range);
					return (
						w().valid(A) && (A = `${t}${e.range}`),
						f.structUtils.makeDescriptor(
							e,
							f.structUtils.makeRange({
								protocol: r,
								source: n,
								params: i,
								selector: A,
							})
						)
					);
				}
				async function S(e, { project: t, target: r }) {
					const n = new Map(),
						A = (e) => {
							let t = n.get(e.descriptorHash);
							return (
								t ||
									n.set(
										e.descriptorHash,
										(t = { descriptor: e, locators: [] })
									),
								t
							);
						};
					for (const n of t.workspaces)
						if (r === i.PEER) {
							const t = n.manifest.peerDependencies.get(e.identHash);
							void 0 !== t && A(t).locators.push(n.locator);
						} else {
							const t = n.manifest.dependencies.get(e.identHash),
								o = n.manifest.devDependencies.get(e.identHash);
							r === i.DEVELOPMENT
								? void 0 !== o
									? A(o).locators.push(n.locator)
									: void 0 !== t && A(t).locators.push(n.locator)
								: void 0 !== t
								? A(t).locators.push(n.locator)
								: void 0 !== o && A(o).locators.push(n.locator);
						}
					return n;
				}
				async function k(e, { cwd: t, workspace: r }) {
					return await (async function (e) {
						return await B.xfs.mktempPromise(async (t) => {
							const r = s.VK.create(t);
							return (
								r.useWithSource(
									t,
									{ enableMirror: !1, compressionLevel: 0 },
									t,
									{ overwrite: !0 }
								),
								await e(
									new g.C(t, { configuration: r, check: !1, immutable: !1 })
								)
							);
						});
					})(async (n) => {
						m.y1.isAbsolute(e) ||
							(e = m.y1.relative(r.cwd, m.y1.resolve(t, e))).match(
								/^\.{0,2}\//
							) ||
							(e = './' + e);
						const { project: i } = r,
							A = await N(f.structUtils.makeIdent(null, 'archive'), e, {
								project: r.project,
								cache: n,
								workspace: r,
							});
						if (!A)
							throw new Error(
								'Assertion failed: The descriptor should have been found'
							);
						const o = new I.$(),
							s = i.configuration.makeResolver(),
							a = i.configuration.makeFetcher(),
							c = {
								checksums: i.storedChecksums,
								project: i,
								cache: n,
								fetcher: a,
								report: o,
								resolver: s,
							},
							g = s.bindDescriptor(A, r.anchoredLocator, c),
							l = f.structUtils.convertDescriptorToLocator(g),
							u = await a.fetch(l, c),
							h = await E.G.find(u.prefixPath, { baseFs: u.packageFs });
						if (!h.name) throw new Error("Target path doesn't have a name");
						return f.structUtils.makeDescriptor(h.name, e);
					});
				}
				async function M(
					e,
					{
						project: t,
						workspace: r,
						cache: n,
						target: A,
						modifier: s,
						strategies: a,
						maxResults: c = 1 / 0,
					}
				) {
					if (!(c >= 0)) throw new Error(`Invalid maxResults (${c})`);
					if ('unknown' !== e.range)
						return {
							suggestions: [
								{
									descriptor: e,
									name:
										'Use ' + f.structUtils.prettyDescriptor(t.configuration, e),
									reason: '(unambiguous explicit request)',
								},
							],
							rejections: [],
						};
					const g = (null != r && r.manifest[A].get(e.identHash)) || null,
						l = [],
						u = [],
						h = async (e) => {
							try {
								await e();
							} catch (e) {
								u.push(e);
							}
						};
					for (const u of a) {
						if (l.length >= c) break;
						switch (u) {
							case o.KEEP:
								await h(async () => {
									g &&
										l.push({
											descriptor: g,
											name:
												'Keep ' +
												f.structUtils.prettyDescriptor(t.configuration, g),
											reason: '(no changes)',
										});
								});
								break;
							case o.REUSE:
								await h(async () => {
									for (const { descriptor: n, locators: i } of (
										await S(e, { project: t, target: A })
									).values()) {
										if (
											1 === i.length &&
											i[0].locatorHash === r.anchoredLocator.locatorHash &&
											a.includes(o.KEEP)
										)
											continue;
										let e =
											'(originally used by ' +
											f.structUtils.prettyLocator(t.configuration, i[0]);
										(e +=
											i.length > 1
												? ` and ${i.length - 1} other${
														i.length > 2 ? 's' : ''
												  })`
												: ')'),
											l.push({
												descriptor: n,
												name:
													'Reuse ' +
													f.structUtils.prettyDescriptor(t.configuration, n),
												reason: e,
											});
									}
								});
								break;
							case o.CACHE:
								await h(async () => {
									for (const r of t.storedDescriptors.values())
										r.identHash === e.identHash &&
											l.push({
												descriptor: r,
												name:
													'Reuse ' +
													f.structUtils.prettyDescriptor(t.configuration, r),
												reason: '(already used somewhere in the lockfile)',
											});
								});
								break;
							case o.PROJECT:
								await h(async () => {
									if (
										null !== r.manifest.name &&
										e.identHash === r.manifest.name.identHash
									)
										return;
									const n = t.tryWorkspaceByIdent(e);
									null !== n &&
										l.push({
											descriptor: n.anchoredDescriptor,
											name:
												'Attach ' +
												f.structUtils.prettyWorkspace(t.configuration, n),
											reason: `(local workspace at ${n.cwd})`,
										});
								});
								break;
							case o.LATEST:
								await h(async () => {
									if ('unknown' !== e.range)
										l.push({
											descriptor: e,
											name:
												'Use ' +
												f.structUtils.prettyRange(t.configuration, e.range),
											reason: '(explicit range requested)',
										});
									else if (A === i.PEER)
										l.push({
											descriptor: f.structUtils.makeDescriptor(e, '*'),
											name: 'Use *',
											reason: '(catch-all peer dependency pattern)',
										});
									else if (t.configuration.get('enableNetwork')) {
										let i = await N(e, 'latest', {
											project: t,
											cache: n,
											workspace: r,
											preserveModifier: !1,
										});
										i &&
											((i = D(i, s)),
											l.push({
												descriptor: i,
												name:
													'Use ' +
													f.structUtils.prettyDescriptor(t.configuration, i),
												reason: '(resolved from latest)',
											}));
									} else
										l.push({
											descriptor: null,
											name: 'Resolve from latest',
											reason: f.formatUtils.pretty(
												t.configuration,
												'(unavailable because enableNetwork is toggled off)',
												'grey'
											),
										});
								});
						}
					}
					return { suggestions: l.slice(0, c), rejections: u.slice(0, c) };
				}
				async function N(
					e,
					t,
					{ project: r, cache: n, workspace: i, preserveModifier: A = !0 }
				) {
					const o = f.structUtils.makeDescriptor(e, t),
						s = new I.$(),
						a = r.configuration.makeFetcher(),
						c = r.configuration.makeResolver(),
						g = {
							project: r,
							fetcher: a,
							cache: n,
							checksums: r.storedChecksums,
							report: s,
							skipIntegrityCheck: !0,
						},
						l = { ...g, resolver: c, fetchOptions: g },
						u = c.bindDescriptor(o, i.anchoredLocator, l),
						h = await c.getCandidates(u, new Map(), l);
					if (0 === h.length) return null;
					const p = h[0];
					let {
						protocol: d,
						source: C,
						params: E,
						selector: m,
					} = f.structUtils.parseRange(
						f.structUtils.convertToManifestRange(p.reference)
					);
					if (
						(d === r.configuration.get('defaultProtocol') && (d = null),
						w().valid(m) && !1 !== A)
					) {
						m = b('string' == typeof A ? A : o.range, { project: r }) + m;
					}
					return f.structUtils.makeDescriptor(
						p,
						f.structUtils.makeRange({
							protocol: d,
							source: C,
							params: E,
							selector: m,
						})
					);
				}
				class F extends c.BaseCommand {
					constructor() {
						super(...arguments),
							(this.packages = []),
							(this.json = !1),
							(this.exact = !1),
							(this.tilde = !1),
							(this.caret = !1),
							(this.dev = !1),
							(this.peer = !1),
							(this.optional = !1),
							(this.preferDev = !1),
							(this.interactive = null),
							(this.cached = !1);
					}
					async execute() {
						var e;
						const t = await s.VK.find(this.context.cwd, this.context.plugins),
							{ project: r, workspace: n } = await h.I.find(
								t,
								this.context.cwd
							),
							A = await g.C.find(t);
						if (!n) throw new c.WorkspaceRequiredError(r.cwd, this.context.cwd);
						const a =
								null !== (e = this.interactive) && void 0 !== e
									? e
									: t.get('preferInteractive'),
							I = Q(this, r),
							E = [
								...(a ? [o.REUSE] : []),
								o.PROJECT,
								...(this.cached ? [o.CACHE] : []),
								o.LATEST,
							],
							m = a ? 1 / 0 : 1,
							B = await Promise.all(
								this.packages.map(async (e) => {
									const t = e.match(/^\.{0,2}\//)
											? await k(e, { cwd: this.context.cwd, workspace: n })
											: f.structUtils.parseDescriptor(e),
										o = (function (
											e,
											t,
											{ dev: r, peer: n, preferDev: A, optional: o }
										) {
											const s = e.manifest[i.REGULAR].has(t.identHash),
												a = e.manifest[i.DEVELOPMENT].has(t.identHash),
												c = e.manifest[i.PEER].has(t.identHash);
											if ((r || n) && s)
												throw new d.UsageError(
													`Package "${f.structUtils.prettyIdent(
														e.project.configuration,
														t
													)}" is already listed as a regular dependency - remove the -D,-P flags or remove it from your dependencies first`
												);
											if (!r && !n && c)
												throw new d.UsageError(
													`Package "${f.structUtils.prettyIdent(
														e.project.configuration,
														t
													)}" is already listed as a peer dependency - use either of -D or -P, or remove it from your peer dependencies first`
												);
											if (o && a)
												throw new d.UsageError(
													`Package "${f.structUtils.prettyIdent(
														e.project.configuration,
														t
													)}" is already listed as a dev dependency - remove the -O flag or remove it from your dev dependencies first`
												);
											if (o && !n && c)
												throw new d.UsageError(
													`Package "${f.structUtils.prettyIdent(
														e.project.configuration,
														t
													)}" is already listed as a peer dependency - remove the -O flag or add the -P flag or remove it from your peer dependencies first`
												);
											if ((r || A) && o)
												throw new d.UsageError(
													`Package "${f.structUtils.prettyIdent(
														e.project.configuration,
														t
													)}" cannot simultaneously be a dev dependency and an optional dependency`
												);
											return n
												? i.PEER
												: r || A
												? i.DEVELOPMENT
												: s
												? i.REGULAR
												: a
												? i.DEVELOPMENT
												: i.REGULAR;
										})(n, t, {
											dev: this.dev,
											peer: this.peer,
											preferDev: this.preferDev,
											optional: this.optional,
										});
									return [
										t,
										await M(t, {
											project: r,
											workspace: n,
											cache: A,
											target: o,
											modifier: I,
											strategies: E,
											maxResults: m,
										}),
										o,
									];
								})
							),
							y = await l.h.start(
								{
									configuration: t,
									stdout: this.context.stdout,
									suggestInstall: !1,
								},
								async (e) => {
									for (const [n, { suggestions: i, rejections: A }] of B) {
										if (0 === i.filter((e) => null !== e.descriptor).length) {
											const [i] = A;
											if (void 0 === i)
												throw new Error(
													'Assertion failed: Expected an error to have been set'
												);
											const o = this.cli.error(i);
											r.configuration.get('enableNetwork')
												? e.reportError(
														u.b.CANT_SUGGEST_RESOLUTIONS,
														`${f.structUtils.prettyDescriptor(
															t,
															n
														)} can't be resolved to a satisfying range:\n\n${o}`
												  )
												: e.reportError(
														u.b.CANT_SUGGEST_RESOLUTIONS,
														`${f.structUtils.prettyDescriptor(
															t,
															n
														)} can't be resolved to a satisfying range (note: network resolution has been disabled):\n\n${o}`
												  );
										}
									}
								}
							);
						if (y.hasErrors()) return y.exitCode();
						let w = !1;
						const v = [],
							b = [];
						for (const [, { suggestions: e }, t] of B) {
							let r;
							const i = e.filter((e) => null !== e.descriptor),
								A = i[0].descriptor,
								o = i.every((e) =>
									f.structUtils.areDescriptorsEqual(e.descriptor, A)
								);
							1 === i.length || o
								? (r = A)
								: ((w = !0),
								  ({ answer: r } = await (0, C.prompt)({
										type: 'select',
										name: 'answer',
										message: 'Which range do you want to use?',
										choices: e.map(({ descriptor: e, name: t, reason: r }) =>
											e
												? { name: t, hint: r, descriptor: e }
												: { name: t, hint: r, disabled: !0 }
										),
										onCancel: () => process.exit(130),
										result(e) {
											return this.find(e, 'descriptor');
										},
										stdin: this.context.stdin,
										stdout: this.context.stdout,
								  })));
							const s = n.manifest[t].get(r.identHash);
							(void 0 !== s && s.descriptorHash === r.descriptorHash) ||
								(n.manifest[t].set(r.identHash, r),
								this.optional &&
									('dependencies' === t
										? (n.manifest.ensureDependencyMeta({
												...r,
												range: 'unknown',
										  }).optional = !0)
										: 'peerDependencies' === t &&
										  (n.manifest.ensurePeerDependencyMeta({
												...r,
												range: 'unknown',
										  }).optional = !0)),
								void 0 === s ? v.push([n, t, r, E]) : b.push([n, t, s, r]));
						}
						await t.triggerMultipleHooks(
							(e) => e.afterWorkspaceDependencyAddition,
							v
						),
							await t.triggerMultipleHooks(
								(e) => e.afterWorkspaceDependencyReplacement,
								b
							),
							w && this.context.stdout.write('\n');
						return (
							await p.Pk.start(
								{
									configuration: t,
									json: this.json,
									stdout: this.context.stdout,
									includeLogs: !this.context.quiet,
								},
								async (e) => {
									await r.install({ cache: A, report: e });
								}
							)
						).exitCode();
					}
				}
				(F.usage = d.Command.Usage({
					description: 'add dependencies to the project',
					details:
						"\n      This command adds a package to the package.json for the nearest workspace.\n\n      - If it didn't exist before, the package will by default be added to the regular `dependencies` field, but this behavior can be overriden thanks to the `-D,--dev` flag (which will cause the dependency to be added to the `devDependencies` field instead) and the `-P,--peer` flag (which will do the same but for `peerDependencies`).\n\n      - If the package was already listed in your dependencies, it will by default be upgraded whether it's part of your `dependencies` or `devDependencies` (it won't ever update `peerDependencies`, though).\n\n      - If set, the `--prefer-dev` flag will operate as a more flexible `-D,--dev` in that it will add the package to your `devDependencies` if it isn't already listed in either `dependencies` or `devDependencies`, but it will also happily upgrade your `dependencies` if that's what you already use (whereas `-D,--dev` would throw an exception).\n\n      - If set, the `-O,--optional` flag will add the package to the `optionalDependencies` field and, in combination with the `-P,--peer` flag, it will add the package as an optional peer dependency. If the package was already listed in your `dependencies`, it will be upgraded to `optionalDependencies`. If the package was already listed in your `peerDependencies`, in combination with the `-P,--peer` flag, it will be upgraded to an optional peer dependency: `\"peerDependenciesMeta\": { \"<package>\": { \"optional\": true } }`\n\n      - If the added package doesn't specify a range at all its `latest` tag will be resolved and the returned version will be used to generate a new semver range (using the `^` modifier by default unless otherwise configured via the `defaultSemverRangePrefix` configuration, or the `~` modifier if `-T,--tilde` is specified, or no modifier at all if `-E,--exact` is specified). Two exceptions to this rule: the first one is that if the package is a workspace then its local version will be used, and the second one is that if you use `-P,--peer` the default range will be `*` and won't be resolved at all.\n\n      - If the added package specifies a tag range (such as `latest` or `rc`), Yarn will resolve this tag to a semver version and use that in the resulting package.json entry (meaning that `yarn add foo@latest` will have exactly the same effect as `yarn add foo`).\n\n      If the `--cached` option is used, Yarn will preferably reuse the highest version already used somewhere within the project, even if through a transitive dependency.\n\n      If the `-i,--interactive` option is used (or if the `preferInteractive` settings is toggled on) the command will first try to check whether other workspaces in the project use the specified package and, if so, will offer to reuse them.\n\n      For a compilation of all the supported protocols, please consult the dedicated page from our website: https://yarnpkg.com/features/protocols.\n    ",
					examples: [
						['Add a regular package to the current workspace', '$0 add lodash'],
						[
							'Add a specific version for a package to the current workspace',
							'$0 add lodash@1.2.3',
						],
						[
							'Add a package from a GitHub repository (the master branch) to the current workspace using a URL',
							'$0 add lodash@https://github.com/lodash/lodash',
						],
						[
							'Add a package from a GitHub repository (the master branch) to the current workspace using the GitHub protocol',
							'$0 add lodash@github:lodash/lodash',
						],
						[
							'Add a package from a GitHub repository (the master branch) to the current workspace using the GitHub protocol (shorthand)',
							'$0 add lodash@lodash/lodash',
						],
						[
							'Add a package from a specific branch of a GitHub repository to the current workspace using the GitHub protocol (shorthand)',
							'$0 add lodash-es@lodash/lodash#es',
						],
					],
				})),
					(0, a.gn)([d.Command.Rest()], F.prototype, 'packages', void 0),
					(0, a.gn)(
						[
							d.Command.Boolean('--json', {
								description: 'Format the output as an NDJSON stream',
							}),
						],
						F.prototype,
						'json',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('-E,--exact', {
								description:
									"Don't use any semver modifier on the resolved range",
							}),
						],
						F.prototype,
						'exact',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('-T,--tilde', {
								description:
									'Use the `~` semver modifier on the resolved range',
							}),
						],
						F.prototype,
						'tilde',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('-C,--caret', {
								description:
									'Use the `^` semver modifier on the resolved range',
							}),
						],
						F.prototype,
						'caret',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('-D,--dev', {
								description: 'Add a package as a dev dependency',
							}),
						],
						F.prototype,
						'dev',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('-P,--peer', {
								description: 'Add a package as a peer dependency',
							}),
						],
						F.prototype,
						'peer',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('-O,--optional', {
								description:
									'Add / upgrade a package to an optional regular / peer dependency',
							}),
						],
						F.prototype,
						'optional',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('--prefer-dev', {
								description: 'Add / upgrade a package to a dev dependency',
							}),
						],
						F.prototype,
						'preferDev',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('-i,--interactive', {
								description:
									'Reuse the specified package from other workspaces in the project',
							}),
						],
						F.prototype,
						'interactive',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('--cached', {
								description:
									'Reuse the highest version already used somewhere within the project',
							}),
						],
						F.prototype,
						'cached',
						void 0
					),
					(0, a.gn)([d.Command.Path('add')], F.prototype, 'execute', null);
				class R extends c.BaseCommand {
					constructor() {
						super(...arguments), (this.verbose = !1), (this.json = !1);
					}
					async execute() {
						const e = await s.VK.find(this.context.cwd, this.context.plugins),
							{ project: t, locator: r } = await h.I.find(e, this.context.cwd);
						if ((await t.restoreInstallState(), this.name)) {
							const n = (
								await f.scriptUtils.getPackageAccessibleBinaries(r, {
									project: t,
								})
							).get(this.name);
							if (!n)
								throw new d.UsageError(
									`Couldn't find a binary named "${
										this.name
									}" for package "${f.structUtils.prettyLocator(e, r)}"`
								);
							const [, i] = n;
							return this.context.stdout.write(i + '\n'), 0;
						}
						return (
							await p.Pk.start(
								{
									configuration: e,
									json: this.json,
									stdout: this.context.stdout,
								},
								async (n) => {
									const i = await f.scriptUtils.getPackageAccessibleBinaries(
											r,
											{ project: t }
										),
										A = Array.from(i.keys()).reduce(
											(e, t) => Math.max(e, t.length),
											0
										);
									for (const [e, [t, r]] of i)
										n.reportJson({
											name: e,
											source: f.structUtils.stringifyIdent(t),
											path: r,
										});
									if (this.verbose)
										for (const [t, [r]] of i)
											n.reportInfo(
												null,
												`${t.padEnd(A, ' ')}   ${f.structUtils.prettyLocator(
													e,
													r
												)}`
											);
									else for (const e of i.keys()) n.reportInfo(null, e);
								}
							)
						).exitCode();
					}
				}
				(R.usage = d.Command.Usage({
					description: 'get the path to a binary script',
					details:
						'\n      When used without arguments, this command will print the list of all the binaries available in the current workspace. Adding the `-v,--verbose` flag will cause the output to contain both the binary name and the locator of the package that provides the binary.\n\n      When an argument is specified, this command will just print the path to the binary on the standard output and exit. Note that the reported path may be stored within a zip archive.\n    ',
					examples: [
						['List all the available binaries', '$0 bin'],
						['Print the path to a specific binary', '$0 bin eslint'],
					],
				})),
					(0, a.gn)(
						[d.Command.String({ required: !1 })],
						R.prototype,
						'name',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('-v,--verbose', {
								description:
									'Print both the binary name and the locator of the package that provides the binary',
							}),
						],
						R.prototype,
						'verbose',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('--json', {
								description: 'Format the output as an NDJSON stream',
							}),
						],
						R.prototype,
						'json',
						void 0
					),
					(0, a.gn)([d.Command.Path('bin')], R.prototype, 'execute', null);
				class K extends c.BaseCommand {
					constructor() {
						super(...arguments), (this.mirror = !1), (this.all = !1);
					}
					async execute() {
						const e = await s.VK.find(this.context.cwd, this.context.plugins),
							t = await g.C.find(e);
						return (
							await p.Pk.start(
								{ configuration: e, stdout: this.context.stdout },
								async () => {
									const e = (this.all || this.mirror) && null !== t.mirrorCwd,
										r = !this.mirror;
									e && (await B.xfs.removePromise(t.mirrorCwd)),
										r && (await B.xfs.removePromise(t.cwd));
								}
							)
						).exitCode();
					}
				}
				(K.usage = d.Command.Usage({
					description: 'remove the shared cache files',
					details:
						'\n      This command will remove all the files from the cache.\n    ',
					examples: [
						['Remove all the local archives', '$0 cache clean'],
						[
							'Remove all the archives stored in the ~/.yarn directory',
							'$0 cache clean --mirror',
						],
					],
				})),
					(0, a.gn)(
						[
							d.Command.Boolean('--mirror', {
								description:
									'Remove the global cache files instead of the local cache files',
							}),
						],
						K.prototype,
						'mirror',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('--all', {
								description:
									'Remove both the global cache files and the local cache files of the current project',
							}),
						],
						K.prototype,
						'all',
						void 0
					),
					(0, a.gn)(
						[d.Command.Path('cache', 'clean')],
						K.prototype,
						'execute',
						null
					);
				var L = r(44674),
					x = r.n(L),
					P = r(31669);
				class U extends c.BaseCommand {
					constructor() {
						super(...arguments), (this.json = !1), (this.unsafe = !1);
					}
					async execute() {
						const e = await s.VK.find(this.context.cwd, this.context.plugins),
							t = this.name.replace(/[.[].*$/, ''),
							r = this.name.replace(/^[^.[]*/, '');
						if (void 0 === e.settings.get(t))
							throw new d.UsageError(
								`Couldn't find a configuration settings named "${t}"`
							);
						const n = T(
								e.getSpecial(t, {
									hideSecrets: !this.unsafe,
									getNativePaths: !0,
								})
							),
							i = r ? x()(n, r) : n,
							A = await p.Pk.start(
								{
									configuration: e,
									includeFooter: !1,
									json: this.json,
									stdout: this.context.stdout,
								},
								async (e) => {
									e.reportJson(i);
								}
							);
						if (!this.json) {
							if ('string' == typeof i)
								return this.context.stdout.write(i + '\n'), A.exitCode();
							(P.inspect.styles.name = 'cyan'),
								this.context.stdout.write(
									(0, P.inspect)(i, {
										depth: 1 / 0,
										colors: e.get('enableColors'),
										compact: !1,
									}) + '\n'
								);
						}
						return A.exitCode();
					}
				}
				function T(e) {
					if (
						(e instanceof Map && (e = Object.fromEntries(e)),
						'object' == typeof e && null !== e)
					)
						for (const t of Object.keys(e)) {
							const r = e[t];
							'object' == typeof r && null !== r && (e[t] = T(r));
						}
					return e;
				}
				(U.usage = d.Command.Usage({
					description: 'read a configuration settings',
					details:
						"\n      This command will print a configuration setting.\n\n      Secrets (such as tokens) will be redacted from the output by default. If this behavior isn't desired, set the `--no-redacted` to get the untransformed value.\n    ",
					examples: [
						[
							'Print a simple configuration setting',
							'yarn config get yarnPath',
						],
						[
							'Print a complex configuration setting',
							'yarn config get packageExtensions',
						],
						[
							'Print a nested field from the configuration',
							'yarn config get \'npmScopes["my-company"].npmRegistryServer\'',
						],
						[
							'Print a token from the configuration',
							'yarn config get npmAuthToken --no-redacted',
						],
						[
							'Print a configuration setting as JSON',
							'yarn config get packageExtensions --json',
						],
					],
				})),
					(0, a.gn)([d.Command.String()], U.prototype, 'name', void 0),
					(0, a.gn)(
						[
							d.Command.Boolean('--json', {
								description: 'Format the output as an NDJSON stream',
							}),
						],
						U.prototype,
						'json',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('--no-redacted', {
								description:
									"Don't redact secrets (such as tokens) from the output",
							}),
						],
						U.prototype,
						'unsafe',
						void 0
					),
					(0, a.gn)(
						[d.Command.Path('config', 'get')],
						U.prototype,
						'execute',
						null
					);
				var O = r(82558),
					Y = r.n(O),
					j = r(81534),
					G = r.n(j);
				class H extends c.BaseCommand {
					constructor() {
						super(...arguments), (this.json = !1), (this.home = !1);
					}
					async execute() {
						const e = await s.VK.find(this.context.cwd, this.context.plugins);
						if (!e.projectCwd)
							throw new d.UsageError(
								'This command must be run from within a project folder'
							);
						const t = this.name.replace(/[.[].*$/, ''),
							r = this.name.replace(/^[^.[]*\.?/, '');
						if (void 0 === e.settings.get(t))
							throw new d.UsageError(
								`Couldn't find a configuration settings named "${t}"`
							);
						const n = this.json ? JSON.parse(this.value) : this.value,
							i = this.home
								? (e) => s.VK.updateHomeConfiguration(e)
								: (t) => s.VK.updateConfiguration(e.projectCwd, t);
						await i((e) => {
							if (r) {
								const t = Y()(e);
								return G()(t, this.name, n), t;
							}
							return { ...e, [t]: n };
						});
						const A = T(
								(
									await s.VK.find(this.context.cwd, this.context.plugins)
								).getSpecial(t, { hideSecrets: !0, getNativePaths: !0 })
							),
							o = r ? x()(A, r) : A;
						return (
							await p.Pk.start(
								{
									configuration: e,
									includeFooter: !1,
									stdout: this.context.stdout,
								},
								async (t) => {
									(P.inspect.styles.name = 'cyan'),
										t.reportInfo(
											u.b.UNNAMED,
											`Successfully set ${this.name} to ${(0, P.inspect)(o, {
												depth: 1 / 0,
												colors: e.get('enableColors'),
												compact: !1,
											})}`
										);
								}
							)
						).exitCode();
					}
				}
				(H.usage = d.Command.Usage({
					description: 'change a configuration settings',
					details:
						'\n      This command will set a configuration setting.\n\n      When used without the `--json` flag, it can only set a simple configuration setting (a string, a number, or a boolean).\n\n      When used with the `--json` flag, it can set both simple and complex configuration settings, including Arrays and Objects.\n    ',
					examples: [
						[
							'Set a simple configuration setting (a string, a number, or a boolean)',
							'yarn config set initScope myScope',
						],
						[
							'Set a simple configuration setting (a string, a number, or a boolean) using the `--json` flag',
							'yarn config set initScope --json \\"myScope\\"',
						],
						[
							'Set a complex configuration setting (an Array) using the `--json` flag',
							'yarn config set unsafeHttpWhitelist --json \'["*.example.com", "example.com"]\'',
						],
						[
							'Set a complex configuration setting (an Object) using the `--json` flag',
							'yarn config set packageExtensions --json \'{ "@babel/parser@*": { "dependencies": { "@babel/types": "*" } } }\'',
						],
					],
				})),
					(0, a.gn)([d.Command.String()], H.prototype, 'name', void 0),
					(0, a.gn)([d.Command.String()], H.prototype, 'value', void 0),
					(0, a.gn)(
						[
							d.Command.Boolean('--json', {
								description:
									'Set complex configuration settings to JSON values',
							}),
						],
						H.prototype,
						'json',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('-H,--home', {
								description:
									'Update the home configuration instead of the project configuration',
							}),
						],
						H.prototype,
						'home',
						void 0
					),
					(0, a.gn)(
						[d.Command.Path('config', 'set')],
						H.prototype,
						'execute',
						null
					);
				class J extends c.BaseCommand {
					constructor() {
						super(...arguments),
							(this.verbose = !1),
							(this.why = !1),
							(this.json = !1);
					}
					async execute() {
						const e = await s.VK.find(this.context.cwd, this.context.plugins, {
							strict: !1,
						});
						return (
							await p.Pk.start(
								{
									configuration: e,
									json: this.json,
									stdout: this.context.stdout,
								},
								async (t) => {
									if (e.invalid.size > 0 && !this.json) {
										for (const [r, n] of e.invalid)
											t.reportError(
												u.b.INVALID_CONFIGURATION_KEY,
												`Invalid configuration key "${r}" in ${n}`
											);
										t.reportSeparator();
									}
									if (this.json) {
										const r = f.miscUtils.sortMap(e.settings.keys(), (e) => e);
										for (const n of r) {
											const r = e.settings.get(n),
												i = e.getSpecial(n, {
													hideSecrets: !0,
													getNativePaths: !0,
												}),
												A = e.sources.get(n);
											this.verbose
												? t.reportJson({ key: n, effective: i, source: A })
												: t.reportJson({
														key: n,
														effective: i,
														source: A,
														...r,
												  });
										}
									} else {
										const r = f.miscUtils.sortMap(e.settings.keys(), (e) => e),
											n = r.reduce((e, t) => Math.max(e, t.length), 0),
											i = {
												breakLength: 1 / 0,
												colors: e.get('enableColors'),
												maxArrayLength: 2,
											};
										if (this.why || this.verbose) {
											const A = r.map((t) => {
													const r = e.settings.get(t);
													if (!r)
														throw new Error(
															`Assertion failed: This settings ("${t}") should have been registered`
														);
													return [
														t,
														this.why
															? e.sources.get(t) || '<default>'
															: r.description,
													];
												}),
												o = A.reduce((e, [, t]) => Math.max(e, t.length), 0);
											for (const [r, s] of A)
												t.reportInfo(
													null,
													`${r.padEnd(n, ' ')}   ${s.padEnd(o, ' ')}   ${(0,
													P.inspect)(
														e.getSpecial(r, {
															hideSecrets: !0,
															getNativePaths: !0,
														}),
														i
													)}`
												);
										} else
											for (const A of r)
												t.reportInfo(
													null,
													`${A.padEnd(n, ' ')}   ${(0, P.inspect)(
														e.getSpecial(A, {
															hideSecrets: !0,
															getNativePaths: !0,
														}),
														i
													)}`
												);
									}
								}
							)
						).exitCode();
					}
				}
				(J.usage = d.Command.Usage({
					description: 'display the current configuration',
					details:
						'\n      This command prints the current active configuration settings.\n    ',
					examples: [['Print the active configuration settings', '$0 config']],
				})),
					(0, a.gn)(
						[
							d.Command.Boolean('-v,--verbose', {
								description:
									'Print the setting description on top of the regular key/value information',
							}),
						],
						J.prototype,
						'verbose',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('--why', {
								description:
									'Print the reason why a setting is set a particular way',
							}),
						],
						J.prototype,
						'why',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('--json', {
								description: 'Format the output as an NDJSON stream',
							}),
						],
						J.prototype,
						'json',
						void 0
					),
					(0, a.gn)([d.Command.Path('config')], J.prototype, 'execute', null);
				var _,
					q = r(2401),
					z = r.n(q),
					W = r(15966);
				!(function (e) {
					e.HIGHEST = 'highest';
				})(_ || (_ = {}));
				const V = new Set(Object.values(_)),
					X = {
						highest: async (
							e,
							t,
							{ resolver: r, fetcher: n, resolveOptions: i, fetchOptions: A }
						) => {
							const o = new Map();
							for (const [t, r] of e.storedResolutions) {
								const n = e.storedDescriptors.get(t);
								if (void 0 === n)
									throw new Error(
										`Assertion failed: The descriptor (${t}) should have been registered`
									);
								f.miscUtils.getSetWithDefault(o, n.identHash).add(r);
							}
							return Array.from(e.storedDescriptors.values(), async (n) => {
								if (
									t.length &&
									!z().isMatch(f.structUtils.stringifyIdent(n), t)
								)
									return null;
								const A = e.storedResolutions.get(n.descriptorHash);
								if (void 0 === A)
									throw new Error(
										`Assertion failed: The resolution (${n.descriptorHash}) should have been registered`
									);
								const s = e.originalPackages.get(A);
								if (void 0 === s) return null;
								if (!r.shouldPersistResolution(s, i)) return null;
								const a = o.get(n.identHash);
								if (void 0 === a)
									throw new Error(
										`Assertion failed: The resolutions (${n.identHash}) should have been registered`
									);
								if (1 === a.size) return null;
								const c = [...a].map((t) => {
										const r = e.originalPackages.get(t);
										if (void 0 === r)
											throw new Error(
												`Assertion failed: The package (${t}) should have been registered`
											);
										return r.reference;
									}),
									g = await r.getSatisfying(n, c, i),
									l = null == g ? void 0 : g[0];
								if (void 0 === l) return null;
								const u = l.locatorHash,
									h = e.originalPackages.get(u);
								if (void 0 === h)
									throw new Error(
										`Assertion failed: The package (${u}) should have been registered`
									);
								return u === A
									? null
									: { descriptor: n, currentPackage: s, updatedPackage: h };
							});
						},
					};
				class Z extends c.BaseCommand {
					constructor() {
						super(...arguments),
							(this.patterns = []),
							(this.strategy = _.HIGHEST),
							(this.check = !1),
							(this.json = !1);
					}
					async execute() {
						const e = await s.VK.find(this.context.cwd, this.context.plugins),
							{ project: t } = await h.I.find(e, this.context.cwd),
							r = await g.C.find(e);
						let n = 0;
						const i = await p.Pk.start(
							{
								configuration: e,
								includeFooter: !1,
								stdout: this.context.stdout,
								json: this.json,
							},
							async (e) => {
								n = await (async function ({
									strategy: e,
									project: t,
									patterns: r,
									cache: n,
									report: i,
								}) {
									const { configuration: A } = t,
										o = new I.$(),
										s = A.makeResolver(),
										a = A.makeFetcher(),
										c = {
											cache: n,
											checksums: t.storedChecksums,
											fetcher: a,
											project: t,
											report: o,
											skipIntegrityCheck: !0,
										},
										g = { project: t, resolver: s, report: o, fetchOptions: c };
									return await i.startTimerPromise(
										'Deduplication step',
										async () => {
											const n = X[e],
												o = await n(t, r, {
													resolver: s,
													resolveOptions: g,
													fetcher: a,
													fetchOptions: c,
												}),
												l = p.Pk.progressViaCounter(o.length);
											i.reportProgress(l);
											let h,
												d = 0;
											switch (
												(await Promise.all(
													o.map((e) =>
														e
															.then((e) => {
																if (null === e) return;
																d++;
																const {
																	descriptor: r,
																	currentPackage: n,
																	updatedPackage: o,
																} = e;
																i.reportInfo(
																	u.b.UNNAMED,
																	`${f.structUtils.prettyDescriptor(
																		A,
																		r
																	)} can be deduped from ${f.structUtils.prettyLocator(
																		A,
																		n
																	)} to ${f.structUtils.prettyLocator(A, o)}`
																),
																	i.reportJson({
																		descriptor: f.structUtils.stringifyDescriptor(
																			r
																		),
																		currentResolution: f.structUtils.stringifyLocator(
																			n
																		),
																		updatedResolution: f.structUtils.stringifyLocator(
																			o
																		),
																	}),
																	t.storedResolutions.set(
																		r.descriptorHash,
																		o.locatorHash
																	);
															})
															.finally(() => l.tick())
													)
												),
												d)
											) {
												case 0:
													h = 'No packages';
													break;
												case 1:
													h = 'One package';
													break;
												default:
													h = d + ' packages';
											}
											const C = f.formatUtils.pretty(
												A,
												e,
												f.formatUtils.Type.CODE
											);
											return (
												i.reportInfo(
													u.b.UNNAMED,
													`${h} can be deduped using the ${C} strategy`
												),
												d
											);
										}
									);
								})({
									project: t,
									strategy: this.strategy,
									patterns: this.patterns,
									cache: r,
									report: e,
								});
							}
						);
						if (i.hasErrors()) return i.exitCode();
						if (this.check) return n ? 1 : 0;
						return (
							await p.Pk.start(
								{
									configuration: e,
									stdout: this.context.stdout,
									json: this.json,
								},
								async (e) => {
									await t.install({ cache: r, report: e });
								}
							)
						).exitCode();
					}
				}
				(Z.schema = W.object().shape({
					strategy: W.string().test({
						name: 'strategy',
						message: '${path} must be one of ${strategies}',
						params: { strategies: [...V].join(', ') },
						test: (e) => V.has(e),
					}),
				})),
					(Z.usage = d.Command.Usage({
						description: 'deduplicate dependencies with overlapping ranges',
						details:
							"\n      Duplicates are defined as descriptors with overlapping ranges being resolved and locked to different locators. They are a natural consequence of Yarn's deterministic installs, but they can sometimes pile up and unnecessarily increase the size of your project.\n\n      This command dedupes dependencies in the current project using different strategies (only one is implemented at the moment):\n\n      - `highest`: Reuses (where possible) the locators with the highest versions. This means that dependencies can only be upgraded, never downgraded. It's also guaranteed that it never takes more than a single pass to dedupe the entire dependency tree.\n\n      **Note:** Even though it never produces a wrong dependency tree, this command should be used with caution, as it modifies the dependency tree, which can sometimes cause problems when packages don't strictly follow semver recommendations. Because of this, it is recommended to also review the changes manually.\n\n      If set, the `-c,--check` flag will only report the found duplicates, without persisting the modified dependency tree. If changes are found, the command will exit with a non-zero exit code, making it suitable for CI purposes.\n\n      This command accepts glob patterns as arguments (if valid Idents and supported by [micromatch](https://github.com/micromatch/micromatch)). Make sure to escape the patterns, to prevent your own shell from trying to expand them.\n\n      ### In-depth explanation:\n\n      Yarn doesn't deduplicate dependencies by default, otherwise installs wouldn't be deterministic and the lockfile would be useless. What it actually does is that it tries to not duplicate dependencies in the first place.\n\n      **Example:** If `foo@^2.3.4` (a dependency of a dependency) has already been resolved to `foo@2.3.4`, running `yarn add foo@*`will cause Yarn to reuse `foo@2.3.4`, even if the latest `foo` is actually `foo@2.10.14`, thus preventing unnecessary duplication.\n\n      Duplication happens when Yarn can't unlock dependencies that have already been locked inside the lockfile.\n\n      **Example:** If `foo@^2.3.4` (a dependency of a dependency) has already been resolved to `foo@2.3.4`, running `yarn add foo@2.10.14` will cause Yarn to install `foo@2.10.14` because the existing resolution doesn't satisfy the range `2.10.14`. This behavior can lead to (sometimes) unwanted duplication, since now the lockfile contains 2 separate resolutions for the 2 `foo` descriptors, even though they have overlapping ranges, which means that the lockfile can be simplified so that both descriptors resolve to `foo@2.10.14`.\n    ",
						examples: [
							['Dedupe all packages', '$0 dedupe'],
							[
								'Dedupe all packages using a specific strategy',
								'$0 dedupe --strategy highest',
							],
							['Dedupe a specific package', '$0 dedupe lodash'],
							[
								'Dedupe all packages with the `@babel/*` scope',
								"$0 dedupe '@babel/*'",
							],
							[
								'Check for duplicates (can be used as a CI step)',
								'$0 dedupe --check',
							],
						],
					})),
					(0, a.gn)([d.Command.Rest()], Z.prototype, 'patterns', void 0),
					(0, a.gn)(
						[
							d.Command.String('-s,--strategy', {
								description: 'The strategy to use when deduping dependencies',
							}),
						],
						Z.prototype,
						'strategy',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('-c,--check', {
								description:
									'Exit with exit code 1 when duplicates are found, without persisting the dependency tree',
							}),
						],
						Z.prototype,
						'check',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('--json', {
								description: 'Format the output as an NDJSON stream',
							}),
						],
						Z.prototype,
						'json',
						void 0
					),
					(0, a.gn)([d.Command.Path('dedupe')], Z.prototype, 'execute', null);
				class $ extends d.Command {
					async execute() {
						const { plugins: e } = await s.VK.find(
								this.context.cwd,
								this.context.plugins
							),
							t = [];
						for (const r of e) {
							const { commands: e } = r[1];
							if (e) {
								const n = d.Cli.from(e).definitions();
								t.push([r[0], n]);
							}
						}
						const n = this.cli.definitions(),
							i = r(60306)['@yarnpkg/builder'].bundles.standard;
						for (const e of t) {
							const t = e[1];
							for (const r of t)
								n.find((e) => {
									return (
										(t = e.path),
										(n = r.path),
										t.split(' ').slice(1).join() ===
											n.split(' ').slice(1).join()
									);
									var t, n;
								}).plugin = { name: e[0], isDefault: i.includes(e[0]) };
						}
						this.context.stdout.write(
							JSON.stringify({ commands: n }, null, 2) + '\n'
						);
					}
				}
				(0, a.gn)(
					[d.Command.Path('--clipanion=definitions')],
					$.prototype,
					'execute',
					null
				);
				class ee extends d.Command {
					async execute() {
						this.context.stdout.write(this.cli.usage(null));
					}
				}
				(0, a.gn)(
					[
						d.Command.Path('help'),
						d.Command.Path('--help'),
						d.Command.Path('-h'),
					],
					ee.prototype,
					'execute',
					null
				);
				class te extends d.Command {
					constructor() {
						super(...arguments), (this.args = []);
					}
					async execute() {
						if (
							this.leadingArgument.match(/[\\/]/) &&
							!f.structUtils.tryParseIdent(this.leadingArgument)
						) {
							const e = m.y1.resolve(
								this.context.cwd,
								m.cS.toPortablePath(this.leadingArgument)
							);
							return await this.cli.run(this.args, { cwd: e });
						}
						return await this.cli.run([
							'run',
							this.leadingArgument,
							...this.args,
						]);
					}
				}
				(0, a.gn)(
					[d.Command.String()],
					te.prototype,
					'leadingArgument',
					void 0
				),
					(0, a.gn)([d.Command.Proxy()], te.prototype, 'args', void 0);
				var re = r(59355);
				class ne extends d.Command {
					async execute() {
						this.context.stdout.write((re.o || '<unknown>') + '\n');
					}
				}
				(0, a.gn)(
					[d.Command.Path('-v'), d.Command.Path('--version')],
					ne.prototype,
					'execute',
					null
				);
				class ie extends c.BaseCommand {
					constructor() {
						super(...arguments), (this.args = []);
					}
					async execute() {
						const e = await s.VK.find(this.context.cwd, this.context.plugins),
							{ project: t } = await h.I.find(e, this.context.cwd);
						return await B.xfs.mktempPromise(async (e) => {
							const { code: r } = await f.execUtils.pipevp(
								this.commandName,
								this.args,
								{
									cwd: this.context.cwd,
									stdin: this.context.stdin,
									stdout: this.context.stdout,
									stderr: this.context.stderr,
									env: await f.scriptUtils.makeScriptEnv({
										project: t,
										binFolder: e,
									}),
								}
							);
							return r;
						});
					}
				}
				(ie.usage = d.Command.Usage({
					description: 'execute a shell command',
					details:
						"\n      This command simply executes a shell binary within the context of the root directory of the active workspace.\n\n      It also makes sure to call it in a way that's compatible with the current project (for example, on PnP projects the environment will be setup in such a way that PnP will be correctly injected into the environment).\n    ",
					examples: [['Execute a shell command', '$0 exec echo Hello World']],
				})),
					(0, a.gn)([d.Command.String()], ie.prototype, 'commandName', void 0),
					(0, a.gn)([d.Command.Proxy()], ie.prototype, 'args', void 0),
					(0, a.gn)([d.Command.Path('exec')], ie.prototype, 'execute', null);
				class Ae extends c.BaseCommand {
					constructor() {
						super(...arguments),
							(this.all = !1),
							(this.recursive = !1),
							(this.extra = []),
							(this.cache = !1),
							(this.dependents = !1),
							(this.manifest = !1),
							(this.nameOnly = !1),
							(this.virtuals = !1),
							(this.json = !1),
							(this.patterns = []);
					}
					async execute() {
						const e = await s.VK.find(this.context.cwd, this.context.plugins),
							{ project: t, workspace: r } = await h.I.find(
								e,
								this.context.cwd
							),
							n = await g.C.find(e);
						if (!r && !this.all)
							throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd);
						await t.restoreInstallState();
						const i = new Set(this.extra);
						this.cache && i.add('cache'),
							this.dependents && i.add('dependents'),
							this.manifest && i.add('manifest');
						const A = (e, { recursive: r }) => {
								const n = e.anchoredLocator.locatorHash,
									i = new Map(),
									A = [n];
								for (; A.length > 0; ) {
									const e = A.shift();
									if (i.has(e)) continue;
									const o = t.storedPackages.get(e);
									if (void 0 === o)
										throw new Error(
											'Assertion failed: Expected the package to be registered'
										);
									if (
										(i.set(e, o),
										f.structUtils.isVirtualLocator(o) &&
											A.push(f.structUtils.devirtualizeLocator(o).locatorHash),
										r || e === n)
									)
										for (const e of o.dependencies.values()) {
											const r = t.storedResolutions.get(e.descriptorHash);
											if (void 0 === r)
												throw new Error(
													'Assertion failed: Expected the resolution to be registered'
												);
											A.push(r);
										}
								}
								return i.values();
							},
							o = ({ all: e, recursive: n }) =>
								e && n
									? t.storedPackages.values()
									: e
									? (({ recursive: e }) => {
											const r = new Map();
											for (const n of t.workspaces)
												for (const t of A(n, { recursive: e }))
													r.set(t.locatorHash, t);
											return r.values();
									  })({ recursive: n })
									: A(r, { recursive: n }),
							{ selection: a, sortedLookup: l } = (({
								all: e,
								recursive: t,
							}) => {
								const r = o({ all: e, recursive: t }),
									n = this.patterns.map((e) => {
										const t = f.structUtils.parseLocator(e),
											r = z().makeRe(f.structUtils.stringifyIdent(t)),
											n = f.structUtils.isVirtualLocator(t),
											i = n ? f.structUtils.devirtualizeLocator(t) : t;
										return (e) => {
											const A = f.structUtils.stringifyIdent(e);
											if (!r.test(A)) return !1;
											if ('unknown' === t.reference) return !0;
											const o = f.structUtils.isVirtualLocator(e),
												s = o ? f.structUtils.devirtualizeLocator(e) : e;
											return (
												(!n || !o || t.reference === e.reference) &&
												i.reference === s.reference
											);
										};
									}),
									i = f.miscUtils.sortMap([...r], (e) =>
										f.structUtils.stringifyLocator(e)
									);
								return {
									selection: i.filter(
										(e) => 0 === n.length || n.some((t) => t(e))
									),
									sortedLookup: i,
								};
							})({ all: this.all, recursive: this.recursive });
						if (0 === a.length)
							throw new d.UsageError('No package matched your request');
						const u = new Map();
						if (this.dependents)
							for (const e of l)
								for (const r of e.dependencies.values()) {
									const n = t.storedResolutions.get(r.descriptorHash);
									if (void 0 === n)
										throw new Error(
											'Assertion failed: Expected the resolution to be registered'
										);
									f.miscUtils.getArrayWithDefault(u, n).push(e);
								}
						const p = new Map();
						for (const e of l) {
							if (!f.structUtils.isVirtualLocator(e)) continue;
							const t = f.structUtils.devirtualizeLocator(e);
							f.miscUtils.getArrayWithDefault(p, t.locatorHash).push(e);
						}
						const C = {},
							m = { children: C },
							y = e.makeFetcher(),
							w = {
								project: t,
								fetcher: y,
								cache: n,
								checksums: t.storedChecksums,
								report: new I.$(),
								skipIntegrityCheck: !0,
							},
							Q = [
								async (e, t, r) => {
									var n, i;
									if (!t.has('manifest')) return;
									const A = await y.fetch(e, w);
									let o;
									try {
										o = await E.G.find(A.prefixPath, { baseFs: A.packageFs });
									} finally {
										null === (n = A.releaseFs) || void 0 === n || n.call(A);
									}
									r('Manifest', {
										License: f.formatUtils.tuple(
											f.formatUtils.Type.NO_HINT,
											o.license
										),
										Homepage: f.formatUtils.tuple(
											f.formatUtils.Type.URL,
											null !== (i = o.raw.homepage) && void 0 !== i ? i : null
										),
									});
								},
								async (e, r, i) => {
									var A;
									if (!r.has('cache')) return;
									const o =
											null !== (A = t.storedChecksums.get(e.locatorHash)) &&
											void 0 !== A
												? A
												: null,
										s = n.getLocatorPath(e, o);
									let a;
									if (null !== s)
										try {
											a = B.xfs.statSync(s);
										} catch (e) {}
									const c =
										void 0 !== a ? [a.size, f.formatUtils.Type.SIZE] : void 0;
									i('Cache', {
										Checksum: f.formatUtils.tuple(
											f.formatUtils.Type.NO_HINT,
											o
										),
										Path: f.formatUtils.tuple(f.formatUtils.Type.PATH, s),
										Size: c,
									});
								},
							];
						for (const r of a) {
							const n = f.structUtils.isVirtualLocator(r);
							if (!this.virtuals && n) continue;
							const A = {},
								o = { value: [r, f.formatUtils.Type.LOCATOR], children: A };
							if (((C[f.structUtils.stringifyLocator(r)] = o), this.nameOnly)) {
								delete o.children;
								continue;
							}
							const s = p.get(r.locatorHash);
							void 0 !== s &&
								(A.Instances = {
									label: 'Instances',
									value: f.formatUtils.tuple(
										f.formatUtils.Type.NUMBER,
										s.length
									),
								}),
								(A.Version = {
									label: 'Version',
									value: f.formatUtils.tuple(
										f.formatUtils.Type.NO_HINT,
										r.version
									),
								});
							const a = (e, t) => {
								const r = {};
								if (((A[e] = r), Array.isArray(t)))
									r.children = t.map((e) => ({ value: e }));
								else {
									const e = {};
									r.children = e;
									for (const [r, n] of Object.entries(t))
										void 0 !== n && (e[r] = { label: r, value: n });
								}
							};
							if (!n) {
								for (const e of Q) await e(r, i, a);
								await e.triggerHook((e) => e.fetchPackageInfo, r, i, a);
							}
							r.bin.size > 0 &&
								!n &&
								a(
									'Exported Binaries',
									[...r.bin.keys()].map((e) =>
										f.formatUtils.tuple(f.formatUtils.Type.PATH, e)
									)
								);
							const c = u.get(r.locatorHash);
							void 0 !== c &&
								c.length > 0 &&
								a(
									'Dependents',
									c.map((e) =>
										f.formatUtils.tuple(f.formatUtils.Type.LOCATOR, e)
									)
								),
								r.dependencies.size > 0 &&
									!n &&
									a(
										'Dependencies',
										[...r.dependencies.values()].map((e) => {
											var r;
											const n = t.storedResolutions.get(e.descriptorHash),
												i =
													void 0 !== n &&
													null !== (r = t.storedPackages.get(n)) &&
													void 0 !== r
														? r
														: null;
											return f.formatUtils.tuple(
												f.formatUtils.Type.RESOLUTION,
												{ descriptor: e, locator: i }
											);
										})
									),
								r.peerDependencies.size > 0 &&
									n &&
									a(
										'Peer dependencies',
										[...r.peerDependencies.values()].map((e) => {
											var n, i;
											const A = r.dependencies.get(e.identHash),
												o =
													void 0 !== A &&
													null !==
														(n = t.storedResolutions.get(A.descriptorHash)) &&
													void 0 !== n
														? n
														: null,
												s =
													null !== o &&
													null !== (i = t.storedPackages.get(o)) &&
													void 0 !== i
														? i
														: null;
											return f.formatUtils.tuple(
												f.formatUtils.Type.RESOLUTION,
												{ descriptor: e, locator: s }
											);
										})
									);
						}
						f.treeUtils.emitTree(m, {
							configuration: e,
							json: this.json,
							stdout: this.context.stdout,
							separators: this.nameOnly ? 0 : 2,
						});
					}
				}
				(Ae.usage = d.Command.Usage({
					description: 'see information related to packages',
					details:
						'\n      This command prints various information related to the specified packages, accepting glob patterns.\n\n      By default, if the locator reference is missing, Yarn will default to print the information about all the matching direct dependencies of the package for the active workspace. To instead print all versions of the package that are direct dependencies of any of your workspaces, use the `-A,--all` flag. Adding the `-R,--recursive` flag will also report transitive dependencies.\n\n      Some fields will be hidden by default in order to keep the output readable, but can be selectively displayed by using additional options (`--dependents`, `--manifest`, `--virtuals`, ...) described in the option descriptions.\n\n      Note that this command will only print the information directly related to the selected packages - if you wish to know why the package is there in the first place, use `yarn why` which will do just that (it also provides a `-R,--recursive` flag that may be of some help).\n    ',
					examples: [['Show information about Lodash', '$0 info lodash']],
				})),
					(0, a.gn)(
						[
							d.Command.Boolean('-A,--all', {
								description:
									'Print versions of a package from the whole project',
							}),
						],
						Ae.prototype,
						'all',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('-R,--recursive', {
								description:
									'Print information for all packages, including transitive dependencies',
							}),
						],
						Ae.prototype,
						'recursive',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Array('-X,--extra', {
								description:
									'An array of requests of extra data provided by plugins',
							}),
						],
						Ae.prototype,
						'extra',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('--cache', {
								description:
									'Print information about the cache entry of a package (path, size, checksum)',
							}),
						],
						Ae.prototype,
						'cache',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('--dependents', {
								description: 'Print all dependents for each matching package',
							}),
						],
						Ae.prototype,
						'dependents',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('--manifest', {
								description:
									'Print data obtained by looking at the package archive (license, homepage, ...)',
							}),
						],
						Ae.prototype,
						'manifest',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('--name-only', {
								description: 'Only print the name for the matching packages',
							}),
						],
						Ae.prototype,
						'nameOnly',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('--virtuals', {
								description: 'Print each instance of the virtual packages',
							}),
						],
						Ae.prototype,
						'virtuals',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('--json', {
								description: 'Format the output as an NDJSON stream',
							}),
						],
						Ae.prototype,
						'json',
						void 0
					),
					(0, a.gn)([d.Command.Rest()], Ae.prototype, 'patterns', void 0),
					(0, a.gn)([d.Command.Path('info')], Ae.prototype, 'execute', null);
				var oe = r(35691),
					se = r(55125),
					ae = r(5864);
				class ce extends c.BaseCommand {
					constructor() {
						super(...arguments),
							(this.json = !1),
							(this.checkCache = !1),
							(this.silent = !1);
					}
					async execute() {
						var e, t, r;
						const n = await s.VK.find(this.context.cwd, this.context.plugins);
						void 0 !== this.inlineBuilds &&
							n.useWithSource(
								'<cli>',
								{ enableInlineBuilds: this.inlineBuilds },
								n.startingCwd,
								{ overwrite: !0 }
							);
						const i = !!process.env.NOW_BUILDER,
							A = !!process.env.NETLIFY,
							o = !!process.env.FUNCTION_TARGET || !!process.env.GOOGLE_RUNTIME,
							a = async (e, { error: t }) => {
								const r = await p.Pk.start(
									{
										configuration: n,
										stdout: this.context.stdout,
										includeFooter: !1,
									},
									async (r) => {
										t
											? r.reportError(u.b.DEPRECATED_CLI_SETTINGS, e)
											: r.reportWarning(u.b.DEPRECATED_CLI_SETTINGS, e);
									}
								);
								return r.hasErrors() ? r.exitCode() : null;
							};
						if (void 0 !== this.ignoreEngines) {
							const e = await a(
								"The --ignore-engines option is deprecated; engine checking isn't a core feature anymore",
								{ error: !i }
							);
							if (null !== e) return e;
						}
						if (void 0 !== this.registry) {
							const e = await a(
								'The --registry option is deprecated; prefer setting npmRegistryServer in your .yarnrc.yml file',
								{ error: !1 }
							);
							if (null !== e) return e;
						}
						if (void 0 !== this.preferOffline) {
							const e = await a(
								"The --prefer-offline flag is deprecated; use the --cached flag with 'yarn add' instead",
								{ error: !i }
							);
							if (null !== e) return e;
						}
						if (void 0 !== this.production) {
							const e = await a(
								"The --production option is deprecated on 'install'; use 'yarn workspaces focus' instead",
								{ error: !0 }
							);
							if (null !== e) return e;
						}
						if (void 0 !== this.nonInteractive) {
							const e = await a('The --non-interactive option is deprecated', {
								error: !o,
							});
							if (null !== e) return e;
						}
						if (void 0 !== this.frozenLockfile) {
							const e = await a(
								'The --frozen-lockfile option is deprecated; use --immutable and/or --immutable-cache instead',
								{ error: !o && !ae.TRAVIS }
							);
							if (null !== e) return e;
						}
						if (void 0 !== this.cacheFolder) {
							const e = await a(
								'The cache-folder option has been deprecated; use rc settings instead',
								{ error: !A }
							);
							if (null !== e) return e;
						}
						const l =
							void 0 === this.immutable && void 0 === this.frozenLockfile
								? null !== (e = n.get('enableImmutableInstalls')) &&
								  void 0 !== e &&
								  e
								: null !==
										(r =
											null !== (t = this.immutable) && void 0 !== t
												? t
												: this.frozenLockfile) &&
								  void 0 !== r &&
								  r;
						if (null !== n.projectCwd) {
							const e = await p.Pk.start(
								{
									configuration: n,
									json: this.json,
									stdout: this.context.stdout,
									includeFooter: !1,
								},
								async (e) => {
									(await (async function (e, t) {
										if (!e.projectCwd) return !1;
										const r = m.y1.join(
											e.projectCwd,
											e.get('lockfileFilename')
										);
										if (!(await B.xfs.existsPromise(r))) return !1;
										const n = await B.xfs.readFilePromise(r, 'utf8');
										if (!n.includes('<<<<<<<')) return !1;
										if (t)
											throw new oe.lk(
												u.b.AUTOMERGE_IMMUTABLE,
												'Cannot autofix a lockfile when running an immutable install'
											);
										const [i, A] = (function (e) {
											const t = [[], []],
												r = e.split(/\r?\n/g);
											let n = !1;
											for (; r.length > 0; ) {
												const e = r.shift();
												if (void 0 === e)
													throw new Error(
														'Assertion failed: Some lines should remain'
													);
												if (e.startsWith('<<<<<<<')) {
													for (; r.length > 0; ) {
														const e = r.shift();
														if (void 0 === e)
															throw new Error(
																'Assertion failed: Some lines should remain'
															);
														if ('=======' === e) {
															n = !1;
															break;
														}
														n || e.startsWith('|||||||')
															? (n = !0)
															: t[0].push(e);
													}
													for (; r.length > 0; ) {
														const e = r.shift();
														if (void 0 === e)
															throw new Error(
																'Assertion failed: Some lines should remain'
															);
														if (e.startsWith('>>>>>>>')) break;
														t[1].push(e);
													}
												} else t[0].push(e), t[1].push(e);
											}
											return [t[0].join('\n'), t[1].join('\n')];
										})(n);
										let o, s;
										try {
											(o = (0, se.parseSyml)(i)), (s = (0, se.parseSyml)(A));
										} catch (e) {
											throw new oe.lk(
												u.b.AUTOMERGE_FAILED_TO_PARSE,
												'The individual variants of the lockfile failed to parse'
											);
										}
										const a = { ...o, ...s };
										for (const [e, t] of Object.entries(a))
											'string' == typeof t && delete a[e];
										return (
											await B.xfs.changeFilePromise(
												r,
												(0, se.stringifySyml)(a),
												{ automaticNewlines: !0 }
											),
											!0
										);
									})(n, l)) &&
										(e.reportInfo(
											u.b.AUTOMERGE_SUCCESS,
											'Automatically fixed merge conflicts 👍'
										),
										e.reportSeparator());
								}
							);
							if (e.hasErrors()) return e.exitCode();
						}
						if (null !== n.projectCwd) {
							const e = await p.Pk.start(
								{
									configuration: n,
									json: this.json,
									stdout: this.context.stdout,
									includeFooter: !1,
								},
								async (e) => {
									var t;
									(null === (t = s.VK.telemetry) || void 0 === t
										? void 0
										: t.isNew) &&
										(e.reportInfo(
											u.b.TELEMETRY_NOTICE,
											'Yarn will periodically gather anonymous telemetry: https://yarnpkg.com/advanced/telemetry'
										),
										e.reportInfo(
											u.b.TELEMETRY_NOTICE,
											`Run ${f.formatUtils.pretty(
												n,
												'yarn config set --home enableTelemetry 0',
												f.formatUtils.Type.CODE
											)} to disable`
										),
										e.reportSeparator());
								}
							);
							if (e.hasErrors()) return e.exitCode();
						}
						const { project: d, workspace: C } = await h.I.find(
								n,
								this.context.cwd
							),
							I = await g.C.find(n, {
								immutable: this.immutableCache,
								check: this.checkCache,
							});
						if (!C) throw new c.WorkspaceRequiredError(d.cwd, this.context.cwd);
						return (
							await p.Pk.start(
								{
									configuration: n,
									json: this.json,
									stdout: this.context.stdout,
									includeLogs: !0,
								},
								async (e) => {
									await d.install({ cache: I, report: e, immutable: l });
								}
							)
						).exitCode();
					}
				}
				(ce.usage = d.Command.Usage({
					description: 'install the project dependencies',
					details:
						"\n      This command setup your project if needed. The installation is splitted in four different steps that each have their own characteristics:\n\n      - **Resolution:** First the package manager will resolve your dependencies. The exact way a dependency version is privileged over another isn't standardized outside of the regular semver guarantees. If a package doesn't resolve to what you would expect, check that all dependencies are correctly declared (also check our website for more information: ).\n\n      - **Fetch:** Then we download all the dependencies if needed, and make sure that they're all stored within our cache (check the value of `cacheFolder` in `yarn config` to see where are stored the cache files).\n\n      - **Link:** Then we send the dependency tree information to internal plugins tasked from writing them on the disk in some form (for example by generating the .pnp.js file you might know).\n\n      - **Build:** Once the dependency tree has been written on the disk, the package manager will now be free to run the build scripts for all packages that might need it, in a topological order compatible with the way they depend on one another.\n\n      Note that running this command is not part of the recommended workflow. Yarn supports zero-installs, which means that as long as you store your cache and your .pnp.js file inside your repository, everything will work without requiring any install right after cloning your repository or switching branches.\n\n      If the `--immutable` option is set, Yarn will abort with an error exit code if the lockfile was to be modified (other paths can be added using the `immutablePaths` configuration setting). For backward compatibility we offer an alias under the name of `--frozen-lockfile`, but it will be removed in a later release.\n\n      If the `--immutable-cache` option is set, Yarn will abort with an error exit code if the cache folder was to be modified (either because files would be added, or because they'd be removed).\n\n      If the `--check-cache` option is set, Yarn will always refetch the packages and will ensure that their checksum matches what's 1/ described in the lockfile 2/ inside the existing cache files (if present). This is recommended as part of your CI workflow if you're both following the Zero-Installs model and accepting PRs from third-parties, as they'd otherwise have the ability to alter the checked-in packages before submitting them.\n\n      If the `--inline-builds` option is set, Yarn will verbosely print the output of the build steps of your dependencies (instead of writing them into individual files). This is likely useful mostly for debug purposes only when using Docker-like environments.\n    ",
					examples: [
						['Install the project', '$0 install'],
						[
							'Validate a project when using Zero-Installs',
							'$0 install --immutable --immutable-cache',
						],
						[
							'Validate a project when using Zero-Installs (slightly safer if you accept external PRs)',
							'$0 install --immutable --immutable-cache --check-cache',
						],
					],
				})),
					(0, a.gn)(
						[
							d.Command.Boolean('--json', {
								description: 'Format the output as an NDJSON stream',
							}),
						],
						ce.prototype,
						'json',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('--immutable', {
								description:
									'Abort with an error exit code if the lockfile was to be modified',
							}),
						],
						ce.prototype,
						'immutable',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('--immutable-cache', {
								description:
									'Abort with an error exit code if the cache folder was to be modified',
							}),
						],
						ce.prototype,
						'immutableCache',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('--check-cache', {
								description:
									'Always refetch the packages and ensure that their checksums are consistent',
							}),
						],
						ce.prototype,
						'checkCache',
						void 0
					),
					(0, a.gn)(
						[d.Command.Boolean('--production', { hidden: !0 })],
						ce.prototype,
						'production',
						void 0
					),
					(0, a.gn)(
						[d.Command.Boolean('--non-interactive', { hidden: !0 })],
						ce.prototype,
						'nonInteractive',
						void 0
					),
					(0, a.gn)(
						[d.Command.Boolean('--frozen-lockfile', { hidden: !0 })],
						ce.prototype,
						'frozenLockfile',
						void 0
					),
					(0, a.gn)(
						[d.Command.Boolean('--prefer-offline', { hidden: !0 })],
						ce.prototype,
						'preferOffline',
						void 0
					),
					(0, a.gn)(
						[d.Command.Boolean('--ignore-engines', { hidden: !0 })],
						ce.prototype,
						'ignoreEngines',
						void 0
					),
					(0, a.gn)(
						[d.Command.String('--registry', { hidden: !0 })],
						ce.prototype,
						'registry',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('--inline-builds', {
								description:
									'Verbosely print the output of the build steps of dependencies',
							}),
						],
						ce.prototype,
						'inlineBuilds',
						void 0
					),
					(0, a.gn)(
						[d.Command.String('--cache-folder', { hidden: !0 })],
						ce.prototype,
						'cacheFolder',
						void 0
					),
					(0, a.gn)(
						[d.Command.Boolean('--silent', { hidden: !0 })],
						ce.prototype,
						'silent',
						void 0
					),
					(0, a.gn)(
						[d.Command.Path(), d.Command.Path('install')],
						ce.prototype,
						'execute',
						null
					);
				class ge extends c.BaseCommand {
					constructor() {
						super(...arguments),
							(this.all = !1),
							(this.private = !1),
							(this.relative = !1);
					}
					async execute() {
						const e = await s.VK.find(this.context.cwd, this.context.plugins),
							{ project: t, workspace: r } = await h.I.find(
								e,
								this.context.cwd
							),
							n = await g.C.find(e);
						if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd);
						const i = m.y1.resolve(
								this.context.cwd,
								m.cS.toPortablePath(this.destination)
							),
							A = await s.VK.find(i, this.context.plugins),
							{ project: o, workspace: a } = await h.I.find(A, i);
						if (!a) throw new c.WorkspaceRequiredError(o.cwd, i);
						const l = t.topLevelWorkspace,
							u = [];
						if (this.all) {
							for (const e of o.workspaces)
								!e.manifest.name ||
									(e.manifest.private && !this.private) ||
									u.push(e);
							if (0 === u.length)
								throw new d.UsageError(
									'No workspace found to be linked in the target project'
								);
						} else {
							if (!a.manifest.name)
								throw new d.UsageError(
									"The target workspace doesn't have a name and thus cannot be linked"
								);
							if (a.manifest.private && !this.private)
								throw new d.UsageError(
									'The target workspace is marked private - use the --private flag to link it anyway'
								);
							u.push(a);
						}
						for (const e of u) {
							const r = f.structUtils.stringifyIdent(e.locator),
								n = this.relative ? m.y1.relative(t.cwd, e.cwd) : e.cwd;
							l.manifest.resolutions.push({
								pattern: { descriptor: { fullName: r } },
								reference: 'portal:' + n,
							});
						}
						return (
							await p.Pk.start(
								{ configuration: e, stdout: this.context.stdout },
								async (e) => {
									await t.install({ cache: n, report: e });
								}
							)
						).exitCode();
					}
				}
				(ge.usage = d.Command.Usage({
					description: 'connect the local project to another one',
					details:
						'\n      This command will set a new `resolutions` field in the project-level manifest and point it to the workspace at the specified location (even if part of another project).\n\n      There is no `yarn unlink` command. To unlink the workspaces from the current project one must revert the changes made to the `resolutions` field.\n    ',
					examples: [
						[
							'Register a remote workspace for use in the current project',
							'$0 link ~/ts-loader',
						],
						[
							'Register all workspaces from a remote project for use in the current project',
							'$0 link ~/jest --all',
						],
					],
				})),
					(0, a.gn)([d.Command.String()], ge.prototype, 'destination', void 0),
					(0, a.gn)(
						[
							d.Command.Boolean('-A,--all', {
								description:
									'Link all workspaces belonging to the target project to the current one',
							}),
						],
						ge.prototype,
						'all',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('-p,--private', {
								description:
									'Also link private workspaces belonging to the target project to the current one',
							}),
						],
						ge.prototype,
						'private',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('-r,--relative', {
								description:
									'Link workspaces using relative paths instead of absolute paths',
							}),
						],
						ge.prototype,
						'relative',
						void 0
					),
					(0, a.gn)([d.Command.Path('link')], ge.prototype, 'execute', null);
				class le extends c.BaseCommand {
					constructor() {
						super(...arguments), (this.args = []);
					}
					async execute() {
						return this.cli.run(['exec', 'node', ...this.args]);
					}
				}
				(le.usage = d.Command.Usage({
					description: 'run node with the hook already setup',
					details:
						"\n      This command simply runs Node. It also makes sure to call it in a way that's compatible with the current project (for example, on PnP projects the environment will be setup in such a way that PnP will be correctly injected into the environment).\n\n      The Node process will use the exact same version of Node as the one used to run Yarn itself, which might be a good way to ensure that your commands always use a consistent Node version.\n    ",
					examples: [['Run a Node script', '$0 node ./my-script.js']],
				})),
					(0, a.gn)([d.Command.Proxy()], le.prototype, 'args', void 0),
					(0, a.gn)([d.Command.Path('node')], le.prototype, 'execute', null);
				var ue = r(12087),
					he = r(85622),
					pe = r.n(he);
				class fe extends c.BaseCommand {
					constructor() {
						super(...arguments), (this.onlyIfNeeded = !1);
					}
					async execute() {
						const e = await s.VK.find(this.context.cwd, this.context.plugins);
						if (e.get('yarnPath') && this.onlyIfNeeded) return 0;
						let t;
						if ('latest' === this.version || 'berry' === this.version)
							t =
								'https://github.com/yarnpkg/berry/raw/master/packages/yarnpkg-cli/bin/yarn.js';
						else if ('classic' === this.version)
							t = 'https://nightly.yarnpkg.com/latest.js';
						else if (f.semverUtils.v(this.version, '>=2.0.0'))
							t = `https://github.com/yarnpkg/berry/raw/%40yarnpkg/cli/${this.version}/packages/yarnpkg-cli/bin/yarn.js`;
						else {
							if (!f.semverUtils.v(this.version, '^0.x || ^1.x'))
								throw w().validRange(this.version)
									? new d.UsageError(
											"Support for ranges got removed - please use the exact version you want to install, or 'latest' to get the latest build available"
									  )
									: new d.UsageError(
											`Invalid version descriptor "${this.version}"`
									  );
							t = `https://github.com/yarnpkg/yarn/releases/download/v${this.version}/yarn-${this.version}.js`;
						}
						return (
							await p.Pk.start(
								{ configuration: e, stdout: this.context.stdout },
								async (r) => {
									r.reportInfo(
										u.b.UNNAMED,
										'Downloading ' + f.formatUtils.pretty(e, t, 'green')
									);
									const n = await f.httpUtils.get(t, { configuration: e });
									await de(e, null, n, { report: r });
								}
							)
						).exitCode();
					}
				}
				async function de(e, t, r, { report: n }) {
					const i = e.projectCwd ? e.projectCwd : e.startingCwd;
					null === t &&
						(await B.xfs.mktempPromise(async (e) => {
							const n = m.y1.join(e, 'yarn.cjs');
							await B.xfs.writeFilePromise(n, r);
							const { stdout: A } = await f.execUtils.execvp(
								process.execPath,
								[m.cS.fromPortablePath(n), '--version'],
								{ cwd: i, env: { ...process.env, YARN_IGNORE_PATH: '1' } }
							);
							if (((t = A.trim()), !w().valid(t)))
								throw new Error('Invalid semver version');
						}));
					const A = m.y1.resolve(i, '.yarn/releases'),
						o = m.y1.resolve(A, `yarn-${t}.cjs`),
						a = m.y1.relative(e.startingCwd, o),
						c = m.y1.relative(i, o),
						g = e.get('yarnPath'),
						l = null === g || g.startsWith(A + '/');
					n.reportInfo(
						u.b.UNNAMED,
						'Saving the new release in ' + f.formatUtils.pretty(e, a, 'magenta')
					),
						await B.xfs.removePromise(m.y1.dirname(o)),
						await B.xfs.mkdirPromise(m.y1.dirname(o), { recursive: !0 }),
						await B.xfs.writeFilePromise(o, r),
						await B.xfs.chmodPromise(o, 493),
						l && (await s.VK.updateConfiguration(i, { yarnPath: c }));
				}
				(fe.usage = d.Command.Usage({
					description: 'lock the Yarn version used by the project',
					details:
						'\n      This command will download a specific release of Yarn directly from the Yarn GitHub repository, will store it inside your project, and will change the `yarnPath` settings from your project `.yarnrc.yml` file to point to the new file.\n\n      A very good use case for this command is to enforce the version of Yarn used by the any single member of your team inside a same project - by doing this you ensure that you have control on Yarn upgrades and downgrades (including on your deployment servers), and get rid of most of the headaches related to someone using a slightly different version and getting a different behavior than you.\n    ',
					examples: [
						[
							'Download the latest release from the Yarn repository',
							'$0 set version latest',
						],
						[
							'Download the latest classic release from the Yarn repository',
							'$0 set version classic',
						],
						['Download a specific Yarn 2 build', '$0 set version 2.0.0-rc.30'],
						[
							'Switch back to a specific Yarn 1 release',
							'$0 set version 1.22.1',
						],
					],
				})),
					(0, a.gn)(
						[
							d.Command.Boolean('--only-if-needed', {
								description:
									"Only lock the Yarn version if it isn't already locked",
							}),
						],
						fe.prototype,
						'onlyIfNeeded',
						void 0
					),
					(0, a.gn)([d.Command.String()], fe.prototype, 'version', void 0),
					(0, a.gn)(
						[
							d.Command.Path('policies', 'set-version'),
							d.Command.Path('set', 'version'),
						],
						fe.prototype,
						'execute',
						null
					);
				const Ce = /^[0-9]+$/;
				function Ie(e) {
					return Ce.test(e) ? `pull/${e}/head` : e;
				}
				class Ee extends c.BaseCommand {
					constructor() {
						super(...arguments),
							(this.repository = 'https://github.com/yarnpkg/berry.git'),
							(this.branch = 'master'),
							(this.plugins = []),
							(this.noMinify = !1),
							(this.force = !1);
					}
					async execute() {
						const e = await s.VK.find(this.context.cwd, this.context.plugins),
							t =
								void 0 !== this.installPath
									? m.y1.resolve(
											this.context.cwd,
											m.cS.toPortablePath(this.installPath)
									  )
									: m.y1.resolve(
											m.cS.toPortablePath((0, ue.tmpdir)()),
											'yarnpkg-sources',
											f.hashUtils.makeHash(this.repository).slice(0, 6)
									  );
						return (
							await p.Pk.start(
								{ configuration: e, stdout: this.context.stdout },
								async (r) => {
									await Be(this, { configuration: e, report: r, target: t }),
										r.reportSeparator(),
										r.reportInfo(u.b.UNNAMED, 'Building a fresh bundle'),
										r.reportSeparator(),
										await me(
											(({ plugins: e, noMinify: t }, r) => [
												[
													'yarn',
													'build:cli',
													...new Array().concat(
														...e.map((e) => ['--plugin', pe().resolve(r, e)])
													),
													...(t ? ['--no-minify'] : []),
													'|',
												],
											])(this, t),
											{ configuration: e, context: this.context, target: t }
										),
										r.reportSeparator();
									const n = m.y1.resolve(
											t,
											'packages/yarnpkg-cli/bundles/yarn.js'
										),
										i = await B.xfs.readFilePromise(n);
									await de(e, 'sources', i, { report: r });
								}
							)
						).exitCode();
					}
				}
				async function me(e, { configuration: t, context: r, target: n }) {
					for (const [i, ...A] of e) {
						const e = '|' === A[A.length - 1];
						if ((e && A.pop(), e))
							await f.execUtils.pipevp(i, A, {
								cwd: n,
								stdin: r.stdin,
								stdout: r.stdout,
								stderr: r.stderr,
								strict: !0,
							});
						else {
							r.stdout.write(
								f.formatUtils.pretty(t, '  $ ' + [i, ...A].join(' '), 'grey') +
									'\n'
							);
							try {
								await f.execUtils.execvp(i, A, { cwd: n, strict: !0 });
							} catch (e) {
								throw (r.stdout.write(e.stdout || e.stack), e);
							}
						}
					}
				}
				async function Be(e, { configuration: t, report: r, target: n }) {
					let i = !1;
					if (!e.force && B.xfs.existsSync(m.y1.join(n, '.git'))) {
						r.reportInfo(u.b.UNNAMED, 'Fetching the latest commits'),
							r.reportSeparator();
						try {
							await me(
								(({ branch: e }) => [
									['git', 'fetch', 'origin', Ie(e), '--force'],
									['git', 'reset', '--hard', 'FETCH_HEAD'],
									['git', 'clean', '-dfx'],
								])(e),
								{ configuration: t, context: e.context, target: n }
							),
								(i = !0);
						} catch (e) {
							r.reportSeparator(),
								r.reportWarning(
									u.b.UNNAMED,
									"Repository update failed; we'll try to regenerate it"
								);
						}
					}
					i ||
						(r.reportInfo(u.b.UNNAMED, 'Cloning the remote repository'),
						r.reportSeparator(),
						await B.xfs.removePromise(n),
						await B.xfs.mkdirPromise(n, { recursive: !0 }),
						await me(
							(({ repository: e, branch: t }, r) => [
								['git', 'init', m.cS.fromPortablePath(r)],
								['git', 'remote', 'add', 'origin', e],
								['git', 'fetch', 'origin', Ie(t)],
								['git', 'reset', '--hard', 'FETCH_HEAD'],
							])(e, n),
							{ configuration: t, context: e.context, target: n }
						));
				}
				(Ee.usage = d.Command.Usage({
					description: 'build Yarn from master',
					details:
						'\n      This command will clone the Yarn repository into a temporary folder, then build it. The resulting bundle will then be copied into the local project.\n    ',
					examples: [['Build Yarn from master', '$0 set version from sources']],
				})),
					(0, a.gn)(
						[
							d.Command.String('--path', {
								description:
									'The path where the repository should be cloned to',
							}),
						],
						Ee.prototype,
						'installPath',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.String('--repository', {
								description: 'The repository that should be cloned',
							}),
						],
						Ee.prototype,
						'repository',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.String('--branch', {
								description:
									'The branch of the repository that should be cloned',
							}),
						],
						Ee.prototype,
						'branch',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Array('--plugin', {
								description:
									'An array of additional plugins that should be included in the bundle',
							}),
						],
						Ee.prototype,
						'plugins',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('--no-minify', {
								description:
									'Build a bundle for development (debugging) - non-minified and non-mangled',
							}),
						],
						Ee.prototype,
						'noMinify',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('-f,--force', {
								description:
									'Always clone the repository instead of trying to fetch the latest commits',
							}),
						],
						Ee.prototype,
						'force',
						void 0
					),
					(0, a.gn)(
						[d.Command.Path('set', 'version', 'from', 'sources')],
						Ee.prototype,
						'execute',
						null
					);
				var ye = r(78835),
					we = r(92184);
				async function Qe(e) {
					const t = await f.httpUtils.get(
						'https://raw.githubusercontent.com/yarnpkg/berry/master/plugins.yml',
						{ configuration: e }
					);
					return (0, se.parseSyml)(t.toString());
				}
				class ve extends c.BaseCommand {
					constructor() {
						super(...arguments), (this.json = !1);
					}
					async execute() {
						const e = await s.VK.find(this.context.cwd, this.context.plugins);
						return (
							await p.Pk.start(
								{
									configuration: e,
									json: this.json,
									stdout: this.context.stdout,
								},
								async (t) => {
									const r = await Qe(e);
									for (const [e, { experimental: n, ...i }] of Object.entries(
										r
									)) {
										let r = e;
										n && (r += ' [experimental]'),
											t.reportJson({ name: e, experimental: n, ...i }),
											t.reportInfo(null, r);
									}
								}
							)
						).exitCode();
					}
				}
				(ve.usage = d.Command.Usage({
					category: 'Plugin-related commands',
					description: 'list the available official plugins',
					details:
						'\n      This command prints the plugins available directly from the Yarn repository. Only those plugins can be referenced by name in `yarn plugin import`.\n    ',
					examples: [['List the official plugins', '$0 plugin list']],
				})),
					(0, a.gn)(
						[
							d.Command.Boolean('--json', {
								description: 'Format the output as an NDJSON stream',
							}),
						],
						ve.prototype,
						'json',
						void 0
					),
					(0, a.gn)(
						[d.Command.Path('plugin', 'list')],
						ve.prototype,
						'execute',
						null
					);
				class be extends c.BaseCommand {
					async execute() {
						const e = await s.VK.find(this.context.cwd, this.context.plugins);
						return (
							await p.Pk.start(
								{ configuration: e, stdout: this.context.stdout },
								async (t) => {
									const { project: r } = await h.I.find(e, this.context.cwd);
									let n, i;
									if (
										this.name.match(/^\.{0,2}[\\/]/) ||
										m.cS.isAbsolute(this.name)
									) {
										const A = m.y1.resolve(
											this.context.cwd,
											m.cS.toPortablePath(this.name)
										);
										t.reportInfo(
											u.b.UNNAMED,
											'Reading ' + f.formatUtils.pretty(e, A, 'green')
										),
											(n = m.y1.relative(r.cwd, A)),
											(i = await B.xfs.readFilePromise(A));
									} else {
										let r;
										if (this.name.match(/^https?:/)) {
											try {
												new ye.URL(this.name);
											} catch (e) {
												throw new oe.lk(
													u.b.INVALID_PLUGIN_REFERENCE,
													`Plugin specifier "${this.name}" is neither a plugin name nor a valid url`
												);
											}
											(n = this.name), (r = this.name);
										} else {
											const t = f.structUtils.parseIdent(
													this.name.replace(
														/^((@yarnpkg\/)?plugin-)?/,
														'@yarnpkg/plugin-'
													)
												),
												i = f.structUtils.stringifyIdent(t),
												A = await Qe(e);
											if (!Object.prototype.hasOwnProperty.call(A, i))
												throw new oe.lk(
													u.b.PLUGIN_NAME_NOT_FOUND,
													`Couldn't find a plugin named "${i}" on the remote registry. Note that only the plugins referenced on our website (https://github.com/yarnpkg/berry/blob/master/plugins.yml) can be referenced by their name; any other plugin will have to be referenced through its public url (for example https://github.com/yarnpkg/berry/raw/master/packages/plugin-typescript/bin/%40yarnpkg/plugin-typescript.js).`
												);
											(n = i), (r = A[i].url);
										}
										t.reportInfo(
											u.b.UNNAMED,
											'Downloading ' + f.formatUtils.pretty(e, r, 'green')
										),
											(i = await f.httpUtils.get(r, { configuration: e }));
									}
									await De(n, i, { project: r, report: t });
								}
							)
						).exitCode();
					}
				}
				async function De(e, t, { project: r, report: n }) {
					const { configuration: i } = r,
						A = {},
						o = { exports: A };
					(0, we.runInNewContext)(t.toString(), { module: o, exports: A });
					const a = o.exports.name,
						c = `.yarn/plugins/${a}.cjs`,
						g = m.y1.resolve(r.cwd, c);
					n.reportInfo(
						u.b.UNNAMED,
						'Saving the new plugin in ' + f.formatUtils.pretty(i, c, 'magenta')
					),
						await B.xfs.mkdirPromise(m.y1.dirname(g), { recursive: !0 }),
						await B.xfs.writeFilePromise(g, t);
					const l = { path: c, spec: e };
					await s.VK.updateConfiguration(r.cwd, (e) => {
						const t = [];
						let n = !1;
						for (const i of e.plugins || []) {
							const e = 'string' != typeof i ? i.path : i,
								A = m.y1.resolve(r.cwd, m.cS.toPortablePath(e)),
								{ name: o } = f.miscUtils.dynamicRequire(
									m.cS.fromPortablePath(A)
								);
							o !== a ? t.push(i) : (t.push(l), (n = !0));
						}
						return n || t.push(l), { ...e, plugins: t };
					});
				}
				(be.usage = d.Command.Usage({
					category: 'Plugin-related commands',
					description: 'download a plugin',
					details:
						"\n      This command downloads the specified plugin from its remote location and updates the configuration to reference it in further CLI invocations.\n\n      Three types of plugin references are accepted:\n\n      - If the plugin is stored within the Yarn repository, it can be referenced by name.\n      - Third-party plugins can be referenced directly through their public urls.\n      - Local plugins can be referenced by their path on the disk.\n\n      Plugins cannot be downloaded from the npm registry, and aren't allowed to have dependencies (they need to be bundled into a single file, possibly thanks to the `@yarnpkg/builder` package).\n    ",
					examples: [
						[
							'Download and activate the "@yarnpkg/plugin-exec" plugin',
							'$0 plugin import @yarnpkg/plugin-exec',
						],
						[
							'Download and activate the "@yarnpkg/plugin-exec" plugin (shorthand)',
							'$0 plugin import exec',
						],
						[
							'Download and activate a community plugin',
							'$0 plugin import https://example.org/path/to/plugin.js',
						],
						['Activate a local plugin', '$0 plugin import ./path/to/plugin.js'],
					],
				})),
					(0, a.gn)([d.Command.String()], be.prototype, 'name', void 0),
					(0, a.gn)(
						[d.Command.Path('plugin', 'import')],
						be.prototype,
						'execute',
						null
					);
				class Se extends c.BaseCommand {
					constructor() {
						super(...arguments),
							(this.repository = 'https://github.com/yarnpkg/berry.git'),
							(this.branch = 'master'),
							(this.noMinify = !1),
							(this.force = !1);
					}
					async execute() {
						const e = await s.VK.find(this.context.cwd, this.context.plugins),
							t =
								void 0 !== this.installPath
									? m.y1.resolve(
											this.context.cwd,
											m.cS.toPortablePath(this.installPath)
									  )
									: m.y1.resolve(
											m.cS.toPortablePath((0, ue.tmpdir)()),
											'yarnpkg-sources',
											f.hashUtils.makeHash(this.repository).slice(0, 6)
									  );
						return (
							await p.Pk.start(
								{ configuration: e, stdout: this.context.stdout },
								async (r) => {
									const { project: n } = await h.I.find(e, this.context.cwd),
										i = f.structUtils.parseIdent(
											this.name.replace(
												/^((@yarnpkg\/)?plugin-)?/,
												'@yarnpkg/plugin-'
											)
										),
										A = f.structUtils.stringifyIdent(i),
										o = await Qe(e);
									if (!Object.prototype.hasOwnProperty.call(o, A))
										throw new oe.lk(
											u.b.PLUGIN_NAME_NOT_FOUND,
											`Couldn't find a plugin named "${A}" on the remote registry. Note that only the plugins referenced on our website (https://github.com/yarnpkg/berry/blob/master/plugins.yml) can be built and imported from sources.`
										);
									const s = A,
										a = s.replace(/@yarnpkg\//, '');
									await Be(this, { configuration: e, report: r, target: t }),
										r.reportSeparator(),
										r.reportInfo(u.b.UNNAMED, 'Building a fresh ' + a),
										r.reportSeparator(),
										await me(
											(({ pluginName: e, noMinify: t }, r) => [
												[
													'yarn',
													'build:' + e,
													...(t ? ['--no-minify'] : []),
													'|',
												],
											])({ pluginName: a, noMinify: this.noMinify }),
											{ configuration: e, context: this.context, target: t }
										),
										r.reportSeparator();
									const c = m.y1.resolve(t, `packages/${a}/bundles/${s}.js`),
										g = await B.xfs.readFilePromise(c);
									await De(s, g, { project: n, report: r });
								}
							)
						).exitCode();
					}
				}
				(Se.usage = d.Command.Usage({
					category: 'Plugin-related commands',
					description: 'build a plugin from sources',
					details:
						'\n      This command clones the Yarn repository into a temporary folder, builds the specified contrib plugin and updates the configuration to reference it in further CLI invocations.\n\n      The plugins can be referenced by their short name if sourced from the official Yarn repository.\n    ',
					examples: [
						[
							'Build and activate the "@yarnpkg/plugin-exec" plugin',
							'$0 plugin import from sources @yarnpkg/plugin-exec',
						],
						[
							'Build and activate the "@yarnpkg/plugin-exec" plugin (shorthand)',
							'$0 plugin import from sources exec',
						],
					],
				})),
					(0, a.gn)([d.Command.String()], Se.prototype, 'name', void 0),
					(0, a.gn)(
						[
							d.Command.String('--path', {
								description:
									'The path where the repository should be cloned to',
							}),
						],
						Se.prototype,
						'installPath',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.String('--repository', {
								description: 'The repository that should be cloned',
							}),
						],
						Se.prototype,
						'repository',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.String('--branch', {
								description:
									'The branch of the repository that should be cloned',
							}),
						],
						Se.prototype,
						'branch',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('--no-minify', {
								description:
									'Build a plugin for development (debugging) - non-minified and non-mangled',
							}),
						],
						Se.prototype,
						'noMinify',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('-f,--force', {
								description:
									'Always clone the repository instead of trying to fetch the latest commits',
							}),
						],
						Se.prototype,
						'force',
						void 0
					),
					(0, a.gn)(
						[d.Command.Path('plugin', 'import', 'from', 'sources')],
						Se.prototype,
						'execute',
						null
					);
				class ke extends c.BaseCommand {
					async execute() {
						const e = await s.VK.find(this.context.cwd, this.context.plugins),
							{ project: t } = await h.I.find(e, this.context.cwd);
						return (
							await p.Pk.start(
								{ configuration: e, stdout: this.context.stdout },
								async (r) => {
									const n = this.name,
										i = f.structUtils.parseIdent(n);
									if (!e.plugins.has(n))
										throw new d.UsageError(
											f.structUtils.prettyIdent(e, i) +
												" isn't referenced by the current configuration"
										);
									const A = `.yarn/plugins/${n}.cjs`,
										o = m.y1.resolve(t.cwd, A);
									B.xfs.existsSync(o) &&
										(r.reportInfo(
											u.b.UNNAMED,
											`Removing ${f.formatUtils.pretty(
												e,
												A,
												f.formatUtils.Type.PATH
											)}...`
										),
										await B.xfs.removePromise(o)),
										r.reportInfo(u.b.UNNAMED, 'Updating the configuration...'),
										await s.VK.updateConfiguration(t.cwd, (e) => {
											if (!Array.isArray(e.plugins)) return e;
											const t = e.plugins.filter((e) => e.path !== A);
											return e.plugins.length === t.length
												? e
												: { ...e, plugins: t };
										});
								}
							)
						).exitCode();
					}
				}
				(ke.usage = d.Command.Usage({
					category: 'Plugin-related commands',
					description: 'remove a plugin',
					details:
						'\n      This command deletes the specified plugin from the .yarn/plugins folder and removes it from the configuration.\n\n      **Note:** The plugins have to be referenced by their name property, which can be obtained using the `yarn plugin runtime` command. Shorthands are not allowed.\n   ',
					examples: [
						[
							'Remove a plugin imported from the Yarn repository',
							'$0 plugin remove @yarnpkg/plugin-typescript',
						],
						[
							'Remove a plugin imported from a local file',
							'$0 plugin remove my-local-plugin',
						],
					],
				})),
					(0, a.gn)([d.Command.String()], ke.prototype, 'name', void 0),
					(0, a.gn)(
						[d.Command.Path('plugin', 'remove')],
						ke.prototype,
						'execute',
						null
					);
				class Me extends c.BaseCommand {
					constructor() {
						super(...arguments), (this.json = !1);
					}
					async execute() {
						const e = await s.VK.find(this.context.cwd, this.context.plugins);
						return (
							await p.Pk.start(
								{
									configuration: e,
									json: this.json,
									stdout: this.context.stdout,
								},
								async (t) => {
									for (const r of e.plugins.keys()) {
										const e = this.context.plugins.plugins.has(r);
										let n = r;
										e && (n += ' [builtin]'),
											t.reportJson({ name: r, builtin: e }),
											t.reportInfo(null, '' + n);
									}
								}
							)
						).exitCode();
					}
				}
				(Me.usage = d.Command.Usage({
					category: 'Plugin-related commands',
					description: 'list the active plugins',
					details:
						'\n      This command prints the currently active plugins. Will be displayed both builtin plugins and external plugins.\n    ',
					examples: [
						['List the currently active plugins', '$0 plugin runtime'],
					],
				})),
					(0, a.gn)(
						[
							d.Command.Boolean('--json', {
								description: 'Format the output as an NDJSON stream',
							}),
						],
						Me.prototype,
						'json',
						void 0
					),
					(0, a.gn)(
						[d.Command.Path('plugin', 'runtime')],
						Me.prototype,
						'execute',
						null
					);
				class Ne extends c.BaseCommand {
					constructor() {
						super(...arguments), (this.idents = []);
					}
					async execute() {
						const e = await s.VK.find(this.context.cwd, this.context.plugins),
							{ project: t, workspace: r } = await h.I.find(
								e,
								this.context.cwd
							),
							n = await g.C.find(e);
						if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd);
						const i = new Set();
						for (const e of this.idents)
							i.add(f.structUtils.parseIdent(e).identHash);
						await t.resolveEverything({ cache: n, report: new I.$() });
						const A = e.get('bstatePath'),
							o = B.xfs.existsSync(A)
								? (0, se.parseSyml)(await B.xfs.readFilePromise(A, 'utf8'))
								: {},
							a = new Map();
						for (const e of t.storedPackages.values()) {
							if (!Object.prototype.hasOwnProperty.call(o, e.locatorHash))
								continue;
							if (0 === i.size || i.has(e.identHash)) continue;
							const t = o[e.locatorHash];
							a.set(e.locatorHash, t);
						}
						if (a.size > 0) {
							const r = e.get('bstatePath'),
								n = h.I.generateBuildStateFile(a, t.storedPackages);
							await B.xfs.mkdirPromise(m.y1.dirname(r), { recursive: !0 }),
								await B.xfs.changeFilePromise(r, n, { automaticNewlines: !0 });
						} else await B.xfs.removePromise(A);
						return (
							await p.Pk.start(
								{
									configuration: e,
									stdout: this.context.stdout,
									includeLogs: !this.context.quiet,
								},
								async (e) => {
									await t.install({ cache: n, report: e });
								}
							)
						).exitCode();
					}
				}
				(Ne.usage = d.Command.Usage({
					description: "rebuild the project's native packages",
					details:
						"\n      This command will automatically cause Yarn to forget about previous compilations of the given packages and to run them again.\n\n      Note that while Yarn forgets the compilation, the previous artifacts aren't erased from the filesystem and may affect the next builds (in good or bad). To avoid this, you may remove the .yarn/unplugged folder, or any other relevant location where packages might have been stored (Yarn may offer a way to do that automatically in the future).\n\n      By default all packages will be rebuilt, but you can filter the list by specifying the names of the packages you want to clear from memory.\n    ",
					examples: [
						['Rebuild all packages', '$0 rebuild'],
						['Rebuild fsevents only', '$0 rebuild fsevents'],
					],
				})),
					(0, a.gn)([d.Command.Rest()], Ne.prototype, 'idents', void 0),
					(0, a.gn)([d.Command.Path('rebuild')], Ne.prototype, 'execute', null);
				class Fe extends c.BaseCommand {
					constructor() {
						super(...arguments), (this.all = !1), (this.patterns = []);
					}
					async execute() {
						const e = await s.VK.find(this.context.cwd, this.context.plugins),
							{ project: t, workspace: r } = await h.I.find(
								e,
								this.context.cwd
							),
							n = await g.C.find(e);
						if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd);
						const A = this.all ? t.workspaces : [r],
							o = [i.REGULAR, i.DEVELOPMENT, i.PEER],
							a = [];
						let l = !1;
						const u = [];
						for (const e of this.patterns) {
							let t = !1;
							const r = f.structUtils.parseIdent(e);
							for (const n of A) {
								const i = [...n.manifest.peerDependenciesMeta.keys()];
								for (const r of z()(i, e))
									n.manifest.peerDependenciesMeta.delete(r), (l = !0), (t = !0);
								for (const e of o) {
									const i = n.manifest.getForScope(e),
										A = [...i.values()].map((e) =>
											f.structUtils.stringifyIdent(e)
										);
									for (const o of z()(A, f.structUtils.stringifyIdent(r))) {
										const { identHash: r } = f.structUtils.parseIdent(o),
											A = i.get(r);
										if (void 0 === A)
											throw new Error(
												'Assertion failed: Expected the descriptor to be registered'
											);
										n.manifest[e].delete(r),
											u.push([n, e, A]),
											(l = !0),
											(t = !0);
									}
								}
							}
							t || a.push(e);
						}
						const C = a.length > 1 ? 'Patterns' : 'Pattern',
							I = a.length > 1 ? "don't" : "doesn't",
							E = this.all ? 'any' : 'this';
						if (a.length > 0)
							throw new d.UsageError(
								`${C} ${f.formatUtils.prettyList(
									e,
									a,
									s.a5.CODE
								)} ${I} match any packages referenced by ${E} workspace`
							);
						if (l) {
							await e.triggerMultipleHooks(
								(e) => e.afterWorkspaceDependencyRemoval,
								u
							);
							return (
								await p.Pk.start(
									{ configuration: e, stdout: this.context.stdout },
									async (e) => {
										await t.install({ cache: n, report: e });
									}
								)
							).exitCode();
						}
						return 0;
					}
				}
				(Fe.usage = d.Command.Usage({
					description: 'remove dependencies from the project',
					details:
						'\n      This command will remove the packages matching the specified patterns from the current workspace.\n\n      This command accepts glob patterns as arguments (if valid Idents and supported by [micromatch](https://github.com/micromatch/micromatch)). Make sure to escape the patterns, to prevent your own shell from trying to expand them.\n    ',
					examples: [
						[
							'Remove a dependency from the current project',
							'$0 remove lodash',
						],
						[
							'Remove a dependency from all workspaces at once',
							'$0 remove lodash --all',
						],
						[
							'Remove all dependencies starting with `eslint-`',
							"$0 remove 'eslint-*'",
						],
						[
							'Remove all dependencies with the `@babel` scope',
							"$0 remove '@babel/*'",
						],
						[
							'Remove all dependencies matching `react-dom` or `react-helmet`',
							"$0 remove 'react-{dom,helmet}'",
						],
					],
				})),
					(0, a.gn)(
						[
							d.Command.Boolean('-A,--all', {
								description:
									'Apply the operation to all workspaces from the current project',
							}),
						],
						Fe.prototype,
						'all',
						void 0
					),
					(0, a.gn)([d.Command.Rest()], Fe.prototype, 'patterns', void 0),
					(0, a.gn)([d.Command.Path('remove')], Fe.prototype, 'execute', null);
				class Re extends c.BaseCommand {
					async execute() {
						const e = await s.VK.find(this.context.cwd, this.context.plugins),
							{ project: t, workspace: r } = await h.I.find(
								e,
								this.context.cwd
							);
						if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd);
						return (
							await p.Pk.start(
								{ configuration: e, stdout: this.context.stdout },
								async (t) => {
									const n = r.manifest.scripts,
										i = f.miscUtils.sortMap(n.keys(), (e) => e),
										A = {
											breakLength: 1 / 0,
											colors: e.get('enableColors'),
											maxArrayLength: 2,
										},
										o = i.reduce((e, t) => Math.max(e, t.length), 0);
									for (const [e, r] of n.entries())
										t.reportInfo(
											null,
											`${e.padEnd(o, ' ')}   ${(0, P.inspect)(r, A)}`
										);
								}
							)
						).exitCode();
					}
				}
				(0, a.gn)([d.Command.Path('run')], Re.prototype, 'execute', null);
				class Ke extends c.BaseCommand {
					constructor() {
						super(...arguments),
							(this.inspect = !1),
							(this.inspectBrk = !1),
							(this.topLevel = !1),
							(this.binariesOnly = !1),
							(this.args = []);
					}
					async execute() {
						const e = await s.VK.find(this.context.cwd, this.context.plugins),
							{ project: t, workspace: r, locator: n } = await h.I.find(
								e,
								this.context.cwd
							);
						await t.restoreInstallState();
						const i = this.topLevel ? t.topLevelWorkspace.anchoredLocator : n;
						if (
							!this.binariesOnly &&
							(await f.scriptUtils.hasPackageScript(i, this.scriptName, {
								project: t,
							}))
						)
							return await f.scriptUtils.executePackageScript(
								i,
								this.scriptName,
								this.args,
								{
									project: t,
									stdin: this.context.stdin,
									stdout: this.context.stdout,
									stderr: this.context.stderr,
								}
							);
						if (
							(
								await f.scriptUtils.getPackageAccessibleBinaries(i, {
									project: t,
								})
							).get(this.scriptName)
						) {
							const e = [];
							return (
								this.inspect &&
									('string' == typeof this.inspect
										? e.push('--inspect=' + this.inspect)
										: e.push('--inspect')),
								this.inspectBrk &&
									('string' == typeof this.inspectBrk
										? e.push('--inspect-brk=' + this.inspectBrk)
										: e.push('--inspect-brk')),
								await f.scriptUtils.executePackageAccessibleBinary(
									i,
									this.scriptName,
									this.args,
									{
										cwd: this.context.cwd,
										project: t,
										stdin: this.context.stdin,
										stdout: this.context.stdout,
										stderr: this.context.stderr,
										nodeArgs: e,
									}
								)
							);
						}
						if (
							!this.topLevel &&
							!this.binariesOnly &&
							r &&
							this.scriptName.includes(':')
						) {
							const e = (
								await Promise.all(
									t.workspaces.map(async (e) =>
										e.manifest.scripts.has(this.scriptName) ? e : null
									)
								)
							).filter((e) => null !== e);
							if (1 === e.length)
								return await f.scriptUtils.executeWorkspaceScript(
									e[0],
									this.scriptName,
									this.args,
									{
										stdin: this.context.stdin,
										stdout: this.context.stdout,
										stderr: this.context.stderr,
									}
								);
						}
						if (this.topLevel)
							throw 'node-gyp' === this.scriptName
								? new d.UsageError(
										`Couldn't find a script name "${
											this.scriptName
										}" in the top-level (used by ${f.structUtils.prettyLocator(
											e,
											n
										)}). This typically happens because some package depends on "node-gyp" to build itself, but didn't list it in their dependencies. To fix that, please run "yarn add node-gyp" into your top-level workspace. You also can open an issue on the repository of the specified package to suggest them to use an optional peer dependency.`
								  )
								: new d.UsageError(
										`Couldn't find a script name "${
											this.scriptName
										}" in the top-level (used by ${f.structUtils.prettyLocator(
											e,
											n
										)}).`
								  );
						{
							if ('global' === this.scriptName)
								throw new d.UsageError(
									"The 'yarn global' commands have been removed in 2.x - consider using 'yarn dlx' or a third-party plugin instead"
								);
							const e = [this.scriptName].concat(this.args);
							for (const [t, r] of c.pluginCommands)
								for (const n of r)
									if (
										e.length >= n.length &&
										JSON.stringify(e.slice(0, n.length)) === JSON.stringify(n)
									)
										throw new d.UsageError(
											`Couldn't find a script named "${this.scriptName}", but a matching command can be found in the ${t} plugin. You can install it with "yarn plugin import ${t}".`
										);
							throw new d.UsageError(
								`Couldn't find a script named "${this.scriptName}".`
							);
						}
					}
				}
				(Ke.usage = d.Command.Usage({
					description: 'run a script defined in the package.json',
					details:
						"\n      This command will run a tool. The exact tool that will be executed will depend on the current state of your workspace:\n\n      - If the `scripts` field from your local package.json contains a matching script name, its definition will get executed.\n\n      - Otherwise, if one of the local workspace's dependencies exposes a binary with a matching name, this binary will get executed.\n\n      - Otherwise, if the specified name contains a colon character and if one of the workspaces in the project contains exactly one script with a matching name, then this script will get executed.\n\n      Whatever happens, the cwd of the spawned process will be the workspace that declares the script (which makes it possible to call commands cross-workspaces using the third syntax).\n    ",
					examples: [
						['Run the tests from the local workspace', '$0 run test'],
						['Same thing, but without the "run" keyword', '$0 test'],
						['Inspect Webpack while running', '$0 run --inspect-brk webpack'],
					],
				})),
					(0, a.gn)(
						[
							d.Command.String('--inspect', {
								tolerateBoolean: !0,
								description:
									'Forwarded to the underlying Node process when executing a binary',
							}),
						],
						Ke.prototype,
						'inspect',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.String('--inspect-brk', {
								tolerateBoolean: !0,
								description:
									'Forwarded to the underlying Node process when executing a binary',
							}),
						],
						Ke.prototype,
						'inspectBrk',
						void 0
					),
					(0, a.gn)(
						[d.Command.Boolean('-T,--top-level', { hidden: !0 })],
						Ke.prototype,
						'topLevel',
						void 0
					),
					(0, a.gn)(
						[d.Command.Boolean('-B,--binaries-only', { hidden: !0 })],
						Ke.prototype,
						'binariesOnly',
						void 0
					),
					(0, a.gn)(
						[d.Command.Boolean('--silent', { hidden: !0 })],
						Ke.prototype,
						'silent',
						void 0
					),
					(0, a.gn)([d.Command.String()], Ke.prototype, 'scriptName', void 0),
					(0, a.gn)([d.Command.Proxy()], Ke.prototype, 'args', void 0),
					(0, a.gn)([d.Command.Path('run')], Ke.prototype, 'execute', null);
				class Le extends c.BaseCommand {
					constructor() {
						super(...arguments), (this.save = !1);
					}
					async execute() {
						const e = await s.VK.find(this.context.cwd, this.context.plugins),
							{ project: t, workspace: r } = await h.I.find(
								e,
								this.context.cwd
							),
							n = await g.C.find(e);
						if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd);
						const i = f.structUtils.parseDescriptor(this.descriptor, !0),
							A = f.structUtils.makeDescriptor(i, this.resolution);
						t.storedDescriptors.set(i.descriptorHash, i),
							t.storedDescriptors.set(A.descriptorHash, A),
							t.resolutionAliases.set(i.descriptorHash, A.descriptorHash);
						return (
							await p.Pk.start(
								{ configuration: e, stdout: this.context.stdout },
								async (e) => {
									await t.install({ cache: n, report: e });
								}
							)
						).exitCode();
					}
				}
				(Le.usage = d.Command.Usage({
					description: 'enforce a package resolution',
					details:
						'\n      This command updates the resolution table so that `descriptor` is resolved by `resolution`.\n\n      Note that by default this command only affect the current resolution table - meaning that this "manual override" will disappear if you remove the lockfile, or if the package disappear from the table. If you wish to make the enforced resolution persist whatever happens, add the `-s,--save` flag which will also edit the `resolutions` field from your top-level manifest.\n\n      Note that no attempt is made at validating that `resolution` is a valid resolution entry for `descriptor`.\n    ',
					examples: [
						[
							'Force all instances of lodash@^1.2.3 to resolve to 1.5.0',
							'$0 set resolution lodash@^1.2.3 1.5.0',
						],
					],
				})),
					(0, a.gn)([d.Command.String()], Le.prototype, 'descriptor', void 0),
					(0, a.gn)([d.Command.String()], Le.prototype, 'resolution', void 0),
					(0, a.gn)(
						[
							d.Command.Boolean('-s,--save', {
								description:
									'Persist the resolution inside the top-level manifest',
							}),
						],
						Le.prototype,
						'save',
						void 0
					),
					(0, a.gn)(
						[d.Command.Path('set', 'resolution')],
						Le.prototype,
						'execute',
						null
					);
				class xe extends c.BaseCommand {
					constructor() {
						super(...arguments),
							(this.patterns = []),
							(this.interactive = null),
							(this.exact = !1),
							(this.tilde = !1),
							(this.caret = !1);
					}
					async execute() {
						var e;
						const t = await s.VK.find(this.context.cwd, this.context.plugins),
							{ project: r, workspace: n } = await h.I.find(
								t,
								this.context.cwd
							),
							A = await g.C.find(t);
						if (!n) throw new c.WorkspaceRequiredError(r.cwd, this.context.cwd);
						const a =
								null !== (e = this.interactive) && void 0 !== e
									? e
									: t.get('preferInteractive'),
							I = Q(this, r),
							E = a
								? [o.KEEP, o.REUSE, o.PROJECT, o.LATEST]
								: [o.PROJECT, o.LATEST],
							m = [],
							B = [];
						for (const e of this.patterns) {
							let t = !1;
							const n = f.structUtils.parseDescriptor(e);
							for (const e of r.workspaces)
								for (const o of [i.REGULAR, i.DEVELOPMENT]) {
									const i = [...e.manifest.getForScope(o).values()].map((e) =>
										f.structUtils.stringifyIdent(e)
									);
									for (const s of z()(i, f.structUtils.stringifyIdent(n))) {
										const i = f.structUtils.parseIdent(s),
											a = e.manifest[o].get(i.identHash);
										if (void 0 === a)
											throw new Error(
												'Assertion failed: Expected the descriptor to be registered'
											);
										const c = f.structUtils.makeDescriptor(i, n.range);
										m.push(
											Promise.resolve().then(async () => [
												e,
												o,
												a,
												await M(c, {
													project: r,
													workspace: e,
													cache: A,
													target: o,
													modifier: I,
													strategies: E,
												}),
											])
										),
											(t = !0);
									}
								}
							t || B.push(e);
						}
						if (B.length > 1)
							throw new d.UsageError(
								`Patterns ${f.formatUtils.prettyList(
									t,
									B,
									s.a5.CODE
								)} don't match any packages referenced by any workspace`
							);
						if (B.length > 0)
							throw new d.UsageError(
								`Pattern ${f.formatUtils.prettyList(
									t,
									B,
									s.a5.CODE
								)} doesn't match any packages referenced by any workspace`
							);
						const y = await Promise.all(m),
							w = await l.h.start(
								{
									configuration: t,
									stdout: this.context.stdout,
									suggestInstall: !1,
								},
								async (e) => {
									for (const [, , n, { suggestions: i, rejections: A }] of y) {
										const o = i.filter((e) => null !== e.descriptor);
										if (0 === o.length) {
											const [i] = A;
											if (void 0 === i)
												throw new Error(
													'Assertion failed: Expected an error to have been set'
												);
											const o = this.cli.error(i);
											r.configuration.get('enableNetwork')
												? e.reportError(
														u.b.CANT_SUGGEST_RESOLUTIONS,
														`${f.structUtils.prettyDescriptor(
															t,
															n
														)} can't be resolved to a satisfying range\n\n${o}`
												  )
												: e.reportError(
														u.b.CANT_SUGGEST_RESOLUTIONS,
														`${f.structUtils.prettyDescriptor(
															t,
															n
														)} can't be resolved to a satisfying range (note: network resolution has been disabled)\n\n${o}`
												  );
										} else
											o.length > 1 &&
												!a &&
												e.reportError(
													u.b.CANT_SUGGEST_RESOLUTIONS,
													f.structUtils.prettyDescriptor(t, n) +
														' has multiple possible upgrade strategies; use -i to disambiguate manually'
												);
									}
								}
							);
						if (w.hasErrors()) return w.exitCode();
						let v = !1;
						const b = [];
						for (const [e, n, , { suggestions: i }] of y) {
							let A;
							const o = i.filter((e) => null !== e.descriptor),
								s = o[0].descriptor,
								a = o.every((e) =>
									f.structUtils.areDescriptorsEqual(e.descriptor, s)
								);
							1 === o.length || a
								? (A = s)
								: ((v = !0),
								  ({ answer: A } = await (0, C.prompt)({
										type: 'select',
										name: 'answer',
										message: `Which range to you want to use in ${f.structUtils.prettyWorkspace(
											t,
											e
										)} ❯ ${n}?`,
										choices: i.map(({ descriptor: e, name: t, reason: r }) =>
											e
												? { name: t, hint: r, descriptor: e }
												: { name: t, hint: r, disabled: !0 }
										),
										onCancel: () => process.exit(130),
										result(e) {
											return this.find(e, 'descriptor');
										},
										stdin: this.context.stdin,
										stdout: this.context.stdout,
								  })));
							const c = e.manifest[n].get(A.identHash);
							if (void 0 === c)
								throw new Error(
									'Assertion failed: This descriptor should have a matching entry'
								);
							if (c.descriptorHash !== A.descriptorHash)
								e.manifest[n].set(A.identHash, A), b.push([e, n, c, A]);
							else {
								const n = t.makeResolver(),
									i = { project: r, resolver: n },
									A = n.bindDescriptor(c, e.anchoredLocator, i);
								r.forgetResolution(A);
							}
						}
						await t.triggerMultipleHooks(
							(e) => e.afterWorkspaceDependencyReplacement,
							b
						),
							v && this.context.stdout.write('\n');
						return (
							await p.Pk.start(
								{ configuration: t, stdout: this.context.stdout },
								async (e) => {
									await r.install({ cache: A, report: e });
								}
							)
						).exitCode();
					}
				}
				(xe.usage = d.Command.Usage({
					description: 'upgrade dependencies across the project',
					details:
						"\n      This command upgrades the packages matching the list of specified patterns to their latest available version across the whole project (regardless of whether they're part of `dependencies` or `devDependencies` - `peerDependencies` won't be affected). This is a project-wide command: all workspaces will be upgraded in the process.\n\n      If `-i,--interactive` is set (or if the `preferInteractive` settings is toggled on) the command will offer various choices, depending on the detected upgrade paths. Some upgrades require this flag in order to resolve ambiguities.\n\n      The, `-C,--caret`, `-E,--exact` and  `-T,--tilde` options have the same meaning as in the `add` command (they change the modifier used when the range is missing or a tag, and are ignored when the range is explicitly set).\n\n      Generally you can see `yarn up` as a counterpart to what was `yarn upgrade --latest` in Yarn 1 (ie it ignores the ranges previously listed in your manifests), but unlike `yarn upgrade` which only upgraded dependencies in the current workspace, `yarn up` will upgrade all workspaces at the same time.\n\n      This command accepts glob patterns as arguments (if valid Descriptors and supported by [micromatch](https://github.com/micromatch/micromatch)). Make sure to escape the patterns, to prevent your own shell from trying to expand them.\n\n      **Note:** The ranges have to be static, only the package scopes and names can contain glob patterns.\n    ",
					examples: [
						[
							'Upgrade all instances of lodash to the latest release',
							'$0 up lodash',
						],
						[
							'Upgrade all instances of lodash to the latest release, but ask confirmation for each',
							'$0 up lodash -i',
						],
						['Upgrade all instances of lodash to 1.2.3', '$0 up lodash@1.2.3'],
						[
							'Upgrade all instances of packages with the `@babel` scope to the latest release',
							"$0 up '@babel/*'",
						],
						[
							'Upgrade all instances of packages containing the word `jest` to the latest release',
							"$0 up '*jest*'",
						],
						[
							'Upgrade all instances of packages with the `@babel` scope to 7.0.0',
							"$0 up '@babel/*@7.0.0'",
						],
					],
				})),
					(0, a.gn)([d.Command.Rest()], xe.prototype, 'patterns', void 0),
					(0, a.gn)(
						[
							d.Command.Boolean('-i,--interactive', {
								description:
									'Offer various choices, depending on the detected upgrade paths',
							}),
						],
						xe.prototype,
						'interactive',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('-E,--exact', {
								description:
									"Don't use any semver modifier on the resolved range",
							}),
						],
						xe.prototype,
						'exact',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('-T,--tilde', {
								description:
									'Use the `~` semver modifier on the resolved range',
							}),
						],
						xe.prototype,
						'tilde',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('-C,--caret', {
								description:
									'Use the `^` semver modifier on the resolved range',
							}),
						],
						xe.prototype,
						'caret',
						void 0
					),
					(0, a.gn)([d.Command.Path('up')], xe.prototype, 'execute', null);
				class Pe extends c.BaseCommand {
					constructor() {
						super(...arguments),
							(this.recursive = !1),
							(this.json = !1),
							(this.peers = !1);
					}
					async execute() {
						const e = await s.VK.find(this.context.cwd, this.context.plugins),
							{ project: t, workspace: r } = await h.I.find(
								e,
								this.context.cwd
							);
						if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd);
						await t.restoreInstallState();
						const n = f.structUtils.parseIdent(this.package).identHash,
							i = this.recursive
								? (function (e, t, { configuration: r, peers: n }) {
										const i = f.miscUtils.sortMap(e.workspaces, (e) =>
												f.structUtils.stringifyLocator(e.anchoredLocator)
											),
											A = new Set(),
											o = new Set(),
											s = (r) => {
												if (A.has(r.locatorHash)) return o.has(r.locatorHash);
												if ((A.add(r.locatorHash), r.identHash === t))
													return o.add(r.locatorHash), !0;
												let i = !1;
												r.identHash === t && (i = !0);
												for (const t of r.dependencies.values()) {
													if (!n && r.peerDependencies.has(t.identHash))
														continue;
													const A = e.storedResolutions.get(t.descriptorHash);
													if (!A)
														throw new Error(
															'Assertion failed: The resolution should have been registered'
														);
													const o = e.storedPackages.get(A);
													if (!o)
														throw new Error(
															'Assertion failed: The package should have been registered'
														);
													s(o) && (i = !0);
												}
												return i && o.add(r.locatorHash), i;
											};
										for (const t of i) {
											const r = e.storedPackages.get(
												t.anchoredLocator.locatorHash
											);
											if (!r)
												throw new Error(
													'Assertion failed: The package should have been registered'
												);
											s(r);
										}
										const a = new Set(),
											c = {},
											g = { children: c },
											l = (t, r, i) => {
												if (!o.has(t.locatorHash)) return;
												const A = {},
													s = {
														value:
															null !== i
																? f.formatUtils.tuple(
																		f.formatUtils.Type.DEPENDENT,
																		{ locator: t, descriptor: i }
																  )
																: f.formatUtils.tuple(
																		f.formatUtils.Type.LOCATOR,
																		t
																  ),
														children: A,
													};
												if (
													((r[f.structUtils.stringifyLocator(t)] = s),
													!a.has(t.locatorHash) &&
														(a.add(t.locatorHash),
														null === i || !e.tryWorkspaceByLocator(t)))
												)
													for (const r of t.dependencies.values()) {
														if (!n && t.peerDependencies.has(r.identHash))
															continue;
														const i = e.storedResolutions.get(r.descriptorHash);
														if (!i)
															throw new Error(
																'Assertion failed: The resolution should have been registered'
															);
														const o = e.storedPackages.get(i);
														if (!o)
															throw new Error(
																'Assertion failed: The package should have been registered'
															);
														l(o, A, r);
													}
											};
										for (const t of i) {
											const r = e.storedPackages.get(
												t.anchoredLocator.locatorHash
											);
											if (!r)
												throw new Error(
													'Assertion failed: The package should have been registered'
												);
											l(r, c, null);
										}
										return g;
								  })(t, n, { configuration: e, peers: this.peers })
								: (function (e, t, { configuration: r, peers: n }) {
										const i = f.miscUtils.sortMap(
												e.storedPackages.values(),
												(e) => f.structUtils.stringifyLocator(e)
											),
											A = {},
											o = { children: A };
										for (const r of i) {
											const i = {},
												o = null;
											for (const s of r.dependencies.values()) {
												if (!n && r.peerDependencies.has(s.identHash)) continue;
												const a = e.storedResolutions.get(s.descriptorHash);
												if (!a)
													throw new Error(
														'Assertion failed: The resolution should have been registered'
													);
												const c = e.storedPackages.get(a);
												if (!c)
													throw new Error(
														'Assertion failed: The package should have been registered'
													);
												if (c.identHash !== t) continue;
												if (null === o) {
													const e = f.structUtils.stringifyLocator(r);
													A[e] = {
														value: [r, f.formatUtils.Type.LOCATOR],
														children: i,
													};
												}
												const g = f.structUtils.stringifyLocator(c);
												i[g] = {
													value: [
														{ descriptor: s, locator: c },
														f.formatUtils.Type.DEPENDENT,
													],
												};
											}
										}
										return o;
								  })(t, n, { configuration: e, peers: this.peers });
						f.treeUtils.emitTree(i, {
							configuration: e,
							stdout: this.context.stdout,
							json: this.json,
							separators: 1,
						});
					}
				}
				(Pe.usage = d.Command.Usage({
					description: 'display the reason why a package is needed',
					details:
						'\n      This command prints the exact reasons why a package appears in the dependency tree.\n\n      If `-R,--recursive` is set, the listing will go in depth and will list, for each workspaces, what are all the paths that lead to the dependency. Note that the display is somewhat optimized in that it will not print the package listing twice for a single package, so if you see a leaf named "Foo" when looking for "Bar", it means that "Foo" already got printed higher in the tree.\n    ',
					examples: [
						['Explain why lodash is used in your project', '$0 why lodash'],
					],
				})),
					(0, a.gn)([d.Command.String()], Pe.prototype, 'package', void 0),
					(0, a.gn)(
						[
							d.Command.Boolean('-R,--recursive', {
								description:
									'List, for each workspace, what are all the paths that lead to the dependency',
							}),
						],
						Pe.prototype,
						'recursive',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('--json', {
								description: 'Format the output as an NDJSON stream',
							}),
						],
						Pe.prototype,
						'json',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('--peers', {
								description:
									'Also print the peer dependencies that match the specified name',
							}),
						],
						Pe.prototype,
						'peers',
						void 0
					),
					(0, a.gn)([d.Command.Path('why')], Pe.prototype, 'execute', null);
				class Ue extends c.BaseCommand {
					constructor() {
						super(...arguments), (this.verbose = !1), (this.json = !1);
					}
					async execute() {
						const e = await s.VK.find(this.context.cwd, this.context.plugins),
							{ project: t } = await h.I.find(e, this.context.cwd);
						return (
							await p.Pk.start(
								{
									configuration: e,
									json: this.json,
									stdout: this.context.stdout,
								},
								async (e) => {
									for (const r of t.workspaces) {
										const { manifest: n } = r;
										let i;
										if (this.verbose) {
											const e = new Set(),
												r = new Set();
											for (const i of E.G.hardDependencies)
												for (const [A, o] of n.getForScope(i)) {
													const n = t.tryWorkspaceByDescriptor(o);
													null === n
														? t.workspacesByIdent.has(A) && r.add(o)
														: e.add(n);
												}
											i = {
												workspaceDependencies: Array.from(e).map(
													(e) => e.relativeCwd
												),
												mismatchedWorkspaceDependencies: Array.from(
													r
												).map((e) => f.structUtils.stringifyDescriptor(e)),
											};
										}
										e.reportInfo(null, '' + r.relativeCwd),
											e.reportJson({
												location: r.relativeCwd,
												name: n.name
													? f.structUtils.stringifyIdent(n.name)
													: null,
												...i,
											});
									}
								}
							)
						).exitCode();
					}
				}
				(Ue.usage = d.Command.Usage({
					category: 'Workspace-related commands',
					description: 'list all available workspaces',
					details:
						'\n      This command will print the list of all workspaces in the project. If both the `-v,--verbose` and `--json` options are set, Yarn will also return the cross-dependencies between each workspaces (useful when you wish to automatically generate Buck / Bazel rules).\n    ',
				})),
					(0, a.gn)(
						[
							d.Command.Boolean('-v,--verbose', {
								description:
									'Also return the cross-dependencies between workspaces',
							}),
						],
						Ue.prototype,
						'verbose',
						void 0
					),
					(0, a.gn)(
						[
							d.Command.Boolean('--json', {
								description: 'Format the output as an NDJSON stream',
							}),
						],
						Ue.prototype,
						'json',
						void 0
					),
					(0, a.gn)(
						[d.Command.Path('workspaces', 'list')],
						Ue.prototype,
						'execute',
						null
					);
				class Te extends d.Command {
					constructor() {
						super(...arguments), (this.args = []);
					}
					async execute() {
						const e = await s.VK.find(this.context.cwd, this.context.plugins),
							{ project: t, workspace: r } = await h.I.find(
								e,
								this.context.cwd
							);
						if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd);
						const n = t.workspaces,
							i = new Map(
								n.map((e) => {
									const t = f.structUtils.convertToIdent(e.locator);
									return [f.structUtils.stringifyIdent(t), e];
								})
							),
							A = i.get(this.workspaceName);
						if (void 0 === A) {
							const e = Array.from(i.keys()).sort();
							throw new d.UsageError(
								`Workspace '${
									this.workspaceName
								}' not found. Did you mean any of the following:\n  - ${e.join(
									'\n  - '
								)}?`
							);
						}
						return this.cli.run([this.commandName, ...this.args], {
							cwd: A.cwd,
						});
					}
				}
				(Te.usage = d.Command.Usage({
					category: 'Workspace-related commands',
					description: 'run a command within the specified workspace',
					details:
						'\n      This command will run a given sub-command on a single workspace.\n    ',
					examples: [
						[
							'Add a package to a single workspace',
							'yarn workspace components add -D react',
						],
						[
							'Run build script on a single workspace',
							'yarn workspace components run build',
						],
					],
				})),
					(0, a.gn)(
						[d.Command.String()],
						Te.prototype,
						'workspaceName',
						void 0
					),
					(0, a.gn)([d.Command.String()], Te.prototype, 'commandName', void 0),
					(0, a.gn)([d.Command.Proxy()], Te.prototype, 'args', void 0),
					(0, a.gn)(
						[d.Command.Path('workspace')],
						Te.prototype,
						'execute',
						null
					);
				const Oe = {
					configuration: {
						enableImmutableInstalls: {
							description:
								'If true, prevents the install command from modifying the lockfile',
							type: s.a2.BOOLEAN,
							default: !1,
						},
						defaultSemverRangePrefix: {
							description: "The default save prefix: '^', '~' or ''",
							type: s.a2.STRING,
							values: ['^', '~', ''],
							default: A.CARET,
						},
					},
					commands: [
						K,
						U,
						H,
						Le,
						Ee,
						fe,
						Ue,
						$,
						ee,
						te,
						ne,
						F,
						R,
						J,
						Z,
						ie,
						Ae,
						ce,
						ge,
						le,
						Se,
						be,
						ke,
						ve,
						Me,
						Ne,
						Fe,
						Re,
						Ke,
						xe,
						Pe,
						Te,
					],
				};
			},
			74802: (e, t, r) => {
				'use strict';
				r.r(t), r.d(t, { fileUtils: () => n, default: () => d });
				var n = {};
				r.r(n),
					r.d(n, {
						makeArchiveFromLocator: () => u,
						makeBufferFromLocator: () => h,
						makeLocator: () => l,
						makeSpec: () => g,
						parseSpec: () => c,
					});
				var i = r(32741),
					A = r(46009);
				const o = /^(?:[a-zA-Z]:[\\/]|\.{0,2}\/)/,
					s = /^[^?]*\.(?:tar\.gz|tgz)(?:::.*)?$/;
				var a = r(75448);
				function c(e) {
					const { params: t, selector: r } = i.structUtils.parseRange(e),
						n = A.cS.toPortablePath(r);
					return {
						parentLocator:
							t && 'string' == typeof t.locator
								? i.structUtils.parseLocator(t.locator)
								: null,
						path: n,
					};
				}
				function g({ parentLocator: e, path: t, folderHash: r, protocol: n }) {
					const A =
							null !== e ? { locator: i.structUtils.stringifyLocator(e) } : {},
						o = void 0 !== r ? { hash: r } : {};
					return i.structUtils.makeRange({
						protocol: n,
						source: t,
						selector: t,
						params: { ...o, ...A },
					});
				}
				function l(
					e,
					{ parentLocator: t, path: r, folderHash: n, protocol: A }
				) {
					return i.structUtils.makeLocator(
						e,
						g({ parentLocator: t, path: r, folderHash: n, protocol: A })
					);
				}
				async function u(
					e,
					{ protocol: t, fetchOptions: r, inMemory: n = !1 }
				) {
					const {
							parentLocator: o,
							path: s,
						} = i.structUtils.parseFileStyleRange(e.reference, { protocol: t }),
						c = A.y1.isAbsolute(s)
							? {
									packageFs: new a.M(A.LZ.root),
									prefixPath: A.LZ.dot,
									localPath: A.LZ.root,
							  }
							: await r.fetcher.fetch(o, r),
						g = c.localPath
							? {
									packageFs: new a.M(A.LZ.root),
									prefixPath: A.y1.relative(A.LZ.root, c.localPath),
							  }
							: c;
					c !== g && c.releaseFs && c.releaseFs();
					const l = g.packageFs,
						u = A.y1.join(g.prefixPath, s);
					return await i.miscUtils.releaseAfterUseAsync(
						async () =>
							await i.tgzUtils.makeArchiveFromDirectory(u, {
								baseFs: l,
								prefixPath: i.structUtils.getIdentVendorPath(e),
								compressionLevel: r.project.configuration.get(
									'compressionLevel'
								),
								inMemory: n,
							}),
						g.releaseFs
					);
				}
				async function h(e, { protocol: t, fetchOptions: r }) {
					return (
						await u(e, { protocol: t, fetchOptions: r, inMemory: !0 })
					).getBufferAndClose();
				}
				var p = r(32485),
					f = r(46611);
				const d = {
					fetchers: [
						class {
							supports(e, t) {
								return (
									!!s.test(e.reference) && !!e.reference.startsWith('file:')
								);
							}
							getLocalPath(e, t) {
								return null;
							}
							async fetch(e, t) {
								const r = t.checksums.get(e.locatorHash) || null,
									[n, A, o] = await t.cache.fetchPackageFromCache(e, r, {
										onHit: () => t.report.reportCacheHit(e),
										onMiss: () =>
											t.report.reportCacheMiss(
												e,
												i.structUtils.prettyLocator(
													t.project.configuration,
													e
												) +
													" can't be found in the cache and will be fetched from the disk"
											),
										loader: () => this.fetchFromDisk(e, t),
										skipIntegrityCheck: t.skipIntegrityCheck,
									});
								return {
									packageFs: n,
									releaseFs: A,
									prefixPath: i.structUtils.getIdentVendorPath(e),
									checksum: o,
								};
							}
							async fetchFromDisk(e, t) {
								const {
										parentLocator: r,
										path: n,
									} = i.structUtils.parseFileStyleRange(e.reference, {
										protocol: 'file:',
									}),
									o = A.y1.isAbsolute(n)
										? {
												packageFs: new a.M(A.LZ.root),
												prefixPath: A.LZ.dot,
												localPath: A.LZ.root,
										  }
										: await t.fetcher.fetch(r, t),
									s = o.localPath
										? {
												packageFs: new a.M(A.LZ.root),
												prefixPath: A.y1.relative(A.LZ.root, o.localPath),
										  }
										: o;
								o !== s && o.releaseFs && o.releaseFs();
								const c = s.packageFs,
									g = A.y1.join(s.prefixPath, n),
									l = await c.readFilePromise(g);
								return await i.miscUtils.releaseAfterUseAsync(
									async () =>
										await i.tgzUtils.convertToZip(l, {
											compressionLevel: t.project.configuration.get(
												'compressionLevel'
											),
											prefixPath: i.structUtils.getIdentVendorPath(e),
											stripComponents: 1,
										}),
									s.releaseFs
								);
							}
						},
						class {
							supports(e, t) {
								return !!e.reference.startsWith('file:');
							}
							getLocalPath(e, t) {
								const {
									parentLocator: r,
									path: n,
								} = i.structUtils.parseFileStyleRange(e.reference, {
									protocol: 'file:',
								});
								if (A.y1.isAbsolute(n)) return n;
								const o = t.fetcher.getLocalPath(r, t);
								return null === o ? null : A.y1.resolve(o, n);
							}
							async fetch(e, t) {
								const r = t.checksums.get(e.locatorHash) || null,
									[n, A, o] = await t.cache.fetchPackageFromCache(e, r, {
										onHit: () => t.report.reportCacheHit(e),
										onMiss: () =>
											t.report.reportCacheMiss(
												e,
												i.structUtils.prettyLocator(
													t.project.configuration,
													e
												) +
													" can't be found in the cache and will be fetched from the disk"
											),
										loader: () => this.fetchFromDisk(e, t),
										skipIntegrityCheck: t.skipIntegrityCheck,
									});
								return {
									packageFs: n,
									releaseFs: A,
									prefixPath: i.structUtils.getIdentVendorPath(e),
									localPath: this.getLocalPath(e, t),
									checksum: o,
								};
							}
							async fetchFromDisk(e, t) {
								return u(e, { protocol: 'file:', fetchOptions: t });
							}
						},
					],
					resolvers: [
						class {
							supportsDescriptor(e, t) {
								return (
									!!s.test(e.range) &&
									(!!e.range.startsWith('file:') || !!o.test(e.range))
								);
							}
							supportsLocator(e, t) {
								return (
									!!s.test(e.reference) && !!e.reference.startsWith('file:')
								);
							}
							shouldPersistResolution(e, t) {
								return !0;
							}
							bindDescriptor(e, t, r) {
								return (
									o.test(e.range) &&
										(e = i.structUtils.makeDescriptor(e, 'file:' + e.range)),
									i.structUtils.bindDescriptor(e, {
										locator: i.structUtils.stringifyLocator(t),
									})
								);
							}
							getResolutionDependencies(e, t) {
								return [];
							}
							async getCandidates(e, t, r) {
								let n = e.range;
								return (
									n.startsWith('file:') && (n = n.slice('file:'.length)),
									[
										i.structUtils.makeLocator(
											e,
											'file:' + A.cS.toPortablePath(n)
										),
									]
								);
							}
							async getSatisfying(e, t, r) {
								return null;
							}
							async resolve(e, t) {
								if (!t.fetchOptions)
									throw new Error(
										'Assertion failed: This resolver cannot be used unless a fetcher is configured'
									);
								const r = await t.fetchOptions.fetcher.fetch(e, t.fetchOptions),
									n = await i.miscUtils.releaseAfterUseAsync(
										async () =>
											await f.G.find(r.prefixPath, { baseFs: r.packageFs }),
										r.releaseFs
									);
								return {
									...e,
									version: n.version || '0.0.0',
									languageName: t.project.configuration.get(
										'defaultLanguageName'
									),
									linkType: p.U.HARD,
									dependencies: n.dependencies,
									peerDependencies: n.peerDependencies,
									dependenciesMeta: n.dependenciesMeta,
									peerDependenciesMeta: n.peerDependenciesMeta,
									bin: n.bin,
								};
							}
						},
						class {
							supportsDescriptor(e, t) {
								return !!e.range.match(o) || !!e.range.startsWith('file:');
							}
							supportsLocator(e, t) {
								return !!e.reference.startsWith('file:');
							}
							shouldPersistResolution(e, t) {
								return !1;
							}
							bindDescriptor(e, t, r) {
								return (
									o.test(e.range) &&
										(e = i.structUtils.makeDescriptor(e, 'file:' + e.range)),
									i.structUtils.bindDescriptor(e, {
										locator: i.structUtils.stringifyLocator(t),
									})
								);
							}
							getResolutionDependencies(e, t) {
								return [];
							}
							async getCandidates(e, t, r) {
								if (!r.fetchOptions)
									throw new Error(
										'Assertion failed: This resolver cannot be used unless a fetcher is configured'
									);
								const { path: n, parentLocator: A } = c(e.range);
								if (null === A)
									throw new Error(
										'Assertion failed: The descriptor should have been bound'
									);
								const o = await h(
									i.structUtils.makeLocator(
										e,
										i.structUtils.makeRange({
											protocol: 'file:',
											source: n,
											selector: n,
											params: { locator: i.structUtils.stringifyLocator(A) },
										})
									),
									{ protocol: 'file:', fetchOptions: r.fetchOptions }
								);
								return [
									l(e, {
										parentLocator: A,
										path: n,
										folderHash: i.hashUtils.makeHash('1', o).slice(0, 6),
										protocol: 'file:',
									}),
								];
							}
							async getSatisfying(e, t, r) {
								return null;
							}
							async resolve(e, t) {
								if (!t.fetchOptions)
									throw new Error(
										'Assertion failed: This resolver cannot be used unless a fetcher is configured'
									);
								const r = await t.fetchOptions.fetcher.fetch(e, t.fetchOptions),
									n = await i.miscUtils.releaseAfterUseAsync(
										async () =>
											await f.G.find(r.prefixPath, { baseFs: r.packageFs }),
										r.releaseFs
									);
								return {
									...e,
									version: n.version || '0.0.0',
									languageName: t.project.configuration.get(
										'defaultLanguageName'
									),
									linkType: p.U.HARD,
									dependencies: n.dependencies,
									peerDependencies: n.peerDependencies,
									dependenciesMeta: n.dependenciesMeta,
									peerDependenciesMeta: n.peerDependenciesMeta,
									bin: n.bin,
								};
							}
						},
					],
				};
			},
			10284: (e, t, r) => {
				'use strict';
				r.r(t), r.d(t, { gitUtils: () => n, default: () => b });
				var n = {};
				r.r(n),
					r.d(n, {
						TreeishProtocols: () => d,
						clone: () => w,
						isGitUrl: () => C,
						lsRemote: () => B,
						normalizeLocator: () => m,
						normalizeRepoUrl: () => E,
						resolveUrl: () => y,
						splitRepoUrl: () => I,
					});
				var i = r(27122),
					A = r(32741),
					o = r(46009),
					s = r(56537),
					a = r(71191),
					c = r.n(a),
					g = r(53887),
					l = r.n(g),
					u = r(78835),
					h = r.n(u);
				function p() {
					return { ...process.env, GIT_SSH_COMMAND: 'ssh -o BatchMode=yes' };
				}
				const f = [
					/^ssh:/,
					/^git(?:\+[^:]+)?:/,
					/^(?:git\+)?https?:[^#]+\/[^#]+(?:\.git)(?:#.*)?$/,
					/^git@[^#]+\/[^#]+\.git(?:#.*)?$/,
					/^(?:github:|https:\/\/github\.com\/)?(?!\.{1,2}\/)([a-zA-Z._0-9-]+)\/(?!\.{1,2}(?:#|$))([a-zA-Z._0-9-]+?)(?:\.git)?(?:#.*)?$/,
					/^https:\/\/github\.com\/(?!\.{1,2}\/)([a-zA-Z0-9._-]+)\/(?!\.{1,2}(?:#|$))([a-zA-Z0-9._-]+?)\/tarball\/(.+)?$/,
				];
				var d;
				function C(e) {
					return !!e && f.some((t) => !!e.match(t));
				}
				function I(e) {
					const t = (e = E(e)).indexOf('#');
					if (-1 === t)
						return {
							repo: e,
							treeish: { protocol: d.Head, request: 'master' },
							extra: {},
						};
					const r = e.slice(0, t),
						n = e.slice(t + 1);
					if (n.match(/^[a-z]+=/)) {
						const e = c().parse(n);
						for (const [t, r] of Object.entries(e))
							if ('string' != typeof r)
								throw new Error(
									`Assertion failed: The ${t} parameter must be a literal string`
								);
						const t = Object.values(d).find((t) =>
							Object.prototype.hasOwnProperty.call(e, t)
						);
						let i, A;
						void 0 !== t
							? ((i = t), (A = e[t]))
							: ((i = d.Head), (A = 'master'));
						for (const t of Object.values(d)) delete e[t];
						return { repo: r, treeish: { protocol: i, request: A }, extra: e };
					}
					{
						const e = n.indexOf(':');
						let t, i;
						return (
							-1 === e
								? ((t = null), (i = n))
								: ((t = n.slice(0, e)), (i = n.slice(e + 1))),
							{ repo: r, treeish: { protocol: t, request: i }, extra: {} }
						);
					}
				}
				function E(e, { git: t = !1 } = {}) {
					var r;
					if (
						((e = (e = (e = e.replace(/^git\+https:/, 'https:')).replace(
							/^(?:github:|https:\/\/github\.com\/)?(?!\.{1,2}\/)([a-zA-Z0-9._-]+)\/(?!\.{1,2}(?:#|$))([a-zA-Z0-9._-]+?)(?:\.git)?(#.*)?$/,
							'https://github.com/$1/$2.git$3'
						)).replace(
							/^https:\/\/github\.com\/(?!\.{1,2}\/)([a-zA-Z0-9._-]+)\/(?!\.{1,2}(?:#|$))([a-zA-Z0-9._-]+?)\/tarball\/(.+)?$/,
							'https://github.com/$1/$2.git#$3'
						)),
						t)
					) {
						let t;
						e = e.replace(/^git\+([^:]+):/, '$1:');
						try {
							t = h().parse(e);
						} catch (e) {
							t = null;
						}
						t &&
							'ssh:' === t.protocol &&
							(null === (r = t.path) || void 0 === r
								? void 0
								: r.startsWith('/:')) &&
							(e = e.replace(/^ssh:\/\//, ''));
					}
					return e;
				}
				function m(e) {
					return A.structUtils.makeLocator(e, E(e.reference));
				}
				async function B(e, t) {
					if (!t.get('enableNetwork'))
						throw new Error(
							`Network access has been disabled by configuration (${e})`
						);
					let r;
					try {
						r = await A.execUtils.execvp(
							'git',
							['ls-remote', '--refs', E(e, { git: !0 })],
							{ cwd: t.startingCwd, env: p(), strict: !0 }
						);
					} catch (t) {
						throw ((t.message = `Listing the refs for ${e} failed`), t);
					}
					const n = new Map(),
						i = /^([a-f0-9]{40})\t(refs\/[^\n]+)/gm;
					let o;
					for (; null !== (o = i.exec(r.stdout)); ) n.set(o[2], o[1]);
					return n;
				}
				async function y(e, t) {
					const {
							repo: r,
							treeish: { protocol: n, request: i },
							extra: A,
						} = I(e),
						o = await B(r, t),
						s = (e, t) => {
							switch (e) {
								case d.Commit:
									if (!t.match(/^[a-f0-9]{40}$/))
										throw new Error('Invalid commit hash');
									return c().stringify({ ...A, commit: t });
								case d.Head: {
									const e = o.get('refs/heads/' + t);
									if (void 0 === e) throw new Error(`Unknown head ("${t}")`);
									return c().stringify({ ...A, commit: e });
								}
								case d.Tag: {
									const e = o.get('refs/tags/' + t);
									if (void 0 === e) throw new Error(`Unknown tag ("${t}")`);
									return c().stringify({ ...A, commit: e });
								}
								case d.Semver: {
									if (!l().validRange(t))
										throw new Error(`Invalid range ("${t}")`);
									const e = new Map(
											[...o.entries()]
												.filter(([e]) => e.startsWith('refs/tags/'))
												.map(([e, t]) => [l().parse(e.slice(10)), t])
												.filter((e) => null !== e[0])
										),
										r = l().maxSatisfying([...e.keys()], t);
									if (null === r) throw new Error(`No matching range ("${t}")`);
									return c().stringify({ ...A, commit: e.get(r) });
								}
								case null: {
									let e;
									if (null !== (e = a(d.Commit, t))) return e;
									if (null !== (e = a(d.Tag, t))) return e;
									if (null !== (e = a(d.Head, t))) return e;
									throw t.match(/^[a-f0-9]+$/)
										? new Error(
												`Couldn't resolve "${t}" as either a commit, a tag, or a head - if a commit, use the 40-characters commit hash`
										  )
										: new Error(
												`Couldn't resolve "${t}" as either a commit, a tag, or a head`
										  );
								}
								default:
									throw new Error(`Invalid Git resolution protocol ("${e}")`);
							}
						},
						a = (e, t) => {
							try {
								return s(e, t);
							} catch (e) {
								return null;
							}
						};
					return `${r}#${s(n, i)}`;
				}
				async function w(e, t) {
					if (!t.get('enableNetwork'))
						throw new Error(
							`Network access has been disabled by configuration (${e})`
						);
					return await t.getLimit('cloneConcurrency')(async () => {
						const {
							repo: t,
							treeish: { protocol: r, request: n },
						} = I(e);
						if ('commit' !== r)
							throw new Error('Invalid treeish protocol when cloning');
						const i = await s.xfs.mktempPromise(),
							a = { cwd: i, env: p(), strict: !0 };
						try {
							await A.execUtils.execvp(
								'git',
								[
									'clone',
									'-c core.autocrlf=false',
									E(t, { git: !0 }),
									o.cS.fromPortablePath(i),
								],
								a
							),
								await A.execUtils.execvp('git', ['checkout', '' + n], a);
						} catch (e) {
							throw ((e.message = 'Repository clone failed: ' + e.message), e);
						}
						return i;
					});
				}
				!(function (e) {
					(e.Commit = 'commit'),
						(e.Head = 'head'),
						(e.Tag = 'tag'),
						(e.Semver = 'semver');
				})(d || (d = {}));
				var Q = r(32485),
					v = r(46611);
				const b = {
					configuration: {
						cloneConcurrency: {
							description: 'Maximal number of concurrent clones',
							type: i.a2.NUMBER,
							default: 2,
						},
					},
					fetchers: [
						class {
							supports(e, t) {
								return C(e.reference);
							}
							getLocalPath(e, t) {
								return null;
							}
							async fetch(e, t) {
								const r = t.checksums.get(e.locatorHash) || null,
									n = m(e),
									i = new Map(t.checksums);
								i.set(n.locatorHash, r);
								const o = { ...t, checksums: i },
									s = await this.downloadHosted(n, o);
								if (null !== s) return s;
								const [a, c, g] = await t.cache.fetchPackageFromCache(e, r, {
									onHit: () => t.report.reportCacheHit(e),
									onMiss: () =>
										t.report.reportCacheMiss(
											e,
											A.structUtils.prettyLocator(t.project.configuration, e) +
												" can't be found in the cache and will be fetched from the remote repository"
										),
									loader: () => this.cloneFromRemote(n, o),
									skipIntegrityCheck: t.skipIntegrityCheck,
								});
								return {
									packageFs: a,
									releaseFs: c,
									prefixPath: A.structUtils.getIdentVendorPath(e),
									checksum: g,
								};
							}
							async downloadHosted(e, t) {
								return t.project.configuration.reduceHook(
									(e) => e.fetchHostedRepository,
									null,
									e,
									t
								);
							}
							async cloneFromRemote(e, t) {
								const r = await w(e.reference, t.project.configuration),
									n = I(e.reference),
									i = o.y1.join(r, 'package.tgz');
								await A.scriptUtils.prepareExternalProject(r, i, {
									configuration: t.project.configuration,
									report: t.report,
									workspace: n.extra.workspace,
								});
								const a = await s.xfs.readFilePromise(i);
								return await A.miscUtils.releaseAfterUseAsync(
									async () =>
										await A.tgzUtils.convertToZip(a, {
											compressionLevel: t.project.configuration.get(
												'compressionLevel'
											),
											prefixPath: A.structUtils.getIdentVendorPath(e),
											stripComponents: 1,
										})
								);
							}
						},
					],
					resolvers: [
						class {
							supportsDescriptor(e, t) {
								return C(e.range);
							}
							supportsLocator(e, t) {
								return C(e.reference);
							}
							shouldPersistResolution(e, t) {
								return !0;
							}
							bindDescriptor(e, t, r) {
								return e;
							}
							getResolutionDependencies(e, t) {
								return [];
							}
							async getCandidates(e, t, r) {
								const n = await y(e.range, r.project.configuration);
								return [A.structUtils.makeLocator(e, n)];
							}
							async getSatisfying(e, t, r) {
								return null;
							}
							async resolve(e, t) {
								if (!t.fetchOptions)
									throw new Error(
										'Assertion failed: This resolver cannot be used unless a fetcher is configured'
									);
								const r = await t.fetchOptions.fetcher.fetch(e, t.fetchOptions),
									n = await A.miscUtils.releaseAfterUseAsync(
										async () =>
											await v.G.find(r.prefixPath, { baseFs: r.packageFs }),
										r.releaseFs
									);
								return {
									...e,
									version: n.version || '0.0.0',
									languageName: t.project.configuration.get(
										'defaultLanguageName'
									),
									linkType: Q.U.HARD,
									dependencies: n.dependencies,
									peerDependencies: n.peerDependencies,
									dependenciesMeta: n.dependenciesMeta,
									peerDependenciesMeta: n.peerDependenciesMeta,
									bin: n.bin,
								};
							}
						},
					],
				};
			},
			23599: (e, t, r) => {
				'use strict';
				r.r(t), r.d(t, { default: () => u });
				var n = r(32741),
					i = r(56537),
					A = r(75448),
					o = r(46009),
					s = r(10284),
					a = r(71191),
					c = r.n(a);
				const g = [
					/^https?:\/\/(?:([^/]+?)@)?github.com\/([^/#]+)\/([^/#]+)\/tarball\/([^/#]+)(?:#(.*))?$/,
					/^https?:\/\/(?:([^/]+?)@)?github.com\/([^/#]+)\/([^/#]+?)(?:\.git)?(?:#(.*))?$/,
				];
				class l {
					supports(e, t) {
						return !(!(r = e.reference) || !g.some((e) => !!r.match(e)));
						var r;
					}
					getLocalPath(e, t) {
						return null;
					}
					async fetch(e, t) {
						const r = t.checksums.get(e.locatorHash) || null,
							[i, A, o] = await t.cache.fetchPackageFromCache(e, r, {
								onHit: () => t.report.reportCacheHit(e),
								onMiss: () =>
									t.report.reportCacheMiss(
										e,
										n.structUtils.prettyLocator(t.project.configuration, e) +
											" can't be found in the cache and will be fetched from GitHub"
									),
								loader: () => this.fetchFromNetwork(e, t),
								skipIntegrityCheck: t.skipIntegrityCheck,
							});
						return {
							packageFs: i,
							releaseFs: A,
							prefixPath: n.structUtils.getIdentVendorPath(e),
							checksum: o,
						};
					}
					async fetchFromNetwork(e, t) {
						const r = await n.httpUtils.get(this.getLocatorUrl(e, t), {
							configuration: t.project.configuration,
						});
						return await i.xfs.mktempPromise(async (a) => {
							const c = new A.M(a);
							await n.tgzUtils.extractArchiveTo(r, c, { stripComponents: 1 });
							const g = s.gitUtils.splitRepoUrl(e.reference),
								l = o.y1.join(a, 'package.tgz');
							await n.scriptUtils.prepareExternalProject(a, l, {
								configuration: t.project.configuration,
								report: t.report,
								workspace: g.extra.workspace,
							});
							const u = await i.xfs.readFilePromise(l);
							return await n.tgzUtils.convertToZip(u, {
								compressionLevel: t.project.configuration.get(
									'compressionLevel'
								),
								prefixPath: n.structUtils.getIdentVendorPath(e),
								stripComponents: 1,
							});
						});
					}
					getLocatorUrl(e, t) {
						const {
							auth: r,
							username: n,
							reponame: i,
							treeish: A,
						} = (function (e) {
							let t;
							for (const r of g) if (((t = e.match(r)), t)) break;
							if (!t)
								throw new Error(
									`Input cannot be parsed as a valid GitHub URL ('${e}').`
								);
							let [, r, n, i, A = 'master'] = t;
							const { commit: o } = c().parse(A);
							return (
								(A = o || A.replace(/[^:]*:/, '')),
								{ auth: r, username: n, reponame: i, treeish: A }
							);
						})(e.reference);
						return `https://${
							r ? r + '@' : ''
						}github.com/${n}/${i}/archive/${A}.tar.gz`;
					}
				}
				const u = {
					hooks: {
						async fetchHostedRepository(e, t, r) {
							if (null !== e) return e;
							const n = new l();
							if (!n.supports(t, r)) return null;
							try {
								return await n.fetch(t, r);
							} catch (e) {
								return null;
							}
						},
					},
				};
			},
			21754: (e, t, r) => {
				'use strict';
				r.r(t), r.d(t, { default: () => a });
				var n = r(32741);
				const i = /^[^?]*\.(?:tar\.gz|tgz)(?:\?.*)?$/,
					A = /^https?:/;
				var o = r(46611),
					s = r(32485);
				const a = {
					fetchers: [
						class {
							supports(e, t) {
								return !!i.test(e.reference) && !!A.test(e.reference);
							}
							getLocalPath(e, t) {
								return null;
							}
							async fetch(e, t) {
								const r = t.checksums.get(e.locatorHash) || null,
									[i, A, o] = await t.cache.fetchPackageFromCache(e, r, {
										onHit: () => t.report.reportCacheHit(e),
										onMiss: () =>
											t.report.reportCacheMiss(
												e,
												n.structUtils.prettyLocator(
													t.project.configuration,
													e
												) +
													" can't be found in the cache and will be fetched from the remote server"
											),
										loader: () => this.fetchFromNetwork(e, t),
										skipIntegrityCheck: t.skipIntegrityCheck,
									});
								return {
									packageFs: i,
									releaseFs: A,
									prefixPath: n.structUtils.getIdentVendorPath(e),
									checksum: o,
								};
							}
							async fetchFromNetwork(e, t) {
								const r = await n.httpUtils.get(e.reference, {
									configuration: t.project.configuration,
								});
								return await n.tgzUtils.convertToZip(r, {
									compressionLevel: t.project.configuration.get(
										'compressionLevel'
									),
									prefixPath: n.structUtils.getIdentVendorPath(e),
									stripComponents: 1,
								});
							}
						},
					],
					resolvers: [
						class {
							supportsDescriptor(e, t) {
								return !!i.test(e.range) && !!A.test(e.range);
							}
							supportsLocator(e, t) {
								return !!i.test(e.reference) && !!A.test(e.reference);
							}
							shouldPersistResolution(e, t) {
								return !0;
							}
							bindDescriptor(e, t, r) {
								return e;
							}
							getResolutionDependencies(e, t) {
								return [];
							}
							async getCandidates(e, t, r) {
								return [n.structUtils.convertDescriptorToLocator(e)];
							}
							async getSatisfying(e, t, r) {
								return null;
							}
							async resolve(e, t) {
								if (!t.fetchOptions)
									throw new Error(
										'Assertion failed: This resolver cannot be used unless a fetcher is configured'
									);
								const r = await t.fetchOptions.fetcher.fetch(e, t.fetchOptions),
									i = await n.miscUtils.releaseAfterUseAsync(
										async () =>
											await o.G.find(r.prefixPath, { baseFs: r.packageFs }),
										r.releaseFs
									);
								return {
									...e,
									version: i.version || '0.0.0',
									languageName: t.project.configuration.get(
										'defaultLanguageName'
									),
									linkType: s.U.HARD,
									dependencies: i.dependencies,
									peerDependencies: i.peerDependencies,
									dependenciesMeta: i.dependenciesMeta,
									peerDependenciesMeta: i.peerDependenciesMeta,
									bin: i.bin,
								};
							}
						},
					],
				};
			},
			74230: (e, t, r) => {
				'use strict';
				r.r(t), r.d(t, { default: () => d });
				var n = r(27122),
					i = r(36370),
					A = r(95397),
					o = r(46611),
					s = r(40376),
					a = r(32741),
					c = r(56537),
					g = r(46009),
					l = r(40822),
					u = r(80305),
					h = r.n(u),
					p = r(31669);
				class f extends A.BaseCommand {
					constructor() {
						super(...arguments),
							(this.usev2 = !1),
							(this.assumeFreshProject = !1),
							(this.yes = !1),
							(this.private = !1),
							(this.workspace = !1),
							(this.install = !1);
					}
					async execute() {
						if (c.xfs.existsSync(g.y1.join(this.context.cwd, o.G.fileName)))
							throw new l.UsageError(
								'A package.json already exists in the specified directory'
							);
						const e = await n.VK.find(this.context.cwd, this.context.plugins),
							t = this.install
								? !0 === this.install
									? 'latest'
									: this.install
								: null;
						return null !== t
							? await this.executeProxy(e, t)
							: await this.executeRegular(e);
					}
					async executeProxy(e, t) {
						if (null !== e.get('yarnPath'))
							throw new l.UsageError(
								`Cannot use the --install flag when the current directory already uses yarnPath (from ${e.sources.get(
									'yarnPath'
								)})`
							);
						if (null !== e.projectCwd)
							throw new l.UsageError(
								'Cannot use the --install flag when the current directory is already part of a project'
							);
						c.xfs.existsSync(this.context.cwd) ||
							(await c.xfs.mkdirPromise(this.context.cwd, { recursive: !0 }));
						const r = g.y1.join(this.context.cwd, e.get('lockfileFilename'));
						c.xfs.existsSync(r) || (await c.xfs.writeFilePromise(r, ''));
						const n = await this.cli.run(['set', 'version', t]);
						if (0 !== n) return n;
						this.context.stdout.write('\n');
						const i = ['--assume-fresh-project'];
						return (
							this.private && i.push('-p'),
							this.workspace && i.push('-w'),
							this.yes && i.push('-y'),
							await c.xfs.mktempPromise(async (e) => {
								const { code: t } = await a.execUtils.pipevp(
									'yarn',
									['init', ...i],
									{
										cwd: this.context.cwd,
										stdin: this.context.stdin,
										stdout: this.context.stdout,
										stderr: this.context.stderr,
										env: await a.scriptUtils.makeScriptEnv({ binFolder: e }),
									}
								);
								return t;
							})
						);
					}
					async executeRegular(e) {
						let t = null;
						if (!this.assumeFreshProject)
							try {
								t = await s.I.find(e, this.context.cwd);
							} catch (e) {
								t = null;
							}
						c.xfs.existsSync(this.context.cwd) ||
							(await c.xfs.mkdirPromise(this.context.cwd, { recursive: !0 }));
						const r = new o.G(),
							n = Object.fromEntries(e.get('initFields').entries());
						r.load(n),
							(r.name = a.structUtils.makeIdent(
								e.get('initScope'),
								g.y1.basename(this.context.cwd)
							)),
							(r.version = e.get('initVersion')),
							(r.private = this.private || this.workspace),
							(r.license = e.get('initLicense')),
							this.workspace &&
								(await c.xfs.mkdirPromise(
									g.y1.join(this.context.cwd, 'packages'),
									{ recursive: !0 }
								),
								(r.workspaceDefinitions = [{ pattern: 'packages/*' }]));
						const i = {};
						r.exportTo(i),
							(p.inspect.styles.name = 'cyan'),
							this.context.stdout.write(
								(0, p.inspect)(i, { depth: 1 / 0, colors: !0, compact: !1 }) +
									'\n'
							);
						const A = g.y1.join(this.context.cwd, o.G.fileName);
						await c.xfs.changeFilePromise(A, JSON.stringify(i, null, 2) + '\n');
						const l = g.y1.join(this.context.cwd, 'README.md');
						if (
							(c.xfs.existsSync(l) ||
								(await c.xfs.writeFilePromise(
									l,
									`# ${a.structUtils.stringifyIdent(r.name)}\n`
								)),
							!t)
						) {
							const t = g.y1.join(this.context.cwd, g.QS.lockfile);
							await c.xfs.writeFilePromise(t, '');
							const r = ['/.yarn/** linguist-vendored']
									.map((e) => e + '\n')
									.join(''),
								n = g.y1.join(this.context.cwd, '.gitattributes');
							c.xfs.existsSync(n) || (await c.xfs.writeFilePromise(n, r));
							const i = [
									'/.yarn/*',
									'!/.yarn/releases',
									'!/.yarn/plugins',
									'!/.yarn/sdks',
									'',
									"# Swap the comments on the following lines if you don't wish to use zero-installs",
									'# Documentation here: https://yarnpkg.com/features/zero-installs',
									'!/.yarn/cache',
									'#/.pnp.*',
								]
									.map((e) => e + '\n')
									.join(''),
								A = g.y1.join(this.context.cwd, '.gitignore');
							c.xfs.existsSync(A) || (await c.xfs.writeFilePromise(A, i));
							const o = {
								'*': { endOfLine: 'lf', insertFinalNewline: !0 },
								'*.{js,json,.yml}': {
									charset: 'utf-8',
									indentStyle: 'space',
									indentSize: 2,
								},
							};
							h()(o, e.get('initEditorConfig'));
							let s = 'root = true\n';
							for (const [e, t] of Object.entries(o)) {
								s += `\n[${e}]\n`;
								for (const [e, r] of Object.entries(t)) {
									s += `${e.replace(
										/[A-Z]/g,
										(e) => '_' + e.toLowerCase()
									)} = ${r}\n`;
								}
							}
							const l = g.y1.join(this.context.cwd, '.editorconfig');
							c.xfs.existsSync(l) || (await c.xfs.writeFilePromise(l, s)),
								await a.execUtils.execvp('git', ['init'], {
									cwd: this.context.cwd,
								});
						}
					}
				}
				(f.usage = l.Command.Usage({
					description: 'create a new package',
					details:
						'\n      This command will setup a new package in your local directory.\n\n      If the `-p,--private` or `-w,--workspace` options are set, the package will be private by default.\n\n      If the `-w,--workspace` option is set, the package will be configured to accept a set of workspaces in the `packages/` directory.\n\n      If the `-i,--install` option is given a value, Yarn will first download it using `yarn set version` and only then forward the init call to the newly downloaded bundle. Without arguments, the downloaded bundle will be `latest`.\n\n      The initial settings of the manifest can be changed by using the `initScope` and `initFields` configuration values. Additionally, Yarn will generate an EditorConfig file whose rules can be altered via `initEditorConfig`, and will initialize a Git repository in the current directory.\n    ',
					examples: [
						['Create a new package in the local directory', 'yarn init'],
						[
							'Create a new private package in the local directory',
							'yarn init -p',
						],
						[
							'Create a new package and store the Yarn release inside',
							'yarn init -i latest',
						],
						[
							'Create a new private package and defines it as a workspace root',
							'yarn init -w',
						],
					],
				})),
					(0, i.gn)(
						[l.Command.Boolean('-2', { hidden: !0 })],
						f.prototype,
						'usev2',
						void 0
					),
					(0, i.gn)(
						[l.Command.Boolean('--assume-fresh-project', { hidden: !0 })],
						f.prototype,
						'assumeFreshProject',
						void 0
					),
					(0, i.gn)(
						[l.Command.Boolean('-y,--yes', { hidden: !0 })],
						f.prototype,
						'yes',
						void 0
					),
					(0, i.gn)(
						[
							l.Command.Boolean('-p,--private', {
								description: 'Initialize a private package',
							}),
						],
						f.prototype,
						'private',
						void 0
					),
					(0, i.gn)(
						[
							l.Command.Boolean('-w,--workspace', {
								description:
									'Initialize a private workspace root with a `packages/` directory',
							}),
						],
						f.prototype,
						'workspace',
						void 0
					),
					(0, i.gn)(
						[
							l.Command.String('-i,--install', {
								tolerateBoolean: !0,
								description:
									'Initialize a package with a specific bundle that will be locked in the project',
							}),
						],
						f.prototype,
						'install',
						void 0
					),
					(0, i.gn)([l.Command.Path('init')], f.prototype, 'execute', null);
				const d = {
					configuration: {
						initLicense: {
							description:
								'License used when creating packages via the init command',
							type: n.a2.STRING,
							default: null,
						},
						initScope: {
							description:
								'Scope used when creating packages via the init command',
							type: n.a2.STRING,
							default: null,
						},
						initVersion: {
							description:
								'Version used when creating packages via the init command',
							type: n.a2.STRING,
							default: null,
						},
						initFields: {
							description:
								'Additional fields to set when creating packages via the init command',
							type: n.a2.MAP,
							valueDefinition: { description: '', type: n.a2.ANY },
						},
						initEditorConfig: {
							description:
								'Extra rules to define in the generator editorconfig',
							type: n.a2.MAP,
							valueDefinition: { description: '', type: n.a2.ANY },
						},
					},
					commands: [f],
				};
			},
			86161: (e, t, r) => {
				'use strict';
				r.r(t), r.d(t, { default: () => c });
				var n = r(32741),
					i = r(46009),
					A = r(75448),
					o = r(10489);
				var s = r(46611),
					a = r(32485);
				const c = {
					fetchers: [
						class {
							supports(e, t) {
								return !!e.reference.startsWith('link:');
							}
							getLocalPath(e, t) {
								const {
									parentLocator: r,
									path: A,
								} = n.structUtils.parseFileStyleRange(e.reference, {
									protocol: 'link:',
								});
								if (i.y1.isAbsolute(A)) return A;
								const o = t.fetcher.getLocalPath(r, t);
								return null === o ? null : i.y1.resolve(o, A);
							}
							async fetch(e, t) {
								const {
										parentLocator: r,
										path: s,
									} = n.structUtils.parseFileStyleRange(e.reference, {
										protocol: 'link:',
									}),
									a = i.y1.isAbsolute(s)
										? {
												packageFs: new A.M(i.LZ.root),
												prefixPath: i.LZ.dot,
												localPath: i.LZ.root,
										  }
										: await t.fetcher.fetch(r, t),
									c = a.localPath
										? {
												packageFs: new A.M(i.LZ.root),
												prefixPath: i.y1.relative(i.LZ.root, a.localPath),
										  }
										: a;
								a !== c && a.releaseFs && a.releaseFs();
								const g = c.packageFs,
									l = i.y1.join(c.prefixPath, s);
								return a.localPath
									? {
											packageFs: new A.M(l, { baseFs: g }),
											releaseFs: c.releaseFs,
											prefixPath: i.LZ.dot,
											discardFromLookup: !0,
											localPath: l,
									  }
									: {
											packageFs: new o.n(l, { baseFs: g }),
											releaseFs: c.releaseFs,
											prefixPath: i.LZ.dot,
											discardFromLookup: !0,
									  };
							}
						},
						class {
							supports(e, t) {
								return !!e.reference.startsWith('portal:');
							}
							getLocalPath(e, t) {
								const {
									parentLocator: r,
									path: A,
								} = n.structUtils.parseFileStyleRange(e.reference, {
									protocol: 'portal:',
								});
								if (i.y1.isAbsolute(A)) return A;
								const o = t.fetcher.getLocalPath(r, t);
								return null === o ? null : i.y1.resolve(o, A);
							}
							async fetch(e, t) {
								const {
										parentLocator: r,
										path: s,
									} = n.structUtils.parseFileStyleRange(e.reference, {
										protocol: 'portal:',
									}),
									a = i.y1.isAbsolute(s)
										? {
												packageFs: new A.M(i.LZ.root),
												prefixPath: i.LZ.dot,
												localPath: i.LZ.root,
										  }
										: await t.fetcher.fetch(r, t),
									c = a.localPath
										? {
												packageFs: new A.M(i.LZ.root),
												prefixPath: i.y1.relative(i.LZ.root, a.localPath),
										  }
										: a;
								a !== c && a.releaseFs && a.releaseFs();
								const g = c.packageFs,
									l = i.y1.join(c.prefixPath, s);
								return a.localPath
									? {
											packageFs: new A.M(l, { baseFs: g }),
											releaseFs: c.releaseFs,
											prefixPath: i.LZ.dot,
											localPath: l,
									  }
									: {
											packageFs: new o.n(l, { baseFs: g }),
											releaseFs: c.releaseFs,
											prefixPath: i.LZ.dot,
									  };
							}
						},
					],
					resolvers: [
						class {
							supportsDescriptor(e, t) {
								return !!e.range.startsWith('link:');
							}
							supportsLocator(e, t) {
								return !!e.reference.startsWith('link:');
							}
							shouldPersistResolution(e, t) {
								return !1;
							}
							bindDescriptor(e, t, r) {
								return n.structUtils.bindDescriptor(e, {
									locator: n.structUtils.stringifyLocator(t),
								});
							}
							getResolutionDependencies(e, t) {
								return [];
							}
							async getCandidates(e, t, r) {
								const A = e.range.slice('link:'.length);
								return [
									n.structUtils.makeLocator(
										e,
										'link:' + i.cS.toPortablePath(A)
									),
								];
							}
							async getSatisfying(e, t, r) {
								return null;
							}
							async resolve(e, t) {
								return {
									...e,
									version: '0.0.0',
									languageName: t.project.configuration.get(
										'defaultLanguageName'
									),
									linkType: a.U.SOFT,
									dependencies: new Map(),
									peerDependencies: new Map(),
									dependenciesMeta: new Map(),
									peerDependenciesMeta: new Map(),
									bin: new Map(),
								};
							}
						},
						class {
							supportsDescriptor(e, t) {
								return !!e.range.startsWith('portal:');
							}
							supportsLocator(e, t) {
								return !!e.reference.startsWith('portal:');
							}
							shouldPersistResolution(e, t) {
								return !1;
							}
							bindDescriptor(e, t, r) {
								return n.structUtils.bindDescriptor(e, {
									locator: n.structUtils.stringifyLocator(t),
								});
							}
							getResolutionDependencies(e, t) {
								return [];
							}
							async getCandidates(e, t, r) {
								const A = e.range.slice('portal:'.length);
								return [
									n.structUtils.makeLocator(
										e,
										'portal:' + i.cS.toPortablePath(A)
									),
								];
							}
							async getSatisfying(e, t, r) {
								return null;
							}
							async resolve(e, t) {
								if (!t.fetchOptions)
									throw new Error(
										'Assertion failed: This resolver cannot be used unless a fetcher is configured'
									);
								const r = await t.fetchOptions.fetcher.fetch(e, t.fetchOptions),
									i = await n.miscUtils.releaseAfterUseAsync(
										async () =>
											await s.G.find(r.prefixPath, { baseFs: r.packageFs }),
										r.releaseFs
									);
								return {
									...e,
									version: i.version || '0.0.0',
									languageName: t.project.configuration.get(
										'defaultLanguageName'
									),
									linkType: a.U.SOFT,
									dependencies: new Map([
										...i.dependencies,
										...i.devDependencies,
									]),
									peerDependencies: i.peerDependencies,
									dependenciesMeta: i.dependenciesMeta,
									peerDependenciesMeta: i.peerDependenciesMeta,
									bin: i.bin,
								};
							}
						},
					],
				};
			},
			8149: (e, t, r) => {
				'use strict';
				r.r(t), r.d(t, { getPnpPath: () => ie, default: () => Ae });
				var n,
					i = r(27122),
					A = r(46009),
					o = r(32741);
				!(function (e) {
					(e[(e.YES = 0)] = 'YES'),
						(e[(e.NO = 1)] = 'NO'),
						(e[(e.DEPENDS = 2)] = 'DEPENDS');
				})(n || (n = {}));
				const s = (e, t) => `${e}@${t}`,
					a = (e, t) => {
						const r = t.indexOf('#'),
							n = r >= 0 ? t.substring(r + 1) : t;
						return s(e, n);
					};
				var c;
				!(function (e) {
					(e[(e.NONE = -1)] = 'NONE'),
						(e[(e.PERF = 0)] = 'PERF'),
						(e[(e.CHECK = 1)] = 'CHECK'),
						(e[(e.REASONS = 2)] = 'REASONS'),
						(e[(e.INTENSIVE_CHECK = 9)] = 'INTENSIVE_CHECK');
				})(c || (c = {}));
				const g = (e, t = {}) => {
						const r =
								t.debugLevel || Number(process.env.NM_DEBUG_LEVEL || c.NONE),
							n = {
								check: t.check || r >= c.INTENSIVE_CHECK,
								debugLevel: r,
								hoistingLimits: t.hoistingLimits || new Map(),
							};
						n.debugLevel >= c.PERF && console.time('hoist');
						const i = C(e, n);
						if (
							(h(i, [i], new Set([i.locator]), n),
							n.debugLevel >= c.PERF && console.timeEnd('hoist'),
							n.debugLevel >= c.CHECK)
						) {
							const e = d(i);
							if (e) throw new Error(`${e}, after hoisting finished:\n${y(i)}`);
						}
						return n.debugLevel >= c.REASONS && console.log(y(i)), E(i);
					},
					l = (e, t) => {
						if (t.decoupled) return t;
						const {
								name: r,
								references: n,
								ident: i,
								locator: A,
								dependencies: o,
								originalDependencies: s,
								hoistedDependencies: a,
								peerNames: c,
								reasons: g,
								isHoistBorder: l,
							} = t,
							u = {
								name: r,
								references: new Set(n),
								ident: i,
								locator: A,
								dependencies: new Map(o),
								originalDependencies: new Map(s),
								hoistedDependencies: new Map(a),
								peerNames: new Set(c),
								reasons: new Map(g),
								decoupled: !0,
								isHoistBorder: l,
							},
							h = u.dependencies.get(r);
						return (
							h && h.ident == u.ident && u.dependencies.set(r, u),
							e.dependencies.set(u.name, u),
							u
						);
					},
					u = (e) => {
						const t = new Set(),
							r = (n, i = new Set()) => {
								if (!i.has(n)) {
									i.add(n);
									for (const A of n.peerNames)
										if (!e.peerNames.has(A)) {
											const n = e.dependencies.get(A);
											n && !t.has(n) && r(n, i);
										}
									t.add(n);
								}
							};
						for (const t of e.dependencies.values())
							e.peerNames.has(t.name) || r(t);
						return t;
					},
					h = (e, t, r, n, i = new Set()) => {
						const A = t[t.length - 1];
						if (i.has(A)) return;
						i.add(A);
						const o = ((e, t) => {
								const r = new Map([[e.name, [e.ident]]]);
								for (const t of e.dependencies.values())
									e.peerNames.has(t.name) || r.set(t.name, [t.ident]);
								const n = Array.from(t.keys());
								n.sort((e, r) => {
									const n = t.get(e),
										i = t.get(r);
									return i.peerDependents.size !== n.peerDependents.size
										? i.peerDependents.size - n.peerDependents.size
										: i.dependents.size - n.dependents.size;
								});
								for (const t of n) {
									const n = t.substring(0, t.indexOf('@', 1)),
										i = t.substring(n.length + 1);
									if (!e.peerNames.has(n)) {
										let e = r.get(n);
										e || ((e = []), r.set(n, e)), e.indexOf(i) < 0 && e.push(i);
									}
								}
								return r;
							})(A, m(A)),
							s = new Map(Array.from(o.entries()).map(([e, t]) => [e, t[0]])),
							a =
								A === e
									? new Map()
									: ((e) => {
											const t = new Map(),
												r = new Set(),
												n = (i) => {
													if (!r.has(i)) {
														r.add(i);
														for (const r of i.hoistedDependencies.values())
															e.dependencies.has(r.name) || t.set(r.name, r);
														for (const e of i.dependencies.values())
															i.peerNames.has(e.name) || n(e);
													}
												};
											return n(e), t;
									  })(A);
						let c;
						do {
							f(e, t, r, a, s, o, n), (c = !1);
							for (const [e, t] of o)
								t.length > 1 &&
									!A.dependencies.has(e) &&
									(s.delete(e), t.shift(), s.set(e, t[0]), (c = !0));
						} while (c);
						for (const i of A.dependencies.values())
							A.peerNames.has(i.name) ||
								r.has(i.locator) ||
								(r.add(i.locator), h(e, [...t, i], r, n), r.delete(i.locator));
					},
					p = (e, t, r, i, A, o, { outputReason: s }) => {
						let a,
							c = null,
							g = new Set();
						s &&
							(a =
								'' +
								Array.from(e)
									.map((e) => B(e))
									.join('→'));
						const l = t[t.length - 1],
							u = r.ident === l.ident,
							h = A.get(r.name);
						let p = h === r.ident && !u;
						if (
							(s &&
								!p &&
								h &&
								!u &&
								(c = `- filled by: ${B(o.get(r.name)[0])} at ${a}`),
							p)
						) {
							let e = !1;
							const n = i.get(r.name);
							if (
								((e = !n || n.ident === r.ident),
								s && !e && (c = `- filled by: ${B(n.locator)} at ${a}`),
								e)
							)
								for (let n = 1; n < t.length - 1; n++) {
									const i = t[n],
										A = i.dependencies.get(r.name);
									if (A && A.ident !== r.ident) {
										(e = !1),
											s &&
												(c = `- filled by: ${B(A.locator)} at ${B(i.locator)}`);
										break;
									}
								}
							p = e;
						}
						if (p) {
							let e = !0;
							const n = new Set(r.peerNames);
							for (let r = t.length - 1; r >= 1; r--) {
								const i = t[r];
								for (const A of n) {
									if (i.peerNames.has(A) && i.originalDependencies.has(A))
										continue;
									const o = i.dependencies.get(A);
									o &&
										(r === t.length - 1
											? g.add(o)
											: ((g = null),
											  (e = !1),
											  s &&
													(c = `- peer dependency ${B(
														o.locator
													)} from parent ${B(
														i.locator
													)} was not hoisted to ${a}`))),
										n.delete(A);
								}
								if (!e) break;
							}
							p = e;
						}
						return null !== g && g.size > 0
							? { isHoistable: n.DEPENDS, dependsOn: g, reason: c }
							: { isHoistable: p ? n.YES : n.NO, reason: c };
					},
					f = (e, t, r, i, A, o, s) => {
						const a = t[t.length - 1],
							g = new Set(),
							h = (t, f, I, E) => {
								if (g.has(I)) return;
								const m = [...f, I.locator],
									w = new Map(),
									Q = new Map();
								for (const e of u(I)) {
									let g = null;
									if (
										(g ||
											(g = p(r, [a, ...t, I], e, i, A, o, {
												outputReason: s.debugLevel >= c.REASONS,
											})),
										Q.set(e, g),
										g.isHoistable === n.DEPENDS)
									)
										for (const t of g.dependsOn) {
											const r = w.get(t.name) || new Set();
											r.add(e.name), w.set(t.name, r);
										}
								}
								const v = new Set(),
									b = (e, t, r) => {
										if (!v.has(e)) {
											v.add(e),
												e.ident !== I.ident &&
													Q.set(e, { isHoistable: n.NO, reason: r });
											for (const n of w.get(e.name) || [])
												b(I.dependencies.get(n), t, r);
										}
									};
								let D;
								s.debugLevel >= c.REASONS &&
									(D =
										'' +
										Array.from(r)
											.map((e) => B(e))
											.join('→'));
								for (const [e, t] of Q)
									t.isHoistable === n.NO &&
										b(
											e,
											t,
											`- peer dependency ${B(e.locator)} from parent ${B(
												I.locator
											)} was not hoisted to ${D}`
										);
								for (const e of Q.keys())
									if (!v.has(e)) {
										I.dependencies.delete(e.name),
											I.hoistedDependencies.set(e.name, e),
											I.reasons.delete(e.name);
										const t = a.dependencies.get(e.name);
										if (t) for (const r of e.references) t.references.add(r);
										else
											a.ident !== e.ident &&
												(a.dependencies.set(e.name, e), E.add(e));
									}
								if (s.check) {
									const r = d(e);
									if (r)
										throw new Error(
											`${r}, after hoisting dependencies of ${[a, ...t, I]
												.map((e) => B(e.locator))
												.join('→')}:\n${y(e)}`
										);
								}
								const S = u(I);
								for (const e of S)
									if (v.has(e) && m.indexOf(e.locator) < 0) {
										const r = Q.get(e);
										if (
											(r.isHoistable !== n.YES &&
												I.reasons.set(e.name, r.reason),
											!e.isHoistBorder)
										) {
											g.add(I);
											const r = l(I, e);
											h([...t, I], [...f, I.locator], r, C), g.delete(I);
										}
									}
							};
						let f,
							C = new Set(u(a));
						do {
							(f = C), (C = new Set());
							for (const e of f) {
								if (e.locator === a.locator || e.isHoistBorder) continue;
								const t = l(a, e);
								h([], Array.from(r), t, C);
							}
						} while (C.size > 0);
					},
					d = (e) => {
						const t = [],
							r = new Set(),
							n = new Set(),
							i = (e, A) => {
								if (r.has(e)) return;
								if ((r.add(e), n.has(e))) return;
								const o = new Map(A);
								for (const t of e.dependencies.values())
									e.peerNames.has(t.name) || o.set(t.name, t);
								for (const r of e.originalDependencies.values()) {
									const i = o.get(r.name),
										s = () =>
											'' +
											Array.from(n)
												.concat([e])
												.map((e) => B(e.locator))
												.join('→');
									if (e.peerNames.has(r.name)) {
										const e = A.get(r.name);
										(e === i && e && e.ident === r.ident) ||
											t.push(
												`${s()} - broken peer promise: expected ${
													r.ident
												} but found ${e ? e.ident : e}`
											);
									} else
										i
											? i.ident !== r.ident &&
											  t.push(
													`${s()} - broken require promise for ${
														r.name
													}: expected ${r.ident}, but found: ${i.ident}`
											  )
											: t.push(
													`${s()} - broken require promise: no required dependency ${
														r.locator
													} found`
											  );
								}
								n.add(e);
								for (const t of e.dependencies.values())
									e.peerNames.has(t.name) || i(t, o);
								n.delete(e);
							};
						return i(e, e.dependencies), t.join('\n');
					},
					C = (e, t) => {
						const { identName: r, name: n, reference: i, peerNames: A } = e,
							o = {
								name: n,
								references: new Set([i]),
								locator: s(r, i),
								ident: a(r, i),
								dependencies: new Map(),
								originalDependencies: new Map(),
								hoistedDependencies: new Map(),
								peerNames: new Set(A),
								reasons: new Map(),
								decoupled: !0,
								isHoistBorder: !0,
							},
							c = new Map([[e, o]]),
							g = (e, r) => {
								let n = c.get(e);
								const i = !!n;
								if (!n) {
									const {
											name: i,
											identName: A,
											reference: o,
											peerNames: g,
										} = e,
										l = t.hoistingLimits.get(r.locator);
									(n = {
										name: i,
										references: new Set([o]),
										locator: s(A, o),
										ident: a(A, o),
										dependencies: new Map(),
										originalDependencies: new Map(),
										hoistedDependencies: new Map(),
										peerNames: new Set(g),
										reasons: new Map(),
										decoupled: !0,
										isHoistBorder: !!l && l.has(i),
									}),
										c.set(e, n);
								}
								if (
									(r.dependencies.set(e.name, n),
									r.originalDependencies.set(e.name, n),
									i)
								) {
									const e = new Set(),
										t = (r) => {
											if (!e.has(r)) {
												e.add(r), (r.decoupled = !1);
												for (const e of r.dependencies.values())
													r.peerNames.has(e.name) || t(e);
											}
										};
									t(n);
								} else for (const t of e.dependencies) g(t, n);
							};
						for (const t of e.dependencies) g(t, o);
						return o;
					},
					I = (e) => e.substring(0, e.indexOf('@', 1)),
					E = (e) => {
						const t = {
								name: e.name,
								identName: I(e.locator),
								references: new Set(e.references),
								dependencies: new Set(),
							},
							r = new Set([e]),
							n = (e, t, i) => {
								const A = r.has(e);
								let o;
								if (t === e) o = i;
								else {
									const { name: t, references: r, locator: n } = e;
									o = {
										name: t,
										identName: I(n),
										references: r,
										dependencies: new Set(),
									};
								}
								if ((i.dependencies.add(o), !A)) {
									r.add(e);
									for (const t of e.dependencies.values())
										e.peerNames.has(t.name) || n(t, e, o);
									r.delete(e);
								}
							};
						for (const r of e.dependencies.values()) n(r, e, t);
						return t;
					},
					m = (e) => {
						const t = new Map(),
							r = new Set([e]),
							n = (e) => {
								const r = ((e) => `${e.name}@${e.ident}`)(e);
								let n = t.get(r);
								return (
									n ||
										((n = { dependents: new Set(), peerDependents: new Set() }),
										t.set(r, n)),
									n
								);
							},
							i = (e, t) => {
								const A = !!r.has(t);
								if ((n(t).dependents.add(e.ident), !A)) {
									r.add(t);
									for (const e of t.dependencies.values())
										if (t.peerNames.has(e.name)) {
											n(e).peerDependents.add(t.ident);
										} else i(t, e);
								}
							};
						for (const t of e.dependencies.values())
							e.peerNames.has(t.name) || i(e, t);
						return t;
					},
					B = (e) => {
						const t = e.indexOf('@', 1),
							r = e.substring(0, t),
							n = e.substring(t + 1);
						if ('workspace:.' === n) return '.';
						if (n) {
							const e = (n.indexOf('#') > 0 ? n.split('#')[1] : n).replace(
								'npm:',
								''
							);
							return n.startsWith('virtual') ? `v:${r}@${e}` : `${r}@${e}`;
						}
						return '' + r;
					},
					y = (e) => {
						let t = 0;
						const r = (e, n, i = '') => {
							if (t > 5e4 || n.has(e)) return '';
							t++;
							const A = Array.from(e.dependencies.values());
							let o = '';
							n.add(e);
							for (let t = 0; t < A.length; t++) {
								const s = A[t];
								if (!e.peerNames.has(s.name)) {
									const a = e.reasons.get(s.name),
										c = I(s.locator);
									(o += `${i}${t < A.length - 1 ? '├─' : '└─'}${
										(n.has(s) ? '>' : '') +
										(c !== s.name ? `a:${s.name}:` : '') +
										B(s.locator) +
										(a ? ' ' + a : '')
									}\n`),
										(o += r(s, n, `${i}${t < A.length - 1 ? '│ ' : '  '}`));
								}
							}
							return n.delete(e), o;
						};
						return (
							r(e, new Set()) +
							(t > 5e4
								? '\nTree is too large, part of the tree has been dunped\n'
								: '')
						);
					};
				var w, Q;
				!(function (e) {
					(e.HARD = 'HARD'), (e.SOFT = 'SOFT');
				})(w || (w = {})),
					(function (e) {
						(e.WORKSPACES = 'workspaces'),
							(e.DEPENDENCIES = 'dependencies'),
							(e.NONE = 'none');
					})(Q || (Q = {}));
				const v = (e, t) => {
						const { packageTree: r, hoistingLimits: n } = D(e, t),
							i = g(r, { hoistingLimits: n });
						return S(e, i, t);
					},
					b = (e) => `${e.name}@${e.reference}`;
				const D = (e, t) => {
					const r = e.getDependencyTreeRoots(),
						n = new Map(),
						i = new Map(),
						s = e.getPackageInformation(e.topLevel);
					if (null === s)
						throw new Error(
							'Assertion failed: Expected the top-level package to have been registered'
						);
					const a = e.findPackageLocator(s.packageLocation);
					if (null === a)
						throw new Error(
							'Assertion failed: Expected the top-level package to have a physical locator'
						);
					const c = A.cS.toPortablePath(s.packageLocation),
						g = b(a);
					if (t.project) {
						const e = { children: new Map() },
							r = t.project.cwd.split(A.y1.sep);
						for (const [n, i] of t.project.workspacesByCwd) {
							const t = n.split(A.y1.sep).slice(r.length);
							let s = e;
							for (const e of t) {
								let t = s.children.get(e);
								t || ((t = { children: new Map() }), s.children.set(e, t)),
									(s = t);
							}
							s.workspaceLocator = {
								name: o.structUtils.stringifyIdent(i.anchoredLocator),
								reference: i.anchoredLocator.reference,
							};
						}
						const n = (e, t) => {
							if (e.workspaceLocator) {
								const r = b(t);
								let n = i.get(r);
								n || ((n = new Set()), i.set(r, n)), n.add(e.workspaceLocator);
							}
							for (const r of e.children.values())
								n(r, e.workspaceLocator || t);
						};
						for (const t of e.children.values()) n(t, e.workspaceLocator);
					} else
						for (const e of r)
							if (e.name !== a.name || e.reference !== a.reference) {
								let t = i.get(g);
								t || ((t = new Set()), i.set(g, t)), t.add(e);
							}
					const l = {
							name: a.name,
							identName: a.name,
							reference: a.reference,
							peerNames: s.packagePeers,
							dependencies: new Set(),
						},
						u = new Map(),
						h = (r, s, g, p, f, d, C) => {
							var I, E;
							const m = ((e, t) => `${b(t)}:${e}`)(r, g);
							let B = u.get(m);
							const y = !!B;
							if (
								(y ||
									g.name !== a.name ||
									g.reference !== a.reference ||
									((B = l), u.set(m, l)),
								B ||
									((B = {
										name: r,
										identName: g.name,
										reference: g.reference,
										dependencies: new Set(),
										peerNames: s.packagePeers,
									}),
									u.set(m, B)),
								C)
							) {
								const e = b({ name: p.identName, reference: p.reference }),
									t = n.get(e) || new Set();
								n.set(e, t), t.add(B.name);
							}
							const w = new Map(s.packageDependencies);
							if (t.project) {
								const e = t.project.workspacesByCwd.get(
									A.cS.toPortablePath(s.packageLocation.slice(0, -1))
								);
								if (e) {
									const t = new Set([
										...Array.from(e.manifest.peerDependencies.values(), (e) =>
											o.structUtils.stringifyIdent(e)
										),
										...Array.from(e.manifest.peerDependenciesMeta.keys()),
									]);
									for (const e of t)
										w.has(e) ||
											(w.set(e, f.get(e) || null), B.peerNames.add(e));
								}
							}
							const v = b(g),
								D = i.get(v);
							if (D) for (const e of D) w.set(e.name + '$wsroot$', e.reference);
							p.dependencies.add(B);
							const S =
								t.pnpifyFs ||
								!(function (e) {
									let t = o.structUtils.parseDescriptor(e);
									return (
										o.structUtils.isVirtualDescriptor(t) &&
											(t = o.structUtils.devirtualizeDescriptor(t)),
										t.range.startsWith('portal:')
									);
								})(m);
							if (!y && S)
								for (const [r, n] of w)
									if (null !== n) {
										const i = e.getLocator(r, n),
											o = e.getLocator(r.replace('$wsroot$', ''), n),
											s = e.getPackageInformation(o);
										if (null === s)
											throw new Error(
												'Assertion failed: Expected the package to have been registered'
											);
										const a =
												null === (I = t.hoistingLimitsByCwd) || void 0 === I
													? void 0
													: I.get(d),
											g =
												A.y1.relative(
													c,
													A.cS.toPortablePath(s.packageLocation)
												) || A.LZ.dot,
											l =
												null === (E = t.hoistingLimitsByCwd) || void 0 === E
													? void 0
													: E.get(g),
											u =
												a === Q.DEPENDENCIES ||
												l === Q.DEPENDENCIES ||
												l === Q.WORKSPACES;
										h(r, s, i, B, w, g, u);
									}
						};
					return (
						h(a.name, s, a, l, s.packageDependencies, A.LZ.dot, !1),
						{ packageTree: l, hoistingLimits: n }
					);
				};
				const S = (e, t, r) => {
					const n = new Map(),
						i = (t, n) => {
							const { linkType: i, target: o } = (function (e, t, r) {
								const n = t.getLocator(
										e.name.replace('$wsroot$', ''),
										e.reference
									),
									i = t.getPackageInformation(n);
								if (null === i)
									throw new Error(
										'Assertion failed: Expected the package to be registered'
									);
								let o, s;
								if (r.pnpifyFs)
									(s = A.cS.toPortablePath(i.packageLocation)), (o = w.SOFT);
								else {
									const r =
										t.resolveVirtual &&
										e.reference &&
										e.reference.startsWith('virtual:')
											? t.resolveVirtual(i.packageLocation)
											: i.packageLocation;
									(s = A.cS.toPortablePath(r || i.packageLocation)),
										(o = i.linkType);
								}
								return { linkType: o, target: s };
							})(t, e, r);
							return { locator: b(t), target: o, linkType: i, aliases: n };
						},
						s = (e) => {
							const [t, r] = e.split('/');
							return r
								? { scope: (0, A.Zu)(t), name: (0, A.Zu)(r) }
								: { scope: null, name: (0, A.Zu)(t) };
						},
						a = new Set(),
						c = (e, t) => {
							if (!a.has(e)) {
								a.add(e);
								for (const r of e.dependencies) {
									if (
										r === e ||
										(e.identName.endsWith('$wsroot$') &&
											r.identName === e.identName.replace('$wsroot$', ''))
									)
										continue;
									const a = Array.from(r.references).sort(),
										g = { name: r.identName, reference: a[0] },
										{ name: l, scope: u } = s(r.name),
										h = u ? [u, l] : [l],
										p = A.y1.join(t, 'node_modules'),
										f = A.y1.join(p, ...h),
										d = i(g, a.slice(1));
									if (!r.name.endsWith('$wsroot$')) {
										const e = n.get(f);
										if (e) {
											if (e.dirList)
												throw new Error(
													`Assertion failed: ${f} cannot merge dir node with leaf node`
												);
											{
												const t = o.structUtils.parseLocator(e.locator),
													r = o.structUtils.parseLocator(d.locator);
												if (e.linkType !== d.linkType)
													throw new Error(
														`Assertion failed: ${f} cannot merge nodes with different link types`
													);
												if (t.identHash !== r.identHash)
													throw new Error(
														`Assertion failed: ${f} cannot merge nodes with different idents ${o.structUtils.stringifyLocator(
															t
														)} and ${o.structUtils.stringifyLocator(r)}`
													);
												d.aliases = [
													...d.aliases,
													...e.aliases,
													o.structUtils.parseLocator(e.locator).reference,
												];
											}
										}
										n.set(f, d);
										const t = f.split('/'),
											r = t.indexOf('node_modules');
										let i = t.length - 1;
										for (; r >= 0 && i > r; ) {
											const e = A.cS.toPortablePath(
													t.slice(0, i).join(A.y1.sep)
												),
												r = (0, A.Zu)(t[i]),
												o = n.get(e);
											if (o) {
												if (o.dirList) {
													if (o.dirList.has(r)) break;
													o.dirList.add(r);
												}
											} else n.set(e, { dirList: new Set([r]) });
											i--;
										}
									}
									c(r, d.linkType === w.SOFT ? d.target : f);
								}
							}
						},
						g = i({ name: t.name, reference: Array.from(t.references)[0] }, []),
						l = g.target;
					return n.set(l, g), c(t, l), n;
				};
				var k = r(92659),
					M = r(32485),
					N = r(92409),
					F = r(46611),
					R = r(35691),
					K = r(17674),
					L = r(53660),
					x = r(56537),
					P = r(29486),
					U = r(55125),
					T = r(57436),
					O = r(88563),
					Y = r(58069),
					j = r.n(Y),
					G = r(40822),
					H = r(35747),
					J = r.n(H);
				const _ = 'node_modules';
				class q extends T.AbstractPnpInstaller {
					constructor() {
						super(...arguments), (this.manifestCache = new Map());
					}
					async getBuildScripts(e, t, r) {
						return [];
					}
					async transformPackage(e, t, r, n, i) {
						return r.packageFs;
					}
					async finalizeInstallWithPnp(e) {
						if (
							'node-modules' !==
							this.opts.project.configuration.get('nodeLinker')
						)
							return;
						const t = new K.p({
							baseFs: new L.A({
								libzip: await (0, P.getLibzipPromise)(),
								maxOpenFiles: 80,
								readOnlyArchives: !0,
							}),
						});
						let r = await z(this.opts.project);
						if (null === r) {
							const e = this.opts.project.configuration.get('bstatePath');
							(await x.xfs.existsPromise(e)) && (await x.xfs.unlinkPromise(e)),
								(r = {
									locatorMap: new Map(),
									binSymlinks: new Map(),
									locationTree: new Map(),
								});
						}
						const n = this.opts.project.configuration.get('nmHoistingLimits'),
							i = (0, O.oC)(e, this.opts.project.cwd, t),
							s = new Map(
								this.opts.project.workspaces.map((e) => {
									var t, r;
									const { relativeCwd: i, manifest: A } = e;
									let s = n;
									try {
										s = o.miscUtils.validateEnum(
											Q,
											null !==
												(r =
													null === (t = A.installConfig) || void 0 === t
														? void 0
														: t.hoistingLimits) && void 0 !== r
												? r
												: n
										);
									} catch (t) {
										const r = o.structUtils.prettyWorkspace(
											this.opts.project.configuration,
											e
										);
										this.opts.report.reportWarning(
											k.b.INVALID_MANIFEST,
											`${r}: Invalid 'installConfig.hoistingLimits' value. Expected one of ${Object.values(
												Q
											).join(', ')}, using default: "${s}"`
										);
									}
									return [i, s];
								})
							),
							a = ((e) => {
								const t = new Map();
								for (const [r, n] of e.entries())
									if (!n.dirList) {
										let e = t.get(n.locator);
										e ||
											((e = {
												target: n.target,
												linkType: n.linkType,
												locations: [],
												aliases: n.aliases,
											}),
											t.set(n.locator, e)),
											e.locations.push(r);
									}
								for (const e of t.values())
									e.locations = e.locations.sort((e, t) => {
										const r = e.split(A.y1.delimiter).length,
											n = t.split(A.y1.delimiter).length;
										return r !== n ? n - r : t.localeCompare(e);
									});
								return t;
							})(
								v(i, {
									pnpifyFs: !1,
									hoistingLimitsByCwd: s,
									project: this.opts.project,
								})
							);
						await (async function (
							e,
							t,
							{ baseFs: r, project: n, report: i, loadManifest: s }
						) {
							const a = A.y1.join(n.cwd, _),
								{ locationTree: c, binSymlinks: g } = (function (e, t) {
									const r = new Map([...e]),
										n = new Map([...t]);
									for (const [t, r] of e) {
										const e = A.y1.join(t, _);
										if (!x.xfs.existsSync(e)) {
											r.children.delete(_);
											for (const t of n.keys())
												null !== A.y1.contains(e, t) && n.delete(t);
										}
									}
									return { locationTree: r, binSymlinks: n };
								})(e.locationTree, e.binSymlinks),
								l = X(t, { skipPrefix: n.cwd }),
								u = [],
								h = async ({ srcDir: e, dstDir: t, linkType: n }) => {
									const i = (async () => {
										try {
											n === M.U.SOFT
												? (await x.xfs.mkdirPromise(A.y1.dirname(t), {
														recursive: !0,
												  }),
												  await Z(A.y1.resolve(e), t))
												: await $(t, e, { baseFs: r });
										} catch (r) {
											throw (
												((r.message = `While persisting ${e} -> ${t} ${r.message}`),
												r)
											);
										} finally {
											I.tick();
										}
									})().then(() => u.splice(u.indexOf(i), 1));
									u.push(i), u.length > 4 && (await Promise.race(u));
								},
								p = async (e, t, r) => {
									const n = (async () => {
										const n = async (e, t, r) => {
											try {
												(r && r.innerLoop) ||
													(await x.xfs.mkdirPromise(t, { recursive: !0 }));
												const i = await x.xfs.readdirPromise(e, {
													withFileTypes: !0,
												});
												for (const o of i) {
													if (!((r && r.innerLoop) || '.bin' !== o.name))
														continue;
													const i = A.y1.join(e, o.name),
														s = A.y1.join(t, o.name);
													o.isDirectory()
														? (o.name !== _ || (r && r.innerLoop)) &&
														  (await x.xfs.mkdirPromise(s, { recursive: !0 }),
														  await n(i, s, { innerLoop: !0 }))
														: await x.xfs.copyFilePromise(
																i,
																s,
																J().constants.COPYFILE_FICLONE
														  );
												}
											} catch (n) {
												throw (
													((r && r.innerLoop) ||
														(n.message = `While cloning ${e} -> ${t} ${n.message}`),
													n)
												);
											} finally {
												(r && r.innerLoop) || I.tick();
											}
										};
										await n(e, t, r);
									})().then(() => u.splice(u.indexOf(n), 1));
									u.push(n), u.length > 4 && (await Promise.race(u));
								},
								f = async (e, t, r) => {
									if (r)
										for (const [n, i] of t.children) {
											const t = r.children.get(n);
											await f(A.y1.join(e, n), i, t);
										}
									else
										t.children.has(_) &&
											(await W(A.y1.join(e, _), { contentsOnly: !1 })),
											await W(e, { contentsOnly: e === a });
								};
							for (const [e, t] of c) {
								const r = l.get(e);
								for (const [n, i] of t.children) {
									if ('.' === n) continue;
									const t = r ? r.children.get(n) : r;
									await f(A.y1.join(e, n), i, t);
								}
							}
							const d = async (e, t, r) => {
								if (r) {
									te(t.locator, r.locator) ||
										(await W(e, { contentsOnly: t.linkType === M.U.HARD }));
									for (const [n, i] of t.children) {
										const t = r.children.get(n);
										await d(A.y1.join(e, n), i, t);
									}
								} else
									t.children.has(_) &&
										(await W(A.y1.join(e, _), { contentsOnly: !0 })),
										await W(e, { contentsOnly: t.linkType === M.U.HARD });
							};
							for (const [e, t] of l) {
								const r = c.get(e);
								for (const [n, i] of t.children) {
									if ('.' === n) continue;
									const t = r ? r.children.get(n) : r;
									await d(A.y1.join(e, n), i, t);
								}
							}
							const C = [];
							for (const [r, { locations: i }] of e.locatorMap.entries())
								for (const e of i) {
									const { locationRoot: i, segments: o } = V(e, {
										skipPrefix: n.cwd,
									});
									let s = l.get(i),
										a = i;
									if (s) {
										for (const e of o)
											if (((a = A.y1.join(a, e)), (s = s.children.get(e)), !s))
												break;
										if (s && !te(s.locator, r)) {
											const e = t.get(s.locator),
												r = e.target,
												n = a,
												i = e.linkType;
											r !== n && C.push({ srcDir: r, dstDir: n, linkType: i });
										}
									}
								}
							for (const [e, { locations: r }] of t.entries())
								for (const i of r) {
									const { locationRoot: r, segments: o } = V(i, {
										skipPrefix: n.cwd,
									});
									let s = c.get(r),
										a = l.get(r),
										g = r;
									const u = t.get(e),
										h = u.target,
										p = i;
									if (h === p) continue;
									const f = u.linkType;
									for (const e of o) a = a.children.get(e);
									if (s) {
										for (const e of o)
											if (
												((g = A.y1.join(g, e)), (s = s.children.get(e)), !s)
											) {
												C.push({ srcDir: h, dstDir: p, linkType: f });
												break;
											}
									} else C.push({ srcDir: h, dstDir: p, linkType: f });
								}
							const I = R.yG.progressViaCounter(C.length),
								E = i.reportProgress(I);
							try {
								const e = new Map();
								for (const t of C)
									(t.linkType !== M.U.SOFT && e.has(t.srcDir)) ||
										(e.set(t.srcDir, t.dstDir), await h({ ...t }));
								await Promise.all(u), (u.length = 0);
								for (const t of C) {
									const r = e.get(t.srcDir);
									t.linkType !== M.U.SOFT &&
										t.dstDir !== r &&
										(await p(r, t.dstDir));
								}
								await Promise.all(u),
									await x.xfs.mkdirPromise(a, { recursive: !0 });
								const r = await (async function (e, t, r, { loadManifest: n }) {
									const i = new Map();
									for (const [t, { locations: r }] of e) {
										const e = ee(t) ? null : await n(t, r[0]),
											o = new Map();
										if (e)
											for (const [t, n] of e.bin) {
												const e = A.y1.join(r[0], n);
												'' !== n && x.xfs.existsSync(e) && o.set(t, n);
											}
										i.set(t, o);
									}
									const o = new Map(),
										s = (e, t, n) => {
											const a = new Map(),
												c = A.y1.contains(r, e);
											if (n.locator && null !== c) {
												const t = i.get(n.locator);
												for (const [r, n] of t) {
													const t = A.y1.join(e, A.cS.toPortablePath(n));
													a.set((0, A.Zu)(r), t);
												}
												for (const [t, r] of n.children) {
													const n = A.y1.join(e, t),
														i = s(n, n, r);
													i.size > 0 &&
														o.set(
															e,
															new Map([...(o.get(e) || new Map()), ...i])
														);
												}
											} else
												for (const [r, i] of n.children) {
													const n = s(A.y1.join(e, r), t, i);
													for (const [e, t] of n) a.set(e, t);
												}
											return a;
										};
									for (const [e, r] of t) {
										const t = s(e, e, r);
										t.size > 0 &&
											o.set(e, new Map([...(o.get(e) || new Map()), ...t]));
									}
									return o;
								})(t, l, n.cwd, { loadManifest: s });
								await (async function (e, t) {
									for (const r of e.keys())
										if (!t.has(r)) {
											const e = A.y1.join(r, _, '.bin');
											await x.xfs.removePromise(e);
										}
									for (const [r, n] of t) {
										const t = A.y1.join(r, _, '.bin'),
											i = e.get(r) || new Map();
										await x.xfs.mkdirPromise(t, { recursive: !0 });
										for (const e of i.keys())
											n.has(e) ||
												(await x.xfs.removePromise(A.y1.join(t, e)),
												'win32' === process.platform &&
													(await x.xfs.removePromise(
														A.y1.join(t, (0, A.Zu)(e + '.cmd'))
													)));
										for (const [e, r] of n) {
											const n = i.get(e),
												o = A.y1.join(t, e);
											n !== r &&
												('win32' === process.platform
													? await j()(
															A.cS.fromPortablePath(r),
															A.cS.fromPortablePath(o),
															{ createPwshFile: !1 }
													  )
													: (await x.xfs.removePromise(o),
													  await Z(r, o),
													  await x.xfs.chmodPromise(r, 493)));
										}
									}
								})(g, r),
									await (async function (e, t, r) {
										let n = '';
										(n +=
											'# Warning: This file is automatically generated. Removing it is fine, but will\n'),
											(n +=
												'# cause your node_modules installation to become invalidated.\n'),
											(n += '\n'),
											(n += '__metadata:\n'),
											(n += '  version: 1\n');
										const i = Array.from(t.keys()).sort(),
											s = o.structUtils.stringifyLocator(
												e.topLevelWorkspace.anchoredLocator
											);
										for (const o of i) {
											const i = t.get(o);
											(n += '\n'),
												(n += JSON.stringify(o) + ':\n'),
												(n += '  locations:\n');
											for (const t of i.locations) {
												const r = A.y1.contains(e.cwd, t);
												if (null === r)
													throw new Error(
														`Assertion failed: Expected the path to be within the project (${t})`
													);
												n += `    - ${JSON.stringify(r)}\n`;
											}
											if (i.aliases.length > 0) {
												n += '  aliases:\n';
												for (const e of i.aliases)
													n += `    - ${JSON.stringify(e)}\n`;
											}
											if (o === s && r.size > 0) {
												n += '  bin:\n';
												for (const [t, i] of r) {
													const r = A.y1.contains(e.cwd, t);
													if (null === r)
														throw new Error(
															`Assertion failed: Expected the path to be within the project (${t})`
														);
													n += `    ${JSON.stringify(r)}:\n`;
													for (const [e, r] of i) {
														const i = A.y1.relative(A.y1.join(t, _), r);
														n += `      ${JSON.stringify(e)}: ${JSON.stringify(
															i
														)}\n`;
													}
												}
											}
										}
										const a = e.cwd,
											c = A.y1.join(a, _, '.yarn-state.yml');
										await x.xfs.changeFilePromise(c, n, {
											automaticNewlines: !0,
										});
									})(n, t, r);
							} finally {
								E.stop();
							}
						})(r, a, {
							baseFs: t,
							project: this.opts.project,
							report: this.opts.report,
							loadManifest: this.cachedManifestLoad.bind(this, i, t),
						});
						const c = [];
						for (const [e, r] of a.entries()) {
							if (ee(e)) continue;
							const n = o.structUtils.parseLocator(e),
								s = {
									name: o.structUtils.stringifyIdent(n),
									reference: n.reference,
								};
							if (null === i.getPackageInformation(s))
								throw new Error(
									`Assertion failed: Expected the package to be registered (${o.structUtils.prettyLocator(
										this.opts.project.configuration,
										n
									)})`
								);
							const a = A.cS.toPortablePath(r.locations[0]),
								g = await this.cachedManifestLoad(i, t, e, a),
								l = await this.getSourceBuildScripts(a, g);
							l.length > 0 &&
								!this.opts.project.configuration.get('enableScripts') &&
								(this.opts.report.reportWarningOnce(
									k.b.DISABLED_BUILD_SCRIPTS,
									o.structUtils.prettyLocator(
										this.opts.project.configuration,
										n
									) +
										' lists build scripts, but all build scripts have been disabled.'
								),
								(l.length = 0)),
								l.length > 0 &&
									r.linkType !== M.U.HARD &&
									!this.opts.project.tryWorkspaceByLocator(n) &&
									(this.opts.report.reportWarningOnce(
										k.b.SOFT_LINK_BUILD,
										o.structUtils.prettyLocator(
											this.opts.project.configuration,
											n
										) +
											" lists build scripts, but is referenced through a soft link. Soft links don't support build scripts, so they'll be ignored."
									),
									(l.length = 0));
							const u = this.opts.project.getDependencyMeta(n, g.version);
							l.length > 0 &&
								u &&
								!1 === u.built &&
								(this.opts.report.reportInfoOnce(
									k.b.BUILD_DISABLED,
									o.structUtils.prettyLocator(
										this.opts.project.configuration,
										n
									) +
										' lists build scripts, but its build has been explicitly disabled through configuration.'
								),
								(l.length = 0)),
								l.length > 0 &&
									c.push({
										buildLocations: r.locations,
										locatorHash: n.locatorHash,
										buildDirective: l,
									});
						}
						return c;
					}
					async cachedManifestLoad(e, t, r, n) {
						let i = this.manifestCache.get(r);
						if (i) return i;
						try {
							i = await F.G.find(n);
						} catch (n) {
							const s = A.cS.toPortablePath(
								e.getPackageInformation(o.structUtils.parseLocator(r))
									.packageLocation
							);
							try {
								i = await F.G.find(s, { baseFs: t });
							} catch (e) {
								throw ((e.message = `While loading ${s}: ${e.message}`), e);
							}
						}
						return this.manifestCache.set(r, i), i;
					}
					async getSourceBuildScripts(e, t) {
						const r = [],
							{ scripts: n } = t;
						for (const e of ['preinstall', 'install', 'postinstall'])
							n.has(e) && r.push([N.k.SCRIPT, e]);
						const i = A.y1.resolve(e, 'binding.gyp');
						return (
							!n.has('install') &&
								x.xfs.existsSync(i) &&
								r.push([N.k.SHELLCODE, 'node-gyp rebuild']),
							r
						);
					}
				}
				async function z(e, { unrollAliases: t = !1 } = {}) {
					const r = e.cwd,
						n = A.y1.join(r, _, '.yarn-state.yml');
					if (!x.xfs.existsSync(n)) return null;
					const i = (0, U.parseSyml)(await x.xfs.readFilePromise(n, 'utf8'));
					if (i.__metadata.version > 1) return null;
					const s = new Map(),
						a = new Map();
					delete i.__metadata;
					for (const [e, n] of Object.entries(i)) {
						const i = n.locations.map((e) => A.y1.join(r, e)),
							c = n.bin;
						if (c)
							for (const [e, t] of Object.entries(c)) {
								const n = A.y1.join(r, A.cS.toPortablePath(e)),
									i = o.miscUtils.getMapWithDefault(a, n);
								for (const [e, r] of Object.entries(t))
									i.set(
										(0, A.Zu)(e),
										A.cS.toPortablePath([n, _, r].join(A.y1.delimiter))
									);
							}
						if (
							(s.set(e, {
								target: A.LZ.dot,
								linkType: M.U.HARD,
								locations: i,
								aliases: n.aliases || [],
							}),
							t && n.aliases)
						)
							for (const t of n.aliases) {
								const { scope: r, name: n } = o.structUtils.parseLocator(e),
									a = o.structUtils.makeLocator(
										o.structUtils.makeIdent(r, n),
										t
									),
									c = o.structUtils.stringifyLocator(a);
								s.set(c, {
									target: A.LZ.dot,
									linkType: M.U.HARD,
									locations: i,
									aliases: [],
								});
							}
					}
					return {
						locatorMap: s,
						binSymlinks: a,
						locationTree: X(s, { skipPrefix: e.cwd }),
					};
				}
				const W = async (e, t) => {
						if (e.split(A.y1.sep).indexOf(_) < 0)
							throw new Error(
								"Assertion failed: trying to remove dir that doesn't contain node_modules: " +
									e
							);
						try {
							if (!t.innerLoop) {
								if ((await x.xfs.lstatPromise(e)).isSymbolicLink())
									return void (await x.xfs.unlinkPromise(e));
							}
							const r = await x.xfs.readdirPromise(e, { withFileTypes: !0 });
							for (const n of r) {
								const r = A.y1.join(e, (0, A.Zu)(n.name));
								n.isDirectory()
									? (n.name !== _ || (t && t.innerLoop)) &&
									  (await W(r, { innerLoop: !0, contentsOnly: !1 }))
									: await x.xfs.unlinkPromise(r);
							}
							t.contentsOnly || (await x.xfs.rmdirPromise(e));
						} catch (e) {
							if ('ENOENT' !== e.code && 'ENOTEMPTY' !== e.code) throw e;
						}
					},
					V = (e, { skipPrefix: t }) => {
						const r = A.y1.contains(t, e);
						if (null === r)
							throw new Error(
								`Assertion failed: Cannot process a path that isn't part of the requested prefix (${e} isn't within ${t})`
							);
						const n = r.split(A.y1.sep).filter((e) => '' !== e),
							i = n.indexOf(_),
							o = n.slice(0, i).join(A.y1.sep);
						return { locationRoot: A.y1.join(t, o), segments: n.slice(i) };
					},
					X = (e, { skipPrefix: t }) => {
						const r = new Map();
						if (null === e) return r;
						const n = () => ({ children: new Map(), linkType: M.U.HARD });
						for (const [i, s] of e.entries()) {
							if (s.linkType === M.U.SOFT) {
								if (null !== A.y1.contains(t, s.target)) {
									const e = o.miscUtils.getFactoryWithDefault(r, s.target, n);
									(e.locator = i), (e.linkType = s.linkType);
								}
							}
							for (const e of s.locations) {
								const { locationRoot: A, segments: a } = V(e, {
									skipPrefix: t,
								});
								let c = o.miscUtils.getFactoryWithDefault(r, A, n);
								for (let e = 0; e < a.length; ++e) {
									const t = a[e];
									if ('.' !== t) {
										const e = o.miscUtils.getFactoryWithDefault(
											c.children,
											t,
											n
										);
										c.children.set(t, e), (c = e);
									}
									e === a.length - 1 &&
										((c.locator = i), (c.linkType = s.linkType));
								}
							}
						}
						return r;
					},
					Z = async (e, t) => {
						let r;
						try {
							'win32' === process.platform && (r = x.xfs.lstatSync(e));
						} catch (e) {}
						'win32' != process.platform || (r && !r.isDirectory())
							? x.xfs.symlinkPromise(A.y1.relative(A.y1.dirname(t), e), t)
							: x.xfs.symlinkPromise(e, t, 'junction');
					},
					$ = async (e, t, { baseFs: r, innerLoop: n }) => {
						await x.xfs.mkdirPromise(e, { recursive: !0 });
						const i = await r.readdirPromise(t, { withFileTypes: !0 }),
							o = async (e, t, n) => {
								if (n.isFile()) {
									const n = await r.lstatPromise(t);
									await r.copyFilePromise(t, e);
									const i = 511 & n.mode;
									420 !== i && (await x.xfs.chmodPromise(e, i));
								} else {
									if (!n.isSymbolicLink())
										throw new Error(
											`Unsupported file type (file: ${t}, mode: 0o${await x.xfs
												.statSync(t)
												.mode.toString(8)
												.padStart(6, '0')})`
										);
									{
										const n = await r.readlinkPromise(t);
										await Z(A.y1.resolve(A.y1.dirname(e), n), e);
									}
								}
							};
						for (const s of i) {
							const i = A.y1.join(t, (0, A.Zu)(s.name)),
								a = A.y1.join(e, (0, A.Zu)(s.name));
							s.isDirectory()
								? (s.name !== _ || n) &&
								  (await $(a, i, { baseFs: r, innerLoop: !0 }))
								: await o(a, i, s);
						}
					};
				function ee(e) {
					let t = o.structUtils.parseDescriptor(e);
					return (
						o.structUtils.isVirtualDescriptor(t) &&
							(t = o.structUtils.devirtualizeDescriptor(t)),
						t.range.startsWith('link:')
					);
				}
				const te = (e, t) => {
					if (!e || !t) return e === t;
					let r = o.structUtils.parseLocator(e);
					o.structUtils.isVirtualLocator(r) &&
						(r = o.structUtils.devirtualizeLocator(r));
					let n = o.structUtils.parseLocator(t);
					return (
						o.structUtils.isVirtualLocator(n) &&
							(n = o.structUtils.devirtualizeLocator(n)),
						o.structUtils.areLocatorsEqual(r, n)
					);
				};
				class re extends T.PnpLinker {
					constructor() {
						super(...arguments), (this.mode = 'loose');
					}
					makeInstaller(e) {
						return new ne(e);
					}
				}
				class ne extends T.PnpInstaller {
					constructor() {
						super(...arguments), (this.mode = 'loose');
					}
					async finalizeInstallWithPnp(e) {
						if (this.opts.project.configuration.get('pnpMode') !== this.mode)
							return;
						const t = new K.p({
								baseFs: new L.A({
									libzip: await (0, P.getLibzipPromise)(),
									maxOpenFiles: 80,
									readOnlyArchives: !0,
								}),
							}),
							r = (0, O.oC)(e, this.opts.project.cwd, t),
							n = v(r, { pnpifyFs: !1, project: this.opts.project }),
							i = new Map();
						e.fallbackPool = i;
						const s = (e, t) => {
								const r = o.structUtils.parseLocator(t.locator),
									n = o.structUtils.stringifyIdent(r);
								n === e ? i.set(e, r.reference) : i.set(e, [n, r.reference]);
							},
							a = A.y1.join(this.opts.project.cwd, A.QS.nodeModules),
							c = n.get(a);
						if (void 0 === c)
							throw new Error(
								'Assertion failed: Expected a root junction point'
							);
						if ('target' in c)
							throw new Error(
								'Assertion failed: Expected the root junction point to be a directory'
							);
						for (const e of c.dirList) {
							const t = A.y1.join(a, e),
								r = n.get(t);
							if (void 0 === r)
								throw new Error(
									'Assertion failed: Expected the child to have been registered'
								);
							if ('target' in r) s(e, r);
							else
								for (const i of r.dirList) {
									const r = A.y1.join(t, i),
										o = n.get(r);
									if (void 0 === o)
										throw new Error(
											'Assertion failed: Expected the subchild to have been registered'
										);
									if (!('target' in o))
										throw new Error(
											'Assertion failed: Expected the leaf junction to be a package'
										);
									s(`${e}/${i}`, o);
								}
						}
						return super.finalizeInstallWithPnp(e);
					}
				}
				const ie = (e) => A.y1.join(e.cwd, '.pnp.js'),
					Ae = {
						configuration: {
							nmHoistingLimits: {
								description:
									'Prevent packages can be hoisted past specific levels',
								type: i.a2.STRING,
								values: [Q.WORKSPACES, Q.DEPENDENCIES, Q.NONE],
								default: 'none',
							},
						},
						linkers: [
							class {
								supportsPackage(e, t) {
									return (
										'node-modules' === t.project.configuration.get('nodeLinker')
									);
								}
								async findPackageLocation(e, t) {
									const r = t.project.tryWorkspaceByLocator(e);
									if (r) return r.cwd;
									const n = await z(t.project, { unrollAliases: !0 });
									if (null === n)
										throw new G.UsageError(
											"Couldn't find the node_modules state file - running an install might help (findPackageLocation)"
										);
									const i = n.locatorMap.get(o.structUtils.stringifyLocator(e));
									if (!i)
										throw new G.UsageError(
											`Couldn't find ${o.structUtils.prettyLocator(
												t.project.configuration,
												e
											)} in the currently installed node_modules map - running an install might help`
										);
									return i.locations[0];
								}
								async findPackageLocator(e, t) {
									const r = await z(t.project, { unrollAliases: !0 });
									if (null === r) return null;
									const { locationRoot: n, segments: i } = V(A.y1.resolve(e), {
										skipPrefix: t.project.cwd,
									});
									let s = r.locationTree.get(n);
									if (!s) return null;
									let a = s.locator;
									for (const e of i) {
										if (((s = s.children.get(e)), !s)) break;
										a = s.locator || a;
									}
									return o.structUtils.parseLocator(a);
								}
								makeInstaller(e) {
									return new q({ ...e, skipIncompatiblePackageLinking: !0 });
								}
							},
							re,
						],
					};
			},
			33671: (e, t, r) => {
				'use strict';
				r.r(t), r.d(t, { default: () => T });
				var n = r(27122),
					i = r(36370),
					A = r(95397),
					o = r(40376),
					s = r(32741),
					a = r(35691),
					c = r(15815),
					g = r(92659),
					l = r(86717),
					u = r(40822),
					h = r(85622),
					p = r.n(h),
					f = r(53887),
					d = r.n(f),
					C = r(31669);
				class I extends A.BaseCommand {
					constructor() {
						super(...arguments), (this.json = !1);
					}
					async execute() {
						const e = await n.VK.find(this.context.cwd, this.context.plugins),
							{ project: t } = await o.I.find(e, this.context.cwd),
							r =
								void 0 !== this.fields
									? new Set(['name', ...this.fields.split(/\s*,\s*/)])
									: null,
							i = [];
						let A = !1;
						const h = await c.Pk.start(
							{
								configuration: e,
								includeFooter: !1,
								json: this.json,
								stdout: this.context.stdout,
							},
							async (n) => {
								for (const o of this.packages) {
									let c;
									if ('.' === o) {
										const e = t.topLevelWorkspace;
										if (!e.manifest.name)
											throw new u.UsageError(
												"Missing 'name' field in " +
													p().join(e.cwd, 'package.json')
											);
										c = s.structUtils.makeDescriptor(
											e.manifest.name,
											'unknown'
										);
									} else c = s.structUtils.parseDescriptor(o);
									const h = l.npmHttpUtils.getIdentUrl(c);
									let f;
									try {
										f = E(
											await l.npmHttpUtils.get(h, {
												configuration: e,
												ident: c,
												jsonResponse: !0,
											})
										);
									} catch (e) {
										throw 'HTTPError' !== e.name
											? e
											: 404 === e.response.statusCode
											? new a.lk(g.b.EXCEPTION, 'Package not found')
											: new a.lk(g.b.EXCEPTION, e.toString());
									}
									const C = Object.keys(f.versions).sort(d().compareLoose);
									let I = f['dist-tags'].latest || C[C.length - 1];
									if (d().validRange(c.range)) {
										const t = d().maxSatisfying(C, c.range);
										null !== t
											? (I = t)
											: (n.reportWarning(
													g.b.UNNAMED,
													`Unmet range ${s.structUtils.prettyRange(
														e,
														c.range
													)}; falling back to the latest version`
											  ),
											  (A = !0));
									} else
										'unknown' !== c.range &&
											(n.reportWarning(
												g.b.UNNAMED,
												`Invalid range ${s.structUtils.prettyRange(
													e,
													c.range
												)}; falling back to the latest version`
											),
											(A = !0));
									const m = f.versions[I],
										B = { ...f, ...m, version: I, versions: C };
									let y;
									if (null !== r) {
										y = {};
										for (const t of r) {
											const r = B[t];
											void 0 !== r
												? (y[t] = r)
												: (n.reportWarning(
														g.b.EXCEPTION,
														`The '${t}' field doesn't exist inside ${s.structUtils.prettyIdent(
															e,
															c
														)}'s informations`
												  ),
												  (A = !0));
										}
									} else
										this.json ||
											(delete B.dist, delete B.readme, delete B.users),
											(y = B);
									n.reportJson(y), this.json || i.push(y);
								}
							}
						);
						C.inspect.styles.name = 'cyan';
						for (const e of i)
							(e !== i[0] || A) && this.context.stdout.write('\n'),
								this.context.stdout.write(
									(0, C.inspect)(e, { depth: 1 / 0, colors: !0, compact: !1 }) +
										'\n'
								);
						return h.exitCode();
					}
				}
				function E(e) {
					if (Array.isArray(e)) {
						const t = [];
						for (let r of e) (r = E(r)), r && t.push(r);
						return t;
					}
					if ('object' == typeof e && null !== e) {
						const t = {};
						for (const r of Object.keys(e)) {
							if (r.startsWith('_')) continue;
							const n = E(e[r]);
							n && (t[r] = n);
						}
						return t;
					}
					return e || null;
				}
				(I.usage = u.Command.Usage({
					category: 'Npm-related commands',
					description: 'show information about a package',
					details:
						"\n      This command will fetch information about a package from the npm registry, and prints it in a tree format.\n\n      The package does not have to be installed locally, but needs to have been published (in particular, local changes will be ignored even for workspaces).\n\n      Append `@<range>` to the package argument to provide information specific to the latest version that satisfies the range. If the range is invalid or if there is no version satisfying the range, the command will print a warning and fall back to the latest version.\n\n      If the `-f,--fields` option is set, it's a comma-separated list of fields which will be used to only display part of the package informations.\n\n      By default, this command won't return the `dist`, `readme`, and `users` fields, since they are often very long. To explicitly request those fields, explicitly list them with the `--fields` flag or request the output in JSON mode.\n    ",
					examples: [
						[
							'Show all available information about react (except the `dist`, `readme`, and `users` fields)',
							'yarn npm info react',
						],
						[
							'Show all available information about react as valid JSON (including the `dist`, `readme`, and `users` fields)',
							'yarn npm info react --json',
						],
						[
							'Show all available information about react 16.12.0',
							'yarn npm info react@16.12.0',
						],
						[
							'Show the description of react',
							'yarn npm info react --fields description',
						],
						[
							'Show all available versions of react',
							'yarn npm info react --fields versions',
						],
						['Show the readme of react', 'yarn npm info react --fields readme'],
						[
							'Show a few fields of react',
							'yarn npm info react --fields homepage,repository',
						],
					],
				})),
					(0, i.gn)([u.Command.Rest()], I.prototype, 'packages', void 0),
					(0, i.gn)(
						[
							u.Command.String('-f,--fields', {
								description:
									'A comma-separated list of manifest fields that should be displayed',
							}),
						],
						I.prototype,
						'fields',
						void 0
					),
					(0, i.gn)(
						[
							u.Command.Boolean('--json', {
								description: 'Format the output as an NDJSON stream',
							}),
						],
						I.prototype,
						'json',
						void 0
					),
					(0, i.gn)(
						[u.Command.Path('npm', 'info')],
						I.prototype,
						'execute',
						null
					);
				var m = r(61899);
				class B extends A.BaseCommand {
					constructor() {
						super(...arguments), (this.publish = !1);
					}
					async execute() {
						const e = await n.VK.find(this.context.cwd, this.context.plugins),
							t = await y({
								configuration: e,
								cwd: this.context.cwd,
								publish: this.publish,
								scope: this.scope,
							});
						return (
							await c.Pk.start(
								{ configuration: e, stdout: this.context.stdout },
								async (r) => {
									const i = await (async function ({
											registry: e,
											report: t,
											stdin: r,
											stdout: n,
										}) {
											if (process.env.TEST_ENV)
												return {
													name: process.env.TEST_NPM_USER || '',
													password: process.env.TEST_NPM_PASSWORD || '',
												};
											t.reportInfo(g.b.UNNAMED, 'Logging in to ' + e);
											let i = !1;
											e.match(/^https:\/\/npm\.pkg\.github\.com(\/|$)/) &&
												(t.reportInfo(
													g.b.UNNAMED,
													"You seem to be using the GitHub Package Registry. Tokens must be generated with the 'repo', 'write:packages', and 'read:packages' permissions."
												),
												(i = !0));
											t.reportSeparator();
											const { username: A, password: o } = await (0, m.prompt)([
												{
													type: 'input',
													name: 'username',
													message: 'Username:',
													required: !0,
													onCancel: () => process.exit(130),
													stdin: r,
													stdout: n,
												},
												{
													type: 'password',
													name: 'password',
													message: i ? 'Token:' : 'Password:',
													required: !0,
													onCancel: () => process.exit(130),
													stdin: r,
													stdout: n,
												},
											]);
											return t.reportSeparator(), { name: A, password: o };
										})({
											registry: t,
											report: r,
											stdin: this.context.stdin,
											stdout: this.context.stdout,
										}),
										A =
											'/-/user/org.couchdb.user:' + encodeURIComponent(i.name),
										o = await l.npmHttpUtils.put(A, i, {
											attemptedAs: i.name,
											configuration: e,
											registry: t,
											jsonResponse: !0,
											authType: l.npmHttpUtils.AuthType.NO_AUTH,
										});
									return (
										await (async function (
											e,
											t,
											{ configuration: r, scope: i }
										) {
											const A = (e) => (r) => {
													const n = s.miscUtils.isIndexableObject(r) ? r : {},
														i = n[e],
														A = s.miscUtils.isIndexableObject(i) ? i : {};
													return { ...n, [e]: { ...A, npmAuthToken: t } };
												},
												o = i ? { npmScopes: A(i) } : { npmRegistries: A(e) };
											return await n.VK.updateHomeConfiguration(o);
										})(t, o.token, { configuration: e, scope: this.scope }),
										r.reportInfo(g.b.UNNAMED, 'Successfully logged in')
									);
								}
							)
						).exitCode();
					}
				}
				async function y({ scope: e, publish: t, configuration: r, cwd: n }) {
					return e && t
						? l.npmConfigUtils.getScopeRegistry(e, {
								configuration: r,
								type: l.npmConfigUtils.RegistryType.PUBLISH_REGISTRY,
						  })
						: e
						? l.npmConfigUtils.getScopeRegistry(e, { configuration: r })
						: t
						? l.npmConfigUtils.getPublishRegistry(
								(await (0, A.openWorkspace)(r, n)).manifest,
								{ configuration: r }
						  )
						: l.npmConfigUtils.getDefaultRegistry({ configuration: r });
				}
				(B.usage = u.Command.Usage({
					category: 'Npm-related commands',
					description: 'store new login info to access the npm registry',
					details:
						'\n      This command will ask you for your username, password, and 2FA One-Time-Password (when it applies). It will then modify your local configuration (in your home folder, never in the project itself) to reference the new tokens thus generated.\n\n      Adding the `-s,--scope` flag will cause the authentication to be done against whatever registry is configured for the associated scope (see also `npmScopes`).\n\n      Adding the `--publish` flag will cause the authentication to be done against the registry used when publishing the package (see also `publishConfig.registry` and `npmPublishRegistry`).\n    ',
					examples: [
						['Login to the default registry', 'yarn npm login'],
						[
							'Login to the registry linked to the @my-scope registry',
							'yarn npm login --scope my-scope',
						],
						[
							'Login to the publish registry for the current package',
							'yarn npm login --publish',
						],
					],
				})),
					(0, i.gn)(
						[
							u.Command.String('-s,--scope', {
								description:
									'Login to the registry configured for a given scope',
							}),
						],
						B.prototype,
						'scope',
						void 0
					),
					(0, i.gn)(
						[
							u.Command.Boolean('--publish', {
								description: 'Login to the publish registry',
							}),
						],
						B.prototype,
						'publish',
						void 0
					),
					(0, i.gn)(
						[u.Command.Path('npm', 'login')],
						B.prototype,
						'execute',
						null
					);
				const w = new Set(['npmAuthIdent', 'npmAuthToken']);
				class Q extends A.BaseCommand {
					constructor() {
						super(...arguments), (this.publish = !1), (this.all = !1);
					}
					async execute() {
						const e = await n.VK.find(this.context.cwd, this.context.plugins),
							t = async () => {
								var t;
								const r = await y({
										configuration: e,
										cwd: this.context.cwd,
										publish: this.publish,
										scope: this.scope,
									}),
									i = await n.VK.find(this.context.cwd, this.context.plugins),
									A = s.structUtils.makeIdent(
										null !== (t = this.scope) && void 0 !== t ? t : null,
										'pkg'
									);
								return !l.npmConfigUtils
									.getAuthConfiguration(r, { configuration: i, ident: A })
									.get('npmAuthToken');
							};
						return (
							await c.Pk.start(
								{ configuration: e, stdout: this.context.stdout },
								async (r) => {
									if (
										(this.all &&
											(await (async function () {
												const e = (e) => {
													let t = !1;
													const r = s.miscUtils.isIndexableObject(e)
														? { ...e }
														: {};
													r.npmAuthToken && (delete r.npmAuthToken, (t = !0));
													for (const e of Object.keys(r)) v(r, e) && (t = !0);
													if (0 !== Object.keys(r).length) return t ? r : e;
												};
												return await n.VK.updateHomeConfiguration({
													npmRegistries: e,
													npmScopes: e,
												});
											})(),
											r.reportInfo(
												g.b.UNNAMED,
												'Successfully logged out from everything'
											)),
										this.scope)
									)
										return (
											await b('npmScopes', this.scope),
											void ((await t())
												? r.reportInfo(
														g.b.UNNAMED,
														'Successfully logged out from ' + this.scope
												  )
												: r.reportWarning(
														g.b.UNNAMED,
														'Scope authentication settings removed, but some other ones settings still apply to it'
												  ))
										);
									const i = await y({
										configuration: e,
										cwd: this.context.cwd,
										publish: this.publish,
									});
									await b('npmRegistries', i),
										(await t())
											? r.reportInfo(
													g.b.UNNAMED,
													'Successfully logged out from ' + i
											  )
											: r.reportWarning(
													g.b.UNNAMED,
													'Registry authentication settings removed, but some other ones settings still apply to it'
											  );
								}
							)
						).exitCode();
					}
				}
				function v(e, t) {
					const r = e[t];
					if (!s.miscUtils.isIndexableObject(r)) return !1;
					const n = new Set(Object.keys(r));
					if ([...w].every((e) => !n.has(e))) return !1;
					for (const e of w) n.delete(e);
					if (0 === n.size) return (e[t] = void 0), !0;
					const i = { ...r };
					for (const e of w) delete i[e];
					return (e[t] = i), !0;
				}
				async function b(e, t) {
					return await n.VK.updateHomeConfiguration({
						[e]: (e) => {
							const r = s.miscUtils.isIndexableObject(e) ? e : {};
							if (!Object.prototype.hasOwnProperty.call(r, t)) return e;
							const n = r[t],
								i = s.miscUtils.isIndexableObject(n) ? n : {},
								A = new Set(Object.keys(i));
							if ([...w].every((e) => !A.has(e))) return e;
							for (const e of w) A.delete(e);
							if (0 === A.size) {
								if (1 === Object.keys(r).length) return;
								return { ...r, [t]: void 0 };
							}
							const o = {};
							for (const e of w) o[e] = void 0;
							return { ...r, [t]: { ...i, ...o } };
						},
					});
				}
				(Q.usage = u.Command.Usage({
					category: 'Npm-related commands',
					description: 'logout of the npm registry',
					details:
						'\n      This command will log you out by modifying your local configuration (in your home folder, never in the project itself) to delete all credentials linked to a registry.\n\n      Adding the `-s,--scope` flag will cause the deletion to be done against whatever registry is configured for the associated scope (see also `npmScopes`).\n\n      Adding the `--publish` flag will cause the deletion to be done against the registry used when publishing the package (see also `publishConfig.registry` and `npmPublishRegistry`).\n\n      Adding the `-A,--all` flag will cause the deletion to be done against all registries and scopes.\n    ',
					examples: [
						['Logout of the default registry', 'yarn npm logout'],
						[
							'Logout of the @my-scope scope',
							'yarn npm logout --scope my-scope',
						],
						[
							'Logout of the publish registry for the current package',
							'yarn npm logout --publish',
						],
						['Logout of all registries', 'yarn npm logout --all'],
					],
				})),
					(0, i.gn)(
						[
							u.Command.String('-s,--scope', {
								description:
									'Logout of the registry configured for a given scope',
							}),
						],
						Q.prototype,
						'scope',
						void 0
					),
					(0, i.gn)(
						[
							u.Command.Boolean('--publish', {
								description: 'Logout of the publish registry',
							}),
						],
						Q.prototype,
						'publish',
						void 0
					),
					(0, i.gn)(
						[
							u.Command.Boolean('-A,--all', {
								description: 'Logout of all registries',
							}),
						],
						Q.prototype,
						'all',
						void 0
					),
					(0, i.gn)(
						[u.Command.Path('npm', 'logout')],
						Q.prototype,
						'execute',
						null
					);
				var D = r(5973),
					S = r(76417),
					k = r(10129),
					M = r(78835);
				class N extends A.BaseCommand {
					constructor() {
						super(...arguments),
							(this.tag = 'latest'),
							(this.tolerateRepublish = !1);
					}
					async execute() {
						const e = await n.VK.find(this.context.cwd, this.context.plugins),
							{ project: t, workspace: r } = await o.I.find(
								e,
								this.context.cwd
							);
						if (!r) throw new A.WorkspaceRequiredError(t.cwd, this.context.cwd);
						if (r.manifest.private)
							throw new u.UsageError('Private workspaces cannot be published');
						if (null === r.manifest.name || null === r.manifest.version)
							throw new u.UsageError(
								'Workspaces must have valid names and versions to be published on an external registry'
							);
						await t.restoreInstallState();
						const i = r.manifest.name,
							h = r.manifest.version,
							p = l.npmConfigUtils.getPublishRegistry(r.manifest, {
								configuration: e,
							});
						return (
							await c.Pk.start(
								{ configuration: e, stdout: this.context.stdout },
								async (t) => {
									if (this.tolerateRepublish)
										try {
											const r = await l.npmHttpUtils.get(
												l.npmHttpUtils.getIdentUrl(i),
												{
													configuration: e,
													registry: p,
													ident: i,
													jsonResponse: !0,
												}
											);
											if (!Object.prototype.hasOwnProperty.call(r, 'versions'))
												throw new a.lk(
													g.b.REMOTE_INVALID,
													'Registry returned invalid data for - missing "versions" field'
												);
											if (Object.prototype.hasOwnProperty.call(r.versions, h))
												return void t.reportWarning(
													g.b.UNNAMED,
													`Registry already knows about version ${h}; skipping.`
												);
										} catch (e) {
											if ('HTTPError' !== e.name) throw e;
											if (404 !== e.response.statusCode)
												throw new a.lk(
													g.b.NETWORK_ERROR,
													`The remote server answered with HTTP ${e.response.statusCode} ${e.response.statusMessage}`
												);
										}
									await s.scriptUtils.maybeExecuteWorkspaceLifecycleScript(
										r,
										'prepublish',
										{ report: t }
									),
										await D.packUtils.prepareForPack(
											r,
											{ report: t },
											async () => {
												const n = await D.packUtils.genPackList(r);
												for (const e of n) t.reportInfo(null, e);
												const A = await D.packUtils.genPackStream(r, n),
													o = await s.miscUtils.bufferStream(A),
													a = await (async function (
														e,
														t,
														{ access: r, tag: n, registry: i }
													) {
														const A = e.project.configuration,
															o = e.manifest.name,
															a = e.manifest.version,
															c = s.structUtils.stringifyIdent(o),
															g = (0, S.createHash)('sha1')
																.update(t)
																.digest('hex'),
															l = k.Sd(t).toString();
														void 0 === r &&
															(r =
																e.manifest.publishConfig &&
																'string' ==
																	typeof e.manifest.publishConfig.access
																	? e.manifest.publishConfig.access
																	: null !== A.get('npmPublishAccess')
																	? A.get('npmPublishAccess')
																	: o.scope
																	? 'restricted'
																	: 'public');
														const u = await D.packUtils.genPackageManifest(e),
															h = `${c}-${a}.tgz`,
															p = new M.URL(`${c}/-/${h}`, i);
														return {
															_id: c,
															_attachments: {
																[h]: {
																	content_type: 'application/octet-stream',
																	data: t.toString('base64'),
																	length: t.length,
																},
															},
															name: c,
															access: r,
															'dist-tags': { [n]: a },
															versions: {
																[a]: {
																	...u,
																	_id: `${c}@${a}`,
																	name: c,
																	version: a,
																	dist: {
																		shasum: g,
																		integrity: l,
																		tarball: p.toString(),
																	},
																},
															},
														};
													})(r, o, {
														access: this.access,
														tag: this.tag,
														registry: p,
													});
												try {
													await l.npmHttpUtils.put(
														l.npmHttpUtils.getIdentUrl(i),
														a,
														{
															configuration: e,
															registry: p,
															ident: i,
															jsonResponse: !0,
														}
													);
												} catch (e) {
													if ('HTTPError' !== e.name) throw e;
													{
														const r =
															e.response.body && e.response.body.error
																? e.response.body.error
																: `The remote server answered with HTTP ${e.response.statusCode} ${e.response.statusMessage}`;
														t.reportError(g.b.NETWORK_ERROR, r);
													}
												}
											}
										),
										t.hasErrors() ||
											t.reportInfo(g.b.UNNAMED, 'Package archive published');
								}
							)
						).exitCode();
					}
				}
				(N.usage = u.Command.Usage({
					category: 'Npm-related commands',
					description: 'publish the active workspace to the npm registry',
					details:
						'\n      This command will pack the active workspace into a fresh archive and upload it to the npm registry.\n\n      The package will by default be attached to the `latest` tag on the registry, but this behavior can be overriden by using the `--tag` option.\n\n      Note that for legacy reasons scoped packages are by default published with an access set to `restricted` (aka "private packages"). This requires you to register for a paid npm plan. In case you simply wish to publish a public scoped package to the registry (for free), just add the `--access public` flag. This behavior can be enabled by default through the `npmPublishAccess` settings.\n    ',
					examples: [['Publish the active workspace', 'yarn npm publish']],
				})),
					(0, i.gn)(
						[
							u.Command.String('--access', {
								description:
									'The access for the published package (public or restricted)',
							}),
						],
						N.prototype,
						'access',
						void 0
					),
					(0, i.gn)(
						[
							u.Command.String('--tag', {
								description:
									'The tag on the registry that the package should be attached to',
							}),
						],
						N.prototype,
						'tag',
						void 0
					),
					(0, i.gn)(
						[
							u.Command.Boolean('--tolerate-republish', {
								description:
									'Warn and exit when republishing an already existing version of a package',
							}),
						],
						N.prototype,
						'tolerateRepublish',
						void 0
					),
					(0, i.gn)(
						[u.Command.Path('npm', 'publish')],
						N.prototype,
						'execute',
						null
					);
				var F = r(46009);
				class R extends A.BaseCommand {
					constructor() {
						super(...arguments), (this.json = !1);
					}
					async execute() {
						const e = await n.VK.find(this.context.cwd, this.context.plugins),
							{ project: t, workspace: r } = await o.I.find(
								e,
								this.context.cwd
							);
						let i;
						if (void 0 !== this.package)
							i = s.structUtils.parseIdent(this.package);
						else {
							if (!r)
								throw new A.WorkspaceRequiredError(t.cwd, this.context.cwd);
							if (!r.manifest.name)
								throw new u.UsageError(
									"Missing 'name' field in " + F.y1.join(r.cwd, F.QS.manifest)
								);
							i = r.manifest.name;
						}
						const a = await K(i, e),
							c = {
								children: s.miscUtils
									.sortMap(Object.entries(a), ([e]) => e)
									.map(([e, t]) => ({
										value: s.formatUtils.tuple(s.formatUtils.Type.RESOLUTION, {
											descriptor: s.structUtils.makeDescriptor(i, e),
											locator: s.structUtils.makeLocator(i, t),
										}),
									})),
							};
						return s.treeUtils.emitTree(c, {
							configuration: e,
							json: this.json,
							stdout: this.context.stdout,
						});
					}
				}
				async function K(e, t) {
					const r = `/-/package${l.npmHttpUtils.getIdentUrl(e)}/dist-tags`;
					return l.npmHttpUtils
						.get(r, { configuration: t, ident: e, jsonResponse: !0 })
						.catch((e) => {
							throw 'HTTPError' !== e.name
								? e
								: 404 === e.response.statusCode
								? new a.lk(g.b.EXCEPTION, 'Package not found')
								: new a.lk(g.b.EXCEPTION, e.toString());
						});
				}
				(R.usage = u.Command.Usage({
					category: 'Npm-related commands',
					description: 'list all dist-tags of a package',
					details:
						'\n      This command will list all tags of a package from the npm registry.\n\n      If the package is not specified, Yarn will default to the current workspace.\n    ',
					examples: [
						['List all tags of package `my-pkg`', 'yarn npm tag list my-pkg'],
					],
				})),
					(0, i.gn)(
						[u.Command.String({ required: !1 })],
						R.prototype,
						'package',
						void 0
					),
					(0, i.gn)(
						[
							u.Command.Boolean('--json', {
								description: 'Format the output as an NDJSON stream',
							}),
						],
						R.prototype,
						'json',
						void 0
					),
					(0, i.gn)(
						[u.Command.Path('npm', 'tag', 'list')],
						R.prototype,
						'execute',
						null
					);
				class L extends A.BaseCommand {
					async execute() {
						const e = await n.VK.find(this.context.cwd, this.context.plugins),
							{ project: t, workspace: r } = await o.I.find(
								e,
								this.context.cwd
							);
						if (!r) throw new A.WorkspaceRequiredError(t.cwd, this.context.cwd);
						const i = s.structUtils.parseDescriptor(this.package, !0),
							a = i.range;
						if (!d().valid(a))
							throw new u.UsageError(
								`The range ${s.formatUtils.pretty(
									e,
									i.range,
									s.formatUtils.Type.RANGE
								)} must be a valid semver version`
							);
						const h = l.npmConfigUtils.getPublishRegistry(r.manifest, {
								configuration: e,
							}),
							p = s.formatUtils.pretty(e, i, s.formatUtils.Type.IDENT),
							f = s.formatUtils.pretty(e, a, s.formatUtils.Type.RANGE),
							C = s.formatUtils.pretty(e, this.tag, s.formatUtils.Type.CODE);
						return (
							await c.Pk.start(
								{ configuration: e, stdout: this.context.stdout },
								async (t) => {
									const r = await K(i, e);
									Object.prototype.hasOwnProperty.call(r, this.tag) &&
										r[this.tag] === a &&
										t.reportWarning(
											g.b.UNNAMED,
											`Tag ${C} is already set to version ${f}`
										);
									try {
										const t = `/-/package${l.npmHttpUtils.getIdentUrl(
											i
										)}/dist-tags/${encodeURIComponent(this.tag)}`;
										await l.npmHttpUtils.put(t, a, {
											configuration: e,
											registry: h,
											ident: i,
											jsonRequest: !0,
											jsonResponse: !0,
										});
									} catch (e) {
										if ('HTTPError' !== e.name) throw e;
										{
											const r =
												e.response.body && e.response.body.error
													? e.response.body.error
													: `The remote server answered with HTTP ${e.response.statusCode} ${e.response.statusMessage}`;
											t.reportError(g.b.NETWORK_ERROR, r);
										}
									}
									t.hasErrors() ||
										t.reportInfo(
											g.b.UNNAMED,
											`Tag ${C} added to version ${f} of package ${p}`
										);
								}
							)
						).exitCode();
					}
				}
				(L.usage = u.Command.Usage({
					category: 'Npm-related commands',
					description: 'add a tag for a specific version of a package',
					details:
						'\n      This command will add a tag to the npm registry for a specific version of a package. If the tag already exists, it will be overwritten.\n    ',
					examples: [
						[
							'Add a `beta` tag for version `2.3.4-beta.4` of package `my-pkg`',
							'yarn npm tag add my-pkg@2.3.4-beta.4 beta',
						],
					],
				})),
					(0, i.gn)([u.Command.String()], L.prototype, 'package', void 0),
					(0, i.gn)([u.Command.String()], L.prototype, 'tag', void 0),
					(0, i.gn)(
						[u.Command.Path('npm', 'tag', 'add')],
						L.prototype,
						'execute',
						null
					);
				var x = r(15966);
				class P extends A.BaseCommand {
					async execute() {
						const e = await n.VK.find(this.context.cwd, this.context.plugins),
							{ project: t, workspace: r } = await o.I.find(
								e,
								this.context.cwd
							);
						if (!r) throw new A.WorkspaceRequiredError(t.cwd, this.context.cwd);
						const i = s.structUtils.parseIdent(this.package),
							a = l.npmConfigUtils.getPublishRegistry(r.manifest, {
								configuration: e,
							}),
							h = s.formatUtils.pretty(e, this.tag, s.formatUtils.Type.CODE),
							p = s.formatUtils.pretty(e, i, s.formatUtils.Type.IDENT),
							f = await K(i, e);
						if (!Object.prototype.hasOwnProperty.call(f, this.tag))
							throw new u.UsageError(`${h} is not a tag of package ${p}`);
						return (
							await c.Pk.start(
								{ configuration: e, stdout: this.context.stdout },
								async (t) => {
									try {
										const t = `/-/package${l.npmHttpUtils.getIdentUrl(
											i
										)}/dist-tags/${encodeURIComponent(this.tag)}`;
										await l.npmHttpUtils.del(t, {
											configuration: e,
											registry: a,
											ident: i,
											jsonResponse: !0,
										});
									} catch (e) {
										if ('HTTPError' !== e.name) throw e;
										{
											const r =
												e.response.body && e.response.body.error
													? e.response.body.error
													: `The remote server answered with HTTP ${e.response.statusCode} ${e.response.statusMessage}`;
											t.reportError(g.b.NETWORK_ERROR, r);
										}
									}
									t.hasErrors() ||
										t.reportInfo(
											g.b.UNNAMED,
											`Tag ${h} removed from package ${p}`
										);
								}
							)
						).exitCode();
					}
				}
				(P.schema = x.object().shape({ tag: x.string().notOneOf(['latest']) })),
					(P.usage = u.Command.Usage({
						category: 'Npm-related commands',
						description: 'remove a tag from a package',
						details:
							'\n      This command will remove a tag from a package from the npm registry.\n    ',
						examples: [
							[
								'Remove the `beta` tag from package `my-pkg`',
								'yarn npm tag remove my-pkg beta',
							],
						],
					})),
					(0, i.gn)([u.Command.String()], P.prototype, 'package', void 0),
					(0, i.gn)([u.Command.String()], P.prototype, 'tag', void 0),
					(0, i.gn)(
						[u.Command.Path('npm', 'tag', 'remove')],
						P.prototype,
						'execute',
						null
					);
				class U extends A.BaseCommand {
					constructor() {
						super(...arguments), (this.publish = !1);
					}
					async execute() {
						const e = await n.VK.find(this.context.cwd, this.context.plugins);
						let t;
						t =
							this.scope && this.publish
								? l.npmConfigUtils.getScopeRegistry(this.scope, {
										configuration: e,
										type: l.npmConfigUtils.RegistryType.PUBLISH_REGISTRY,
								  })
								: this.scope
								? l.npmConfigUtils.getScopeRegistry(this.scope, {
										configuration: e,
								  })
								: this.publish
								? l.npmConfigUtils.getPublishRegistry(
										(await (0, A.openWorkspace)(e, this.context.cwd)).manifest,
										{ configuration: e }
								  )
								: l.npmConfigUtils.getDefaultRegistry({ configuration: e });
						return (
							await c.Pk.start(
								{ configuration: e, stdout: this.context.stdout },
								async (r) => {
									try {
										const n = await l.npmHttpUtils.get('/-/whoami', {
											configuration: e,
											registry: t,
											authType: l.npmHttpUtils.AuthType.ALWAYS_AUTH,
											jsonResponse: !0,
										});
										r.reportInfo(g.b.UNNAMED, n.username);
									} catch (e) {
										if ('HTTPError' !== e.name) throw e;
										401 === e.response.statusCode ||
										403 === e.response.statusCode
											? r.reportError(
													g.b.AUTHENTICATION_INVALID,
													'Authentication failed - your credentials may have expired'
											  )
											: r.reportError(g.b.AUTHENTICATION_INVALID, e.toString());
									}
								}
							)
						).exitCode();
					}
				}
				(U.usage = u.Command.Usage({
					category: 'Npm-related commands',
					description: 'display the name of the authenticated user',
					details:
						"\n      Print the username associated with the current authentication settings to the standard output.\n\n      When using `-s,--scope`, the username printed will be the one that matches the authentication settings of the registry associated with the given scope (those settings can be overriden using the `npmRegistries` map, and the registry associated with the scope is configured via the `npmScopes` map).\n\n      When using `--publish`, the registry we'll select will by default be the one used when publishing packages (`publishConfig.registry` or `npmPublishRegistry` if available, otherwise we'll fallback to the regular `npmRegistryServer`).\n    ",
					examples: [
						['Print username for the default registry', 'yarn npm whoami'],
						[
							'Print username for the registry on a given scope',
							'yarn npm whoami --scope company',
						],
					],
				})),
					(0, i.gn)(
						[
							u.Command.String('-s,--scope', {
								description:
									'Print username for the registry configured for a given scope',
							}),
						],
						U.prototype,
						'scope',
						void 0
					),
					(0, i.gn)(
						[
							u.Command.Boolean('--publish', {
								description: 'Print username for the publish registry',
							}),
						],
						U.prototype,
						'publish',
						void 0
					),
					(0, i.gn)(
						[u.Command.Path('npm', 'whoami')],
						U.prototype,
						'execute',
						null
					);
				const T = {
					configuration: {
						npmPublishAccess: {
							description: 'Default access of the published packages',
							type: n.a2.STRING,
							default: null,
						},
					},
					commands: [I, B, Q, N, L, R, P, U],
				};
			},
			86717: (e, t, r) => {
				'use strict';
				r.r(t),
					r.d(t, {
						npmConfigUtils: () => n,
						npmHttpUtils: () => i,
						default: () => T,
					});
				var n = {};
				r.r(n),
					r.d(n, {
						RegistryType: () => c,
						getAuthConfiguration: () => B,
						getDefaultRegistry: () => I,
						getPublishRegistry: () => d,
						getRegistryConfiguration: () => E,
						getScopeConfiguration: () => m,
						getScopeRegistry: () => C,
						normalizeRegistry: () => f,
					});
				var i = {};
				r.r(i),
					r.d(i, {
						AuthType: () => g,
						del: () => b,
						get: () => Q,
						getIdentUrl: () => w,
						handleInvalidAuthenticationError: () => y,
						put: () => v,
					});
				var A = r(27122),
					o = r(32741),
					s = r(53887),
					a = r.n(s);
				var c,
					g,
					l = r(35691),
					u = r(92659),
					h = r(61899),
					p = r(78835);
				function f(e) {
					return e.replace(/\/$/, '');
				}
				function d(e, { configuration: t }) {
					return e.publishConfig && e.publishConfig.registry
						? f(e.publishConfig.registry)
						: e.name
						? C(e.name.scope, { configuration: t, type: c.PUBLISH_REGISTRY })
						: I({ configuration: t, type: c.PUBLISH_REGISTRY });
				}
				function C(e, { configuration: t, type: r = c.FETCH_REGISTRY }) {
					const n = m(e, { configuration: t });
					if (null === n) return I({ configuration: t, type: r });
					const i = n.get(r);
					return null === i ? I({ configuration: t, type: r }) : f(i);
				}
				function I({ configuration: e, type: t = c.FETCH_REGISTRY }) {
					const r = e.get(t);
					return f(null !== r ? r : e.get(c.FETCH_REGISTRY));
				}
				function E(e, { configuration: t }) {
					const r = t.get('npmRegistries'),
						n = r.get(e);
					if (void 0 !== n) return n;
					const i = r.get(e.replace(/^[a-z]+:/, ''));
					return void 0 !== i ? i : null;
				}
				function m(e, { configuration: t }) {
					if (null === e) return null;
					const r = t.get('npmScopes').get(e);
					return r || null;
				}
				function B(e, { configuration: t, ident: r }) {
					const n = r && m(r.scope, { configuration: t });
					if (
						(null == n ? void 0 : n.get('npmAuthIdent')) ||
						(null == n ? void 0 : n.get('npmAuthToken'))
					)
						return n;
					return E(e, { configuration: t }) || t;
				}
				async function y(
					e,
					{ attemptedAs: t, registry: r, headers: n, configuration: i }
				) {
					if ('HTTPError' === e.name && 401 === e.response.statusCode)
						throw new l.lk(
							u.b.AUTHENTICATION_INVALID,
							`Invalid authentication (${
								'string' != typeof t
									? 'as ' +
									  (await (async function (e, t, { configuration: r }) {
											var n;
											if (void 0 === t || void 0 === t.authorization)
												return 'an anonymous user';
											try {
												const i = await o.httpUtils.get(
													new p.URL(e + '/-/whoami').href,
													{ configuration: r, headers: t, jsonResponse: !0 }
												);
												return null !== (n = i.username) && void 0 !== n
													? n
													: 'an unknown user';
											} catch (e) {
												return 'an unknown user';
											}
									  })(r, n, { configuration: i }))
									: 'attempted as ' + t
							})`
						);
				}
				function w(e) {
					return e.scope ? `/@${e.scope}%2f${e.name}` : '/' + e.name;
				}
				async function Q(
					e,
					{
						configuration: t,
						headers: r,
						ident: n,
						authType: i,
						registry: A,
						...s
					}
				) {
					if (
						(n && void 0 === A && (A = C(n.scope, { configuration: t })),
						n && n.scope && void 0 === i && (i = g.BEST_EFFORT),
						'string' != typeof A)
					)
						throw new Error(
							'Assertion failed: The registry should be a string'
						);
					const a = D(A, { authType: i, configuration: t, ident: n });
					let c;
					a && (r = { ...r, authorization: a });
					try {
						c = new p.URL(e);
					} catch (t) {
						c = new p.URL(A + e);
					}
					try {
						return await o.httpUtils.get(c.href, {
							configuration: t,
							headers: r,
							...s,
						});
					} catch (e) {
						throw (
							(await y(e, { registry: A, configuration: t, headers: r }), e)
						);
					}
				}
				async function v(
					e,
					t,
					{
						attemptedAs: r,
						configuration: n,
						headers: i,
						ident: A,
						authType: s = g.ALWAYS_AUTH,
						registry: a,
						...c
					}
				) {
					if (
						(A && void 0 === a && (a = C(A.scope, { configuration: n })),
						'string' != typeof a)
					)
						throw new Error(
							'Assertion failed: The registry should be a string'
						);
					const l = D(a, { authType: s, configuration: n, ident: A });
					l && (i = { ...i, authorization: l });
					try {
						return await o.httpUtils.put(a + e, t, {
							configuration: n,
							headers: i,
							...c,
						});
					} catch (A) {
						if (!k(A))
							throw (
								(await y(A, {
									attemptedAs: r,
									registry: a,
									configuration: n,
									headers: i,
								}),
								A)
							);
						const s = await S(),
							g = { ...i, ...M(s) };
						try {
							return await o.httpUtils.put(`${a}${e}`, t, {
								configuration: n,
								headers: g,
								...c,
							});
						} catch (e) {
							throw (
								(await y(e, {
									attemptedAs: r,
									registry: a,
									configuration: n,
									headers: i,
								}),
								e)
							);
						}
					}
				}
				async function b(
					e,
					{
						attemptedAs: t,
						configuration: r,
						headers: n,
						ident: i,
						authType: A = g.ALWAYS_AUTH,
						registry: s,
						...a
					}
				) {
					if (
						(i && void 0 === s && (s = C(i.scope, { configuration: r })),
						'string' != typeof s)
					)
						throw new Error(
							'Assertion failed: The registry should be a string'
						);
					const c = D(s, { authType: A, configuration: r, ident: i });
					c && (n = { ...n, authorization: c });
					try {
						return await o.httpUtils.del(s + e, {
							configuration: r,
							headers: n,
							...a,
						});
					} catch (i) {
						if (!k(i))
							throw (
								(await y(i, {
									attemptedAs: t,
									registry: s,
									configuration: r,
									headers: n,
								}),
								i)
							);
						const A = await S(),
							c = { ...n, ...M(A) };
						try {
							return await o.httpUtils.del(`${s}${e}`, {
								configuration: r,
								headers: c,
								...a,
							});
						} catch (e) {
							throw (
								(await y(e, {
									attemptedAs: t,
									registry: s,
									configuration: r,
									headers: n,
								}),
								e)
							);
						}
					}
				}
				function D(
					e,
					{ authType: t = g.CONFIGURATION, configuration: r, ident: n }
				) {
					const i = B(e, { configuration: r, ident: n }),
						A = (function (e, t) {
							switch (t) {
								case g.CONFIGURATION:
									return e.get('npmAlwaysAuth');
								case g.BEST_EFFORT:
								case g.ALWAYS_AUTH:
									return !0;
								case g.NO_AUTH:
									return !1;
								default:
									throw new Error('Unreachable');
							}
						})(i, t);
					if (!A) return null;
					if (i.get('npmAuthToken')) return 'Bearer ' + i.get('npmAuthToken');
					if (i.get('npmAuthIdent')) return 'Basic ' + i.get('npmAuthIdent');
					if (A && t !== g.BEST_EFFORT)
						throw new l.lk(
							u.b.AUTHENTICATION_NOT_FOUND,
							'No authentication configured for request'
						);
					return null;
				}
				async function S() {
					if (process.env.TEST_ENV) return process.env.TEST_NPM_2FA_TOKEN || '';
					const { otp: e } = await (0, h.prompt)({
						type: 'password',
						name: 'otp',
						message: 'One-time password:',
						required: !0,
						onCancel: () => process.exit(130),
					});
					return e;
				}
				function k(e) {
					if ('HTTPError' !== e.name) return !1;
					try {
						return e.response.headers['www-authenticate']
							.split(/,\s*/)
							.map((e) => e.toLowerCase())
							.includes('otp');
					} catch (e) {
						return !1;
					}
				}
				function M(e) {
					return { 'npm-otp': e };
				}
				!(function (e) {
					(e.FETCH_REGISTRY = 'npmRegistryServer'),
						(e.PUBLISH_REGISTRY = 'npmPublishRegistry');
				})(c || (c = {})),
					(function (e) {
						(e[(e.NO_AUTH = 0)] = 'NO_AUTH'),
							(e[(e.BEST_EFFORT = 1)] = 'BEST_EFFORT'),
							(e[(e.CONFIGURATION = 2)] = 'CONFIGURATION'),
							(e[(e.ALWAYS_AUTH = 3)] = 'ALWAYS_AUTH');
					})(g || (g = {}));
				class N {
					supports(e, t) {
						if (!e.reference.startsWith('npm:')) return !1;
						const r = new p.URL(e.reference);
						return (
							!!a().valid(r.pathname) && !r.searchParams.has('__archiveUrl')
						);
					}
					getLocalPath(e, t) {
						return null;
					}
					async fetch(e, t) {
						const r = t.checksums.get(e.locatorHash) || null,
							[n, i, A] = await t.cache.fetchPackageFromCache(e, r, {
								onHit: () => t.report.reportCacheHit(e),
								onMiss: () =>
									t.report.reportCacheMiss(
										e,
										o.structUtils.prettyLocator(t.project.configuration, e) +
											" can't be found in the cache and will be fetched from the remote registry"
									),
								loader: () => this.fetchFromNetwork(e, t),
								skipIntegrityCheck: t.skipIntegrityCheck,
							});
						return {
							packageFs: n,
							releaseFs: i,
							prefixPath: o.structUtils.getIdentVendorPath(e),
							checksum: A,
						};
					}
					async fetchFromNetwork(e, t) {
						let r;
						try {
							r = await Q(N.getLocatorUrl(e), {
								configuration: t.project.configuration,
								ident: e,
							});
						} catch (n) {
							r = await Q(N.getLocatorUrl(e).replace(/%2f/g, '/'), {
								configuration: t.project.configuration,
								ident: e,
							});
						}
						return await o.tgzUtils.convertToZip(r, {
							compressionLevel: t.project.configuration.get('compressionLevel'),
							prefixPath: o.structUtils.getIdentVendorPath(e),
							stripComponents: 1,
						});
					}
					static isConventionalTarballUrl(e, t, { configuration: r }) {
						let n = C(e.scope, { configuration: r });
						const i = N.getLocatorUrl(e);
						return (
							(t = t.replace(
								/^https?:(\/\/(?:[^/]+\.)?npmjs.org(?:$|\/))/,
								'https:$1'
							)),
							(n = n.replace(
								/^https:\/\/registry\.npmjs\.org($|\/)/,
								'https://registry.yarnpkg.com$1'
							)),
							(t = t.replace(
								/^https:\/\/registry\.npmjs\.org($|\/)/,
								'https://registry.yarnpkg.com$1'
							)) ===
								n + i || t === n + i.replace(/%2f/g, '/')
						);
					}
					static getLocatorUrl(e) {
						const t = a().clean(e.reference.slice('npm:'.length));
						if (null === t)
							throw new l.lk(
								u.b.RESOLVER_NOT_FOUND,
								"The npm semver resolver got selected, but the version isn't semver"
							);
						return `${w(e)}/-/${e.name}-${t}.tgz`;
					}
				}
				var F = r(46611),
					R = r(32485);
				const K = o.structUtils.makeIdent(null, 'node-gyp'),
					L = /\b(node-gyp|prebuild-install)\b/;
				var x = r(52779);
				const P = {
						npmAlwaysAuth: {
							description:
								"URL of the selected npm registry (note: npm enterprise isn't supported)",
							type: A.a2.BOOLEAN,
							default: !1,
						},
						npmAuthIdent: {
							description:
								'Authentication identity for the npm registry (_auth in npm and yarn v1)',
							type: A.a2.SECRET,
							default: null,
						},
						npmAuthToken: {
							description:
								'Authentication token for the npm registry (_authToken in npm and yarn v1)',
							type: A.a2.SECRET,
							default: null,
						},
					},
					U = {
						npmPublishRegistry: {
							description: 'Registry to push packages to',
							type: A.a2.STRING,
							default: null,
						},
						npmRegistryServer: {
							description:
								"URL of the selected npm registry (note: npm enterprise isn't supported)",
							type: A.a2.STRING,
							default: 'https://registry.yarnpkg.com',
						},
					},
					T = {
						configuration: {
							...P,
							...U,
							npmScopes: {
								description: 'Settings per package scope',
								type: A.a2.MAP,
								valueDefinition: {
									description: '',
									type: A.a2.SHAPE,
									properties: { ...P, ...U },
								},
							},
							npmRegistries: {
								description: 'Settings per registry',
								type: A.a2.MAP,
								normalizeKeys: f,
								valueDefinition: {
									description: '',
									type: A.a2.SHAPE,
									properties: { ...P },
								},
							},
						},
						fetchers: [
							class {
								supports(e, t) {
									if (!e.reference.startsWith('npm:')) return !1;
									const { selector: r, params: n } = o.structUtils.parseRange(
										e.reference
									);
									return (
										!!a().valid(r) &&
										null !== n &&
										'string' == typeof n.__archiveUrl
									);
								}
								getLocalPath(e, t) {
									return null;
								}
								async fetch(e, t) {
									const r = t.checksums.get(e.locatorHash) || null,
										[n, i, A] = await t.cache.fetchPackageFromCache(e, r, {
											onHit: () => t.report.reportCacheHit(e),
											onMiss: () =>
												t.report.reportCacheMiss(
													e,
													o.structUtils.prettyLocator(
														t.project.configuration,
														e
													) +
														" can't be found in the cache and will be fetched from the remote server"
												),
											loader: () => this.fetchFromNetwork(e, t),
											skipIntegrityCheck: t.skipIntegrityCheck,
										});
									return {
										packageFs: n,
										releaseFs: i,
										prefixPath: o.structUtils.getIdentVendorPath(e),
										checksum: A,
									};
								}
								async fetchFromNetwork(e, t) {
									const { params: r } = o.structUtils.parseRange(e.reference);
									if (null === r || 'string' != typeof r.__archiveUrl)
										throw new Error(
											'Assertion failed: The archiveUrl querystring parameter should have been available'
										);
									const n = await Q(r.__archiveUrl, {
										configuration: t.project.configuration,
										ident: e,
									});
									return await o.tgzUtils.convertToZip(n, {
										compressionLevel: t.project.configuration.get(
											'compressionLevel'
										),
										prefixPath: o.structUtils.getIdentVendorPath(e),
										stripComponents: 1,
									});
								}
							},
							N,
						],
						resolvers: [
							class {
								supportsDescriptor(e, t) {
									return (
										!!e.range.startsWith('npm:') &&
										!!o.structUtils.tryParseDescriptor(
											e.range.slice('npm:'.length),
											!0
										)
									);
								}
								supportsLocator(e, t) {
									return !1;
								}
								shouldPersistResolution(e, t) {
									throw new Error('Unreachable');
								}
								bindDescriptor(e, t, r) {
									return e;
								}
								getResolutionDependencies(e, t) {
									const r = o.structUtils.parseDescriptor(
										e.range.slice('npm:'.length),
										!0
									);
									return t.resolver.getResolutionDependencies(r, t);
								}
								async getCandidates(e, t, r) {
									const n = o.structUtils.parseDescriptor(
										e.range.slice('npm:'.length),
										!0
									);
									return await r.resolver.getCandidates(n, t, r);
								}
								async getSatisfying(e, t, r) {
									const n = o.structUtils.parseDescriptor(
										e.range.slice('npm:'.length),
										!0
									);
									return r.resolver.getSatisfying(n, t, r);
								}
								resolve(e, t) {
									throw new Error('Unreachable');
								}
							},
							class {
								supportsDescriptor(e, t) {
									return (
										!!e.range.startsWith('npm:') &&
										!!o.semverUtils.F(e.range.slice('npm:'.length))
									);
								}
								supportsLocator(e, t) {
									if (!e.reference.startsWith('npm:')) return !1;
									const { selector: r } = o.structUtils.parseRange(e.reference);
									return !!a().valid(r);
								}
								shouldPersistResolution(e, t) {
									return !0;
								}
								bindDescriptor(e, t, r) {
									return e;
								}
								getResolutionDependencies(e, t) {
									return [];
								}
								async getCandidates(e, t, r) {
									const n = o.semverUtils.F(e.range.slice('npm:'.length));
									if (null === n)
										throw new Error(
											'Expected a valid range, got ' +
												e.range.slice('npm:'.length)
										);
									const i = await Q(w(e), {
											configuration: r.project.configuration,
											ident: e,
											jsonResponse: !0,
										}),
										A = Object.keys(i.versions)
											.map((e) => new (a().SemVer)(e))
											.filter((e) => n.test(e)),
										s = A.filter((e) => !i.versions[e.raw].deprecated),
										c = s.length > 0 ? s : A;
									return (
										c.sort((e, t) => -e.compare(t)),
										c.map((t) => {
											const n = o.structUtils.makeLocator(e, 'npm:' + t.raw),
												A = i.versions[t.raw].dist.tarball;
											return N.isConventionalTarballUrl(n, A, {
												configuration: r.project.configuration,
											})
												? n
												: o.structUtils.bindLocator(n, { __archiveUrl: A });
										})
									);
								}
								async getSatisfying(e, t, r) {
									const n = o.semverUtils.F(e.range.slice('npm:'.length));
									if (null === n)
										throw new Error(
											'Expected a valid range, got ' +
												e.range.slice('npm:'.length)
										);
									return t
										.map((e) => {
											try {
												return new (a().SemVer)(e.slice('npm:'.length));
											} catch (e) {
												return null;
											}
										})
										.filter((e) => null !== e)
										.filter((e) => n.test(e))
										.sort((e, t) => -e.compare(t))
										.map((t) => o.structUtils.makeLocator(e, 'npm:' + t.raw));
								}
								async resolve(e, t) {
									const { selector: r } = o.structUtils.parseRange(e.reference),
										n = a().clean(r);
									if (null === n)
										throw new l.lk(
											u.b.RESOLVER_NOT_FOUND,
											"The npm semver resolver got selected, but the version isn't semver"
										);
									const i = await Q(w(e), {
										configuration: t.project.configuration,
										ident: e,
										jsonResponse: !0,
									});
									if (!Object.prototype.hasOwnProperty.call(i, 'versions'))
										throw new l.lk(
											u.b.REMOTE_INVALID,
											'Registry returned invalid data for - missing "versions" field'
										);
									if (!Object.prototype.hasOwnProperty.call(i.versions, n))
										throw new l.lk(
											u.b.REMOTE_NOT_FOUND,
											`Registry failed to return reference "${n}"`
										);
									const A = new F.G();
									if (
										(A.load(i.versions[n]),
										!A.dependencies.has(K.identHash) &&
											!A.peerDependencies.has(K.identHash))
									)
										for (const r of A.scripts.values())
											if (r.match(L)) {
												A.dependencies.set(
													K.identHash,
													o.structUtils.makeDescriptor(K, 'latest')
												),
													t.report.reportWarning(
														u.b.NODE_GYP_INJECTED,
														o.structUtils.prettyLocator(
															t.project.configuration,
															e
														) +
															': Implicit dependencies on node-gyp are discouraged'
													);
												break;
											}
									return (
										'string' == typeof A.raw.deprecated &&
											t.report.reportWarning(
												u.b.DEPRECATED_PACKAGE,
												`${o.structUtils.prettyLocator(
													t.project.configuration,
													e
												)} is deprecated: ${A.raw.deprecated}`
											),
										{
											...e,
											version: n,
											languageName: 'node',
											linkType: R.U.HARD,
											dependencies: A.dependencies,
											peerDependencies: A.peerDependencies,
											dependenciesMeta: A.dependenciesMeta,
											peerDependenciesMeta: A.peerDependenciesMeta,
											bin: A.bin,
										}
									);
								}
							},
							class {
								supportsDescriptor(e, t) {
									return (
										!!e.range.startsWith('npm:') &&
										!!x.c.test(e.range.slice('npm:'.length))
									);
								}
								supportsLocator(e, t) {
									return !1;
								}
								shouldPersistResolution(e, t) {
									throw new Error('Unreachable');
								}
								bindDescriptor(e, t, r) {
									return e;
								}
								getResolutionDependencies(e, t) {
									return [];
								}
								async getCandidates(e, t, r) {
									const n = e.range.slice('npm:'.length),
										i = await Q(w(e), {
											configuration: r.project.configuration,
											ident: e,
											jsonResponse: !0,
										});
									if (!Object.prototype.hasOwnProperty.call(i, 'dist-tags'))
										throw new l.lk(
											u.b.REMOTE_INVALID,
											'Registry returned invalid data - missing "dist-tags" field'
										);
									const A = i['dist-tags'];
									if (!Object.prototype.hasOwnProperty.call(A, n))
										throw new l.lk(
											u.b.REMOTE_NOT_FOUND,
											`Registry failed to return tag "${n}"`
										);
									const s = A[n],
										a = o.structUtils.makeLocator(e, 'npm:' + s),
										c = i.versions[s].dist.tarball;
									return N.isConventionalTarballUrl(a, c, {
										configuration: r.project.configuration,
									})
										? [a]
										: [o.structUtils.bindLocator(a, { __archiveUrl: c })];
								}
								async getSatisfying(e, t, r) {
									return null;
								}
								async resolve(e, t) {
									throw new Error('Unreachable');
								}
							},
						],
					};
			},
			5973: (e, t, r) => {
				'use strict';
				r.r(t), r.d(t, { packUtils: () => n, default: () => x });
				var n = {};
				r.r(n),
					r.d(n, {
						genPackList: () => S,
						genPackStream: () => b,
						genPackageManifest: () => D,
						hasPackScripts: () => Q,
						prepareForPack: () => v,
					});
				var i = r(32741),
					A = r(35691),
					o = r(92659),
					s = r(36370),
					a = r(95397),
					c = r(27122),
					g = r(40376),
					l = r(28148),
					u = r(33720),
					h = r(15815),
					p = r(46009),
					f = r(56537),
					d = r(40822),
					C = r(10489),
					I = r(2401),
					E = r.n(I),
					m = r(59938),
					B = r(78761);
				const y = [
						'/package.json',
						'/readme',
						'/readme.*',
						'/license',
						'/license.*',
						'/licence',
						'/licence.*',
						'/changelog',
						'/changelog.*',
					],
					w = [
						'/package.tgz',
						'.github',
						'.git',
						'.hg',
						'node_modules',
						'.npmignore',
						'.gitignore',
						'.#*',
						'.DS_Store',
					];
				async function Q(e) {
					return (
						!!i.scriptUtils.hasWorkspaceScript(e, 'prepack') ||
						!!i.scriptUtils.hasWorkspaceScript(e, 'postpack')
					);
				}
				async function v(e, { report: t }, r) {
					await i.scriptUtils.maybeExecuteWorkspaceLifecycleScript(
						e,
						'prepack',
						{ report: t }
					);
					try {
						await r();
					} finally {
						await i.scriptUtils.maybeExecuteWorkspaceLifecycleScript(
							e,
							'postpack',
							{ report: t }
						);
					}
				}
				async function b(e, t) {
					var r, n;
					void 0 === t && (t = await S(e));
					const i = new Set();
					for (const t of null !==
						(n =
							null === (r = e.manifest.publishConfig) || void 0 === r
								? void 0
								: r.executableFiles) && void 0 !== n
						? n
						: new Set())
						i.add(p.y1.normalize(t));
					for (const t of e.manifest.bin.values()) i.add(p.y1.normalize(t));
					const A = m.P();
					process.nextTick(async () => {
						for (const r of t) {
							const t = p.y1.normalize(r),
								n = p.y1.resolve(e.cwd, t),
								o = p.y1.join('package', t),
								s = await f.xfs.lstatPromise(n),
								a = { name: o, mtime: new Date(3155328e5) },
								c = i.has(t) ? 493 : 420;
							let g, l;
							const u = new Promise((e, t) => {
									(g = e), (l = t);
								}),
								h = (e) => {
									e ? l(e) : g();
								};
							if (s.isFile()) {
								let r;
								(r =
									'package.json' === t
										? Buffer.from(JSON.stringify(await D(e), null, 2))
										: await f.xfs.readFilePromise(n)),
									A.entry({ ...a, mode: c, type: 'file' }, r, h);
							} else
								s.isSymbolicLink() &&
									A.entry(
										{
											...a,
											mode: c,
											type: 'symlink',
											linkname: await f.xfs.readlinkPromise(n),
										},
										h
									);
							await u;
						}
						A.finalize();
					});
					const o = (0, B.createGzip)();
					return A.pipe(o), o;
				}
				async function D(e) {
					const t = JSON.parse(JSON.stringify(e.manifest.raw));
					return (
						await e.project.configuration.triggerHook(
							(e) => e.beforeWorkspacePacking,
							e,
							t
						),
						t
					);
				}
				async function S(e) {
					var t, r, n, i, A, o, s, a;
					const c = e.project,
						g = c.configuration,
						l = { accept: [], reject: [] };
					for (const e of w) l.reject.push(e);
					for (const e of y) l.accept.push(e);
					l.reject.push(g.get('rcFilename'));
					const u = (t) => {
						if (null === t || !t.startsWith(e.cwd + '/')) return;
						const r = p.y1.relative(e.cwd, t),
							n = p.y1.resolve(p.LZ.root, r);
						l.reject.push(n);
					};
					u(p.y1.resolve(c.cwd, g.get('lockfileFilename'))),
						u(g.get('bstatePath')),
						u(g.get('cacheFolder')),
						u(g.get('globalFolder')),
						u(g.get('installStatePath')),
						u(g.get('virtualFolder')),
						u(g.get('yarnPath')),
						await g.triggerHook(
							(e) => e.populateYarnPaths,
							c,
							(e) => {
								u(e);
							}
						);
					for (const t of c.workspaces) {
						const r = p.y1.relative(e.cwd, t.cwd);
						'' === r || r.match(/^(\.\.)?\//) || l.reject.push('/' + r);
					}
					const h = { accept: [], reject: [] },
						f =
							null !==
								(r =
									null === (t = e.manifest.publishConfig) || void 0 === t
										? void 0
										: t.main) && void 0 !== r
								? r
								: e.manifest.main,
						d =
							null !==
								(i =
									null === (n = e.manifest.publishConfig) || void 0 === n
										? void 0
										: n.module) && void 0 !== i
								? i
								: e.manifest.module,
						I =
							null !==
								(o =
									null === (A = e.manifest.publishConfig) || void 0 === A
										? void 0
										: A.browser) && void 0 !== o
								? o
								: e.manifest.browser,
						E =
							null !==
								(a =
									null === (s = e.manifest.publishConfig) || void 0 === s
										? void 0
										: s.bin) && void 0 !== a
								? a
								: e.manifest.bin;
					null != f && h.accept.push(p.y1.resolve(p.LZ.root, f)),
						null != d && h.accept.push(p.y1.resolve(p.LZ.root, d)),
						'string' == typeof I && h.accept.push(p.y1.resolve(p.LZ.root, I));
					for (const e of E.values()) h.accept.push(p.y1.resolve(p.LZ.root, e));
					if (I instanceof Map)
						for (const [e, t] of I.entries())
							h.accept.push(p.y1.resolve(p.LZ.root, e)),
								'string' == typeof t &&
									h.accept.push(p.y1.resolve(p.LZ.root, t));
					const m = null !== e.manifest.files;
					if (m) {
						h.reject.push('/*');
						for (const t of e.manifest.files)
							M(h.accept, t, { cwd: p.LZ.root });
					}
					return await (async function (
						e,
						{ hasExplicitFileList: t, globalList: r, ignoreList: n }
					) {
						const i = [],
							A = new C.n(e),
							o = [[p.LZ.root, [n]]];
						for (; o.length > 0; ) {
							const [e, n] = o.pop(),
								s = await A.lstatPromise(e);
							if (
								!N(e, {
									globalList: r,
									ignoreLists: s.isDirectory() ? null : n,
								})
							)
								if (s.isDirectory()) {
									const i = await A.readdirPromise(e);
									let s = !1,
										a = !1;
									if (!t || e !== p.LZ.root)
										for (const e of i)
											(s = s || '.gitignore' === e),
												(a = a || '.npmignore' === e);
									const c = a
										? await k(A, e, '.npmignore')
										: s
										? await k(A, e, '.gitignore')
										: null;
									let g = null !== c ? [c].concat(n) : n;
									N(e, { globalList: r, ignoreLists: n }) &&
										(g = [...n, { accept: [], reject: ['**/*'] }]);
									for (const t of i) o.push([p.y1.resolve(e, t), g]);
								} else i.push(p.y1.relative(p.LZ.root, e));
						}
						return i.sort();
					})(e.cwd, { hasExplicitFileList: m, globalList: l, ignoreList: h });
				}
				async function k(e, t, r) {
					const n = { accept: [], reject: [] },
						i = await e.readFilePromise(p.y1.join(t, r), 'utf8');
					for (const e of i.split(/\n/g)) M(n.reject, e, { cwd: t });
					return n;
				}
				function M(e, t, { cwd: r }) {
					const n = t.trim();
					'' !== n &&
						'#' !== n[0] &&
						e.push(
							(function (e, { cwd: t }) {
								const r = '!' === e[0];
								return (
									r && (e = e.slice(1)),
									e.match(/\.{0,1}\//) && (e = p.y1.resolve(t, e)),
									r && (e = '!' + e),
									e
								);
							})(n, { cwd: r })
						);
				}
				function N(e, { globalList: t, ignoreLists: r }) {
					if (F(e, t.accept)) return !1;
					if (F(e, t.reject)) return !0;
					if (null !== r)
						for (const t of r) {
							if (F(e, t.accept)) return !1;
							if (F(e, t.reject)) return !0;
						}
					return !1;
				}
				function F(e, t) {
					let r = t;
					const n = [];
					for (let e = 0; e < t.length; ++e)
						'!' !== t[e][0]
							? r !== t && r.push(t[e])
							: (r === t && (r = t.slice(0, e)), n.push(t[e].slice(1)));
					return !R(e, n) && !!R(e, r);
				}
				function R(e, t) {
					let r = t;
					const n = [];
					for (let e = 0; e < t.length; ++e)
						t[e].includes('/')
							? r !== t && r.push(t[e])
							: (r === t && (r = t.slice(0, e)), n.push(t[e]));
					return (
						!!E().isMatch(e, r, { dot: !0, nocase: !0 }) ||
						!!E().isMatch(e, n, { dot: !0, basename: !0, nocase: !0 })
					);
				}
				class K extends a.BaseCommand {
					constructor() {
						super(...arguments),
							(this.installIfNeeded = !1),
							(this.dryRun = !1),
							(this.json = !1);
					}
					async execute() {
						const e = await c.VK.find(this.context.cwd, this.context.plugins),
							{ project: t, workspace: r } = await g.I.find(
								e,
								this.context.cwd
							);
						if (!r) throw new a.WorkspaceRequiredError(t.cwd, this.context.cwd);
						(await Q(r)) &&
							(this.installIfNeeded
								? await t.install({
										cache: await l.C.find(e),
										report: new u.$(),
								  })
								: await t.restoreInstallState());
						const n =
							void 0 !== this.out
								? p.y1.resolve(
										this.context.cwd,
										(function (e, { workspace: t }) {
											const r = e
												.replace(
													'%s',
													(function (e) {
														return null !== e.manifest.name
															? i.structUtils.slugifyIdent(e.manifest.name)
															: 'package';
													})(t)
												)
												.replace(
													'%v',
													(function (e) {
														return null !== e.manifest.version
															? e.manifest.version
															: 'unknown';
													})(t)
												);
											return p.cS.toPortablePath(r);
										})(this.out, { workspace: r })
								  )
								: p.y1.resolve(r.cwd, 'package.tgz');
						return (
							await h.Pk.start(
								{
									configuration: e,
									stdout: this.context.stdout,
									json: this.json,
								},
								async (t) => {
									await v(r, { report: t }, async () => {
										t.reportJson({ base: r.cwd });
										const e = await S(r);
										for (const r of e)
											t.reportInfo(null, r), t.reportJson({ location: r });
										if (!this.dryRun) {
											const t = await b(r, e),
												i = f.xfs.createWriteStream(n);
											t.pipe(i),
												await new Promise((e) => {
													i.on('finish', e);
												});
										}
									}),
										this.dryRun ||
											(t.reportInfo(
												o.b.UNNAMED,
												'Package archive generated in ' +
													i.formatUtils.pretty(e, n, i.formatUtils.Type.PATH)
											),
											t.reportJson({ output: n }));
								}
							)
						).exitCode();
					}
				}
				(K.usage = d.Command.Usage({
					description: 'generate a tarball from the active workspace',
					details:
						'\n      This command will turn the active workspace into a compressed archive suitable for publishing. The archive will by default be stored at the root of the workspace (`package.tgz`).\n\n      If the `-o,---out` is set the archive will be created at the specified path. The `%s` and `%v` variables can be used within the path and will be respectively replaced by the package name and version.\n    ',
					examples: [
						['Create an archive from the active workspace', 'yarn pack'],
						[
							"List the files that would be made part of the workspace's archive",
							'yarn pack --dry-run',
						],
						[
							'Name and output the archive in a dedicated folder',
							'yarn pack --out /artifacts/%s-%v.tgz',
						],
					],
				})),
					(0, s.gn)(
						[
							d.Command.Boolean('--install-if-needed', {
								description:
									'Run a preliminary `yarn install` if the package contains build scripts',
							}),
						],
						K.prototype,
						'installIfNeeded',
						void 0
					),
					(0, s.gn)(
						[
							d.Command.Boolean('-n,--dry-run', {
								description:
									'Print the file paths without actually generating the package archive',
							}),
						],
						K.prototype,
						'dryRun',
						void 0
					),
					(0, s.gn)(
						[
							d.Command.Boolean('--json', {
								description: 'Format the output as an NDJSON stream',
							}),
						],
						K.prototype,
						'json',
						void 0
					),
					(0, s.gn)(
						[
							d.Command.String('--filename', {
								hidden: !1,
								description: 'Create the archive at the specified path',
							}),
							d.Command.String('-o,--out', {
								description: 'Create the archive at the specified path',
							}),
						],
						K.prototype,
						'out',
						void 0
					),
					(0, s.gn)([d.Command.Path('pack')], K.prototype, 'execute', null);
				const L = ['dependencies', 'devDependencies', 'peerDependencies'],
					x = {
						hooks: {
							beforeWorkspacePacking: (e, t) => {
								t.publishConfig &&
									(t.publishConfig.main && (t.main = t.publishConfig.main),
									t.publishConfig.browser &&
										(t.browser = t.publishConfig.browser),
									t.publishConfig.module && (t.module = t.publishConfig.module),
									t.publishConfig.browser &&
										(t.browser = t.publishConfig.browser),
									t.publishConfig.bin && (t.bin = t.publishConfig.bin));
								const r = e.project;
								for (const n of L)
									for (const s of e.manifest.getForScope(n).values()) {
										const e = r.tryWorkspaceByDescriptor(s),
											a = i.structUtils.parseRange(s.range);
										if ('workspace:' === a.protocol)
											if (null === e) {
												if (null === r.tryWorkspaceByIdent(s))
													throw new A.lk(
														o.b.WORKSPACE_NOT_FOUND,
														i.structUtils.prettyDescriptor(r.configuration, s) +
															': No local workspace found for this range'
													);
											} else {
												let r;
												(r =
													i.structUtils.areDescriptorsEqual(
														s,
														e.anchoredDescriptor
													) || '*' === a.selector
														? e.manifest.version
														: a.selector),
													(t[n][i.structUtils.stringifyIdent(s)] = r);
											}
									}
							},
						},
						commands: [K],
					};
			},
			48719: (e, t, r) => {
				'use strict';
				r.r(t), r.d(t, { patchUtils: () => n, default: () => X });
				var n = {};
				r.r(n),
					r.d(n, {
						applyPatchFile: () => v,
						diffFolders: () => Y,
						extractPackageToDisk: () => O,
						isParentRequired: () => U,
						loadPatchFiles: () => T,
						makeDescriptor: () => L,
						makeLocator: () => x,
						parseDescriptor: () => F,
						parseLocator: () => R,
						parsePatchFile: () => y,
					});
				var i = r(27122),
					A = r(35691),
					o = r(92659),
					s = r(32741),
					a = r(56537),
					c = r(46009),
					g = r(90739),
					l = r(75448),
					u = r(29486),
					h = r(33720),
					p = r(78420);
				class f extends Error {
					constructor(e, t) {
						super('Cannot apply hunk #' + (e + 1)), (this.hunk = t);
					}
				}
				const d = /^@@ -(\d+)(,(\d+))? \+(\d+)(,(\d+))? @@.*/;
				function C(e) {
					return c.y1.relative(
						c.LZ.root,
						c.y1.resolve(c.LZ.root, c.cS.toPortablePath(e))
					);
				}
				function I(e) {
					const t = e.trim().match(d);
					if (!t) throw new Error(`Bad header line: '${e}'`);
					return {
						original: {
							start: Math.max(Number(t[1]), 1),
							length: Number(t[3] || 1),
						},
						patched: {
							start: Math.max(Number(t[4]), 1),
							length: Number(t[6] || 1),
						},
					};
				}
				var E;
				!(function (e) {
					(e.Context = 'context'),
						(e.Insertion = 'insertion'),
						(e.Deletion = 'deletion');
				})(E || (E = {}));
				const m = {
					'@': 'header',
					'-': E.Deletion,
					'+': E.Insertion,
					' ': E.Context,
					'\\': 'pragma',
					undefined: E.Context,
				};
				function B(e) {
					const t = 511 & parseInt(e, 8);
					if (420 !== t && 493 !== t)
						throw new Error('Unexpected file mode string: ' + e);
					return t;
				}
				function y(e) {
					const t = e.split(/\n/g);
					return (
						'' === t[t.length - 1] && t.pop(),
						(function (e) {
							const t = [];
							for (const r of e) {
								const {
										semverExclusivity: e,
										diffLineFromPath: n,
										diffLineToPath: i,
										oldMode: A,
										newMode: o,
										deletedFileMode: a,
										newFileMode: c,
										renameFrom: g,
										renameTo: l,
										beforeHash: u,
										afterHash: h,
										fromPath: p,
										toPath: f,
										hunks: d,
									} = r,
									I = g
										? 'rename'
										: a
										? 'file deletion'
										: c
										? 'file creation'
										: d && d.length > 0
										? 'patch'
										: 'mode change';
								let E = null;
								switch (I) {
									case 'rename':
										if (!g || !l)
											throw new Error(
												'Bad parser state: rename from & to not given'
											);
										t.push({
											type: 'rename',
											semverExclusivity: e,
											fromPath: C(g),
											toPath: C(l),
										}),
											(E = l);
										break;
									case 'file deletion':
										{
											const r = n || p;
											if (!r)
												throw new Error(
													'Bad parse state: no path given for file deletion'
												);
											t.push({
												type: 'file deletion',
												semverExclusivity: e,
												hunk: (d && d[0]) || null,
												path: C(r),
												mode: B(a),
												hash: u,
											});
										}
										break;
									case 'file creation':
										{
											const r = i || f;
											if (!r)
												throw new Error(
													'Bad parse state: no path given for file creation'
												);
											t.push({
												type: 'file creation',
												semverExclusivity: e,
												hunk: (d && d[0]) || null,
												path: C(r),
												mode: B(c),
												hash: h,
											});
										}
										break;
									case 'patch':
									case 'mode change':
										E = f || i;
										break;
									default:
										s.miscUtils.assertNever(I);
								}
								E &&
									A &&
									o &&
									A !== o &&
									t.push({
										type: 'mode change',
										semverExclusivity: e,
										path: C(E),
										oldMode: B(A),
										newMode: B(o),
									}),
									E &&
										d &&
										d.length &&
										t.push({
											type: 'patch',
											semverExclusivity: e,
											path: C(E),
											hunks: d,
											beforeHash: u,
											afterHash: h,
										});
							}
							return t;
						})(
							(function (e) {
								const t = [];
								let r = {
										semverExclusivity: null,
										diffLineFromPath: null,
										diffLineToPath: null,
										oldMode: null,
										newMode: null,
										deletedFileMode: null,
										newFileMode: null,
										renameFrom: null,
										renameTo: null,
										beforeHash: null,
										afterHash: null,
										fromPath: null,
										toPath: null,
										hunks: null,
									},
									n = 'parsing header',
									i = null,
									A = null;
								function o() {
									i &&
										(A && (i.parts.push(A), (A = null)),
										r.hunks.push(i),
										(i = null));
								}
								function a() {
									o(),
										t.push(r),
										(r = {
											semverExclusivity: null,
											diffLineFromPath: null,
											diffLineToPath: null,
											oldMode: null,
											newMode: null,
											deletedFileMode: null,
											newFileMode: null,
											renameFrom: null,
											renameTo: null,
											beforeHash: null,
											afterHash: null,
											fromPath: null,
											toPath: null,
											hunks: null,
										});
								}
								for (let t = 0; t < e.length; t++) {
									const c = e[t];
									if ('parsing header' === n)
										if (c.startsWith('@@'))
											(n = 'parsing hunks'), (r.hunks = []), (t -= 1);
										else if (c.startsWith('diff --git ')) {
											r && r.diffLineFromPath && a();
											const e = c.match(/^diff --git a\/(.*?) b\/(.*?)\s*$/);
											if (!e) throw new Error('Bad diff line: ' + c);
											(r.diffLineFromPath = e[1]), (r.diffLineToPath = e[2]);
										} else if (c.startsWith('old mode '))
											r.oldMode = c.slice('old mode '.length).trim();
										else if (c.startsWith('new mode '))
											r.newMode = c.slice('new mode '.length).trim();
										else if (c.startsWith('deleted file mode '))
											r.deletedFileMode = c
												.slice('deleted file mode '.length)
												.trim();
										else if (c.startsWith('new file mode '))
											r.newFileMode = c.slice('new file mode '.length).trim();
										else if (c.startsWith('rename from '))
											r.renameFrom = c.slice('rename from '.length).trim();
										else if (c.startsWith('rename to '))
											r.renameTo = c.slice('rename to '.length).trim();
										else if (c.startsWith('index ')) {
											const e = c.match(/(\w+)\.\.(\w+)/);
											if (!e) continue;
											(r.beforeHash = e[1]), (r.afterHash = e[2]);
										} else
											c.startsWith('semver exclusivity ')
												? (r.semverExclusivity = c
														.slice('semver exclusivity '.length)
														.trim())
												: c.startsWith('--- ')
												? (r.fromPath = c.slice('--- a/'.length).trim())
												: c.startsWith('+++ ') &&
												  (r.toPath = c.slice('+++ b/'.length).trim());
									else {
										const e = m[c[0]] || null;
										switch (e) {
											case 'header':
												o(), (i = { header: I(c), parts: [] });
												break;
											case null:
												(n = 'parsing header'), a(), (t -= 1);
												break;
											case 'pragma':
												if (!c.startsWith('\\ No newline at end of file'))
													throw new Error(
														'Unrecognized pragma in patch file: ' + c
													);
												if (!A)
													throw new Error(
														'Bad parser state: No newline at EOF pragma encountered without context'
													);
												A.noNewlineAtEndOfFile = !0;
												break;
											case E.Context:
											case E.Deletion:
											case E.Insertion:
												if (!i)
													throw new Error(
														'Bad parser state: Hunk lines encountered before hunk header'
													);
												A && A.type !== e && (i.parts.push(A), (A = null)),
													A ||
														(A = {
															type: e,
															lines: [],
															noNewlineAtEndOfFile: !1,
														}),
													A.lines.push(c.slice(1));
												break;
											default:
												s.miscUtils.assertNever(e);
										}
									}
								}
								a();
								for (const { hunks: e } of t) if (e) for (const t of e) w(t);
								return t;
							})(t)
						)
					);
				}
				function w(e) {
					let t = 0,
						r = 0;
					for (const { type: n, lines: i } of e.parts)
						switch (n) {
							case E.Context:
								(r += i.length), (t += i.length);
								break;
							case E.Deletion:
								t += i.length;
								break;
							case E.Insertion:
								r += i.length;
								break;
							default:
								s.miscUtils.assertNever(n);
						}
					if (t !== e.header.original.length || r !== e.header.patched.length) {
						const n = (e) => (e < 0 ? e : '+' + e);
						throw new Error(
							`hunk header integrity check failed (expected @@ ${n(
								e.header.original.length
							)} ${n(e.header.patched.length)} @@, got @@ ${n(t)} ${n(r)} @@)`
						);
					}
				}
				async function Q(e, t, r) {
					const n = await e.lstatPromise(t),
						i = await r();
					if ((void 0 !== i && (t = i), e.lutimesPromise))
						await e.lutimesPromise(t, n.atime, n.mtime);
					else {
						if (n.isSymbolicLink())
							throw new Error('Cannot preserve the time values of a symlink');
						await e.utimesPromise(t, n.atime, n.mtime);
					}
				}
				async function v(
					e,
					{ baseFs: t = new p.S(), dryRun: r = !1, version: n = null } = {}
				) {
					for (const i of e)
						if (
							null === i.semverExclusivity ||
							null === n ||
							s.semverUtils.v(n, i.semverExclusivity)
						)
							switch (i.type) {
								case 'file deletion':
									if (r) {
										if (!t.existsSync(i.path))
											throw new Error(
												"Trying to delete a file that doesn't exist: " + i.path
											);
									} else
										await Q(t, c.y1.dirname(i.path), async () => {
											await t.unlinkPromise(i.path);
										});
									break;
								case 'rename':
									if (r) {
										if (!t.existsSync(i.fromPath))
											throw new Error(
												"Trying to move a file that doesn't exist: " +
													i.fromPath
											);
									} else
										await Q(t, c.y1.dirname(i.fromPath), async () => {
											await Q(t, c.y1.dirname(i.toPath), async () => {
												await Q(
													t,
													i.fromPath,
													async () => (
														await t.movePromise(i.fromPath, i.toPath), i.toPath
													)
												);
											});
										});
									break;
								case 'file creation':
									if (r) {
										if (t.existsSync(i.path))
											throw new Error(
												'Trying to create a file that already exists: ' + i.path
											);
									} else {
										const e = i.hunk
											? i.hunk.parts[0].lines.join('\n') +
											  (i.hunk.parts[0].noNewlineAtEndOfFile ? '' : '\n')
											: '';
										await t.mkdirpPromise(c.y1.dirname(i.path), {
											chmod: 493,
											utimes: [315532800, 315532800],
										}),
											await t.writeFilePromise(i.path, e, { mode: i.mode }),
											await t.utimesPromise(i.path, 315532800, 315532800);
									}
									break;
								case 'patch':
									await Q(t, i.path, async () => {
										await S(i, { baseFs: t, dryRun: r });
									});
									break;
								case 'mode change':
									{
										const e = (await t.statPromise(i.path)).mode;
										if (b(i.newMode) !== b(e)) continue;
										await Q(t, i.path, async () => {
											await t.chmodPromise(i.path, i.newMode);
										});
									}
									break;
								default:
									s.miscUtils.assertNever(i);
							}
				}
				function b(e) {
					return (64 & e) > 0;
				}
				function D(e) {
					return e.replace(/\s+$/, '');
				}
				async function S({ hunks: e, path: t }, { baseFs: r, dryRun: n = !1 }) {
					const i = await r.statSync(t).mode,
						A = (await r.readFileSync(t, 'utf8')).split(/\n/),
						o = [];
					let a = 0,
						c = 0;
					for (const t of e) {
						const r = Math.max(c, t.header.patched.start + a),
							n = Math.max(0, r - c),
							i = Math.max(0, A.length - r - t.header.original.length),
							s = Math.max(n, i);
						let g = 0,
							l = 0,
							u = null;
						for (; g <= s; ) {
							if (g <= n && ((l = r - g), (u = k(t, A, l)), null !== u)) {
								g = -g;
								break;
							}
							if (g <= i && ((l = r + g), (u = k(t, A, l)), null !== u)) break;
							g += 1;
						}
						if (null === u) throw new f(e.indexOf(t), t);
						o.push(u), (a += g), (c = l + t.header.original.length);
					}
					if (n) return;
					let g = 0;
					for (const e of o)
						for (const t of e)
							switch (t.type) {
								case 'splice':
									{
										const e = t.index + g;
										A.splice(e, t.numToDelete, ...t.linesToInsert),
											(g += t.linesToInsert.length - t.numToDelete);
									}
									break;
								case 'pop':
									A.pop();
									break;
								case 'push':
									A.push(t.line);
									break;
								default:
									s.miscUtils.assertNever(t);
							}
					await r.writeFilePromise(t, A.join('\n'), { mode: i });
				}
				function k(e, t, r) {
					const n = [];
					for (const A of e.parts)
						switch (A.type) {
							case E.Context:
							case E.Deletion:
								for (const e of A.lines) {
									const n = t[r];
									if (null == n || ((i = e), D(n) !== D(i))) return null;
									r += 1;
								}
								A.type === E.Deletion &&
									(n.push({
										type: 'splice',
										index: r - A.lines.length,
										numToDelete: A.lines.length,
										linesToInsert: [],
									}),
									A.noNewlineAtEndOfFile && n.push({ type: 'push', line: '' }));
								break;
							case E.Insertion:
								n.push({
									type: 'splice',
									index: r,
									numToDelete: 0,
									linesToInsert: A.lines,
								}),
									A.noNewlineAtEndOfFile && n.push({ type: 'pop' });
								break;
							default:
								s.miscUtils.assertNever(A.type);
						}
					var i;
					return n;
				}
				const M = /^builtin<([^>]+)>$/;
				function N(e, t) {
					const {
						source: r,
						selector: n,
						params: i,
					} = s.structUtils.parseRange(e);
					if (null === r)
						throw new Error(
							'Patch locators must explicitly define their source'
						);
					const A = n ? n.split(/&/).map((e) => c.cS.toPortablePath(e)) : [],
						o =
							i && 'string' == typeof i.locator
								? s.structUtils.parseLocator(i.locator)
								: null,
						a = i && 'string' == typeof i.version ? i.version : null;
					return {
						parentLocator: o,
						sourceItem: t(r),
						patchPaths: A,
						sourceVersion: a,
					};
				}
				function F(e) {
					const { sourceItem: t, ...r } = N(
						e.range,
						s.structUtils.parseDescriptor
					);
					return { ...r, sourceDescriptor: t };
				}
				function R(e) {
					const { sourceItem: t, ...r } = N(
						e.reference,
						s.structUtils.parseLocator
					);
					return { ...r, sourceLocator: t };
				}
				function K(
					{
						parentLocator: e,
						sourceItem: t,
						patchPaths: r,
						sourceVersion: n,
						patchHash: i,
					},
					A
				) {
					const o =
							null !== e ? { locator: s.structUtils.stringifyLocator(e) } : {},
						a = void 0 !== n ? { version: n } : {},
						c = void 0 !== i ? { hash: i } : {};
					return s.structUtils.makeRange({
						protocol: 'patch:',
						source: A(t),
						selector: r.join('&'),
						params: { ...a, ...c, ...o },
					});
				}
				function L(
					e,
					{ parentLocator: t, sourceDescriptor: r, patchPaths: n }
				) {
					return s.structUtils.makeLocator(
						e,
						K(
							{ parentLocator: t, sourceItem: r, patchPaths: n },
							s.structUtils.stringifyDescriptor
						)
					);
				}
				function x(
					e,
					{ parentLocator: t, sourcePackage: r, patchPaths: n, patchHash: i }
				) {
					return s.structUtils.makeLocator(
						e,
						K(
							{
								parentLocator: t,
								sourceItem: r,
								sourceVersion: r.version,
								patchPaths: n,
								patchHash: i,
							},
							s.structUtils.stringifyLocator
						)
					);
				}
				function P({ onAbsolute: e, onRelative: t, onBuiltin: r }, n) {
					const i = n.match(M);
					return null !== i ? r(i[1]) : c.y1.isAbsolute(n) ? e(n) : t(n);
				}
				function U(e) {
					return P(
						{ onAbsolute: () => !1, onRelative: () => !0, onBuiltin: () => !1 },
						e
					);
				}
				async function T(e, t, r) {
					const n = null !== e ? await r.fetcher.fetch(e, r) : null,
						i =
							n && n.localPath
								? {
										packageFs: new l.M(c.LZ.root),
										prefixPath: c.y1.relative(c.LZ.root, n.localPath),
								  }
								: n;
					n && n !== i && n.releaseFs && n.releaseFs();
					return (
						await s.miscUtils.releaseAfterUseAsync(
							async () =>
								await Promise.all(
									t.map(async (e) =>
										P(
											{
												onAbsolute: async () =>
													await a.xfs.readFilePromise(e, 'utf8'),
												onRelative: async () => {
													if (null === n)
														throw new Error(
															'Assertion failed: The parent locator should have been fetched'
														);
													return await n.packageFs.readFilePromise(e, 'utf8');
												},
												onBuiltin: async (e) =>
													await r.project.configuration.firstHook(
														(e) => e.getBuiltinPatch,
														r.project,
														e
													),
											},
											e
										)
									)
								)
						)
					).map((e) => ('string' == typeof e ? e.replace(/\r\n?/g, '\n') : e));
				}
				async function O(e, { cache: t, project: r }) {
					const n = r.storedChecksums,
						i = new h.$(),
						A = r.configuration.makeFetcher(),
						o = await A.fetch(e, {
							cache: t,
							project: r,
							fetcher: A,
							checksums: n,
							report: i,
						}),
						g = await a.xfs.mktempPromise();
					return (
						await a.xfs.copyPromise(g, o.prefixPath, { baseFs: o.packageFs }),
						await a.xfs.writeJsonPromise(c.y1.join(g, '.yarn-patch.json'), {
							locator: s.structUtils.stringifyLocator(e),
						}),
						a.xfs.detachTemp(g),
						g
					);
				}
				async function Y(e, t) {
					const r = c.cS.fromPortablePath(e).replace(/\\/g, '/'),
						n = c.cS.fromPortablePath(t).replace(/\\/g, '/'),
						{ stdout: i } = await s.execUtils.execvp(
							'git',
							[
								'diff',
								'--src-prefix=a/',
								'--dst-prefix=b/',
								'--ignore-cr-at-eol',
								'--full-index',
								'--no-index',
								r,
								n,
							],
							{ cwd: c.cS.toPortablePath(process.cwd()) }
						),
						A = r.startsWith('/') ? (e) => e.slice(1) : (e) => e;
					return i
						.replace(
							new RegExp(
								`(a|b)(${s.miscUtils.escapeRegExp(`/${A(r)}/`)})`,
								'g'
							),
							'$1/'
						)
						.replace(
							new RegExp('(a|b)' + s.miscUtils.escapeRegExp(`/${A(n)}/`), 'g'),
							'$1/'
						)
						.replace(new RegExp(s.miscUtils.escapeRegExp(r + '/'), 'g'), '')
						.replace(new RegExp(s.miscUtils.escapeRegExp(n + '/'), 'g'), '');
				}
				function j(e, { configuration: t, report: r }) {
					for (const n of e.parts)
						for (const e of n.lines)
							switch (n.type) {
								case E.Context:
									r.reportInfo(null, '  ' + s.formatUtils.pretty(t, e, 'grey'));
									break;
								case E.Deletion:
									r.reportError(
										o.b.FROZEN_LOCKFILE_EXCEPTION,
										'- ' +
											s.formatUtils.pretty(t, e, s.formatUtils.Type.REMOVED)
									);
									break;
								case E.Insertion:
									r.reportError(
										o.b.FROZEN_LOCKFILE_EXCEPTION,
										'+ ' + s.formatUtils.pretty(t, e, s.formatUtils.Type.ADDED)
									);
									break;
								default:
									s.miscUtils.assertNever(n.type);
							}
				}
				var G = r(36370),
					H = r(95397),
					J = r(40376),
					_ = r(28148),
					q = r(40822);
				class z extends H.BaseCommand {
					async execute() {
						const e = await i.VK.find(this.context.cwd, this.context.plugins),
							{ project: t, workspace: r } = await J.I.find(
								e,
								this.context.cwd
							),
							n = await _.C.find(e);
						if (!r) throw new H.WorkspaceRequiredError(t.cwd, this.context.cwd);
						await t.restoreInstallState();
						const A = c.y1.resolve(
								this.context.cwd,
								c.cS.toPortablePath(this.patchFolder)
							),
							o = c.y1.join(A, '.yarn-patch.json');
						if (!a.xfs.existsSync(o))
							throw new q.UsageError(
								"The argument folder didn't get created by 'yarn patch'"
							);
						const g = await a.xfs.readJsonPromise(o),
							l = s.structUtils.parseLocator(g.locator, !0);
						if (!t.storedPackages.has(l.locatorHash))
							throw new q.UsageError(
								'No package found in the project for the given locator'
							);
						const u = await O(l, { cache: n, project: t });
						this.context.stdout.write(await Y(u, A));
					}
				}
				(z.usage = q.Command.Usage({
					description:
						'\n      This will turn the folder passed in parameter into a patchfile suitable for consumption with the `patch:` protocol.\n\n      Only folders generated through `yarn patch` are accepted as valid input for `yarn patch-commit`.\n    ',
				})),
					(0, G.gn)([q.Command.String()], z.prototype, 'patchFolder', void 0),
					(0, G.gn)(
						[q.Command.Path('patch-commit')],
						z.prototype,
						'execute',
						null
					);
				var W = r(15815);
				class V extends H.BaseCommand {
					async execute() {
						const e = await i.VK.find(this.context.cwd, this.context.plugins),
							{ project: t, workspace: r } = await J.I.find(
								e,
								this.context.cwd
							),
							n = await _.C.find(e);
						if (!r) throw new H.WorkspaceRequiredError(t.cwd, this.context.cwd);
						await t.restoreInstallState();
						let A = s.structUtils.parseLocator(this.package);
						if ('unknown' === A.reference) {
							const r = s.miscUtils.mapAndFilter(
								[...t.storedPackages.values()],
								(e) =>
									e.identHash !== A.identHash ||
									s.structUtils.isVirtualLocator(e)
										? s.miscUtils.mapAndFilter.skip
										: e
							);
							if (0 === r.length)
								throw new q.UsageError(
									'No package found in the project for the given locator'
								);
							if (r.length > 1)
								throw new q.UsageError(
									'Multiple candidate packages found; explicitly choose one of them (use `yarn why <package>` to get more information as to who depends on them):\n' +
										r
											.map((t) => '\n- ' + s.structUtils.prettyLocator(e, t))
											.join('')
								);
							A = r[0];
						}
						if (!t.storedPackages.has(A.locatorHash))
							throw new q.UsageError(
								'No package found in the project for the given locator'
							);
						await W.Pk.start(
							{ configuration: e, stdout: this.context.stdout },
							async (r) => {
								const i = await O(A, { cache: n, project: t });
								r.reportInfo(
									o.b.UNNAMED,
									`Package ${s.structUtils.prettyLocator(
										e,
										A
									)} got extracted with success!`
								),
									r.reportInfo(
										o.b.UNNAMED,
										'You can now edit the following folder: ' +
											s.formatUtils.pretty(
												e,
												c.cS.fromPortablePath(i),
												'magenta'
											)
									),
									r.reportInfo(
										o.b.UNNAMED,
										`Once you are done run ${s.formatUtils.pretty(
											e,
											'yarn patch-commit ' + c.cS.fromPortablePath(i),
											'cyan'
										)} and Yarn will store a patchfile based on your changes.`
									);
							}
						);
					}
				}
				(V.usage = q.Command.Usage({
					description:
						'\n      This command will cause a package to be extracted in a temporary directory (under a folder named "patch-workdir"). This folder will be editable at will; running `yarn patch` inside it will then cause Yarn to generate a patchfile and register it into your top-level manifest (cf the `patch:` protocol).\n    ',
				})),
					(0, G.gn)([q.Command.String()], V.prototype, 'package', void 0),
					(0, G.gn)([q.Command.Path('patch')], V.prototype, 'execute', null);
				const X = {
					configuration: {
						enableInlineHunks: {
							description:
								'If true, the installs will print unmatched patch hunks',
							type: i.a2.BOOLEAN,
							default: !1,
						},
					},
					commands: [z, V],
					fetchers: [
						class {
							supports(e, t) {
								return !!e.reference.startsWith('patch:');
							}
							getLocalPath(e, t) {
								return null;
							}
							async fetch(e, t) {
								const r = t.checksums.get(e.locatorHash) || null,
									[n, i, A] = await t.cache.fetchPackageFromCache(e, r, {
										onHit: () => t.report.reportCacheHit(e),
										onMiss: () =>
											t.report.reportCacheMiss(
												e,
												s.structUtils.prettyLocator(
													t.project.configuration,
													e
												) +
													" can't be found in the cache and will be fetched from the disk"
											),
										loader: () => this.patchPackage(e, t),
										skipIntegrityCheck: t.skipIntegrityCheck,
									});
								return {
									packageFs: n,
									releaseFs: i,
									prefixPath: s.structUtils.getIdentVendorPath(e),
									localPath: this.getLocalPath(e, t),
									checksum: A,
								};
							}
							async patchPackage(e, t) {
								const {
										parentLocator: r,
										sourceLocator: n,
										sourceVersion: i,
										patchPaths: h,
									} = R(e),
									p = await T(r, h, t),
									d = await a.xfs.mktempPromise(),
									C = c.y1.join(d, 'patched.zip'),
									I = await t.fetcher.fetch(n, t),
									E = s.structUtils.getIdentVendorPath(e),
									m = await (0, u.getLibzipPromise)(),
									B = new g.d(C, {
										libzip: m,
										create: !0,
										level: t.project.configuration.get('compressionLevel'),
									});
								await B.mkdirpPromise(E),
									await s.miscUtils.releaseAfterUseAsync(async () => {
										await B.copyPromise(E, I.prefixPath, {
											baseFs: I.packageFs,
											stableSort: !0,
										});
									}, I.releaseFs);
								const w = new l.M(c.y1.resolve(c.LZ.root, E), { baseFs: B });
								for (const e of p)
									if (null !== e)
										try {
											await v(y(e), { baseFs: w, version: i });
										} catch (e) {
											if (!(e instanceof f)) throw e;
											const r = t.project.configuration.get(
													'enableInlineHunks'
												),
												n = r ? '' : ' (set enableInlineHunks for details)';
											throw new A.lk(
												o.b.PATCH_HUNK_FAILED,
												e.message + n,
												(n) => {
													r &&
														j(e.hunk, {
															configuration: t.project.configuration,
															report: n,
														});
												}
											);
										}
								return B;
							}
						},
					],
					resolvers: [
						class {
							supportsDescriptor(e, t) {
								return !!e.range.startsWith('patch:');
							}
							supportsLocator(e, t) {
								return !!e.reference.startsWith('patch:');
							}
							shouldPersistResolution(e, t) {
								return !1;
							}
							bindDescriptor(e, t, r) {
								const { patchPaths: n } = F(e);
								return n.every((e) => !U(e))
									? e
									: s.structUtils.bindDescriptor(e, {
											locator: s.structUtils.stringifyLocator(t),
									  });
							}
							getResolutionDependencies(e, t) {
								const { sourceDescriptor: r } = F(e);
								return [r];
							}
							async getCandidates(e, t, r) {
								if (!r.fetchOptions)
									throw new Error(
										'Assertion failed: This resolver cannot be used unless a fetcher is configured'
									);
								const {
										parentLocator: n,
										sourceDescriptor: i,
										patchPaths: A,
									} = F(e),
									o = await T(n, A, r.fetchOptions),
									a = t.get(i.descriptorHash);
								if (void 0 === a)
									throw new Error(
										'Assertion failed: The dependency should have been resolved'
									);
								return [
									x(e, {
										parentLocator: n,
										sourcePackage: a,
										patchPaths: A,
										patchHash: s.hashUtils.makeHash('2', ...o).slice(0, 6),
									}),
								];
							}
							async getSatisfying(e, t, r) {
								return null;
							}
							async resolve(e, t) {
								const { sourceLocator: r } = R(e);
								return { ...(await t.resolver.resolve(r, t)), ...e };
							}
						},
					],
				};
			},
			57436: (e, t, r) => {
				'use strict';
				r.r(t),
					r.d(t, {
						pnpUtils: () => n,
						getPnpPath: () => N,
						quotePathIfNeeded: () => F,
						AbstractPnpInstaller: () => C,
						PnpInstaller: () => y,
						PnpLinker: () => B,
						default: () => R,
					});
				var n = {};
				r.r(n), r.d(n, { getUnpluggedPath: () => I });
				var i = r(27122),
					A = r(46009),
					o = r(56537),
					s = r(53887),
					a = r.n(s),
					c = r(92659),
					g = r(92409),
					l = r(32741),
					u = r(75448),
					h = r(88563),
					p = r(40822),
					f = r(46611),
					d = r(32485);
				class C {
					constructor(e) {
						(this.opts = e),
							(this.packageRegistry = new Map()),
							(this.blacklistedPaths = new Set()),
							(this.opts = e);
					}
					checkAndReportManifestIncompatibility(e, t) {
						return e && !e.isCompatibleWithOS(process.platform)
							? (this.opts.report.reportWarningOnce(
									c.b.INCOMPATIBLE_OS,
									`${l.structUtils.prettyLocator(
										this.opts.project.configuration,
										t
									)} The platform ${
										process.platform
									} is incompatible with this module, ${
										this.opts.skipIncompatiblePackageLinking
											? 'linking'
											: 'building'
									} skipped.`
							  ),
							  !1)
							: !(e && !e.isCompatibleWithCPU(process.arch)) ||
									(this.opts.report.reportWarningOnce(
										c.b.INCOMPATIBLE_CPU,
										`${l.structUtils.prettyLocator(
											this.opts.project.configuration,
											t
										)} The CPU architecture ${
											process.arch
										} is incompatible with this module, ${
											this.opts.skipIncompatiblePackageLinking
												? 'linking'
												: 'building'
										} skipped.`
									),
									!1);
					}
					async installPackage(e, t) {
						const r = l.structUtils.requirableIdent(e),
							n = e.reference,
							i =
								e.peerDependencies.size > 0 &&
								!l.structUtils.isVirtualLocator(e) &&
								!this.opts.project.tryWorkspaceByLocator(e),
							o =
								!i || this.opts.skipIncompatiblePackageLinking
									? await f.G.tryFind(t.prefixPath, { baseFs: t.packageFs })
									: null,
							s = this.checkAndReportManifestIncompatibility(o, e);
						if (this.opts.skipIncompatiblePackageLinking && !s)
							return { packageLocation: null, buildDirective: null };
						const a = i ? [] : await this.getBuildScripts(e, o, t),
							g = this.opts.project.getDependencyMeta(e, e.version);
						a.length > 0 &&
							!this.opts.project.configuration.get('enableScripts') &&
							!g.built &&
							(this.opts.report.reportWarningOnce(
								c.b.DISABLED_BUILD_SCRIPTS,
								l.structUtils.prettyLocator(
									this.opts.project.configuration,
									e
								) +
									' lists build scripts, but all build scripts have been disabled.'
							),
							(a.length = 0)),
							a.length > 0 &&
								e.linkType !== d.U.HARD &&
								!this.opts.project.tryWorkspaceByLocator(e) &&
								(this.opts.report.reportWarningOnce(
									c.b.SOFT_LINK_BUILD,
									l.structUtils.prettyLocator(
										this.opts.project.configuration,
										e
									) +
										" lists build scripts, but is referenced through a soft link. Soft links don't support build scripts, so they'll be ignored."
								),
								(a.length = 0)),
							a.length > 0 &&
								g &&
								!1 === g.built &&
								(this.opts.report.reportInfoOnce(
									c.b.BUILD_DISABLED,
									l.structUtils.prettyLocator(
										this.opts.project.configuration,
										e
									) +
										' lists build scripts, but its build has been explicitly disabled through configuration.'
								),
								(a.length = 0));
						const u =
							i || e.linkType === d.U.SOFT
								? t.packageFs
								: await this.transformPackage(e, o, t, g, {
										hasBuildScripts: a.length > 0,
								  });
						if (A.y1.isAbsolute(t.prefixPath))
							throw new Error(
								`Assertion failed: Expected the prefix path (${t.prefixPath}) to be relative to the parent`
							);
						const h = A.y1.resolve(u.getRealPath(), t.prefixPath),
							p = this.normalizeDirectoryPath(h),
							C = new Map(),
							I = new Set();
						if (l.structUtils.isVirtualLocator(e))
							for (const t of e.peerDependencies.values())
								C.set(l.structUtils.requirableIdent(t), null),
									I.add(l.structUtils.stringifyIdent(t));
						return (
							l.miscUtils
								.getMapWithDefault(this.packageRegistry, r)
								.set(n, {
									packageLocation: p,
									packageDependencies: C,
									packagePeers: I,
									linkType: e.linkType,
									discardFromLookup: t.discardFromLookup || !1,
								}),
							i && this.blacklistedPaths.add(p),
							{
								packageLocation: h,
								buildDirective: a.length > 0 && s ? a : null,
							}
						);
					}
					async attachInternalDependencies(e, t) {
						const r = this.getPackageInformation(e);
						for (const [e, n] of t) {
							const t = l.structUtils.areIdentsEqual(e, n)
								? n.reference
								: [l.structUtils.requirableIdent(n), n.reference];
							r.packageDependencies.set(l.structUtils.requirableIdent(e), t);
						}
					}
					async attachExternalDependents(e, t) {
						for (const r of t) {
							this.getDiskInformation(r).packageDependencies.set(
								l.structUtils.requirableIdent(e),
								e.reference
							);
						}
					}
					async finalizeInstall() {
						this.trimBlacklistedPackages(),
							this.packageRegistry.set(
								null,
								new Map([
									[
										null,
										this.getPackageInformation(
											this.opts.project.topLevelWorkspace.anchoredLocator
										),
									],
								])
							);
						const e = this.opts.project.configuration.get('pnpFallbackMode'),
							t = this.blacklistedPaths,
							r = this.opts.project.workspaces.map(
								({ anchoredLocator: e }) => ({
									name: l.structUtils.requirableIdent(e),
									reference: e.reference,
								})
							),
							n = 'none' !== e,
							i = [],
							A = new Map(),
							o = l.miscUtils.buildIgnorePattern([
								'.yarn/sdks/**',
								...this.opts.project.configuration.get('pnpIgnorePatterns'),
							]),
							s = this.packageRegistry,
							a = this.opts.project.configuration.get('pnpShebang');
						if ('dependencies-only' === e)
							for (const e of this.opts.project.storedPackages.values())
								this.opts.project.tryWorkspaceByLocator(e) &&
									i.push({
										name: l.structUtils.requirableIdent(e),
										reference: e.reference,
									});
						return await this.finalizeInstallWithPnp({
							blacklistedLocations: t,
							dependencyTreeRoots: r,
							enableTopLevelFallback: n,
							fallbackExclusionList: i,
							fallbackPool: A,
							ignorePattern: o,
							packageRegistry: s,
							shebang: a,
						});
					}
					getPackageInformation(e) {
						const t = l.structUtils.requirableIdent(e),
							r = e.reference,
							n = this.packageRegistry.get(t);
						if (!n)
							throw new Error(
								`Assertion failed: The package information store should have been available (for ${l.structUtils.prettyIdent(
									this.opts.project.configuration,
									e
								)})`
							);
						const i = n.get(r);
						if (!i)
							throw new Error(
								`Assertion failed: The package information should have been available (for ${l.structUtils.prettyLocator(
									this.opts.project.configuration,
									e
								)})`
							);
						return i;
					}
					getDiskInformation(e) {
						const t = l.miscUtils.getMapWithDefault(
								this.packageRegistry,
								'@@disk'
							),
							r = this.normalizeDirectoryPath(e);
						return l.miscUtils.getFactoryWithDefault(t, r, () => ({
							packageLocation: r,
							packageDependencies: new Map(),
							packagePeers: new Set(),
							linkType: d.U.SOFT,
							discardFromLookup: !1,
						}));
					}
					trimBlacklistedPackages() {
						for (const e of this.packageRegistry.values())
							for (const [t, r] of e)
								r.packageLocation &&
									this.blacklistedPaths.has(r.packageLocation) &&
									e.delete(t);
					}
					normalizeDirectoryPath(e) {
						let t = A.y1.relative(this.opts.project.cwd, e);
						return (
							t.match(/^\.{0,2}\//) || (t = './' + t), t.replace(/\/?$/, '/')
						);
					}
				}
				function I(e, { configuration: t }) {
					return A.y1.resolve(
						t.get('pnpUnpluggedFolder'),
						l.structUtils.slugifyLocator(e)
					);
				}
				const E = new Set([
						l.structUtils.makeIdent(null, 'nan').identHash,
						l.structUtils.makeIdent(null, 'node-gyp').identHash,
						l.structUtils.makeIdent(null, 'node-pre-gyp').identHash,
						l.structUtils.makeIdent(null, 'node-addon-api').identHash,
						l.structUtils.makeIdent(null, 'fsevents').identHash,
					]),
					m = new Set([
						'.exe',
						'.h',
						'.hh',
						'.hpp',
						'.c',
						'.cc',
						'.cpp',
						'.java',
						'.jar',
						'.node',
					]);
				class B {
					constructor() {
						this.mode = 'strict';
					}
					supportsPackage(e, t) {
						return (
							'pnp' === t.project.configuration.get('nodeLinker') &&
							t.project.configuration.get('pnpMode') === this.mode
						);
					}
					async findPackageLocation(e, t) {
						const r = N(t.project).main;
						if (!o.xfs.existsSync(r))
							throw new p.UsageError(
								`The project in ${t.project.cwd}/package.json doesn't seem to have been installed - running an install there might help`
							);
						const n = l.miscUtils.dynamicRequireNoCache(r),
							i = {
								name: l.structUtils.requirableIdent(e),
								reference: e.reference,
							},
							s = n.getPackageInformation(i);
						if (!s)
							throw new p.UsageError(
								`Couldn't find ${l.structUtils.prettyLocator(
									t.project.configuration,
									e
								)} in the currently installed PnP map - running an install might help`
							);
						return A.cS.toPortablePath(s.packageLocation);
					}
					async findPackageLocator(e, t) {
						const n = N(t.project).main;
						if (!o.xfs.existsSync(n)) return null;
						const i = A.cS.fromPortablePath(n),
							s = l.miscUtils.dynamicRequire(i);
						delete r.c[i];
						const a = s.findPackageLocator(A.cS.fromPortablePath(e));
						return a
							? l.structUtils.makeLocator(
									l.structUtils.parseIdent(a.name),
									a.reference
							  )
							: null;
					}
					makeInstaller(e) {
						return new y(e);
					}
				}
				class y extends C {
					constructor() {
						super(...arguments),
							(this.mode = 'strict'),
							(this.unpluggedPaths = new Set());
					}
					async getBuildScripts(e, t, r) {
						if (null === t) return [];
						const n = [];
						for (const e of ['preinstall', 'install', 'postinstall'])
							t.scripts.has(e) && n.push([g.k.SCRIPT, e]);
						const i = A.y1.join(r.prefixPath, 'binding.gyp');
						return (
							!t.scripts.has('install') &&
								r.packageFs.existsSync(i) &&
								n.push([g.k.SHELLCODE, 'node-gyp rebuild']),
							n
						);
					}
					async transformPackage(e, t, r, n, { hasBuildScripts: i }) {
						return this.isUnplugged(e, t, r, n, { hasBuildScripts: i })
							? this.unplugPackage(e, r.packageFs)
							: r.packageFs;
					}
					async finalizeInstallWithPnp(e) {
						if (this.opts.project.configuration.get('pnpMode') !== this.mode)
							return;
						const t = N(this.opts.project),
							r = this.opts.project.configuration.get('pnpDataPath');
						if (
							(await o.xfs.removePromise(t.other),
							'pnp' !== this.opts.project.configuration.get('nodeLinker'))
						)
							return (
								await o.xfs.removePromise(t.main),
								void (await o.xfs.removePromise(r))
							);
						const n = await this.locateNodeModules(e.ignorePattern);
						if (n.length > 0) {
							this.opts.report.reportWarning(
								c.b.DANGEROUS_NODE_MODULES,
								'One or more node_modules have been detected and will be removed. This operation may take some time.'
							);
							for (const e of n) await o.xfs.removePromise(e);
						}
						if (this.opts.project.configuration.get('pnpEnableInlining')) {
							const n = (0, h.gY)(e);
							await o.xfs.changeFilePromise(t.main, n, {
								automaticNewlines: !0,
							}),
								await o.xfs.chmodPromise(t.main, 493),
								await o.xfs.removePromise(r);
						} else {
							const n = A.y1.relative(A.y1.dirname(t.main), r),
								{ dataFile: i, loaderFile: s } = (0, h.Q$)({
									...e,
									dataLocation: n,
								});
							await o.xfs.changeFilePromise(t.main, s, {
								automaticNewlines: !0,
							}),
								await o.xfs.chmodPromise(t.main, 493),
								await o.xfs.changeFilePromise(r, i, { automaticNewlines: !0 }),
								await o.xfs.chmodPromise(r, 420);
						}
						const i = this.opts.project.configuration.get('pnpUnpluggedFolder');
						if (0 === this.unpluggedPaths.size) await o.xfs.removePromise(i);
						else
							for (const e of await o.xfs.readdirPromise(i)) {
								const t = A.y1.resolve(i, e);
								this.unpluggedPaths.has(t) || (await o.xfs.removePromise(t));
							}
					}
					async locateNodeModules(e) {
						const t = [],
							r = e ? new RegExp(e) : null;
						for (const e of this.opts.project.workspaces) {
							const n = A.y1.join(e.cwd, 'node_modules');
							if (
								(r && r.test(A.y1.relative(this.opts.project.cwd, e.cwd))) ||
								!o.xfs.existsSync(n)
							)
								continue;
							const i = await o.xfs.readdirPromise(n, { withFileTypes: !0 }),
								s = i.filter(
									(e) =>
										!e.isDirectory() ||
										'.bin' === e.name ||
										!e.name.startsWith('.')
								);
							if (s.length === i.length) t.push(n);
							else for (const e of s) t.push(A.y1.join(n, e.name));
						}
						return t;
					}
					async unplugPackage(e, t) {
						const r = I(e, { configuration: this.opts.project.configuration });
						return (
							this.unpluggedPaths.add(r),
							await o.xfs.mkdirPromise(r, { recursive: !0 }),
							await o.xfs.copyPromise(r, A.LZ.dot, {
								baseFs: t,
								overwrite: !1,
							}),
							new u.M(r)
						);
					}
					isUnplugged(e, t, r, n, { hasBuildScripts: i }) {
						return void 0 !== n.unplugged
							? n.unplugged
							: !!E.has(e.identHash) ||
									(null !== t && null !== t.preferUnplugged
										? t.preferUnplugged
										: !(
												!i &&
												!r.packageFs.getExtractHint({ relevantExtensions: m })
										  ));
					}
				}
				var w = r(36370),
					Q = r(95397),
					v = r(40376),
					b = r(28148),
					D = r(15815),
					S = r(2401),
					k = r.n(S);
				class M extends Q.BaseCommand {
					constructor() {
						super(...arguments),
							(this.patterns = []),
							(this.all = !1),
							(this.recursive = !1),
							(this.json = !1);
					}
					async execute() {
						const e = await i.VK.find(this.context.cwd, this.context.plugins),
							{ project: t, workspace: r } = await v.I.find(
								e,
								this.context.cwd
							),
							n = await b.C.find(e);
						if (!r) throw new Q.WorkspaceRequiredError(t.cwd, this.context.cwd);
						if ('pnp' !== e.get('nodeLinker'))
							throw new p.UsageError(
								'This command can only be used if the `nodeLinker` option is set to `pnp`'
							);
						await t.restoreInstallState();
						const A = new Set(this.patterns),
							o = this.patterns.map((t) => {
								const r = l.structUtils.parseDescriptor(t),
									n =
										'unknown' !== r.range
											? r
											: l.structUtils.makeDescriptor(r, '*');
								if (!a().validRange(n.range))
									throw new p.UsageError(
										`The range of the descriptor patterns must be a valid semver range (${l.structUtils.prettyDescriptor(
											e,
											n
										)})`
									);
								return (e) => {
									const r = l.structUtils.stringifyIdent(e);
									return (
										!!k().isMatch(r, l.structUtils.stringifyIdent(n)) &&
										!(e.version && !l.semverUtils.v(e.version, n.range)) &&
										(A.delete(t), !0)
									);
								};
							}),
							s = (e) => {
								const r = new Set(),
									n = [],
									i = (e, A) => {
										if (
											!r.has(e.locatorHash) &&
											(r.add(e.locatorHash),
											!t.tryWorkspaceByLocator(e) &&
												o.some((t) => t(e)) &&
												n.push(e),
											!(A > 0) || this.recursive)
										)
											for (const r of e.dependencies.values()) {
												const e = t.storedResolutions.get(r.descriptorHash);
												if (!e)
													throw new Error(
														'Assertion failed: The resolution should have been registered'
													);
												const n = t.storedPackages.get(e);
												if (!n)
													throw new Error(
														'Assertion failed: The package should have been registered'
													);
												i(n, A + 1);
											}
									};
								for (const r of e) {
									const e = t.storedPackages.get(r.anchoredLocator.locatorHash);
									if (!e)
										throw new Error(
											'Assertion failed: The package should have been registered'
										);
									i(e, 0);
								}
								return n;
							};
						let g, u;
						if (
							(this.all && this.recursive
								? ((g = (() => {
										const e = [];
										for (const r of t.storedPackages.values())
											t.tryWorkspaceByLocator(r) ||
												l.structUtils.isVirtualLocator(r) ||
												!o.some((e) => e(r)) ||
												e.push(r);
										return e;
								  })()),
								  (u = 'the project'))
								: this.all
								? ((g = s(t.workspaces)), (u = 'any workspace'))
								: ((g = s([r])), (u = 'this workspace')),
							A.size > 1)
						)
							throw new p.UsageError(
								`Patterns ${l.formatUtils.prettyList(
									e,
									A,
									l.formatUtils.Type.CODE
								)} don't match any packages referenced by ${u}`
							);
						if (A.size > 0)
							throw new p.UsageError(
								`Pattern ${l.formatUtils.prettyList(
									e,
									A,
									l.formatUtils.Type.CODE
								)} doesn't match any packages referenced by ${u}`
							);
						g = l.miscUtils.sortMap(g, (e) =>
							l.structUtils.stringifyLocator(e)
						);
						return (
							await D.Pk.start(
								{
									configuration: e,
									stdout: this.context.stdout,
									json: this.json,
								},
								async (r) => {
									var i;
									for (const n of g) {
										const A =
											null !== (i = n.version) && void 0 !== i ? i : 'unknown';
										(t.topLevelWorkspace.manifest.ensureDependencyMeta(
											l.structUtils.makeDescriptor(n, A)
										).unplugged = !0),
											r.reportInfo(
												c.b.UNNAMED,
												`Will unpack ${l.structUtils.prettyLocator(
													e,
													n
												)} to ${l.formatUtils.pretty(
													e,
													I(n, { configuration: e }),
													l.formatUtils.Type.PATH
												)}`
											),
											r.reportJson({
												locator: l.structUtils.stringifyLocator(n),
												version: A,
											});
									}
									await t.topLevelWorkspace.persistManifest(),
										r.reportSeparator(),
										await t.install({ cache: n, report: r });
								}
							)
						).exitCode();
					}
				}
				(M.usage = p.Command.Usage({
					description: 'force the unpacking of a list of packages',
					details:
						"\n      This command will add the selectors matching the specified patterns to the list of packages that must be unplugged when installed.\n\n      A package being unplugged means that instead of being referenced directly through its archive, it will be unpacked at install time in the directory configured via `pnpUnpluggedFolder`. Note that unpacking packages this way is generally not recommended because it'll make it harder to store your packages within the repository. However, it's a good approach to quickly and safely debug some packages, and can even sometimes be required depending on the context (for example when the package contains shellscripts).\n\n      Running the command will set a persistent flag inside your top-level `package.json`, in the `dependenciesMeta` field. As such, to undo its effects, you'll need to revert the changes made to the manifest and run `yarn install` to apply the modification.\n\n      By default, only direct dependencies from the current workspace are affected. If `-A,--all` is set, direct dependencies from the entire project are affected. Using the `-R,--recursive` flag will affect transitive dependencies as well as direct ones.\n\n      This command accepts glob patterns inside the scope and name components (not the range). Make sure to escape the patterns to prevent your own shell from trying to expand them.\n    ",
					examples: [
						[
							'Unplug the lodash dependency from the active workspace',
							'yarn unplug lodash',
						],
						[
							'Unplug all instances of lodash referenced by any workspace',
							'yarn unplug lodash -A',
						],
						[
							'Unplug all instances of lodash referenced by the active workspace and its dependencies',
							'yarn unplug lodash -R',
						],
						[
							'Unplug all instances of lodash, anywhere',
							'yarn unplug lodash -AR',
						],
						[
							'Unplug one specific version of lodash',
							'yarn unplug lodash@1.2.3',
						],
						[
							'Unplug all packages with the `@babel` scope',
							"yarn unplug '@babel/*'",
						],
						[
							'Unplug all packages (only for testing, not recommended)',
							"yarn unplug -R '*'",
						],
					],
				})),
					(0, w.gn)([p.Command.Rest()], M.prototype, 'patterns', void 0),
					(0, w.gn)(
						[
							p.Command.Boolean('-A,--all', {
								description:
									'Unplug direct dependencies from the entire project',
							}),
						],
						M.prototype,
						'all',
						void 0
					),
					(0, w.gn)(
						[
							p.Command.Boolean('-R,--recursive', {
								description: 'Unplug both direct and transitive dependencies',
							}),
						],
						M.prototype,
						'recursive',
						void 0
					),
					(0, w.gn)(
						[
							p.Command.Boolean('--json', {
								description: 'Format the output as an NDJSON stream',
							}),
						],
						M.prototype,
						'json',
						void 0
					),
					(0, w.gn)([p.Command.Path('unplug')], M.prototype, 'execute', null);
				const N = (e) => {
						let t, r;
						return (
							'module' === e.topLevelWorkspace.manifest.type
								? ((t = '.pnp.cjs'), (r = '.pnp.js'))
								: ((t = '.pnp.js'), (r = '.pnp.cjs')),
							{ main: A.y1.join(e.cwd, t), other: A.y1.join(e.cwd, r) }
						);
					},
					F = (e) => (/\s/.test(e) ? JSON.stringify(e) : e);
				const R = {
					hooks: {
						populateYarnPaths: async function (e, t) {
							t(N(e).main),
								t(N(e).other),
								t(e.configuration.get('pnpDataPath')),
								t(e.configuration.get('pnpUnpluggedFolder'));
						},
						setupScriptEnvironment: async function (e, t, r) {
							const n = N(e).main,
								i = '--require ' + F(A.cS.fromPortablePath(n));
							if (n.includes(' ') && a().lt(process.versions.node, '12.0.0'))
								throw new Error(
									`Expected the build location to not include spaces when using Node < 12.0.0 (${process.versions.node})`
								);
							if (o.xfs.existsSync(n)) {
								let e = t.NODE_OPTIONS || '';
								const r = /\s*--require\s+\S*\.pnp\.c?js\s*/g;
								(e = e.replace(r, ' ').trim()),
									(e = e ? `${i} ${e}` : i),
									(t.NODE_OPTIONS = e);
							}
						},
					},
					configuration: {
						nodeLinker: {
							description:
								'The linker used for installing Node packages, one of: "pnp", "node-modules"',
							type: i.a2.STRING,
							default: 'pnp',
						},
						pnpMode: {
							description:
								"If 'strict', generates standard PnP maps. If 'loose', merges them with the n_m resolution.",
							type: i.a2.STRING,
							default: 'strict',
						},
						pnpShebang: {
							description: 'String to prepend to the generated PnP script',
							type: i.a2.STRING,
							default: '#!/usr/bin/env node',
						},
						pnpIgnorePatterns: {
							description:
								'Array of glob patterns; files matching them will use the classic resolution',
							type: i.a2.STRING,
							default: [],
							isArray: !0,
						},
						pnpEnableInlining: {
							description:
								'If true, the PnP data will be inlined along with the generated loader',
							type: i.a2.BOOLEAN,
							default: !0,
						},
						pnpFallbackMode: {
							description:
								'If true, the generated PnP loader will follow the top-level fallback rule',
							type: i.a2.STRING,
							default: 'dependencies-only',
						},
						pnpUnpluggedFolder: {
							description: 'Folder where the unplugged packages must be stored',
							type: i.a2.ABSOLUTE_PATH,
							default: './.yarn/unplugged',
						},
						pnpDataPath: {
							description:
								'Path of the file where the PnP data (used by the loader) must be written',
							type: i.a2.ABSOLUTE_PATH,
							default: './.pnp.data.json',
						},
					},
					linkers: [B],
					commands: [M],
				};
			},
			28638: (e, t, r) => {
				'use strict';
				r.r(t);
				var n = r(50683),
					i = r.n(n);
				Object.fromEntries || (Object.fromEntries = i());
				var A = r(59355),
					o = r(91058),
					s = r(45330);
				(0, o.D)({
					binaryVersion: A.o || '<unknown>',
					pluginConfiguration: (0, s.e)(),
				});
			},
			95397: (e, t, r) => {
				'use strict';
				r.r(t),
					r.d(t, {
						BaseCommand: () => n.F,
						WorkspaceRequiredError: () => s,
						getDynamicLibs: () => c,
						getPluginConfiguration: () => g.e,
						openWorkspace: () => u,
						main: () => h.D,
						pluginCommands: () => p.f,
					});
				var n = r(56087),
					i = r(46611),
					A = r(46009),
					o = r(40822);
				class s extends o.UsageError {
					constructor(e, t) {
						super(
							`This command can only be run from within a workspace of your project (${A.y1.relative(
								e,
								t
							)} isn't a workspace of ${A.y1.join(e, i.G.fileName)}).`
						);
					}
				}
				const a = [
						'@yarnpkg/cli',
						'@yarnpkg/core',
						'@yarnpkg/fslib',
						'@yarnpkg/libzip',
						'@yarnpkg/parsers',
						'@yarnpkg/shell',
						'clipanion',
						'semver',
						'yup',
					],
					c = () => new Map(a.map((e) => [e, r(98497)(e)]));
				var g = r(45330),
					l = r(40376);
				async function u(e, t) {
					const { project: r, workspace: n } = await l.I.find(e, t);
					if (!n) throw new s(r.cwd, t);
					return n;
				}
				var h = r(91058),
					p = r(15683);
			},
			91058: (e, t, r) => {
				'use strict';
				r.d(t, { D: () => d });
				var n = r(32741),
					i = r(27122),
					A = r(81832),
					o = r(46009),
					s = r(56537),
					a = r(63129),
					c = r(5864),
					g = r(40822),
					l = r(35747),
					u = r(15683),
					h = r(36370),
					p = r(56087);
				class f extends p.F {
					async execute() {
						const e = await i.VK.find(this.context.cwd, this.context.plugins);
						this.context.stdout.write(
							((e) =>
								`\n${n.formatUtils.pretty(
									e,
									'Welcome on Yarn 2!',
									'bold'
								)} 🎉 Thanks for helping us shape our vision of how projects\nshould be managed going forward.\n\nBeing still in RC, Yarn 2 isn't completely stable yet. Some features might be\nmissing, and some behaviors may have received major overhaul. In case of doubt,\nuse the following URLs to get some insight:\n\n  - The changelog:\n    ${n.formatUtils.pretty(
									e,
									'https://github.com/yarnpkg/berry/tree/CHANGELOG.md',
									'cyan'
								)}\n\n  - Our issue tracker:\n    ${n.formatUtils.pretty(
									e,
									'https://github.com/yarnpkg/berry',
									'cyan'
								)}\n\n  - Our Discord server:\n    ${n.formatUtils.pretty(
									e,
									'https://discord.gg/yarnpkg',
									'cyan'
								)}\n\nWe're hoping you will enjoy the experience. For now, a good start is to run\nthe two following commands:\n\n  ${n.formatUtils.pretty(
									e,
									'find . -name node_modules -prune -exec rm -r {} \\;',
									'magenta'
								)}\n  ${n.formatUtils.pretty(
									e,
									'yarn install',
									'magenta'
								)}\n\nOne last trick! If you need at some point to upgrade Yarn to a nightly build,\nthe following command will install the CLI straight from master:\n\n  ${n.formatUtils.pretty(
									e,
									'yarn set version from sources',
									'magenta'
								)}\n\nSee you later 👋\n`)(e).trim() + '\n'
						);
					}
				}
				async function d({ binaryVersion: e, pluginConfiguration: t }) {
					async function r() {
						const h = new g.Cli({
							binaryLabel: 'Yarn Package Manager',
							binaryName: 'yarn',
							binaryVersion: e,
						});
						h.register(f);
						try {
							await (async function h(p) {
								var f, d, C, I, E;
								const m = process.versions.node;
								if (
									!n.semverUtils.v(m, '>=10.17') &&
									'1' !== process.env.YARN_IGNORE_NODE
								)
									throw new g.UsageError(
										`This tool requires a Node version compatible with >=10.17 (got ${m}). Upgrade Node, or set \`YARN_IGNORE_NODE=1\` in your environment.`
									);
								const B = await i.VK.find(
										o.cS.toPortablePath(process.cwd()),
										t,
										{ usePath: !0, strict: !1 }
									),
									y = B.get('yarnPath'),
									w = B.get('ignorePath'),
									Q = B.get('ignoreCwd');
								if (
									!w &&
									!Q &&
									y === o.cS.toPortablePath(o.cS.resolve(process.argv[1]))
								)
									return (
										(process.env.YARN_IGNORE_PATH = '1'),
										(process.env.YARN_IGNORE_CWD = '1'),
										void (await h(p))
									);
								if (null === y || w) {
									w && delete process.env.YARN_IGNORE_PATH;
									B.get('enableTelemetry') &&
										!c.isCI &&
										process.stdout.isTTY &&
										(i.VK.telemetry = new A.E(
											B,
											'puba9cdc10ec5790a2cf4969dd413a47270'
										)),
										null === (f = i.VK.telemetry) ||
											void 0 === f ||
											f.reportVersion(e);
									for (const [e, t] of B.plugins.entries()) {
										u.f.has(
											null !==
												(C =
													null === (d = e.match(/^@yarnpkg\/plugin-(.*)$/)) ||
													void 0 === d
														? void 0
														: d[1]) && void 0 !== C
												? C
												: ''
										) &&
											(null === (I = i.VK.telemetry) ||
												void 0 === I ||
												I.reportPluginName(e));
										for (const e of t.commands || []) p.register(e);
									}
									const n = p.process(process.argv.slice(2));
									n.help ||
										null === (E = i.VK.telemetry) ||
										void 0 === E ||
										E.reportCommandName(n.path.join(' '));
									const s = n.cwd;
									if (void 0 !== s && !Q) {
										const e = (0, l.realpathSync)(process.cwd()),
											t = (0, l.realpathSync)(s);
										if (e !== t) return process.chdir(s), void (await r());
									}
									await p.runExit(n, {
										cwd: o.cS.toPortablePath(process.cwd()),
										plugins: t,
										quiet: !1,
										stdin: process.stdin,
										stdout: process.stdout,
										stderr: process.stderr,
									});
								} else if (s.xfs.existsSync(y))
									try {
										!(function (e) {
											const t = o.cS.fromPortablePath(e);
											process.on('SIGINT', () => {}),
												t
													? (0, a.execFileSync)(
															process.execPath,
															[t, ...process.argv.slice(2)],
															{
																stdio: 'inherit',
																env: {
																	...process.env,
																	YARN_IGNORE_PATH: '1',
																	YARN_IGNORE_CWD: '1',
																},
															}
													  )
													: (0, a.execFileSync)(t, process.argv.slice(2), {
															stdio: 'inherit',
															env: {
																...process.env,
																YARN_IGNORE_PATH: '1',
																YARN_IGNORE_CWD: '1',
															},
													  });
										})(y);
									} catch (e) {
										process.exitCode = e.code || 1;
									}
								else
									process.stdout.write(
										p.error(
											new Error(
												`The "yarn-path" option has been set (in ${B.sources.get(
													'yarnPath'
												)}), but the specified location doesn't exist (${y}).`
											)
										)
									),
										(process.exitCode = 1);
							})(h);
						} catch (e) {
							process.stdout.write(h.error(e)), (process.exitCode = 1);
						}
					}
					return r()
						.catch((e) => {
							process.stdout.write(e.stack || e.message),
								(process.exitCode = 1);
						})
						.finally(() => s.xfs.rmtempPromise());
				}
				(0, h.gn)([g.Command.Path('--welcome')], f.prototype, 'execute', null);
			},
			15683: (e, t, r) => {
				'use strict';
				r.d(t, { f: () => n });
				const n = new Map([
					[
						'constraints',
						[
							['constraints', 'query'],
							['constraints', 'source'],
							['constraints'],
						],
					],
					['exec', []],
					['interactive-tools', [['search'], ['upgrade-interactive']]],
					['stage', [['stage']]],
					['typescript', []],
					[
						'version',
						[['version', 'apply'], ['version', 'check'], ['version']],
					],
					[
						'workspace-tools',
						[
							['workspaces', 'focus'],
							['workspaces', 'foreach'],
						],
					],
				]);
			},
			56087: (e, t, r) => {
				'use strict';
				r.d(t, { F: () => A });
				var n = r(36370),
					i = r(40822);
				class A extends i.Command {}
				(0, n.gn)(
					[i.Command.String('--cwd', { hidden: !0 })],
					A.prototype,
					'cwd',
					void 0
				);
			},
			28148: (e, t, r) => {
				'use strict';
				r.d(t, { C: () => I });
				var n = r(78420),
					i = r(15037),
					A = r(90739),
					o = r(14626),
					s = r(46009),
					a = r(56537),
					c = r(29486),
					g = r(35747),
					l = r.n(g),
					u = r(92659),
					h = r(35691),
					p = r(20624),
					f = r(73632),
					d = r(54143);
				const C = 7;
				class I {
					constructor(
						e,
						{
							configuration: t,
							immutable: r = t.get('enableImmutableCache'),
							check: n = !1,
						}
					) {
						(this.markedFiles = new Set()),
							(this.mutexes = new Map()),
							(this.configuration = t),
							(this.cwd = e),
							(this.immutable = r),
							(this.check = n);
						const i = t.get('cacheKeyOverride');
						if (null !== i) this.cacheKey = '' + i;
						else {
							const e = t.get('compressionLevel'),
								r = e !== A.k ? 'c' + e : '';
							this.cacheKey = [C, r].join('');
						}
					}
					static async find(e, { immutable: t, check: r } = {}) {
						const n = new I(e.get('cacheFolder'), {
							configuration: e,
							immutable: t,
							check: r,
						});
						return await n.setup(), n;
					}
					get mirrorCwd() {
						if (!this.configuration.get('enableMirror')) return null;
						const e = this.configuration.get('globalFolder') + '/cache';
						return e !== this.cwd ? e : null;
					}
					getVersionFilename(e) {
						return `${d.slugifyLocator(e)}-${this.cacheKey}.zip`;
					}
					getChecksumFilename(e, t) {
						const r = (function (e) {
							const t = e.indexOf('/');
							return -1 !== t ? e.slice(t + 1) : e;
						})(t).slice(0, 10);
						return `${d.slugifyLocator(e)}-${r}.zip`;
					}
					getLocatorPath(e, t) {
						if (null === this.mirrorCwd)
							return s.y1.resolve(this.cwd, this.getVersionFilename(e));
						if (null === t) return null;
						return E(t) !== this.cacheKey
							? null
							: s.y1.resolve(this.cwd, this.getChecksumFilename(e, t));
					}
					getLocatorMirrorPath(e) {
						const t = this.mirrorCwd;
						return null !== t
							? s.y1.resolve(t, this.getVersionFilename(e))
							: null;
					}
					async setup() {
						if (!this.configuration.get('enableGlobalCache')) {
							await a.xfs.mkdirPromise(this.cwd, { recursive: !0 });
							const e = s.y1.resolve(this.cwd, '.gitignore');
							(await a.xfs.existsPromise(e)) ||
								(await a.xfs.writeFilePromise(e, '/.gitignore\n*.lock\n'));
						}
					}
					async fetchPackageFromCache(
						e,
						t,
						{ onHit: r, onMiss: g, loader: C, skipIntegrityCheck: I }
					) {
						const m = this.getLocatorMirrorPath(e),
							B = new n.S(),
							y = async (e, r = null) => {
								const n =
									I && t ? t : `${this.cacheKey}/${await p.checksumFile(e)}`;
								if (null !== r) {
									if (
										n !==
										(I && t ? t : `${this.cacheKey}/${await p.checksumFile(r)}`)
									)
										throw new h.lk(
											u.b.CACHE_CHECKSUM_MISMATCH,
											"The remote archive doesn't match the local checksum - has the local cache been corrupted?"
										);
								}
								if (null !== t && n !== t) {
									let e;
									switch (
										((e = this.check
											? 'throw'
											: E(t) !== E(n)
											? 'update'
											: this.configuration.get('checksumBehavior')),
										e)
									) {
										case 'ignore':
											return t;
										case 'update':
											return n;
										default:
										case 'throw':
											throw new h.lk(
												u.b.CACHE_CHECKSUM_MISMATCH,
												"The remote archive doesn't match the expected checksum"
											);
									}
								}
								return n;
							},
							w = async (t) => {
								if (!C)
									throw new Error(
										'Cache check required but no loader configured for ' +
											d.prettyLocator(this.configuration, e)
									);
								const r = await C(),
									n = r.getRealPath();
								return (
									r.saveAndClose(),
									await a.xfs.chmodPromise(n, 420),
									await y(t, n)
								);
							},
							Q = async () => {
								if (null === m || !(await a.xfs.existsPromise(m))) {
									const e = await C(),
										t = e.getRealPath();
									return e.saveAndClose(), t;
								}
								const t = await a.xfs.mktempPromise(),
									r = s.y1.join(t, this.getVersionFilename(e));
								return (
									await a.xfs.copyFilePromise(
										m,
										r,
										l().constants.COPYFILE_FICLONE
									),
									r
								);
							},
							v = async () => {
								if (!C)
									throw new Error(
										'Cache entry required but missing for ' +
											d.prettyLocator(this.configuration, e)
									);
								if (this.immutable)
									throw new h.lk(
										u.b.IMMUTABLE_CACHE,
										'Cache entry required but missing for ' +
											d.prettyLocator(this.configuration, e)
									);
								const t = await Q();
								await a.xfs.chmodPromise(t, 420);
								const r = await y(t),
									n = this.getLocatorPath(e, r);
								if (!n)
									throw new Error(
										'Assertion failed: Expected the cache path to be available'
									);
								return await this.writeFileWithLock(
									n,
									async () =>
										await this.writeFileWithLock(
											m,
											async () => (
												await a.xfs.movePromise(t, n),
												null !== m &&
													(await a.xfs.copyFilePromise(
														n,
														m,
														l().constants.COPYFILE_FICLONE
													)),
												[n, r]
											)
										)
								);
							};
						for (let t; (t = this.mutexes.get(e.locatorHash)); ) await t;
						const [b, D] = await (async () => {
							const n = (async () => {
								const n = this.getLocatorPath(e, t),
									i = null !== n && (await B.existsPromise(n)),
									A = i ? r : g;
								if ((A && A(), i)) {
									let e = null;
									const t = n;
									return (e = this.check ? await w(t) : await y(t)), [t, e];
								}
								return v();
							})();
							this.mutexes.set(e.locatorHash, n);
							try {
								return await n;
							} finally {
								this.mutexes.delete(e.locatorHash);
							}
						})();
						this.markedFiles.add(b);
						let S = null;
						const k = await (0, c.getLibzipPromise)(),
							M = new i.v(
								() =>
									f.prettifySyncErrors(
										() =>
											(S = new A.d(b, { baseFs: B, libzip: k, readOnly: !0 })),
										(t) =>
											`Failed to open the cache entry for ${d.prettyLocator(
												this.configuration,
												e
											)}: ${t}`
									),
								s.y1
							);
						return [
							new o.K(b, { baseFs: M, pathUtils: s.y1 }),
							() => {
								null !== S && S.discardAndClose();
							},
							D,
						];
					}
					async writeFileWithLock(e, t) {
						return null === e
							? await t()
							: (await a.xfs.mkdirPromise(s.y1.dirname(e), { recursive: !0 }),
							  await a.xfs.lockPromise(e, async () => await t()));
					}
				}
				function E(e) {
					const t = e.indexOf('/');
					return -1 !== t ? e.slice(0, t) : null;
				}
			},
			27122: (e, t, r) => {
				'use strict';
				r.d(t, {
					tr: () => P,
					nh: () => U,
					a2: () => T,
					a5: () => O,
					EW: () => _,
					VK: () => z,
				});
				var n = r(90739),
					i = r(46009),
					A = r(56537),
					o = r(55125),
					s = r(54738),
					a = r.n(s),
					c = r(5864),
					g = r(40822),
					l = r(61578),
					u = r.n(l),
					h = r(53887),
					p = r.n(h),
					f = r(92413),
					d = r(92659),
					C = r(54143);
				const I = {
					hooks: {
						reduceDependency: (
							e,
							t,
							r,
							n,
							{ resolver: i, resolveOptions: A }
						) => {
							for (const { pattern: n, reference: o } of t.topLevelWorkspace
								.manifest.resolutions) {
								if (n.from && n.from.fullName !== C.requirableIdent(r))
									continue;
								if (
									n.from &&
									n.from.description &&
									n.from.description !== r.reference
								)
									continue;
								if (n.descriptor.fullName !== C.requirableIdent(e)) continue;
								if (
									n.descriptor.description &&
									n.descriptor.description !== e.range
								)
									continue;
								return i.bindDescriptor(
									C.makeDescriptor(e, o),
									t.topLevelWorkspace.anchoredLocator,
									A
								);
							}
							return e;
						},
						validateProject: async (e, t) => {
							for (const r of e.workspaces) {
								const n = C.prettyWorkspace(e.configuration, r);
								await e.configuration.triggerHook(
									(e) => e.validateWorkspace,
									r,
									{
										reportWarning: (e, r) => t.reportWarning(e, `${n}: ${r}`),
										reportError: (e, r) => t.reportError(e, `${n}: ${r}`),
									}
								);
							}
						},
						validateWorkspace: async (e, t) => {
							const { manifest: r } = e;
							r.resolutions.length &&
								e.cwd !== e.project.cwd &&
								r.errors.push(new Error('Resolutions field will be ignored'));
							for (const e of r.errors)
								t.reportWarning(d.b.INVALID_MANIFEST, e.message);
						},
					},
				};
				var E = r(46611),
					m = r(35691);
				class B {
					constructor(e) {
						this.fetchers = e;
					}
					supports(e, t) {
						return !!this.tryFetcher(e, t);
					}
					getLocalPath(e, t) {
						return this.getFetcher(e, t).getLocalPath(e, t);
					}
					async fetch(e, t) {
						const r = this.getFetcher(e, t);
						return await r.fetch(e, t);
					}
					tryFetcher(e, t) {
						const r = this.fetchers.find((r) => r.supports(e, t));
						return r || null;
					}
					getFetcher(e, t) {
						const r = this.fetchers.find((r) => r.supports(e, t));
						if (!r)
							throw new m.lk(
								d.b.FETCHER_NOT_FOUND,
								C.prettyLocator(t.project.configuration, e) +
									" isn't supported by any available fetcher"
							);
						return r;
					}
				}
				var y = r(27092),
					w = r(52779),
					Q = r(60895);
				class v {
					static isVirtualDescriptor(e) {
						return !!e.range.startsWith(v.protocol);
					}
					static isVirtualLocator(e) {
						return !!e.reference.startsWith(v.protocol);
					}
					supportsDescriptor(e, t) {
						return v.isVirtualDescriptor(e);
					}
					supportsLocator(e, t) {
						return v.isVirtualLocator(e);
					}
					shouldPersistResolution(e, t) {
						return !1;
					}
					bindDescriptor(e, t, r) {
						throw new Error(
							'Assertion failed: calling "bindDescriptor" on a virtual descriptor is unsupported'
						);
					}
					getResolutionDependencies(e, t) {
						throw new Error(
							'Assertion failed: calling "getResolutionDependencies" on a virtual descriptor is unsupported'
						);
					}
					async getCandidates(e, t, r) {
						throw new Error(
							'Assertion failed: calling "getCandidates" on a virtual descriptor is unsupported'
						);
					}
					async getSatisfying(e, t, r) {
						throw new Error(
							'Assertion failed: calling "getSatisfying" on a virtual descriptor is unsupported'
						);
					}
					async resolve(e, t) {
						throw new Error(
							'Assertion failed: calling "resolve" on a virtual locator is unsupported'
						);
					}
				}
				v.protocol = 'virtual:';
				var b = r(75448),
					D = r(94538);
				class S {
					supports(e) {
						return !!e.reference.startsWith(D.d.protocol);
					}
					getLocalPath(e, t) {
						return this.getWorkspace(e, t).cwd;
					}
					async fetch(e, t) {
						const r = this.getWorkspace(e, t).cwd;
						return {
							packageFs: new b.M(r),
							prefixPath: i.LZ.dot,
							localPath: r,
						};
					}
					getWorkspace(e, t) {
						return t.project.getWorkspaceByCwd(
							e.reference.slice(D.d.protocol.length)
						);
					}
				}
				var k = r(81111),
					M = r(71643),
					N = r(73632),
					F = r(32282),
				}