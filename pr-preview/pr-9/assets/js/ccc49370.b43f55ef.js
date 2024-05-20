"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[3249],{73858:(e,n,t)=>{t.r(n),t.d(n,{default:()=>j});t(96540);var a=t(34164),i=t(45500),r=t(17559),o=t(7131),l=t(26535),s=t(24651),c=t(21312),d=t(39022),u=t(74848);function m(e){var n=e.nextItem,t=e.prevItem;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,u.jsx)(d.A,Object.assign({},t,{subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})})),n&&(0,u.jsx)(d.A,Object.assign({},n,{subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0}))]})}function g(){var e,n=(0,o.e)(),t=n.assets,a=n.metadata,r=a.title,l=a.description,s=a.date,c=a.tags,d=a.authors,m=a.frontMatter,g=m.keywords,v=null!=(e=t.image)?e:m.image;return(0,u.jsxs)(i.be,{title:r,description:l,keywords:g,image:v,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:s}),d.some((function(e){return e.url}))&&(0,u.jsx)("meta",{property:"article:author",content:d.map((function(e){return e.url})).filter(Boolean).join(",")}),c.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:c.map((function(e){return e.label})).join(",")})]})}var v=t(5260),f=t(6676);function p(){var e=(0,f.J)();return(0,u.jsx)(v.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var h=t(67763),x=t(50996);function b(e){var n=e.sidebar,t=e.children,a=(0,o.e)(),i=a.metadata,r=a.toc,c=i.nextItem,d=i.prevItem,g=i.frontMatter,v=i.unlisted,f=g.hide_table_of_contents,p=g.toc_min_heading_level,b=g.toc_max_heading_level;return(0,u.jsxs)(l.A,{sidebar:n,toc:!f&&r.length>0?(0,u.jsx)(h.A,{toc:r,minHeadingLevel:p,maxHeadingLevel:b}):void 0,children:[v&&(0,u.jsx)(x.A,{}),(0,u.jsx)(s.A,{children:t}),(c||d)&&(0,u.jsx)(m,{nextItem:c,prevItem:d})]})}function j(e){var n=e.content;return(0,u.jsx)(o.i,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(i.e3,{className:(0,a.A)(r.G.wrapper.blogPages,r.G.page.blogPostPage),children:[(0,u.jsx)(g,{}),(0,u.jsx)(p,{}),(0,u.jsx)(b,{sidebar:e.sidebar,children:(0,u.jsx)(n,{})})]})})}},67763:(e,n,t)=>{t.d(n,{A:()=>u});var a=t(98587),i=(t(96540),t(34164)),r=t(65195);const o={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=t(74848),s=["className"],c="table-of-contents__link toc-highlight",d="table-of-contents__link--active";function u(e){var n=e.className,t=(0,a.A)(e,s);return(0,l.jsx)("div",{className:(0,i.A)(o.tableOfContents,"thin-scrollbar",n),children:(0,l.jsx)(r.A,Object.assign({},t,{linkClassName:c,linkActiveClassName:d}))})}},65195:(e,n,t)=>{t.d(n,{A:()=>x});var a=t(98587),i=t(96540),r=t(6342),o=["parentIndex"];function l(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var a=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),t[e.level]=n}));var i=[];return n.forEach((function(e){var t=e.parentIndex,r=(0,a.A)(e,o);t>=0?n[t].children.push(r):i.push(r)})),i}function s(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return n.flatMap((function(e){var n=s({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[Object.assign({},e,{children:n})]:n}))}function c(e){var n=e.getBoundingClientRect();return n.top===n.bottom?c(e.parentNode):n}function d(e,n){var t,a,i=n.anchorTopOffset,r=e.find((function(e){return c(e).top>=i}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(r))?r:null!=(a=e[e.indexOf(r)-1])?a:null:null!=(t=e[e.length-1])?t:null}function u(){var e=(0,i.useRef)(0),n=(0,r.p)().navbar.hideOnScroll;return(0,i.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function m(e){var n=(0,i.useRef)(void 0),t=u();(0,i.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,i=e.linkActiveClassName,r=e.minHeadingLevel,o=e.maxHeadingLevel;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,a=[],i=n;i<=t;i+=1)a.push("h"+i+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),s=d(l,{anchorTopOffset:t.current}),c=e.find((function(e){return s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var g=t(28774),v=t(74848);function f(e){var n=e.toc,t=e.className,a=e.linkClassName,i=e.isChild;return n.length?(0,v.jsx)("ul",{className:i?void 0:t,children:n.map((function(e){return(0,v.jsxs)("li",{children:[(0,v.jsx)(g.A,{to:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,v.jsx)(f,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)}))}):null}const p=i.memo(f);var h=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function x(e){var n=e.toc,t=e.className,o=void 0===t?"table-of-contents table-of-contents__left-border":t,c=e.linkClassName,d=void 0===c?"table-of-contents__link":c,u=e.linkActiveClassName,g=void 0===u?void 0:u,f=e.minHeadingLevel,x=e.maxHeadingLevel,b=(0,a.A)(e,h),j=(0,r.p)(),A=null!=f?f:j.tableOfContents.minHeadingLevel,L=null!=x?x:j.tableOfContents.maxHeadingLevel,N=function(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,i.useMemo)((function(){return s({toc:l(n),minHeadingLevel:t,maxHeadingLevel:a})}),[n,t,a])}({toc:n,minHeadingLevel:A,maxHeadingLevel:L});return m((0,i.useMemo)((function(){if(d&&g)return{linkClassName:d,linkActiveClassName:g,minHeadingLevel:A,maxHeadingLevel:L}}),[d,g,A,L])),(0,v.jsx)(p,Object.assign({toc:N,className:o,linkClassName:d},b))}},50996:(e,n,t)=>{t.d(n,{A:()=>g});t(96540);var a=t(34164),i=t(21312),r=t(5260),o=t(74848);function l(){return(0,o.jsx)(i.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function s(){return(0,o.jsx)(i.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,o.jsx)(r.A,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(17559),u=t(78217);function m(e){var n=e.className;return(0,o.jsx)(u.A,{type:"caution",title:(0,o.jsx)(l,{}),className:(0,a.A)(n,d.G.common.unlistedBanner),children:(0,o.jsx)(s,{})})}function g(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{}),(0,o.jsx)(m,Object.assign({},e))]})}},6676:(e,n,t)=>{t.d(n,{k:()=>d,J:()=>u});var a=t(86025),i=t(44586),r=t(36803);var o=t(7131),l=function(e){return new Date(e).toISOString()};function s(e){var n=e.map(m);return{author:1===n.length?n[0]:n}}function c(e,n,t){return e?{image:(a={imageUrl:n(e,{absolute:!0}),caption:"title image for the blog post: "+t},i=a.imageUrl,r=a.caption,{"@type":"ImageObject","@id":i,url:i,contentUrl:i,caption:r})}:{};var a,i,r}function d(e){var n=(0,i.A)().siteConfig,t=(0,a.h)().withBaseUrl,r=e.metadata,o=r.blogDescription,d=r.blogTitle,u=r.permalink,m=""+n.url+u;return{"@context":"https://schema.org","@type":"Blog","@id":m,mainEntityOfPage:m,headline:d,description:o,blogPost:e.items.map((function(e){return function(e,n,t){var a,i,r=e.assets,o=e.frontMatter,d=e.metadata,u=d.date,m=d.title,g=d.description,v=d.lastUpdatedAt,f=null!=(a=r.image)?a:o.image,p=null!=(i=o.keywords)?i:[],h=""+n.url+d.permalink,x=v?l(v):void 0;return Object.assign({"@type":"BlogPosting","@id":h,mainEntityOfPage:h,url:h,headline:m,name:m,description:g,datePublished:u},x?{dateModified:x}:{},s(d.authors),c(f,t,m),p?{keywords:p}:{})}(e.content,n,t)}))}}function u(){var e,n,t=function(){var e,n=(0,r.A)(),t=null==n||null==(e=n.data)?void 0:e.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),d=(0,o.e)(),u=d.assets,m=d.metadata,g=(0,i.A)().siteConfig,v=(0,a.h)().withBaseUrl,f=m.date,p=m.title,h=m.description,x=m.frontMatter,b=m.lastUpdatedAt,j=null!=(e=u.image)?e:x.image,A=null!=(n=x.keywords)?n:[],L=b?l(b):void 0,N=""+g.url+m.permalink;return Object.assign({"@context":"https://schema.org","@type":"BlogPosting","@id":N,mainEntityOfPage:N,url:N,headline:p,name:p,description:h,datePublished:f},L?{dateModified:L}:{},s(m.authors),c(j,v,p),A?{keywords:A}:{},{isPartOf:{"@type":"Blog","@id":""+g.url+t.blogBasePath,name:t.blogTitle}})}function m(e){return Object.assign({"@type":"Person"},e.name?{name:e.name}:{},e.title?{description:e.title}:{},e.url?{url:e.url}:{},e.email?{email:e.email}:{},e.imageURL?{image:e.imageURL}:{})}},14717:(e,n,t)=>{t.d(n,{A:()=>d});t(96540);var a=t(34164),i=t(17559);const r={admonition:"admonition_Gfwi",admonitionHeading:"admonitionHeading_f1Ed",admonitionIcon:"admonitionIcon_kpSf",admonitionContentWrapper:"admonitionContentWrapper_oDLF",admonitionContent:"admonitionContent_UjKb",admonitionWrapper:"admonitionWrapper_Mm55"};var o=t(74848);function l(e){var n=e.type,t=e.className,l=e.children;return(0,o.jsx)("div",{className:(0,a.A)(i.G.common.admonition,i.G.common.admonitionType(n),r.admonition,t),children:l})}function s(e){var n=e.icon,t=e.title;return(0,o.jsxs)("div",{className:r.admonitionHeading,children:[n&&(0,o.jsx)("span",{className:r.admonitionIcon,children:n}),t]})}function c(e){var n=e.children;return n?(0,o.jsx)("div",{className:r.admonitionContent,children:n}):null}function d(e){var n=e.type,t=e.icon,i=e.title,d=e.children,u=e.className;return(0,o.jsxs)(l,{type:n,className:(0,a.A)(u,r.admonitionWrapper),children:[(0,o.jsx)("span",{className:r.admonitionIcon,children:t}),(0,o.jsxs)("span",{className:r.admonitionContentWrapper,children:[(0,o.jsx)(s,{title:i}),(0,o.jsx)(c,{children:d})]})]})}},26334:(e,n,t)=>{t.d(n,{A:()=>u});var a=t(98587),i=t(96540),r=t(92303),o=t(6342),l=t(34291),s=t(78478),c=t(74848),d=["children"];function u(e){var n,u,m=e.children,g=(0,a.A)(e,d),v=g.className,f=void 0===v?"":v,p=g.metastring,h=g.title,x=g.language,b=(0,r.A)(),j=(u=m,i.Children.toArray(u).some((function(e){return(0,i.isValidElement)(e)}))?u:Array.isArray(u)?u.join(""):u),A=(0,o.p)().prism.defaultLanguage,L=function(e){return null==e?void 0:e.toLowerCase()}(null!=(n=null!=x?x:(0,l.Op)(f))?n:A),N=(0,l.wt)(p)||h;return(0,c.jsx)(s.A,{children:function(){var e=t(34727).z7;return(0,c.jsx)(e,{label:N,maxHeight:0,language:L||"text",content:j,hideHeader:!N},b)}})}}}]);