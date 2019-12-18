# React static list of goods

## Demo link
Add link here: `[DEMO LINK](https://vadim-os.github.io/react_dynamic-list-of-goods/)`

## Task
> Load [the goods](https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json) and show them on the page

- Create a component `GoodsList` accepting an array of goods and rendering them inside `<ul>`
- Create a component `Good` accepting a good object and displaying its name using `good.color`
  (for example `style={{ color: 'red' }}`)
- Render 3 buttons loading the goods from server and showing them in the `GoodsList`:
    1. `Load goods` showing all the received `goods`
    1. `Load 5 first goods` showing 5 first `goods` after sorting them by name
    1. `Load red goods` containing only `red` goods
- There should be only one `GoodsList` showing different goods basing on the last clicked button
- There should be a new request to the server on each button click

## Workflow
- Fork the repository with task
- Clone forked repository
    ```bash
    git clone git@github.com:<user_name>/<task_repository>.git
    ```
- Run `npm install` to install dependencies.
- Then develop

## Development mode
- Run `npm start` to start development server on `http://localhost:3000`
    When you run server the command line window will no longer be available for
    writing commands until you stop server (`ctrl + c`). All other commands you
    need to run in new command line window.
- Follow [HTML, CSS styleguide](https://mate-academy.github.io/style-guides/htmlcss.html)
- Follow [the simplified JS styleguide](https://mate-academy.github.io/style-guides/javascript-standard-modified)
- run `npm run lint` to check code style
- When you finished add correct `homepage` to `package.json` and run `npm run deploy`
- Add links to your demo in readme.md.
  - `[DEMO LINK](https://<your_account>.github.io/<repo_name>/)` - this will be a
  link to your index.html
- Commit and push all recent changes.
- Create `Pull Request` from forked repo `(<branch_name>)` to original repo
(`master`).
- Add a link at `PR` to Google Spreadsheets.

## Project structure
- `src/` - directory for css, js, image, fonts files
- `build/` - directory for built pages

You should be writing code in `src/` directory.
