/* eslint-env jest */

var dot = require("dot-event")()
var fetch = require("./")

beforeEach(function() {
  dot.reset()
  fetch(dot)
})

test("fetch", function(done) {
  var url =
    "https://morgue.stage.inverse.com/videos?sort=-publish_at"

  dot
    .fetch({
      json: true,
      url: url,
    })
    .then(function(out) {
      expect(out.body).toEqual(expect.any(Object))
      expect(out.ok).toBe(true)
      expect(out.status).toBe(200)
      expect(out.url).toBe(url)
      done()
    })
})
