Package.describe({
  summary: "Deb.js for Meteor, ~1.5K minimalistic JavaScript library for debugging in the browser",
  version: "0.1.0",
  git: "https://github.com/zhouzhuojie/meteor-deb.git",
  name: "mrt:deb"
});

Package.on_use(function (api) {
  api.add_files('lib/deb/build/deb.min.js', 'client');
  api.add_files('lib/main.js', 'client');
  if (api.export){
    api.export(['deb', 'debc'], 'client');
  }
});

if (Package.on_test) {
  Package.on_test(function (api) {
    if (Package.onTest) {
      api.use(['mrt:deb@0.1.0', 'tinytest', 'test-helpers'], ['client']);
    } else {
      api.use(['deb', 'tinytest', 'test-helpers'], ['client']);
    }
    api.add_files('test-mrt:deb.js', ['client']);
  });
}
