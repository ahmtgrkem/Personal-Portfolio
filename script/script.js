// script.js

// API'den en iyi 6 film verisini almak için bir fonksiyon
async function getTopRatedMovies() {
    const apiKey = 'MY_API'; // Kendi API anahtarýnýzý buraya ekleyin
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=tr&page=1`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.results.slice(0, 6); // Sadece ilk 6 filmi al
    } catch (error) {
        console.error('Hata:', error);
    }
}

// Film listesini sayfaya ekleme fonksiyonu
async function addMoviesToPage() {
    const movies = await getTopRatedMovies();
    const filmList = document.getElementById('film-list');

    for (let i = 0; i < movies.length; i += 2) {
        const movie1 = movies[i];
        const movie2 = movies[i + 1];

        const movie1Element = createMovieElement(movie1);
        const movie2Element = createMovieElement(movie2);

        const row = document.createElement('div');
        row.classList.add('row', 'mb-4');
        row.appendChild(movie1Element);
        
        if (movie2) {
            row.appendChild(movie2Element);
        }

        filmList.appendChild(row);
    }
}

function createMovieElement(movie) {
    if (!movie) return;

    const movieElement = document.createElement('div');
    movieElement.classList.add('col-lg-6', 'mb-4');

    movieElement.innerHTML = `
        <div class="card">
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="${movie.title}">
            <div class="card-body">
                <h5 class="card-title">${movie.title}</h5>
                <p class="card-text">${movie.overview}</p>
            </div>
        </div>
    `;

    return movieElement;
}

// Sayfa yüklendiðinde film listesini çaðýr
document.addEventListener('DOMContentLoaded', addMoviesToPage);
