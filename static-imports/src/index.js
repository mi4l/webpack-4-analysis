import { listItemTemplate } from './renderUtils';
import { complete } from './todo';

(todos => {
  const list = document.createElement('ul');

  list.innerHTML = todos.reduce(
    (html, todo) => html + listItemTemplate(todo),
    ''
  );
  
  list.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
      complete(e.target);
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