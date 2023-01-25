const backButton = document.getElementById("icon__backButton");

const email = document.getElementById("email");
const password = document.getElementById("password");

const button = document.getElementById("form__button");
const forgotPassword = document.getElementById("footer__forgotPassword");

const form__mensagem = document.getElementById("form__mensagem");

const backButtonMensagem = document.getElementById("backbutton__mensagem");

email.addEventListener('focus', () => {
    email.style.borderColor = "var(--preto)";
    email.style.background = "var(--preto)";
    email.style.color = "var(--branco)";
});

email.addEventListener('blur', () => {
    email.style.borderColor = "var(--preto)";
    email.style.background = "var(--branco)";
    email.style.color = "var(--preto)";
});


password.addEventListener('focus', () => {
    password.style.borderColor = "var(--preto)";
    password.style.background = "var(--preto)";
    password.style.color = "var(--branco)";
});

password.addEventListener('blur', () => {
    password.style.borderColor = "var(--preto)";
    password.style.background = "var(--branco)";
    password.style.color = "var(--preto)";
});


button.addEventListener("click", () => {
    form__mensagem.innerHTML = "incorrect login or password";

    setTimeout(function(){   
        window.location.reload(true);
    }, 3000);
});

backButton.addEventListener("click", () => {
    backButtonMensagem.innerHTML = "Unable to return to previous page";

    setTimeout(function(){
        window.location.reload(true);
    }, 3000);
});

forgotPassword.addEventListener("click", () => {
    forgotPassword.innerHTML = "Action currently unavailable";
    forgotPassword.style.color = "var(--vermelho)";
    forgotPassword.style.transition = "0s";

    setTimeout(function(){    
        window.location.reload(true);
    }, 3000);
});

const btnDarkMode = document.querySelector("#btn");

btnDarkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
})