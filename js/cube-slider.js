// 3D倾斜效果
document.querySelectorAll('.solution-card').forEach(card => {
  card.addEventListener('mousemove', function(e) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px) scale(1.02)`;
  });

  card.addEventListener('mouseleave', function() {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
  });
});

// 3D立方体轮播
(function() {
  const slides = [
    'images/home/carousel-1.jpg',
    'images/home/carousel-2.jpg',
    'images/home/carousel-3.jpg',
    'images/home/carousel-4.jpg',
  ];

  const intro = document.getElementById('intro');
  const cubeContainer = document.getElementById('cubeContainer');
  const cubeWrapper = document.getElementById('cubeWrapper');
  const seedsContainer = document.getElementById('seedsContainer');
  const outro = document.getElementById('outro');

  if (!cubeContainer) return;

  let currentSlide = 0;
  let slideCount = 0;
  let isAnimating = false;
  let autoTimer = null;
  const totalSlides = 4;

  function createCube(img) {
    cubeWrapper.innerHTML = '';
    const faces = ['front', 'back', 'left', 'right', 'top', 'bottom'];
    faces.forEach(face => {
      const div = document.createElement('div');
      div.className = `cube-face ${face}`;
      div.innerHTML = `<img loading="lazy" src="${img}" alt="轮播展示">`;
      cubeWrapper.appendChild(div);
    });
  }

  function createOrbitParticles() {
    let orbitParticles = document.getElementById('orbitParticles');
    if (!orbitParticles) {
      orbitParticles = document.createElement('div');
      orbitParticles.className = 'orbit-particles';
      orbitParticles.id = 'orbitParticles';
      cubeContainer.appendChild(orbitParticles);
    }
    orbitParticles.innerHTML = '';
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'orbit-particle';
      const size = 4 + Math.random() * 6;
      const dist = 200 + Math.random() * 50;
      const angle = (i / 12) * Math.PI * 2;
      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: calc(50% + ${Math.cos(angle) * dist}px);
        top: calc(50% + ${Math.sin(angle) * dist}px);
      `;
      orbitParticles.appendChild(particle);
    }
  }

  function seedSVG() {
    return `<svg viewBox="0 0 20 20">
      ${[0,45,90,135,180,225,270,315].map(a => `
        <line x1="10" y1="10" x2="${10+Math.cos(a*Math.PI/180)*8}" y2="${10-Math.sin(a*Math.PI/180)*8}" stroke="rgba(255,255,255,0.9)" stroke-width="0.5"/>
        <circle cx="${10+Math.cos(a*Math.PI/180)*9}" cy="${10-Math.sin(a*Math.PI/180)*9}" r="1" fill="rgba(255,255,255,0.7)"/>
      `).join('')}
    </svg>`;
  }

  function blowCube() {
    if (isAnimating) return;
    isAnimating = true;

    cubeWrapper.classList.add('blown');
    const orbitParticles = document.getElementById('orbitParticles');
    if (orbitParticles) orbitParticles.style.opacity = '0';

    const rect = cubeContainer.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    for (let i = 0; i < 200; i++) {
      setTimeout(() => createSeed(cx + (Math.random()-0.5)*150, cy + (Math.random()-0.5)*150), i * 15);
    }

    setTimeout(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      slideCount++;

      if (slideCount >= totalSlides) {
        showOutro();
        return;
      }

      cubeWrapper.classList.remove('blown');
      if (orbitParticles) orbitParticles.style.opacity = '1';
      createCube(slides[currentSlide]);
      isAnimating = false;
      startAuto();
    }, 3500);
  }

  function createSeed(x, y) {
    const seed = document.createElement('div');
    seed.className = 'seed';
    seed.innerHTML = `<div class="seed-fluff">${seedSVG()}</div><div class="seed-body"></div>`;

    const angle = Math.random() * Math.PI * 2;
    const dist = 300 + Math.random() * 500;
    const duration = 2000 + Math.random() * 1500;
    const rot = (Math.random() - 0.5) * 720;

    seed.style.cssText = `left:${x}px;top:${y}px;`;
    seedsContainer.appendChild(seed);

    seed.animate([
      { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
      { transform: `translate(${Math.cos(angle)*dist}px,${Math.sin(angle)*dist-200}px) rotate(${rot}deg)`, opacity: 0 }
    ], { duration, easing: 'ease-out' });

    setTimeout(() => seed.remove(), duration);
  }

  function startAuto() {
    clearTimeout(autoTimer);
    autoTimer = setTimeout(blowCube, 1500);
  }

  cubeContainer.onclick = blowCube;

  function showOutro() {
    cubeContainer.style.transition = 'opacity 0.8s ease';
    cubeContainer.style.opacity = '0';

    setTimeout(() => {
      cubeContainer.style.display = 'none';
      outro.classList.add('active');

      setTimeout(() => {
        restartAnimation();
      }, 3000);
    }, 800);
  }

  function restartAnimation() {
    outro.classList.remove('active');

    currentSlide = 0;
    slideCount = 0;
    isAnimating = false;

    cubeContainer.style.opacity = '0';
    cubeContainer.classList.remove('visible');
    cubeWrapper.classList.remove('blown');
    const orbitParticles = document.getElementById('orbitParticles');
    if (orbitParticles) orbitParticles.style.opacity = '1';

    intro.classList.remove('hidden');
    const splitLeft = intro.querySelector('.split-left');
    const splitRight = intro.querySelector('.split-right');
    const centerLine = intro.querySelector('.center-line');

    if (splitLeft) {
      splitLeft.style.animation = 'none';
      splitRight.style.animation = 'none';
      if (centerLine) centerLine.style.animation = 'none';
      void splitLeft.offsetWidth;
      splitLeft.style.animation = '';
      splitRight.style.animation = '';
      if (centerLine) centerLine.style.animation = '';
    }

    setTimeout(() => {
      intro.classList.add('hidden');
      cubeContainer.style.display = 'flex';
      cubeContainer.classList.add('visible');
      cubeContainer.style.opacity = '1';
      createCube(slides[0]);
      createOrbitParticles();
      startAuto();
    }, 2800);
  }

  // 分屏开场2.8秒后进入立方体
  setTimeout(() => {
    intro.classList.add('hidden');
    cubeContainer.classList.add('visible');
    createCube(slides[0]);
    createOrbitParticles();
    startAuto();
  }, 2800);
})();
