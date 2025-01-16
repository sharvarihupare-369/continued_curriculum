let courses_btn = document.getElementById("course_btn");
let dropdown_container = document.querySelector(".dropdown-container");
let ulContainer = document.querySelector(".list-container");
let dropdownUlContainer = document.querySelector(".dropdown-list-container");
let hamburger_icon = document.querySelector(".hamburger-icon");
let hamburger_menu = document.querySelector(".hamburger-menu");
let hamburger_list = document.querySelector(".hamburger-list");

let listItemsArr = [
  "Interview Guides",
  "Success Stories",
  "Hire From Us",
  "Fees",
];

listItemsArr.forEach((el) => {
  let li = document.createElement("li");
  li.textContent = el;
  hamburger_list.append(li);
});

hamburger_icon.addEventListener("click", () => {
  hamburger_menu.style.display =
    hamburger_menu.style.display === "block" ? "none" : "block";
});
courses_btn.addEventListener("click", (e) => {
  e.preventDefault;
  if (dropdown_container.style.display === "block") {
    dropdown_container.style.display = "none";
  } else {
    dropdown_container.style.display = "block";
  }
});

document.addEventListener("click", (e) => {
  e.preventDefault();
  e.preventDefault();
  if (
    !hamburger_menu.contains(e.target) &&
    !hamburger_icon.contains(e.target)
  ) {
    hamburger_menu.style.display = "none";
  }
  if (!dropdown_container.contains(e.target) && e.target !== courses_btn) {
    dropdown_container.style.display = "none";
  }
});
