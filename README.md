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

#### Primary Scripts

- `npm run reset-database` creates and populates a `wms` database.
- `npm start` cleans dist (necessary) and runs dev-server with **nodemon**
- `npm run bs` clear the previous build, build the latest version of the app and start the production server

#### Secondary Scripts

- `npm run update-schema` generate graphQL schema that will be used by Relay. This should be run after installation/ changes to graphQL schema
- `npm run st` cleans dist (necessary) and runs dev-server without **nodemon**, rebuilding only frontend.
- `npm run test` performs tests
- `npm run watch:test` performs tests + watches for changes
- `npm run cover` run tests once with coverage report
- `npm run check-coverage` check for 100% coverage in the last test
- `npm run lint` performs linting

#### Auxilary Scripts

- `npm run clean` cleans build folder
- `npm run postinstall` update/create graphQL schema after install
- `npm run heroku-postbuild` This is invoked automatically by heroku after a successful deployment
- `npm run build` build the client side code for production
- `npm run build:server` build the server side code for production
- `npm run start:prod` starts in production

### Known dev issues

#### CRLF/LF issues on Windows

ESLint settings don't allow CRLF line endings in our code. Use`git config --global core.autocrlf false` to configure Git to keep original LF line endings. Clone again, if necessary.

### Managing dependencies

We should update them one by one. There is **David** cli tool for that. We can use it **without adding** to a project.

- `npm i -g david` installs globally
- `david` in project directory shows a report (for current branch)
