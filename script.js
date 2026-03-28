// Espera que o documento esteja carregado
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona todos os elementos que devem fazer fade in
    const fadeEls = document.querySelectorAll('.fade-in-section');

    // Configuração do Observador (Observer)
    const observerOptions = {
        root: null, // Usa o viewport do navegador
        rootMargin: '0px', // Ativa exatamente quando entra no ecrã
        threshold: 0.2 // 20% do elemento precisa de estar visível para ativar
    };

    // Função que decide o que fazer quando o elemento cruza a linha de visão
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Se o elemento entrou no ecrã, adiciona a classe que faz o fade in
                entry.target.classList.add('is-visible');
            } else {
                // Se o elemento saiu do ecrã (scroll para cima ou para baixo), remove a classe (Fade OUT)
                // Se preferires que ele não faça fade out ao sair, comenta a linha abaixo:
                entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    // Diz ao observador para vigiar cada um dos elementos selecionados
    fadeEls.forEach(el => {
        observer.observe(el);
    });
});
