import { log } from './utils';

const getTodoHandlers = () => import('./todo');

(todos => {
  const list = document.createElement('ul');
  const listItemsFragment = document.createDocumentFragment();

  todos.forEach(todo => {
    // TODO
    // - add event delegation
    // - <li><button>text</button></li>
    const li = document.createElement('li');

    li.textContent = todo;
    li.addEventListener('click', e => {
      getTodoHandlers().then(m => {
        m.default.complete(e.target);

        log(`COMPLETED ITEM: "${e.target.textContent}"`);
      });
    });
    listItemsFragment.appendChild(li);
  });

  list.appendChild(listItemsFragment);

  document
    .getElementsByTagName('body')[0]
    .appendChild(list);
})([
  'Repot succulents',
  'Fill bird feeders',
  'Restring Cordoba'
]);