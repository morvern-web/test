import{_ as u,a as m,j as d,c as s,b as c,F as _,r as b,d as o,w as p,T as v,o as t,e as f,f as h}from"./index-Dc1jYuwB.js";const A={mixins:[m,d],data(){return{selectedAlbum:null}},computed:{isSelected(){return e=>e===this.selectedAlbum}},methods:{albumClick(e){this.isSelected(e)?this.selectedAlbum=null:this.selectedAlbum=e}}},k={class:"music-container"},C={class:"music-grid"},g={class:"album-entry"},w=["src","onClick"],y={key:0,class:"album-overlay-container"};function V(e,n,x,B,l,r){const i=h("MrvAlbum");return t(),s("main",k,[c("div",C,[(t(!0),s(_,null,b(e.musicData,a=>(t(),s("div",g,[c("img",{src:e.getImgSrc(a.title),class:"album-artwork",onClick:D=>r.albumClick(a)},null,8,w)]))),256))]),o(v,{name:"fade-in"},{default:p(()=>[l.selectedAlbum?(t(),s("div",y,[o(i,{album:l.selectedAlbum,onCloseOverlay:n[0]||(n[0]=a=>l.selectedAlbum=null)},null,8,["album"])])):f("",!0)]),_:1})])}const N=u(A,[["render",V],["__scopeId","data-v-7bd14091"]]);export{N as default};
