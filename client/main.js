const firstInput = getNode('#firstNumber');
const secondInput = getNode('#secondNumber');
const submit = getNode('#done');
const result = getNode('.result')


function getInputValue(node) {
  if(typeof node === 'string') node = getNode(node);
  if(node.tagName !== 'INPUT') refError('getInputValue 함수는 input Element만 허용합니다.');
  return node.value;
}

const sum = (valueA, valueB) => valueA + valueB;

function clearContents(node) {
  if(typeof node === 'string') node = getNode(node);
  node.textContent = '';
}

function renderCalculator() {
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue);
  clearContents(result);
  insertLast(result, total);
}

function handler(e) {
  e.preventDefault();
  renderCalculator();
}

function inputHandler() {
  renderCalculator();
}

submit.addEventListener('click', handler);
firstInput.addEventListener('change', inputHandler);
secondInput.addEventListener('change', inputHandler);