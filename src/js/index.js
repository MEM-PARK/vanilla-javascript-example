const classA = document.querySelector(".classA");

// 1. functionはなに？
// 2. constとfunctoinが何が違うの

function handleClick() {
  console.log("クリックされました！！");
}

classA.addEventListener("click", handleClick);
