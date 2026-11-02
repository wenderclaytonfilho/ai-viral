(() => {
  'use strict';
  const config = window.APP_CONFIG || {};
  const menuBtn = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.querySelector('#mobile-nav');
  const videoDialog = document.querySelector('#video-dialog');
  const player = document.querySelector('#demo-player');
  const playerTitle = document.querySelector('#video-title');

  function setMenu(open) {
    menuBtn.setAttribute('aria-expanded', String(open));
    mobileNav.hidden = !open;
    document.querySelector('.site-header').classList.toggle('nav-open', open);
  }
  menuBtn.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') setMenu(false);
  });

  function validCheckoutUrl(url) {
    try {
      const parsed = new URL(url);
      return parsed.protocol === 'https:' && parsed.hostname.includes('.');
    } catch { return false; }
  }

  // Define o checkout a partir de config.js; os links no HTML também funcionam sem JS.
  if (validCheckoutUrl(config.checkoutUrl)) {
    document.querySelectorAll('[data-checkout]').forEach(link => {
      link.setAttribute('href', config.checkoutUrl.trim());
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    });
  }

  document.querySelectorAll('[data-video]').forEach(button => {
    button.addEventListener('click', () => {
      playerTitle.textContent = button.dataset.title || 'Vídeo de demonstração';
      player.src = button.dataset.video;
      videoDialog.showModal();
      player.play().catch(() => { /* os controles permitem iniciar manualmente */ });
    });
  });
  function stopVideo() {
    player.pause();
    player.removeAttribute('src');
    player.load();
  }
  videoDialog.addEventListener('close', stopVideo);
  document.querySelector('[data-close-video]').addEventListener('click', () => videoDialog.close());
  videoDialog.addEventListener('click', e => {
    if (e.target === videoDialog) videoDialog.close();
  });

  document.querySelector('#year').textContent = new Date().getFullYear();

  // Entrada suave para elementos de conteúdo; sem animar se o usuário prefere movimento reduzido.
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries, ob) => {
      for (const entry of entries) if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        ob.unobserve(entry.target);
      }
    }, { threshold: .09, rootMargin: '0px 0px 30px 0px' });
    document.querySelectorAll('.step-card, .video-tile, .style-item, .bundle-row, .offer-card').forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }
})();
