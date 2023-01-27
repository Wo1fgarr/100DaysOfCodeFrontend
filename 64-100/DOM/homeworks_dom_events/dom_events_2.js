let menu = document.querySelector('.menu');

menu.addEventListener('click', e => {
  const item = e.target.nextElementSibling;
  const menuChildrenList = Array.from(menu.children);

  console.log(item);
  
  menuChildrenList.forEach( elem => {
    let nextMenuSibling = elem.nextElementSibling;
    console.log(nextMenuSibling);
    console.log(nextMenuSibling === item);
    if (nextMenuSibling === item) {
      nextMenuSibling.classList.toggle('d-none')
    }
  })
})