import{S as _,i as m,s as b,l as d,g as c,n as p,d as u,e as f,c as h,b as o,f as s,a as g}from"./index-331831f6.js";function k(i){let e;return{c(){e=f("input"),this.h()},l(t){e=h(t,"INPUT",{type:!0,id:!0,placeholder:!0,style:!0,class:!0}),this.h()},h(){o(e,"type","text"),o(e,"id","inputCom"),o(e,"placeholder",i[0]),s(e,"background","url("+i[1]+") no-repeat left"),s(e,"background-position","7px"),s(e,"background-size","25px"),o(e,"class","svelte-1jwai45")},m(t,r){c(t,e,r)},p(t,r){r&1&&o(e,"placeholder",t[0]),r&2&&s(e,"background","url("+t[1]+") no-repeat left")},d(t){t&&u(e)}}}function x(i){let e;return{c(){e=f("textarea"),this.h()},l(t){e=h(t,"TEXTAREA",{type:!0,id:!0,placeholder:!0,style:!0,class:!0}),g(e).forEach(u),this.h()},h(){o(e,"type","text"),o(e,"id","inputCom"),o(e,"placeholder",i[0]),s(e,"background","url("+i[1]+") no-repeat left"),s(e,"background-position","7px"),s(e,"background-size","25px"),s(e,"resize","none"),o(e,"class","svelte-1jwai45")},m(t,r){c(t,e,r)},p(t,r){r&1&&o(e,"placeholder",t[0]),r&2&&s(e,"background","url("+t[1]+") no-repeat left")},d(t){t&&u(e)}}}function y(i){let e;function t(l,n){return l[2]==="true"?x:k}let r=t(i),a=r(i);return{c(){a.c(),e=d()},l(l){a.l(l),e=d()},m(l,n){a.m(l,n),c(l,e,n)},p(l,[n]){r===(r=t(l))&&a?a.p(l,n):(a.d(1),a=r(l),a&&(a.c(),a.m(e.parentNode,e)))},i:p,o:p,d(l){a.d(l),l&&u(e)}}}function v(i,e,t){let{placeholder:r}=e,{icon:a}=e,{textarea:l}=e;return i.$$set=n=>{"placeholder"in n&&t(0,r=n.placeholder),"icon"in n&&t(1,a=n.icon),"textarea"in n&&t(2,l=n.textarea)},[r,a,l]}class C extends _{constructor(e){super(),m(this,e,v,y,b,{placeholder:0,icon:1,textarea:2})}}export{C as I};