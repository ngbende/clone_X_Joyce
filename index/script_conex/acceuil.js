const username1 = document.querySelectorAll(".username1");
const username2 = document.querySelectorAll(".username2");

const user = localStorage.getItem("name");

username1.forEach((el) => {
  el.textContent = user;
});

username2.forEach((el) => {
  el.textContent = "@" + user;
});
