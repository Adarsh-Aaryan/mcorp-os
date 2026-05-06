<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<title>Mcorp Interiors — Login</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
:root{
  --bg:#07070a;--surf:#0d0d12;--card:#121218;
  --border:#1c1c26;--border2:#242430;
  --gold:#c9a96e;--gold2:#e8d4a8;
  --white:#ede9e0;--muted:#585868;
  --red:#d94f4f;--green:#4caf7a;--teal:#4fcdc9;
}
*{margin:0;padding:0;box-sizing:border-box;}
html,body{height:100%;background:var(--bg);color:var(--white);font-family:'DM Sans',sans-serif;}

body{
  background:
    radial-gradient(ellipse 80% 50% at 50% -10%, rgba(201,169,110,0.12) 0%, transparent 60%),
    var(--bg);
}

.wrap{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px;}

.box{
  width:100%;max-width:420px;
  background:var(--surf);
  border:1px solid var(--border2);
  border-radius:20px;
  padding:44px 40px;
  box-shadow:0 40px 100px rgba(0,0,0,0.7),0 0 0 1px rgba(201,169,110,0.08);
}

.logo{text-align:center;margin-bottom:36px;}
.logo-text{
  font-family:'Cormorant Garamond',serif;
  font-size:42px;font-weight:700;
  letter-spacing:8px;color:var(--gold);line-height:1;
}
.logo-sub{
  font-family:'JetBrains Mono',monospace;
  font-size:9px;letter-spacing:4px;
  text-transform:uppercase;color:var(--muted);margin-top:7px;
}
.logo-line{
  width:40px;height:1px;background:linear-gradient(90deg,transparent,var(--gold),transparent);
  margin:10px auto 0;
}

.title{font-family:'Cormorant Garamond',serif;font-size:22px;font-weight:600;margin-bottom:4px;text-align:center;}
.sub{font-size:12px;color:var(--muted);text-align:center;margin-bottom:28px;}

.lbl{display:block;font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:var(--muted);font-family:'JetBrains Mono',monospace;margin-bottom:6px;}
.inp{
  width:100%;background:rgba(255,255,255,0.03);
  border:1px solid var(--border2);border-radius:10px;
  padding:13px 16px;color:var(--white);
  font-family:'DM Sans',sans-serif;font-size:14px;
  outline:none;transition:all .2s;
}
.inp:focus{border-color:var(--gold);background:rgba(201,169,110,0.04);}
.inp::placeholder{color:var(--muted);}
.grp{margin-bottom:18px;}

.btn{
  width:100%;padding:14px;
  border:none;border-radius:10px;
  font-family:'DM Sans',sans-serif;
  font-size:14px;font-weight:700;
  cursor:pointer;transition:all .2s;
  letter-spacing:.5px;
}
.btn-gold{background:var(--gold);color:#1a0e00;}
.btn-gold:hover{background:var(--gold2);transform:translateY(-1px);}
.btn-gold:disabled{opacity:.5;cursor:not-allowed;transform:none;}

.divider{display:flex;align-items:center;gap:12px;margin:20px 0;font-size:11px;color:var(--muted);}
.divider::before,.divider::after{content:'';flex:1;height:1px;background:var(--border2);}

.btn-phone{
  width:100%;padding:13px;
  background:transparent;color:var(--teal);
  border:1px solid rgba(79,205,201,0.35);border-radius:10px;
  font-family:'DM Sans',sans-serif;font-size:13px;font-weight:600;
  cursor:pointer;transition:all .2s;
}
.btn-phone:hover{background:rgba(79,205,201,0.08);border-color:var(--teal);}

.err{
  background:rgba(217,79,79,0.1);border:1px solid rgba(217,79,79,0.3);
  color:var(--red);border-radius:8px;padding:11px 14px;
  font-size:12px;margin-bottom:16px;display:none;
  animation:fadeIn .2s ease;
}
@keyframes fadeIn{from{opacity:0;transform:translateY(-4px);}to{opacity:1;transform:translateY(0);}}

/* PHONE VIEW */
.phone-view{display:none;}
.cc-row{display:flex;gap:8px;}
.cc-sel{width:100px;flex-shrink:0;}

/* OTP VIEW */
.otp-view{display:none;}
.otp-row{display:flex;gap:10px;justify-content:center;margin:20px 0;}
.otp-inp{
  width:50px;height:56px;text-align:center;
  background:rgba(255,255,255,0.03);
  border:1px solid var(--border2);border-radius:10px;
  color:var(--white);font-size:24px;
  font-family:'JetBrains Mono',monospace;font-weight:600;
  outline:none;transition:border-color .2s;
}
.otp-inp:focus{border-color:var(--gold);}
.otp-sub{font-size:12px;color:var(--muted);text-align:center;margin-bottom:4px;}

.back-lnk{
  background:none;border:none;color:var(--muted);
  font-size:12px;cursor:pointer;margin-top:14px;
  width:100%;text-align:center;font-family:'DM Sans',sans-serif;
  transition:color .15s;display:block;
}
.back-lnk:hover{color:var(--white);}

/* LOADING */
.overlay{
  display:none;position:fixed;inset:0;
  background:rgba(7,7,10,0.92);z-index:999;
  align-items:center;justify-content:center;flex-direction:column;gap:16px;
}
.overlay.on{display:flex;}
.spin{
  width:42px;height:42px;
  border:3px solid var(--border2);
  border-top-color:var(--gold);
  border-radius:50%;animation:spin 1s linear infinite;
}
@keyframes spin{to{transform:rotate(360deg);}}
.spin-txt{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted);letter-spacing:3px;}

#recaptcha-container{margin:10px 0;}
</style>
</head>
<body>

<div class="overlay" id="ov"><div class="spin"></div><div class="spin-txt" id="ovTxt">SIGNING IN...</div></div>

<div class="wrap">
  <div class="box">
    <div class="logo">
      <div class="logo-text">MCORP</div>
      <div class="logo-sub">Interiors · Command System</div>
      <div class="logo-line"></div>
    </div>

    <!-- EMAIL VIEW -->
    <div id="emailView">
      <div class="title">Welcome back</div>
      <div class="sub">Sign in to your Mcorp account</div>
      <div class="err" id="emailErr"></div>
      <div class="grp"><label class="lbl">Email</label><input class="inp" type="email" id="eml" placeholder="your@email.com" autocomplete="email"></div>
      <div class="grp"><label class="lbl">Password</label><input class="inp" type="password" id="pwd" placeholder="••••••••" autocomplete="current-password"></div>
      <button class="btn btn-gold" id="emailBtn" onclick="doEmailLogin()">Sign In</button>
      <div class="divider">or</div>
      <button class="btn-phone" onclick="showPhone()">📱 Sign in with Mobile Number (OTP)</button>
    </div>

    <!-- PHONE VIEW -->
    <div id="phoneView" class="phone-view">
      <div class="title">Mobile Sign In</div>
      <div class="sub">We'll send a one-time code to your number</div>
      <div class="err" id="phoneErr"></div>
      <div class="grp">
        <label class="lbl">Mobile Number</label>
        <div class="cc-row">
          <select class="inp cc-sel" id="cc">
            <option value="+971">🇦🇪 +971</option>
            <option value="+91">🇮🇳 +91</option>
            <option value="+44">🇬🇧 +44</option>
            <option value="+1">🇺🇸 +1</option>
          </select>
          <input class="inp" type="tel" id="phNum" placeholder="50 123 4567" style="flex:1">
        </div>
      </div>
      <div id="recaptcha-container"></div>
      <button class="btn btn-gold" onclick="doSendOTP()" id="otpBtn" style="background:var(--teal);color:#001a1a">Send OTP Code</button>
      <button class="back-lnk" onclick="showEmail()">← Back to email login</button>
    </div>

    <!-- OTP VIEW -->
    <div id="otpView" class="otp-view">
      <div class="title">Enter Code</div>
      <div class="otp-sub" id="otpSub">Code sent to your number</div>
      <div class="otp-row">
        <input class="otp-inp" maxlength="1" id="d1" oninput="nxt(this,'d2')">
        <input class="otp-inp" maxlength="1" id="d2" oninput="nxt(this,'d3')">
        <input class="otp-inp" maxlength="1" id="d3" oninput="nxt(this,'d4')">
        <input class="otp-inp" maxlength="1" id="d4" oninput="nxt(this,'d5')">
        <input class="otp-inp" maxlength="1" id="d5" oninput="nxt(this,'d6')">
        <input class="otp-inp" maxlength="1" id="d6" oninput="doVerifyOTP()">
      </div>
      <button class="btn btn-gold" onclick="doVerifyOTP()" style="background:var(--teal);color:#001a1a">Verify & Enter</button>
      <button class="back-lnk" onclick="showPhone()">← Resend code</button>
    </div>

  </div>
</div>

<!-- Firebase -->
<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth, signInWithEmailAndPassword,
  RecaptchaVerifier, signInWithPhoneNumber, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  getFirestore, doc, getDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyATb3dKCkx0D2K_bLnwLYcVKRHGcTzfUFg",
  authDomain: "mcorp-os.firebaseapp.com",
  projectId: "mcorp-os",
  storageBucket: "mcorp-os.firebasestorage.app",
  messagingSenderId: "886290163748",
  appId: "1:886290163748:web:010f2f466db99eca8a90b1",
  measurementId: "G-EH3TCVLEP9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

window._auth = auth; window._db = db;
window._fbFns = { signInWithEmailAndPassword, RecaptchaVerifier, signInWithPhoneNumber, doc, getDoc };

// Auto redirect if already logged in
onAuthStateChanged(auth, async user => {
  if (user) {
    loading("LOADING DASHBOARD...");
    const role = await getRole(user.uid);
    redirect(role);
  }
});

async function getRole(uid) {
  try {
    const s = await getDoc(doc(db, "users", uid));
    return s.exists() ? s.data().role : "engineer";
  } catch { return "engineer"; }
}

function redirect(role) {
  const map = {
    owner:"dashboard.html", engineer:"engineer.html",
    foreman:"engineer.html", designer:"office.html",
    draftsman:"office.html", accountant:"procurement.html",
    procurement:"procurement.html"
  };
  window.location.href = map[role] || "engineer.html";
}

window._getRole = getRole;
window._redirect = redirect;
</script>

<script>
let confirmResult = null, rcap = null;

function loading(t){ document.getElementById('ov').classList.add('on'); document.getElementById('ovTxt').textContent=t||'LOADING...'; }
function stopLoad(){ document.getElementById('ov').classList.remove('on'); }
function showErr(id,msg){ const e=document.getElementById(id); e.textContent=msg; e.style.display='block'; }
function hideErr(id){ document.getElementById(id).style.display='none'; }
function showEmail(){ document.getElementById('emailView').style.display='block'; document.getElementById('phoneView').style.display='none'; document.getElementById('otpView').style.display='none'; }
function showPhone(){ document.getElementById('emailView').style.display='none'; document.getElementById('phoneView').style.display='block'; document.getElementById('otpView').style.display='none';
  if(!rcap){ rcap=new window._fbFns.RecaptchaVerifier(window._auth,'recaptcha-container',{size:'invisible'}); }
}
function showOTP(num){ document.getElementById('phoneView').style.display='none'; document.getElementById('otpView').style.display='block'; document.getElementById('otpSub').textContent='Code sent to '+num; document.getElementById('d1').focus(); }
function nxt(el,nid){ if(el.value.length===1){ const n=document.getElementById(nid); if(n)n.focus(); } }

async function doEmailLogin(){
  const email=document.getElementById('eml').value.trim();
  const pass=document.getElementById('pwd').value;
  if(!email||!pass){ showErr('emailErr','Enter email and password.'); return; }
  hideErr('emailErr'); loading('SIGNING IN...');
  try{
    const c=await window._fbFns.signInWithEmailAndPassword(window._auth,email,pass);
    const role=await window._getRole(c.user.uid);
    window._redirect(role);
  }catch(e){
    stopLoad();
    const m={'auth/user-not-found':'No account found. Contact Adarsh.','auth/wrong-password':'Wrong password. Try again.','auth/invalid-email':'Invalid email format.','auth/too-many-requests':'Too many attempts. Wait a few minutes.','auth/invalid-credential':'Wrong email or password.'};
    showErr('emailErr', m[e.code]||'Login failed: '+e.message);
  }
}

async function doSendOTP(){
  const cc=document.getElementById('cc').value;
  const num=document.getElementById('phNum').value.replace(/\s/g,'');
  if(!num){ showErr('phoneErr','Enter your mobile number.'); return; }
  const full=cc+num; hideErr('phoneErr'); loading('SENDING CODE...');
  try{
    confirmResult=await window._fbFns.signInWithPhoneNumber(window._auth,full,rcap);
    stopLoad(); showOTP(full);
  }catch(e){
    stopLoad(); showErr('phoneErr','Failed to send OTP: '+e.message);
    if(rcap){ rcap.clear(); rcap=null; }
  }
}

async function doVerifyOTP(){
  const otp=['d1','d2','d3','d4','d5','d6'].map(i=>document.getElementById(i).value).join('');
  if(otp.length<6) return;
  if(!confirmResult){ alert('Session expired. Go back and resend.'); showPhone(); return; }
  loading('VERIFYING...');
  try{
    const c=await confirmResult.confirm(otp);
    const role=await window._getRole(c.user.uid);
    window._redirect(role);
  }catch(e){
    stopLoad();
    ['d1','d2','d3','d4','d5','d6'].forEach(i=>{ document.getElementById(i).value=''; });
    document.getElementById('d1').focus();
    alert('Wrong code. Try again.');
  }
}

document.getElementById('pwd')?.addEventListener('keydown',e=>{ if(e.key==='Enter') doEmailLogin(); });
document.getElementById('phNum')?.addEventListener('keydown',e=>{ if(e.key==='Enter') doSendOTP(); });
</script>
</body>
</html>
