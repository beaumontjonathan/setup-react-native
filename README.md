# setup-react-native
A React Native monorepo playground

## frontend/mobile-app

### Step 1

Follow [this guide](https://runreactnative.dev/posts/pnpm-react-native) to setting up a React Native project with `pnpm`


- Initialize from a template
  - `npx react-native init ListSync --template react-native-template-typescript`
- Delete stuff
  - `git init`
  - `git add . && git commit -m 'initial commit'`
  - `git clean -xfd`
  - `rm yarn.lock`
  - `rm -rf .git`
- (Extra) Setup pnpm workspaces
  - Create `pnpm-workspaces.yml`
  - Create root `package.json` with only `{ "private": true }`
  - Rename initialized `package.json#name` to sensible `@listsync/mobile-app`
  - `pnpm i`
- Build iOS
  - `pnpx pod-install`
  - `pnpm install @react-native-community/cli-platform-ios @react-native-community/cli-platform-android`
  - `pnpx pod-install`
  - `npm install @rnx-kit/metro-config @rnx-kit/metro-resolver-symlinks`
  - Update `metro.config.js` to
    ```js
    const {makeMetroConfig} = require('@rnx-kit/metro-config');
    const MetroSymlinksResolver = require('@rnx-kit/metro-resolver-symlinks');

    module.exports = makeMetroConfig({
      projectRoot: __dirname,
      resolver: {
        resolveRequest: MetroSymlinksResolver(),
      },
    });
    ```
  - (Extra) Install `@babel/runtime`
  - Update `metro.config.js` to include `watchFolders: [path.resolve(__dirname, '..', '..')]`
- Android
  - `pnpm install react-native-gradle-plugin jsc-android`
  - (Extra) This didn't work, so also install `@react-native/gradle-plugin`
