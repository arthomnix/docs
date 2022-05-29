"use strict";(self.webpackChunkmodrinth_doc=self.webpackChunkmodrinth_doc||[]).push([[235],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=a.createContext({}),s=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),u=s(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(h,i(i({ref:e},d),{},{components:n})):a.createElement(h,i({ref:e},d))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2686:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],c={},l="Playing Modpacks",s={unversionedId:"modpacks/playing_modpacks",id:"modpacks/playing_modpacks",title:"Playing Modpacks",description:"A modpack is a list of mods bundled with additional files, such as configuration files. In general, it's a modded instance of a game ready to play, or with minor changes.",source:"@site/docs/modpacks/playing_modpacks.md",sourceDirName:"modpacks",slug:"/modpacks/playing_modpacks",permalink:"/docs/modpacks/playing_modpacks",draft:!1,editUrl:"https://github.com/modrinth/docs/edit/master/docs/modpacks/playing_modpacks.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating Modpacks",permalink:"/docs/modpacks/creating_modpacks"},next:{title:"Modpack Format",permalink:"/docs/modpacks/format_definition"}},d={},p=[{value:"How do I create a modpack?",id:"how-do-i-create-a-modpack",level:2},{value:"How do I play a modpack?",id:"how-do-i-play-a-modpack",level:2},{value:"ATLauncher",id:"atlauncher",level:3},{value:"MultiMC and PolyMC",id:"multimc-and-polymc",level:3}],u={toc:p};function m(t){var e=t.components,c=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,c,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"playing-modpacks"},"Playing Modpacks"),(0,r.kt)("p",null,"A modpack is a list of mods bundled with additional files, such as configuration files. In general, it's a modded instance of a game ready to play, or with minor changes."),(0,r.kt)("h2",{id:"how-do-i-create-a-modpack"},"How do I create a modpack?"),(0,r.kt)("p",null,"Please see the guide for ",(0,r.kt)("a",{parentName:"p",href:"/docs/modpacks/creating_modpacks"},"creating modpacks"),"."),(0,r.kt)("h2",{id:"how-do-i-play-a-modpack"},"How do I play a modpack?"),(0,r.kt)("p",null,"Currently, the easiest ways to play a Modrinth modpack are via ",(0,r.kt)("a",{parentName:"p",href:"https://atlauncher.com"},"ATLauncher")," or ",(0,r.kt)("a",{parentName:"p",href:"https://polymc.org"},"PolyMC"),". You can also install Modrinth packs if you switch to the development branch of ",(0,r.kt)("a",{parentName:"p",href:"https://multimc.org"},"MultiMC"),"."),(0,r.kt)("h3",{id:"atlauncher"},"ATLauncher"),(0,r.kt)("p",null,"ATLauncher is a launcher focused on easy integration of modpacks with various different platforms."),(0,r.kt)("p",null,'Modrinth packs can be installed using ATLauncher in as few as three clicks. Go to the "Packs" tab, select Modrinth on the left, and search for the pack you want. Then, play!'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ATLauncher search",src:n(8558).Z,width:"1200",height:"700"})),(0,r.kt)("p",null,'If you just want to insert an ID, slug, or URL directly, you can also do so using the "Add Manually" button by the top-right of the search'),(0,r.kt)("p",null,'If you have a direct link to a Modrinth pack, you also have the option of importing it using the "Import" button in the "Instances" tab.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ATLauncher import",src:n(3299).Z,width:"1222",height:"658"})),(0,r.kt)("h3",{id:"multimc-and-polymc"},"MultiMC and PolyMC"),(0,r.kt)("p",null,"MultiMC and PolyMC are both launchers focused on efficiently managing multiple separate instances, with the latter being a fork of the former. The installation instructions for each are identical."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'When using MultiMC, you must switch to the development branch to install Modrinth packs. To switch to the development version, click the "Settings" button at the top of the window, and change the "Update Channel" to "Development". Then, close the settings and press Update to swap to the development branch.'))),(0,r.kt)("p",null,'Modrinth packs can be installed using the "Add instance" button and clicking "Modrinth" on the left. It\'s as easy as selecting the one you want, and pressing "OK".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"MultiMC",src:n(3733).Z,width:"1081",height:"740"})),(0,r.kt)("p",null,'If you want to insert a URL directly, you can do so by selecting "Import from zip" instead of "Modrinth".'))}m.isMDXComponent=!0},3299:function(t,e,n){e.Z=n.p+"assets/images/atlauncherImport-ad3ecfc146d2bb72e9813b0d8e14c880.png"},8558:function(t,e,n){e.Z=n.p+"assets/images/atlauncherSearch-d68171dbb61d781b6c4d87e99b4aae64.png"},3733:function(t,e,n){e.Z=n.p+"assets/images/multimc-cf2ec668a27142c79cbe3acf922da593.png"}}]);