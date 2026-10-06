// HTML要素の取得
const value1Input = document.getElementById("value1");
const value2Input = document.getElementById("value2");
const operatorSelect = document.getElementById("operator");
const formulaArea = document.getElementById("formula");
const resultArea = document.getElementById("result");

// イベントリスナーの登録（値変更時に動的実行）
if (value1Input) value1Input.addEventListener("input", calculate);
if (value2Input) value2Input.addEventListener("input", calculate);
if (operatorSelect) operatorSelect.addEventListener("change", calculate);

// 初期表示実行
calculate();

function calculate() {
  if (!value1Input || !value2Input || !operatorSelect || !resultArea) return;

  const val1Str = value1Input.value.trim();
  const val2Str = value2Input.value.trim();
  const operator = operatorSelect.value;

  // 要件：値が入力されていない場合
  if (val1Str === "" || val2Str === "") {
    if (formulaArea) formulaArea.textContent = "計算式：";
    resultArea.textContent = "両方の数値を入力してください";
    return;
  }

  const val1 = parseFloat(val1Str);
  const val2 = parseFloat(val2Str);

  let result = 0;
  let symbol = "";

  // 演算子の分岐
  if (operator === "+") {
    result = val1 + val2;
    symbol = "+";
  } else if (operator === "-") {
    result = val1 - val2;
    symbol = "-";
  } else if (operator === "*") {
    result = val1 * val2;
    symbol = "×";
  } else if (operator === "/") {
    // 要件：0除算の判定
    if (val2 === 0) {
      if (formulaArea) formulaArea.textContent = "計算式：";
      resultArea.textContent = "0で割る事はできません。";
      return;
    }
    result = val1 / val2;
    symbol = "÷";
  } else {
    if (formulaArea) formulaArea.textContent = "計算式：";
    resultArea.textContent = "両方の数値を入力してください";
    return;
  }

  // 要件：全て入力されている場合（計算式と結果を表示）
  if (formulaArea) {
    formulaArea.textContent = `計算式：${val1} ${symbol} ${val2}`;
  }
  resultArea.textContent = `計算結果：${result}`;
}