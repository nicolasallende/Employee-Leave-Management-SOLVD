//This lets us implement authentication without external libraries
//Using Node’s built-in crypto module
const crypto = require('crypto');

//This converts binary data or a string into a base64url-encoded string
function base64url(input) {
    const b = Buffer.isBuffer(input) ? input : Buffer.from(String(input));
    return b.toString('base64')
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');
  }
  
//Takes a base64url string (like what’s inside a JWT) and converts it back into binary data
function base64urlDecodeToBuffer(s) {
    s = s.replace(/-/g, '+').replace(/_/g, '/');
    while (s.length % 4) s += '=';
    return Buffer.from(s, 'base64');
 }

// Create HMAC-SHA256 signature (This computes an HMAC (Hash-based Message Authentication Code) using SHA-256). For the token
function hmacSha256(key, msg) {
    return crypto.createHmac('sha256', key).update(msg).digest();
}

module.exports = {base64url, base64urlDecodeToBuffer, hmacSha256 };