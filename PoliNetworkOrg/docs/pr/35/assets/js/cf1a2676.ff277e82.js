"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["8669"],{1984:function(e,n,a){a.r(n),a.d(n,{default:()=>d,frontMatter:()=>t,metadata:()=>o,assets:()=>s,toc:()=>c,contentTitle:()=>l});var o=JSON.parse('{"id":"archive/app/developer/backend/DBPolifemo/TabelleCalendar","title":"TabelleCalendar","description":"","source":"@site/docs/archive/app/developer/backend/DBPolifemo/TabelleCalendar.md","sourceDirName":"archive/app/developer/backend/DBPolifemo","slug":"/archive/app/developer/backend/DBPolifemo/TabelleCalendar","permalink":"/preview/PoliNetworkOrg/docs/pr/35/docs/archive/app/developer/backend/DBPolifemo/TabelleCalendar","draft":false,"unlisted":false,"editUrl":"https://github.com/polinetworkorg/docs/tree/main/docs/archive/app/developer/backend/DBPolifemo/TabelleCalendar.md","tags":[],"version":"current","frontMatter":{},"sidebar":"archive","previous":{"title":"TabelleArticle","permalink":"/preview/PoliNetworkOrg/docs/pr/35/docs/archive/app/developer/backend/DBPolifemo/TabelleArticle"},"next":{"title":"inserisci.py","permalink":"/preview/PoliNetworkOrg/docs/pr/35/docs/archive/app/developer/backend/DBPolifemo/old/inserisci.py"}}'),r=a("6773"),i=a("6070");let t={},l=void 0,s={},c=[];function p(e){let n={mermaid:"mermaid",...(0,i.a)(),...e.components};return(0,r.jsx)(n.mermaid,{value:"classDiagram\n\nclass Day {\n  Date  giorno PK\n}\n\nclass Tipologia{\nint id_tipologia PK,	\nENUM name_ \n}\n\nclass appartiene{\nint giorno FK,\nint id_tipologia FK\n}\n\nclass lesson{\nint  id_lesson PK,	\nVARCHAR name_,\nVARCHAR aula,\nTIME orarioInizio,\nTIME orarioFine,\nVARCHAR professore\n}\n\nclass Presente{\nint giorno FK,\nint id_lesson FK\n}\n\nclass Exam{\nint id_exam PK,	\nVARCHAR name_,\nVARCHAR sede,\nint semestre,\nVARCHAR docente,\ndatetime data,\nint giorno FK\n}\n\nappartiene<|--Day\nTipologia<|--appartiene\n\nPresente<|--Day\nlesson<|--Presente\n\nExam<|--Day\n\n"})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},6070:function(e,n,a){a.d(n,{Z:function(){return l},a:function(){return t}});var o=a(1699);let r={},i=o.createContext(r);function t(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);