// next.config.js
const withLinaria = require('next-with-linaria');

/** @type {import('next-with-linaria').LinariaConfig} */
const config = {
  output: 'standalone'
};
module.exports = withLinaria(config);
