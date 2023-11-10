import{W as y,r as a,y as N}from"./app-d4c37d60.js";function P(l,o){const r=o===void 0?y(l):y(o,l),[S,d]=a.useState(r.processing),[n,D]=a.useState(JSON.parse(JSON.stringify(l))),[E,f]=a.useState(!1);a.useEffect(()=>{D(r.data)},[r.hasErrors]),a.useEffect(()=>{d(r.processing)},[r.processing]),a.useEffect(()=>{f(r.recentlySuccessful)},[r.recentlySuccessful]);const i=(t,e)=>{r.setData(t,e)},O=t=>{r.setData(t)},h=t=>t?r.data[t]!==n[t]:r.isDirty,J=()=>{const t=JSON.parse(JSON.stringify(r.data));for(let e in t)t[e]===n[e]&&delete t[e];return t};return{...r,setData:i,setAllData:O,isDirty:h,get processing(){return S},setProcessing:t=>d(t),get dirtyData(){return J()},patchDirty:(t,e)=>{const c={...r.data};for(let s in c)c[s]===n[s]?(console.log(`

not dirty:`,s,`
value:`,c[s],`
oldValue:`,n[s]),delete c[s]):console.log(`

Dirty:`,s,`
value:`,c[s],`
oldValue:`,n[s]);N.patch(t,c,{...e,onSuccess:s=>{var u;f(!0),setTimeout(()=>f(!1),2e3),(u=e==null?void 0:e.onSuccess)==null||u.call(e,s)},onError:s=>{var u;for(let g in s)r.setError(g,s[g]);(u=e==null?void 0:e.onError)==null||u.call(e,s)}})},get recentlySuccessful(){return E}}}export{P as u};
