// 1 Output text from the data- attribute of an element
const btn_msg = document.querySelector('#btn-msg');

console.log(btn_msg.dataset.text);
btn_msg.addEventListener('click', e => {
  alert(e.target.dataset.text);

  /* alternative */
  // alert(btn.dataset.text);
  // alert(this.dataset.text);
  // alert(e.currentTarget.dataset.text);
})

// 2 Paint the button red when hovering over the mouse 
//   and return the original style when the mouse was removed from the button
btn_msg.addEventListener('mouseover', e => {
  e.target.classList.add('red_button');
})

btn_msg.addEventListener('mouseout', e => {
  e.target.classList.remove('red_button');
})

// 3 Set in textContent the name of the tag that has now been clicked
const tagTextContainer = document.getElementById('tag');
  document.body.addEventListener('click', (e) => {
    tagTextContainer.textContent = `Tag: ${e.target.nodeName}`;
  });

/* alternative */
// const allDoc = document.querySelector('html');
// allDoc.addEventListener('click', e => {
//   console.log(e.target);
// })


// 4 Add a new item to the list by clicking the button with its serial number
const btn_gen = document.querySelector('#btn-generate');
const ul = document.querySelector('ul');
btn_gen.addEventListener('click', e => {
  let ulChildCount = ul.childElementCount;
  const li = document.createElement('li');

  li.textContent = `Item ${ulChildCount + 1}`;
  ul.insertAdjacentElement('beforeend', li);
})

/* alternative */
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