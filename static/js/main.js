// Vérification du status des services (optionnel)
document.addEventListener('DOMContentLoaded', function() {
    // Animation smooth pour les cartes
    const cards = document.querySelectorAll('.service-card');
    
    // Observer pour les animations au scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        observer.observe(card);
    });
    
    // Optionnel : Vérification du status des services
    // checkServiceStatus();
});

// Fonction pour vérifier le status (à adapter selon vos besoins)
function checkServiceStatus() {
    const services = ['emby', 'retro', 'nas', 'docker', 'cloud', 'monitor'];
    
    services.forEach(service => {
        // Simulé - remplacez par vos vraies vérifications
        const isOnline = Math.random() > 0.1; // 90% chance d'être en ligne
        
        const card = document.querySelector(`[data-service="${service}"]`);
        const statusElement = card.querySelector('.service-status');
        
        if (isOnline) {
            statusElement.textContent = 'En ligne';
            statusElement.className = 'service-status online';
        } else {
            statusElement.textContent = 'Hors ligne';
            statusElement.className = 'service-status offline';
        }
    });
}
