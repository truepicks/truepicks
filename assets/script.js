// Simple client-side search + theme toggle
(function(){
  const manifestEl = document.getElementById('content-manifest');
  const resultsEl = document.getElementById('results');
  const searchForm = document.getElementById('siteSearch');
  const searchInput = document.getElementById('searchInput');
  const themeToggle = document.getElementById('themeToggle');

  function renderCards(items) {
    if (!resultsEl) return;
    resultsEl.innerHTML = items.map(item => `
      <article class="card">
        <div class="card-body">
          <span class="badge">${item.type}</span>
          <h3 class="card-title">${item.title}</h3>
          <p class="muted">${item.excerpt}</p>
          <a class="btn" href="${item.url}">Open</a>
        </div>
      </article>
    `).join('');
  }

  const manifest = manifestEl ? JSON.parse(manifestEl.textContent) : [];
  renderCards(manifest);

  if (searchForm && searchInput) {
    searchForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const q = (searchInput.value||'').toLowerCase().trim();
      if (!q) { renderCards(manifest); return; }
      const filtered = manifest.filter(m => (m.title+m.excerpt+m.tags.join(' ')).toLowerCase().includes(q));
      renderCards(filtered.length ? filtered : [{type:'no results', title:'No results', excerpt:'Try another search term.', url:'#'}]);
      const params = new URLSearchParams(window.location.search);
      params.set('q', q);
      history.replaceState(null, '', `?${params.toString()}`);
    });

    // Pre-fill search from URL
    const urlQ = new URLSearchParams(location.search).get('q');
    if (urlQ) { searchInput.value = urlQ; searchForm.dispatchEvent(new Event('submit')); }
  }

  // Theme toggle (light/dark)
  if (themeToggle) {
    themeToggle.addEventListener('click', ()=>{
      document.documentElement.classList.toggle('light');
    });
  }
})();
