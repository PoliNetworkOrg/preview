"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["4999"],{2292:function(e,r,n){n.r(r),n.d(r,{default:()=>l,frontMatter:()=>c,metadata:()=>t,assets:()=>a,toc:()=>d,contentTitle:()=>s});var t=JSON.parse('{"id":"archive/app/developer/backend/runOnServer","title":"Prima installazione su server","description":"Inserire password a scelta","source":"@site/docs/archive/app/developer/backend/runOnServer.md","sourceDirName":"archive/app/developer/backend","slug":"/archive/app/developer/backend/runOnServer","permalink":"/preview/PoliNetworkOrg/docs/pr/35/docs/archive/app/developer/backend/runOnServer","draft":false,"unlisted":false,"editUrl":"https://github.com/polinetworkorg/docs/tree/main/docs/archive/app/developer/backend/runOnServer.md","tags":[],"version":"current","frontMatter":{},"sidebar":"archive","previous":{"title":"inserisci.py","permalink":"/preview/PoliNetworkOrg/docs/pr/35/docs/archive/app/developer/backend/DBPolifemo/old/inserisci.py"},"next":{"title":"ToDo Backend","permalink":"/preview/PoliNetworkOrg/docs/pr/35/docs/archive/app/developer/backend/todo_backend"}}'),o=n("6773"),i=n("6070");let c={},s="Prima installazione su server",a={},d=[];function p(e){let r={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"prima-installazione-su-server",children:"Prima installazione su server"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"	sudo apt install dotnet jq unzip certbot\n	mkdir PoliFemoBackend && cd PoliFemoBackend\n	wget https://raw.githubusercontent.com/PoliNetworkOrg/PoliFemoBackend/main/run.sh\n	sudo chmod +x run.sh\n	sudo certbot certonly --standalone -d api.polinetwork.org\n	mkdir conf.d && cd conf.d\n	mkdir https\n	sudo openssl pkcs12 -export -out $HOME/PoliFemoBackend/conf.d/https/dev_cert.pfx -inkey /etc/letsencrypt/live/api.polinetwork.org/privkey.pem -in /etc/letsencrypt/live/api.polinetwork.org/cert.pem -certfile /etc/letsencrypt/live/api.polinetwork.org/chain.pem\n"})}),"\n",(0,o.jsx)(r.p,{children:"Inserire password a scelta"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"	cd ..\n	sudo ./run.sh\n"})}),"\n",(0,o.jsx)(r.p,{children:"Poi fare un commit senza uscire dalla sessione SSH, se si riavvia correttamente si pu\xf2 uscire."})]})}function l(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},6070:function(e,r,n){n.d(r,{Z:function(){return s},a:function(){return c}});var t=n(1699);let o={},i=t.createContext(o);function c(e){let r=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);