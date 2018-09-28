var test = require('tape')
var dedent = require('dedent')

var tamacoge = require('./')

test('basic', function (t) {
  t.plan(1)
  var actual = tamacoge('main > section .btn', 'click', {'event': 'click'})

  var expected = dedent`
    dataLayer = window.dataLayer || []
    var el = document.querySelector('main > section .btn')
    el.addEventListener('click', function () {
      dataLayer.push({"event":"click"})
    })
  `

  t.same(actual, expected)
})
