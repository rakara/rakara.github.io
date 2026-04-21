const API_KEY = "7ca6233338e74ce78b5fe865cecf4641"; // <-- replace this
const BASE_URL = "https://newsapi.org/v2/top-headlines";

const container = document.getElementById("news-container");
const searchInput = document.getElementById("search");
const buttons = document.querySelectorAll(".categories button");

let currentCategory = "general";

// LOADING UI
function showLoading() {
  container.innerHTML = "<p style='text-align:center'>Loading news...</p>";
}

// ERROR UI
function showError(msg) {
  container.innerHTML = `<p style='color:red;text-align:center'>${msg}</p>`;
}

// FETCH NEWS
async function fetchNews() {
  showLoading();

  try {
    let url = `${BASE_URL}?country=us&category=${currentCategory}&apiKey=${API_KEY}`;

    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
      url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${API_KEY}`;
    }

    const res = await fetch(url);
    const data = await res.json();

    if (data.status !== "ok") {
      throw new Error(data.message || "Failed to fetch news");
    }

    renderNews(data.articles);

  } catch (err) {
    showError("❗ Failed to load news. Check API key or network.");
    console.error(err);
  }
}

// RENDER NEWS
function renderNews(articles) {
  container.innerHTML = "";

  if (articles.length === 0) {
    container.innerHTML = "<p>No articles found.</p>";
    return;
  }

  articles.forEach(article => {
    const card = document.createElement("div");
    card.classList.add("news-card");

    card.innerHTML = `
      <img src="${article.urlToImage || 'https://picsum.photos/400/200'}">
      <div class="news-content">
        <h3>${article.title}</h3>
        <p>${article.description || "No description available."}</p>
        <a href="${article.url}" target="_blank">Read more →</a>
      </div>
    `;

    container.appendChild(card);
  });
}

// CATEGORY FILTER
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentCategory = btn.dataset.category;
    fetchNews();
  });
});

// SEARCH
let debounceTimer;
searchInput.addEventListener("input", () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(fetchNews, 500);
});

// INIT
fetchNews();