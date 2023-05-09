let age = prompt("おいくつですか？");
age = parseInt(age);

if (isNaN(age)) {
  console.log("数字ではありません。😅");
} else if (age >= 30) {
  console.log("30より大きい数字です。");
} else {
  console.log("30より小さい数字です。");
}
