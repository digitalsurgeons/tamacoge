var dedent = require('dedent')

function tamacoge (selector, eventType, payload) {
  var output = dedent`
    dataLayer = window.dataLayer || []
    var el = document.querySelector('${selector}')
    el.addEventListener('${eventType}', function () {
      dataLayer.push(${JSON.stringify(payload)})
    })
  `

  return output
}

module.exports = tamacoge
