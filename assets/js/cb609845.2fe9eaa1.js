"use strict";(self.webpackChunkmodrinth_doc=self.webpackChunkmodrinth_doc||[]).push([[772],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return u}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=d(a),u=o,h=m["".concat(p,".").concat(u)]||m[u]||l[u]||r;return a?n.createElement(h,i(i({ref:t},s),{},{components:a})):n.createElement(h,i({ref:t},s))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5527:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return l}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],c={},p="Creating Modpacks",d={unversionedId:"modpacks/creating_modpacks",id:"modpacks/creating_modpacks",title:"Creating Modpacks",description:"A modpack is a list of mods bundled with additional files, such as configuration files. In general, it's a modded instance of a game ready to play, or with minor changes.",source:"@site/docs/modpacks/creating_modpacks.md",sourceDirName:"modpacks",slug:"/modpacks/creating_modpacks",permalink:"/docs/modpacks/creating_modpacks",draft:!1,editUrl:"https://github.com/modrinth/docs/edit/master/docs/modpacks/creating_modpacks.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Contributing to Modrinth",permalink:"/docs/details/contributing"},next:{title:"Playing Modpacks",permalink:"/docs/modpacks/playing_modpacks"}},s={},l=[{value:"How do I play a modpack?",id:"how-do-i-play-a-modpack",level:2},{value:"What does the Modrinth format look like?",id:"what-does-the-modrinth-format-look-like",level:2},{value:"How do I create a modpack?",id:"how-do-i-create-a-modpack",level:2},{value:"ATLauncher",id:"atlauncher",level:3},{value:"packwiz",id:"packwiz",level:3}],m={toc:l};function u(e){var t=e.components,c=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-modpacks"},"Creating Modpacks"),(0,r.kt)("p",null,"A modpack is a list of mods bundled with additional files, such as configuration files. In general, it's a modded instance of a game ready to play, or with minor changes."),(0,r.kt)("h2",{id:"how-do-i-play-a-modpack"},"How do I play a modpack?"),(0,r.kt)("p",null,"Please see the guide for ",(0,r.kt)("a",{parentName:"p",href:"/docs/modpacks/playing_modpacks"},"playing modpacks"),"."),(0,r.kt)("h2",{id:"what-does-the-modrinth-format-look-like"},"What does the Modrinth format look like?"),(0,r.kt)("p",null,"Modrinth uses its own storage layout for modpacks. This can be found on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/modpacks/format_definition"},"format definition")," page. The Modrinth format is unique for our purposes, so you cannot use the CurseForge format or another format to upload to Modrinth."),(0,r.kt)("h2",{id:"how-do-i-create-a-modpack"},"How do I create a modpack?"),(0,r.kt)("p",null,"You can either use ",(0,r.kt)("a",{parentName:"p",href:"https://atlauncher.com"},"ATLauncher")," or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/packwiz/packwiz"},"packwiz")," to create modpacks."),(0,r.kt)("h3",{id:"atlauncher"},"ATLauncher"),(0,r.kt)("p",null,"ATLauncher is a launcher focused on easy integration of modpacks with various different platforms."),(0,r.kt)("p",null,"When you have an instance, it is very simple to export to the Modrinth format. You just need to select the instance, press the Export button, fill out the metadata, and press Export."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ATLauncher export",src:a(8843).Z,width:"1813",height:"504"})),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Make sure you choose to export to the Modrinth format! If you don't change it from the default (CurseForge), the resulting pack will not be uploadable to Modrinth."))),(0,r.kt)("h3",{id:"packwiz"},"packwiz"),(0,r.kt)("p",null,"packwiz is a command-line application which allows easy creation of modpacks for multiple platforms and purposes. packwiz's ",(0,r.kt)("a",{parentName:"p",href:"https://packwiz.infra.link/tutorials/creating/getting-started/"},"Getting Started")," guide is very helpful when setting up a packwiz pack."),(0,r.kt)("p",null,"When you have a working packwiz pack, you can use the ",(0,r.kt)("a",{parentName:"p",href:"https://packwiz.infra.link/reference/commands/packwiz_modrinth_export/"},(0,r.kt)("inlineCode",{parentName:"a"},"packwiz mr export"))," command to create a Modrinth modpack."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can also convert a CurseForge modpack to the Modrinth format via packwiz. Specifically, the commands ",(0,r.kt)("a",{parentName:"p",href:"https://packwiz.infra.link/reference/commands/packwiz_curseforge_import/"},(0,r.kt)("inlineCode",{parentName:"a"},"packwiz cf import"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://packwiz.infra.link/reference/commands/packwiz_modrinth_export/"},(0,r.kt)("inlineCode",{parentName:"a"},"packwiz mr export"))," will make a compliant file which can be uploaded to Modrinth."))))}u.isMDXComponent=!0},8843:function(e,t,a){t.Z=a.p+"assets/images/atlauncherExport-c067737e246cc42347c6a4908fcc9211.png"}}]);