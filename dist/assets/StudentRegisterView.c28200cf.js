import{_ as V,u as b,r as w,b as y,U as v,c as x,d as S,w as l,o as U,e,f as a,k as r,m as u,g as n,R as d,T as k,h}from"./index.30c974e3.js";import{A as N}from"./AuthLayout.aaad10c6.js";import{u as A}from"./setMetadata.d1028241.js";import{u as L}from"./useAxios.c0777327.js";const R={__name:"StudentRegisterView",setup(P){const c=b(),p=c.currentRoute.value.meta.title,t=w({role:"student",first_name:"",last_name:"",username:"",mobile_no:"",email:"",password:"",password_confirmation:""}),m=y(!1),{pushToast:f}=v(),{addDataToLocalStorage:_}=x();A({title:p,description:p});const g=()=>{m.value=!0,L({url:"/register",payload:t,callback:i=>{i.status==="success"?(f({description:i.message,colorScheme:"success"}),_({verification:{email:t.email,status:"pending"}}),c.push({name:"verify-email"})):f({description:i.message,colorScheme:"error"})},final:()=>{m.value=!1}})};return(i,o)=>(U(),S(N,{title:"Create Account",description:"Hello, provide your details below to create your account.",height:"100%"},{default:l(()=>[e(a(r),{is:"form",onSubmit:h(g,["prevent"])},{default:l(()=>[e(a(r),{class:"col"},{default:l(()=>[e(a(r),null,{default:l(()=>[e(a(u),{modelValue:t.first_name,"onUpdate:modelValue":o[0]||(o[0]=s=>t.first_name=s),label:"First Name",placeholder:"First Name"},null,8,["modelValue"])]),_:1}),e(a(r),null,{default:l(()=>[e(a(u),{modelValue:t.last_name,"onUpdate:modelValue":o[1]||(o[1]=s=>t.last_name=s),label:"Last Name",placeholder:"Last Name"},null,8,["modelValue"])]),_:1})]),_:1}),e(a(r),{class:"col"},{default:l(()=>[e(a(r),null,{default:l(()=>[e(a(u),{type:"tel",modelValue:t.mobile_no,"onUpdate:modelValue":o[2]||(o[2]=s=>t.mobile_no=s),number:!0,label:"Phone Number",placeholder:"Phone Number"},null,8,["modelValue"])]),_:1}),e(a(r),null,{default:l(()=>[e(a(u),{modelValue:t.username,"onUpdate:modelValue":o[3]||(o[3]=s=>t.username=s),label:"Username",placeholder:"Username"},null,8,["modelValue"])]),_:1})]),_:1}),e(a(u),{class:"mt-3",placeholder:"example@gmail.com",label:"Email Address",modelValue:t.email,"onUpdate:modelValue":o[4]||(o[4]=s=>t.email=s),type:"email"},null,8,["modelValue"]),e(a(r),{class:"col"},{default:l(()=>[e(a(u),{placeholder:"Enter password",label:"Password","is-password":!0,modelValue:t.password,"onUpdate:modelValue":o[5]||(o[5]=s=>t.password=s)},null,8,["modelValue"]),e(a(u),{placeholder:"Enter password confirmation",label:"Confirm Password","is-password":!0,modelValue:t.password_confirmation,"onUpdate:modelValue":o[6]||(o[6]=s=>t.password_confirmation=s)},null,8,["modelValue"])]),_:1}),e(a(r),{"margin-top":"25px",class:"small__card"},{default:l(()=>[e(a(r),{is:"p",class:"info__text"},{default:l(()=>[n(" You are currently registering as a Student, do you want to register as an "),e(a(d),{to:{name:"instructor_register"},class:"basic-link"},{default:l(()=>[n("Instructor?")]),_:1})]),_:1})]),_:1}),e(a(r),{is:"hr","margin-top":"25px"}),e(a(r),{is:"p",class:"info__text","margin-top":"20px"},{default:l(()=>[n(" Already have an account? "),e(a(d),{class:"basic-link",to:{name:"login"}},{default:l(()=>[n("Sign in")]),_:1})]),_:1}),e(a(k),{"margin-top":"15px","color-scheme":"primary",text:"Create Account ",responsive:!0,loading:m.value},null,8,["loading"]),e(a(r),{is:"p",class:"info__text","margin-top":"20px"},{default:l(()=>[n(" By clicking \u2018Create my account\u2019 above, you accept our "),e(a(d),{class:"basic-link",to:{name:"login"}},{default:l(()=>[n("Privacy Policy")]),_:1}),n(" and "),e(a(d),{class:"basic-link",to:{name:"login"}},{default:l(()=>[n("Terms of use")]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1}))}};var F=V(R,[["__scopeId","data-v-71cbad7e"]]);export{F as default};