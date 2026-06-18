// ── Setup logic ──────────────────────────────────────────────

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function parsePlayers(raw) {
  const parts = [];
  for (const line of raw.replace(/\r\n/g, '\n').split('\n')) {
    for (const seg of line.split(',')) {
      const s = seg.trim();
      if (s) parts.push(s);
    }
  }
  const seen = new Set();
  const out = [];
  for (const p of parts) {
    if (!seen.has(p.toLowerCase())) { out.push(p); seen.add(p.toLowerCase()); }
  }
  return out;
}

function expansionCounts() {
  const counts = {};
  for (const entry of Object.values(CHARACTERS)) {
    if (entry.expansion) counts[entry.expansion] = (counts[entry.expansion] || 0) + 1;
  }
  return counts;
}

function runSetup(playerNames, expansions, randomiseSeating) {
  const n = playerNames.length;
  if (n < 4 || n > 8) throw new Error('Bang! requires 4–8 players.');
  if (!expansions.length) throw new Error('Select at least one expansion.');

  const pool = Object.entries(CHARACTERS)
    .filter(([, e]) => expansions.includes(e.expansion))
    .map(([name]) => name);

  if (pool.length < n) throw new Error(`Not enough characters: ${pool.length} available for ${n} players.`);

  const draftSize = pool.length >= 2 * n ? 2 : 1;
  const seating = randomiseSeating ? shuffle([...playerNames]) : [...playerNames];
  const sheriff = seating[Math.floor(Math.random() * seating.length)];

  const poolCopy = shuffle([...pool]);
  const assignments = seating.map(player => ({
    player,
    characters: draftSize === 2 ? [poolCopy.pop(), poolCopy.pop()] : [poolCopy.pop()],
  }));

  const roleDist = ROLE_DISTS[n] || [];
  const roleCounts = {};
  for (const r of roleDist) roleCounts[r] = (roleCounts[r] || 0) + 1;
  const roleSummary = ['Sheriff','Deputy','Renegade','Outlaw']
    .filter(r => roleCounts[r])
    .map(r => `${roleCounts[r]}× ${r}`)
    .join(' · ');

  return { expansions, sheriff, seating, assignments, draftSize, poolCount: pool.length, roleSummary };
}

// ── Card lookup logic ─────────────────────────────────────────

function normalise(s) { return s.trim().replace(/\s+/g, ' ').toLowerCase(); }

function buildIndex() {
  const index = {};
  for (const cat of ['characters', 'brown', 'blue', 'green']) {
    for (const [name, entry] of Object.entries(DB[cat] || {})) {
      if (typeof entry !== 'object') continue;
      for (const k of [name, ...(entry.aliases || [])]) {
        const nk = normalise(k);
        if (nk) index[nk] = { cat, name };
      }
    }
  }
  return index;
}

let LOOKUP_INDEX = null;
function getIndex() { return LOOKUP_INDEX || (LOOKUP_INDEX = buildIndex()); }

function lookupCard(q, category) {
  const idx = getIndex();
  const qq = normalise(q);
  if (!qq) return null;

  const hit = idx[qq];
  if (hit && (category === 'all' || category === hit.cat)) {
    const raw = DB[hit.cat][hit.name];
    return { name: hit.name, category: hit.cat, ...raw };
  }

  const cats = category === 'all' ? ['characters','brown','blue','green'] : [category];
  for (const cat of cats) {
    for (const [name, raw] of Object.entries(DB[cat] || {})) {
      if (normalise(name) === qq) return { name, category: cat, ...raw };
    }
  }
  return null;
}
