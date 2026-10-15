(() => {
  'use strict';
  const grid = document.querySelector('[data-archive]');
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
  function hasPhoto(image) {
    return image?.status === 'available' && image.path && image.alt && image.credit &&
      image.license && image.sourcePage && image.licenseUrl;
  }
  function photoCredit(image) {
    const caption = el('p', '', 'caption photo-credit');
    caption.append(document.createTextNode(`Photo: ${image.credit} · `));
    const source = el('a', image.sourceLabel || 'Wikimedia Commons source'); source.href = image.sourcePage;
    const license = el('a', image.license); license.href = image.licenseUrl;
    caption.append(source, document.createTextNode(' · '), license);
    if (image.changes) caption.append(document.createTextNode(`. ${image.changes}`));
    return caption;
  }
  function photograph(image, label, includeCredit = true) {
    if (!hasPhoto(image)) return placeholder(label);
    const frame = el('div', '', 'photo-frame');
    const fallback = placeholder(label);
    const img = el('img'); img.alt = image.alt; img.hidden = true;
    img.decoding = 'async';
    if (image.dimensions) [img.width, img.height] = image.dimensions;
    const caption = includeCredit ? photoCredit(image) : null;
    if (caption) caption.hidden = true;
    img.addEventListener('load', () => {
      img.hidden = false; fallback.hidden = true;
      if (caption) caption.hidden = false;
    });
    img.addEventListener('error', () => {
      img.hidden = true; fallback.hidden = false;
      if (caption) caption.hidden = true;
    });
    frame.append(fallback, img);
    if (caption) frame.append(caption);
    img.src = image.path;
    return frame;
  }
  const daily = document.querySelector('[data-daily-portrait]');
  if (daily) {
    let displayedId;
    let timer;
    function updateDaily() {
      clearTimeout(timer);
      const now = new Date();
      const p = window.sheBuildsDailyProfile(profiles, now);
      if (p && p.id !== displayedId) {
        displayedId = p.id;
        daily.replaceChildren(photograph(p.portrait, `portrait of ${p.name}`));
        const copy = el('div', '', 'profile-copy');
        copy.append(el('p', `${now.toISOString().slice(0, 10)} · Today's architect · UTC`, 'eyebrow'), el('h2', p.name), el('p', p.country, 'eyebrow'));
        for (const [label, field] of [['Her background', p.background], ['Her approach', p.approach]]) {
          if (verified(p, field)) copy.append(el('h3', label), el('p', field.text), citations(p, field));
        }
        const link = el('a', `Read ${p.name}’s full Archive profile →`);
        link.href = `archive.html?profile=${encodeURIComponent(p.id)}#archive-detail`;
        copy.append(link);
        document.querySelector('[data-profile]').replaceChildren(copy);
        const projects = document.querySelector('[data-daily-projects]');
        projects.replaceChildren();
        p.projects.forEach((project, index) => {
          if (!verified(p, project)) return;
          const article = el('article');
          const text = el('div');
          text.append(el('p', `Project ${String(index + 1).padStart(2, '0')}`, 'number'), el('h3', project.name), el('p', project.description));
          if (project.credit) text.append(el('p', project.credit, 'caption'));
          text.append(citations(p, project));
          article.append(photograph(project.image, project.name), text);
          projects.append(article);
        });
        const fact = document.querySelector('[data-daily-fact]');
        fact.replaceChildren();
        if (verified(p, p.fact)) fact.append(el('p', p.fact.text), citations(p, p.fact));
      }
      const next = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1);
      timer = setTimeout(updateDaily, Math.max(1, next - now.getTime()));
    }
    updateDaily();
    document.addEventListener('visibilitychange', () => { if (!document.hidden) updateDaily(); });
    window.addEventListener('pageshow', updateDaily);
  }
  if (!grid) return;
  function render(p, focus) {
    target.hidden = false;
    target.replaceChildren();
    const back = el('a', 'Back to the collection ↑'); back.href = '#collection';
    back.addEventListener('click', () => grid.querySelector(`[data-profile-id="${p.id}"]`).focus());
    const heading = el('h2', p.name, 'profile-heading'); heading.id = 'profile-title'; heading.tabIndex = -1;
    target.append(back, heading, el('p', p.country, 'eyebrow'), photograph(p.portrait, `portrait of ${p.name}`));
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
        article.append(el('h4', project.name), photograph(project.image, project.name), el('p', project.description));
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
    a.append(photograph(p.portrait, `portrait of ${p.name}`, false), el('h2', p.name), el('p', p.country), el('p', 'Read her story →', 'caption'));
    a.addEventListener('click', event => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault(); history.pushState(null, '', a.href); render(p, true);
    });
    if (hasPhoto(p.portrait)) {
      const entry = el('div', '', 'archive-entry');
      entry.append(a, photoCredit(p.portrait)); grid.append(entry);
    } else grid.append(a);
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
