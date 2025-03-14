"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["8442"],{152:function(e,t,r){r.r(t),r.d(t,{default:()=>l,frontMatter:()=>s,metadata:()=>n,assets:()=>u,toc:()=>c,contentTitle:()=>a});var n=JSON.parse('{"id":"infrastructure/Introduction","title":"Intro","description":"Let\'s discover PoliNetwork\'s Infrastructure in less than 5 minutes.","source":"@site/docs/infrastructure/01-Introduction.md","sourceDirName":"infrastructure","slug":"/infrastructure/Introduction","permalink":"/preview/PoliNetworkOrg/docs/pr/34/docs/infrastructure/Introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/polinetworkorg/docs/tree/main/docs/infrastructure/01-Introduction.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"infra","next":{"title":"Setup","permalink":"/preview/PoliNetworkOrg/docs/pr/34/docs/infrastructure/getting-started/setup"}}'),i=r("6773"),o=r("6070");let s={sidebar_position:1},a="Intro",u={},c=[{value:"Getting Started",id:"getting-started",level:2},{value:"Where",id:"where",level:3},{value:"What",id:"what",level:3},{value:"Why",id:"why",level:3},{value:"About this documentation",id:"about-this-documentation",level:2}];function d(e){let t={a:"a",admonition:"admonition",br:"br",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"intro",children:"Intro"})}),"\n",(0,i.jsxs)(t.p,{children:["Let's discover ",(0,i.jsx)(t.strong,{children:"PoliNetwork's Infrastructure in less than 5 minutes"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsx)(t.h3,{id:"where",children:"Where"}),"\n",(0,i.jsxs)(t.p,{children:["Our infrastructure is deployed on Azure West Europe (Amsterdam).\nThe description is found ",(0,i.jsx)(t.a,{href:"https://github.com/polinetworkorg/terraform",children:"here"}),", described in Terraform (IaC)."]}),"\n",(0,i.jsx)(t.h3,{id:"what",children:"What"}),"\n",(0,i.jsx)(t.p,{children:"The core is a AKS Cluster (Kubernetes), in combination with various other services (KeyVault, Disks, Azure Active Directory, ...)"}),"\n",(0,i.jsx)(t.h3,{id:"why",children:"Why"}),"\n",(0,i.jsx)(t.p,{children:"Why not a simple VM?\nAKS gives us the flexibility of a 10s pod deployment, reliability (with ArgoCD ensuring all pods are up and running all the time) and allows us to be more precise and clean in our infrastructure, with better monitoring and allocated resources for each application depending on the importance."}),"\n",(0,i.jsx)(t.h2,{id:"about-this-documentation",children:"About this documentation"}),"\n",(0,i.jsx)(t.admonition,{type:"important",children:(0,i.jsxs)(t.p,{children:["Most of the docs explain procedures with the Azure CLI and the Kubernetes CLI.",(0,i.jsx)(t.br,{}),"\n","Make sure to ",(0,i.jsx)(t.a,{href:"./getting-started/setup#azure-cli--kubectl",children:"install and configure them"})," to follow along.",(0,i.jsx)(t.br,{}),"\n","Alternatively, you can see the ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/?product=popular",children:"official Azure documentation"})," for how to use the Azure portal."]})}),"\n",(0,i.jsxs)(t.p,{children:["The best place to start is going through the ",(0,i.jsx)(t.a,{href:"./getting-started/setup",children:"Getting Started"})," section to get a high level overview of how things are organized.",(0,i.jsx)(t.br,{}),"\n","If you're looking for a guide on how to achieve a specific outcome, you can look in the ",(0,i.jsx)(t.a,{href:"./Guides/add-a-new-secret",children:"Guides"}),"."]})]})}function l(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6070:function(e,t,r){r.d(t,{Z:function(){return a},a:function(){return s}});var n=r(1699);let i={},o=n.createContext(i);function s(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);