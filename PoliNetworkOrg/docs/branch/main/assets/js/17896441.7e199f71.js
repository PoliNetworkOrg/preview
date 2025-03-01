(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["48"],{7226:function(e,t){function n(e){let t,n=[];for(let s of e.split(",").map(e=>e.trim()))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,i,a]=t;if(s&&a){let e=(s=parseInt(s))<(a=parseInt(a))?1:-1;("-"===i||".."===i||"\u2025"===i)&&(a+=e);for(let t=s;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},345:function(e,t,n){"use strict";n.d(t,{Z:()=>p});var s=n("6773");n("1699");var i=n("4461"),a=n("9571"),l=n("5818"),r=n("4361"),o=n("8683"),c=n("2752"),d=n("7921");function u(e){return(0,s.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}function m(){let e=(0,d.ZP)("/");return(0,s.jsx)("li",{className:"breadcrumbs__item",children:(0,s.jsx)(o.Z,{"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,s.jsx)(u,{className:"breadcrumbHomeIcon_ibyY"})})})}function h(e){let{children:t,href:n,isLast:i}=e,a="breadcrumbs__link";return i?(0,s.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,s.jsx)(o.Z,{className:a,href:n,itemProp:"item",children:(0,s.jsx)("span",{itemProp:"name",children:t})}):(0,s.jsx)("span",{className:a,children:t})}function f(e){let{children:t,active:n,index:a,addMicrodata:l}=e;return(0,s.jsxs)("li",{...l&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,i.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,s.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function p(){let e=(0,l.s1)(),t=(0,r.Ns)();return e?(0,s.jsx)("nav",{className:(0,i.Z)(a.k.docs.docBreadcrumbs,"breadcrumbsContainer_ECxp"),"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,s.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,s.jsx)(m,{}),e.map((t,n)=>{let i=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,s.jsx)(f,{active:i,index:n,addMicrodata:!!a,children:(0,s.jsx)(h,{href:a,isLast:i,children:t.label})},n)})]})}):null}},1089:function(e,t,n){"use strict";n.r(t),n.d(t,{default:()=>e6});var s=n("6773"),i=n("1699"),a=n("558"),l=n("9621");let r=i.createContext(null);function o(e){let{children:t,content:n}=e,a=(0,i.useMemo)(()=>({metadata:n.metadata,frontMatter:n.frontMatter,assets:n.assets,contentTitle:n.contentTitle,toc:n.toc}),[n]);return(0,s.jsx)(r.Provider,{value:a,children:t})}function c(){let e=(0,i.useContext)(r);if(null===e)throw new l.i6("DocProvider");return e}function d(){let{metadata:e,frontMatter:t,assets:n}=c();return(0,s.jsx)(a.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n("4461"),m=n("5059"),h=n("3391");function f(){let{metadata:e}=c();return(0,s.jsx)(h.Z,{previous:e.previous,next:e.next})}var p=n("8085"),x=n("7922"),b=n("9571"),j=n("2752"),g=n("8683");let v={tag:"tag_TCcB",tagRegular:"tagRegular_FaLZ",tagWithCount:"tagWithCount_EKKi"};function N(e){let{permalink:t,label:n,count:i,description:a}=e;return(0,s.jsxs)(g.Z,{href:t,title:a,className:(0,u.Z)(v.tag,i?v.tagWithCount:v.tagRegular),children:[n,i&&(0,s.jsx)("span",{children:i})]})}function y(e){let{tags:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("b",{children:(0,s.jsx)(j.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,s.jsx)("ul",{className:(0,u.Z)("tags_Zl7a","padding--none","margin-left--sm"),children:t.map(e=>(0,s.jsx)("li",{className:"tag_tW8W",children:(0,s.jsx)(N,{...e})},e.permalink))})]})}function k(e){let{className:t,...n}=e;return(0,s.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.Z)("iconEdit_WbRf",t),"aria-hidden":"true",...n,children:(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function C(e){let{editUrl:t}=e;return(0,s.jsxs)(g.Z,{to:t,className:b.k.common.editThisPage,children:[(0,s.jsx)(k,{}),(0,s.jsx)(j.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var Z=n("93");function B(e){let{lastUpdatedAt:t}=e,n=new Date(t),i=(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{i18n:{currentLocale:t}}=(0,Z.Z)(),n=function(){let{i18n:{currentLocale:e,localeConfigs:t}}=(0,Z.Z)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})})({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,s.jsx)(j.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,s.jsx)("b",{children:(0,s.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:i})})},children:" on {date}"})}function _(e){let{lastUpdatedBy:t}=e;return(0,s.jsx)(j.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,s.jsx)("b",{children:t})},children:" by {user}"})}function w(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,s.jsxs)("span",{className:b.k.common.lastUpdated,children:[(0,s.jsx)(j.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,s.jsx)(B,{lastUpdatedAt:t}):"",byUser:n?(0,s.jsx)(_,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}function L(e){let{className:t,editUrl:n,lastUpdatedAt:i,lastUpdatedBy:a}=e;return(0,s.jsxs)("div",{className:(0,u.Z)("row",t),children:[(0,s.jsx)("div",{className:"col",children:n&&(0,s.jsx)(C,{editUrl:n})}),(0,s.jsx)("div",{className:(0,u.Z)("col","lastUpdated_Dbky"),children:(i||a)&&(0,s.jsx)(w,{lastUpdatedAt:i,lastUpdatedBy:a})})]})}function T(){let{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:i,tags:a}=e,l=a.length>0,r=!!(t||n||i);return l||r?(0,s.jsxs)("footer",{className:(0,u.Z)(b.k.docs.docFooter,"docusaurus-mt-lg"),children:[l&&(0,s.jsx)("div",{className:(0,u.Z)("row margin-top--sm",b.k.docs.docFooterTagsRow),children:(0,s.jsx)("div",{className:"col",children:(0,s.jsx)(y,{tags:a})})}),r&&(0,s.jsx)(L,{className:(0,u.Z)("margin-top--sm",b.k.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:i})]}):null}var E=n("8858"),I=n("9393");function A(e){let t=e.getBoundingClientRect();return t.top===t.bottom?A(e.parentNode):t}let M=i.memo(function e(t){let{toc:n,className:i,linkClassName:a,isChild:l}=t;return n.length?(0,s.jsx)("ul",{className:l?void 0:i,children:n.map(t=>(0,s.jsxs)("li",{children:[(0,s.jsx)(g.Z,{to:`#${t.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:t.value}}),(0,s.jsx)(e,{isChild:!0,toc:t.children,className:i,linkClassName:a})]},t.id))}):null});function H(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o,...c}=e,d=(0,I.L)(),u=r??d.tableOfContents.minHeadingLevel,m=o??d.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,i.useMemo)(()=>(function e(t){let{toc:n,minHeadingLevel:s,maxHeadingLevel:i}=t;return n.flatMap(t=>{let n=e({toc:t.children,minHeadingLevel:s,maxHeadingLevel:i});return t.level>=s&&t.level<=i?[{...t,children:n}]:n})})({toc:function(e){let t=e.map(e=>({...e,parentIndex:-1,children:[]})),n=Array(7).fill(-1);t.forEach((e,t)=>{let s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t});let s=[];return t.forEach(e=>{let{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):s.push(i)}),s}(t),minHeadingLevel:n,maxHeadingLevel:s}),[t,n,s])}({toc:t,minHeadingLevel:u,maxHeadingLevel:m});return!function(e){let t=(0,i.useRef)(void 0),n=function(){let e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,I.L)();return(0,i.useEffect)(()=>{e.current=t?0:document.querySelector(".navbar").clientHeight},[t]),e}();(0,i.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:s,linkActiveClassName:i,minHeadingLevel:a,maxHeadingLevel:l}=e;function r(){let e=Array.from(document.getElementsByClassName(s)),r=function(e,t){let{anchorTopOffset:n}=t,s=e.find(e=>A(e).top>=n);if(s){var i;return(i=A(s)).top>0&&i.bottom<window.innerHeight/2?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}(function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e,s=[];for(let e=t;e<=n;e+=1)s.push(`h${e}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:a,maxHeadingLevel:l}),{anchorTopOffset:n.current}),o=e.find(e=>r&&r.id===decodeURIComponent(e.href.substring(e.href.indexOf("#")+1)));e.forEach(e=>{e===o?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)})}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}},[e,n])}((0,i.useMemo)(()=>{if(a&&l)return{linkClassName:a,linkActiveClassName:l,minHeadingLevel:u,maxHeadingLevel:m}},[a,l,u,m])),(0,s.jsx)(M,{toc:h,className:n,linkClassName:a,...c})}let S={tocCollapsibleButton:"tocCollapsibleButton_tMrf",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_vSdf"};function z(e){let{collapsed:t,...n}=e;return(0,s.jsx)("button",{type:"button",...n,className:(0,u.Z)("clean-btn",S.tocCollapsibleButton,!t&&S.tocCollapsibleButtonExpanded,n.className),children:(0,s.jsx)(j.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}let R={tocCollapsible:"tocCollapsible_fHwV",tocCollapsibleContent:"tocCollapsibleContent_EIJc",tocCollapsibleExpanded:"tocCollapsibleExpanded_Qxq2"};function V(e){let{toc:t,className:n,minHeadingLevel:i,maxHeadingLevel:a}=e,{collapsed:l,toggleCollapsed:r}=(0,E.u)({initialState:!0});return(0,s.jsxs)("div",{className:(0,u.Z)(R.tocCollapsible,!l&&R.tocCollapsibleExpanded,n),children:[(0,s.jsx)(z,{collapsed:l,onClick:r}),(0,s.jsx)(E.z,{lazy:!0,className:R.tocCollapsibleContent,collapsed:l,children:(0,s.jsx)(H,{toc:t,minHeadingLevel:i,maxHeadingLevel:a})})]})}function U(){let{toc:e,frontMatter:t}=c();return(0,s.jsx)(V,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(b.k.docs.docTocMobile,"tocMobile_s_LV")})}function D(e){let{className:t,...n}=e;return(0,s.jsx)("div",{className:(0,u.Z)("tableOfContents_ZKJi","thin-scrollbar",t),children:(0,s.jsx)(H,{...n,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}function W(){let{toc:e,frontMatter:t}=c();return(0,s.jsx)(D,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:b.k.docs.docTocDesktop})}var O=n("4625"),P=n("6070"),$=n("1036"),F=n("4529"),q=n("2660");function J(){let{prism:e}=(0,I.L)(),{colorMode:t}=(0,q.I)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var K=n("7226"),G=n.n(K);let X=/title=(?<quote>["'])(?<title>.*?)\1/,Y=/\{(?<range>[\d,-]+)\}/,Q={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},ee={...Q,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},et=Object.keys(Q);function en(e,t){let n=e.map(e=>{let{start:n,end:s}=ee[e];return`(?:${n}\\s*(${t.flatMap(e=>[e.line,e.block?.start,e.block?.end].filter(Boolean)).join("|")})\\s*${s})`}).join("|");return RegExp(`^\\s*(?:${n})\\s*$`)}function es(e){let{as:t,...n}=e,i=function(e){let t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach(e=>{let[s,i]=e,a=t[s];a&&"string"==typeof i&&(n[a]=i)}),n}(J());return(0,s.jsx)(t,{...n,style:i,className:(0,u.Z)(n.className,"codeBlockContainer_by2o",b.k.common.codeBlock)})}let ei={codeBlockContent:"codeBlockContent_cbEE",codeBlockTitle:"codeBlockTitle_eJuF",codeBlock:"codeBlock_RHab",codeBlockStandalone:"codeBlockStandalone_SUEq",codeBlockLines:"codeBlockLines_bXcE",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_zvZU",buttonGroup:"buttonGroup_UY6E"};function ea(e){let{children:t,className:n}=e;return(0,s.jsx)(es,{as:"pre",tabIndex:0,className:(0,u.Z)(ei.codeBlockStandalone,"thin-scrollbar",n),children:(0,s.jsx)("code",{className:ei.codeBlockLines,children:t})})}let el={attributes:!0,characterData:!0,childList:!0,subtree:!0};var er=n("891");let eo={codeLine:"codeLine_hnKc",codeLineNumber:"codeLineNumber_RZFn",codeLineContent:"codeLineContent_adR9"};function ec(e){let{line:t,classNames:n,showLineNumbers:i,getLineProps:a,getTokenProps:l}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");let r=a({line:t,className:(0,u.Z)(n,i&&eo.codeLine)}),o=t.map((e,t)=>(0,s.jsx)("span",{...l({token:e})},t));return(0,s.jsxs)("span",{...r,children:[i?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:eo.codeLineNumber}),(0,s.jsx)("span",{className:eo.codeLineContent,children:o})]}):o,(0,s.jsx)("br",{})]})}function ed(e){return(0,s.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function eu(e){return(0,s.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}let em={copyButtonCopied:"copyButtonCopied_kmNX",copyButtonIcons:"copyButtonIcons_lJSP",copyButtonIcon:"copyButtonIcon_CZhK",copyButtonSuccessIcon:"copyButtonSuccessIcon_DAz9"};function eh(e){let{code:t,className:n}=e,[a,l]=(0,i.useState)(!1),r=(0,i.useRef)(void 0),o=(0,i.useCallback)(()=>{!function(e){let{target:t=document.body}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"!=typeof e)throw TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);let n=document.createElement("textarea"),s=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";let i=document.getSelection(),a=i.rangeCount>0&&i.getRangeAt(0);t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{document.execCommand("copy")}catch{}n.remove(),a&&(i.removeAllRanges(),i.addRange(a)),s&&s.focus()}(t),l(!0),r.current=window.setTimeout(()=>{l(!1)},1e3)},[t]);return(0,i.useEffect)(()=>()=>window.clearTimeout(r.current),[]),(0,s.jsx)("button",{type:"button","aria-label":a?(0,j.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,j.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,j.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,u.Z)("clean-btn",n,em.copyButton,a&&em.copyButtonCopied),onClick:o,children:(0,s.jsxs)("span",{className:em.copyButtonIcons,"aria-hidden":"true",children:[(0,s.jsx)(ed,{className:em.copyButtonIcon}),(0,s.jsx)(eu,{className:em.copyButtonSuccessIcon})]})})}function ef(e){return(0,s.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let ep={wordWrapButtonIcon:"wordWrapButtonIcon_uuVr",wordWrapButtonEnabled:"wordWrapButtonEnabled_vK1j"};function ex(e){let{className:t,onClick:n,isEnabled:i}=e,a=(0,j.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,s.jsx)("button",{type:"button",onClick:n,className:(0,u.Z)("clean-btn",t,i&&ep.wordWrapButtonEnabled),"aria-label":a,title:a,children:(0,s.jsx)(ef,{className:ep.wordWrapButtonIcon,"aria-hidden":"true"})})}function eb(e){var t;let{children:n,className:a="",metastring:r,title:o,showLineNumbers:c,language:d}=e,{prism:{defaultLanguage:m,magicComments:h}}=(0,I.L)(),f=(t=d??function(e){let t=e.split(" ").find(e=>e.startsWith("language-"));return t?.replace(/language-/,"")}(a)??m,t?.toLowerCase()),p=J(),x=function(){let[e,t]=(0,i.useState)(!1),[n,s]=(0,i.useState)(!1),a=(0,i.useRef)(null),r=(0,i.useCallback)(()=>{let n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t(e=>!e)},[a,e]),o=(0,i.useCallback)(()=>{let{scrollWidth:e,clientWidth:t}=a.current;s(e>t||a.current.querySelector("code").hasAttribute("style"))},[a]);return!function(e,t){let[n,s]=(0,i.useState)(),a=(0,i.useCallback)(()=>{s(e.current?.closest("[role=tabpanel][hidden]"))},[e,s]);(0,i.useEffect)(()=>{a()},[a]),function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:el,s=(0,l.zX)(t),a=(0,l.Ql)(n);(0,i.useEffect)(()=>{let t=new MutationObserver(s);return e&&t.observe(e,a),()=>t.disconnect()},[e,s,a])}(n,e=>{e.forEach(e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),a())})},{attributes:!0,characterData:!1,childList:!1,subtree:!1})}(a,o),(0,i.useEffect)(()=>{o()},[e,o]),(0,i.useEffect)(()=>(window.addEventListener("resize",o,{passive:!0}),()=>{window.removeEventListener("resize",o)}),[o]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:r}}(),b=(r?.match(X)?.groups.title??"")||o,{lineClassNames:j,code:g}=function(e,t){let n=e.replace(/\n$/,""),{language:s,magicComments:i,metastring:a}=t;if(a&&Y.test(a)){let e=a.match(Y).groups.range;if(0===i.length)throw Error(`A highlight range has been given in code block's metastring (\`\`\` ${a}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);let t=i[0].className;return{lineClassNames:Object.fromEntries(G()(e).filter(e=>e>0).map(e=>[e-1,[t]])),code:n}}if(void 0===s)return{lineClassNames:{},code:n};let l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return en(["js","jsBlock"],t);case"jsx":case"tsx":return en(["js","jsBlock","jsx"],t);case"html":return en(["js","jsBlock","html"],t);case"python":case"py":case"bash":return en(["bash"],t);case"markdown":case"md":return en(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return en(["tex"],t);case"lua":case"haskell":return en(["lua"],t);case"sql":return en(["lua","jsBlock"],t);case"wasm":return en(["wasm"],t);case"vb":case"vba":case"visual-basic":return en(["vb","rem"],t);case"vbnet":return en(["vbnet","rem"],t);case"batch":return en(["rem"],t);case"basic":return en(["rem","f90"],t);case"fsharp":return en(["js","ml"],t);case"ocaml":case"sml":return en(["ml"],t);case"fortran":return en(["f90"],t);case"cobol":return en(["cobol"],t);default:return en(et,t)}}(s,i),r=n.split("\n"),o=Object.fromEntries(i.map(e=>[e.className,{start:0,range:""}])),c=Object.fromEntries(i.filter(e=>e.line).map(e=>{let{className:t,line:n}=e;return[n,t]})),d=Object.fromEntries(i.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.start,t]})),u=Object.fromEntries(i.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.end,t]}));for(let e=0;e<r.length;){let t=r[e].match(l);if(!t){e+=1;continue}let n=t.slice(1).find(e=>void 0!==e);c[n]?o[c[n]].range+=`${e},`:d[n]?o[d[n]].start=e:u[n]&&(o[u[n]].range+=`${o[u[n]].start}-${e-1},`),r.splice(e,1)}n=r.join("\n");let m={};return Object.entries(o).forEach(e=>{let[t,{range:n}]=e;G()(n).forEach(e=>{m[e]??=[],m[e].push(t)})}),{lineClassNames:m,code:n}}(n,{metastring:r,language:f,magicComments:h}),v=c??!!r?.includes("showLineNumbers");return(0,s.jsxs)(es,{as:"div",className:(0,u.Z)(a,f&&!a.includes(`language-${f}`)&&`language-${f}`),children:[b&&(0,s.jsx)("div",{className:ei.codeBlockTitle,children:b}),(0,s.jsxs)("div",{className:ei.codeBlockContent,children:[(0,s.jsx)(er.y$,{theme:p,code:g,language:f??"text",children:e=>{let{className:t,style:n,tokens:i,getLineProps:a,getTokenProps:l}=e;return(0,s.jsx)("pre",{tabIndex:0,ref:x.codeBlockRef,className:(0,u.Z)(t,ei.codeBlock,"thin-scrollbar"),style:n,children:(0,s.jsx)("code",{className:(0,u.Z)(ei.codeBlockLines,v&&ei.codeBlockLinesWithNumbering),children:i.map((e,t)=>(0,s.jsx)(ec,{line:e,getLineProps:a,getTokenProps:l,classNames:j[t],showLineNumbers:v},t))})})}}),(0,s.jsxs)("div",{className:ei.buttonGroup,children:[(x.isEnabled||x.isCodeScrollable)&&(0,s.jsx)(ex,{className:ei.codeButton,onClick:()=>x.toggle(),isEnabled:x.isEnabled}),(0,s.jsx)(eh,{className:ei.codeButton,code:g})]})]})]})}function ej(e){let{children:t,...n}=e,a=(0,F.Z)(),l=i.Children.toArray(t).some(e=>(0,i.isValidElement)(e))?t:Array.isArray(t)?t.join(""):t;return(0,s.jsx)("string"==typeof l?eb:ea,{...n,children:l},String(a))}function eg(e){return(0,s.jsx)("code",{...e})}var ev=n("1136");let eN={details:"details_fAns",isBrowser:"isBrowser_FjXJ",collapsibleContent:"collapsibleContent_APyv"};function ey(e){return!!e&&("SUMMARY"===e.tagName||ey(e.parentElement))}function ek(e){let{summary:t,children:n,...a}=e;(0,ev.Z)().collectAnchor(a.id);let l=(0,F.Z)(),r=(0,i.useRef)(null),{collapsed:o,setCollapsed:c}=(0,E.u)({initialState:!a.open}),[d,m]=(0,i.useState)(a.open),h=i.isValidElement(t)?t:(0,s.jsx)("summary",{children:t??"Details"});return(0,s.jsxs)("details",{...a,ref:r,open:d,"data-collapsed":o,className:(0,u.Z)(eN.details,l&&eN.isBrowser,a.className),onMouseDown:e=>{ey(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();let t=e.target;ey(t)&&function e(t,n){return!!t&&(t===n||e(t.parentElement,n))}(t,r.current)&&(e.preventDefault(),o?(c(!1),m(!0)):c(!0))},children:[h,(0,s.jsx)(E.z,{lazy:!1,collapsed:o,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{c(e),m(!e)},children:(0,s.jsx)("div",{className:eN.collapsibleContent,children:n})})]})}function eC(e){let{...t}=e;return(0,s.jsx)(ek,{...t,className:(0,u.Z)("alert alert--info","details_VA6s",t.className)})}function eZ(e){let t=i.Children.toArray(e.children),n=t.find(e=>i.isValidElement(e)&&"summary"===e.type),a=(0,s.jsx)(s.Fragment,{children:t.filter(e=>e!==n)});return(0,s.jsx)(eC,{...e,summary:n,children:a})}function eB(e){return(0,s.jsx)(O.Z,{...e})}let e_={containsTaskList:"containsTaskList_fw0F"},ew={admonition:"admonition_w9oP",admonitionHeading:"admonitionHeading_aHcJ",admonitionIcon:"admonitionIcon_VWzO",admonitionContent:"admonitionContent_bAd8"};function eL(e){let{type:t,className:n,children:i}=e;return(0,s.jsx)("div",{className:(0,u.Z)(b.k.common.admonition,b.k.common.admonitionType(t),ew.admonition,n),children:i})}function eT(e){let{icon:t,title:n}=e;return(0,s.jsxs)("div",{className:ew.admonitionHeading,children:[(0,s.jsx)("span",{className:ew.admonitionIcon,children:t}),n]})}function eE(e){let{children:t}=e;return t?(0,s.jsx)("div",{className:ew.admonitionContent,children:t}):null}function eI(e){let{type:t,icon:n,title:i,children:a,className:l}=e;return(0,s.jsxs)(eL,{type:t,className:l,children:[i||n?(0,s.jsx)(eT,{title:i,icon:n}):null,(0,s.jsx)(eE,{children:a})]})}let eA={icon:(0,s.jsx)(function(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})},{}),title:(0,s.jsx)(j.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function eM(e){return(0,s.jsx)(eI,{...eA,...e,className:(0,u.Z)("alert alert--secondary",e.className),children:e.children})}let eH={icon:(0,s.jsx)(function(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})},{}),title:(0,s.jsx)(j.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function eS(e){return(0,s.jsx)(eI,{...eH,...e,className:(0,u.Z)("alert alert--success",e.className),children:e.children})}let ez={icon:(0,s.jsx)(function(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})},{}),title:(0,s.jsx)(j.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function eR(e){return(0,s.jsx)(eI,{...ez,...e,className:(0,u.Z)("alert alert--info",e.className),children:e.children})}function eV(e){return(0,s.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}let eU={icon:(0,s.jsx)(eV,{}),title:(0,s.jsx)(j.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})},eD={icon:(0,s.jsx)(function(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})},{}),title:(0,s.jsx)(j.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})},eW={icon:(0,s.jsx)(eV,{}),title:(0,s.jsx)(j.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})},eO={note:eM,tip:eS,info:eR,warning:function(e){return(0,s.jsx)(eI,{...eU,...e,className:(0,u.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,s.jsx)(eI,{...eD,...e,className:(0,u.Z)("alert alert--danger",e.className),children:e.children})},secondary:e=>(0,s.jsx)(eM,{title:"secondary",...e}),important:e=>(0,s.jsx)(eR,{title:"important",...e}),success:e=>(0,s.jsx)(eS,{title:"success",...e}),caution:function(e){return(0,s.jsx)(eI,{...eW,...e,className:(0,u.Z)("alert alert--warning",e.className),children:e.children})}};function eP(e){let t=function(e){let{mdxAdmonitionTitle:t,rest:n}=function(e){let t=i.Children.toArray(e),n=t.find(e=>i.isValidElement(e)&&"mdxAdmonitionTitle"===e.type),a=t.filter(e=>e!==n);return{mdxAdmonitionTitle:n?.props.children,rest:a.length>0?(0,s.jsx)(s.Fragment,{children:a}):null}}(e.children),a=e.title??t;return{...e,...a&&{title:a},children:n}}(e),n=function(e){let t=eO[e];return t||(console.warn(`No admonition component found for admonition type "${e}". Using Info as fallback.`),eO.info)}(t.type);return(0,s.jsx)(n,{...t})}var e$=n("7657");let eF={Head:$.Z,details:eZ,Details:eZ,code:function(e){return void 0!==e.children&&i.Children.toArray(e.children).every(e=>"string"==typeof e&&!e.includes("\n"))?(0,s.jsx)(eg,{...e}):(0,s.jsx)(ej,{...e})},a:function(e){return(0,s.jsx)(g.Z,{...e})},pre:function(e){return(0,s.jsx)(s.Fragment,{children:e.children})},ul:function(e){return(0,s.jsx)("ul",{...e,className:function(e){if(void 0!==e)return(0,u.Z)(e,e?.includes("contains-task-list")&&e_.containsTaskList)}(e.className)})},li:function(e){return(0,ev.Z)().collectAnchor(e.id),(0,s.jsx)("li",{...e})},img:function(e){var t;return(0,s.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,u.Z)(t,"img_oW1T"))})},h1:e=>(0,s.jsx)(eB,{as:"h1",...e}),h2:e=>(0,s.jsx)(eB,{as:"h2",...e}),h3:e=>(0,s.jsx)(eB,{as:"h3",...e}),h4:e=>(0,s.jsx)(eB,{as:"h4",...e}),h5:e=>(0,s.jsx)(eB,{as:"h5",...e}),h6:e=>(0,s.jsx)(eB,{as:"h6",...e}),admonition:eP,mermaid:e$.Z};function eq(e){let{children:t}=e;return(0,s.jsx)(P.Z,{components:eF,children:t})}function eJ(e){let{children:t}=e,n=function(){let{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,s.jsxs)("div",{className:(0,u.Z)(b.k.docs.docMarkdown,"markdown"),children:[n&&(0,s.jsx)("header",{children:(0,s.jsx)(O.Z,{as:"h1",children:n})}),(0,s.jsx)(eq,{children:t})]})}var eK=n("345");function eG(){return(0,s.jsx)(j.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function eX(){return(0,s.jsx)(j.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function eY(){return(0,s.jsx)($.Z,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function eQ(){return(0,s.jsx)(j.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function e0(){return(0,s.jsx)(j.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}function e1(e){let{className:t}=e;return(0,s.jsx)(eP,{type:"caution",title:(0,s.jsx)(eQ,{}),className:(0,u.Z)(t,b.k.common.draftBanner),children:(0,s.jsx)(e0,{})})}function e2(e){let{className:t}=e;return(0,s.jsx)(eP,{type:"caution",title:(0,s.jsx)(eG,{}),className:(0,u.Z)(t,b.k.common.unlistedBanner),children:(0,s.jsx)(eX,{})})}function e5(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(eY,{}),(0,s.jsx)(e2,{...e})]})}function e3(e){let{metadata:t}=e,{unlisted:n,frontMatter:i}=t;return(0,s.jsxs)(s.Fragment,{children:[(n||i.unlisted)&&(0,s.jsx)(e5,{}),i.draft&&(0,s.jsx)(e1,{})]})}let e7={docItemContainer:"docItemContainer_U1cf",docItemCol:"docItemCol_JsI3"};function e4(e){let{children:t}=e,n=function(){let{frontMatter:e,toc:t}=c(),n=(0,m.i)(),i=e.hide_table_of_contents,a=!i&&t.length>0;return{hidden:i,mobile:a?(0,s.jsx)(U,{}):void 0,desktop:a&&("desktop"===n||"ssr"===n)?(0,s.jsx)(W,{}):void 0}}(),{metadata:i}=c();return(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:(0,u.Z)("col",!n.hidden&&e7.docItemCol),children:[(0,s.jsx)(e3,{metadata:i}),(0,s.jsx)(p.Z,{}),(0,s.jsxs)("div",{className:e7.docItemContainer,children:[(0,s.jsxs)("article",{children:[(0,s.jsx)(eK.Z,{}),(0,s.jsx)(x.Z,{}),n.mobile,(0,s.jsx)(eJ,{children:t}),(0,s.jsx)(T,{})]}),(0,s.jsx)(f,{})]})]}),n.desktop&&(0,s.jsx)("div",{className:"col col--3",children:n.desktop})]})}function e6(e){let t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,s.jsx)(o,{content:e.content,children:(0,s.jsxs)(a.FG,{className:t,children:[(0,s.jsx)(d,{}),(0,s.jsx)(e4,{children:(0,s.jsx)(n,{})})]})})}},3391:function(e,t,n){"use strict";n.d(t,{Z:()=>o});var s=n("6773");n("1699");var i=n("2752"),a=n("4461"),l=n("8683");function r(e){let{permalink:t,title:n,subLabel:i,isNext:r}=e;return(0,s.jsxs)(l.Z,{className:(0,a.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,s.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,s.jsx)("div",{className:"pagination-nav__label",children:n})]})}function o(e){let{previous:t,next:n}=e;return(0,s.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,s.jsx)(r,{...t,subLabel:(0,s.jsx)(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,s.jsx)(r,{...n,subLabel:(0,s.jsx)(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},7922:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var s=n(6773);n(1699);var i=n(4461),a=n(2752),l=n(9571),r=n(5960);function o(e){let{className:t}=e,n=(0,r.E)();return n.badge?(0,s.jsx)("span",{className:(0,i.Z)(t,l.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,s.jsx)(a.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},8085:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var s=n(6773);n(1699);var i=n(4461),a=n(93),l=n(8683),r=n(2752),o=n(2232),c=n(9571),d=n(306),u=n(5960);let m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,s.jsx)(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,s.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,s.jsx)(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,s.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){let t=m[e.versionMetadata.banner];return(0,s.jsx)(t,{...e})}function f(e){let{versionLabel:t,to:n,onClick:i}=e;return(0,s.jsx)(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,s.jsx)("b",{children:(0,s.jsx)(l.Z,{to:n,onClick:i,children:(0,s.jsx)(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function p(e){let{className:t,versionMetadata:n}=e,{siteConfig:{title:l}}=(0,a.Z)(),{pluginId:r}=(0,o.gA)({failfast:!0}),{savePreferredVersionName:u}=(0,d.J)(r),{latestDocSuggestion:m,latestVersionSuggestion:p}=(0,o.Jo)(r),x=m??p.docs.find(e=>e.id===p.mainDocId);return(0,s.jsxs)("div",{className:(0,i.Z)(t,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,s.jsx)("div",{children:(0,s.jsx)(h,{siteTitle:l,versionMetadata:n})}),(0,s.jsx)("div",{className:"margin-top--md",children:(0,s.jsx)(f,{versionLabel:p.label,to:x.path,onClick:()=>u(p.name)})})]})}function x(e){let{className:t}=e,n=(0,u.E)();return n.banner?(0,s.jsx)(p,{className:t,versionMetadata:n}):null}},6070:function(e,t,n){"use strict";n.d(t,{Z:function(){return r},a:function(){return l}});var s=n(1699);let i={},a=s.createContext(i);function l(e){let t=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);