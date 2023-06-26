import{_ as x,u as g,b as i,s as v,B as y,d as l,w as a,o as n,e as t,f as e,Q as C,k as s,g as w,T as p,A as b}from"./index.30c974e3.js";import{D as k}from"./DashboardLayout.92a7caee.js";import{E as W}from"./EmptyState.4ccea042.js";import{u as L}from"./useAxios.c0777327.js";import"./NavBar.fdafe172.js";import"./setMetadata.d1028241.js";const S={__name:"CoursesListView",setup(V){const c=g(),d=i(!1);v(()=>{f()});const _=i([{display:"Course ID",dataSelector:"course_id",uppercase:!0,sortable:!0,width:"",minWidth:"",maxWidth:""},{display:"Course Name",dataSelector:"course_name",uppercase:!0,sortable:!0,width:"",minWidth:"",maxWidth:""},{display:"Course Term",dataSelector:"course_term",uppercase:!0,width:"",minWidth:"",maxWidth:""},{display:"Action",dataSelector:"action",uppercase:!0,sortable:!1,filterable:!1,width:"",minWidth:"",maxWidth:""}]),o=i([]),f=()=>{d.value=!0,L({url:"/get-courses",callback:u=>{u.status==="success"?(o.value=[],u.data.forEach(r=>{o.value.push({course_id:r.unique_id,course_name:r.name,course_term:r.course_term+"days"})})):pushToast({description:u.message,colorScheme:"error"})},final:()=>{d.value=!1}})};return(u,r)=>{const h=y("d-text");return n(),l(k,{title:"Course List"},{default:a(()=>[t(e(s),{class:"inner-content"},{default:a(()=>[t(e(C),null,{default:a(()=>[t(e(s),{class:"card","margin-top":"20px"},{default:a(()=>[t(e(s),{display:"flex","flex-direction":"row",gap:"1em","justify-content":"space-between"},{default:a(()=>[t(e(s),null,{default:a(()=>[t(h,{class:"title"},{default:a(()=>[w("Course List")]),_:1})]),_:1}),t(e(s),null,{default:a(()=>[t(e(p),{text:" + Create a new course",size:"large","color-scheme":"primary",onClick:r[0]||(r[0]=m=>e(c).push({name:"upload_courses"}))})]),_:1})]),_:1}),t(e(s),{is:"hr",margin:"20px 0"}),o.value.length>0?(n(),l(e(s),{key:0},{default:a(()=>[t(e(b),{"enable-csv-export":"","enable-customize-view":"","button-actions-alignment":"right",columns:_.value,data:o.value,paginate:!0,generatedCsvName:"student_list_info",loading:!0,search:!0,"paginate-right":"","color-scheme":"primary"},{"item.action":a(m=>[t(e(p),{"color-scheme":"primary",text:"View",size:"medium",onClick:N=>e(c).push({name:"course_detail",params:{id:m.course_id}})},null,8,["onClick"])]),_:1},8,["columns","data"])]),_:1})):(n(),l(W,{key:1}))]),_:1})]),_:1})]),_:1})]),_:1})}}};var I=x(S,[["__scopeId","data-v-5f4dfbba"]]);export{I as default};
