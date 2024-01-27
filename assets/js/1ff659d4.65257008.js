"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5553],{217:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=t(5893),o=t(1151);const a={},s="Installation",r={id:"Installation",title:"Installation",description:"AutoGen is a versatile tool that can be installed and run in Docker or locally using a virtual environment. Below are detailed instructions for both methods.",source:"@site/docs/Installation.md",sourceDirName:".",slug:"/Installation",permalink:"/autogen/docs/Installation",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/Installation.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Getting Started",permalink:"/autogen/docs/Getting-Started"},next:{title:"Multi-agent Conversation Framework",permalink:"/autogen/docs/Use-Cases/agent_chat"}},l={},c=[{value:"Option 1: Install and Run AutoGen in Docker",id:"option-1-install-and-run-autogen-in-docker",level:2},{value:"Step 1: Install Docker",id:"step-1-install-docker",level:3},{value:"Step 2: Build a Docker Image",id:"step-2-build-a-docker-image",level:3},{value:"Step 3: Run AutoGen Applications from Docker Image",id:"step-3-run-autogen-applications-from-docker-image",level:3},{value:"Additional Resources",id:"additional-resources",level:4},{value:"Option 2: Install AutoGen Locally Using Virtual Environment",id:"option-2-install-autogen-locally-using-virtual-environment",level:2},{value:"Setup a virtual environment",id:"setup-a-virtual-environment",level:3},{value:"Option a: venv",id:"option-a-venv",level:4},{value:"Option b: conda",id:"option-b-conda",level:4},{value:"Option c: poetry",id:"option-c-poetry",level:4},{value:"Python requirements",id:"python-requirements",level:3},{value:"Code execution with Docker (default)",id:"code-execution-with-docker-default",level:3},{value:"Migration guide to v0.2",id:"migration-guide-to-v02",level:3},{value:"Other Installation Options",id:"other-installation-options",level:2},{value:"Optional Dependencies",id:"optional-dependencies",level:3},{value:"LLM Caching",id:"llm-caching",level:4},{value:"blendsearch",id:"blendsearch",level:4},{value:"retrievechat",id:"retrievechat",level:4},{value:"Teachability",id:"teachability",level:4},{value:"Large Multimodal Model (LMM) Agents",id:"large-multimodal-model-lmm-agents",level:4},{value:"mathchat",id:"mathchat",level:4}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.p,{children:"AutoGen is a versatile tool that can be installed and run in Docker or locally using a virtual environment. Below are detailed instructions for both methods."}),"\n",(0,i.jsx)(n.h2,{id:"option-1-install-and-run-autogen-in-docker",children:"Option 1: Install and Run AutoGen in Docker"}),"\n",(0,i.jsxs)(n.p,{children:["Docker, an indispensable tool in modern software development, offers a compelling solution for AutoGen's setup. Docker allows you to create consistent environments that are portable and isolated from the host OS. With Docker, everything AutoGen needs to run, from the operating system to specific libraries, is encapsulated in a container, ensuring uniform functionality across different systems. The Dockerfiles necessary for AutoGen are conveniently located in the project's GitHub repository at ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/tree/main/.devcontainer",children:"https://github.com/microsoft/autogen/tree/main/.devcontainer"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Pre-configured DockerFiles"}),": The AutoGen Project offers pre-configured Dockerfiles for your use. These Dockerfiles will run as is, however they can be modified to suit your development needs. Please see the README.md file in autogen/.devcontainer"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"autogen_base_img"}),": For a basic setup, you can use the ",(0,i.jsx)(n.code,{children:"autogen_base_img"})," to run simple scripts or applications. This is ideal for general users or those new to AutoGen."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"autogen_full_img"}),": Advanced users or those requiring more features can use ",(0,i.jsx)(n.code,{children:"autogen_full_img"}),". Be aware that this version loads ALL THE THINGS and thus is very large. Take this into consideration if you build your application off of it."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"step-1-install-docker",children:"Step 1: Install Docker"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"General Installation"}),": Follow the ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/get-docker/",children:"official Docker installation instructions"}),". This is your first step towards a containerized environment, ensuring a consistent and isolated workspace for AutoGen."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"For Mac Users"}),": If you encounter issues with the Docker daemon, consider using ",(0,i.jsx)(n.a,{href:"https://smallsharpsoftwaretools.com/tutorials/use-colima-to-run-docker-containers-on-macos/",children:"colima"}),". Colima offers a lightweight alternative to manage Docker containers efficiently on macOS."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"step-2-build-a-docker-image",children:"Step 2: Build a Docker Image"}),"\n",(0,i.jsx)(n.p,{children:"AutoGen now provides updated Dockerfiles tailored for different needs. Building a Docker image is akin to setting the foundation for your project's environment:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Autogen Basic"}),": Ideal for general use, this setup includes common Python libraries and essential dependencies. Perfect for those just starting with AutoGen."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker build -f .devcontainer/base/Dockerfile -t autogen_base_img https://github.com/microsoft/autogen.git\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Autogen Advanced"}),": Advanced users or those requiring all the things that AutoGen has to offer ",(0,i.jsx)(n.code,{children:"autogen_full_img"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker build -f .devcontainer/full/Dockerfile -t autogen_full_img https://github.com/microsoft/autogen.git\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"step-3-run-autogen-applications-from-docker-image",children:"Step 3: Run AutoGen Applications from Docker Image"}),"\n",(0,i.jsx)(n.p,{children:"Here's how you can run an application built with AutoGen, using the Docker image:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Mount Your Directory"}),": Use the Docker ",(0,i.jsx)(n.code,{children:"-v"})," flag to mount your local application directory to the Docker container. This allows you to develop on your local machine while running the code in a consistent Docker environment. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run -it -v $(pwd)/myapp:/home/autogen/autogen/myapp autogen_base_img:latest python /home/autogen/autogen/myapp/main.py\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Here, ",(0,i.jsx)(n.code,{children:"$(pwd)/myapp"})," is your local directory, and ",(0,i.jsx)(n.code,{children:"/home/autogen/autogen/myapp"})," is the path in the Docker container where your code will be located."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Mount your code:"})," Now suppose you have your application built with AutoGen in a main script named ",(0,i.jsx)(n.code,{children:"twoagent.py"})," (",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/test/twoagent.py",children:"example"}),") in a folder named ",(0,i.jsx)(n.code,{children:"myapp"}),". With the command line below, you can mount your folder and run the application in Docker."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'# Mount the local folder `myapp` into docker image and run the script named "twoagent.py" in the docker.\ndocker run -it -v `pwd`/myapp:/myapp autogen_img:latest python /myapp/main_twoagent.py\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Port Mapping"}),": If your application requires a specific port, use the ",(0,i.jsx)(n.code,{children:"-p"})," flag to map the container's port to your host. For instance, if your app runs on port 3000 inside Docker and you want it accessible on port 8080 on your host machine:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run -it -p 8080:3000 -v $(pwd)/myapp:/myapp autogen_base_img:latest python /myapp\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In this command, ",(0,i.jsx)(n.code,{children:"-p 8080:3000"})," maps port 3000 from the container to port 8080 on your local machine."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Examples of Running Different Applications"}),": Here is the basic format of the docker run command."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run -it -p {WorkstationPortNum}:{DockerPortNum} -v {WorkStation_Dir}:{Docker_DIR} {name_of_the_image} {bash/python} {Docker_path_to_script_to_execute}\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Simple Script"}),": Run a Python script located in your local ",(0,i.jsx)(n.code,{children:"myapp"})," directory."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run -it -v `pwd`/myapp:/myapp autogen_base_img:latest python /myapp/my_script.py\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Web Application"}),": If your application includes a web server running on port 5000."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run -it -p 8080:5000 -v $(pwd)/myapp:/myapp autogen_base_img:latest\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Data Processing"}),": For tasks that involve processing data stored in a local directory."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run -it -v $(pwd)/data:/data autogen_base_img:latest python /myapp/process_data.py\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Details on all the Dockerfile options can be found in the ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/.devcontainer/README.md",children:"Dockerfile"})," README."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For more information on Docker usage and best practices, refer to the ",(0,i.jsx)(n.a,{href:"https://docs.docker.com",children:"official Docker documentation"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Details on how to use the Dockerfile dev version can be found on the ",(0,i.jsx)(n.a,{href:"/autogen/docs/Contribute#docker",children:"Contributing"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"option-2-install-autogen-locally-using-virtual-environment",children:"Option 2: Install AutoGen Locally Using Virtual Environment"}),"\n",(0,i.jsx)(n.p,{children:"When installing AutoGen locally, we recommend using a virtual environment for the installation. This will ensure that the dependencies for AutoGen are isolated from the rest of your system."}),"\n",(0,i.jsx)(n.h3,{id:"setup-a-virtual-environment",children:"Setup a virtual environment"}),"\n",(0,i.jsx)(n.h4,{id:"option-a-venv",children:"Option a: venv"}),"\n",(0,i.jsxs)(n.p,{children:["You can create a virtual environment with ",(0,i.jsx)(n.code,{children:"venv"})," as below:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python3 -m venv pyautogen\nsource pyautogen/bin/activate\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The following command will deactivate the current ",(0,i.jsx)(n.code,{children:"venv"})," environment:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"deactivate\n"})}),"\n",(0,i.jsx)(n.h4,{id:"option-b-conda",children:"Option b: conda"}),"\n",(0,i.jsxs)(n.p,{children:["Another option is with ",(0,i.jsx)(n.code,{children:"Conda"}),". You can install it by following ",(0,i.jsx)(n.a,{href:"https://docs.conda.io/projects/conda/en/stable/user-guide/install/index.html",children:"this doc"}),",\nand then create a virtual environment as below:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"conda create -n pyautogen python=3.10  # python 3.10 is recommended as it's stable and not too old\nconda activate pyautogen\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The following command will deactivate the current ",(0,i.jsx)(n.code,{children:"conda"})," environment:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"conda deactivate\n"})}),"\n",(0,i.jsx)(n.h4,{id:"option-c-poetry",children:"Option c: poetry"}),"\n",(0,i.jsxs)(n.p,{children:["Another option is with ",(0,i.jsx)(n.code,{children:"poetry"}),", which is a dependency manager for Python."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://python-poetry.org/docs/",children:"Poetry"})," is a tool for dependency management and packaging in Python. It allows you to declare the libraries your project depends on and it will manage (install/update) them for you. Poetry offers a lockfile to ensure repeatable installs, and can build your project for distribution."]}),"\n",(0,i.jsxs)(n.p,{children:["You can install it by following ",(0,i.jsx)(n.a,{href:"https://python-poetry.org/docs/#installation",children:"this doc"}),",\nand then create a virtual environment as below:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"poetry init\npoetry shell\n\npoetry add pyautogen\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The following command will deactivate the current ",(0,i.jsx)(n.code,{children:"poetry"})," environment:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"exit\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now, you're ready to install AutoGen in the virtual environment you've just created."}),"\n",(0,i.jsx)(n.h3,{id:"python-requirements",children:"Python requirements"}),"\n",(0,i.jsxs)(n.p,{children:["AutoGen requires ",(0,i.jsx)(n.strong,{children:"Python version >= 3.8, < 3.13"}),". It can be installed from pip:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install pyautogen\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"pyautogen<0.2"})," requires ",(0,i.jsx)(n.code,{children:"openai<1"}),". Starting from pyautogen v0.2, ",(0,i.jsx)(n.code,{children:"openai>=1"})," is required."]}),"\n",(0,i.jsx)(n.h3,{id:"code-execution-with-docker-default",children:"Code execution with Docker (default)"}),"\n",(0,i.jsxs)(n.p,{children:["Even if you install AutoGen locally, we highly recommend using Docker for ",(0,i.jsx)(n.a,{href:"/autogen/docs/FAQ#code-execution",children:"code execution"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The default behaviour for code-execution agents is for code execution to be performed in a docker container."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"To turn this off"}),": if you want to run the code locally (not recommended) then ",(0,i.jsx)(n.code,{children:"use_docker"})," can be set to ",(0,i.jsx)(n.code,{children:"False"})," in ",(0,i.jsx)(n.code,{children:"code_execution_config"})," for each code-execution agent, or set ",(0,i.jsx)(n.code,{children:"AUTOGEN_USE_DOCKER"})," to ",(0,i.jsx)(n.code,{children:"False"})," as an environment variable."]}),"\n",(0,i.jsxs)(n.p,{children:["You might want to override the default docker image used for code execution. To do that set ",(0,i.jsx)(n.code,{children:"use_docker"})," key of ",(0,i.jsx)(n.code,{children:"code_execution_config"})," property to the name of the image. E.g.:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'user_proxy = autogen.UserProxyAgent(\n    name="agent",\n    human_input_mode="TERMINATE",\n    max_consecutive_auto_reply=10,\n    code_execution_config={"work_dir":"_output", "use_docker":"python:3"},\n    llm_config=llm_config,\n    system_message=""""Reply TERMINATE if the task has been solved at full satisfaction.\nOtherwise, reply CONTINUE, or the reason why the task is not solved yet."""\n)\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Turn off code execution entirely"}),": if you want to turn off code execution entirely, set ",(0,i.jsx)(n.code,{children:"code_execution_config"})," to ",(0,i.jsx)(n.code,{children:"False"}),". E.g.:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'user_proxy = autogen.UserProxyAgent(\n    name="agent",\n    llm_config=llm_config,\n    code_execution_config=False,\n)\n'})}),"\n",(0,i.jsx)(n.h3,{id:"migration-guide-to-v02",children:"Migration guide to v0.2"}),"\n",(0,i.jsxs)(n.p,{children:["openai v1 is a total rewrite of the library with many breaking changes. For example, the inference requires instantiating a client, instead of using a global class method.\nTherefore, some changes are required for users of ",(0,i.jsx)(n.code,{children:"pyautogen<0.2"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"api_base"})," -> ",(0,i.jsx)(n.code,{children:"base_url"}),", ",(0,i.jsx)(n.code,{children:"request_timeout"})," -> ",(0,i.jsx)(n.code,{children:"timeout"})," in ",(0,i.jsx)(n.code,{children:"llm_config"})," and ",(0,i.jsx)(n.code,{children:"config_list"}),". ",(0,i.jsx)(n.code,{children:"max_retry_period"})," and ",(0,i.jsx)(n.code,{children:"retry_wait_time"})," are deprecated. ",(0,i.jsx)(n.code,{children:"max_retries"})," can be set for each client."]}),"\n",(0,i.jsx)(n.li,{children:"MathChat is unsupported until it is tested in future release."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"autogen.Completion"})," and ",(0,i.jsx)(n.code,{children:"autogen.ChatCompletion"})," are deprecated. The essential functionalities are moved to ",(0,i.jsx)(n.code,{children:"autogen.OpenAIWrapper"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from autogen import OpenAIWrapper\nclient = OpenAIWrapper(config_list=config_list)\nresponse = client.create(messages=[{"role": "user", "content": "2+2="}])\nprint(client.extract_text_or_completion_object(response))\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Inference parameter tuning and inference logging features are currently unavailable in ",(0,i.jsx)(n.code,{children:"OpenAIWrapper"}),". Logging will be added in a future release.\nInference parameter tuning can be done via ",(0,i.jsx)(n.a,{href:"https://microsoft.github.io/FLAML/docs/Use-Cases/Tune-User-Defined-Function",children:(0,i.jsx)(n.code,{children:"flaml.tune"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"seed"})," in autogen is renamed into ",(0,i.jsx)(n.code,{children:"cache_seed"})," to accommodate the newly added ",(0,i.jsx)(n.code,{children:"seed"})," param in openai chat completion api. ",(0,i.jsx)(n.code,{children:"use_cache"})," is removed as a kwarg in ",(0,i.jsx)(n.code,{children:"OpenAIWrapper.create()"})," for being automatically decided by ",(0,i.jsx)(n.code,{children:"cache_seed"}),": int | None. The difference between autogen's ",(0,i.jsx)(n.code,{children:"cache_seed"})," and openai's ",(0,i.jsx)(n.code,{children:"seed"})," is that:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"autogen uses local disk cache to guarantee the exactly same output is produced for the same input and when cache is hit, no openai api call will be made."}),"\n",(0,i.jsxs)(n.li,{children:["openai's ",(0,i.jsx)(n.code,{children:"seed"})," is a best-effort deterministic sampling with no guarantee of determinism. When using openai's ",(0,i.jsx)(n.code,{children:"seed"})," with ",(0,i.jsx)(n.code,{children:"cache_seed"})," set to None, even for the same input, an openai api call will be made and there is no guarantee for getting exactly the same output."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"other-installation-options",children:"Other Installation Options"}),"\n",(0,i.jsx)(n.h3,{id:"optional-dependencies",children:"Optional Dependencies"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.h4,{id:"llm-caching",children:"LLM Caching"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["To use LLM caching with Redis, you need to install the Python package with\nthe option ",(0,i.jsx)(n.code,{children:"redis"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'pip install "pyautogen[redis]"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/autogen/docs/Use-Cases/agent_chat#llm-caching",children:"LLM Caching"})," for details."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.h4,{id:"blendsearch",children:"blendsearch"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"pyautogen<0.2"})," offers a cost-effective hyperparameter optimization technique ",(0,i.jsx)(n.a,{href:"https://arxiv.org/abs/2303.04673",children:"EcoOptiGen"})," for tuning Large Language Models. Please install with the [blendsearch] option to use it."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'pip install "pyautogen[blendsearch]<0.2"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Example notebooks:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/oai_completion.ipynb",children:"Optimize for Code Generation"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/oai_chatgpt_gpt4.ipynb",children:"Optimize for Math"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.h4,{id:"retrievechat",children:"retrievechat"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"pyautogen"})," supports retrieval-augmented generation tasks such as question answering and code generation with RAG agents. Please install with the [retrievechat] option to use it."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'pip install "pyautogen[retrievechat]"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["RetrieveChat can handle various types of documents. By default, it can process\nplain text and PDF files, including formats such as 'txt', 'json', 'csv', 'tsv',\n'md', 'html', 'htm', 'rtf', 'rst', 'jsonl', 'log', 'xml', 'yaml', 'yml' and 'pdf'.\nIf you install ",(0,i.jsx)(n.a,{href:"https://unstructured-io.github.io/unstructured/installation/full_installation.html",children:"unstructured"}),"\n(",(0,i.jsx)(n.code,{children:'pip install "unstructured[all-docs]"'}),"), additional document types such as 'docx',\n'doc', 'odt', 'pptx', 'ppt', 'xlsx', 'eml', 'msg', 'epub' will also be supported."]}),"\n",(0,i.jsxs)(n.p,{children:["You can find a list of all supported document types by using ",(0,i.jsx)(n.code,{children:"autogen.retrieve_utils.TEXT_FORMATS"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Example notebooks:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_RetrieveChat.ipynb",children:"Automated Code Generation and Question Answering with Retrieval Augmented Agents"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_groupchat_RAG.ipynb",children:"Group Chat with Retrieval Augmented Generation (with 5 group member agents and 1 manager agent)"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_qdrant_RetrieveChat.ipynb",children:"Automated Code Generation and Question Answering with Qdrant based Retrieval Augmented Agents"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.h4,{id:"teachability",children:"Teachability"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To use Teachability, please install AutoGen with the [teachable] option."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'pip install "pyautogen[teachable]"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Example notebook:  ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_teachability.ipynb",children:"Chatting with a teachable agent"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.h4,{id:"large-multimodal-model-lmm-agents",children:"Large Multimodal Model (LMM) Agents"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"We offered Multimodal Conversable Agent and LLaVA Agent. Please install with the [lmm] option to use it."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'pip install "pyautogen[lmm]"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Example notebooks:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_lmm_llava.ipynb",children:"LLaVA Agent"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.h4,{id:"mathchat",children:"mathchat"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"pyautogen<0.2"})," offers an experimental agent for math problem solving. Please install with the [mathchat] option to use it."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'pip install "pyautogen[mathchat]<0.2"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Example notebooks:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_MathChat.ipynb",children:"Using MathChat to Solve Math Problems"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var i=t(7294);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);