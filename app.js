//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomes = []; // variavel que criar uma lista em um array

atualizarLista() // chama inicial da funçao que atualiza a lista na interface
function adicionarAmigo() {
    let input = document.getElementById('amigo'); //obtem o elemento imput da pagina
    amigo = input.value;
    if (amigo == "") { // verificase se o camo esta vasio
        alert('Por favor insira um nome') // exibe um alerta se menhum nome foi inserido
    } else {
        nomes.push(amigo);//adiciona o nome do array
        input.value = "";
        atualizarLista();//atualiza a lista exibido pagina
    }
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos'); // obtem ellemento dda lista
    lista.innerHTML = ""; // limpa o conteudo atual da lista 
    for (let i = 0; i < nomes.length; i++) { // intera sobre o array de nomes
        lista.innerHTML += `<li> ${nomes[i]} </li>`;//Adiciona cada nome como um item da lista.
    }
}

function sortearAmigo() {
    if (nomes.length > 0) { // Verifica se há amigos na lista.
        let indice = Math.floor(Math.random() * nomes.length); // Gera um índice aleatório com base no tamanho da lista.
        let nomeSorteado = nomes[indice];
        document.getElementById('resultado').innerHTML =  '<li>' + nomeSorteado + '</li>';  // Pega o nome correspondente ao índice.
        
    }
}