import{_ as a,j as _,c as t,a as o,F as u,r as v,b as l,w as m,T as p,o as i,t as V,d as f,e as h}from"./index-CpViLgef.js";const C={mixins:[_],data(){return{selectedVideo:null}},computed:{getSrc(){return e=>e.toLowerCase().replaceAll(" ","").replace(/[.,'()0-9]/g,"")},isSelected(){return e=>e===this.selectedVideo}},methods:{videoClick(e){this.isSelected(e)?this.selectedVideo=null:this.selectedVideo=e}}},g={class:"video-container"},k={class:"video-grid"},w={class:"video-entry"},y=["src","onClick"],S={class:"video-title"},x={key:0,class:"video-overlay-container"};function j(e,n,B,D,d,r){const c=h("MrvVideo");return i(),t("main",g,[o("div",k,[(i(!0),t(u,null,v(e.videoData,s=>(i(),t("div",null,[o("div",w,[o("img",{src:`src/assets/videos/${r.getSrc(s.title)}.jpg`,class:"video-artwork",onClick:N=>r.videoClick(s)},null,8,y)]),o("div",S,V(s.title),1)]))),256))]),l(p,{name:"fade-in"},{default:m(()=>[d.selectedVideo?(i(),t("div",x,[l(c,{id:d.selectedVideo.id,onCloseOverlay:n[0]||(n[0]=s=>d.selectedVideo=null)},null,8,["id"])])):f("",!0)]),_:1})])}const L=a(C,[["render",j],["__scopeId","data-v-288dff0f"]]);export{L as default};
