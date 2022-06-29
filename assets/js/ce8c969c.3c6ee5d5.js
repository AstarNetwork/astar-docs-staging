"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[6813],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return b}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(r),b=o,h=d["".concat(u,".").concat(b)]||d[b]||p[b]||a;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var i=2;i<a;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(7294);function o(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:o},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(7462),o=r(7294),a=r(2389),s=r(5979),l=r(6010),u="tabItem_LplD";function i(e){var t,r,a,i=e.lazy,c=e.block,p=e.defaultValue,d=e.values,b=e.groupId,h=e.className,f=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),m=(0,s.lx)(k,(function(e,t){return e.value===t.value}));if(m.length>0)throw new Error('Docusaurus error: Duplicate values "'+m.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(t=null!=p?p:null==(r=f.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==v&&!k.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.UB)(),w=y.tabGroupChoices,x=y.setTabGroupChoices,g=(0,o.useState)(v),S=g[0],E=g[1],O=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var P=w[b];null!=P&&P!==S&&k.some((function(e){return e.value===P}))&&E(P)}var j=function(e){var t=e.currentTarget,r=O.indexOf(t),n=k[r].value;n!==S&&(T(t),E(n),null!=b&&x(b,n))},N=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.currentTarget)+1;r=O[n]||O[0];break;case"ArrowLeft":var o=O.indexOf(e.currentTarget)-1;r=O[o]||O[O.length-1]}null==(t=r)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},h)},k.map((function(e){var t=e.value,r=e.label,a=e.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return O.push(e)},onKeyDown:N,onFocus:j,onClick:j},a,{className:(0,l.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":S===t})}),null!=r?r:t)}))),i?(0,o.cloneElement)(f.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function c(e){var t=(0,a.Z)();return o.createElement(i,(0,n.Z)({key:String(t)},e))}},1229:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return b}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=r(9877),l=r(8215),u=["components"],i={sidebar_position:3},c="Block explorers",p={unversionedId:"quickstart/explorers",id:"quickstart/explorers",title:"Block explorers",description:"Overview",source:"@site/docs/quickstart/explorers.md",sourceDirName:"quickstart",slug:"/quickstart/explorers",permalink:"/docs/quickstart/explorers",editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/quickstart/explorers.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Network endpoints",permalink:"/docs/quickstart/endpoints"},next:{title:"Faucet",permalink:"/docs/quickstart/faucet"}},d={},b=[{value:"Overview",id:"overview",level:2},{value:"Explorers",id:"explorers",level:2}],h={toc:b};function f(e){var t=e.components,r=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"block-explorers"},"Block explorers"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Block explorers are the Google for searching on a blockchain. They give developers and users the possibility to search information such as balances, contracts, tokens, transactions, and API services."),(0,a.kt)("p",null,"Astar provides two different kinds of explorers: one that combines Substrate and EVM, and another that is dedicated to our EVM ecosystem."),(0,a.kt)("h2",{id:"explorers"},"Explorers"),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"astar",label:"Astar Network",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Subscan is the most used explorer in the Polkadot ecosystem. With Subscan you can search the complete Astar Network. Subscan support Substrate and Ethereum API. BlockScout is the best explorer for developers who are building in our EVM environment, it has all the features as EtherScan."),(0,a.kt)("p",null,(0,a.kt)("b",null,"Subscan:")," ",(0,a.kt)("a",{href:"https://astar.subscan.io"},"https://astar.subscan.io")),(0,a.kt)("p",null,(0,a.kt)("b",null,"BlockScout:")," ",(0,a.kt)("a",{href:"https://blockscout.com/astar"},"https://blockscout.com/astar")),(0,a.kt)("p",null,(0,a.kt)("b",null,"Polkadot JS:")," ",(0,a.kt)("a",{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fastar.api.onfinality.io%2Fpublic-ws#/explorer"},"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fastar.api.onfinality.io%2Fpublic-ws#/explorer"))),(0,a.kt)(l.Z,{value:"shiden",label:"Shiden Network",mdxType:"TabItem"},(0,a.kt)("p",null,"Subscan is the most used explorer in the Polkadot ecosystem. With Subscan you can search the complete Astar Network. Subscan support Substrate and Ethereum API. BlockScout is the best explorer for developers who are building in our EVM environment, it has all the features as EtherScan."),(0,a.kt)("p",null,(0,a.kt)("b",null,"Subscan:")," ",(0,a.kt)("a",{href:"https://shiden.subscan.io"},"https://shiden.subscan.io")),(0,a.kt)("p",null,(0,a.kt)("b",null,"BlockScout:")," ",(0,a.kt)("a",{href:"https://blockscout.com/shiden"},"https://blockscout.com/shiden")),(0,a.kt)("p",null,(0,a.kt)("b",null,"Polkadot JS:")," ",(0,a.kt)("a",{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fshiden.api.onfinality.io%2Fpublic-ws#/explorer"},"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fshiden.api.onfinality.io%2Fpublic-ws#/explorer"))),(0,a.kt)(l.Z,{value:"shibuya",label:"Shibuya",mdxType:"TabItem"},(0,a.kt)("p",null,"Subscan is the most used explorer in the Polkadot ecosystem. With Subscan you can search the complete Astar Network. Subscan support Substrate and Ethereum API. BlockScout is the best explorer for developers who are building in our EVM environment, it has all the features as EtherScan."),(0,a.kt)("p",null,(0,a.kt)("b",null,"Subscan:")," ",(0,a.kt)("a",{href:"https://shibuya.subscan.io"},"https://shibuya.subscan.io")),(0,a.kt)("p",null,(0,a.kt)("b",null,"BlockScout:")," ",(0,a.kt)("a",{href:"https://blockscout.com/shibuya"},"https://blockscout.com/shibuya")),(0,a.kt)("p",null,(0,a.kt)("b",null,"Polkadot JS:")," ",(0,a.kt)("a",{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.shibuya.astar.network#/explorer"},"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.shibuya.astar.network#/explorer")))))}f.isMDXComponent=!0}}]);