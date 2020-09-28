import calculate from './parser.js';

(() => {
  document.getElementById.addEventListener('click', () => {
    calculate(document
      .getElementById('CalculationInput')
      .value
    );
  });
})();