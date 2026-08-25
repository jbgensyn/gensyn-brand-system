#!/usr/bin/env node
/**
 * Generates css/gensyn-tokens.css from tokens/*.json.
 * Run: npm run build:css   (or: node scripts/build-css.mjs)
 *
 * Never hand-edit css/gensyn-tokens.css — change the JSON and rerun this.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = (f) => JSON.parse(readFileSync(resolve(root, f), 'utf8'));

const files = ['tokens/colors.json', 'tokens/typography.json', 'tokens/spacing.json', 'tokens/charts.json', 'tokens/states.json'];
const tree = {};
for (const f of files) {
  const data = read(f);
  for (const [k, v] of Object.entries(data)) {
    if (k.startsWith('$')) continue;
    tree[k] = { ...(tree[k] || {}), ...v };
  }
}

/* Resolve {a.b.c} references against the merged tree. */
function lookup(path) {
  return path.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), tree);
}
function resolveValue(value, seen = new Set()) {
  if (typeof value !== 'string') return value;
  return value.replace(/\{([^}]+)\}/g, (_, path) => {
    if (seen.has(path)) throw new Error(`Circular token reference: ${path}`);
    const node = lookup(path);
    if (!node || node.$value === undefined) throw new Error(`Unresolved token reference: {${path}}`);
    /* Preserve indirection: a reference to a token that has its own custom
       property becomes var(--that), so overriding the base cascades through
       every alias. Only inline the literal when the target has no CSS name. */
    const target = cssName(path);
    if (target) return `var(${target})`;
    return resolveValue(node.$value, new Set([...seen, path]));
  });
}

/* Map token paths to the CSS custom property names the system publishes. */
const NAME_MAP = [
  [/^color\.brand\.(.+)$/,    (m) => `--gensyn-${m[1]}`],
  [/^color\.accent\.(.+)$/,   (m) => `--gensyn-${m[1]}`],
  [/^color\.neutral\.(.+)$/,  (m) => `--neutral-${m[1]}`],
  [/^color\.white$/,          () => `--white`],
  [/^color\.category\.(.+)$/, (m) => `--color-cat-${m[1]}`],
  [/^color\.semantic\.(.+)$/, (m) => `--color-${m[1]}`],
  [/^font\.family\.(.+)$/,    (m) => `--font-${m[1]}`],
  [/^font\.weight\.(.+)$/,    (m) => `--weight-${m[1]}`],
  [/^font\.size\.(.+)$/,      (m) => `--text-${m[1]}`],
  [/^font\.lineHeight\.(.+)$/, (m) => `--leading-${m[1]}`],
  [/^font\.letterSpacing\.(.+)$/, (m) => `--tracking-${m[1]}`],
  [/^space\.(.+)$/,           (m) => `--space-${m[1]}`],
  [/^radius\.(.+)$/,          (m) => `--radius-${m[1]}`],
  [/^shadow\.(.+)$/,          (m) => `--shadow-${m[1]}`],
  [/^border\.(.+)$/,          (m) => `--border-${m[1]}`],
  [/^motion\.ease\.(.+)$/,    (m) => `--ease-${m[1]}`],
  [/^motion\.duration\.(.+)$/, (m) => `--duration-${m[1]}`],
  [/^breakpoint\.(.+)$/,      (m) => `--breakpoint-${m[1]}`],
  [/^layout\.(.+)$/,          (m) => `--${m[1]}`],
  [/^chart\.series\.(.+)$/,   (m) => `--chart-series-${m[1]}`],
  [/^chart\.sequential\.(.+)$/, (m) => `--chart-seq-${m[1]}`],
  [/^chart\.diverging\.(.+)$/, (m) => `--chart-div-${m[1]}`],
  [/^chart\.support\.(.+)$/,  (m) => `--chart-${m[1]}`],
  [/^chart\.shape\.(.+)$/,    (m) => `--chart-${m[1]}`],
  [/^state\.surface\.(.+)$/,  (m) => `--state-bg-${m[1]}`],
  [/^state\.opacity\.(.+)$/,  (m) => `--state-opacity-${m[1]}`],
  [/^state\.status\.(.+)$/,   (m) => `--color-${m[1]}`],
];
function cssName(path) {
  for (const [re, fn] of NAME_MAP) {
    const m = path.match(re);
    if (m) return fn(m);
  }
  return null;
}

/* Walk the tree, emitting grouped sections in a stable order. */
const GROUPS = [
  ['Brand Colors', /^color\.brand\./],
  ['Supporting Colors', /^color\.accent\./],
  ['Neutrals', /^(color\.neutral\.|color\.white)/],
  ['Semantic Aliases', /^color\.semantic\./],
  ['Category Colors', /^color\.category\./],
  ['Status', /^state\.status\./],
  ['Interaction States', /^state\.(surface|opacity)\./],
  ['Data Visualization', /^chart\./],
  ['Typography', /^font\./],
  ['Spacing', /^space\./],
  ['Radius', /^radius\./],
  ['Shadows', /^shadow\./],
  ['Borders', /^border\./],
  ['Motion', /^motion\./],
  ['Layout', /^(layout\.|breakpoint\.)/],
];

const flat = [];
(function walk(node, path) {
  for (const [key, value] of Object.entries(node)) {
    if (key.startsWith('$')) continue;
    const next = path ? `${path}.${key}` : key;
    if (value && typeof value === 'object' && value.$value !== undefined) {
      flat.push([next, resolveValue(value.$value), value.$description]);
    } else if (value && typeof value === 'object') {
      walk(value, next);
    }
  }
})(tree, '');

let out = `/* ============================================================
   Gensyn Design System — CSS Custom Properties
   Source: github.com/jbgensyn/gensyn-brand-system
   Version: ${read('design-system-spec.json').version}

   GENERATED FILE — do not edit by hand.
   Change tokens/*.json and run: npm run build:css
   ============================================================ */

:root {
`;

for (const [label, re] of GROUPS) {
  const rows = flat.filter(([p]) => re.test(p) && cssName(p));
  if (!rows.length) continue;
  const pad = Math.max(...rows.map(([p]) => cssName(p).length));
  out += `\n  /* ── ${label} ${'─'.repeat(Math.max(0, 54 - label.length))} */\n`;
  for (const [p, v, desc] of rows) {
    const name = cssName(p);
    out += `  ${name}:${' '.repeat(pad - name.length + 1)}${v};`;
    out += desc ? `  /* ${desc} */\n` : `\n`;
  }
}
out += `}\n`;

const unmapped = flat.filter(([p]) => !cssName(p)).map(([p]) => p);
mkdirSync(resolve(root, 'css'), { recursive: true });
writeFileSync(resolve(root, 'css/gensyn-tokens.css'), out, 'utf8');
console.log(`Wrote css/gensyn-tokens.css — ${flat.length - unmapped.length} custom properties.`);
if (unmapped.length) console.warn(`Unmapped token paths (no CSS name):\n  ${unmapped.join('\n  ')}`);
