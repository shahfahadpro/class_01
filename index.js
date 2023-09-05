function clearInput() {
  const inputField = document.getElementById("main_input_field");
  inputField.value = "";
}

function addItem(event) {
  if (event.key !== "Enter") {
    return;
  }

  const inputField = document.getElementById("main_input_field");
  const value = inputField.value;
  clearInput();

  const listItem = document.createElement("div");
  listItem.classList.add("list_item");
  listItem.innerHTML = `<p>${value}</p><div class="icons"><i class="fa-solid fa-pen-to-square" onclick="editItem(event)"></i><i class="fa-solid fa-trash" onclick="deleteItem(event)"></i></div>`;

  const list = document.getElementById("list");
  list.appendChild(listItem);
}

function editItem(event) {
  const textNode = event.target.parentNode.parentNode.children[0];
  const val = prompt("Edit the value: ", textNode.innerText);

  if (val) {
    textNode.innerText = val;
  } else {
    textNode.parentNode.remove();
  }
}

function deleteItem(event) {
  event.target.parentNode.parentNode.remove();
}
