const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

console.log('Building Steel & Fire...');

// Read source JSX
const jsx = fs.readFileSync('src/App.jsx', 'utf8');

// Transpile with Babel
const result = babel.transformSync(jsx, {
  presets: ['@babel/preset-react'],
  plugins: ['@babel/plugin-transform-class-properties'],
  retainLines: false,
});

if(!result || !result.code){
  console.error('Babel transpilation failed');
  process.exit(1);
}

console.log('JSX transpiled OK -', Math.round(result.code.length/1024) + 'KB');

// Read and encode world map
const worldMapData = fs.readFileSync('assets/world_map.jpg');
const worldMapB64 = 'data:image/jpeg;base64,' + worldMapData.toString('base64');
console.log('World map:', Math.round(worldMapData.length/1024) + 'KB');

// Read and encode barony map
const baronyMapData = fs.readFileSync('assets/barony_map.jpg');
const baronyMapB64 = 'data:image/jpeg;base64,' + baronyMapData.toString('base64');
console.log('Barony map:', Math.round(baronyMapData.length/1024) + 'KB');

// Read icons
const iconNames = [
  "oghill_castle","oghill_mine","black_adder_inn","belloc",
  "mereworth_abbey","tamean_farm","mereworth","ashcombe",
  "tabor_temple_ruins","tomb_of_illin_toth","the_old_fort","tamean_caverns",
  "the_twin_lakes","weyhall","oghill_cliffs"
];

const icons = {};
let totalIconKB = 0;
iconNames.forEach(name => {
  const data = fs.readFileSync(`assets/icons/${name}.jpg`);
  icons[name] = 'data:image/jpeg;base64,' + data.toString('base64');
  totalIconKB += Math.round(data.length/1024);
});
console.log(`Icons: ${iconNames.length} icons, ${totalIconKB}KB total`);

// Build constants block
const constants = `
var WORLD_MAP_IMG = "${worldMapB64}";
var BARONY_MAP_IMG = "${baronyMapB64}";
var BARONY_ICONS = ${JSON.stringify(icons)};
`;

// Read CSS
const css = fs.readFileSync('src/styles.css', 'utf8');

// Build final HTML
const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Steel & Fire</title>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"><\/script>
<script src="https://unpkg.com/react@18/umd/react.production.min.js"><\/script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"><\/script>
<style>
${css}
.sf-terrain-label{background:transparent;border:none;box-shadow:none;font-family:'Cinzel',serif;font-size:11px;color:rgba(40,20,5,0.85);text-shadow:0 1px 2px rgba(255,240,200,0.8);cursor:pointer;white-space:nowrap;font-weight:600;letter-spacing:0.04em;pointer-events:all;}
.map-lore-popup{position:absolute;z-index:1000;background:rgba(26,18,8,0.97);border:1px solid var(--gold2);border-radius:8px;padding:16px;width:260px;box-shadow:0 4px 20px rgba(0,0,0,0.6);font-family:'Crimson Pro',serif;}
.leaflet-control-attribution{display:none}
.leaflet-control-zoom a{background:rgba(20,12,4,0.9)!important;border-color:var(--gold2)!important;color:var(--gold3)!important;}
</style>
</head>
<body>
<div id="loading-screen" style="position:fixed;inset:0;background:#1a1208;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;z-index:9999">
  <div style="font-family:serif;font-size:28px;color:#e8c860;letter-spacing:0.2em">⚔ STEEL & FIRE</div>
  <div style="font-family:serif;font-size:13px;color:#8a6a3a;letter-spacing:0.1em">Loading campaign...</div>
  <div class="spinner"></div>
</div>
<div id="root"></div>
<script>
${constants}
${result.code}
const _root = ReactDOM.createRoot(document.getElementById('root'));
_root.render(React.createElement(ErrorBoundary, null, React.createElement(App)));
<\/script>
</body>
</html>`;

// Write output
fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/index.html', html);
const finalSize = Math.round(html.length/1024);
console.log(`\nBuilt dist/index.html: ${finalSize}KB`);
console.log('Done!');
