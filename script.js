(function () {
  'use strict';

  // --- Services dropdown (desktop) ---
  var wrap = document.querySelector('.has-drop');
  if (wrap) {
    var trigger = wrap.querySelector('.navlink');
    var closeTimer = null;
    var suppress = false;
    function open() { if (suppress) return; clearTimeout(closeTimer); wrap.classList.add('open'); trigger.setAttribute('aria-expanded', 'true'); }
    function close() { wrap.classList.remove('open'); trigger.setAttribute('aria-expanded', 'false'); }
    function delayedClose() { closeTimer = setTimeout(close, 220); }

    wrap.addEventListener('mouseenter', open);
    wrap.addEventListener('mouseleave', delayedClose);
    wrap.addEventListener('focusin', open);
    wrap.addEventListener('focusout', function (e) {
      if (!wrap.contains(e.relatedTarget)) close();
    });
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      wrap.classList.contains('open') ? close() : open();
    });
    document.addEventListener('click', function (e) {
      if (!wrap.contains(e.target)) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && wrap.classList.contains('open')) {
        suppress = true;
        close();
        trigger.focus();
        setTimeout(function () { suppress = false; }, 0);
      }
    });
  }

  // --- Mobile drawer ---
  var burger = document.querySelector('.burger');
  var drawer = document.getElementById('mobile-drawer');
  var scrim = document.querySelector('.drawer-scrim');
  var closeBtn = document.querySelector('.drawer-close');
  if (burger && drawer && scrim) {
    function openDrawer() {
      drawer.classList.add('open'); scrim.classList.add('open');
      burger.setAttribute('aria-expanded', 'true');
      drawer.removeAttribute('aria-hidden');
      var first = drawer.querySelector('a, button');
      if (first) first.focus();
    }
    function closeDrawer() {
      drawer.classList.remove('open'); scrim.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
    }
    burger.addEventListener('click', openDrawer);
    scrim.addEventListener('click', closeDrawer);
    if (closeBtn) closeBtn.addEventListener('click', function () { closeDrawer(); burger.focus(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('open')) { closeDrawer(); burger.focus(); }
    });
  }
})();
