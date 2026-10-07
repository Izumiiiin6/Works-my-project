// 入力要素を取得
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operatorSelect = document.getElementById('operator');
const resultP = document.getElementById('result');
// 計算を行う関数
function calculate() {
  const num1 = num1Input.value;
  const num2 = num2Input.value;
  const operator = operatorSelect.value;
  // 値が入力されていない場合
  if (num1 === '' || num2 === '') {
    resultP.textContent = '両方の数値を入力してください';
    return;
  }
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);
  let result;
  // 演算子によって計算を分岐
  if (operator === '+') {
    result = n1 + n2;
  } else if (operator === '-') {
    result = n1 - n2;
  } else if (operator === '*') {
    result = n1 * n2;
  } else if (operator === '/') {
    // 0で割る場合
    if (n2 === 0) {
      resultP.textContent = '0で割る事はできません。';
      return;
    }
    result = n1 / n2;
  }
  // 計算式と結果を表示
  resultP.textContent = n1 + ' ' + operator + ' ' + n2 + ' = ' + result;
}
// 値が変わるたびに計算を実行（動的に変化）
num1Input.addEventListener('input', calculate);
num2Input.addEventListener('input', calculate);
operatorSelect.addEventListener('change', calculate);
