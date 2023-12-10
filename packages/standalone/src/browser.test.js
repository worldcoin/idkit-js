import puppeteer from 'puppeteer'

void (async () => {
	const browser = await puppeteer.launch({ headless: 'new' })
	const page = await browser.newPage()

	const htmlContent = `
	<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>Test</title>
	</head>
	<body>
		<script src="http://localhost:8080/index.global.js"></script>

		<script>
		window.addEventListener("load", (event) => {
			IDKit.init({
				app_id: 'app_12345678',
				action: 'my_action',
				onSuccess: () => {},
			})
		});
		</script>
		<button onclick="IDKit.open()" id="btn-main">Click me</button>
	</body>
</html>

	`

	page.on('console', msg => {
		if (msg.type() === 'error') {
			console.error(msg.text())
			process.exit(1)
		}
	})

	page.on('pageerror', e => {
		console.error('Page error:', e)
		process.exit(1)
	})

	await page.goto('file:///dev/null')

	await page.setContent(htmlContent, {
		waitUntil: 'domcontentloaded',
	})

	await page.click('#btn-main')

	await page.waitForSelector('#idkit-widget')

	process.exit(0)
})()
