// API
async function breakingBadAlintisiAl() {
    try {
        const response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
        const data = await response.json();
        return data[0]; // �lk al�nt�y� al
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
        alert('Kullan�c� ad� ve �ifre bo� b�rak�lamaz.');
        return false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@sakarya\.edu\.tr$/;
    if (!emailPattern.test(username)) {
        alert('Ge�erli bir Sakarya �niversitesi e-posta adresi giriniz.');
        return false;
    }

    return true;
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').onsubmit = validateForm;
});

function formKontrol() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const genderMale = document.getElementById('genderMale').checked;
    const genderFemale = document.getElementById('genderFemale').checked;
    const interest1 = document.getElementById('interest1').checked;
    const interest2 = document.getElementById('interest2').checked;
    const country = document.getElementById('country').value;
    const message = document.getElementById('message').value;

    // Ad alan� bo� mu kontrol�
    if (name.trim() === '') {
        alert('L�tfen ad�n�z� girin.');
        return false;
    }

    // E-posta alan� bo� mu ve ge�erli bir e-posta adresi mi kontrol�
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '') {
        alert('L�tfen e-posta adresinizi girin.');
        return false;
    } else if (!emailPattern.test(email)) {
        alert('Ge�erli bir e-posta adresi girin.');
        return false;
    }

    // Cinsiyet alan� se�ili mi kontrol�
    if (!genderMale && !genderFemale) {
        alert('L�tfen cinsiyetinizi se�in.');
        return false;
    }

    // �lgi alanlar� alan� se�ili mi kontrol�
    if (!interest1 && !interest2) {
        alert('L�tfen en az bir ilgi alan�n� se�in.');
        return false;
    }

    // �lke alan� se�ili mi kontrol�
    if (country === '') {
        alert('L�tfen �lkenizi se�in.');
        return false;
    }

    // Mesaj alan� bo� mu kontrol�
    if (message.trim() === '') {
        alert('L�tfen bir mesaj yaz�n.');
        return false;
    }

    // T�m kontroller ge�ildiyse form g�nderilir
    return true;
}

// Vue.js
const app = Vue.createApp({
    data() {
        return {
            name: '',
            email: '',
            gender: '',
            interests: [],
            country: '',
            message: ''
        };
    },
    methods: {
        formKontrol() {
            if (!this.name) {
                alert('L�tfen ad�n�z� girin.');
                return false;
            }
            if (!this.email) {
                alert('L�tfen e-posta adresinizi girin.');
                return false;
            }
            if (!this.isValidEmail(this.email)) {
                alert('Ge�erli bir e-posta adresi girin.');
                return false;
            }
            if (!this.gender) {
                alert('L�tfen cinsiyetinizi se�in.');
                return false;
            }
            if (this.interests.length === 0) {
                alert('L�tfen en az bir ilgi alan�n� se�in.');
                return false;
            }
            if (!this.country) {
                alert('L�tfen �lkenizi se�in.');
                return false;
            }
            if (!this.message) {
                alert('L�tfen bir mesaj yaz�n.');
                return false;
            }
            return true;
        },
        isValidEmail(email) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        }
    }
});

app.mount('#app');