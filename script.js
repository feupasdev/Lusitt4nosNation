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
  document.addEventListener("DOMContentLoaded", function() {
    const fadeEls = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                // Remove a linha abaixo se quiseres que o texto não desapareça ao subir
                entry.target.classList.remove('is-visible');
            }
        });
    }, { threshold: 0.15 });

    fadeEls.forEach(el => observer.observe(el));
});
    });
});
