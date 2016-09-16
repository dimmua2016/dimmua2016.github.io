var login = document.querySelector(".login");
var button_feedback = document.querySelector(".button-feedback");
var overlay = document.querySelector(".overlay");
var feedback_close = document.querySelector(".header-feedback-close");
var name_field = document.querySelector("[name=feedback-name]");
var email_field = document.querySelector("[name=feedback-email]");
var textarea = document.querySelector("textarea");
var form_feedback = document.querySelector("[name=feedback-form]");
var header_feedback = document.querySelector(".header-feedback");
var login_email = document.querySelector("[name=login-email]");
var login_password = document.querySelector("[name=login-password]");
var form_login = document.querySelector("[name=form-login]");

// отключаю ссыку логин, там hover эффект срабатывает
login.addEventListener("click", function(event) {
  event.preventDefault();
});

form_login.addEventListener("submit", function(event) { 
  if (!login_password.value) { 
    event.preventDefault();
    login_password.classList.remove("field-error");
    login_password.offsetWidth = login_password.offsetWidth;
    login_password.classList.add("field-error");
    login_password.focus();
  }
  if (!login_email.value) {
    event.preventDefault();
    login_email.classList.remove("field-error");
    login_email.offsetWidth = login_email.offsetWidth;
    login_email.classList.add("field-error");
    login_email.focus();
  } 
});

button_feedback.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("overlay-show");
  name_field.focus();
});

feedback_close.addEventListener("click", function(event) {
  event.preventDefault();
  name_field.classList.remove("field-error");
  email_field.classList.remove("field-error");
  textarea.classList.remove("field-error");
  overlay.classList.remove("overlay-show");
});

form_feedback.addEventListener("submit", function(event) { 
  if (!textarea.value) {
    event.preventDefault();
    textarea.classList.remove("field-error");
    textarea.offsetWidth = textarea.offsetWidth;
    textarea.classList.add("field-error");
    textarea.focus();
  } 
  if (!email_field.value) { 
    event.preventDefault();
    email_field.classList.remove("field-error");
    email_field.offsetWidth = email_field.offsetWidth;
    email_field.classList.add("field-error");
    email_field.focus();
  }
  if (!name_field.value) {
    event.preventDefault();
    name_field.classList.remove("field-error");
    name_field.offsetWidth = name_field.offsetWidth;
    name_field.classList.add("field-error");
    name_field.focus();
  } 
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (overlay.classList.contains("overlay-show")) {
      name_field.classList.remove("field-error");
      email_field.classList.remove("field-error");
      textarea.classList.remove("field-error");
      // не хватило ума доделать
      // header_feedback.classList.add("zoomOut");
      overlay.classList.remove("overlay-show");
    }
  }
});