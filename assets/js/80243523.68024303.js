"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[6962],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),k=r,m=u["".concat(l,".").concat(k)]||u[k]||d[k]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8444:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:4,title:"Ledger Astar/Shiden EVM on Metmask"},l=void 0,c={unversionedId:"integrations/wallets/ledger-evm",id:"integrations/wallets/ledger-evm",title:"Ledger Astar/Shiden EVM on Metmask",description:"Using Astar and Shiden EVM Ledger apps with MetaMask",source:"@site/docs/integrations/wallets/ledger-evm.md",sourceDirName:"integrations/wallets",slug:"/integrations/wallets/ledger-evm",permalink:"/docs/integrations/wallets/ledger-evm",editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/integrations/wallets/ledger-evm.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Ledger Astar/Shiden EVM on Metmask"},sidebar:"tutorialSidebar",previous:{title:"Transak",permalink:"/docs/integrations/wallets/transak"},next:{title:"OnFinality",permalink:"/docs/integrations/node-providers/onfinality"}},p={},d=[{value:"Using Astar and Shiden EVM Ledger apps with MetaMask",id:"using-astar-and-shiden-evm-ledger-apps-with-metamask",level:2},{value:"Intro",id:"intro",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Your Ledger device is ready for use",id:"your-ledger-device-is-ready-for-use",level:3},{value:"Astar/Shiden network set up on Metamask",id:"astarshiden-network-set-up-on-metamask",level:3},{value:"Install apps to your Ledger device",id:"install-apps-to-your-ledger-device",level:3},{value:"Connecting your Ledger device to MetaMask",id:"connecting-your-ledger-device-to-metamask",level:2},{value:"Interacting with smart contracts",id:"interacting-with-smart-contracts",level:2}],u={toc:d};function k(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"using-astar-and-shiden-evm-ledger-apps-with-metamask"},"Using Astar and Shiden EVM Ledger apps with MetaMask"),(0,i.kt)("h2",{id:"intro"},"Intro"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Astar EVM")," and ",(0,i.kt)("strong",{parentName:"p"},"Shiden EVM")," apps are now available on Ledger hardware wallet devices. This means that MetaMask users can now sign transactions for EVM accounts on those networks using Ledger Nano S (plus) or Ledger X devices."),(0,i.kt)("p",null,"This guide will show you how to set up Astar EVM and Shiden EVM on your Ledger hardware wallet and how to use it in combination with MetaMask."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")),(0,i.kt)("p",{parentName:"blockquote"},"Photos are taken using Nano S Plus device, and the example shows interaction with Astar EVM app, but the process is the same with Nano S and Nano X devices, as well as Shiden EVM app.")),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("h3",{id:"your-ledger-device-is-ready-for-use"},"Your Ledger device is ready for use"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360000613793?docs=true"},"Make sure you have set up your Ledger device")),(0,i.kt)("li",{parentName:"ul"},"Update your device to latest firmware",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360002731113?docs=true"},"Nano S")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/4445777839901?docs=true"},"Nano S Plus")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/360013349800?docs=true"},"Nano X")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.ledger.com/hc/en-us/articles/4404389606417-Download-and-install-Ledger-Live?docs=true"},"Download and install Ledger Live app for your OS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://metamask.io/download/"},"Download and install MetaMask for your browser"))),(0,i.kt)("h3",{id:"astarshiden-network-set-up-on-metamask"},"Astar/Shiden network set up on Metamask"),(0,i.kt)("p",null,"If you already have this, feel free to skip this part."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In MetaMask menu navigate to Settings \u2192 Networks, and click \u201cAdd a network\u201d"),(0,i.kt)("li",{parentName:"ol"},"Enter following details for Astar:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Network name: ",(0,i.kt)("inlineCode",{parentName:"li"},"Astar Network Mainnet")),(0,i.kt)("li",{parentName:"ol"},"New RPC URL: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://rpc.astar.network:8545/")),(0,i.kt)("li",{parentName:"ol"},"Chain ID: ",(0,i.kt)("inlineCode",{parentName:"li"},"592")),(0,i.kt)("li",{parentName:"ol"},"Currency Symbol: ",(0,i.kt)("inlineCode",{parentName:"li"},"ASTR")),(0,i.kt)("li",{parentName:"ol"},"Block Explorer URL(Optional): ",(0,i.kt)("inlineCode",{parentName:"li"},"https://astar.subscan.io/")))),(0,i.kt)("li",{parentName:"ol"},"Click the \u201cSave\u201d button"),(0,i.kt)("li",{parentName:"ol"},"Repeat steps 1-3 for Shiden network with following details:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Network name: ",(0,i.kt)("inlineCode",{parentName:"li"},"Shiden Network Mainnet")),(0,i.kt)("li",{parentName:"ol"},"New RPC URL: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://evm.shiden.astar.network/")),(0,i.kt)("li",{parentName:"ol"},"Chain ID: ",(0,i.kt)("inlineCode",{parentName:"li"},"336")),(0,i.kt)("li",{parentName:"ol"},"Currency Symbol: ",(0,i.kt)("inlineCode",{parentName:"li"},"SDN")),(0,i.kt)("li",{parentName:"ol"},"Block Explorer URL(Optional): ",(0,i.kt)("inlineCode",{parentName:"li"},"https://shiden.subscan.io/")))),(0,i.kt)("li",{parentName:"ol"},"Close the Settings menu and from the dropdown select the network you wish to interact with")),(0,i.kt)("h3",{id:"install-apps-to-your-ledger-device"},"Install apps to your Ledger device"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open Ledger Live app and navigate to \u201cManager\u201d"),(0,i.kt)("li",{parentName:"ol"},"Connect your Ledger Device and unlock it",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"If asked, confirm Ledger Manager on your device"))),(0,i.kt)("li",{parentName:"ol"},"Search for \u201cAstar EVM\u201d or \u201cShiden EVM\u201d in the app catalog"),(0,i.kt)("li",{parentName:"ol"},"Click install")),(0,i.kt)("p",null,"After this step, you should have one or both of these apps:"),(0,i.kt)("center",null,(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)("img",{src:n(7906).Z,style:{height:"200px",margin:"1px"}}),(0,i.kt)("img",{src:n(3713).Z,style:{height:"200px",margin:"1px"}}))),(0,i.kt)("h2",{id:"connecting-your-ledger-device-to-metamask"},"Connecting your Ledger device to MetaMask"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In MetaMask menu select \u201cConnect Hardware wallet:")),(0,i.kt)("center",null,(0,i.kt)("img",{src:n(8029).Z,style:{height:"400px"}})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"On the next screen select \u201cLedger\u201d and click \u201cContinue")),(0,i.kt)("center",null,(0,i.kt)("img",{src:n(8429).Z,style:{height:"400px"}})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Pair and connect your Device when prompted by the browser:")),(0,i.kt)("center",null,(0,i.kt)("img",{src:n(2137).Z,style:{height:"400px"}})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Select an account you wish to connect and click \u201cUnlock\u201d")),(0,i.kt)("center",null,(0,i.kt)("img",{src:n(2447).Z,style:{height:"400px"}})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"You should now see your account and balance:")),(0,i.kt)("center",null,(0,i.kt)("img",{src:n(4610).Z,style:{height:"400px"}})),(0,i.kt)("h1",{id:"receiving-tokens"},"Receiving tokens"),(0,i.kt)("p",null,"To receive tokens, copy the address of your connected account by clicking your account name in MetaMask header, and send some tokens to that address from your preferred source."),(0,i.kt)("h1",{id:"sending-tokens"},"Sending tokens"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In MetaMask click \u201cSend\u201d button and enter the address you wish to send to"),(0,i.kt)("li",{parentName:"ol"},"Enter the amount to send and click \u201cNext\u201d"),(0,i.kt)("li",{parentName:"ol"},"Connect your Ledger device and unlock it. Due to MetaMask limitations, it will prompt you to open Ethereum App. Ignore this and open Astar EVM app.")),(0,i.kt)("center",null,(0,i.kt)("img",{src:n(8242).Z,style:{height:"400px"}})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"When your Ledger device screen is showing \u201cApplication is ready\u201d, click \u201cConfirm\u201d in MetaMask")),(0,i.kt)("center",null,(0,i.kt)("img",{src:n(7442).Z,style:{height:"200px",margin:"1px"}})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Review the transaction on your Ledger device:")),(0,i.kt)("center",null,(0,i.kt)("img",{src:n(6531).Z,style:{height:"200px",margin:"1px"}})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"a) Check amount:\n")),(0,i.kt)("center",null,(0,i.kt)("img",{src:n(9050).Z,style:{height:"200px",margin:"1px"}})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"b) Check receiving address:\n")),(0,i.kt)("center",null,(0,i.kt)("img",{src:n(4491).Z,style:{height:"200px",margin:"1px"}})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"c) Check network:\n")),(0,i.kt)("center",null,(0,i.kt)("img",{src:n(4193).Z,style:{height:"200px",margin:"1px"}})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"d) Check Fees:\n")),(0,i.kt)("center",null,(0,i.kt)("img",{src:n(5854).Z,style:{height:"200px",margin:"1px"}})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"e) Either approve or reject the transaction:\n")),(0,i.kt)("center",null,(0,i.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,i.kt)("img",{src:n(1254).Z,style:{height:"200px",margin:"1px"}}),(0,i.kt)("img",{src:n(474).Z,style:{height:"200px",margin:"1px"}}))),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Check the transaction result in MetaMask \u201cActivity\u201d tab.")),(0,i.kt)("h2",{id:"interacting-with-smart-contracts"},"Interacting with smart contracts"),(0,i.kt)("p",null,"In order to interact with smart contracts, you need to enable blind signing in the Astar EVM app on your Ledger device:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open the app"),(0,i.kt)("li",{parentName:"ol"},"Navigate to \u201cSettings\u201d and confirm"),(0,i.kt)("li",{parentName:"ol"},"Confirm the \u201cBlind signing\u201d option, so it turns to \u201cEnabled\u201d"),(0,i.kt)("li",{parentName:"ol"},"Navigate to \u201cBack\u201d and confirm")))}k.isMDXComponent=!0},7906:function(e,t,n){t.Z=n.p+"assets/images/1-AstarEVM-0473145943bc08931b11573d3c603846.jpg"},1254:function(e,t,n){t.Z=n.p+"assets/images/11-AcceptAndSend-0d299185da3ece4ca4c3b97a78d02a3b.jpg"},474:function(e,t,n){t.Z=n.p+"assets/images/12-Reject-6999d1499f3e7bdb0fab53759a73366c.jpg"},3713:function(e,t,n){t.Z=n.p+"assets/images/2-ShidenEVM-4bccdda7df01eba49346606013073745.jpg"},7442:function(e,t,n){t.Z=n.p+"assets/images/3-ApplicationIsReady-0484507f532a65f83283e168049b406c.jpg"},6531:function(e,t,n){t.Z=n.p+"assets/images/4-ReviewTransaction-a88fc3d496a61ea02fb580a964de0a53.jpg"},9050:function(e,t,n){t.Z=n.p+"assets/images/5-AmountASTR1-e735460b1dc18a8e5b3fbf75fea27e07.jpg"},4491:function(e,t,n){t.Z=n.p+"assets/images/6-Address-1f1ee23087505655075c7060b74420e5.jpg"},4193:function(e,t,n){t.Z=n.p+"assets/images/7-Network_Astar-161b83c083a2dfcc5c10cc3159af9d54.jpg"},5854:function(e,t,n){t.Z=n.p+"assets/images/9-MaxFees_ASTR-3382a5a63d6ea1b0d4703997be54c90f.jpg"},4610:function(e,t,n){t.Z=n.p+"assets/images/acc_balance-698baed6119afde507cf2ae8a5f8bcf0.png"},8242:function(e,t,n){t.Z=n.p+"assets/images/confirm_tx-99a1132ee0992fc34efdd637d6364fb3.png"},8029:function(e,t,n){t.Z=n.p+"assets/images/connect_hw_wallet-995706956982b75e780e6123e9174272.png"},2137:function(e,t,n){t.Z=n.p+"assets/images/pair_hid-cc89d7ccab2fc88aa7a9e3770d9e5251.png"},2447:function(e,t,n){t.Z=n.p+"assets/images/select_acc-7f1f165ff4ac6bd71d4c444743089c42.png"},8429:function(e,t,n){t.Z=n.p+"assets/images/select_ledger-e2d88d349ad96ee92b7543aca535bc60.png"}}]);