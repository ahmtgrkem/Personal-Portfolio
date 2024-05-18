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

function formKontrol() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const genderMale = document.getElementById('genderMale').checked;
    const genderFemale = document.getElementById('genderFemale').checked;
    const interest1 = document.getElementById('interest1').checked;
    const interest2 = document.getElementById('interest2').checked;
    const country = document.getElementById('country').value;
    const message = document.getElementById('message').value;

    // Ad alaný boþ mu kontrolü
    if (name.trim() === '') {
        alert('Lütfen adýnýzý girin.');
        return false;
    }

    // E-posta alaný boþ mu ve geçerli bir e-posta adresi mi kontrolü
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '') {
        alert('Lütfen e-posta adresinizi girin.');
        return false;
    } else if (!emailPattern.test(email)) {
        alert('Geçerli bir e-posta adresi girin.');
        return false;
    }

    // Cinsiyet alaný seçili mi kontrolü
    if (!genderMale && !genderFemale) {
        alert('Lütfen cinsiyetinizi seçin.');
        return false;
    }

    // Ýlgi alanlarý alaný seçili mi kontrolü
    if (!interest1 && !interest2) {
        alert('Lütfen en az bir ilgi alanýný seçin.');
        return false;
    }

    // Ülke alaný seçili mi kontrolü
    if (country === '') {
        alert('Lütfen ülkenizi seçin.');
        return false;
    }

    // Mesaj alaný boþ mu kontrolü
    if (message.trim() === '') {
        alert('Lütfen bir mesaj yazýn.');
        return false;
    }

    // Tüm kontroller geçildiyse form gönderilir
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
                alert('Lütfen adýnýzý girin.');
                return false;
            }
            if (!this.email) {
                alert('Lütfen e-posta adresinizi girin.');
                return false;
            }
            if (!this.isValidEmail(this.email)) {
                alert('Geçerli bir e-posta adresi girin.');
                return false;
            }
            if (!this.gender) {
                alert('Lütfen cinsiyetinizi seçin.');
                return false;
            }
            if (this.interests.length === 0) {
                alert('Lütfen en az bir ilgi alanýný seçin.');
                return false;
            }
            if (!this.country) {
                alert('Lütfen ülkenizi seçin.');
                return false;
            }
            if (!this.message) {
                alert('Lütfen bir mesaj yazýn.');
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