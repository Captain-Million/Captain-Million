# wms-proj

<a href="https://david-dm.org/wms-proj/wms-proj">
  <img src="https://david-dm.org/wms-proj/wms-proj.svg" alt="Dependency Status">
</a> — stats for `master`.

- **Warehouse management** tool

- **Data exchange** with suppliers

- **Advertising** platform integration

## Development

### CRLF/LF issues on Windows

ESLint settings don't allow CRLF line endings in our code. Use`git config --global core.autocrlf false` to configure Git to keep original LF line endings. Clone again, if necessary.

### Managing dependencies

We should update them one by one. There is **David** cli tool for that. We can use it **without adding** to a project.

- `npm i -g david` installs globally

- `david` in project directory shows a report (for current branch)
