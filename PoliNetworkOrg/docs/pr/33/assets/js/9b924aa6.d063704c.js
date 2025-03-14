"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["2795"],{2289:function(n,e,i){i.r(e),i.d(e,{default:()=>p,frontMatter:()=>s,metadata:()=>o,assets:()=>l,toc:()=>c,contentTitle:()=>r});var o=JSON.parse('{"id":"app/developer/frontend/conventions","title":"Convenzioni","description":"In questo file vengono descritte un paio di indicazioni generali da seguire nelle contribuzioni di","source":"@site/docs/app/developer/frontend/conventions.md","sourceDirName":"app/developer/frontend","slug":"/app/developer/frontend/conventions","permalink":"/preview/PoliNetworkOrg/docs/pr/33/docs/app/developer/frontend/conventions","draft":false,"unlisted":false,"editUrl":"https://github.com/polinetworkorg/docs/tree/main/docs/app/developer/frontend/conventions.md","tags":[],"version":"current","frontMatter":{},"sidebar":"polifemo","previous":{"title":"roles","permalink":"/preview/PoliNetworkOrg/docs/pr/33/docs/app/developer/developer-info"},"next":{"title":"Components","permalink":"/preview/PoliNetworkOrg/docs/pr/33/docs/app/developer/frontend/usefulComponents"}}'),a=i("6773"),t=i("6070");let s={},r="Convenzioni",l={},c=[{value:"Naming",id:"naming",level:2},{value:"Esempi",id:"esempi",level:3},{value:"Typing",id:"typing",level:2},{value:"Definizioni di funzioni",id:"definizioni-di-funzioni",level:3},{value:"Definizioni di componenti",id:"definizioni-di-componenti",level:3},{value:"Altre definizioni con Unknown",id:"altre-definizioni-con-unknown",level:3}];function d(n){let e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"convenzioni",children:"Convenzioni"})}),"\n",(0,a.jsx)(e.p,{children:"In questo file vengono descritte un paio di indicazioni generali da seguire nelle contribuzioni di\ncodice e qualche guida rapida al fine di aiutare a capire un po' di quirk qua e l\xe0"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.a,{href:"#naming",children:"Naming conventions"})})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.strong,{children:(0,a.jsx)(e.a,{href:"#typing",children:"Problemi comuni con il type system"})})}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"naming",children:"Naming"}),"\n",(0,a.jsxs)(e.p,{children:["In generale si usa il ",(0,a.jsx)(e.code,{children:"camelCase"})," per cose tipo"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"variabili locali"}),"\n",(0,a.jsx)(e.li,{children:"funzioni"}),"\n",(0,a.jsx)(e.li,{children:"prop dei componenti"}),"\n",(0,a.jsx)(e.li,{children:"metodi, attributi e propriet\xe0"}),"\n",(0,a.jsx)(e.li,{children:"membri di oggetti e parametri delle funzioni"}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["e il ",(0,a.jsx)(e.code,{children:"PascalCase"})," per le"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"classi"}),"\n",(0,a.jsx)(e.li,{children:"componenti (anche se di fatto sono solo funzioni)"}),"\n",(0,a.jsx)(e.li,{children:"nomi di tipi e interfacce di typescript"}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["ed se caso si pu\xf2 usare anche il ",(0,a.jsx)(e.code,{children:"SCREAMING_SNAKE_CASE"})," per eventuali costanti."]}),"\n",(0,a.jsx)(e.h3,{id:"esempi",children:"Esempi"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"// una funzione pura \xe8 in camelCase, cos\xec come i suoi parametri\nfunction helloWorld(name: string) {\n    // variabili in generale sono sempre in camelCase\n    const message = `Hello ${name}`\n    console.log(message)\n}\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:"// i componenti sono in PascalCase, ma i props sono in camelCase\nfunction Button(props: { label: string; onClick?: () => void }) {\n    // le variabili locali sono variabili locali normali, quindi in camelCase\n    const [count, setCount] = useState(0)\n\n    return (\n        <Pressable onPress={() => props.onClick()}>\n            <Text>{props.label}</Text>\n        </Pressable>\n    )\n}\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:'// i nomi delle interfacce anche sono in PascalCase (stesso vale per i tipi), e i membri sono in camelCase\ntype PageName = "home" | "settings"\n\ninterface Bar {\n    foo: PageName\n    bar: number\n}\n\nclass FooBar extends Foo implements Bar {\n    // ...\n\n    // i nomi dei metodi sono comunque in pascalCase\n    print() {\n        console.log(this.foo)\n        console.log(this.bar)\n    }\n}\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:'// in caso di interfaccia con stesso nome di una classe, la convenzione \xe8 di mettere la lettera "I"\n// davanti al nome dell\'interfaccia\ninterface IFoo {\n    // ...\n}\n\nclass Foo implements IFoo {\n    // ...\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"typing",children:"Typing"}),"\n",(0,a.jsxs)(e.p,{children:["Consiglio di fare riferimento al ",(0,a.jsx)(e.a,{href:"https://www.typescriptlang.org/docs/handbook/intro.html",children:"TypeSript Handbook"})]}),"\n",(0,a.jsxs)(e.p,{children:["Se non siete familiare con typescript potreste trovarvi in difficolt\xe0 con il definire un paio di\ntipi e essere tentati ad usare ",(0,a.jsx)(e.code,{children:"any"}),"."]}),"\n",(0,a.jsx)(e.p,{children:"Questa cosa va assolutamente evitata ad ogni costo perch\xe9 \xe8 l'unico modo per far spuntare fuori bug\nantipatici dove non si riesce a capire perch\xe9 le cose non funzionano."}),"\n",(0,a.jsx)(e.p,{children:"per tanto qua sotto porr\xf2 un paio di semplici esempi di cose non completamente intuitive per evitare\ndi ritrovarvi senza definizione di tipi"}),"\n",(0,a.jsx)(e.h3,{id:"definizioni-di-funzioni",children:"Definizioni di funzioni"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:'// il tipo di una funzione generica pu\xf2 essere scritto nel modo pi\xf9 semplice con la sitassi dell\'arrow function\nlet function: () => void // questa \xe8 una funzione senza parametri e senza valore restituito\n\n// i parametri possono essere descritti scrivendone il nome e il tipo come normali variabili\nlet func: (a: number, b: string) => void\n\n// il nome assegnato ad un parametro \xe8 completamente arbitrario e usato solo per documentare la funzione\n// in realt\xe0 quando si assegna una funzione si pu\xf2 rinominare il parametro arbitrariamente\nfunc = (x, y) => {\n    // questa definizione \xe8 valida per la dichiarazione di tipi precedente\n    // qui x sar\xe0 un numero e y una stringa\n}\n\n// allo stesso modo il return type non \xe8 strettamente vincolante quando \xe8 void, poich\xe9 javascript\n// ignorer\xe0 qualsiasi valore restituito se non usato\nfunc = (x, y) => {\n    // questa definizione \xe8 comunque valida\n    return "foo"\n}\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:'// per quanto riguarda i tipi dei props, la dichiarazione del tipo di una funzione in questo modo \xe8 utile\n// qua non ci interessa definire tipi di parametri o del valore restituito\nlet Button: FC<{\n    label: string\n    onClick?: () => void\n}>\n\n//...\n\nlet Component: FC = () => (\n    <Button\n        label="ciao"\n        onClick={click => {\n            // click qui sar\xe0 di tipo any e typescipt dar\xe0 errore \u274C\n            return "ciao" // dato che il tipo restituito da onClick \xe8 void, return verr\xe0 ignorato in qualsiasi caso\n        }}\n    />\n)\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:'// se si vuole fare in modo che venga passato qualcosa alla funzione, si pu\xf2 definire il tipo del parametro\nlet Button: FC<{\n    label: string\n    onClick?: (e: React.MouseEvent) => void\n}>\n\n//...\n\nlet Component: FC = () => (\n    <Button\n        label="ciao"\n        onClick={click => {\n            // Qui click sar\xe0 definito e di tipo React.MouseEvent, anche se nella dichiarazione\n            // di Button sopra \xe8 stato chiamato "e"\n        }}\n    />\n)\n'})}),"\n",(0,a.jsx)(e.h3,{id:"definizioni-di-componenti",children:"Definizioni di componenti"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:"// se si vuole passare qualche componente come prop, ci sono un paio di tipi che ci vengono in aiuto\n\n// un FunctionComponent (FC) ha come tipo di restituzione React.ReactElement, che \xe8 un tipo generico\n// per i componenti a cui possono essere passati props (di cui a loro volta si pu\xf2 definire il tipo)\nlet Button: FC<{\n    label: string\n    icon: React.ReactElement<IconProps, any>\n}>\n\n// per componenti generici i cui props non sono importanti, si pu\xf2 usare JSX.Element, che \xe8 ugaule a\n// React.ReactElement<any, any>\n\nlet Button: FC<{\n    label: string\n    icon: JSX.Element // pi\xf9 compatto ed inclusivo\n}>\n\n// ReactNode accetta tutto quello che \xe8 considerato un valido nodo di React, quindi componenti ma anche\n// array di componenti, o stringhe (che in react native sono validi nodi solo per <Text>)\n// pu\xf2 essere utilizzato in caso serva pi\xf9 flessibilit\xe0, ma in generale \xe8 meglio JSX.Element\nlet Button: FC<{\n    label: string\n    node: React.ReactNode // questo accetta un po' qualsiasi cosa come nodo\n}>\n"})}),"\n",(0,a.jsx)(e.h3,{id:"altre-definizioni-con-unknown",children:"Altre definizioni con Unknown"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-ts",children:"// in caso si voglia definire qualche sorta di funzione che potrebbe potenzialmente accettare\n// qualsiasi tipo di parametro, \xe8 preferibile usare unknown al posto di any\n\nfunction log(x: any) {\n    // \u274C qui x sar\xe0 any, quindi qualsiasi parametro \xe8 accessibile anche se non esiste\n    console.log(x)\n    console.log(x.foo) // \u26A0\uFE0F possibile errore di runtime\n}\n\nfunction log(x: unknown) {\n    // \u2705 qui x sar\xe0 unknown, per accedere a parametri \xe8 necessario usare un type guard\n    console.log(x)\n    console.log(x.foo) // \u26A0\uFE0F errore di compilazione, meglio\n}\n"})})]})}function p(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},6070:function(n,e,i){i.d(e,{Z:function(){return r},a:function(){return s}});var o=i(1699);let a={},t=o.createContext(a);function s(n){let e=o.useContext(t);return o.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),o.createElement(t.Provider,{value:e},n.children)}}}]);