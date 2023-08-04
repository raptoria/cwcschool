// next.config.js
const withLinaria = require('next-with-linaria');

/** @type {import('next-with-linaria').LinariaConfig} */
const config = {
  output: 'standalone',
  experimental: {
    appDir: true,
  },
};
module.exports = withLinaria(config);
