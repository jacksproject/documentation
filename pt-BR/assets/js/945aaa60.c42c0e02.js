"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[2556],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return t?n.createElement(f,i(i({ref:a},p),{},{components:t})):n.createElement(f,i({ref:a},p))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8382:function(e,a,t){t.r(a),t.d(a,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=t(7462),o=t(3366),r=(t(7294),t(3905)),i=["components"],s={sidebar_position:3},l="P\xf3s-instala\xe7\xe3o",c={unversionedId:"install-archcraft/post-install",id:"install-archcraft/post-install",isDocsHomePage:!1,title:"P\xf3s-instala\xe7\xe3o",description:"Depois de instalar o Archcraft, h\xe1 algumas coisas que voc\xea deve fazer...",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/install-archcraft/post-install.mdx",sourceDirName:"install-archcraft",slug:"/install-archcraft/post-install",permalink:"/pt-BR/docs/install-archcraft/post-install",editUrl:"https://github.com/archcraft-os/documentation/edit/main/i18n/pt-BR/docusaurus-plugin-content-docs/current/install-archcraft/post-install.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Instalar o Archcraft com ABIF",permalink:"/pt-BR/docs/install-archcraft/install-with-abif"},next:{title:"Openbox",permalink:"/pt-BR/docs/window-managers/openbox"}},p=[{value:"Tela preta ap\xf3s a instala\xe7\xe3o / Liveboot",id:"tela-preta-ap\xf3s-a-instala\xe7\xe3o--liveboot",children:[]},{value:"Atualize o Sistema",id:"atualize-o-sistema",children:[]},{value:"Instalar Novos Softwares",id:"instalar-novos-softwares",children:[]},{value:"Consertar Tearing na tela",id:"consertar-tearing-na-tela",children:[]},{value:"Ativar suspens\xe3o de tela",id:"ativar-suspens\xe3o-de-tela",children:[]},{value:"Corrigir fundo da tela de bloqueio",id:"corrigir-fundo-da-tela-de-bloqueio",children:[]},{value:"Remover M\xf3dulos Desnecess\xe1rios do Initrd",id:"remover-m\xf3dulos-desnecess\xe1rios-do-initrd",children:[]}],u={toc:p};function d(e){var a=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"p\xf3s-instala\xe7\xe3o"},"P\xf3s-instala\xe7\xe3o"),(0,r.kt)("p",null,"Depois de instalar o Archcraft, h\xe1 algumas coisas que voc\xea deve fazer..."),(0,r.kt)("h3",{id:"tela-preta-ap\xf3s-a-instala\xe7\xe3o--liveboot"},"Tela preta ap\xf3s a instala\xe7\xe3o / Liveboot"),(0,r.kt)("p",null,"Se voc\xea tiver uma tela preta ap\xf3s inicializar o ISO instalado ou a ISO do liveUSB, talvez seja por causa do compositor. Nesse caso, para resolver este problema:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Entre em um tty pressionando ",(0,r.kt)("inlineCode",{parentName:"li"},"ctrl+alt+f2/f3...")),(0,r.kt)("li",{parentName:"ul"},"Edite o arquivo ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.config/picom.conf")," e use ",(0,r.kt)("inlineCode",{parentName:"li"},"glx")," como backend."),(0,r.kt)("li",{parentName:"ul"},"Se isso n\xe3o funcionar, desinstale o compositor ",(0,r.kt)("inlineCode",{parentName:"li"},"picom-ibhagwan-git"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo pacman -Rsn picom-ibhagwan-git\n")),(0,r.kt)("h3",{id:"atualize-o-sistema"},"Atualize o Sistema"),(0,r.kt)("p",null,"Atualize o banco de dados de pacotes e atualize sua nova instala\xe7\xe3o."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo pacman -Syyu\n")),(0,r.kt)("p",null,"If you get ",(0,r.kt)("inlineCode",{parentName:"p"},"invalid or corrupted package (PGP signature)")," error, do..."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo pacman -S archlinux-keyring\n$ sudo pacman-key --populate\n")),(0,r.kt)("h3",{id:"instalar-novos-softwares"},"Instalar Novos Softwares"),(0,r.kt)("p",null,"Instale seus programas favoritos com pacman ou yay (AUR)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo pacman -S gimp inkscape\n\n# Ou utilizando AUR\n\n$ yay -S spotify        \n")),(0,r.kt)("h3",{id:"consertar-tearing-na-tela"},"Consertar Tearing na tela"),(0,r.kt)("p",null,"Se voc\xea est\xe1 enfrentando problemas tearing de tela, ent\xe3o :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Habilite o back-end ",(0,r.kt)("inlineCode",{parentName:"p"},"GLX")," para o compositor. Se voc\xea estiver usando ",(0,r.kt)("inlineCode",{parentName:"p"},"openbox"),", clique com o bot\xe3o direito na \xe1rea de trabalho e\nva para ",(0,r.kt)("strong",{parentName:"p"},"Preferences > Compositor")," e clique em ",(0,r.kt)("inlineCode",{parentName:"p"},"Use 'glx' backend")," ou voc\xea pode editar o arquivo ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.config/picom.conf")," manualmente.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Se a primeira op\xe7\xe3o n\xe3o funcionar para voc\xea, crie um arquivo ",(0,r.kt)("inlineCode",{parentName:"p"},"xorg.conf")," como este :"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Mude para o diret\xf3rio xorg.conf.d\n$ cd /etc/X11/xorg.conf.d\n\n# Criar um arquivo conf\n$ sudo touch 20-amdgpu.conf\n\n# Edite o arquivo\n$ sudo vim 20-amdgpu.conf\n\n# Cole isso no editor\nSection "Device"\n     Identifier "AMD"\n     Driver "amdgpu"\n     Option "TearFree" "true"\nEndSection                      \n')),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"perigo")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Este m\xe9todo pode n\xe3o funcionar em seu sistema e voc\xea pode n\xe3o conseguir inicializar no ",(0,r.kt)("strong",{parentName:"p"},"xorg"),". Portanto, certifique-se de saber como usar ",(0,r.kt)("strong",{parentName:"p"},"tty")," ou inicializar no ",(0,r.kt)("strong",{parentName:"p"},"modo de recupera\xe7\xe3o")," para reverter as altera\xe7\xf5es feitas."))),(0,r.kt)("h3",{id:"ativar-suspens\xe3o-de-tela"},"Ativar suspens\xe3o de tela"),(0,r.kt)("p",null,"Habilite o servi\xe7o de suspens\xe3o betterlockscreen para sua conta de usu\xe1rio."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Habilite o servi\xe7o de suspens\xe3o betterlockscreen\n\n$ sudo systemctl enable betterlockscreen@$USER.service                      \n")),(0,r.kt)("h3",{id:"corrigir-fundo-da-tela-de-bloqueio"},"Corrigir fundo da tela de bloqueio"),(0,r.kt)("p",null,"Corrija o layout da tela de bloqueio em telas hidpi ou de baixa resolu\xe7\xe3o."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Atualize o papel de parede da tela de bloqueio\n\n$ betterlockscreen -u /usr/share/backgrounds/groot.jpg\n")),(0,r.kt)("h3",{id:"remover-m\xf3dulos-desnecess\xe1rios-do-initrd"},"Remover M\xf3dulos Desnecess\xe1rios do Initrd"),(0,r.kt)("p",null,"Digamos que voc\xea instalou o Archcraft (com ",(0,r.kt)("inlineCode",{parentName:"p"},"ABIF"),") em uma m\xe1quina que possui uma GPU Intel. Neste caso voc\xea s\xf3 precisa do m\xf3dulo ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"i915")),". Exclua outros m\xf3dulos da matriz e reconstrua o initrd."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Edite o arquivo mkinitcpio.conf\n$ sudo vim /etc/mkinitcpio.conf\n\n# Mude a linha 7 de\nMODULES=(i915? amdgpu? radeon? nouveau? vboxvideo? vmwgfx?)\n# para\nMODULES=(i915)\n\n# Salve o arquivo e reconstrua o initrd\n$ sudo mkinitcpio -p linux                      \n")),(0,r.kt)("p",null,"Bem, isso \xe9 tudo por enquanto, v\xe1 em frente e aproveite o Archcraft."))}d.isMDXComponent=!0}}]);