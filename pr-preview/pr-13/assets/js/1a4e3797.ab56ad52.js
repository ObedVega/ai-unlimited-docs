"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[2138],{5787:(e,a,s)=>{s.r(a),s.d(a,{default:()=>w});var r=s(6540),t=s(4164),n=s(4103),l=s.n(n),c=s(3643),i=s.n(c),u=s(8193),o=s(5260),h=s(8774),d=s(4070),m=s(3465),g=s(4255),p=s(3807),f=s(5500),v=s(481),j=s(1312),y=s(4586),x=s(8126),b=s(1062),R=s(2388),_=s(1107);const P={searchBarWrapper:"searchBarWrapper_gqUr",searchQueryInput:"searchQueryInput_cpyO",searchVersionInput:"searchVersionInput_wf2r",searchResultsColumn:"searchResultsColumn_PLpb",searchQueryColumn:"searchQueryColumn_hQFc",algoliaLogo:"algoliaLogo_YElR",algoliaLogoPathFill:"algoliaLogoPathFill_grp5",searchResultItem:"searchResultItem_AlWU",searchResultItemHeading:"searchResultItemHeading_HJFH",searchResultItemPath:"searchResultItemPath_x9Ef",searchResultItemSummary:"searchResultItemSummary_jej3",card:"card_adw1",searchVersionColumn:"searchVersionColumn_GkmC",searchLogoColumn:"searchLogoColumn_Mj_0",loadingSpinner:"loadingSpinner_E_zt","loading-spin":"loading-spin_hlTL",loader:"loader_ujSQ"};var N=s(4848);function S(e){var a=e.docsSearchVersionsHelpers,s=Object.entries(a.allDocsData).filter((function(e){return e[1].versions.length>1}));return(0,N.jsx)("div",{className:(0,t.A)("col","col--3","padding-left--none",P.searchVersionColumn),children:s.map((function(e){var r=e[0],t=e[1],n=s.length>1?r+": ":"";return(0,N.jsx)("select",{onChange:function(e){return a.setSearchVersion(r,e.target.value)},defaultValue:a.searchVersions[r],className:P.searchVersionInput,children:t.versions.map((function(e,a){return(0,N.jsx)("option",{label:""+n+e.label,value:e.name},a)}))},r)}))})}function I(){var e,a,s,n,c,f,I=(0,y.A)().i18n.currentLocale,w=(0,x.c)().algolia,C=w.appId,T=w.apiKey,A=w.indexName,V=(0,b.C)(),O=(e=(0,m.W)().selectMessage,function(a){return e(a,(0,j.T)({id:"theme.SearchPage.documentsFound.plurals",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"1 Result|{count} Results"},{count:a}))}),L=(a=(0,d.Gy)(),s=(0,r.useState)((function(){return Object.entries(a).reduce((function(e,a){var s,r=a[0],t=a[1];return Object.assign({},e,((s={})[r]=t.versions[0].name,s))}),{})})),n=s[0],c=s[1],f=Object.values(a).some((function(e){return e.versions.length>1})),{allDocsData:a,versioningEnabled:f,searchVersions:n,setSearchVersion:function(e,a){return c((function(s){var r;return Object.assign({},s,((r={})[e]=a,r))}))}}),q=(0,g.b)(),F=q[0],H=q[1],E={items:[],query:null,totalResults:null,totalPages:null,lastPage:null,hasMore:null,loading:null},Q=(0,r.useReducer)((function(e,a){switch(a.type){case"reset":return E;case"loading":return Object.assign({},e,{loading:!0});case"update":return F!==a.value.query?e:Object.assign({},a.value,{items:0===a.value.lastPage?a.value.items:e.items.concat(a.value.items)});case"advance":var s=e.totalPages>e.lastPage+1;return Object.assign({},e,{lastPage:s?e.lastPage+1:e.lastPage,hasMore:s});default:return e}}),E),D=Q[0],M=Q[1],k=i()(C,T),W=l()(k,A,{hitsPerPage:15,advancedSyntax:!0,disjunctiveFacets:["language","docusaurus_tag"]});W.on("result",(function(e){var a=e.results,s=a.query,r=a.hits,t=a.page,n=a.nbHits,l=a.nbPages;if(""!==s&&Array.isArray(r)){var c=function(e){return e.replace(/algolia-docsearch-suggestion--highlight/g,"search-result-match")},i=r.map((function(e){var a=e.url,s=e._highlightResult.hierarchy,r=e._snippetResult,t=void 0===r?{}:r,n=Object.keys(s).map((function(e){return c(s[e].value)}));return{title:n.pop(),url:V(a),summary:t.content?c(t.content.value)+"...":"",breadcrumbs:n}}));M({type:"update",value:{items:i,query:s,totalResults:n,totalPages:l,lastPage:t,hasMore:l>t+1,loading:!1}})}else M({type:"reset"})}));var B=(0,r.useState)(null),U=B[0],z=B[1],G=(0,r.useRef)(0),J=(0,r.useRef)(u.A.canUseIntersectionObserver&&new IntersectionObserver((function(e){var a=e[0],s=a.isIntersecting,r=a.boundingClientRect.y;s&&G.current>r&&M({type:"advance"}),G.current=r}),{threshold:1})),K=(0,p._q)((function(e){void 0===e&&(e=0),W.addDisjunctiveFacetRefinement("docusaurus_tag","default"),W.addDisjunctiveFacetRefinement("language",I),Object.entries(L.searchVersions).forEach((function(e){var a=e[0],s=e[1];W.addDisjunctiveFacetRefinement("docusaurus_tag","docs-"+a+"-"+s)})),W.setQuery(F).setPage(e).search()}));return(0,r.useEffect)((function(){if(U){var e=J.current;return e?(e.observe(U),function(){return e.unobserve(U)}):function(){return!0}}}),[U]),(0,r.useEffect)((function(){M({type:"reset"}),F&&(M({type:"loading"}),setTimeout((function(){K()}),300))}),[F,L.searchVersions,K]),(0,r.useEffect)((function(){D.lastPage&&0!==D.lastPage&&K(D.lastPage)}),[K,D.lastPage]),(0,N.jsxs)(R.A,{children:[(0,N.jsxs)(o.A,{children:[(0,N.jsx)("title",{children:(0,v.s)(F?(0,j.T)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:F}):(0,j.T)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"}))}),(0,N.jsx)("meta",{property:"robots",content:"noindex, follow"})]}),(0,N.jsx)("div",{className:P.searchBarWrapper,children:(0,N.jsx)("form",{className:"container "+P.searchBar,onSubmit:function(e){return e.preventDefault()},children:(0,N.jsxs)("div",{className:"row",children:[(0,N.jsx)("div",{className:"col col--2"}),(0,N.jsxs)("div",{className:(0,t.A)("col","col--8",P.searchQueryColumn),children:[(0,N.jsx)("i",{"data-v-8fa474e2":"",className:"material-symbols-outlined","aria-hidden":"true",children:"search"}),(0,N.jsx)("input",{type:"search",name:"q",className:P.searchQueryInput,placeholder:(0,j.T)({id:"theme.SearchPage.inputPlaceholder",message:"Search Teradata...",description:"The placeholder for search page input"}),"aria-label":(0,j.T)({id:"theme.SearchPage.inputLabel",message:"Search",description:"The ARIA label for search page input"}),onChange:function(e){return H(e.target.value)},value:F,autoComplete:"off",autoFocus:!0})]}),L.versioningEnabled&&(0,N.jsx)(S,{docsSearchVersionsHelpers:L})]})})}),(0,N.jsxs)("div",{className:"container margin-bottom--lg",children:[(0,N.jsxs)("div",{className:"row",children:[(0,N.jsx)("div",{className:"col col--2"}),(0,N.jsx)("div",{className:(0,t.A)("col","col--8",P.searchResultsColumn),children:!!D.totalResults&&O(D.totalResults)}),(0,N.jsx)("div",{className:"col col--2"})]}),D.items.length>0?(0,N.jsx)("main",{children:D.items.map((function(e,a){var s=e.title,r=e.url,n=e.summary;e.breadcrumbs;return(0,N.jsxs)("div",{className:"row",children:[(0,N.jsx)("div",{className:"col col--2"}),(0,N.jsx)(h.A,{className:P.card,to:r,children:(0,N.jsxs)("article",{className:(0,t.A)("col","col--8","doc-card",P.searchResultItem),children:[(0,N.jsx)(_.A,{as:"h2",className:P.searchResultItemHeading,dangerouslySetInnerHTML:{__html:s}}),n&&(0,N.jsx)("p",{className:P.searchResultItemSummary,dangerouslySetInnerHTML:{__html:n}})]})}),(0,N.jsx)("div",{className:"col col--2"})]},a)}))}):[F&&!D.loading&&(0,N.jsxs)("div",{className:"row",children:[(0,N.jsx)("div",{className:"col col--2"}),(0,N.jsx)("p",{className:"col col--8",children:(0,N.jsx)(j.A,{id:"theme.SearchPage.noResultsText",description:"The paragraph for empty search result",children:"No results were found"})})]},"no-results"),!!D.loading&&(0,N.jsx)("div",{className:P.loadingSpinner},"spinner")],D.hasMore&&(0,N.jsx)("div",{className:P.loader,ref:z,children:(0,N.jsx)(j.A,{id:"theme.SearchPage.fetchingNewResults",description:"The paragraph for fetching new search results",children:"Fetching new results..."})})]})]})}function w(){return(0,N.jsx)(f.e3,{className:"search-page-wrapper",children:(0,N.jsx)(I,{})})}}}]);