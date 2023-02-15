1. [CODE KNOWLEDGE] - Make sure that you add some rendering optimization techniques (`React.memo` and so on.)
2. [CODE KNOWLEDGE] - When you rendering a list, don't forget to add `key` prop
3. [API] - When you make a request to the server, you must catch errors

BAD EXAMPLE:
```jsx
<div>
  {cats.map(cat => <Cat cat={cat} />)}
</div>
```

GOOD EXAMPLE:
```jsx
<div>
  {cats.map(cat => <Cat key={cat.id} cat={cat} />)}
</div>
```
