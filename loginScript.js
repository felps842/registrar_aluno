const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const email = emailInput.value;
    const senha = senhaInput.value;

    const cadEmail = localStorage.getItem("email");
    const cadSenha = localStorage.getItem("senha");
     
    if(email === "" | senha === ""){
        alert("Preencha todos os campos!!!");
        return
    } else if(email != cadEmail | senha != cadSenha){
        alert("Login Incorreto!!!")

        emailInput.value = "";
        senhaInput.value = "";
        return
    } else if(cadEmail === "" | cadSenha === ""){
        alert("Login Incorreto!!!")

        emailInput.value = "";
        senhaInput.value = "";
        return
    }

    window.location.href = "/tarefas.html"
});