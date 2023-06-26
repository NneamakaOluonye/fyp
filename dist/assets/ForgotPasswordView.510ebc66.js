import{u as f,b as g,r as y,U as _,c as w,d as h,w as t,o as x,e as a,f as e,m as V,D as k,T as v,k as c,g as n,R as L}from"./index.30c974e3.js";import{A as S}from"./AuthLayout.aaad10c6.js";import{u as b}from"./setMetadata.d1028241.js";import{u as R}from"./useAxios.c0777327.js";const M={__name:"ForgotPasswordView",setup(T){const u=f();b({title:"LMS || Verify Email",description:"LMS || Verify Email"});const r=g(!1),o=y({email:""}),{pushToast:l}=_(),{addDataToLocalStorage:m}=w(),d=()=>{r.value=!0,R({url:"/forgot-password",payload:o,callback:s=>{s.status==="success"?(l({description:s.message,colorScheme:"success"}),m({Password_reset:{email:o.email}}),u.push({name:"reset-password"})):l({description:s.message,colorScheme:"error"})},final:()=>{r.value=!1}})};return(s,i)=>(x(),h(S,{title:"Forgot Password?"},{default:t(()=>[a(e(c),null,{default:t(()=>[a(e(V),{class:"mt-1",placeholder:"Email",label:"Enter your email to recover your account","left-icon":e(k),modelValue:o.email,"onUpdate:modelValue":i[0]||(i[0]=p=>o.email=p)},null,8,["left-icon","modelValue"]),a(e(v),{class:"mt-3","color-scheme":"primary",text:"Recover my account",responsive:!0,loading:r.value,onClick:d},null,8,["loading"]),a(e(c),{"margin-top":"15px",class:"text-center",is:"p"},{default:t(()=>[n(" Remember your password? "),a(e(L),{to:{name:"login"},class:"basic-link font-weight-500 light-primary-action-color","font-size":"14px"},{default:t(()=>[n(" Login Instead ")]),_:1})]),_:1})]),_:1})]),_:1}))}};export{M as default};
