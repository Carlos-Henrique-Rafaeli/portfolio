const dadosCardGestaoMedicamentos = {
    titulo: 'Gestão de Medicamentos',
    imagem: 'https://i.imgur.com/qJHb6iI.png',
    gif: 'https://i.imgur.com/AKK9i0I.gif',
    urlRepositorio: 'https://github.com/Carlos-Henrique-Rafaeli/controle-de-medicamentos',
    stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
    ],
    descricao: `O sistema de Controle de Medicamentos apresenta o conceito de gerenciamento de um posto de saúde, com o controle de fornecimento, estoque, funcionários, pacientes e retirada de prescrições — com foco na rastreabilidade das movimentações de estoque.`
};

const dadosCardGestaoEquipamentos = {
    titulo: 'Gestão de Equipamentos',
    imagem: 'https://i.imgur.com/njV7bm4.png',
    gif: 'https://i.imgur.com/vyl4wk3.gif',
    urlRepositorio: 'https://github.com/Carlos-Henrique-Rafaeli/gestao-de-equipamentos',
    stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
    ],
    descricao: `O sistema de Gestão de Equipamentos controla o estoque de um almoxarifado, com a gestão de equipamentos e o registro de chamados de manutenção que eventualmente ocorrem durante o uso dos equipamentos. Também são inclusas informações sobre os fabricantes dos equipamentos para contato de suporte ou compras.`
}

const dadosCardGestaoDeBar = {
    titulo: 'Gestão de Bar',
    imagem: 'https://i.imgur.com/l93SOZQ.png',
    gif: 'https://i.imgur.com/18oFjBf.gif',
    urlRepositorio: 'https://github.com/Carlos-Henrique-Rafaeli/controle-de-bar',
    stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
        'https://skillicons.dev/icons?i=bootstrap&theme=light',
    ],
    descricao: `O sistema de Gestão de Bar permite o gerenciamento completo do funcionamento de um bar, com cadastro de mesas, garçons, produtos e controle de contas dos clientes. É possível acompanhar o andamento das contas, registrar pedidos, visualizar contas abertas ou fechadas e consultar o faturamento com base nas vendas realizadas.`
}

let cardSelecionado;

function carregarDadosCardAtual() {
    if (!cardSelecionado)
        throw new Error('Card não selecionado.');

    const imgCard = document.getElementById('imgCard');
    const stackCard = document.getElementById('stackCard');
    const tituloCard = document.getElementById('tituloCard');
    const descricaoCard = document.getElementById('descricaoCard');
    const urlRepositorio = document.getElementById('urlRepositorio');

    imgCard.src = cardSelecionado.imagem;
    tituloCard.textContent = cardSelecionado.titulo;
    descricaoCard.textContent = cardSelecionado.descricao;
    urlRepositorio.href = cardSelecionado.urlRepositorio;

    stackCard.innerHTML = '';

    for (let item of cardSelecionado.stack) {
        const iconeStack = document.createElement('img');
        iconeStack.width = 35;
        iconeStack.src = item;

        stackCard.appendChild(iconeStack);
    }
}

function selecionarPrimeiroCard() {
    if (cardSelecionado == dadosCardGestaoMedicamentos)
        return;

    cardSelecionado = dadosCardGestaoMedicamentos;
    carregarDadosCardAtual();
}

function selecionarSegundoCard() {
    if (cardSelecionado == dadosCardGestaoEquipamentos)
        return;

    cardSelecionado = dadosCardGestaoEquipamentos;
    carregarDadosCardAtual();
}

function selecionarTerceiroCard() {
    if (cardSelecionado === dadosCardGestaoDeBar)
        return;

    cardSelecionado = dadosCardGestaoDeBar;
    carregarDadosCardAtual();
}

function abrirModalProjeto() {
    document.getElementById('portfolioModalLabel').textContent = cardSelecionado.titulo;
    document.getElementById('portfolioModalImage').src = cardSelecionado.gif;
}

function main() {
    const btnSelecionarPrimeiroCard = document.getElementById("btnSelecionarPrimeiroCard");
    const btnSelecionarSegundoCard = document.getElementById("btnSelecionarSegundoCard");
    const btnSelecionarTerceiroCard = document.getElementById("btnSelecionarTerceiroCard");
    const btnVerProjeto = document.getElementById("btnVerProjeto");

    btnSelecionarPrimeiroCard.addEventListener('click', selecionarPrimeiroCard);
    btnSelecionarSegundoCard.addEventListener('click', selecionarSegundoCard);
    btnSelecionarTerceiroCard.addEventListener('click', selecionarTerceiroCard);
    btnVerProjeto.addEventListener('click', abrirModalProjeto);

    selecionarPrimeiroCard();
};

document.addEventListener('DOMContentLoaded', main);