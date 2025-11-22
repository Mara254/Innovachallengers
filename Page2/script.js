let modo = "adicionar"; // padrão

window.onload = function () {

    if (window.location.hash === "#retirada") {
        modo = "retirada";
        document.getElementById("titulo").textContent = "Retirar Dinheiro";
        document.getElementById("btnPrincipal").textContent = "Retirar";
    }

    carregarHistorico();

    if (window.location.hash === "#historico") {
        document.querySelector("h2").scrollIntoView();
    }
};


function adicionar() {
    let valor = Number(document.getElementById("valor").value);

    if (valor <= 0) {
        alert("Digite um valor válido!");
        return;
    }

    let saldo = Number(localStorage.getItem("saldo")) || 0;

    if (modo === "adicionar") {
        saldo += valor;
        registrarHistorico("+" + valor);
    }

    else if (modo === "retirada") {

        if (valor > saldo) {
            alert("Você não tem dinheiro suficiente!");
            return;
        }

        saldo -= valor;
        registrarHistorico("-" + valor);
    }

    localStorage.setItem("saldo", saldo);

    document.getElementById("valor").value = "";
    carregarHistorico();
}


function registrarHistorico(texto) {
    let historico = JSON.parse(localStorage.getItem("historico")) || [];
    historico.push(texto);
    localStorage.setItem("historico", JSON.stringify(historico));
}


function carregarHistorico() {
    let historico = JSON.parse(localStorage.getItem("historico")) || [];
    let lista = document.getElementById("lista");

    lista.innerHTML = "";

    historico.forEach(v => {
        let li = document.createElement("li");

        if (v.startsWith("+")) li.style.color = "green";
        if (v.startsWith("-")) li.style.color = "red";

        let numero = Number(v.replace("+", "").replace("-", ""));
        li.textContent = v[0] + " R$ " + numero.toFixed(2).replace(".", ",");

        lista.appendChild(li);
    });
}

function voltar() {
    window.location.href = "index.html";
}
