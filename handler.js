'use strict'

const debug = (...args) => (process.env.DEBUG) ? console.log.apply(null, args) : null
const error = (...args) => (process.env.ERROR) ? console.error.apply(null, args) : null

exports.main = (data, cb) => {
  switch (data.type) {
    case 'auth':
      exports._handleAuth(data, cb)
      break
    default:
      cb()
      break
  }
}

exports._handleAuth = (data, cb) => {
  // TODO: implement
  cb()
}
