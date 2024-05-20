"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[3294],{20585:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=a(74848),s=a(28453);const o={author:"Janeth Graziani",email:"Janeth.graziani@teradata.com",page_last_update:"January 11, 2024",description:"Learn how to run VantageCloud Lake Demos using Jupyter notebooks in Visual Studio Code.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","teradatasqlalchemy","vantagecloud","vantagecloud lake","public internet","visual studio code","IDE","data analytics","data science"]},i="Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Visual Studio Code",r={id:"vantagecloud-lake/vantagecloud-lake-demos-visual-studio-code",title:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Visual Studio Code",description:"Learn how to run VantageCloud Lake Demos using Jupyter notebooks in Visual Studio Code.",source:"@site/quickstarts/vantagecloud-lake/vantagecloud-lake-demos-visual-studio-code.md",sourceDirName:"vantagecloud-lake",slug:"/vantagecloud-lake/vantagecloud-lake-demos-visual-studio-code",permalink:"/ai-unlimited-docs/pr-preview/pr-9/quickstarts/vantagecloud-lake/vantagecloud-lake-demos-visual-studio-code",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{author:"Janeth Graziani",email:"Janeth.graziani@teradata.com",page_last_update:"January 11, 2024",description:"Learn how to run VantageCloud Lake Demos using Jupyter notebooks in Visual Studio Code.",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","business intelligence","enterprise analytics","jupyter","teradatasql","ipython-sql","teradatasqlalchemy","vantagecloud","vantagecloud lake","public internet","visual studio code","IDE","data analytics","data science"]},sidebar:"tutorialSidebar",previous:{title:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Amazon SageMaker",permalink:"/ai-unlimited-docs/pr-preview/pr-9/quickstarts/vantagecloud-lake/vantagecloud-lake-demo-jupyter-sagemaker"}},d={},l=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Clone VantageCloud Lake Demo repository",id:"clone-vantagecloud-lake-demo-repository",level:2},{value:"Start a Jupyterlab docker container with Teradata Jupyter Exensions",id:"start-a-jupyterlab-docker-container-with-teradata-jupyter-exensions",level:2},{value:"Visual Studio Code Configuration",id:"visual-studio-code-configuration",level:2},{value:"Edit vars.json file",id:"edit-varsjson-file",level:3},{value:"Modify path to vars.json in UseCases directory",id:"modify-path-to-varsjson-in-usecases-directory",level:3},{value:"Configuring Jupyter Kernels",id:"configuring-jupyter-kernels",level:3},{value:"Run demos",id:"run-demos",level:3},{value:"Summary",id:"summary",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"run-teradata-jupyter-notebook-demos-for-vantagecloud-lake-in-visual-studio-code",children:"Run Teradata Jupyter Notebook Demos for VantageCloud Lake in Visual Studio Code"}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"Visual Studio Code is a popular open-source code editor compatible with Windows, MacOs, and Linux. Developers use this Integrated Development Environment [IDE) for coding, debugging, building, and deploying applications. In this quickstart guide, we launch VantageCloud Lake Jupyter notebook demos within Visual Studio Code."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"vscode.png",src:a(83729).A+"",width:"3444",height:"2136"})}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Before you begin, ensure you have the following prerequisites in place:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.docker.com/products/docker-desktop",children:"Docker Desktop"})," installed"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git",children:"Git"})," installed\n** Required to download git repo from ",(0,t.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos.git",children:"https://github.com/Teradata/lake-demos.git"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://code.visualstudio.com/download",children:"Visual Studio Code"})," installed"]}),"\n",(0,t.jsxs)(n.li,{children:["A Teradata VantageCloud Lake account with organization URL and login details from the Teradata welcome letter\n** Once logged in follow these ",(0,t.jsx)(n.a,{href:"https://quickstarts.teradata.com/getting-started-with-vantagecloud-lake.html#_create_an_environment",children:"intructions"})," to create a VantageCloud Lake Enviorment"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"clone-vantagecloud-lake-demo-repository",children:"Clone VantageCloud Lake Demo repository"}),"\n",(0,t.jsx)(n.p,{children:"Begin by cloning the GitHub repository and navigating to the project directory:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/Teradata/lake-demos.git\ncd lake-demos\n"})}),"\n",(0,t.jsx)(n.h2,{id:"start-a-jupyterlab-docker-container-with-teradata-jupyter-exensions",children:"Start a Jupyterlab docker container with Teradata Jupyter Exensions"}),"\n",(0,t.jsxs)(n.p,{children:["To launch Teradata VantageCloud Lake demos, we need the ",(0,t.jsx)(n.a,{href:"https://hub.docker.com/r/teradata/jupyterlab-extensions",children:"Teradata Jupyter Extensions for Docker"}),". These extensions provide the SQL ipython kernel, utilities to manage connections to Teradata, and the database object explorer to make you productive while interacting with the Teradata database."]}),"\n",(0,t.jsx)(n.p,{children:"Next, start a container and bind it to the existing lake-demos directory. Choose the appropriate command based on your operating system:"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"For Windows, run the docker command in PowerShell."})}),"\n",(0,t.jsx)(n.h1,{id:"tabs-idvscode_tab_mount-roleemits-gtm-events",children:'[tabs, id="vscode_tab_mount", role="emits-gtm-events"]'}),"\n",(0,t.jsx)(n.p,{children:"Windows::"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'docker run -e "accept_license=Y" -p 127.0.0.1:8888:8888 -v ${PWD}:/home/jovyan/JupyterLabRoot teradata/jupyterlab-extensions\n'})}),"\n",(0,t.jsx)(n.p,{children:"macOS::\n+"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'docker run -e "accept_license=Y" -p 127.0.0.1:8888:8888 -v $PWD:/home/jovyan/JupyterLabRoot teradata/jupyterlab-extensions\n'})}),"\n",(0,t.jsx)(n.p,{children:"Linux::\n+"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'docker run -e "accept_license=Y" -p 127.0.0.1:8888:8888 -v $PWD:/home/jovyan/JupyterLabRoot teradata/jupyterlab-extensions\n'})}),"\n",(0,t.jsx)(n.p,{children:"====\nTake note of the resulting URL and token; you\u2019ll need them to establish the connection from Visual Studio Code."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"terminal.png",src:a(23367).A+"",width:"1620",height:"258"})}),"\n",(0,t.jsx)(n.h2,{id:"visual-studio-code-configuration",children:"Visual Studio Code Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)(n.code,{children:"lake-demos"})," project directory in Visual Studio Code. The repository contains the following project tree:"]}),"\n",(0,t.jsx)(n.p,{children:"LAKE_DEMOS"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/tree/main/UseCases",children:"UseCases"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/blob/main/0_Demo_Environment_Setup.ipynb",children:"0_Demo_Environment_Setup.ipynb"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/blob/main/1_Load_Base_Demo_Data.ipynb",children:"1_Load_Base_Demo_Data.ipynb"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/blob/main/Data_Engineering_Exploration.ipynb",children:"Data_Engineering_Exploration.ipynb"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/blob/main/Data_Science_OAF.ipynb",children:"Data_Science_OAF.ipynb"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/blob/main/Demo_Admin.ipynb",children:"Demo_Admin.ipynb"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/blob/main/vars.json",children:"vars.json file"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"edit-varsjson-file",children:"Edit vars.json file"}),"\n",(0,t.jsxs)(n.p,{children:["Edit the ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos/blob/main/vars.json",children:"vars.json"})})," file to include the required credentials to run the demos +"]}),"\n",(0,t.jsxs)(n.p,{children:['[cols="1,1"]\n|====\n| ',(0,t.jsx)(n.em,{children:"Variable"})," | ",(0,t.jsx)(n.em,{children:"Value"}),"\n| ",(0,t.jsx)(n.em,{children:'"host"'}),"\n| Public IP value from your VantageCloud Lake environment\n| ",(0,t.jsx)(n.em,{children:'"UES_URI"'}),"\n| Open Analytics from your VantageCloud Lake environment\n| ",(0,t.jsx)(n.em,{children:'"dbc"'}),"\n| The master password of your VantageCloud Lake environment.\n|===="]}),"\n",(0,t.jsxs)(n.p,{children:["To retrieve a Public IP address and Open Analytics Endpoint follow these ",(0,t.jsx)(n.a,{href:"https://quickstarts.teradata.com/vantagecloud-lake/vantagecloud-lake-demo-jupyter-docker.html",children:"instructions"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:'Change passwords in the vars.json file. You\'ll see that in the sample vars.json, the passwords of all users are defaulted to "password", this is just for matters of the sample file, you should change all of these password fields to strong passwords, secure them as necessary and follow other password management best practices.'})}),"\n",(0,t.jsx)(n.h3,{id:"modify-path-to-varsjson-in-usecases-directory",children:"Modify path to vars.json in UseCases directory"}),"\n",(0,t.jsx)(n.p,{children:"In the UseCases directory, all .ipynb files use the path ../../vars.json to load the variables from the JSON file when working from Jupyterlab. To work directly from Visual Studio Code, update the code in each .ipynb to point to vars.json."}),"\n",(0,t.jsx)(n.p,{children:"The quickest way to make these changes is via search feature on the left vertical  menu. Search for"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"'../../vars.json'\n"})}),"\n",(0,t.jsx)(n.p,{children:"and replace with:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"'vars.json'\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"search",src:a(38107).A+"",width:"1158",height:"402"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"replace",src:a(91479).A+"",width:"560",height:"434"})}),"\n",(0,t.jsx)(n.h3,{id:"configuring-jupyter-kernels",children:"Configuring Jupyter Kernels"}),"\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)(n.em,{children:"0_Demo_Environment_Setup.ipynb"})," and click on Select Kernel at the top right corner of Visual Studio Code."]}),"\n",(0,t.jsx)(n.p,{children:"If you have not installed Jupyter and Python extensions, Visual Studio Code will prompt you to install them. These extensions are necessary for Visual Studio Code to detect Kernels. To install them, select 'Install/Enable suggested extensions for Python and Jupyter.'"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"select.kernel.png",src:a(69870).A+"",width:"3140",height:"516"})}),"\n",(0,t.jsxs)(n.p,{children:["Once you've installed the necessary extensions, you'll find options in the drop-down menu. Choose ",(0,t.jsx)(n.strong,{children:"Existing Jupyter Kernel"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"existing.kernel.png",src:a(50915).A+"",width:"885",height:"204"})}),"\n",(0,t.jsx)(n.p,{children:"Enter the URL of the running Jupyter Server and press enter."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"http://localhost:8888\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"server.url.png",src:a(81367).A+"",width:"864",height:"133"})}),"\n",(0,t.jsx)(n.p,{children:"Enter the token found in your terminal when mounting files to the Docker container and press Enter."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"server.password.png",src:a(51597).A+"",width:"858",height:"139"})}),"\n",(0,t.jsx)(n.p,{children:"Change Server Display Name (Leave Blank To Use URL)"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"server.display.name.png",src:a(76703).A+"",width:"860",height:"130"})}),"\n",(0,t.jsx)(n.p,{children:"You now have access to all the Teradata Vantage extension kernels. Select Python 3 (ipykernel) from the running Jupyter server."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"python.kernel.png",src:a(48508).A+"",width:"868",height:"234"})}),"\n",(0,t.jsx)(n.h3,{id:"run-demos",children:"Run demos"}),"\n",(0,t.jsxs)(n.p,{children:["Execute all the cells in ",(0,t.jsx)(n.em,{children:"0_Demo_Environment_Setup.ipynb"})," to setup your environment. Followed by ",(0,t.jsx)(n.em,{children:"1_Demo_Setup_Base_Data.ipynb"})," to load the base data required for demo.\nTo learn more about the demo notebooks, go to ",(0,t.jsx)(n.a,{href:"https://github.com/Teradata/lake-demos",children:"Teradata Lake demos"})," page on GitHub."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"demoenvsetup.png",src:a(40346).A+"",width:"1822",height:"991"})}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(n.p,{children:"In this quickstart guide, we configured Visual Studio Code to access VantageCloud Lake demos using Jupyter notebooks."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},40346:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/demoenvsetup-27ed84b9008334333a03eb6476262428.png"},50915:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/existing.kernel-b893c017d4e8ed9e4beb3e85b4a3454e.png"},48508:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/python.kernel-4d46ac77b426cfb1346233a028c73958.png"},91479:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/replace-bcf54ece5b7c9aa548b7243e00fd2c67.png"},38107:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/search-72b082202967672eff33b6c090e9dbba.png"},69870:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/select.kernel-703a383b5df2d41d96bf3c474453b2f8.png"},76703:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/server.display.name-f5ef83c15528f67dc8324485c1645a31.png"},51597:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/server.password-6ecbb5c9c4e91a334a4080099ef11d3f.png"},81367:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/server.url-ab39bd15cfe7f894a5eb3324d85d59ec.png"},23367:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/terminal-440ff9569fa09e4f3c3e3db5374cae99.png"},83729:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/vscode-3504eabc3e8242497f26e161243ffd18.png"},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>r});var t=a(96540);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);