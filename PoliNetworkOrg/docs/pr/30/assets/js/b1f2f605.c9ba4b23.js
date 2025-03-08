"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["2881"],{2854:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>s,metadata:()=>r,assets:()=>l,toc:()=>d,contentTitle:()=>c});var r=JSON.parse('{"id":"infrastructure/getting-started/pipelines/cd","title":"cd","description":"Continuous Delivery","source":"@site/docs/infrastructure/02-getting-started/pipelines/cd.md","sourceDirName":"infrastructure/02-getting-started/pipelines","slug":"/infrastructure/getting-started/pipelines/cd","permalink":"/preview/PoliNetworkOrg/docs/pr/30/docs/infrastructure/getting-started/pipelines/cd","draft":false,"unlisted":false,"editUrl":"https://github.com/polinetworkorg/docs/tree/main/docs/infrastructure/02-getting-started/pipelines/cd.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"infra","previous":{"title":"CI","permalink":"/preview/PoliNetworkOrg/docs/pr/30/docs/infrastructure/getting-started/pipelines/ci"},"next":{"title":"K8s Basics","permalink":"/preview/PoliNetworkOrg/docs/pr/30/docs/category/k8s-basics"}}'),i=n("6773"),o=n("6070");let s={sidebar_position:2},c=void 0,l={},d=[{value:"Continuous Delivery",id:"continuous-delivery",level:2},{value:"Continuous Deployment",id:"continuous-deployment",level:2}];function a(e){let t={a:"a",h2:"h2",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"continuous-delivery",children:"Continuous Delivery"}),"\n",(0,i.jsxs)(t.p,{children:["Following the ",(0,i.jsx)(t.a,{href:"https://github.com/PoliNetworkOrg/PoliNetworkBot_CSharp/blob/master/.github/workflows/ci-cd.yaml",children:"Bot Pipeline"})," we deploy the built Docker Image in our ",(0,i.jsx)(t.a,{href:"https://hub.docker.com/u/polinetwork",children:"Docker Hub registry"}),".\nWe currently have 2 environments, dev and prod on the dev and main branch respectively.\nFinally we update ",(0,i.jsx)(t.a,{href:"https://github.com/polinetworkorg/polinetwork-cd",children:"these"})," k8s (Kubernetes) deployment files."]}),"\n",(0,i.jsx)(t.h2,{id:"continuous-deployment",children:"Continuous Deployment"}),"\n",(0,i.jsxs)(t.p,{children:["We rely on ArgoCD to deploy our pods following the manifest present in the polinetwork-cd repository, as specified ",(0,i.jsx)(t.a,{href:"https://github.com/PoliNetworkOrg/terraform/blob/main/argocd-applications.yaml",children:"here in the terraform deployment code"}),".\nArgoCD works by ensuring 0 downtime (by monitoring continuously all the deployed pods) and checking for changes on the polinetwork-cd repository (which is updated by the various pipeline whenever a change is pushed to the registry) ensuring fast deployment of fixes and changes in dev and prod environments."]})]})}function u(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},6070:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return s}});var r=n(1699);let i={},o=r.createContext(i);function s(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);