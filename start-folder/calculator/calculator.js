// 1. HTMLの要素を取得する
const value1Input = document.getElementById("value1");
const value2Input = document.getElementById("value2");
const operatorSelect = document.getElementById("operator");
const formulaArea = document.getElementById("formula");
const resultArea = document.getElementById("result");

// 2. 値の変更時に動的に計算を実行するイベントを設定する
value1Input.addEventListener("input", calculate);
value2Input.addEventListener("input", calculate);
operatorSelect.addEventListener("change", calculate);

// 初期表示の実行
calculate();

// 3. 計算処理を行う関数
function calculate() {
  const val1Str = value1Input.value.trim();
  const val2Str = value2Input.value.trim();
  const operator = operatorSelect.value;

  // 未入力のチェック
  if (val1Str === "" || val2Str === "") {
    if (formulaArea) formulaArea.textContent = "計算式：";
    resultArea.textContent = "両方の数値を入力してください";
    return;
  }

  const val1 = parseFloat(val1Str);
  const val2 = parseFloat(val2Str);

  let result = 0;
  let symbol = "";

  // 演算子の判定
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
    // 0除算のチェック
    if (val2 === 0) {
      if (formulaArea) formulaArea.textContent = "計算式：";
      resultArea.textContent = "0で割る事はできません。";
      return;
    }
    result = val1 / val2;
    symbol = "÷";
  } else {
    if (formulaArea) formulaArea.textContent = "計算式：";
    resultArea.textContent = "演算子を選択してください";
    return;
  }

  // 計算式と結果の表示
  if (formulaArea) {
    formulaArea.textContent = `計算式：${val1} ${symbol} ${val2}`;
  }
  resultArea.textContent = `計算結果：${result}`;
}