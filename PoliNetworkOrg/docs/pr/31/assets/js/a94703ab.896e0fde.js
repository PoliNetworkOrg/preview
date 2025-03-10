"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["9914"],{8590:function(e,t,n){n.r(t),n.d(t,{default:()=>ei});var a=n("6773"),i=n("1699"),o=n("4461"),r=n("8675"),l=n("9571"),s=n("9085"),d=n("7453"),c=n("8106"),u=n("5552"),m=n("6281");let b={backToTopButton:"backToTopButton_MNT3",backToTopButtonShow:"backToTopButtonShow_g9sa"};function h(){let{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e,[n,a]=(0,i.useState)(!1),o=(0,i.useRef)(!1),{startScroll:r,cancelScroll:l}=(0,u.Ct)();return(0,u.RF)((e,n)=>{let{scrollY:i}=e,r=n?.scrollY;r&&(o.current?o.current=!1:i>=r?(l(),a(!1)):i<t?a(!1):i+window.innerHeight<document.documentElement.scrollHeight&&a(!0))}),(0,m.S)(e=>{e.location.hash&&(o.current=!0,a(!1))}),{shown:n,scrollToTop:()=>r(0)}}({threshold:300});return(0,a.jsx)("button",{"aria-label":(0,c.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",l.k.common.backToTopButton,b.backToTopButton,e&&b.backToTopButtonShow),type:"button",onClick:t})}var p=n("8330"),x=n("3218"),f=n("5059"),j=n("9393"),_=n("1572");function k(e){return(0,a.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,a.jsxs)("g",{fill:"#7a7a7a",children:[(0,a.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,a.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}function g(e){let{onClick:t}=e;return(0,a.jsx)("button",{type:"button",title:(0,c.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline","collapseSidebarButton_FKS3"),onClick:t,children:(0,a.jsx)(k,{className:"collapseSidebarButtonIcon_uWeY"})})}var v=n("1186"),C=n("9621");let I=Symbol("EmptyContext"),S=i.createContext(I);function N(e){let{children:t}=e,[n,o]=(0,i.useState)(null),r=(0,i.useMemo)(()=>({expandedItem:n,setExpandedItem:o}),[n]);return(0,a.jsx)(S.Provider,{value:r,children:t})}var T=n("8858"),Z=n("4361"),L=n("2836"),y=n("3185");function A(e){let{collapsed:t,categoryLabel:n,onClick:i}=e;return(0,a.jsx)("button",{"aria-label":t?(0,c.I)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,c.I)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),"aria-expanded":!t,type:"button",className:"clean-btn menu__caret",onClick:i})}function H(e){let{item:t,onItemClick:n,activePath:r,level:d,index:c,...u}=e,{items:m,label:b,collapsible:h,className:p,href:x}=t,{docs:{sidebar:{autoCollapseCategories:f}}}=(0,j.L)(),_=function(e){let t=(0,y.Z)();return(0,i.useMemo)(()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,s.LM)(e):void 0,[e,t])}(t),k=(0,s._F)(t,r),g=(0,Z.Mg)(x,r),{collapsed:v,setCollapsed:N}=(0,T.u)({initialState:()=>!!h&&!k&&t.collapsed}),{expandedItem:H,setExpandedItem:w}=function(){let e=(0,i.useContext)(S);if(e===I)throw new C.i6("DocSidebarItemsExpandedStateProvider");return e}(),B=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!v;w(e?null:c),N(e)};return!function(e){let{isActive:t,collapsed:n,updateCollapsed:a}=e,o=(0,C.D9)(t);(0,i.useEffect)(()=>{t&&!o&&n&&a(!1)},[t,o,n,a])}({isActive:k,collapsed:v,updateCollapsed:B}),(0,i.useEffect)(()=>{h&&null!=H&&H!==c&&f&&N(!0)},[h,H,c,N,f]),(0,a.jsxs)("li",{className:(0,o.Z)(l.k.docs.docSidebarItemCategory,l.k.docs.docSidebarItemCategoryLevel(d),"menu__list-item",{"menu__list-item--collapsed":v},p),children:[(0,a.jsxs)("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g}),children:[(0,a.jsx)(L.Z,{className:(0,o.Z)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!x&&h,"menu__link--active":k}),onClick:h?e=>{n?.(t),x?B(!1):(e.preventDefault(),B())}:()=>{n?.(t)},"aria-current":g?"page":void 0,role:h&&!x?"button":void 0,"aria-expanded":h&&!x?!v:void 0,href:h?_??"#":_,...u,children:b}),x&&h&&(0,a.jsx)(A,{collapsed:v,categoryLabel:b,onClick:e=>{e.preventDefault(),B()}})]}),(0,a.jsx)(T.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:v,children:(0,a.jsx)(D,{items:m,tabIndex:v?-1:0,onItemClick:n,activePath:r,level:d+1})})]})}var w=n("81"),B=n("6278");let E={menuExternalLink:"menuExternalLink_KRQn"};function M(e){let{item:t,onItemClick:n,activePath:i,level:r,index:d,...c}=e,{href:u,label:m,className:b,autoAddBaseUrl:h}=t,p=(0,s._F)(t,i),x=(0,w.Z)(u);return(0,a.jsx)("li",{className:(0,o.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(r),"menu__list-item",b),children:(0,a.jsxs)(L.Z,{className:(0,o.Z)("menu__link",!x&&E.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:h,"aria-current":p?"page":void 0,to:u,...x&&{onClick:n?()=>n(t):void 0},...c,children:[m,!x&&(0,a.jsx)(B.Z,{})]})},m)}let W={menuHtmlItem:"menuHtmlItem_gh19"};function F(e){let{item:t,level:n,index:i}=e,{value:r,defaultStyle:s,className:d}=t;return(0,a.jsx)("li",{className:(0,o.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(n),s&&[W.menuHtmlItem,"menu__list-item"],d),dangerouslySetInnerHTML:{__html:r}},i)}function R(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,a.jsx)(H,{item:t,...n});case"html":return(0,a.jsx)(F,{item:t,...n});default:return(0,a.jsx)(M,{item:t,...n})}}let D=(0,i.memo)(function(e){let{items:t,...n}=e,i=(0,s.f)(t,n.activePath);return(0,a.jsx)(N,{children:i.map((e,t)=>(0,a.jsx)(R,{item:e,index:t,...n},t))})}),P={menu:"menu_y4Cd",menuWithAnnouncementBar:"menuWithAnnouncementBar_EZfx"};function V(e){let{path:t,sidebar:n,className:r}=e,s=function(){let{isActive:e}=(0,v.n)(),[t,n]=(0,i.useState)(e);return(0,u.RF)(t=>{let{scrollY:a}=t;e&&n(0===a)},[e]),e&&t}();return(0,a.jsx)("nav",{"aria-label":(0,c.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.Z)("menu thin-scrollbar",P.menu,s&&P.menuWithAnnouncementBar,r),children:(0,a.jsx)("ul",{className:(0,o.Z)(l.k.docs.docSidebarMenu,"menu__list"),children:(0,a.jsx)(D,{items:n,activePath:t,level:1})})})}let U={sidebar:"sidebar_I2KC",sidebarWithHideableNavbar:"sidebarWithHideableNavbar_pxti",sidebarHidden:"sidebarHidden_dG8I",sidebarLogo:"sidebarLogo_tyao"},z=i.memo(function(e){let{path:t,sidebar:n,onCollapse:i,isHidden:r}=e,{navbar:{hideOnScroll:l},docs:{sidebar:{hideable:s}}}=(0,j.L)();return(0,a.jsxs)("div",{className:(0,o.Z)(U.sidebar,l&&U.sidebarWithHideableNavbar,r&&U.sidebarHidden),children:[l&&(0,a.jsx)(_.Z,{tabIndex:-1,className:U.sidebarLogo}),(0,a.jsx)(V,{path:t,sidebar:n}),s&&(0,a.jsx)(g,{onClick:i})]})});var K=n("5313"),Q=n("4443");let Y=e=>{let{sidebar:t,path:n}=e,i=(0,Q.e)();return(0,a.jsx)("ul",{className:(0,o.Z)(l.k.docs.docSidebarMenu,"menu__list"),children:(0,a.jsx)(D,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&i.toggle(),"link"===e.type&&i.toggle()},level:1})})},G=i.memo(function(e){return(0,a.jsx)(K.Zo,{component:Y,props:e})});function J(e){let t=(0,f.i)();return(0,a.jsxs)(a.Fragment,{children:[("desktop"===t||"ssr"===t)&&(0,a.jsx)(z,{...e}),"mobile"===t&&(0,a.jsx)(G,{...e})]})}function q(e){let{toggleSidebar:t}=e;return(0,a.jsx)("div",{className:"expandButton_JuP7",title:(0,c.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,a.jsx)(k,{className:"expandButtonIcon_TViI"})})}let O={docSidebarContainer:"docSidebarContainer_H4WQ",docSidebarContainerHidden:"docSidebarContainerHidden_r_Ze",sidebarViewport:"sidebarViewport_eU3U"};function X(e){let{children:t}=e,n=(0,d.V)();return(0,a.jsx)(i.Fragment,{children:t},n?.name??"noSidebar")}function $(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:r}=e,{pathname:s}=(0,x.TH)(),[d,c]=(0,i.useState)(!1),u=(0,i.useCallback)(()=>{d&&c(!1),!d&&(0,p.n)()&&c(!0),r(e=>!e)},[r,d]);return(0,a.jsx)("aside",{className:(0,o.Z)(l.k.docs.docSidebarContainer,O.docSidebarContainer,n&&O.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(O.docSidebarContainer)&&n&&c(!0)},children:(0,a.jsx)(X,{children:(0,a.jsxs)("div",{className:(0,o.Z)(O.sidebarViewport,d&&O.sidebarViewportHidden),children:[(0,a.jsx)(J,{sidebar:t,path:s,onCollapse:u,isHidden:d}),d&&(0,a.jsx)(q,{toggleSidebar:u})]})})})}let ee={docMainContainer:"docMainContainer_QuaD",docMainContainerEnhanced:"docMainContainerEnhanced_k0fu",docItemWrapperEnhanced:"docItemWrapperEnhanced_I2TL"};function et(e){let{hiddenSidebarContainer:t,children:n}=e,i=(0,d.V)();return(0,a.jsx)("main",{className:(0,o.Z)(ee.docMainContainer,(t||!i)&&ee.docMainContainerEnhanced),children:(0,a.jsx)("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",ee.docItemWrapper,t&&ee.docItemWrapperEnhanced),children:n})})}function en(e){let{children:t}=e,n=(0,d.V)(),[o,r]=(0,i.useState)(!1);return(0,a.jsxs)("div",{className:"docsWrapper_vlky",children:[(0,a.jsx)(h,{}),(0,a.jsxs)("div",{className:"docRoot_HErd",children:[n&&(0,a.jsx)($,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:r}),(0,a.jsx)(et,{hiddenSidebarContainer:o,children:t})]})]})}var ea=n("7180");function ei(e){let t=(0,s.SN)(e);if(!t)return(0,a.jsx)(ea.Z,{});let{docElement:n,sidebarName:i,sidebarItems:c}=t;return(0,a.jsx)(r.FG,{className:(0,o.Z)(l.k.page.docsDocPage),children:(0,a.jsx)(d.b,{name:i,items:c,children:(0,a.jsx)(en,{children:n})})})}},7180:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(6773);n(1699);var i=n(4461),o=n(8106),r=n(4625);function l(e){let{className:t}=e;return(0,a.jsx)("main",{className:(0,i.Z)("container margin-vert--xl",t),children:(0,a.jsx)("div",{className:"row",children:(0,a.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,a.jsx)(r.Z,{as:"h1",className:"hero__title",children:(0,a.jsx)(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,a.jsx)("p",{children:(0,a.jsx)(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,a.jsx)("p",{children:(0,a.jsx)(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);