const fs = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");
const siteUrl = "https://abdulrahmanportfolioweb.netlify.app/"; // :red_circle: Replace with your domain
// List of routes
const routes = [
  "/",
  "/about",
  "/contact",
  "/projects"
];
async function generateSitemap() {
  const stream = new SitemapStream({ hostname: siteUrl });
  routes.forEach((path) => {
    stream.write({
      url: path,
      changefreq: "weekly",
      priority: path === "/" ? 1.0 : 0.7,
    });
  });
  stream.end();
  const sitemapOutput = await streamToPromise(stream).then((data) => data.toString());
  fs.writeFileSync("./public/sitemap.xml", sitemapOutput);
  console.log(":white_check_mark: Sitemap generated at public/sitemap.xml");
}
generateSitemap();












