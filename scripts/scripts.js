window.onscroll = function showHeader() {
    let header = document.querySelector('header');
    let body = document.querySelector('body');
    if (window.pageYOffset > 200) {
        header.classList.add('header__fixed');
        body.classList.add('header-fixed');
    } else {
        header.classList.remove('header__fixed');
        body.classList.remove('header-fixed');
    }
};

document.addEventListener('DOMContentLoaded', () => { 
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const arrow = item.querySelector('.arrow');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            const isOpen = answer.classList.contains('active');
            
            document.querySelectorAll('.faq-answer').forEach(el => el.classList.remove('active'));
            document.querySelectorAll('.faq-question').forEach(el => el.classList.remove('active'));
            document.querySelectorAll('.arrow').forEach(el => {
                el.style.transform = 'rotate(0deg)';
                const img = el.querySelector('img');
                img.src = 'images/check_v.svg';
                img.style.width = '40px';
                img.style.height = '40px';
            });

            if (!isOpen) {
                answer.classList.add('active');
                question.classList.add('active');
                arrow.style.transform = 'rotate(180deg)';
                const img = arrow.querySelector('img');
                img.src = 'images/check_n.svg';
                img.style.width = '100px';
                img.style.height = '100px';
            }
        });
    });
});



//Адаптивность

// Выбираем элементы
const toggleButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Управление меню
toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Убираем меню, если ширина экрана больше 768px
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menu.classList.remove('active');
    }
});
