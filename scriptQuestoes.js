function calcularPontuacao() {
    let acertos = 0;
    const respostas = document.querySelectorAll('input[type="radio"]:checked');
    const resultadoDetalhado = [];
    
    respostas.forEach((resposta, index) => {
        if (resposta.value === 'certo') {
            acertos++;
            resultadoDetalhado.push(`Questão ${index + 1}: Certo`);
        } else {
            resultadoDetalhado.push(`Questão ${index + 1}: Errado`);
        }
    });

    const resultadoTexto = `<b>Você acertou ${acertos}/${respostas.length}</b><br>`;
    const detalhes = resultadoDetalhado.join('<br>');

    document.getElementById('resultado').innerHTML = `${resultadoTexto}<br>${detalhes}`;
    document.getElementById('resultadoModal').style.display = "block";
}

function fecharModal() {
    document.getElementById('resultadoModal').style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById('resultadoModal')) {
        document.getElementById('resultadoModal').style.display = "none";
    }
}
