const path = require('path');
const {makeMetroConfig} = require('@rnx-kit/metro-config');
const MetroSymlinksResolver = require('@rnx-kit/metro-resolver-symlinks');

const WORKSPACE_ROOT = path.resolve(__dirname, '..', '..');

module.exports = makeMetroConfig({
  projectRoot: __dirname,
  resolver: {
    resolveRequest: MetroSymlinksResolver(),
  },
  watchFolders: [WORKSPACE_ROOT]
});
