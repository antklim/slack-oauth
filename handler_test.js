const assert = require('assert')
const sinon = require('sinon')
const handler = require('./handler')

describe('OAuth handler for Slack', function() {

  let sandbox = null

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox.restore()
  })

  describe('main', () => {
    it('should call `_handleAuth` when event type is `auth`', (done) => {
      const stub = sandbox.stub(handler, '_handleAuth')
      stub.callsArg(1) // call callback function from stub

      handler.main({type: 'auth'}, (err) => {
        assert.ifError(err)
        assert(stub.calledOnce)
        assert.deepEqual(stub.args[0][0], {type: 'auth'})
        done()
      })
    })

    it('should return empty callback for any other event types', (done) => {
      handler.main({type: 'test'}, done)
    })
  })

})
