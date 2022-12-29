"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[1270],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,d=p["".concat(u,".").concat(m)]||p[m]||f[m]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),o=n(9443);var a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),c="tabItem_1uMI",u="tabItemActive_2DSg";var l=function(e){var t,n=e.lazy,o=e.block,l=e.defaultValue,s=e.values,f=e.groupId,p=e.className,m=r.Children.toArray(e.children),d=null!=s?s:m.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=l?l:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,b=a(),g=b.tabGroupChoices,w=b.setTabGroupChoices,h=(0,r.useState)(v),y=h[0],O=h[1],k=[];if(null!=f){var x=g[f];null!=x&&x!==y&&d.some((function(e){return e.value===x}))&&O(x)}var E=function(e){var t=e.currentTarget,n=k.indexOf(t),r=d[n].value;O(r),null!=f&&(w(f,r),setTimeout((function(){var e,n,r,o,a,i,c,l;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,i=window,c=i.innerHeight,l=i.innerWidth,n>=0&&a<=l&&o<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=k.indexOf(e.target)+1;n=k[r]||k[0];break;case"ArrowLeft":var o=k.indexOf(e.target)-1;n=k[o]||k[k.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},p)},d.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",c,{"tabs__item--active":y===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:j,onFocus:E,onClick:E},null!=n?n:t)}))),n?(0,r.cloneElement)(m.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},9247:function(e,t,n){n.r(t),n.d(t,{Highlight:function(){return f},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=(n(5064),n(8215),["components"]),c={sidebar_position:13},u="Newm",l={unversionedId:"window-managers/newm",id:"window-managers/newm",isDocsHomePage:!1,title:"Newm",description:"Mais informa\xe7\xf5es : Aqui",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/window-managers/newm.mdx",sourceDirName:"window-managers",slug:"/window-managers/newm",permalink:"/pt-BR/docs/window-managers/newm",editUrl:"https://github.com/archcraft-os/documentation/edit/main/i18n/pt-BR/docusaurus-plugin-content-docs/current/window-managers/newm.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"River",permalink:"/pt-BR/docs/window-managers/river"},next:{title:"Ambiente de Desktop XFCE",permalink:"/pt-BR/docs/desktop/xfce"}},s=[],f=function(e){var t=e.children,n=e.color;return(0,a.kt)("span",{style:{backgroundColor:n,borderRadius:"4px",color:"#fff",padding:"0 0.2rem 0 0.2rem"}},t)},p={toc:s,Highlight:f};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"newm"},"Newm"),(0,a.kt)("p",null,"Mais informa\xe7\xf5es : ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/archcraft-os/archcraft-newm"},"Aqui")))}m.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);