import esbuild from 'esbuild'
import { createRequire } from 'node:module'
import { createServer, request } from 'http'
const require = createRequire(import.meta.url)

import config from './config.js'

const clients = []
const PORT = 3000

esbuild
	.build({
		...config,

		entryPoints: [require.resolve('../src/vanilla.tsx')],
		banner: { js: '(() => new EventSource("/esbuild").onmessage = () => location.reload())();' },
		outfile: 'build/idkit-js-dev.js',
		sourcemap: 'inline',
		watch: {
			onRebuild(error) {
				clients.forEach(response => response.write('data: update\n\n'))
				clients.length = 0

				if (error) {
					console.log(error)
				}
			},
		},
	})
	.catch(() => process.exit(1))

esbuild.serve({ servedir: './' }, {}).then(() => {
	createServer((serverRequest, serverResponse) => {
		const { url, method, headers } = serverRequest

		if (serverRequest.url === '/esbuild') {
			return clients.push(
				serverResponse.writeHead(200, {
					'Cache-Control': 'no-cache',
					Connection: 'keep-alive',
					'Content-Type': 'text/event-stream',
				})
			)
		}

		serverRequest.pipe(
			request(
				{
					headers,
					hostname: '0.0.0.0',
					method,
					path: ~url.split('/').pop().indexOf('.') ? url : '/src/index.html',
					port: 8000,
				},
				proxyResponse => {
					serverResponse.writeHead(proxyResponse.statusCode, proxyResponse.headers)
					proxyResponse.pipe(serverResponse, { end: true })
				}
			),
			{ end: true }
		)
	}).listen(PORT)

	console.log(`Server started at: http://localhost:${PORT}`)
})
