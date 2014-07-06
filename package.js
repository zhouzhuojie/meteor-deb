Package.describe({
  summary: "Deb.js for Meteor",
  version: "0.0.1"
});

Package.on_use(function (api) {
  api.add_files('lib/deb/build/deb.min.js', 'client');
  api.add_files('lib/main.js', 'client');
  if (api.export){
    api.export(['deb', 'debc'], 'client');
  }
});
