"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[5809],{72079:(e,t,a)=>{a.d(t,{Ay:()=>d,RM:()=>o});var r=a(74848),n=a(28453);const o=[];function s(e){const t={a:"a",admonition:"admonition",p:"p",...(0,n.R)(),...e.components};return(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["If you have any questions or need further assistance, please visit our ",(0,r.jsx)(t.a,{href:"https://support.teradata.com/community",children:"community forum"})," where you can get support and interact with other community members."]})})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},36992:(e,t,a)=>{a.d(t,{Ay:()=>d,RM:()=>o});var r=a(74848),n=a(28453);const o=[];function s(e){const t={a:"a",admonition:"admonition",p:"p",...(0,n.R)(),...e.components};return(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,r.jsx)(t.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},77084:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var r=a(74848),n=a(28453),o=a(36992),s=a(72079);const d={author:"Krutik Pathak",email:"krutik.pathak@teradata.com",page_last_update:"July 27, 2023",description:"This tutorial describes the type of transformations that are needed to transform external data loaded through Airbyte with dbt.",keywords:["dbt","airbyte","data transformation","data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","data transfer","data extraction","enterprise analytics","elt."]},i="Transform data Loaded with Airbyte using dbt",l={id:"elt/transforming-external-data-loaded-via-airbyte-in-teradata-vantage-using-dbt",title:"Transform data Loaded with Airbyte using dbt",description:"This tutorial describes the type of transformations that are needed to transform external data loaded through Airbyte with dbt.",source:"@site/quickstarts/elt/transforming-external-data-loaded-via-airbyte-in-teradata-vantage-using-dbt.md",sourceDirName:"elt",slug:"/elt/transforming-external-data-loaded-via-airbyte-in-teradata-vantage-using-dbt",permalink:"/ai-unlimited-docs/pr-preview/pr-9/quickstarts/elt/transforming-external-data-loaded-via-airbyte-in-teradata-vantage-using-dbt",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{author:"Krutik Pathak",email:"krutik.pathak@teradata.com",page_last_update:"July 27, 2023",description:"This tutorial describes the type of transformations that are needed to transform external data loaded through Airbyte with dbt.",keywords:["dbt","airbyte","data transformation","data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","data transfer","data extraction","enterprise analytics","elt."]},sidebar:"tutorialSidebar",previous:{title:"Manage ELT pipelines as code with Terraform and Airbyte on Teradata Vantage",permalink:"/ai-unlimited-docs/pr-preview/pr-9/quickstarts/elt/terraform-airbyte-provider"},next:{title:"Use Airbyte to load data from external sources to Teradata Vantage",permalink:"/ai-unlimited-docs/pr-preview/pr-9/quickstarts/elt/use-airbyte-to-load-data-from-external-sources-to-teradata-vantage"}},c={},h=[{value:"Overview",id:"overview",level:3},{value:"Prerequisites",id:"prerequisites",level:3},...o.RM,{value:"Sample Data Loading",id:"sample-data-loading",level:3},{value:"Clone the project",id:"clone-the-project",level:3},{value:"Install dbt",id:"install-dbt",level:3},{value:"Configure dbt",id:"configure-dbt",level:3},{value:"The Jaffle Shop dbt project",id:"the-jaffle-shop-dbt-project",level:3},{value:"dbt transformations",id:"dbt-transformations",level:3},{value:"The following diagram shows the transformation steps in Teradata Vantage using dbt:\n[ditaa]",id:"the-following-diagram-shows-the-transformation-steps-in-teradata-vantage-using-dbtditaa",level:2},{value:"/--------------\\   JSON Transformation  /------------------| Raw JSON Data|-----------------------&gt;| Normalized Views |\n--------------/                        ------------------/\n|\n| Dimensional Modeling\nv\n/-------------|  Dimension  ||    and      |\n| Fact Tables |\n-------------/",id:"-----------------json-transformation---------------------raw-json-data------------------------normalized-views----------------------------------------------------------dimensional-modelingv---------------dimension------and-------fact-tables--------------",level:2},{value:"Staging models",id:"staging-models",level:3},{value:"Dimensional models (marts)",id:"dimensional-models-marts",level:3},{value:"Executing transformations",id:"executing-transformations",level:3},{value:"Test data",id:"test-data",level:3},{value:"Generate documentation",id:"generate-documentation",level:3},{value:"Lineage graph",id:"lineage-graph",level:4},{value:"Summary",id:"summary",level:3},{value:"Further reading",id:"further-reading",level:3},...s.RM];function f(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"transform-data-loaded-with-airbyte-using-dbt",children:"Transform data Loaded with Airbyte using dbt"}),"\n",(0,r.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(t.p,{children:["This tutorial demonstrates how to use ",(0,r.jsx)(t.a,{href:"https://docs.getdbt.com/docs/introduction",children:"dbt (Data Build Tool)"})," to transform external data load through ",(0,r.jsx)(t.a,{href:"https://github.com/airbytehq/airbyte",children:"Airbyte"})," (an Open-Source Extract Load tool) in Teradata Vantage."]}),"\n",(0,r.jsxs)(t.p,{children:["This tutorial is based on the original ",(0,r.jsx)(t.a,{href:"https://github.com/dbt-labs/jaffle_shop-dev",children:"dbt Jaffle Shop tutorial"})," with a small change, instead of using the ",(0,r.jsx)(t.code,{children:"dbt seed"})," command, the Jaffle Shop dataset is loaded from Google Sheets into Teradata Vantage using Airbyte. Data loaded through airbyte is contained in JSON columns as can be seen in the picture below:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Raw data in Teradata Vantage",src:a(3820).A+"",width:"2040",height:"1066"})}),"\n",(0,r.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Access to a Teradata Vantage Instance.","\n",(0,r.jsx)(o.Ay,{}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Sample data: The sample data ",(0,r.jsx)(t.a,{href:"https://docs.google.com/spreadsheets/d/1-R4F3q8J9KDnFRWpiT3Ysp1RlOoUu3PeQR7xDeLxFts/edit#gid=42273685",children:"Jaffle Shop Dataset"})," can be found in Google Sheets."]}),"\n",(0,r.jsxs)(t.li,{children:["Reference dbt project repository: ",(0,r.jsx)(t.a,{href:"https://github.com/Teradata/airbyte-dbt-jaffle",children:"Jaffle Project with Airbyte."})]}),"\n",(0,r.jsx)(t.li,{children:"Python 3.7, 3.8, 3.9, 3.10 or 3.11 installed."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"sample-data-loading",children:"Sample Data Loading"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Follow the steps in the ",(0,r.jsx)(t.a,{href:"https://quickstarts.teradata.com/elt/use-airbyte-to-load-data-from-external-sources-to-teradata-vantage.html",children:"Airbyte tutorial"}),". Make sure you load data from the ",(0,r.jsx)(t.a,{href:"https://docs.google.com/spreadsheets/d/1-R4F3q8J9KDnFRWpiT3Ysp1RlOoUu3PeQR7xDeLxFts/edit#gid=42273685",children:"Jaffle Shop spreadsheet"})," and not the default dataset referenced by the Airbyte tutorial. Also, set the ",(0,r.jsx)(t.code,{children:"Default Schema"})," in the Teradata destination to ",(0,r.jsx)(t.code,{children:"airbyte_jaffle_shop"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["When you configure a Teradata destination in Airbyte, it will ask for a ",(0,r.jsx)(t.code,{children:"Default Schema"}),". Set the ",(0,r.jsx)(t.code,{children:"Default Schema"})," to ",(0,r.jsx)(t.code,{children:"airbyte_jaffle_shop"}),"."]})}),"\n",(0,r.jsx)(t.h3,{id:"clone-the-project",children:"Clone the project"}),"\n",(0,r.jsx)(t.p,{children:"Clone the tutorial repository and change the directory to the project directory:\n+"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/Teradata/airbyte-dbt-jaffle\ncd airbyte-dbt-jaffle\n"})}),"\n",(0,r.jsx)(t.h3,{id:"install-dbt",children:"Install dbt"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Create a new python environment to manage dbt and its dependencies. Activate the environment:"}),"\n"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"python3 -m venv env\nsource env/bin/activate\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["You can activate the virtual environment in Windows by executing the corresponding batch file ",(0,r.jsx)(t.code,{children:"./myenv/Scripts/activate"}),"."]})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Install ",(0,r.jsx)(t.code,{children:"dbt-teradata"})," module and its dependencies. The core dbt module is included as a dependency so you don't have to install it separately:"]}),"\n"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pip install dbt-teradata\n"})}),"\n",(0,r.jsx)(t.h3,{id:"configure-dbt",children:"Configure dbt"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Initialize a dbt project."}),"\n"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"dbt init\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["The dbt project wizard will ask you for a project name and database management system to use in the project. In this demo, we define the project name as ",(0,r.jsx)(t.code,{children:"dbt_airbyte_demo"}),". Since we are using the dbt-teradata connector, the only database management system available is Teradata.\n",(0,r.jsx)(t.img,{alt:"Project name prompt",src:a(55051).A+"",width:"1544",height:"205"}),"\n",(0,r.jsx)(t.img,{alt:"Database name prompt",src:a(33465).A+"",width:"1416",height:"220"})]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Configure the ",(0,r.jsx)(t.code,{children:"profiles.yml"})," file located in the ",(0,r.jsx)(t.code,{children:"$HOME/.dbt"})," directory. If the ",(0,r.jsx)(t.code,{children:"profiles.yml"})," file is not present, you can create a new one."]}),"\n",(0,r.jsxs)(t.li,{children:["Adjust ",(0,r.jsx)(t.code,{children:"server"}),", ",(0,r.jsx)(t.code,{children:"username"}),", ",(0,r.jsx)(t.code,{children:"password"})," to match your Teradata instance's ",(0,r.jsx)(t.code,{children:"HOST"}),", ",(0,r.jsx)(t.code,{children:"Username"}),", ",(0,r.jsx)(t.code,{children:"Password"})," respectively."]}),"\n",(0,r.jsxs)(t.li,{children:["In this configuration, ",(0,r.jsx)(t.code,{children:"schema"})," stands for the database that contains the sample data, in our case that is the default schema that we defined in Airbyte ",(0,r.jsx)(t.code,{children:"airbyte_jaffle_shop"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:', id="dbt_first_config", role="emits-gtm-events"',children:"dbt_airbyte_demo:\n  target: dev\n  outputs:\n    dev:\n      type: teradata\n      server: <host>\n      schema: airbyte_jaffle_shop\n      username: <user>\n      password: <password>\n      tmode: ANSI\n\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Once the ",(0,r.jsx)(t.code,{children:"profiles.yml"})," file is ready, we can validate the setup. Go to the dbt project folder and run the command:"]}),"\n"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"dbt debug\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["If the debug command returned errors, you likely have an issue with the content of ",(0,r.jsx)(t.code,{children:"profiles.yml"}),". If the setup is correct, you will get message ",(0,r.jsx)(t.code,{children:"All checks passed!"}),"\n",(0,r.jsx)(t.img,{alt:"dbt debug output",src:a(73572).A+"",width:"877",height:"762"})]}),"\n",(0,r.jsx)(t.h3,{id:"the-jaffle-shop-dbt-project",children:"The Jaffle Shop dbt project"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"jaffle_shop"})," is a fictional restaurant that takes orders online. The data of this business consists of tables for ",(0,r.jsx)(t.code,{children:"customers"}),", ",(0,r.jsx)(t.code,{children:"orders"})," and ",(0,r.jsx)(t.code,{children:"payments"}),"that follow the entity relations diagram below:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'# Entities\n\n[customers] {bgcolor: "#f37843", color: "#ffffff", border: "0", border-color: "#ffffff"}\n  *`id  ` {bgcolor: "#f9d6cd", color: "#000000", label: "int", border: "1", border-color: "#ffffff"}\n  `first_name  ` {bgcolor: "#fcece8", color: "#868686", label: "varchar", border: "1", border-color: "#ffffff"}\n  `last_name  ` {bgcolor: "#fcece8", color: "#868686", label: "varchar", border: "1", border-color: "#ffffff"}\n  `email  ` {bgcolor: "#fcece8", color: "#868686", label: "varchar", border: "1", border-color: "#ffffff"}\n\n[orders] {bgcolor: "#f37843", color: "#ffffff", border: "0", border-color: "#ffffff"}\n  *`id  ` {bgcolor: "#f9d6cd", color: "#000000", label: "int", border: "1", border-color: "#ffffff"}\n  +`user_id  ` {bgcolor: "#fcece8", color: "#868686", label: "int", border: "1", border-color: "#ffffff"}\n  `order_date  ` {bgcolor: "#fcece8", color: "#868686", label: "date", border: "1", border-color: "#ffffff"}\n  `status  ` {bgcolor: "#fcece8", color: "#868686", label: "varchar", border: "1", border-color: "#ffffff"}\n\n[payments] {bgcolor: "#f37843", color: "#ffffff", border: "0", border-color: "#ffffff"}\n  *`id  ` {bgcolor: "#f9d6cd", color: "#000000", label: "int", border: "1", border-color: "#ffffff"}\n  +`order_id  ` {bgcolor: "#fcece8", color: "#868686", label: "int", border: "1", border-color: "#ffffff"}\n  `payment_method  ` {bgcolor: "#fcece8", color: "#868686", label: "int", border: "1", border-color: "#ffffff"}\n  `amount  ` {bgcolor: "#fcece8", color: "#868686", label: "int", border: "1", border-color: "#ffffff"}\n\n# Relationships\n\ncustomers   1--* orders\norders      1--* payments\n'})}),"\n",(0,r.jsx)(t.p,{children:"The data in the source system is normalized. A dimensional model based on the same data, more suitable for analytics tools, is presented below:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'# Entities\n\n[`dimension: customers`] {bgcolor: "#f37843", color: "#ffffff", border: "0", border-color: "#ffffff"}\n  *`customer_id  ` {bgcolor: "#f9d6cd", color: "#000000", label: "int", border: "1", border-color: "#ffffff"}\n  `first_name  ` {bgcolor: "#fcece8", color: "#868686", label: "varchar", border: "1", border-color: "#ffffff"}\n  `last_name  ` {bgcolor: "#fcece8", color: "#868686", label: "varchar", border: "1", border-color: "#ffffff"}\n  `email  ` {bgcolor: "#fcece8", color: "#868686", label: "varchar", border: "1", border-color: "#ffffff"}\n  `first_order  ` {bgcolor: "#fcece8", color: "#868686", label: "date", border: "1", border-color: "#ffffff"}\n  `most_recent_order  ` {bgcolor: "#fcece8", color: "#868686", label: "date", border: "1", border-color: "#ffffff"}\n  `number_of_orders  ` {bgcolor: "#fcece8", color: "#868686", label: "int", border: "1", border-color: "#ffffff"}\n  `total_order_amount  ` {bgcolor: "#fcece8", color: "#868686", label: "int", border: "1", border-color: "#ffffff"}\n\n[`fact: orders`] {bgcolor: "#f37843", color: "#ffffff", border: "0", border-color: "#ffffff"}\n  *`order_id  ` {bgcolor: "#f9d6cd", color: "#000000", label: "int", border: "1", border-color: "#ffffff"}\n  +`customer_id  ` {bgcolor: "#fcece8", color: "#868686", label: "int", border: "1", border-color: "#ffffff"}\n  `order_date  ` {bgcolor: "#fcece8", color: "#868686", label: "date", border: "1", border-color: "#ffffff"}\n  `status  ` {bgcolor: "#fcece8", color: "#868686", label: "varchar", border: "1", border-color: "#ffffff"}\n  `amount  ` {bgcolor: "#fcece8", color: "#868686", label: "int", border: "1", border-color: "#ffffff"}\n  `credit_card_amount  ` {bgcolor: "#fcece8", color: "#868686", label: "int", border: "1", border-color: "#ffffff"}\n  `coupon_amount  ` {bgcolor: "#fcece8", color: "#868686", label: "int", border: "1", border-color: "#ffffff"}\n  `bank_transfer_amount  ` {bgcolor: "#fcece8", color: "#868686", label: "int", border: "1", border-color: "#ffffff"}\n  `gift_card_amount  ` {bgcolor: "#fcece8", color: "#868686", label: "int", border: "1", border-color: "#ffffff"}\n\n# Relationships\n`dimension: customers`   1--* `fact: orders`\n'})}),"\n",(0,r.jsx)(t.h3,{id:"dbt-transformations",children:"dbt transformations"}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["The complete dbt project encompassing the transformations detailed below is located at ",(0,r.jsx)(t.a,{href:"https://github.com/Teradata/airbyte-dbt-jaffle",children:"Jaffle Project with Airbyte"}),"."]})}),"\n",(0,r.jsx)(t.p,{children:"The reference dbt project performs two types of transformations."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"First, it transforms the raw data (in JSON format), loaded from Google Sheets via Airbyte, into staging views. At this stage the data is normalized."}),"\n",(0,r.jsx)(t.li,{children:"Next, it transforms the normalized views into a dimensional model ready for analytics."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"the-following-diagram-shows-the-transformation-steps-in-teradata-vantage-using-dbtditaa",children:"The following diagram shows the transformation steps in Teradata Vantage using dbt:\n[ditaa]"}),"\n",(0,r.jsxs)(t.h2,{id:"-----------------json-transformation---------------------raw-json-data------------------------normalized-views----------------------------------------------------------dimensional-modelingv---------------dimension------and-------fact-tables--------------",children:["/--------------\\   JSON Transformation  /------------------",(0,r.jsx)(t.br,{}),"\n","| Raw JSON Data|-----------------------\x3e| Normalized Views |\n--------------/                        ------------------/\n|\n| Dimensional Modeling\nv\n/-------------",(0,r.jsx)(t.br,{}),"\n","|  Dimension  |",(0,r.jsx)(t.br,{}),"\n","|    and      |\n| Fact Tables |\n-------------/"]}),"\n",(0,r.jsxs)(t.p,{children:["As in all dbt projects, the folder ",(0,r.jsx)(t.code,{children:"models"})," contains the data models that the project materializes as tables, or views, according to the corresponding configurations at the project, or individual model level."]}),"\n",(0,r.jsxs)(t.p,{children:["The models can be organized into different folders according to their purpose in the organization of the data warehouse/lake. Common folder layouts include a folder for ",(0,r.jsx)(t.code,{children:"staging"}),", a folder for ",(0,r.jsx)(t.code,{children:"core"}),", and a folder for ",(0,r.jsx)(t.code,{children:"marts"}),". This structure can be simplified without affecting the workings of dbt."]}),"\n",(0,r.jsx)(t.h3,{id:"staging-models",children:"Staging models"}),"\n",(0,r.jsxs)(t.p,{children:["In the original ",(0,r.jsx)(t.a,{href:"https://github.com/dbt-labs/jaffle_shop-dev",children:"dbt Jaffle Shop tutorial"})," the project's data is loaded from csv files located in the ",(0,r.jsx)(t.code,{children:"./data"})," folder through dbt's ",(0,r.jsx)(t.code,{children:"seed"})," command. The ",(0,r.jsx)(t.code,{children:"seed"})," command is commonly used to load data from tables, however, this command is not designed to perform data loading."]}),"\n",(0,r.jsx)(t.p,{children:"In this demo we are assuming a more typical setup in which a tool designed for data loading, Airbyte, was used to load data into the datawarehouse/lake.\nData loaded through Airbyte though is represented as raw JSON strings. From these raw data we are creating normalized staging views. We perform this task through the following staging models."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.code,{children:"stg_customers"})," model creates the normalized staging view for ",(0,r.jsx)(t.code,{children:"customers"})," from the ",(0,r.jsx)(t.code,{children:"_airbyte_raw_customers"})," table."]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.code,{children:"stg_orders"})," model creates the normalized view for ",(0,r.jsx)(t.code,{children:"orders"})," from the ",(0,r.jsx)(t.code,{children:"_airbyte_raw_orders"})," table"]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.code,{children:"stg_payments"})," model creates the normalized view for ",(0,r.jsx)(t.code,{children:"payments"})," from the ",(0,r.jsx)(t.code,{children:"_airbyte_raw_payments"})," table."]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"As the method of extracting JSON strings remains consistent across all staging models, we will provide a detailed explanation for the transformations using just one of these models as an example."})}),"\n",(0,r.jsxs)(t.p,{children:["Below an example of transforming raw JSON data into a view through the ",(0,r.jsx)(t.code,{children:"stg_orders.sql"})," model :"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"WITH source AS (\n    SELECT * FROM {{ source('airbyte_jaffle_shop', '_airbyte_raw_orders')}}\n),\n\nflattened_json_data AS (\n  SELECT\n    _airbyte_data.JSONExtractValue('$.id') AS order_id,\n    _airbyte_data.JSONExtractValue('$.user_id') AS customer_id,\n    _airbyte_data.JSONExtractValue('$.order_date') AS order_date,\n    _airbyte_data.JSONExtractValue('$.status') AS status\n  FROM source\n)\n\n\nSELECT * FROM flattened_json_data\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["In this model the source is defined as the raw table ",(0,r.jsx)(t.code,{children:"_airbyte_raw_orders"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["This raw table columns contains both metadata, and the actual ingested data. The data column is called ",(0,r.jsx)(t.code,{children:"_airbyte_data"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"This column is of Teradata JSON type. This type supports the method JSONExtractValue for retrieving scalar values from the JSON object."}),"\n",(0,r.jsx)(t.li,{children:"In this model we are retrieving each of the attributes of interest and adding meaningful aliases in order to materialize a view."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"dimensional-models-marts",children:"Dimensional models (marts)"}),"\n",(0,r.jsx)(t.p,{children:"Building a Dimensional Model is a two-step process:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["First, we take the normalized views in ",(0,r.jsx)(t.code,{children:"stg_orders"}),", ",(0,r.jsx)(t.code,{children:"stg_customers"}),", ",(0,r.jsx)(t.code,{children:"stg_payments"})," and build denormalized intermediate join tables ",(0,r.jsx)(t.code,{children:"customer_orders"}),", ",(0,r.jsx)(t.code,{children:"order_payments"}),", ",(0,r.jsx)(t.code,{children:"customer_payments"}),". You will find the definitions of these tables in ",(0,r.jsx)(t.code,{children:"./models/marts/core/intermediate"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["In the second step, we create the ",(0,r.jsx)(t.code,{children:"dim_customers"})," and ",(0,r.jsx)(t.code,{children:"fct_orders"})," models. These constitute the dimensional model tables that we want to expose to our BI tool. You will find the definitions of these tables in ",(0,r.jsx)(t.code,{children:"./models/marts/core"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"executing-transformations",children:"Executing transformations"}),"\n",(0,r.jsx)(t.p,{children:"For executing the transformations defined in the dbt project we run:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"dbt run\n"})}),"\n",(0,r.jsx)(t.p,{children:"You will get the status of each model as given below:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"dbt run output",src:a(14506).A+"",width:"1021",height:"580"})}),"\n",(0,r.jsx)(t.h3,{id:"test-data",children:"Test data"}),"\n",(0,r.jsx)(t.p,{children:"To ensure that the data in the dimensional model is correct, dbt allows us to define and execute tests against the data."}),"\n",(0,r.jsxs)(t.p,{children:["The tests are defined in ",(0,r.jsx)(t.code,{children:"./models/marts/core/schema.yml"})," and ",(0,r.jsx)(t.code,{children:"./models/staging/schema.yml"}),".  Each column can have multiple tests configured under the ",(0,r.jsx)(t.code,{children:"tests"})," key."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["For example, we expect that ",(0,r.jsx)(t.code,{children:"fct_orders.order_id"})," column will contain unique, non-null values."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"To validate that the data in the produced tables satisfies the test conditions run:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"dbt test\n"})}),"\n",(0,r.jsx)(t.p,{children:"If the data in the models satisfies all the test cases, the result of this command will be as below:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"dbt test output",src:a(40285).A+"",width:"972",height:"880"})}),"\n",(0,r.jsx)(t.h3,{id:"generate-documentation",children:"Generate documentation"}),"\n",(0,r.jsx)(t.p,{children:"Our model consists of just a few tables. In a scenario with more sources of data, and a more complex dimensional model, documenting the data lineage and what is the purpose of each of the intermediate models is very important."}),"\n",(0,r.jsx)(t.p,{children:"Generating this type of documentation with dbt is very straight forward."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"dbt docs generate\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This will produce html files in the ",(0,r.jsx)(t.code,{children:"./target"})," directory."]}),"\n",(0,r.jsx)(t.p,{children:"You can start your own server to browse the documentation. The following command will start a server and open up a browser tab with the docs' landing page:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"dbt docs serve\n"})}),"\n",(0,r.jsx)(t.h4,{id:"lineage-graph",children:"Lineage graph"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"dbt lineage graph",src:a(85728).A+"",width:"1810",height:"761"})}),"\n",(0,r.jsx)(t.h3,{id:"summary",children:"Summary"}),"\n",(0,r.jsxs)(t.p,{children:["This tutorial demonstrated how to use dbt to transform raw JSON data loaded through Airbyte into dimensional model in Teradata Vantage. The sample project takes raw JSON data loaded in Teradata Vantage, creates normalized views and finally produces a dimensional data mart. We used dbt to transform JSON into Normalized views and multiple dbt commands to create models (",(0,r.jsx)(t.code,{children:"dbt run"}),"), test the data (",(0,r.jsx)(t.code,{children:"dbt test"}),"), and generate and serve model documentation (",(0,r.jsx)(t.code,{children:"dbt docs generate"}),", ",(0,r.jsx)(t.code,{children:"dbt docs serve"}),")."]}),"\n",(0,r.jsx)(t.h3,{id:"further-reading",children:"Further reading"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://docs.getdbt.com/docs",children:"dbt documentation"})}),"\n",(0,r.jsxs)(t.li,{children:["[dbt-teradata plugin documentation](",(0,r.jsx)(t.a,{href:"https://github.com/Teradata/dbt-teradata",children:"https://github.com/Teradata/dbt-teradata"})]}),"\n"]}),"\n","\n",(0,r.jsx)(s.Ay,{})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},73572:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/dbt_debug-0c6f5150b089a79f80e0932188417383.png"},85728:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/dbt_docs_serve-6ed92e0e37901efb1ef982192a505b46.png"},33465:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/dbt_init_database_name-139455f62d894458cc1c65b8222b0467.png"},55051:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/dbt_init_project_name-2a668343bf1781d2aebf058a74ecafb1.png"},14506:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/dbt_run-829e4799013dd9565748543b5ff6ba72.png"},40285:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/dbt_test-af05587f43889af438fb75d7268da45d.png"},3820:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/raw_data_vantage_dbeaver-f55a0197955e819bc0aef91f8ccca31e.png"},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>d});var r=a(96540);const n={},o=r.createContext(n);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);