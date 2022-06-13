# React dynamic list of goods
- Replace `<your_account>` with your Github username in the
 [DEMO LINK](https://DenCoderok.github.io/react_dynamic-list-of-goods/)
- Follow the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline)
- Use [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript)

## Task
> Load [the goods](https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json) and show them on the page

1. Render 3 buttons loading the goods from server and saving them in the state:
    - `Load All goods` shows all the received `goods`
    - `Load 5 first goods` shows 5 first `goods` after sorting them by name
    - `Load red goods` containing only `red` goods
1. Server has only 1 endpoint returning all the goods, so you should prepare them after receiving.
1. Create a component `GoodsList` accepting an array of goods and rendering them inside a `<ul>`
1. Print a `name` of each `good` using `good.color`(for example `style={{ color: 'red' }}`)
1. There should be a new request to the server on each button click.
1. `GoodsList` should show the last loaded goods.

REQUIREMENTS:
1. The button for choosing all goods should have inside text `all`
2. The button for choosing 5 goods should have inside text `5`
3. The button for choosing red goods should have inside text `red`

