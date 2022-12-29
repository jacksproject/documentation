"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[4324],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,p=m["".concat(c,".").concat(d)]||m[d]||f[d]||a;return r?n.createElement(p,i(i({ref:t},s),{},{components:r})):n.createElement(p,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8215:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:o},t)}},5064:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(7294),o=r(9443);var a=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=r(6010),u="tabItem_1uMI",c="tabItemActive_2DSg";var l=function(e){var t,r=e.lazy,o=e.block,l=e.defaultValue,s=e.values,f=e.groupId,m=e.className,d=n.Children.toArray(e.children),p=null!=s?s:d.map((function(e){return{value:e.props.value,label:e.props.label}})),b=null!=l?l:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,v=a(),g=v.tabGroupChoices,h=v.setTabGroupChoices,w=(0,n.useState)(b),y=w[0],O=w[1],k=[];if(null!=f){var x=g[f];null!=x&&x!==y&&p.some((function(e){return e.value===x}))&&O(x)}var E=function(e){var t=e.currentTarget,r=k.indexOf(t),n=p[r].value;O(n),null!=f&&(h(f,n),setTimeout((function(){var e,r,n,o,a,i,u,l;(e=t.getBoundingClientRect(),r=e.top,n=e.left,o=e.bottom,a=e.right,i=window,u=i.innerHeight,l=i.innerWidth,r>=0&&a<=l&&o<=u&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},P=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=k.indexOf(e.target)+1;r=k[n]||k[0];break;case"ArrowLeft":var o=k.indexOf(e.target)-1;r=k[o]||k[k.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},m)},p.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",u,{"tabs__item--active":y===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:P,onFocus:E,onClick:E},null!=r?r:t)}))),r?(0,n.cloneElement)(d.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,r){var n=(0,r(7294).createContext)(void 0);t.Z=n},6174:function(e,t,r){r.r(t),r.d(t,{Highlight:function(){return f},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=(r(5064),r(8215),["components"]),u={sidebar_position:6},c="Herbstluftwm",l={unversionedId:"window-managers/herbstluftwm",id:"window-managers/herbstluftwm",isDocsHomePage:!1,title:"Herbstluftwm",description:"Para membros da comunidade Archcraft, edite a p\xe1gina.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/window-managers/herbstluftwm.mdx",sourceDirName:"window-managers",slug:"/window-managers/herbstluftwm",permalink:"/pt-BR/docs/window-managers/herbstluftwm",editUrl:"https://github.com/archcraft-os/documentation/edit/main/i18n/pt-BR/docusaurus-plugin-content-docs/current/window-managers/herbstluftwm.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Xmonad",permalink:"/pt-BR/docs/window-managers/xmonad"},next:{title:"Berry",permalink:"/pt-BR/docs/window-managers/berry"}},s=[],f=function(e){var t=e.children,r=e.color;return(0,a.kt)("span",{style:{backgroundColor:r,borderRadius:"4px",color:"#fff",padding:"0 0.2rem 0 0.2rem"}},t)},m={toc:s,Highlight:f};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"herbstluftwm"},"Herbstluftwm"),(0,a.kt)("p",null,"Para membros da comunidade Archcraft, edite a p\xe1gina."))}d.isMDXComponent=!0},6010:function(e,t,r){function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.d(t,{Z:function(){return o}})}}]);