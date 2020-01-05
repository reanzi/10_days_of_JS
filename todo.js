const form = document.querySelector("#ourForm");
const ourField = document.querySelector(".item");
const itemList = document.querySelector(".item-list");

form.addEventListener("submit", e => {
  e.preventDefault();
  createItem(ourField.value);
  ourField.value = "";
  ourField.focus();
});

function createItem(x) {
  let ourHtml = `<li> ${x} <button onClick=deleteItem(this)>Delete</button> <button onClick=editItem(this)>Edit</button></li>`;
  itemList.insertAdjacentHTML("beforeend", ourHtml);
}

// event bubbling
function deleteItem(eleToDelete) {
  console.log(eleToDelete.parentElement.remove());
}
function editItem(eleToEdit) {
  ourField.value = eleToEdit.parentElement.innerHTML;
}
