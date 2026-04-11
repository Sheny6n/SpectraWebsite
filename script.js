/* ============================================================
   SPECTRA — interactions
   ============================================================ */

// ---------- Cursor glow ----------
(() => {
  const glow = document.getElementById('cursorGlow');
  if (!glow) return;
  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let tx = x, ty = y;

  window.addEventListener('pointermove', (e) => {
    tx = e.clientX;
    ty = e.clientY;
  });

  const tick = () => {
    x += (tx - x) * 0.14;
    y += (ty - y) * 0.14;
    glow.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    requestAnimationFrame(tick);
  };
  tick();
})();

// ---------- Terminal typewriter ----------
(() => {
  const term = document.getElementById('terminal');
  if (!term) return;

  const lines = [
    { t: 'span', cls: 't-prompt', text: 'spectra@local' },
    { t: 'span', cls: '',          text: ':~$ ' },
    { t: 'span', cls: '',          text: 'spectra diagnose --all\n' },
    { t: 'span', cls: 't-dim',     text: '[i] running 14 health checks...\n\n' },

    { t: 'span', cls: 't-ok',      text: '  [✓] ' },
    { t: 'span', cls: '',          text: 'keychain integrity ........... ' },
    { t: 'span', cls: 't-ok',      text: 'OK\n' },

    { t: 'span', cls: 't-ok',      text: '  [✓] ' },
    { t: 'span', cls: '',          text: 'wallet.dat read .............. ' },
    { t: 'span', cls: 't-ok',      text: 'OK ' },
    { t: 'span', cls: 't-dim',     text: '(legacy v0.3, 217 keys)\n' },

    { t: 'span', cls: 't-ok',      text: '  [✓] ' },
    { t: 'span', cls: '',          text: 'btc node sync ................ ' },
    { t: 'span', cls: 't-ok',      text: 'OK ' },
    { t: 'span', cls: 't-dim',     text: '(block 882,140 / tip)\n' },

    { t: 'span', cls: 't-warn',    text: '  [!] ' },
    { t: 'span', cls: '',          text: 'eth peer count ............... ' },
    { t: 'span', cls: 't-warn',    text: 'LOW ' },
    { t: 'span', cls: 't-dim',     text: '(2 peers, expected ≥ 8)\n' },
    { t: 'span', cls: 't-dim',     text: '       └─ suggest: rotate bootstrap nodes\n' },

    { t: 'span', cls: 't-ok',      text: '  [✓] ' },
    { t: 'span', cls: '',          text: 'mempool fee oracle ........... ' },
    { t: 'span', cls: 't-ok',      text: 'OK ' },
    { t: 'span', cls: 't-dim',     text: '(median 12 sat/vB)\n' },

    { t: 'span', cls: 't-ok',      text: '  [✓] ' },
    { t: 'span', cls: '',          text: 'tor circuit .................. ' },
    { t: 'span', cls: 't-ok',      text: 'OK ' },
    { t: 'span', cls: 't-dim',     text: '(3 hops, exit DE)\n' },

    { t: 'span', cls: 't-ok',      text: '  [✓] ' },
    { t: 'span', cls: '',          text: 'ledger device ................ ' },
    { t: 'span', cls: 't-ok',      text: 'OK ' },
    { t: 'span', cls: 't-dim',     text: '(Nano S+, fw 1.1.1)\n' },

    { t: 'span', cls: 't-ok',      text: '  [✓] ' },
    { t: 'span', cls: '',          text: 'reproducible build hash ...... ' },
    { t: 'span', cls: 't-ok',      text: 'MATCH\n\n' },

    { t: 'span', cls: 't-dim',     text: '13/14 checks passed · 1 warning · 0 errors\n' },
    { t: 'span', cls: 't-prompt',  text: 'spectra@local' },
    { t: 'span', cls: '',          text: ':~$ ' },
  ];

  // Build a single hidden buffer of all text, type into terminal char-by-char.
  let lineIdx = 0;
  let charIdx = 0;
  let currentSpan = null;

  const newSpan = (cls) => {
    const s = document.createElement('span');
    if (cls) s.className = cls;
    term.appendChild(s);
    return s;
  };

  const typeChar = () => {
    if (lineIdx >= lines.length) {
      const cursor = document.createElement('span');
      cursor.className = 'cursor-blink';
      term.appendChild(cursor);
      return;
    }
    const line = lines[lineIdx];
    if (!currentSpan) currentSpan = newSpan(line.cls);
    const char = line.text[charIdx];
    currentSpan.textContent += char;
    charIdx++;
    if (charIdx >= line.text.length) {
      lineIdx++;
      charIdx = 0;
      currentSpan = null;
    }
    // variable speed: faster mid-line, pause on newline
    const delay = char === '\n' ? 90 : (Math.random() * 6 + 4);
    setTimeout(typeChar, delay);
  };

  // Start when section is in view
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      typeChar();
      observer.disconnect();
    }
  }, { threshold: 0.25 });
  observer.observe(term);
})();

// ---------- Reveal on scroll ----------
(() => {
  const els = document.querySelectorAll('.feature, .legacy-card, .dl-card, .hero-stats > div');
  els.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .7s ease, transform .7s ease';
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 40);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => io.observe(el));
})();

// ---------- Click-to-copy donation addresses ----------
(() => {
  document.querySelectorAll('.addr code').forEach(code => {
    code.style.cursor = 'pointer';
    code.title = 'Click to copy';
    code.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(code.textContent);
        const orig = code.textContent;
        code.textContent = '✓ copied';
        setTimeout(() => { code.textContent = orig; }, 1200);
      } catch { /* clipboard blocked */ }
    });
  });
})();
