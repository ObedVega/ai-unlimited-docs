"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[3296],{8583:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=s(4848),t=s(8453);const r={id:"release-notes",title:"Release notes",description:"See details about the paid public preview's initial launch.",sidebar_label:"Release notes",sidebar_position:8,pagination_prev:null,pagination_next:null},l="Release notes",a={id:"release-notes",title:"Release notes",description:"See details about the paid public preview's initial launch.",source:"@site/docs/release-notes.md",sourceDirName:".",slug:"/release-notes",permalink:"/ai-unlimited-docs/ka/docs/release-notes",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"release-notes",title:"Release notes",description:"See details about the paid public preview's initial launch.",sidebar_label:"Release notes",sidebar_position:8,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},o={},c=[];function d(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"release-notes",children:"Release notes"}),"\n",(0,i.jsx)(n.p,{children:"As we continue to enhance AI Unlimited, please be aware of known issues and features not currently supported."}),"\n",(0,i.jsxs)(n.p,{children:["For the latest features and updates, keep an eye on ",(0,i.jsx)(n.a,{href:"/docs/whats-new.md",children:"What's new"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:'(Separate into "Known issues" and "Not curently supported"?)'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Open Table Format (OTF)"})}),"\n",(0,i.jsx)(n.p,{children:"Update and Delete with predicates are not supported for OTF queries."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"User Defined Functions (UDF)"})}),"\n",(0,i.jsxs)(n.p,{children:["The first invocation of Java UDFs fails with this error: ",(0,i.jsx)(n.code,{children:"Failure 7583 The secure mode processes had a set up error"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Unbounded Array Framework (UAF)"})}),"\n",(0,i.jsx)(n.p,{children:"UAF functions are not supported in SQL and teradataml."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"teradataml"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"UAF functions fail to run if the database name has special characters, such as hyphen (-)."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Some SQLE and UAF functions fail to run due to issues with volatile table creation. The framework creates a volatile table if the keyword argument ",(0,i.jsx)(n.code,{children:"Volatile"})," is set to ",(0,i.jsx)(n.strong,{children:"True"}),". However, volatile tables can not be created on other schemas."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The following functions are not supported:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"automl"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"openml"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"map_row"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"map_partition"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"H2OPredict"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"ONNXPredict"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"API_Request UDF"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Vantage Analytic Library (VAL)"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>a});var i=s(6540);const t={},r=i.createContext(t);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);