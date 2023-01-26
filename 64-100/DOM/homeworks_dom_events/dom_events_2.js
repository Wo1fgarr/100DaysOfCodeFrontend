const dropdown_item = document.getElementsByName('.dropdown-item');
console.log(dropdown_item);

dropdown_item.addEventListener('click', e => {
  const menuItem = dropdown_item.children;
  console.log(menuItem);
})