var bignum = require('bignum')


var xor = function(buf, buf2){
  return bignum.fromBuffer(buf).xor(bignum.fromBuffer(buf2)).toBuffer()
}

var xorRepeating = function(buf, key){//buffer, string
  var keyrep = Array((buf.toString().length / key.length) + 1).join(key)
  return xor(buf, new Buffer(keyrep))
}


module.exports = xor
module.exports.repeating = xorRepeating
