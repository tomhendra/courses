<div align=center>
<img alt="Tom Hendra logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>Full Stack for Front-End Engineers v2</h1>
</div>

- [1. Introduction](#1-introduction)
  - [1.1. Why Full Stack?](#11-why-full-stack)
  - [1.2. Command Line Overview](#12-command-line-overview)
  - [1.3. Shells](#13-shells)
- [2. Understanding the Internet](#2-understanding-the-internet)
  - [2.1. IP Addresses & Protocols](#21-ip-addresses--protocols)
  - [2.2. Domain Name System](#22-domain-name-system)
  - [2.3. Trace Routes](#23-trace-routes)
  - [2.4. Packets](#24-packets)
  - [2.5. Understanding Net Neutrality](#25-understanding-net-neutrality)
- [3. Servers](#3-servers)
  - [3.1. VIM Overview & Modes](#31-vim-overview--modes)
  - [3.2. What is a Server?](#32-what-is-a-server)
  - [3.3. Data Centers & The Cloud](#33-data-centers--the-cloud)
  - [3.4. Virtual Private Server Setup](#34-virtual-private-server-setup)
  - [3.5. Operating Systems](#35-operating-systems)
  - [3.6. SSH](#36-ssh)
  - [3.7. SSH Key Generation & Connecting to the Server](#37-ssh-key-generation--connecting-to-the-server)
- [4. Server Setup](#4-server-setup)
  - [4.1. Domain Names](#41-domain-names)
  - [4.2. Domain Setup](#42-domain-setup)
  - [4.3. Server Setup](#43-server-setup)
  - [4.4. User Setup](#44-user-setup)
  - [4.5. Setting User Permissions](#45-setting-user-permissions)
  - [4.6. Disabling the Root User](#46-disabling-the-root-user)
  - [4.7. Nginx Overview](#47-nginx-overview)
  - [4.8. Nginx Configuration](#48-nginx-configuration)
  - [4.9. Node.js Configuration](#49-nodejs-configuration)
  - [4.10. Application Architecture](#410-application-architecture)
  - [4.11. Application Setup](#411-application-setup)
  - [4.12. Proxy Passing Traffic](#412-proxy-passing-traffic)
  - [4.13. Process Manager](#413-process-manager)
  - [4.14. Version Control with Git](#414-version-control-with-git)
  - [4.15. Server Setup Extras & Summary](#415-server-setup-extras--summary)
- [5. Bash Basics](#5-bash-basics)
  - [5.1. Standard Streams & Redirection](#51-standard-streams--redirection)
  - [5.2. Finding Files & Directories](#52-finding-files--directories)
  - [5.3. Searching File Contents with grep & zgrep](#53-searching-file-contents-with-grep--zgrep)
- [6. Nginx Config Basics](#6-nginx-config-basics)
  - [6.1. Nginx redirect](#61-nginx-redirect)
  - [6.2. Nginx Subdomain](#62-nginx-subdomain)
  - [6.3. Nginx File Compression](#63-nginx-file-compression)
- [7. Security](#7-security)
  - [7.1. Read auth.log](#71-read-authlog)
  - [7.2. Security Checklist](#72-security-checklist)
  - [7.3. Unattended Upgrades](#73-unattended-upgrades)
  - [7.4. Firewalls](#74-firewalls)
  - [7.5. Ports](#75-ports)
  - [7.6. Uncomplicated Firewall](#76-uncomplicated-firewall)
  - [7.7. Permissions](#77-permissions)
  - [7.8. Upgrade Node.js](#78-upgrade-nodejs)
- [8. HTTP](#8-http)
  - [8.1. HTTP Headers & Cookies](#81-http-headers--cookies)
  - [8.2. HTTPS](#82-https)
  - [8.3. Adding HTTPS to Nginx](#83-adding-https-to-nginx)
  - [8.4. HTTP/2](#84-http2)
  - [8.5. HTTP/3](#85-http3)
- [9. Containers Basics](#9-containers-basics)
  - [9.1. Containers & Microservices](#91-containers--microservices)
  - [9.2. Docker & Orchestration](#92-docker--orchestration)
  - [9.3. Load Balancers](#93-load-balancers)
  - [9.4. Deployment](#94-deployment)

## 1. Introduction

Learn what it means to become a full-stack engineer! If you’re going to be a well rounded engineer, it’s important you understand what is happening on the server-side. In this course, you'll learn to move back and forth between UI and the back-end through the the command line, SSH, nginx, docker containers, server security, HTTP/2, HTTP/3 and more.

- [Slides](https://jemyoung.com/fsfe)

- The frontend could be one of many things.
  - A car
  - Televisions
  - Browsers
  - Desktop apps
  - Mobile devices
  - Appliances
- But the backend is complicated too.
  - APIs
  - Data analytics
  - Security
  - Reliability
  - Databases
  - Platform

What is a full stack engineer? - Someone who can build an application from start to finish.

It is almost impossible to be really amazing at all parts of the stack.
Find the area that you are passionate about, and really dig into it to become an expert.

### 1.1. Why Full Stack?

- Because at some point in our career we are going to see all of these things.
- There are a lot of UI engineers because the entry barrier is low.
- If we want to differentiate ourselves, full stack is the way to go.
- Understanding how everything comes together will make us better engineers.
- Being a full stack engineer and moving beyond the UI is therefore incredibly valuable.

### 1.2. Command Line Overview

Why the command line?

- Fast
- Consistent
- Easier to automate

Common commands:

- **cd** - change directory
- **ls** - list directory contents
- **pwd** - print working directory
- **mkdir** - make directory
- **rmdir** - remove directory

- **cat** - show file contents
- **man** - command manual
- **less** - show file contents by page
- **rm** - remove file
- **echo** - repeat input

### 1.3. Shells

**Shell** - Command interpreter to interface with system.
**Terminal** - Runs shell applications.

Shell => application => kernel

With a shell we are not too far removed from the core of the machine. A GUI is quite a few more steps further away.

## 2. Understanding the Internet

- **The internet**: A system of globally interconnected devices.
- **The Intranet**: Private internet, like a VPN.

### 2.1. IP Addresses & Protocols

- The internet is built on trust.
- Mankind agreed on a set of standards for computers to talk to one another.
- That resulting protocol is **IP** (Internet Protocol).
- It is a collective idea that data is well formed enough so that it can be received, read, written, and sent back.
- **IP address**: A label assigned to an internet connected device used by IP.
  - IPv4: 8.8.8.8 - 4.3 billion eventually ran out.
  - IPV6: 2001:4860:4860:8888 - 340 undecillion.
- IP runs over **TCP** (Transmission Control Protocol) which is a standardization of how computers communicate.
- **UDP** (User Datagram Protocol) is different to TCP in that where TCP has to negotiate a connection UDP does not.
- TCP is lossless, it has error checking and correction.
- TCP sends a SYN packet to request a connection, and the client responds with an ACK packet to instantiate a connection.
- UDP is a one-way data stream where no negotiation of connection is required.

### 2.2. Domain Name System

- We can `ping` an internet address to check if the site is up and running.
- However we don't `ping` an IP address.
- The mapping of domain names to IP addresses is handled by another protocol: **DNS**.
- The DNS system is run by ICANN (The Internet Corporation for Assigned Names and Numbers) and is essentially an internet phone book.
- DNS says what is the closest server that this domain name resolves to.
- The domain name system is a way to make the internet more accessible to more people.
- A domain can be broken down into parts. Given `blog.tomhendra.dev`:
  - `.dev` is the TLD (Top Level Domain)
  - `tomhendra` is the domain
  - `blog.` is the subdomain.
- Using a subdomain over a path indicates affiliation with the site, but probably a different application entirely.
- DNS is able to map domain names to IP addresses with **nameservers**.
- A nameserver is the entity that actually keeps records for the mapping.

### 2.3. Trace Routes

- `traceroute` gives us a map of every single hop along the route to reaching a server.
- It is useful for debugging connections. It tells where the connection breaks down along the route to a site.
- `traceroute` and `ping` are both running over **ICMP** (Internet Control Message Protocol).
- We can configure our servers to deny requests via ICMP which is called **blackholing**.

### 2.4. Packets

- We can think of a packet like an envelope.
- It has an address, it has information about where it was sent from, and inside it has information.
- A packet mainly contains metadata in the form of headers.
- With TCP it usually starts with one packet, then 50 more, which when received by the server are put together in a checksum.
- If there are any missing packets, another request is made for the missing packets which are retransmitted.
- This is the error correction feature of TCP.
- UDP on the other hand just broadcasts data, and retransmission of lost data packets is not possible, although UDP is faster as a result.

### 2.5. Understanding Net Neutrality

To summarize, how does the internet work?

- The internet is a system of globally interconnected devices.
- The internet runs based on set of rules called TCP/IP, which is a protocol that everyone agrees on.
- On the TCP/IP protocol are packets, which are a base unit of information that everyone knows how to communicate with.
- The packets have information in their headers on how to transfer data, as well as the data itself.
- There are different types of packets, such as ICMP packets on the DIFFTEMP protocol which allows 'health checks'.
- All of this runs on a series of trust.
- Trust meaning that when we send a packet, it is guaranteed to be handed off to the next node in the network en route to the destination.
- When we type a domain name into the browser it gets resolved by nameservers to an IP address of a server somewhere, using the DNS system.
- And that server is what handles the data.

This 'trust' that when a packet is sent it is guaranteed to arrive by being routed by various providers impartially is under debate. The **net neutrality** debate surrounds whether ISPs should prioritize traffic depending on how much they are paid.

## 3. Servers

### 3.1. VIM Overview & Modes

- VIM stands for Vi IMproved and is a text editor.
- VI is powerful because it is on almost every server.
- VI has different modes.
  - insert mode: Text editing - `i`
  - command mode: Primary mode - `ESC`
  - last line mode: Searching, saving, exiting - `:`
- VI forces you to use a keyboard.
- If you are good at VI you will be much faster than someone who uses a mouse.
- The problem is to get good at VIM takes years.
- How to quit VIM: `ESC :q!`
- [VIM Cheatsheet](https://linuxmoz.com/vi-commands-cheat-sheet/).
- To start VIM type `vi`.

### 3.2. What is a Server?

- Anything that responds to requests and serves content can be a server.
- We tend to think of servers as powerful computers in racks, which generally they are.
- We can create a basic server with VIM.
- `vi simpleServer.js`

```js
const http = require("http");

http
  .createServer(function (req, res) {
    res.write("Hello, World!");
    res.end();
  })
  .listen(8080);

console.log("Server started! Listening on port 8080");
```

- Running `node simpleServer.js` will launch our server!
- In every web language there is a way to write a server.
- The basic pattern to every Node server we will ever write is with the callback `(req, res)`: request, response.
- We can listen on any port number we wish, but generally anything below 1000 are reserved.
- The internet runs over port 80, and HTTPS on 443.
- localhost is 127.0.0.1: It is a loopback command, that says rather than go to the internet over port 80, use my local machine at port 80.

### 3.3. Data Centers & The Cloud

**Data Centers**

- In reality servers are networked together in stacks so they can handle requests efficiently.
- Servers are built in particular ways that consumer grade hardware is not.
- For instance they will likely have error correcting memory and faster CPUs than what's generally available; 40 / 50 cores.
- But servers are built for handling lots of processes.
- An application on a server can automatically fork processes, fork commands, handle requests in one thread then spin off to another one.
- Servers are custom built machines for serving files and not built to be interacted with as much.
- Servers generally live in a place called data centers.
- Data centres are racks and racks and racks of machines usually run in very cold environments.
- They are usually very clean, with not a lot of dust.
- Security on them is very tight.
- There are core parts of the internet infrastructure that are heavily relied on.
- The amount of power consumed is astronomical; city-scale consumption.
- FaceBook, Amazon, Google all have their own data centers with machines specifically built for their applications, quite often running on renewable energy.
- Often this collection of computers are shared between different applications or companies.
- You can rent one server, or a fraction of a server (VPS).

**The Cloud**

- Data centers are fairly modern; 15 or 20 years old.
- Software companies used to have their own server racks which were more work to maintain.
- Data centers took away the hassle and reduced cost.
- The great thing about cloud computing and data centers is that they can be in different parts of the planet.
- We can have an application running in different parts of the world to reduce the lag to users.
- We want to least amount of hops, because each hop is a few more nanoseconds and a chance for a problem to occur.
- Another great thing about the cloud is the idea of elastic computing, which can scale as required.
- This allows cost to adjust with traffic, by not paying for compute cycles that are not needed.
- Most people like us just need a fraction of one server.
- A server can be sliced into independent chunks which cannot communicate with each other, by way of process isolation.

### 3.4. Virtual Private Server Setup

- These slices of servers are called VPS.
- DigitalOcean is the recommended CSP because ut has the cleanest and simplest UI.
- AWS is more powerful and has more features but can be overwhelming for learners.
- We start in DO by clicking 'Get Started with a Droplet`.
- We then choose an image, which is a copy of a base OS with different types of CPU compute.
- A Droplet is the equivalent of AWS EC2. It is a VPS.
- We want Ubuntu LTS.

### 3.5. Operating Systems

- Ubuntu is a flavour of Linux, which is based on Unix.
- There are two types of servers: Windows & Unix.
  - Unix => BSD => freeBSD => MacOS
  - Unix => Linux => Ubuntu, Debian, Fedora, Red Hat + many more.
  - Unix => Solaris
- Windows is very different from Unix, in that Windows MS DOS as its underlying core.
- Unix is not particularly friendly, so we use Linux which is much friendlier.
- Ubuntu is the most popular distribution of Linux.
- Linux works on the principle of two:

1. **Kernel**: The layer that talks to the actual machine hardware. The CPU, threading, scheduling... all handled ny the kernel.
2. **Utilties**: Instead of baking everything into the OS, in the kernel, it bakes in utilities, which are tiny apps that just do one thing.

- Because the utilities are tiny applications they can be updated without breaking the kernel.
- Utilities allow us to interact with the kernel and with other applications on the system.
- It is a brilliant model and makes things much simpler.
- Windows on the other hand has everything baked in to the OS. When we want to update, we need to update all of Windows generally.
- The LTS means Long Term Support. When building for production we should always choose LTS.

### 3.6. SSH

- Security is really, really important.
- There are basically two ways to authenticate with a server: username / password or SSH.
- SSH (Secure Socket Shell) is a very large key that is as of now unbreakable, so is much more secure.
- SSH key pairs are made up of two parts: a public key and a private key.
- The private key stays on our computer, and the public key goes on a server.
- Everything is encrypted with the private key, so when it is transferred nobody can intercept it.
- The connection established is called a tunnel or pipe, and everything within it is unbreakable.
- SSH keys are the strongest form of authentication that we have available.
- Anyone can have access to the public key and encrypt data with it.
- But the only way to decrypt is with the private key that we have, which never leaves our computer or network.

### 3.7. SSH Key Generation & Connecting to the Server

- Navigate to `~/.ssh`
- `ssh-keygen`
- Enter a name for the key.
- `pbcopy < ~/.ssh/KEY_NAME.pub`
- Paste in DigitalOcean UI.
- Create Droplet.
- Copy IP address from DigitalOcean.
- `ssh root@IP_ADDRESS`
- A prompt will appear to warn we are connecting to a new server.
- Permission denied! The default is `id_rsa` so SSH will check that first.
- To get around this we need to type `ssh -i digitalocean root@IP_ADDRESS`.
- We are now logged in.
- To exit type `exit`.
- To add the key to MacOS keychain edit the config: `vi ~/.ssh/config` and change `AddKeysToAgent` and `UseKeychain` both to `yes`.
- MacOS should do this automatically, but not every keychain is automatically configured to add the keys to the agent every time.
- Alternatively `ssh-add -K ~/.ssh/KEY_NAME` manually adds the key to the keychain.

Note: When we log in to the server, the `#` in the prompt indicates we are logged in as a super user, as root.

- Logging in as root is dangerous, because we can do anything we want.
- We could delete entire directories and we won't get a warning.
- When not logged in as a super user, when we do something that is restricted in permissions, we have to manually override that every time.
- It is best practice to login as a user with root permissions but is not root.

## 4. Server Setup

### 4.1. Domain Names

- The way that domain names are resolved is by nameserver records called DNS records.
- There are different types of records depending on what we want to do.
- A record: Maps name to an IP address (most common).
- CNAME: Maps name to a different name.
- We use the `dig` command to check the records on any given domain.

### 4.2. Domain Setup

- Once we own a domain we beed to add two A records so that it can be resolved to our IP address.
- We can use DigitalOcean's own nameservers for this.
- First add the domain in the network menu of the DO dashboard.
- Then add two A Records with our droplet's IP address:
  - @ (root domain)
  - www
- Now we have two A records that will map the domain name to the droplet IP address.
- A nameserver is like an address book that holds the records used for resolving domains to IP addresses.
- But if we try to access the domain at this point, it won't redirect to our website yet, because:

1. The server is not yet accepting connections.
2. We need to give domain name resolution control to DO's nameservers rather than the registrar's.

- Copy the nameservers from DO and change the nameservers in the domain registrar dashboard.
- This moves the canonical record from the registrar to DigitalOcean.
- DigitalOcean is now responsible for routing and controlling the DNS resolution.

### 4.3. Server Setup

Usually the steps are:

1. Update software
2. Create a new user
3. Make that user a super user
4. Enable login for new user
5. Disable root login

- apt is a wrapper around apt-get which makes it simpler to install software. It is like npm for Linux.
  - Update software: `apt update`
  - Upgrade software: `apt upgrade`

ALWAYS keep software up-to-date.
Almost all security breaches are a result of vulnerabilities in software, which are patched with updates.

- Add new user: `adduser $USERNAME`

### 4.4. User Setup

- If we switch to the newly created user we won't have super user access.
- `sudo` stands for Super User Do.
- When we use `sudo` we are executing commands with escalated privileges.

So we need to give the user we created those super user privileges:

- Add user to “sudo” group: `usermod -aG sudo $YOUR_USERNAME`
- Switch user: `su $YOUR_USERNAME`
- Check sudo access: `sudo cat /var/log/auth.log`

Top tip: `sudo !!` runs the previous command with sudo access, if we forget to use `sudo`.

- The auth log is a log of people that are attempting to do something on the server, or login to the server.
- We can see what's happening with our server in real time.
- `head` gives us the first 10 lines in file: `sudo head /var/log/auth.log`.
- `tail` gives us the last 10 lines in file. We can use the `-f` flag for follow: `sudo tail -f /var/log/auth.log`.
- We always want to log everything on a server, so when things go wrong we can figure out why.
- One of the most powerful debugging tools we have is tailing a log file and then connecting to a server at a different terminal or shell and understanding what's happening.

### 4.5. Setting User Permissions

- Our SSH keys are by default in the .ssh directory.
- We want to be able to login as the new user, and then disable root login.

  - Change to home directory: `cd ~`
  - Create a new directory if it doesn’t exist: `mkdir -p ~/.ssh`
  - Create authorized_keys file and paste our PUBLIC key: `vi ~/.ssh/authorized_keys`

- `-p` flag creates a directory if one doesn't already exist.
- All we did when we switched users is open a new shell.
- So we need to exit the shell back to root, and then exit again, before using SSH to login with our new username.

  - `$ exit`
  - `# exit`
  - `ssh $USERNAME@IP_ADDRESS`

### 4.6. Disabling the Root User

We have successfully logged in with our new user which has root access.

We now want to change the file permissions of `authorized_keys` so that it is only readable and writeable by sudo, and certain file system daemons like the SSH daemon.

- Change file permissions: `chmod 644 ~/.ssh/authorized_keys`

After that we can disable root login by modifying the SSH daemon config on the server itself.

- Disable root login: `sudo vi /etc/ssh/sshd_config`
- Change: `PermitRootLogin yes` to `no`

The daemon is a program that's always running in the background. That's what allows us to login with SSH. We don't need to do anything to start or stop it. It's constantly running and listening.

With SSH daemon we can do lots of things. Bear in mind any time we use `sudo` we are doing a potentially dangerous operation. We could lock ourselves out of our own server! So be careful.

Although the daemon is always running, it isn't always checking the config, so we want to restart that service.

- `sudo service sshd restart`

### 4.7. Nginx Overview

- Nginx is one of the most popular web servers available.
- Another popular web server is Apache, which works really well with PHP (LAMP stack).
- Nginx is lightweight and extremely fast.
- It's a reverse proxy, web server, proxy server, file server, it can do caching, performance tuning, compression, encryption and more.
- It does a little bit of everything.
- Nginx routes the requests to the right thing.
- That's why it is sometimes called a reverse proxy, because it takes a request and proxies it somewhere else.
- A regular proxy takes a bunch of requests and proxies them to one place.
- Tuning Nginx properly it critical.

  - Install Nginx: `sudo apt install nginx`
  - Start Nginx: `sudo service nginx start`

So back to the question: How does the internet work? (so far...)

There's a domain, it hits a nameserver, the nameserver says hey I know where you are trying to go, here's an IP address, the IP gets passed off to other routers and nodes and switches, eventually hits the server, when it hits the server Nginx says hey I know where to go, I'll route you to this default page.

### 4.8. Nginx Configuration

- Nginx is serving a page, but what is it doing?
- Show Nginx config: `sudo less /etc/nginx/sites-available/default`

The Nginx docs are not very readable. Jem recommends to Google for blog posts etc to do tweaks in Nginx.

In the Nginx configuration there are a lot of different things. We will focus on a few highlights:

```
root /var/www/html;

        # Add index.php to the list if you are using PHP
        index index.html index.htm index.nginx-debian.html;

        server_name _;

location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                try_files $uri $uri/ =404;
```

- The base directory for all requests go to `root /var/www/html;` by default. That's where most people keep their applications.
- A `location` block says for every request that comes into the server, what should I do?
- `try_files` is what's known as a directive in Nginx. Essentially it's a macro for doing something.
- Later we'll use a directive called proxy past which proxies requests to some other part of the server.
- Nginx uses regular expressions to match one of the files listed: `index index.html index.htm index.nginx-debian.html;`.
- If nothing is found then it will error with a 404.

There is also a server block which encompasses a load of other configuration options:

```
server {
        listen 80 default_server;
        listen [::]:80 default_server;

        # SSL configuration
        #
        # listen 443 ssl default_server;
        # listen [::]:443 ssl default_server;
        #
        # Note: You should disable gzip for SSL traffic.
        # See: https://bugs.debian.org/773332
        #
        # Read up on ssl_ciphers to ensure a secure configuration.
        # See: https://bugs.debian.org/765782
        #
        # Self signed certs generated by the ssl-cert package
        # Don't use them in a production server!
        #
        # include snippets/snakeoil.conf;

        root /var/www/html;

        # Add index.php to the list if you are using PHP
        index index.html index.htm index.nginx-debian.html;

        server_name _;

        location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                try_files $uri $uri/ =404;
        }

        # pass PHP scripts to FastCGI server
        #
        #location ~ \.php$ {
        #       include snippets/fastcgi-php.conf;
        #
        #       # With php-fpm (or other unix sockets):
        #       fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
        #       # With php-cgi (or other tcp sockets):
        #       fastcgi_pass 127.0.0.1:9000;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #       deny all;
        #}
}
```

We can create a default page and change it to whatever we want. We do this to verify that our directories and files are being served correctly.

- Create and edit index.html: `sudo vi /var/www/html/index.html`

### 4.9. Node.js Configuration

At some point we want to create complex applications. To do that we are going to create an application server.
An application server is different from a web server, which just receives web traffic and does something with it.

- NodeJS is a essentially a single threaded JavaScript engine that runs on top of V8.
- It is usually a few versions behind Chrome.
- The single thread is something that is often under-appreciated.
- It means that things can be handled asynchronously very well.
- Node uses the event loop to hand off processes so is asynchronous.
- Node isn't the fastest. Generally Java, Go or Rust will be faster.
- But most of the time we are not limited by the speed of the engine, it is something else.

  - Install NodeJS and npm: `sudo apt install nodejs npm`
  - Install git: `sudo apt install git` (usually this is already installed)
  - Configure git to use main as default branch: `git config --global init.defaultBranch main`

### 4.10. Application Architecture

- Jem says the difference between a junior engineer and a senior engineer is about architecture.
- How we arrange the application code and files means thinking about long-term maintainability.
- Senior engineers think long-term.
- Application architecture matters. An application can live for a long time, maybe years.
- So it needs to be setup in a way that makes sense to us and everyone can agree on, because migrating files is painful.
- If we are making an application and we turn into a business, the architecture will catch up tp us.
- Part of being full stack is making decisions about the stack, the code, the tools.
- When making decisions, use things that other people can use too.
- Think about how other people use our code.

### 4.11. Application Setup

First we want to change the ownership of the `www` directory so that we don't need `sudo` every time we modify it.

- Change ownership of the www directory to the current user: `sudo chown -R $USER:$USER /var/www`

`chown` is for change ownership, the `-R` makes the command recursive, and `$USER` denotes current user.

- Create application directory: `mkdir /var/www/app`
- Move into app directory and initialize empty git repo: `cd /var/www/app && git init`

Now we can create our directory structure.

- Create directories: `mkdir -p ui/js ui/html ui/css`
- Create empty app file: `touch app.js`
- Initialize project: `npm init`

Next we install Express, which is a Node.js-based web server.

- install express: `npm i express --save`
- edit app: `vi app.js`
- We will create a bare bones Express server:

```js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

### 4.12. Proxy Passing Traffic

- If we type `node app.js` the app will start running, but our Express server is running on port 3000, but the internet runs on port 80.
- We need to direct that traffic to port 80 by connecting Nginx to Express.
- We can tune Nginx so it points to the correct port.
- To do this we are going to use the `proxy_pass` directive.
- This means we proxy all the traffic going to `/` which is the general root domain, to the actual Node server on a different port.
- Edit nginx config: `sudo vi /etc/nginx/sites-available/default`
- Remove everything inside the `{}` and replace with `proxy_pass http://127.0.0.1:3000/;`

```
location / {
  proxy_pass http://127.0.0.1:3000/;
}
```

- Now restart Nginx: `sudo service nginx restart`
- Any requests received will now be forwarded to the node application to handle.
- The benefit of this is that we can have several different applications all running on different ports at the same time.
- We can take an application down, spin another one up, route to a database etc.

### 4.13. Process Manager

Having to run `node app.js` is a pain. What happens if we restart the server, or if our computer goes to sleep and the shell exits which kills every program that's running. We need to use a process manager.

- A process manager is a way of keeping an application up and running.
- It handles errors, handle restarts.
- It can handle logging and clustering.

We will use `PM2. There is also a program called Forever but PM2 is more full featured and cleaner to use.

- Install PM2: `sudo npm i -g pm2` (we need to use sudo because it is a global install)
- Start PM2: `pm2 start app.js`

Now `app.js` is running in the background and PM2 will do its best to keep it running.
Next we can modify the PM2 startup file so that it creates a daemon that will always start our application when we start the server.

- Setup auto restart: `pm2 startup`
- Save the current process list: `pm2 save`

### 4.14. Version Control with Git

Version control records changes to a file system to preserve the history. Code is stored in a repository, the most popular of which is GitHub.

In order to store our code in a GitHub repo we need to go through some steps.

1. Create git repository
2. Create a repo on GitHub
3. Create SSH key
4. Add SSH key to GitHub
5. Add remote repo
6. Push local repository to GitHub

- Once we go through these steps we can code on our local machines.
- We won't need to login to a server so we can use our IDE and and all the tools we want.
- We can spin up the Node server locally and then just push that all to GitHub.
- When we log into our server we can pull it down, restart our server and all of the changes will be there.
- Generally we don't do any development on the server itself.

**Create git repository**

- We already did this with `git init` earlier in our app directory on the server.

**Create a repo in Github**

- Go to GitHub.com and create a new repo.
- Initialize it with a README as this can make it easier to pull in.
- Create a gitignore in the app directory: `vi .gitignore` and at the least add `node_modules` to it.

**Create SSH key**

- Generate key on the server: `cd ~/.ssh$` then `ssh-keygen`
- We store the key in the default `id_rsa`
- When we use GitHub to SSH and push or pull our files, SSH will automatically check `id_rsa`.

**Add SSH key to GitHub**

- [The docs give detailed instructions](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account).
- Basically go to GiHub Profile > Settings > SSH and GPC Keys > New SSH Key
- `cat id_rsa.pub` in the `.ssh` directory on the Droplet, copy and paste into Github.

**Add remote repo**

- Go to the new Github repo, select the Code button, and copy the SSH link to the repo.
- On the server app directory type `git remote add origin git@github.com:username/repo_name.git`

If we try to commit to the repo Git will prompt us to configure a username, so that when the commit lands on Github there will be someone attributed to it. We can set this up with:

- `git config --global user.email "you@example.com"`
- `git config --global user.name "Your Name"`

Something like `tomhendra-server` would suffice for the name, just to show where the commit came from.

**Push local repository to GitHub**

- GitHub master branch now defaults to main, so change the branch in app with `git branch -m master main`.
- `git add .`
- `git commit -m "Server Init"`
- `git push origin main`

Now we can clone the repo to our local machine with `git clone git@github.com:username/repo_name.git`. We can make changes locally and push to GitHub, then `git pull` into the server.

If we wanted to we can setup a cron job that automatically pulls in the latest changes (this is not a good idea in production, but for our own personal server it's fine).

### 4.15. Server Setup Extras & Summary

- [Install Fail2ban](https://www.techrepublic.com/article/how-to-install-fail2ban-on-ubuntu-server-18-04/).
  This bans repeated access attempts.
- [ExpressJS performance tips](http://expressjs.com/en/advanced/best-practice-performance.html).
  Helps with tuning Nginx and Express.

How the internet works:

We enter a domain name into the browser, this initiates a connection to a nameserver which looks up the associated IP address, the nameserver returns the IP address which passes off to a node, then another node, then another... and eventually hits the server, the server passes off to a web server like Nginx, and then it passes to an application server like Express.js.

There are faster ways to do what we have done, but for learning purposes going step-by-step is best.

## 5. Bash Basics

### 5.1. Standard Streams & Redirection

_Standard streams_ are a standard for almost all Unix applications.

- standard output
  - `stdout`
- standard input
  - `stdin`
- standard error
  - `stderr`

There is something called the POSIX standards (Portable Operating System Interface) where a group of people decided that if we are writing a Unix application, there should be a standard way that inputs go in, outputs go out and how errors are handled. This makes programs really readable.

On any Unix program that we are running, we can pipe the input, the output and errors to a standard place, and we know for a fact that they will all be handled because they all share a common API.

What we do with these inputs, outputs and errors is something called _redirection_.

- `|`: read from stdout
- `>`: write stdout to file
- `>>`: append stdout to file
- `<`: read from stdin
- `2>`: read from stderr

Much of the time we will be piping output to log files, and the canonical place we keep them is `/var/log`. All of the logs for all services will generally be kept here.

One problem of writing to a stdout file is that it will blow away anything that was already in the file. To append we use `>>`.

### 5.2. Finding Files & Directories

On a Linux system we don't have Spotlight Search. There are two ways that we can generally find things.

1. Search file _names_: `find`
2. Search file _contents_: `grep`

We use grep often when piping output to find specific lines in that output.

- `find` has the syntax of the directory we are looking in, the options we are looking for, then the specific file we are looking for.
- `find /bar -name foo.txt`

Some useful options are:

- `-name`
- `-type`
- `-empty`
- `-executable`
- `-writable`

Searching for log files:

- Find all log files in /var/log: `find /var/log/nginx -type f -name "*.log"`
- Find all directories with the name ‘log’: `find / -type d -name log`

### 5.3. Searching File Contents with grep & zgrep

Regular expressions can be tricky. Top tip: comment regular expressions so that anyone who reads the code can easily figure it out.

- `grep` has the syntax of the options we are looking for, the search expression we are looking for, then the directory we are looking in.
- `grep -i ‘tom’ /var/www`

Over time log files get concatenated in gzip files, so we can also use `zgrep <FILE>` for searching inside gzip files, rather than having to unpack and go through them.

- Find running node processes: `ps aux | grep node`
  - `ps`: show running processes
  - `a`: show processes for all users.
  - `u`: display the process's user/owner.
  - `x`: also show processes not attached to a terminal i.e. that are running in the background.
  - `|` read from stout.
  - `grep node`: return all matches the the expression 'node'.

## 6. Nginx Config Basics

### 6.1. Nginx redirect

The redirect is really powerful. We can create redirects in Nginx before the application is reached.

Before we used `proxy_pass http://127.0.0.1:3000/;` to proxy pass to Express from the `/` root.

We can do a redirect in the Nginx config at `/etc/nginx/sites-available/default` with another location block for `/help` as follows:

```
location /help {
    return 301 https://developer.mozilla.org/en-US/;
}
```

Note: 301 is "Moved Permanently" and recommended for SEO, whereas 302 is "Found" or "Moved Temporarily".

For instance if our site is down and we want to redirect to our status page, we want to do a temporary redirect there. When search engines crawl our site, if we use a permanent redirect they will assume that is what they should index, rather than the main site.

### 6.2. Nginx Subdomain

The server block ew configured earlier is what is known as a virtual host. The Nginx config file at `/etc/nginx/sites-available/default` is the virtual hosts config.

We could create 10 different domains and 10 different servers (virtual hosts) on one Nginx configuration, and depending on the URL that is required Nginx will redirect to the right place.

```
server {
    	listen 80;
      listen [::]80; # Note: [::] is IPV6 notation

       server_name test.tomhendra.dev;

        location / {
           proxy_pass http://localhost:3000;
          }
}
```

In terms of the mental model we can have lots of servers. In terms of cost, we are only paying for one server!

### 6.3. Nginx File Compression

There are two different types of compression we are going to do on servers. Nginx has one turned on by default: Gzip.

- [Info on compression](https://www.geeksforgeeks.org/difference-between-lossy-compression-and-lossless-compression/).
- Nginx will automatically compress everything in the Gzip standard as per the config at `/etc/nginx/nginx.conf`.
- All of the browsers know how to unpack a Gzip file.
- This makes connections much faster.
- Images are not Gzip'ed as they are already compressed using a different type of compression.

It is tempting to crank up the compression in the Nginx config, but we are trading off CPU power as it takes resources to run the compression algorithms. It is best to leave the compression levels alone.

## 7. Security

Security is one of the most important things that we will do. As developers we probably won't do too much security, as there are professional whose job is to look after this, but there are some important concepts that we should keep in mind.

If someone gained access to our server they could lock us out of it, the could scrape the database, they could redirect to a malicious site amongst many other things.

If we are building software for a bank, a hospital or an investment company, we literally have people's lives in our hands. Security is very important.

One of the common malicious practices is to gain access to a server and turn it into a botnet, where they install a back door, delete the logs to cover their tracks, and maybe leave it dormant for months or years, then when the times comes then can shit down all our processes and turn it into a way of DDoSing another site. A distributed Denial of Service attack overwhelms the target to bring it down.

Another common attack is cryptojacking or ransoming, where the database credentials are stolen, the entire database is encrypted and the hackers sell it back to you as a ransom.

With root access it is game over, which is why we disable root.

### 7.1. Read auth.log

- Check auth/log: `sudo cat /var/log/auth.log`
- Check the first 10 lines: `sudo head /var/log/auth.log`.
- Check the the last 10 lines with `-f` flag to follow in realtime: `sudo tail -f /var/log/auth.log`.

### 7.2. Security Checklist

There are a few ky ways that we can lock down our server.

- SSH
- Firewalls
- Updates
- Two factor authentication
- VPN

There is big money in 'zero days' which are undocumented vulnerabilities. “Zero day” refers to the fact that the developers have “zero days” to fix the problem that has just been exposed — and perhaps already exploited by hackers.

Zero days can be worth millions of dollars depending on what the exploit is. There are entire companies who seek zero days for profit. These people are known as _grey hat_ hackers, and are morally ambiguous.

The good guys, the security researchers who find vulnerabilities and tell companies about them are known as _white hat_ hackers.

The bad guys, the nefarious ones are know as _black hat_ hackers.

Then there is the lowest tier of hackers and bad security people known as _script kiddies_. Those are people who download entire IP ranges from the internet and try to break in.

### 7.3. Unattended Upgrades

We want to avoid zero days and make sure that we keep our software up-to-date. We can do this with a program called _Unattended Upgrades_.

Unattended Upgrades automatically upgrades software for minor or security fixes.

- Install unattended upgrades: `sudo apt install unattended-upgrades`
- View conf file: `cat /etc/apt/apt.conf.d/50unattended-upgrades`

### 7.4. Firewalls

Firewalls are not invulnerable, but it is enough to slow down and deter compromises.

The Cisco definition: A network security device that monitors incoming and outgoing network traffic and decides whether to allow or block specific traffic based on a defined set of security rules.

There are hardware firewalls and software firewalls. Consumer-grade firewalls are usually software. Most consumer OS have firewalls built-in.

We don't want to leave all of our ports open, in case of vulnerabilities. We want to reduce the surface area for attacks.

- `nmap` is a port scanner that an run over a range of IP addresses and checks for open ports.
- Install nmap: `sudo apt install nmap`
- Run nmap: `nmap YOUR_SERVER_IP_ADDRESS`
- Run nmap with more service/version info: `nmap -sV YOUR_SERVER_IP_ADDRESS`

People are running port scans all over the internet. It is very easy to find out software versions being used to target exploits.

### 7.5. Ports

A _port_ is a communication endpoint that maps to a specific process or network service.

We can connect to a computer with an IP address, but ports allow us to target one particular process or service. We can just have one IP address and a lot of different ports.

The danger is that each port that is open to the internet means it is a vulnerability, and can be potentially exploited. So in general we want the fewest number of ports open as possible. That's why ports are closed by default until we open them up.

- We currently have port 3000 open and we don't need to.
- We only want all traffic to go through port 80.
- If we start another process on port 3000 and redirect somewhere else, we would have an open port vulnerable to exploits.

We can see what the standard ports are with `less /etc/services`. These are the de facto standards and can be changed, but best practice is to leaves them as the defaults.

### 7.6. Uncomplicated Firewall

We previously have used IP tables which are ways of routing, blocking or denying requests to certain ports over certain protocols. But they are really onerous and the syntax isn't very friendly, e.g. `iptables -p tcp --dport 80 -j REJECT`.

Fortunately the kind folks at The Open Software Foundation (OSF) and Ubuntu created something more lightweight called `ufw`: _The Uncomplicated Firewall_.

The syntax is much nicer: `ufw allow` | `deny` | `reject` and then `ssh` | `http` etc.

It is much easier to reason about when thinking on a surface level rather than a port level.

- `deny` black holes requests. It doesn't respond explicitly that the port is closed, and just drops the request internally.
- `reject` responds with a packet explicitly saying the port is closed.

Generally we want to black hole requests, unless there is a specific case where we want to tell people that the service they are trying to access is incorrect or the parameters are invalid for example.

Black holing a request causes the process which sent the request to keep hanging, which works as a deterrent by consuming resources and slowing down the port crawling.

- Check firewall status: `sudo ufw status`
- Enable firewall: `sudo ufw enable`
- Allow SSH: `sudo ufw allow ssh`
- Allow HTTP: `sudo ufw allow http`
- Check firewall status: `sudo ufw status verbose` using verbose for more info.

Be very careful when getting into security. If we start rejecting or black holing SSH requests we can absolutely get locked out of the server. If we close port 22 for SSH we have no way of getting back in!

### 7.7. Permissions

Permissions are based on the idea of what if someone gained access to the server. Permissions mean we are locking down what can be done with a file.

There are three things that can be done with a file:

1. Read
2. Write
3. Execute

Permissions are all about controlling these three things.

For instance we use sudo to modify things that we don't have permissions to do. If someone gained access without that root permission, they could do damage but the blast radius would be very limited.

- [The Permissions Cheat Sheet](https://isabelcastillo.com/linux-chmod-permissions-cheat-sheet) shows the numerical codes for how to set the permissions for a file or directory by using the `chmod` command.
- `ls -ls` gives a list of the permissions on our machine.
- The six digit format from left to right means `rwe` for us, `rwe` for our group (sudo) and `rwe` for everyone else.

We want to have the least permissive permissions as possible. Unless a user or group needs to access a file, just lock it down.

### 7.8. Upgrade Node.js

The default installed Node was v10 whereas the LTS is v12. The `apt` repo is always behind.

To upgrade Node we are going to use curl, which is short for client URL. It's one of the common commands for reading and writing external sources. We will connect the Node Source which is the Debian repo.

Top tip: rather than using the `man` command to look at manuals, [Explain Shell](https://explainshell.com) is a great for a nicer format.

- Download setup script from nodesource: `curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh`
- Run script: `sudo bash nodesource_setup.sh`

The script doesn't download anything, but sets the `apt` pointer for Node to a different source.

- Install nodejs: `sudo apt install nodejs`
- Update outdated packages: `sudo npm update -g`

## 8. HTTP

HTTP (Hypertext Transfer Protocol) is the protocol which defines how hypermedia documents, such as HTML, are transmitted over the web.

To be a good full stack engineer we need to understand it.

HTTP runs over TCP. The model is a classic client-server model, with requests and responses.

An HTTP request looks something like this:

```
GET / HTTP/1.1
Host: jemisthe.best
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36
Accept: text/html
Accept-Encoding: gzip, br
Accept-Language: en,en-US
```

### 8.1. HTTP Headers & Cookies

Packets are made up of data and metadata. Part of the metadata is the header.

The metadata contains a lot of information about the data, such as where the request came from, what encoding it has, what content it has.

We can insert and strip out headers to perform different operations. Nginx uses the Host header to route traffic.

**Common headers**

| Header Type     | Function                          |
| --------------- | --------------------------------- |
| User-agent      | The requesting device type        |
| Accept          | What the device will handle       |
| Accept-language | Browser languages                 |
| Content-type    | The type of media                 |
| Set-cookie      | Sets stateful information         |
| X-              | Typically used for custom headers |

A cookie is a persistent bit of data that persists in the browser.

- A session cookie will persist until the tab or browser is closed.
- A regular cookie will persist over time and expires whenever we set it to.

Cookies are crucial to the web because the internet is stateless, and all requests and responses are brand new, so we need cookies to persist data for us.

The danger with cookies is that they persist over every singe request unless we expire them, so we can end up adding KBs to requests. Be careful how many cookies we send, and don't add too much data to them.

The response looks a little different, with different headers:

```
HTTP/1.1 200 OK
Server: nginx/1.14.0 (Ubuntu)
Date: Wed, 25 Sep 2019 02:13:13 GMT
Content-Type: text/html; charset=utf-8
Content-Length: 12
```

The request headers are all about what the browser is, where the request came from, where it is trying to get to, what sort of technology standards are supported.

The response headers are about what the server is sending back.

**HTTP Status Codes** indicate the status of an HTTP request. If we make a request there will always be a response back but we don't know what to do with that response without the status code.

| Error Code | Meaning                    |
| ---------- | -------------------------- |
| 200        | OK                         |
| 301        | Moved permanently          |
| 302        | Found (temporary redirect) |
| 401        | Not authorized             |
| 500        | Internal server error      |

Status codes help the web application in the browser know what to do with a response.

The prefixes of status codes all mean something very specific.

| Error Code | Category     |
| ---------- | ------------ |
| 1xx        | Information  |
| 2xx        | Success      |
| 3xx        | Redirect     |
| 4xx        | Client error |
| 5xx        | Server error |

### 8.2. HTTPS

HTTPS is HTTP over SSL, meaning the data is encrypted in transit.

Not only does HTTPS encrypt data, it also verifies that the domain being accessed is genuinely the domain it is supposed to be. This verification is made by certificate authorities, which are trusted authorities who verify identity.

The client receives a public key and a certificate from the server which it uses to encrypt data. The server then uses its private key to decrypt the data.

### 8.3. Adding HTTPS to Nginx

It used to be very hard to add HTTPS encryption to a site. We needed the key, the right cipher, the right algorithm, the right random number generation and we had to serve out the certificate.

The [Electronic Frontier Foundation](https://www.eff.org) are the good folks who are fighting for encryption on the web. They created Certbot, which is a wrapper around Let's Encrypt.

1. Modify the Nginx config `sudo vi /etc/nginx/sites-available/default` and add the domain name after `server_name`.
2. Allow HTTPS in the firewall for port 443: `sudo ufw allow https`
3. Go to the [Certbot](https://certbot.eff.org) website.
4. Use the dropdown menus to select Nginx & Ubuntu version.
5. Follow the instructions on the Certbot website.

### 8.4. HTTP/2

Everything discussed so far uses the old protocol HTTP/1.1. HTTP/2 requires HTTPS and allows multiplexing, which means doing multiple things over a single connection.

With HTTP/1.1, every request needs a separate TCP handshake which slows things down. Multiplexing allows us to make one connection and then transfer all files over one larger pipe.

There is a limit to the number of connections we can make, but that's usually due to the computer.

- Add to config: `sudo vi /etc/nginx/sites-available/default`
- Add `http2` to the line `listen 443 http2 ssl;`
- Hint: `/443` will take you the right location in the file to edit.
- Reload Nginx: `sudo service nginx reload`

See the [Akamai demo](xhttps://http2.akamai.com/demo)

The other benefit to HTTP/2 is HPACK, which is a compression algorithm that takes all of the headers and compresses them into a hash and compares them over time. That comparison gives us a 30-40% speed increase. But remember cookies can't be compressed generally, so HTTP/2 won't help much with a large cookie payload.

### 8.5. HTTP/3

Even though HTTP/2 is not fully adopted, HTTP/3 has already been released.

All previous HTTP generations run over TCP, and although HTTP/2 allows multiplexing to reduce the TCP handshakes required, there is still the TCP error correcting which handles lost packets. In the early days of the internet this was required, especially with dial up and dropped connections.

Nowadays the internet is much more reliable, so Google invented a new protocol called Quick UDP Connections which has HTTP over UDP, rather than TCP.

UDP has some error correction built-in but is more of a stream of data which is assumed will be received.

Look at anything from Google and note the DevTools network tab shows a protocol of `h3-Q050`.

HTTP/3 should create a 13-20% speed increase over HTTP/2 and be more common over the coming 5 years.

## 9. Containers Basics

### 9.1. Containers & Microservices

Containers are changing thr landscape of servers and how we structure architecture.

**Microservices** are the architecture of loosely connected services.

It is a misnomer in that just because something is a _microservice_ doesn't mean it is small and lightweight.

The opposite of a microservice architecture is a monolith architecture, which is one app that does everything like Java, Node or Python with Django.

There is a tradeoff when moving to microservices.

One benefit of a monolith is that everything is written in the same language, so maintenance can be easier because there aren't lots of disparate languages and services communicating with each other.

A downside of monolith is that everything can be tightly coupled, so making changes to one part can affect or break other parts, which can have unintended consequences.

There is no "one size fits all" approach between monolith and microservice. It depends on the application, what type of engineers are at the company, how the company is structured etc.

The benefit of Microservice architecture is that we can have multiple teams working on multiple layers of an application, all maintaining their own stack in their chosen language, and as long as a common API is maintained they can all operate independently.

The downside is the complexity that comes with maintaining communication and connections between all the different apps, which is achieved by using containers.

**Containers** are a way of partitioning code and the environment it needs to run in.

Originally microservice architecture used virtual machines each containing an entire OS with the environment running within them.

Containers just run a set of libraries that are required for the code to run, and nothing more.

This is made possible by the advances we have made in cloud computing and the hypervisor, which is the process that controls other processes and how they talk to each other.

The hypervisor is really good at allocating resources to different processes and is what allows us to use tiny portions of servers as a VPS.

The idea of containers is built on top of that. Instead of the VPS we take the concept of a server and segment that out into different sections. And each segment has its own libraries and resources, and doesn't necessarily know about what OS it is running on.

With containers we are able to analyse precisely what each container is doing and allocate resources efficiently. With a monolith we have to look at separate processes and do more digging. Containers are therefore much faster to scale up and down. We can control our server much more accurately.

They are also much easier to start up and take down, as we do not have to configure an entire server each time.

Containers benefits:

- Lightweight
- Portable
- Easier for development
- Easier to manage
- Faster startup
- Decouple application from infrastructure

### 9.2. Docker & Orchestration

The most famous containerization platform is Docker. Containerization is the layer that talks between the application and the OS.

There are more: Amazon ECS, Apache Mesos, CoreOS rkt (Rocket) and Netflix runs on a platform called Titus, which is open source.

Orchestration is the process of taking all the individual containers and deploying them to the servers themselves. The most famous orchestration platform is Kubernetes (K8s). There are also Docker Swarm, Amazon EKS, Apache Mesos & AKS.

When we are at this level if engineering we are more DevOps than Full Stack. We need to know exactly what we are doing as we are bringing up €1000's of servers and brining them down quickly, and need to know how to balance that.

### 9.3. Load Balancers

Elastic computing allows us to allocate different amounts of resources at different times based on load.

Load balancers route the traffic to the appropriate cluster. This is something that has to be thought about when we reach a particular scale. It makes sure that traffic is distributed evenly between servers.

Load balancers works with a concept of scheduling algorithms of which there are different types:

- Round Robin\*
- IP Hashing
- Random Choice
- Least Connections
- Least Load

We can look at our own server processes.

- Display running processes in realtime: `top`
- Install htop: `sudo apt install htop`
- Display running processes: `htop`

Nginx has its own [load balancer](https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/).

### 9.4. Deployment

If we are not using the container orchestration pattern of microservices architecture, there are tools that handle deployment of multiple servers for us.

- Ansible
- Vagrant
- Puppet
- Chef

We can take everything we have done in this course, put it in a script and roll out a new server every time.
