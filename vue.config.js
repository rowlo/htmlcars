module.exports = {
  baseUrl: '/htmlcars/',
  outputDir: 'docs',
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/assets/sass/lcars.scss";'
      }
    }
  }
}
