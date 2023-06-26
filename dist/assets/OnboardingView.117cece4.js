import{S as z}from"./StepsLayout.4feff80e.js";import{_ as O,u as j,b as _,a as L,U as Y,c as $,r as A,x as I,d as m,w as a,o as c,e as l,f as e,k as o,W as g,g as b,a3 as T,m as u,Z as K,ag as k,T as d,a1 as S,a2 as V,i as y,ah as R,ai as F}from"./index.30c974e3.js";import{u as G}from"./useAxios.c0777327.js";import"./NavBar.fdafe172.js";/* empty css                                                                */import"./setMetadata.d1028241.js";const P={__name:"OnboardingView",setup(Z){const x=j(),B=_([{text:"Personal Details"},{text:"Residential Address"},{text:"Means Of Identification"},{text:"Onboarding Status"}]),i=_(0);L();const v=_(!1),h=_(!0),w=_(""),{pushToast:U}=Y(),{getDataFromLocalStorage:C,addDataToLocalStorage:N}=$(),p=C("user"),s=A({user_id:p.id,first_name:p.first_name,last_name:p.last_name,middle_name:"",date_of_birth:"",gender:"",marital_status:"",mobile_no:"",country:"",street:"",state:"",lga:"",means_of_identification:"",means_of_identification_number:""});I(()=>{D()});const f=r=>{i.value=r},D=()=>{p.middle_name&&p.status.id==2?x.back():h.value=!1},M=()=>{v.value=!0,G({url:"/onboarding",payload:s,callback:r=>{r.status==="success"?(U({description:r.message,colorScheme:"success"}),N({user:r.data}),f(3),w.value="success"):U({description:r.message,colorScheme:"error"})},final:()=>{v.value=!1}})};return(r,t)=>(c(),m(z,{steps:B.value,"current-step":i.value},{backBtn:a(()=>[l(e(o),{display:"flex","align-items":"center","font-weight":"400","font-size":"16px",class:"text-cool-grey-400 secondary-font btn-text-dark",cursor:"pointer",onClick:t[0]||(t[0]=n=>i.value>0?f(i.value-1):e(x).back())},{default:a(()=>[l(e(o),{is:"img",src:"/icons/back.svg","margin-right":"10px"}),l(e(g),null,{default:a(()=>[b("Back")]),_:1})]),_:1})]),closeBtn:a(()=>[l(e(T),{onClick:t[1]||(t[1]=n=>e(x).back())})]),default:a(()=>[i.value===0?(c(),m(e(o),{key:0},{default:a(()=>[l(e(o),{display:"flex","justify-content":"center","flex-direction":"column",gap:"1em","max-width":"700px","padding-top":"3em"},{default:a(()=>[l(e(o),{class:"col"},{default:a(()=>[l(e(o),null,{default:a(()=>[l(e(u),{modelValue:s.first_name,"onUpdate:modelValue":t[2]||(t[2]=n=>s.first_name=n),label:"First Name",placeholder:"John"},null,8,["modelValue"])]),_:1}),l(e(o),null,{default:a(()=>[l(e(u),{modelValue:s.last_name,"onUpdate:modelValue":t[3]||(t[3]=n=>s.last_name=n),label:"Last Name",placeholder:"Doe"},null,8,["modelValue"])]),_:1})]),_:1}),l(e(o),{class:"col"},{default:a(()=>[l(e(o),null,{default:a(()=>[l(e(u),{modelValue:s.middle_name,"onUpdate:modelValue":t[4]||(t[4]=n=>s.middle_name=n),label:"middle Name",placeholder:"Ben"},null,8,["modelValue"])]),_:1}),l(e(o),null,{default:a(()=>[l(e(K),{modelValue:s.date_of_birth,"onUpdate:modelValue":t[5]||(t[5]=n=>s.date_of_birth=n),label:"Date Of Birth",placeholder:"DD/MM/YYYY"},null,8,["modelValue"])]),_:1})]),_:1}),l(e(o),{class:"col"},{default:a(()=>[l(e(o),null,{default:a(()=>[l(e(k),{modelValue:s.gender,"onUpdate:modelValue":t[6]||(t[6]=n=>s.gender=n),label:"Gender",placeholder:"--Select gender--",options:["Male","Female"]},null,8,["modelValue"])]),_:1}),l(e(o),null,{default:a(()=>[l(e(k),{modelValue:s.marital_status,"onUpdate:modelValue":t[7]||(t[7]=n=>s.marital_status=n),label:"Marital Status",placeholder:"--Select Marital Status--",options:["Single","Married"]},null,8,["modelValue"])]),_:1})]),_:1}),l(e(o),{class:"col"},{default:a(()=>[l(e(o),null,{default:a(()=>[l(e(u),{disabled:"",modelValue:s.email,"onUpdate:modelValue":t[8]||(t[8]=n=>s.email=n),label:"Email Address",placeholder:"johndoe@gmail.com"},null,8,["modelValue"])]),_:1}),l(e(o),null,{default:a(()=>[l(e(u),{modelValue:s.mobile_no,"onUpdate:modelValue":t[9]||(t[9]=n=>s.mobile_no=n),label:"Mobile Number",placeholder:"080 000 0000"},null,8,["modelValue"])]),_:1})]),_:1}),l(e(o),{"margin-top":"20px",class:"button__group"},{default:a(()=>[l(e(d),{size:"huge",text:"Back",disabled:"","left-icon":e(S)},null,8,["left-icon"]),l(e(d),{size:"huge","color-scheme":"primary",text:"Continue","right-icon":e(V),onClick:t[10]||(t[10]=n=>f(1))},null,8,["right-icon"])]),_:1})]),_:1})]),_:1})):y("",!0),i.value===1?(c(),m(e(o),{key:1},{default:a(()=>[l(e(o),{display:"flex","justify-content":"center","flex-direction":"column",gap:"1em","max-width":"700px","padding-top":"3em"},{default:a(()=>[l(e(o),{class:"col"},{default:a(()=>[l(e(o),null,{default:a(()=>[l(e(R),{modelValue:s.country,"onUpdate:modelValue":t[11]||(t[11]=n=>s.country=n),label:"country",placeholder:"Your country","option-title":"name","option-value":"name",dropDown:!0},null,8,["modelValue"])]),_:1}),l(e(o),null,{default:a(()=>[l(e(u),{modelValue:s.street,"onUpdate:modelValue":t[12]||(t[12]=n=>s.street=n),label:"Street",placeholder:"26 King George V Road"},null,8,["modelValue"])]),_:1})]),_:1}),l(e(o),{class:"col"},{default:a(()=>[l(e(o),null,{default:a(()=>[l(e(u),{modelValue:s.state,"onUpdate:modelValue":t[13]||(t[13]=n=>s.state=n),label:"State",placeholder:"Abuja"},null,8,["modelValue"])]),_:1}),l(e(o),null,{default:a(()=>[l(e(u),{modelValue:s.lga,"onUpdate:modelValue":t[14]||(t[14]=n=>s.lga=n),label:"Local Government Area",placeholder:"Bwari"},null,8,["modelValue"])]),_:1})]),_:1}),l(e(o),{"margin-top":"20px",class:"button__group"},{default:a(()=>[l(e(d),{size:"huge",text:"Back","left-icon":e(S),onClick:t[15]||(t[15]=n=>f(0))},null,8,["left-icon"]),l(e(d),{size:"huge","color-scheme":"primary",text:"Continue","right-icon":e(V),onClick:t[16]||(t[16]=n=>f(2))},null,8,["right-icon"])]),_:1})]),_:1})]),_:1})):y("",!0),i.value===2?(c(),m(e(o),{key:2},{default:a(()=>[l(e(o),{display:"flex","justify-content":"center","flex-direction":"column",gap:"1em","max-width":"700px","padding-top":"3em"},{default:a(()=>[l(e(o),{class:"col"},{default:a(()=>[l(e(o),null,{default:a(()=>[l(e(k),{modelValue:s.means_of_identification,"onUpdate:modelValue":t[17]||(t[17]=n=>s.means_of_identification=n),label:"Means Of Identification",placeholder:"--Select your means of identification--",options:["Voters Card","Passport","National Identification Number (NIN)"]},null,8,["modelValue","options"])]),_:1}),l(e(o),null,{default:a(()=>[l(e(u),{modelValue:s.means_of_identification_number,"onUpdate:modelValue":t[18]||(t[18]=n=>s.means_of_identification_number=n),label:"ID Number",placeholder:"ju47839"},null,8,["modelValue"])]),_:1})]),_:1}),l(e(o),{"margin-top":"20px",class:"button__group"},{default:a(()=>[l(e(d),{size:"huge",text:"Back","left-icon":e(S),disabled:v.value,onClick:t[19]||(t[19]=n=>f(4))},null,8,["left-icon","disabled"]),l(e(d),{size:"huge","color-scheme":"primary",text:"Submit","right-icon":e(V),loading:v.value,onClick:M},null,8,["right-icon","loading"])]),_:1})]),_:1})]),_:1})):y("",!0),i.value===3?(c(),m(e(o),{key:3},{default:a(()=>[l(e(o),{display:"flex","justify-content":"center","flex-direction":"column",gap:"1em","max-width":"700px","padding-top":"3em"},{default:a(()=>[w.value=="success"?(c(),m(e(o),{key:0,class:"status__card"},{default:a(()=>[l(e(o),{class:"status__img",is:"img",src:"/icons/success.svg",alt:"Success"}),l(e(g),{class:"status__title"},{default:a(()=>[b(" Thanks for Onboarding \u{1F60A} ")]),_:1}),l(e(g),{class:"status__text"},{default:a(()=>[b(" Your data has been sent and is under review, you will be notified when approved! ")]),_:1}),l(e(o),{class:"status__btn"},{default:a(()=>[l(e(d),{size:"huge",responsive:"","color-scheme":"primary",text:"Back to dashboard","right-icon":e(V),onClick:t[20]||(t[20]=n=>e(x).push({name:"overview"}))},null,8,["right-icon"])]),_:1})]),_:1})):(c(),m(e(o),{key:1,class:"status__card"},{default:a(()=>[l(e(o),{class:"status__img",is:"img",src:"/icons/error.svg",alt:"Success"}),l(e(g),{class:"status__title"},{default:a(()=>[b(" Sorry, your onboarding failed! \u{1F614} ")]),_:1}),l(e(g),{class:"status__text"},{default:a(()=>[b(" Your onboarding data was incorrect & unsuccessful. Please try again later. ")]),_:1}),l(e(o),{class:"status__btn"},{default:a(()=>[l(e(d),{size:"huge",responsive:"","color-scheme":"danger",text:"Back to dashboard","right-icon":e(V)},null,8,["right-icon"])]),_:1})]),_:1}))]),_:1})]),_:1})):y("",!0),l(e(F),{loading:h.value,"full-page":!0},null,8,["loading"])]),_:1},8,["steps","current-step"]))}};var X=O(P,[["__scopeId","data-v-ab395580"]]);export{X as default};