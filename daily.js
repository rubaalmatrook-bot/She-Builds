/* Fixed collection order; 1 January 2026 UTC starts with Zaha Hadid. */
window.sheBuildsDailyProfile = function (profiles, date = new Date()) {
  const day = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  if (!profiles.length || !Number.isFinite(day)) return null;
  const elapsed = Math.floor((day - Date.UTC(2026, 0, 1)) / 86400000);
  return profiles[((elapsed % profiles.length) + profiles.length) % profiles.length];
};
