---
layout: layouts/post-layout.njk 
title: Simplicity
date: 2017-09-14
tags: ['post']
---
The Agile Manifesto was created in 2001 as a philosophy for improving the way software is developed.  It was created by 17 authors and has become wildly popular in the software development eco-system.  If you’ve heard of Scrum or Kanban, those are implementations of Agile.  The authors also agreed on 12 principles.  This article will focus on my favorite one, Simplicity.

> Simplicity–<!-- Excerpt Start -->the art of maximizing the amount of work not done–is essential <!-- Excerpt End -->

While this can be understood directly, I like what’s said if you look at it in reverse.  …the art of minimizing the amount of work being done…  This doesn’t mean to work less.  This means to work on fewer things concurrently.  Work on one feature until it’s done.  In order to do that you can work on one piece of a feature until it’s done.  In order to do that you can work on one piece of one piece of a feature until it’s done, and so on as far down as you want to go.  Adhering to this principle can both provide advantages and remove pitfalls.

## Spend time on what is most valuable
Scrum and Kanban have the concept of a product backlog.  This is an ordered list of all pieces of all features related to a single product.  By nature of being ordered you cannot have a situation where two features are of equal priority.  The priority is determined by those features delivering a higher value being ordered higher up in the backlog than those of lower value.  By working on something other than the top item, you are inherently implementing lower value work.  By focusing on only the top item in the backlog, you’re spending your time on the highest value work, which is by definition the best use of your time.

## You don’t know if you’ll need it or not
A Standish group study (known as the Chaos Report) presented at the XP2002 conference by Jim Johnson found that 64% of features delivered in software were never or rarely used.  That doesn’t mean that the features weren’t implemented well.  It means that the features should never have been implemented at all.  Even if the feature is in the backlog, through the customer’s experience using the product, it might be determined that the feature is no longer needed.  By working only on what features will be used, which should be indicated by those of highest value, you will not waste your time.

## You don’t have as much context now as later
The best indicator that I always had to my growth as a developer was to look back on my code from 6 months prior and laugh about how poor it was.  I would smile and shake my head at the decisions and techniques that past-Ryan used while patting my back because present-Ryan knew better.  In addition to you making better decisions if you were to have started development on that feature now, your experience working with customers can also provide valuable context.  As you learn more about your customers needs and the way they use the system, delaying the implementation of a feature until later will allow you to profit from better understanding and make better decisions.

## You’re delaying the delivery of value by coupling features
Agile focuses on an iterative approach to software development.  The advantage here is that you can deliver iteration after iteration to customers in order to get feedback.  With this shorter feedback loop you can pivot and change the direction of the project to what the customer really needs.  By working on a lower value feature, you are delaying the release of the higher value feature.  It will now take that much longer for you to complete and deliver the higher value feature.  If you instead focus on one feature at a time you will increase the speed at which the higher value feature can get into the customer’s hands.

I like keeping things simple.  By following this principle, you will produce value quicker, make smarter decisions when producing subsequent value, and waste less effort.