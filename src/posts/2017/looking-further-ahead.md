---
layout: layouts/post-layout.njk 
title: Looking Further Ahead
date: 2017-08-20
tags: ['post']
---
Around a month ago, I attended a full week of PMP training in my office. It was fantastic. It gave me a whole lot of new tools for my toolbox.  It helped me identify a number of holes in my game and gave me some tools to get things back on track.

One tool I gained was a technique to track my progress against my planned progress.  It’s rather easy, and if you’re using agile, it can help you too.

My assumptions are that you have fixed resources (the scrum team), scope (an estimated backlog), and time (a date by which you need to complete the backlog).  Any change to any of these sides of the iron triange should trigger a reassessment of the other two sides.

All you need to do is calculate the earned value (EV) and subtract the planned value (PV).  <!-- Excerpt Start -->If the value is positive, you’re ahead of schedule.  If the value is negative, you’re behind schedule.<!-- Excerpt End -->  The magnitude of this value reflects how far or behind you are in the unit of measurement that you’re using.  Let’s try an example.

You have are running a project to add some functionality to a software suite.  Your product backlog mapped to this version is 250 story points.  Your team started working on April 2nd, and your deadline is October 11th.  Using excel to find the number of working days between these dates, you get 138 days.  The date is currently August 20th, so we’ll use that for our calculations giving us 100 working days of progress which equates to 72% through the project schedule (spent days / total days).  Multiply this progress by the total amount of story points, and you have 181.  Looking at your completed work, you have only completed 165 story point.  That means you’re 16 story points behind schedule.

But that’s not it!  There’s still more that you can do with this information.

Do you want to know your anticipated completion date if things continue as they have?  Instead of subtracting your PV from your EV, you divide it (181 / 165) which gives you 1.098.  That is your schedule variance.  This indicates your team is working 9.8% slower than the schedule dictates.  Assuming trends continue, you can multiply this variance by the total number of working days in the schedule in order to figure out the anticipated completion date.  138 days * 1.098 gives you 152 working days, which equates to an anticipated completion date of October 30th (sounds spooky!)

What does this mean?  Well, nothing on its own.  Any single measurement, while important, isn’t worth panicking over.  It’s really the trends that you should care about.  Maybe your team is working on 16 story points worth of work at the same time (which would indicate you’re not respecting WIP limits).  You shouldn’t run into this if you perform these calculations at the end/start of each sprint, but one way to deal with it is to give your team 50% credit for stories when they’re started, then 100% when it’s completed.  I prefer 0% in my field because a story that’s half-completed is unshippable, therefore isn’t worth anything.

This is only one of the tools that I’ve gained through the PMP course.  I went on and earned my PMP certification a couple weeks later because I feel strongly about this and used the excuse of studying hard for the exam in order to reinforce the learnings.