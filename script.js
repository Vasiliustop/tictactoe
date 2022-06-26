const base = document.querySelector(".base");
const content = document.querySelector(".content");
const ModalWindow = document.querySelector(".modal");
const btnModal = document.querySelector(".modal-btn");

let move = 0; // очередь хода
let result = "";

base.addEventListener("mousedown", (event) => {
  if (!event.target.textContent) {
    // запрещает нажатие на поле, на котором уже есть крестик или нолик.
    if ((event.target.className = "cell")) {
      if (move % 2 == 0) {
        // четное число
        event.target.textContent = "X";
      } else {
        event.target.textContent = "0";
      }
      move++; // передача хода после каждого клика по игровому полю
      check();
    }
  }
});

function check() {
  const boxes = document.querySelectorAll(".cell"); // NodList со всеми полями
  const arr = [
    // массивы победных комбинаций
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (i = 0; i < arr.length; i++) {
    if (
      boxes[arr[i][0]].textContent == "X" &&
      boxes[arr[i][1]].textContent == "X" &&
      boxes[arr[i][2]].textContent == "X"
    ) {
      result = "победили крестики";
      prepareResult(result);
      break;
    } if (
      boxes[arr[i][0]].textContent == "0" &&
      boxes[arr[i][1]].textContent == "0" &&
      boxes[arr[i][2]].textContent == "0"
    ) {
      result = "победили нолики";
      prepareResult(result);
    }
     else if(move == 9 ) {
      result = "ничья";
      prepareResult(result);
  }
  }
}

function prepareResult(winner) {
  content.textContent = `${winner}`;
  ModalWindow.style.display = "flex";
}

function closeModal() {
  ModalWindow.style.display = "none";
  location.reload(); // перезагрузка страницы после нажатия на кнопку "Start new game" ;
}

btnModal.onclick = function () {
  closeModal();
};
