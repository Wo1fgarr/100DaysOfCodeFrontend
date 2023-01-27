let menu = document.querySelector('.menu');

menu.addEventListener('click', e => {
  const item = e.target.nextElementSibling;
  const menuChildrenList = Array.from(menu.children);

  // console.log(item);
  // console.log(menuChildrenList);
  let i = 0;
  while(i <= 2) {
    console.log(menuChildrenList[0].querySelector('.dropdown-menu'));
  }

  

  // menuChildrenList.forEach( elem => {
  //   // console.log(elem);
  //   let nextMenuSibling = elem.querySelector('.dropdown-menu');
  //   console.log(nextMenuSibling);
  //   // console.log(nextMenuSibling === item);
  //   if (item === nextMenuSibling && nextMenuSibling.classList.contains('d-none')) {
  //     nextMenuSibling.classList.remove('d-none');
  //     if (!item === nextMenuSibling && !nextMenuSibling.classList.contains('d-none')) {
  //       nextMenuSibling.classList.remove('d-none');
  //     }
  //   }
  //   else if (item === nextMenuSibling && !nextMenuSibling.classList.contains('d-none')) {
  //     nextMenuSibling.classList.add('d-none');
  //   }
  //   else if (!item === nextMenuSibling && !nextMenuSibling.classList.contains('d-none')) {
  //     nextMenuSibling.classList.add('d-none');
  //   }
  // })
})