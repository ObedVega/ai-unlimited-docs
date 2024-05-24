"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[3831],{6021:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=a(4848),t=a(8453),s=a(6240),l=a(9365);const i={id:"create-first-project",title:"Create your first project",description:"Learn how to use AI Unlimited by running a simple workflow in a Jupyter notebook.",sidebar_label:"\u6700\u521d\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b",sidebar_position:2},o="\u6700\u521d\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b",c={id:"explore-and-analyze-data/create-first-project",title:"Create your first project",description:"Learn how to use AI Unlimited by running a simple workflow in a Jupyter notebook.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/explore-and-analyze-data/create-first-project.md",sourceDirName:"explore-and-analyze-data",slug:"/explore-and-analyze-data/create-first-project",permalink:"/ai-unlimited-docs/ja/docs/explore-and-analyze-data/create-first-project",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"create-first-project",title:"Create your first project",description:"Learn how to use AI Unlimited by running a simple workflow in a Jupyter notebook.",sidebar_label:"\u6700\u521d\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Get your API key",permalink:"/ai-unlimited-docs/ja/docs/explore-and-analyze-data/get-api-key"},next:{title:"Collaborate on a project",permalink:"/ai-unlimited-docs/ja/docs/explore-and-analyze-data/collaborate-project"}},d={},u=[{value:"Before you begin",id:"before-you-begin",level:2},{value:"Run your first workload",id:"run-your-first-workload",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u6700\u521d\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b",children:"\u6700\u521d\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"topic is not yet edited"})})}),"\n",(0,r.jsx)(n.p,{children:"This document walks you through a simple workflow where you can use AI Unlimited and JupyterLab to:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Deploy on-demand, scalable compute"}),"\n",(0,r.jsx)(n.li,{children:"Connect to your external data source"}),"\n",(0,r.jsx)(n.li,{children:"Run the workload"}),"\n",(0,r.jsx)(n.li,{children:"Suspend the compute"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,r.jsx)(n.p,{children:"Copy and retain these items:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The API key from the AI Unlimited. ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"link to the separate topic"})})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["CSP environment variables from your Console. See ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/sdkref/latest/guide/environment-variables.html",children:"Environment Variables"}),"."]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsxs)(l.A,{value:"aws",label:"AWS",default:!0,children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"AWS_ACCESS_KEY_ID"}),", ",(0,r.jsx)(n.code,{children:"AWS_SECRET_ACCESS_KEY"}),", and ",(0,r.jsx)(n.code,{children:"AWS_SESSION_TOKEN"})]}),(0,r.jsxs)(n.p,{children:["Learn about AWS ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/sdkref/latest/guide/environment-variables.html",children:"environment variables"}),"."]})]}),(0,r.jsxs)(l.A,{value:"azure",label:"Azure",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ARM_SUBSCRIPTION_ID"}),", ",(0,r.jsx)(n.code,{children:"ARM_CLIENT_ID"}),", and ",(0,r.jsx)(n.code,{children:"ARM_CLIENT_SECRET"})]}),(0,r.jsxs)(n.p,{children:["Learn about Azure ",(0,r.jsx)(n.a,{href:"https://github.com/paulbouwer/terraform-azure-quickstarts-samples/blob/master/README.md#azure-authentication",children:"environment variables"}),"."]})]})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"run-your-first-workload",children:"Run your first workload"}),"\n",(0,r.jsxs)(n.p,{children:["Run ",(0,r.jsx)(n.code,{children:"%help"})," or ",(0,r.jsx)(n.code,{children:"%help <command>"})," for details on any magic command. See ",(0,r.jsx)(n.a,{href:"/docs/explore-and-analyze-data/magic-commands.md",children:"Magic commands"})," for more details."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Connect to JupyterLab using ",(0,r.jsx)(n.code,{children:"http://localhost:8888"})," and enter the token when prompted."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Connect to AI Unlimited using the API Key."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"%workspaces_config host=<ip_or_hostname>, apikey=<API_Key>, withtls=F\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.p,{children:"Depending on the installation type, the host value may vary."}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For Docker Compose: ",(0,r.jsx)(n.a,{href:"http://ai-unlimited:3282",children:"http://ai-unlimited:3282"})]}),"\n",(0,r.jsxs)(n.li,{children:["For a single container with an external client: ",(0,r.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"})]}),"\n",(0,r.jsx)(n.li,{children:"For cloud deployments: Content to be filled"}),"\n"]})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create a new project."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Currently, Teradata AI Unlimited supports AWS and Azure."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"%project_create project=<Project_Name>, env=<CSP>, team=<Project_Team>\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"[Optional]"})})," Create an authorization object to store the CSP credentials.\nReplace ",(0,r.jsx)(n.code,{children:"ACCESS_KEY_ID"}),", ",(0,r.jsx)(n.code,{children:"SECRET_ACCESS_KEY"}),", and ",(0,r.jsx)(n.code,{children:"REGION"})," with your values."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"%project_auth_create name=<Auth_Name>, project=<Project_Name>, key=<ACCESS_KEY_ID>, secret=<SECRET_ACCESS_KEy>, region=<REGION>\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Deploy an engine for the project."}),"\n",(0,r.jsxs)(n.p,{children:["Replace the ",(0,r.jsx)(n.code,{children:"Project_Name"})," to a name of your choice. The size parameter value can be small, medium, large, or extralarge. The default size is small."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"%project_engine_deploy name=<Project_Name>, size=<Size_of_Engine>\n"})}),"\n",(0,r.jsx)(n.p,{children:"The deployment process takes a few minutes to complete. On successful deployment, a password is generated."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Establish a connection to your project."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"%connect <Project_Name>\n"})}),"\n",(0,r.jsx)(n.p,{children:"When a connection is established, the interface prompts you for a password. Enter the password generated in the previous step."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the sample workload."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Make sure that you do not have tables named SalesCenter or SalesDemo in the selected database."})}),"\n",(0,r.jsx)(n.p,{children:"a. Create a table to store the sales center data."}),"\n",(0,r.jsx)(n.p,{children:"First, drop the table if it already exists. The command fails if the table does not exist."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"DROP TABLE SalesCenter;\nCREATE MULTISET TABLE SalesCenter ,NO FALLBACK ,\n     NO BEFORE JOURNAL,\n     NO AFTER JOURNAL,\n     CHECKSUM = DEFAULT,\n     DEFAULT MERGEBLOCKRATIO\n     (\n      Sales_Center_id INTEGER NOT NULL,\n      Sales_Center_Name VARCHAR(255) CHARACTER SET LATIN NOT CASESPECIFIC)\nNO PRIMARY INDEX ;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["b. Load data into the SalesCenter table using the ",(0,r.jsx)(n.code,{children:"%dataload"})," magic command."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"%dataload DATABASE=<roject_Name>, TABLE=SalesCenter, FILEPATH=notebooks/sql/data/salescenter.csv\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Unable to locate the salescenter.csv file? Download the file from ",(0,r.jsx)(n.a,{href:"https://github.com/Teradata/jupyter-demos/tree/main/Getting_Started/Charting_and_Visualization/data",children:"GitHub Demo: Charting and Visualization Data"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"Verify that the data was inserted."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SalesCenter ORDER BY 1\n"})}),"\n",(0,r.jsx)(n.p,{children:"c. Create a table with the sales demo data."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"DROP TABLE SalesDemo;\nCREATE MULTISET TABLE SalesDemo ,NO FALLBACK ,\n     NO BEFORE JOURNAL,\n     NO AFTER JOURNAL,\n     CHECKSUM = DEFAULT,\n     DEFAULT MERGEBLOCKRATIO\n     (\n      Sales_Center_ID INTEGER NOT NULL,\n      UNITS DECIMAL(15,4),\n      SALES DECIMAL(15,2),\n      COST DECIMAL(15,2))\nNO PRIMARY INDEX ;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["d. Load data into the SalesDemo table using the ",(0,r.jsx)(n.code,{children:"%dataload"})," magic command."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"%dataload DATABASE=`Project_Name`, TABLE=SalesDemo, FILEPATH=notebooks/sql/data/salesdemo.csv\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Unable to locate the salesdemo.csv file? Download the file from ",(0,r.jsx)(n.a,{href:"https://github.com/Teradata/jupyter-demos/tree/main/Getting_Started/Charting_and_Visualization/data",children:"GitHub Demo: Charting and Visualization Data"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"Verify that the sales demo data was inserted successfully."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SalesDemo ORDER BY sales\n"})}),"\n",(0,r.jsx)(n.p,{children:"Open the Navigator for your connection and verify that the tables were created. Run a row count on the tables to verify that the data was loaded.\ne. Use charting magic to visualize the result.\nProvide X and Y axes for your chart."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"%chart sales_center_name, sales, title=Sales Data\n"})}),"\n",(0,r.jsx)(n.p,{children:"f.\tDrop the tables."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"DROP TABLE SalesCenter;\nDROP TABLE SalesDemo;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Back up your project metadata and object definitions in your GitHub repository."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"%project_backup project=<Project_Name>\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Suspend the engine."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"%project_engine_suspend project=<Project_Name>\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Congrats! You've successfully run your first use case in JupyterLab."})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,n,a)=>{a.d(n,{A:()=>l});a(6540);var r=a(4164);const t={tabItem:"tabItem_Ymn6"};var s=a(4848);function l(e){var n=e.children,a=e.hidden,l=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,l),hidden:a,children:n})}},6240:(e,n,a)=>{a.d(n,{A:()=>y});var r=a(6540),t=a(4164),s=a(3104),l=a(6347),i=a(205),o=a(7485);var c=a(9466);function d(e){var n,a;return null!=(n=null==(a=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?n:[]}function u(e){var n=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(a);return function(e){var n,a,r=(void 0===(a=function(e,n){return e.value===n.value})&&(a=function(e,n){return e===n}),(n=e).filter((function(e,r){return n.findIndex((function(n){return a(n,e)}))!==r})));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,a])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,a=void 0!==n&&n,t=e.groupId,s=(0,l.W6)(),i=function(e){var n=e.queryString,a=void 0!==n&&n,r=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:a,groupId:t});return[(0,o.aZ)(i),(0,r.useCallback)((function(e){if(i){var n=new URLSearchParams(s.location.search);n.set(i,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[i,s])]}function m(e){var n,a,t,s,l=e.defaultValue,o=e.queryString,d=void 0!==o&&o,m=e.groupId,j=u(e),x=(0,r.useState)((function(){return function(e){var n,a=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var t=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:l,tabValues:j})})),f=x[0],b=x[1],g=p({queryString:d,groupId:m}),v=g[0],y=g[1],E=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:m}.groupId),a=(0,c.Dv)(n),t=a[0],s=a[1],[t,(0,r.useCallback)((function(e){n&&s.set(e)}),[n,s])]),A=E[0],C=E[1],S=function(){var e=null!=v?v:A;return h({value:e,tabValues:j})?e:null}();return(0,i.A)((function(){S&&b(S)}),[S]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!h({value:e,tabValues:j}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),C(e)}),[y,C,j]),tabValues:j}}var j=a(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=a(4848);function b(e){var n=e.className,a=e.block,r=e.selectedValue,l=e.selectValue,i=e.tabValues,o=[],c=(0,s.a_)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,a=o.indexOf(n),t=i[a].value;t!==r&&(c(n),l(t))},u=function(e){var n,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,t=o.indexOf(e.currentTarget)+1;a=null!=(r=o[t])?r:o[0];break;case"ArrowLeft":var s,l=o.indexOf(e.currentTarget)-1;a=null!=(s=o[l])?s:o[o.length-1]}null==(n=a)||n.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":a},n),children:i.map((function(e){var n=e.value,a=e.label,s=e.attributes;return(0,f.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return o.push(e)},onKeyDown:u,onClick:d},s,{className:(0,t.A)("tabs__item",x.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===n}),children:null!=a?a:n}),n)}))})}function g(e){var n=e.lazy,a=e.children,t=e.selectedValue,s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){var l=s.find((function(e){return e.props.value===t}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})}))})}function v(e){var n=m(e);return(0,f.jsxs)("div",{className:(0,t.A)("tabs-container",x.tabList),children:[(0,f.jsx)(b,Object.assign({},e,n)),(0,f.jsx)(g,Object.assign({},e,n))]})}function y(e){var n=(0,j.A)();return(0,f.jsx)(v,Object.assign({},e,{children:d(e.children)}),String(n))}},8453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>i});var r=a(6540);const t={},s=r.createContext(t);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);