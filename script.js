const form = document.getElementById("form");
const inputNome = document.getElementById("Nome");
const inputEmail = document.getElementById("Email");
const inputSenha = document.getElementById("Senha");
const lista = document.getElementById("lista");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const nome = inputNome.value;
    const email = inputEmail.value;
    const senha = inputSenha.value;

    if (nome === "" || email === "" || senha === "") {
        alert("Prencha todos os campos!");
        return;
    }
    
    const novoItem = document.createElement("li");
    novoItem.textContent = nome + " - " + email;
    
    lista.appendChild(novoItem);

    inputNome = "";
    inputEmail = "";
    inputSenha = "";
})