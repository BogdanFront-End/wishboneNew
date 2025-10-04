document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const headerItems = document.querySelector('.header__items');
    
    mobileMenuBtn.addEventListener('click', function() {
        headerItems.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
});