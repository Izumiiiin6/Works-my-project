// 入力欄を取得する
const value1Input = document.getElementById('value1');
const value2Input = document.getElementById('value2');
const operatorSelect = document.getElementById('operator');
const resultArea = document.getElementById('result');
// 値が変わるたびに計算する関数を呼び出す
value1Input.addEventListener('input', calculate);
value2Input.addEventListener('input', calculate);
operatorSelect.addEventListener('change', calculate);
// 計算する関数
function calculate() {
  const val1 = value1Input.value;
  const val2 = value2Input.value;
  const op = operatorSelect.value;
// ① 値が入力されていない場合
if (val1 === '' || val2 === '') {
  resultArea.textContent = '両方の数値を入力してください';
  return;
}
if (op === '') {
  resultArea.textContent = '演算子を選択してください';
  return;
}
  const num1 = parseFloat(val1);
  const num2 = parseFloat(val2);
  // ② 割り算で0の場合
  if (op === '/' && num2 === 0) {
    resultArea.textContent = '0で割る事はできません。';
    return;
  }
  // ③ 計算する
  let answer;
  if (op === '+') answer = num1 + num2;
  if (op === '-') answer = num1 - num2;
  if (op === '*') answer = num1 * num2;
  if (op === '/') answer = num1 / num2;
  // ④ 計算式と結果を表示
  const opLabel = { '+': '+', '-': '-', '*': '×', '/': '÷' };
  resultArea.textContent = `${num1} ${opLabel[op]} ${num2} = ${answer}`;