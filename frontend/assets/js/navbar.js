console.log("salam iwleyir yazdiqin)))");

const logInBtn = document.getElementById("logInBtn");
const nav = document.querySelector("nav");
const mainDivForNAvbar = document.querySelector(".mainDivForNAvbar");
const navLogInPage = document.querySelector(".navLogInPage");
const logInExitBtn = document.querySelector(".logInExitBtn");
// console.log(logInExitBtn);
// console.log(nav);
// console.log(mainDivForNAvbar);
// console.log(logInBtn);
// console.log(navLogInPage);

logInBtn.addEventListener("click", function () {
  console.log(nav);
  // nav.style.zIndex = "-1";
  nav.style.opacity = "0";
  nav.style.display = "none";
  navLogInPage.classList.toggle("hiddenDiv");
  logInExitBtn.style.display = "flex";
});

logInExitBtn.addEventListener("click", function () {
  console.log("salam men islemirem");
  logInExitBtn.style.zIndex = "9999";
  nav.style.display = "block";
  nav.style.opacity = "10";

  logInExitBtn.style.display = "none";
  navLogInPage.classList.remove("hiddenDiv");
});

// // qeydiyyyat bolmesinin effektleri
// const qeydiyyatBtn = document.querySelector("#qeydiyyatBtn");
