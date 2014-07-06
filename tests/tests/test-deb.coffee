assert = require 'assert'

suite 'Deb.js', ->

  test 'Environment Setup', (done, server, client) ->
    client.eval ->
      Meteor.startup ->
        emit 'isDebExist', _.every([
          deb?
          debc?
          Function.deb?
          Function.debc?
          window.deb?
          window.debc?
        ])
    client.once 'isDebExist', (expectTrue) ->
      assert expectTrue
      done()
