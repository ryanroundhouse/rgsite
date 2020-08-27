---
layout: layouts/post-layout.njk 
title: SPAs, SSR, SSGs, and the JAMstack
date: 2020-08-26
tags: ['post']
---
I have been trying to get a better handle on modern web development, and there were a lot of accronyms for different technologies, tools, and methods for hosting content online.  This made me curious and I dove in to get <!-- Excerpt Start -->an understanding of what they all mean and what makes them different. <!-- Excerpt End -->

## How is the site content delivered?
Before I get into that, I need to talk about how content is delivered to visitors.

### Web servers
Traditionally, you have a webserver running on hardware somewhere accessible from the internet.  When a visitor types in your url, a bunch of DNS servers resolve the request to route it to that webserver.
The webserver receives the request, does some processing, generates output, and sends the output to the visitor.
One downside with this approach is that you usually only have a single webserver that is hosting your content at a single location on the internet.

I will use the analogy of a widget factory in Downtown Toronto.  You live in Milan and want to buy a widget. You call the factory in downtown Toronto and ask for them to send you a widget.  It gets shipped out to you, but could take days.


### Content Delivery Networks (CDNs)
Content delivery networks are servers that are distributed geographically around the world and are specialized in hosting and serving content to visitors.
When a visitor types in your url, a bunch of DNS servers resolve the request to let you know that the nearest place to get what you're requesting is the CDN that is located closest to you.  The request is routed there, and it serves your content.

The limitation of CDNs is that they don't process any logic, they only serve the content that is requested.

I will use the analogy of Amazon warehouses.  You live in Milan and want to buy a widget.  You know that these widgets are produced in a factory in downtown Toronto, but there's an Amazon warehouse just down the street.  You call the factory, who transfers you to Amazon, who sends you a widget that is being stored in the nearby warehouse.  The widget shows up later that day.


## Context
Including any advantages and disadvantages is difficult because it all depends on the context of the solution you're trying to provide.  The context for the rest of this post is from the perspective of trying to build a blog, fan page, or some other non-eCommerce site.  If you're interested in making an eCommerce website, don't even bother with any kind of static website.  While you can get some value with storing images and such in CDNs, the core functionality of the site needs richer functionality than can be easily provided by a static website.


## Single Page Applications (SPAs)
Single Page Applications are applications that interacts with the web browser by dynamically rewriting the DOM in response to events.
[Angular](https://angular.io/) is an example of a SPA.

Advantages and Disadvantages:
- <i class="fas fa-check"></i> SPAs are fast and dynamic.  They can be created in a way so that only the content that is changing is updated.
- <i class="fas fa-times"></i> When compared to compiled websites, this dynamic processing and re-processing of the DOM puts a drain on both the battery and data of visitors.  This might not be a problem on a desktop computer, but with bad internet connectivity and an old phone it could be problematic.
- <i class="fas fa-times"></i> Bad Search Engine Optimization (SEO).  It's hard for web crawlers to understand what search results should resolve to your site as it's all dynamic.


## Static Site Generators (SSGs)
Static site generators are tools.
[11ty](https://www.11ty.dev/) and [Jekyll](https://jekyllrb.com/) are 2 examples of them.

As I've mentioned in [my last post](./thoughts-about-ssgs/) I started with an SSG called 11ty.
A static site generator allows you to create a website that is processed at compile time into simple html, css, and javascript that can be downloaded and rendered by a browser.

Advantages and Disadvantages:
- <i class="fas fa-check"></i> You can deploy the compiled output to CDNs for fast distribution because there's no processing that has to happen upon request.
- <i class="fas fa-check"></i> Great Search Engine Optimization (SEO).  All of your output is in easy-to-digest static content.
- <i class="fas fa-times"></i> There could be temporal issues.  If you list upcoming band dates, you'll need to routinely recompile your site so that you don't advertise a concert that already happened.


## Server Side Rendering (SSR)
Server side rendering is a technique.

SSR isn't a new concept.  [PHP](https://www.php.net/) makes heavy use of SSR to generate output to serve.  The idea is to include directives in your site content that are resolved at the time that your content is requested.

Advantages and Disadvantages:
- <i class="fas fa-check"></i> SSR can provide dynamic content to users that is processed in the instance it is requested.
- <i class="fas fa-minus"></i> Okay Search Engine Optimization (SEO).  The amount and importance of the content included in directives will determine the impact.
- <i class="fas fa-times"></i> You can't use CDNs because this involves processing at request time.


## The JAMstack
The JAMstack refers to a software stack including Javascript, APIs, and Markdown.

This is a trendy topic these days and is a superset that could include some of these topics above.  The idea is that you can generate static HTML to host in CDNs, include javascript that dynamically makes calls to webservices across the internet, and updates the DOM with those results.

SPAs like angular could be delivered via CDN, thereby qualify as a JAMstack.

SSGs could be used to generate the static output to be hosted in a CDN, thereby qualifying as a JAMstack.

SSR isn't included in the JAMstack though you can effectively use javascript making API calls to a backend web service and be qualifying as JAMstack.

Advantages and Disadvantages:
- <i class="fas fa-check"></i> Content can be hosted in CDN ensuring fast delivery.
- <i class="fas fa-times"></i> Depending on how you use your APIs and the size of the content you're requesting, it could make your site slow to respond and render.

Cheers,<br>
-RG!