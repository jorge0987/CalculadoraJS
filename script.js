let result = document.getElementById('result');

function displayNum(num) {
  result.value += num;
}

function displayOperator(operator) {
  result.value += operator;
}

function clearResult() {
  result.value = '';
}

function calculateResult() {
  result.value = eval(result.value);
}
