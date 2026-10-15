(() => {
  'use strict';
  const profiles = (window.sheBuildsProfiles || []).filter(p =>
    p.verified === true && p.id && p.name && p.region && p.background && p.approach && p.fact &&
    p.projects?.length === 3 && p.projects.every(x => x.name && x.description) &&
    p.sources?.length && p.sources.every(s => s.label && /^https?:\/\//.test(s.url)));
  if (!profiles.length) return;
  const el = (tag, text) => { const n = document.createElement(tag); n.textContent = text; return n; };
  function detail(target, p) {
    target.replaceChildren(el('h2', p.name), el('p', p.region));
    for (const [title, text] of [['Her background', p.background], ['Her approach', p.approach]]) {
      target.append(el('h3', title), el('p', text));
    }
    target.append(el('h3', 'Three notable projects'));
    p.projects.forEach(project => target.append(el('h3', project.name), el('p', project.description)));
    target.append(el('h3', 'A detail to remember'), el('p', p.fact), el('h3', 'Sources'));
    p.sources.forEach(source => { const a = el('a', source.label); a.href = source.url; const line = el('p', ''); line.append(a); target.append(line); });
  }
  const feature = document.querySelector('[data-profile]');
  if (feature) {
    const p = profiles[Math.floor(Date.now() / 86400000) % profiles.length];
    detail(feature, p);
    document.querySelectorAll('.projects, .fact').forEach(n => n.hidden = true);
    document.querySelector('.mini-index').hidden = true;
    document.querySelector('.lead span').textContent = `[ADD: image of ${p.name} or her work]`;
    document.querySelector('.lead').setAttribute('aria-label', `Missing image: ${p.name} or her work`);
    document.querySelector('.archive .caption').textContent = 'The daily feature cycles through the verified collection using the UTC calendar date.';
  }
  const grid = document.querySelector('[data-archive]');
  if (grid) {
    grid.replaceChildren();
    document.querySelector('.draft').hidden = true;
    document.querySelector('#draft-profile').hidden = true;
    profiles.forEach(p => {
      const a = el('a', ''); a.className = 'archive-card'; a.href = `archive.html?profile=${encodeURIComponent(p.id)}#archive-detail`;
      const placeholder = el('div', `[ADD: portrait of ${p.name}]`); placeholder.className = 'placeholder'; placeholder.setAttribute('role', 'img'); placeholder.setAttribute('aria-label', `Missing portrait: ${p.name}`);
      a.append(placeholder, el('h2', p.name), el('p', p.region)); grid.append(a);
    });
    const selected = profiles.find(p => p.id === new URLSearchParams(location.search).get('profile'));
    if (selected) { const target = document.querySelector('#archive-detail'); target.hidden = false; detail(target, selected); }
  }
})();
