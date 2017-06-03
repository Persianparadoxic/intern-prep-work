# GDG Summer Internship Prep Work

First things first, if you don't have Node.js or Jasmine installed, you'll need to do that before you can run any of the scripts. The following command will get you where you need to be. It'll install Homebrew, Node.js, Yarn, and Jasmine which will allow you run the code and the tests you'll be working on as well.  
> `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`  
> `brew update`  
> `brew install node yarn`  
> `yarn global add jasmine`  

If you're on a Windows computer then you'll need to do things a little differently. First, follow the instructions on [this page to install Chocolatey, the best package manager for Windows](https://chocolatey.org/install). Then you'll be set to run the following in the PowerShell:  
> `choco install nodejs.install`  
> `choco install yarn`  
> `yarn global add jasmine`  

Whew! After those are done (Homebrew/Chocolatey might take a little while to install) then you'll be ready to code! 

Click the link at the top of the page to fork this repository into your own GitHub account. Once you've done that, `git clone` your forked repo with the following command:  
> `git clone https://github.com/<YOUR_USER_NAME>/intern-prep-work.git`  
> `cd intern-prep-work`  

Open your favorite editor (most of us on the GDG EE project use [Microsoft's open source VSCode editor](https://code.visualstudio.com/)) at the root of the project and you'll finally be able to write some code. Start with the `hello-world` folder and follow the instructions in the `README.md` file in there, ignoring anything about exercism.io (that's where these exercises came from originally, I just modified them a little for our purposes). Instead of submitting to exercism, you should use git to push changes to your master branch. By doing that, I'll be able to look at your code we can talk about it. I want you guys to focus on the unit tests especially. Testing is _invaluably_ important and you may end up spending a good portion of your time working on some tests for our platform code. 

The general idea here is to get you acquainted with JavaScript in a general way. We use AngularJS for our front-end code and you'll certainly get to learn a lot of that over the summer, but the best place to start is with plain old vanilla JavaScript. Feel free to augment the exercises in any way you feel lead to. Some of them might be a little easy depending on how comfortable you are with programming to begin with. Please email me if you have any questions (Parker should give you my work email, though my personal email is listed on my GitHub account and works just fine)!
