"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["2058"],{2581:function(e,n,i){i.r(n),i.d(n,{default:()=>p,frontMatter:()=>l,metadata:()=>t,assets:()=>c,toc:()=>s,contentTitle:()=>o});var t=JSON.parse('{"id":"archive/app/developer/backend/DBPolifemo/TabelleArticle","title":"TabelleArticle","description":"","source":"@site/docs/archive/app/developer/backend/DBPolifemo/TabelleArticle.md","sourceDirName":"archive/app/developer/backend/DBPolifemo","slug":"/archive/app/developer/backend/DBPolifemo/TabelleArticle","permalink":"/preview/PoliNetworkOrg/docs/pr/35/docs/archive/app/developer/backend/DBPolifemo/TabelleArticle","draft":false,"unlisted":false,"editUrl":"https://github.com/polinetworkorg/docs/tree/main/docs/archive/app/developer/backend/DBPolifemo/TabelleArticle.md","tags":[],"version":"current","frontMatter":{},"sidebar":"archive","previous":{"title":"TabellaGroups","permalink":"/preview/PoliNetworkOrg/docs/pr/35/docs/archive/app/developer/backend/DBPolifemo/TabellaGroups"},"next":{"title":"TabelleCalendar","permalink":"/preview/PoliNetworkOrg/docs/pr/35/docs/archive/app/developer/backend/DBPolifemo/TabelleCalendar"}}'),r=i("6773"),a=i("6070");let l={},o=void 0,c={},s=[];function d(e){let n={mermaid:"mermaid",...(0,a.a)(),...e.components};return(0,r.jsx)(n.mermaid,{value:"classDiagram\n\nclass Article {\n  int primary key id_article\n  String title\n  String subtitle\n  String content\n  Datetime publishTime\n  Datetime targetTime\n  String music\n  FK id_media\n  int replace_id\n  bool notify\n}\n\nclass hashtag{\n  int primary key id_hashtag\n  String text\n}\n\nclass territorial{\n  int primary key id_territorial\n  String name\n}\n\nclass media{\n  int primary key id_media\n}\n\n\nclass link_{\n  int primary key id_link\n  String link\n  FK id_media\n}\n\nclass point{\n  int primary key id_point\n  float latitude\n  float longitude\n}\n\nclass location{\n  int primary key id_location\n  String name\n  String link\n  FK id_point  \n}\n\nclass author{\n  int primary key id_author\n  String name\n  String link\n}\n\nclass source{\n  int primary key id_source\n  String name\n  String link\n}\n\nclass scritto{\n  FK id_author\n  FK id_article\n}\n\nclass su{\n  FK id_territorial\n  FK id_article\n}\n\nclass prende{\n  FK id_source\n  FK id_article\n}\n\nclass where{\n  FK id_location\n  FK id_article\n}\n\nclass tag{\n  FK id_hashtag\n  FK id_article\n}\n\nprende <|--Article\nsource <|--prende\n\nsu <|--Article\nterritorial<|--su\n\ntag <|--Article\nhashtag<|--tag\n\nscritto <|--Article\nauthor<|--scritto\n\nwhere <|--Article\nlocation<|--where\npoint <|--location\n\nmedia <|--Article\nlink_<|--media\n\n\n"})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},6070:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return l}});var t=i(1699);let r={},a=t.createContext(r);function l(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);