
//VARIÁVEIS GLOBAIS COM CAPTURA DE ELEMENTOS HTML.

// Obtém referências para os elementos no DOM
const content = document.getElementById('content');
const lampada = document.getElementById('lampada');
const h1 = document.querySelector('h1');

// Cria um botão para trocar a lâmpada
const btnTrocaLampada = document.createElement('button');
btnTrocaLampada.id = 'btn-troca-lampada';
btnTrocaLampada.innerText = 'Trocar Lâmpada';

//FUNÇÕES AUXILIARES
// Função para acender a lâmpada
function acenderLampada() {
    // Verifica se a lâmpada está desligada
    if (lampada.src.includes('lampada-off.png')) {
        // Altera a imagem, texto e cursor
        lampada.src = 'assets/lampada-on.png';
        h1.innerText = 'Você acendeu a lâmpada, mas de jeito nenhum clique nela, pois é muito frágil.';
        lampada.style.cursor = 'pointer';
    }
}

// Função para quebrar a lâmpada quando clicada
function quebrarLampada() {
    // Altera a imagem, texto e cursor
    lampada.src = 'assets/lampada-quebrada.png';
    h1.innerText = 'Parabéns, você quebrou a lâmpada...';
    lampada.style.cursor = 'default';

    // Adiciona o botão de trocar lâmpada ao container
    content.appendChild(btnTrocaLampada);
}

// Função para trocar a lâmpada de volta ao estado inicial
function trocarlampada() {
    // Altera a imagem, texto e remove o botão de trocar lâmpada do container
    lampada.src = 'assets/lampada-off.png';
    h1.innerText = 'Acenda a lâmpada.';
    content.removeChild(btnTrocaLampada);
}

//EVENTOS DE INTERAÇÃO
lampada.addEventListener('mouseover', acenderLampada); //Acende a lâmpada
lampada.addEventListener('click', quebrarLampada); //Quabra a lãmpada
btnTrocaLampada.addEventListener('click', trocarlampada);//Troca a lampada
