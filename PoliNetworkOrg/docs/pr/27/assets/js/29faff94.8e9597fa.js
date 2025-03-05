"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["5092"],{4834:function(e,n,t){t.r(n),t.d(n,{default:()=>x,frontMatter:()=>i,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"infrastructure/Guides/Add a Secret","title":"Add a Secret","description":"Introduction","source":"@site/docs/infrastructure/03-Guides/Add a Secret.md","sourceDirName":"infrastructure/03-Guides","slug":"/infrastructure/Guides/Add a Secret","permalink":"/preview/PoliNetworkOrg/docs/pr/27/docs/infrastructure/Guides/Add a Secret","draft":false,"unlisted":false,"editUrl":"https://github.com/polinetworkorg/docs/tree/main/docs/infrastructure/03-Guides/Add a Secret.md","tags":[],"version":"current","frontMatter":{},"sidebar":"infra","previous":{"title":"ssh","permalink":"/preview/PoliNetworkOrg/docs/pr/27/docs/infrastructure/getting-started/k8s-basics/day-to-day/ssh"}}'),r=t("6773"),a=t("6070");let i={},c="Add a Secret",d={},o=[{value:"Introduction",id:"introduction",level:2},{value:"Basics",id:"basics",level:2},{value:"Add the secret into the &quot;KV&quot;",id:"add-the-secret-into-the-kv",level:3},{value:"Create the <code>SecretProviderClass</code>",id:"create-the-secretproviderclass",level:3},{value:"Add &quot;KV&quot; secrets into the <code>SecretProviderClass</code>",id:"add-kv-secrets-into-the-secretproviderclass",level:3},{value:"Mount the secret volume inside the pod",id:"mount-the-secret-volume-inside-the-pod",level:3},{value:"Loading the secret inside an Environment Variable",id:"loading-the-secret-inside-an-environment-variable",level:2},{value:"Register the secret as a k8s secret",id:"register-the-secret-as-a-k8s-secret",level:3},{value:"Use the secret as environment variable",id:"use-the-secret-as-environment-variable",level:3},{value:"&quot;KV&quot; management",id:"kv-management",level:2},{value:"Add or update a secret",id:"add-or-update-a-secret",level:3},{value:"Delete a secret",id:"delete-a-secret",level:3},{value:"Examples",id:"examples",level:2},{value:"Minimal",id:"minimal",level:3},{value:"Environment Variable",id:"environment-variable",level:3}];function l(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"add-a-secret",children:"Add a Secret"})}),"\n",(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(n.p,{children:["Secrets are used to configure deployments with ",(0,r.jsx)(n.strong,{children:"sensitive"})," data like database login, API keys, and so on.",(0,r.jsx)(n.br,{}),"\n",'We have deployed a "Azure Key vault" (the "KV") named "kv-polinetwork" that stores all the secrets.',(0,r.jsx)(n.br,{}),"\n","Next, we can pass a secret from the KV to the k8s pod using a ",(0,r.jsx)(n.code,{children:"SecretProviderClass"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The following sections explain how to add a new secret."}),"\n",(0,r.jsx)(n.h2,{id:"basics",children:"Basics"}),"\n",(0,r.jsx)(n.p,{children:"There are three required steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:'Add the secret into the "KV"'}),"\n",(0,r.jsxs)(n.li,{children:["Create and configure a ",(0,r.jsx)(n.code,{children:"SecretProviderClass"})]}),"\n",(0,r.jsx)(n.li,{children:"Mount the secret volume inside the pod"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Whenever there is ",(0,r.jsx)(n.code,{children:"<something>"})," in the code or in a command, that's a paramter you need to set."]})}),"\n",(0,r.jsx)(n.h3,{id:"add-the-secret-into-the-kv",children:'Add the secret into the "KV"'}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"#add-or-update-a-secret",children:"this section"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"create-the-secretproviderclass",children:["Create the ",(0,r.jsx)(n.code,{children:"SecretProviderClass"})]}),"\n",(0,r.jsx)(n.p,{children:"References:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/aks/csi-secrets-store-identity-access?tabs=azure-portal&pivots=access-with-a-user-assigned-managed-identity",children:"Microsoft Guide"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://secrets-store-csi-driver.sigs.k8s.io",children:"Secrets Store CSI Driver"})}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"important",children:[(0,r.jsxs)(n.p,{children:["Check if the namespace already contains a ",(0,r.jsx)(n.code,{children:"SecretProviderClass"})," before creating a new one.",(0,r.jsx)(n.br,{}),"\n","Running the following command:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"kubectl get secretproviderclass --namespace <namespace>\n"})}),(0,r.jsxs)(n.p,{children:["you should see a message like ",(0,r.jsx)(n.code,{children:"No resources found in <namespace> namespace."})]}),(0,r.jsxs)(n.p,{children:["Otherwise the ",(0,r.jsx)(n.code,{children:"SecretProviderClass"})," already exists and you can directly\n",(0,r.jsx)(n.a,{href:"#add-kv-secrets-into-the-secretproviderclass",children:"add a new secret"}),"."]})]}),"\n",(0,r.jsxs)(n.p,{children:["This is a basic ",(0,r.jsx)(n.code,{children:"SecretProviderClass"})," manifest:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="spc.yaml"',children:"apiVersion: secrets-store.csi.x-k8s.io/v1\nkind: SecretProviderClass\nmetadata:\n  name: <name>                  # a recommended name convention is \"<namespace>-spc\"\n  namespace: <namespace>        # if not specified, the default k8s namespace is \"default\"\nspec:\n  provider: azure\n  parameters:\n    usePodIdentity: 'false'\n    useVMManagedIdentity: 'true'                                    # Set to true for using managed identity\n    userAssignedIdentityID: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'  # Set the clientID of the managed identity to use\n    tenantId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'                # The tenant ID of the key vault\n    keyvaultName: 'kv-polinetwork'                                  # Set to the name of your key vault\n"})}),"\n",(0,r.jsx)(n.p,{children:"A few things to note:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"usePodIdentity"})," should be set to ",(0,r.jsx)(n.code,{children:"false"})," and ",(0,r.jsx)(n.code,{children:"useVMManagedIdentity"})," should be set to ",(0,r.jsx)(n.code,{children:"true"})," since we are using a VM managed identity."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"userAssignedIdentityID"})," should be set to the client ID of the managed identity we linked to the key vault."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"tenantId"})," should be set to the tenant ID of our Azure tenant."]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["If you are unsure about what the ",(0,r.jsx)(n.code,{children:"userAssignedIdentityID"})," and ",(0,r.jsx)(n.code,{children:"tenantId"})," are, you probably aren't one of the heads of IT in PoliNetwork.",(0,r.jsx)(n.br,{}),"\n","Changes to such parts of the manifest should only be done by someone with the right permissions."]}),(0,r.jsx)(n.p,{children:"Anyway here's how to get them:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"tenantId"})}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"az account show --query tenantId --output tsv\n"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"userAssignedIdentityID"})}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"az aks show --resource-group <resource-group> --name <cluster-name> --query addonProfiles.azureKeyvaultSecretsProvider.identity.clientId -o tsv\n"})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"<resource-group>"})," and ",(0,r.jsx)(n.code,{children:"<cluster-name>"})," can be found both in our ",(0,r.jsx)(n.a,{href:"https://github.com/PoliNetworkOrg/terraform/",children:"Terraform"})," or in the Azure Portal."]})]}),"\n",(0,r.jsxs)(n.h3,{id:"add-kv-secrets-into-the-secretproviderclass",children:['Add "KV" secrets into the ',(0,r.jsx)(n.code,{children:"SecretProviderClass"})]}),"\n",(0,r.jsxs)(n.p,{children:["Inside the ",(0,r.jsx)(n.code,{children:"SecretProviderClass"}),' manifest, add "KV" secrets:']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="spc.yaml"',children:"apiVersion: secrets-store.csi.x-k8s.io/v1\nkind: SecretProviderClass\nmetadata:\n  name: <name>\n  namespace: <namespace>\nspec:\n  provider: azure\n  parameters:\n    usePodIdentity: 'false'\n    useVMManagedIdentity: 'true'                                   \n    userAssignedIdentityID: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' \n    tenantId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'               \n    keyvaultName: 'kv-polinetwork'                                 \n    # add-highlight-start\n    objects: |\n      array:\n        - |\n          objectName: <secret-1-key>            \n          objectType: secret\n        - |\n          objectName: <secret-2-key>            \n          objectType: secret\n    # add-highlight-end\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In this example, we map two secrets (",(0,r.jsx)(n.code,{children:"<secret-1-key>"})," and ",(0,r.jsx)(n.code,{children:"<secret-2-key>"}),")\nfrom the key vault ",(0,r.jsx)(n.code,{children:"kv-polinetwork"})," to a volume you can mount in your pod."]}),"\n",(0,r.jsx)(n.h3,{id:"mount-the-secret-volume-inside-the-pod",children:"Mount the secret volume inside the pod"}),"\n",(0,r.jsxs)(n.p,{children:["The secret must be mounted as a volume.",(0,r.jsx)(n.br,{}),"\n","Here is an example pod manifest:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="my-spc-example-pod.yaml"',children:"kind: Pod\napiVersion: v1\nmetadata:\n  name: my-spc-example-pod\n  namespace: <namespace>\nspec:\n  containers:\n    - name: busybox\n      image: registry.k8s.io/e2e-test-images/busybox:1.29-4\n      command:\n        - '/bin/sleep'\n        - '10000'\n      # add-highlight-start\n      volumeMounts:\n        - name: secrets-store               # Name of the volume defined below\n          mountPath: '/mnt/secrets-store'   # Path where the secrets are mounted inside the pod\n          readOnly: true                    # A secret should be mounted as read-only\n      # add-highlight-end\n      resources:\n        requests:\n          cpu: 100m\n          memory: 128Mi\n        limits:\n          cpu: 250m\n          memory: 256Mi\n\n# add-highlight-start\n  volumes:\n    - name: secrets-store                        # Name of the volume - it can be whatever you want\n      csi:\n        driver: secrets-store.csi.k8s.io\n        readOnly: true\n        volumeAttributes:\n          secretProviderClass: '<namespace>-spc' # The name of the SecretProviderClass\n# add-highlight-end\n"})}),"\n",(0,r.jsxs)(n.p,{children:["After applying this manifest to the cluster, you can retrieve the secret by reading the files in the ",(0,r.jsx)(n.code,{children:"/mnt/secrets-store/"})," directory (",(0,r.jsx)(n.code,{children:"mountPath"})," parameter).",(0,r.jsx)(n.br,{}),"\n","To test if everything works, try running the following command."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"kubectl exec -it my-spc-example-pod -- cat /mnt/secrets-store/<secret-1-key>\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.p,{children:"More than one secret can be mounted at the same time by adding more entries in the array,\nall of them can be found in the same directory, you can see them by running:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"kubectl exec -it my-spc-example-pod -- ls /mnt/secrets-store\n"})}),(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.a,{href:"#add-kv-secrets-into-the-secretproviderclass",children:"previous section"}),", we have added ",(0,r.jsx)(n.code,{children:"<secret-1-key>"})," and ",(0,r.jsx)(n.code,{children:"<secret-2-key>"}),"."]})]}),"\n",(0,r.jsx)(n.h2,{id:"loading-the-secret-inside-an-environment-variable",children:"Loading the secret inside an Environment Variable"}),"\n",(0,r.jsxs)(n.admonition,{type:"important",children:[(0,r.jsxs)(n.p,{children:["Even if you want to load the secret as an ENV variable, it's ",(0,r.jsx)(n.strong,{children:"REQUIRED"})," to follow every steps in the previous section, including\n",(0,r.jsx)(n.a,{href:"#mount-the-secret-volume-inside-the-pod",children:"mounting the secret volume"}),"."]}),(0,r.jsxs)(n.p,{children:["You can find more about why this is the case ",(0,r.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/secrets-store-csi-driver/issues/813",children:"here"})]})]}),"\n",(0,r.jsx)(n.p,{children:"To load the secret as an Environment Variable follows the following steps."}),"\n",(0,r.jsx)(n.h3,{id:"register-the-secret-as-a-k8s-secret",children:"Register the secret as a k8s secret"}),"\n",(0,r.jsxs)(n.p,{children:["Inside the ",(0,r.jsx)(n.code,{children:"ServiceProviderClass"})," manifest, add a new field ",(0,r.jsx)(n.code,{children:"secretObjects"})," to create a\nnew k8s secret collection:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="spc.yaml"',children:"apiVersion: secrets-store.csi.x-k8s.io/v1\nkind: SecretProviderClass\nmetadata:\n  name: <name>\n  namespace: <namespace>\nspec:\n  provider: azure\n  parameters:\n    usePodIdentity: 'false'\n    useVMManagedIdentity: 'true'                                   \n    userAssignedIdentityID: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' \n    tenantId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'               \n    keyvaultName: 'kv-polinetwork'                                 \n    # add-highlight-start\n    secretObjects:\n      # each of these is a COLLECTION of secrets.\n      # multiple separate collections can be defined, but to identify Azure secrets from other k8s secrets,\n      # we use a collection that contains multiple secrets (as if it were an Object in fact).\n      # important: it only needs to be created the first time, then just add a key underneath\n      - secretName: azure-kv\n        type: Opaque\n        data:\n          # the secret that we want to expose also as k8s secret should be added here.\n          # important to distinguish objectName (reference to \"KV\") from key (custom name)\n          - objectName: <secret-1-key>      # secret name inside the \"KV\"\n            key: example-secret             # custom k8s secret's key\n    # add-highlight-end\n    objects: |\n      array:\n        - |\n          objectName: <secret-1-key>            \n          objectType: secret\n"})}),"\n",(0,r.jsx)(n.h3,{id:"use-the-secret-as-environment-variable",children:"Use the secret as environment variable"}),"\n",(0,r.jsxs)(n.p,{children:["After ",(0,r.jsx)(n.a,{href:"#mount-the-secret-volume-inside-the-pod",children:"mounting the secret volume"})," and ",(0,r.jsx)(n.a,{href:"#register-the-secret-as-a-k8s-secret",children:"configuring the k8s secret"}),",\nyou can add an environment variable with the secret as value reference:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="my-spc-example-pod.yaml"',children:"kind: Pod\napiVersion: v1\nmetadata:\n  name: my-spc-example-pod\n  namespace: <namespace>\nspec:\n  containers:\n    - name: busybox\n      image: registry.k8s.io/e2e-test-images/busybox:1.29-4\n      command:\n        - '/bin/sleep'\n        - '10000'\n      volumeMounts:\n        - name: secrets-store\n          mountPath: '/mnt/secrets-store'\n          readOnly: true\n      # add-highlight-start\n      env:\n        - name: EXAMPLE_SECRET # env variable name (independent from the name of the secret)\n          valueFrom:\n            secretKeyRef:\n              name: azure-kv # k8s secret collection name\n              key: example-secret # secret key inside of k8s secret collection specified in the line above\n      # add-highlight-end\n      resources:\n        requests:\n          cpu: 100m\n          memory: 128Mi\n        limits:\n          cpu: 250m\n          memory: 256Mi\n\n  volumes:\n    - name: secrets-store\n      csi:\n        driver: secrets-store.csi.k8s.io\n        readOnly: true\n        volumeAttributes:\n          secretProviderClass: '<namespace>-spc'\n"})}),"\n",(0,r.jsx)(n.h2,{id:"kv-management",children:'"KV" management'}),"\n",(0,r.jsx)(n.h3,{id:"add-or-update-a-secret",children:"Add or update a secret"}),"\n",(0,r.jsx)(n.p,{children:"You can add (or update) a secret with the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'az keyvault secret set --vault-name "kv-polinetwork" --name "<secret-name>" --value "<secret-value>"\n'})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.p,{children:"If the secret value is too long or you don't want to copy/paste in terminal you can use a file instead."}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:['Paste the secret value into a text file (no extension or ".txt" is valid) on a ',(0,r.jsx)(n.strong,{children:"single line"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run the following command"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'az keyvault secret set --vault-name "kv-polinetwork" --name "<secret-name>" --file "<filename>"\n'})}),"\n"]}),"\n"]})]}),"\n",(0,r.jsx)(n.h3,{id:"delete-a-secret",children:"Delete a secret"}),"\n",(0,r.jsx)(n.p,{children:"You can delete a secret with the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'az keyvault secret delete --vault-name "kv-polinetwork" --name "<secret-name>"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["After the deletion, the secret remains in a ",(0,r.jsx)(n.code,{children:"Recoverable State"})," for 7 days.",(0,r.jsx)(n.br,{}),"\n","During this period the secret can be recovered with the following command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'az keyvault secret recover --vault-name "kv-polinetwork" --name "<secret-name>"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["To ",(0,r.jsx)(n.strong,{children:"permanently delete"})," that secret, after 7 days from deletion you can run the following command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'az keyvault secret purge --vault-name "kv-polinetwork" --name "<secret-name>"\n'})}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["To ",(0,r.jsx)(n.strong,{children:"update/re-set"})," that secret, during the 7 days retention period, you must recover it first,\nthen run the command to update it"]}),(0,r.jsxs)(n.p,{children:["If you try to ",(0,r.jsx)(n.code,{children:"set"})," a secret that has been deleted within the last 7 days without restoring it first, you get the following error:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'#error-highlight-start\n(Conflict) Secret <secret-name> is currently in a deleted but recoverable state, and its name cannot be reused; in this state, the secret can only be recovered or purged.\nCode: Conflict\nMessage: Secret <secret-name> is currently in a deleted but recoverable state, and its name cannot be reused; in this state, the secret can only be recovered or purged.\nInner error: {\n    "code": "ObjectIsDeletedButRecoverable"\n}\n#error-highlight-end\n'})})]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.p,{children:["In this section you can find working examples.",(0,r.jsx)(n.br,{}),"\n","It is recommended to read the ",(0,r.jsx)(n.a,{href:"#basics",children:'"Basics" section'})," to understand how it works."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["You still need to set ",(0,r.jsx)(n.code,{children:"tenantId"}),", ",(0,r.jsx)(n.code,{children:"userAssignedIdentityID"})," and secret keys to make it work."]})}),"\n",(0,r.jsx)(n.h3,{id:"minimal",children:"Minimal"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="test-secret/spc.yaml" showLineNumbers',children:"apiVersion: secrets-store.csi.x-k8s.io/v1\nkind: SecretProviderClass\nmetadata:\n  name: test-secret-spc\n  namespace: test-secret\nspec:\n  provider: azure\n  parameters:\n    usePodIdentity: 'false'\n    useVMManagedIdentity: 'true'                                   \n    userAssignedIdentityID: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' \n    tenantId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'               \n    keyvaultName: 'kv-polinetwork'                                 \n    objects: |\n      array:\n        - |\n          objectName: <secret-1-key>            \n          objectType: secret\n        - |\n          objectName: <secret-2-key>            \n          objectType: secret\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="test-secret/example-pod.yaml" showLineNumbers',children:"kind: Pod\napiVersion: v1\nmetadata:\n  name: example-pod\n  namespace: test-secret\nspec:\n  containers:\n    - name: busybox\n      image: registry.k8s.io/e2e-test-images/busybox:1.29-4\n      command:\n        - '/bin/sleep'\n        - '10000'\n      volumeMounts:\n        - name: secrets-store\n          mountPath: '/mnt/secrets-store'\n          readOnly: true\n      resources:\n        requests:\n          cpu: 100m\n          memory: 128Mi\n        limits:\n          cpu: 250m\n          memory: 256Mi\n\n  volumes:\n    - name: secrets-store\n      csi:\n        driver: secrets-store.csi.k8s.io\n        readOnly: true\n        volumeAttributes:\n          secretProviderClass: 'test-secret-spc'\n"})}),"\n",(0,r.jsx)(n.h3,{id:"environment-variable",children:"Environment Variable"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="test-secret-env/spc.yaml" showLineNumbers',children:"apiVersion: secrets-store.csi.x-k8s.io/v1\nkind: SecretProviderClass\nmetadata:\n  name: test-secret-env-spc\n  namespace: test-secret-env\nspec:\n  provider: azure\n  parameters:\n    usePodIdentity: 'false'\n    useVMManagedIdentity: 'true'                                   \n    userAssignedIdentityID: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' \n    tenantId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'               \n    keyvaultName: 'kv-polinetwork'                                 \n    secretObjects:\n      - secretName: azure-kv\n        type: Opaque\n        data:\n          - objectName: <secret-key>\n            key: example-secret\n    objects: |\n      array:\n        - |\n          objectName: <secret-key>            \n          objectType: secret\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="test-secret-env/example-pod.yaml" showLineNumbers',children:"kind: Pod\napiVersion: v1\nmetadata:\n  name: example-pod\n  namespace: test-secret-env\nspec:\n  containers:\n    - name: busybox\n      image: registry.k8s.io/e2e-test-images/busybox:1.29-4\n      command:\n        - '/bin/sleep'\n        - '10000'\n      volumeMounts:\n        - name: secrets-store\n          mountPath: '/mnt/secrets-store'\n          readOnly: true\n      env:\n        - name: EXAMPLE_SECRET\n          valueFrom:\n            secretKeyRef:\n              name: azure-kv\n              key: example-secret\n      resources:\n        requests:\n          cpu: 100m\n          memory: 128Mi\n        limits:\n          cpu: 250m\n          memory: 256Mi\n\n  volumes:\n    - name: secrets-store\n      csi:\n        driver: secrets-store.csi.k8s.io\n        readOnly: true\n        volumeAttributes:\n          secretProviderClass: 'test-secret-env-spc'\n"})})]})}function x(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},6070:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var s=t(1699);let r={},a=s.createContext(r);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);