import{_ as r,m as l,j as c,c as t,a as o,F as m,r as v,b as n,w as _,T as u,o as a,t as p,d as f,e as k}from"./index-Biq5_D8a.js";const C={mixins:[l,c]},V={class:"video-container"},g={class:"video-grid"},h={class:"video-entry"},$=["src","onClick"],y={class:"video-title"},I={key:0,class:"video-overlay-container"};function w(e,i,D,B,N,j){const d=k("MrvVideo");return a(),t("main",V,[o("div",g,[(a(!0),t(m,null,v(e.videoData,s=>(a(),t("div",null,[o("div",h,[o("img",{src:e.getImgSrc(s.title,"video"),class:"video-artwork",onClick:F=>e.itemClick(s)},null,8,$)]),o("div",y,p(s.title),1)]))),256))]),n(u,{name:"fade-in"},{default:_(()=>[e.selectedItem?(a(),t("div",I,[n(d,{id:e.selectedItem.id,onCloseOverlay:i[0]||(i[0]=s=>e.selectedItem=null)},null,8,["id"])])):f("",!0)]),_:1})])}const S=r(C,[["render",w],["__scopeId","data-v-fa7e8454"]]);export{S as default};
