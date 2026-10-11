
const {useState,useRef,useEffect,useCallback,useMemo,memo,useContext}=React;

/* ════ TALES ARCHIVE (Blood Seeker campaign 1 — read only) ════ */
const TALES_DATA={"mapItems":[{"id":1,"type":"city","x":69.3,"y":62.4,"label":"Minith Tirith","color":"#c0392b","icon":"⚏","notes":""},{"id":2,"type":"town","x":32.3,"y":26.6,"label":"Bree","color":"#d35400","icon":"⌂","notes":""},{"id":3,"type":"city","x":49.7,"y":67.2,"label":"Dol Amroth","color":"#c0392b","icon":"⚏","notes":""},{"id":4,"type":"city","x":72.4,"y":22.0,"label":"Dale","color":"#c0392b","icon":"⚏","notes":""},{"id":5,"type":"city","x":49.3,"y":27.2,"label":"Rivendel","color":"#c0392b","icon":"⚏","notes":""}],"mapImage":null,"lore":{"allies":[{"id":"a1","name":"The Iron Captain","raceSp":"","age":"","hairColour":"","eyeColour":"","build":"","clothing":"","voiceAccent":"","personality":"","goalSecret":"","description":"poop","lore":"","abilities":"","relationships":"","featsWithParty":"","tags":""},{"id":"a2","name":"Vitalis","raceSp":"","age":"","description":"","lore":"","relationships":"","featsWithParty":"","tags":""},{"id":"a3","name":"Brok","raceSp":"dwarf","age":"20","hairColour":"black/dark brown","eyeColour":"brown","build":"like a brick shithouse","clothing":"basic garbo with bear pelt","voiceAccent":"rough like","personality":"whimsical but serious","goalSecret":"fight the strongest","description":"Brok left his home town of blacksmiths and he wanted to be more free so he ventured to [@Wolfham](lore:settlements:s1) and met gaydar and vitamin, he is short and stocky and is covered in scars from is few but life threatening battles, he is cheerful and whimsical but when he needs to he can be serious.","lore":"Was a blacksmith in the famous silver village that forged all of the silver weapons and armour for people, he wanted to find out what the world was like outside the village so after an argument with his dad he left to find a new path in life and that brought him to vitamin and gaydar","relationships":"Serulia- wife (dead)","featsWithParty":"","tags":""},{"id":"a4","name":"Arthur","description":"","lore":"","tags":""},{"id":"a5","name":"Damion","description":"","lore":"","tags":""},{"id":"a6","name":"Irene","description":"","lore":"","tags":""},{"id":"a7","name":"Burn Kara","description":"","lore":"","tags":""},{"id":"a8","name":"Captain Hadock","description":"","lore":"","tags":""},{"id":"a9","name":"The Red Lady","description":"","lore":"","tags":""},{"id":"a10","name":"Calahan","description":"","lore":"","tags":""},{"id":"a11","name":"Steel Dame","description":"","lore":"","tags":""},{"id":"a12","name":"Myrr","description":"","lore":"","tags":""},{"id":"a13","name":"Lord Dylan of House Rane","description":"","lore":"","tags":""},{"id":"a14","name":"Kanai","description":"","lore":"","tags":""}],"enemies":[{"id":"e1","name":"Mark Horigan","description":"","lore":"","tags":""},{"id":"e2","name":"Fire Elf","description":"","lore":"","tags":""},{"id":"e3","name":"Glice","description":"","lore":"","tags":""},{"id":"e4","name":"Hayan","description":"","lore":"","tags":""},{"id":"e5","name":"Balarion","description":"","lore":"","tags":""},{"id":"e6","name":"Valairon","description":"","lore":"","tags":""}],"factions":[{"id":"f1","name":"Pirate Council","description":"","lore":"","tags":""},{"id":"f2","name":"Inquisition","description":"","lore":"","tags":""},{"id":"f3","name":"Angles","description":"","lore":"","tags":""},{"id":"f4","name":"Gothwin","description":"","lore":"","tags":""}],"settlements":[{"id":"s1","name":"Wolfham","description":"","lore":"","tags":""},{"id":"s2","name":"Serinea","description":"","lore":"","tags":""},{"id":"s3","name":"Silver Isles","description":"","lore":"","tags":""},{"id":"s4","name":"westrun","description":"","lore":"","tags":""},{"id":"s5","name":"Isis Balon","description":"","lore":"","tags":""},{"id":"s6","name":"Austora","description":"","lore":"","tags":""},{"id":"s7","name":"kanai","description":"","lore":"","tags":""}],"history":[{"id":"h1","name":"Bears of the Beastlands","description":"","lore":"","tags":""},{"id":"h2","name":"Ironwood Expansion","description":"","lore":"","tags":""}],"sessions":[{"id":"ss1","name":"Session 27","description":"","lore":"","tags":""},{"id":"ss2","name":"Session 28","description":"","lore":"","tags":""},{"id":"ss3","name":"Session 29","description":"","lore":"","tags":""}]},"characters":[{"id":1,"name":"Headar","background":"Soldier","charClass":"Wanderer","species":"Human","subclass":"Hunter","level":12,"ac":18,"hpCurrent":108,"hpMax":108,"hpTemp":0,"hitDieMax":"d10","hitDieSpent":0,"profBonus":3,"str":16,"dex":12,"con":14,"int":8,"wis":10,"cha":14,"savingThrows":{},"skills":{},"classFeatures":[{"id":"cf1","name":"Wanderers Quarry","desc":""},{"id":"cf2","name":"Ambuscade","desc":""},{"id":"cf3","name":"Merciless Strike","desc":""},{"id":"cf4","name":"Extra Attack","desc":""},{"id":"cf5","name":"Feral Senses","desc":""},{"id":"cf6","name":"Cunning Parry","desc":""}],"knacks":[{"id":"k1","name":"Slayer I","desc":""},{"id":"k2","name":"Strider","desc":""},{"id":"k3","name":"Strider +2","desc":""},{"id":"k4","name":"Hedge Knight","desc":""}],"exploits":[{"id":"ex1","name":"First Aid","desc":""},{"id":"ex2","name":"Feint","desc":""},{"id":"ex3","name":"Precision Strike","desc":""},{"id":"ex4","name":"Arresting Strike","desc":""},{"id":"ex5","name":"Cunning Instinct","desc":""}],"exploitDC":14,"weapons":[{"id":1,"name":"Dreammaker","attackBonus":"+12","damage":"d10+8","notes":"3x per long rest, 3d8 Psychic Damage"},{"id":2,"name":"Longbow","attackBonus":"+6","damage":"d8+6","notes":"120/300ft range"},{"id":3,"name":"Long Sword","attackBonus":"+6","damage":"d10+6","notes":""}],"statRows":[{"id":1,"label":"INITIATIVE","value":"1"},{"id":2,"label":"SPEED","value":"30"},{"id":3,"label":"SIZE","value":"Medium"},{"id":4,"label":"PASSIVE PERCEPTION","value":"13"},{"id":5,"label":"EXPLOITS KNOWN","value":"19"},{"id":6,"label":"EXPLOIT DIE","value":"D6"},{"id":7,"label":"EXPLOIT DICE AVAIL","value":"3"},{"id":8,"label":"KNACKS KNOWN","value":"5"},{"id":9,"label":"PROF BONUS","value":"3"}],"featsArr":[{"id":"ft1","name":"Sharpshooter","desc":""},{"id":"ft2","name":"Sentinel","desc":""},{"id":"ft3","name":"Roguish Initiate","desc":""}],"speciesTraits":"Cosmar","armorProf":{"light":true,"medium":true,"heavy":false,"shields":false},"weaponsProf":"Martial","currency":{"pp":0,"gp":0,"sp":0,"cp":0},"inventory":""},{"id":2,"name":"","level":1,"charClass":"","str":10,"dex":10,"con":10,"int":10,"wis":10,"cha":10},{"id":3,"name":"","level":1,"charClass":"","str":10,"dex":10,"con":10,"int":10,"wis":10,"cha":10}]};

/* ════ SUPABASE ════ */
const SB_KEY="sf_supabase_v1";
const getSBConfig=()=>{try{const r=localStorage.getItem(SB_KEY);return r?JSON.parse(r):null}catch{return null}};
const saveSBConfig=c=>{try{localStorage.setItem(SB_KEY,JSON.stringify(c))}catch{}};
let _sb=null;
const getSB=()=>_sb;
const initSB=(url,key)=>{_sb={url:url.replace(/\/$/,""),key};return _sb;};
function sbH(sb,extra){
  // New sb_publishable_ keys only need apikey header, NOT Authorization Bearer
  // Old eyJ... JWT keys need both
  const isJWT=sb.key&&sb.key.startsWith("eyJ");
  const headers={"apikey":sb.key};
  if(isJWT)headers["Authorization"]=`Bearer ${sb.key}`;
  return{...headers,...(extra||{})};
}

async function dbUpsert(sb,id,payload,retries=3){
  for(let attempt=1;attempt<=retries;attempt++){
    try{
      const ctrl=new AbortController();const t=setTimeout(()=>ctrl.abort(),20000);
      const r=await fetch(`${sb.url}/rest/v1/campaign`,{method:"POST",headers:sbH(sb,{"Content-Type":"application/json","Prefer":"resolution=merge-duplicates"}),body:JSON.stringify({id,data:payload,updated_at:new Date().toISOString()}),signal:ctrl.signal});
      clearTimeout(t);if(r.ok)return;
      const txt=await r.text().catch(()=>`${r.status}`);
      if(attempt<retries){await new Promise(res=>setTimeout(res,1500*attempt));continue;}
      throw new Error(`DB save failed (${r.status}): ${txt.slice(0,200)}`);
    }catch(e){if(attempt===retries)throw e;await new Promise(res=>setTimeout(res,1500*attempt));}
  }
}
async function dbFetchAll(sb){
  try{
    const ctrl=new AbortController();
    const t=setTimeout(()=>ctrl.abort(),5000);
    const r=await fetch(`${sb.url}/rest/v1/campaign?select=id,data&limit=2000`,{headers:sbH(sb),signal:ctrl.signal});
    clearTimeout(t);
    if(!r.ok)return[];
    return await r.json();
  }catch{return[];}
}
async function dbDelete(sb,id){try{await fetch(`${sb.url}/rest/v1/campaign?id=eq.${encodeURIComponent(id)}`,{method:"DELETE",headers:sbH(sb)});}catch{}}

function stripImages(data){
  const imgs={};const d=JSON.parse(JSON.stringify(data));
  if(d.mapImage){imgs["v2_img_map"]=d.mapImage;d.mapImage=null;}
  (d.characters||[]).forEach(c=>{if(c.portrait){imgs[`v2_img_c_${c.id}`]=c.portrait;c.portrait=null;}});
  const SECS=Object.keys(d.lore||{});
  SECS.forEach(sec=>{(d.lore[sec]||[]).forEach(e=>{if(e.portrait){imgs[`v2_img_l_${e.id}`]=e.portrait;e.portrait=null;}if(e.fileData){imgs[`v2_img_f_${e.id}`]=e.fileData;e.fileData=null;}});});
  return{stripped:d,imgs};
}
function reattachImages(data,imgs){
  if(!data)return data;const d=JSON.parse(JSON.stringify(data));
  d.mapImage=imgs["v2_img_map"]||null;
  (d.characters||[]).forEach(c=>{c.portrait=imgs[`v2_img_c_${c.id}`]||null;});
  Object.keys(d.lore||{}).forEach(sec=>{(d.lore[sec]||[]).forEach(e=>{e.portrait=imgs[`v2_img_l_${e.id}`]||null;e.fileData=imgs[`v2_img_f_${e.id}`]||null;});});
  return d;
}

async function dbLoad(sb){
  const rows=await dbFetchAll(sb);if(!rows||!rows.length)return null;
  const defaultSections={allies:[],enemies:[],factions:[],settlements:[],history:[],sessions:[],terrain:[]};
  const lore={...defaultSections};let characters=null,mapItems=null,customSections=[];const imgs={};let hasV2=false;
  rows.forEach(({id,data:d})=>{
    if(!d&&d!==0)return;
    if(id==="sf_lore"){Object.keys(d).forEach(s=>{lore[s]=d[s]||[];});customSections=(d.__customSections||[]);hasV2=true;}
    else if(id==="sf_chars"){characters=d;hasV2=true;}
    else if(id==="sf_map"){mapItems=(d&&d.mapItems)||[];hasV2=true;}
    else if(id==="sf_meta"){if(d.customSections)customSections=d.customSections;}
    else if(id.startsWith("v2_img_")){imgs[id]=typeof d==="string"?d:((d&&d.v)||null);}
  });
  if(!hasV2)return null;
  const assembled={lore:{...lore,__customSections:customSections},characters:characters||[],mapItems:mapItems||[],mapImage:null};
  return reattachImages(assembled,imgs);
}

async function dbSave(sb,data){
  const{stripped,imgs}=stripImages(data);
  const lorePay={...stripped.lore};
  await dbUpsert(sb,"sf_lore",lorePay);
  await dbUpsert(sb,"sf_chars",stripped.characters||[]);
  await dbUpsert(sb,"sf_map",{mapItems:stripped.mapItems||[]});
  for(const[key,val] of Object.entries(imgs)){if(!val)continue;try{await dbUpsert(sb,key,val);}catch(e){console.warn(`Image save failed ${key}:`,e);}}
}

/* ── Asset store: barony map + icons stored as separate Supabase rows ── */
async function loadAssets(sb){
  try{
    const ctrl=new AbortController();
    const t=setTimeout(()=>ctrl.abort(),15000);
    const r=await fetch(`${sb.url}/rest/v1/campaign?id=like.sf_asset_%&select=id,data&limit=50`,{headers:sbH(sb),signal:ctrl.signal});
    clearTimeout(t);
    if(!r.ok)return;
    const rows=await r.json();
    rows.forEach(({id,data:d})=>{
      if(id==="sf_asset_barony_map"&&(d&&d.img)){
        window._baronyMapImg=d.img;
      } else if(id.startsWith("sf_asset_icon_")&&(d&&d.img)){
        const iconName=id.replace("sf_asset_icon_","");
        BARONY_ICONS[iconName]=d.img;
      }
    });
    console.log(`Loaded ${Object.keys(BARONY_ICONS).length} icons from Supabase`);
  }catch(e){console.warn("Asset load failed:",e);}
}

async function saveBaronyMap(sb,imgData){
  await dbUpsert(sb,"sf_asset_barony_map",{img:imgData});
}

async function saveIcon(sb,name,imgData){
  await dbUpsert(sb,`sf_asset_icon_${name}`,{img:imgData});
}

/* ════ LIVE SYNC (v2) ════
   Every lore entry, character, image and setting is its own row (id "sf2_...").
   Changes are pushed automatically ~0.7s after an edit and arrive on everyone
   else's screen through Supabase Realtime (with polling as a backup).
   Row data is wrapped: {v: payload, by: clientId, at: time} or {del:true} for removed items. */
const CLIENT_ID=Math.random().toString(36).slice(2)+Date.now().toString(36);
function stableStr(v){
  if(v===undefined||v===null)return "null";
  if(typeof v!=="object")return JSON.stringify(v);
  if(Array.isArray(v))return "["+v.map(stableStr).join(",")+"]";
  return "{"+Object.keys(v).filter(k=>v[k]!==undefined).sort().map(k=>JSON.stringify(k)+":"+stableStr(v[k])).join(",")+"}";
}
// app data  ->  logical docs
function docsFromData(data){
  const docs={};const lore=data.lore||{};
  Object.keys(lore).forEach(sec=>{
    if(sec==="__customSections"){docs["sf2_meta:sections"]=lore.__customSections||[];return;}
    const arr=lore[sec]||[];
    docs["sf2_order:"+sec]=arr.map(e=>String(e.id));
    arr.forEach(e=>{docs["sf2_lore:"+sec+":"+e.id]=e;});
  });
  const chars=data.characters||[];
  docs["sf2_order:__chars"]=chars.map(c=>String(c.id));
  chars.forEach(c=>{docs["sf2_char:"+c.id]=c;});
  Object.keys(data).forEach(k=>{if(k!=="lore"&&k!=="characters"&&data[k]!==undefined)docs["sf2_top:"+k]=data[k];});
  return docs;
}
// logical docs  ->  app data
function dataFromDocs(docs){
  const lore={},chars=[],data={},orders={};
  Object.keys(docs).forEach(id=>{
    const v=docs[id];if(v===null||v===undefined)return;
    if(id==="sf2_meta:sections")lore.__customSections=v;
    else if(id.indexOf("sf2_order:")===0)orders[id.slice(10)]=v;
    else if(id.indexOf("sf2_lore:")===0){const r=id.slice(9);const sec=r.slice(0,r.indexOf(":"));(lore[sec]=lore[sec]||[]).push(v);}
    else if(id.indexOf("sf2_char:")===0)chars.push(v);
    else if(id.indexOf("sf2_top:")===0)data[id.slice(8)]=v;
  });
  const sortBy=(arr,ord)=>{const pos={};(ord||[]).forEach((x,i)=>{pos[x]=i;});const P=x=>(String(x.id) in pos)?pos[String(x.id)]:1e9;return arr.slice().sort((a,b)=>P(a)-P(b));};
  Object.keys(orders).forEach(sec=>{if(sec!=="__chars"&&!lore[sec])lore[sec]=[];});
  Object.keys(lore).forEach(sec=>{if(sec!=="__customSections")lore[sec]=sortBy(lore[sec],orders[sec]);});
  data.lore=lore;
  data.characters=sortBy(chars,orders.__chars);
  return data;
}
// Big pictures (portraits, heraldry, maps) live in their own rows so updates stay small
const IMG_MIN=4000;
function splitImages(docs){
  const out={};
  Object.keys(docs).forEach(id=>{
    const v=docs[id];
    if(v&&typeof v==="object"&&!Array.isArray(v)&&(id.indexOf("sf2_lore:")===0||id.indexOf("sf2_char:")===0)){
      let copy=null;
      Object.keys(v).forEach(k=>{const x=v[k];if(typeof x==="string"&&x.indexOf("data:")===0&&x.length>IMG_MIN){copy=copy||{...v};copy[k]="@img";out["sf2_img:"+k+":"+id]=x;}});
      out[id]=copy||v;
    }else out[id]=v;
  });
  return out;
}
function joinImages(phys){
  const out={},imgs=[];
  Object.keys(phys).forEach(id=>{if(id.indexOf("sf2_img:")===0)imgs.push(id);else out[id]=phys[id];});
  imgs.forEach(id=>{const r=id.slice(8);const i=r.indexOf(":");const f=r.slice(0,i),owner=r.slice(i+1);
    if(out[owner]&&typeof out[owner]==="object")out[owner]={...out[owner],[f]:phys[id]};});
  return out;
}
const physFromData=d=>splitImages(docsFromData(d));
const dataFromPhys=P=>dataFromDocs(joinImages(P));
const imgSrc=v=>(v&&v!=="@img")?v:null; // "@img" = picture still downloading

async function sbUpsertRows(sb,rows,keepalive){
  if(!rows.length)return;
  const body=JSON.stringify(rows);
  for(let attempt=1;attempt<=3;attempt++){
    try{
      const ctrl=new AbortController();const t=setTimeout(()=>ctrl.abort(),45000);
      const r=await fetch(`${sb.url}/rest/v1/campaign`,{method:"POST",headers:sbH(sb,{"Content-Type":"application/json","Prefer":"resolution=merge-duplicates,return=minimal"}),body,signal:ctrl.signal,keepalive:!!keepalive&&body.length<60000});
      clearTimeout(t);if(r.ok)return;
      const txt=await r.text().catch(()=>"");
      if(attempt===3)throw new Error(`Save failed (${r.status}) ${txt.slice(0,150)}`);
    }catch(e){if(attempt===3)throw e;}
    await new Promise(res=>setTimeout(res,1200*attempt));
  }
}
async function sbFetchDocs(sb,since){
  let out=[],offset=0;
  for(;;){
    const q=`${sb.url}/rest/v1/campaign?select=id,data,updated_at&id=like.sf2_*&order=updated_at.asc,id.asc&limit=200&offset=${offset}`+(since?`&updated_at=gt.${encodeURIComponent(since)}`:"");
    const ctrl=new AbortController();const t=setTimeout(()=>ctrl.abort(),45000);
    const r=await fetch(q,{headers:sbH(sb),signal:ctrl.signal});clearTimeout(t);
    if(!r.ok)throw new Error("Load failed "+r.status);
    const rows=await r.json();out=out.concat(rows);
    if(rows.length<200)break;offset+=200;
  }
  return out;
}
async function sbFetchDoc(sb,id){
  const r=await fetch(`${sb.url}/rest/v1/campaign?select=id,data,updated_at&id=eq.${encodeURIComponent(id)}`,{headers:sbH(sb)});
  if(!r.ok)return null;const rows=await r.json();return rows[0]||null;
}
// Supabase Realtime over a plain websocket (Phoenix protocol)
function connectRealtime(sb,onRow,onStatus){
  let ws=null,hb=null,ref=0,closed=false,retry=0;
  const base=sb.url.replace(/^http/,"ws");
  const open=()=>{
    try{ws=new WebSocket(`${base}/realtime/v1/websocket?apikey=${encodeURIComponent(sb.key)}&vsn=1.0.0`);}catch(e){onStatus("poll");return;}
    ws.onopen=()=>{
      retry=0;
      const payload={config:{broadcast:{self:false},presence:{key:""},postgres_changes:[{event:"*",schema:"public",table:"campaign"}]}};
      if(sb.key&&sb.key.indexOf("eyJ")===0)payload.access_token=sb.key;
      ws.send(JSON.stringify({topic:"realtime:sf-campaign",event:"phx_join",payload,ref:String(++ref),join_ref:"1"}));
      hb=setInterval(()=>{try{ws.send(JSON.stringify({topic:"phoenix",event:"heartbeat",payload:{},ref:String(++ref)}));}catch(e){}},25000);
    };
    ws.onmessage=e=>{
      let m;try{m=JSON.parse(e.data);}catch(err){return;}
      if(m.topic!=="realtime:sf-campaign")return;
      if(m.event==="phx_reply")onStatus(m.payload&&m.payload.status==="ok"?"live":"poll");
      else if(m.event==="system"&&m.payload)onStatus(m.payload.status==="ok"?"live":"poll");
      else if(m.event==="phx_error"||m.event==="phx_close")onStatus("poll");
      else if(m.event==="postgres_changes"&&m.payload&&m.payload.data){
        const d=m.payload.data;const rec=d.record||d.old_record||{};
        onRow(rec.id,d.type,d.record?d.record.data:undefined,rec.updated_at);
      }
    };
    ws.onclose=()=>{clearInterval(hb);onStatus("poll");if(!closed)setTimeout(open,Math.min(30000,2000*(++retry)));};
    ws.onerror=()=>{};
  };
  open();
  return()=>{closed=true;clearInterval(hb);try{ws&&ws.close();}catch(e){}};
}

const LOCAL="sf_v1";
const localLoad=()=>{try{const r=localStorage.getItem(LOCAL);return r?JSON.parse(r):null}catch{return null}};
const localSave=d=>{try{localStorage.setItem(LOCAL,JSON.stringify(d))}catch{}};

/* ════ DEFAULT DATA ════ */
// Default Oghill Barony region entry
const DEFAULT_OGHILL_REGION={
  id:"oghill_barony",
  name:"Oghill Barony",
  description:"A verdant barony nestled between the Tamean Forest to the north, the Ash Hills to the south, and the great cliffs to the west. Home to Oghill Castle and numerous settlements of note.",
  heraldry:null, // uploaded by DM - goblin shield crest
  mapImage:null, // uploaded by DM - uses built-in barony map if null
  hasMap:true,
  mapId:"barony", // links to built-in BaronyMap
  polyCoords:[[220,532],[232,586],[265,630],[310,647],[355,630],[388,586],[400,532],[388,486],[355,457],[310,447],[265,457],[232,486],[220,532]],
  revealed:true,
};
const DEFAULT_SECTIONS=[
  {id:"regions",label:"Regions",icon:"🌍"},
  {id:"people",label:"People",icon:"👥",group:true},
  {id:"allies",label:"Allies",icon:"🤝",parent:"people"},
  {id:"enemies",label:"Enemies",icon:"💀",parent:"people"},
  {id:"factions",label:"Factions",icon:"⚔️"},
  {id:"settlements",label:"Settlements",icon:"🏰"},
  {id:"history",label:"History",icon:"📖"},
  {id:"sessions",label:"Session Details",icon:"📋"},
  {id:"terrain",label:"Terrain & Locations",icon:"🗺"},
];

const EMPTY_ENTRY=()=>({id:Date.now()+Math.random(),name:"",portrait:null,raceSp:"",age:"",hairColour:"",eyeColour:"",build:"",clothing:"",voiceAccent:"",personality:"",goalSecret:"",description:"",lore:"",abilities:"",relationships:"",featsWithParty:"",threatLevel:"",tactics:"",tags:"",sessionNumber:"",sessionDate:"",keyEvents:"",fileName:"",fileData:"",linkedCharId:null,pinned:false});

/* ════ UNCONTROLLED INPUT HELPERS ════ */
const ShInput=memo(({value,onCommit,placeholder,className,style,type})=>{
  const ref=useRef(null);
  useEffect(()=>{if(ref.current&&document.activeElement!==ref.current)ref.current.value=value||"";},[value]);
  return <input ref={ref} type={type||"text"} defaultValue={value||""} onBlur={e=>onCommit(e.target.value)} placeholder={placeholder||""} className={className||"sh-input-box"} style={style}/>;
});
const ShNumInput=memo(({value,onCommit,className,style,placeholder})=>{
  const ref=useRef(null);
  useEffect(()=>{if(ref.current&&document.activeElement!==ref.current)ref.current.value=value||"";},[value]);
  return <input ref={ref} type="number" defaultValue={value||""} onBlur={e=>onCommit(e.target.value)} placeholder={placeholder||""} className={className||"sh-num"} style={style}/>;
});
const ShTextarea=memo(({value,onCommit,placeholder,className,style})=>{
  const ref=useRef(null);
  useEffect(()=>{if(ref.current&&document.activeElement!==ref.current)ref.current.value=value||"";},[value]);
  return <textarea ref={ref} defaultValue={value||""} onBlur={e=>onCommit(e.target.value)} placeholder={placeholder||""} className={className||"sh-input-box"} style={style}/>;
});

/* ════ LAYERED REVEAL SYSTEM ════
   An entry with a `reveal` object is DM-controlled:
     reveal.entry      -> players can see the entry at all
     reveal.fields[f]  -> single attributes (eye icon)
     reveal.spans[f]   -> [[start,end],...] revealed character ranges of long text fields
   Entries WITHOUT `reveal` are fully public (player-made / older entries). */
const PHYS_FIELDS=[["Race / Species","raceSp"],["Age","age"],["Eye Colour","eyeColour"],["Hair Colour","hairColour"],["Build","build"],["Clothing","clothing"],["Voice / Accent","voiceAccent"],["Personality","personality"],["Goal or Secret","goalSecret"]];
const PUBLIC_TEXT_FIELDS=["description","lore","abilities","tactics","relationships","featsWithParty","keyEvents"];
const REVEAL_TEXT_FIELDS_OLD=["description","lore","abilities","tactics","relationships","featsWithParty","keyEvents"];
// Every public box has a DM version underneath (dm_description, dm_lore …) that Josh reveals piece by piece
const DMV_FIELDS=[["Description","description"],["Background & Lore","lore"],["Abilities & Powers","abilities"],["Tactics & Weaknesses","tactics"],["Relationships & Connections","relationships"],["Feats with the Party","featsWithParty"],["Key Events & Decisions","keyEvents"]];
const REVEAL_TEXT_FIELDS=DMV_FIELDS.map(([,f])=>"dm_"+f);
const PAST_KEYS={"HarveysBalls":"Mathas","FranksBalls":"Karl","KayleesBalls":"Vafa"};
const pastSecId=owner=>"past_"+String(owner).toLowerCase();
const possessive=n=>/s$/i.test(n)?`${n}'`:`${n}'s`;
const PAST_OWNERS=Object.values(PAST_KEYS);
const ownerByLabel=label=>{const m=/^\s*(.+?)\s+past\s*$/i.exec(label||"");if(!m)return null;const n=m[1].trim().toLowerCase().replace(/['’]s$|['’]$/,"");return PAST_OWNERS.find(o=>o.toLowerCase()===n)||null;};
const sectionOwner=(secs,id)=>{let x=secs.find(c=>c.id===id),g=0;while(x&&g++<6){const o=x.owner||(x.parent==="people"&&ownerByLabel(x.label));if(o)return o;x=x.parent?secs.find(c=>c.id===x.parent):null;}return null;};
const HIDDEN_RED="#a3241e";
const isControlled=e=>!!(e&&e.reveal);
const entryVisible=e=>!e||!e.reveal||!!e.reveal.entry;
const fieldVisible=(e,f)=>!e||!e.reveal||!!(e.reveal.fields&&e.reveal.fields[f]);
function normSpans(sp,len){
  const a=(sp||[]).map(([x,y])=>[Math.max(0,x),len==null?y:Math.min(len,y)]).filter(([x,y])=>y>x).sort((m,n)=>m[0]-n[0]);
  const out=[];a.forEach(r=>{const l=out[out.length-1];if(l&&r[0]<=l[1])l[1]=Math.max(l[1],r[1]);else out.push([r[0],r[1]]);});
  return out;
}
const addSpan=(sp,a,b)=>normSpans([...(sp||[]),[a,b]]);
function subSpan(sp,a,b){
  const out=[];(sp||[]).forEach(([x,y])=>{if(y<=a||x>=b){out.push([x,y]);return;}if(x<a)out.push([x,a]);if(y>b)out.push([b,y]);});
  return normSpans(out);
}
// Keep reveals attached to the right words when Josh edits the text.
// Edits strictly inside a revealed passage stay revealed; new text anywhere else starts hidden.
function remapSpans(sp,oldT,newT){
  if(!sp||!sp.length)return sp||[];
  oldT=oldT||"";newT=newT||"";
  const m=Math.min(oldT.length,newT.length);
  let p=0;while(p<m&&oldT[p]===newT[p])p++;
  let q=0;while(q<m-p&&oldT[oldT.length-1-q]===newT[newT.length-1-q])q++;
  const oEnd=oldT.length-q,d=newT.length-oldT.length;
  const out=[];
  sp.forEach(([x,y])=>{
    if(x<p&&y>oEnd){out.push([x,y+d]);return;}
    if(x<p)out.push([x,Math.min(y,p)]);
    if(y>oEnd)out.push([Math.max(x,oEnd)+d,y+d]);
  });
  return normSpans(out,newT.length);
}
// What players see: only the revealed pieces, in order
function visibleText(t,sp){
  t=t||"";let out="",lastEnd=null;
  normSpans(sp,t.length).forEach(([x,y])=>{
    const piece=t.slice(x,y).trim();if(!piece)return;
    if(out){const gap=t.slice(lastEnd,x);out+=gap.includes("\n")?"\n":gap.trim()===""?" ":" … ";}
    out+=piece;lastEnd=y;
  });
  return out;
}
/* Open / closed eye (replaces the monkey emoji) */
const Eye=({open,size,color})=>(<svg width={size||12} height={size||12} viewBox="0 0 24 24" fill="none" stroke={color||"currentColor"} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{display:"inline-block",verticalAlign:"-0.15em",flexShrink:0}}>
  <path d="M1.5 12s3.8-7 10.5-7 10.5 7 10.5 7-3.8 7-10.5 7S1.5 12 1.5 12z"/>{open?<circle cx="12" cy="12" r="3.2"/>:<line x1="3" y1="21" x2="21" y2="3"/>}</svg>);
const RED_LOCK_SVG="url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><rect x='4' y='10.5' width='16' height='11' rx='2' fill='%23b3261e'/><path d='M8 10.5V7a4 4 0 0 1 8 0v3.5' fill='none' stroke='%23b3261e' stroke-width='2.6'/></svg>\")";

/* ════ @ LINKS — stored as [@Name](lore:section:id), shown as gold text ════ */
const LINK_RE=/\[@([^\]\n]+)\]\(lore:([^:)\s]+):([^)\s]+)\)/g;
const LinkCtx=React.createContext(null);
function linkTokens(t){
  t=t||"";const out=[];let last=0,d=0,m;const re=new RegExp(LINK_RE.source,"g");
  while((m=re.exec(t))){
    if(m.index>last){out.push({r0:last,r1:m.index,d0:d,d1:d+(m.index-last)});d+=m.index-last;}
    out.push({r0:m.index,r1:m.index+m[0].length,d0:d,d1:d+m[1].length,link:{name:m[1],sec:m[2],id:m[3]}});d+=m[1].length;last=m.index+m[0].length;
  }
  if(last<t.length)out.push({r0:last,r1:t.length,d0:d,d1:d+t.length-last});
  return out;
}
const plainLinks=t=>(t||"").replace(new RegExp(LINK_RE.source,"g"),"$1");
// position in the shown text → position in the stored text (links are kept whole)
function dispToRaw(t,dpos,isEnd){
  const toks=linkTokens(t);if(dpos<=0)return 0;
  for(const k of toks){
    const inside=isEnd?(dpos>k.d0&&dpos<=k.d1):(dpos>=k.d0&&dpos<k.d1);
    if(inside)return k.link?(isEnd?k.r1:k.r0):k.r0+(dpos-k.d0);
  }
  return(t||"").length;
}
function richNodes(text,ctx){
  return linkTokens(text).map((k,i)=>{
    if(!k.link)return <React.Fragment key={i}>{text.slice(k.r0,k.r1)}</React.Fragment>;
    const ok=ctx&&ctx.can&&ctx.can(k.link.sec,k.link.id);
    if(!ok)return <span key={i}>{k.link.name}</span>;
    return <a key={i} className="sf-link" onClick={e=>{e.preventDefault();e.stopPropagation();ctx.open(k.link.sec,k.link.id);}}>{k.link.name}</a>;
  });
}
function linkEntries(lore){
  const out=[];Object.keys(lore||{}).forEach(sec=>{if(sec==="__customSections"||!Array.isArray(lore[sec]))return;lore[sec].forEach(e=>{if(e&&(e.name||"").trim())out.push({name:e.name.replace(/[\[\]]/g,""),sec,id:e.id});});});
  return out;
}
const sectionIcon=sec=>({regions:"🌍",allies:"🤝",enemies:"💀",factions:"⚔️",settlements:"🏰",history:"📖",sessions:"📋",terrain:"🗺"}[sec]||"📌");
// Text box where typing @ suggests wiki entries to link
function MentionTextarea({value,onCommit,style,className,placeholder}){
  const ctx=useContext(LinkCtx);const ref=useRef(null);
  const [q,setQ]=useState(null);const [hi,setHi]=useState(0);
  useEffect(()=>{if(ref.current&&document.activeElement!==ref.current)ref.current.value=value||"";},[value]);
  const all=(ctx&&ctx.entries)||[];
  const matches=q?all.filter(e=>e.name.toLowerCase().includes(q.query.toLowerCase())).slice(0,8):[];
  const check=()=>{
    const el=ref.current;if(!el)return;const pos=el.selectionStart;const before=el.value.slice(0,pos);
    const m=/(^|[\s(>"'])@([^@\n\[\]()]{0,40})$/.exec(before);
    if(m&&!/\s{2}/.test(m[2])){setQ({start:pos-m[2].length-1,end:pos,query:m[2]});setHi(0);}else setQ(null);
  };
  const choose=e=>{
    const el=ref.current;if(!el||!q)return;
    const ins=`[@${e.name}](lore:${e.sec}:${e.id})`;
    el.value=el.value.slice(0,q.start)+ins+el.value.slice(q.end);
    const c=q.start+ins.length;el.focus();el.setSelectionRange(c,c);setQ(null);
  };
  const onKey=e=>{
    if(!q||!matches.length)return;
    if(e.key==="ArrowDown"){e.preventDefault();setHi(h=>(h+1)%matches.length);}
    else if(e.key==="ArrowUp"){e.preventDefault();setHi(h=>(h-1+matches.length)%matches.length);}
    else if(e.key==="Enter"||e.key==="Tab"){e.preventDefault();choose(matches[hi]);}
    else if(e.key==="Escape"){setQ(null);}
  };
  return(<div style={{position:"relative"}}>
    <textarea ref={ref} defaultValue={value||""} placeholder={placeholder||""} className={className||"sh-input-box"} style={style}
      onInput={check} onKeyUp={e=>{if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key))check();}} onClick={check} onKeyDown={onKey}
      onBlur={e=>{setQ(null);onCommit(e.target.value);}}/>
    {q&&matches.length>0&&<div className="sf-mention-list">
      <div style={{fontSize:9,fontFamily:"Cinzel",letterSpacing:".08em",color:"var(--ink3)",padding:"4px 8px"}}>LINK TO…</div>
      {matches.map((e,i)=><div key={e.sec+e.id} onMouseDown={ev=>{ev.preventDefault();choose(e);}} onMouseEnter={()=>setHi(i)} className={`sf-mention-item${i===hi?" on":""}`}>{sectionIcon(e.sec)} {e.name}</div>)}
    </div>}
    <div style={{fontSize:10,color:"var(--ink3)",marginTop:2,fontStyle:"italic",opacity:.75}}>Type @ to link another entry</div>
  </div>);
}

const EyeBtn=({on,onClick,size})=>(<button title={on?"Visible to players — click to hide":"Hidden from players — click to reveal"}
  onMouseDown={e=>e.preventDefault()} onClick={onClick}
  style={{background:on?"rgba(60,140,60,0.15)":"rgba(163,36,30,0.12)",border:`1px solid ${on?"rgba(60,140,60,0.5)":"rgba(163,36,30,0.45)"}`,borderRadius:3,cursor:"pointer",fontSize:size||10,lineHeight:1,padding:"1px 4px",marginLeft:5,verticalAlign:"middle",color:on?"#2f7a2f":HIDDEN_RED}}><Eye open={on} size={(size||10)+2}/></button>);

// DM view of a long text field: revealed text normal, hidden text red with a red lock column. Josh highlights text here to reveal it.
const RevealTextField=memo(({label,text,spans,field})=>{
  const ctx=useContext(LinkCtx);
  text=text||"";if(!text.trim())return null;
  const sp=normSpans(spans,text.length);
  const isRev=i=>sp.some(([x,y])=>i>=x&&i<y);
  const paras=[];let s0=0;for(let i=0;i<=text.length;i++){if(i===text.length||text[i]==="\n"){paras.push([s0,i]);s0=i+1;}}
  const segsOf=(a,b)=>{const cuts=new Set([a,b]);sp.forEach(([x,y])=>{if(x>a&&x<b)cuts.add(x);if(y>a&&y<b)cuts.add(y);});const c=[...cuts].sort((m,n)=>m-n);const out=[];for(let i=0;i<c.length-1;i++)out.push([c[i],c[i+1],isRev(c[i])]);return out;};
  const hasHidden=[...text].some((ch,i)=>ch.trim()&&!isRev(i));
  const any=sp.length>0;
  return(<div style={{marginBottom:12}}>
    <div style={{fontSize:9,fontFamily:"Cinzel",color:"var(--ink3)",letterSpacing:"0.08em",marginBottom:3}}>
      {label.toUpperCase()} <span style={{color:!hasHidden?"#3c8c3c":any?"var(--gold)":HIDDEN_RED}}>· {!hasHidden?"REVEALED":any?"PARTLY REVEALED":"HIDDEN"}</span>
    </div>
    <div data-reveal-field={field} style={{fontSize:15,lineHeight:1.7,fontFamily:"Crimson Pro",whiteSpace:"pre-wrap",cursor:"text"}}>
      {paras.map(([a,b],pi)=>{
        const segs=segsOf(a,b);const hidden=segs.some(([x,y,r])=>!r&&text.slice(x,y).trim());
        return(<div key={pi} className={hidden?"sf-hidden-para":"sf-para"} style={{minHeight:"1.7em"}}>
          {segs.map(([x,y,r],i)=><span key={i} style={{color:r?"var(--ink)":HIDDEN_RED,background:r?"rgba(196,154,48,0.14)":"transparent"}}>{richNodes(text.slice(x,y),ctx)}</span>)}
          {pi<paras.length-1&&<span style={{display:"none"}}>{"\n"}</span>}
        </div>);
      })}
    </div>
  </div>);
});

/* ════ IMAGE PROMPT for ChatGPT (copy → paste into ChatGPT → upload the picture) ════ */
function buildImagePrompt(e,person,canSee,extra){
  const v=f=>(canSee(f)&&(e[f]||"").trim())?plainLinks(e[f]).trim():"";
  const desc=plainLinks(e.description||"").replace(/\s+/g," ").trim().slice(0,500);
  if(person){
    const bits=[];
    const who=[v("age")&&`${v("age")}-year-old`,v("raceSp")].filter(Boolean).join(" ");
    bits.push(`Fantasy character portrait, painted illustration, head and shoulders, portrait orientation. ${e.name||"A character"}${who?`, a ${who}`:""}.`);
    if(v("build"))bits.push(`Build: ${v("build")}.`);
    if(v("hairColour"))bits.push(`Hair: ${v("hairColour")}.`);
    if(v("eyeColour"))bits.push(`Eyes: ${v("eyeColour")}.`);
    if(v("clothing"))bits.push(`Clothing: ${v("clothing")}.`);
    if(v("personality"))bits.push(`Expression should suggest: ${v("personality")}.`);
    if(desc)bits.push(`Notes: ${desc}`);
    if(extra.trim())bits.push(extra.trim());
    bits.push("Gritty medieval fantasy setting, rich detail, natural lighting, no text or lettering.");
    return bits.join(" ");
  }
  return[`Fantasy illustration, wide landscape format: ${e.name||"a place"}.`,desc&&`Notes: ${desc}`,extra.trim(),"Hand-painted medieval fantasy style, rich detail, no text or lettering."].filter(Boolean).join(" ");
}
function ImagePromptBox({entry,person,canSee,onClose}){
  const [extra,setExtra]=useState("");const [copied,setCopied]=useState(false);
  const prompt=buildImagePrompt(entry,person,canSee,extra);
  const copy=async()=>{try{await navigator.clipboard.writeText(prompt);setCopied(true);setTimeout(()=>setCopied(false),2000);}catch(e){const t=document.getElementById("sf-prompt-text");if(t){t.select();document.execCommand("copy");setCopied(true);}}};
  return(<div style={{position:"fixed",inset:0,zIndex:3000,background:"rgba(0,0,0,0.65)",display:"flex",alignItems:"center",justifyContent:"center",padding:16}} onClick={onClose}>
    <div onClick={e=>e.stopPropagation()} style={{background:"var(--parch)",border:"2px solid var(--gold2)",borderRadius:10,padding:22,width:"min(560px,100%)",boxShadow:"0 8px 40px rgba(0,0,0,0.6)"}}>
      <h3 style={{fontFamily:"Cinzel",fontSize:15,color:"var(--gold)",marginBottom:6}}>✨ Image prompt for {entry.name||"this entry"}</h3>
      <p style={{fontSize:13,color:"var(--ink2)",marginBottom:10,lineHeight:1.5}}>Copy this, paste it into ChatGPT, then save the picture it makes and upload it here.</p>
      <div style={{fontSize:9,fontFamily:"Cinzel",color:"var(--ink3)",letterSpacing:".08em",marginBottom:3}}>ADD A SENTENCE (OPTIONAL)</div>
      <input value={extra} onChange={e=>setExtra(e.target.value)} placeholder="e.g. a scar over his left eye, holding a hammer" style={{width:"100%",fontFamily:"Crimson Pro,serif",fontSize:14,background:"var(--parch2)",border:"1px solid var(--border2)",borderRadius:4,padding:"6px 9px",outline:"none",marginBottom:10}}/>
      <textarea id="sf-prompt-text" readOnly value={prompt} style={{width:"100%",minHeight:130,fontFamily:"Crimson Pro,serif",fontSize:13.5,lineHeight:1.5,background:"var(--parch2)",border:"1px solid var(--border2)",borderRadius:4,padding:"8px 10px",resize:"vertical",marginBottom:12}}/>
      <div style={{display:"flex",gap:8,justifyContent:"flex-end",flexWrap:"wrap"}}>
        <button className="btn" onClick={onClose}>Close</button>
        <a className="btn" href="https://chatgpt.com/" target="_blank" rel="noopener" style={{textDecoration:"none"}}>Open ChatGPT ↗</a>
        <button className="btn act" onClick={copy}>{copied?"✓ Copied":"📋 Copy prompt"}</button>
      </div>
    </div>
  </div>);
}

/* ════ LORE PANEL ════ */
const LoreVF=memo(({label,value,field,multi,height,editMode,onCommit,eyeState,onEye})=>{
  const ctx=useContext(LinkCtx);
  if(!editMode&&!(value||"").trim())return null;
  const hasEye=eyeState!==undefined&&!editMode;
  return(<div style={{marginBottom:12}}>
    <div style={{fontSize:9,fontFamily:"Cinzel",color:"var(--ink3)",letterSpacing:"0.08em",marginBottom:3}}>{label.toUpperCase()}{hasEye&&<EyeBtn on={eyeState} onClick={()=>onEye(field)}/>}</div>
    {editMode?(multi
      ?<MentionTextarea value={value||""} onCommit={v=>onCommit(field,v)} style={{fontFamily:"Crimson Pro,serif",background:"var(--parch)",border:"1px solid var(--border2)",color:"var(--ink)",borderRadius:4,padding:"6px 9px",fontSize:14,width:"100%",resize:"vertical",minHeight:height||80,lineHeight:1.6,outline:"none"}}/>
      :<ShInput value={value||""} onCommit={v=>onCommit(field,v)} style={{fontFamily:"Crimson Pro,serif",background:"var(--parch)",border:"1px solid var(--border2)",color:"var(--ink)",borderRadius:4,padding:"6px 9px",fontSize:14,width:"100%",outline:"none"}} className=""/>)
      :<p style={{fontSize:15,color:hasEye&&!eyeState?HIDDEN_RED:"var(--ink)",lineHeight:1.7,fontFamily:"Crimson Pro",whiteSpace:"pre-wrap"}}>{richNodes(value,ctx)}</p>}
  </div>);
});

const LoreIF=memo(({label,value,field,editMode,onCommit,eyeState,onEye})=>{
  if(!editMode&&!(value||"").trim())return null;
  const hasEye=eyeState!==undefined&&!editMode;
  return(<div style={{flex:"1 1 120px"}}>
    <div style={{fontSize:9,fontFamily:"Cinzel",color:"var(--ink3)",letterSpacing:"0.08em",marginBottom:3}}>{label.toUpperCase()}{hasEye&&<EyeBtn on={eyeState} onClick={()=>onEye(field)}/>}</div>
    {editMode?<ShInput value={value||""} onCommit={v=>onCommit(field,v)} style={{fontFamily:"Crimson Pro,serif",background:"var(--parch)",border:"1px solid var(--border2)",color:"var(--ink)",borderRadius:4,padding:"4px 7px",fontSize:13,width:"100%",outline:"none"}} className=""/>
      :<div style={{fontSize:14,color:hasEye&&!eyeState?HIDDEN_RED:"var(--ink)",fontFamily:"Crimson Pro"}}>{value||"—"}</div>}
  </div>);
});

function LorePanel({lore,setLore,characters,readOnly,dmMode,openTarget,myPast}){
  const isDM=!!dmMode;
  // sections come from the data so new sub-tabs appear for everyone straight away
  const allSections=useMemo(()=>[...(readOnly?DEFAULT_SECTIONS.filter(x=>!x.group).map(x=>({...x,parent:undefined})):DEFAULT_SECTIONS),...(lore.__customSections||[])],[lore.__customSections,readOnly]);
  const secById=id=>allSections.find(x=>x.id===id);
  // whose private "Past" a section belongs to (walks up through sub-tabs)
  const secOwner=id=>sectionOwner(allSections,id);
  const ownsSec=id=>!!(myPast&&secOwner(id)===myPast);
  const seeAll=id=>isDM||ownsSec(id);
  const KIND={allies:"ally",enemies:"enemy",factions:"faction",settlements:"settlement",history:"history",sessions:"session",regions:"region",terrain:"terrain"};
  const kindOf=id=>{let x=secById(id),g=0;while(x&&g++<5){if(KIND[x.id])return KIND[x.id];if(x.layout)return x.layout;x=x.parent?secById(x.parent):null;}return"generic";};
  const [subFor,setSubFor]=useState(null);const [subName,setSubName]=useState("");const [subLayout,setSubLayout]=useState("ally");
  const [openSection,setOpenSection]=useState("allies");
  const [sel,setSel]=useState({s:null,id:null});
  const [creating,setCreating]=useState(null);
  const [newName,setNewName]=useState("");
  const [editMode,setEditMode]=useState(false);
  const [delT,setDelT]=useState(null);
  const [delSec,setDelSec]=useState(null);
  const [search,setSearch]=useState("");
  const [local,setLocal]=useState(null);
  const [listEditMode,setListEditMode]=useState(false);
  const [dragOver,setDragOver]=useState(null);
  const [showAddSection,setShowAddSection]=useState(false);
  const [newSectionName,setNewSectionName]=useState("");
  const dragId=useRef(null);
  const [previewPlayer,setPreviewPlayer]=useState(false);
  const [openNodes,setOpenNodes]=useState(()=>new Set());
  const realmTree=!readOnly; // Steel & Fire: settlements live inside the Regions tree
  const toggleNode=k=>setOpenNodes(prev=>{const n=new Set(prev);n.has(k)?n.delete(k):n.add(k);return n;});
  // open every folder above an entry so it can be seen
  const expandTo=(sec,id)=>{
    const places=getPlaces(lore);let start=null;
    if(sec==="settlements"){const e=(lore.settlements||[]).find(x=>String(x.id)===String(id));if(!e)return;start=e.placeId!=null?placeById(places,e.placeId):null;if(!start){setOpenNodes(prev=>new Set([...prev,"none"]));return;}}
    else if(sec==="regions"){const e=placeById(places,id);if(!e)return;start=e.parentId!=null?placeById(places,e.parentId):null;}
    else return;
    const keys=[];let cur=start,g=0;while(cur&&g++<10){keys.push("p:"+cur.id);cur=cur.parentId!=null?placeById(places,cur.parentId):null;}
    if(keys.length)setOpenNodes(prev=>new Set([...prev,...keys]));
  };
  const goEntry=(sec,id)=>{const realSec=realmTree&&sec==="settlements"?"regions":sec;setOpenSection(realSec);setSel({s:sec,id});setEditMode(false);setSearch("");setListEditMode(false);expandTo(sec,id);};
  const [hasSel,setHasSel]=useState(false);
  const detailRef=useRef(null);
  const dmView=!!isDM&&!readOnly&&!previewPlayer;

  const selItem=sel.s?lore[sel.s]&&lore[sel.s].find(i=>i.id===sel.id):null;
  const ownedSec=!!(sel.s&&secOwner(sel.s));
  const ownerSel=!!(sel.s&&ownsSec(sel.s))&&!readOnly;
  const ownerView=ownerSel&&!previewPlayer;
  const privView=dmView||ownerView; // can see everything & use reveal tools for this entry
  useEffect(()=>{setLocal(selItem?{...selItem}:null);},[sel.s,sel.id,selItem]);
  useEffect(()=>{if(openTarget&&openTarget.s)goEntry(openTarget.s,openTarget.id);},[openTarget&&openTarget.n]);
  useEffect(()=>{if(!isDM&&selItem&&!entryVisible(selItem)&&!ownsSec(sel.s)){setSel({s:null,id:null});setLocal(null);}},[isDM,selItem,myPast]);

  // Apply a field edit; keeps revealed passages attached to the right words
  const applyField=(i,field,value)=>{
    const n={...i,[field]:value};
    if(i.reveal&&(i.reveal.spans||{})[field]&&(i[field]||"")!==(value||"")){
      const spans=(i.reveal.spans||{});
      n.reveal={...i.reveal,spans:{...spans,[field]:remapSpans(spans[field],i[field],value)}};
    }
    if(i.reveal)n._ts=Date.now();
    return n;
  };
  const commitField=useCallback((field,value)=>{
    setLore(prev=>({...prev,[sel.s]:prev[sel.s].map(i=>i.id===sel.id?applyField(i,field,value):i)}));
    setLocal(prev=>prev?applyField(prev,field,value):prev);
  },[sel.s,sel.id,setLore]);
  // Change the reveal state of the selected entry
  const updReveal=useCallback(fn=>{
    const ap=i=>({...i,reveal:fn(i.reveal||{...hideKeepContent(i).reveal,entry:true}),_ts:Date.now()});
    setLore(prev=>({...prev,[sel.s]:prev[sel.s].map(i=>i.id===sel.id?ap(i):i)}));
    setLocal(prev=>prev?ap(prev):prev);
  },[sel.s,sel.id,setLore]);
  const toggleField=useCallback(f=>updReveal(r=>({...r,fields:{...(r.fields||{}),[f]:!(r.fields&&r.fields[f])}})),[updReveal]);

  // Work out which text Josh has highlighted, per field, as character ranges
  const getSelSpans=()=>{
    const ws=window.getSelection();
    if(!ws||ws.rangeCount===0||ws.isCollapsed||!detailRef.current)return null;
    const r=ws.getRangeAt(0);const out={};
    detailRef.current.querySelectorAll("[data-reveal-field]").forEach(el=>{
      if(!r.intersectsNode(el))return;
      const off=(node,o)=>{const rr=document.createRange();rr.selectNodeContents(el);rr.setEnd(node,o);return rr.toString().length;};
      const a=el.contains(r.startContainer)?off(r.startContainer,r.startOffset):0;
      const b=el.contains(r.endContainer)?off(r.endContainer,r.endOffset):el.textContent.length;
      if(b>a)out[el.getAttribute("data-reveal-field")]=[a,b];
    });
    return Object.keys(out).length?out:null;
  };
  useEffect(()=>{
    if(!privView)return;
    const h=()=>setHasSel(!!getSelSpans());
    document.addEventListener("selectionchange",h);
    return()=>document.removeEventListener("selectionchange",h);
  },[privView,sel.id]);
  const applySelection=reveal=>{
    const ss=getSelSpans();if(!ss)return;
    updReveal(r=>{const spans={...(r.spans||{})};Object.entries(ss).forEach(([f,[a,b]])=>{if(f.indexOf("dm_")===0?!dmView:!(privView&&ownedSec))return;const t=(local&&local[f])||"";const ra=dispToRaw(t,a,false),rb=dispToRaw(t,b,true);if(rb>ra)spans[f]=reveal?addSpan(spans[f],ra,rb):subSpan(spans[f],ra,rb);});return{...r,spans};});
    window.getSelection().removeAllRanges();setHasSel(false);
  };

  const createItem=s=>{
    if(!newName.trim())return;
    const item={...EMPTY_ENTRY(),name:newName.trim()};
    if(s==="regions"){item.placeType="kingdom";item.parentId=null;}
    if(secOwner(s)&&(isDM||ownsSec(s))){item.reveal={entry:false,fields:{},spans:{}};item._ts=Date.now();}
    else if(isDM){item.reveal={entry:false,fields:{portrait:true},spans:{}};item._ts=Date.now();}
    setLore(prev=>({...prev,[s]:[...(prev[s]||[]),item]}));
    setSel({s,id:item.id});setLocal({...item});setCreating(null);setNewName("");if(!readOnly)setEditMode(true);
    if(s==="settlements")setOpenNodes(prev=>new Set([...prev,"none"]));
  };
  const reqDel=()=>{if(!selItem)return;setDelT({label:selItem.name||"this entry"});};
  const confirmDel=()=>{
    setLore(prev=>({...prev,[sel.s]:prev[sel.s].filter(i=>i.id!==sel.id)}));
    setSel({s:null,id:null});setLocal(null);setDelT(null);setEditMode(false);
  };
  const togglePin=(section,id)=>{setLore(prev=>({...prev,[section]:prev[section].map(i=>i.id===id?{...i,pinned:!i.pinned}:i)}));};
  const reorder=(section,fromId,toId)=>{
    setLore(prev=>{const arr=[...(prev[section]||[])];const fi=arr.findIndex(i=>i.id===fromId);const ti=arr.findIndex(i=>i.id===toId);if(fi<0||ti<0||fi===ti)return prev;const[m]=arr.splice(fi,1);arr.splice(ti,0,m);return{...prev,[section]:arr};});
  };
  const handlePortrait=async e=>{const f=(e.target.files&&e.target.files[0]);if(!f)return;const c=await compressImage(f,600,0.8);commitField("portrait",c);};
  const handleWidePic=async e=>{const f=(e.target.files&&e.target.files[0]);e.target.value="";if(!f)return;const c=await compressImage(f,1600,0.8);commitField("portrait",c);};
  const [promptOpen,setPromptOpen]=useState(false);

  const addSubTab=parent=>{
    if(!subName.trim())return;
    const id="custom_"+Date.now();
    const newSec={id,label:subName.trim(),icon:"📜",parent,...(parent==="people"?{layout:subLayout}:{})};
    setLore(prev=>({...prev,[id]:[],__customSections:[...(prev.__customSections||[]),newSec]}));
    setOpenSection(id);setSubFor(null);setSubName("");
  };
  const moveEntry=to=>{
    if(!sel.s||!to||to===sel.s||!selItem)return;
    const from=sel.s,item=selItem;
    setLore(prev=>({...prev,[from]:(prev[from]||[]).filter(i=>i.id!==item.id),[to]:[...(prev[to]||[]),item]}));
    setSel({s:to,id:item.id});setOpenSection(to);
  };
  const addSection=()=>{
    if(!newSectionName.trim())return;
    const id="custom_"+Date.now();
    const newSec={id,label:newSectionName.trim(),icon:"📌"};
    setLore(prev=>({...prev,[id]:[],__customSections:[...(prev.__customSections||[]),newSec]}));
    setOpenSection(id);setShowAddSection(false);setNewSectionName("");
  };

  const filteredItems=useMemo(()=>{
    const s=openSection;if(!s||!lore[s])return[];
    const items=(lore[s]||[]).filter(i=>seeAll(s)||entryVisible(i));
    const sorted=[...items.filter(i=>i.pinned),...items.filter(i=>!i.pinned)];
    return search.trim()?sorted.filter(i=>(i.name||"").toLowerCase().includes(search.toLowerCase())):sorted;
  },[lore,openSection,search,isDM,myPast]);

  const hasPhys=s=>["ally","enemy"].includes(kindOf(s));
  const places0=getPlaces(lore);
  // Regions: one foldable tree — kingdoms › regions › baronies › settlements
  const groupRows=(sec,items)=>{
    if(listEditMode||sec!=="regions"||!realmTree)return items.map(item=>({item}));
    const places=getPlaces(lore).filter(p=>isDM||placeVisible(places0,p,false));
    const sets=(lore.settlements||[]).filter(e=>isDM||entryVisible(e));
    const q=search.trim().toLowerCase();
    if(q)return[...places.map(p=>({item:p,sec:"regions"})),...sets.map(e=>({item:e,sec:"settlements"}))].filter(r=>(r.item.name||"").toLowerCase().includes(q));
    const shown=new Set(places.map(p=>String(p.id)));
    const out=[];const seen=new Set();
    const kidsOf=pid=>places.filter(p=>{const par=p.parentId!=null&&shown.has(String(p.parentId));return pid==null?!par:String(p.parentId)===String(pid);});
    const setsOf=pid=>sets.filter(e=>e.placeId!=null&&String(e.placeId)===String(pid));
    const walk=(pid,depth)=>kidsOf(pid).forEach(p=>{
      if(seen.has(String(p.id)))return;seen.add(String(p.id));
      const kp=kidsOf(p.id),ks=setsOf(p.id);const key="p:"+p.id;
      out.push({item:p,sec:"regions",depth,kids:kp.length+ks.length,nodeKey:key});
      if(openNodes.has(key)){walk(p.id,depth+1);ks.forEach(e=>out.push({item:e,sec:"settlements",depth:depth+1}));}
    });
    walk(null,0);
    const loose=sets.filter(e=>e.placeId==null||!shown.has(String(e.placeId)));
    if(loose.length){out.push({folder:"Not in a barony",nodeKey:"none",kids:loose.length,depth:0});if(openNodes.has("none"))loose.forEach(e=>out.push({item:e,sec:"settlements",depth:1}));}
    return out;
  };
  const ctrl=isControlled(local);
  const ed=editMode&&!readOnly;
  // Attribute (eye icon)
  const canSee=f=>!ctrl||privView||fieldVisible(local,f);
  const AF=(lbl,f)=>!canSee(f)&&ed?null:<LoreIF key={f} label={lbl} value={canSee(f)?local[f]:""} field={f} editMode={ed} onCommit={commitField} eyeState={ctrl&&privView?fieldVisible(local,f):undefined} onEye={toggleField}/>;
  // Single-line field (eye icon)
  const SF=(lbl,f)=>!canSee(f)&&ed?null:<LoreVF label={lbl} value={canSee(f)?local[f]:""} field={f} editMode={ed} onCommit={commitField} eyeState={ctrl&&privView?fieldVisible(local,f):undefined} onEye={toggleField}/>;
  // A box: public text (in someone's Past it's revealed by its owner), then Josh's DM version underneath
  const TF=(lbl,f,h)=>{
    const sp=(((local.reveal||{}).spans||{})[f])||[];
    let main;
    if(ed)main=<LoreVF label={lbl} value={local[f]} field={f} multi height={h} editMode={true} onCommit={commitField}/>;
    else if(ownedSec&&ctrl&&privView)main=<RevealTextField label={lbl} text={local[f]} spans={sp} field={f}/>;
    else if(ownedSec&&ctrl)main=<LoreVF label={lbl} value={visibleText(local[f],sp)} field={f} multi editMode={false} onCommit={commitField}/>;
    else main=<LoreVF label={lbl} value={local[f]} field={f} multi height={h} editMode={false} onCommit={commitField}/>;
    return <React.Fragment key={f}>{main}{DV(lbl,f)}</React.Fragment>;
  };
  const DV=(lbl,f)=>{
    if(readOnly)return null;
    const k="dm_"+f;const sp=(((local.reveal||{}).spans||{})[k])||[];
    if(ed&&isDM)return(<div style={{border:"1px solid rgba(179,38,30,0.35)",background:"rgba(179,38,30,0.04)",borderRadius:6,padding:"8px 12px 0",margin:"-4px 0 14px"}}>
      <LoreVF label={`${lbl} — DM version (only Josh sees this)`} value={local[k]} field={k} multi height={70} editMode={true} onCommit={commitField}/></div>);
    if(ed)return null;
    if(dmView)return (local[k]||"").trim()?<div style={{margin:"-4px 0 6px"}}><RevealTextField label={`${lbl} — DM version`} text={local[k]} spans={sp} field={k}/></div>:null;
    const v=visibleText(local[k],sp);if(!v)return null;
    return(<div style={{borderLeft:"3px solid var(--gold2)",background:"rgba(196,154,48,0.1)",padding:"8px 12px 2px",borderRadius:"0 4px 4px 0",margin:"-4px 0 14px"}}>
      <LoreVF label={`${lbl} – Discovered`} value={v} field={k} multi editMode={false} onCommit={commitField}/></div>);
  };
  const canEdit=!readOnly&&(privView||(!(local&&local.lockedForPlayers)&&!ownedSec));
  // portrait reveal buttons (clear, labelled)
  const PicBtn=({f,label})=>{const on=fieldVisible(local,f);return(<button className="btn" onClick={()=>toggleField(f)} style={{fontSize:10.5,padding:"3px 8px",marginTop:5,width:"100%",color:on?"#2f7a2f":HIDDEN_RED,borderColor:on?"#2f7a2f":HIDDEN_RED,display:"flex",gap:5,alignItems:"center",justifyContent:"center"}}><Eye open={on} size={11}/>{label} {on?"visible":"hidden — click to reveal"}</button>);};

  const innerLinks={entries:linkEntries(lore),
    open:(sec,id)=>{if(!lore[sec])return;goEntry(sec,(lore[sec].find(x=>String(x.id)===String(id))||{}).id);},
    can:(sec,id)=>{const e=(lore[sec]||[]).find(x=>String(x.id)===String(id));return !!e&&(isDM||readOnly||ownsSec(sec)||entryVisible(e));}};
  return(<LinkCtx.Provider value={innerLinks}><div style={{display:"flex",height:"100%",background:"var(--dark)"}}>
    {promptOpen&&local&&<ImagePromptBox entry={local} person={hasPhys(sel.s)} canSee={f=>!isControlled(local)||privView||fieldVisible(local,f)} onClose={()=>setPromptOpen(false)}/>}
    {delT&&!readOnly&&<DelModal name={delT.label} onOk={confirmDel} onNo={()=>setDelT(null)}/>}
    {delSec&&!readOnly&&<DelModal name={(lore[delSec.id]||[]).length?`the "${delSec.label}" tab and the ${(lore[delSec.id]||[]).length} entr${(lore[delSec.id]||[]).length===1?"y":"ies"} in it`:`the "${delSec.label}" tab`} onOk={()=>{const id=delSec.id;const par=delSec.parent;
      setLore(prev=>{const n={...prev,__customSections:(prev.__customSections||[]).filter(c=>c.id!==id)};delete n[id];return n;});
      if(openSection===id)setOpenSection(par&&secById(par)&&!secById(par).group?par:"allies");if(sel.s===id){setSel({s:null,id:null});setLocal(null);}setDelSec(null);}} onNo={()=>setDelSec(null)}/>}

    {/* LEFT sidebar */}
    <div className="sf-lore-side" style={{width:220,display:"flex",flexDirection:"column",background:"var(--parch2)",borderRight:"2px solid var(--gold2)",flexShrink:0,overflow:"hidden"}}>
      {readOnly&&<div className="tales-banner" style={{margin:"8px",fontSize:9}}>📖 BLOOD SEEKER — ARCHIVED (READ ONLY)</div>}
      <div style={{overflowY:"auto",flex:1}}>
        {(()=>{const base=allSections.filter(s=>!(realmTree&&s.id==="settlements"));const out=[];
          const isAnc=(a,b)=>{let x=secById(b),g=0;while(x&&g++<6){if(x.id===a)return true;x=x.parent?secById(x.parent):null;}return false;};
          const walk=(s,d)=>{out.push({s,depth:d});if(isAnc(s.id,openSection))base.filter(c=>c.parent===s.id).forEach(c=>walk(c,d+1));};
          base.filter(s=>!s.parent||!secById(s.parent)).forEach(s=>walk(s,0));
          return out;})().map(({s,depth})=>{
          const items=realmTree&&s.id==="regions"?[...(lore.regions||[]).filter(p=>isDM||placeVisible(places0,p,false)),...(lore.settlements||[]).filter(i=>isDM||entryVisible(i))]:(lore[s.id]||[]).filter(i=>seeAll(s.id)||entryVisible(i));const isO=openSection===s.id;
          return(<div key={s.id} style={{borderBottom:"1px solid var(--border)"}}>
            <div style={{display:"flex",alignItems:"center",background:isO?"var(--parch3)":"var(--parch2)",borderLeft:isO?"3px solid var(--gold2)":"3px solid transparent"}}>
              <div onClick={()=>{setOpenSection(s.id);setSearch("");setListEditMode(false);}} style={{flex:1,padding:`${depth?8:10}px 8px ${depth?8:10}px ${11+depth*16}px`,cursor:"pointer",fontSize:12,fontFamily:"Cinzel",letterSpacing:"0.04em",color:isO?"var(--gold)":"var(--ink2)",display:"flex",alignItems:"center",gap:7,userSelect:"none"}}>
                <span>{s.icon}</span><span style={{flex:1}}>{s.label}</span>
                {items.length>0&&<span style={{fontSize:9,background:"var(--gold2)",color:"var(--dark)",borderRadius:10,padding:"0 5px",fontFamily:"Cinzel"}}>{items.length}</span>}
                <span style={{fontSize:9,color:"var(--ink3)",transform:isO?"rotate(180deg)":"none",display:"inline-block",transition:"transform .2s"}}>▼</span>
              </div>
              {isO&&!readOnly&&String(s.id).indexOf("custom_")===0||isO&&!readOnly&&String(s.id).indexOf("past_")===0?((!secOwner(s.id)||seeAll(s.id))&&<button title="Delete this tab" onClick={e=>{e.stopPropagation();if(allSections.some(c=>c.parent===s.id)){alert(`Delete the sub-tabs inside "${s.label}" first.`);return;}setDelSec(s);}} style={{background:"none",border:"none",cursor:"pointer",fontSize:12,padding:"4px 7px",color:"var(--ink3)",borderLeft:"1px solid var(--border)",flexShrink:0}}>🗑</button>):null}
              {isO&&!readOnly&&<button onClick={e=>{e.stopPropagation();setListEditMode(m=>!m);}} title="Reorder/pin" style={{background:listEditMode?"rgba(154,112,32,0.25)":"none",border:"none",cursor:"pointer",fontSize:12,padding:"4px 8px",color:listEditMode?"var(--gold2)":"var(--ink3)",borderLeft:"1px solid var(--border)",flexShrink:0,fontFamily:"Cinzel"}}>
                {listEditMode?"✓":"⠿"}
              </button>}
            </div>
            {isO&&s.group&&<div style={{background:"var(--parch)",padding:"6px 10px",fontSize:11,color:"var(--ink3)",fontStyle:"italic"}}>Pick a sub-tab{allSections.some(c=>c.parent===s.id)?"":" — or add one"}.</div>}
            {isO&&!s.group&&<div style={{background:"var(--parch)"}}>
              {listEditMode&&<div style={{padding:"3px 10px",fontSize:9,color:"var(--ink3)",fontFamily:"Cinzel",letterSpacing:"0.05em",borderBottom:"1px solid var(--border)",background:"var(--parch2)"}}>DRAG TO REORDER · 📍 TO PIN</div>}
              {!listEditMode&&<div style={{padding:"5px 8px",borderBottom:"1px solid var(--border)"}}>
                <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search..." style={{fontFamily:"Crimson Pro,serif",background:"var(--parch2)",border:"1px solid var(--border2)",color:"var(--ink)",borderRadius:3,padding:"3px 7px",width:"100%",fontSize:11,outline:"none"}}/>
              </div>}
              {items.length===0&&<div style={{padding:"7px 14px",fontSize:11,color:"var(--ink3)",fontStyle:"italic"}}>No entries</div>}
              {groupRows(s.id,filteredItems).map(row=>{
                if(row.folder)return <div key={"f:"+row.nodeKey} onClick={()=>toggleNode(row.nodeKey)} style={{padding:"6px 8px 6px 2px",fontSize:11.5,fontStyle:"italic",color:"var(--ink3)",cursor:"pointer",borderBottom:"1px solid var(--border)",display:"flex",gap:6,alignItems:"center",userSelect:"none"}}>
                  <span style={{width:26+(row.depth||0)*16,flexShrink:0,textAlign:"right",fontStyle:"normal",fontSize:16,lineHeight:1}}>{openNodes.has(row.nodeKey)?"▾":"▸"}</span>{row.folder} <span style={{fontSize:9,opacity:.7}}>({row.kids})</span></div>;
                const item=row.item;const rsec=row.sec||s.id;
                const isSel=sel.id===item.id&&sel.s===rsec;const isDO=dragOver===item.id;
                return(<div key={rsec+":"+item.id} draggable={listEditMode}
                  onDragStart={e=>{dragId.current=item.id;e.dataTransfer.effectAllowed="move";}}
                  onDragOver={e=>{if(!listEditMode)return;e.preventDefault();setDragOver(item.id);}}
                  onDragLeave={()=>setDragOver(null)}
                  onDrop={e=>{e.preventDefault();if(dragId.current&&dragId.current!==item.id)reorder(s.id,dragId.current,item.id);dragId.current=null;setDragOver(null);}}
                  onDragEnd={()=>{dragId.current=null;setDragOver(null);}}
                  onClick={()=>{if(!listEditMode){setSel({s:rsec,id:item.id});setEditMode(false);}}}
                  style={{padding:`${row.sec?6:7}px 8px ${row.sec?6:7}px ${row.sec?2:10+(row.depth||0)*14}px`,cursor:listEditMode?"grab":"pointer",fontSize:12,fontFamily:"Crimson Pro",background:isDO?"var(--parch3)":isSel&&!listEditMode?"var(--parch4)":"transparent",color:isSel&&!listEditMode?"var(--gold)":"var(--ink)",borderLeft:isSel&&!listEditMode?"3px solid var(--gold2)":"3px solid transparent",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",gap:6,borderTop:isDO?"2px solid var(--gold2)":"2px solid transparent",userSelect:"none"}}>
                  {listEditMode&&<span style={{fontSize:12,color:"var(--ink3)",flexShrink:0}}>⠿</span>}
                  {row.sec&&!listEditMode&&<span title={row.kids?(openNodes.has(row.nodeKey)?"Fold up":"Open"):""} onClick={e=>{if(!row.kids)return;e.stopPropagation();toggleNode(row.nodeKey);}} style={{width:26+(row.depth||0)*16,alignSelf:"stretch",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"flex-end",color:"var(--ink3)",fontSize:16,lineHeight:1,cursor:row.kids?"pointer":"inherit",margin:"-6px 0",padding:"6px 0"}}>{row.kids?(openNodes.has(row.nodeKey)?"▾":"▸"):""}</span>}
                  {row.sec&&!listEditMode&&(()=>{const im=row.sec==="settlements"?(settlementIcon(item).img||imgSrc(item.portrait)):imgSrc(item.heraldry);return im?<img src={im} alt="" style={{width:20,height:20,objectFit:"contain",flexShrink:0}}/>:null;})()}
                  {listEditMode&&!readOnly&&<button onClick={e=>{e.stopPropagation();togglePin(s.id,item.id);}} style={{background:"none",border:"none",cursor:"pointer",fontSize:11,padding:"0 2px",color:item.pinned?"var(--gold2)":"var(--ink3)",flexShrink:0}}>{item.pinned?"📌":"📍"}</button>}
                  {!listEditMode&&item.pinned&&<span style={{fontSize:9,flexShrink:0}}>📌</span>}
                  {!row.sec&&imgSrc(item.portrait)&&<img src={imgSrc(item.portrait)} alt="" style={{width:16,height:16,borderRadius:"50%",objectFit:"cover",flexShrink:0}}/>}
                  <span style={{flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",color:seeAll(rsec)&&!entryVisible(item)?HIDDEN_RED:undefined}}>{seeAll(rsec)&&!entryVisible(item)&&<><Eye open={false} size={11} color={HIDDEN_RED}/> </>}{item.name||<em style={{opacity:.5,fontSize:10}}>Unnamed</em>}</span>
                </div>);
              })}
              {!listEditMode&&!readOnly&&(!secOwner(s.id)||seeAll(s.id))&&(creating===s.id||(realmTree&&s.id==="regions"&&creating==="settlements")
                ?<div style={{padding:"6px 8px",display:"flex",gap:4,borderTop:"1px solid var(--border)"}}>
                  <input autoFocus placeholder={creating==="settlements"?"Settlement name...":"Name..."} value={newName} onChange={e=>setNewName(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")createItem(creating);if(e.key==="Escape")setCreating(null);}} style={{fontFamily:"Crimson Pro,serif",background:"var(--parch2)",border:"1px solid var(--border2)",color:"var(--ink)",borderRadius:3,padding:"3px 7px",flex:1,fontSize:11,outline:"none"}}/>
                  <button className="btn" onClick={()=>createItem(creating)} style={{padding:"2px 6px",fontSize:11}}>✓</button>
                  <button className="btn" onClick={()=>setCreating(null)} style={{padding:"2px 6px",fontSize:11}}>✕</button>
                </div>
                :<div style={{padding:"5px 8px",borderTop:"1px solid var(--border)"}}>
                  <div style={{display:"flex",gap:4}}>
                  <button className="btn" onClick={()=>setCreating(s.id)} style={{flex:1,fontSize:10,border:"1px dashed var(--border2)",padding:"3px"}}>+ Add {["allies","enemies","factions","settlements","history","sessions","terrain","regions"].includes(s.id)?s.label.replace(/ies$/,"y").replace(/s$/,""):(kindOf(s.id)==="ally"||kindOf(s.id)==="enemy")?"person":"entry"}</button>
                  {realmTree&&s.id==="regions"&&<button className="btn" onClick={()=>setCreating("settlements")} style={{flex:1,fontSize:10,border:"1px dashed var(--border2)",padding:"3px"}}>+ Add Settlement</button>}
                  </div>
                </div>
              )}
            </div>}
            {!readOnly&&depth<2&&openSection===s.id&&!listEditMode&&s.id!=="regions"&&(!secOwner(s.id)||seeAll(s.id))&&<div style={{padding:"5px 8px",background:"var(--parch)",borderTop:"1px solid var(--border)"}}>
              {subFor===s.id?<div style={{display:"flex",flexDirection:"column",gap:4}}>
                <input autoFocus placeholder="Sub-tab name (e.g. Mathas Family)..." value={subName} onChange={e=>setSubName(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")addSubTab(s.id);if(e.key==="Escape")setSubFor(null);}} style={{fontFamily:"Crimson Pro,serif",background:"var(--parch2)",border:"1px solid var(--border2)",color:"var(--ink)",borderRadius:3,padding:"3px 7px",fontSize:11,outline:"none"}}/>
                {s.id==="people"&&<select value={subLayout} onChange={e=>setSubLayout(e.target.value)} style={{fontFamily:"Crimson Pro,serif",fontSize:11,background:"var(--parch2)",border:"1px solid var(--border2)",borderRadius:3,padding:"2px 4px"}}><option value="ally">Use the Ally layout</option><option value="enemy">Use the Enemy layout</option></select>}
                <div style={{display:"flex",gap:4}}><button className="btn" onClick={()=>addSubTab(s.id)} style={{flex:1,padding:"2px 6px",fontSize:11}}>✓ Add</button><button className="btn" onClick={()=>setSubFor(null)} style={{padding:"2px 6px",fontSize:11}}>✕</button></div>
              </div>:<button className="btn" onClick={()=>{setSubFor(s.id);setSubName("");}} style={{width:"100%",fontSize:10,border:"1px dashed var(--border2)",padding:"3px",color:"var(--ink3)"}}>+ Sub-tab</button>}
            </div>}
          </div>);
        })}
      </div>
      {/* Add custom section */}
      {!readOnly&&<div style={{borderTop:"2px solid var(--border2)",padding:"8px"}}>
        {showAddSection?<div style={{display:"flex",gap:4}}>
          <input autoFocus placeholder="Section name..." value={newSectionName} onChange={e=>setNewSectionName(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")addSection();if(e.key==="Escape")setShowAddSection(false);}} style={{fontFamily:"Crimson Pro,serif",background:"var(--parch2)",border:"1px solid var(--border2)",color:"var(--ink)",borderRadius:3,padding:"3px 7px",flex:1,fontSize:11,outline:"none"}}/>
          <button className="btn" onClick={addSection} style={{padding:"2px 6px",fontSize:11}}>✓</button>
          <button className="btn" onClick={()=>setShowAddSection(false)} style={{padding:"2px 6px",fontSize:11}}>✕</button>
        </div>:<button className="btn" onClick={()=>setShowAddSection(true)} style={{width:"100%",fontSize:10,border:"1px dashed var(--border2)",padding:"4px",color:"var(--ink3)"}}>+ New Category</button>}
      </div>}
    </div>

    {/* RIGHT detail */}
    <div ref={detailRef} style={{flex:1,overflowY:"auto",background:"var(--parch)",display:"flex",flexDirection:"column"}}>
      {(isDM||ownerSel)&&!readOnly&&<div style={{position:"sticky",top:0,zIndex:5,background:isDM?"rgba(80,10,10,0.92)":"rgba(60,40,10,0.92)",color:"#ffcccc",fontFamily:"Cinzel",fontSize:10,letterSpacing:"0.06em",padding:"6px 14px",display:"flex",alignItems:"center",gap:10}}>
        <span>{isDM?"⚔ ":"📜 "}{previewPlayer?"PREVIEWING AS ANOTHER PLAYER":isDM?"DM OVERVIEW — RED IS HIDDEN FROM PLAYERS · HIGHLIGHT TEXT, THEN REVEAL":`${possessive(myPast).toUpperCase()} PAST — RED IS HIDDEN FROM THE OTHER PLAYERS · HIGHLIGHT TEXT, THEN REVEAL`}</span>
        <button onClick={()=>{setPreviewPlayer(p=>!p);setEditMode(false);}} style={{marginLeft:"auto",fontFamily:"Cinzel",fontSize:10,background:"transparent",border:"1px solid rgba(255,180,180,0.5)",color:"#ffcccc",borderRadius:3,padding:"2px 8px",cursor:"pointer"}}>{previewPlayer?"Back to DM view":<><Eye open={true} size={11}/> Preview as player</>}</button>
      </div>}
      <div style={{flex:1}}>
      {!local?<div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",color:"var(--ink3)",textAlign:"center",padding:40}}>
        <div style={{fontSize:50,marginBottom:14,opacity:.28}}>{(allSections.find(s=>s.id===openSection)||{}).icon||"📜"}</div>
        <h3 style={{fontFamily:"Cinzel",fontSize:16,color:"var(--ink3)",marginBottom:8}}>{(allSections.find(s=>s.id===openSection)||{}).label||"Lore"}</h3>
        <p style={{fontSize:14,color:"var(--ink3)",fontStyle:"italic"}}>{readOnly?"Archived — read only":"Select or create an entry"}</p>
      </div>:
      <div className="sf-lore-detail" style={{padding:"24px 32px",maxWidth:820,margin:"0 auto"}}>
        {readOnly&&<div className="tales-banner">📖 BLOOD SEEKER — ARCHIVED READ ONLY</div>}
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:6}}>
          <div style={{flex:1,marginRight:14}}>
            {editMode&&!readOnly?<ShInput value={local.name||""} onCommit={v=>commitField("name",v)} style={{fontSize:24,fontFamily:"Cinzel",color:"var(--gold)",background:"transparent",border:"none",borderBottom:"2px solid var(--gold2)",padding:"2px 0",width:"100%",outline:"none"}} className=""/>
              :<h2 style={{fontSize:24,color:"var(--gold)",letterSpacing:"0.06em"}}>{local.name||"Unnamed"}</h2>}
            {!editMode&&(()=>{const rs=(privView||fieldVisible(local,"raceSp"))?local.raceSp:"";const ag=(privView||fieldVisible(local,"age"))?local.age:"";
              return rs?<p style={{fontSize:13,color:"var(--ink3)",marginTop:3,fontStyle:"italic",fontFamily:"Cinzel"}}>{rs}{ag?` · Age ${ag}`:""}</p>:null;})()}
          </div>
          {canEdit&&<div style={{display:"flex",gap:5,flexShrink:0}}>
            <button className={`btn${editMode?" act":""}`} onClick={()=>setEditMode(m=>!m)} style={{fontSize:12,padding:"4px 11px"}}>{editMode?"✓ Done":"✏️ Edit"}</button>
            {editMode&&(privView||!isControlled(local)||(sel.s==="settlements"&&canEdit&&entryVisible(local)))&&<button className="btn red" onClick={reqDel} style={{fontSize:12,padding:"4px 9px"}}>🗑</button>}
          </div>}
          {!canEdit&&!readOnly&&local.lockedForPlayers&&<span title="Josh has locked this entry" style={{fontSize:11,color:"var(--ink3)",fontFamily:"Cinzel"}}>🔒 Locked</span>}
        </div>
        <Ornament/>
        {/* Regions: special heraldry + map fields */}
        {sel.s==="regions"&&(()=>{
          const places=getPlaces(lore);const pt=placeType(local);const par=placeById(places,local.parentId);
          const showHer=privView||!isControlled(local)||fieldVisible(local,"heraldry");
          const lab={fontSize:9,fontFamily:"Cinzel",color:"var(--ink3)",letterSpacing:"0.08em",marginBottom:6};
          return(<div style={{display:"flex",gap:20,flexWrap:"wrap",marginBottom:16}}>
            {showHer&&<div style={{flexShrink:0}}>
              <div style={lab}>HERALDRY{privView&&!editMode&&isControlled(local)&&<EyeBtn on={fieldVisible(local,"heraldry")} onClick={()=>toggleField("heraldry")}/>}</div>
              <div style={{width:100,height:100,background:"var(--parch2)",border:`2px solid ${dmView&&isControlled(local)&&!fieldVisible(local,"heraldry")?HIDDEN_RED:"var(--border2)"}`,borderRadius:6,overflow:"hidden",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"}}>
                {imgSrc(local.heraldry)?<img src={imgSrc(local.heraldry)} alt="" style={{width:"100%",height:"100%",objectFit:"contain"}}/>:<div style={{color:"var(--ink3)",fontSize:28}}>{PLACE_TYPES[pt].icon}</div>}
                {editMode&&!readOnly&&<label style={{position:"absolute",bottom:0,left:0,right:0,background:"rgba(0,0,0,0.65)",color:"var(--gold3)",fontSize:9,textAlign:"center",padding:"3px",cursor:"pointer",fontFamily:"Cinzel"}}>
                  Upload<input type="file" accept="image/*" style={{display:"none"}} onChange={async e=>{const f=e.target.files&&e.target.files[0];e.target.value="";if(!f)return;const url=await cutoutFile(f,300).catch(()=>null);if(url)commitField("heraldry",url);}}/>
                </label>}
              </div>
            </div>}
            <div style={{flex:1,minWidth:180}}>
              <div style={lab}>{PLACE_TYPES[pt].label.toUpperCase()}</div>
              {par&&(dmView||placeVisible(places,par,false))&&<div style={{fontSize:14,color:"var(--ink2)",marginBottom:6}}>Part of {PLACE_TYPES[placeType(par)].icon} <strong>{par.name}</strong></div>}
              {dmView&&<div style={{fontSize:12,color:"var(--ink3)",fontStyle:"italic"}}>Borders, maps and settlements for this place are set up in DM → Map Control.</div>}
            </div>
          </div>);
        })()}
        {!hasPhys(sel.s)&&(privView||!ctrl||fieldVisible(local,"portrait"))&&(imgSrc(local.portrait)||(editMode&&!readOnly))&&<div style={{marginBottom:16,position:"relative"}}>
          {imgSrc(local.portrait)?<img src={imgSrc(local.portrait)} alt="" style={{width:"100%",height:"auto",display:"block",borderRadius:6,border:`2px solid ${privView&&ctrl&&!fieldVisible(local,"portrait")?HIDDEN_RED:"var(--border2)"}`}}/>
            :<div style={{height:110,border:"2px dashed var(--border2)",borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--ink3)",fontStyle:"italic",fontSize:13}}>No picture yet</div>}
          {editMode&&!readOnly&&<div style={{position:"absolute",bottom:8,left:8,display:"flex",gap:6}}>
            <label className="btn act" style={{cursor:"pointer",fontSize:11,background:"rgba(20,12,4,0.85)"}}>📷 {imgSrc(local.portrait)?"Change":"Upload"} picture<input type="file" accept="image/*" onChange={handleWidePic} style={{display:"none"}}/></label>
            <button className="btn act" onClick={()=>setPromptOpen(true)} style={{fontSize:11,background:"rgba(20,12,4,0.85)"}}>✨ Image prompt</button>
            {imgSrc(local.portrait)&&<button className="btn act" onClick={()=>commitField("portrait",null)} style={{fontSize:11,background:"rgba(20,12,4,0.85)"}}>Remove</button>}
          </div>}
          {privView&&!editMode&&ctrl&&local.portrait&&<div style={{position:"absolute",top:8,right:8,background:"var(--parch)",borderRadius:4}}><PicBtn f="portrait" label="Picture"/></div>}
        </div>}
        {sel.s!=="regions"&&hasPhys(sel.s)&&<div style={{display:"flex",gap:20,marginBottom:18,flexWrap:"wrap"}}>
          {(()=>{
            const seeMask=privView||!ctrl||fieldVisible(local,"portrait");
            const seeReal=local.hiddenFace&&(privView||!ctrl||fieldVisible(local,"realPortrait"));
            const slot=(f,label,cap,see)=>{if(!see)return null;const img=imgSrc(local[f]);const hid=privView&&ctrl&&!fieldVisible(local,f);
              return(<div key={f} style={{flexShrink:0,width:140}}>
                <div style={{width:140,height:180,background:"var(--parch2)",border:`2px solid ${hid?HIDDEN_RED:"var(--border2)"}`,borderRadius:4,overflow:"hidden",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  {img?<img src={img} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>:<div style={{color:"var(--ink3)",fontSize:11,fontStyle:"italic",textAlign:"center",padding:8}}>No {label.toLowerCase()}</div>}
                  {editMode&&canEdit&&<label style={{position:"absolute",bottom:0,left:0,right:0,background:"rgba(0,0,0,0.65)",color:"var(--gold3)",fontSize:10,textAlign:"center",padding:"4px",cursor:"pointer",fontFamily:"Cinzel"}}>📷 Upload<input type="file" accept="image/*" onChange={async e=>{const fl=(e.target.files&&e.target.files[0]);e.target.value="";if(!fl)return;const c=await compressImage(fl,600,0.8);commitField(f,c);}} style={{display:"none"}}/></label>}
                </div>
                {cap&&<div style={{fontSize:9,fontFamily:"Cinzel",letterSpacing:".08em",color:"var(--ink3)",textAlign:"center",marginTop:4}}>{cap}</div>}
                {privView&&!editMode&&ctrl&&local[f]&&<PicBtn f={f} label={label}/>}
              </div>);};
            if(!seeMask&&!seeReal&&!editMode)return null;
            return(<div style={{display:"flex",flexDirection:"column",gap:5}}>
              <div style={{display:"flex",gap:10}}>
                {slot("portrait","Portrait",local.hiddenFace?(seeReal&&!privView?"MASKED":"SHOWN FACE"):"",seeMask||editMode)}
                {local.hiddenFace&&slot("realPortrait","Real face","REAL FACE",seeReal||(editMode&&privView))}
              </div>
              {editMode&&canEdit&&<button className="btn" onClick={()=>setPromptOpen(true)} style={{width:140,fontSize:11}}>✨ Image prompt</button>}
              {editMode&&privView&&<label style={{fontSize:11,display:"flex",gap:5,alignItems:"center",color:"var(--ink2)",cursor:"pointer"}}><input type="checkbox" checked={!!local.hiddenFace} onChange={e=>commitField("hiddenFace",e.target.checked)}/> Hidden face (mask)</label>}
            </div>);
          })()}
          {hasPhys(sel.s)&&(editMode||privView||!isControlled(local)||PHYS_FIELDS.some(([,f])=>fieldVisible(local,f)&&(local[f]||"").trim()))&&<div style={{flex:1}}>
            <div style={{fontSize:9,fontFamily:"Cinzel",color:"var(--ink3)",letterSpacing:"0.08em",marginBottom:8}}>PHYSICAL ATTRIBUTES</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:10}}>
              {PHYS_FIELDS.map(([lbl,f])=>AF(lbl,f))}
            </div>
          </div>}
        </div>}
        <Ornament/>
        {TF("Description","description",100)}
        {TF("Background & Lore","lore",120)}
        {["ally","enemy","faction"].includes(kindOf(sel.s))&&TF("Abilities & Powers","abilities",90)}
        {kindOf(sel.s)==="enemy"&&<>{SF("Threat Level","threatLevel")}{TF("Tactics & Weaknesses","tactics",90)}</>}
        {!["session","history"].includes(kindOf(sel.s))&&TF("Relationships & Connections","relationships",90)}
        {["ally","enemy"].includes(kindOf(sel.s))&&TF("Feats with the Party","featsWithParty",90)}
        {kindOf(sel.s)==="session"&&TF("Key Events & Decisions","keyEvents",120)}
        
        {sel.s==="settlements"&&(()=>{
          const places=getPlaces(lore);const baronies=places.filter(p=>placeType(p)==="barony");const pl=placeById(places,local.placeId);
          return(<div style={{marginBottom:12}}>
            <div style={{fontSize:9,fontFamily:"Cinzel",color:"var(--ink3)",letterSpacing:"0.08em",marginBottom:3}}>LOCATION</div>
            {editMode&&!readOnly&&dmView?<select value={local.placeId==null?"":String(local.placeId)} onChange={e=>commitField("placeId",e.target.value===""?null:(placeById(places,e.target.value)||{}).id)} style={{fontFamily:"Crimson Pro,serif",background:"var(--parch)",border:"1px solid var(--border2)",color:"var(--ink)",borderRadius:4,padding:"6px 8px",fontSize:14,outline:"none"}}>
                <option value="">— Not in a barony —</option>{baronies.map(b=><option key={b.id} value={String(b.id)}>{b.name}</option>)}</select>
              :<div style={{fontSize:15,color:"var(--ink)",fontFamily:"Crimson Pro"}}>{pl&&(dmView||placeVisible(places,pl,false))?[...ancestorsOf(places,pl).filter(a=>dmView||entryVisible(a)).map(a=>a.name),pl.name].join(" › "):"Unknown"}</div>}
          </div>);
        })()}
        {sel.s==="settlements"&&(()=>{const ctrl2=isControlled(local);const ok=(!ctrl2||privView||fieldVisible(local,"hoverLore"));if(!ok&&editMode)return null;const v=ok?local.hoverLore:"";
          return <LoreVF label="Map hover text" value={v} field="hoverLore" multi height={60} editMode={editMode&&!readOnly} onCommit={commitField} eyeState={ctrl2&&privView?fieldVisible(local,"hoverLore"):undefined} onEye={toggleField}/>;})()}
        {SF("Tags","tags")}
        {editMode&&!readOnly&&(()=>{const topOf=x=>{let c=secById(x),g=0;while(c&&c.parent&&secById(c.parent)&&g++<5)c=secById(c.parent);return c?c.id:x;};const top=topOf(sel.s);
          const fam=allSections.filter(x=>!x.group&&topOf(x.id)===top&&(secOwner(x.id)||null)===(secOwner(sel.s)||null));
          if(fam.length<2||sel.s==="regions"||sel.s==="settlements")return null;
          return(<div style={{marginBottom:12}}><div style={{fontSize:9,fontFamily:"Cinzel",color:"var(--ink3)",letterSpacing:"0.08em",marginBottom:3}}>MOVE TO</div>
            <select value={sel.s} onChange={e=>moveEntry(e.target.value)} style={{fontFamily:"Crimson Pro,serif",background:"var(--parch)",border:"1px solid var(--border2)",color:"var(--ink)",borderRadius:4,padding:"6px 8px",fontSize:14,outline:"none"}}>
              {fam.map(x=><option key={x.id} value={x.id}>{x.label}</option>)}</select></div>);})()}
        {["ally","enemy"].includes(kindOf(sel.s))&&!readOnly&&(privView||!isControlled(local))&&!ownedSec&&<>
          <Ornament/>
          <div style={{marginBottom:12}}>
            <div style={{fontSize:9,fontFamily:"Cinzel",color:"var(--ink3)",letterSpacing:"0.08em",marginBottom:5}}>LINKED CHARACTER</div>
            {editMode?<select value={local.linkedCharId||""} onChange={e=>commitField("linkedCharId",e.target.value||null)} style={{fontFamily:"Crimson Pro,serif",background:"var(--parch)",border:"1px solid var(--border2)",color:"var(--ink)",borderRadius:4,padding:"6px 8px",width:"100%",fontSize:14,outline:"none"}}>
              <option value="">— None —</option>
              {characters.map((c,i)=><option key={c.id} value={c.id}>{c.name||`Player ${i+1}`}</option>)}
            </select>:local.linkedCharId?<p style={{fontSize:14,color:"var(--ink)"}}>{(characters.find(c=>String(c.id)===String(local.linkedCharId))||{}).name||"Unknown"}</p>:null}
          </div>
        </>}
      </div>}
      </div>
      {privView&&local&&!editMode&&<div style={{position:"sticky",bottom:0,zIndex:5,background:"var(--parch2)",borderTop:"2px solid var(--gold2)",padding:"10px 18px",display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
        {dmView&&<button className="btn" title="Locked entries can be read but not edited by players" onClick={()=>commitField("lockedForPlayers",!local.lockedForPlayers)} style={{fontSize:11,padding:"5px 10px",color:local.lockedForPlayers?HIDDEN_RED:"var(--ink2)",borderColor:local.lockedForPlayers?HIDDEN_RED:"var(--border2)"}}>{local.lockedForPlayers?"🔒 Locked for players":"🔓 Players can edit"}</button>}
        {!isControlled(local)
          ?<><button className="btn" onClick={()=>updReveal(r=>({...r,entry:false}))} style={{fontSize:11,padding:"5px 12px",color:"#2f7a2f",borderColor:"#2f7a2f"}}><Eye open={true} size={12}/> {local.name||"Entry"} is known to players</button>
            <div style={{flex:1,fontSize:11,color:"var(--ink3)",fontStyle:"italic",textAlign:"center"}}>{hasSel?"Highlighted text ready":ownedSec?"Highlight red text to reveal or hide it":"Highlight DM version text to reveal or hide it"}</div>
            <button className="btn" disabled={!hasSel} onMouseDown={e=>e.preventDefault()} onClick={()=>applySelection(false)} style={{fontSize:11,padding:"5px 12px",opacity:hasSel?1:0.4}}><Eye open={false} size={12}/> Hide highlighted</button>
            <button className={`btn${hasSel?" act":""}`} disabled={!hasSel} onMouseDown={e=>e.preventDefault()} onClick={()=>applySelection(true)} style={{fontSize:11,padding:"5px 14px",opacity:hasSel?1:0.4}}><Eye open={true} size={12}/> Reveal highlighted</button></>
          :<>
            <button className="btn" onMouseDown={e=>e.preventDefault()} onClick={()=>updReveal(r=>({...r,entry:!r.entry}))}
              style={{fontSize:11,padding:"5px 12px",color:local.reveal.entry?"#3c8c3c":HIDDEN_RED,borderColor:local.reveal.entry?"#3c8c3c":HIDDEN_RED}}>
              <Eye open={local.reveal.entry} size={12}/> {local.reveal.entry?`${local.name||"Entry"} is known to players`:`${local.name||"Entry"} is hidden — click to reveal`}</button>
            <div style={{flex:1,fontSize:11,color:"var(--ink3)",fontStyle:"italic",textAlign:"center"}}>{hasSel?"Highlighted text ready":ownedSec?"Highlight red text to reveal or hide it":"Highlight DM version text to reveal or hide it"}</div>
            <button className="btn" disabled={!hasSel} onMouseDown={e=>e.preventDefault()} onClick={()=>applySelection(false)} style={{fontSize:11,padding:"5px 12px",opacity:hasSel?1:0.4}}><Eye open={false} size={12}/> Hide highlighted</button>
            <button className={`btn${hasSel?" act":""}`} disabled={!hasSel} onMouseDown={e=>e.preventDefault()} onClick={()=>applySelection(true)} style={{fontSize:11,padding:"5px 14px",opacity:hasSel?1:0.4}}><Eye open={true} size={12}/> Reveal highlighted</button>
          </>}
      </div>}
    </div>
  </div></LinkCtx.Provider>);
}

/* ════ TALES PANEL (archived Blood Seeker campaign, read-only) ════ */
function TalesPanel(){
  const [loreSections]=useState(()=>[
    {id:"allies",label:"Allies",icon:"🤝"},{id:"enemies",label:"Enemies",icon:"💀"},
    {id:"factions",label:"Factions",icon:"⚔️"},{id:"settlements",label:"Settlements",icon:"🏰"},
    {id:"history",label:"History",icon:"📖"},{id:"sessions",label:"Session Details",icon:"📋"},
  ]);
  const [openSection,setOpenSection]=useState("allies");
  const [sel,setSel]=useState({s:null,id:null});
  const lore=TALES_DATA.lore;
  const selItem=sel.s?lore[sel.s]&&lore[sel.s].find(i=>i.id===sel.id):null;

  return(<div style={{display:"flex",height:"100%",background:"var(--dark)"}}>
    {/* Left */}
    <div className="sf-lore-side" style={{width:220,display:"flex",flexDirection:"column",background:"var(--parch2)",borderRight:"2px solid var(--gold2)",flexShrink:0,overflow:"hidden"}}>
      <div style={{padding:"10px 14px",background:"var(--parch3)",borderBottom:"1px solid var(--border2)"}}>
        <h3 style={{fontFamily:"Cinzel",fontSize:12,color:"var(--gold)",letterSpacing:"0.08em",marginBottom:2}}>📖 TALES</h3>
        <p style={{fontSize:10,color:"var(--ink3)"}}>Blood Seeker — Archived</p>
      </div>
      <div style={{padding:"6px 10px",background:"rgba(139,26,26,0.1)",border:"1px solid rgba(139,26,26,0.3)",margin:"6px 8px",borderRadius:4,fontSize:9,color:"#c87070",fontFamily:"Cinzel",letterSpacing:"0.06em",textAlign:"center"}}>READ ONLY</div>
      <div style={{overflowY:"auto",flex:1}}>
        {loreSections.map(s=>{
          const items=lore[s.id]||[];const isO=openSection===s.id;
          return(<div key={s.id} style={{borderBottom:"1px solid var(--border)"}}>
            <div onClick={()=>setOpenSection(s.id)} style={{padding:"10px 14px",cursor:"pointer",fontSize:12,fontFamily:"Cinzel",color:isO?"var(--gold)":"var(--ink2)",background:isO?"var(--parch3)":"transparent",borderLeft:isO?"3px solid var(--gold2)":"3px solid transparent",display:"flex",alignItems:"center",gap:8,userSelect:"none"}}>
              <span>{s.icon}</span><span style={{flex:1}}>{s.label}</span>
              {items.length>0&&<span style={{fontSize:9,background:"var(--gold2)",color:"var(--dark)",borderRadius:10,padding:"0 5px"}}>{items.length}</span>}
              <span style={{fontSize:9,color:"var(--ink3)",transform:isO?"rotate(180deg)":"none",display:"inline-block"}}>▼</span>
            </div>
            {isO&&items.map(item=><div key={item.id} onClick={()=>setSel({s:s.id,id:item.id})} style={{padding:"7px 12px 7px 20px",cursor:"pointer",fontSize:12,fontFamily:"Crimson Pro",background:sel.id===item.id&&sel.s===s.id?"var(--parch4)":"transparent",color:sel.id===item.id&&sel.s===s.id?"var(--gold)":"var(--ink)",borderLeft:sel.id===item.id&&sel.s===s.id?"3px solid var(--gold2)":"3px solid transparent",borderBottom:"1px solid var(--border)"}}>{item.name}</div>)}
          </div>);
        })}
      </div>
      {/* Characters */}
      <div style={{borderTop:"2px solid var(--border2)",padding:"8px 10px"}}>
        <div style={{fontSize:9,fontFamily:"Cinzel",color:"var(--ink3)",letterSpacing:"0.06em",marginBottom:6}}>CHARACTERS</div>
        {TALES_DATA.characters.filter(c=>c.name).map(c=><div key={c.id} style={{fontSize:12,fontFamily:"Crimson Pro",color:"var(--ink2)",padding:"3px 0"}}>{c.name} — {c.charClass} Lv{c.level}</div>)}
      </div>
    </div>
    {/* Right */}
    <div style={{flex:1,overflowY:"auto",background:"var(--parch)"}}>
      {!selItem?<div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",color:"var(--ink3)",textAlign:"center",padding:40}}>
        <div style={{fontSize:52,opacity:.2,marginBottom:14}}>📖</div>
        <h3 style={{fontFamily:"Cinzel",fontSize:16,color:"var(--ink3)",marginBottom:8}}>Blood Seeker</h3>
        <p style={{fontSize:14,color:"var(--ink3)",fontStyle:"italic"}}>The chronicles of the first campaign</p>
        <p style={{fontSize:12,color:"var(--ink3)",marginTop:8,opacity:.6}}>Select an entry from the left to read</p>
      </div>:
      <div className="sf-lore-detail" style={{padding:"24px 32px",maxWidth:820,margin:"0 auto"}}>
        <div style={{padding:"4px 12px",background:"rgba(139,26,26,0.1)",border:"1px solid rgba(139,26,26,0.3)",borderRadius:4,fontSize:9,color:"#c87070",fontFamily:"Cinzel",letterSpacing:"0.06em",display:"inline-block",marginBottom:14}}>📖 BLOOD SEEKER — ARCHIVED</div>
        <h2 style={{fontSize:24,color:"var(--gold)",letterSpacing:"0.06em",marginBottom:4}}>{selItem.name}</h2>
        {selItem.raceSp&&<p style={{fontSize:13,color:"var(--ink3)",fontStyle:"italic",fontFamily:"Cinzel",marginBottom:8}}>{selItem.raceSp}{selItem.age?` · Age ${selItem.age}`:""}</p>}
        <Ornament/>
        {selItem.description&&<><div style={{fontSize:9,fontFamily:"Cinzel",color:"var(--ink3)",letterSpacing:"0.08em",marginBottom:4}}>DESCRIPTION</div><p style={{fontSize:15,color:"var(--ink)",lineHeight:1.7,fontFamily:"Crimson Pro",whiteSpace:"pre-wrap",marginBottom:14}}>{selItem.description}</p></>}
        {selItem.lore&&<><div style={{fontSize:9,fontFamily:"Cinzel",color:"var(--ink3)",letterSpacing:"0.08em",marginBottom:4}}>BACKGROUND & LORE</div><p style={{fontSize:15,color:"var(--ink)",lineHeight:1.7,fontFamily:"Crimson Pro",whiteSpace:"pre-wrap",marginBottom:14}}>{selItem.lore}</p></>}
        {selItem.relationships&&<><div style={{fontSize:9,fontFamily:"Cinzel",color:"var(--ink3)",letterSpacing:"0.08em",marginBottom:4}}>RELATIONSHIPS</div><p style={{fontSize:15,color:"var(--ink)",lineHeight:1.7,fontFamily:"Crimson Pro",whiteSpace:"pre-wrap",marginBottom:14}}>{selItem.relationships}</p></>}
        {Object.entries(selItem).filter(([k,v])=>["hairColour","eyeColour","build","clothing","voiceAccent","personality","goalSecret"].includes(k)&&v).length>0&&<>
          <Ornament/>
          <div style={{display:"flex",flexWrap:"wrap",gap:10}}>
            {[["hairColour","Hair"],["eyeColour","Eyes"],["build","Build"],["clothing","Clothing"],["voiceAccent","Voice"],["personality","Personality"],["goalSecret","Goal/Secret"]].filter(([k])=>selItem[k]).map(([k,l])=><div key={k} style={{flex:"1 1 140px"}}><div style={{fontSize:9,fontFamily:"Cinzel",color:"var(--ink3)",marginBottom:2}}>{l.toUpperCase()}</div><div style={{fontSize:14,color:"var(--ink)"}}>{selItem[k]}</div></div>)}
          </div>
        </>}
      </div>}
    </div>
  </div>);
}

/* ════ CHARACTER SHEET (carried over, uncontrolled) ════ */
// [Abbreviated for space — full sheet with all features]
/* ════ CHARACTER SHEET HELPERS ════ */
// A number you can tap to type a new value, without going into Edit mode
function QuickNum({value,onCommit,style,title}){
  const [ed,setEd]=useState(false);
  if(ed)return <input autoFocus type="number" defaultValue={value||0} onFocus={e=>e.target.select()} onBlur={e=>{setEd(false);onCommit(parseInt(e.target.value)||0);}} onKeyDown={e=>{if(e.key==="Enter")e.target.blur();if(e.key==="Escape")setEd(false);}} style={{...style,background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.35)",borderRadius:3,outline:"none"}}/>;
  return <div title={title||"Tap to change"} onClick={()=>setEd(true)} style={{...style,cursor:"pointer",borderBottom:"1px dashed rgba(255,255,255,0.3)"}}>{value||0}</div>;
}
// On/off slider
function Switch({on,onChange,label}){
  return(<label style={{display:"inline-flex",alignItems:"center",gap:5,cursor:"pointer",fontSize:10,fontFamily:"Cinzel",color:"#555",letterSpacing:".04em",userSelect:"none"}} onClick={e=>e.stopPropagation()}>
    <span onClick={()=>onChange(!on)} style={{width:28,height:15,borderRadius:8,background:on?"#7a5a14":"#c9bba0",position:"relative",transition:"background .15s",flexShrink:0}}>
      <span style={{position:"absolute",top:2,left:on?15:2,width:11,height:11,borderRadius:"50%",background:"white",transition:"left .15s",boxShadow:"0 1px 2px rgba(0,0,0,0.3)"}}/></span>
    <span onClick={()=>onChange(!on)}>{label}</span></label>);
}
// A row of tick boxes (like death marks) — tick them off in play, ↺ to reset
function TickCounter({max,used,onChange,small}){
  const n=Math.max(0,Math.min(40,parseInt(max)||0));const u=Math.min(n,parseInt(used)||0);
  const sz=small?13:18;
  return(<div style={{display:"flex",gap:3,flexWrap:"wrap",alignItems:"center"}} onClick={e=>e.stopPropagation()}>
    {Array.from({length:n}).map((_,i)=><div key={i} onClick={()=>onChange(i<u?i:i+1)} title={i<u?"Used — click to restore":"Click to use"}
      style={{width:sz,height:sz,border:"2px solid "+(i<u?"#5a3e1b":"#b8a070"),borderRadius:3,cursor:"pointer",background:i<u?"#5a3e1b":"rgba(255,255,255,0.6)",display:"flex",alignItems:"center",justifyContent:"center",color:"#f0e0c0",fontSize:sz-6,lineHeight:1}}>{i<u?"✕":""}</div>)}
    {n>0&&<button onClick={()=>onChange(0)} title="Reset" style={{background:"none",border:"none",cursor:"pointer",color:"#8a6a3a",fontSize:small?11:13,padding:"0 2px"}}>↺</button>}
    {n>0&&<span style={{fontSize:small?9:10,fontFamily:"Cinzel",color:"#777"}}>{n-u}/{n}</span>}
  </div>);
}
const defaultBoxes=L=>{
  const exTotal=parseInt(((L.statRows||[]).find(r=>r.label==="EXPLOIT DICE AVAIL")||{}).value)||0;
  return[
    {id:"b_cf",title:"CLASS FEATURES",kind:"list",items:L.classFeatures||[]},
    {id:"b_kn",title:"KNACKS",kind:"list",items:L.knacks||[]},
    {id:"b_ex",title:"EXPLOITS",kind:"list",items:L.exploits||[],dcOn:true,dc:L.exploitDC||10,ctrOn:exTotal>0,ctrMax:exTotal,ctrUsed:(L.exploitDiceUsed||[]).filter(Boolean).length},
    {id:"b_ft",title:"FEATS",kind:"list",items:L.featsArr||[]},
    {id:"b_sp",title:"SPECIES TRAITS",kind:"text",text:L.speciesTraits||""},
  ];
};

function CharSheet({char,onChange,lore,setLore,myPast,setMyPast,onOpenLore,isDM}){
  const [editMode,setEditMode]=useState(false);
  const [L,setL]=useState({...char});
  const flush=useRef(null);
  const pending=useRef(false);
  useEffect(()=>{if(!pending.current)setL({...char});},[char]);
  const commit=useCallback((f,v)=>{setL(prev=>{const u={...prev,[f]:v};pending.current=true;clearTimeout(flush.current);flush.current=setTimeout(()=>{pending.current=false;onChange(u);},150);return u;});},[onChange]);
  const [lvlPop,setLvlPop]=useState(null);
  const commitNum=useCallback((f,v)=>{
    const n=parseInt(v)||0;
    if(f==="level"){const old=parseInt(L.level)||0;if(n>old){const got=[];(L.boxes||[]).forEach(b=>(b.items||[]).forEach(x=>{const lv=parseInt(x.lvl)||0;if(lv>old&&lv<=n)got.push({name:x.name||"Unnamed",box:b.title,lvl:lv});}));if(got.length)setLvlPop({level:n,got});}}
    commit(f,n);
  },[commit,L.level,L.boxes]);
  const prof=parseInt(((L.statRows||[]).find(r=>r.label==="PROF BONUS")||{}).value)||parseInt(L.profBonus)||2;
  const calcMod=s=>Math.floor((s-10)/2);
  const fmtMod=m=>(m>=0?"+":"")+m;
  const ABILITIES=["str","dex","con","int","wis","cha"];
  const AB_FULL={str:"Strength",dex:"Dexterity",con:"Constitution",int:"Intelligence",wis:"Wisdom",cha:"Charisma"};
  const SKILLS_BY_AB={str:["Athletics"],dex:["Acrobatics","Sleight of Hand","Stealth"],con:[],int:["Arcana","History","Investigation","Nature","Religion"],wis:["Animal Handling","Insight","Medicine","Perception","Survival"],cha:["Deception","Intimidation","Performance","Persuasion"]};
  const cycleMark=i=>{const m=[...(L.deathMarks||Array(10).fill(0))];m[i]=(m[i]+1)%3;commit("deathMarks",m);};
  const updSR=(id,f,v)=>commit("statRows",(L.statRows||[]).map(r=>r.id===id?{...r,[f]:v}:r));
  const addSR=()=>commit("statRows",[...(L.statRows||[]),{id:Date.now(),label:"NEW",value:""}]);
  const delSR=id=>commit("statRows",(L.statRows||[]).filter(r=>r.id!==id));
  const updW=(id,f,v)=>commit("weapons",(L.weapons||[]).map(w=>w.id===id?{...w,[f]:v}:w));
  const addW=()=>commit("weapons",[...(L.weapons||[]),{id:Date.now(),name:"",attackBonus:"",damage:"",notes:""}]);
  const [cfO,setCfO]=useState({});const updCF=(id,f,v)=>commit("classFeatures",(L.classFeatures||[]).map(x=>x.id===id?{...x,[f]:v}:x));const addCF=()=>commit("classFeatures",[...(L.classFeatures||[]),{id:Date.now(),name:"",desc:""}]);const delCF=id=>commit("classFeatures",(L.classFeatures||[]).filter(x=>x.id!==id));
  const [knO,setKnO]=useState({});const updKn=(id,f,v)=>commit("knacks",(L.knacks||[]).map(x=>x.id===id?{...x,[f]:v}:x));const addKn=()=>commit("knacks",[...(L.knacks||[]),{id:Date.now(),name:"",desc:""}]);const delKn=id=>commit("knacks",(L.knacks||[]).filter(x=>x.id!==id));
  const [exO,setExO]=useState({});const updEx=(id,f,v)=>commit("exploits",(L.exploits||[]).map(x=>x.id===id?{...x,[f]:v}:x));const addEx=()=>commit("exploits",[...(L.exploits||[]),{id:Date.now(),name:"",desc:""}]);const delEx=id=>commit("exploits",(L.exploits||[]).filter(x=>x.id!==id));
  const [ftO,setFtO]=useState({});const updFt=(id,f,v)=>commit("featsArr",(L.featsArr||[]).map(x=>x.id===id?{...x,[f]:v}:x));const addFt=()=>commit("featsArr",[...(L.featsArr||[]),{id:Date.now(),name:"",desc:""}]);const delFt=id=>commit("featsArr",(L.featsArr||[]).filter(x=>x.id!==id));
  const togAP=k=>commit("armorProf",{...L.armorProf,[k]:!(L.armorProf&&L.armorProf[k])});
  const setCurr=(k,v)=>commit("currency",{...L.currency,[k]:v});
  const setMagAtt=(i,v)=>{const a=[...(L.magicAttunements||["","",""])];a[i]=v;commit("magicAttunements",a);};
  const toggleSaveProf=ab=>{const cur=(L.savingThrows&&L.savingThrows[ab])||{prof:false,override:null};commit("savingThrows",{...L.savingThrows,[ab]:{...cur,prof:!cur.prof}});};
  const setSaveOverride=(ab,v)=>{const cur=(L.savingThrows&&L.savingThrows[ab])||{prof:false,override:null};commit("savingThrows",{...L.savingThrows,[ab]:{...cur,override:v===""?null:v}});};
  const toggleSkillProf=sk=>{const cur=(L.skills&&L.skills[sk])||{prof:false,override:null};const next=!cur.prof?{prof:true,exp:false}:!cur.exp?{prof:true,exp:true}:{prof:false,exp:false};commit("skills",{...L.skills,[sk]:{...cur,...next}});};
  const setSkillOverride=(sk,v)=>{const cur=(L.skills&&L.skills[sk])||{prof:false,override:null};commit("skills",{...L.skills,[sk]:{...cur,override:v===""?null:v}});};
  const handlePortrait=async e=>{const f=(e.target.files&&e.target.files[0]);if(!f)return;const c=await compressImage(f,400,0.72);commit("portrait",c);};
  const getSaveBonus=ab=>{const s=(L.savingThrows&&L.savingThrows[ab]);const hasO=(s&&s.override)!==null&&(s&&s.override)!==undefined&&(s&&s.override)!=="";return hasO?parseInt(s.override)||0:calcMod(L[ab]||10)+((s&&s.prof)?prof:0);};
  const getSaveProf=ab=>!!(((L.savingThrows&&L.savingThrows[ab])||{}).prof);
  const autoSk=(sk,ab)=>{const d=(L.skills&&L.skills[sk])||{};return calcMod(L[ab]||10)+(d.prof?(d.exp?2*prof:prof):0);};
  const getSkBonus=(sk,ab)=>{const d=(L.skills&&L.skills[sk]);if(!d)return calcMod(L[ab]||10);if(d.override!==null&&d.override!==undefined&&d.override!=="")return parseInt(d.override)||0;return autoSk(sk,ab);};
  const hasOv=o=>o!==null&&o!==undefined&&o!=="";
  // HP in play
  const [hpAmt,setHpAmt]=useState("");
  const damage=()=>{const n=parseInt(hpAmt)||0;if(!n)return;let t=L.hpTemp||0,c=L.hpCurrent||0;const fromT=Math.min(t,n);t-=fromT;c=Math.max(0,c-(n-fromT));commit("hpTemp",t);setTimeout(()=>commit("hpCurrent",c),0);setHpAmt("");};
  const hpCap=()=>(L.hpMax||0)>0?(L.hpMax||0)+(L.hpTemp||0):Infinity; // our table: heal up to max + temp
  const heal=()=>{const n=parseInt(hpAmt)||0;if(!n)return;commit("hpCurrent",Math.min(hpCap(),(L.hpCurrent||0)+n));setHpAmt("");};
  // customisable boxes
  const boxes=L.boxes||defaultBoxes(L);
  const setBoxes=b=>commit("boxes",b);
  const updBox=(id,patch)=>setBoxes(boxes.map(b=>b.id===id?{...b,...patch}:b));
  const updItem=(bid,iid,patch)=>setBoxes(boxes.map(b=>b.id===bid?{...b,items:(b.items||[]).map(x=>x.id===iid?{...x,...patch}:x)}:b));
  const moveBox=(id,d)=>{const i=boxes.findIndex(b=>b.id===id);const j=i+d;if(j<0||j>=boxes.length)return;const a=[...boxes];[a[i],a[j]]=[a[j],a[i]];setBoxes(a);};
  const [boxOpen,setBoxOpen]=useState({});
  const ExpandList=({items,open,setOpen,onUpd,onDel,onAdd,sec})=>(<div>
    {sec&&<div className="sh-section">{sec}</div>}
    {(items||[]).map(x=><div key={x.id} style={{marginBottom:5,border:"1px solid #b8a070",borderRadius:3,overflow:"hidden"}}>
      <div style={{display:"flex",alignItems:"center",gap:5,padding:"5px 8px",background:"#e8d9b8",cursor:"pointer",userSelect:"none"}} onClick={()=>setOpen(o=>({...o,[x.id]:!o[x.id]}))}>
        {editMode?<ShInput value={x.name||""} onCommit={v=>onUpd(x.id,"name",v)} onClick={e=>e.stopPropagation()} className="sh-input" style={{flex:1,fontSize:12}} placeholder="Name..."/>:<span style={{flex:1,fontSize:12,fontFamily:"Cinzel",color:"#2a2a3a"}}>{x.name||<em style={{opacity:.5}}>Unnamed</em>}</span>}
        <span style={{fontSize:9,color:"#888"}}>{open[x.id]?"▲":"▼"}</span>
        {editMode&&<button onClick={e=>{e.stopPropagation();onDel(x.id);}} style={{background:"none",border:"none",color:"var(--red)",cursor:"pointer",fontSize:12}}>✕</button>}
      </div>
      {open[x.id]&&<div style={{padding:"7px 9px",background:"#f0ebe0"}}>
        <div className="sh-label">DESCRIPTION</div>
        {editMode?<ShTextarea value={x.desc||""} onCommit={v=>onUpd(x.id,"desc",v)} className="sh-input-box" style={{fontSize:12,minHeight:50,resize:"vertical"}}/>:<p style={{fontSize:12,color:"#2a2a3a",lineHeight:1.6,whiteSpace:"pre-wrap"}}>{x.desc||<em style={{opacity:.4}}>—</em>}</p>}
      </div>}
    </div>)}
    {editMode&&<button onClick={onAdd} style={{fontFamily:"Crimson Pro,serif",background:"rgba(255,255,255,0.4)",border:"1px dashed #b8a070",color:"#666",borderRadius:3,padding:"3px 8px",fontSize:11,cursor:"pointer",width:"100%",marginTop:3}}>+ Add</button>}
  </div>);

  return(<div style={{height:"100%",background:"#f0ebe0",overflowY:"auto"}}>
    {/* Header */}
    <div style={{background:"#2a2a3a",padding:"10px 18px",display:"flex",gap:14,alignItems:"flex-start",flexWrap:"wrap",position:"relative"}}>
      <button onClick={()=>setEditMode(m=>!m)} style={{position:"absolute",top:10,right:12,fontFamily:"Cinzel",fontSize:11,padding:"4px 12px",background:editMode?"rgba(200,160,40,0.3)":"rgba(255,255,255,0.1)",border:`1px solid ${editMode?"var(--gold2)":"rgba(255,255,255,0.25)"}`,color:editMode?"var(--gold3)":"rgba(255,255,255,0.7)",borderRadius:4,cursor:"pointer",letterSpacing:"0.06em"}}>
        {editMode?"✓ DONE":"✏️ EDIT"}
      </button>
      {/* Portrait */}
      <div style={{position:"relative",width:80,height:96,background:"rgba(255,255,255,0.08)",border:"2px solid rgba(255,255,255,0.2)",borderRadius:3,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
        {imgSrc(L.portrait)?<img src={imgSrc(L.portrait)} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>:<span style={{color:"rgba(255,255,255,0.2)",fontSize:10}}>Portrait</span>}
        {editMode&&<label style={{position:"absolute",bottom:0,left:0,right:0,background:"rgba(0,0,0,0.7)",color:"rgba(255,255,255,0.7)",fontSize:8,textAlign:"center",padding:"3px",cursor:"pointer",fontFamily:"Cinzel"}}>📷<input type="file" accept="image/*" onChange={handlePortrait} style={{display:"none"}}/></label>}
      </div>
      {/* Name + fields */}
      <div style={{flex:1,minWidth:200,paddingRight:80}}>
        {editMode?<ShInput value={L.name||""} onCommit={v=>commit("name",v)} placeholder="Character Name" style={{fontFamily:"Cinzel",background:"transparent",border:"none",borderBottom:"2px solid rgba(255,255,255,0.4)",color:"white",fontSize:24,fontWeight:700,width:"100%",outline:"none",marginBottom:6,padding:"2px 0"}}/>
          :<div style={{fontFamily:"Cinzel",color:"white",fontSize:24,fontWeight:700,marginBottom:6,borderBottom:"2px solid rgba(255,255,255,0.15)",padding:"2px 0"}}>{L.name||<span style={{opacity:.3}}>Unnamed Hero</span>}</div>}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3px 14px"}}>
          {[["background","BACKGROUND"],["charClass","CLASS"],["species","SPECIES"],["subclass","SUBCLASS"]].map(([f,lbl])=><div key={f}>
            <div style={{fontSize:8,color:"rgba(255,255,255,0.45)",fontFamily:"Cinzel",marginBottom:1}}>{lbl}</div>
            {editMode?<ShInput value={L[f]||""} onCommit={v=>commit(f,v)} style={{fontFamily:"Crimson Pro,serif",background:"transparent",border:"none",borderBottom:"1px solid rgba(255,255,255,0.2)",color:"rgba(255,255,255,0.85)",fontSize:12,width:"100%",outline:"none",padding:"1px 0"}}/>
              :<div style={{fontSize:12,color:"rgba(255,255,255,0.7)",fontFamily:"Crimson Pro",borderBottom:"1px solid rgba(255,255,255,0.1)",padding:"1px 0"}}>{L[f]||"—"}</div>}
          </div>)}
        </div>
      </div>
      {/* Level + AC */}
      <div style={{display:"flex",gap:10,flexShrink:0}}>
        {[["level","LEVEL"],["ac","AC"]].map(([f,lbl])=><div key={f} style={{textAlign:"center",background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:4,padding:"6px 10px",minWidth:62}}>
          <div style={{fontSize:8,color:"rgba(255,255,255,0.45)",fontFamily:"Cinzel",marginBottom:3}}>{lbl}</div>
          {editMode?<ShNumInput value={L[f]||0} onCommit={v=>commitNum(f,v)} style={{fontFamily:"Cinzel",background:"transparent",border:"none",color:"white",fontSize:26,textAlign:"center",width:"100%",outline:"none",fontWeight:700}}/>
            :<div style={{fontFamily:"Cinzel",color:"white",fontSize:26,fontWeight:700}}>{L[f]||0}</div>}
        </div>)}
      </div>
      {/* HP + Hit Die */}
      <div style={{background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:4,padding:"7px 10px",flexShrink:0}}>
        <div style={{fontSize:8,color:"rgba(255,255,255,0.45)",fontFamily:"Cinzel",marginBottom:4}}>HIT POINTS</div>
        <div style={{display:"flex",gap:6,alignItems:"center",marginBottom:5}}>
          {[["hpCurrent","CURRENT",20],["hpMax","MAX",20],["hpTemp","TEMP",14]].map(([f,lbl,sz],i)=><React.Fragment key={f}>{i>0&&<div style={{color:"rgba(255,255,255,0.3)",fontSize:14}}>{i===1?"/":"+"}</div>}<div style={{textAlign:"center"}}>
            <div style={{fontSize:7,color:"rgba(255,255,255,0.35)",fontFamily:"Cinzel",marginBottom:1}}>{lbl}</div>
            {editMode?<ShNumInput value={L[f]||0} onCommit={v=>commitNum(f,v)} style={{fontFamily:"Cinzel",background:"transparent",border:"none",color:f==="hpCurrent"&&L.hpCurrent>0&&L.hpMax>0&&L.hpCurrent<L.hpMax/2?"#ff8888":"white",fontSize:sz,textAlign:"center",width:f==="hpTemp"?34:44,outline:"none",fontWeight:700}}/>
              :f==="hpMax"?<div style={{fontFamily:"Cinzel",color:"white",fontSize:sz,fontWeight:700,minWidth:44,textAlign:"center"}}>{L[f]||0}</div>
              :<QuickNum value={L[f]||0} onCommit={v=>commit(f,v)} style={{fontFamily:"Cinzel",color:f==="hpCurrent"&&L.hpCurrent>0&&L.hpMax>0&&L.hpCurrent<L.hpMax/2?"#ff8888":"white",fontSize:sz,fontWeight:700,width:f==="hpTemp"?34:48,minWidth:f==="hpTemp"?34:44,textAlign:"center"}}/>}
          </div></React.Fragment>)}
        </div>
        {!editMode&&<div style={{display:"flex",gap:4,alignItems:"center",marginBottom:6}}>
          <button title="-1 HP" onClick={()=>commit("hpCurrent",Math.max(0,(L.hpCurrent||0)-1))} style={{width:22,height:22,borderRadius:3,border:"1px solid rgba(255,255,255,0.3)",background:"rgba(255,255,255,0.08)",color:"white",cursor:"pointer",fontSize:14,lineHeight:1}}>−</button>
          <button title="+1 HP" onClick={()=>commit("hpCurrent",Math.min(hpCap(),(L.hpCurrent||0)+1))} style={{width:22,height:22,borderRadius:3,border:"1px solid rgba(255,255,255,0.3)",background:"rgba(255,255,255,0.08)",color:"white",cursor:"pointer",fontSize:14,lineHeight:1}}>+</button>
          <input type="number" value={hpAmt} onChange={e=>setHpAmt(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")damage();}} placeholder="amt" style={{width:44,fontFamily:"Cinzel",fontSize:12,background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.3)",color:"white",borderRadius:3,padding:"2px 4px",outline:"none"}}/>
          <button onClick={damage} style={{fontFamily:"Cinzel",fontSize:9,padding:"3px 6px",borderRadius:3,border:"1px solid rgba(255,120,120,0.6)",background:"rgba(160,30,30,0.5)",color:"#ffd0d0",cursor:"pointer"}}>DAMAGE</button>
          <button onClick={heal} style={{fontFamily:"Cinzel",fontSize:9,padding:"3px 6px",borderRadius:3,border:"1px solid rgba(120,220,120,0.6)",background:"rgba(30,110,30,0.5)",color:"#d0ffd0",cursor:"pointer"}}>HEAL</button>
        </div>}
        <div style={{display:"flex",gap:8}}>
          <div><div style={{fontSize:7,color:"rgba(255,255,255,0.35)",fontFamily:"Cinzel",marginBottom:1}}>HIT DIE</div>
            {editMode?<select value={L.hitDieMax||"d8"} onChange={e=>commit("hitDieMax",e.target.value)} style={{fontFamily:"Cinzel",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",color:"white",fontSize:12,padding:"2px 4px",outline:"none",borderRadius:2}}>{["d4","d6","d8","d10","d12"].map(d=><option key={d} style={{background:"#333"}}>{d}</option>)}</select>
              :<div style={{fontFamily:"Cinzel",color:"white",fontSize:13}}>{L.hitDieMax||"d8"}</div>}
          </div>
          <div><div style={{fontSize:7,color:"rgba(255,255,255,0.35)",fontFamily:"Cinzel",marginBottom:1}}>SPENT</div>
            {editMode?<ShNumInput value={L.hitDieSpent||0} onCommit={v=>commitNum("hitDieSpent",v)} style={{fontFamily:"Cinzel",background:"transparent",border:"none",color:"white",fontSize:12,width:28,outline:"none",textAlign:"center"}}/>
              :<div style={{fontFamily:"Cinzel",color:"white",fontSize:12,textAlign:"center"}}>{L.hitDieSpent||0}</div>}
          </div>
        </div>
      </div>
      {/* Death marks */}
      <div style={{background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:4,padding:"7px 10px",flexShrink:0}}>
        <div style={{fontSize:8,color:"rgba(255,255,255,0.45)",fontFamily:"Cinzel",marginBottom:5}}>DEATH MARKS</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:3,marginBottom:3}}>
          {(L.deathMarks||Array(10).fill(0)).map((m,i)=><div key={i} className={`death-box${m===1?" red":m===2?" black":""}`} onClick={()=>cycleMark(i)}>
            {m===1&&<span style={{color:"#900",fontWeight:"bold"}}>✕</span>}
            {m===2&&<span style={{color:"#eee"}}>☠</span>}
          </div>)}
        </div>
        <div style={{fontSize:7,color:"rgba(255,255,255,0.25)",fontFamily:"Cinzel",textAlign:"center"}}>CLICK TO CYCLE</div>
      </div>
    </div>
    {/* Stat row */}
    <div style={{background:"#efe4ce",borderBottom:"2px solid #b8a070",padding:"7px 12px",display:"flex",gap:5,flexWrap:"wrap",alignItems:"flex-start"}}>
      {(L.statRows||[]).map(r=><div key={r.id} style={{textAlign:"center",background:"#f0ebe0",border:"1px solid #b8a070",borderRadius:3,padding:"4px 7px",minWidth:64}}>
        {editMode?<><ShInput value={r.label} onCommit={v=>updSR(r.id,"label",v)} style={{fontFamily:"Cinzel",background:"transparent",border:"none",color:"#555",fontSize:7,textAlign:"center",width:"100%",outline:"none",letterSpacing:"0.04em",textTransform:"uppercase",marginBottom:2}}/>
          <ShInput value={r.value} onCommit={v=>updSR(r.id,"value",v)} style={{fontFamily:"Cinzel",background:"rgba(255,255,255,0.6)",border:"1px solid #b8a070",color:"#2a2a3a",fontSize:13,textAlign:"center",width:"100%",outline:"none",borderRadius:2,padding:"1px 0",fontWeight:600}}/>
          <button onClick={()=>delSR(r.id)} style={{background:"none",border:"none",color:"#bbb",cursor:"pointer",fontSize:8,marginTop:1,padding:0}}>✕</button></>
        :<><div style={{fontFamily:"Cinzel",color:"#555",fontSize:7,letterSpacing:"0.04em",textTransform:"uppercase",marginBottom:2}}>{r.label}</div>
          <div style={{fontFamily:"Cinzel",color:"#2a2a3a",fontSize:14,fontWeight:600}}>{r.value||(r.label==="PASSIVE PERCEPTION"?10+getSkBonus("Perception","wis"):"—")}</div></>}
      </div>)}
      {editMode&&<button onClick={addSR} style={{alignSelf:"center",fontFamily:"Crimson Pro,serif",background:"rgba(255,255,255,0.4)",border:"1px dashed #b8a070",color:"#888",borderRadius:3,padding:"3px 7px",fontSize:10,cursor:"pointer"}}>+ Stat</button>}
    </div>
    {/* Ability scores */}
    <div style={{padding:"12px 14px",display:"flex",flexDirection:"column",gap:12}}>
      <div>
        <div className="sh-section">ABILITY SCORES · SAVING THROWS · SKILLS</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:6}}>
          {ABILITIES.map(ab=>{
            const score=L[ab]||10;const m=calcMod(score);const savP=getSaveProf(ab);const savB=getSaveBonus(ab);
            const sks=SKILLS_BY_AB[ab]||[];
            return(<div key={ab} style={{display:"flex",flexDirection:"column",gap:4}}>
              <div className="sh" style={{textAlign:"center",padding:"5px 3px"}}>
                <div className="sh-label" style={{textAlign:"center"}}>{AB_FULL[ab].toUpperCase()}</div>
                {editMode?<ShNumInput value={score} onCommit={v=>commitNum(ab,v)} style={{fontFamily:"Cinzel",background:"rgba(255,255,255,0.5)",border:"1px solid #b8a070",color:"#2a2a3a",fontSize:22,width:"100%",textAlign:"center",outline:"none",borderRadius:3,fontWeight:700}}/>
                  :<div style={{fontSize:22,fontFamily:"Cinzel",color:"#2a2a3a",fontWeight:700}}>{score}</div>}
                <div style={{fontSize:8,color:"#777",marginBottom:1,fontFamily:"Cinzel"}}>SCORE</div>
                <div style={{fontSize:16,fontFamily:"Cinzel",color:"#2a2a3a",fontWeight:700}}>{fmtMod(m)}</div>
                <div style={{fontSize:7,color:"#777",fontFamily:"Cinzel"}}>MODIFIER</div>
              </div>
              <div className="sh" style={{padding:"4px 5px"}}>
                <div className="sh-label">SAVE</div>
                <div style={{display:"flex",alignItems:"center",gap:4}}>
                  <span className={`prof-dot${savP?" filled":""}`} onClick={()=>editMode&&toggleSaveProf(ab)} style={{cursor:editMode?"pointer":"default"}}/>
                  <span style={{fontSize:12,fontFamily:"Cinzel",color:"#2a2a3a",flex:1,fontWeight:600}}>{fmtMod(savB)}</span>
                  {editMode&&(()=>{const o=((L.savingThrows&&L.savingThrows[ab])||{}).override;return(<>
                    <button title={hasOv(o)?"Remove override":"Override this number"} onClick={()=>setSaveOverride(ab,hasOv(o)?"":String(calcMod(L[ab]||10)+(savP?prof:0)))} style={{fontSize:8,fontFamily:"Cinzel",border:"1px solid #b8a070",background:hasOv(o)?"#7a5a14":"rgba(255,255,255,0.5)",color:hasOv(o)?"white":"#7a5a14",borderRadius:2,padding:"0 3px",cursor:"pointer"}}>OVR</button>
                    {hasOv(o)&&<ShNumInput value={o} onCommit={v=>setSaveOverride(ab,v)} style={{width:34,fontSize:10,padding:"1px 2px"}} className="sh-num"/>}</>);})()}
                </div>
              </div>
              {sks.length>0&&<div className="sh" style={{padding:"4px 5px"}}>
                <div className="sh-label">SKILLS</div>
                {sks.map(sk=>{const d=(L.skills&&L.skills[sk])||{prof:false,override:null};const b=getSkBonus(sk,ab);return(<div key={sk} style={{marginBottom:4}}>
                  <div style={{display:"flex",alignItems:"center",gap:3,marginBottom:1}}>
                    <span title={d.exp?"Expertise (double proficiency)":d.prof?"Proficient":"Not proficient"} className={`prof-dot${d.prof?" filled":""}`} onClick={()=>editMode&&toggleSkillProf(sk)} style={{cursor:editMode?"pointer":"default",boxShadow:d.exp?"0 0 0 2px #f0ebe0, 0 0 0 3.5px #2a2a3a":"none"}}/>
                    <span style={{fontSize:10,color:"#2a2a3a",flex:1,lineHeight:1.2}}>{sk}</span>
                    <span style={{fontSize:10,fontFamily:"Cinzel",color:"#2a2a3a",fontWeight:600}}>{fmtMod(b)}</span>
                  </div>
                  {editMode&&<div style={{display:"flex",gap:3,alignItems:"center",marginLeft:14}}>
                    <button title={hasOv(d.override)?"Remove override":"Override this number"} onClick={()=>setSkillOverride(sk,hasOv(d.override)?"":String(autoSk(sk,ab)))} style={{fontSize:8,fontFamily:"Cinzel",border:"1px solid #b8a070",background:hasOv(d.override)?"#7a5a14":"rgba(255,255,255,0.5)",color:hasOv(d.override)?"white":"#7a5a14",borderRadius:2,padding:"0 3px",cursor:"pointer"}}>OVERRIDE</button>
                    {hasOv(d.override)&&<ShNumInput value={d.override} onCommit={v=>setSkillOverride(sk,v)} style={{fontSize:10,padding:"1px 3px",height:17,width:38}} className="sh-num"/>}
                  </div>}
                </div>);})}
              </div>}
            </div>);
          })}
        </div>
      </div>
      {/* Weapons */}
      <div className="sh">
        <div className="sh-section">WEAPONS & DAMAGE CANTRIPS</div>
        <div style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 2fr auto",gap:4,marginBottom:3,paddingBottom:2,borderBottom:"1px solid #b8a070"}}>
          {["NAME","ATK","DAMAGE","NOTES",""].map((h,i)=><div key={i} className="sh-label">{h}</div>)}
        </div>
        {(L.weapons||[]).map(w=><div key={w.id} style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 2fr auto",gap:4,marginBottom:4,alignItems:"center"}}>
          {editMode?(<><ShInput value={w.name||""} onCommit={v=>updW(w.id,"name",v)} placeholder="Weapon"/><ShInput value={w.attackBonus||""} onCommit={v=>updW(w.id,"attackBonus",v)} placeholder="+5"/><ShInput value={w.damage||""} onCommit={v=>updW(w.id,"damage",v)} placeholder="1d8"/><ShInput value={w.notes||""} onCommit={v=>updW(w.id,"notes",v)} placeholder="Notes"/><button onClick={()=>commit("weapons",(L.weapons||[]).filter(x=>x.id!==w.id))} style={{background:"none",border:"none",color:"var(--red)",cursor:"pointer",fontSize:12}}>✕</button></>)
          :(<><div style={{fontSize:12,color:"#2a2a3a"}}>{w.name||"—"}</div><div style={{fontSize:12,fontFamily:"Cinzel",color:"#2a2a3a",fontWeight:600}}>{w.attackBonus||"—"}</div><div style={{fontSize:12,color:"#2a2a3a"}}>{w.damage||"—"}</div><div style={{fontSize:11,color:"#555"}}>{w.notes||""}</div><div/></>)}
        </div>)}
        {editMode&&<button onClick={addW} style={{fontFamily:"Crimson Pro,serif",background:"rgba(255,255,255,0.4)",border:"1px dashed #b8a070",color:"#888",borderRadius:3,padding:"3px 8px",fontSize:11,cursor:"pointer",marginTop:2}}>+ Add Weapon</button>}
      </div>
      {/* Customisable boxes (Class Features, Knacks, Exploits, Feats, Species Traits, and your own) */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:10}}>
        {boxes.map((b,bi)=><div key={b.id} className="sh">
          {editMode?<div style={{marginBottom:6}}>
            <div style={{display:"flex",gap:3,alignItems:"center",marginBottom:5}}>
              <ShInput value={b.title||""} onCommit={v=>updBox(b.id,{title:v.toUpperCase()})} placeholder="BOX TITLE" className="sh-input-box" style={{fontFamily:"Cinzel",fontSize:11,letterSpacing:".08em",flex:1}}/>
              <button title="Move left" onClick={()=>moveBox(b.id,-1)} disabled={bi===0} style={{border:"1px solid #b8a070",background:"rgba(255,255,255,0.5)",borderRadius:2,cursor:"pointer",fontSize:10,padding:"1px 5px",opacity:bi===0?.35:1}}>◀</button>
              <button title="Move right" onClick={()=>moveBox(b.id,1)} disabled={bi===boxes.length-1} style={{border:"1px solid #b8a070",background:"rgba(255,255,255,0.5)",borderRadius:2,cursor:"pointer",fontSize:10,padding:"1px 5px",opacity:bi===boxes.length-1?.35:1}}>▶</button>
              <button title="Delete box" onClick={()=>{if(confirm(`Delete the ${b.title||"untitled"} box and everything in it?`))setBoxes(boxes.filter(x=>x.id!==b.id));}} style={{border:"1px solid var(--red)",background:"none",color:"var(--red)",borderRadius:2,cursor:"pointer",fontSize:11,padding:"0 5px"}}>✕</button>
            </div>
            <div style={{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"}}>
              <Switch on={!!b.dcOn} onChange={v=>updBox(b.id,{dcOn:v})} label="DC"/>
              <Switch on={!!b.ctrOn} onChange={v=>updBox(b.id,{ctrOn:v})} label="COUNTER"/>
              {b.ctrOn&&<span style={{display:"inline-flex",gap:3,alignItems:"center",fontSize:9,fontFamily:"Cinzel",color:"#666"}}>MAX <ShNumInput value={b.ctrMax||0} onCommit={v=>updBox(b.id,{ctrMax:parseInt(v)||0})} style={{width:38,fontSize:11}} className="sh-num"/></span>}
              {b.ctrOn&&<ShInput value={b.ctrLabel||""} onCommit={v=>updBox(b.id,{ctrLabel:v})} placeholder="Counter name (e.g. Exploit dice)" className="sh-input-box" style={{fontSize:10,flex:"1 1 140px"}}/>}
            </div>
          </div>:<div className="sh-section">{b.title||"UNTITLED"}</div>}
          {b.dcOn&&<div style={{display:"flex",gap:6,alignItems:"center",marginBottom:6}}>
            <div className="sh-label" style={{margin:0}}>DC</div>
            {editMode?<ShNumInput value={b.dc||10} onCommit={v=>updBox(b.id,{dc:parseInt(v)||0})} style={{width:46,fontSize:13}} className="sh-num"/>:<div style={{fontFamily:"Cinzel",fontSize:15,color:"#2a2a3a",fontWeight:700}}>{b.dc||10}</div>}
          </div>}
          {b.ctrOn&&(b.ctrMax||0)>0&&<div style={{marginBottom:7}}>
            {b.ctrLabel&&<div className="sh-label">{b.ctrLabel.toUpperCase()}</div>}
            <TickCounter max={b.ctrMax} used={b.ctrUsed||0} onChange={v=>updBox(b.id,{ctrUsed:v})}/>
          </div>}
          {b.kind==="text"
            ?(editMode?<ShTextarea value={b.text||""} onCommit={v=>updBox(b.id,{text:v})} className="sh-input-box" style={{resize:"vertical",minHeight:70,fontSize:12,lineHeight:1.6}}/>
              :<p style={{fontSize:12,color:"#2a2a3a",lineHeight:1.6,whiteSpace:"pre-wrap"}}>{b.text||<em style={{opacity:.4}}>—</em>}</p>)
            :<div>
              {(b.items||[]).filter(x=>editMode||!((parseInt(x.lvl)||0)>(parseInt(L.level)||0))).map(x=>{const o=!!boxOpen[b.id+":"+x.id];const locked=(parseInt(x.lvl)||0)>(parseInt(L.level)||0);return(<div key={x.id} style={{marginBottom:5,border:`1px solid ${locked?"#a3241e":"#b8a070"}`,borderRadius:3,overflow:"hidden"}}>
                <div style={{display:"flex",alignItems:"center",gap:5,padding:"5px 8px",background:locked?"#e8bcb4":"#e8d9b8",cursor:"pointer",userSelect:"none",flexWrap:"wrap"}} onClick={()=>setBoxOpen(m=>({...m,[b.id+":"+x.id]:!o}))}>
                  {editMode&&locked&&<span title={`Unlocks at level ${x.lvl}`} style={{fontSize:10,fontFamily:"Cinzel",color:"#a3241e",whiteSpace:"nowrap"}}>🔒 LVL {x.lvl}</span>}
                  {editMode?<span style={{flex:1,minWidth:100}} onClick={e=>e.stopPropagation()}><ShInput value={x.name||""} onCommit={v=>updItem(b.id,x.id,{name:v})} className="sh-input" style={{fontSize:12}} placeholder="Name..."/></span>
                    :<span style={{flex:1,fontSize:12,fontFamily:"Cinzel",color:"#2a2a3a"}}>{x.name||<em style={{opacity:.5}}>Unnamed</em>}</span>}
                  {!editMode&&x.dcOn&&<span title={x.dcLabel||"DC"} style={{fontSize:10,fontFamily:"Cinzel",color:"#5a3e1b",background:"rgba(255,255,255,0.55)",border:"1px solid #b8a070",borderRadius:3,padding:"0 5px",whiteSpace:"nowrap"}}>DC {x.dc||10}{x.dcLabel?` ${x.dcLabel}`:""}</span>}
                  {!editMode&&x.ctrOn&&(x.ctrMax||0)>0&&<TickCounter small max={x.ctrMax} used={x.ctrUsed||0} onChange={v=>updItem(b.id,x.id,{ctrUsed:v})}/>}
                  <span style={{fontSize:9,color:"#888"}}>{o?"▲":"▼"}</span>
                  {editMode&&<button onClick={e=>{e.stopPropagation();setBoxes(boxes.map(bb=>bb.id===b.id?{...bb,items:bb.items.filter(y=>y.id!==x.id)}:bb));}} style={{background:"none",border:"none",color:"var(--red)",cursor:"pointer",fontSize:12}}>✕</button>}
                </div>
                {(o||editMode)&&<div style={{padding:"7px 9px",background:"#f0ebe0"}}>
                  {editMode&&<div style={{display:"flex",gap:10,alignItems:"center",marginBottom:6,flexWrap:"wrap"}}>
                    <span style={{display:"inline-flex",gap:3,alignItems:"center",fontSize:10,fontFamily:"Cinzel",color:"#555",letterSpacing:".04em"}} title="Hidden until your character reaches this level">LVL <ShNumInput value={x.lvl||""} onCommit={v=>updItem(b.id,x.id,{lvl:parseInt(v)||null})} placeholder="–" style={{width:34,fontSize:11}} className="sh-num"/></span>
                    <Switch on={!!x.ctrOn} onChange={v=>updItem(b.id,x.id,{ctrOn:v})} label="COUNTER"/>
                    {x.ctrOn&&<span style={{display:"inline-flex",gap:3,alignItems:"center",fontSize:9,fontFamily:"Cinzel",color:"#666"}}>USES <ShNumInput value={x.ctrMax||0} onCommit={v=>updItem(b.id,x.id,{ctrMax:parseInt(v)||0})} style={{width:38,fontSize:11}} className="sh-num"/></span>}
                    <Switch on={!!x.dcOn} onChange={v=>updItem(b.id,x.id,{dcOn:v})} label="DC"/>
                    {x.dcOn&&<span style={{display:"inline-flex",gap:3,alignItems:"center",fontSize:9,fontFamily:"Cinzel",color:"#666"}}>DC <ShNumInput value={x.dc||10} onCommit={v=>updItem(b.id,x.id,{dc:parseInt(v)||0})} style={{width:38,fontSize:11}} className="sh-num"/>
                      <ShInput value={x.dcLabel||""} onCommit={v=>updItem(b.id,x.id,{dcLabel:v})} placeholder="e.g. Wisdom save" className="sh-input-box" style={{width:110,fontSize:10}}/></span>}
                  </div>}
                  {o&&<><div className="sh-label">DESCRIPTION</div>
                  {editMode?<ShTextarea value={x.desc||""} onCommit={v=>updItem(b.id,x.id,{desc:v})} className="sh-input-box" style={{fontSize:12,minHeight:50,resize:"vertical"}}/>:<p style={{fontSize:12,color:"#2a2a3a",lineHeight:1.6,whiteSpace:"pre-wrap"}}>{x.desc||<em style={{opacity:.4}}>—</em>}</p>}</>}
                </div>}
              </div>);})}
              {editMode&&<button onClick={()=>updBox(b.id,{items:[...(b.items||[]),{id:Date.now(),name:"",desc:""}]})} style={{fontFamily:"Crimson Pro,serif",background:"rgba(255,255,255,0.4)",border:"1px dashed #b8a070",color:"#666",borderRadius:3,padding:"3px 8px",fontSize:11,cursor:"pointer",width:"100%",marginTop:3}}>+ Add</button>}
            </div>}
        </div>)}
        {editMode&&<div style={{display:"flex",flexDirection:"column",gap:6,justifyContent:"center",border:"2px dashed #b8a070",borderRadius:4,padding:12,minHeight:90}}>
          <button onClick={()=>setBoxes([...boxes,{id:"b_"+Date.now(),title:"NEW BOX",kind:"list",items:[]}])} style={{fontFamily:"Cinzel",fontSize:11,border:"1px solid #b8a070",background:"rgba(255,255,255,0.5)",borderRadius:3,padding:"6px",cursor:"pointer",color:"#5a3e1b"}}>+ New list box</button>
          <button onClick={()=>setBoxes([...boxes,{id:"b_"+Date.now(),title:"NOTES",kind:"text",text:""}])} style={{fontFamily:"Cinzel",fontSize:11,border:"1px solid #b8a070",background:"rgba(255,255,255,0.5)",borderRadius:3,padding:"6px",cursor:"pointer",color:"#5a3e1b"}}>+ New notes box</button>
        </div>}
      </div>
      {/* Armour + Currency + Inventory */}
      <div style={{display:"grid",gridTemplateColumns:"180px 1fr 1fr",gap:10,alignItems:"stretch"}}>
        <div className="sh" style={{gridColumn:1,gridRow:1}}>
          <div className="sh-section">EQUIPMENT / PROFICIENCIES</div>
          <div className="sh-label">ARMOUR</div>
          {[["light","Light"],["medium","Medium"],["heavy","Heavy"],["shields","Shields"]].map(([k,l])=><div key={k} style={{display:"flex",alignItems:"center",gap:6,marginBottom:4}}>
            <span className={`armor-check${(L.armorProf&&L.armorProf[k])?" on":""}`} onClick={()=>editMode&&togAP(k)} style={{cursor:editMode?"pointer":"default"}}>{(L.armorProf&&L.armorProf[k])?"✓":""}</span>
            <span style={{fontSize:12,color:"#2a2a3a"}}>{l}</span>
          </div>)}
          <div className="sh-label" style={{marginTop:6}}>WEAPONS</div>
          {editMode?<ShTextarea value={L.weaponsProf||""} onCommit={v=>commit("weaponsProf",v)} className="sh-input-box" style={{resize:"vertical",minHeight:40,fontSize:11}}/>:<p style={{fontSize:11,color:"#2a2a3a",lineHeight:1.5,whiteSpace:"pre-wrap",minHeight:20}}>{L.weaponsProf||<em style={{opacity:.4}}>—</em>}</p>}
          {[["toolsProf","TOOLS"],["languages","LANGUAGES"]].map(([f,lbl])=><React.Fragment key={f}>
            <div className="sh-label" style={{marginTop:8}}>{lbl}</div>
            {editMode?<ShTextarea value={L[f]||""} onCommit={v=>commit(f,v)} className="sh-input-box" style={{resize:"vertical",minHeight:40,fontSize:11}}/>:<p style={{fontSize:11,color:"#2a2a3a",lineHeight:1.5,whiteSpace:"pre-wrap",minHeight:20}}>{L[f]||<em style={{opacity:.4}}>—</em>}</p>}
          </React.Fragment>)}
        </div>
        <div className="sh" style={{gridColumn:2,gridRow:1}}>
          <div className="sh-section">COINS</div>
          {[["pp","Platinum"],["gp","Gold"],["sp","Silver"],["cp","Copper"]].map(([k,l])=><div key={k} style={{display:"flex",alignItems:"center",gap:6,marginBottom:5}}>
            <span style={{fontSize:10,fontFamily:"Cinzel",color:"#777",width:48}}>{l}</span>
            <QuickNum value={(L.currency&&L.currency[k])||0} onCommit={v=>setCurr(k,v)} style={{fontFamily:"Cinzel",color:"#2a2a3a",fontSize:14,fontWeight:600,flex:1,borderBottomColor:"#b8a070",width:"100%"}}/>
          </div>)}
          <div className="sh-label" style={{marginTop:5}}>ATTUNEMENTS</div>
          {(L.magicAttunements||["","",""]).map((v,i)=><div key={i} style={{display:"flex",gap:4,marginBottom:3}}>
            <span style={{fontSize:10,color:"#aaa"}}>◇</span>
            {editMode?<ShInput value={v||""} onCommit={nv=>setMagAtt(i,nv)} placeholder={`Item ${i+1}`} className="sh-input-box" style={{flex:1,fontSize:11}}/>:<div style={{fontSize:11,color:"#2a2a3a",flex:1}}>{v||<em style={{opacity:.35}}>—</em>}</div>}
          </div>)}
          <div className="sh-label" style={{marginTop:5}}>VALUABLES</div>
          <ShTextarea value={L.valuables||""} onCommit={v=>commit("valuables",v)} className="sh-input-box" style={{resize:"vertical",minHeight:40,fontSize:11}} placeholder="Gems, deeds, trinkets…"/>
        </div>
        <div className="sh" style={{gridColumn:3,gridRow:"1 / span 2",display:"flex",flexDirection:"column"}}>
          <div className="sh-section">INVENTORY</div>
          <ShTextarea value={L.inventory||""} onCommit={v=>commit("inventory",v)} className="sh-input-box" style={{resize:"vertical",minHeight:420,flex:1,fontSize:12,lineHeight:1.7}} placeholder="Click to add items…"/>
        </div>
      {/* Appearance (sits under Equipment + Coins) */}
      <div className="sh" style={{gridColumn:"1 / span 2",gridRow:2}}>
        <div className="sh-section">APPEARANCE & PERSONALITY</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:10}}>
          {[["charAge","AGE"],["charHair","HAIR"],["charEyes","EYES"],["charBuild","BUILD"],["charClothing","CLOTHING"],["charVoice","VOICE/ACCENT"],["charPersonality","PERSONALITY"],["charGoal","GOAL OR SECRET"]].map(([f,l])=><div key={f}>
            <div className="sh-label">{l}</div>
            {editMode?<ShInput value={L[f]||""} onCommit={v=>commit(f,v)} className="sh-input-box" style={{fontSize:11}}/>:<div style={{fontSize:11,color:"#2a2a3a",minHeight:16}}>{L[f]||<em style={{opacity:.35}}>—</em>}</div>}
          </div>)}
        </div>
        <div className="sh-label">HISTORY & BACKSTORY</div>
        {editMode?<ShTextarea value={L.historyPersonality||""} onCommit={v=>commit("historyPersonality",v)} className="sh-input-box" style={{resize:"vertical",minHeight:100,fontSize:12,lineHeight:1.6}} placeholder="Backstory..."/>:<p style={{fontSize:12,color:"#2a2a3a",lineHeight:1.6,whiteSpace:"pre-wrap",minHeight:40}}>{L.historyPersonality||<em style={{opacity:.4}}>—</em>}</p>}
        <div className="sh-label" style={{marginTop:6}}>ALIGNMENT</div>
        {editMode?<ShInput value={L.alignment||""} onCommit={v=>commit("alignment",v)} className="sh-input-box" style={{fontSize:12}}/>:<div style={{fontSize:12,color:"#2a2a3a"}}>{L.alignment||<em style={{opacity:.35}}>—</em>}</div>}
      </div>
      </div>
    </div>
    {/* Characters from your past */}
    <div style={{padding:"0 14px"}}><PastSection char={L} commit={commit} lore={lore} setLore={setLore} myPast={myPast} setMyPast={setMyPast} onOpenLore={onOpenLore} isDM={isDM}/></div>
    {lvlPop&&<div style={{position:"fixed",inset:0,zIndex:3000,background:"rgba(0,0,0,0.55)",display:"flex",alignItems:"center",justifyContent:"center",padding:16}} onClick={()=>setLvlPop(null)}>
      <div onClick={e=>e.stopPropagation()} style={{background:"var(--parch)",border:"2px solid var(--gold2)",borderRadius:10,padding:24,width:"min(420px,100%)",textAlign:"center",boxShadow:"0 8px 40px rgba(0,0,0,0.6)"}}>
        <div style={{fontSize:32}}>⚔</div>
        <h3 style={{fontFamily:"Cinzel",color:"var(--gold)",fontSize:18,margin:"6px 0 4px"}}>Level {lvlPop.level}!</h3>
        <p style={{fontSize:13,color:"var(--ink2)",marginBottom:10}}>New on your sheet:</p>
        {lvlPop.got.map((g,i)=><div key={i} style={{fontFamily:"Cinzel",fontSize:13,color:"var(--ink)",padding:"5px 0",borderTop:i?"1px solid var(--border)":"none"}}>{g.name} <span style={{fontSize:10,color:"var(--ink3)"}}>· {g.box}</span></div>)}
        <button className="btn act" onClick={()=>setLvlPop(null)} style={{marginTop:14}}>Brilliant</button>
      </div>
    </div>}
    <div style={{height:30}}/>
  </div>);
}

/* ════ CHARACTERS FROM YOUR PAST (with "Unlock Past") ════ */
function PastSection({char,commit,lore,setLore,myPast,setMyPast,onOpenLore,isDM}){
  const [key,setKey]=useState("");const [err,setErr]=useState("");
  const [adding,setAdding]=useState(false);const [nm,setNm]=useState("");const [into,setInto]=useState("");
  const owner=char.pastOwner||null;
  const unlocked=!!owner&&myPast===owner;
  const secs=(lore&&lore.__customSections)||[];
  const secOwnerOf=id=>sectionOwner(secs,id);
  const mySecs=owner?secs.filter(c=>secOwnerOf(c.id)===owner):[];
  const seeAll=unlocked||isDM;
  const people=[];mySecs.forEach(c=>(lore[c.id]||[]).forEach(e=>{if(seeAll||entryVisible(e))people.push({e,sec:c});}));
  const tryUnlock=()=>{
    const who=PAST_KEYS[key.trim()];
    if(!who){setErr("That key isn't right.");return;}
    if(owner&&owner!==who){setErr(`That key belongs to ${who}, not this character.`);return;}
    const sid=pastSecId(who);
    setLore(prev=>{
      const cs=prev.__customSections||[];
      const mine=cs.find(c=>c.owner===who||c.id===sid||(c.parent==="people"&&ownerByLabel(c.label)===who));
      if(mine)return mine.owner===who?prev:{...prev,__customSections:cs.map(c=>c.id===mine.id?{...c,owner:who}:c)};
      return{...prev,[sid]:prev[sid]||[],__customSections:[...cs,{id:sid,label:`${possessive(who)} Past`,icon:"📜",parent:"people",layout:"ally",owner:who}]};
    });
    if(!owner)commit("pastOwner",who);
    try{localStorage.setItem("sf_past",who);}catch(e){}
    setMyPast(who);setKey("");setErr("");
  };
  const add=()=>{
    if(!nm.trim())return;const sid=into||pastSecId(owner);
    const e={...EMPTY_ENTRY(),name:nm.trim(),reveal:{entry:false,fields:{},spans:{}},_ts:Date.now()};
    const sid2=into||(mySecs.find(c=>c.parent==="people")||{}).id||sid;
    setLore(prev=>({...prev,[sid2]:[...(prev[sid2]||[]),e]}));
    setNm("");setAdding(false);setTimeout(()=>onOpenLore&&onOpenLore(sid2,e.id),50);
  };
  return(<div className="sh" style={{marginTop:2}}>
    <div className="sh-section">CHARACTERS FROM YOUR PAST</div>
    {owner&&<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(120px,1fr))",gap:8,marginBottom:10}}>
      {people.map(({e,sec})=>{const pic=(seeAll||fieldVisible(e,"portrait"))?imgSrc(e.portrait):null;const hid=!entryVisible(e);
        return(<div key={e.id} onClick={()=>onOpenLore&&onOpenLore(sec.id,e.id)} title={`Open in Lore · ${sec.label}`} style={{cursor:"pointer",border:`1px solid ${hid?"#a3241e":"#b8a070"}`,borderRadius:4,overflow:"hidden",background:"rgba(255,255,255,0.45)"}}>
          <div style={{height:110,background:"#e8d9b8",display:"flex",alignItems:"center",justifyContent:"center"}}>{pic?<img src={pic} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>:<span style={{fontSize:30,opacity:.35}}>👤</span>}</div>
          <div style={{padding:"5px 7px"}}><div style={{fontFamily:"Cinzel",fontSize:11.5,color:hid?"#a3241e":"#2a2a3a"}}>{hid&&"🔒 "}{e.name||"Unnamed"}</div><div style={{fontSize:9.5,color:"#777"}}>{sec.label}</div></div>
        </div>);})}
      {!people.length&&<div style={{fontSize:12,color:"#777",fontStyle:"italic",gridColumn:"1/-1"}}>{seeAll?"No one yet.":"Nothing revealed yet."}</div>}
    </div>}
    {unlocked?<div style={{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center"}}>
      {adding?<>
        <input autoFocus value={nm} onChange={e=>setNm(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")add();if(e.key==="Escape")setAdding(false);}} placeholder="Name…" className="sh-input-box" style={{width:180,fontSize:12}}/>
        {mySecs.length>1&&<select value={into} onChange={e=>setInto(e.target.value)} className="sh-input-box" style={{width:"auto",fontSize:12}}>{mySecs.map(c=><option key={c.id} value={c.parent==="people"?"":c.id}>{c.label}</option>)}</select>}
        <button className="btn" onClick={add} style={{fontSize:11,color:"#2a2a3a"}}>✓ Add</button><button className="btn" onClick={()=>setAdding(false)} style={{fontSize:11,color:"#2a2a3a"}}>✕</button>
      </>:<button className="btn" onClick={()=>setAdding(true)} style={{fontSize:11,color:"#2a2a3a"}}>+ Add someone from my past</button>}
      <span style={{flex:1}}/>
      <span style={{fontSize:11,color:"#5a3e1b",fontFamily:"Cinzel"}}>📜 Unlocked as {owner}</span>
      <button className="btn" onClick={()=>{try{localStorage.removeItem("sf_past");}catch(e){}setMyPast(null);}} style={{fontSize:11,color:"#2a2a3a"}}>🔒 Lock</button>
    </div>
    :<div style={{display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"}}>
      <span style={{fontSize:10,fontFamily:"Cinzel",color:"#555",letterSpacing:".06em"}}>UNLOCK PAST</span>
      <input type="password" value={key} onChange={e=>setKey(e.target.value)} onKeyDown={e=>e.key==="Enter"&&tryUnlock()} placeholder="Your key…" className="sh-input-box" style={{width:160,fontSize:12}}/>
      <button className="btn" onClick={tryUnlock} style={{fontSize:11,color:"#2a2a3a"}}>Unlock</button>
      {err&&<span style={{fontSize:11,color:"#a3241e"}}>{err}</span>}
      {!owner&&<span style={{fontSize:11,color:"#777",fontStyle:"italic"}}>Unlock to start writing your backstory characters.</span>}
    </div>}
  </div>);
}

/* ════ DM TAB ════ */
/* ════ ONE-TIME UPGRADE: text that was still hidden moves into the DM Description ════ */
const OLD_FIELD_LABELS={description:"Description",lore:"Background & Lore",abilities:"Abilities & Powers",tactics:"Tactics & Weaknesses",relationships:"Relationships & Connections",featsWithParty:"Feats with the Party",keyEvents:"Key Events"};
function hiddenPieces(t,sp){
  t=t||"";const norm=normSpans(sp,t.length);const out=[];let pos=0;
  norm.forEach(([x,y])=>{if(x>pos)out.push(t.slice(pos,x));pos=y;});if(pos<t.length)out.push(t.slice(pos));
  return out.map(x=>x.trim()).filter(Boolean);
}
function migrateDmVersions(d){
  if(!d||!d.lore||d.dmVersionsV3)return null;
  const lore={...d.lore};
  Object.keys(lore).forEach(sec=>{
    if(sec==="__customSections"||!Array.isArray(lore[sec]))return;
    lore[sec]=lore[sec].map(e=>{
      if(!e||!(e.dmDescription||"").trim())return e;
      const n={...e,dm_description:[(e.dm_description||"").trim(),e.dmDescription.trim()].filter(Boolean).join("\n\n")};delete n.dmDescription;
      if(e.reveal&&e.reveal.spans&&e.reveal.spans.dmDescription){const sp={...e.reveal.spans};const off=(e.dm_description||"").trim()?(e.dm_description.trim().length+2):0;sp.dm_description=sp.dmDescription.map(([a,b])=>[a+off,b+off]);delete sp.dmDescription;n.reveal={...e.reveal,spans:sp};}
      n._ts=Date.now();return n;
    });
  });
  return{...d,dmVersionsV3:true,lore};
}
function migrateDmDescriptions(d){
  if(!d||!d.lore||d.dmDescV2)return null;
  const lore={...d.lore};let changed=false;
  Object.keys(lore).forEach(sec=>{
    if(sec==="__customSections"||!Array.isArray(lore[sec]))return;
    lore[sec]=lore[sec].map(e=>{
      if(!e||!e.reveal)return e;
      const spans=e.reveal.spans||{};let n=null;const secret=[];
      Object.keys(OLD_FIELD_LABELS).forEach(f=>{
        const t=e[f]||"";if(!t.trim())return;
        const hid=hiddenPieces(t,spans[f]);if(!hid.length)return;
        n=n||{...e};n[f]=visibleText(t,spans[f]||[]);
        secret.push(f==="description"?hid.join("\n\n"):"("+OLD_FIELD_LABELS[f]+") "+hid.join("\n\n"));
      });
      if(!n)return e;
      changed=true;
      n.dm_description=[(e.dm_description||"").trim(),(e.dmDescription||"").trim(),...secret].filter(Boolean).join("\n\n");delete n.dmDescription;
      const ns={...spans};Object.keys(OLD_FIELD_LABELS).forEach(f=>delete ns[f]);
      n.reveal={...e.reveal,spans:ns};n._ts=Date.now();
      return n;
    });
  });
  return{...d,dmDescV2:true,dmVersionsV3:true,lore:changed?lore:d.lore};
}

/* ════ ONE-TIME UPGRADE: old Oghill settlements → wiki entries placed on the barony map ════ */
function migratePlaces(d){
  if(!d||!d.lore||d.placesV2)return null;
  const lore={...d.lore};
  let regions=lore.regions?[...lore.regions]:[{...DEFAULT_OGHILL_REGION}];
  regions=regions.map(r=>r.placeType?r:{...r,placeType:placeType(r),parentId:r.parentId==null?null:r.parentId});
  const rev=d.baronyRevealed||{bai:true};
  let sets=[...(lore.settlements||[])];
  if(regions.some(r=>r.id==="oghill_barony")){
    BARONY_SETTLEMENTS.forEach(s=>{
      const isRev=!!(rev[s.id]||s.revealed);
      const pos={placeId:"oghill_barony",mapX:s.ix,mapY:1050-s.iy,iconKey:s.icon||null};
      if(sets.some(e=>String(e.id)==="set_"+s.id))return;
      const idx=sets.findIndex(e=>e.placeId==null&&(e.name||"").trim().toLowerCase()===s.name.toLowerCase());
      if(idx>=0){
        let e={...sets[idx],...pos,hoverLore:sets[idx].hoverLore||s.desc};
        e=isRev?(e.reveal?{...e,reveal:{...e.reveal,entry:true,fields:{...(e.reveal.fields||{}),hoverLore:true}}}:e):hideKeepContent(e);
        sets[idx]={...e,_ts:Date.now()};
      }else sets.push({...EMPTY_ENTRY(),id:"set_"+s.id,name:s.name,...pos,hoverLore:s.desc,reveal:{entry:isRev,fields:{hoverLore:true,portrait:true},spans:{}},_ts:Date.now()});
    });
  }
  return{...d,placesV2:true,lore:{...lore,regions,settlements:sets}};
}

/* ════ ROOT APP ════ */
function App(){
  const [sbCfg,setSbCfg]=useState(()=>{const c=getSBConfig();if(c){initSB(c.url,c.key);return c;}return null;});
  const [data,setData]=useState(null);
  const [syncStatus,setSyncStatus]=useState("connecting"); // connecting | live | poll | saving | offline
  const S=useRef({synced:{},ready:false,timer:null,pushing:false,again:false,live:false,lastSeen:null,failed:false}).current;
  const dataRef=useRef(null);
  const [page,setPage]=useState("map");
  const [ready,setReady]=useState(false);
  const [visited,setVisited]=useState({map:true});
  const [myPast,setMyPast]=useState(()=>{try{return localStorage.getItem("sf_past")||null;}catch(e){return null;}});
  const [loreTarget,setLoreTarget]=useState(null);
  const [charIdx,setCharIdx]=useState(0);
  const [isDM,setIsDM]=useState(()=>{try{return localStorage.getItem("sf_dm")==="1";}catch(e){return false;}});
  // Sync isDM from sessionStorage
  useEffect(()=>{const check=()=>{try{setIsDM(localStorage.getItem("sf_dm")==="1");}catch(e){}};window.addEventListener("storage",check);return()=>window.removeEventListener("storage",check);},[]);

  // Themes
  const THEMES={
    default:{name:"Steel & Fire",dark:"#1a1208",dark2:"#2a1e0a",parch:"#f5ede0",parch2:"#efe4ce",parch3:"#e8d9b8",parch4:"#ddc99a",gold:"#9a7020",gold2:"#c49a30",gold3:"#e8c860",ink:"#2c1a06",ink2:"#5a3e1b",ink3:"#8a6a3a"},
    midnight:{name:"Midnight",dark:"#0a0d1a",dark2:"#111828",parch:"#e8eaf6",parch2:"#dde0f0",parch3:"#cdd2e8",parch4:"#b8bfdb",gold:"#5c6bc0",gold2:"#7986cb",gold3:"#9fa8da",ink:"#1a1f3a",ink2:"#2d3561",ink3:"#5c6490"},
    forest:{name:"Forest",dark:"#0a160a",dark2:"#0f2010",parch:"#edf5ec",parch2:"#dceeda",parch3:"#c9e3c6",parch4:"#b0d4ac",gold:"#2e7d32",gold2:"#43a047",gold3:"#81c784",ink:"#0d1f0d",ink2:"#1b4d1e",ink3:"#4a7c4e"},
    crimson:{name:"Crimson",dark:"#1a0a0a",dark2:"#2a0f0f",parch:"#f5e8e8",parch2:"#eedada",parch3:"#e4c8c8",parch4:"#d4a8a8",gold:"#b71c1c",gold2:"#e53935",gold3:"#ef9a9a",ink:"#2c0a0a",ink2:"#5a1a1a",ink3:"#8a4040"},
  };
  const [themeKey,setThemeKey]=useState(()=>localStorage.getItem("sf_theme")||"default");
  const [showTheme,setShowTheme]=useState(false);
  useEffect(()=>{
    const t=THEMES[themeKey]||THEMES.default;const r=document.documentElement.style;
    Object.entries({dark:t.dark,"dark2":t.dark2,parch:t.parch,parch2:t.parch2,parch3:t.parch3,parch4:t.parch4,gold:t.gold,"gold2":t.gold2,"gold3":t.gold3,ink:t.ink,"ink2":t.ink2,"ink3":t.ink3}).forEach(([k,v])=>r.setProperty(`--${k}`,v));
    localStorage.setItem("sf_theme",themeKey);
  },[themeKey]);

  // Load data
  const hideLoader=()=>{
    if(window.hideAppLoader)window.hideAppLoader();
    else{const ld=document.getElementById("loading-screen");if(ld)ld.style.display="none";}
  };

  // Apply changes that came from someone else
  const applyRemote=useCallback(rows=>{
    const changes=[];
    rows.forEach(({id,val})=>{
      const str=(val===null||val===undefined)?undefined:stableStr(val);
      if(S.synced[id]===str)return;
      if(str===undefined)delete S.synced[id];else S.synced[id]=str;
      changes.push([id,val]);
    });
    if(!changes.length)return;
    setData(cur=>{if(!cur)return cur;const P=physFromData(cur);changes.forEach(([id,val])=>{if(val===null||val===undefined)delete P[id];else P[id]=val;});return dataFromPhys(P);});
  },[]);
  const noteSeen=ts=>{if(ts&&(!S.lastSeen||ts>S.lastSeen))S.lastSeen=ts;};
  const rowToChange=r=>{const w=r.data||{};return{id:r.id,val:w.del?null:(w.v===undefined?null:w.v),by:w.by};};

  // Push whatever changed locally
  const pushNow=useCallback(async(keepalive)=>{
    if(!S.ready||!dataRef.current||!sbCfg)return;
    if(S.pushing){S.again=true;return;}
    const P=physFromData(dataRef.current);
    const changed=Object.keys(P).filter(id=>stableStr(P[id])!==S.synced[id]);
    const removed=Object.keys(S.synced).filter(id=>!(id in P));
    if(!changed.length&&!removed.length)return;
    S.pushing=true;setSyncStatus("saving");
    const sb=getSB();const t0=Date.now();
    const row=(id,v,n)=>({id,data:v===null?{del:true,by:CLIENT_ID,at:t0}:{v,by:CLIENT_ID,at:t0},updated_at:new Date(t0+n).toISOString()});
    try{
      // pictures first, then entries, then list orders, then removals
      const imgs=changed.filter(id=>id.indexOf("sf2_img:")===0);
      for(const id of imgs){await sbUpsertRows(sb,[row(id,P[id],0)],keepalive);S.synced[id]=stableStr(P[id]);}
      const main=changed.filter(id=>id.indexOf("sf2_img:")!==0&&id.indexOf("sf2_order:")!==0&&id!=="sf2_meta:sections");
      for(let i=0;i<main.length;i+=25){const ch=main.slice(i,i+25);await sbUpsertRows(sb,ch.map(id=>row(id,P[id],1)),keepalive);ch.forEach(id=>{S.synced[id]=stableStr(P[id]);});}
      const meta=changed.filter(id=>id.indexOf("sf2_order:")===0||id==="sf2_meta:sections");
      if(meta.length){await sbUpsertRows(sb,meta.map(id=>row(id,P[id],2)),keepalive);meta.forEach(id=>{S.synced[id]=stableStr(P[id]);});}
      if(removed.length){await sbUpsertRows(sb,removed.map(id=>row(id,null,3)),keepalive);removed.forEach(id=>{delete S.synced[id];});}
      S.failed=false;setSyncStatus(S.live?"live":"poll");
    }catch(e){
      console.warn("Sync push failed:",e);S.failed=true;setSyncStatus("offline");
      clearTimeout(S.timer);S.timer=setTimeout(()=>pushNow(),8000);
    }finally{
      S.pushing=false;
      if(S.again){S.again=false;pushNow();}
    }
  },[sbCfg]);

  // Start up: show local copy instantly, then load the live campaign
  useEffect(()=>{
    const localData=localLoad()||DEFAULT_DATA;
    setData(localData);dataRef.current=localData;
    hideLoader();
    if(!sbCfg)return;
    const sb=getSB();let cancelled=false,stopRT=null,pollT=null,initT=null;
    loadAssets(sb).catch(()=>{});

    const poll=async()=>{
      if(cancelled)return;
      try{
        const since=S.lastSeen?new Date(new Date(S.lastSeen).getTime()-120000).toISOString():null;
        const rows=await sbFetchDocs(sb,since);
        rows.forEach(r=>noteSeen(r.updated_at));
        applyRemote(rows.map(rowToChange).filter(c=>c.by!==CLIENT_ID));
        if(!S.failed)setSyncStatus(S.pushing?"saving":S.live?"live":"poll");
      }catch(e){if(!S.live)setSyncStatus("offline");}
      if(!cancelled)pollT=setTimeout(poll,S.live?30000:4000);
    };

    const init=async()=>{
      try{
        setSyncStatus("connecting");
        const rows=await sbFetchDocs(sb,null);
        if(cancelled)return;
        let d;
        if(rows.length){
          const P={};
          rows.forEach(r=>{noteSeen(r.updated_at);const c=rowToChange(r);if(c.val===null)return;P[r.id]=c.val;S.synced[r.id]=stableStr(c.val);});
          d=dataFromPhys(P);
        }else{
          // First run on the new system: convert the old save (it's left untouched as a backup)
          const old=await dbLoad(sb).catch(()=>null);
          d=old?{...old}:{...localData};
        }
        // Keep anything that only existed on this device (e.g. DM notes the old save never uploaded)
        Object.keys(localData).forEach(k=>{if(!(k in d))d[k]=localData[k];});
        if(!d.lore)d.lore={};if(!d.characters)d.characters=[];
        dataRef.current=d;setData(d);
        S.ready=true;setReady(true);setSyncStatus("poll");
        stopRT=connectRealtime(sb,async(id,type,wrapped,ts)=>{
          if(!id||String(id).indexOf("sf2_")!==0)return;
          noteSeen(ts);
          if(type==="DELETE"){applyRemote([{id,val:null}]);return;}
          let w=wrapped;
          if(!w){const r=await sbFetchDoc(sb,id).catch(()=>null);if(!r)return;w=r.data;}
          if(!w||w.by===CLIENT_ID)return;
          applyRemote([{id,val:w.del?null:w.v}]);
        },st=>{S.live=st==="live";if(!S.pushing&&!S.failed)setSyncStatus(st);});
        pollT=setTimeout(poll,4000);
        pushNow();
      }catch(e){
        console.warn("Campaign load failed, retrying:",e);
        setSyncStatus("offline");
        if(!cancelled)initT=setTimeout(init,8000);
      }
    };
    init();
    const onHide=()=>{clearTimeout(S.timer);pushNow(true);};
    window.addEventListener("pagehide",onHide);
    return()=>{cancelled=true;stopRT&&stopRT();clearTimeout(pollT);clearTimeout(initT);window.removeEventListener("pagehide",onHide);};
  },[sbCfg]);

  // Save locally + push to everyone shortly after any change
  useEffect(()=>{
    if(!data)return;
    dataRef.current=data;localSave(data);
    if(!S.ready)return;
    clearTimeout(S.timer);S.timer=setTimeout(()=>pushNow(),700);
  },[data]);

  const setMapItems=useCallback(fn=>setData(d=>({...d,mapItems:typeof fn==="function"?fn(d.mapItems):fn})),[]);
  const setLore=useCallback(fn=>setData(d=>({...d,lore:typeof fn==="function"?fn(d.lore):fn})),[]);
  const updateChar=useCallback((idx,ch)=>setData(d=>{const cs=[...d.characters];cs[idx]=ch;return{...d,characters:cs};}),[]);

  // One-time upgrade to the kingdom/region/barony layout
  useEffect(()=>{if(!ready||!data)return;const m=migratePlaces(data);if(m){setData(m);return;}const m2=migrateDmDescriptions(data);if(m2){setData(m2);return;}const m3=migrateDmVersions(data);if(m3)setData(m3);},[ready,data&&data.placesV2,data&&data.dmDescV2,data&&data.dmVersionsV3]);
  const openLore=(sec,id)=>{setLoreTarget({s:sec,id,n:Date.now()});setPage("lore");};
  useEffect(()=>{setVisited(v=>v[page]?v:{...v,[page]:true});},[page]);
  const linkCtxVal=useMemo(()=>{
    const lore=(data&&data.lore)||{};const places=getPlaces(lore);
    return{entries:linkEntries(lore),open:openLore,
      can:(sec,id)=>{const e=(lore[sec]||[]).find(x=>String(x.id)===String(id));if(!e)return false;if(isDM)return true;return sec==="regions"?placeVisible(places,e,false):entryVisible(e);}};
  },[data&&data.lore,isDM]);

  if(!sbCfg)return <SetupScreen onSave={cfg=>{initSB(cfg.url,cfg.key);setSbCfg(cfg);}}/>;
  if(!data)return(
    <div style={{height:"100vh",background:"var(--dark)",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{color:"var(--gold3)",fontFamily:"Cinzel",fontSize:18,letterSpacing:"0.1em"}}>⚔ STEEL & FIRE</div>
    </div>
  );

  const syncColor={connecting:"var(--gold3)",live:"rgba(110,210,110,0.9)",poll:"rgba(110,210,110,0.9)",saving:"var(--gold3)",offline:"#ff7a6a"}[syncStatus]||"var(--gold3)";
  const syncLabel={connecting:"● CONNECTING",live:"● LIVE",poll:"● SYNCED",saving:"● SAVING…",offline:"⚠ OFFLINE — RETRYING"}[syncStatus]||"";
  const syncTitle={live:"Live — changes appear for everyone instantly",poll:"Synced — checking for changes every few seconds",saving:"Saving your change…",offline:"Can't reach the database. Your changes are kept on this device and will upload when it reconnects.",connecting:"Connecting…"}[syncStatus];

  const NAV=[{id:"map",label:"Map",icon:"🗺"},{id:"lore",label:"Lore",icon:"📜"},{id:"chars",label:"Characters",icon:"⚔"}];

  return(<LinkCtx.Provider value={linkCtxVal}><div style={{display:"flex",flexDirection:"column",height:"100%",background:"var(--dark)"}}>
    {/* Header */}
    <header className="sf-hdr">
      <h1 style={{fontSize:16,letterSpacing:"0.16em",color:"var(--gold3)",whiteSpace:"nowrap",fontFamily:"Cinzel",textShadow:"0 0 16px rgba(200,160,40,0.3)"}}>⚔ STEEL & FIRE</h1>
      <div style={{width:1,height:20,background:"var(--border2)"}}/>
      <nav className="sf-nav">
        {NAV.map(n=><button key={n.id} onClick={()=>setPage(n.id)} className={`btn${page===n.id?" act":""}`} style={{padding:"4px 12px",fontSize:11,fontFamily:"Cinzel",letterSpacing:"0.04em"}}>{n.icon} {n.label}</button>)}
        {/* Tales tab */}
        <button onClick={()=>setPage("tales")} className={`btn${page==="tales"?" act":""}`} style={{padding:"4px 12px",fontSize:11,fontFamily:"Cinzel",letterSpacing:"0.04em",borderColor:"rgba(139,26,26,0.5)",color:page==="tales"?"var(--gold3)":"rgba(200,120,100,0.7)"}}>📖 Tales</button>
        <button onClick={()=>setPage("dm")} className={`btn${page==="dm"?" act":""}`} style={{padding:"4px 12px",fontSize:11,fontFamily:"Cinzel",letterSpacing:"0.04em",borderColor:"rgba(80,0,0,0.6)",color:page==="dm"?"#ff9999":"rgba(200,80,80,0.5)"}}>⚔ DM</button>
      </nav>
      {page==="chars"&&<div style={{display:"flex",gap:3,marginLeft:4}}>
        {data.characters.map((c,i)=><button key={c.id} onClick={()=>setCharIdx(i)} className={`btn${charIdx===i?" act":""}`} style={{padding:"3px 10px",fontSize:11,fontFamily:"Cinzel"}}>{c.name||`Player ${i+1}`}</button>)}
      </div>}
      <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:6}}>
        <span title={syncTitle} style={{fontSize:9,color:syncColor,fontFamily:"Cinzel",letterSpacing:"0.06em",transition:"color .3s",minWidth:60,textAlign:"right",cursor:"default"}}>{syncLabel}</span>
        <button onClick={()=>setShowTheme(t=>!t)} className={`btn${showTheme?" act":""}`} style={{fontSize:10,padding:"3px 8px",fontFamily:"Cinzel"}}>🎨</button>
        <button onClick={()=>{if(confirm("Change DB settings?\\nThis will reload.")){localStorage.removeItem(SB_KEY);window.location.reload();}}} className="btn" style={{fontSize:10,padding:"3px 8px",fontFamily:"Cinzel"}}>⚙</button>
        <button onClick={()=>{const j=JSON.stringify(data,null,2);const b=new Blob([j],{type:"application/json"});const u=URL.createObjectURL(b);const a=document.createElement("a");a.href=u;a.download="steelfire-backup.json";a.click();URL.revokeObjectURL(u);}} className="btn" style={{fontSize:10,padding:"3px 8px",fontFamily:"Cinzel"}}>⬇</button>
        <label className="btn" style={{fontSize:10,padding:"3px 8px",fontFamily:"Cinzel",cursor:"pointer"}}>⬆<input type="file" accept=".json" style={{display:"none"}} onChange={e=>{const f=(e.target.files&&e.target.files[0]);if(!f)return;const r=new FileReader();r.onload=ev=>{try{const p=JSON.parse(ev.target.result);if(confirm("Replace all data with import?\\nThis cannot be undone.")){setData(p);localSave(p);}}catch{alert("Invalid file.");}};r.readAsText(f);e.target.value="";}}/></label>
      </div>
    </header>

    {/* Main */}
    <main style={{flex:1,minHeight:0,overflow:"hidden",padding:8,background:"var(--dark)"}}>
      {visited.map&&<div style={{height:"100%",display:page==="map"?"block":"none"}}><MapExplorer data={data} isDM={isDM} onOpenLore={openLore}/></div>}
      {visited.lore&&<div style={{height:"100%",display:page==="lore"?"block":"none"}}><LorePanel lore={data.lore} setLore={setLore} characters={data.characters} readOnly={false} dmMode={false} openTarget={loreTarget} myPast={myPast}/></div>}
      {visited.chars&&<div style={{height:"100%",display:page==="chars"?"block":"none"}}><CharSheet char={data.characters[charIdx]} onChange={c=>updateChar(charIdx,c)} lore={data.lore} setLore={setLore} myPast={myPast} setMyPast={setMyPast} onOpenLore={openLore} isDM={isDM}/></div>}
      {visited.tales&&<div style={{height:"100%",display:page==="tales"?"block":"none"}}><TalesPanel/></div>}
      {visited.dm&&<div style={{height:"100%",display:page==="dm"?"block":"none"}}><DMTab data={data} setData={setData} lore={data.lore} setLore={setLore} onAuth={setIsDM} characters={data.characters}/></div>}
    </main>

    {/* Theme panel */}
    {showTheme&&<div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:2000,display:"flex",alignItems:"center",justifyContent:"center"}} onClick={()=>setShowTheme(false)}>
      <div style={{background:"var(--parch)",border:"2px solid var(--gold2)",borderRadius:10,padding:24,width:420,boxShadow:"0 8px 40px rgba(0,0,0,0.6)"}} onClick={e=>e.stopPropagation()}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
          <h3 style={{fontFamily:"Cinzel",fontSize:15,color:"var(--gold)"}}>🎨 Colour Theme</h3>
          <button onClick={()=>setShowTheme(false)} style={{background:"none",border:"none",cursor:"pointer",fontSize:18,color:"var(--ink3)"}}>✕</button>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
          {Object.entries(THEMES).map(([key,t])=><div key={key} onClick={()=>setThemeKey(key)} style={{padding:"10px 14px",borderRadius:6,cursor:"pointer",border:`2px solid ${themeKey===key?"var(--gold2)":"transparent"}`,background:`linear-gradient(135deg,${t.dark2} 0%,${t.dark2} 40%,${t.parch3} 100%)`,display:"flex",alignItems:"center",gap:8}}>
            <div style={{display:"flex",gap:3}}>{[t.dark2,t.gold2,t.parch,t.gold3].map((c,i)=><div key={i} style={{width:12,height:12,borderRadius:"50%",background:c,border:"1px solid rgba(255,255,255,0.2)"}}/>)}</div>
            <span style={{fontFamily:"Cinzel",fontSize:11,color:themeKey===key?"var(--gold3)":"rgba(255,255,255,0.7)"}}>{t.name}</span>
            {themeKey===key&&<span style={{marginLeft:"auto",color:"var(--gold3)",fontSize:12}}>✓</span>}
          </div>)}
        </div>
      </div>
    </div>}
  </div></LinkCtx.Provider>);
}


class ErrorBoundary extends React.Component{
  constructor(props){
    super(props);
    this.state={error:null};
  }
  componentDidCatch(e,info){
    this.setState({error:e});
    console.error("React error:",e,info);
  }
  render(){
    if(this.state.error){
      return React.createElement("div",{style:{position:"fixed",inset:0,background:"#1a0808",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:20,fontFamily:"monospace",color:"#ff9999"}},
        React.createElement("div",{style:{fontSize:20,marginBottom:16}},"App Error - send this to Harvey:"),
        React.createElement("pre",{style:{fontSize:11,background:"rgba(0,0,0,0.5)",padding:16,borderRadius:4,maxWidth:"90%",overflow:"auto",whiteSpace:"pre-wrap"}},
          String(this.state.error)
        ),
        React.createElement("button",{onClick:()=>this.setState({error:null}),style:{marginTop:16,padding:"8px 20px",background:"#8b1a1a",border:"none",color:"white",borderRadius:4,cursor:"pointer"}},"Retry")
      );
    }
    return this.props.children;
  }
}
ErrorBoundary.getDerivedStateFromError=function(e){return{error:e};};

// Babel compiled successfully - app is mounting
console.log("Steel & Fire: React mounted");
const _ld=document.getElementById("loading-screen");
if(_ld)setTimeout(()=>{_ld.style.display="none";},500);

const DEFAULT_DATA={
  mapItems:[],mapImage:null,
  lore:{regions:[{...DEFAULT_OGHILL_REGION}],allies:[],enemies:[],factions:[],settlements:[],history:[],sessions:[],terrain:[]},
  characters:[
    {id:1,name:"",background:"",charClass:"",species:"",subclass:"",level:1,ac:10,shield:false,hpCurrent:0,hpTemp:0,hpMax:0,hitDieMax:"d8",hitDieSpent:0,deathMarks:Array(10).fill(0),statRows:[{id:1,label:"INITIATIVE",value:""},{id:2,label:"SPEED",value:"30"},{id:3,label:"SIZE",value:"Medium"},{id:4,label:"PASSIVE PERCEPTION",value:""},{id:5,label:"EXPLOITS KNOWN",value:""},{id:6,label:"EXPLOIT DIE",value:"d6"},{id:7,label:"EXPLOIT DICE AVAIL",value:""},{id:8,label:"KNACKS KNOWN",value:""},{id:9,label:"PROF BONUS",value:"2"}],profBonus:2,str:10,dex:10,con:10,int:10,wis:10,cha:10,savingThrows:{},skills:{},weapons:[{id:1,name:"",attackBonus:"",damage:"",notes:""},{id:2,name:"",attackBonus:"",damage:"",notes:""},{id:3,name:"",attackBonus:"",damage:"",notes:""}],classFeatures:[],knacks:[],exploits:[],exploitDC:10,featsArr:[],armorProf:{light:false,medium:false,heavy:false,shields:false},weaponsProf:"",toolsProf:"",spellcastingAbility:"",spellcastingMod:"",spellDC:"",spellAtkMod:"",spellSlots:[{level:1,total:"",used:""},{level:2,total:"",used:""},{level:3,total:"",used:""},{level:4,total:"",used:""},{level:5,total:"",used:""},{level:6,total:"",used:""},{level:7,total:"",used:""},{level:8,total:"",used:""},{level:9,total:"",used:""}],spells:"",currency:{pp:0,gp:0,sp:0,cp:0},valuables:"",inventory:"",magicAttunements:["","",""],portrait:null,charAge:"",charHair:"",charEyes:"",charBuild:"",charClothing:"",charVoice:"",charPersonality:"",charGoal:"",historyPersonality:"",alignment:"",languages:"",notes:"",speciesTraits:"",feats:"",exploitDiceUsed:[]},
    {id:2,name:"",level:1,str:10,dex:10,con:10,int:10,wis:10,cha:10,savingThrows:{},skills:{},profBonus:2,classFeatures:[],knacks:[],exploits:[],exploitDC:10,featsArr:[],weapons:[{id:1,name:"",attackBonus:"",damage:"",notes:""}],statRows:[{id:1,label:"INITIATIVE",value:""},{id:9,label:"PROF BONUS",value:"2"}],armorProf:{light:false,medium:false,heavy:false,shields:false},currency:{pp:0,gp:0,sp:0,cp:0},deathMarks:Array(10).fill(0)},
    {id:3,name:"",level:1,str:10,dex:10,con:10,int:10,wis:10,cha:10,savingThrows:{},skills:{},profBonus:2,classFeatures:[],knacks:[],exploits:[],exploitDC:10,featsArr:[],weapons:[{id:1,name:"",attackBonus:"",damage:"",notes:""}],statRows:[{id:1,label:"INITIATIVE",value:""},{id:9,label:"PROF BONUS",value:"2"}],armorProf:{light:false,medium:false,heavy:false,shields:false},currency:{pp:0,gp:0,sp:0,cp:0},deathMarks:Array(10).fill(0)},
  ],
};

/* ════ IMAGE COMPRESSION ════ */
function compressImage(file,maxSize=400,quality=0.72){
  return new Promise(resolve=>{
    const reader=new FileReader();
    reader.onload=e=>{const img=new Image();img.onload=()=>{const canvas=document.createElement("canvas");let w=img.width,h=img.height;if(w>h){if(w>maxSize){h=Math.round(h*maxSize/w);w=maxSize;}}else{if(h>maxSize){w=Math.round(w*maxSize/h);h=maxSize;}}canvas.width=w;canvas.height=h;canvas.getContext("2d").drawImage(img,0,0,w,h);resolve(canvas.toDataURL("image/jpeg",quality));};img.src=e.target.result;};
    reader.readAsDataURL(file);
  });
}

/* ════ SHARED UI ════ */
function Ornament(){return(<div style={{display:"flex",alignItems:"center",gap:8,margin:"8px 0"}}><div style={{flex:1,height:1,background:"linear-gradient(to right,transparent,var(--gold2))"}}/><span style={{color:"var(--gold2)",fontSize:11}}>✦</span><div style={{flex:1,height:1,background:"linear-gradient(to left,transparent,var(--gold2))"}}/></div>);}
function DelModal({name,onOk,onNo}){
  const [t,setT]=useState("");const needs=name&&name.trim();const can=!needs||t.trim().toLowerCase()==="delete";
  return(<div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.72)",zIndex:3000,display:"flex",alignItems:"center",justifyContent:"center"}}>
    <div style={{background:"var(--parch)",border:"2px solid var(--gold2)",borderRadius:8,padding:26,width:380,boxShadow:"0 8px 40px rgba(0,0,0,0.6)"}}>
      <h3 style={{fontFamily:"Cinzel",fontSize:15,marginBottom:10,color:"var(--red)"}}>⚠ Confirm Deletion</h3>
      {needs?(<><p style={{fontSize:14,color:"var(--ink2)",marginBottom:12,lineHeight:1.6}}>Delete <strong>{name}</strong>? This cannot be undone.</p>
        <p style={{fontSize:12,color:"var(--ink3)",marginBottom:6}}>Type <em>delete</em> to confirm:</p>
        <input autoFocus value={t} onChange={e=>setT(e.target.value)} onKeyDown={e=>e.key==="Enter"&&can&&onOk()} placeholder="delete" style={{fontFamily:"Crimson Pro,serif",background:"var(--parch2)",border:"1px solid var(--border2)",color:"var(--ink)",borderRadius:4,padding:"6px 10px",width:"100%",fontSize:14,outline:"none",marginBottom:12}}/></>):
        <p style={{fontSize:14,color:"var(--ink2)",marginBottom:16}}>Delete this entry?</p>}
      <div style={{display:"flex",gap:8,justifyContent:"flex-end"}}>
        <button className="btn" onClick={onNo}>Cancel</button>
        <button className="btn red" onClick={onOk} disabled={!can} style={{opacity:can?1:0.4}}>Delete</button>
      </div>
    </div>
  </div>);
}

/* ════ SETUP SCREEN ════ */
function SetupScreen({onSave}){
  const [url,setUrl]=useState("");const [key,setKey]=useState("");const [testing,setTesting]=useState(false);const [err,setErr]=useState("");
  const test=async()=>{
    if(!url.trim()||!key.trim()){setErr("Please fill in both fields.");return;}
    setTesting(true);setErr("");
    try{
      const ctrl2=new AbortController();setTimeout(()=>ctrl2.abort(),8000);
      const isJWT2=key&&key.startsWith("eyJ");
      const testHeaders={"apikey":key};
      if(isJWT2)testHeaders["Authorization"]=`Bearer ${key}`;
      const r=await fetch(`${url.replace(/\/$/,"")}/rest/v1/campaign?select=id&limit=1`,{headers:testHeaders,signal:ctrl2.signal});
      if(r.status===200||r.status===406){saveSBConfig({url:url.trim(),key:key.trim()});onSave({url:url.trim(),key:key.trim()});}
      else{setErr(`Connection failed (${r.status}). Check URL and key.`);}
    }catch{setErr("Could not connect. Check URL.");}
    setTesting(false);
  };
  return(<div style={{height:"100vh",background:"var(--dark)",display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
    <div style={{background:"var(--parch)",border:"2px solid var(--gold2)",borderRadius:10,padding:36,maxWidth:540,width:"100%",boxShadow:"0 8px 40px rgba(0,0,0,0.6)"}}>
      <h2 style={{fontFamily:"Cinzel",fontSize:22,color:"var(--gold)",marginBottom:4,letterSpacing:"0.08em"}}>⚔ Steel & Fire</h2>
      <h3 style={{fontFamily:"Cinzel",fontSize:13,color:"var(--ink2)",marginBottom:20,fontWeight:400}}>Campaign Chronicle — Cloud Sync Setup</h3>
      <div style={{background:"var(--parch2)",border:"1px solid var(--border)",borderRadius:6,padding:14,marginBottom:20,fontSize:13,color:"var(--ink2)",lineHeight:1.8}}>
        <strong style={{fontFamily:"Cinzel",fontSize:11}}>SETUP:</strong><br/>
        1. <a href="https://supabase.com" target="_blank" style={{color:"var(--gold)"}}>supabase.com</a> → free account → new project<br/>
        2. SQL Editor → run: <code style={{background:"var(--parch3)",padding:"1px 5px",borderRadius:3,fontSize:11}}>create table if not exists campaign(id text primary key,data jsonb,updated_at timestamptz default now()); alter table campaign enable row level security; create policy "allow all" on campaign for all using (true) with check (true);</code><br/>
        3. Settings → General → copy Project URL<br/>
        4. Settings → API Keys → copy Publishable key
      </div>
      <label style={{fontSize:10,fontFamily:"Cinzel",color:"var(--ink3)",letterSpacing:"0.06em",display:"block",marginBottom:4}}>PROJECT URL</label>
      <input value={url} onChange={e=>setUrl(e.target.value)} placeholder="https://xxxx.supabase.co" style={{fontFamily:"Crimson Pro,serif",background:"var(--parch2)",border:"1px solid var(--border2)",color:"var(--ink)",borderRadius:4,padding:"8px 12px",width:"100%",fontSize:14,outline:"none",marginBottom:12}}/>
      <label style={{fontSize:10,fontFamily:"Cinzel",color:"var(--ink3)",letterSpacing:"0.06em",display:"block",marginBottom:4}}>PUBLISHABLE KEY</label>
      <input value={key} onChange={e=>setKey(e.target.value)} placeholder="sb_publishable_..." style={{fontFamily:"Crimson Pro,serif",background:"var(--parch2)",border:"1px solid var(--border2)",color:"var(--ink)",borderRadius:4,padding:"8px 12px",width:"100%",fontSize:14,outline:"none",marginBottom:16,fontFamily:"monospace"}}/>
      {err&&<div style={{color:"var(--red)",fontSize:13,marginBottom:12,padding:"6px 10px",background:"rgba(139,26,26,0.1)",border:"1px solid var(--red)",borderRadius:4}}>{err}</div>}
      <button onClick={test} disabled={testing} style={{fontFamily:"Cinzel",background:"var(--gold2)",color:"var(--dark)",border:"none",borderRadius:5,padding:"10px 24px",fontSize:13,cursor:"pointer",width:"100%",letterSpacing:"0.06em",opacity:testing?0.7:1}}>{testing?"Testing...":"Connect & Save →"}</button>
    </div>
  </div>);
}

// BARONY_MAP_IMG, BARONY_MAP_IMG, BARONY_ICONS injected by build process


const BARONY_SETTLEMENTS=[
  {id:"bai",name:"The Black Adder Inn",ix:920,iy:230,icon:"black_adder_inn",revealed:true, desc:"A well-known waystation on the road through the Tamean Forest."},
  {id:"ogc",name:"Oghill Castle",       ix:250,iy:220,icon:"oghill_castle",   revealed:false,desc:"The seat of power for Oghill Barony."},
  {id:"ogm",name:"Oghill Mine",         ix:195,iy:295,icon:"oghill_mine",     revealed:false,desc:"Rich mines carved into the cliffs."},
  {id:"hau",name:"Haughren",            ix:175,iy:345,icon:null,              revealed:false,desc:"A small farming village beneath the cliffs."},
  {id:"tcv",name:"Tamean Caverns",      ix:540,iy:340,icon:"tamean_caverns",  revealed:false,desc:"A network of caverns beneath the hills."},
  {id:"taf",name:"Tamean Farm",         ix:540,iy:415,icon:"tamean_farm",     revealed:false,desc:"The largest working farm in the Barony."},
  {id:"bel",name:"Belloc",              ix:775,iy:360,icon:"belloc",          revealed:false,desc:"A prosperous market town on the edge of Belloc Forest."},
  {id:"mer",name:"Mereworth Abbey",     ix:730,iy:455,icon:"mereworth_abbey", revealed:false,desc:"An ancient abbey of great religious significance."},
  {id:"mrw",name:"Mereworth",           ix:695,iy:525,icon:"mereworth",       revealed:false,desc:"A sizeable town built around the Abbey."},
  {id:"rot",name:"Rothwell",            ix:555,iy:505,icon:null,              revealed:false,desc:"A quiet village along the road south."},
  {id:"whe",name:"Wheyhall",            ix:575,iy:585,icon:"weyhall",         revealed:false,desc:"A small settlement at the crossroads."},
  {id:"ash",name:"Ashcombe",            ix:800,iy:575,icon:"ashcombe",        revealed:false,desc:"A village on the edge of the Ash Hills."},
  {id:"oft",name:"The Old Fort",        ix:1010,iy:550,icon:"the_old_fort",   revealed:false,desc:"Remains of an ancient fortification."},
  {id:"she",name:"Shedel Farm",         ix:355,iy:640,icon:null,              revealed:false,desc:"An isolated farmstead to the southwest."},
  {id:"tit",name:"Tomb of Illin Toth",  ix:520,iy:650,icon:"tomb_of_illin_toth",revealed:false,desc:"A mysterious tomb. Locals give it a wide berth."},
  {id:"tab",name:"Tabor Temple Ruins",  ix:225,iy:580,icon:"tabor_temple_ruins",revealed:false,desc:"Ruins of an ancient temple of unknown origin."},
  {id:"twl",name:"The Twin Lakes",      ix:1020,iy:490,icon:"the_twin_lakes", revealed:false,desc:"Two connected lakes known for fishing."},
  {id:"oclf",name:"Oghill Cliffs",      ix:330,iy:285,icon:"oghill_cliffs",   revealed:false,desc:"Dramatic cliffs forming the western edge of the Barony."},
];

const BARONY_TERRAIN=[
  {id:"ttf", name:"The Tamean Forest",ix:700,iy:90,  desc:"A vast ancient forest to the north."},
  {id:"bwds",name:"Black Woods",      ix:860,iy:300, desc:"Dark woodland, avoided by most."},
  {id:"belf",name:"Belloc Forest",    ix:1000,iy:400,desc:"Managed forest to the east, source of timber."},
  {id:"mwds",name:"Mereworth Woods",  ix:900,iy:480, desc:"Peaceful woods surrounding the Abbey."},
  {id:"thl", name:"The Tamean Hills", ix:360,iy:460, desc:"Rolling hills in the centre-west."},
  {id:"ashl",name:"The Ash Hills",    ix:840,iy:680, desc:"Rocky hills to the south."},
];


/* ════ STYLES ADDED AT RUNTIME (so styles.css never needs re-uploading) ════ */
(function(){
  if(typeof document==="undefined"||document.getElementById("sf-extra-css"))return;
  const css=`
html,body,#root{height:100%;}
.leaflet-container{background:var(--dark)!important;outline:none}
.sf-place-tip{background:rgba(20,12,4,0.92);border:1px solid var(--gold2);color:var(--gold3);font-family:Cinzel,serif;font-size:12px;letter-spacing:0.05em;padding:4px 10px;border-radius:4px;box-shadow:0 2px 10px rgba(0,0,0,0.6)}
.sf-place-tip:before{display:none}
.sf-pin-tip{background:rgba(20,12,4,0.95);border:1px solid var(--gold2);color:#f0dcb4;font-family:'Crimson Pro',serif;font-size:13px;padding:6px 10px;border-radius:5px;width:max-content;min-width:120px;max-width:240px;white-space:normal;box-shadow:0 2px 12px rgba(0,0,0,0.6)}
.sf-pin-tip b{font-family:Cinzel,serif;color:var(--gold3);font-size:12px;letter-spacing:0.04em;font-weight:600}
.sf-pin-icon{display:flex;align-items:center;justify-content:center;cursor:pointer;transition:transform .15s,filter .15s;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.55))}
.sf-pin-icon:hover{filter:drop-shadow(0 0 8px rgba(232,200,96,0.95))}
.sf-pin-icon img{width:100%!important;height:100%!important;object-fit:contain;pointer-events:none}
.sf-pin-icon img.sf-blend{mix-blend-mode:multiply}
.sf-pin-hidden{opacity:0.62}
.sf-pin-hidden:after{content:"HIDDEN";position:absolute;bottom:-6px;left:50%;transform:translateX(-50%);font:600 8px Cinzel,serif;letter-spacing:.08em;color:#fff;background:#a3241e;padding:1px 4px;border-radius:2px}
.sf-pin-sel{filter:drop-shadow(0 0 10px rgba(255,255,255,0.95))}
.sf-pin-dot{width:30px;height:30px;border-radius:50%;background:rgba(20,12,4,0.9);border:2px solid var(--gold2);display:flex;align-items:center;justify-content:center;font-size:15px}
.sf-shield{width:56px;height:56px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:transform .2s;filter:drop-shadow(0 2px 8px rgba(0,0,0,0.8))}
.sf-shield:hover{transform:scale(1.15);filter:drop-shadow(0 0 12px rgba(232,200,96,0.95))}
.sf-shield img{width:54px!important;height:54px!important;object-fit:contain;pointer-events:none}
.sf-shield-ph{width:46px;height:52px;background:rgba(20,12,4,0.88);border:2px solid rgba(200,160,40,0.7);border-radius:6px 6px 22px 22px;color:var(--gold3);font-size:22px;display:flex;align-items:center;justify-content:center}
.sf-crumb{font-family:Cinzel,serif;font-size:12px;letter-spacing:.04em;color:var(--gold3);background:rgba(20,12,4,0.88);border:1px solid var(--gold2);border-radius:4px;padding:4px 10px;cursor:pointer;white-space:nowrap}
.sf-crumb.cur{cursor:default;background:rgba(154,112,32,0.35)}
.sf-panel{background:rgba(26,18,8,0.97);border:1px solid var(--gold2);border-radius:8px;padding:14px 16px;box-shadow:0 4px 20px rgba(0,0,0,0.6);color:#f0dcb4;font-family:'Crimson Pro',serif}
.sf-dm-btn{font-family:Cinzel,serif;font-size:11px;letter-spacing:.04em;padding:5px 12px;border-radius:4px;cursor:pointer;border:1px solid rgba(255,140,140,0.45);background:rgba(90,10,10,0.55);color:#ffc4c4;white-space:nowrap}
.sf-dm-btn:hover{background:rgba(130,20,20,0.7)}
.sf-dm-btn.go{border-color:rgba(120,210,120,0.5);background:rgba(20,80,20,0.5);color:#b8f0b8}
.sf-dm-btn:disabled{opacity:.4;cursor:default}
.sf-dm-input{font-family:'Crimson Pro',serif;background:rgba(60,0,0,0.35);border:1px solid rgba(220,80,80,0.4);color:#ffd8d8;border-radius:4px;padding:6px 9px;font-size:14px;outline:none;width:100%}
.sf-tab{font-family:Cinzel,serif;font-size:11px;letter-spacing:.05em;padding:6px 14px;cursor:pointer;color:rgba(255,170,170,0.6);border-bottom:2px solid transparent;background:none;border-top:none;border-left:none;border-right:none}
.sf-tab.on{color:#ffc4c4;border-bottom-color:#ff7a7a}
.sf-link{color:#a87a10;font-weight:600;cursor:pointer;text-decoration:none;border-bottom:1px solid rgba(168,122,16,0.35)}
.sf-link:hover{color:#c4900c;border-bottom-color:#c4900c}
.sf-panel .sf-link{color:var(--gold3);border-bottom-color:rgba(232,200,96,0.4)}
.sf-mention-list{position:absolute;z-index:50;left:0;top:100%;margin-top:2px;min-width:240px;max-width:100%;background:var(--parch);border:1px solid var(--gold2);border-radius:5px;box-shadow:0 6px 20px rgba(0,0,0,0.35);overflow:hidden}
.sf-mention-item{padding:6px 10px;font-family:'Crimson Pro',serif;font-size:14px;color:var(--ink);cursor:pointer}
.sf-mention-item.on{background:var(--parch3);color:var(--gold)}
.sf-hidden-para{position:relative;border-left:3px solid #b3261e;padding-left:24px;background:rgba(179,38,30,0.045);border-radius:0 3px 3px 0}
.sf-hidden-para:before{content:"";position:absolute;left:5px;top:0.42em;width:13px;height:13px;background-image:${RED_LOCK_SVG};background-size:contain;background-repeat:no-repeat}
.sf-para{padding-left:27px}
.sf-hdr{display:flex;align-items:center;gap:10px;padding:6px 14px;min-height:46px;border-bottom:2px solid var(--gold2);background:var(--dark2);flex-shrink:0;flex-wrap:wrap;row-gap:6px}
.sf-nav{display:flex;gap:3px;flex-wrap:wrap}
@media (max-width:900px){
  .sf-hdr h1{font-size:13px!important;letter-spacing:.1em!important}
  .sf-nav .btn{padding:6px 9px!important}
  .sf-hide-narrow{display:none!important}
}
@media (max-width:700px){
  .sf-lore-side{width:150px!important}
  .sf-lore-detail{padding:16px 14px!important}
}
`;
  const el=document.createElement("style");el.id="sf-extra-css";el.textContent=css;document.head.appendChild(el);
})();

/* polygon-clipping (used to snap borders inside their parent and against neighbours) */
function loadClipLib(){
  if(window.polygonClipping||window._sfClipLoading)return;
  window._sfClipLoading=true;
  const urls=["https://unpkg.com/polygon-clipping@0.15.7/dist/polygon-clipping.umd.min.js","https://cdn.jsdelivr.net/npm/polygon-clipping@0.15.7/dist/polygon-clipping.umd.min.js"];
  const tryLoad=i=>{if(i>=urls.length)return;const s=document.createElement("script");s.src=urls[i];s.onerror=()=>tryLoad(i+1);document.head.appendChild(s);};
  tryLoad(0);
}
loadClipLib();

const escHtml=s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

/* ════ PLACES: World → Kingdom → Region → Barony ════
   Places are the entries in lore.regions (so they are also wiki pages).
   placeType: kingdom | region | barony. parentId links them up.
   polyCoords: the border, drawn on the map that contains it
     (kingdoms on the world map; regions and baronies on their kingdom's map). */
const PLACE_TYPES={
  kingdom:{label:"Duchy",icon:"👑",child:"region"},
  region:{label:"Region",icon:"🗺",child:"barony"},
  barony:{label:"Barony",icon:"🏰",child:null},
};
const placeType=p=>(p&&p.placeType)||((p&&(p.id==="oghill_barony"||p.mapId==="barony"))?"barony":"kingdom");
const getPlaces=lore=>((lore&&lore.regions)||[]);
const placeById=(places,id)=>id==null?null:(places.find(p=>String(p.id)===String(id))||null);
const sameParent=(p,pid)=>(pid==null?p.parentId==null:String(p.parentId)===String(pid));
const hasRing=p=>!!(p&&p.polyCoords&&p.polyCoords.length>2);
function ancestorsOf(places,p){const out=[];let cur=p,guard=0;while(cur&&cur.parentId!=null&&guard++<10){cur=placeById(places,cur.parentId);if(cur)out.unshift(cur);}return out;}
// the map a place's border is drawn on: its nearest kingdom ancestor, or the world map (null)
function canvasOf(places,p){const anc=ancestorsOf(places,p);for(let i=anc.length-1;i>=0;i--)if(placeType(anc[i])==="kingdom")return anc[i];return null;}
function canvasInfo(place){
  if(!place)return{img:WORLD_MAP_IMG,W:1400,H:1000,key:"world"};
  const own=imgSrc(place.mapImage);
  if(own)return{img:own,W:place.mapW||1400,H:place.mapH||1050,key:"p:"+place.id};
  if(place.mapId==="barony")return{img:BARONY_MAP_IMG,W:1400,H:1050,key:"builtin-barony"};
  return null;
}
const placeVisible=(places,p,isDM)=>isDM||(entryVisible(p)&&ancestorsOf(places,p).every(entryVisible));
// text a player may see from a field of an entry
function shownText(e,f,isDM){
  if(!e)return"";const t=e[f]||"";
  if(REVEAL_TEXT_FIELDS.includes(f))return isDM?t:visibleText(t,(((e.reveal||{}).spans||{})[f])||[]);
  if(isDM||!isControlled(e)||PUBLIC_TEXT_FIELDS.includes(f))return t;
  return fieldVisible(e,f)?t:"";
}
// Edit a field of an entry, keeping revealed passages attached to the right words
function applyEntryField(i,field,value){
  const n={...i,[field]:value};
  if(i.reveal&&(i.reveal.spans||{})[field]&&(i[field]||"")!==(value||"")){
    const spans=(i.reveal.spans||{});
    n.reveal={...i.reveal,spans:{...spans,[field]:remapSpans(spans[field],i[field],value)}};
  }
  n._ts=Date.now();
  return n;
}
// The original built-in Oghill icons are JPGs with white boxes; cut them out once so they sit on the map cleanly
const CLEAN_ICONS={};let cleanIconsStarted=false;const cleanIconListeners=new Set();
function startCleanIcons(){
  if(cleanIconsStarted)return;cleanIconsStarted=true;
  Object.keys(BARONY_ICONS||{}).forEach(k=>{
    const img=new Image();
    img.onload=()=>{try{
      const c=document.createElement("canvas");c.width=img.width;c.height=img.height;const ctx=c.getContext("2d",{willReadFrequently:true});ctx.drawImage(img,0,0);
      const bg=edgeBackground(ctx.getImageData(0,0,c.width,c.height).data,c.width,c.height);
      CLEAN_ICONS[k]=cutBox(ctx,bg,c.width,{x:0,y:0,w:c.width,h:c.height},220);
      cleanIconListeners.forEach(f=>f());
    }catch(e){}};
    img.src=BARONY_ICONS[k];
  });
}
function useCleanIcons(){const [,set]=useState(0);useEffect(()=>{const f=()=>set(x=>x+1);cleanIconListeners.add(f);startCleanIcons();return()=>cleanIconListeners.delete(f);},[]);}
const settlementIcon=s=>{const own=imgSrc(s.iconImg);if(own)return{img:own,blend:false};if(s.iconKey&&BARONY_ICONS[s.iconKey])return{img:CLEAN_ICONS[s.iconKey]||BARONY_ICONS[s.iconKey],blend:false};return{img:null,blend:false};};

/* Border snapping: keep a new border inside its parent and off its neighbours */
function ringArea(r){let a=0;for(let i=0;i<r.length;i++){const p=r[i],q=r[(i+1)%r.length];a+=p[0]*q[1]-q[0]*p[1];}return Math.abs(a/2);}
function clipRing(ring,{rect,within,avoid}){
  const PC=window.polygonClipping;
  if(!PC)return{ring,clipped:false};
  try{
    let g=[[ring]];
    if(rect)g=PC.intersection(g,[[[[0,0],[rect.H,0],[rect.H,rect.W],[0,rect.W],[0,0]]]]);
    if(within&&within.length>2&&g.length)g=PC.intersection(g,[[within]]);
    const av=(avoid||[]).filter(r=>r&&r.length>2).map(r=>[[r]]);
    if(av.length&&g.length)g=PC.difference(g,...av);
    if(!g.length)return{ring:null,clipped:true};
    let best=null,ba=0;g.forEach(poly=>{const a=ringArea(poly[0]);if(a>ba){ba=a;best=poly[0];}});
    return{ring:best.map(([a,b])=>[Math.round(a*10)/10,Math.round(b*10)/10]),clipped:true};
  }catch(e){console.warn("Border snap failed",e);return{ring,clipped:false};}
}
// Where a child of parentId is drawn, what it must stay inside, and what it must avoid
function drawContext(places,parentId,excludeId){
  const par=placeById(places,parentId);
  const cv=par?(placeType(par)==="kingdom"?par:canvasOf(places,par)):null;
  const info=canvasInfo(cv);
  const within=par&&placeType(par)!=="kingdom"&&hasRing(par)?par.polyCoords:null;
  const sibs=places.filter(p=>sameParent(p,parentId)&&String(p.id)!==String(excludeId)&&hasRing(p));
  return{cv,info,within,sibs};
}

/* ════ PLACE MAP — one Leaflet map, locked to the picture's edges ════ */
function PlaceMap({canvas,shapes,focusRing,pins,zones,onShapeClick,onPinClick,onPinMove,onMapClick,draw,onDrawDone,onDrawCancel,drawHint,cursor}){
  const elRef=useRef(null),mapRef=useRef(null),layerRef=useRef(null),drawLayerRef=useRef(null),focusRef=useRef(null);
  const cb=useRef({});const firstFocus=useRef(true);
  const [pts,setPts]=useState([]);const ptsRef=useRef([]);
  const [zoom,setZoom]=useState(0);
  const drawing=!!draw;
  cb.current={onShapeClick,onPinClick,onPinMove,onMapClick,drawing};
  const W=canvas?canvas.W:0,H=canvas?canvas.H:0;

  const lock=(animate)=>{
    const map=mapRef.current,L=window.L;if(!map||!canvas)return;
    const img=L.latLngBounds([[0,0],[H,W]]);
    const size=map.getSize();if(!size.x||!size.y)return;
    map._sfLocked=true;
    map.setMinZoom(-8);map.setMaxZoom(8);
    const zImg=map.getBoundsZoom(img,false); // whole picture visible; can't zoom out past it
    let z=zImg,center=img.getCenter();
    const fr=focusRef.current;
    if(fr&&fr.length>2){
      const fb=L.latLngBounds(fr).pad(0.06);
      z=Math.max(zImg,map.getBoundsZoom(fb,false)); // the whole region fills the view
      center=fb.getCenter();
    }
    const b=img;
    map.setMaxBounds(null);
    if(animate){
      map.setMinZoom(Math.min(map.getZoom(),z));map.setMaxZoom(z+4);
      map.flyTo(center,z,{duration:0.7});
      map.once("moveend",()=>{map.setMinZoom(z);map.setMaxBounds(b);});
    }else{
      map.setMinZoom(z);map.setMaxZoom(z+4);
      map.setView(center,z,{animate:false});
      map.setMaxBounds(b);
    }
  };

  // build the map whenever the picture changes
  useEffect(()=>{
    const L=window.L;if(!elRef.current||!canvas||!L)return;
    const map=L.map(elRef.current,{crs:L.CRS.Simple,attributionControl:false,zoomControl:true,zoomSnap:0,zoomDelta:0.5,wheelPxPerZoomLevel:110,maxBoundsViscosity:1,bounceAtZoomLimits:false,inertia:false});
    mapRef.current=map;elRef.current._sfMap=map;firstFocus.current=true;focusRef.current=focusRing||null;
    L.imageOverlay(canvas.img,[[0,0],[H,W]],{interactive:false}).addTo(map);
    layerRef.current=L.layerGroup().addTo(map);
    drawLayerRef.current=L.layerGroup().addTo(map);
    map.on("zoomend",()=>setZoom(Math.round(map.getZoom()*100)/100));
    // while zooming, resize icons smoothly along with the map
    map.on("zoomanim",e=>{const k=Math.pow(2,e.zoom);elRef.current&&elRef.current.querySelectorAll(".sf-pin-icon[data-u]").forEach(el=>{const u=+el.dataset.u,a=+el.dataset.a;const w=Math.max(14,u*k),h=Math.max(10,u*a*k);const p=el.parentNode;if(p){p.style.width=w+"px";p.style.height=h+"px";p.style.marginLeft=(-w/2)+"px";p.style.marginTop=(-h/2)+"px";}el.style.width=w+"px";el.style.height=h+"px";});});
    map.on("click",e=>{
      if(cb.current.drawing){
        const p=[Math.round(Math.min(H,Math.max(0,e.latlng.lat))*10)/10,Math.round(Math.min(W,Math.max(0,e.latlng.lng))*10)/10];
        ptsRef.current=[...ptsRef.current,p];setPts(ptsRef.current);return;
      }
      cb.current.onMapClick&&cb.current.onMapClick([e.latlng.lat,e.latlng.lng]);
    });
    map.setView([H/2,W/2],0,{animate:false});
    lock(false);
    let t=null;
    let lastW=elRef.current.clientWidth,lastH=elRef.current.clientHeight;
    const ro=new ResizeObserver(()=>{clearTimeout(t);t=setTimeout(()=>{
      if(!mapRef.current||!elRef.current)return;const w=elRef.current.clientWidth,h=elRef.current.clientHeight;
      const wasHidden=!lastW||!lastH;lastW=w;lastH=h;if(!w||!h)return;
      map.invalidateSize();if(!wasHidden||!map._sfLocked)lock(false); // coming back to a tab keeps where you were
    },120);});
    ro.observe(elRef.current);
    return()=>{ro.disconnect();clearTimeout(t);map.remove();mapRef.current=null;};
  },[canvas&&canvas.key,canvas&&canvas.img,W,H]);

  // zoom into / out of a region
  const focusKey=JSON.stringify(focusRing||null);
  useEffect(()=>{
    focusRef.current=focusRing||null;
    if(!mapRef.current)return;
    lock(!firstFocus.current);firstFocus.current=false;
  },[focusKey,canvas&&canvas.key]);

  // draw borders, icons, shields
  const shapesKey=JSON.stringify((shapes||[]).map(s=>[s.id,s.ring,s.label,s.state,s.shield?(s.shield.length>40?s.shield.length:s.shield):0,s.clickable]));
  const pinsKey=JSON.stringify((pins||[]).map(p=>[p.id,p.lat,p.lng,p.img?p.img.length:0,p.hidden,p.selected,p.tip,p.draggable,p.glyph,p.size,p.aspect]))+"z"+zoom;
  useEffect(()=>{
    const L=window.L,map=mapRef.current,layer=layerRef.current;if(!map||!layer)return;
    layer.clearLayers();
    if(focusRing&&focusRing.length>2){
      L.polygon([[[-H,-W],[2*H,-W],[2*H,2*W],[-H,2*W]],focusRing],{stroke:false,fillColor:"#000",fillOpacity:0.55,interactive:false}).addTo(layer);
      L.polygon(focusRing,{color:"#e8c860",weight:2.5,fill:false,interactive:false}).addTo(layer);
    }
    const STY={
      normal:{color:"rgba(255,255,255,0.85)",weight:2,fillColor:"#ffd700",fillOpacity:0,dashArray:null},
      selected:{color:"#e8c860",weight:3.5,fillColor:"#ffd700",fillOpacity:0.16,dashArray:null},
      hidden:{color:"#ff6b5b",weight:2,fillColor:"#ff3b2b",fillOpacity:0.06,dashArray:"7,6"},
      faint:{color:"rgba(255,255,255,0.5)",weight:1.5,fillColor:"#fff",fillOpacity:0,dashArray:"4,5"},
      editing:{color:"#7fd4ff",weight:3,fillColor:"#7fd4ff",fillOpacity:0.12,dashArray:"6,4"},
    };
    (shapes||[]).forEach(s=>{
      if(!s.ring||s.ring.length<3)return;
      const st=STY[s.state]||STY.normal;
      const clickable=s.clickable!==false&&!drawing&&!!onShapeClick;
      const poly=L.polygon(s.ring,{...st,interactive:clickable}).addTo(layer);
      if(s.label&&clickable)poly.bindTooltip(escHtml(s.label),{direction:"center",className:"sf-place-tip",permanent:s.state==="selected",sticky:false});
      if(clickable){
        poly.on("mouseover",()=>{if(s.state!=="selected")poly.setStyle({color:"#e8c860",weight:3,fillOpacity:0.1});});
        poly.on("mouseout",()=>poly.setStyle(st));
        poly.on("click",e=>{L.DomEvent.stopPropagation(e);cb.current.onShapeClick&&cb.current.onShapeClick(s.id);});
      }
      if(s.shield){
        const html=s.shield.indexOf("data:")===0||s.shield.indexOf("http")===0
          ?`<div class="sf-shield"><img src="${s.shield}"/></div>`
          :`<div class="sf-shield"><div class="sf-shield-ph">${escHtml(s.shield)}</div></div>`;
        const m=L.marker(poly.getBounds().getCenter(),{icon:L.divIcon({html,className:"",iconSize:[56,56],iconAnchor:[28,28]}),interactive:clickable,keyboard:false}).addTo(layer);
        if(clickable){
          if(s.label&&s.state!=="selected")m.bindTooltip(escHtml(s.label),{direction:"top",offset:[0,-26],className:"sf-place-tip"});
          m.on("mouseover",()=>poly.setStyle({color:"#e8c860",weight:3,fillOpacity:0.1}));
          m.on("mouseout",()=>poly.setStyle(st));
          m.on("click",e=>{L.DomEvent.stopPropagation(e);cb.current.onShapeClick&&cb.current.onShapeClick(s.id);});
        }
      }
    });
    (zones||[]).forEach(z=>{
      const c=L.circleMarker([z.lat,z.lng],{radius:38,color:"transparent",fillColor:"transparent",fillOpacity:0,weight:0,interactive:!drawing}).addTo(layer);
      c.bindTooltip(escHtml(z.label),{direction:"top",className:"sf-place-tip"});
      c.on("click",e=>{L.DomEvent.stopPropagation(e);cb.current.onPinClick&&cb.current.onPinClick(z.id);});
    });
    (pins||[]).forEach(p=>{
      if(p.lat==null||p.lng==null)return;
      const k=Math.pow(2,map.getZoom());const u=p.size||90,a=p.aspect||0.75;
      const w=p.img?Math.max(14,u*k):30,h=p.img?Math.max(10,u*a*k):30;
      const inner=p.img?`<img src="${p.img}"/>`:`<div class="sf-pin-dot">${p.glyph||"🏠"}</div>`;
      const html=`<div class="sf-pin-icon${p.hidden?" sf-pin-hidden":""}${p.selected?" sf-pin-sel":""}" ${p.img?`data-u="${u}" data-a="${a}"`:""} style="position:relative;width:${w}px;height:${h}px">${inner}</div>`;
      const m=L.marker([p.lat,p.lng],{icon:L.divIcon({html,className:"",iconSize:[w,h],iconAnchor:[w/2,h/2]}),draggable:!!p.draggable&&!drawing,keyboard:false,interactive:!drawing,zIndexOffset:p.selected?1000:0}).addTo(layer);
      if(p.tip)m.bindTooltip(p.tip,{direction:"top",offset:[0,-h/2+4],className:"sf-pin-tip"});
      m.on("click",e=>{L.DomEvent.stopPropagation(e);cb.current.onPinClick&&cb.current.onPinClick(p.id);});
      m.on("dragend",()=>{const ll=m.getLatLng();cb.current.onPinMove&&cb.current.onPinMove(p.id,[Math.round(Math.min(H,Math.max(0,ll.lat))),Math.round(Math.min(W,Math.max(0,ll.lng)))]);});
    });
  },[shapesKey,pinsKey,focusKey,drawing,canvas&&canvas.key,(zones||[]).length]);

  // drawing preview
  useEffect(()=>{if(!drawing){ptsRef.current=[];setPts([]);}const map=mapRef.current;if(map){if(drawing)map.doubleClickZoom.disable();else map.doubleClickZoom.enable();}},[drawing]);
  useEffect(()=>{
    const L=window.L,dl=drawLayerRef.current;if(!dl)return;dl.clearLayers();
    if(!drawing)return;
    if(pts.length>1)L.polyline([...pts,...(pts.length>2?[pts[0]]:[])],{color:"#7fd4ff",weight:2.5,dashArray:"6,5",interactive:false}).addTo(dl);
    pts.forEach((p,i)=>L.circleMarker(p,{radius:i===0?7:5,color:"#7fd4ff",fillColor:i===0?"#ffffff":"#7fd4ff",fillOpacity:1,weight:2,interactive:false}).addTo(dl));
  },[pts,drawing]);

  const finish=()=>{const r=ptsRef.current;if(r.length<3)return;ptsRef.current=[];setPts([]);onDrawDone&&onDrawDone([...r,r[0]]);};
  const undo=()=>{ptsRef.current=ptsRef.current.slice(0,-1);setPts(ptsRef.current);};

  if(!canvas)return <div style={{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--ink3)",fontFamily:"Cinzel",fontSize:13,background:"var(--dark)",borderRadius:8}}>No map uploaded yet</div>;
  return(<div style={{position:"relative",width:"100%",height:"100%",background:"var(--dark)",borderRadius:8,overflow:"hidden"}}>
    <div ref={elRef} style={{position:"absolute",inset:0,background:"var(--dark)",cursor:drawing||cursor?"crosshair":undefined}}/>
    {drawing&&<div style={{position:"absolute",bottom:14,left:"50%",transform:"translateX(-50%)",zIndex:1000,display:"flex",gap:6,alignItems:"center",flexWrap:"wrap",justifyContent:"center",background:"rgba(10,20,30,0.92)",border:"1px solid #7fd4ff",borderRadius:6,padding:"7px 10px",maxWidth:"94%"}}>
      <span style={{fontFamily:"Cinzel",fontSize:11,color:"#bfe9ff",letterSpacing:".04em"}}>{pts.length<3?(drawHint||"Click around the edge to draw the border"):`${pts.length} points — finish when you're back at the start`}</span>
      <button className="sf-dm-btn" onClick={undo} disabled={!pts.length}>↶ Undo</button>
      <button className="sf-dm-btn go" onClick={finish} disabled={pts.length<3}>✓ Finish</button>
      <button className="sf-dm-btn" onClick={()=>{ptsRef.current=[];setPts([]);onDrawCancel&&onDrawCancel();}}>✕ Cancel</button>
    </div>}
  </div>);
}

/* ════ MAP EXPLORER (the Map tab) ════ */
function MapExplorer({data,isDM,onOpenLore}){
  useCleanIcons();
  const lctx=useContext(LinkCtx);
  const lore=data.lore||{};
  const places=getPlaces(lore);
  const sets=lore.settlements||[];
  const vis=p=>placeVisible(places,p,isDM);
  const [view,setView]=useState({mapId:null,focusId:null});
  const [sel,setSel]=useState(null);
  const [fade,setFade]=useState(false);
  const cur=placeById(places,view.mapId);
  const focus=placeById(places,view.focusId);

  // if what we're looking at gets hidden or deleted, step back out
  useEffect(()=>{
    if(view.mapId&&(!cur||!vis(cur)||!canvasInfo(cur)))setView({mapId:null,focusId:null});
    else if(view.focusId&&(!focus||!vis(focus)||!hasRing(focus)))setView(v=>({...v,focusId:null}));
  },[cur,focus,isDM]);

  const canvas=canvasInfo(cur);
  const isBarony=cur&&placeType(cur)==="barony";
  const kids=isBarony?[]:places.filter(p=>vis(p)&&hasRing(p)&&(focus?sameParent(p,focus.id):cur?sameParent(p,cur.id):p.parentId==null));

  const go=(next,withFade)=>{
    setSel(null);
    if(!withFade){setView(next);return;}
    setFade(true);
    setTimeout(()=>{setView(next);setTimeout(()=>setFade(false),180);},480);
  };
  const enter=p=>{
    if(canvasInfo(p)){go({mapId:p.id,focusId:null},true);return true;}
    if(placeType(p)!=="barony"&&placeType(p)!=="kingdom"&&hasRing(p)){go({mapId:view.mapId,focusId:p.id},false);return true;}
    return false;
  };
  const back=()=>{
    if(focus){go({mapId:view.mapId,focusId:null},false);return;}
    if(!cur)return;
    const cv=canvasOf(places,cur);
    const par=placeById(places,cur.parentId);
    go({mapId:cv?cv.id:null,focusId:par&&placeType(par)==="region"&&hasRing(par)?par.id:null},true);
  };
  const wrapRef=useRef(null);
  useEffect(()=>{const k=e=>{if(!wrapRef.current||!wrapRef.current.offsetParent)return;if(e.key==="Escape"){if(sel)setSel(null);else back();}};window.addEventListener("keydown",k);return()=>window.removeEventListener("keydown",k);});

  // breadcrumb
  const crumbs=[{label:"🌍 World",to:{mapId:null,focusId:null},fade:!!cur}];
  const chain=[...(cur?[...ancestorsOf(places,cur),cur]:[]),...(focus?[focus]:[])];
  chain.forEach(p=>{
    if(canvasInfo(p))crumbs.push({label:p.name,to:{mapId:p.id,focusId:null},fade:String(view.mapId)!==String(p.id)});
    else if(placeType(p)==="region"){const cv=canvasOf(places,p);crumbs.push({label:p.name,to:{mapId:cv?cv.id:null,focusId:p.id},fade:String(view.mapId)!==String(cv?cv.id:null)});}
    else crumbs.push({label:p.name,to:null});
  });

  const shapes=kids.map(p=>({id:p.id,ring:p.polyCoords,label:p.name,
    state:sel&&sel.kind==="place"&&String(sel.id)===String(p.id)?"selected":(!placeVisible(places,p,false)?"hidden":"normal"),
    shield:!cur&&!focus?(imgSrc(p.heraldry)||PLACE_TYPES[placeType(p)].icon):(imgSrc(p.heraldry)||null)}));

  const pins=isBarony?sets.filter(s=>sameParent({parentId:s.placeId},cur.id)&&s.mapX!=null&&(isDM||entryVisible(s))).map(s=>{
    const ic=settlementIcon(s);const hl=plainLinks(shownText(s,"hoverLore",isDM));
    return{id:"s:"+s.id,lat:s.mapY,lng:s.mapX,img:ic.img,size:s.iconSize||90,aspect:s.iconAspect||0.75,hidden:!entryVisible(s),selected:sel&&sel.id==="s:"+s.id,
      tip:`<b>${escHtml(s.name)}</b>${hl?`<br/>${escHtml(hl.length>180?hl.slice(0,180)+"…":hl)}`:""}`};
  }):[];
  const zones=isBarony&&cur.mapId==="barony"&&!imgSrc(cur.mapImage)?BARONY_TERRAIN.map(t=>({id:"t:"+t.id,lat:1050-t.iy,lng:t.ix,label:t.name})):[];

  const onShapeClick=id=>{
    if(sel&&sel.kind==="place"&&String(sel.id)===String(id)){const p=placeById(places,id);if(p&&!enter(p))setSel({kind:"place",id,noMap:true});return;}
    setSel({kind:"place",id});
  };
  const onPinClick=id=>setSel({kind:id.startsWith("t:")?"terrain":"pin",id});

  // popup content
  let popup=null;
  if(sel&&sel.kind==="place"){
    const p=placeById(places,sel.id);
    if(p){
      const t=placeType(p);const canEnter=!!canvasInfo(p)||(t==="region"&&hasRing(p));
      const desc=shownText(p,"description",isDM);
      popup=(<>
        <div style={{display:"flex",gap:10,alignItems:"center",marginBottom:6}}>
          {imgSrc(p.heraldry)&&<img src={imgSrc(p.heraldry)} alt="" style={{width:38,height:38,objectFit:"contain"}}/>}
          <div><div style={{fontFamily:"Cinzel",fontSize:15,color:"var(--gold3)",letterSpacing:".05em"}}>{p.name}</div>
          <div style={{fontFamily:"Cinzel",fontSize:9,color:"#b89a68",letterSpacing:".08em"}}>{PLACE_TYPES[t].label.toUpperCase()}{isDM&&!placeVisible(places,p,false)&&<span style={{color:"#ff8a7a"}}> · HIDDEN FROM PLAYERS</span>}</div></div>
        </div>
        {desc&&<p style={{fontSize:13.5,lineHeight:1.55,marginBottom:10,whiteSpace:"pre-wrap",maxHeight:160,overflowY:"auto"}}>{richNodes(desc,lctx)}</p>}
        {sel.noMap&&<p style={{fontSize:12,color:"#e0a070",fontStyle:"italic",marginBottom:8}}>{isDM?"No map uploaded for this yet — add one in DM → Map Control.":"This place hasn't been mapped yet."}</p>}
        <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
          {canEnter&&<button className="btn act" onClick={()=>enter(p)} style={{fontSize:12,fontFamily:"Cinzel"}}>{t==="region"?"Explore":"Enter"} {p.name} ▶</button>}
          <button className="btn" onClick={()=>onOpenLore&&onOpenLore("regions",p.id)} style={{fontSize:12,color:"#e8d2a8"}}>📜 Lore</button>
        </div>
        {canEnter&&<div style={{fontSize:11,color:"#9a8060",fontStyle:"italic",marginTop:6}}>Tip: click it again on the map to go in</div>}
      </>);
    }
  }else if(sel&&sel.kind==="pin"){
    const s=sets.find(x=>"s:"+x.id===sel.id);
    if(s){const hl=shownText(s,"hoverLore",isDM);const desc=shownText(s,"description",isDM);
      popup=(<>
        <div style={{fontFamily:"Cinzel",fontSize:15,color:"var(--gold3)",letterSpacing:".05em",marginBottom:2}}>{s.name}</div>
        <div style={{fontFamily:"Cinzel",fontSize:9,color:"#b89a68",letterSpacing:".08em",marginBottom:8}}>SETTLEMENT{isDM&&!entryVisible(s)&&<span style={{color:"#ff8a7a"}}> · HIDDEN FROM PLAYERS</span>}</div>
        {hl&&<p style={{fontSize:13.5,lineHeight:1.55,marginBottom:8,whiteSpace:"pre-wrap"}}>{richNodes(hl,lctx)}</p>}
        {desc&&desc!==hl&&<p style={{fontSize:13,lineHeight:1.55,marginBottom:8,whiteSpace:"pre-wrap",color:"#d8c4a0",maxHeight:150,overflowY:"auto"}}>{richNodes(desc,lctx)}</p>}
        <button className="btn" onClick={()=>onOpenLore&&onOpenLore("settlements",s.id)} style={{fontSize:12,color:"#e8d2a8"}}>📜 Open in Lore</button>
      </>);}
  }else if(sel&&sel.kind==="terrain"){
    const t=BARONY_TERRAIN.find(x=>"t:"+x.id===sel.id);
    if(t)popup=(<><div style={{fontFamily:"Cinzel",fontSize:15,color:"var(--gold3)",marginBottom:2}}>{t.name}</div><div style={{fontFamily:"Cinzel",fontSize:9,color:"#b89a68",letterSpacing:".08em",marginBottom:8}}>TERRAIN</div><p style={{fontSize:13.5,lineHeight:1.55}}>{t.desc}</p></>);
  }

  return(<div ref={wrapRef} style={{position:"relative",width:"100%",height:"100%"}}>
    <PlaceMap canvas={canvas} shapes={shapes} focusRing={focus?focus.polyCoords:null} pins={pins} zones={zones}
      onShapeClick={onShapeClick} onPinClick={onPinClick} onMapClick={()=>setSel(null)}/>
    {/* breadcrumb */}
    <div style={{position:"absolute",top:12,left:58,right:12,zIndex:1000,display:"flex",gap:6,alignItems:"center",flexWrap:"wrap",pointerEvents:"none"}}>
      {(cur||focus)&&<button className="btn act" onClick={back} style={{fontSize:12,pointerEvents:"all",background:"rgba(20,12,4,0.9)"}}>← Back</button>}
      {crumbs.map((c,i)=>{const last=i===crumbs.length-1;return(<React.Fragment key={i}>
        {i>0&&<span style={{color:"var(--gold3)",fontSize:12,textShadow:"0 1px 3px #000"}}>›</span>}
        <span className={`sf-crumb${last?" cur":""}`} style={{pointerEvents:"all"}} onClick={()=>{if(!last&&c.to)go(c.to,c.fade);}}>{c.label}</span>
      </React.Fragment>);})}
      {isDM&&<span style={{fontFamily:"Cinzel",fontSize:10,color:"#ff9999",background:"rgba(80,0,0,0.85)",padding:"3px 8px",borderRadius:3,border:"1px solid rgba(255,100,100,0.4)"}}>⚔ DM VIEW — red dashed = hidden from players</span>}
    </div>
    {popup&&<div className="sf-panel" style={{position:"absolute",right:14,bottom:14,zIndex:1100,width:300,maxWidth:"calc(100% - 28px)"}}>
      <button onClick={()=>setSel(null)} style={{position:"absolute",top:8,right:10,background:"none",border:"none",color:"#b89a68",cursor:"pointer",fontSize:16}}>✕</button>
      {popup}
    </div>}
    <div style={{position:"absolute",inset:0,background:"black",opacity:fade?1:0,transition:"opacity .45s ease",pointerEvents:fade?"all":"none",zIndex:2000,borderRadius:8}}/>
  </div>);
}

/* ════ IMAGE CUT-OUT: removes the white background around icons/heraldry ════ */
function loadImgFile(file){return new Promise((res,rej)=>{const r=new FileReader();r.onload=e=>{const i=new Image();i.onload=()=>res(i);i.onerror=rej;i.src=e.target.result;};r.onerror=rej;r.readAsDataURL(file);});}
// Find the background colour (the most common colour around the edge — white, black, anything)
function borderColour(d,w,h){
  const counts={};const sums={};
  const add=i=>{const o=i*4;if(d[o+3]<24)return;const k=(d[o]>>4)+","+(d[o+1]>>4)+","+(d[o+2]>>4);counts[k]=(counts[k]||0)+1;const sm=sums[k]||(sums[k]=[0,0,0]);sm[0]+=d[o];sm[1]+=d[o+1];sm[2]+=d[o+2];};
  const step=Math.max(1,Math.floor((w+h)/800));
  for(let x=0;x<w;x+=step){add(x);add((h-1)*w+x);}
  for(let y=0;y<h;y+=step){add(y*w);add(y*w+w-1);}
  let best=null,bc=0;Object.keys(counts).forEach(k=>{if(counts[k]>bc){bc=counts[k];best=k;}});
  if(!best)return[255,255,255];
  return sums[best].map(v=>Math.round(v/bc));
}
// Flood-fill the background colour that touches the edges. The same colour *inside* an icon is kept.
function edgeBackground(d,w,h){
  const col=borderColour(d,w,h);const[R,G,B]=col;const bright=(R+G+B)/3;
  const tol=bright>200?30:bright<60?24:26;
  const bg=new Uint8Array(w*h);const st=new Int32Array(w*h);let sp=0;
  const near=i=>{const o=i*4;return d[o+3]<24||(Math.abs(d[o]-R)<=tol&&Math.abs(d[o+1]-G)<=tol&&Math.abs(d[o+2]-B)<=tol);};
  const push=i=>{if(!bg[i]&&near(i)){bg[i]=1;st[sp++]=i;}};
  for(let x=0;x<w;x++){push(x);push((h-1)*w+x);}
  for(let y=0;y<h;y++){push(y*w);push(y*w+w-1);}
  while(sp){const i=st[--sp];const x=i%w;if(x>0)push(i-1);if(x<w-1)push(i+1);if(i>=w)push(i-w);if(i<w*(h-1))push(i+w);}
  bg.colour=col;
  return bg;
}
// Copy part of the sheet to a transparent PNG
function cutBox(srcCtx,bg,W,box,maxOut){
  const{x,y,w,h}=box;
  const id=srcCtx.getImageData(x,y,w,h);const d=id.data;
  for(let yy=0;yy<h;yy++)for(let xx=0;xx<w;xx++){
    const gi=(y+yy)*W+(x+xx),o=(yy*w+xx)*4;
    if(bg[gi]){d[o+3]=0;continue;}
    // soften the edge where the icon meets removed background
    const edge=(xx>0&&bg[gi-1])||(xx<w-1&&bg[gi+1])||(yy>0&&bg[gi-W])||(yy<h-1&&bg[gi+W]);
    if(edge){const C=bg.colour||[255,255,255];const dist=Math.max(Math.abs(d[o]-C[0]),Math.abs(d[o+1]-C[1]),Math.abs(d[o+2]-C[2]));if(dist<70)d[o+3]=Math.round(40+dist*2);}
  }
  const c=document.createElement("canvas");c.width=w;c.height=h;c.getContext("2d").putImageData(id,0,0);
  const sc=Math.min(1,maxOut/Math.max(w,h));
  const o=document.createElement("canvas");o.width=Math.max(1,Math.round(w*sc));o.height=Math.max(1,Math.round(h*sc));
  const octx=o.getContext("2d");octx.imageSmoothingQuality="high";octx.drawImage(c,0,0,o.width,o.height);
  return o.toDataURL("image/png");
}
function sheetCanvas(img,maxSide){
  const sc=Math.min(1,maxSide/Math.max(img.width,img.height));
  const w=Math.max(1,Math.round(img.width*sc)),h=Math.max(1,Math.round(img.height*sc));
  const c=document.createElement("canvas");c.width=w;c.height=h;
  const ctx=c.getContext("2d",{willReadFrequently:true});ctx.drawImage(img,0,0,w,h);
  return{ctx,w,h};
}
// A single picture (heraldry, one icon): remove the white around it and crop tight
async function cutoutFile(file,maxOut){
  const img=await loadImgFile(file);const{ctx,w,h}=sheetCanvas(img,1200);
  const bg=edgeBackground(ctx.getImageData(0,0,w,h).data,w,h);
  let minx=w,miny=h,maxx=-1,maxy=-1;
  for(let y=0;y<h;y++)for(let x=0;x<w;x++)if(!bg[y*w+x]){if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;}
  if(maxx<0)return null;
  return cutBox(ctx,bg,w,{x:minx,y:miny,w:maxx-minx+1,h:maxy-miny+1},maxOut||300);
}
// A whole sheet: find every icon separated by white space
async function extractIcons(file){
  const img=await loadImgFile(file);const{ctx,w,h}=sheetCanvas(img,2400);
  const bg=edgeBackground(ctx.getImageData(0,0,w,h).data,w,h);
  const C=4,gw=Math.ceil(w/C),gh=Math.ceil(h/C);
  const g=new Uint8Array(gw*gh);
  for(let y=0;y<h;y++){const r=((y/C)|0)*gw;for(let x=0;x<w;x++)if(!bg[y*w+x])g[r+((x/C)|0)]=1;}
  const gd=new Uint8Array(gw*gh);const R=1;
  for(let y=0;y<gh;y++)for(let x=0;x<gw;x++)if(g[y*gw+x])for(let dy=-R;dy<=R;dy++)for(let dx=-R;dx<=R;dx++){const yy=y+dy,xx=x+dx;if(yy>=0&&yy<gh&&xx>=0&&xx<gw)gd[yy*gw+xx]=1;}
  const lab=new Int32Array(gw*gh);let n=0;const boxes=[];
  for(let i=0;i<gw*gh;i++){
    if(!gd[i]||lab[i])continue;n++;
    let minx=1e9,miny=1e9,maxx=-1,maxy=-1;const st=[i];lab[i]=n;
    while(st.length){const j=st.pop();const x=j%gw,y=(j/gw)|0;
      if(g[j]){if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;}
      for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){const xx=x+dx,yy=y+dy;if(xx<0||yy<0||xx>=gw||yy>=gh)continue;const k=yy*gw+xx;if(gd[k]&&!lab[k]){lab[k]=n;st.push(k);}}}
    if(maxx>=0)boxes.push({x:minx*C,y:miny*C,w:Math.min(w-minx*C,(maxx-minx+1)*C),h:Math.min(h-miny*C,(maxy-miny+1)*C)});
  }
  const minSide=Math.max(28,Math.min(w,h)*0.035);
  const looksLikeText=b=>b.w>b.h*3.2||(b.h<minSide*1.4&&b.w>b.h*1.8);
  // trim a label stuck just above/below an icon (separated by a thin white line)
  const rowHas=(b,y)=>{for(let x=b.x;x<b.x+b.w;x++)if(!bg[y*w+x])return true;return false;};
  const trim=b=>{
    const rows=[];for(let y=b.y;y<b.y+b.h;y++)rows.push(rowHas(b,y));
    const runs=[];let s=-1;rows.forEach((r,i)=>{if(r&&s<0)s=i;if(!r&&s>=0){runs.push([s,i]);s=-1;}});if(s>=0)runs.push([s,rows.length]);
    if(runs.length<2)return b;
    let big=runs.reduce((a,r)=>r[1]-r[0]>a[1]-a[0]?r:a,runs[0]);
    if((big[1]-big[0])<b.h*0.55)return b;
    return{...b,y:b.y+big[0],h:big[1]-big[0]};
  };
  const out=boxes.filter(b=>b.w>=minSide&&b.h>=minSide&&!looksLikeText(b)).map(trim)
    .sort((a,b)=>Math.abs(a.y-b.y)>Math.min(a.h,b.h)*0.5?a.y-b.y:a.x-b.x)
    .map(b=>{const p=3,x=Math.max(0,b.x-p),y=Math.max(0,b.y-p);return{box:{x,y,w:Math.min(w-x,b.w+2*p),h:Math.min(h-y,b.h+2*p)}};});
  return out.slice(0,60).map(o=>({url:cutBox(ctx,bg,w,o.box,520),aspect:o.box.h/o.box.w}));
}
function imgAspect(url){return new Promise(r=>{const i=new Image();i.onload=()=>r(i.naturalHeight/Math.max(1,i.naturalWidth));i.onerror=()=>r(0.75);i.src=url;});}
async function loadMapImage(file){
  const url=await compressImage(file,2200,0.82);
  const dims=await new Promise(r=>{const i=new Image();i.onload=()=>r({w:i.naturalWidth,h:i.naturalHeight});i.onerror=()=>r({w:4,h:3});i.src=url;});
  return{mapImage:url,mapW:1400,mapH:Math.round(1400*dims.h/dims.w)};
}
// Hide an entry from players but keep everything inside it ready to show when it's revealed
function hideKeepContent(e){
  if(e.reveal)return{...e,reveal:{...e.reveal,entry:false},_ts:Date.now()};
  const fields={};[...PHYS_FIELDS.map(x=>x[1]),"portrait","heraldry","hoverLore","threatLevel","tags"].forEach(f=>{fields[f]=true;});
  return{...e,reveal:{entry:false,fields,spans:{}},_ts:Date.now()};
}
const toggleEntryVisible=e=>entryVisible(e)?hideKeepContent(e):{...e,reveal:{...e.reveal,entry:true},_ts:Date.now()};

const checker={backgroundColor:"#d9cfbd",backgroundImage:"linear-gradient(45deg,#c6baa4 25%,transparent 25%),linear-gradient(-45deg,#c6baa4 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#c6baa4 75%),linear-gradient(-45deg,transparent 75%,#c6baa4 75%)",backgroundSize:"14px 14px",backgroundPosition:"0 0,0 7px,7px -7px,-7px 0"};

/* ════ ICON SHEET TOOL ════ */
function IconSheetTool({barony,settlements,onSave,onClose}){
  const [busy,setBusy]=useState(false);const [found,setFound]=useState(null);const [err,setErr]=useState("");
  const pick=async e=>{
    const f=e.target.files&&e.target.files[0];if(!f)return;setBusy(true);setErr("");
    try{const icons=await extractIcons(f);if(!icons.length)setErr("No icons found. Make sure the sheet has a white background with a gap between icons.");setFound(icons.map((ic,i)=>({...ic,key:i,assign:"new",name:""})));}
    catch(x){setErr("Couldn't read that image.");}
    setBusy(false);
  };
  const upd=(k,patch)=>setFound(fs=>fs.map(f=>f.key===k?{...f,...patch}:f));
  const count=found?found.filter(f=>f.assign!=="skip").length:0;
  return(<div style={{position:"fixed",inset:0,zIndex:3000,background:"rgba(0,0,0,0.75)",display:"flex",alignItems:"center",justifyContent:"center",padding:16}}>
    <div style={{background:"#241010",border:"2px solid rgba(220,90,90,0.5)",borderRadius:10,width:"min(980px,100%)",maxHeight:"92vh",display:"flex",flexDirection:"column",boxShadow:"0 10px 50px rgba(0,0,0,0.7)"}}>
      <div style={{padding:"14px 18px",borderBottom:"1px solid rgba(220,90,90,0.3)",display:"flex",alignItems:"center",gap:10}}>
        <div style={{flex:1}}><div style={{fontFamily:"Cinzel",fontSize:15,color:"#ffb4b4",letterSpacing:".06em"}}>Upload icon sheet — {barony.name}</div>
        <div style={{fontSize:12.5,color:"rgba(255,200,200,0.65)",marginTop:2}}>Upload one picture with all your icons on a white background (leave a little white gap between them). Each icon is cut out with a transparent background, then you choose which settlement it belongs to.</div></div>
        <button className="sf-dm-btn" onClick={onClose}>✕ Close</button>
      </div>
      <div style={{padding:16,overflowY:"auto",flex:1}}>
        {!found&&<label className="sf-dm-btn go" style={{display:"inline-block",fontSize:13,padding:"10px 18px"}}>{busy?"Cutting out icons…":"📥 Choose icon sheet"}<input type="file" accept="image/*" style={{display:"none"}} onChange={pick} disabled={busy}/></label>}
        {err&&<p style={{color:"#ff9f8f",marginTop:10}}>{err}</p>}
        {found&&found.length>0&&<>
          <p style={{fontSize:13,color:"rgba(255,210,210,0.75)",marginBottom:12}}>Found {found.length} icon{found.length===1?"":"s"}. Name each one or match it to an existing settlement. Bin anything that isn't an icon.</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(190px,1fr))",gap:12}}>
            {found.map(f=><div key={f.key} style={{background:"rgba(60,10,10,0.5)",border:`1px solid ${f.assign==="skip"?"rgba(255,255,255,0.08)":"rgba(220,90,90,0.4)"}`,borderRadius:6,padding:8,opacity:f.assign==="skip"?0.45:1}}>
              <div style={{...checker,height:120,borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:8}}><img src={f.url} alt="" style={{maxWidth:"100%",maxHeight:112}}/></div>
              <select value={f.assign} onChange={e=>upd(f.key,{assign:e.target.value})} className="sf-dm-input" style={{fontSize:12,marginBottom:6,padding:"4px 6px"}}>
                <option value="new">➕ New settlement</option>
                {settlements.map(s=><option key={s.id} value={String(s.id)}>Use for: {s.name||"Unnamed"}</option>)}
                <option value="skip">🗑 Bin this</option>
              </select>
              {f.assign==="new"&&<input value={f.name} onChange={e=>upd(f.key,{name:e.target.value})} placeholder="Settlement name…" className="sf-dm-input" style={{fontSize:12,padding:"4px 6px"}}/>}
            </div>)}
          </div>
        </>}
      </div>
      {found&&found.length>0&&<div style={{padding:"12px 18px",borderTop:"1px solid rgba(220,90,90,0.3)",display:"flex",gap:8,justifyContent:"flex-end",alignItems:"center"}}>
        <span style={{fontSize:12,color:"rgba(255,200,200,0.6)",flex:1}}>New settlements start hidden from players and off the map — use 📍 Place to put them on it.</span>
        <button className="sf-dm-btn" onClick={()=>setFound(null)}>↺ Different sheet</button>
        <button className="sf-dm-btn go" disabled={!count} onClick={()=>onSave(found.filter(f=>f.assign!=="skip"))}>✓ Save {count} icon{count===1?"":"s"}</button>
      </div>}
    </div>
  </div>);
}

/* ════ DM: MAP CONTROL ════ */
function MapControl({lore,setLore,onOpenOverview}){
  useCleanIcons();
  const places=getPlaces(lore);
  const sets=lore.settlements||[];
  const [selId,setSelId]=useState(null);
  const [tab,setTab]=useState("map");
  const [draw,setDraw]=useState(null);      // {mode:"new",parentId} | {mode:"border",id}
  const [pendingRing,setPendingRing]=useState(null);
  const [newName,setNewName]=useState("");
  const [note,setNote]=useState("");
  const [placing,setPlacing]=useState(null);
  const [openSet,setOpenSet]=useState(null);
  const [sheet,setSheet]=useState(false);
  const [addingSet,setAddingSet]=useState(false);const [newSetName,setNewSetName]=useState("");
  const [busy,setBusy]=useState("");
  const P=placeById(places,selId);
  useEffect(()=>{if(selId!=null&&!P)setSelId(null);},[P,selId]);
  useEffect(()=>{setDraw(null);setPendingRing(null);setPlacing(null);setNote("");setAddingSet(false);},[selId]);
  useEffect(()=>{if(P&&typeOf(P)!=="barony"&&tab==="sets")setTab("map");},[selId]);
  useEffect(()=>{if(!note)return;const t=setTimeout(()=>setNote(""),6000);return()=>clearTimeout(t);},[note]);

  const updEntry=(sec,id,fn)=>setLore(prev=>({...prev,[sec]:(prev[sec]||[]).map(e=>String(e.id)===String(id)?fn(e):e)}));
  const updPlace=(id,patch)=>updEntry("regions",id,e=>({...e,...patch,_ts:Date.now()}));
  const updSet=(id,patch)=>updEntry("settlements",id,e=>({...e,...patch,_ts:Date.now()}));
  const childrenOf=pid=>places.filter(p=>sameParent(p,pid));
  const typeOf=placeType;

  /* ── tree (folds open/closed; settlements sit under their barony) ── */
  const [open,setOpen]=useState(()=>new Set());
  const toggle=k=>setOpen(prev=>{const n=new Set(prev);n.has(k)?n.delete(k):n.add(k);return n;});
  useEffect(()=>{if(!P)return;const keys=[String(P.id),...ancestorsOf(places,P).map(a=>String(a.id))];setOpen(prev=>new Set([...prev,...keys]));},[selId]);
  const renderNode=(p,depth)=>{
    const on=String(selId)===String(p.id);const hidden=!placeVisible(places,p,false);
    const kids=childrenOf(p.id);const mySets=typeOf(p)==="barony"?sets.filter(x=>sameParent({parentId:x.placeId},p.id)):[];
    const n=kids.length+mySets.length;const isOpen=open.has(String(p.id));
    return(<React.Fragment key={p.id}>
      <div onClick={()=>setSelId(p.id)} style={{padding:"6px 8px 6px 0",cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontSize:12.5,fontFamily:"Crimson Pro",
        background:on?"rgba(139,26,26,0.55)":"transparent",borderLeft:on?"3px solid #ff7a7a":"3px solid transparent",color:hidden?"#ff9a8a":"#ffd8d8"}}>
        <span onClick={e=>{if(!n)return;e.stopPropagation();toggle(String(p.id));}} style={{width:22+depth*16,flexShrink:0,alignSelf:"stretch",display:"flex",alignItems:"center",justifyContent:"flex-end",fontSize:16,lineHeight:1,color:"rgba(255,190,190,0.75)",cursor:n?"pointer":"inherit",margin:"-6px 0",padding:"6px 0"}}>{n?(isOpen?"▾":"▸"):""}</span>
        {imgSrc(p.heraldry)&&<img src={imgSrc(p.heraldry)} alt="" style={{width:20,height:20,objectFit:"contain",flexShrink:0}}/>}
        <span style={{flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{p.name||"Unnamed"}</span>
        {!hasRing(p)&&<span title="No border drawn yet" style={{fontSize:10,opacity:.7}}>✏</span>}
        <span title={hidden?"Hidden from players":"Visible to players"} style={{color:hidden?"#ff8a7a":"#9fd89f"}}><Eye open={!hidden} size={12}/></span>
      </div>
      {isOpen&&kids.map(c=>renderNode(c,depth+1))}
      {isOpen&&mySets.map(x=>{const sv=entryVisible(x);const son=String(openSet)===String(x.id)&&on&&tab==="sets";return(
        <div key={"s"+x.id} onClick={()=>{setSelId(p.id);setTab("sets");setOpenSet(x.id);}} style={{padding:`5px 8px 5px ${22+(depth+1)*16+5}px`,cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontSize:12,fontFamily:"Crimson Pro",color:sv?"#f0d0d0":"#ff9a8a",background:son?"rgba(139,26,26,0.35)":"transparent"}}>
          {(()=>{const im=settlementIcon(x).img;return im?<img src={im} alt="" style={{width:20,height:20,objectFit:"contain",flexShrink:0}}/>:null;})()}<span style={{flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{x.name||"Unnamed"}</span>
          <span style={{color:sv?"#9fd89f":"#ff8a7a"}}><Eye open={sv} size={11}/></span>
        </div>);})}
    </React.Fragment>);
  };

  /* ── drawing ── */
  const startNew=parentId=>{setDraw({mode:"new",parentId});setPendingRing(null);setNewName("");setNote("");};
  const ctxFor=d=>{
    if(!d)return null;
    if(d.mode==="new")return drawContext(places,d.parentId,null);
    const X=placeById(places,d.id);return X?drawContext(places,X.parentId,X.id):null;
  };
  const dctx=ctxFor(draw);
  const snap=ring=>{
    const r=clipRing(ring,{rect:dctx.info,within:dctx.within,avoid:dctx.sibs.map(s=>s.polyCoords)});
    if(!r.ring){setNote("That border would sit completely outside the area it belongs to (or on top of a neighbour). Try again.");return null;}
    if(!r.clipped)setNote("Border saved as drawn (the snapping helper didn't load — check your internet).");
    return r.ring;
  };
  const onDrawDone=ring=>{
    const r=snap(ring);if(!r)return;
    if(draw.mode==="border"){updPlace(draw.id,{polyCoords:r});setDraw(null);setNote("Border updated.");return;}
    setPendingRing(r);
  };
  const createPlace=()=>{
    if(!pendingRing||!newName.trim())return;
    const par=placeById(places,draw.parentId);
    const type=par?(PLACE_TYPES[typeOf(par)].child||"barony"):"kingdom";
    const e={...EMPTY_ENTRY(),id:"place_"+Date.now(),name:newName.trim(),placeType:type,parentId:par?par.id:null,polyCoords:pendingRing,
      reveal:{entry:false,fields:{heraldry:true},spans:{}},_ts:Date.now()};
    setLore(prev=>({...prev,regions:[...(prev.regions||[]),e]}));
    setDraw(null);setPendingRing(null);setNewName("");
    setNote(`${PLACE_TYPES[type].label} "${e.name}" created — it's hidden from players until you reveal it.`);
  };

  /* ── which map to show ── */
  let spec;
  if(draw&&dctx){
    const editing=draw.mode==="border"?draw.id:null;
    spec={canvas:dctx.info,
      focus:dctx.within||null,
      shapes:[...dctx.sibs.map(s=>({id:s.id,ring:s.polyCoords,label:s.name,state:"faint",clickable:false})),
        ...(editing&&hasRing(placeById(places,editing))?[{id:"cur",ring:placeById(places,editing).polyCoords,state:"editing",clickable:false}]:[]),
        ...(pendingRing?[{id:"new",ring:pendingRing,state:"editing",clickable:false}]:[])],
      draw:!pendingRing};
  }else if(!P){
    spec={canvas:canvasInfo(null),shapes:childrenOf(null).filter(hasRing).map(p=>({id:p.id,ring:p.polyCoords,label:p.name,state:placeVisible(places,p,false)?"normal":"hidden",shield:imgSrc(p.heraldry)||PLACE_TYPES[typeOf(p)].icon}))};
  }else{
    const t=typeOf(P);
    if(t==="kingdom")spec={canvas:canvasInfo(P),shapes:childrenOf(P.id).filter(hasRing).map(p=>({id:p.id,ring:p.polyCoords,label:p.name,state:placeVisible(places,p,false)?"normal":"hidden"}))};
    else if(t==="region"){const cv=canvasOf(places,P);spec={canvas:canvasInfo(cv),focus:hasRing(P)?P.polyCoords:null,shapes:childrenOf(P.id).filter(hasRing).map(p=>({id:p.id,ring:p.polyCoords,label:p.name,state:placeVisible(places,p,false)?"normal":"hidden"}))};}
    else{
      const mine=sets.filter(s=>sameParent({parentId:s.placeId},P.id));
      spec={canvas:canvasInfo(P),barony:true,
        pins:mine.filter(s=>s.mapX!=null).map(s=>{const ic=settlementIcon(s);return{id:s.id,lat:s.mapY,lng:s.mapX,img:ic.img,size:s.iconSize||90,aspect:s.iconAspect||0.75,hidden:!entryVisible(s),selected:String(openSet)===String(s.id),draggable:true,tip:`<b>${escHtml(s.name)}</b>${s.hoverLore?"<br/>"+escHtml(s.hoverLore.slice(0,160)):""}`};}),
        zones:P.mapId==="barony"&&!imgSrc(P.mapImage)?BARONY_TERRAIN.map(z=>({id:"t:"+z.id,lat:1050-z.iy,lng:z.ix,label:z.name})):[]};
    }
  }

  const onShapeClick=id=>{if(!draw)setSelId(id);};
  const onMapClick=ll=>{
    if(placing!=null){updSet(placing,{mapY:Math.round(ll[0]),mapX:Math.round(ll[1])});setPlacing(null);setNote("Placed. Drag the icon to fine-tune.");}
  };
  const uploadMap=async(e,id)=>{
    const f=e.target.files&&e.target.files[0];e.target.value="";if(!f)return;
    setBusy("Uploading map…");try{const m=await loadMapImage(f);updPlace(id,m);setNote("Map uploaded.");}catch(x){setNote("Couldn't read that image.");}setBusy("");
  };
  const uploadHeraldry=async(e,id)=>{
    const f=e.target.files&&e.target.files[0];e.target.value="";if(!f)return;
    setBusy("Removing background…");const url=await cutoutFile(f,300).catch(()=>null);setBusy("");if(url)updPlace(id,{heraldry:url});
  };
  const uploadSetIcon=async(e,id)=>{
    const f=e.target.files&&e.target.files[0];e.target.value="";if(!f)return;
    setBusy("Removing background…");const url=await cutoutFile(f,520).catch(()=>null);setBusy("");if(url){const a=await imgAspect(url);updSet(id,{iconImg:url,iconKey:null,iconAspect:a});}
  };
  const saveSheet=items=>{
    setLore(prev=>{
      let list=[...(prev.settlements||[])];
      items.forEach((it,i)=>{
        if(it.assign==="new"){list.push({...EMPTY_ENTRY(),id:"set_"+Date.now()+"_"+i,name:(it.name||"").trim()||"Unnamed settlement",placeId:P.id,iconImg:it.url,iconAspect:it.aspect||0.75,mapX:null,mapY:null,hoverLore:"",
          reveal:{entry:false,fields:{hoverLore:true,portrait:true},spans:{}},_ts:Date.now()});}
        else list=list.map(s=>String(s.id)===it.assign?{...s,iconImg:it.url,iconKey:null,iconAspect:it.aspect||0.75,_ts:Date.now()}:s);
      });
      return{...prev,settlements:list};
    });
    setSheet(false);setTab("map");setNote(`${items.length} icon${items.length===1?"":"s"} saved.`);
  };
  const addSettlement=()=>{
    if(!newSetName.trim())return;
    const e={...EMPTY_ENTRY(),id:"set_"+Date.now(),name:newSetName.trim(),placeId:P.id,mapX:null,mapY:null,hoverLore:"",reveal:{entry:false,fields:{hoverLore:true,portrait:true},spans:{}},_ts:Date.now()};
    setLore(prev=>({...prev,settlements:[...(prev.settlements||[]),e]}));
    setNewSetName("");setAddingSet(false);setOpenSet(e.id);
  };
  const [ask,setAsk]=useState(null);
  const delPlace=()=>{
    if(childrenOf(P.id).length){alert("Move or delete what's inside this first.");return;}
    setAsk({name:P.name,run:()=>doDelPlace(P)});
  };
  const doDelPlace=P=>{
    setLore(prev=>({...prev,regions:(prev.regions||[]).filter(p=>String(p.id)!==String(P.id)),settlements:(prev.settlements||[]).map(s=>String(s.placeId)===String(P.id)?{...s,placeId:null}:s)}));
    setSelId(P.parentId!=null?P.parentId:null);
  };
  const delSet=s=>setAsk({name:s.name||"this settlement",run:()=>{setLore(prev=>({...prev,settlements:(prev.settlements||[]).filter(x=>String(x.id)!==String(s.id))}));if(String(openSet)===String(s.id))setOpenSet(null);if(String(looseSel)===String(s.id))setLooseSel(null);}});
  const [looseOpen,setLooseOpen]=useState(false);const [looseSel,setLooseSel]=useState(null);
  const baronies=places.filter(p=>placeType(p)==="barony");
  const loose=sets.filter(x=>x.placeId==null||!places.some(p=>String(p.id)===String(x.placeId)));

  /* ── panel bits ── */
  const lbl={fontFamily:"Cinzel",fontSize:10,color:"rgba(255,170,170,0.65)",letterSpacing:".07em",marginBottom:4};
  const t=P?typeOf(P):null;
  const childType=P?PLACE_TYPES[t].child:"kingdom";
  const parentOptions=P?places.filter(x=>{
    if(String(x.id)===String(P.id))return false;
    if(ancestorsOf(places,x).some(a=>String(a.id)===String(P.id)))return false;
    const xt=typeOf(x);return t==="region"?xt==="kingdom":t==="barony"?(xt==="region"||xt==="kingdom"):false;
  }):[];
  const mapNeedsUpload=P&&(t==="kingdom"||t==="barony")&&!canvasInfo(P);
  const mine=P&&t==="barony"?sets.filter(s=>sameParent({parentId:s.placeId},P.id)):[];

  const drawButtons=!draw&&<>
    {(!P||(t!=="barony"&&!mapNeedsUpload&&(t!=="region"||hasRing(P))))&&<button className="sf-dm-btn" onClick={()=>startNew(P?P.id:null)}>✏ Draw a new {PLACE_TYPES[childType].label.toLowerCase()}</button>}
    {P&&<button className="sf-dm-btn" onClick={()=>{if(!drawContext(places,P.parentId,P.id).info){setNote("The map this border goes on hasn't been uploaded yet.");return;}setDraw({mode:"border",id:P.id});}}>✏ {hasRing(P)?"Redraw":"Draw"} {P.name}'s border</button>}
  </>;

  return(<div style={{display:"flex",height:"100%",gap:12,flexWrap:"wrap"}}>
    {sheet&&P&&<IconSheetTool barony={P} settlements={mine} onSave={saveSheet} onClose={()=>setSheet(false)}/>}
    {/* tree */}
    <div style={{width:230,flex:"0 0 230px",background:"rgba(60,0,0,0.3)",border:"1px solid rgba(200,50,50,0.25)",borderRadius:6,overflowY:"auto",maxHeight:"100%"}}>
      <div style={{...lbl,padding:"10px 12px 4px"}}>THE REALM</div>
      <div onClick={()=>{setSelId(null);setLooseSel(null);}} style={{padding:"8px 10px",cursor:"pointer",fontSize:13,display:"flex",gap:6,background:selId==null&&looseSel==null?"rgba(139,26,26,0.55)":"transparent",borderLeft:selId==null?"3px solid #ff7a7a":"3px solid transparent",color:"#ffd8d8",fontFamily:"Cinzel",letterSpacing:".03em"}}>🌍 World Map</div>
      {childrenOf(null).map(p=>renderNode(p,1))}
      {loose.length>0&&<>
        <div onClick={()=>setLooseOpen(o=>!o)} style={{padding:"7px 8px 7px 0",cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontSize:12,fontStyle:"italic",color:"rgba(255,190,190,0.6)",userSelect:"none"}}>
          <span style={{width:38,textAlign:"right",fontSize:16,fontStyle:"normal"}}>{looseOpen?"▾":"▸"}</span>Not in a barony ({loose.length})</div>
        {looseOpen&&loose.map(x=>{const sv=entryVisible(x);const on=String(looseSel)===String(x.id);return(
          <div key={"l"+x.id} onClick={()=>{setLooseSel(x.id);setSelId(null);}} style={{padding:"5px 8px 5px 43px",cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontSize:12,fontFamily:"Crimson Pro",color:sv?"#f0d0d0":"#ff9a8a",background:on?"rgba(139,26,26,0.45)":"transparent"}}>
            {(()=>{const im=settlementIcon(x).img;return im?<img src={im} alt="" style={{width:20,height:20,objectFit:"contain",flexShrink:0}}/>:null;})()}
            <span style={{flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{x.name||"Unnamed"}</span>
            <span style={{color:sv?"#9fd89f":"#ff8a7a"}}><Eye open={sv} size={11}/></span>
          </div>);})}
      </>}
      <div style={{fontSize:11,color:"rgba(255,170,170,0.45)",padding:"10px 12px",lineHeight:1.5}}><Eye open size={11}/> visible · <Eye open={false} size={11}/> hidden · ✏ no border yet</div>
    </div>

    {ask&&<DelModal name={ask.name} onOk={()=>{ask.run();setAsk(null);}} onNo={()=>setAsk(null)}/>}
    {/* panel */}
    {!P&&looseSel!=null&&(()=>{const x=loose.find(y=>String(y.id)===String(looseSel));if(!x)return null;const vis=entryVisible(x);const ic=settlementIcon(x);
      return(<div style={{flex:"1 1 420px",minWidth:0,display:"flex",flexDirection:"column",gap:12}}>
        <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
          <span style={{fontFamily:"Cinzel",fontSize:18,color:"#ffb4b4",flex:1}}>{x.name||"Unnamed"}</span>
          <span style={{fontFamily:"Cinzel",fontSize:10,color:"rgba(255,170,170,0.6)",letterSpacing:".08em"}}>SETTLEMENT · NOT IN A BARONY</span>
          <button className="sf-dm-btn" onClick={()=>setLooseSel(null)}>✕</button>
        </div>
        <div style={{display:"flex",gap:14,flexWrap:"wrap",alignItems:"flex-start"}}>
          <div style={{...checker,width:120,height:90,borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center"}}>{ic.img?<img src={ic.img} alt="" style={{maxWidth:116,maxHeight:86}}/>:<span style={{fontSize:28}}>🏠</span>}</div>
          <div style={{display:"flex",flexDirection:"column",gap:8,flex:"1 1 240px"}}>
            <div><div style={lbl}>PUT IT IN A BARONY</div>
              <select className="sf-dm-input" value="" onChange={e=>{if(!e.target.value)return;updSet(x.id,{placeId:(baronies.find(b=>String(b.id)===e.target.value)||{}).id,mapX:null,mapY:null});setLooseSel(null);setSelId((baronies.find(b=>String(b.id)===e.target.value)||{}).id);setTab("sets");}}>
                <option value="">— Choose a barony —</option>{baronies.map(b=><option key={b.id} value={String(b.id)}>{b.name}</option>)}</select></div>
            <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
              <button className={`sf-dm-btn${vis?" go":""}`} onClick={()=>updEntry("settlements",x.id,toggleEntryVisible)}><Eye open={vis} size={12}/> {vis?"Revealed":"Hidden"}</button>
              {(x.iconImg||x.iconKey)&&<button className="sf-dm-btn" onClick={()=>updSet(x.id,{iconImg:null,iconKey:null})}>Remove icon</button>}
              <button className="sf-dm-btn" onClick={()=>onOpenOverview&&onOpenOverview("settlements",x.id)}>📜 Open in Overview</button>
              <button className="sf-dm-btn" onClick={()=>delSet(x)}>🗑 Delete settlement</button>
            </div>
          </div>
        </div>
      </div>);})()}
    {!(!P&&looseSel!=null&&loose.some(y=>String(y.id)===String(looseSel)))&&<div style={{flex:"1 1 420px",minWidth:0,display:"flex",flexDirection:"column",gap:10,minHeight:0}}>
      {/* header */}
      <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
        {P?<>
          <span style={{fontSize:20}}>{PLACE_TYPES[t].icon}</span>
          <ShInput value={P.name} onCommit={v=>v.trim()&&updPlace(P.id,{name:v.trim()})} className="" style={{fontFamily:"Cinzel",fontSize:18,color:"#ffb4b4",background:"transparent",border:"none",borderBottom:"1px solid rgba(255,120,120,0.4)",outline:"none",minWidth:120,flex:"1 1 160px",padding:"2px 0"}}/>
          <span style={{fontFamily:"Cinzel",fontSize:10,color:"rgba(255,170,170,0.6)",letterSpacing:".08em"}}>{PLACE_TYPES[t].label.toUpperCase()}</span>
          <button className={`sf-dm-btn${entryVisible(P)?" go":""}`} onClick={()=>updEntry("regions",P.id,toggleEntryVisible)}><Eye open={entryVisible(P)} size={12}/> {entryVisible(P)?"Revealed to players":"Hidden — click to reveal"}</button>
          <button className="sf-dm-btn" onClick={delPlace} title="Delete">🗑</button>
        </>:<>
          <span style={{fontSize:20}}>🌍</span>
          <span style={{fontFamily:"Cinzel",fontSize:18,color:"#ffb4b4",flex:1}}>World Map</span>
        </>}
      </div>
      {P&&entryVisible(P)&&!placeVisible(places,P,false)&&<div style={{fontSize:12,color:"#ffb08a"}}>Players still can't see this — something it's inside is hidden.</div>}
      {/* tabs */}
      {P&&<div style={{display:"flex",borderBottom:"1px solid rgba(200,50,50,0.3)",flexWrap:"wrap"}}>
        <button className={`sf-tab${tab==="map"?" on":""}`} onClick={()=>setTab("map")}>Map</button>
        {t==="barony"&&<button className={`sf-tab${tab==="sets"?" on":""}`} onClick={()=>setTab("sets")}>Settlements ({mine.length})</button>}
        <button className={`sf-tab${tab==="lore"?" on":""}`} onClick={()=>setTab("lore")}>Lore</button>
      </div>}
      {(note||busy)&&<div style={{fontSize:12.5,color:busy?"#ffe0a0":"#b8f0b8",background:"rgba(0,0,0,0.3)",padding:"5px 10px",borderRadius:4}}>{busy||note}</div>}

      {/* MAP TAB */}
      {(!P||tab==="map")&&<>
        <div style={{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center"}}>
          {drawButtons}
          {P&&(t==="kingdom"||t==="barony")&&canvasInfo(P)&&!draw&&<label className="sf-dm-btn">🖼 Replace {PLACE_TYPES[t].label.toLowerCase()} map<input type="file" accept="image/*" style={{display:"none"}} onChange={e=>uploadMap(e,P.id)}/></label>}
          {P&&t==="barony"&&canvasInfo(P)&&!draw&&<button className="sf-dm-btn" onClick={()=>setSheet(true)}>⬆ Upload icon sheet</button>}
          {placing!=null&&<span style={{fontSize:12.5,color:"#bfe9ff"}}>Click the map where {(sets.find(s=>String(s.id)===String(placing))||{}).name} goes… <button className="sf-dm-btn" onClick={()=>setPlacing(null)}>Cancel</button></span>}
        </div>
        {pendingRing&&<div style={{display:"flex",gap:6,alignItems:"center",flexWrap:"wrap",background:"rgba(10,20,30,0.6)",border:"1px solid #7fd4ff",borderRadius:6,padding:"8px 10px"}}>
          <span style={{fontFamily:"Cinzel",fontSize:11,color:"#bfe9ff"}}>Name this {PLACE_TYPES[(placeById(places,draw.parentId)?PLACE_TYPES[typeOf(placeById(places,draw.parentId))].child:"kingdom")].label.toLowerCase()}:</span>
          <input autoFocus value={newName} onChange={e=>setNewName(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")createPlace();}} className="sf-dm-input" style={{width:200}} placeholder="Name…"/>
          <button className="sf-dm-btn go" onClick={createPlace} disabled={!newName.trim()}>✓ Create</button>
          <button className="sf-dm-btn" onClick={()=>{setPendingRing(null);}}>↺ Redraw</button>
          <button className="sf-dm-btn" onClick={()=>{setPendingRing(null);setDraw(null);}}>✕ Cancel</button>
        </div>}
        {mapNeedsUpload&&!draw?<div style={{flex:1,minHeight:280,border:"2px dashed rgba(220,90,90,0.4)",borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:12,padding:20,textAlign:"center"}}>
          <div style={{fontFamily:"Cinzel",color:"#ffb4b4",fontSize:14}}>Upload the {PLACE_TYPES[t].label.toLowerCase()} map for {P.name}</div>
          <div style={{fontSize:13,color:"rgba(255,200,200,0.6)",maxWidth:420}}>{t==="kingdom"?"After uploading you can draw this duchy's regions on it.":"After uploading you can place this barony's settlement icons on it."}</div>
          <label className="sf-dm-btn go" style={{fontSize:13,padding:"9px 18px"}}>📥 Upload map<input type="file" accept="image/*" style={{display:"none"}} onChange={e=>uploadMap(e,P.id)}/></label>
        </div>
        :P&&t==="region"&&!draw&&!spec.canvas?<div style={{padding:20,color:"#ffb4b4"}}>Upload a map for the duchy this region is in first.</div>
        :<div style={{flex:"1 1 360px",minHeight:320,position:"relative"}}>
          <PlaceMap canvas={spec.canvas} shapes={spec.shapes} focusRing={spec.focus} pins={spec.pins} zones={spec.zones}
            onShapeClick={onShapeClick} onPinClick={id=>{if(!String(id).startsWith("t:"))setOpenSet(id);}} onPinMove={(id,ll)=>updSet(id,{mapY:ll[0],mapX:ll[1]})}
            onMapClick={onMapClick} cursor={placing!=null}
            draw={spec.draw} onDrawDone={onDrawDone} onDrawCancel={()=>{setDraw(null);setPendingRing(null);}}
            drawHint={draw?(draw.mode==="border"?"Click around the edge to redraw the border — it snaps inside its parent and against neighbours":"Click around the edge — it snaps inside its parent and against neighbours"):""}/>
          {P&&t==="barony"&&!draw&&(()=>{const x=mine.find(m=>String(m.id)===String(openSet)&&m.mapX!=null);if(!x)return null;const vis=entryVisible(x);
            return(<div style={{position:"absolute",left:12,bottom:12,zIndex:1100,background:"rgba(30,6,6,0.94)",border:"1px solid rgba(255,120,120,0.45)",borderRadius:6,padding:"10px 12px",width:270,maxWidth:"calc(100% - 24px)"}}>
              <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:8}}>
                <span style={{fontFamily:"Cinzel",fontSize:13,color:"#ffd0d0",flex:1}}>{x.name}</span>
                <button className="sf-dm-btn" style={{padding:"1px 7px"}} onClick={()=>setOpenSet(null)}>✕</button></div>
              <div style={{...lbl,display:"flex",justifyContent:"space-between"}}><span>ICON SIZE</span><span>{x.iconSize||90}</span></div>
              <input type="range" min="20" max="1400" step="5" value={x.iconSize||90} onChange={e=>updSet(x.id,{iconSize:+e.target.value})} style={{width:"100%",accentColor:"#ff7a7a"}}/>
              <div style={{display:"flex",gap:5,marginTop:8,flexWrap:"wrap"}}>
                <button className={`sf-dm-btn${vis?" go":""}`} onClick={()=>updEntry("settlements",x.id,toggleEntryVisible)}><Eye open={vis} size={12}/> {vis?"Revealed":"Hidden"}</button>
                <button className="sf-dm-btn" onClick={()=>setTab("sets")}>▾ Lore</button>
              </div>
              <div style={{fontSize:11,color:"rgba(255,190,190,0.55)",marginTop:6}}>Drag the icon to move it.</div>
            </div>);})()}
        </div>}
        {P&&t==="barony"&&canvasInfo(P)&&!draw&&mine.some(s=>s.mapX==null)&&<div style={{fontSize:12.5,color:"rgba(255,200,200,0.75)"}}>
          Not on the map yet: {mine.filter(s=>s.mapX==null).map(s=><button key={s.id} className="sf-dm-btn" style={{margin:"2px 4px",padding:"3px 8px"}} onClick={()=>setPlacing(s.id)}>📍 {s.name}</button>)}
        </div>}
        {!P&&<div style={{fontSize:12.5,color:"rgba(255,200,200,0.6)"}}>Draw each duchy's border on the world map, then pick it in the list to upload its map and draw its regions.</div>}
      </>}

      {/* SETTLEMENTS TAB */}
      {P&&t==="barony"&&tab==="sets"&&<div style={{overflowY:"auto",display:"flex",flexDirection:"column",gap:6,paddingBottom:20}}>
        <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
          {addingSet?<><input autoFocus value={newSetName} onChange={e=>setNewSetName(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")addSettlement();if(e.key==="Escape")setAddingSet(false);}} className="sf-dm-input" style={{width:220}} placeholder="Settlement name…"/>
            <button className="sf-dm-btn go" onClick={addSettlement}>✓ Add</button><button className="sf-dm-btn" onClick={()=>setAddingSet(false)}>✕</button></>
          :<button className="sf-dm-btn" onClick={()=>setAddingSet(true)}>+ Add settlement</button>}
          <button className="sf-dm-btn" onClick={()=>setSheet(true)}>⬆ Upload icon sheet</button>
        </div>
        {mine.length===0&&<div style={{color:"rgba(255,180,180,0.5)",fontStyle:"italic",padding:10}}>No settlements yet.</div>}
        {mine.map(s=>{const ic=settlementIcon(s);const open=String(openSet)===String(s.id);const vis=entryVisible(s);
          return(<div key={s.id} style={{background:"rgba(60,0,0,0.3)",border:`1px solid ${open?"rgba(255,120,120,0.5)":"rgba(200,50,50,0.2)"}`,borderRadius:6}}>
            <div style={{display:"flex",alignItems:"center",gap:8,padding:"6px 8px",flexWrap:"wrap"}}>
              <div style={{...checker,width:48,height:36,borderRadius:3,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{ic.img?<img src={ic.img} alt="" style={{maxWidth:46,maxHeight:34,mixBlendMode:ic.blend?"multiply":"normal"}}/>:<span>🏠</span>}</div>
              <span style={{flex:"1 1 120px",fontFamily:"Cinzel",fontSize:12.5,color:vis?"#ffe0e0":"#ff9a8a",letterSpacing:".03em"}}>{s.name||"Unnamed"}</span>
              <button className={`sf-dm-btn${vis?" go":""}`} onClick={()=>updEntry("settlements",s.id,toggleEntryVisible)}><Eye open={vis} size={12}/> {vis?"Revealed":"Hidden"}</button>
              <button className="sf-dm-btn" onClick={()=>{setPlacing(s.id);setTab("map");}}>📍 {s.mapX==null?"Place":"Move"}</button>
              <button className="sf-dm-btn" onClick={()=>setOpenSet(open?null:s.id)}>{open?"▴":"▾"} Lore</button>
              <button className="sf-dm-btn" title="Delete settlement" onClick={()=>delSet(s)}>🗑</button>
            </div>
            {open&&<div style={{padding:"4px 12px 12px",display:"flex",flexDirection:"column",gap:8}}>
              <div>
                <div style={{...lbl,display:"flex",alignItems:"center",gap:6}}>SHOWN WHEN YOU HOVER OVER IT ON THE MAP
                  <button className="sf-dm-btn" style={{padding:"1px 6px",fontSize:10}} onClick={()=>updEntry("settlements",s.id,e=>({...e,reveal:{...(e.reveal||{entry:true,spans:{}}),fields:{...((e.reveal||{}).fields||{}),hoverLore:!fieldVisible(e,"hoverLore")}},_ts:Date.now()}))}>
                    <Eye open={fieldVisible(s,"hoverLore")} size={11}/> {fieldVisible(s,"hoverLore")?"players can read it":"hidden from players"}</button></div>
                <MentionTextarea value={s.hoverLore||""} onCommit={v=>updEntry("settlements",s.id,e=>applyEntryField(e,"hoverLore",v))} className="sf-dm-input" style={{minHeight:70,resize:"vertical",lineHeight:1.5}} placeholder="A line or two players see when hovering the icon…"/>
              </div>
              <div><div style={{...lbl,display:"flex",justifyContent:"space-between",maxWidth:320}}><span>ICON SIZE ON THE MAP</span><span>{s.iconSize||90}</span></div>
                <input type="range" min="20" max="1400" step="5" value={s.iconSize||90} onChange={e=>updSet(s.id,{iconSize:+e.target.value})} style={{width:"100%",maxWidth:320,accentColor:"#ff7a7a"}}/></div>
              <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                <label className="sf-dm-btn">🖼 Change icon<input type="file" accept="image/*" style={{display:"none"}} onChange={e=>uploadSetIcon(e,s.id)}/></label>
                {(s.iconImg||s.iconKey)&&<button className="sf-dm-btn" onClick={()=>updSet(s.id,{iconImg:null,iconKey:null})}>Remove icon</button>}
                {s.mapX!=null&&<button className="sf-dm-btn" onClick={()=>updSet(s.id,{mapX:null,mapY:null})}>Take off map</button>}
                <button className="sf-dm-btn" onClick={()=>onOpenOverview&&onOpenOverview("settlements",s.id)}>📜 Full lore & reveals in Overview</button>
                <button className="sf-dm-btn" onClick={()=>delSet(s)}>🗑 Delete</button>
              </div>
            </div>}
          </div>);})}
      </div>}

      {/* LORE TAB */}
      {P&&tab==="lore"&&<div style={{overflowY:"auto",display:"flex",flexDirection:"column",gap:12,paddingBottom:20}}>
        <div style={{display:"flex",gap:16,flexWrap:"wrap"}}>
          <div>
            <div style={lbl}>HERALDRY</div>
            <div style={{...checker,width:110,height:110,borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden"}}>
              {imgSrc(P.heraldry)?<img src={imgSrc(P.heraldry)} alt="" style={{maxWidth:100,maxHeight:100}}/>:<span style={{fontSize:30}}>{PLACE_TYPES[t].icon}</span>}
              <label style={{position:"absolute",bottom:0,left:0,right:0,background:"rgba(0,0,0,0.65)",color:"#ffd8d8",fontSize:10,textAlign:"center",padding:3,cursor:"pointer",fontFamily:"Cinzel"}}>Upload<input type="file" accept="image/*" style={{display:"none"}} onChange={e=>uploadHeraldry(e,P.id)}/></label>
            </div>
            <div style={{fontSize:11,color:"rgba(255,180,180,0.5)",marginTop:4,maxWidth:120}}>White background is removed automatically</div>
          </div>
          <div style={{flex:"1 1 220px",display:"flex",flexDirection:"column",gap:8}}>
            <div><div style={lbl}>TYPE</div>
              <select className="sf-dm-input" value={t} onChange={e=>updPlace(P.id,{placeType:e.target.value})}>{Object.entries(PLACE_TYPES).map(([k,v])=><option key={k} value={k}>{v.icon} {v.label}</option>)}</select></div>
            {t!=="kingdom"&&<div><div style={lbl}>BELONGS TO</div>
              <select className="sf-dm-input" value={P.parentId==null?"":String(P.parentId)} onChange={e=>updPlace(P.id,{parentId:e.target.value===""?null:(placeById(places,e.target.value)||{}).id})}>
                <option value="">— Nothing (drawn on the world map) —</option>
                {parentOptions.map(o=><option key={o.id} value={String(o.id)}>{PLACE_TYPES[typeOf(o)].icon} {o.name}</option>)}
              </select>
              <div style={{fontSize:11,color:"rgba(255,180,180,0.5)",marginTop:3}}>If you move it, redraw its border on the new map.</div></div>}
          </div>
        </div>
        <div><div style={lbl}>DESCRIPTION</div>
          <MentionTextarea value={P.description||""} onCommit={v=>updEntry("regions",P.id,e=>applyEntryField(e,"description",v))} className="sf-dm-input" style={{minHeight:100,resize:"vertical",lineHeight:1.55}} placeholder="What players know — shown in the map popup once revealed…"/></div>
        <div><div style={lbl}>FURTHER LORE</div>
          <MentionTextarea value={P.lore||""} onCommit={v=>updEntry("regions",P.id,e=>applyEntryField(e,"lore",v))} className="sf-dm-input" style={{minHeight:140,resize:"vertical",lineHeight:1.55}} placeholder="History, rulers, rumours…"/></div>
        <div><div style={lbl}>DESCRIPTION — DM VERSION (ONLY YOU SEE THIS)</div>
          <MentionTextarea value={P.dm_description||""} onCommit={v=>updEntry("regions",P.id,e=>applyEntryField(e,"dm_description",v))} className="sf-dm-input" style={{minHeight:90,resize:"vertical",lineHeight:1.55}} placeholder="Secrets about this place…"/></div>
        <div><div style={lbl}>FURTHER LORE — DM VERSION (ONLY YOU SEE THIS)</div>
          <MentionTextarea value={P.dm_lore||""} onCommit={v=>updEntry("regions",P.id,e=>applyEntryField(e,"dm_lore",v))} className="sf-dm-input" style={{minHeight:90,resize:"vertical",lineHeight:1.55}} placeholder="Hidden history, true rulers…"/></div>
        <div style={{fontSize:12.5,color:"rgba(255,200,200,0.7)"}}>Description and Further Lore are visible to players once this place is revealed. The DM versions stay hidden until you reveal parts of them in Overview.
          <button className="sf-dm-btn" style={{marginLeft:8}} onClick={()=>onOpenOverview&&onOpenOverview("regions",P.id)}>📜 Open in Overview</button></div>
      </div>}
    </div>}
  </div>);
}

/* ════ DM: PRIVATE NOTEPAD ════ */
function DMPrivateLore({dmLore,setDmLore}){
  const [selId,setSelId]=useState(null);
  const [adding,setAdding]=useState(false);
  const [newTitle,setNewTitle]=useState("");
  const notes=Object.values(dmLore||{}).sort((a,b)=>String(b.id).localeCompare(String(a.id)));
  const selNote=selId?dmLore[selId]:null;
  const addNote=()=>{
    if(!newTitle.trim())return;
    const id="dm_"+Date.now();
    setDmLore(prev=>({...prev,[id]:{id,title:newTitle.trim(),content:""}}));
    setSelId(id);setNewTitle("");setAdding(false);
  };
  const updNote=(f,v)=>setDmLore(prev=>prev[selId]?({...prev,[selId]:{...prev[selId],[f]:v}}):prev);
  return(<div style={{display:"flex",gap:14,height:"100%",flexWrap:"wrap"}}>
    <div style={{width:220,flex:"0 0 220px",display:"flex",flexDirection:"column",gap:6,overflowY:"auto",maxHeight:"100%"}}>
      <div style={{fontFamily:"Cinzel",fontSize:11,color:"rgba(255,150,150,0.6)",letterSpacing:"0.06em"}}>DM NOTEPAD — only you see this</div>
      {adding?<div style={{display:"flex",gap:4}}>
        <input autoFocus value={newTitle} onChange={e=>setNewTitle(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")addNote();if(e.key==="Escape")setAdding(false);}} placeholder="Note title…" className="sf-dm-input" style={{fontSize:13}}/>
        <button className="sf-dm-btn go" onClick={addNote} disabled={!newTitle.trim()}>✓</button>
        <button className="sf-dm-btn" onClick={()=>setAdding(false)}>✕</button>
      </div>:<button className="sf-dm-btn" onClick={()=>setAdding(true)} style={{fontSize:13,padding:"7px"}}>+ New note</button>}
      {notes.map(n=><div key={n.id} onClick={()=>setSelId(n.id)} style={{padding:"8px 10px",borderRadius:4,cursor:"pointer",background:selId===n.id?"rgba(139,26,26,0.5)":"rgba(80,0,0,0.2)",border:`1px solid ${selId===n.id?"rgba(200,50,50,0.5)":"rgba(200,50,50,0.15)"}`,fontFamily:"Cinzel",fontSize:11.5,color:"#ffb4b4",letterSpacing:"0.03em"}}>{n.title||"Untitled"}</div>)}
      {!notes.length&&!adding&&<div style={{fontSize:12,color:"rgba(255,150,150,0.4)",fontStyle:"italic"}}>No notes yet.</div>}
    </div>
    <div style={{flex:"1 1 300px",display:"flex",flexDirection:"column",gap:10,minHeight:300}}>
      {selNote?<>
        <ShInput value={selNote.title||""} onCommit={v=>updNote("title",v)} className="" style={{fontFamily:"Cinzel",fontSize:16,color:"#ff9999",letterSpacing:"0.05em",background:"transparent",border:"none",borderBottom:"1px solid rgba(200,50,50,0.4)",padding:"4px 0",outline:"none"}}/>
        <textarea value={selNote.content||""} onChange={e=>updNote("content",e.target.value)} placeholder="Ideas, plot threads, things to remember…"
          style={{flex:1,fontFamily:"Crimson Pro,serif",background:"rgba(60,0,0,0.3)",border:"1px solid rgba(200,50,50,0.3)",color:"#ffcccc",borderRadius:6,padding:12,fontSize:15,outline:"none",resize:"none",lineHeight:1.7,minHeight:260}}/>
        <div><button className="sf-dm-btn" onClick={()=>{if(confirm("Delete this note?")){setDmLore(prev=>{const n={...prev};delete n[selId];return n;});setSelId(null);}}}>🗑 Delete note</button></div>
      </>:<div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"rgba(255,150,150,0.35)",fontFamily:"Cinzel",fontSize:13}}>Select a note or press + New note</div>}
    </div>
  </div>);
}

/* ════ DM TAB ════ */
const DM_PASSWORD="HarveysBalls";
function DMTab({data,setData,lore,setLore,onAuth,characters}){
  const [authed,setAuthed]=useState(()=>{try{return localStorage.getItem("sf_dm")==="1";}catch(e){return false;}});
  const [pw,setPw]=useState("");const [pwErr,setPwErr]=useState(false);
  const [active,setActive]=useState("overview");
  const [target,setTarget]=useState(null);
  const tryLogin=()=>{
    if(pw===DM_PASSWORD){try{localStorage.setItem("sf_dm","1");}catch(e){}setAuthed(true);onAuth&&onAuth(true);}
    else{setPwErr(true);setTimeout(()=>setPwErr(false),1500);}
  };
  if(!authed)return(<div style={{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--dark)",padding:16}}>
    <div style={{background:"var(--parch)",border:"2px solid var(--gold2)",borderRadius:10,padding:32,width:340,maxWidth:"100%",boxShadow:"0 8px 40px rgba(0,0,0,0.6)"}}>
      <h2 style={{fontFamily:"Cinzel",fontSize:18,color:"var(--gold)",marginBottom:6,letterSpacing:"0.08em"}}>⚔ DM Access</h2>
      <p style={{fontSize:13,color:"var(--ink2)",marginBottom:20,lineHeight:1.6}}>Enter the DM password to access campaign master controls.</p>
      <input type="password" value={pw} onChange={e=>setPw(e.target.value)} onKeyDown={e=>e.key==="Enter"&&tryLogin()} placeholder="Password..." autoFocus
        style={{fontFamily:"Crimson Pro,serif",background:pwErr?"rgba(139,26,26,0.1)":"var(--parch2)",border:`1px solid ${pwErr?"var(--red)":"var(--border2)"}`,color:"var(--ink)",borderRadius:4,padding:"8px 12px",width:"100%",fontSize:14,outline:"none",marginBottom:12}}/>
      {pwErr&&<p style={{color:"var(--red)",fontSize:12,marginBottom:10}}>Incorrect password.</p>}
      <button onClick={tryLogin} style={{fontFamily:"Cinzel",background:"var(--gold2)",color:"var(--dark)",border:"none",borderRadius:5,padding:"10px 24px",fontSize:13,cursor:"pointer",width:"100%",letterSpacing:"0.06em"}}>Enter →</button>
    </div>
  </div>);
  const dmLore=data.dmLore||{};
  const setDmLore=fn=>setData(d=>({...d,dmLore:typeof fn==="function"?fn(d.dmLore||{}):fn}));
  const openOverview=(s,id)=>{setTarget({s,id,n:Date.now()});setActive("overview");};
  const SECS=[{id:"overview",label:"Overview",icon:"📊"},{id:"map",label:"Map Control",icon:"🗺"},{id:"lore",label:"DM Lore",icon:"📖"}];
  return(<div style={{display:"flex",height:"100%",background:"var(--dark)"}}>
    <div style={{width:170,background:"rgba(40,0,0,0.9)",borderRight:"2px solid rgba(200,50,50,0.4)",display:"flex",flexDirection:"column",flexShrink:0}}>
      <div style={{padding:"12px 14px",borderBottom:"1px solid rgba(200,50,50,0.3)"}}>
        <div style={{fontFamily:"Cinzel",fontSize:13,color:"#ff9999",letterSpacing:"0.08em"}}>⚔ DM MODE</div>
        <div style={{fontSize:10,color:"rgba(255,150,150,0.5)",marginTop:2}}>Josh only</div>
      </div>
      {SECS.map(s=><div key={s.id} onClick={()=>setActive(s.id)} style={{padding:"11px 14px",cursor:"pointer",fontSize:12,fontFamily:"Cinzel",letterSpacing:"0.04em",color:active===s.id?"#ffaaaa":"rgba(255,150,150,0.6)",background:active===s.id?"rgba(139,26,26,0.4)":"transparent",borderLeft:active===s.id?"3px solid #ff6666":"3px solid transparent",display:"flex",alignItems:"center",gap:8}}><span>{s.icon}</span><span>{s.label}</span></div>)}
      <div style={{flex:1}}/>
      <button onClick={()=>{try{localStorage.removeItem("sf_dm");}catch(e){}setAuthed(false);onAuth&&onAuth(false);}} style={{margin:10,fontFamily:"Cinzel",background:"transparent",border:"1px solid rgba(255,100,100,0.3)",color:"rgba(255,150,150,0.6)",borderRadius:4,padding:"6px",fontSize:10,cursor:"pointer",letterSpacing:"0.06em"}}>🔒 Lock DM</button>
    </div>
    <div style={{flex:1,minWidth:0,overflow:"hidden",background:"rgba(20,5,5,0.95)",padding:active==="overview"?0:14}}>
      {active==="overview"&&<LorePanel lore={lore} setLore={setLore} characters={characters} readOnly={false} dmMode={true} openTarget={target}/>}
      {active==="map"&&<MapControl lore={lore} setLore={setLore} onOpenOverview={openOverview}/>}
      {active==="lore"&&<DMPrivateLore dmLore={dmLore} setDmLore={setDmLore}/>}
    </div>
  </div>);
}


/* ════ LORE SECTIONS ════ */
