// 入力欄と演算子を取得
const value1Input = document.getElementById('value1');
const value2Input = document.getElementById('value2');
const operatorSelect = document.getElementById('operator');
const resultP = document.getElementById('result');
// 値が変わるたびに計算する
value1Input.addEventListener('input', calculate);
value2Input.addEventListener('input', calculate);
operatorSelect.addEventListener('change', calculate);
function calculate() {
  const num1 = value1Input.value;
  const num2 = value2Input.value;
  const operator = operatorSelect.value;
  // ① 値が入力されていない場合
  if (num1 === '' || num2 === '') {
    resultP.textContent = '両方の数値を入力してください';
    return;
  }
  // 数値に変換
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);
  // ② 割り算で0の場合
  if (operator === '/' && n2 === 0) {
    resultP.textContent = '0で割る事はできません。';
    return;
  }
  // ③ 計算する
  let answer;
  if (operator === '+') answer = n1 + n2;
  if (operator === '-') answer = n1 - n2;
  if (operator === '*') answer = n1 * n2;
  if (operator === '/') answer = n1 / n2;
  // ④ 計算式と結果を表示
  resultP.textContent = `${n1} ${operator} ${n2} = ${answer}`;
}
