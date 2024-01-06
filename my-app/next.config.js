const path = require("path")

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: path.join(__dirname, ".."),
    outputFileTracingExcludes: {
      "*": [
        "@swc/core",
        "webpack",
        "docx",
        "rollup",
        "uglify",
        "terser",
        "caniuse-lite",
        "esbuild",
        "webassemblyjs",
        "sass",
        "postcss",
      ]
    }
  },
}

module.exports = nextConfig
