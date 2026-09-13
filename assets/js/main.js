/* ==========================================================================
   CityRideTaxi — landing page interactions
   Vanilla JS, no dependencies. Runs deferred.
   ========================================================================== */
(function () {
  'use strict';

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  /* ------------------------------------------------------------------
     Toast
     ------------------------------------------------------------------ */
  var toastEl = $('#toast');
  var toastText = $('#toast-text');
  var toastTimer;

  function toast(message) {
    if (!toastEl || !toastText) return;
    toastText.textContent = message;
    toastEl.classList.add('is-visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toastEl.classList.remove('is-visible');
    }, 3600);
  }

  $$('[data-toast]').forEach(function (el) {
    el.addEventListener('click', function () { toast(el.getAttribute('data-toast')); });
  });

  /* ------------------------------------------------------------------
     Navigation drawer
     ------------------------------------------------------------------ */
  var drawer = $('#nav-drawer');
  var scrim = $('#drawer-scrim');
  var openBtn = $('#menu-toggle');
  var closeBtn = $('#menu-close');
  var lastFocused = null;

  function openDrawer() {
    if (!drawer) return;
    lastFocused = document.activeElement;
    scrim.hidden = false;
    // Force a frame so the transition runs from the hidden state.
    window.requestAnimationFrame(function () { scrim.classList.add('is-open'); });
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    openBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('is-locked');
    var first = $('.drawer__cta a', drawer);
    if (first) first.focus();
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    scrim.classList.remove('is-open');
    openBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('is-locked');
    window.setTimeout(function () { scrim.hidden = true; }, 300);
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }

  if (openBtn) openBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (scrim) scrim.addEventListener('click', closeDrawer);
  $$('.drawer__link, .drawer__cta a').forEach(function (link) {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (drawer && drawer.classList.contains('is-open')) closeDrawer();
  });

  // Trap focus inside the drawer while it is open.
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Tab' || !drawer || !drawer.classList.contains('is-open')) return;
    var focusables = $$('a[href], button:not([disabled])', drawer);
    if (!focusables.length) return;
    var first = focusables[0];
    var last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  /* ------------------------------------------------------------------
     App download tabs — customer / driver / direct APK
     ------------------------------------------------------------------ */
  var APPS = {
    customer: {
      heading: 'CityRide for Android & iOS',
      badge: 'v2.4.1 Stable',
      desc: 'Instant booking, fare lock, and live track your driver directly from your smartphone.',
      submeta: 'No Play Store required • 45.8 MB • SHA-256 Verified',
      pkg: 'cityride-customer-release.apk',
      href: 'assets/apks/cityride-customer-release.apk',
      abi: 'Universal APK (ARM64, v7a, x86_64) • Android 6.0+',
      size: '45.8 MB',
      cta: 'Download Direct APK'
    },
    driver: {
      heading: 'CityRide Captain App',
      badge: 'v2.4.0 Stable',
      desc: 'Accept trip dispatches, track weekly settlements, and access GPS navigation assistance.',
      submeta: 'Captain build • 45.8 MB • SHA-256 Verified',
      pkg: 'cityride-driver-release.apk',
      href: 'assets/apks/cityride-driver-release.apk',
      abi: 'Universal APK (ARM64, v7a) • Android 8.0+',
      size: '45.8 MB',
      cta: 'Download Captain APK'
    },
    vendor: {
      heading: 'CityRide Vendor Console',
      badge: 'v1.2.0 Stable',
      desc: 'Manage your fleet, track driver performance, and monitor daily revenue streams from a centralized dashboard.',
      submeta: 'Vendor build • 45.8 MB • SHA-256 Verified',
      pkg: 'cityride-vendor-release.apk',
      href: 'assets/apks/cityride-vendor-release.apk',
      abi: 'Universal APK (ARM64, v7a) • Android 8.0+',
      size: '45.8 MB',
      cta: 'Download Vendor APK'
    },
    apk: {
      heading: 'Direct APK Mirror — All Builds',
      badge: 'Standalone Sideload',
      desc: 'Signed standalone packages hosted on the CityRide release mirror. No store account required.',
      submeta: 'Customer 45 MB • Captain 45 MB • Fleet Console 45 MB',
      pkg: 'cityride-customer-release.apk',
      href: 'assets/apks/cityride-customer-release.apk',
      abi: 'Universal bundle (ARM64, v7a, x86_64) • Android 6.0+',
      size: '137 MB',
      cta: 'Download All Direct APKs'
    }
  };

  var tabButtons = $$('.tabs__btn');
  var panel = $('#apk-downloads');

  function fillApp(key) {
    var data = APPS[key];
    if (!data || !panel) return;
    Object.keys(data).forEach(function (field) {
      if (field === 'href') return;
      var node = $('[data-app="' + field + '"]', panel);
      if (node) node.textContent = data[field];
    });
    var dl = $('#apk-download');
    if (dl) {
      dl.setAttribute('download', data.pkg);
      if (data.href) dl.setAttribute('href', data.href);
    }
  }

  function selectTab(key, focus) {
    tabButtons.forEach(function (btn) {
      var selected = btn.getAttribute('data-tab') === key;
      btn.setAttribute('aria-selected', selected ? 'true' : 'false');
      if (selected && focus) btn.focus();
      if (selected && panel) panel.setAttribute('aria-labelledby', btn.id);
    });
    fillApp(key);
  }

  tabButtons.forEach(function (btn, index) {
    btn.addEventListener('click', function () {
      selectTab(btn.getAttribute('data-tab'));
    });
    // Roving arrow-key navigation across the tablist.
    btn.addEventListener('keydown', function (e) {
      var next = null;
      if (e.key === 'ArrowRight') next = tabButtons[(index + 1) % tabButtons.length];
      if (e.key === 'ArrowLeft') next = tabButtons[(index - 1 + tabButtons.length) % tabButtons.length];
      if (e.key === 'Home') next = tabButtons[0];
      if (e.key === 'End') next = tabButtons[tabButtons.length - 1];
      if (!next) return;
      e.preventDefault();
      selectTab(next.getAttribute('data-tab'), true);
    });
  });

  var verifyBtn = $('#verify-sha');
  if (verifyBtn) {
    verifyBtn.addEventListener('click', function () {
      var sum = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(sum).then(function () {
          toast('SHA-256 checksum copied to clipboard.');
        }, function () {
          toast('SHA-256: ' + sum.slice(0, 16) + '…');
        });
      } else {
        toast('SHA-256: ' + sum.slice(0, 16) + '…');
      }
    });
  }

  var guideBtn = $('#sideload-guide');
  if (guideBtn) {
    guideBtn.addEventListener('click', function () {
      toast('1. Tap Download → 2. Keep file → 3. Allow unknown sources → 4. Install.');
    });
  }

  /* ------------------------------------------------------------------
     FAQ accordion (one panel open at a time)
     ------------------------------------------------------------------ */
  $$('#faq-accordion .faq__btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';

      $$('#faq-accordion .faq__btn').forEach(function (other) {
        other.setAttribute('aria-expanded', 'false');
      });
      $$('#faq-accordion .faq__panel').forEach(function (p) {
        p.setAttribute('data-open', 'false');
      });

      if (!expanded) {
        btn.setAttribute('aria-expanded', 'true');
        var target = document.getElementById(btn.getAttribute('aria-controls'));
        if (target) target.setAttribute('data-open', 'true');
      }
    });
  });



  /* ------------------------------------------------------------------
     Scroll reveal
     ------------------------------------------------------------------ */
  var reveals = $$('[data-reveal]');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function revealAll() {
    reveals.forEach(function (el) { el.classList.add('is-revealed'); });
  }

  if (!('IntersectionObserver' in window) || reduceMotion) {
    revealAll();
  } else {
    var observer = new IntersectionObserver(function (entries) {
      var shown = 0;
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        window.setTimeout(function () { el.classList.add('is-revealed'); }, shown * 60);
        shown++;
        observer.unobserve(el);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });

    reveals.forEach(function (el) { observer.observe(el); });

    // Safety net: nothing stays hidden if the observer never delivers.
    window.setTimeout(revealAll, 2500);
  }

  /* ------------------------------------------------------------------
     Back to top + active section highlighting
     ------------------------------------------------------------------ */
  var toTop = $('#to-top');
  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }

  var navLinks = $$('.site-nav__link');
  var sections = navLinks
    .map(function (link) { return document.querySelector(link.getAttribute('href')); })
    .filter(Boolean);

  function onScroll() {
    if (toTop) toTop.classList.toggle('is-visible', window.scrollY > 600);

    if (!sections.length) return;
    var marker = window.scrollY + window.innerHeight * 0.35;
    var current = sections[0];
    sections.forEach(function (section) {
      if (section.offsetTop <= marker) current = section;
    });
    navLinks.forEach(function (link) {
      var isCurrent = link.getAttribute('href') === '#' + current.id;
      if (isCurrent) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      onScroll();
      ticking = false;
    });
  }, { passive: true });

  onScroll();

  /* ------------------------------------------------------------------
     Live telemetry ticker — keeps the hero ETA / radar readouts moving
     ------------------------------------------------------------------ */
  if (!reduceMotion) {
    var speedEl = $('.radar__foot .t-telemetry');
    if (speedEl) {
      window.setInterval(function () {
        var speed = 42 + Math.floor(Math.random() * 14);
        speedEl.textContent = 'Speed: ' + speed + ' km/h';
      }, 3200);
    }
  }
})();
