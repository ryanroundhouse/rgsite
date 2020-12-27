---
layout: layouts/post-layout.njk 
title: What is a DMZ?
date: 2020-09-19
tags: ['post']
---
For a project my team has been working on, we need to add a new integration point to our software suite. This integration point needs to communicate receive requests from a specific server across the internet, figure out how to process the request, send modified requests to our main software suite, then return a response to the initial request.  While there's nothing novel about this approach, there were some team members who didn't have any experience with network topology best practices.

## What is a DMZ?
A DMZ (which is short for demilitarized zone) serves as a subnet that is separate from the internal LAN (Local Area Network) subnet. When you add a new device to your network like a laptop, file server, or mail server you should consider which subnet it should connect to.  The best practice is to put devices that need to be accessed from systems outside your network in the DMZ subnet and devices that don't into your LAN subnet.  

## Why put devices in the DMZ?
The reason for this is that <!-- Excerpt Start -->any time you allow access to one of your devices from anywhere outside your network, you open up a security risk that an actor from outside can compromise that device.<!-- Excerpt End -->  This can't be prevented.  Even if there are no software security holes or exploits in what you're exposing to the internet, someone can access it with the proper credentials, which is what you want to begin with, you just can't always guarantee who is the accessor.  Since you can't prevent this from happening, you can minimize the impact. 

For example, if someone gets access to your webserver located in your DMZ through an exploit, they might be able to access other devices within the same subnet. You want to limit what they can access to minimize the impact.

## What does a DMZ look like?
<a href="/img/blog/dmz-example.png">
  <picture>
    <source media="(min-width:960px)" srcset="/img/blog/dmz-example-960.png">
    <source media="(min-width:640px)" srcset="/img/blog/dmz-example-640.png">
    <source media="(min-width:480px)" srcset="/img/blog/dmz-example-480.png">
    <source media="(min-width:320px)" srcset="/img/blog/dmz-example-320.png">
    <source media="(min-width:160px)" srcset="/img/blog/dmz-example-160.png">
    <img src="/img/blog/dmz-example.png" alt="DMZ Example" style="width:auto;max-width:100%">
  </picture>
</a>

There are 2 main ways that DMZs are set up: single firewall and double firewall.

### Single Firewall
Single firewall setup has a single firewall device that has 3 network adaptors.  one connects to the rest of LAN subnet, one connects to the DMZ subnet, and one that connects to the internet.  Once this is set up, you configure the firewall to route inbound and outbound traffic to the apropriate subnet depending on who is asking for what.

### Double Firewall
Double firewall setup has two firewall devices.  The outermost firewall controls inbound and outbound traffic into the DMZ.  The innermost firewall controls inbound and outbound traffic into the LAN.  This is more secure than the single firewall approach because it means attackers have to exploit 2 separate devices instead of one to access the LAN.

## Ok, I get it, but how can I apply this?
Understanding network topology best practices can make it easier to design and communicate a system to those you have to cooperate with.  For example, if you have the kind of integration that I described in the introduction, you can be better prepared for your conversations with the customer's IT group.  If you need a new device to house your integration, you can anticipate the questions that they have and supply them with the answers right off the bat.

### What does this look like?
You need to specify 2 things: expected incoming requests and expected internal resources.  In our case, we needed to deploy a device in the DMZ that would receive incoming requests from a subset of IP addresses to a specific port from the internet.  This device needed access to specific IP address and ports within the LAN.  Coming prepared like this when dealing with customers builds trust that you know what you're doing.

Cheers,<br>
-RG!