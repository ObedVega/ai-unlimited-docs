"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[9883],{41269:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>r});var s=t(74848),a=t(28453);const r=[];function i(e){const n={a:"a",admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If you have any questions or need further assistance, please visit our ",(0,s.jsx)(n.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function o(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},73110:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>i});var s=t(74848),a=t(28453),r=t(43457);const i=[...r.RM,{value:"Overview",id:"overview",level:2}];function o(e){const n={a:"a",admonition:"admonition",h2:"h2",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"This how-to shows how to gain access to a Teradata database by running it on your local machine. Once you finish the steps you will have a working Teradata Vantage Express database on your computer."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Starting with version 17.20, Vantage Express includes the following analytics packages: ",(0,s.jsx)(n.a,{href:"https://docs.teradata.com/r/Vantage-Analytics-Library-User-Guide/January-2022",children:"Vantage Analytics Library"}),", ",(0,s.jsx)(n.a,{href:"https://docs.teradata.com/r/Teradata-VantageTM-Bring-Your-Own-Model-User-Guide/May-2022",children:"Bring Your Own Model (BYOM)"}),", ",(0,s.jsx)(n.a,{href:"https://docs.teradata.com/r/Teradata-VantageTM-API-Integration-Guide-for-Cloud-Machine-Learning/April-2022",children:"API Integration with AWS SageMaker"}),"."]})})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},76532:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>r});var s=t(74848),a=t(28453);const r=[];function i(e){const n={code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE DATABASE HR\nAS PERMANENT = 60e6, -- 60MB\n    SPOOL = 120e6; -- 120MB\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"Let\u2019s create a sample table and insert some data and query it. We will first create a table to hold employee information:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE SET TABLE HR.Employees (\n   GlobalID INTEGER,\n   FirstName VARCHAR(30),\n   LastName VARCHAR(30),\n   DateOfBirth DATE FORMAT 'YYYY-MM-DD',\n   JoinedDate DATE FORMAT 'YYYY-MM-DD',\n   DepartmentCode BYTEINT\n)\nUNIQUE PRIMARY INDEX ( GlobalID );\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsx)(n.li,{children:"Now, let's insert a record:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT INTO HR.Employees (\n   GlobalID,\n   FirstName,\n   LastName,\n   DateOfBirth,\n   JoinedDate,\n   DepartmentCode\n)\nVALUES (\n   101,\n   'Adam',\n   'Tworkowski',\n   '1980-01-05',\n   '2004-08-01',\n   01\n);\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"7",children:["\n",(0,s.jsx)(n.li,{children:"Finally, let's see if we can retrieve the data:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM HR.Employees;\n"})}),"\n",(0,s.jsx)(n.p,{children:"You should get the following results:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"GlobalID  FirstName  LastName   DateOfBirth  JoinedDate  DepartmentCode\n--------  ---------  ---------- -----------  ----------  --------------\n     101  Adam       Tworkowski  1980-01-05  2004-08-01               1\n"})})]})}function o(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},51284:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>r});var s=t(74848),a=t(28453);const r=[{value:"Summary",id:"summary",level:2}];function i(e){const n={h2:"h2",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(n.p,{children:"In this guide we have covered how to quickly create a working Teradata environment. We used Teradata Vantage Express in a VM running on VMware. In the same VM, we ran Teradata Studio Express to issue queries. We installed all software locally and didn't have to pay for cloud resources."})]})}function o(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},42649:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>r});var s=t(74848),a=t(28453);const r=[];function i(e){const n={admonition:"admonition",code:"code",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Press ",(0,s.jsx)("kbd",{children:"[ENTER]"})," to select the highlighted ",(0,s.jsx)(n.code,{children:"LINUX"})," boot partition."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Teradata Data Distribution",src:t(13397).A+"",width:"717",height:"489"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["On the next screen, press ",(0,s.jsx)("kbd",{children:"ENTER"})," again to select the default SUSE Linux kernel."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Teradata Data Distribution",src:t(62933).A+"",width:"719",height:"486"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"After completing the bootup sequence a terminal login prompt as shown in the screenshot below will appear. Don't enter anything in the terminal. Wait till the system starts the GUI."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Wait for GUI",src:t(33288).A+"",width:"796",height:"686"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["After a while the following prompt will appear - assuming that you did not enter anything after the command login prompt above. Press ",(0,s.jsx)(n.code,{children:"okay"})," button in the screen below."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"OK Security Popup",src:t(63875).A+"",width:"795",height:"685"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Once the VM is up, you will see its desktop environment. When prompted for username/password enter ",(0,s.jsx)(n.code,{children:"root"})," for both."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"VM Login",src:t(45389).A+"",width:"801",height:"343"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The database is configured to autostart with the VM. To confirm that the database has started go to the virtual desktop and start ",(0,s.jsx)(n.code,{children:"Gnome Terminal"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Start Gnome Terminal",src:t(4647).A+"",width:"738",height:"712"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In the terminal execute ",(0,s.jsx)(n.code,{children:"pdestate"})," command that will inform you if Vantage has already started:"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["To paste into Gnome Terminal press ",(0,s.jsx)("kbd",{children:"SHIFT+CTRL+V"}),"."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"watch pdestate -a\n"})}),"\n",(0,s.jsx)(n.p,{children:"You want to wait till you see the following message:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"PDE state is RUN/STARTED.\nDBS state is 5: Logons are enabled - The system is quiescent\n"})}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsxs)("summary",{children:["See examples of messages that ",(0,s.jsx)("code",{children:"pdestate"})," returns when the database is still initializing."]}),(0,s.jsxs)("pre",{children:[(0,s.jsx)(n.p,{children:"PDE state is DOWN/HARDSTOP."}),(0,s.jsx)(n.p,{children:"PDE state is START/NETCONFIG."}),(0,s.jsx)(n.p,{children:"PDE state is START/GDOSYNC."}),(0,s.jsx)(n.p,{children:"PDE state is START/TVSASTART."}),(0,s.jsx)(n.p,{children:"PDE state is START/READY.\nPDE state is RUN/STARTED."}),(0,s.jsx)(n.p,{children:"DBS state is 1/1: DBS Startup - Initializing DBS Vprocs\nPDE state is RUN/STARTED."}),(0,s.jsx)(n.p,{children:"DBS state is 1/5: DBS Startup - Voting for Transaction Recovery\nPDE state is RUN/STARTED."}),(0,s.jsx)(n.p,{children:"DBS state is 1/4: DBS Startup - Starting PE Partitions\nPDE state is RUN/STARTED."})]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Now that the database is up, go back to the virtual desktop and launch ",(0,s.jsx)(n.code,{children:"Teradata Studio Express"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Start Teradata Studio Express",src:t(56982).A+"",width:"740",height:"712"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["When you first start it you will be offered a tour. Once you close the tour, you will see a wizard window to add a new connection. Select ",(0,s.jsx)(n.code,{children:"Teradata"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"New Connection Profile",src:t(55210).A+"",width:"1050",height:"1136"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["On the next screen, connect to the database on your localhost using ",(0,s.jsx)(n.code,{children:"dbc"})," for the username and password:"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"New Connection",src:t(73343).A+"",width:"1222",height:"1488"})})]})}function o(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},96060:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>i});var s=t(74848),a=t(28453),r=t(76532);const i=[{value:"Run sample queries",id:"run-sample-queries",level:2},...r.RM];function o(e){const n={code:"code",h2:"h2",li:"li",ol:"ol",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"run-sample-queries",children:"Run sample queries"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"We will now run some queries in the VM. To avoid copy/paste issues between the host and the VM, we will open this quick start in the VM. Go to the virtual desktop, start Firefox and point it to this quick start."}),"\n",(0,s.jsxs)(n.li,{children:["Once in Teradata Studio Express, go to ",(0,s.jsx)(n.code,{children:"Query Development"})," perspective (go to the top menu and select ",(0,s.jsx)(n.code,{children:"Window"})," -> ",(0,s.jsx)(n.code,{children:"Query Development"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["Connect using the previously created connection profile by double-clicking on ",(0,s.jsx)(n.code,{children:"Database Connections"})," -> ",(0,s.jsx)(n.code,{children:"New Teradata"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Using ",(0,s.jsx)(n.code,{children:"dbc"})," user, we will create a new database called ",(0,s.jsx)(n.code,{children:"HR"}),". Copy/paste this query and run it by hitting the run query button (image",":run",".query.button.png[Run Query Button, 24, 24]) or pressing ",(0,s.jsx)("kbd",{children:"[F5]"})," key:"]}),"\n"]}),"\n",(0,s.jsx)(r.Ay,{})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},43457:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>r});var s=t(74848),a=t(28453);const r=[];function i(e){const n={a:"a",admonition:"admonition",p:"p",...(0,a.R)(),...e.components};return(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["You can now get a hosted instance of Vantage for free at ",(0,s.jsx)(n.a,{href:"https://clearscape.teradata.com/",children:"https://clearscape.teradata.com"}),"."]})})}function o(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},6883:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>h,default:()=>m,frontMatter:()=>d,metadata:()=>u,toc:()=>x});var s=t(74848),a=t(28453),r=t(73110),i=t(42649),o=t(96060),c=t(51284),l=t(41269);const d={sidebar_position:3,id:"run-vantage-express-on-utm",title:"Run Vantage Express on UTM",author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"January 9th, 2023",description:"Run Vantage Express on your laptop using VMware.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics"]},h="Run Vantage Express on UTM",u={id:"get-access-to-vantage/on-your-local/run-vantage-express-on-utm",title:"Run Vantage Express on UTM",description:"Run Vantage Express on your laptop using VMware.",source:"@site/quickstarts/get-access-to-vantage/on-your-local/getting-started-utm.md",sourceDirName:"get-access-to-vantage/on-your-local",slug:"/get-access-to-vantage/on-your-local/run-vantage-express-on-utm",permalink:"/ai-unlimited-docs/pr-preview/pr-9/quickstarts/get-access-to-vantage/on-your-local/run-vantage-express-on-utm",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"run-vantage-express-on-utm",title:"Run Vantage Express on UTM",author:"Adam Tworkiewicz",email:"adam.tworkiewicz@teradata.com",page_last_update:"January 9th, 2023",description:"Run Vantage Express on your laptop using VMware.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics"]},sidebar:"tutorialSidebar",previous:{title:"Run Vantage Express on VirtualBox",permalink:"/ai-unlimited-docs/pr-preview/pr-9/quickstarts/get-access-to-vantage/on-your-local/getting-started-vbox"},next:{title:"Run Vantage Express on AWS",permalink:"/ai-unlimited-docs/pr-preview/pr-9/quickstarts/get-access-to-vantage/on-your-cloud-infrastructure/run-vantage-express-on-aws"}},p={},x=[...r.RM,{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Download required software",id:"download-required-software",level:3},{value:"Run UTM installer",id:"run-utm-installer",level:3},{value:"Run Vantage Express",id:"run-vantage-express",level:3},...i.RM,...o.RM,...c.RM,{value:"Next steps",id:"next-steps",level:2},{value:"Further reading",id:"further-reading",level:2},...l.RM];function g(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"run-vantage-express-on-utm",children:"Run Vantage Express on UTM"}),"\n",(0,s.jsx)(r.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"A Mac computer. Both Intel and M1/2 chips are supported."}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Vantage Express runs on x86 architecture. When you run the VM on M1/2 chips, UTM has to emulate x86. This is significantly slower then virtualization. If you determine that Vantage Express on M1/M2 is too slow for your needs, consider running Vantage Express in the cloud: ",(0,s.jsx)(n.a,{href:"/ai-unlimited-docs/pr-preview/pr-9/quickstarts/get-access-to-vantage/on-your-cloud-infrastructure/run-vantage-express-on-aws",children:"AWS"}),", ",(0,s.jsx)(n.a,{href:"/ai-unlimited-docs/pr-preview/pr-9/quickstarts/get-access-to-vantage/on-your-cloud-infrastructure/run-vantage-express-on-microsoft-azure",children:"Azure"}),", ",(0,s.jsx)(n.a,{href:"/ai-unlimited-docs/pr-preview/pr-9/quickstarts/get-access-to-vantage/on-your-cloud-infrastructure/vantage-express-gcp",children:"Google Cloud"}),"."]})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"30GB of disk space and enough CPU and RAM to be able to dedicate at least one core and 4GB RAM to the virtual machine."}),"\n",(0,s.jsx)(n.li,{children:"Admin rights to be able to install and run the software."}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["No admin rights on your local machine? Have a look at how to run Vantage Express in ",(0,s.jsx)(n.a,{href:"/ai-unlimited-docs/pr-preview/pr-9/quickstarts/get-access-to-vantage/on-your-cloud-infrastructure/run-vantage-express-on-aws",children:"AWS"}),", ",(0,s.jsx)(n.a,{href:"/ai-unlimited-docs/pr-preview/pr-9/quickstarts/get-access-to-vantage/on-your-cloud-infrastructure/run-vantage-express-on-microsoft-azure",children:"Azure"}),", ",(0,s.jsx)(n.a,{href:"/ai-unlimited-docs/pr-preview/pr-9/quickstarts/get-access-to-vantage/on-your-cloud-infrastructure/vantage-express-gcp",children:"Google Cloud"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/ai-unlimited-docs/pr-preview/pr-9/quickstarts/get-access-to-vantage/on-your-local/getting-started-vbox",children:"test"}),",\n",(0,s.jsx)(n.a,{href:"/ai-unlimited-docs/pr-preview/pr-9/quickstarts/get-access-to-vantage/on-your-cloud-infrastructure/vantage-express-gcp",children:"Google Cloud"})]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.h3,{id:"download-required-software",children:"Download required software"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["The latest version of ",(0,s.jsx)(n.a,{href:"https://downloads.teradata.com/download/database/teradata-express-for-vmware-player",children:"Vantage Express"}),". If you have not used the Teradata downloads website before, you will need to register."]}),"\n",(0,s.jsxs)(n.li,{children:["The latest version of ",(0,s.jsx)(n.a,{href:"https://mac.getutm.app",children:"UTM"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"run-utm-installer",children:"Run UTM installer"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Install UTM by running the installer and accepting the default values."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"run-vantage-express",children:"Run Vantage Express"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Go to the directory where you downloaded Vantage Express and unzip the downloaded file."}),"\n",(0,s.jsxs)(n.li,{children:["Start UTM, click on the ",(0,s.jsx)(n.code,{children:"+"})," sign and select ",(0,s.jsx)(n.code,{children:"Virtualize"})," (for Intel Macs) or ",(0,s.jsx)(n.code,{children:"Emulate"})," (for M1 Macs)."]}),"\n",(0,s.jsxs)(n.li,{children:["On ",(0,s.jsx)(n.code,{children:"Operating System"})," screen select ",(0,s.jsx)(n.code,{children:"Other"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["On ",(0,s.jsx)(n.code,{children:"Other"})," screen select ",(0,s.jsx)(n.code,{children:"Skip ISO Boot"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["On ",(0,s.jsx)(n.code,{children:"Hardware"})," screen allocate at least 4GB of memory and at least 1 CPU core. We recommend 10GB RAM and 2 CPUs."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"UTM Hardware",src:t(55084).A+"",width:"450",height:"522"})}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsxs)(n.li,{children:["On ",(0,s.jsx)(n.code,{children:"Storage"})," screen accept the defaults by clicking ",(0,s.jsx)(n.code,{children:"Next"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["On ",(0,s.jsx)(n.code,{children:"Shared Direct"})," screen click ",(0,s.jsx)(n.code,{children:"Next"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["On ",(0,s.jsx)(n.code,{children:"Summary"})," screen check ",(0,s.jsx)(n.code,{children:"Open VM Settings"})," and click ",(0,s.jsx)(n.code,{children:"Save"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Go through the setup wizard. You only need to adjust the following tabs:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"QEMU"})," - disable ",(0,s.jsx)(n.code,{children:"UEFI Boot"})," option"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Network"})," - expose ssh (22) and Vantage (1025) ports on the host computer:"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"UTM Network",src:t(31576).A+"",width:"801",height:"473"})}),"\n",(0,s.jsxs)(n.ol,{start:"10",children:["\n",(0,s.jsx)(n.li,{children:"Map drives:"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Delete the default ",(0,s.jsx)(n.code,{children:"IDE Drive"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Map the 3 Vantage Express drives by importing the disk files from the downloaded VM zip file. Make sure you map them in the right order, ",(0,s.jsx)(n.code,{children:"-disk1"}),", ",(0,s.jsx)(n.code,{children:"-disk2"}),", ",(0,s.jsx)(n.code,{children:"-disk3"})," . The first disk is bootable and contains the database itself. Disks 2 and 3 are so called ",(0,s.jsx)(n.code,{children:"pdisks"})," and contain data. As you import the files UTM will automatically convert them fro ",(0,s.jsx)(n.code,{children:"vmdk"})," into ",(0,s.jsx)(n.code,{children:"qcow2"})," format. Make sure that each disk is configured using the ",(0,s.jsx)(n.code,{children:"IDE"})," interface:"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"UTM Drives",src:t(69347).A+"",width:"802",height:"471"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Once you are done mapping all 3 drives, your configuration should look like this:"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"UTM Drives Final",src:t(65202).A+"",width:"1708",height:"1170"})}),"\n",(0,s.jsxs)(n.ol,{start:"11",children:["\n",(0,s.jsx)(n.li,{children:"Save the configuration and start the VM."}),"\n"]}),"\n",(0,s.jsx)(i.Ay,{}),"\n",(0,s.jsx)(o.Ay,{}),"\n",(0,s.jsx)(c.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/ai-unlimited-docs/pr-preview/pr-9/quickstarts/manage-data/nos",children:"Query data stored in object storage"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.teradata.com/r/Teradata-StudioTM-and-StudioTM-Express-Installation-Guide-17.20",children:"Teradata\xae Studio\u2122 and Studio\u2122 Express Installation Guide"})}),"\n"]}),"\n",(0,s.jsx)(l.Ay,{})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},13397:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/boot-manager-menu-5cf7ff77a35dfcda853cb0b6c226fe9f.png"},62933:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/grub-menu-613987ca151e84ddcf802fadda093cca.png"},73343:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/new.connection-2305d8e8ba78b50f6aad8afdf469404b.png"},55210:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/new.connection.profile-e2f0858418648a2c961390f7b07a497b.png"},63875:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/okay-the-security-popup-b8bd60e340b8b100789f9618fb4ff7c8.png"},4647:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/start-gnome-terminal-13ca9473f6f506f1a8f9b184c2c28e35.png"},56982:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/start-teradata-studio-express-91e790d82f130128810abc2420724432.png"},45389:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/vm.login-1b2c96caba5911e7d6e77c04a7124b75.png"},33288:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/wait-for-gui-c0ce1366fd78475776e9ddfbfdfeaa3c.png"},69347:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/utm.drives-e5bd18047e89c61ea88f21262b8776e6.png"},65202:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/utm.final-fd397f998100e5b6a11430d1f5e75351.png"},55084:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/utm.hardware-82832cf0cc6707547bdd37897134e631.png"},31576:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/utm.network-44e2e9a9cd0b67626ec82ef537fa305f.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(96540);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);