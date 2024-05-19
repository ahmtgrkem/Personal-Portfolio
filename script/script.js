// API
async function breakingBadAlintisiAl() {
    try {
        const response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
        const data = await response.json();
        return data[0]; // Ýlk alýntýyý al
    } catch (error) {
        console.error('Hata:', error);
    }
}

async function AlintiyiGoster() {
    const quote = await breakingBadAlintisiAl();
    const quoteContainer = document.getElementById('quote-container');

    const quoteCard = document.createElement('div');
    quoteCard.classList.add('quote-card');

    quoteCard.innerHTML = `
        <blockquote>
            <p><mark>${quote.quote}</p>
            <footer><b><i>${quote.author}</footer>
        </blockquote>
    `;

    quoteContainer.innerHTML = '';
    quoteContainer.appendChild(quoteCard);
}

document.addEventListener('DOMContentLoaded', AlintiyiGoster);

// Login
function girisFormKontrol() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Kullanýcý adý ve þifre boþ býrakýlamaz.');
        return false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@sakarya\.edu\.tr$/;
    if (!emailPattern.test(username)) {
        alert('Geçerli bir Sakarya Üniversitesi e-posta adresi giriniz.');
        return false;
    }

    return true;
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').onsubmit = validateForm;
});