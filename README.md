# Typescript Node Starter

A simple node.js project starter for typescript.

## Usage

Simply download, run `npm i` and start adding code in `./src`.

### Compiling

```shell
npm run build
```

Compiles the project using tsc. Javascript files will be in `./dist`.

```shell
npm run watch
```

Listens and recompiles the project on src changes.

### Running

```shell
npm start
```

Runs the main command.

```shell
npm link
ts-node-starter-cli
```

Creates a symlink so you can run the project as a cli tool. Change the default binary name in `package.json`.

### Testing

Tests are in the `./test/` directory.

```shell
npm test
```

Runs all unit tests.
