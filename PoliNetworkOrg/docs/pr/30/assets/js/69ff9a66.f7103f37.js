"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["688"],{2092:function(e,r,t){t.r(r),t.d(r,{default:()=>h,frontMatter:()=>l,metadata:()=>n,assets:()=>c,toc:()=>d,contentTitle:()=>a});var n=JSON.parse('{"id":"infrastructure/getting-started/basic-knowledge/index","title":"Basic Knowledge","description":"Overview","source":"@site/docs/infrastructure/02-getting-started/basic-knowledge/index.md","sourceDirName":"infrastructure/02-getting-started/basic-knowledge","slug":"/infrastructure/getting-started/basic-knowledge/","permalink":"/preview/PoliNetworkOrg/docs/pr/30/docs/infrastructure/getting-started/basic-knowledge/","draft":false,"unlisted":false,"editUrl":"https://github.com/polinetworkorg/docs/tree/main/docs/infrastructure/02-getting-started/basic-knowledge/index.md","tags":[],"version":"current","frontMatter":{"title":"Basic Knowledge"},"sidebar":"infra","previous":{"title":"Setup","permalink":"/preview/PoliNetworkOrg/docs/pr/30/docs/infrastructure/getting-started/setup"},"next":{"title":"Terraform","permalink":"/preview/PoliNetworkOrg/docs/pr/30/docs/infrastructure/getting-started/basic-knowledge/Terraform"}}'),s=t("6773"),i=t("6070"),o=t("2957");let l={title:"Basic Knowledge"},a=void 0,c={},d=[{value:"Overview",id:"overview",level:2},{value:"<strong>Terraform: Definition and Purpose</strong>",id:"terraform-definition-and-purpose",level:3},{value:"<strong>PoliNetwork-CD: Definition and Purpose</strong>",id:"polinetwork-cd-definition-and-purpose",level:3},{value:"<strong>Key Difference: Infrastructure vs. Deployment</strong>",id:"key-difference-infrastructure-vs-deployment",level:3},{value:"References",id:"references",level:2},{value:"<strong>Links to Repositories</strong>",id:"links-to-repositories",level:3},{value:"<strong>Additional Resources</strong>",id:"additional-resources",level:3}];function u(e){let r={a:"a",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(r.p,{children:"This section explains how we organized our infrastructure."}),"\n",(0,s.jsx)(r.p,{children:"Everything regarding the deployment of apps and services is divided into two repositories:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"https://github.com/polinetworkorg/terraform",children:"polinetworkorg/terraform"})," - Contains the Terraform code to deploy the infrastructure. This defines the resources that are created on Azure, from specific things like KeyVaults, Disks, and VMs, to the Kubernetes cluster itself."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"https://github.com/polinetworkorg/polinetwork-cd",children:"polinetworkorg/polinetwork-cd"})," - Our GitOps repo, contains the manifests that define deployments specific for each app or service. This repository is connected to the ArgoCD instance running on the Kubernetes cluster."]}),"\n"]}),"\n",(0,s.jsx)(r.mermaid,{value:'flowchart TD\n  subgraph Github\n    tf([**terraform**])\n    cd([**polinetwork-cd**])\n  end\n  subgraph Azure\n    vm[VMs and other resources]\n    subgraph k8s[K8S cluster]\n      argocd[ArgoCD]\n      app@{ shape: processes, label: "Apps / Services" }\n    end\n  end\n\n  tf -.-> vm\n  tf -.-> k8s\n  vm <--\x3e k8s\n  cd <-.-> argocd --\x3e app'}),"\n",(0,s.jsx)(r.h3,{id:"terraform-definition-and-purpose",children:(0,s.jsx)(r.strong,{children:"Terraform: Definition and Purpose"})}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.strong,{children:"Terraform"})," repository is responsible for managing and provisioning cloud infrastructure. In simple terms, it defines and creates the resources needed for the infrastructure, such as:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Networks and subnets"})," (Virtual Networks, Subnets, Security Groups)"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Virtual machines"})," (VMs, Containers, Kubernetes Clusters)"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Databases"})," (MariaDB, PostgreSQL)"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Storage"})," (Blob Storage, Virtual Disks, File Shares)"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Security services"})," (Identity and Access Management, Firewalls)"]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["The code in ",(0,s.jsx)(r.strong,{children:"Terraform"})," describes these resources declaratively: it defines the desired state, and Terraform applies the necessary changes to reach that state. This repository is primarily used to ",(0,s.jsx)(r.strong,{children:"create and modify the cloud infrastructure"})," where applications will run."]}),"\n",(0,s.jsx)(r.h3,{id:"polinetwork-cd-definition-and-purpose",children:(0,s.jsx)(r.strong,{children:"PoliNetwork-CD: Definition and Purpose"})}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.strong,{children:"PoliNetwork-CD"})," (Continuous Deployment) repository, on the other hand, is dedicated to managing and updating applications once the infrastructure has been created. Specifically, it uses ",(0,s.jsx)(r.strong,{children:"GitOps"})," tools (in our case, ",(0,s.jsx)(r.strong,{children:"ArgoCD"}),", but ",(0,s.jsx)(r.strong,{children:"Flux"})," is also an opinionated option) to:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Define application deployments"})," in Kubernetes (or Kustomize, Helm, etc.)"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Automatically update applications"})," when code changes"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Manage application configurations"})," (e.g., configuration files, environment variables)"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Monitor the state of applications"})," and ensure they remain in sync with the repository"]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["While Terraform is responsible for infrastructure, ",(0,s.jsx)(r.strong,{children:"PoliNetwork-CD"})," focuses on ",(0,s.jsx)(r.strong,{children:"managing the lifecycle of applications"})," running on that infrastructure, ensuring that code changes are applied automatically and securely."]}),"\n",(0,s.jsx)(r.h3,{id:"key-difference-infrastructure-vs-deployment",children:(0,s.jsx)(r.strong,{children:"Key Difference: Infrastructure vs. Deployment"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Repository"}),(0,s.jsx)(r.th,{children:"Main Purpose"}),(0,s.jsx)(r.th,{children:"Example of Managed Resources"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Terraform"})}),(0,s.jsx)(r.td,{children:"Creates and manages cloud infrastructure"}),(0,s.jsx)(r.td,{children:"Networks, VMs, databases, storage, security"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"PoliNetwork-CD"})}),(0,s.jsx)(r.td,{children:"Automates application deployment and updates"}),(0,s.jsx)(r.td,{children:"Deployments, configurations, GitOps updates"})]})]})]}),"\n",(0,s.jsxs)(r.p,{children:["In summary, ",(0,s.jsx)(r.strong,{children:"Terraform builds the foundation on which applications run"}),", while ",(0,s.jsx)(r.strong,{children:"PoliNetwork-CD manages the deployment and continuous updating of applications"}),". Both repositories work together to ensure a scalable and efficient cloud infrastructure."]}),"\n",(0,s.jsx)(r.h2,{id:"references",children:"References"}),"\n",(0,s.jsx)(r.h3,{id:"links-to-repositories",children:(0,s.jsx)(r.strong,{children:"Links to Repositories"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://github.com/polinetworkorg/terraform",children:"Terraform Repository"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://github.com/polinetworkorg/polinetwork-cd",children:"PoliNetwork-CD Repository"})}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"additional-resources",children:(0,s.jsx)(r.strong,{children:"Additional Resources"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://kubernetes.io/docs/",children:"Kubernetes Documentation"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://www.terraform.io/docs/",children:"Terraform Documentation"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://argo-cd.readthedocs.io/en/stable/",children:"ArgoCD Documentation"})}),"\n"]}),"\n",(0,s.jsx)(o.Z,{})]})}function h(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},2957:function(e,r,t){t.d(r,{Z:()=>j});var n=t("6773");t("1699");var s=t("4461"),i=t("9085"),o=t("2836"),l=t("4795"),a=t("81"),c=t("8106"),d=t("4625");let u={cardContainer:"cardContainer_SHSZ",cardTitle:"cardTitle_Btbp",cardDescription:"cardDescription_fk0k"};function h(e){let{href:r,children:t}=e;return(0,n.jsx)(o.Z,{href:r,className:(0,s.Z)("card padding--lg",u.cardContainer),children:t})}function p(e){let{href:r,icon:t,title:i,description:o}=e;return(0,n.jsxs)(h,{href:r,children:[(0,n.jsxs)(d.Z,{as:"h2",className:(0,s.Z)("text--truncate",u.cardTitle),title:i,children:[t," ",i]}),o&&(0,n.jsx)("p",{className:(0,s.Z)("text--truncate",u.cardDescription),title:o,children:o})]})}function f(e){let{item:r}=e,t=(0,i.LM)(r),s=function(){let{selectMessage:e}=(0,l.c)();return r=>e(r,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r}))}();return t?(0,n.jsx)(p,{href:t,icon:"\uD83D\uDDC3\uFE0F",title:r.label,description:r.description??s(r.items.length)}):null}function g(e){let{item:r}=e,t=(0,a.Z)(r.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",s=(0,i.xz)(r.docId??void 0);return(0,n.jsx)(p,{href:r.href,icon:t,title:r.label,description:r.description??s?.description})}function m(e){let{item:r}=e;switch(r.type){case"link":return(0,n.jsx)(g,{item:r});case"category":return(0,n.jsx)(f,{item:r});default:throw Error(`unknown item type ${JSON.stringify(r)}`)}}function x(e){let{className:r}=e,t=(0,i.jA)();return(0,n.jsx)(j,{items:t.items,className:r})}function j(e){let{items:r,className:t}=e;if(!r)return(0,n.jsx)(x,{...e});let o=(0,i.MN)(r);return(0,n.jsx)("section",{className:(0,s.Z)("row",t),children:o.map((e,r)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(m,{item:e})},r))})}},4795:function(e,r,t){t.d(r,{c:function(){return a}});var n=t(1699),s=t(6157);let i=["zero","one","two","few","many","other"];function o(e){return i.filter(r=>e.includes(r))}let l={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function a(){let e=function(){let{i18n:{currentLocale:e}}=(0,s.Z)();return(0,n.useMemo)(()=>{try{return function(e){let r=new Intl.PluralRules(e);return{locale:e,pluralForms:o(r.resolvedOptions().pluralCategories),select:e=>r.select(e)}}(e)}catch(r){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${r.message}
`),l}},[e])}();return{selectMessage:(r,t)=>(function(e,r,t){let n=e.split("|");if(1===n.length)return n[0];n.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);let s=t.select(r);return n[Math.min(t.pluralForms.indexOf(s),n.length-1)]})(t,r,e)}}},6070:function(e,r,t){t.d(r,{Z:function(){return l},a:function(){return o}});var n=t(1699);let s={},i=n.createContext(s);function o(e){let r=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);