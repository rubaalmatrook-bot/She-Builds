(() => {
  'use strict';
  const grid = document.querySelector('[data-archive]');
  if (!grid) return; // Home stays a static Scheme C preview; no date-based selection.
  const profiles = (window.sheBuildsProfiles || []).filter(p => p.id && p.name && p.country);
  const target = document.querySelector('#archive-detail');
  const el = (tag, text, className) => {
    const node = document.createElement(tag);
    if (text) node.textContent = text;
    if (className) node.className = className;
    return node;
  };
  const sourcesFor = (p, field) => (field.sourceIds || []).map(id =>
    p.sources.find(s => s.id === id && /^https?:\/\//.test(s.url))).filter(Boolean);
  const verified = (p, field) => field?.status === 'verified' &&
    field.sourceIds?.length > 0 && sourcesFor(p, field).length === field.sourceIds.length;
  function citations(p, field) {
    const line = el('p', '', 'source-links');
    line.append(el('span', 'Sources: '));
    sourcesFor(p, field).forEach((s, i) => {
      if (i) line.append(document.createTextNode(' · '));
      const a = el('a', s.label); a.href = s.url; line.append(a);
    });
    return line;
  }
  function placeholder(label) {
    const box = el('div', '', 'placeholder');
    box.setAttribute('role', 'img'); box.setAttribute('aria-label', `Missing photograph: ${label}`);
    box.append(el('span', `[ADD: ${label}]`)); return box;
  }
  function render(p, focus) {
    target.hidden = false;
    target.replaceChildren();
    const back = el('a', 'Back to the collection ↑'); back.href = '#collection';
    back.addEventListener('click', () => grid.querySelector(`[data-profile-id="${p.id}"]`).focus());
    const heading = el('h2', p.name, 'profile-heading'); heading.id = 'profile-title'; heading.tabIndex = -1;
    target.append(back, heading, el('p', p.country, 'eyebrow'), placeholder(`portrait of ${p.name}`));
    for (const [label, field] of [['Her background', p.background], ['Her approach', p.approach]]) {
      target.append(el('h3', label));
      if (verified(p, field)) target.append(el('p', field.text), citations(p, field));
      else target.append(el('p', 'Information awaiting source verification.'));
    }
    target.append(el('h3', 'Three notable projects'));
    p.projects.forEach((project, index) => {
      const article = el('article', '', 'profile-project');
      article.append(el('p', `Project ${String(index + 1).padStart(2, '0')}`, 'number'));
      if (verified(p, project)) {
        article.append(el('h4', project.name), placeholder(project.name), el('p', project.description));
        if (project.credit) article.append(el('p', project.credit, 'caption'));
        article.append(citations(p, project));
      } else {
        article.append(el('h4', 'Project awaiting verification'), placeholder(`project ${index + 1}, selection awaiting verification`),
          el('p', 'This project slot will be published when its name, attribution and details have been verified.'));
      }
      target.append(article);
    });
    target.append(el('h3', 'A detail to remember'));
    if (verified(p, p.fact)) target.append(el('p', p.fact.text), citations(p, p.fact));
    else target.append(el('p', 'Interesting fact awaiting source verification.'));
    grid.querySelectorAll('[data-profile-id]').forEach(a => {
      if (a.dataset.profileId === p.id) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
    if (focus) { heading.focus(); target.scrollIntoView({block:'start'}); }
  }
  grid.replaceChildren();
  profiles.forEach(p => {
    const a = el('a', '', 'archive-card');
    a.dataset.profileId = p.id;
    a.href = `archive.html?profile=${encodeURIComponent(p.id)}#archive-detail`;
    a.append(placeholder(`portrait of ${p.name}`), el('h2', p.name), el('p', p.country), el('p', 'Read her story →', 'caption'));
    a.addEventListener('click', event => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault(); history.pushState(null, '', a.href); render(p, true);
    });
    grid.append(a);
  });
  function fromURL(focus) {
    const id = new URLSearchParams(location.search).get('profile');
    const selected = profiles.find(p => p.id === id);
    if (selected) render(selected, focus);
    else {
      target.hidden = true;
      grid.querySelectorAll('[aria-current]').forEach(a => a.removeAttribute('aria-current'));
      if (id) { target.hidden = false; target.replaceChildren(el('h2', 'Profile not found'), el('p', 'Choose an architect from the collection above.')); target.firstChild.id = 'profile-title'; }
    }
  }
  window.addEventListener('popstate', () => fromURL(false));
  fromURL(Boolean(new URLSearchParams(location.search).get('profile')));
})();
