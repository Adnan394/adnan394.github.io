const tombol = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-items");

// responsive burger menu
let hitung = 0;
tombol.addEventListener("click", () => {
  hitung++;
  if (hitung % 2 == 1) {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
});

// localStorage.clear();

const storageKey = "KEY";
const form = document.querySelector("form");

function checkForStorage() {
  return typeof Storage !== "undefined";
}

function putUserList(data) {
  if (checkForStorage()) {
    let userData = [];
    if (localStorage.getItem(storageKey) !== null) {
      userData = JSON.parse(localStorage.getItem(storageKey));
    }

    userData.unshift(data);
    localStorage.setItem(storageKey, JSON.stringify(userData));
  }
}

function getUserList() {
  if (checkForStorage()) {
    return JSON.parse(localStorage.getItem(storageKey));
  } else {
    return [];
  }
}

function renderUserList() {
  const userData = getUserList();
  const userList = document.querySelector(".comment");

  userList.innerHTML = "";
  for (let data of userData) {
    let row = document.createElement("p");
    row.innerHTML += data;

    userList.appendChild(row);
  }
}

form.addEventListener("submit", (e) => {
  const input = document.querySelector("#input");
  const newData = input.value;
  putUserList(newData);
  renderUserList();
  e.preventDefault();
  input.value = "";
});

window.addEventListener("load", function () {
  if (checkForStorage()) {
    if (localStorage.getItem(storageKey) !== null) {
      renderUserList();
    }
  } else {
    alert("Browser yang Anda gunakan tidak mendukung Web Storage");
  }
});
