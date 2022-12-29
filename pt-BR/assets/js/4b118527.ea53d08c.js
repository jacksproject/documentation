"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[2144],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7998:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:1},l="Configura\xe7\xe3o do Sistema",s={unversionedId:"contrib/setup-env",id:"contrib/setup-env",isDocsHomePage:!1,title:"Configura\xe7\xe3o do Sistema",description:"Vamos configurar seu sistema para desenvolvimento local...",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/contrib/setup-env.mdx",sourceDirName:"contrib",slug:"/contrib/setup-env",permalink:"/pt-BR/docs/contrib/setup-env",editUrl:"https://github.com/archcraft-os/documentation/edit/main/i18n/pt-BR/docusaurus-plugin-content-docs/current/contrib/setup-env.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Ambiente de Desktop LXDE",permalink:"/pt-BR/docs/desktop/lxde"},next:{title:"Escreva Tutoriais",permalink:"/pt-BR/docs/contrib/contrib-blog"}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configura\xe7\xe3o-do-sistema"},"Configura\xe7\xe3o do Sistema"),(0,o.kt)("p",null,"Vamos configurar seu sistema para desenvolvimento local..."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Instalar ",(0,o.kt)("inlineCode",{parentName:"li"},"nodejs"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"npm")," e ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn")," no seu sistema :")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo pacman -S nodejs npm yarn\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CLone o reposit\xf3rio ",(0,o.kt)("inlineCode",{parentName:"li"},"documentation")," do Github :")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/archcraft-os/documentation\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Instala\xe7\xe3o necess\xe1ria do ",(0,o.kt)("inlineCode",{parentName:"li"},"node modules")," no diret\xf3rio raiz do reposit\xf3rio :")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd documentation\n$ npm install\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Execute o servidor de desenvolvimento local\u200b :")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn run start\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Adicione documenta\xe7\xf5es, edite p\xe1ginas e, quando terminar, fa\xe7a o Build do site :")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn run build\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Certifique-se de que o build do site foi criado com sucesso e teste a compila\xe7\xe3o no servidor local antes de implant\xe1-lo no Github (ou crie um pull request)."))))}d.isMDXComponent=!0}}]);