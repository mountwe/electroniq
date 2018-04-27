var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var handlebars = require('handlebars');

metalsmith(__dirname)
  .metadata({
    site: {
      name: 'Electroniq',
      description: "Electroniq is astrophysicist (and retro music enthusiast) Tara Himmels' blog."
    }
  })
  .source('./src')
  .destination('./public')
  .use(markdown())
  .use(layouts({
      engine: 'handlebars',
      directory: './layouts',
      default: 'article.html',
      pattern: ["*/*/*html","*/*html","*html"]
  }))
  .build(function (err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log('Electroniq built!');
    }
  });