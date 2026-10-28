const { PeerServer } = require('peer');

PeerServer({
  port: process.env.PORT || 9000,
  path: '/',
  proxied: true,          // required behind Render/Koyeb's proxy
  allow_discovery: false, // don't expose the list of connected IDs
  alive_timeout: 60000,   // drop dead sessions after 60s so ghost seats clear
  concurrent_limit: 200
});

console.log('PeerServer running');