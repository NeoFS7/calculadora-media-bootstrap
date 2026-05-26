document.getElementById('mediaForm').addEventListener('submit', function(event) {
    // Evita o recarregamento da página
    event.preventDefault();
    
    // Captura os valores informados nos campos
    const nome = document.getElementById('nomeEstudante').value;
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    
    // Calcula a média aritmética das duas notas
    const media = (nota1 + nota2) / 2;
    const mediaFormatada = media.toFixed(2);
    
    let situacao = "";
    
    // Determina a situação do aluno
    if (media >= 7) {
        situacao = "Aprovado";
    } else if (media >= 5 && media < 7) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }
    
    // Exibe o nome do aluno, a média e a situação na página
    const resultText = document.getElementById('resultText');
    const resultContainer = document.getElementById('resultContainer');
    
    // Saída do nome e da média
    resultText.textContent = `${nome}, sua média é: ${mediaFormatada}`;
    
    // Saída da situação
    resultSituacao.textContent = `Situação: ${situacao}`;
    
    // Mostra o container de resultados
    resultContainer.classList.remove('d-none');
});
