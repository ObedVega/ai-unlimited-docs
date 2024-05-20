"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[9979],{36992:(e,t,a)=>{a.d(t,{Ay:()=>s,RM:()=>o});var r=a(74848),n=a(28453);const o=[];function i(e){const t={a:"a",admonition:"admonition",p:"p",...(0,n.R)(),...e.components};return(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["If you need a test instance of Vantage, you can provision one for free at ",(0,r.jsx)(t.a,{href:"https://clearscape.teradata.com/sign-in?utm_source=dev_portal&utm_medium=quickstart_tutorial&utm_campaign=quickstarts",children:"https://clearscape.teradata.com"})]})})}function s(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},26583:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=a(74848),n=a(28453),o=a(36992);const i={author:"Ravi Chillanki",email:"ravi.chillanki@teradata.com",page_last_update:"August 4th, 2023",description:"dbt Feast integration with Teradata",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","AI/ML","AI","ML","feature engineering","feature store","FEAST"]},s="Use dbt and FEAST to build a feature store in Teradata Vantage",d={id:"other-integrations/getting.started.dbt-feast-teradata-pipeline",title:"Use dbt and FEAST to build a feature store in Teradata Vantage",description:"dbt Feast integration with Teradata",source:"@site/quickstarts/other-integrations/getting.started.dbt-feast-teradata-pipeline.md",sourceDirName:"other-integrations",slug:"/other-integrations/getting.started.dbt-feast-teradata-pipeline",permalink:"/ai-unlimited-docs/pr-preview/pr-9/quickstarts/other-integrations/getting.started.dbt-feast-teradata-pipeline",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{author:"Ravi Chillanki",email:"ravi.chillanki@teradata.com",page_last_update:"August 4th, 2023",description:"dbt Feast integration with Teradata",keywords:["data warehouses","compute storage separation","teradata","vantage","cloud data platform","object storage","business intelligence","enterprise analytics","AI/ML","AI","ML","feature engineering","feature store","FEAST"]},sidebar:"tutorialSidebar",previous:{title:"Execute Airflow workflows that use dbt with Teradata Vantage",permalink:"/ai-unlimited-docs/pr-preview/pr-9/quickstarts/other-integrations/execute-airflow-workflows-that-use-dbt-with-teradata-vantage"},next:{title:"Integrate Teradata Vantage with KNIME Analytics Platform",permalink:"/ai-unlimited-docs/pr-preview/pr-9/quickstarts/other-integrations/integrate-teradata-vantage-with-knime"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Introduction",id:"introduction",level:2},{value:"dbt",id:"dbt",level:3},{value:"Feast",id:"feast",level:3},{value:"Prerequisites",id:"prerequisites",level:2},...o.RM,{value:"Objective",id:"objective",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"About the Banking warehouse",id:"about-the-banking-warehouse",level:2},{value:"Configure dbt",id:"configure-dbt",level:2},{value:"Configure FEAST",id:"configure-feast",level:2},{value:"Offline Store Config",id:"offline-store-config",level:3},{value:"Syntax for Teradata SQL Registry",id:"syntax-for-teradata-sql-registry",level:3},{value:"Run dbt",id:"run-dbt",level:2},{value:"Create the dimensional model",id:"create-the-dimensional-model",level:3},{value:"Run FEAST",id:"run-feast",level:2},{value:"Feature Repository definition",id:"feature-repository-definition",level:3},{value:"Generate training data",id:"generate-training-data",level:3},{value:"Summary",id:"summary",level:2},{value:"Further Reading",id:"further-reading",level:2}];function f(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"use-dbt-and-feast-to-build-a-feature-store-in-teradata-vantage",children:"Use dbt and FEAST to build a feature store in Teradata Vantage"}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(t.p,{children:["This tutorial shows an approach to creating a dbt pipeline that takes raw data and turns it into FEAST features. The pipeline leverages  '",(0,r.jsx)(t.a,{href:"https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/Teradata-VantageTM-Analytics-Database-Analytic-Functions-17.20",children:"ClearScape Analytics functions"}),"' for data transformations. The output of the transformations is loaded into FEAST to materialize features that can be used in ML models."]}),"\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(t.h3,{id:"dbt",children:"dbt"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://www.getdbt.com/product/what-is-dbt",children:"dbt"})," (Data Build Tool) is a data transformation tool that is the cornerstone of the Modern Data Stack. It takes care of the T in ELT (Extract Load Transform). The assumption is that some other process brings raw data into your data warehouse or lake. This data then needs to be transformed."]}),"\n",(0,r.jsx)(t.h3,{id:"feast",children:"Feast"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://docs.feast.dev",children:"Feast"})," (Feature Store) is a flexible data system that utilizes existing technology to manage and provide machine learning features to real-time models. It allows for customization to meet specific needs. It also allows us to make features consistently available for training and serving, avoid data leakage and decouple ML from data infrastructure."]}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Access to a Teradata Vantage database instance."}),"\n",(0,r.jsx)(o.Ay,{}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Feast-Teradata  installed locally. See ",(0,r.jsx)(t.a,{href:"https://quickstarts.teradata.com/modelops/using-feast-feature-store-with-teradata-vantage.html#_overview",children:"Feast-Teradata installation instructions"})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["dbt installed locally. See ",(0,r.jsx)(t.a,{href:"https://quickstarts.teradata.com/dbt.html",children:"dbt installation instructions"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"objective",children:"Objective"}),"\n",(0,r.jsx)(t.p,{children:"The goal is to create a data pipeline with Teradata Vantage as a source, and perform data transformation on some variables in dbt. The principle transformation of data we do in dbt is the one-hot encoding of several columns like gender, marital status, state code, etc. On top of that, the account type column data will be transformed by performing aggregation operations on a couple of columns. All of this together generates the desired dataset with transformed data. The transformed dataset is used as an input into FEAST to store features. Features are then used to generate a training dataset for models."}),"\n",(0,r.jsx)(t.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Create a new python environment to manage dbt, feast, and their dependencies. Activate the environment:"}),"\n"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"python3 -m venv env\nsource env/bin/activate\n"})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsx)(t.li,{children:"Clone the tutorial repository and change the directory to the project directory:"}),"\n"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/Teradata/tdata-pipeline.git\n"})}),"\n",(0,r.jsx)(t.p,{children:"The directory structure of the project cloned looks like this:\n+"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"tdata-pipeline/\n    feature_repo/\n        feature_views.py\n        feature_store.yml\n    dbt_transformation/\n        ...\n        macros\n        models\n        ...\n    generate_training_data.py\n    CreateDB.sql\n    dbt_project.yml\n"})}),"\n",(0,r.jsx)(t.h2,{id:"about-the-banking-warehouse",children:"About the Banking warehouse"}),"\n",(0,r.jsx)(t.p,{children:"teddy_bank is a fictitious dataset of banking customers, consisting of mainly 3 tables customers, accounts, and\ntransactions, with the following entity-relationship diagram:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'# Entities\n\n\n[raw_customers] {bgcolor: "#f37843", color: "#ffffff", border: "0", border-color: "#ffffff"}\n  *`cust_id  ` {bgcolor: "#f9d6cd", color: "#000000", label: "INTEGER", border: "1", border-color: "#ffffff"}\n  `income  ` {bgcolor: "#fcece8", color: "#868686", label: "DECIMAL(15, 1)", border: "1", border-color: "#ffffff"}\n  `age  ` {bgcolor: "#fcece8", color: "#868686", label: "INTEGER", border: "1", border-color: "#ffffff"}\n  `years_with_bank  ` {bgcolor: "#fcece8", color: "#868686", label: "INTEGER", border: "1", border-color: "#ffffff"}\n  `nbr_children  ` {bgcolor: "#fcece8", color: "#868686", label: "INTEGER", border: "1", border-color: "#ffffff"}\n  `gender  ` {bgcolor: "#fcece8", color: "#868686", label: "VARCHAR(1)", border: "1", border-color: "#ffffff"}\n  `marital_status  ` {bgcolor: "#fcece8", color: "#868686", label: "VARCHAR(1)", border: "1", border-color: "#ffffff"}\n  `name_prefix  ` {bgcolor: "#fcece8", color: "#868686", label: "VARCHAR(4)", border: "1", border-color: "#ffffff"}\n  `first_name  ` {bgcolor: "#fcece8", color: "#868686", label: "VARCHAR(12)", border: "1", border-color: "#ffffff"}\n  `last_name  ` {bgcolor: "#fcece8", color: "#868686", label: "VARCHAR(15)", border: "1", border-color: "#ffffff"}\n  `street_nbr  ` {bgcolor: "#fcece8", color: "#868686", label: "VARCHAR(8)", border: "1", border-color: "#ffffff"}\n  `street_name  ` {bgcolor: "#fcece8", color: "#868686", label: "VARCHAR(15)", border: "1", border-color: "#ffffff"}\n  `postal_code  ` {bgcolor: "#fcece8", color: "#868686", label: "VARCHAR(5)", border: "1", border-color: "#ffffff"}\n  `city_name  ` {bgcolor: "#fcece8", color: "#868686", label: "VARCHAR(16)", border: "1", border-color: "#ffffff"}\n  `state_code  ` {bgcolor: "#fcece8", color: "#868686", label: "VARCHAR(2)", border: "1", border-color: "#ffffff"}\n\n\n[raw_accounts] {bgcolor: "#f37843", color: "#ffffff", border: "0", border-color: "#ffffff"}\n  *`acct_nbr  ` {bgcolor: "#f9d6cd", color: "#000000", label: "VARCHAR(18)", border: "1", border-color: "#ffffff"}\n  +`cust_id  ` {bgcolor: "#fcece8", color: "#868686", label: "INTEGER", border: "1", border-color: "#ffffff"}\n  `acct_type  ` {bgcolor: "#fcece8", color: "#868686", label: "VARCHAR(2)", border: "1", border-color: "#ffffff"}\n  `account_active  ` {bgcolor: "#fcece8", color: "#868686", label: "VARCHAR(1)", border: "1", border-color: "#ffffff"}\n  `acct_start_date  ` {bgcolor: "#fcece8", color: "#868686", label: "DATE", border: "1", border-color: "#ffffff"}\n  `acct_end_date  ` {bgcolor: "#fcece8", color: "#868686", label: "DATE", border: "1", border-color: "#ffffff"}\n  `starting_balance  ` {bgcolor: "#fcece8", color: "#868686", label: "DECIMAL(11, 3)", border: "1", border-color: "#ffffff"}\n  `ending_balance  ` {bgcolor: "#fcece8", color: "#868686", label: "DECIMAL(11, 3)", border: "1", border-color: "#ffffff"}\n\n[raw_transactions] {bgcolor: "#f37843", color: "#ffffff", border: "0", border-color: "#ffffff"}\n  *`tran_id  ` {bgcolor: "#f9d6cd", color: "#000000", label: "INTEGER", border: "1", border-color: "#ffffff"}\n  +`acct_nbr  ` {bgcolor: "#fcece8", color: "#868686", label: "VARCHAR(18)", border: "1", border-color: "#ffffff"}\n  `tran_amt  ` {bgcolor: "#fcece8", color: "#868686", label: "DECIMAL(9, 2)", border: "1", border-color: "#ffffff"}\n  `principal_amt  ` {bgcolor: "#fcece8", color: "#868686", label: "DECIMAL(15, 2)", border: "1", border-color: "#ffffff"}\n  `interest_amt  ` {bgcolor: "#fcece8", color: "#868686", label: "DECIMAL(11, 3)", border: "1", border-color: "#ffffff"}\n  `new_balance  ` {bgcolor: "#fcece8", color: "#868686", label: "DECIMAL(9, 2)", border: "1", border-color: "#ffffff"}\n  `tran_date  ` {bgcolor: "#fcece8", color: "#868686", label: "DATE", border: "1", border-color: "#ffffff"}\n  `tran_time  ` {bgcolor: "#fcece8", color: "#868686", label: "INTEGER", border: "1", border-color: "#ffffff"}\n  `channel  ` {bgcolor: "#fcece8", color: "#868686", label: "VARCHAR(1)", border: "1", border-color: "#ffffff"}\n  `tran_code  ` {bgcolor: "#fcece8", color: "#868686", label: "VARCHAR(2)", border: "1", border-color: "#ffffff"}\n\n# Relationships\n\nraw_customers   1--* raw_accounts\nraw_accounts      1--* raw_transactions\n'})}),"\n",(0,r.jsx)(t.p,{children:"dbt takes this raw data and builds the following model, which is more suitable for ML modeling and analytics tools:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"dbt feast",src:a(36793).A+"",width:"769",height:"689"})}),"\n",(0,r.jsx)(t.h2,{id:"configure-dbt",children:"Configure dbt"}),"\n",(0,r.jsxs)(t.p,{children:["Create file ",(0,r.jsx)(t.code,{children:"$HOME/.dbt/profiles.yml"})," with the following content. Adjust ",(0,r.jsx)(t.code,{children:"<host>"}),", ",(0,r.jsx)(t.code,{children:"<user>"}),", ",(0,r.jsx)(t.code,{children:"<password>"})," to match your Teradata instance."]}),"\n",(0,r.jsx)(t.admonition,{title:"[Database setup]",type:"note",children:(0,r.jsxs)(t.p,{children:["The following dbt profile points to a database called ",(0,r.jsx)(t.code,{children:"teddy_bank"}),". You can change ",(0,r.jsx)(t.code,{children:"schema"})," value to point to an existing database in your Teradata Vantage instance:"]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:', id="dbt_first_config", role="emits-gtm-events"',children:"dbt_transformation:\n  target: dev\n  outputs:\n    dev:\n      type: teradata\n      host: <host>\n      user: <user>\n      password: <password>\n      schema: teddy_bank\n      tmode: ANSI\n"})}),"\n",(0,r.jsx)(t.p,{children:"Validate the setup:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"dbt debug\n"})}),"\n",(0,r.jsxs)(t.p,{children:["If the debug command returned errors, you likely have an issue with the content of ",(0,r.jsx)(t.code,{children:"profiles.yml"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"configure-feast",children:"Configure FEAST"}),"\n",(0,r.jsxs)(t.p,{children:["Feast configuration addresses connection to your Vantage database. The yaml file created while initializing the feast\nproject, ",(0,r.jsx)(t.code,{children:"$HOME/.feast/feature_repo/feature_store.yml"})," can hold the details of offline storage, online storage, provider\nand registry. Adjust ",(0,r.jsx)(t.code,{children:"<host>"}),", ",(0,r.jsx)(t.code,{children:"<user>"}),", ",(0,r.jsx)(t.code,{children:"<password>"})," to match your Teradata instance."]}),"\n",(0,r.jsx)(t.admonition,{title:"[Database setup]",type:"note",children:(0,r.jsxs)(t.p,{children:["The following dbt profile points to a database called ",(0,r.jsx)(t.code,{children:"teddy_bank"}),". You can change ",(0,r.jsx)(t.code,{children:"schema"})," value to point to an\nexisting database in your Teradata Vantage instance"]})}),"\n",(0,r.jsx)(t.h3,{id:"offline-store-config",children:"Offline Store Config"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:', id="feast_first_config", role="emits-gtm-events"',children:"project: td_pipeline\nregistry:\n    registry_type: sql\n    path: teradatasql://<user>:<password>@<hostIP>/?database=teddy_bank&LOGMECH=TDNEGO\nprovider: local\noffline_store:\n    type: feast_teradata.offline.teradata.TeradataOfflineStore\n    host: <host>\n    database: teddy_bank\n    user: <user>\n    password: <password>\n    log_mech: TDNEGO\nentity_key_serialization_version: 2\n"})}),"\n",(0,r.jsx)(t.h3,{id:"syntax-for-teradata-sql-registry",children:"Syntax for Teradata SQL Registry"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"path = 'teradatasql://'+ teradata_user +':' + teradata_password + '@'+host + '/?database=' +\n        teradata_database + '&LOGMECH=' + teradata_log_mech\n"})}),"\n",(0,r.jsx)(t.h2,{id:"run-dbt",children:"Run dbt"}),"\n",(0,r.jsxs)(t.p,{children:["In this step, we will populate the following data tables: ",(0,r.jsx)(t.code,{children:"customers"}),", ",(0,r.jsx)(t.code,{children:"accounts"}),", and ",(0,r.jsx)(t.code,{children:"transactions"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"dbt seed\n"})}),"\n",(0,r.jsx)(t.h3,{id:"create-the-dimensional-model",children:"Create the dimensional model"}),"\n",(0,r.jsx)(t.p,{children:"Now that we have the raw data tables, we can instruct dbt to create the dimensional model:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"dbt run --select Analytic_Dataset\n"})}),"\n",(0,r.jsx)(t.h2,{id:"run-feast",children:"Run FEAST"}),"\n",(0,r.jsx)(t.h3,{id:"feature-repository-definition",children:"Feature Repository definition"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"TeradataSource:"})," Data Source for features stored in Teradata (Enterprise or Lake) or accessible via a Foreign Table from Teradata (NOS, QueryGrid)"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Entity:"})," A collection of semantically related features"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Feature View:"})," A feature view is a group of feature data from a specific data source. Feature views allow you to consistently define features and their data sources, enabling the reuse of feature groups across a project"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'DBT_source = TeradataSource( database=dbload, table=f"Analytic_Dataset", timestamp_field="event_timestamp")\n\ncustomer = Entity(name = "customer", join_keys = [\'cust_id\'])\n\nads_fv = FeatureView(name="ads_fv",entities=[customer],source=DBT_source, schema=[\n        Field(name="age", dtype=Float32),\n        Field(name="income", dtype=Float32),\n        Field(name="q1_trans_cnt", dtype=Int64),\n        Field(name="q2_trans_cnt", dtype=Int64),\n        Field(name="q3_trans_cnt", dtype=Int64),\n        Field(name="q4_trans_cnt", dtype=Int64),\n    ],)\n'})}),"\n",(0,r.jsx)(t.h3,{id:"generate-training-data",children:"Generate training data"}),"\n",(0,r.jsx)(t.p,{children:"The approach to generating training data can vary. Depending upon the requirements, 'entitydf' may be joined with the source data tables using the feature views mapping. Here is a sample function that generates a training dataset."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'def get_Training_Data():\n    # Initialize a FeatureStore with our current repository\'s configurations\n    store = FeatureStore(repo_path="feature_repo")\n    con = create_context(host = os.environ["latest_vm"], username = os.environ["dbc_pwd"],\n            password = os.environ["dbc_pwd"], database = "EFS")\n    entitydf = DataFrame(\'Analytic_Dataset\').to_pandas()\n    entitydf.reset_index(inplace=True)\n    print(entitydf)\n    entitydf = entitydf[[\'cust_id\',\'event_timestamp\']]\n    training_data = store.get_historical_features(\n        entity_df=entitydf,\n        features=[\n        "ads_fv:age"\n        ,"ads_fv:income"\n        ,"ads_fv:q1_trans_cnt"\n        ,"ads_fv:q2_trans_cnt"\n        ,"ads_fv:q3_trans_cnt"\n        ,"ads_fv:q4_trans_cnt"\n        ],\n        full_feature_names=True\n    ).to_df()\n\n    return training_data\n\n\n'})}),"\n",(0,r.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(t.p,{children:"This tutorial demonstrated how to use dbt and FEAST with Teradata Vantage. The sample project takes raw data from Teradata Vantage and produces features with dbt. Metadata of features that form the base to generate a training dataset for a model was then created with FEAST; all its corresponding tables that create the feature store, are also generated at runtime within the same database."}),"\n",(0,r.jsx)(t.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://docs.getdbt.com/docs",children:"dbt documentation"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/Teradata/dbt-teradata",children:"dbt-teradata plugin documentation"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://docs.feast.dev/tutorials/using-scalable-registry",children:"Feast Scalable Registry"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://medium.com/teradata/enabling-highly-scalable-feature-store-with-teradata-vantage-and-feast-e01008fa8fdb",children:"Enabling highly scalable feature store with Teradata Vantage and FEAST"})}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/Teradata/tdata-pipeline",children:"Git repository"})," for this project."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},36793:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/dbt-feast-a4bbee0571452a7dd3a8ce22b101ef8f.png"},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>s});var r=a(96540);const n={},o=r.createContext(n);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);