// Search functionality
    const searchInput = document.getElementById('gameSearch');
    const gamesGrid = document.getElementById('gamesGrid');
    const cards = gamesGrid.querySelectorAll('.card');
    const noResults = document.getElementById('noResults');

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        let visibleCount = 0;

        cards.forEach(card => {
            const name = card.getAttribute('data-name').toLowerCase();
            const genre = card.getAttribute('data-genre').toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            const title = card.querySelector('h3').textContent.toLowerCase();

            if (name.includes(query) || genre.includes(query) || description.includes(query) || title.includes(query)) {
                card.style.display = '';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    });

    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');

    function openLightbox(element) {
        const img = element.querySelector('img');
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Close lightbox with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeLightbox();
    });