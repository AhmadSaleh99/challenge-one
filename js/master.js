let humbergure = document.querySelector(".humburger");
let closebtn = document.querySelector(".close");
let nav = document.querySelector("nav");

humbergure.onclick = function () {
  nav.classList.add("open");
  humbergure.classList.add("cllll");
  closebtn.classList.add("oppp");
};
closebtn.onclick = function () {
  nav.classList.remove("open");
  humbergure.classList.remove("cllll");
  closebtn.classList.remove("oppp");
};
