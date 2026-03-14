const form = document.getElementById("form");
const buttonLogin = document.getElementById("login");
const buttonCadastro = document.getElementById("cadastro");

buttonLogin.addEventListener("click", function(event){
    event.preventDefault();

    window.location.href = "../HTML/login.html"
});

buttonCadastro.addEventListener("click", function(event){
    event.preventDefault();

    window.location.href = "../HTML/cadastro.html"
});