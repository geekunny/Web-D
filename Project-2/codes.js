i = 2;
ans = '';
op = '';
document.querySelector('.button-container').addEventListener('click', function (event) {
  function plus(a, b) {
    return a + b;
  }
  function minus(a, b) {
    return a - b;
  }
  function multiply(a, b) {
    return a * b;
  }
  function divide(a, b) {
    return a / b;
  }
  const answer = document.querySelector('.answer');
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  if (event.target.innerText in numbers) {
    ans += event.target.innerText;
    answer.innerText = ans;
  }
  else if (event.target.innerText == '+') {
    a = parseInt(ans);
    ans = '';
    answer.innerText = '0';
    op = '+';
  }
  else if (event.target.innerText == '-') {
    a = parseInt(ans);
    ans = ''; 
    answer.innerText = '0';
    op = '-';
  }
  else if (event.target.innerText == 'x') {
    a = parseInt(ans);
    ans = '';
    answer.innerText = '0';
    op = 'x';
  }
  else if (event.target.innerText == '÷') {
    a = parseInt(ans);
    ans = '';
    answer.innerText = '0';
    op = '÷';
  }
  else if (event.target.innerText == '=') {
    b = parseInt(ans);
    if (op == '+')
      answer.innerText = plus(a, b);
    if (op == '-')
      answer.innerText = minus(a, b);
    if (op == 'x')
      answer.innerText = multiply(a, b);
    if (op == '÷')
      answer.innerText = divide(a, b);
    ans = '';
  }
  if (event.target.innerText == 'C') {
    ans = '';
    answer.innerText = '0';
  }
});
