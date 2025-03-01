"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["989"],{6599:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>i,metadata:()=>r,assets:()=>a,toc:()=>l,contentTitle:()=>c});var r=JSON.parse('{"id":"infrastructure/Tutorials/setup","title":"Setup","description":"If it\'s your first time accessing the infrastructure, you\'ll need to setup the tools and configure them.","source":"@site/docs/infrastructure/02-Tutorials/setup.md","sourceDirName":"infrastructure/02-Tutorials","slug":"/infrastructure/Tutorials/setup","permalink":"/preview/PoliNetworkOrg/docs/branch/main/docs/infrastructure/Tutorials/setup","draft":false,"unlisted":false,"editUrl":"https://github.com/polinetworkorg/docs/tree/main/docs/infrastructure/02-Tutorials/setup.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"infra","previous":{"title":"Intro","permalink":"/preview/PoliNetworkOrg/docs/branch/main/docs/infrastructure/Introduction"},"next":{"title":"K8s Basics","permalink":"/preview/PoliNetworkOrg/docs/branch/main/docs/category/k8s-basics"}}'),s=t("6773"),o=t("6070");let i={sidebar_position:2},c="Setup",a={},l=[{value:"Azure CLI &amp; Kubectl",id:"azure-cli--kubectl",level:2},{value:"Port Forwarding",id:"port-forwarding",level:2}];function u(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"setup",children:"Setup"})}),"\n",(0,s.jsx)(n.p,{children:"If it's your first time accessing the infrastructure, you'll need to setup the tools and configure them."}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"This tutorial assumes your account has the right permissions to access the infrastructure. If not, please contact the team."})}),"\n",(0,s.jsx)(n.h2,{id:"azure-cli--kubectl",children:"Azure CLI & Kubectl"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Download and install Kubectl ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Download and install the Azure CLI ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"az login"})," to login."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"sudo az aks install-cli"})," to install kubectl"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"az aks get-credentials --resource-group rg-polinetwork --name aks-polinetwork"})," to configure Kubectl."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"kubelogin convert-kubeconfig"})," if you have installed Kubectl > v1.26"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["To check if everything is working, run ",(0,s.jsx)(n.code,{children:"kubectl get pods -n <namespace>"}),". You should see a list of pods."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The possible values of ",(0,s.jsx)(n.code,{children:"<namespace>"})," may vary depending on the project you're working on. If you're not sure, ask the team."]})}),"\n",(0,s.jsxs)(n.admonition,{type:"danger",children:[(0,s.jsxs)(n.p,{children:["Starting from Kubectl v1.26, the Azure auth plugin has been removed. If you're using a new version, you'll need to install Kubectl and Kubelogin. Then run ",(0,s.jsx)(n.code,{children:"kubectl get pods -n <namespace>"})," again."]}),(0,s.jsxs)(n.p,{children:["For now as there is no install instruction on the kubelogin repo for linux, download the latest release for your computer architecture from ",(0,s.jsx)(n.a,{href:"https://github.com/Azure/kubelogin/releases",children:"here"}),", unzip it and run it with ",(0,s.jsx)(n.code,{children:"./kubelogin convert-kubeconfig"}),". Follow the indicated steps"]})]}),"\n",(0,s.jsx)(n.h2,{id:"port-forwarding",children:"Port Forwarding"}),"\n",(0,s.jsx)(n.p,{children:"To access services running on the cluster (such as the MariaDB database), you'll need to forward the correct ports. To do so, we need the correct pod name."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"kubectl get pods -n <namespace>"})," to get the pod name. The pod name is listed under the ",(0,s.jsx)(n.code,{children:"NAME"})," column."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"kubectl port-forward <pod-name> <local-port>:<remote-port> -n <namespace>"}),(0,s.jsx)(n.br,{}),"\n","For example, if you want to access the MariaDB database, you'll need to run"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"kubectl port-forward <pod-name> 3306:3306 -n <namespace>\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"If you're using the MariaDB database, you can use the following command to get the pod name and forward the port in one go:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'PODNAME=$(kubectl get pods --no-headers -n mariadb -o custom-columns=":metadata.name" | tail -1); kubectl port-forward -n mariadb $PODNAME 3306:3306\n'})}),(0,s.jsx)(n.p,{children:"You can use the same template to connect to other services."})]})]})}function d(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},6070:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var r=t(1699);let s={},o=r.createContext(s);function i(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);