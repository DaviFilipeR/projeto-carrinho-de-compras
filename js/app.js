let totalGeral = 0;
document.getElementById("lista-produtos").innerHTML = "";
document.getElementById("valor-total").textContent = "0 R$";

function adicionar() {
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let valorProduto = produto.split("$")[1];
    let quantidade = document.getElementById("quantidade").value;
    let preco = valorProduto * quantidade;
    let listaProdutos = document.getElementById("lista-produtos");
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${preco}R$</span>
        </section>`;
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById("valor-total");
    campoTotal.textContent = ` ${totalGeral}R$`
    document.getElementById("quantidade").value = "";

    if (quantidade <= 0) {
        alert ("Nenhum produto está sendo adicionado ao carrinho.");
        document.getElementById("lista-produtos").innerHTML = "";
        document.getElementById("valor-total").textContent = "0 R$";
    }
}

function limpar() {
    document.getElementById("lista-produtos").innerHTML = "";
    totalGeral = 0;
    document.getElementById("valor-total").textContent = "0 R$";
}