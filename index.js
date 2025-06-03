const dadosCardControleBar = {
    titulo: 'Controle de Bar',
    imagem: 'https://alexandre-rech-lages.github.io/portfolio-ap-dev/assets/sistema-bar.png',
    stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
    ],
    descricao: `O Sistema de Gerenciamento para Restaurantes permite que garçons registrem e gerenciem pedidos nas mesas, possibilitando a adição e remoção de produtos em contas específicas. Além disso, os funcionários podem cadastrar produtos, mesas e garçons. O sistema oferece relatórios diários de faturamento e permite visualizar contas em aberto, além de acompanhar o total faturado no dia, semana e mês, proporcionando uma gestão eficiente das operações e do desempenho financeiro do restaurante.`
};

const dadosCardControleCinema = {
    titulo: 'Controle de Cinema',
    imagem: 'https://alexandre-rech-lages.github.io/portfolio-ap-dev/assets/sistema-cinema.png',
    stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
    ],
    descricao: `O Sistema de Controle de Cinemas foi criado para otimizar a gestão de ingressos e salas no Cinema de Lages. Ele permite que os funcionários registrem e gerenciem informações das salas, filmes e sessões, facilitando o controle da capacidade e a venda de ingressos. Com funcionalidades de cadastro, consulta, alteração e remoção de sessões, o sistema organiza as exibições do dia e apresenta detalhes sobre as poltronas disponíveis e vendidas, agilizando o atendimento e melhorando a experiência dos clientes.`
}

let cardSelecionado;

function carregarDadosCardAtual() {
    if (!cardSelecionado)
        throw new Error('Card não selecionado.');

    const imgCard = document.getElementById('imgCard');
    const stackCard = document.getElementById('stackCard');
    const tituloCard = document.getElementById('tituloCard');
    const descricaoCard = document.getElementById('descricaoCard');

    imgCard.src = cardSelecionado.imagem;
    tituloCard.textContent = cardSelecionado.titulo;
    descricaoCard.textContent = cardSelecionado.descricao;

    stackCard.innerHTML = '';

    for (let item of cardSelecionado.stack) {
        const iconeStack = document.createElement('img');
        iconeStack.width = 35;
        iconeStack.src = item;

        stackCard.appendChild(iconeStack);
    }
}

function selecionarPrimeiroCard() {
    if (cardSelecionado == dadosCardControleBar)
        return;

    cardSelecionado = dadosCardControleBar;
    carregarDadosCardAtual();
}

function selecionarSegundoCard() {
    if (cardSelecionado == dadosCardControleCinema)
        return;

    cardSelecionado = dadosCardControleCinema;
    carregarDadosCardAtual();
}

function main() {
    const btnSelecionarPrimeiroCard = document.getElementById("btnSelecionarPrimeiroCard");
    const btnSelecionarSegundoCard = document.getElementById("btnSelecionarSegundoCard");

    btnSelecionarPrimeiroCard.addEventListener('click', selecionarPrimeiroCard);
    btnSelecionarSegundoCard.addEventListener('click', selecionarSegundoCard);

    selecionarPrimeiroCard();
};

document.addEventListener('DOMContentLoaded', main);