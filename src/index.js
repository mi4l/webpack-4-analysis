import { toUppercase } from './utils';

const getTodoHandlers = () => import('./todo');

(todos => {
  const list = document.createElement('ul');
  const listItemsFragment = document.createDocumentFragment();

  todos.forEach(todo => {
    const li = document.createElement('li');

    li.textContent = toUppercase(todo);
    li.addEventListener('click', e => {
      getTodoHandlers().then(m => {
        m.default.complete(e.target);
      });
    });
    listItemsFragment.appendChild(li);
  });
  
  list.appendChild(listItemsFragment);

  document.getElementsByTagName('body')[0].appendChild(list);
})([
  'Create article about webpack bundles',
  'Create article about hot module replacement'
]);