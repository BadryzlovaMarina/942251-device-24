var link = document.querySelector(".contact-button");       
var popup = document.querySelector(".modal-contact");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var mail = popup.querySelector("[name=mail]");
var message = popup.querySelector("[name=message]");

var isStorageSupport = true;
var loginStorage = "";
var mailStorage = "";

try {
    loginStorage = localStorage.getItem("login");
    mailStorage = localStorage.getItem("mail");
} catch (err) {
    isStorageSupport = false;
}   

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (loginStorage && mailStorage) {
        login.value = loginStorage;
        mail.value = mailStorage;
        message.focus();    
    } else if(loginStorage) {
        login.value = loginStorage;
        mail.focus();
    } else if(mailStorage) {
        mail.value = mailStorage;
        login.focus();
    } else {
       login.focus();
    }
});


close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!login.value || !mail.value || !message.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");  
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");    
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
            localStorage.setItem("mail", mail.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
        }
    if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
    }
    }
});

var mapLink = document.querySelector(".button-map");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});