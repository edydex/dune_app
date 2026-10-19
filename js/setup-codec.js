(function(root) {
  const decode = hash => {
    const m = /^#?([ahefgbcmitor]+)(?:_([01]{4}))?(_kh2027)?$/.exec(hash);
    if (!m || ['battle','cheat','gameflow','tracker'].includes(hash.replace(/^#/,''))) return null;
    return {factions:[...new Set(m[1])],toggles:m[2]||null,kh:!!m[3]};
  };
  root.DuneSetup = {decode};
  if (typeof module !== 'undefined') module.exports = root.DuneSetup;
})(typeof window !== 'undefined' ? window : globalThis);
