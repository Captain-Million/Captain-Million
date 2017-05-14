# Captain-Million/Captain-Million

<a href="https://david-dm.org/Captain-Million/Captain-Million">
  <img src="https://david-dm.org/Captain-Million/Captain-Million.svg" alt="Dependency Status">
</a> — stats for `master`.

- **Warehouse management** tool

- **Data exchange** with suppliers

- **Advertising** platform integration

## Development

### Installation

- MongoDB should be installed and running.
- `npm i` installs dependencies, as usual.

### Scripts

#### Basic Scripts

- `npm run reset-database` creates and populates a `wms` database.
- `npm run test` performs tests
- `npm start` cleans dist (necessary) and runs dev-server with **nodemon**
- `npm run st` cleans dist (necessary) and runs dev-server without **nodemon**, rebuilding only frontend.
- `npm run start:prod` starts in production

#### Additional Scripts

- `npm run watch:test` performs tests + watches for changes
- `npm run lint` performs linting
- `npm run clean` cleans build folder
- `npm run slate` reinstalls dependencies

#### TODO: needs to be definitely documented

- `npm run cover` nyc npm run test
  - run tests once with coverage report
- `npm run check-coverage` nyc check-coverage --statements 100 --branches 100 --functions 100 --lines 100
  - check for 100% coverage in the last test
- `npm run bs` npm run clean && npm run build && npm run build:server && npm run start:prod
  - clear the previous build, build the latest version of the app and start the production server
- `npm run build` cross-env NODE_ENV=production webpack --config webpack.config.prod.js
  - build the client side code for production
- `npm run build:server`cross-env NODE_ENV=production webpack --config webpack.config.server.js
  - build the server side code for production
- `npm run postinstall` npm run update-schema
  - update/create graphQL schema after install
- `npm run update-schema` cross-env NODE_ENV=development node update-schema.js
  - generate graphQL schema that will be used by Relay. This should be run after installation/ changes to graphQL schema
- `npm run heroku-postbuild` npm run clean && npm run build && npm run build:server
  - This is invoked automatically by heroku after a successful deployment

### Known dev issues

#### CRLF/LF issues on Windows

ESLint settings don't allow CRLF line endings in our code. Use`git config --global core.autocrlf false` to configure Git to keep original LF line endings. Clone again, if necessary.

### Managing dependencies

We should update them one by one. There is **David** cli tool for that. We can use it **without adding** to a project.

- `npm i -g david` installs globally
- `david` in project directory shows a report (for current branch)
