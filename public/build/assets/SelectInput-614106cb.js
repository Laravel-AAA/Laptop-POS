import{j as t}from"./app-6c8ebba6.js";import{r as c}from"./index-ba84c590.js";import{E as o}from"./ErrorMessage-b84377ec.js";function E({children:f,ref:p,size:l="lg",variant:n="outlined",errorMsg:i,errorMsgProps:r,error:e,hideError:m,required:x,onFocus:a,...u}){return e===void 0&&(m==!0?e=!1:i?e=!0:e=!1),t.jsxs(t.Fragment,{children:[t.jsx(c.Select,{...u,onFocus:s=>{s.nativeEvent.relatedTarget&&s.target.click(),a&&a(s)},variant:n,size:l,error:e,children:f}),t.jsx(o,{message:i,...r})]})}export{E as S};