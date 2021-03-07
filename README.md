# Typescript Node Starter

A simple node.js project starter for typescript using babel, jest and ts-jest.

## Usage

Simply download, run `npm i` and start adding code in `./src`.

Alternatively, do a shallow clone and remove `.git`:

```bash
git clone --depth=1 --branch=master git@github.com:lucascaro/ts-node-starter.git your-project-name
cd your-project-name
rm -rf .git
npm i
```

Or use [degit](https://www.npmjs.com/package/degit):

```bash
npx degit lucascaro/ts-node-starter your-project-name
cd your-project-name
npm i
```

### Compiling

```shell
npm run build
```

Compiles the project using babel. Javascript files will be in `./dist`.

```shell
npm run watch
```

Listens and recompiles the project on src changes.

### Running

```shell
npm start
```

Runs the main script.

```shell
npm link
ts-node-starter-cli
```

Creates a symlink so you can run the project as a cli tool. Change the default binary name in `package.json`.

### Testing

Tests are in `src` inside `./__tests__/` directories.

```shell
npm test
```

Runs all unit tests.
