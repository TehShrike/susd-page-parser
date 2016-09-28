const parse = require('./')

const html = require('fs').readFileSync('./test-fixtures/games-page.html')

const output = parse(html)

console.log(output)
