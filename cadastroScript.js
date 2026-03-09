const form = document.getElementById("form");
const nomeInput = document.getElementById("usuario");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const confirmacaoInput = document.getElementById("confirmacao");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const nome = nomeInput.value;
    const email = emailInput.value;
    const senha = senhaInput.value;
    const confirmacao = confirmacaoInput.value;

    if(nome === "" | email === "" | senha === "" | confirmacao === ""){
        alert("Preencha todos os campos!!!");
        return;
    } else if(senha != confirmacao){
        alert("Erro na confirmação da senha!!!");
        return
    }

    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);

    alert("Cadastro criado!!!");

    window.location.href = "/login.html"
});