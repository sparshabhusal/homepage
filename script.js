// 🕒 Clock
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}`;
}

// Run clock every second
updateClock();
setInterval(updateClock, 1000);

// 🔍 Search Handler
function search(event) {
  if (event.key === 'Enter') {
    const query = event.target.value.trim();
    if (query !== '') {
      const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      window.open(url, '_blank');
    }
  }
}

