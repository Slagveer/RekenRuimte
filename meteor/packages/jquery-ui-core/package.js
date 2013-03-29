Package.describe({
  summary: "jQueryUICore - jQuery UI is a curated set of user interface interactions, effects, widgets, and themes built on top of the jQuery JavaScript Library"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files([
    'lib/jquery.ui.core.js'
  ], 'client'
  );
});
