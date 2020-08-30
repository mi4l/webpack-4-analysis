import { log } from './utils';

const getTodoHandlers = () => import('./todo');
const listItemTemplate = text => `<li><button>${text}</button></li>`;

(todos => {
  const list = document.createElement('ul');

  list.innerHTML = todos.reduce(
    (html, todo) => html + listItemTemplate(todo),
    ''
  );
  list.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
      getTodoHandlers().then(m => {
        m.default.complete(e.target);
      });
    }
  });

  document
    .getElementsByTagName('body')[0]
    .appendChild(list);
})([
  'Repot plants',
  'Fill bird feeders',
  'Restring guitar'
]);