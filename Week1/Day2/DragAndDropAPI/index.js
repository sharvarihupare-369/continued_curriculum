let draggableEl = document.getElementById("drag-item");
let dropSpace = document.getElementById("drop-zone");
let liItems = document.querySelectorAll(".draggable-li");

let draggedItem = null;

draggableEl.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", draggableEl.id);
  setTimeout(() => {
    draggableEl.style.visibility = "hidden";
  }, 0);
});

draggableEl.addEventListener("dragend", () => {
  draggableEl.style.visibility = "visible";
});

dropSpace.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropSpace.classList.add("hovered");
});

dropSpace.addEventListener("dragleave", () => {
  dropSpace.classList.remove("hovered");
});

dropSpace.addEventListener("drop", (e) => {
  e.preventDefault();
  let dropItemId = e.dataTransfer.getData("text/plain");
  let dropItem = document.getElementById(dropItemId);
  dropSpace.appendChild(dropItem);
  dropSpace.classList.remove("hovered");
  dropSpace.classList.remove("dropped");
});

liItems.forEach((el) => {
  el.addEventListener("dragstart", () => {
    draggedItem = el;
    el.classList.add("dragging");
  });
  el.addEventListener("dragend", () => {
    el.classList.remove("dragging");
    draggedItem = null;
  });

  el.addEventListener("dragover", (e) => {
    e.preventDefault();
    let afterEl = getDragAfterElement(el.parentElement, e.clientY);
    if (afterEl === null) {
      el.parentElement.appendChild(draggedItem);
    } else {
      el.parentElement.insertBefore(draggedItem, afterEl);
    }
  });

  el.addEventListener("dragleave", () => {
    el.classList.remove("over");
  });
});

function getDragAfterElement(container, y) {
  let draggableEl = [
    ...container.querySelectorAll(".draggable-li:not(.dragging)"),
  ];
  return draggableEl.reduce(
    (close, child) => {
      let box = child.getBoundingClientRect();
      let offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > close.offset) {
        return { offset, element: child };
      } else {
        return close;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}
