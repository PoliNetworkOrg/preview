"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["487"],{7791:function(e,r,n){n.r(r),n.d(r,{default:()=>p,frontMatter:()=>s,metadata:()=>o,assets:()=>c,toc:()=>d,contentTitle:()=>a});var o=JSON.parse('{"id":"app/developer/backend/runOnServer","title":"Prima installazione su server","description":"Inserire password a scelta","source":"@site/docs/app/developer/backend/runOnServer.md","sourceDirName":"app/developer/backend","slug":"/app/developer/backend/runOnServer","permalink":"/preview/PoliNetworkOrg/docs/pr/22/docs/app/developer/backend/runOnServer","draft":false,"unlisted":false,"editUrl":"https://github.com/polinetworkorg/docs/tree/main/docs/app/developer/backend/runOnServer.md","tags":[],"version":"current","frontMatter":{},"sidebar":"polifemo","previous":{"title":"TabelleCalendar","permalink":"/preview/PoliNetworkOrg/docs/pr/22/docs/app/developer/backend/DBPolifemo/TabelleCalendar"},"next":{"title":"ToDo Backend","permalink":"/preview/PoliNetworkOrg/docs/pr/22/docs/app/developer/backend/todo_backend"}}'),t=n("6773"),i=n("6070");let s={},a="Prima installazione su server",c={},d=[];function l(e){let r={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"prima-installazione-su-server",children:"Prima installazione su server"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"	sudo apt install dotnet jq unzip certbot\n	mkdir PoliFemoBackend && cd PoliFemoBackend\n	wget https://raw.githubusercontent.com/PoliNetworkOrg/PoliFemoBackend/main/run.sh\n	sudo chmod +x run.sh\n	sudo certbot certonly --standalone -d api.polinetwork.org\n	mkdir conf.d && cd conf.d\n	mkdir https\n	sudo openssl pkcs12 -export -out $HOME/PoliFemoBackend/conf.d/https/dev_cert.pfx -inkey /etc/letsencrypt/live/api.polinetwork.org/privkey.pem -in /etc/letsencrypt/live/api.polinetwork.org/cert.pem -certfile /etc/letsencrypt/live/api.polinetwork.org/chain.pem\n"})}),"\n",(0,t.jsx)(r.p,{children:"Inserire password a scelta"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"	cd ..\n	sudo ./run.sh\n"})}),"\n",(0,t.jsx)(r.p,{children:"Poi fare un commit senza uscire dalla sessione SSH, se si riavvia correttamente si pu\xf2 uscire."})]})}function p(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},6070:function(e,r,n){n.d(r,{Z:function(){return a},a:function(){return s}});var o=n(1699);let t={},i=o.createContext(t);function s(e){let r=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);