console.log("salam iwleyir yazdiqin)))");

const logInBtn = document.getElementById("logInBtn");
const nav = document.querySelector("nav");
const mainDivForNAvbar = document.querySelector(".mainDivForNAvbar");
const navLogInPage = document.querySelector(".navLogInPage");
const logInExitBtn = document.querySelector(".logInExitBtn");
console.log(logInExitBtn);
console.log(nav);
console.log(mainDivForNAvbar);
console.log(logInBtn);
console.log(navLogInPage);

logInBtn.addEventListener("click", function () {
  console.log(nav);
  nav.style.zIndex = "-1";
  mainDivForNAvbar.style.opacity = "0";
  navLogInPage.classList.add("hiddenDiv");
  logInExitBtn.style.display = "flex";
});

logInExitBtn.addEventListener("click", function () {
  navLogInPage.classList.remove("hiddenDiv");
  nav.style.zIndex = "10";
  mainDivForNAvbar.style.opacity = "1";
  logInExitBtn.style.display = "none";
});
