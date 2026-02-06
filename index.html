<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>3D Lamp Carousel (Max: Bloom + Lens + CA)</title>
  <style>
    :root{
      --bg0:#070a12;
      --bg1:#0b1020;
      --cardA:#151b2c;
      --cardB:#0c1020;

      --text: rgba(255,255,255,.92);
      --stroke2: rgba(255,255,255,.06);

      --shadow: 0 22px 60px rgba(0,0,0,.70);
      --shadow2: 0 10px 26px rgba(0,0,0,.45);

      --radius: 34px;
      --font: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Noto Sans", sans-serif;

      --fill: 78%;
      --knob: #4a86ff;
    }

    *{ box-sizing:border-box }
    html,body{ height:100% }
    body{
      margin:0;
      font-family: var(--font);
      color: var(--text);
      background:
        radial-gradient(900px 650px at 18% 22%, rgba(120,90,255,.18), transparent 60%),
        radial-gradient(900px 700px at 80% 78%, rgba(0,200,255,.10), transparent 60%),
        linear-gradient(180deg, var(--bg0), var(--bg1));
      display:flex;
      align-items:center;
      justify-content:center;
      padding:24px;
      overflow:hidden;
    }
    body::before{
      content:"";
      position:fixed; inset:0;
      pointer-events:none;
      opacity:.28;
      mix-blend-mode:overlay;
      background:
        repeating-linear-gradient(
          0deg,
          rgba(255,255,255,.018) 0px,
          rgba(255,255,255,.018) 1px,
          rgba(0,0,0,0) 2px,
          rgba(0,0,0,0) 6px
        );
    }

    .phone{
      width:min(380px, 92vw);
      height:min(860px, 92vh);
      border-radius: var(--radius);
      position:relative;
      overflow:hidden;
      background:
        radial-gradient(520px 520px at 50% 10%, rgba(255,255,255,.07), transparent 55%),
        linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.02)),
        linear-gradient(180deg, var(--cardA), var(--cardB));
      border: 1px solid var(--stroke2);
      box-shadow: var(--shadow);
    }

    .hdr{
      position:absolute;
      left:0; right:0; top:0;
      padding:18px 18px 8px;
      display:flex;
      align-items:center;
      justify-content:flex-start;
      gap:10px;
      z-index:5;
      user-select:none;
    }
    .status{
      display:flex;
      align-items:center;
      gap:10px;
      font-weight:750;
      letter-spacing:.2px;
      color:#4bd97f;
      text-shadow:0 1px 0 rgba(0,0,0,.35);
    }
    .icon{
      width:18px; height:18px;
      filter: drop-shadow(0 2px 3px rgba(0,0,0,.45));
    }

    .sceneWrap{
      position:absolute;
      inset:0;
      padding:62px 0 0;
      display:flex;
      flex-direction:column;
    }

    .scene{
      position:relative;
      flex: 1 1 auto;
      margin: 8px 12px 0;
      border-radius: 28px;
      overflow:hidden;
      border: 1px solid rgba(255,255,255,.06);
      background:
        radial-gradient(600px 420px at 50% 18%, rgba(255,255,255,.04), transparent 60%);
    }
    .scene::after{
      content:"";
      position:absolute; inset:10px;
      border-radius: 22px;
      border: 1px solid rgba(255,255,255,.07);
      pointer-events:none;
      opacity:.85;
    }

    canvas#gl{
      position:absolute;
      inset:0;
      width:100%;
      height:100%;
      display:block;
    }

    .controls{
      padding: 12px 18px 10px;
      display:flex;
      align-items:center;
      gap:12px;
      z-index:6;
    }
    .sun{
      width:20px; height:20px;
      opacity:.86;
      filter: drop-shadow(0 2px 3px rgba(0,0,0,.45));
      flex: 0 0 auto;
    }
    input[type="range"]{
      -webkit-appearance:none;
      appearance:none;
      width:100%;
      height:18px;
      background:transparent;
      outline:none;
    }
    input[type="range"]::-webkit-slider-runnable-track{
      height:10px;
      border-radius:999px;
      background:
        linear-gradient(to right,
          rgba(255,255,255,.24) 0%,
          rgba(255,255,255,.24) var(--fill),
          rgba(255,255,255,.10) var(--fill),
          rgba(255,255,255,.10) 100%);
      border: 1px solid rgba(255,255,255,.10);
      box-shadow: inset 0 1px 2px rgba(0,0,0,.35);
    }
    input[type="range"]::-webkit-slider-thumb{
      -webkit-appearance:none;
      appearance:none;
      margin-top:-6px;
      width:22px;height:22px;
      border-radius:999px;
      background:
        radial-gradient(circle at 35% 30%, rgba(255,255,255,.55), rgba(255,255,255,0) 55%),
        var(--knob);
      border:1px solid rgba(0,0,0,.30);
      box-shadow: 0 10px 18px rgba(0,0,0,.45);
      cursor:pointer;
    }

    .lens{
      position:relative;
      margin: 8px 12px 14px;
      padding: 12px 12px;
      border-radius: 22px;
      border: 1px solid rgba(255,255,255,.10);
      background: rgba(255,255,255,.04);
      box-shadow: inset 0 1px 0 rgba(255,255,255,.10);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      overflow:hidden;
      user-select:none;
      z-index:6;
    }
    .lens::before{
      content:"";
      position:absolute; inset:-40px;
      background:
        radial-gradient(260px 90px at 30% 40%, rgba(255,255,255,.06), transparent 70%),
        radial-gradient(260px 90px at 70% 65%, rgba(255,255,255,.05), transparent 70%);
      opacity:.7;
      pointer-events:none;
    }

    .lensTitleRow{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:10px;
      position:relative;
      z-index:2;
      padding: 2px 4px 10px;
      color: rgba(255,255,255,.86);
      font-weight: 760;
      letter-spacing:.2px;
    }
    .lensTitleRow .count{
      color: rgba(255,255,255,.62);
      font-weight: 820;
    }

    .track{
      position:relative;
      height: 62px;
      z-index:2;
    }

    .item{
      position:absolute;
      top: 0;
      left: 50%;
      width: 126px;
      height: 62px;
      transform: translateX(-50%);
      border-radius: 18px;
      border: 1px solid rgba(255,255,255,.10);
      box-shadow: 0 10px 16px rgba(0,0,0,.25);
      background: linear-gradient(180deg, rgba(255,255,255,.10), rgba(255,255,255,.03));
      overflow:hidden;
      cursor:pointer;
      transition: box-shadow .12s ease, border-color .12s ease;
    }
    .item:hover{
      border-color: rgba(255,255,255,.16);
      box-shadow: 0 12px 18px rgba(0,0,0,.30);
    }
    .thumbGlow{
      position:absolute; inset:-20px;
      opacity:.95;
      mix-blend-mode: screen;
    }
    .label{
      position:absolute;
      left:12px; bottom:10px;
      font-weight: 820;
      color: rgba(255,255,255,.92);
      text-shadow: 0 1px 0 rgba(0,0,0,.35);
      font-size: 13px;
      letter-spacing:.2px;
    }

    .homeHandle{
      position:absolute;
      left:50%;
      bottom: 10px;
      transform: translateX(-50%);
      width: 150px;
      height: 5px;
      border-radius:999px;
      background: rgba(255,255,255,.18);
      opacity:.45;
      z-index:10;
      pointer-events:none;
    }

    .err{
      position:absolute;
      left:12px; right:12px;
      bottom: 12px;
      z-index:50;
      padding:10px 12px;
      border-radius: 14px;
      background: rgba(255,60,60,.12);
      border: 1px solid rgba(255,90,90,.28);
      color: rgba(255,220,220,.95);
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace;
      font-size: 12px;
      line-height: 1.35;
      white-space: pre-wrap;
      display:none;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }
  </style>
</head>
<body>
  <section class="phone" id="phone">
    <div class="hdr">
      <div class="status">
        <svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M20 7.5L10.3 17.2a1 1 0 0 1-1.4 0L4 12.3"
            stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Connected
      </div>
    </div>

    <div class="sceneWrap">
      <div class="scene" id="scene">
        <canvas id="gl"></canvas>
      </div>

      <div class="controls">
        <svg class="sun" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 16.2a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Z"
            stroke="rgba(255,255,255,.75)" stroke-width="1.8"/>
          <path d="M12 2.5v2.2M12 19.3v2.2M4.7 4.7l1.6 1.6M17.7 17.7l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.7 19.3l1.6-1.6M17.7 6.3l1.6-1.6"
            stroke="rgba(255,255,255,.55)" stroke-width="1.8" stroke-linecap="round"/>
        </svg>

        <input id="brightness" type="range" min="0" max="100" value="78" aria-label="Brightness"/>

        <svg class="sun" viewBox="0 0 24 24" fill="none" aria-hidden="true" style="opacity:.95">
          <path d="M12 16.2a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Z"
            stroke="rgba(255,255,255,.85)" stroke-width="1.8"/>
          <path d="M12 1.8v3M12 19.2v3M4.3 4.3l2.1 2.1M17.6 17.6l2.1 2.1M1.8 12h3M19.2 12h3M4.3 19.7l2.1-2.1M17.6 6.4l2.1-2.1"
            stroke="rgba(255,255,255,.70)" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
      </div>

      <div class="lens" id="lens">
        <div class="lensTitleRow">
          <div id="sceneName">Rainbow Flow</div>
          <div class="count" id="count">1 / 3</div>
        </div>
        <div class="track" id="track">
          <div class="item" data-i="0">
            <div class="thumbGlow" style="background: radial-gradient(140px 60px at 50% 50%, rgba(70,200,255,.75), transparent 70%),
                                          linear-gradient(90deg,#ff4bd8,#ff3b3b,#ffd24a,#39ff74,#2be0ff,#4b66ff,#ff4bd8);"></div>
            <div class="label">Rainbow</div>
          </div>
          <div class="item" data-i="1">
            <div class="thumbGlow" style="background: radial-gradient(140px 60px at 50% 50%, rgba(255,150,40,.80), transparent 70%),
                                          linear-gradient(90deg,#5a0b06,#ff2a10,#ff7a1a,#ffd24a,#fff2b3);"></div>
            <div class="label">Fire</div>
          </div>
          <div class="item" data-i="2">
            <div class="thumbGlow" style="background: radial-gradient(140px 60px at 50% 50%, rgba(40,170,255,.85), transparent 70%),
                                          linear-gradient(90deg,#0018ff,#0062ff,#18c6ff,#e9feff,#18c6ff,#0018ff);"></div>
            <div class="label">Blue</div>
          </div>
        </div>
      </div>

      <div class="homeHandle"></div>
    </div>

    <div class="err" id="err"></div>
  </section>

  <script>
    // ---------------- Carousel ----------------
    const N = 3;
    const sceneEl = document.getElementById("scene");
    const lensEl  = document.getElementById("lens");
    const items   = [...document.querySelectorAll(".item")];
    const sceneNameEl = document.getElementById("sceneName");
    const countEl = document.getElementById("count");

    const modes = [
      { name: "Rainbow Flow", knob:"#4a86ff" },
      { name: "Fire Flicker", knob:"#ff8a1a" },
      { name: "Blue Wave",    knob:"#2f7bff" },
    ];

    let scene = 0.0;
    let vel = 0.0;
    let target = 0.0;
    let dragging = false;
    let dragStartX = 0;
    let dragStartScene = 0;

    function wrap(x){ x%=N; if(x<0)x+=N; return x; }
    function shortestDelta(to, from){
      let d = to - from;
      if (d >  N/2) d -= N;
      if (d < -N/2) d += N;
      return d;
    }
    function setTargetNearest(){ target = wrap(Math.round(scene)); }

    function applyTheme(idx){
      const m = modes[idx|0];
      sceneNameEl.textContent = m.name;
      countEl.textContent = `${(idx|0)+1} / ${N}`;
      document.documentElement.style.setProperty("--knob", m.knob);
    }

    function layoutLens(){
      for (let i=0;i<items.length;i++){
        const rel = shortestDelta(i, scene);
        const x = rel * 118;
        const s = 1.0 - Math.min(0.20, Math.abs(rel) * 0.14);
        const o = 1.0 - Math.min(0.60, Math.abs(rel) * 0.36);
        const blur = Math.min(1.6, Math.abs(rel) * 1.05);
        const el = items[i];
        el.style.transform = `translateX(calc(-50% + ${x}px)) scale(${s})`;
        el.style.opacity = o.toFixed(3);
        el.style.filter = `blur(${blur}px)`;
        el.style.zIndex = String(100 - Math.floor(Math.abs(rel)*10));
      }
      applyTheme(wrap(Math.round(scene))|0);
    }

    function pointerDown(e){
      dragging = true;
      vel = 0;
      dragStartX = e.clientX;
      dragStartScene = scene;
      e.currentTarget.setPointerCapture?.(e.pointerId);
    }
    function pointerMove(e){
      if (!dragging) return;
      const dx = e.clientX - dragStartX;
      const w = sceneEl.getBoundingClientRect().width;
      const ds = -dx / w * 0.95;
      scene = wrap(dragStartScene + ds);
      target = scene;
    }
    function pointerUp(){
      if (!dragging) return;
      dragging = false;
      setTargetNearest();
    }
    [sceneEl, lensEl].forEach(el=>{
      el.addEventListener("pointerdown", pointerDown);
      el.addEventListener("pointermove", pointerMove);
      el.addEventListener("pointerup", pointerUp);
      el.addEventListener("pointercancel", pointerUp);
      el.style.touchAction = "pan-y";
    });
    items.forEach(el=> el.addEventListener("click", ()=>{ target = Number(el.dataset.i); }));

    window.addEventListener("keydown", (e)=>{
      if (e.key === "ArrowLeft")  target = wrap(Math.round(scene) - 1);
      if (e.key === "ArrowRight") target = wrap(Math.round(scene) + 1);
    });

    // ---------------- Brightness ----------------
    const brightnessEl = document.getElementById("brightness");
    const shaderState = { u_brightness: 0.78, u_scene: 0.0 };
    function setBrightness(){
      const pct = Number(brightnessEl.value);
      document.documentElement.style.setProperty("--fill", pct + "%");
      shaderState.u_brightness = Math.max(0, Math.min(1, pct/100));
    }
    brightnessEl.addEventListener("input", setBrightness);

    // ---------------- WebGL Multi-pass (Scene -> Bloom -> Composite) ----------------
    const errEl = document.getElementById("err");
    function showErr(msg){
      errEl.style.display = "block";
      errEl.textContent = msg;
    }

    const canvas = document.getElementById("gl");
    const gl = canvas.getContext("webgl", { antialias:true, alpha:true, premultipliedAlpha:true });
    if (!gl) showErr("WebGL not available");

    function compile(type, src){
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)){
        throw new Error(gl.getShaderInfoLog(s) || "Shader compile failed");
      }
      return s;
    }
    function link(vs, fs){
      const p = gl.createProgram();
      gl.attachShader(p, vs);
      gl.attachShader(p, fs);
      gl.linkProgram(p);
      if (!gl.getProgramParameter(p, gl.LINK_STATUS)){
        throw new Error(gl.getProgramInfoLog(p) || "Program link failed");
      }
      return p;
    }
    function createTex(w,h){
      const tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      gl.bindTexture(gl.TEXTURE_2D, null);
      return tex;
    }
    function createRT(w,h){
      const fbo = gl.createFramebuffer();
      const tex = createTex(w,h);
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
      const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      if (status !== gl.FRAMEBUFFER_COMPLETE) throw new Error("FBO incomplete: " + status);
      return { fbo, tex, w, h };
    }
    function resizeRT(rt, w, h){
      if (!rt || rt.w === w && rt.h === h) return rt;
      gl.bindTexture(gl.TEXTURE_2D, rt.tex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      gl.bindTexture(gl.TEXTURE_2D, null);
      rt.w = w; rt.h = h;
      return rt;
    }

    const VERT = `
      attribute vec2 a_pos;
      varying vec2 v_uv;
      void main(){
        v_uv = a_pos*0.5 + 0.5;
        gl_Position = vec4(a_pos, 0.0, 1.0);
      }
    `;

    // Pass 1: Raymarched 3D scene (lamp on shelf)
    const SCENE_FRAG = `
      precision highp float;
      varying vec2 v_uv;

      uniform vec2  u_res;
      uniform float u_time;
      uniform float u_brightness;
      uniform float u_scene;

      float saturate(float x){ return clamp(x, 0.0, 1.0); }

      float hash12(vec2 p){
        vec3 p3 = fract(vec3(p.xyx) * 0.1031);
        p3 += dot(p3, p3.yzx + 33.33);
        return fract((p3.x + p3.y) * p3.z);
      }
      float noise(vec2 p){
        vec2 i = floor(p);
        vec2 f = fract(p);
        float a = hash12(i);
        float b = hash12(i + vec2(1.0,0.0));
        float c = hash12(i + vec2(0.0,1.0));
        float d = hash12(i + vec2(1.0,1.0));
        vec2 u = f*f*(3.0-2.0*f);
        return mix(a,b,u.x) + (c-a)*u.y*(1.0-u.x) + (d-b)*u.x*u.y;
      }
      float fbm(vec2 p){
        float v=0.0, a=0.5;
        mat2 m = mat2(1.7, 1.2, -1.2, 1.7);
        for(int i=0;i<5;i++){
          v += a * noise(p);
          p = m*p;
          a *= 0.5;
        }
        return v;
      }

      vec3 hsv2rgb(vec3 c){
        vec4 K = vec4(1.0, 2.0/3.0, 1.0/3.0, 3.0);
        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
      }

      vec3 rampFire(float x){
        vec3 deep = vec3(0.40, 0.03, 0.02);
        vec3 red  = vec3(1.00, 0.14, 0.05);
        vec3 org  = vec3(1.00, 0.52, 0.12);
        vec3 yel  = vec3(1.00, 0.86, 0.38);
        vec3 whi  = vec3(1.00, 0.98, 0.88);
        vec3 c = mix(deep, red, smoothstep(0.08, 0.35, x));
        c = mix(c, org,  smoothstep(0.28, 0.58, x));
        c = mix(c, yel,  smoothstep(0.50, 0.82, x));
        c = mix(c, whi,  smoothstep(0.78, 1.00, x));
        return c;
      }
      vec3 rampBlue(float x){
        vec3 deep = vec3(0.03, 0.05, 0.25);
        vec3 mid  = vec3(0.00, 0.35, 1.00);
        vec3 cya  = vec3(0.10, 0.85, 1.00);
        vec3 whi  = vec3(0.86, 0.98, 1.00);
        vec3 c = mix(deep, mid, smoothstep(0.00, 0.45, x));
        c = mix(c, cya,  smoothstep(0.25, 0.75, x));
        c = mix(c, whi,  smoothstep(0.72, 1.00, x));
        return c;
      }

      float wrap3(float x){
        float n = 3.0;
        return x - n * floor(x / n);
      }

      float sdBox(vec3 p, vec3 b){
        vec3 q = abs(p) - b;
        return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0);
      }
      float sdCappedCylinder(vec3 p, float h, float r){
        vec2 d = abs(vec2(length(p.xz), p.y)) - vec2(r, h);
        return min(max(d.x,d.y),0.0) + length(max(d,0.0));
      }

      // material ids: 1 shelf/wall, 2 base, 3 glass
      float mapScene(vec3 p, out int mat){
        // shelf slab
        vec3 shelfC = vec3(0.0, -0.83, 0.00);
        vec3 shelfB = vec3(2.2, 0.05, 1.6);
        float dShelf = sdBox(p - shelfC, shelfB);

        // back wall
        float dWall = p.z + 1.85;

        // lamp
        float shelfTopY = -0.78;
        float baseH = 0.28;
        float baseR = 0.34;
        float glassH = 1.10;
        float glassR = 0.28;

        vec3 baseC  = vec3(0.0, shelfTopY + baseH*0.5, 0.0);
        vec3 glassC = vec3(0.0, shelfTopY + baseH + glassH*0.5, 0.0);

        float dBase  = sdCappedCylinder(p - baseC,  baseH*0.5,  baseR) - 0.008;
        float dGlass = sdCappedCylinder(p - glassC, glassH*0.5, glassR) - 0.006;

        float d = dShelf; mat = 1;
        if (dWall < d){ d = dWall; mat = 1; }
        if (dBase < d){ d = dBase; mat = 2; }
        if (dGlass < d){ d = dGlass; mat = 3; }
        return d;
      }

      vec3 calcNormal(vec3 p){
        int m;
        vec2 e = vec2(0.0012, 0.0);
        float dx = mapScene(p + vec3(e.x, e.y, e.y), m) - mapScene(p - vec3(e.x, e.y, e.y), m);
        float dy = mapScene(p + vec3(e.y, e.x, e.y), m) - mapScene(p - vec3(e.y, e.x, e.y), m);
        float dz = mapScene(p + vec3(e.y, e.y, e.x), m) - mapScene(p - vec3(e.y, e.y, e.x), m);
        return normalize(vec3(dx,dy,dz));
      }

      float softShadow(vec3 ro, vec3 rd, float mint, float maxt){
        float res = 1.0;
        float t = mint;
        for(int i=0;i<40;i++){
          int m;
          float h = mapScene(ro + rd*t, m);
          res = min(res, 12.0*h/t);
          t += clamp(h, 0.01, 0.18);
          if (res < 0.02 || t > maxt) break;
        }
        return clamp(res, 0.0, 1.0);
      }

      float ao(vec3 p, vec3 n){
        float occ = 0.0, sca = 1.0;
        for(int i=0;i<5;i++){
          float h = 0.03 + 0.09*float(i);
          int m;
          float d = mapScene(p + n*h, m);
          occ += (h - d) * sca;
          sca *= 0.55;
        }
        return saturate(1.0 - occ);
      }

      vec4 emissionForMode(int mode, float hN, float angN){
        float ROWS = 28.0;
        float COLS = 10.0;
        float rId = floor(hN * ROWS);
        float cId = floor(angN * COLS);
        float fh = fract(hN * ROWS) - 0.5;
        float fa = fract(angN * COLS) - 0.5;

        float tile = smoothstep(0.30, 0.08, abs(fh)) * smoothstep(0.45, 0.22, abs(fa));

        float r0 = hash12(vec2(rId, cId + 17.0));
        float r1 = hash12(vec2(rId + 3.0, cId + 9.0));
        float sparkle = smoothstep(0.78, 0.98, (0.5+0.5*sin(u_time*6.0 + r0*6.2831))*(0.55+0.7*r1));

        vec3 col = vec3(0.0);
        float amp = 0.0;

        if (mode == 0){
          float hue = fract(hN*1.18 - u_time*0.10);
          col = hsv2rgb(vec3(hue, 0.86, 1.0));
          amp = 0.70 + 0.60*sparkle;
        } else if (mode == 1){
          float hotBase = (1.0 - hN);
          float n = fbm(vec2(angN*3.0, hN*2.0) + vec2(0.0, -u_time*0.70));
          float flick = 0.82 + 0.28*sin(u_time*10.0 + r0*5.0);
          float hot = saturate(hotBase*1.20 + n*0.90) * flick;
          col = rampFire(hot);
          amp = 0.55 + 0.85*hot;
        } else {
          float w1 = sin(hN*10.0 - u_time*2.2 + angN*2.0);
          float w2 = sin(hN*6.6  + u_time*1.4 - angN*3.4);
          float wave = saturate(0.48 + 0.28*(w1*0.6 + w2*0.4) + (r0-0.5)*0.07);
          col = rampBlue(wave);
          amp = 0.55 + 0.75*wave;
        }

        float inten = tile * amp;
        return vec4(col, inten);
      }

      vec3 sceneEnvTint(int mode){
        if (mode == 0) return vec3(0.55, 0.35, 0.95);
        if (mode == 1) return vec3(0.95, 0.35, 0.20);
        return vec3(0.20, 0.55, 1.00);
      }

      vec3 fresnelSchlick(float cosTheta, vec3 F0){
        return F0 + (1.0 - F0) * pow(1.0 - cosTheta, 5.0);
      }

      vec3 shade(vec3 p, vec3 n, vec3 v, int mat, float sceneIdx){
        float s = wrap3(sceneIdx);
        float i0f = floor(s);
        float f = fract(s);
        int a = int(mod(i0f, 3.0));
        int b = int(mod(i0f + 1.0, 3.0));

        vec3 Lkey = normalize(vec3(-0.45, 0.85, 0.55));
        vec3 Lrim = normalize(vec3(0.65, 0.45, 0.20));
        vec3 keyCol = vec3(1.05, 1.00, 0.98);
        vec3 rimCol = vec3(0.55, 0.70, 0.95);

        float ndl = max(dot(n, Lkey), 0.0);
        float ndl2 = max(dot(n, Lrim), 0.0);

        float sh = softShadow(p + n*0.004, Lkey, 0.02, 3.5);
        float occ = ao(p, n);

        vec3 envTint = mix(sceneEnvTint(a), sceneEnvTint(b), f);

        vec3 albedo = vec3(0.12);
        float rough = 0.75;
        float metal = 0.0;
        vec3 emissive = vec3(0.0);

        if (mat == 1){
          float tex = fbm(p.xz*2.2 + vec2(0.0, p.x*0.2));
          albedo = mix(vec3(0.10,0.12,0.18), vec3(0.16,0.17,0.22), 0.35*tex);
          rough = 0.92;
          metal = 0.0;
        } else if (mat == 2){
          albedo = vec3(0.18,0.20,0.26);
          rough = 0.35;
          metal = 0.25;
        } else {
          // glass shell: spec + internal emission
          albedo = vec3(0.04,0.05,0.07);
          rough = 0.08;
          metal = 0.0;

          float shelfTopY = -0.78;
          float baseH = 0.28;
          float glassH = 1.10;
          vec3 glassC = vec3(0.0, shelfTopY + baseH + glassH*0.5, 0.0);

          vec3 lp = p - glassC;
          float hN = saturate(lp.y / (glassH*0.5) * 0.5 + 0.5);
          float ang = atan(lp.z, lp.x);
          float angN = ang / (6.2831853) + 0.5;

          vec4 eA = emissionForMode(a, hN, angN);
          vec4 eB = emissionForMode(b, hN, angN);
          vec4 e = mix(eA, eB, f);

          float bness = mix(0.55, 1.65, u_brightness);
          emissive = e.rgb * e.a * (3.0 * bness);

          float tube = exp(-abs(length(lp.xz) - 0.22) * 8.0);
          emissive += e.rgb * tube * 0.12 * (0.7 + 0.6*u_brightness);
        }

        // simple spec
        vec3 h = normalize(Lkey + v);
        float ndh = max(dot(n, h), 0.0);
        float specPow = mix(20.0, 180.0, 1.0 - rough);
        float spec = pow(ndh, specPow);

        vec3 F0 = mix(vec3(0.04), albedo, metal);
        vec3 F = fresnelSchlick(max(dot(n, v), 0.0), F0);

        vec3 diff = (1.0 - F) * albedo / 3.14159;

        vec3 direct = (diff * ndl * keyCol * sh) + (F * spec * ndl * keyCol * sh * 1.2);
        direct += (diff * ndl2 * rimCol * 0.35)
               +  (F * pow(max(dot(n, normalize(Lrim+v)),0.0), specPow) * ndl2 * rimCol * 0.6);

        vec3 env = mix(vec3(0.03,0.04,0.07), envTint*0.24, 0.45 + 0.55*n.y);
        vec3 ambient = env * (0.35 + 0.65*occ);

        vec3 col = direct + ambient + emissive;

        if (mat == 3){
          float fres = pow(1.0 - max(dot(n, v), 0.0), 3.0);
          col += envTint * (0.08 + 0.20*fres);
          col *= 0.95;
        }
        return col;
      }

      bool raymarch(vec3 ro, vec3 rd, out vec3 pHit, out int matHit, out float tHit){
        float t = 0.0;
        int mat = 0;
        for(int i=0;i<120;i++){
          vec3 p = ro + rd*t;
          float d = mapScene(p, mat);
          if (d < 0.0012){
            pHit = p; matHit = mat; tHit = t;
            return true;
          }
          t += d * 0.88;
          if (t > 6.0) break;
        }
        return false;
      }

      vec3 airGlow(vec3 ro, vec3 rd, float sceneIdx){
        float s = wrap3(sceneIdx);
        float i0f = floor(s);
        float f = fract(s);
        int a = int(mod(i0f, 3.0));
        int b = int(mod(i0f + 1.0, 3.0));
        vec3 envTint = mix(sceneEnvTint(a), sceneEnvTint(b), f);

        float denom = dot(rd.xz, rd.xz);
        if (denom < 1e-4) return vec3(0.0);
        float t = -dot(ro.xz, rd.xz) / denom;
        t = clamp(t, 0.0, 6.0);
        vec2 closest = ro.xz + rd.xz * t;
        float d = length(closest);

        float g = exp(-pow(max(0.0, d - 0.20), 2.0) * 18.0);
        g *= (0.25 + 1.10*u_brightness);
        g *= exp(-t * 0.45);

        return envTint * g * 0.18;
      }

      void main(){
        vec2 uv = v_uv;
        vec2 p = (uv - 0.5);
        float asp = u_res.x / u_res.y;
        p.x *= asp;

        float t = u_time;

        // camera: subtle handheld + mild parallax with carousel fraction
        float camBob = 0.010*sin(t*0.65) + 0.006*sin(t*1.3 + 1.7);
        float drift = 0.08 * sin(t*0.12);
        vec3 ro = vec3(0.16*sin(t*0.20) + drift, 0.08 + camBob, 2.55);
        vec3 ta = vec3(0.0, -0.12, 0.0);

        vec3 ww = normalize(ta - ro);
        vec3 uu = normalize(cross(vec3(0.0,1.0,0.0), ww));
        vec3 vv = cross(ww, uu);

        float fov = 1.35;
        vec3 rd = normalize(uu*p.x + vv*p.y + ww*fov);

        float sIdx = u_scene;
        float s = wrap3(sIdx);
        float i0f = floor(s);
        float frac = fract(s);
        int a = int(mod(i0f, 3.0));
        int b = int(mod(i0f + 1.0, 3.0));
        vec3 tint = mix(sceneEnvTint(a), sceneEnvTint(b), frac);

        // background (linear)
        vec3 bg = mix(vec3(0.02,0.03,0.06), tint*0.18, 0.35 + 0.65*(uv.y));
        bg += tint * 0.09 * exp(-dot(p*vec2(1.0,0.8), p*vec2(1.0,0.8))*2.2);

        vec3 ph; int mat; float th;
        vec3 col = bg;

        if (raymarch(ro, rd, ph, mat, th)){
          vec3 n = calcNormal(ph);
          vec3 v = normalize(ro - ph);
          col = shade(ph, n, v, mat, sIdx);

          if (mat == 1){
            float fres = pow(1.0 - max(dot(n, v), 0.0), 5.0);
            col += tint * fres * 0.05;
          }

          float fog = 1.0 - exp(-th * 0.22);
          col = mix(col, bg, fog*0.55);
        }

        col += airGlow(ro, rd, sIdx);

        // NOTE: keep it linear-ish here; composite pass will tonemap + gamma.
        // mild clamp to avoid extreme blowouts in 8-bit RT (still allows bloom to see highlights)
        col = min(col, vec3(4.0));

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    // Pass 2: Downsample + highlight extract (threshold + soft knee)
    const DOWNSAMPLE_FRAG = `
      precision highp float;
      varying vec2 v_uv;
      uniform sampler2D u_tex;
      uniform vec2 u_texel;     // 1/size
      uniform float u_thresh;   // threshold in linear
      uniform float u_knee;     // soft knee width
      void main(){
        vec2 uv = v_uv;

        // 9-tap box-ish filter
        vec3 c = vec3(0.0);
        c += texture2D(u_tex, uv + u_texel*vec2(-1.0,-1.0)).rgb;
        c += texture2D(u_tex, uv + u_texel*vec2( 0.0,-1.0)).rgb;
        c += texture2D(u_tex, uv + u_texel*vec2( 1.0,-1.0)).rgb;
        c += texture2D(u_tex, uv + u_texel*vec2(-1.0, 0.0)).rgb;
        c += texture2D(u_tex, uv).rgb;
        c += texture2D(u_tex, uv + u_texel*vec2( 1.0, 0.0)).rgb;
        c += texture2D(u_tex, uv + u_texel*vec2(-1.0, 1.0)).rgb;
        c += texture2D(u_tex, uv + u_texel*vec2( 0.0, 1.0)).rgb;
        c += texture2D(u_tex, uv + u_texel*vec2( 1.0, 1.0)).rgb;
        c *= (1.0/9.0);

        // luminance
        float l = dot(c, vec3(0.2126,0.7152,0.0722));

        // soft threshold (knee)
        float t = u_thresh;
        float k = u_knee;
        float soft = clamp((l - t + k) / (2.0*k), 0.0, 1.0);
        soft = soft*soft*(3.0-2.0*soft);
        float w = max(0.0, l - t) / max(l, 1e-5);
        float gain = max(w, soft);

        gl_FragColor = vec4(c * gain, 1.0);
      }
    `;

    // Pass 3: Separable gaussian blur
    const BLUR_FRAG = `
      precision highp float;
      varying vec2 v_uv;
      uniform sampler2D u_tex;
      uniform vec2 u_dir;       // (1,0) or (0,1)
      uniform vec2 u_texel;     // 1/size

      void main(){
        vec2 off = u_dir * u_texel;

        vec3 c = texture2D(u_tex, v_uv).rgb * 0.227027;
        c += texture2D(u_tex, v_uv + off * 1.0).rgb * 0.1945946;
        c += texture2D(u_tex, v_uv - off * 1.0).rgb * 0.1945946;
        c += texture2D(u_tex, v_uv + off * 2.0).rgb * 0.1216216;
        c += texture2D(u_tex, v_uv - off * 2.0).rgb * 0.1216216;
        c += texture2D(u_tex, v_uv + off * 3.0).rgb * 0.054054;
        c += texture2D(u_tex, v_uv - off * 3.0).rgb * 0.054054;
        c += texture2D(u_tex, v_uv + off * 4.0).rgb * 0.016216;
        c += texture2D(u_tex, v_uv - off * 4.0).rgb * 0.016216;

        gl_FragColor = vec4(c, 1.0);
      }
    `;

    // Pass 4: Composite with barrel distortion + chromatic aberration + vignette + grain
    const COMPOSITE_FRAG = `
      precision highp float;
      varying vec2 v_uv;
      uniform sampler2D u_scene;
      uniform sampler2D u_bloom;
      uniform vec2  u_res;
      uniform float u_time;
      uniform float u_bloomAmt;
      uniform float u_distort;
      uniform float u_ca;        // chromatic aberration
      uniform float u_grain;
      uniform float u_vig;

      float hash12(vec2 p){
        vec3 p3 = fract(vec3(p.xyx) * 0.1031);
        p3 += dot(p3, p3.yzx + 33.33);
        return fract((p3.x + p3.y) * p3.z);
      }

      vec3 tonemapACES(vec3 x){
        // ACES-ish (Narkowicz)
        float a = 2.51;
        float b = 0.03;
        float c = 2.43;
        float d = 0.59;
        float e = 0.14;
        return clamp((x*(a*x+b)) / (x*(c*x+d)+e), 0.0, 1.0);
      }

      void main(){
        vec2 uv = v_uv;
        vec2 p = uv - 0.5;
        float asp = u_res.x / u_res.y;
        p.x *= asp;

        // barrel distortion (radial)
        float r2 = dot(p,p);
        float k = u_distort;
        vec2 pd = p * (1.0 + k * r2);

        // chromatic aberration (radial direction)
        vec2 dir = normalize(pd + vec2(1e-6, 0.0));
        float ca = u_ca * (0.35 + 0.65*r2);
        vec2 pdR = pd + dir * ca;
        vec2 pdB = pd - dir * ca;

        // back to UV
        vec2 uvG = vec2(pd.x/asp, pd.y) + 0.5;
        vec2 uvR = vec2(pdR.x/asp, pdR.y) + 0.5;
        vec2 uvB = vec2(pdB.x/asp, pdB.y) + 0.5;

        // sample scene per-channel
        vec3 sR = texture2D(u_scene, uvR).rgb;
        vec3 sG = texture2D(u_scene, uvG).rgb;
        vec3 sB = texture2D(u_scene, uvB).rgb;
        vec3 scene = vec3(sR.r, sG.g, sB.b);

        // bloom (distorted same as green for coherence)
        vec3 bloom = texture2D(u_bloom, uvG).rgb;

        // add bloom
        vec3 col = scene + bloom * u_bloomAmt;

        // subtle “glare” by boosting bloom in highlights
        float lum = dot(col, vec3(0.2126,0.7152,0.0722));
        col += bloom * (0.20 * smoothstep(0.55, 1.10, lum));

        // vignette
        float v = smoothstep(0.98, 0.35, length((uv-0.5)*vec2(1.0,0.92)));
        col *= mix(1.0 - u_vig, 1.0, v);

        // grain + tiny scanline vibe
        float g = (hash12(uv*u_res + fract(u_time)*173.0) - 0.5) * u_grain;
        col += g;
        col *= 1.0 + 0.010 * sin((uv.y*u_res.y)*1.5);

        // tone map + gamma
        col = tonemapACES(col);
        col = pow(col, vec3(1.0/2.2));

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    // ---------------- GL setup ----------------
    let sceneProg, downProg, blurProg, compProg;
    let quadBuf;

    let rtScene = null;      // full-res
    let rtBloomA = null;     // half-res
    let rtBloomB = null;     // half-res ping-pong
    let rtBloomQ = null;     // quarter-res (optional extra softness)
    let rtBloomQ2 = null;    // quarter ping-pong

    function makeProgram(fragSrc){
      const vs = compile(gl.VERTEX_SHADER, VERT);
      const fs = compile(gl.FRAGMENT_SHADER, fragSrc);
      return link(vs, fs);
    }

    function bindQuad(prog){
      gl.useProgram(prog);
      if (!quadBuf){
        quadBuf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, quadBuf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
          -1,-1,  1,-1, -1, 1,
          -1, 1,  1,-1,  1, 1
        ]), gl.STATIC_DRAW);
      } else {
        gl.bindBuffer(gl.ARRAY_BUFFER, quadBuf);
      }
      const a_pos = gl.getAttribLocation(prog, "a_pos");
      gl.enableVertexAttribArray(a_pos);
      gl.vertexAttribPointer(a_pos, 2, gl.FLOAT, false, 0, 0);
    }

    function setTex(unit, tex){
      gl.activeTexture(gl.TEXTURE0 + unit);
      gl.bindTexture(gl.TEXTURE_2D, tex);
    }

    let dpr = 1;
    function resizeAll(){
      const r = canvas.getBoundingClientRect();
      dpr = Math.max(1, Math.min(2.25, window.devicePixelRatio || 1));
      const w = Math.max(2, Math.floor(r.width * dpr));
      const h = Math.max(2, Math.floor(r.height * dpr));
      if (canvas.width !== w || canvas.height !== h){
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0,0,w,h);
      }

      // render targets
      const w1 = canvas.width, h1 = canvas.height;
      const w2 = Math.max(2, Math.floor(w1/2)), h2 = Math.max(2, Math.floor(h1/2));
      const w4 = Math.max(2, Math.floor(w1/4)), h4 = Math.max(2, Math.floor(h1/4));

      if (!rtScene) rtScene = createRT(w1,h1); else resizeRT(rtScene, w1,h1);
      if (!rtBloomA) rtBloomA = createRT(w2,h2); else resizeRT(rtBloomA, w2,h2);
      if (!rtBloomB) rtBloomB = createRT(w2,h2); else resizeRT(rtBloomB, w2,h2);

      if (!rtBloomQ)  rtBloomQ  = createRT(w4,h4); else resizeRT(rtBloomQ,  w4,h4);
      if (!rtBloomQ2) rtBloomQ2 = createRT(w4,h4); else resizeRT(rtBloomQ2, w4,h4);
    }

    window.addEventListener("resize", resizeAll);

    // ---------------- Build programs ----------------
    try{
      sceneProg = makeProgram(SCENE_FRAG);
      downProg  = makeProgram(DOWNSAMPLE_FRAG);
      blurProg  = makeProgram(BLUR_FRAG);
      compProg  = makeProgram(COMPOSITE_FRAG);
    } catch(e){
      showErr(String(e));
    }

    // ---------------- Render helpers ----------------
    function renderScene(nowSec){
      gl.bindFramebuffer(gl.FRAMEBUFFER, rtScene.fbo);
      gl.viewport(0,0, rtScene.w, rtScene.h);

      bindQuad(sceneProg);

      const u_res = gl.getUniformLocation(sceneProg, "u_res");
      const u_time = gl.getUniformLocation(sceneProg, "u_time");
      const u_brightness = gl.getUniformLocation(sceneProg, "u_brightness");
      const u_scene = gl.getUniformLocation(sceneProg, "u_scene");

      gl.uniform2f(u_res, rtScene.w, rtScene.h);
      gl.uniform1f(u_time, nowSec);
      gl.uniform1f(u_brightness, shaderState.u_brightness);
      gl.uniform1f(u_scene, shaderState.u_scene);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
    }

    function downsampleExtract(srcTex, dstRT, thresh, knee){
      gl.bindFramebuffer(gl.FRAMEBUFFER, dstRT.fbo);
      gl.viewport(0,0, dstRT.w, dstRT.h);

      bindQuad(downProg);

      setTex(0, srcTex);
      gl.uniform1i(gl.getUniformLocation(downProg, "u_tex"), 0);
      gl.uniform2f(gl.getUniformLocation(downProg, "u_texel"), 1.0/dstRT.w, 1.0/dstRT.h);
      gl.uniform1f(gl.getUniformLocation(downProg, "u_thresh"), thresh);
      gl.uniform1f(gl.getUniformLocation(downProg, "u_knee"), knee);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
    }

    function blur(srcTex, tmpRT, dstRT, iterations){
      // ping-pong between tmpRT and dstRT (both same size)
      let inTex = srcTex;
      for (let i=0;i<iterations;i++){
        // horizontal -> tmp
        gl.bindFramebuffer(gl.FRAMEBUFFER, tmpRT.fbo);
        gl.viewport(0,0, tmpRT.w, tmpRT.h);
        bindQuad(blurProg);
        setTex(0, inTex);
        gl.uniform1i(gl.getUniformLocation(blurProg, "u_tex"), 0);
        gl.uniform2f(gl.getUniformLocation(blurProg, "u_texel"), 1.0/tmpRT.w, 1.0/tmpRT.h);
        gl.uniform2f(gl.getUniformLocation(blurProg, "u_dir"), 1.0, 0.0);
        gl.drawArrays(gl.TRIANGLES, 0, 6);

        // vertical -> dst
        gl.bindFramebuffer(gl.FRAMEBUFFER, dstRT.fbo);
        gl.viewport(0,0, dstRT.w, dstRT.h);
        bindQuad(blurProg);
        setTex(0, tmpRT.tex);
        gl.uniform1i(gl.getUniformLocation(blurProg, "u_tex"), 0);
        gl.uniform2f(gl.getUniformLocation(blurProg, "u_texel"), 1.0/dstRT.w, 1.0/dstRT.h);
        gl.uniform2f(gl.getUniformLocation(blurProg, "u_dir"), 0.0, 1.0);
        gl.drawArrays(gl.TRIANGLES, 0, 6);

        inTex = dstRT.tex;
      }
      return inTex;
    }

    function composite(nowSec, bloomTex){
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0,0, canvas.width, canvas.height);

      bindQuad(compProg);

      setTex(0, rtScene.tex);
      setTex(1, bloomTex);

      gl.uniform1i(gl.getUniformLocation(compProg, "u_scene"), 0);
      gl.uniform1i(gl.getUniformLocation(compProg, "u_bloom"), 1);

      gl.uniform2f(gl.getUniformLocation(compProg, "u_res"), canvas.width, canvas.height);
      gl.uniform1f(gl.getUniformLocation(compProg, "u_time"), nowSec);

      // tune “max look” here
      const b = shaderState.u_brightness;
      const bloomAmt = 0.75 + 1.15*b;              // bloom intensity
      const distort  = 0.14;                       // barrel
      const ca       = 0.0012 + 0.0018*b;          // chromatic aberration
      const grain    = 0.016;                      // grain
      const vig      = 0.28;                       // vignette strength

      gl.uniform1f(gl.getUniformLocation(compProg, "u_bloomAmt"), bloomAmt);
      gl.uniform1f(gl.getUniformLocation(compProg, "u_distort"), distort);
      gl.uniform1f(gl.getUniformLocation(compProg, "u_ca"), ca);
      gl.uniform1f(gl.getUniformLocation(compProg, "u_grain"), grain);
      gl.uniform1f(gl.getUniformLocation(compProg, "u_vig"), vig);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
    }

    // ---------------- Main loop ----------------
    let last = performance.now();

    function tick(now){
      if (!sceneProg || !downProg || !blurProg || !compProg) return;
      resizeAll();

      const dt = Math.min(0.033, (now - last)/1000);
      last = now;

      // carousel spring
      if (!dragging){
        const d = shortestDelta(target, scene);
        const k = 18.0;
        const damp = 10.5;
        vel += d * k * dt;
        vel *= Math.exp(-damp * dt);
        scene = wrap(scene + vel * dt);
      } else {
        scene = wrap(scene);
      }

      shaderState.u_scene = scene;
      layoutLens();

      const nowSec = now/1000;

      // 1) render scene (linear-ish) to full RT
      renderScene(nowSec);

      // 2) downsample + extract highlights to half res
      // threshold tuned per brightness; keep some bloom even at low
      const thresh = 0.55 + 0.25*(1.0 - shaderState.u_brightness);
      const knee   = 0.35;
      downsampleExtract(rtScene.tex, rtBloomA, thresh, knee);

      // 2b) extra softness: downsample half -> quarter, blur harder, then upsample implicitly in composite
      downsampleExtract(rtBloomA.tex, rtBloomQ, 0.15, 0.25);

      // 3) blur half (few iterations)
      const halfBlurTex = blur(rtBloomA.tex, rtBloomB, rtBloomA, 2);

      // 3b) blur quarter (more iterations for big glow)
      const quarterBlurTex = blur(rtBloomQ.tex, rtBloomQ2, rtBloomQ, 3);

      // 4) combine half+quarter bloom into rtBloomA (quick add pass via downsample shader hack)
      // Instead of another shader, reuse downsample as a simple add: set threshold=0 and knee large
      // (it will pass through; we pre-add in two draws).
      gl.bindFramebuffer(gl.FRAMEBUFFER, rtBloomA.fbo);
      gl.viewport(0,0, rtBloomA.w, rtBloomA.h);
      bindQuad(downProg);

      // draw halfBlur into rtBloomA
      setTex(0, halfBlurTex);
      gl.uniform1i(gl.getUniformLocation(downProg, "u_tex"), 0);
      gl.uniform2f(gl.getUniformLocation(downProg, "u_texel"), 1.0/rtBloomA.w, 1.0/rtBloomA.h);
      gl.uniform1f(gl.getUniformLocation(downProg, "u_thresh"), 0.0);
      gl.uniform1f(gl.getUniformLocation(downProg, "u_knee"), 10.0);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      // additive blend quarter bloom on top (upsampled)
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.ONE, gl.ONE);
      setTex(0, quarterBlurTex);
      gl.uniform1i(gl.getUniformLocation(downProg, "u_tex"), 0);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      gl.disable(gl.BLEND);

      // 5) composite to screen with lens effects
      composite(nowSec, rtBloomA.tex);

      requestAnimationFrame(tick);
    }

    // init
    try{
      setBrightness();
      applyTheme(0);
      layoutLens();
      resizeAll();
      requestAnimationFrame(tick);
    } catch (e){
      showErr(String(e));
    }
  </script>
</body>
</html>
