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

## 1. Introduction

Learn what it means to become a full-stack engineer! If you’re going to be a well rounded engineer, it’s important you understand what is happening on the server-side. In this course, you'll learn to move back and forth between UI and the back-end through the the command line, SSH, nginx, docker containers, server security, HTTP/2, HTTP/3 and more.

- [Slides](https://jemyoung.com/fsfe)

Topics covered on day 1:

1. “Full Stack”
2. Command line
3. Shells
4. How the internet works
5. VIM

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
