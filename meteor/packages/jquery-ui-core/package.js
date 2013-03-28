Package.describe({
  summary: "AnimateColors - Color animation jQuery-plugin"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files([
    'lib/jquery.ui.core.js'
  ], 'client'
  );
});
