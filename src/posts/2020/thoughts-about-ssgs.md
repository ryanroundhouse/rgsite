---
layout: layouts/post-layout.njk 
title: Thoughts about SSGs
date: 2020-08-09
tags: ['post']
---
I had been meaning to overhaul my WordPress website for a while now.  I felt like it didn't give me deep enough control over the look, feel, and layout without dumping a bunch of time into customizing Wordpress themes. The time spent there wouldn't help me gain a deeper understanding of the technologies overall but rather information on how Wordpress does things.

<!-- Excerpt Start -->
I had been hearing a lot about static site generators and decided it might be worth learning about what they're all about.
<!-- Excerpt End -->

This website is the first website overhaul I've done for a few years now.  I selected [11ty](https://www.11ty.dev/) as my static site generator framework of choice, but I heard [Jekyll](https://jekyllrb.com/) is another popular option that is leveraged by github pages.  I've learned a lot about static site generators in general.

The benefits are primarily speed and cost to the end user.  The idea is that a lot of websites these days are bloated with tons of JavaScript both in terms of download size as well as processing/rendering power for running it all.  This cost occurs on the user's device when they access your site.  When most of the world is browsing the web on their cellphones these days, that kind of thing matters.
With static site generators all of that work is handled at compile time which results in raw html and CSS as the output.  One thing to note, however, is that it's easy to lose that benefit since there's nothing that actually stops you from including a ton of dynamic JavaScript.  You still have to try to keep it low-cost.

Another benefit I've found is pairing your static site with other services.  There is a company called [Netlify](https://www.netlify.com/) which can automatically pull from your [GitHub repository](https://github.com/ryanroundhouse/rgsite) that stores your SSG code, build it, and host it automatically for free.
I'm using this service now to host my website.  It was very easy and straightforward to get it all working together.

The last benefit I found was that it encourages you to learn more tech stuff workout the support of other frameworks and libraries.  When I was learning [angular](https://angular.io/) and [node.js](https://nodejs.org/) I learned a lot about how these technologies work but they manage a lot of functionality and packaging on your behalf.  This was a great opportunity for me to remove the training wheels in order to accomplish those same tasks myself.

For downsides, when compared to Wordpress or another CMS, it takes a loooong time to go from new site to beautiful new site.  One of the things that [11ty](https://www.11ty.dev/) boasts is how quick and easy it is to generate a website, which is true, but is only useful as far as you want a 1995 [geocities](https://en.wikipedia.org/wiki/Yahoo!_GeoCities) fan-ring looking site.  I'm sure there's a nostalgia market for that, but it's not what most people are looking for.

Would I recommend you build your site using a static site generator?  It depends.
- <i class="fas fa-check"></i> If you want to geek out on some basic HTML, CSS, and other stuff like that, it's a good choice.
- <i class="fas fa-check"></i> If you want full control of the look and feel and expand functionality to your own custom built stuff, it's a good choice.
- <i class="fas fa-times"></i> If you want a [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG) helper, stay away.
- <i class="fas fa-times"></i> If you want to get to something that looks great shortly after starting, stay away.

Cheers,
-RG!