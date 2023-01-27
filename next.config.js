/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
}

const isGithubActions = process.env.GITHUB_ACTIONS || false


if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  let assetPrefix = '';
  assetPrefix = `/${repo}/`;
  nextConfig =  {
    reactStrictMode: true,
    assetPrefix: assetPrefix,
    images: {
      loader: 'imgix',
      path: 'alejandrojortiz.imgix.net',
    },
  }
  
}

module.exports = nextConfig
