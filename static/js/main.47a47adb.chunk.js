(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s=n(4),o=n.n(s),a=n(1),r=n(5),c=n(6),i=n(8),u=n(7),l=n(2),b=n.n(l),d=n(17),h=(n(13),n(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"].map((function(t){return{id:Object(d.a)(),value:t}})),p=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={isStarted:!1,goods:j,originalGoods:j},t.start=function(){t.setState({isStarted:!0})},t.reverse=function(){t.setState((function(t){return{goods:Object(a.a)(t.goods).reverse()}}))},t.sortAlphabetically=function(){t.setState((function(t){return{goods:Object(a.a)(t.goods).sort((function(t,e){return t.value.localeCompare(e.value)}))}}))},t.sortByLength=function(){t.setState((function(t){return{goods:Object(a.a)(t.goods).sort((function(t,e){return t.value.length-e.value.length}))}}))},t.reset=function(){t.setState((function(t){return{goods:Object(a.a)(t.originalGoods)}}))},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state,e=t.goods,n=t.isStarted;return Object(h.jsx)("div",{className:"App",children:n?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:"app__title",children:"Goods"}),Object(h.jsxs)("div",{className:"buttons app__buttons",children:[Object(h.jsx)("button",{type:"button",onClick:this.reverse,className:"button buttons__button",children:"Reverse"}),Object(h.jsx)("button",{type:"button",onClick:this.sortAlphabetically,className:"button buttons__button",children:"Sort alphabetically"}),Object(h.jsx)("button",{type:"button",onClick:this.sortByLength,className:"button buttons__button",children:"Sort by length"}),Object(h.jsx)("button",{type:"button",onClick:this.reset,className:"button buttons__button",children:"Reset"})]}),Object(h.jsx)("ul",{className:"list app__list",children:e.map((function(t){return Object(h.jsx)("li",{className:"list__item",children:t.value},t.id)}))})]}):Object(h.jsx)("button",{type:"button",onClick:this.start,className:"button app__start",children:"Start"})})}}]),n}(b.a.Component),g=p;o.a.render(Object(h.jsx)(g,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.47a47adb.chunk.js.map