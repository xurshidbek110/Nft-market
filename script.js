// Mobile menu toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
  document.querySelector('.mobile-nav-overlay').style.display = 'block';
});

document.querySelector('.mobile-nav-overlay').addEventListener('click', function(e) {
  if (e.target === this) {
    this.style.display = 'none';
  }
});

// NFT animatsiyasi – CSS orqali
console.log("Responsive NFT Marketplace ishga tushdi!");



// 72 soat = 259200 soniya
let timeLeft = 259199; // 71:59:59

const timer = document.getElementById('timer');
const [h, m, s] = timer.querySelectorAll('.time');

function update() {
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  h.textContent = String(hours).padStart(2, '0');
  m.textContent = String(minutes).padStart(2, '0');
  s.textContent = String(seconds).padStart(2, '0');

  if (timeLeft > 0) {
    timeLeft--;
  }
}

setInterval(update, 1000);
update(); // Dastlabki qiymat

