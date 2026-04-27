let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarBarra();
}

function atualizarBarra() {
    const barra = document.getElementById('barra-carrinho');
    barra.style.display = 'flex';
    document.getElementById('qtd-itens').innerText = `${carrinho.length} itens`;
    document.getElementById('total-pedido').innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

function abrirModal() {
    document.getElementById('modal-checkout').style.display = 'flex';
    const lista = document.getElementById('lista-itens-checkout');
    lista.innerHTML = carrinho.map(item => `<p style="font-size:12px;">${item.nome} - R$ ${item.preco.toFixed(2)}</p>`).join('');
}

function fecharModal() {
    document.getElementById('modal-checkout').style.display = 'none';
}

function enviarWhatsApp() {
    const nome = document.getElementById('nome-cliente').value;
    const rua = document.getElementById('rua-cliente').value;
    const bairro = document.getElementById('bairro-cliente').value;

    if(!nome || !rua) { alert("Preencha os dados!"); return; }

    let texto = `*Pedido Doces da Bah*\n\n*Cliente:* ${nome}\n*Endereço:* ${rua}, ${bairro}\n\n*Itens:* \n`;
    carrinho.forEach(i => texto += `- ${i.nome}\n`);
    texto += `\n*Total:* R$ ${total.toFixed(2)}`;

    const fone = "5538999999999"; // COLOQUE O WHATSAPP DELA AQUI
    window.open(`https://wa.me/${fone}?text=${encodeURIComponent(texto)}`);
}
