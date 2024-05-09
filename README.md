# React dynamic list of goods

> Here is [the working page](https://mate-academy.github.io/react_dynamic-list-of-goods/)

You have 3 button that should load [the goods](https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json) and show them on the page using the `GoodsList`.

1. `Load All goods` should load and show all the `goods`;
1. `Load 5 first goods` should do the next:
    - load all the goods;
    - sort them by name;
    - and show the first 5;
1. `Load red goods` should load all the goods show only `red` ones;
1. Server has only 1 endpoint returning all the goods, so you should do all the preparations in corresponding methods in `/api/goods`.
1. `GoodsList` is almost finished, you just need to use corresponding colors for `li`s;

## Instructions
- Install Prettier Extention and use this [VSCode settings](https://mate-academy.github.io/fe-program/tools/vscode/settings.json) to enable format on save.
- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Use the [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://<your_account>.github.io/react_dynamic-list-of-goods/) and add it to the PR description.

1. «Загрузить все товары» должен загрузить и показать все «товары»;
1. «Загрузить 5 первых товаров» должно сделать следующее:
     - загрузить весь товар;
     - сортировать их по имени;
     - и покажи первые 5;
1. «Загрузить красные товары» должно загружать все товары, показывать только «красные»;
1. Сервер имеет только одну конечную точку, возвращающую все товары, поэтому всю подготовку следует выполнить в соответствующих методах в `/api/goods`.
1. `GoodsList` почти готов, вам просто нужно использовать соответствующие цвета для `li`;
