(() => {
  'use strict';
  const protectedPage = document.body.hasAttribute('data-auth-protected');
  const content = document.querySelector('[data-auth-content]');
  const gate = document.querySelector('[data-auth-gate]');
  const status = document.querySelector('[data-auth-status]');
  const form = document.querySelector('[data-auth-form]');
  const submit = form?.querySelector('[type="submit"]');
  const modeButtons = [...document.querySelectorAll('[data-auth-mode]')];
  const logout = document.querySelector('[data-logout]');
  let mode = 'login';
  let busy = false;
  let client;
  let checking = false;
  let revision = 0;
  const message = text => { if (status) status.textContent = text; };
  function conceal() {
    if (content) content.hidden = true;
    if (gate) gate.hidden = false;
  }
  function showSession(session) {
    if (!protectedPage) return;
    if (!session) {
      conceal();
      location.replace('login.html');
      return;
    }
    content.hidden = false;
    gate.hidden = true;
  }
  function setBusy(value) {
    busy = value;
    if (form) form.setAttribute('aria-busy', String(value));
    if (submit) submit.disabled = value;
    modeButtons.forEach(button => { button.disabled = value; });
  }
  async function checkSession() {
    if (checking) return;
    checking = true;
    const current = revision;
    try {
      const { data, error } = await client.auth.getSession();
      if (error) throw error;
      if (current !== revision) return;
      showSession(data.session);
    } catch {
      conceal();
      message('We could not check your session. Check your connection and reload this page.');
    } finally {
      checking = false;
    }
  }
  // Hidden HTML content keeps the gate closed even if scripts or the CDN fail.
  try {
    const config = window.sheBuildsSupabase;
    const url = new URL(config?.url);
    if (url.protocol !== 'https:' || url.pathname !== '/' ||
        !/^sb_publishable_[A-Za-z0-9_-]+$/.test(config?.publishableKey || '')) {
      throw new Error('Invalid public configuration');
    }
    if (!window.supabase?.createClient) throw new Error('Auth library unavailable');
    client = window.supabase.createClient(url.origin, config.publishableKey);
  } catch {
    conceal();
    message('Sign-in is unavailable. Check the public Supabase configuration and your connection, then reload.');
    return;
  }
  client.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_OUT') {
      revision += 1;
      if (protectedPage) showSession(null);
    } else if (session && protectedPage) {
      revision += 1;
      showSession(session);
    }
  });
  if (protectedPage) {
    checkSession();
    // Hide cached content and check again when returning with Back/Forward.
    window.addEventListener('pagehide', conceal);
    window.addEventListener('pageshow', event => {
      if (event.persisted) { conceal(); checkSession(); }
    });
    logout.addEventListener('click', async () => {
      logout.disabled = true;
      const feedback = document.querySelector('[data-logout-status]');
      feedback.textContent = 'Logging out…';
      try {
        const { error } = await client.auth.signOut({ scope: 'local' });
        if (error) throw error;
        conceal();
        location.replace('login.html');
      } catch {
        feedback.textContent = 'Log out failed. Check your connection and try again.';
        logout.disabled = false;
      }
    });
  }
  if (form) {
    setBusy(false);
    message('Welcome. Log in or create an account to explore the collection.');
    modeButtons.forEach(button => button.addEventListener('click', () => {
      if (busy) return;
      mode = button.dataset.authMode;
      const creating = mode === 'signup';
      modeButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      document.querySelector('[data-form-title]').textContent = creating ? 'Create your account' : 'Welcome back';
      submit.textContent = creating ? 'Create account' : 'Log in';
      form.elements.password.autocomplete = creating ? 'new-password' : 'current-password';
      form.elements.password.minLength = creating ? 6 : 1;
      form.elements.password.value = '';
      message(creating ? 'Use an email address and a password of at least 6 characters.' : 'Enter your email and password to continue.');
    }));
    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (busy || !form.reportValidity()) return;
      setBusy(true);
      message(mode === 'signup' ? 'Creating your account…' : 'Logging in…');
      try {
        const credentials = { email: form.elements.email.value.trim(), password: form.elements.password.value };
        const { data, error } = mode === 'signup'
          ? await client.auth.signUp(credentials)
          : await client.auth.signInWithPassword(credentials);
        if (error) throw error;
        form.elements.password.value = '';
        if (data.session) {
          message('Success. Opening She Builds…');
          location.replace('index.html');
        } else {
          message(mode === 'signup'
            ? 'Check your email for a confirmation link, then return here to log in.'
            : 'No session was created. Please try logging in again.');
        }
      } catch (error) {
        message(error.message || 'Unable to connect. Check your connection and try again.');
      } finally {
        setBusy(false);
      }
    });
  }
})();
