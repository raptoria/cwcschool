// next.config.js
const withLinaria = require('next-with-linaria');

/** @type {import('next-with-linaria').LinariaConfig} */
const config = {
  experimental: {
    outputFileTracingIncludes: {
      '/api/files': ['./page-content/**/*'],
    },
    appDir: true,
  },
};
module.exports = withLinaria(config);
