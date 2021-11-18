# React dynamic list of goods
- Replace `<your_account>` with your Github username in the
 [DEMO LINK](https://misharosa.github.io/react_dynamic-list-of-goods/)
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

## Завдання
> Завантажте [товари](https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json) і покажіть їх на сторінці

1. Відобразити 3 кнопки завантаження товарів із сервера та збереження їх у стані:
  - «Завантажити всі товари» показує весь отриманий «товар».
  - "Завантажити 5 перших товарів" показує 5 перших "товарів" після сортування за назвою
  - `Завантажити червоні товари`, що містять лише `червоні` товари
1. Сервер має лише 1 кінцеву точку, яка повертає всі товари, тому ви повинні підготувати їх після отримання.
2. Створіть компонент `GoodsList`, який приймає масив товарів і відображає їх всередині `<ul>`
3. Надрукуйте "ім'я" кожного "доброго" за допомогою `good.color` (наприклад, `style={{ color: 'red' }}`)
4. При кожному натисканні кнопки має бути новий запит до сервера.
5. "Список товарів" має показувати останні завантажені товари.
