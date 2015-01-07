Package.describe({
    summary: "Deb.js for Meteor, ~1.5K minimalistic JavaScript library for debugging in the browser",
    version: "0.1.1",
    git: "https://github.com/zhouzhuojie/meteor-deb.git",
    name: "mrt:deb"
});

Package.onUse(function (api) {
    api.versionsFrom('1.0');
    api.add_files('lib/deb/build/deb.min.js', 'client');
    api.add_files('lib/main.js', 'client');
    api.export(['deb', 'debc'], 'client');
});

Package.onTest(function (api) {
    api.use(['mrt:deb', 'tinytest'], ['client']);
    api.add_files('test-mrt:deb.js', ['client']);
});
