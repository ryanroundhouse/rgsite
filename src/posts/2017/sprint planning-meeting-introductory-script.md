---
layout: layouts/post-layout.njk 
title: Sprint Planning Meeting Introductory Script
date: 2017-01-26
tags: ['post']
---
The purpose of a sprint planning meeting is to produce a sprint backlog.  This sprint backlog is the forecasted work that will be completed during the sprint.  The way I’ve run sprint planning meetings has evolved over the last 4 months.  It was really rough at the start, but it’s getting better and I want to share what I’ve learned.  This is the script that I’ve been using recently as the introduction to my sprint planning meetings.  <!-- Excerpt Start -->I’ve added comments around it explaining why I say the things I’m saying because following a script is good, but understanding a script is better.<!-- Excerpt End -->

## The Introduction
> “Hello everyone, thank you for coming to the sprint planning meeting.”

Since my team is 1/3 remote, I also announce who is on the phone to those in the room and who’s in the room to those on the phone.

> “This is a 3 hour meeting with the goal of discussing the issues in the prioritized product backlog and agreeing on the contents of the sprint backlog that we will be tackling in our 2 week sprint.”

I start by mentioning the duration of the meeting so that everyone understands how long they’re expected to concentrate on the meeting (so they can pace themselves).

The next thing I mention is that the backlog is prioritized.  The purpose of this is to lead everyone down from the top of the product backlog as the stories that deliver the highest value are positioned higher in the list.  While we want to accept items in that order, we’re open to discussing bringing in items lower in the list if it makes sense to group them with previously accepted issues that share commonality.

I then mention that we’re accepting a sprint backlog and the duration of the sprint.  While this doesn’t change, it helps me transition into the next piece of information.

> “The theme of this sprint is X”

It’s important to apply a theme to the sprint, and if you’re going to do so, communicate it to the team.  You want to apply a theme to the sprint as it can get the team thinking about a whole area and help identify any holes in stories that you wouldn’t necessarily get if the sprint backlog is just a grab bag of potpourri without any commonalities.   If the team keeps the theme in mind while performing their work, they will be able to have a better understanding of their progress through this backlog.

> “We are missing X days from this sprint. X-w from Kevin, X-y from Leigh, and X-z from Akshay.  Is there anyone taking any vacation in the next 2 weeks outside what I’ve just mentioned.”

My scrum team has their HR reports split between myself and another team lead in the department (look, I know that agile says the scrum master shouldn’t have any authority over his team, but I have bigger fish to fry right now), we don’t have a good system for tracking each other’s report’s vacation time outside a shared outlook calendar.  I’ve found a couple surprise vacation days this way, so I suggest you use it.

> “Our team velocity is between X and Y pro-rated to full team sprints.  Since we’re at Z% manpower, we should accept X-w to Y-w story points.”

The team needs to be supplied with an appropriate estimate of how many story points they should accept into the sprint.  I get the manpower-based story point values by calculating (# of days in the sprint x number of team members – vacation days) / (# of days in the sprint x number of team members) x Velocity.  Right now I’m determining the velocity range based off of the highest and lowest values in the last 4 sprints.  I plan to do some more complex calculations as I get more data under my belt, but discussions of determining velocity is a whole post in and of itself.

## Introduction overtime: Overflow
There is often overflow in my sprints.  There is really 2 kinds of overflow: Good overflow and Bad overflow.  Good overflow is work that has been pulled into the sprint once we’ve completed the sprint backlog before the end of the sprint itself that hasn’t been completed.  Bad overflow is work that was committed as part of the sprint backlog that didn’t get completed for whatever reason.  As your team matures and grows more confident, the amount of both Good and Bad overflow should shrink immensely for the same reason: Your team gets better at estimating their work.  You should expect a decent amount of this during the storming and norming phases.  That being said, regardless of how the overflow got there, you still need to deal with it before you even start on the product backlog.  I could write a lot more about the cause and best practices for overflow, but that is a whole post in and of itself.

> “Alright, we’ve got the following items overflowing from the previous sprint.  They will need to be the first items we look at, followed by the sprint backlog.”

At this point, the expectation is set that completing these items is the most important thing we need to do.  We review the story like any other story in the sprint backlog, except that we keep a mental note of how much of the work has already been completed, and remove it from our count of how many story points are in the growing sprint backlog.  We don’t lower the number of story points on these partially-completed items because they should be counted in the sprint in which they’re completed in order to give a more accurate velocity when averaged over many sprints.