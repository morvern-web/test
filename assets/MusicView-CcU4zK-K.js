import{_ as u,j as m,c as s,a as n,F as d,r as _,b as o,w as b,T as p,o as t,d as v,e as h}from"./index-CpViLgef.js";const A={mixins:[m],data(){return{selectedAlbum:null}},computed:{getSrc(){return e=>e.toLowerCase().replaceAll(" ","").replace(/[.,'()0-9]/g,"")},isSelected(){return e=>e===this.selectedAlbum}},methods:{albumClick(e){this.isSelected(e)?this.selectedAlbum=null:this.selectedAlbum=e}}},f={class:"music-container"},C={class:"music-grid"},k={class:"album-entry"},g=["src","onClick"],w={key:0,class:"album-overlay-container"};function x(e,a,y,S,l,r){const i=h("MrvAlbum");return t(),s("main",f,[n("div",C,[(t(!0),s(d,null,_(e.musicData,c=>(t(),s("div",k,[n("img",{src:`src/assets/music/${r.getSrc(c.title)}.jpg`,class:"album-artwork",onClick:V=>r.albumClick(c)},null,8,g)]))),256))]),o(p,{name:"fade-in"},{default:b(()=>[l.selectedAlbum?(t(),s("div",w,[o(i,{album:l.selectedAlbum,onCloseOverlay:a[0]||(a[0]=c=>l.selectedAlbum=null)},null,8,["album"])])):v("",!0)]),_:1})])}const B=u(A,[["render",x],["__scopeId","data-v-9a37ea88"]]);export{B as default};
