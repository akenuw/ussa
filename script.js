// Landing page bear icon logic
window.onload = function() {
  const flowerContainer = document.getElementById('flower-animation');
  if (flowerContainer) {
    flowerContainer.innerHTML = `
      <svg id="bear-svg" width="180" height="180" viewBox="0 0 180 180" style="display:block; margin:0 auto;">
        <!-- Ears -->
        <ellipse cx="45" cy="50" rx="28" ry="28" fill="#c49a6c"/>
        <ellipse cx="135" cy="50" rx="28" ry="28" fill="#c49a6c"/>
        <!-- Head -->
        <ellipse cx="90" cy="90" rx="60" ry="60" fill="#e2bb89"/>
        <!-- Face -->
        <ellipse cx="90" cy="110" rx="38" ry="32" fill="#fff6e9"/>
        <!-- Eyes -->
        <ellipse cx="70" cy="100" rx="7" ry="9" fill="#4d3a1a"/>
        <ellipse cx="110" cy="100" rx="7" ry="9" fill="#4d3a1a"/>
        <!-- Nose -->
        <ellipse cx="90" cy="120" rx="7" ry="5" fill="#4d3a1a"/>
        <!-- Smile -->
        <path d="M83 130 Q90 138 97 130" stroke="#4d3a1a" stroke-width="3" fill="none" stroke-linecap="round"/>
        <!-- Blush -->
        <ellipse cx="60" cy="120" rx="7" ry="3" fill="#ffb6b6"/>
        <ellipse cx="120" cy="120" rx="7" ry="3" fill="#ffb6b6"/>
      </svg>
    `;
  }

  // Typewriter effect for 'from Omonuwa (your homeboy)'
  const typeTarget = document.getElementById('typewriter-text');
  if (typeTarget) {
    const message = 'from Omonuwa (your homeboy)';
    let i = 0;
    function typeWriter() {
      if (i <= message.length) {
        typeTarget.textContent = message.slice(0, i);
        i++;
        setTimeout(typeWriter, 70);
      }
    }
    typeWriter();
  }

  // Open button logic
  const openBtn = document.getElementById('open-btn');
  if (openBtn) {
    openBtn.onclick = function() {
      document.getElementById('landing').style.display = 'none';
      document.getElementById('main-content').style.display = '';
      typeMainContent();
    };
  }

  startFireworks();

  // Envelope modal button logic
  setTimeout(() => {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    if (yesBtn) yesBtn.onclick = function() {
      showLovePage();
    };
    if (noBtn) noBtn.onclick = function() {
      showBrokenHeartPage();
    };
  }, 1000);

  // Try to play music as soon as possible
  const music = document.getElementById('bg-music');
  const musicOverlay = document.getElementById('music-play-overlay');
  const musicBtn = document.getElementById('music-play-btn');
  if (music) {
    music.volume = 0.7;
    const playMusic = () => {
      music.play().then(() => {
        if (musicOverlay) musicOverlay.style.display = 'none';
      }).catch(() => {
        if (musicOverlay) musicOverlay.style.display = 'flex';
      });
      document.removeEventListener('click', playMusic);
      document.removeEventListener('touchstart', playMusic);
    };
    // Try to play immediately
    music.play().then(() => {
      if (musicOverlay) musicOverlay.style.display = 'none';
    }).catch(() => {
      if (musicOverlay) musicOverlay.style.display = 'flex';
      document.addEventListener('click', playMusic);
      document.addEventListener('touchstart', playMusic);
    });
    if (musicBtn) {
      musicBtn.onclick = playMusic;
    }
  }
};

function showLovePage() {
  document.body.innerHTML = '';
  window.location.href = 'https://wa.me/2349036627043?text=I%20love%20you%20too!';
}

function showContactPage() {
  document.body.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; background: #fff0f5;">
      <div style="font-size: 2rem; color: #d63384; margin-bottom: 20px;">I love you ❤️</div>
      <a href="https://wa.me/2348030000000?text=I%20love%20you%20too!" style="font-size: 1.2rem; color: #fff; background: #25d366; padding: 12px 28px; border-radius: 30px; text-decoration: none; box-shadow: 0 2px 8px rgba(37,211,102,0.13);">Message me on WhatsApp</a>
    </div>
  `;
}

function showBrokenHeartPage() {
  document.body.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; background: #fff0f5;">
      <img src="images/4.png" alt="Broken Heart" style="width:120px;height:120px;margin-bottom:30px;object-fit:cover;border-radius:20px;box-shadow:0 2px 8px rgba(255,105,180,0.13);" />
      <button id="close-broken-heart" style="background:#ff69b4;color:#fff;font-size:1.1rem;border:none;border-radius:30px;padding:10px 28px;cursor:pointer;box-shadow:0 2px 8px rgba(255,105,180,0.13);">Close</button>
    </div>
  `;
  setTimeout(() => {
    const closeBtn = document.getElementById('close-broken-heart');
    if (closeBtn) {
      closeBtn.onclick = function() {
        window.location.reload();
      };
    }
  }, 100);
}

// Fireworks of love icons
function launchLoveFireworks() {
  const container = document.getElementById('fireworks-container');
  if (!container) return;
  for (let i = 0; i < 10; i++) {
    const heart = document.createElement('div');
    heart.innerHTML = `<svg width="28" height="28" viewBox="0 0 32 32"><path d="M23.6,4.6c-2.1,0-4,1-5.6,2.7C16,7.3,15.9,7.2,15.7,7C14.1,5.3,12.2,4.3,10.1,4.3C6.1,4.3,3,7.4,3,11.4c0,7.2,12.1,15.7,12.6,16c0.2,0.1,0.5,0.1,0.7,0C16.9,27.1,29,18.6,29,11.4C29,7.4,25.9,4.6,23.6,4.6z" fill="#ff69b4"/></svg>`;
    heart.style.position = 'absolute';
    const x = Math.random() * 80 + 10; // 10vw to 90vw
    const y = Math.random() * 40 + 20; // 20vh to 60vh
    heart.style.left = x + 'vw';
    heart.style.top = y + 'vh';
    heart.style.transform = 'scale(0.7)';
    heart.style.opacity = '1';
    heart.style.transition = 'transform 0.8s cubic-bezier(0.22,1,0.36,1), opacity 0.8s';
    container.appendChild(heart);
    // Animate explosion
    setTimeout(() => {
      const angle = Math.random() * 2 * Math.PI;
      const dist = 80 + Math.random() * 60;
      const dx = Math.cos(angle) * dist;
      const dy = Math.sin(angle) * dist;
      heart.style.transform = `translate(${dx}px, ${dy}px) scale(${0.9 + Math.random() * 0.5})`;
      heart.style.opacity = '0';
    }, 50);
    // Remove after animation
    setTimeout(() => {
      heart.remove();
    }, 1000);
  }
}

// Launch fireworks every 1.5s while landing is visible
let fireworksInterval;
function startFireworks() {
  if (fireworksInterval) clearInterval(fireworksInterval);
  launchLoveFireworks();
  fireworksInterval = setInterval(function() {
    var landing = document.getElementById('landing');
    if (landing && landing.style.display === 'none') {
      clearInterval(fireworksInterval);
    } else {
      launchLoveFireworks();
    }
  }, 1500);
}

// Typewriter effect for main content
function typeMainContent() {
  const title = document.getElementById('main-title');
  const desc = document.getElementById('main-desc');
  if (!title || !desc) return;
  const titleText = title.textContent;
  const descText = desc.textContent;
  title.textContent = '';
  desc.textContent = '';
  title.style.visibility = 'visible';
  desc.style.visibility = 'hidden';
  let i = 0;
  function typeTitle() {
    if (i <= titleText.length) {
      title.textContent = titleText.slice(0, i);
      i++;
      setTimeout(typeTitle, 70);
    } else {
      desc.style.visibility = 'visible';
      let j = 0;
      function typeDesc() {
        if (j <= descText.length) {
          desc.textContent = descText.slice(0, j);
          j++;
          setTimeout(typeDesc, 30);
        }
      }
      typeDesc();
    }
  }
  typeTitle();
}

// Envelope modal logic
function showEnvelopeModal() {
  const modal = document.getElementById('envelope-modal');
  if (modal) {
    modal.style.display = 'flex';
  }
}

function closeEnvelopeModal() {
  const modal = document.getElementById('envelope-modal');
  if (modal) {
    modal.style.display = 'none';
  }
}

window.askHerOut = function() {
  showEnvelopeModal();
};
