/**
 * @type {import('next').NextConfig}
 */

const withPWA = require('next-pwa')

module.exports = withPWA({
  dest: 'public',
  swSrc: 'service-worker.js',
  register: false,
  skipWaiting: false,
})