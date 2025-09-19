document.addEventListener('DOMContentLoaded', function() {
    const basketButton = document.querySelector('.btn-outline'); 
    const closeButton = document.querySelector('.cart-modal_header--close'); 
    const overlay = document.querySelector('.cart-modal__overlay'); 

    basketButton.addEventListener('click', function() {
        overlay.classList.add('open');
    });

    closeButton.addEventListener('click', function() {
        overlay.classList.remove('open');
    });

    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            overlay.classList.remove('open');
        }
    });
});