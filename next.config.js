/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
}

const isGithubActions = process.env.GITHUB_ACTIONS || false


if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  nextConfig =  {
    reactStrictMode: true,
    images: {
      unoptimized: true
    }
  }
  
}

module.exports = nextConfig
