const btnOpen = document.querySelector('btnOpen');
const btnClose = document.querySelector('btn');
const modal = document.querySelector('recentCustomers');
const closeBtn = document.querySelector('.close-btn');

btnOpen.addEventListener('click', () => {
    modal.style.display = 'flex';
});

btnClose.addEventListener('click', () => { 
    modal.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});