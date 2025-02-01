import{r as $}from"./index-DLiaat5J.js";import{B as I,s as L,k as g,c as x,e as C,t as R,i as F,n as z,a as G,I as W,b as U,d as b,f as J,g as v,h as K,j as E}from"./index-CfBHPfAt.js";class Q extends I{constructor({domain:e}){super(`Invalid domain "${L(e)}".`,{metaMessages:["Must be a valid EIP-712 domain."]})}}class X extends I{constructor({primaryType:e,types:s}){super(`Invalid primary type \`${e}\` must be one of \`${JSON.stringify(Object.keys(s))}\`.`,{docsPath:"/api/glossary/Errors#typeddatainvalidprimarytypeerror",metaMessages:["Check that the primary type is a key in `types`."]})}}class Y extends I{constructor({type:e}){super(`Struct type "${e}" is invalid.`,{metaMessages:["Struct type must not be a Solidity type."],name:"InvalidStructTypeError"})}}function Z(t){const{domain:e={},message:s,primaryType:n}=t,a={EIP712Domain:ae({domain:e}),...t.types};ne({domain:e,message:s,primaryType:n,types:a});const r=["0x1901"];return e&&r.push(ee({domain:e,types:a})),n!=="EIP712Domain"&&r.push(q({data:s,primaryType:n,types:a})),g(x(r))}function ee({domain:t,types:e}){return q({data:t,primaryType:"EIP712Domain",types:e})}function q({data:t,primaryType:e,types:s}){const n=H({data:t,primaryType:e,types:s});return g(n)}function H({data:t,primaryType:e,types:s}){const n=[{type:"bytes32"}],a=[te({primaryType:e,types:s})];for(const r of s[e]){const[i,o]=M({types:s,name:r.name,type:r.type,value:t[r.name]});n.push(i),a.push(o)}return C(n,a)}function te({primaryType:t,types:e}){const s=R(se({primaryType:t,types:e}));return g(s)}function se({primaryType:t,types:e}){let s="";const n=A({primaryType:t,types:e});n.delete(t);const a=[t,...Array.from(n).sort()];for(const r of a)s+=`${r}(${e[r].map(({name:i,type:o})=>`${o} ${i}`).join(",")})`;return s}function A({primaryType:t,types:e},s=new Set){const n=t.match(/^\w*/u),a=n==null?void 0:n[0];if(s.has(a)||e[a]===void 0)return s;s.add(a);for(const r of e[a])A({primaryType:r.type,types:e},s);return s}function M({types:t,name:e,type:s,value:n}){if(t[s]!==void 0)return[{type:"bytes32"},g(H({data:n,primaryType:s,types:t}))];if(s==="bytes")return n=`0x${(n.length%2?"0":"")+n.slice(2)}`,[{type:"bytes32"},g(n)];if(s==="string")return[{type:"bytes32"},g(R(n))];if(s.lastIndexOf("]")===s.length-1){const a=s.slice(0,s.lastIndexOf("[")),r=n.map(i=>M({name:e,type:a,types:t,value:i}));return[{type:"bytes32"},g(C(r.map(([i])=>i),r.map(([,i])=>i)))]}return[{type:s},n]}function ne(t){const{domain:e,message:s,primaryType:n,types:a}=t,r=(i,o)=>{for(const u of i){const{name:w,type:f}=u,d=o[w],_=f.match(F);if(_&&(typeof d=="number"||typeof d=="bigint")){const[j,m,N]=_;z(d,{signed:m==="int",size:Number.parseInt(N)/8})}if(f==="address"&&typeof d=="string"&&!G(d))throw new W({address:d});const P=f.match(U);if(P){const[j,m]=P;if(m&&b(d)!==Number.parseInt(m))throw new J({expectedSize:Number.parseInt(m),givenSize:b(d)})}const B=a[f];B&&(re(f),r(B,d))}};if(a.EIP712Domain&&e){if(typeof e!="object")throw new Q({domain:e});r(a.EIP712Domain,e)}if(n!=="EIP712Domain")if(a[n])r(a[n],s);else throw new X({primaryType:n,types:a})}function ae({domain:t}){return[typeof(t==null?void 0:t.name)=="string"&&{name:"name",type:"string"},(t==null?void 0:t.version)&&{name:"version",type:"string"},(typeof(t==null?void 0:t.chainId)=="number"||typeof(t==null?void 0:t.chainId)=="bigint")&&{name:"chainId",type:"uint256"},(t==null?void 0:t.verifyingContract)&&{name:"verifyingContract",type:"address"},(t==null?void 0:t.salt)&&{name:"salt",type:"bytes32"}].filter(Boolean)}function re(t){if(t==="address"||t==="bool"||t==="string"||t.startsWith("bytes")||t.startsWith("uint")||t.startsWith("int"))throw new Y({type:t})}const ie=`Ethereum Signed Message:
`;function oe(t){const e=typeof t=="string"?v(t):typeof t.raw=="string"?t.raw:K(t.raw),s=v(`${ie}${b(e)}`);return x([s,e])}function ce(t,e){return g(oe(t),e)}const le=()=>"9.1.0",ue=t=>t.toString(16).padStart(2,"0"),de=t=>{const e=new Uint8Array(t/2);return window.crypto.getRandomValues(e),Array.from(e,ue).join("")},he=()=>typeof window<"u"?de(10):new Date().getTime().toString(36);class y{}y.makeRequest=(t,e)=>({id:he(),method:t,params:e,env:{sdkVersion:le()}});y.makeResponse=(t,e,s)=>({id:t,success:!0,version:s,data:e});y.makeErrorResponse=(t,e,s)=>({id:t,success:!1,error:e,version:s});var c;(function(t){t.sendTransactions="sendTransactions",t.rpcCall="rpcCall",t.getChainInfo="getChainInfo",t.getSafeInfo="getSafeInfo",t.getTxBySafeTxHash="getTxBySafeTxHash",t.getSafeBalances="getSafeBalances",t.signMessage="signMessage",t.signTypedMessage="signTypedMessage",t.getEnvironmentInfo="getEnvironmentInfo",t.getOffChainSignature="getOffChainSignature",t.requestAddressBook="requestAddressBook",t.wallet_getPermissions="wallet_getPermissions",t.wallet_requestPermissions="wallet_requestPermissions"})(c||(c={}));var S;(function(t){t.requestAddressBook="requestAddressBook"})(S||(S={}));class fe{constructor(e=null,s=!1){this.allowedOrigins=null,this.callbacks=new Map,this.debugMode=!1,this.isServer=typeof window>"u",this.isValidMessage=({origin:n,data:a,source:r})=>{const i=!a,o=!this.isServer&&r===window.parent,u=typeof a.version<"u"&&parseInt(a.version.split(".")[0]),w=typeof u=="number"&&u>=1;let f=!0;return Array.isArray(this.allowedOrigins)&&(f=this.allowedOrigins.find(d=>d.test(n))!==void 0),!i&&o&&w&&f},this.logIncomingMessage=n=>{console.info(`Safe Apps SDK v1: A message was received from origin ${n.origin}. `,n.data)},this.onParentMessage=n=>{this.isValidMessage(n)&&(this.debugMode&&this.logIncomingMessage(n),this.handleIncomingMessage(n.data))},this.handleIncomingMessage=n=>{const{id:a}=n,r=this.callbacks.get(a);r&&(r(n),this.callbacks.delete(a))},this.send=(n,a)=>{const r=y.makeRequest(n,a);if(this.isServer)throw new Error("Window doesn't exist");return window.parent.postMessage(r,"*"),new Promise((i,o)=>{this.callbacks.set(r.id,u=>{if(!u.success){o(new Error(u.error));return}i(u)})})},this.allowedOrigins=e,this.debugMode=s,this.isServer||window.addEventListener("message",this.onParentMessage)}}const O=t=>typeof t=="object"&&t!=null&&"domain"in t&&"types"in t&&"message"in t;$();class ge{constructor(e){this.communicator=e}async getBySafeTxHash(e){if(!e)throw new Error("Invalid safeTxHash");return(await this.communicator.send(c.getTxBySafeTxHash,{safeTxHash:e})).data}async signMessage(e){const s={message:e};return(await this.communicator.send(c.signMessage,s)).data}async signTypedMessage(e){if(!O(e))throw new Error("Invalid typed data");return(await this.communicator.send(c.signTypedMessage,{typedData:e})).data}async send({txs:e,params:s}){if(!e||!e.length)throw new Error("No transactions were passed");const n={txs:e,params:s};return(await this.communicator.send(c.sendTransactions,n)).data}}const l={eth_call:"eth_call",eth_gasPrice:"eth_gasPrice",eth_getLogs:"eth_getLogs",eth_getBalance:"eth_getBalance",eth_getCode:"eth_getCode",eth_getBlockByHash:"eth_getBlockByHash",eth_getBlockByNumber:"eth_getBlockByNumber",eth_getStorageAt:"eth_getStorageAt",eth_getTransactionByHash:"eth_getTransactionByHash",eth_getTransactionReceipt:"eth_getTransactionReceipt",eth_getTransactionCount:"eth_getTransactionCount",eth_estimateGas:"eth_estimateGas",safe_setSettings:"safe_setSettings"},h={defaultBlockParam:(t="latest")=>t,returnFullTxObjectParam:(t=!1)=>t,blockNumberToHex:t=>Number.isInteger(t)?`0x${t.toString(16)}`:t};class me{constructor(e){this.communicator=e,this.call=this.buildRequest({call:l.eth_call,formatters:[null,h.defaultBlockParam]}),this.getBalance=this.buildRequest({call:l.eth_getBalance,formatters:[null,h.defaultBlockParam]}),this.getCode=this.buildRequest({call:l.eth_getCode,formatters:[null,h.defaultBlockParam]}),this.getStorageAt=this.buildRequest({call:l.eth_getStorageAt,formatters:[null,h.blockNumberToHex,h.defaultBlockParam]}),this.getPastLogs=this.buildRequest({call:l.eth_getLogs}),this.getBlockByHash=this.buildRequest({call:l.eth_getBlockByHash,formatters:[null,h.returnFullTxObjectParam]}),this.getBlockByNumber=this.buildRequest({call:l.eth_getBlockByNumber,formatters:[h.blockNumberToHex,h.returnFullTxObjectParam]}),this.getTransactionByHash=this.buildRequest({call:l.eth_getTransactionByHash}),this.getTransactionReceipt=this.buildRequest({call:l.eth_getTransactionReceipt}),this.getTransactionCount=this.buildRequest({call:l.eth_getTransactionCount,formatters:[null,h.defaultBlockParam]}),this.getGasPrice=this.buildRequest({call:l.eth_gasPrice}),this.getEstimateGas=s=>this.buildRequest({call:l.eth_estimateGas})([s]),this.setSafeSettings=this.buildRequest({call:l.safe_setSettings})}buildRequest(e){const{call:s,formatters:n}=e;return async a=>{n&&Array.isArray(a)&&n.forEach((o,u)=>{o&&(a[u]=o(a[u]))});const r={call:s,params:a||[]};return(await this.communicator.send(c.rpcCall,r)).data}}}const pe="0x1626ba7e",ye="0x20c13b0b",T=4001;class p extends Error{constructor(e,s,n){super(e),this.code=s,this.data=n,Object.setPrototypeOf(this,p.prototype)}}class D{constructor(e){this.communicator=e}async getPermissions(){return(await this.communicator.send(c.wallet_getPermissions,void 0)).data}async requestPermissions(e){if(!this.isPermissionRequestValid(e))throw new p("Permissions request is invalid",T);try{return(await this.communicator.send(c.wallet_requestPermissions,e)).data}catch{throw new p("Permissions rejected",T)}}isPermissionRequestValid(e){return e.every(s=>typeof s=="object"?Object.keys(s).every(n=>!!Object.values(S).includes(n)):!1)}}const k=(t,e)=>e.some(s=>s.parentCapability===t),we=()=>(t,e,s)=>{const n=s.value;return s.value=async function(){const a=new D(this.communicator);let r=await a.getPermissions();if(k(e,r)||(r=await a.requestPermissions([{[e]:{}}])),!k(e,r))throw new p("Permissions rejected",T);return n.apply(this)},s};var be=function(t,e,s,n){var a=arguments.length,r=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,s):n,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,s,n);else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(r=(a<3?i(r):a>3?i(e,s,r):i(e,s))||r);return a>3&&r&&Object.defineProperty(e,s,r),r};class V{constructor(e){this.communicator=e}async getChainInfo(){return(await this.communicator.send(c.getChainInfo,void 0)).data}async getInfo(){return(await this.communicator.send(c.getSafeInfo,void 0)).data}async experimental_getBalances({currency:e="usd"}={}){return(await this.communicator.send(c.getSafeBalances,{currency:e})).data}async check1271Signature(e,s="0x"){const n=await this.getInfo(),a=E({abi:[{constant:!1,inputs:[{name:"_dataHash",type:"bytes32"},{name:"_signature",type:"bytes"}],name:"isValidSignature",outputs:[{name:"",type:"bytes4"}],payable:!1,stateMutability:"nonpayable",type:"function"}],functionName:"isValidSignature",args:[e,s]}),r={call:l.eth_call,params:[{to:n.safeAddress,data:a},"latest"]};try{return(await this.communicator.send(c.rpcCall,r)).data.slice(0,10).toLowerCase()===pe}catch{return!1}}async check1271SignatureBytes(e,s="0x"){const n=await this.getInfo(),a=E({abi:[{constant:!1,inputs:[{name:"_data",type:"bytes"},{name:"_signature",type:"bytes"}],name:"isValidSignature",outputs:[{name:"",type:"bytes4"}],payable:!1,stateMutability:"nonpayable",type:"function"}],functionName:"isValidSignature",args:[e,s]}),r={call:l.eth_call,params:[{to:n.safeAddress,data:a},"latest"]};try{return(await this.communicator.send(c.rpcCall,r)).data.slice(0,10).toLowerCase()===ye}catch{return!1}}calculateMessageHash(e){return ce(e)}calculateTypedMessageHash(e){const s=typeof e.domain.chainId=="object"?e.domain.chainId.toNumber():Number(e.domain.chainId);let n=e.primaryType;if(!n){const a=Object.values(e.types),r=Object.keys(e.types).filter(i=>a.every(o=>o.every(({type:u})=>u.replace("[","").replace("]","")!==i)));if(r.length===0||r.length>1)throw new Error("Please specify primaryType");n=r[0]}return Z({message:e.message,domain:{...e.domain,chainId:s,verifyingContract:e.domain.verifyingContract,salt:e.domain.salt},types:e.types,primaryType:n})}async getOffChainSignature(e){return(await this.communicator.send(c.getOffChainSignature,e)).data}async isMessageSigned(e,s="0x"){let n;if(typeof e=="string"&&(n=async()=>{const a=this.calculateMessageHash(e);return await this.isMessageHashSigned(a,s)}),O(e)&&(n=async()=>{const a=this.calculateTypedMessageHash(e);return await this.isMessageHashSigned(a,s)}),n)return await n();throw new Error("Invalid message type")}async isMessageHashSigned(e,s="0x"){const n=[this.check1271Signature.bind(this),this.check1271SignatureBytes.bind(this)];for(const a of n)if(await a(e,s))return!0;return!1}async getEnvironmentInfo(){return(await this.communicator.send(c.getEnvironmentInfo,void 0)).data}async requestAddressBook(){return(await this.communicator.send(c.requestAddressBook,void 0)).data}}be([we()],V.prototype,"requestAddressBook",null);class Ie{constructor(e={}){const{allowedDomains:s=null,debug:n=!1}=e;this.communicator=new fe(s,n),this.eth=new me(this.communicator),this.txs=new ge(this.communicator),this.safe=new V(this.communicator),this.wallet=new D(this.communicator)}}export{y as MessageFormatter,c as Methods,l as RPC_CALLS,S as RestrictedMethods,Ie as default,le as getSDKVersion,O as isObjectEIP712TypedData};
