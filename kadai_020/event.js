// 1. HTML要素を定数に代入（合格基準1）
const text = document.getElementById("text");
const button = document.getElementById("btn");

// 2. ボタンがクリックされたら、テキストを変更（合格基準2）
button.addEventListener("click", () => {
  text.textContent = "ボタンをクリックしました";
});
