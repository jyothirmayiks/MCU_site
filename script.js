const searchInput = document.getElementById('searchInput');
const characterCards = document.querySelectorAll('.character');

searchInput.addEventListener('input', (event) => {
  const searchValue = event.target.value.toLowerCase().trim(); 
  characterCards.forEach(card => {
    const name = card.querySelector('.name').textContent.trim(); 
    if (name.toLowerCase().includes(searchValue)) {
      card.style.display = 'block'; 
    } else {
      card.style.display = 'none'; 
    }
  });
});


