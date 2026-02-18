document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');

    if (query) {
        document.getElementById('search-query-display').textContent = query;
        performSiteSearch(query);
    }
    initializeSearch('search-input');
});

function initializeSearch(inputId) {
    const handleSearch = (event) => {
        if (event.key === 'Enter' && event.target.value) {
            window.location.href = `search.html?q=${encodeURIComponent(event.target.value)}`;
        }
    };
    const searchInput = document.getElementById(inputId);
    if (searchInput) {
        searchInput.addEventListener('keyup', handleSearch);
    }
}

async function performSiteSearch(query) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '<p>Recherche en cours...</p>';

    const searchDataUrl = 'search-data.json';
    let results = [];

    try {
        const response = await fetch(searchDataUrl);
        const searchData = await response.json();

        const lowerCaseQuery = query.toLowerCase();

        searchData.forEach(item => {
            const fullText = `${item.title} ${item.content}`;
            if (fullText.toLowerCase().includes(lowerCaseQuery)) {
                // Find a snippet of context around the query
                const queryIndex = item.content.toLowerCase().indexOf(lowerCaseQuery);
                const contextStart = Math.max(0, queryIndex - 50);
                const contextEnd = Math.min(item.content.length, queryIndex + lowerCaseQuery.length + 50);
                let context = item.content.substring(contextStart, contextEnd);

                // Add ellipses if the context is truncated
                if (contextStart > 0) context = '...' + context;
                if (contextEnd < item.content.length) context = context + '...';
                
                results.push({
                    url: item.url,
                    title: item.title,
                    context: context
                });
            }
        });

    } catch (error) {
        console.error('Erreur lors de la recherche:', error);
        resultsContainer.innerHTML = `<p>Une erreur est survenue lors de la recherche. Veuillez réessayer.</p>`;
        return;
    }
    
    displayResults(results, query);
}

function displayResults(results, query) {
    const resultsContainer = document.getElementById('search-results');

    if (results.length === 0) {
        resultsContainer.innerHTML = `<p>Aucun résultat trouvé pour "<strong>${query}</strong>".</p>`;
        return;
    }

    let html = `<h3>${results.length} résultat(s) trouvé(s) pour "${query}"</h3>`;
    results.forEach(result => {
        html += `
            <div class="result-item">
                <h4><a href="${result.url}">${result.title}</a></h4>
                <p>${result.context}</p>
                <a href="${result.url}" class="result-url">${window.location.origin}/${result.url}</a>
            </div>
        `;
    });

    resultsContainer.innerHTML = html;
}