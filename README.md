## aframe-puzzle-league-component

A Puzzle League component for A-Frame.

For [A-Frame](https://aframe.io).

### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
|          |             |               |

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/1.0.3/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-puzzle-league-component@1.0.0/dist/aframe-puzzle-league-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity puzzle-league="foo: bar"></a-entity>
  </a-scene>
</body>
```

#### npm

Install via npm:

```bash
cd aframe-puzzle-league-component
npm install
```

Then require and use.

```js
require('aframe');
require('aframe-puzzle-league-component');
```

#### yarn

Sometimes, npm has symlink problems on Windows machines. Use yarn instead in combination with PowerShell. Install via [yarn](https://yarnpkg.com/en/docs/install#windows-stable):

```bash
cd aframe-puzzle-league-component
yarn
```

### Run locally

```bash
npm run start
```
```bash
yarn run start
```

Open `localhost:5000`!

### Run tests

Currently runs sample tests in Google Chrome and Mozilla Firefox

```bash
npm test
```
```bash
yarn test
```


Install Plugin 'Karma' in IntelliJ IDEA / Webstorm in order to enable running tests in IDE