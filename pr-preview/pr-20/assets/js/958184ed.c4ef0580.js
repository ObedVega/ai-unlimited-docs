"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[8447],{73441:(e,t,n)=>{n.d(t,{Ay:()=>o,RM:()=>r});var s=n(74848),i=n(28453);const r=[];function a(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"deployments"})," folder in the ",(0,s.jsx)(t.a,{href:"https://github.com/Teradata/ai-unlimited",children:"AI Unlimited GitHub repository"})," provided by Teradata contains template, parameter, and policy files for installing AI Unlimited."]}),"\n",(0,s.jsx)(t.p,{children:"Open a terminal window, and clone the repository."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/Teradata/ai-unlimited\n"})})]})}function o(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},56739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=n(74848),i=n(28453),r=n(73441);const a={id:"deploy-manager-aws-console",title:"Install on AWS",description:"Learn how to deploy the manager using a CloudFormation template.",sidebar_label:"Install on AWS",sidebar_position:1,pagination_prev:null,pagination_next:null},o="Install the manager on AWS",l={id:"install-ai-unlimited/deploy-manager-aws-console",title:"Install on AWS",description:"Learn how to deploy the manager using a CloudFormation template.",source:"@site/docs/install-ai-unlimited/prod-aws-console-deploy-ai-unlimited.md",sourceDirName:"install-ai-unlimited",slug:"/install-ai-unlimited/deploy-manager-aws-console",permalink:"/ai-unlimited-docs/pr-preview/pr-20/docs/install-ai-unlimited/deploy-manager-aws-console",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"deploy-manager-aws-console",title:"Install on AWS",description:"Learn how to deploy the manager using a CloudFormation template.",sidebar_label:"Install on AWS",sidebar_position:1,pagination_prev:null,pagination_next:null},sidebar:"tutorialSidebar"},d={},c=[{value:"Clone the repository",id:"clone-the-repository",level:2},...r.RM,{value:"Locate the manager template",id:"locate-the-manager-template",level:2},{value:"Load the template",id:"load-the-template",level:2},{value:"Specify stack details and options",id:"specify-stack-details-and-options",level:2},{value:"Review and create the stack",id:"review-and-create-the-stack",level:2},{value:"What&#39;s next",id:"whats-next",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"install-the-manager-on-aws",children:"Install the manager on AWS"}),"\n",(0,s.jsxs)(t.p,{children:["Before you begin, make sure you have the ",(0,s.jsx)(t.a,{href:"/ai-unlimited-docs/pr-preview/pr-20/docs/install-ai-unlimited/#prerequisites",children:"prerequisites"})," and your AWS account meets ",(0,s.jsx)(t.a,{href:"/ai-unlimited-docs/pr-preview/pr-20/docs/resources/aws-account-requirements",children:"the requirements"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"The AI Unlimited manager orchestrates the engine's deployment and includes a web-based user interface for setup."}),"\n",(0,s.jsxs)(t.p,{children:["You'll use a CloudFormation template provided by Teradata to install the manager from the AWS Management Console. You'll deploy a server instance, on which the manager runs in a container controlled by ",(0,s.jsx)(t.a,{href:"/ai-unlimited-docs/pr-preview/pr-20/docs/glossary#systemd",children:"systemd"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["For installation help, email the ",(0,s.jsx)("a",{href:"mailto:aiunlimited.support@Teradata.com",children:"support team"})," or ask the ",(0,s.jsx)(t.a,{href:"https://support.teradata.com/community?id=community_forum&sys_id=b0aba91597c329d0e6d2bd8c1253affa",children:"community"}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"clone-the-repository",children:"Clone the repository"}),"\n","\n",(0,s.jsx)(r.Ay,{}),"\n",(0,s.jsx)(t.h2,{id:"locate-the-manager-template",children:"Locate the manager template"}),"\n",(0,s.jsx)(t.p,{children:"CloudFormation templates for the manager are here in the AI Unlimited GitHub repository:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"deployments/aws/templates/ai-unlimited/"})}),"\n",(0,s.jsxs)(t.p,{children:["Choose a template based on whether you intend to use a ",(0,s.jsx)(t.a,{href:"/ai-unlimited-docs/pr-preview/pr-20/docs/glossary#load-balancer",children:"load balancer"})," and what type."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"You might want to ask a cloud admin at your organization for guidance."})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"ai-unlimited-with-alb.yaml"}),"\u2014Hosts the manager behind an ",(0,s.jsx)(t.a,{href:"/ai-unlimited-docs/pr-preview/pr-20/docs/glossary#application-load-balancer",children:"application load balancer"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"ai-unlimited-with-nlb.yaml"}),"\u2014Hosts the manager behind a ",(0,s.jsx)(t.a,{href:"/ai-unlimited-docs/pr-preview/pr-20/docs/glossary#network-load-balancer",children:"network load balancer"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"ai-unlimited-without-lb.yaml"}),"\u2014No load balancer. If you're unsure about which template to use, we recommend this one."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"load-the-template",children:"Load the template"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Sign in to the ",(0,s.jsx)(t.a,{href:"https://aws.amazon.com",children:"AWS console"}),".",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"References to AWS Management Console are up-to-date as of May 29, 2024."})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Select the AWS region in which to deploy AI Unlimited.",(0,s.jsx)("br",{}),"\nWe recommend selecting the region closest to your primary work location."]}),"\n",(0,s.jsxs)(t.li,{children:["Search for and go to ",(0,s.jsx)(t.strong,{children:"CloudFormation"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Select ",(0,s.jsx)(t.strong,{children:"Create Stack"}),", then ",(0,s.jsx)(t.strong,{children:"With new resources (standard)"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Select ",(0,s.jsx)(t.strong,{children:"Choose an existing template"}),", then ",(0,s.jsx)(t.strong,{children:"Upload a template file"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Select the template file you chose to use, and click ",(0,s.jsx)(t.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,s.jsx)("a",{id:"aws-parms"}),"\n",(0,s.jsx)(t.h2,{id:"specify-stack-details-and-options",children:"Specify stack details and options"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Provide a stack name."}),"\n",(0,s.jsxs)(t.li,{children:["Review the parameters. Provide values for the required parameters. Your organization might require others.",(0,s.jsx)("br",{})]}),"\n"]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"AWS and manager parameters"}),(0,s.jsx)(t.p,{children:"The parameters for each template vary. You might see some parameters here that you don't see in the console."}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Notes"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Stack name"}),(0,s.jsx)(t.td,{children:"The identifier that helps you find the AI Unlimited stack from a list of stacks."}),(0,s.jsxs)(t.td,{children:["Required",(0,s.jsx)("br",{}),"Default: NA",(0,s.jsx)("br",{})," The name can contain only alphanumeric characters (case-sensitive) and hyphens. It must start with an alphabetic character and can't be longer than 128 characters."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AiUnlimitedName"}),(0,s.jsx)(t.td,{children:"The name of the AI Unlimited instance."}),(0,s.jsxs)(t.td,{children:["Required with default",(0,s.jsx)("br",{}),"Default: ai-unlimited",(0,s.jsx)("br",{}),"The name can contain only alphanumeric characters (case-sensitive) and hyphens. It must start with an alphabetic character and can't be longer than 20 characters."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"InstanceType"}),(0,s.jsx)(t.td,{children:"The EC2 instance type for the manager."}),(0,s.jsxs)(t.td,{children:["Required with default",(0,s.jsx)("br",{}),"Default: t3.micro",(0,s.jsx)("br",{})," ",(0,s.jsx)(t.strong,{children:"IMPORTANT"}),": If the instance is not adequately sized, engine deploy and suspend failures may occur, and you will have to re-install the manager on a larger instance.  See ",(0,s.jsx)(t.em,{children:"Learn more: Manager instance type (size) recommendations"})," below the parameters section."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"RootVolumeSize"}),(0,s.jsx)(t.td,{children:"The size of the root disk you want to attach to the instance, in GB."}),(0,s.jsxs)(t.td,{children:["Required with default",(0,s.jsx)("br",{}),"Default: 20",(0,s.jsx)("br",{}),"Supports values between 8 and 1000."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TerminationProtection"}),(0,s.jsx)(t.td,{children:"Enables instance termination protection."}),(0,s.jsxs)(t.td,{children:["Required with default",(0,s.jsx)("br",{}),"Default: false"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"IamRole"}),(0,s.jsx)(t.td,{children:"Specifies whether CloudFormation should create a new IAM role or use an existing one."}),(0,s.jsxs)(t.td,{children:["Required with default",(0,s.jsx)("br",{}),"Default: New",(0,s.jsx)("br",{}),"Supported options are: New or Existing"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"IamRoleName"}),(0,s.jsx)(t.td,{children:"The name of the IAM role to assign to the instance, either an existing IAM role or a  newly created one."}),(0,s.jsxs)(t.td,{children:["Optional with default",(0,s.jsx)("br",{}),"Default: ai-unlimited-iam-role",(0,s.jsx)("br",{}),"If naming a new IAM role, CloudFormation requires the CAPABILITY_NAMED_IAM capability. Leave this blank to use an autogenerated name."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"IamPermissionsBoundary"}),(0,s.jsx)(t.td,{children:"The ARN of the IAM permissions boundary to associate with the IAM role assigned to the instance."}),(0,s.jsxs)(t.td,{children:["Optional",(0,s.jsx)("br",{}),"Default: NA"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AvailabilityZone"}),(0,s.jsx)(t.td,{children:"The availability zone to which you want to deploy the instance."}),(0,s.jsxs)(t.td,{children:["Required",(0,s.jsx)("br",{}),"Default: NA",(0,s.jsx)("br",{}),"The value must match the subnet, the zone of any pre-existing volumes, and the instance type must be available in the selected zone."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"LoadBalancerScheme"}),(0,s.jsx)(t.td,{children:"If a load balancer is used, this field specifies whether the instance is accessible from the Internet or only from within the VPC."}),(0,s.jsxs)(t.td,{children:["Optional with default",(0,s.jsx)("br",{}),"Default: Internet-facing",(0,s.jsx)("br",{}),"The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the Internet.",(0,s.jsx)("br",{}),"The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the personal IP addresses of the nodes. Therefore, internal load balancers can route requests from clients with access to the VPC for the load balancer."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"LoadBalancerSubnetOne"}),(0,s.jsx)(t.td,{children:"The subnet where the load balancer is hosted. The subnet determines load balancer availability zones, IP addresses, and endpoints."}),(0,s.jsxs)(t.td,{children:["Optional with default",(0,s.jsx)("br",{}),"Default: NA",(0,s.jsx)("br",{}),"You must define a minimum of one available subnet to create a Network Load Balancer (NLB) and two subnets for an Application Load Balancer (ALB)."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"LoadBalancerSubnetTwo"}),(0,s.jsx)(t.td,{children:"The subnet where the load balancer is hosted."}),(0,s.jsxs)(t.td,{children:["Optional. This option is only available in the template with ALB.",(0,s.jsx)("br",{}),"Default: NA",(0,s.jsx)("br",{})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"HostedZoneID"}),(0,s.jsx)(t.td,{children:"The ID that Amazon Route 53 assigned to the hosted zone when you created it."}),(0,s.jsxs)(t.td,{children:["Optional",(0,s.jsx)("br",{}),"Default: NA",(0,s.jsx)("br",{}),"Each hosted zone corresponds to a domain name, or possibly a subdomain. The hosted zone is the container for DNS records, where you configure how the world interacts with your domain, such as pointing it to an IP address with a record.",(0,s.jsx)("br",{}),"On the AWS console, go to ",(0,s.jsx)(t.strong,{children:"Route 53"})," > ",(0,s.jsx)(t.strong,{children:"Hosted zones"}),". Find your registered domain name and the corresponding Hosted zone ID."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DnsName"}),(0,s.jsx)(t.td,{children:"The name of the domain. For public hosted zones, this is the name you registered with your DNS registrar."}),(0,s.jsxs)(t.td,{children:["Optional",(0,s.jsx)("br",{}),"Default: NA",(0,s.jsx)("br",{}),"For information about how to specify characters other than a-z, 0-9, and - (hyphen) and how to specify internationalized domain names, see ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateHostedZone.html",children:"Create Hosted Zone"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Private"}),(0,s.jsx)(t.td,{children:"Specifies whether the service is deployed in a private network without public IPs."}),(0,s.jsxs)(t.td,{children:["Required",(0,s.jsx)("br",{}),"Default: false ",(0,s.jsx)("br",{}),"Make sure you select the ",(0,s.jsx)(t.code,{children:"Enable auto-assign public IPv4 address"})," option in the subnet where the manager resides. If this option is not selected, the installation may fail."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Session"}),(0,s.jsx)(t.td,{children:"Specifies whether you can use the AWS Session Manager to access the instance."}),(0,s.jsxs)(t.td,{children:["Required",(0,s.jsx)("br",{}),"Default: false"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Vpc"}),(0,s.jsx)(t.td,{children:"The network to which you want to deploy the instance."}),(0,s.jsxs)(t.td,{children:["Required",(0,s.jsx)("br",{}),"Default: NA"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Subnet"}),(0,s.jsx)(t.td,{children:"The subnetwork to which you want to deploy the instance."}),(0,s.jsxs)(t.td,{children:["Required",(0,s.jsx)("br",{}),"Default: NA",(0,s.jsx)("br",{}),"The subnet must reside in the selected availability zone."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"KeyName"}),(0,s.jsx)(t.td,{children:"The public/private key pair which allows you to connect securely to your instance after it launches. When you create an AWS account, this is the key pair you create in your preferred region."}),(0,s.jsxs)(t.td,{children:["Optional",(0,s.jsx)("br",{}),"Default: NA",(0,s.jsx)("br",{}),"Leave this field blank if you do not want to include the SSH keys."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AccessCIDR"}),(0,s.jsx)(t.td,{children:"The CIDR IP address range that is permitted to access the instance."}),(0,s.jsxs)(t.td,{children:["Optional",(0,s.jsx)("br",{}),"Default: NA",(0,s.jsx)("br",{}),"We recommend setting this value to a trusted IP range. Define at least one of AccessCIDR, PrefixList, or SecurityGroup to allow inbound traffic unless you create custom security group ingress rules."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"PrefixList"}),(0,s.jsx)(t.td,{children:"The prefix list you can use to communicate with the instance. It is a collection of CIDR blocks that define a set of IP address ranges that require the same policy enforcement."}),(0,s.jsxs)(t.td,{children:["Optional",(0,s.jsx)("br",{}),"Default: NA",(0,s.jsx)("br",{}),"Define at least one of AccessCIDR, PrefixList, or SecurityGroup to allow inbound traffic unless you create custom security group ingress rules. Make sure to enter the prefix list name, not the ID."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SecurityGroup"}),(0,s.jsx)(t.td,{children:"The virtual firewall that controls inbound and outbound traffic to the instance."}),(0,s.jsxs)(t.td,{children:["Optional",(0,s.jsx)("br",{}),"Default: NA",(0,s.jsx)("br",{}),"Implemented as a set of rules that specify which protocols, ports, and IP addresses or CIDR blocks are allowed to access the instance. Define at least one of AccessCIDR, PrefixList, or SecurityGroup to allow inbound traffic unless you create custom security group ingress rules."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AIUnlimitedHttpPort"}),(0,s.jsx)(t.td,{children:"The port to access the AI Unlimited UI."}),(0,s.jsxs)(t.td,{children:["Required with default",(0,s.jsx)("br",{}),"Default: 3000"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AIUnlimitedGrpcPort"}),(0,s.jsx)(t.td,{children:"The port to access the AI Unlimited API."}),(0,s.jsxs)(t.td,{children:["Required with default",(0,s.jsx)("br",{}),"Default: 3282"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AIUnlimitedVersion"}),(0,s.jsx)(t.td,{children:"The version of AI Unlimited you want to deploy."}),(0,s.jsxs)(t.td,{children:["Required with default",(0,s.jsx)("br",{}),"Default: latest",(0,s.jsx)("br",{}),"The value is a container version tag."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"UsePersistentVolume"}),(0,s.jsxs)(t.td,{children:["Specifies whether you want to use a new or existing persistent volume to store data. See ",(0,s.jsx)(t.em,{children:"Learn more: Using a persistent volume"})," below the parameters section."]}),(0,s.jsxs)(t.td,{children:["Optional with default",(0,s.jsx)("br",{}),"Default: New",(0,s.jsx)("br",{}),"Supported options are a new persistent volume or an existing one, depending on your use case."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"PersistentVolumeSize"}),(0,s.jsx)(t.td,{children:"The size of the persistent volume that you attach to the instance, in GB."}),(0,s.jsxs)(t.td,{children:["Required with default",(0,s.jsx)("br",{}),"Default: 20",(0,s.jsx)("br",{}),"Supports values between 8 and 1000."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ExistingPersistentVolumeId"}),(0,s.jsx)(t.td,{children:"The ID of the existing persistent volume that you attach to the instance."}),(0,s.jsxs)(t.td,{children:["Required if UsePersistentVolume is set to Existing.",(0,s.jsx)("br",{}),"Default: NA",(0,s.jsx)("br",{}),"The persistent volume must be in the same availability zone as the AI Unlimited instance."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["PersistentVolume",(0,s.jsx)("br",{}),"DeletionPolicy"]}),(0,s.jsx)(t.td,{children:"The persistent volume behavior when you delete the CloudFormation deployment."}),(0,s.jsx)(t.td,{children:"Required with default"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"LatestAmiId"}),(0,s.jsx)(t.td,{children:"The ID of the image that points to the latest version of AMI. This value is used for the SSM lookup."}),(0,s.jsxs)(t.td,{children:["Required with default",(0,s.jsx)("br",{}),"Default: NA",(0,s.jsx)("br",{}),"This deployment uses the latest ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2 image available.",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"IMPORTANT"}),": Changing this value may break the stack."]})]})]})]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Learn more: Manager instance type (size) recommendations"}),(0,s.jsx)(t.p,{children:"For the AI Unlimited paid public preview, based on quantity of concurrent engine deploy and suspend operations, we recommend these t3 instance types. The performance of the other available instance types may vary."}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Instance type"}),(0,s.jsx)(t.th,{children:"Concurrent operations"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"t3.micro"}),(0,s.jsx)(t.td,{children:"1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"t3.small"}),(0,s.jsx)(t.td,{children:"up to 5"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"t3.medium"}),(0,s.jsx)(t.td,{children:"up to 10"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"t3.large"}),(0,s.jsx)(t.td,{children:"up to 20"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"t3.xlarge"}),(0,s.jsx)(t.td,{children:"more than 21"})]})]})]}),(0,s.jsx)(t.p,{children:"The concurrency will increase when AI Unlimited is released for general availability."})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Learn more: Using a persistent volume"}),(0,s.jsx)(t.p,{children:"The manager instance runs in a container and saves its configuration data in a database in the root volume of the instance. This data persists if you shut down, restart, or snapshot and relaunch the instance."}),(0,s.jsx)(t.p,{children:"A persistent volume stores data for a containerized application beyond the lifetime of the container, pod, or node in which it runs."}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Without a persistent volume"})}),(0,s.jsx)(t.p,{children:"If the container, pod, or node crashes or terminates, you lose the manager's configuration data. You can deploy a new manager instance, but not to the same state as the one that was lost."}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"With a persistent volume"})}),(0,s.jsx)(t.p,{children:"If the container, pod, or node crashes or terminates, and the manager's configuration data is stored in a persistent volume, you can deploy a new manager instance that has the same configuration as the one that was lost."}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example"})}),(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Deploy the manager, and include these parameters:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"UsePersistentVolume"}),": ",(0,s.jsx)(t.strong,{children:"New"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"PersistentVolumeDeletionPolicy"}),": ",(0,s.jsx)(t.strong,{children:"Retain"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["After you create the stack, on the ",(0,s.jsx)(t.strong,{children:"Outputs"})," tab, note the ",(0,s.jsx)(t.code,{children:"volume-id"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"Use AI Unlimited."}),"\n",(0,s.jsxs)(t.li,{children:["If the manager instance is lost, deploy the manager again, and include these parameters:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"UsePersistentVolume"}),": ",(0,s.jsx)(t.strong,{children:"New"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"PersistentVolumeDeletionPolicy"}),": ",(0,s.jsx)(t.strong,{children:"Retain"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"ExistingPersistentVolumeId"}),": the value you noted in step 2"]}),"\n"]}),"\n"]}),"\n"]}),(0,s.jsx)(t.p,{children:"The new manager instance has the same configuration as the one that was lost."})]}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:["Select ",(0,s.jsx)(t.strong,{children:"Next"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-add-tags.html",children:"Configure stack options"})," based on your needs, then select ",(0,s.jsx)(t.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"review-and-create-the-stack",children:"Review and create the stack"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Review the template settings."}),"\n",(0,s.jsx)(t.li,{children:"Select the check box to acknowledge that the template will create IAM resources."}),"\n",(0,s.jsxs)(t.li,{children:["Select ",(0,s.jsx)(t.strong,{children:"Submit"})," to deploy the stack.",(0,s.jsx)("br",{}),"\nOn the ",(0,s.jsx)(t.strong,{children:"Events"})," tab, you can monitor progress. When the status of all the resources is ",(0,s.jsx)(t.code,{children:"CREATE_COMPLETE"}),", the manager is ready."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Outputs"})," tab shows the values generated for the created resources."]}),"\n",(0,s.jsx)(t.p,{children:"You'll need the URL to access the manager and set up AI Unlimited."}),"\n",(0,s.jsx)(t.h2,{id:"whats-next",children:"What's next"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/ai-unlimited-docs/pr-preview/pr-20/docs/resources/create-oauth-app",children:"Create an OAuth app"})," to allow authentication between AI Unlimited and your Git provider account."]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);