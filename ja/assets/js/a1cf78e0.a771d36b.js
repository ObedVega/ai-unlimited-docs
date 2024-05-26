"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[9188],{5842:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=i(4848),r=i(8453);const a={id:"glossary",title:"Glossary",description:"Terminology for the installation and use of AI Unlimited.",sidebar_label:"\u7528\u8a9e\u96c6",sidebar_position:6},s="\u7528\u8a9e\u96c6",l={id:"glossary",title:"Glossary",description:"Terminology for the installation and use of AI Unlimited.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/ai-unlimited-docs/ja/docs/glossary",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"glossary",title:"Glossary",description:"Terminology for the installation and use of AI Unlimited.",sidebar_label:"\u7528\u8a9e\u96c6",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Release notes",permalink:"/ai-unlimited-docs/ja/docs/whats-new/release-notes"}},o={},d=[{value:"A",id:"a",level:2},{value:"application load balancer",id:"application-load-balancer",level:3},{value:"term",id:"term",level:3},{value:"B",id:"b",level:2},{value:"term",id:"term-1",level:3},{value:"term",id:"term-2",level:3},{value:"C",id:"c",level:2},{value:"Classless Inter-Domain Routing (CIDR)",id:"classless-inter-domain-routing-cidr",level:3},{value:"cloud service provider (CSP)",id:"cloud-service-provider-csp",level:3},{value:"cluster",id:"cluster",level:3},{value:"D",id:"d",level:2},{value:"term",id:"term-3",level:3},{value:"term",id:"term-4",level:3},{value:"I",id:"i",level:2},{value:"IAM role",id:"iam-role",level:3},{value:"term",id:"term-5",level:3},{value:"L",id:"l",level:2},{value:"load balancer",id:"load-balancer",level:3},{value:"M",id:"m",level:2},{value:"mounting volumes",id:"mounting-volumes",level:3},{value:"term",id:"term-6",level:3},{value:"N",id:"n",level:2},{value:"network load balancer",id:"network-load-balancer",level:3},{value:"O",id:"o",level:2},{value:"OAuth app",id:"oauth-app",level:3},{value:"term",id:"term-7",level:3},{value:"S",id:"s",level:2},{value:"systemd",id:"systemd",level:3},{value:"term",id:"term-8",level:3},{value:"T",id:"t",level:2},{value:"Transport Layer Security (TLS)",id:"transport-layer-security-tls",level:3},{value:"term",id:"term-9",level:3}];function c(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u7528\u8a9e\u96c6",children:"\u7528\u8a9e\u96c6"}),"\n",(0,t.jsx)(n.h2,{id:"a",children:"A"}),"\n",(0,t.jsx)("a",{id:"glo-application-load-balancer"}),"\n",(0,t.jsx)(n.h3,{id:"application-load-balancer",children:"application load balancer"}),"\n",(0,t.jsx)(n.p,{children:"Load balancers distribute incoming traffic across servers. An application load balancer inspects incoming traffic content, such as HTTP headers and paths, to make routing decisions. You can use an application load balancer as a way to expose AI Unlimited and its engine to the public IP network."}),"\n",(0,t.jsx)(n.h3,{id:"term",children:"term"}),"\n",(0,t.jsx)(n.p,{children:"Definition"}),"\n",(0,t.jsx)(n.h2,{id:"b",children:"B"}),"\n",(0,t.jsx)(n.h3,{id:"term-1",children:"term"}),"\n",(0,t.jsx)(n.p,{children:"Definition"}),"\n",(0,t.jsx)(n.h3,{id:"term-2",children:"term"}),"\n",(0,t.jsx)(n.p,{children:"Definition"}),"\n",(0,t.jsx)(n.h2,{id:"c",children:"C"}),"\n",(0,t.jsx)("a",{id:"glo-cidr"}),"\n",(0,t.jsx)(n.h3,{id:"classless-inter-domain-routing-cidr",children:"Classless Inter-Domain Routing (CIDR)"}),"\n",(0,t.jsx)(n.p,{children:"An IP address allocation method that improves data routing efficiency on the internet. Every computer that connects to the internet has a unique number called an IP address. IP addresses enable computers find each other and communicate."}),"\n",(0,t.jsx)("a",{id:"glo-csp"}),"\n",(0,t.jsx)(n.h3,{id:"cloud-service-provider-csp",children:"cloud service provider (CSP)"}),"\n",(0,t.jsxs)(n.p,{children:["A company that delivers computing resources over the internet, on demand. These resources can include Infrastructure as a Service, Platform as a Service, or Software as a Service. The AI Unlimited engine is deployed on your CSP. ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"[true, but add that a CIDR block indicates a range]"})})]}),"\n",(0,t.jsx)("a",{id:"glo-cluster"}),"\n",(0,t.jsx)(n.h3,{id:"cluster",children:"cluster"}),"\n",(0,t.jsx)(n.p,{children:"A group of interconnected computers that work together as a single system for enhanced processing power, scalability, and reliability. The AI Unlimited engine is deployed on a cluster on your CSP."}),"\n",(0,t.jsx)(n.h2,{id:"d",children:"D"}),"\n",(0,t.jsx)(n.h3,{id:"term-3",children:"term"}),"\n",(0,t.jsx)(n.p,{children:"Definition"}),"\n",(0,t.jsx)(n.h3,{id:"term-4",children:"term"}),"\n",(0,t.jsx)(n.p,{children:"Definition"}),"\n",(0,t.jsx)(n.h2,{id:"i",children:"I"}),"\n",(0,t.jsx)("a",{id:"glo-iam-role"}),"\n",(0,t.jsx)(n.h3,{id:"iam-role",children:"IAM role"}),"\n",(0,t.jsxs)(n.p,{children:["An ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html",children:"Identity and Access Management (IAM) role"})," is an identity you can create in your AWS account. It has permissions policies that determine what it can and cannot do in AWS. An IAM user is unique to one user, but an IAM role can be shared by users."]}),"\n",(0,t.jsx)(n.h3,{id:"term-5",children:"term"}),"\n",(0,t.jsx)(n.p,{children:"Definition"}),"\n",(0,t.jsx)(n.h2,{id:"l",children:"L"}),"\n",(0,t.jsx)("a",{id:"glo-load-balancer"}),"\n",(0,t.jsx)(n.h3,{id:"load-balancer",children:"load balancer"}),"\n",(0,t.jsx)(n.p,{children:"A load balancer distributes incoming traffic evenly across servers, which improves performance, reliability, and scalability. If your organzation does not allow its resources to use public IP addresses, you can use a load balancer to expose AI Unlimited and its engine to the public IP network."}),"\n",(0,t.jsx)(n.h2,{id:"m",children:"M"}),"\n",(0,t.jsx)("a",{id:"glo-mounting-volumes"}),"\n",(0,t.jsx)(n.h3,{id:"mounting-volumes",children:"mounting volumes"}),"\n",(0,t.jsx)(n.p,{children:"A concept in containerized platforms such as Docker. You can map a directory on the machine running the containers (host) to a directory within a container to share data and files between the host and container."}),"\n",(0,t.jsx)(n.h3,{id:"term-6",children:"term"}),"\n",(0,t.jsx)(n.p,{children:"Definition"}),"\n",(0,t.jsx)(n.h2,{id:"n",children:"N"}),"\n",(0,t.jsx)("a",{id:"glo-network-load-balancer"}),"\n",(0,t.jsx)(n.h3,{id:"network-load-balancer",children:"network load balancer"}),"\n",(0,t.jsx)(n.p,{children:"Load balancers distribute incoming traffic across servers. A network load balancer does not inspect traffic content. It bases routing decisions on factors such as ports and IP addresses. You can use a network load balancer as a way to expose AI Unlimited and its engine to the public IP network."}),"\n",(0,t.jsx)(n.h2,{id:"o",children:"O"}),"\n",(0,t.jsx)("a",{id:"glo-oauth-app"}),"\n",(0,t.jsx)(n.h3,{id:"oauth-app",children:"OAuth app"}),"\n",(0,t.jsx)(n.p,{children:"An OAuth app allows a user to grant access to their account on one website or service to another, without sharing their password. AI Unlimited uses an OAuth app, created by your organization, to authorize access to your GitHub or GitLab account for storing user and project information."}),"\n",(0,t.jsx)(n.h3,{id:"term-7",children:"term"}),"\n",(0,t.jsx)(n.p,{children:"Definition"}),"\n",(0,t.jsx)(n.h2,{id:"s",children:"S"}),"\n",(0,t.jsx)("a",{id:"glo-systemd"}),"\n",(0,t.jsx)(n.h3,{id:"systemd",children:"systemd"}),"\n",(0,t.jsx)(n.p,{children:"Linux foundational software for system and service management. When you deploy the AI Unlimited or JupyterLab CloudFormation template on AWS, it runs on a server instance in a container controlled by systemd."}),"\n",(0,t.jsx)(n.h3,{id:"term-8",children:"term"}),"\n",(0,t.jsx)(n.p,{children:"Definition"}),"\n",(0,t.jsx)(n.h2,{id:"t",children:"T"}),"\n",(0,t.jsx)("a",{id:"glo-tls"}),"\n",(0,t.jsx)(n.h3,{id:"transport-layer-security-tls",children:"Transport Layer Security (TLS)"}),"\n",(0,t.jsx)(n.p,{children:"A protocol that creates a secure connection between two parties communiating over the internet. TLS encrypts data during transmission, making it unreadable to anyone who intercepts it, and it verifies the identities of both parties."}),"\n",(0,t.jsx)(n.h3,{id:"term-9",children:"term"}),"\n",(0,t.jsx)(n.p,{children:"Definition"})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var t=i(6540);const r={},a=t.createContext(r);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);