// Carrega o saldo assim que a página abrir
window.onload = function() {
    let saldo = localStorage.getItem("saldo");

    if (!saldo) {
        saldo = 0;
        localStorage.setItem("saldo", 0);
    }

    atualizarSaldo();
};

function atualizarSaldo() {
    let saldo = Number(localStorage.getItem("saldo"));
    document.getElementById("saldo").textContent = 
        "R$ " + saldo.toFixed(2).replace(".", ",");
}

function irParaPagina2() {
    window.location.href = "../Page2/index.html";
}

function irParaHistorico() {
    window.location.href = "../Page2/index.html#historico";
}
function irParaRetirada() {
    window.location.href = "../Page2/index.html#retirada";
}
