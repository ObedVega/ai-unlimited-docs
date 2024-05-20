"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[7051],{3340:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=a(4848),t=a(8453);const o={id:"glossary",title:"Glossary",description:"Terminology for the installation and use of AI Unlimited.",sidebar_label:"Glossary",sidebar_position:7,pagination_prev:null,pagination_next:null},r="Glossary",s={id:"glossary",title:"Glossary",description:"Terminology for the installation and use of AI Unlimited.",source:"@site/docs/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/ai-unlimited-docs/pr-preview/pr-13/docs/glossary",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"glossary",title:"Glossary",description:"Terminology for the installation and use of AI Unlimited.",sidebar_label:"Glossary",sidebar_position:7,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},l={},d=[{value:"A",id:"a",level:2},{value:"AI Unlimited Jupyter Kernel",id:"ai-unlimited-jupyter-kernel",level:3},{value:"AI Unlimited manager",id:"ai-unlimited-manager",level:3},{value:"API key",id:"api-key",level:3},{value:"application load balancer",id:"application-load-balancer",level:3},{value:"C",id:"c",level:2},{value:"Classless Inter-Domain Routing (CIDR)",id:"classless-inter-domain-routing-cidr",level:3},{value:"cloud service provider (CSP)",id:"cloud-service-provider-csp",level:3},{value:"cluster",id:"cluster",level:3},{value:"D",id:"d",level:2},{value:"data lake",id:"data-lake",level:3},{value:"I",id:"i",level:2},{value:"IAM role",id:"iam-role",level:3},{value:"L",id:"l",level:2},{value:"load balancer",id:"load-balancer",level:3},{value:"M",id:"m",level:2},{value:"mounting volumes",id:"mounting-volumes",level:3},{value:"N",id:"n",level:2},{value:"network load balancer",id:"network-load-balancer",level:3},{value:"O",id:"o",level:2},{value:"OAuth app",id:"oauth-app",level:3},{value:"object storage",id:"object-storage",level:3},{value:"P",id:"p",level:2},{value:"project",id:"project",level:3},{value:"S",id:"s",level:2},{value:"systemd",id:"systemd",level:3},{value:"T",id:"t",level:2},{value:"Transport Layer Security (TLS)",id:"transport-layer-security-tls",level:3}];function c(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"glossary",children:"Glossary"}),"\n",(0,i.jsx)(n.h2,{id:"a",children:"A"}),"\n",(0,i.jsx)(n.h3,{id:"ai-unlimited-jupyter-kernel",children:"AI Unlimited Jupyter Kernel"}),"\n",(0,i.jsx)(n.p,{children:"Definition."}),"\n",(0,i.jsx)("a",{id:"glo-manager"}),"\n",(0,i.jsx)(n.h3,{id:"ai-unlimited-manager",children:"AI Unlimited manager"}),"\n",(0,i.jsx)(n.p,{children:"The manager is the component that orchestrates the deployment of the AI/ML engine on your cloud service provider. It also provides a web-based user interface from which the AI Unlimited admin sets up AI Unlimited after installing it, and changes settings later as needed. From the manager, all users get their API key for connecting to the engine from a Jupyter notebook."}),"\n",(0,i.jsx)(n.h3,{id:"api-key",children:"API key"}),"\n",(0,i.jsx)(n.p,{children:"Your Application Progamming Interface (API) key enables you to connect your Jupyter notebook to the engine. The first thing you do in a Jupyter notebook, before you create or access a project, is configure a connection to the engine using your API key."}),"\n",(0,i.jsx)("a",{id:"glo-alb"}),"\n",(0,i.jsx)(n.h3,{id:"application-load-balancer",children:"application load balancer"}),"\n",(0,i.jsx)(n.p,{children:"Load balancers distribute incoming traffic across servers. An application load balancer inspects incoming traffic content, such as HTTP headers and paths, to make routing decisions. You can use an application load balancer as a way to expose AI Unlimited and its engine to the public IP network."}),"\n",(0,i.jsx)(n.h2,{id:"c",children:"C"}),"\n",(0,i.jsx)("a",{id:"glo-cidr"}),"\n",(0,i.jsx)(n.h3,{id:"classless-inter-domain-routing-cidr",children:"Classless Inter-Domain Routing (CIDR)"}),"\n",(0,i.jsx)(n.p,{children:"An IP address allocation method for data routing efficiency on the internet. Every computer that connects to the internet has a unique number called an IP address. IP addresses enable computers find each other and communicate. A CIDR block is a range of IP addresses."}),"\n",(0,i.jsx)("a",{id:"glo-csp"}),"\n",(0,i.jsx)(n.h3,{id:"cloud-service-provider-csp",children:"cloud service provider (CSP)"}),"\n",(0,i.jsx)(n.p,{children:"A company that delivers computing resources over the internet, on demand. These resources can include Infrastructure as a Service, Platform as a Service, or Software as a Service. The AI Unlimited engine is deployed on your CSP."}),"\n",(0,i.jsx)("a",{id:"glo-cluster"}),"\n",(0,i.jsx)(n.h3,{id:"cluster",children:"cluster"}),"\n",(0,i.jsx)(n.p,{children:"A group of interconnected computers that work together as a single system for enhanced processing power, scalability, and reliability. The AI Unlimited engine is deployed on a cluster on your CSP."}),"\n",(0,i.jsx)(n.h2,{id:"d",children:"D"}),"\n",(0,i.jsx)("a",{id:"glo-data-lake"}),"\n",(0,i.jsx)(n.h3,{id:"data-lake",children:"data lake"}),"\n",(0,i.jsxs)(n.p,{children:["A central repository of data for data analytics, machine learning, and data exploration. A data lake is typically built on ",(0,i.jsx)(n.a,{href:"#glo-object-storage",children:"object storage"})," and is designed for data accessibility for future data analysis."]}),"\n",(0,i.jsx)(n.h2,{id:"i",children:"I"}),"\n",(0,i.jsx)("a",{id:"glo-iam-role"}),"\n",(0,i.jsx)(n.h3,{id:"iam-role",children:"IAM role"}),"\n",(0,i.jsxs)(n.p,{children:["An ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html",children:"Identity and Access Management (IAM) role"})," is an identity you can create in your AWS account. It has permissions policies that determine what it can and cannot do in AWS. An IAM user is unique to one user, but an IAM role can be shared by users."]}),"\n",(0,i.jsx)(n.h2,{id:"l",children:"L"}),"\n",(0,i.jsx)("a",{id:"glo-load-balancer"}),"\n",(0,i.jsx)(n.h3,{id:"load-balancer",children:"load balancer"}),"\n",(0,i.jsx)(n.p,{children:"A load balancer distributes incoming traffic evenly across servers, which improves performance, reliability, and scalability. If your organzation does not allow its resources to use public IP addresses, you can use a load balancer to expose the AI Unlimited manager and engine to the public IP network."}),"\n",(0,i.jsx)(n.h2,{id:"m",children:"M"}),"\n",(0,i.jsx)("a",{id:"glo-mounting-volumes"}),"\n",(0,i.jsx)(n.h3,{id:"mounting-volumes",children:"mounting volumes"}),"\n",(0,i.jsx)(n.p,{children:"A concept in containerized platforms such as Docker. You can map a directory on the machine running the containers (the host) to a directory in a container to share data and files between the host and container."}),"\n",(0,i.jsx)(n.h2,{id:"n",children:"N"}),"\n",(0,i.jsx)("a",{id:"glo-nlb"}),"\n",(0,i.jsx)(n.h3,{id:"network-load-balancer",children:"network load balancer"}),"\n",(0,i.jsx)(n.p,{children:"Load balancers distribute incoming traffic across servers. A network load balancer does not inspect traffic content. It bases routing decisions on factors such as ports and IP addresses. You can use a network load balancer as a way to expose AI Unlimited and its engine to the public IP network."}),"\n",(0,i.jsx)(n.h2,{id:"o",children:"O"}),"\n",(0,i.jsx)("a",{id:"glo-oauth-app"}),"\n",(0,i.jsx)(n.h3,{id:"oauth-app",children:"OAuth app"}),"\n",(0,i.jsx)(n.p,{children:"An OAuth app allows a user to grant access to their account on one website or service to another, without sharing their password. AI Unlimited uses an OAuth app, created by your organization, to authorize access to your GitHub or GitLab account for storing user and project information."}),"\n",(0,i.jsx)("a",{id:"glo-object-storage"}),"\n",(0,i.jsx)(n.h3,{id:"object-storage",children:"object storage"}),"\n",(0,i.jsxs)(n.p,{children:["A scalable, highly effective way to store large amounts of structured, semi-structured, or unstructured data in the cloud. Amazon S3 is object storage on AWS. Azure Blob Storage is object storage on Azure. Object storage is the basis for a ",(0,i.jsx)(n.a,{href:"#glo-data-lake",children:"data lake"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"p",children:"P"}),"\n",(0,i.jsx)("a",{id:"glo-project"}),"\n",(0,i.jsx)(n.h3,{id:"project",children:"project"}),"\n",(0,i.jsx)(n.p,{children:"A project is a means to explore and analyze data from a Jupyter notebook. Each project has a Git repository for storing project information, including user information and object store authorizations."}),"\n",(0,i.jsx)(n.h2,{id:"s",children:"S"}),"\n",(0,i.jsx)("a",{id:"glo-systemd"}),"\n",(0,i.jsx)(n.h3,{id:"systemd",children:"systemd"}),"\n",(0,i.jsx)(n.p,{children:"Linux foundational software for system and service management. When you deploy the AI Unlimited or JupyterLab CloudFormation template on AWS, it runs on a server instance in a container controlled by systemd."}),"\n",(0,i.jsx)(n.h2,{id:"t",children:"T"}),"\n",(0,i.jsx)("a",{id:"glo-tls"}),"\n",(0,i.jsx)(n.h3,{id:"transport-layer-security-tls",children:"Transport Layer Security (TLS)"}),"\n",(0,i.jsx)(n.p,{children:"A protocol that creates a secure connection between two parties communiating over the internet. TLS encrypts data during transmission, making it unreadable to anyone who intercepts it, and it verifies the identities of both parties."})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>s});var i=a(6540);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);