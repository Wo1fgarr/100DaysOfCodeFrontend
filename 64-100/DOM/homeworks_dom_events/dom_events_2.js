let menu = document.querySelector('.menu');

menu.addEventListener('click', e => {
  const item = e.target.nextElementSibling;
  console.log(menu.children);

  const checkClass = item.classList.contains('dropdown-menu');

  if (checkClass === true) {
    item.classList.toggle('d-none');
  }
  
})