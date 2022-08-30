---
layout: layouts/post-layout.njk
title: Software debugging - a practical approach
date: 2021-10-30
tags: ['post']
---

I was trying to find a new hire for one of our teams that performs primarily maintenance software development work. One of the best questions that I learned to ask to assess candidates is &quot;When you get assigned a bug to fix, what's the first thing you do?&quot;.

The most common (and the worst answer) is something along the lines of &quot;I crack open the code and start looking around&quot;. The problem with this approach is that unless you're intimately familiar with the codebase (and no new hire could be) you're well along the path to assuming the solution. Let’s say you happen to be right (though it's unlikely). You make a change in the code, bring up the system, then trigger the bug. You can't reproduce it. That's great, it means you fixed the bug, right?

Well, you either fixed the bug or you didn't put the system into the state that could trigger the bug and you have a false positive. You can't be sure which.

A better approach is to bring up the system, put it into the state that can trigger the bug, and then trigger the bug. This gives you confidence that you understand the bug. Once you have reproduced it, you can crack open the code, find what you believe to be the problem, change the behavior, bring up the system again, put it into the state that can trigger the bug, and then trigger the bug. You can't reproduce it. That's great, it means you fixed the bug, right?

Well, you introduced a change to the system that fulfills the requirements of the bug, but what impact does that have on the rest of the behaviour of the system?

An even better approach is to follow the better approach until you get to the point of finding what you believe to be the problem in the code, then looking through the commit history related to that area of the code. Often these commits should reference the work item that caused those changes. When you review those work items you can understand what the developer was trying to do when they introduced the bug, and you'll find one of two scenarios. Either the developer made a mistake and implemented the behaviour incorrectly (in which case it's a legit bug) or the bug that you're asked to fix is behaviour that was never considered or overlooked. If it's the former, you can rest easy, make the change, and move on. If it's the latter, then you have more due diligence. Was this behaviour intended to not be present or was this behaviour just missed? Hopefully there's enough design documents or better yet decision makers who requested the change available to help you figure out which was the case.

Well, you introduced a change to the system that was either missed or omitted by accident, but how can you be confident that your change didn't impact some other expected behaviour of the system?

If effective unit testing was part of the code base to begin with, you'd be in much better shape. When I refer to <em>effective</em> unit testing, I mean unit tests that tests behaviour, not unit tests that tests methods. The benefit of this kind of unit test is that you can understand the intent of the person who implemented the behaviour to begin with. For example, in your initial investigation you found a unit test that described the behaviour in the bug should be validated, that can tell you that the bug might not even be a bug at all. Maybe it's a training issue and the user who logged the bug didn't have a full understanding of the system.

If effective unit testing was part of the code base to begin with, you wouldn't need to spend as much time with regression testing because you'd be more confident that your change still fulfills all other expected behaviour of the system (otherwise the unit tests would fail). That can make the team move much faster.

Sometimes you're going to be working with a code base that doesn't have many nor any unit tests. My advice for you in that situation is to follow the boyscout rule. Start adding unit tests. Try to leave the world better than the way you found it.

Cheers,
-RG!