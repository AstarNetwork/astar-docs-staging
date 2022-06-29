"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[8838],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8336:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:2},s="Band Protocol",c={unversionedId:"integrations/oracles/band",id:"integrations/oracles/band",title:"Band Protocol",description:"[Band Protocol]//bandprotocol.com/",source:"@site/docs/integrations/oracles/band.md",sourceDirName:"integrations/oracles",slug:"/integrations/oracles/band",permalink:"/docs/integrations/oracles/band",editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/integrations/oracles/band.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"DIA",permalink:"/docs/integrations/oracles/dia"}},u={},p=[{value:"Overview",id:"overview",level:2},{value:"Why do blockchains need oracles?",id:"why-do-blockchains-need-oracles",level:3},{value:"Use Band Protocol",id:"use-band-protocol",level:2},{value:"Astar",id:"astar",level:3},{value:"Shiden",id:"shiden",level:3},{value:"Supported Token",id:"supported-token",level:2},{value:"Get Data Using Smart Contracts",id:"get-data-using-smart-contracts",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Full Documentation",id:"full-documentation",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"band-protocol"},"Band Protocol"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://bandprotocol.com/"},"Band Protocol")," is a cross-chain data oracle aggregating and connecting real-world data and APIs to smart contracts."),(0,o.kt)("h3",{id:"why-do-blockchains-need-oracles"},"Why do blockchains need oracles?"),(0,o.kt)("p",null,"Blockchains are great at providing immutable storage and deterministic verifiable computations. However, they cannot access trusted real-world information available outside their networks. Band Protocol enhances smart contract functionalities by granting access to reliable data without any central authority or points of failure."),(0,o.kt)("h2",{id:"use-band-protocol"},"Use Band Protocol"),(0,o.kt)("p",null,"Developers have two ways to fetch prices from Band\u2019s oracle infrastructure. On one hand, they can use Band\u2019s smart contracts on Astar. Doing so, they access data that is on-chain and is updated either at regular intervals or when price slippage is more than a target amount (different for each token). Currently, ",(0,o.kt)("strong",{parentName:"p"},"the interval is set at 10 minutes or a price slippage of 0.5%.")," The second way for devs is to use the JavaScript helper library, which uses an API endpoint to fetch the data using similar functions as those from the smart contracts, but this implementation bypasses the blockchain entirely. This can be useful if your DApp front-end needs direct access to the data."),(0,o.kt)("p",null,"The Aggregator Contract address can be found in the following table:"),(0,o.kt)("h3",{id:"astar"},"Astar"),(0,o.kt)("p",null,"Smart Contract (Aggregator): 0xDA7a001b254CD22e46d3eAB04d937489c93174C3"),(0,o.kt)("h3",{id:"shiden"},"Shiden"),(0,o.kt)("p",null,"Smart Contract (Aggregator): 0xDA7a001b254CD22e46d3eAB04d937489c93174C3"),(0,o.kt)("h2",{id:"supported-token"},"Supported Token"),(0,o.kt)("p",null,"Price queries with any denomination are available as long as the base and quote symbols are supported (base/quote). For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BTC/USD")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BTC/ETH")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ETH/EUR"))),(0,o.kt)("p",null,"We provide feeds for the following assets:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ASTR"),(0,o.kt)("li",{parentName:"ul"},"ATOM"),(0,o.kt)("li",{parentName:"ul"},"AVAX"),(0,o.kt)("li",{parentName:"ul"},"BNB"),(0,o.kt)("li",{parentName:"ul"},"BUSD"),(0,o.kt)("li",{parentName:"ul"},"DAI"),(0,o.kt)("li",{parentName:"ul"},"DOT"),(0,o.kt)("li",{parentName:"ul"},"ETH"),(0,o.kt)("li",{parentName:"ul"},"FTM"),(0,o.kt)("li",{parentName:"ul"},"MATIC"),(0,o.kt)("li",{parentName:"ul"},"SOL"),(0,o.kt)("li",{parentName:"ul"},"USDC"),(0,o.kt)("li",{parentName:"ul"},"USDT"),(0,o.kt)("li",{parentName:"ul"},"WBTC")),(0,o.kt)("h2",{id:"get-data-using-smart-contracts"},"Get Data Using Smart Contracts"),(0,o.kt)("p",null,"To query prices from Band's oracle through smart contracts, the contract looking to use the price values should reference Band's ",(0,o.kt)("inlineCode",{parentName:"p"},"StdReference")," contract. This contract exposes ",(0,o.kt)("inlineCode",{parentName:"p"},"getReferenceData"),"  and ",(0,o.kt)("inlineCode",{parentName:"p"},"getReferenceDataBulk")," functions."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"getReferenceData")," takes two strings as the inputs, the base and quote symbol, respectively. It then queries the ",(0,o.kt)("inlineCode",{parentName:"p"},"StdReference")," contract for the latest rates for those two tokens and returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"ReferenceData")," struct, shown below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"struct ReferenceData {\n    uint256 rate; // base/quote exchange rate, multiplied by 1e18.\n    uint256 lastUpdatedBase; // UNIX epoch of the last time when base price gets updated.\n    uint256 lastUpdatedQuote; // UNIX epoch of the last time when quote price gets updated.\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"getReferenceDataBulk")," instead takes two lists, one of the base tokens, and one of the quotes. It then proceeds to similarly queries the price for each base/quote pair at each index, and returns an array of ",(0,o.kt)("inlineCode",{parentName:"p"},"ReferenceData")," structs."),(0,o.kt)("p",null,"For example, if we call ",(0,o.kt)("inlineCode",{parentName:"p"},"getReferenceDataBulk")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"['BTC','BTC','ETH']")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"['USD','ETH','BNB']"),", the returned ReferenceData array will contain information regarding the pairs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BTC/USD")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BTC/ETH")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ETH/BNB"))),(0,o.kt)("h2",{id:"example-usage"},"Example Usage"),(0,o.kt)("p",null,"The contract code below demonstrates a simple usage of the new ",(0,o.kt)("inlineCode",{parentName:"p"},"StdReference")," contract and the ",(0,o.kt)("inlineCode",{parentName:"p"},"getReferenceData")," function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'pragma solidity 0.6.11;\npragma experimental ABIEncoderV2;\n\ninterface IStdReference {\n    /// A structure returned whenever someone requests for standard reference data.\n    struct ReferenceData {\n        uint256 rate; // base/quote exchange rate, multiplied by 1e18.\n        uint256 lastUpdatedBase; // UNIX epoch of the last time when base price gets updated.\n        uint256 lastUpdatedQuote; // UNIX epoch of the last time when quote price gets updated.\n    }\n\n    /// Returns the price data for the given base/quote pair. Revert if not available.\n    function getReferenceData(string memory _base, string memory _quote)\n        external\n        view\n        returns (ReferenceData memory);\n\n    /// Similar to getReferenceData, but with multiple base/quote pairs at once.\n    function getReferenceDataBulk(string[] memory _bases, string[] memory _quotes)\n        external\n        view\n        returns (ReferenceData[] memory);\n}\n\ncontract DemoOracle {\n    IStdReference ref;\n\n    uint256 public price;\n\n    constructor(IStdReference _ref) public {\n        ref = _ref;\n    }\n\n    function getPrice() external view returns (uint256){\n        IStdReference.ReferenceData memory data = ref.getReferenceData("BTC","USD");\n        return data.rate;\n    }\n\n    function getMultiPrices() external view returns (uint256[] memory){\n        string[] memory baseSymbols = new string[](2);\n        baseSymbols[0] = "WBTC";\n        baseSymbols[1] = "DOT";\n\n        string[] memory quoteSymbols = new string[](2);\n        quoteSymbols[0] = "USD";\n        quoteSymbols[1] = "USDT";\n        IStdReference.ReferenceData[] memory data = ref.getReferenceDataBulk(baseSymbols,quoteSymbols);\n\n        uint256[] memory prices = new uint256[](2);\n        prices[0] = data[0].rate;\n        prices[1] = data[1].rate;\n\n        return prices;\n    }\n\n    function savePrice(string memory base, string memory quote) external {\n        IStdReference.ReferenceData memory data = ref.getReferenceData(base,quote);\n        price = data.rate;\n    }\n}\n')),(0,o.kt)("h2",{id:"full-documentation"},"Full Documentation"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.bandchain.org/"},"Band Protocol Documentation")))}m.isMDXComponent=!0}}]);