import{j as e,r as g,q as N,W as y,b as w}from"./app-1a8b66a1.js";import{A as C}from"./index-6e916192.js";import I from"./Product-b760572e.js";import{P as F}from"./Pagination-81189b55.js";import{e as P,B as k}from"./index.esm-88f6bea6.js";import{I as m}from"./InputError-b7985316.js";import{I as p}from"./InputLabel-be699f44.js";import{T as x}from"./TextInput-5902a4b2.js";import{D as j}from"./DangerButton-2a4a7cb3.js";import{I as S}from"./InputHint-f8a46639.js";import{C as D}from"./Checkbox-3c169125.js";import{N as E}from"./Num-5eb78560.js";import{P as h}from"./PrimaryButton-878aca8d.js";import{S as B}from"./SecondaryButton-b87d2d0a.js";import{D as T}from"./ProductOptions-48fe8fd0.js";import{T as q}from"./TemplateModal-7d5290d2.js";import M from"./InventoryHeader-b3cc9d0c.js";import{F as R}from"./Footer-c6070278.js";import"./Dropdown-9169eb3d.js";import"./transition-4ea61073.js";import"./index.esm-2a43ea46.js";import"./iconBase-b0091e04.js";import"./AlertModal-408c492d.js";import"./usePrevious-cab2015b.js";function b({type:t="button",className:a="",disabled:s,children:r,...n}){return e.jsx("button",{...n,type:t,className:`inline-block items-center rounded-md border
        border-transparent bg-indigo-700 px-4
        py-2 text-center  text-xs font-semibold
        uppercase tracking-widest
        text-white transition duration-200
        ease-in-out hover:bg-indigo-600 focus:outline-none focus:ring-2  focus:ring-indigo-300
        focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300
        focus-visible:ring-offset-2 active:scale-95
         disabled:opacity-25 disabled:active:scale-100 ${s?"cursor-not-allowed opacity-25":"cursor-pointer"} `+a,disabled:s,children:r})}function W({formProps:t,modalAction:a}){const s=a.state,r=t.data.img,[n,i]=g.useState(()=>"default"),d=e.jsx("div",{className:"mt-1  rounded-md border border-gray-300",children:e.jsx("img",{className:"mx-auto h-40",src:r!=null&&r.startsWith("http")?r:"products-images/"+r,alt:"Image "+(r??"")+" of product "+t.data.name})}),u=e.jsxs(e.Fragment,{children:[e.jsx(x,{id:"img",type:"file",name:"img",className:"mt-1 block w-full",hidden:r,disabled:s==="show",onChange:f=>{var c;t.setData("imageFile",(c=f.target.files)==null?void 0:c[0])}}),t.progress&&e.jsx("div",{className:"my-1 h-2.5 w-full rounded-md bg-gray-200 dark:bg-gray-700",children:e.jsx("div",{style:{width:t.progress+"%"},className:"h-2.5 rounded-md bg-green-600 dark:bg-green-500"})}),e.jsx(m,{message:t.errors.img||t.errors.imageFile,className:"mt-2"}),e.jsx(S,{message:"We recommend an image with white background",className:"mt-2"})]}),o=e.jsx(P,{className:"mx-auto mt-4 h-24 w-24 text-primary-700"});function l(){return s==="create"?u:s==="show"?r===null?o:d:r===null?u:n==="default"?e.jsxs(e.Fragment,{children:[d,e.jsxs("div",{className:"mb-4 mt-1 flex justify-center gap-8",children:[e.jsx(b,{onClick:()=>{i("change")},children:"Change Image"}),e.jsx(j,{onClick:()=>{i("removed"),t.setData("img",null)},children:"Remove Image"})]})]}):u}return e.jsxs(e.Fragment,{children:[e.jsx(p,{htmlFor:"img",value:(r===null&&s==="edit"||n==="removed"||s==="create"?"Choose ":n==="change"?"Change ":"")+"Image"}),l()]})}function $({formProps:t,modalAction:a}){const[s,r]=g.useState(!1),[n,i]=g.useState(t.data.price),d=N().props.business.taxPercent;function u(o){return o==null?o:Number(Number(o).toFixed(8))}return e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"w-full",children:[e.jsx(p,{htmlFor:"name",value:"Product Name"}),e.jsx(x,{id:"name",name:"name",value:t.data.name??void 0,className:"mt-1 block w-full",autoComplete:"off",isFocused:!0,disabled:a.state==="show",onChange:o=>t.setData("name",o.target.value),required:!0}),e.jsx(m,{message:t.errors.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(p,{htmlFor:"price",value:"Price"}),e.jsx(x,{id:"price",type:"number",inputMode:"decimal",autoComplete:"off",name:"price",value:n??void 0,className:"mt-1 block w-full",disabled:a.state==="show",onChange:o=>{const l=u(o.target.value);i(l),t.setData("price",u(s?(l??0)/(1+d):l))}}),e.jsx(m,{message:t.errors.price,className:"mt-2"}),e.jsxs("label",{className:"mt-2 flex items-center",children:[e.jsx(D,{name:"remember",checked:s,onChange:o=>{r(l=>(t.setData("price",u(n!=null&&!l?n/(1+d):n)),!l))}}),e.jsxs("span",{className:"ml-2 text-sm text-gray-600",children:["Price includes tax (",e.jsx(E,{currency:"$",amount:t.data.price??0})," without tax)"]})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(p,{htmlFor:"stock",value:"Stock"}),e.jsx(x,{id:"stock",type:"number",inputMode:"numeric",autoComplete:"off",name:"stock",value:t.data.stock??void 0,className:"mt-1 block w-full",disabled:a.state==="show",onChange:o=>t.setData("stock",Number(o.target.value))}),e.jsx(m,{message:t.errors.stock,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(p,{htmlFor:"barcode",value:"Barcode"}),e.jsx(x,{id:"barcode",type:"number",inputMode:"numeric",autoComplete:"off",name:"barcode",value:t.data.barcode??void 0,className:"remove-arrow mt-1 block w-full",disabled:a.state==="show",onChange:o=>t.setData("barcode",o.target.value)}),e.jsx(m,{message:t.errors.barcode,className:"mt-2"})]}),e.jsx("div",{className:"mt-4",children:e.jsx(W,{formProps:t,modalAction:a})})]})}function H({modalAction:t,setModalAction:a,formProps:s}){const[r,n]=g.useState(!1),i=e.jsx(b,{type:"button",onClick:()=>{a(c=>({data:c.data,open:!0,state:"edit"}))},disabled:s.processing,children:"Edit"}),d=e.jsx(j,{disabled:s.processing,onClick:()=>n(!0),children:"Delete"}),u=e.jsx(h,{type:"submit",disabled:s.processing,children:"Create"}),o=e.jsx(B,{type:"button",onClick:()=>{s.cancel(),a(c=>({...c,open:!1})),s.reset(),s.clearErrors()},children:"Cancel"}),l=e.jsx(h,{type:"submit",disabled:s.processing,children:"Save"});function f(){return t.state==="create"?e.jsxs(e.Fragment,{children:[u," ",o]}):t.state==="edit"?e.jsxs(e.Fragment,{children:[l," ",o]}):e.jsxs(e.Fragment,{children:[i," ",d," ",o]})}return e.jsxs("div",{className:"mt-4 flex flex-col gap-4 sm:flex-row-reverse",children:[f(),e.jsx(T,{isOpen:r,requestClose:c=>{n(!1),(c==null?void 0:c.toLowerCase().trim())==="delete"&&a(v=>({...v,open:!1}))},product:s.data})]})}function L({modalAction:t,setModalAction:a}){const s=y(t.data?t.data.id.toString()+t.data.img:t.state,t.state==="create"?{name:"",barcode:null,description:null,imageFile:null,img:null,price:null,stock:null}:{...t.data,_method:"patch"});function r(n){n.preventDefault(),s.post(route(`product.${t.state==="edit"?"update":"store"}`,t.state==="edit"?t.data.id:void 0),{onSuccess:()=>{s.clearErrors(),s.reset(),a(()=>({state:"create",data:null,open:!1}))}})}return e.jsxs("form",{className:"mt-3",onSubmit:r,children:[e.jsx($,{formProps:s,modalAction:t}),e.jsx(H,{modalAction:t,setModalAction:a,formProps:s})]})}function O({modalAction:t,setModalAction:a}){console.log(t.data);function s(){return t.state==="create"?"Add New Product":t.state==="edit"?"Edit Product":"View Product"}return e.jsx(q,{title:s(),open:t.open,closeModal:()=>a(r=>({...r,open:!1})),children:e.jsx(L,{modalAction:t,setModalAction:a})})}function me({auth:t,products:a}){const s=a.data,[r,n]=g.useState({state:"create",open:!1,data:null});return console.log(s),e.jsxs(e.Fragment,{children:[e.jsx(O,{modalAction:r,setModalAction:n}),e.jsxs(C,{user:t.user,header:e.jsx(M,{totalResult:a.total,requestCreateProduct:()=>n({state:"create",open:!0,data:null})}),children:[e.jsx(w,{title:"Inventory"}),e.jsxs("div",{className:"flex min-h-[75vh] flex-col justify-between",children:[e.jsxs("div",{className:"flex flex-wrap justify-center py-6",children:[s.length===0&&e.jsxs("div",{className:"my-20 flex gap-4 opacity-50",children:[e.jsx(k,{className:"mt-1"}),e.jsx("p",{children:"No products found!"})]}),s.map(i=>e.jsx(I,{product:i,requestShow:()=>n({state:"show",open:!0,data:i}),requestEdit:()=>n({state:"edit",data:i,open:!0})},i.id))]}),e.jsx(F,{paginateItems:a}),e.jsx(R,{})]})]})]})}export{me as default};