"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["4599"],{5570:function(n,e,t){t.r(e),t.d(e,{default:()=>p,frontMatter:()=>l,metadata:()=>i,assets:()=>c,toc:()=>s,contentTitle:()=>o});var i=JSON.parse('{"id":"app/developer/backend/DBPolifemo/TabelleArticle","title":"TabelleArticle","description":"","source":"@site/docs/app/developer/backend/DBPolifemo/TabelleArticle.md","sourceDirName":"app/developer/backend/DBPolifemo","slug":"/app/developer/backend/DBPolifemo/TabelleArticle","permalink":"/preview/PoliNetworkOrg/docs/pr/31/docs/app/developer/backend/DBPolifemo/TabelleArticle","draft":false,"unlisted":false,"editUrl":"https://github.com/polinetworkorg/docs/tree/main/docs/app/developer/backend/DBPolifemo/TabelleArticle.md","tags":[],"version":"current","frontMatter":{},"sidebar":"polifemo","previous":{"title":"TabellaGroups","permalink":"/preview/PoliNetworkOrg/docs/pr/31/docs/app/developer/backend/DBPolifemo/TabellaGroups"},"next":{"title":"TabelleCalendar","permalink":"/preview/PoliNetworkOrg/docs/pr/31/docs/app/developer/backend/DBPolifemo/TabelleCalendar"}}'),r=t("6773"),a=t("6070");let l={},o=void 0,c={},s=[];function d(n){let e={mermaid:"mermaid",...(0,a.a)(),...n.components};return(0,r.jsx)(e.mermaid,{value:"classDiagram\n\nclass Article {\n  int primary key id_article\n  String title\n  String subtitle\n  String content\n  Datetime publishTime\n  Datetime targetTime\n  String music\n  FK id_media\n  int replace_id\n  bool notify\n}\n\nclass hashtag{\n  int primary key id_hashtag\n  String text\n}\n\nclass territorial{\n  int primary key id_territorial\n  String name\n}\n\nclass media{\n  int primary key id_media\n}\n\n\nclass link_{\n  int primary key id_link\n  String link\n  FK id_media\n}\n\nclass point{\n  int primary key id_point\n  float latitude\n  float longitude\n}\n\nclass location{\n  int primary key id_location\n  String name\n  String link\n  FK id_point  \n}\n\nclass author{\n  int primary key id_author\n  String name\n  String link\n}\n\nclass source{\n  int primary key id_source\n  String name\n  String link\n}\n\nclass scritto{\n  FK id_author\n  FK id_article\n}\n\nclass su{\n  FK id_territorial\n  FK id_article\n}\n\nclass prende{\n  FK id_source\n  FK id_article\n}\n\nclass where{\n  FK id_location\n  FK id_article\n}\n\nclass tag{\n  FK id_hashtag\n  FK id_article\n}\n\nprende <|--Article\nsource <|--prende\n\nsu <|--Article\nterritorial<|--su\n\ntag <|--Article\nhashtag<|--tag\n\nscritto <|--Article\nauthor<|--scritto\n\nwhere <|--Article\nlocation<|--where\npoint <|--location\n\nmedia <|--Article\nlink_<|--media\n\n\n"})}function p(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},6070:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return l}});var i=t(1699);let r={},a=i.createContext(r);function l(n){let e=i.useContext(a);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);