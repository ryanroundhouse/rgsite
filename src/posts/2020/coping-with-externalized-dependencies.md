---
layout: layouts/post-layout.njk 
title: Coping with externalized dependencies
date: 2018-05-03
tags: ['post']
---
Our department took a step back, agility-wise, last month.  We have been building a customer portal.  While doing so, we’ve also been building out a RESTful business layer to serve our needs.  We’ve been building functionality into the business layer as we’ve needed it to provide the functionality we need for the customer portal.

<!-- Excerpt Start -->
A couple months ago, we started talking about creating a new team that will be focused on doing nothing but building the business layer.
<!-- Excerpt End -->  The benefit would be more attention paid to the business layer beyond just what my and the other teams needed from it as we have started licensing out integrations with it.  The drawback is that they are expected to be the only team to do work in this area.  We pulled the trigger a month ago and formed the team.

Since we’ve been building out the functionality as we’ve needed it, this has left my team with a bunch of features that need to be built atop REST endpoints that haven’t been developed yet without control over their schedule.  I’ve been negotiating as best I can, but I think this will push the customer portal project forecast too far forward.

I talked through this with my team today, and have come up with a strategy to deal with this in the short term while we figure out a better way forward.  I haven summarized and communicated it to the other teams in this email:

<blockquote class="blockquote" markdown='1'>
Hi all,

Kevin, Dung, Ian and I had a conversation today about how we want to handle the business layer external dependencies that have developed with the team.  This plan has some problems, but is better than our current system of doing nothing.  First for some background on the language I’ll be using:

When I refer to splitting a story either horizontally, or vertically, I am referring to the following:

A horizontal split involves splitting the functionality at some tier of the software stack.  For example, split at the UI level, at the middle tier, database, or at the integration.  These horizontal splits always require stubbed out test data in order to move forward, as the split removes the actual implementation of functionality from end-to-end.
A vertical split involves splitting off a subset of the acceptance criteria from the original story.  For example, if a story has two acceptance criteria (1 – add phone number to the customer page, 2 – ensure the format of the phone number is validated), this story can be split vertically with each acceptance criteria becoming its’ own story.
Horizontal splits are not good from an agile perspective because the original story no longer produces any real value to the customer.

Vertical splits are good from an agile perspective because they allow incremental functionality to be delivered with each providing real value to the customer.  A good backlog grooming will often involve coming up with good ways to vertically split complex stories into simpler stories.

Moving forward, if you ever run into a situation where there is a test case within a test plan that you feel needs to be marked as deferred due to being limited by an external dependency for the team (for example business layer endpoint not available yet) it should trigger you to split the story “horizontally”.

Once you create the new story, you must immediately move the existing “deferred” test cases from the original story to the new story while leaving behind a link to the test case’s new story test plan home.  This should prevent any test cases from falling through the cracks and being missed.
</blockquote>

I still haven’t figured out a better solution.  I have come up with some ideas for dealing with this to discuss with the rest of the department:
 
1) Add more team members to the RESTful team (this will double down on our new team strategy).
2) Take some of the business layer work and spread it amongst the teams (this will undermine our new team strategy).
3) De-scope some of the business layer-heavy work from the upcoming release (this might not be possible due to customer commitments).
If you have any good ideas, let me know!  I’d love to hear them.

Cheers,

-RG!