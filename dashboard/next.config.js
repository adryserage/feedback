const { DOCS_URL = "http://localhost:3001/docs" } = process.env;

const navLink = JSON.stringify([
  { label: "Dashboard", url: "/dashboard" },
  { label: "Integration", url: "/integration" },
  { label: "The Form", url: "/form" },
  { label: "Docs", url: "/docs" },
]);

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    title: "Feedback",
    logo: "Feedback",
    navLink,
  },
  async rewrites() {
    return [
      {
        source: "/docs",
        destination: `${DOCS_URL}`,
      },
      {
        source: "/docs/:path*",
        destination: `${DOCS_URL}/:path*`,
      },
      {
        source: "/bee.js",
        destination: "https://cdn.splitbee.io/sb.js",
      },
      {
        source: "/_hive/:slug",
        destination: "https://hive.splitbee.io/:slug",
      },
    ];
  },
};
