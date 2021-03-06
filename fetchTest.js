/* eslint-env jest */

var dot,
  fetch = require("./"),
  log = require("@dot-event/log"),
  store = require("@dot-event/store")

var url = "https://jsonplaceholder.typicode.com/todos/1"

beforeEach(function() {
  dot = require("dot-event")()
  fetch(dot)
  log(dot)
})

test("fetch", function() {
  return dot
    .fetch({
      json: true,
      url: url,
    })
    .then(function(out) {
      expect(out.body).toEqual(expect.any(Object))
      expect(out.ok).toBe(true)
      expect(out.status).toBe(200)
      expect(out.url).toBe(url)
    })
})

test("fetch and store", function() {
  expect.assertions(1)

  store(dot)

  return dot
    .fetch("todos", {
      json: true,
      store: true,
      url: url,
    })
    .then(function() {
      expect(dot.get("todos")).toEqual(expect.any(Object))
    })
})

test("fetch error", function() {
  expect.assertions(1)

  return dot
    .fetch("todos", {
      json: true,
      store: true,
      url: "http://does-no-exist",
    })
    .catch(function() {
      expect(true).toBe(true)
    })
})
