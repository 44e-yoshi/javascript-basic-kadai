// 1. HTML要素を定数に代入（合格基準1）
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// 2. ボタンクリック → 2秒後に文字変更（合格基準2）
btn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000); // 2000ミリ秒 = 2秒
});
