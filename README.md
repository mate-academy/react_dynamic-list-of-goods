# React dynamic list of goods
- Replace `<your_account>` with your Github username in the
 [DEMO LINK](https://<your_account>.github.io/react_dynamic-list-of-goods/)
- Follow the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline)

## Task
> Load [the goods](https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json) and show them on the page

- Create a component `GoodsList` accepting an array of goods and rendering them inside `<ul>`
- Create a component `Good` accepting a `good` object and displaying its name using `good.color`
  (for example `style={{ color: 'red' }}`)
- Render 3 buttons loading the goods from server and showing them in the `GoodsList`:
    1. `Load goods` showing all the received `goods`
    1. `Load 5 first goods` showing 5 first `goods` after sorting them by name
    1. `Load red goods` containing only `red` goods
- There should be only one `GoodsList` showing different goods basing on the last clicked button
- There should be a new request to the server on each button click
