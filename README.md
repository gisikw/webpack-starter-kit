Webpack Starter Kit
===================

This project is meant to serve as a starting point for creating ES6 web applications with Webpack. It includes basic test setup, coverage instrumentation, a live dev environment, and production minification.

## Getting Started

To get started with this application, you'll want to clone the repository and copy `config.js.example` to `config.js`. Feel free to change the values in that file to suit your tastes. Run a quick `npm install` to install the project dependencies.

## What Can You Do With It?

All of the tasks are set up in the `package.json` file (so feel free to write your own Gulp/Grunt/ShinyNewTaskTool scripts). Here's a summary of what they do:

```
npm test
```

Run the test suite, using Karma, Mocha, and PhantomJS (along with Istanbul for code coverage).

```
npm run test:watch
```

Run the test suite, and continue to run the test suite when any of the files in `src` or `spec` change.

```
npm start
```

Launch the development server, and monitor all `src` files for changes.

```
npm build
```

Compile the application and toss the output into the `dist` folder.
