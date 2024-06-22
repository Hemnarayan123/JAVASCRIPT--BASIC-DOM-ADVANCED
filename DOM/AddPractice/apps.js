const form = document.querySelector("form");
const fruits = document.querySelector(".fruits");
const dlt = document.querySelector(".delete-btn");
const edit = document.querySelector(".edit-btn");
const search = document.getElementById("filter");
const fruit = document.querySelectorAll(".fruit");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  valueStore = document.getElementById("fruit-to-add");

  newList = document.createElement("li");
  newList.innerHTML =
    valueStore.value +
    '<button class="delete-btn">x</button><button class="edit-btn">edit</button>';

  fruits.appendChild(newList);
});

// // to delete Li

fruits.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    const fruitToDelete = event.target.parentElement;

    fruits.removeChild(fruitToDelete);
  }
});

// // to Filter fruit

search.addEventListener("keyup", function (event) {
  const currentText = event.target.value.toLowerCase();

  for (let i = 0; i < fruit.length; i++) {
    const currentFruit = fruit[i].firstChild.textContent.toLowerCase();

    if (currentFruit.indexOf(currentText) === -1) {
      fruit[i].style.display = "none";
      console.log(fruit);
    } else {
      fruit[i].style.display = "block";
    }
  }
});

// search.addEventListener("keyup", function (event) {
//   const textEntered = event.target.value.toLowerCase();

//   const fruitItems = document.getElementsByClassName("fruit");
//   for (i = 0; i < fruitItems.length; i++) {
//     const currentFruitText = fruitItems[i].firstChild.textContent.toLowerCase();
//     if (currentFruitText.indexOf(textEntered) === -1) {
//       fruitItems[i].style.display = "none";
//     } else {
//       fruitItems[i].style.display = "flex";
//     }
//   }
// });

fruits.addEventListener('click', function(event) {
    const target = event.target;

    if (target.classList.contains('edit-btn')) {
        const fruitItem = target.parentNode;
        const newFruitName = prompt('Enter the new fruit name:');

        if (newFruitName !== '') {
            fruitItem.textContent = newFruitName;

            // fruitItem.appendChild(edit);
            // fruitItem.appendChild(dlt);

            const editBtn = document.createElement('button');

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'x';
            deleteBtn.classList.add('delete-btn');
            fruitItem.appendChild(deleteBtn);

            editBtn.textContent = 'Edit';
            editBtn.classList.add('edit-btn');
            fruitItem.appendChild(editBtn);
        }
    }
});
