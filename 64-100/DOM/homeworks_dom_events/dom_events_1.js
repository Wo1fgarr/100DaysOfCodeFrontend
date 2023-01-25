// 1
const btn_msg = document.querySelector('#btn-msg');

console.log(btn_msg.dataset.text);
btn_msg.addEventListener('click', e => {
  alert(e.dataset.text);
  console.log(e);
})