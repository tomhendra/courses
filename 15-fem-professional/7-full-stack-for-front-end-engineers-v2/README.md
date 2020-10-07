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

- It is almost impossible to be really amazing at all parts of the stack.
- Find the area that you are passionate about, and really dig into it to become an expert.

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

- The internet is built in trust.
- Mankind agreed on a set of standards for computers to talk to one another.
- That resulting protocol is **IP** (Internet Protocol).
- Is is a collective idea that data is well formed enough so that data can be received, read, written, and sent back.
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

Note: When we log in to the server, the `#` in the prompt indicates we are logged in as a superuser, as root.

- Logging in as root is dangerous, because we can do anything we want.
- We could delete entire directories and we won't get a warning.
- When not logged in as a superuser, when we do something that is restricted in permissions, we have to manually override that every time.
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
