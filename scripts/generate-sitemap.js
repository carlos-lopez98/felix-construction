const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { Readable } = require('stream');

async function generateSitemap() {
    const links = [
        { url: '/', changefreq: 'weekly', priority: 1.0 },
        { url: '/services', changefreq: 'monthly', priority: 0.7 },
        // Add more static pages or pull from a CMS/API if dynamic
    ];

    const stream = new SitemapStream({ hostname: 'https://www.felix-construction.com' });
    const xml = await streamToPromise(Readable.from(links).pipe(stream)).then(data => data.toString());

    createWriteStream('./sitemap.xml').write(xml);
}

generateSitemap();
