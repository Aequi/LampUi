import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

// ---------- Effects (swipe left/right to change; no UI shown) ----------
const effects = [
  { name: "Rainbow", mode: 0 },
  { name: "Fire",    mode: 1 },
  { name: "Blue",    mode: 2 },
];
let idx = 2; // start on Blue like your screenshot

// ---------- Three.js ----------
const canvas = document.getElementById("lampCanvas");
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: false,
  powerPreference: "high-performance",
});
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setClearColor(0x05070c, 1);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
// bloom will do the “brightness”, keep exposure sane
renderer.toneMappingExposure = 0.92;

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x05070c, 6.0, 16.0);

const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
// Zoom out + show full lamp
camera.position.set(0.0, 1.2, 8.0);
camera.lookAt(0.0, 0.25, 0.0);

// Environment reflections (no HDR asset)
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

// Lights (keep scene readable; LED emissive provides punch)
scene.add(new THREE.AmbientLight(0xffffff, 0.10));

const dir = new THREE.DirectionalLight(0xffffff, 0.55);
dir.position.set(3.5, 5.0, 3.0);
scene.add(dir);

const key = new THREE.PointLight(0xbfd8ff, 7.5, 30, 2);
key.position.set(0.0, 2.6, 3.2);
scene.add(key);

const warm = new THREE.PointLight(0xffc9a8, 3.5, 30, 2);
warm.position.set(-3.0, 1.0, 2.8);
scene.add(warm);

// Post: BLOOM (higher)
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
// stronger bloom + larger radius; lower threshold blooms more of the LEDs
const bloom = new UnrealBloomPass(new THREE.Vector2(800, 600), 2.15, 0.55, 0.14);
composer.addPass(bloom);

// ---------- Floor + Wall ----------
const floorMat = new THREE.MeshStandardMaterial({
  color: 0x0b0f18,
  roughness: 0.95,
  metalness: 0.0,
});
const floor = new THREE.Mesh(new THREE.PlaneGeometry(30, 30), floorMat);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -2.10;
scene.add(floor);

const wallMat = new THREE.MeshStandardMaterial({
  color: 0x080b12,
  roughness: 0.98,
  metalness: 0.0,
});
const wall = new THREE.Mesh(new THREE.PlaneGeometry(30, 18), wallMat);
wall.position.set(0, 3.4, -6.5);
scene.add(wall);

// subtle “light pool” on floor under lamp (helps grounding)
const pool = new THREE.Mesh(
  new THREE.CircleGeometry(2.3, 80),
  new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.05 })
);
pool.rotation.x = -Math.PI / 2;
pool.position.y = floor.position.y + 0.002;
scene.add(pool);

// ---------- LED CanvasTexture (8 x 32, big dots) ----------
const LED_COLS = 8;
const LED_ROWS = 32;

const ledCanvas = document.createElement("canvas");
// high-res texture so dots stay smooth even when zoomed
ledCanvas.width = 1024;
ledCanvas.height = 2048;
const ctx = ledCanvas.getContext("2d", { alpha: false });

const ledTex = new THREE.CanvasTexture(ledCanvas);
ledTex.colorSpace = THREE.SRGBColorSpace;
ledTex.wrapS = THREE.RepeatWrapping;
ledTex.wrapT = THREE.RepeatWrapping;
ledTex.generateMipmaps = true;
ledTex.minFilter = THREE.LinearMipmapLinearFilter;
ledTex.magFilter = THREE.LinearFilter;
ledTex.anisotropy = Math.min(16, renderer.capabilities.getMaxAnisotropy());

const rand = new Float32Array(LED_COLS * LED_ROWS);
for (let i = 0; i < rand.length; i++) rand[i] = Math.random();

function hsvToRgb(h, s, v) {
  const i = Math.floor(h * 6);
  const f = h * 6 - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);
  const m = i % 6;
  const r = [v, q, p, p, t, v][m];
  const g = [t, v, v, q, p, p][m];
  const b = [p, p, t, v, v, q][m];
  return [r, g, b];
}
function mix(a, b, t) { return a + (b - a) * t; }

function drawLedTexture(mode, time) {
  const w = ledCanvas.width;
  const h = ledCanvas.height;

  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, w, h);

  const cellW = w / LED_COLS;
  const cellH = h / LED_ROWS;

  // BIG dots (your request)
  const rCore = Math.min(cellW, cellH) * 0.42;
  const rGlow = rCore * 2.6;

  ctx.globalCompositeOperation = "lighter";

  for (let y = 0; y < LED_ROWS; y++) {
    const v = (y + 0.5) / LED_ROWS;
    for (let x = 0; x < LED_COLS; x++) {
      const u = (x + 0.5) / LED_COLS;
      const r0 = rand[y * LED_COLS + x];

      let rr = 0, gg = 0, bb = 0;
      let inten = 1.0;

      if (mode === 0) {
        const hue = (u + v * 0.25 + time * 0.09) % 1.0;
        [rr, gg, bb] = hsvToRgb(hue, 0.95, 1.0);
        inten = 0.70 + 0.30 * Math.sin(time * 1.7 + u * 6.0 + v * 2.8);
      } else if (mode === 1) {
        const heat = Math.pow(1.0 - v, 0.55);
        const flick = 0.55 + 0.45 * Math.sin(time * 9.0 + x * 0.9 + y * 0.35 + r0 * 6.0);
        const k = Math.max(0, Math.min(1, heat * flick));
        rr = mix(0.95, 1.0, k);
        gg = mix(0.18, 0.88, k);
        bb = mix(0.02, 0.12, k);
        inten = 0.60 + 0.40 * k;
      } else {
        const wv = 0.5 + 0.5 * Math.sin(u * 5.0 + time * 2.2 + v * 3.6);
        rr = mix(0.03, 0.18, wv);
        gg = mix(0.20, 0.95, wv);
        bb = mix(0.85, 1.0, wv);
        inten = 0.72 + 0.28 * Math.sin(time * 2.0 + v * 4.4 + r0 * 2.0);
      }

      inten = Math.max(0, Math.min(1, inten));

      // tiny jitter so it doesn’t look “too perfect”
      const jx = (r0 - 0.5) * cellW * 0.05;
      const jy = (r0 - 0.5) * cellH * 0.05;

      const cx = (x + 0.5) * cellW + jx;
      const cy = (y + 0.5) * cellH + jy;

      // Glow
      ctx.fillStyle = `rgba(${(rr*255)|0},${(gg*255)|0},${(bb*255)|0},${0.22 * inten})`;
      ctx.beginPath();
      ctx.arc(cx, cy, rGlow, 0, Math.PI * 2);
      ctx.fill();

      // Core
      ctx.fillStyle = `rgba(${(rr*255)|0},${(gg*255)|0},${(bb*255)|0},${0.98 * inten})`;
      ctx.beginPath();
      ctx.arc(cx, cy, rCore, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  ctx.globalCompositeOperation = "source-over";
  ledTex.needsUpdate = true;
}

// ---------- Lamp model ----------
const lamp = new THREE.Group();
lamp.rotation.y = -0.22;
lamp.rotation.x = 0.04;
lamp.position.y = 0.05;
lamp.scale.setScalar(0.98);
scene.add(lamp);

// Base (grey plastic)
{
  const geo = new THREE.CylinderGeometry(1.05, 1.05, 0.28, 128, 1, false);
  const mat = new THREE.MeshStandardMaterial({
    color: 0x6d737c,
    roughness: 0.72,
    metalness: 0.05,
  });
  const m = new THREE.Mesh(geo, mat);
  m.position.y = -1.72;
  lamp.add(m);

  const ringGeo = new THREE.CylinderGeometry(1.09, 1.09, 0.035, 128, 1, false);
  const ringMat = new THREE.MeshStandardMaterial({
    color: 0x8b939e,
    roughness: 0.55,
    metalness: 0.05,
  });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.position.y = -1.56;
  lamp.add(ring);
}

// Inner LED cylinder (emissive map)
const ledMat = new THREE.MeshStandardMaterial({
  color: 0x05060a,
  roughness: 0.90,
  metalness: 0.0,
  emissive: new THREE.Color(1, 1, 1),
  emissiveMap: ledTex,
  emissiveIntensity: 8.0, // brighter
});
{
  const geo = new THREE.CylinderGeometry(0.70, 0.70, 3.05, 160, 64, true);
  const mesh = new THREE.Mesh(geo, ledMat);
  mesh.position.y = -0.25;
  // rotate so texture seam goes to the back
  mesh.rotation.y = Math.PI * 0.15;
  lamp.add(mesh);
}

// Plexiglass outer cylinder
{
  const geo = new THREE.CylinderGeometry(0.90, 0.90, 3.35, 160, 64, true);
  const plexi = new THREE.MeshPhysicalMaterial({
    color: 0xeaf0ff,
    roughness: 0.12,
    metalness: 0.0,
    transmission: 1.0,
    thickness: 0.42,
    ior: 1.45,
    transparent: true,
    opacity: 0.20,
    clearcoat: 0.95,
    clearcoatRoughness: 0.14,
  });
  const shell = new THREE.Mesh(geo, plexi);
  shell.position.y = -0.22;
  lamp.add(shell);
}

// Extra subtle dark “cap” at top (so it doesn’t look like empty black void)
{
  const capGeo = new THREE.CylinderGeometry(0.92, 0.92, 0.28, 128, 1, false);
  const capMat = new THREE.MeshStandardMaterial({
    color: 0x141823,
    roughness: 0.92,
    metalness: 0.02,
  });
  const cap = new THREE.Mesh(capGeo, capMat);
  cap.position.y = 1.40;
  lamp.add(cap);
}

// ---------- Resize ----------
function resize() {
  const w = Math.max(1, window.innerWidth | 0);
  const h = Math.max(1, window.innerHeight | 0);
  renderer.setSize(w, h, false);
  composer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  bloom.setSize(w, h);
}
window.addEventListener("resize", resize);

// ---------- Swipe to change effect (no UI) ----------
let down = null;
window.addEventListener("pointerdown", (e) => {
  down = { x: e.clientX, y: e.clientY };
});
window.addEventListener("pointerup", (e) => {
  if (!down) return;
  const dx = e.clientX - down.x;
  const dy = e.clientY - down.y;

  if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.2) {
    idx = (idx + (dx < 0 ? 1 : -1) + effects.length) % effects.length;
    document.title = `Lamp Scene – ${effects[idx].name}`;
  }
  down = null;
});
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") idx = (idx - 1 + effects.length) % effects.length;
  if (e.key === "ArrowRight") idx = (idx + 1) % effects.length;
});

// ---------- Render loop ----------
let t = 0;
let last = performance.now();

function tick(now) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  t += dt;

  drawLedTexture(effects[idx].mode, t);

  // subtle idle motion
  lamp.rotation.y = -0.22 + Math.sin(t * 0.35) * 0.020;

  composer.render();
  requestAnimationFrame(tick);
}

resize();
requestAnimationFrame(tick);
