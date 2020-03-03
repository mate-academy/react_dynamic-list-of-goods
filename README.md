# React dynamic list of goods
- Replace `<your_account>` with your Github username in the
 [DEMO LINK](https://YMagrelo.github.io/react_dynamic-list-of-goods/)
- Follow the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline)

## Task
> Load [the goods](https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json) and show them on the page

1. Create a component `GoodsList` accepting an array of goods and rendering them inside a `<ul>`
1. Show `good.name` using a `good.color`(for example `style={{ color: 'red' }}`)
1. Render 3 buttons loading the goods from server and showing them in the `GoodsList`:
    - `Load All goods` showing all the received `goods`
    - `Load 5 first goods` showing 5 first `goods` after sorting them by name
    - `Load red goods` containing only `red` goods
1. There should be only one `GoodsList` showing different goods basing on the last clicked button
1. There should be a new request to the server on each button click
