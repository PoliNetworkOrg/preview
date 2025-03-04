"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["44"],{3560:function(e,t,n){n.r(t),n.d(t,{default:()=>d,frontMatter:()=>s,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>a});var r=JSON.parse('{"id":"app/developer/data-structures/articles","title":"articles","description":"","source":"@site/docs/app/developer/data-structures/articles.md","sourceDirName":"app/developer/data-structures","slug":"/app/developer/data-structures/articles","permalink":"/preview/PoliNetworkOrg/docs/pr/25/docs/app/developer/data-structures/articles","draft":false,"unlisted":false,"editUrl":"https://github.com/polinetworkorg/docs/tree/main/docs/app/developer/data-structures/articles.md","tags":[],"version":"current","frontMatter":{},"sidebar":"polifemo","previous":{"title":"ToDo Backend","permalink":"/preview/PoliNetworkOrg/docs/pr/25/docs/app/developer/backend/todo_backend"},"next":{"title":"roles","permalink":"/preview/PoliNetworkOrg/docs/pr/25/docs/app/developer/developer-info"}}'),i=n("6773"),o=n("6070");let s={},a=void 0,c={},l=[];function p(e){let t={code:"code",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-mermaid",children:"classDiagram\n\nArticle *-- Author\nArticle *-- Position\nArticle *-- Point\nArticle *-- Territorial\nArticle *-- Collection\n\nclass Article {\n  int id\n  String title\n  String? subtitle\n  String text //html\n  Author[] authors\n  String[]? sources\n  Position[]? positions\n  String[]? hashtag\n  Territorial[]? territorials\n  DateTime publishTime\n  DateTime? targetTime\n  String[]? music\n  String[]? photos\n  Collection? collection\n}\n\nclass Author {\n  int id\n  String name\n  String? link\n}\n\nclass Position {\n   Point point\n   string name\n}\n\nclass Point {\n   decimal x\n   decimal y\n}\n\nclass Territorial {\n   int id\n   String name\n}\n\nclass Collection {\n	int id\n	String name\n	String? link\n}\n"})})}function d(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},6070:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return s}});var r=n(1699);let i={},o=r.createContext(i);function s(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);