import{j as e,q as i}from"./app-a977b1de.js";import r from"./Plan-b8fdbcf9.js";import{NumberOfAccountsBenefit as c,NumberOfProductsBenefit as m,NumberOfInvoicesBenefit as f,AccessPeriodBenefit as p,NoSetupFeesBenefit as a,ResponsiveBenefit as u,SupportTeamBenefit as l}from"./SharedBenefits-e4aa3697.js";import"./PrimaryButton-cf6d1cbc.js";import"./A-1f93d57a.js";import"./Num-23b1c9a8.js";import"./index-b35a75c7.js";import"./index-33312385.js";import"./index.esm-6439725c.js";import"./iconBase-3caa22eb.js";import"./index.esm-47bca7da.js";const x=9,d=89;function C({period:s,planProps:n}){return e.jsx(r,{title:"Enhanced",desc:"Ideal for medium-sized businesses or professionals who want a more comprehensive POS system",period:s,monthlyPrice:x,annualPrice:d,benefits:e.jsx(j,{}),...n})}function j(){const{enhanced:s}=i().props.plansMaxRes;return[e.jsx(c,{numberOfAccounts:s.accounts}),e.jsx(m,{numberOfProducts:s.products}),e.jsx(f,{numberOfInvoices:s.bills}),e.jsx(p,{}),e.jsx(a,{}),e.jsx(u,{}),e.jsx(l,{})].map((t,o)=>e.jsx("li",{className:"flex items-center space-x-3",children:t},o))}export{d as ENHANCED_ANNUAL_PRICE,x as ENHANCED_MONTHLY_PRICE,j as EnhancedPlanBenefits,C as default};