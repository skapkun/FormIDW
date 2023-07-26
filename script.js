function cadastrarUsuario() {
    const nomeInput = document.querySelector('input[name="nomeUsuario"]');
    const dataNascimentoInput = document.querySelector('input[name="dataNascimento"]');

    const nome = nomeInput.value;
    const dataNascimento = dataNascimentoInput.value;
 
    const url = `result.html?nome=${encodeURIComponent(nome)}&dataNascimento=${encodeURIComponent(dataNascimento)}`;
     
    window.location.href = url;
}

function cadastrarProduto() {
    const idInput = document.querySelector('input[name="id"]');
    const produtoNomeInput = document.querySelector('input[name="produtoNome"]');
    const valorProdutoInput = document.querySelector('input[name="valorProduto"]');
    const quantidadeProdutoInput = document.querySelector('input[name="quantidadeProduto"]');
    const validadeProdutoInput = document.querySelector('input[name="validadeProduto"]');

    const id = idInput.value;
    const produtoNome = produtoNomeInput.value;
    const valorProduto = valorProdutoInput.value;
    const quantidadeProduto = quantidadeProdutoInput.value;
    const validadeProduto = validadeProdutoInput.value;
 
    const url = `result.html?id=${encodeURIComponent(id)}&produtoNome=${encodeURIComponent(produtoNome)}&valorProduto=${encodeURIComponent(valorProduto)}&quantidadeProduto=${encodeURIComponent(quantidadeProduto)}&validadeProduto=${encodeURIComponent(validadeProduto)}`;
 
    window.location.href = url;
}
