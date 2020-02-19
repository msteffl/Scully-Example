exports.config = {
  projectRoot: "./src",
  projectName: "test-scully",
  outDir: './dist/static',
  routes: {
    '/docs/:docid': {
      type: 'contentFolder',
      docid: {
        folder: "./docs"
      }
    },
  }
};