// var let const
// varはダメ
// letは後から変更できる可能性があるもの
// constは後から変更できないもの

// 入力 = 29, Cancel = null 
// 文字列 = string → "null" "29"
// 数字 = number → 29

// typeofでタイプを推論できる。
// parseIntでstring→numberに変える。
// プログラミングの慣例

// promptの戻り値はstring
let age = prompt("おいくつですか？");

// number Nan
age = parseInt(age);

if(isNaN(age)){
  console.log("age is not a Number");
}
