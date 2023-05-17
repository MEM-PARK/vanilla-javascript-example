const classA = document.querySelector(".classA");

// 2. constとfunctoinが何が違うの

function handleClick() {
  console.log("クリックされました！！");
}

// classA.addEventListener("click", handleClick);

function testClick(type, handleClick) {
  console.log(`Type : ${type}が実行されました。`);
  handleClick();
}

testClick("click", handleClick);

// 定義
// classA
// handleClick
// testClick

// 実行結果
// Type : "click"が実行されました。
// クリックされました！！

// 実行中
// testClick("click", handleClick);
