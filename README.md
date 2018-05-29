# IPAN-NEW
# IPAN DEVELOPMENT

Develop a healthcare web app for infants.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need a GitHub account. If this is a uni-project you may want to create an organisation account and add multiple members.

### Installation

Refer to the link- https://www.meteor.com/install for details.

#### Install Meteor in Mac

Complete details for installing Meteor can be found at https://www.meteor.com/install . 

Run the following command in your terminal to install the latest official Meteor release:
```
curl https://install.meteor.com/ | sh
return true
```

#### Install Meteor in Mac

This has two stages:
1. Install Chocolatey
2. Install meteor

**Install Chocolatey**
1. First, ensure that you are using an administrative shell.
2. Copy the text specific to your command shell - cmd.exe or powershell.exe.
3. Paste the copied text into your shell and press Enter.
4. Wait a few seconds for the command to complete.
5. If you don't see any errors, you are ready to use Chocolatey! 

**Install Meteor**

Run this command using an Administrator command prompt:
```choco install meteor```

#### Help to start in Local Computer

1. Clone or Download the forked repository to your local environment.
2. In the Terminal or CMD go to the project folder created by GitHub in your computer and type:  
```meteor```
3. The above command should download all the dependencies and packages installed.
4. Incase there are errors in running the project, the list of packages are provided below.

### Packages

**Packages for Meteor can be found at** https://atmospherejs.com/

##### Add the below packages only if you are starting a new project folder or errors are generated.

1. **iron:router**
Add package by typing ```$ meteor add iron:router```
More details at https://atmospherejs.com/iron/router
This package is used mainly for routing within the templates, pages and layouts.

2. **twbs:bootstrap**
Add package by typing ```$ meteor add twbs:bootstrap```
More details at https://atmospherejs.com/twbs/bootstrap
This package is used to apply Bootstrap in the project.

3. **fortawesome:fontawesome**
Add package by typing ```$ meteor add twbs:bootstrap```
More details at https://atmospherejs.com/fortawesome/fontawesome
This package is used to apply Font Awesome Markup in the project.

4. **aldeed:collection2-core**
Add package by typing ```$ meteor add aldeed:collection2-core
$ meteor npm install --save simpl-schema```
More details at https://atmospherejs.com/aldeed/collection2-core
This package is used to allows you to attach a schema to a Mongo.Collection. Automatically validates against that schema when inserting and updating from client or server code.

5. **aldeed:autoform**
Add package by typing ```$ meteor add aldeed:autoform```
More details at https://atmospherejs.com/aldeed/autoform
This package is used to add UI components and helpers to easily create basic forms with automatic insert and update events, and automatic reactive validation.

