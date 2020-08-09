---
layout: layouts/post-layout.njk 
title: Thoughts about SSGs
date: 2020-08-09
tags: ['post']
---
I had been meaning to overhaul my WordPress website.  I felt like it didn't give me enough control over what and how to display without getting into customizing WP themes, which I had no desire to learn.

<!-- Excerpt Start -->I had been hearing a lot about static site generators and decided it might be worth learning about what they're all about.<!-- Excerpt End -->

The benefits seem to be primarily speed and cost to the end user.  The idea is that a lot of websites these days are hugely bloated with tons of JavaScript both in terms of download size as well as processing power for running it all.
With static site generators all of that work is handled at compile time which results in raw html and CSS.  However, it's easy to ruin that as there's nothing that actually stops you from bringing in a ton of JavaScript so it comes down to making the decision to keep it that way.

Another benefit I've found is to leverage other services, such as netlify which can automatically pull from the GitHub repository storing your SSG code, build it, and host it automatically for free.
I'm using this service now to host my website.  It was very easy and straightforward to get it all working together.

The last benefit I found was that it encourages you to learn more tech stuff workout the support of other frameworks and libraries.

For downsides, you're on your own for everything from the ground up.  For example, the styling of this website took many hours because themes aren't as common in raw CSS as they are built into WordPress or other CMSes.

