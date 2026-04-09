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
  navLogInPage.classList.toggle("hiddenDivLogin");
  logInExitBtn.style.display = "flex";
});

logInExitBtn.addEventListener("click", function () {
  console.log("salam men islemirem");
  logInExitBtn.style.zIndex = "9999";
  nav.style.display = "block";
  nav.style.opacity = "10";

  logInExitBtn.style.display = "none";
  navLogInPage.classList.remove("hiddenDivLogin");
});

// qeydiyyyat bolmesinin effektleri
const signUpBtn = document.querySelector("#signUpBtn");
const navRegistrPage = document.querySelector(".navRegistrPage");
const registrExitBtn = document.querySelector(".registrExitBtn");
// console.log(navRegistrPage);

// console.log(signUpBtn);

signUpBtn.addEventListener("click", function (e) {
  // console.log("salam");
  nav.style.opacity = "0";
  nav.style.display = "none";
  navRegistrPage.classList.toggle("hiddenDivRegistr");
  registrExitBtn.style.display = "flex";
  e.preventDefault();
});

registrExitBtn.addEventListener("click", function (e) {
  console.log("registr exit btn iwleyir");
  registrExitBtn.style.zIndex = "9999";
  nav.style.display = "block";
  nav.style.opacity = "10";
  registrExitBtn.style.display = "none";
  navRegistrPage.classList.remove("hiddenDivRegistr");

  e.preventDefault();
});

// melumatlarin toplanilmasi registrdan gelen inputlarin valuelari

const registrName = document.querySelector("#registrName");
const registrUsername = document.querySelector("#registrUsername");
const registrPassword = document.querySelector("#registrPassword");
const registrClas = document.querySelector("#registrClas");
const registrPhoneNumber = document.querySelector("#registrPhoneNumber");
const registrEmail = document.querySelector("#registrEmail");

const qeydiyyatBtn = document.querySelector("#qeydiyyatBtn");

console.log(registrName);
console.log(registrUsername);
console.log(registrPassword);
console.log(registrPhoneNumber);
console.log(registrEmail);
console.log(qeydiyyatBtn);

qeydiyyatBtn.addEventListener("click", function (e) {
  console.log("salam gelir");
  console.log(registrName.value);
  console.log(registrUsername.value);
  console.log(registrPassword.value);
  console.log(registrClas.value);
  console.log(registrPhoneNumber.value);
  console.log(registrEmail.value);

  if (
    registrName.value != "" &&
    registrUsername.value != "" &&
    registrPassword.value != "" &&
    registrClas.value != "" &&
    registrPhoneNumber.value != "" &&
    registrEmail.vlue != ""
  ) {
    fetch("http://localhost:7132", {
      method: "POST",
      body: JSON.stringify({
        fullName: registrName.value,
        userName: registrUsername.value,
        password: registrPassword.value,
        educationLevel: registrClas.value,
        phoneNumber: registrPhoneNumber.value,
        email: registrEmail.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  } else {
    alert("melumat yarimciqdir. yeniden cehd edin");
  }

  e.preventDefault();
});
