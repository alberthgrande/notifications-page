const unreadMessages = document.querySelectorAll(".unread"); // unread
const unread = document.getElementById("notifications"); // notification
const markAll = document.getElementById("mark_all"); // mark all
const unreadDiscription = document.querySelectorAll(".unread-discription");

unread.innerText = unreadMessages.length;

unreadMessages.forEach(function (node) {
  node.addEventListener("click", function () {
    node.classList.remove("unread");
    node.classList.remove("unread-discription");
    const newUnreadMessages = document.querySelectorAll(".unread");
    unread.innerText = newUnreadMessages.length;
  });
});

markAll.addEventListener("click", function () {
  unreadMessages.forEach(function (node) {
    node.classList.remove("unread");
  });
  unreadDiscription.forEach(function (node) {
    node.classList.remove("unread-discription");
  });
  const newUnreadMessages = document.querySelectorAll(".unread");
  unread.innerText = newUnreadMessages.length;
});
