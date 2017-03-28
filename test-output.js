const parse = require('./')

const html = require('fs').readFileSync('./test-fixtures/videos-page.html')

const output = parse(html)

console.log(output.filter(item => !item.imageUrl))

// console.log(JSON.stringify(output, null, '\t'))
