<div align="center">
  <img src="[https://i.imgur.com/4jaFpJz.png](https://ufile.io/3coy4hnb)" alt="PriVM"/>
  <p style="color: #00FF7F">A fast, simple, and highly customizable proxy.</p>
</div>

![inpreview](https://i.imgur.com/DOc2Y4J.png)

Server: [![Better Stack Badge](https://uptime.betterstack.com/status-badges/v2/monitor/1669d.svg)](https://uptime.betterstack.com/?utm_source=status_badge)

> **IMPORTANT**
> If you fork this repo, please consider giving the original repo a star. Thank you!

## Features

- Simple Design
- Fast Speeds
- Clean UI
- **About:Blank Cloaking**
- Easy Deployment

> **NOTE**
> This project is still being actively worked on, and some functions may not be finished yet.

## Deployment

> **WARNING**
> You **cannot** host PriVM locally via a static web hosting site such as Netlify, GitHub Pages, and Cloudflare Pages.

Please run the following commands to host a server:

git clone https://github.com/NightProxy/PriVM.git
cd PriVM-main
npm install
npm start

We recommend building on the PriVM branch. If you would like to try on the main branch, do the following steps:

To redirect builds intended for the main branch to a different branch called PriVM in a JavaScript-based project, you can use Git hooks with a Node.js script. Git hooks allow you to automate actions in response to Git events, such as commits or pushes. Here's a simple setup that uses a pre-push hook to change the target branch.

Step 1: Install Git Hooks
First, make sure you have the husky package installed to manage Git hooks. If it's not already installed, you can install it with npm:

```npm install husky --save-dev```

Step 2: Set Up Husky
Initialize husky in your project:
```npx husky install```
This creates a .husky directory in your project.

Step 3: Create a Pre-push Hook
Create a pre-push script to redirect pushes to the PriVM branch when the target is main:
```npx husky add .husky/pre-push "node index.js"```

Step 4: Make the Script Executable
Ensure the pre-push hook is executable:
```chmod +x .husky/pre-push```





Project Status
The original author of the project is managed and owned by @stella

@stella (Most Active)
@amplify (Helper)
PriVM Team:
@bb123 (Dev)
@suhas (Just there)

Contribution
To contribute to PriVM, clone the repo locally and submit your code in a pull request.

If you are making large changes, please make sure you test your code before submitting a pull request.

Contributors
Thank you to the following people for contributing to PriVM.


Tech Stack:
Ultraviolet V2
TompHTTP Bare Server
Rammerhead
Eruda Mobile Inspect

