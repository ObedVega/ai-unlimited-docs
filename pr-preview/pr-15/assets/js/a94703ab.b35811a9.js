"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[9048],{7711:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Te});var a=n(6540),i=n(4164),o=n(9024),r=n(7559),s=n(6153),l=n(6588),c=n(1312),d=n(3104),u=n(5062);const m={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var h=n(4848);function p(){var e=function(e){var t=e.threshold,n=(0,a.useState)(!1),i=n[0],o=n[1],r=(0,a.useRef)(!1),s=(0,d.gk)(),l=s.startScroll,c=s.cancelScroll;return(0,d.Mq)((function(e,n){var a=e.scrollY,i=null==n?void 0:n.scrollY;i&&(r.current?r.current=!1:a>=i?(c(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,u.$)((function(e){e.location.hash&&(r.current=!0,o(!1))})),{shown:i,scrollToTop:function(){return l(0)}}}({threshold:300}),t=e.shown,n=e.scrollToTop;return(0,h.jsx)("button",{"aria-label":(0,c.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.A)("clean-btn",r.G.common.backToTopButton,m.backToTopButton,t&&m.backToTopButtonShow),type:"button",onClick:n})}var b=n(3109),v=n(6347),f=n(4581),x=n(6342),g=n(8587),j=n(8774),A=n(6025),C=n(4586),k=n(2303),_=n(5293);const N={themedComponent:"themedComponent_mlkZ","themedComponent--light":"themedComponent--light_NVdE","themedComponent--dark":"themedComponent--dark_xIcU"};function S(e){var t=e.className,n=e.children,o=(0,k.A)(),r=(0,_.G)().colorMode;return(0,h.jsx)(h.Fragment,{children:(o?"dark"===r?["dark"]:["light"]:["light","dark"]).map((function(e){var o=n({theme:e,className:(0,i.A)(t,N.themedComponent,N["themedComponent--"+e])});return(0,h.jsx)(a.Fragment,{children:o},e)}))})}var y=["sources","className","alt"];function T(e){var t=e.sources,n=e.className,a=e.alt,i=(0,g.A)(e,y);return(0,h.jsx)(S,{className:n,children:function(e){var n=e.theme,o=e.className;return(0,h.jsx)("img",Object.assign({src:t[n],alt:a,className:o},i))}})}var I=["imageClassName","titleClassName"];function w(e){var t=e.logo,n=e.alt,a=e.imageClassName,i={light:(0,A.A)(t.src),dark:(0,A.A)(t.srcDark||t.src)},o=(0,h.jsx)(T,{className:t.className,sources:i,height:t.height,width:t.width,alt:n,style:t.style});return a?(0,h.jsx)("div",{className:a,children:o}):o}function B(e){var t,n=(0,C.A)().siteConfig.title,a=(0,x.p)().navbar,i=a.title,o=a.logo,r=e.imageClassName,s=e.titleClassName,l=(0,g.A)(e,I),c=(0,A.A)((null==o?void 0:o.href)||"/"),d=i?"":n,u=null!=(t=null==o?void 0:o.alt)?t:d;return(0,h.jsxs)(j.A,Object.assign({to:c},l,(null==o?void 0:o.target)&&{target:o.target},{children:[o&&(0,h.jsx)(w,{logo:o,alt:u,imageClassName:r}),null!=i&&(0,h.jsx)("b",{className:s,children:i})]}))}function E(e){return(0,h.jsx)("svg",Object.assign({width:"20",height:"20","aria-hidden":"true"},e,{children:(0,h.jsxs)("g",{fill:"#7a7a7a",children:[(0,h.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,h.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})}))}const L={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function M(e){var t=e.onClick;return(0,h.jsx)("button",{type:"button",title:(0,c.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.A)("button button--secondary button--outline",L.collapseSidebarButton),onClick:t,children:(0,h.jsx)(E,{className:L.collapseSidebarButtonIcon})})}var H=n(5041),O=n(3807),R=Symbol("EmptyContext"),G=a.createContext(R);function P(e){var t=e.children,n=(0,a.useState)(null),i=n[0],o=n[1],r=(0,a.useMemo)((function(){return{expandedItem:i,setExpandedItem:o}}),[i]);return(0,h.jsx)(G.Provider,{value:r,children:t})}var W=n(1422),F=n(9169),D=["item","onItemClick","activePath","level","index"];function U(e){var t=e.collapsed,n=e.categoryLabel,a=e.onClick;return(0,h.jsx)("button",{"aria-label":t?(0,c.T)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,c.T)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),"aria-expanded":!t,type:"button",className:"clean-btn menu__caret",onClick:a})}function z(e){var t=e.item,n=e.onItemClick,o=e.activePath,l=e.level,c=e.index,d=(0,g.A)(e,D),u=t.items,m=t.label,p=t.collapsible,b=t.className,v=t.href,f=(0,x.p)().docs.sidebar.autoCollapseCategories,A=function(e){var t=(0,k.A)();return(0,a.useMemo)((function(){return e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,s.Nr)(e):void 0}),[e,t])}(t),C=(0,s.w8)(t,o),_=(0,F.ys)(v,o),N=(0,W.u)({initialState:function(){return!!p&&(!C&&t.collapsed)}}),S=N.collapsed,y=N.setCollapsed,T=function(){var e=(0,a.useContext)(G);if(e===R)throw new O.dV("DocSidebarItemsExpandedStateProvider");return e}(),I=T.expandedItem,w=T.setExpandedItem,B=function(e){void 0===e&&(e=!S),w(e?null:c),y(e)};return function(e){var t=e.isActive,n=e.collapsed,i=e.updateCollapsed,o=(0,O.ZC)(t);(0,a.useEffect)((function(){t&&!o&&n&&i(!1)}),[t,o,n,i])}({isActive:C,collapsed:S,updateCollapsed:B}),(0,a.useEffect)((function(){p&&null!=I&&I!==c&&f&&y(!0)}),[p,I,c,y,f]),(0,h.jsxs)("li",{className:(0,i.A)(r.G.docs.docSidebarItemCategory,r.G.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":S},b),children:[(0,h.jsxs)("div",{className:(0,i.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_}),children:[(0,h.jsx)(j.A,Object.assign({className:(0,i.A)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!v&&p,"menu__link--active":C}),onClick:p?function(e){null==n||n(t),v?B(!1):(e.preventDefault(),B())}:function(){null==n||n(t)},"aria-current":_?"page":void 0,role:p&&!v?"button":void 0,"aria-expanded":p&&!v?!S:void 0,href:p?null!=A?A:"#":A},d,{children:m})),v&&p&&(0,h.jsx)(U,{collapsed:S,categoryLabel:m,onClick:function(e){e.preventDefault(),B()}})]}),(0,h.jsx)(W.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:S,children:(0,h.jsx)(ae,{items:u,tabIndex:S?-1:0,onItemClick:n,activePath:o,level:l+1})})]})}var V=n(6654);const q={iconExternalLink:"iconExternalLink_nPIU"};function Y(e){var t=e.width,n=void 0===t?13.5:t,a=e.height,i=void 0===a?13.5:a;return(0,h.jsx)("svg",{width:n,height:i,"aria-hidden":"true",viewBox:"0 0 24 24",className:q.iconExternalLink,children:(0,h.jsx)("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})})}const K={menuExternalLink:"menuExternalLink_NmtK"};var Z=["item","onItemClick","activePath","level","index"];function J(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=e.level,l=(e.index,(0,g.A)(e,Z)),c=t.href,d=t.label,u=t.className,m=t.autoAddBaseUrl,p=(0,s.w8)(t,a),b=(0,V.A)(c);return(0,h.jsx)("li",{className:(0,i.A)(r.G.docs.docSidebarItemLink,r.G.docs.docSidebarItemLinkLevel(o),"menu__list-item",u),children:(0,h.jsxs)(j.A,Object.assign({className:(0,i.A)("menu__link",!b&&K.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:m,"aria-current":p?"page":void 0,to:c},b&&{onClick:n?function(){return n(t)}:void 0},l,{children:[d,!b&&(0,h.jsx)(Y,{})]}))},d)}const Q={menuHtmlItem:"menuHtmlItem_M9Kj"};function X(e){var t=e.item,n=e.level,a=e.index,o=t.value,s=t.defaultStyle,l=t.className;return(0,h.jsx)("li",{className:(0,i.A)(r.G.docs.docSidebarItemLink,r.G.docs.docSidebarItemLinkLevel(n),s&&[Q.menuHtmlItem,"menu__list-item"],l),dangerouslySetInnerHTML:{__html:o}},a)}var $=["item"];function ee(e){var t=e.item,n=(0,g.A)(e,$);switch(t.type){case"category":return(0,h.jsx)(z,Object.assign({item:t},n));case"html":return(0,h.jsx)(X,Object.assign({item:t},n));default:return(0,h.jsx)(J,Object.assign({item:t},n))}}var te=["items"];function ne(e){var t=e.items,n=(0,g.A)(e,te),a=(0,s.Y)(t,n.activePath);return(0,h.jsx)(P,{children:a.map((function(e,t){return(0,h.jsx)(ee,Object.assign({item:e,index:t},n),t)}))})}const ae=(0,a.memo)(ne),ie={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function oe(e){var t=e.path,n=e.sidebar,o=e.className,s=function(){var e=(0,H.Mj)().isActive,t=(0,a.useState)(e),n=t[0],i=t[1];return(0,d.Mq)((function(t){var n=t.scrollY;e&&i(0===n)}),[e]),e&&n}();return(0,h.jsx)("nav",{"aria-label":(0,c.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,i.A)("menu thin-scrollbar",ie.menu,s&&ie.menuWithAnnouncementBar,o),children:(0,h.jsx)("ul",{className:(0,i.A)(r.G.docs.docSidebarMenu,"menu__list"),children:(0,h.jsx)(ae,{items:n,activePath:t,level:1})})})}const re="sidebar_njMd",se="sidebarWithHideableNavbar_wUlq",le="sidebarHidden_VK0M",ce="sidebarLogo_isFc";function de(e){var t=e.path,n=e.sidebar,a=e.onCollapse,o=e.isHidden,r=(0,x.p)(),s=r.navbar.hideOnScroll,l=r.docs.sidebar.hideable;return(0,h.jsxs)("div",{className:(0,i.A)(re,s&&se,o&&le),children:[s&&(0,h.jsx)(B,{tabIndex:-1,className:ce}),(0,h.jsx)(oe,{path:t,sidebar:n}),l&&(0,h.jsx)(M,{onClick:a})]})}const ue=a.memo(de);var me=n(5600),he=n(2069),pe=function(e){var t=e.sidebar,n=e.path,a=(0,he.M)();return(0,h.jsx)("ul",{className:(0,i.A)(r.G.docs.docSidebarMenu,"menu__list"),children:(0,h.jsx)(ae,{items:t,activePath:n,onItemClick:function(e){"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function be(e){return(0,h.jsx)(me.GX,{component:pe,props:e})}const ve=a.memo(be);function fe(e){var t=(0,f.l)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,h.jsxs)(h.Fragment,{children:[n&&(0,h.jsx)(ue,Object.assign({},e)),a&&(0,h.jsx)(ve,Object.assign({},e))]})}const xe={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function ge(e){var t=e.toggleSidebar;return(0,h.jsx)("div",{className:xe.expandButton,title:(0,c.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,h.jsx)(E,{className:xe.expandButtonIcon})})}const je={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function Ae(e){var t,n=e.children,i=(0,l.t)();return(0,h.jsx)(a.Fragment,{children:n},null!=(t=null==i?void 0:i.name)?t:"noSidebar")}function Ce(e){var t=e.sidebar,n=e.hiddenSidebarContainer,o=e.setHiddenSidebarContainer,s=(0,v.zy)().pathname,l=(0,a.useState)(!1),c=l[0],d=l[1],u=(0,a.useCallback)((function(){c&&d(!1),!c&&(0,b.O)()&&d(!0),o((function(e){return!e}))}),[o,c]);return(0,h.jsx)("aside",{className:(0,i.A)(r.G.docs.docSidebarContainer,je.docSidebarContainer,n&&je.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(je.docSidebarContainer)&&n&&d(!0)},children:(0,h.jsx)(Ae,{children:(0,h.jsxs)("div",{className:(0,i.A)(je.sidebarViewport,c&&je.sidebarViewportHidden),children:[(0,h.jsx)(fe,{sidebar:t,path:s,onCollapse:u,isHidden:c}),c&&(0,h.jsx)(ge,{toggleSidebar:u})]})})})}const ke={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function _e(e){var t=e.hiddenSidebarContainer,n=e.children,a=(0,l.t)();return(0,h.jsx)("main",{className:(0,i.A)(ke.docMainContainer,(t||!a)&&ke.docMainContainerEnhanced),children:(0,h.jsx)("div",{className:(0,i.A)("container padding-top--md padding-bottom--lg",ke.docItemWrapper,t&&ke.docItemWrapperEnhanced),children:n})})}const Ne={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function Se(e){var t=e.children,n=(0,l.t)(),i=(0,a.useState)(!1),o=i[0],r=i[1];return(0,h.jsxs)("div",{className:Ne.docsWrapper,children:[(0,h.jsx)(p,{}),(0,h.jsxs)("div",{className:Ne.docRoot,children:[n&&(0,h.jsx)(Ce,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:r}),(0,h.jsx)(_e,{hiddenSidebarContainer:o,children:t})]})]})}var ye=n(3363);function Te(e){var t=(0,s.B5)(e);if(!t)return(0,h.jsx)(ye.A,{});var n=t.docElement,a=t.sidebarName,c=t.sidebarItems;return(0,h.jsx)(o.e3,{className:(0,i.A)(r.G.page.docsDocPage),children:(0,h.jsx)(l.V,{name:a,items:c,children:(0,h.jsx)(Se,{children:n})})})}},3363:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var a=n(4164),i=n(1312),o=n(1107),r=n(4848);function s(e){var t=e.className;return(0,r.jsx)("main",{className:(0,a.A)("container margin-vert--xl",t),children:(0,r.jsx)("div",{className:"row",children:(0,r.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,r.jsx)(o.A,{as:"h1",className:"hero__title",children:(0,r.jsx)(i.A,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,r.jsx)("p",{children:(0,r.jsx)(i.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,r.jsx)("p",{children:(0,r.jsx)(i.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}},1422:(e,t,n)=>{n.d(t,{N:()=>j,u:()=>m});var a=n(8587),i=n(6540),o=n(8193),r=n(205),s=n(3109),l=n(4848),c=["collapsed"],d=["lazy"],u="ease-in-out";function m(e){var t=e.initialState,n=(0,i.useState)(null!=t&&t),a=n[0],o=n[1],r=(0,i.useCallback)((function(){o((function(e){return!e}))}),[]);return{collapsed:a,setCollapsed:o,toggleCollapsed:r}}var h={display:"none",overflow:"hidden",height:"0px"},p={display:"block",overflow:"visible",height:"auto"};function b(e,t){var n=t?h:p;e.style.display=n.display,e.style.overflow=n.overflow,e.style.height=n.height}function v(e){var t=e.collapsibleRef,n=e.collapsed,a=e.animation,o=(0,i.useRef)(!1);(0,i.useEffect)((function(){var e,i=t.current;function r(){var e,t,n=i.scrollHeight,o=null!=(e=null==a?void 0:a.duration)?e:function(e){if((0,s.O)())return 1;var t=e/36;return Math.round(10*(4+15*Math.pow(t,.25)+t/5))}(n);return{transition:"height "+o+"ms "+(null!=(t=null==a?void 0:a.easing)?t:u),height:n+"px"}}function l(){var e=r();i.style.transition=e.transition,i.style.height=e.height}if(!o.current)return b(i,n),void(o.current=!0);return i.style.willChange="height",e=requestAnimationFrame((function(){n?(l(),requestAnimationFrame((function(){i.style.height=h.height,i.style.overflow=h.overflow}))):(i.style.display="block",requestAnimationFrame((function(){l()})))})),function(){return cancelAnimationFrame(e)}}),[t,n,a])}function f(e){if(!o.A.canUseDOM)return e?h:p}function x(e){var t=e.as,n=void 0===t?"div":t,a=e.collapsed,o=e.children,r=e.animation,s=e.onCollapseTransitionEnd,c=e.className,d=e.disableSSRStyle,u=(0,i.useRef)(null);return v({collapsibleRef:u,collapsed:a,animation:r}),(0,l.jsx)(n,{ref:u,style:d?void 0:f(a),onTransitionEnd:function(e){"height"===e.propertyName&&(b(u.current,a),null==s||s(a))},className:c,children:o})}function g(e){var t=e.collapsed,n=(0,a.A)(e,c),o=(0,i.useState)(!t),s=o[0],d=o[1],u=(0,i.useState)(t),m=u[0],h=u[1];return(0,r.A)((function(){t||d(!0)}),[t]),(0,r.A)((function(){s&&h(t)}),[s,t]),s?(0,l.jsx)(x,Object.assign({},n,{collapsed:m})):null}function j(e){var t=e.lazy,n=(0,a.A)(e,d),i=t?g:x;return(0,l.jsx)(i,Object.assign({},n))}},3109:(e,t,n)=>{function a(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}n.d(t,{O:()=>a})}}]);