// 🕒 12-Hour Clock
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // hour '0' should be '12'

  document.getElementById('clock').textContent = `${hours}:${minutes} ${ampm}`;
}

updateClock();
setInterval(updateClock, 1000);

// 🔍 Search
function search(event) {
  if (event.key === 'Enter') {
    const query = event.target.value.trim();
    if (query !== '') {
      const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      window.open(url, '_blank');
    }
  }
}
