// 1 get text if click button
const btn_msg = document.querySelector('#btn-msg');

console.log(btn_msg.dataset.text);
btn_msg.addEventListener('click', e => {
  alert(e.target.dataset.text);
  // alert(btn.dataset.text);
  // alert(this.dataset.text);
  // alert(e.currentTarget.dataset.text);
})

// 2 hover mouse
btn_msg.addEventListener('mouseover', e => {
  e.target.classList.add('red_button');
})

btn_msg.addEventListener('mouseout', e => {
  e.target.classList.remove('red_button');
})

// 3 show any clicked tag
const tagTextContainer = document.getElementById('tag');
  document.body.addEventListener('click', (e) => {
    tagTextContainer.textContent = `Tag: ${e.target.nodeName}`;
  });
// const allDoc = document.querySelector('html');
// allDoc.addEventListener('click', e => {
//   console.log(e.target);
// })


// 4 add li item with children count number
const btn_gen = document.querySelector('#btn-generate');
btn_gen.addEventListener('click', e => {
  const ul = document.querySelector('ul');
  let ulChildCount = ul.childElementCount;
  const li = document.createElement('li');
  li.textContent = `Item ${ulChildCount + 1}`;
  ul.insertAdjacentElement('beforeend', li);
})

// const generateBtn = document.getElementById('btn-generate');
//   const list = document.querySelector('ul');
//   function generateNewItem(e) {
//     // get current list count
//     const num = list.children.length + 1;
//     const text = `Item ${num}`;
//     const li = document.createElement('li');
//     li.textContent = text;
//     list.appendChild(li);
//   }
//   generateBtn.addEventListener('click', generateNewItem);