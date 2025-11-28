document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona todos os botões de "próximo"
    const botoesProximo = document.querySelectorAll('.btn-proximo');

    // 2. Adiciona um ouvinte de evento de clique a CADA botão
    botoesProximo.forEach(button => {
        button.addEventListener('click', (event) => {
            // Pega o ID do próximo passo do atributo 'data-proximo'
            const proximoPassoId = event.currentTarget.getAttribute('data-proximo');
            
            // Chama a função para mudar a tela
            mudarPasso(proximoPassoId);
        });
    });

    /**
     * Função que esconde o passo atual e mostra o próximo.
     * @param {string} proximoId - O ID do passo a ser exibido (ex: '7').
     */
    function mudarPasso(proximoId) {
        // Encontra o passo atualmente ativo
        const passoAtual = document.querySelector('.passo.ativo');
        
        // Encontra o NOVO passo que será ativado
        const novoPasso = document.getElementById(`passo-${proximoId}`);

        if (passoAtual) {
            // Remove a classe 'ativo' do passo atual para escondê-lo
            passoAtual.classList.remove('ativo');
        }

        if (novoPasso) {
            // Adiciona a classe 'ativo' ao novo passo para mostrá-lo
            novoPasso.classList.add('ativo');
        } else {
            console.error(`Erro: O passo com ID passo-${proximoId} não foi encontrado.`);
        }
    }
});
