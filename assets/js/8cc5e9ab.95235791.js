"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[8205],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,u=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,p=d["".concat(u,".").concat(f)]||d[f]||s[f]||c;return n?r.createElement(p,o(o({ref:t},m),{},{components:n})):r.createElement(p,o({ref:t},m))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,o=new Array(c);o[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var l=2;l<c;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5360:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(7294),i=n(9960),c=n(5979),o=n(6010),a="cardContainer_woeA",u="cardTitle_pNjP",l="cardDescription_qC_k",m=n(3919),s=n(5999);function d(e){var t=e.href,n=e.children;return r.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",a)},n)}function f(e){var t=e.href,n=e.icon,i=e.title,c=e.description;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",u),title:i},n," ",i),c&&r.createElement("p",{className:(0,o.Z)("text--truncate",l),title:c},c))}function p(e){var t=e.item,n=(0,c.Wl)(t);return n?r.createElement(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){var t,n=e.item,i=(0,m.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,c.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(f,{href:n.href,icon:i,title:n.label,description:null==o?void 0:o.description})}function y(e){var t=e.item;switch(t.type){case"link":return r.createElement(g,{item:t});case"category":return r.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function h(e){var t=e.items;return r.createElement("div",{className:"row"},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,c.Wl)(e)}))}(t).map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{key:t,item:e}))})))}},3286:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return f}});var r=n(7462),i=n(3366),c=(n(7294),n(3905)),o=n(5360),a=n(5979),u=["components"],l={},m="Building with XCM",s={unversionedId:"xcm/building-with-xcm/index",id:"xcm/building-with-xcm/index",title:"Building with XCM",description:"",source:"@site/docs/xcm/building-with-xcm/index.md",sourceDirName:"xcm/building-with-xcm",slug:"/xcm/building-with-xcm/",permalink:"/docs/xcm/building-with-xcm/",editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/xcm/building-with-xcm/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Manage XC20 with MetaMask",permalink:"/docs/xcm/using-xcm/manage-xc20-with-metamask"},next:{title:"Native Transactions",permalink:"/docs/xcm/building-with-xcm/native-transactions"}},d={},f=[],p={toc:f};function g(e){var t=e.components,n=(0,i.Z)(e,u);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"building-with-xcm"},"Building with XCM"),(0,c.kt)(o.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);