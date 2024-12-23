const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-botao");

botaoSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(event) {
    event.preventDefault()
    console.log("Entrei na função");
}