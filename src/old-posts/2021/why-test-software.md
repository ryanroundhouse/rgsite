---
layout: layouts/post-layout.njk
title: Why test software?
date: 2021-08-03
tags: ['post']
---
      
We all make <!-- Excerpt Start --> mistakes.  Some are not important, but some are expensive. <!-- Excerpt End -->  The purpose of testing is to try and discover mistakes as early in the SDLC as possible.

Discovering a mistake in a backlog grooming session is as cheap as you get, where the expense is clarifying acceptance criteria or rephrasing an expected result.

Discovering a mistake in a released product is expensive as it can result in broken trust with the customer, time from support staff to understand and attempt to reproduce the issue, time from the senior support staff to prioritize the defect against other issues and provide updates, time from the product owners to manage the item in the backlog, time from the development team to groom the item and have conversations about it, time from the development team to design the change and test plan, implement the change, review and test the change, time to package and release the change, time to manage the project for the deployment of the change, time to perform the deployment to a test environment, time working with the customer to validate the fix works as anticipated, and time for promotion of change from test to production.  This all assumes the problem is small.  If it’s larger it could include escalations to senior management, legal issues, and more.

Testing is an art in that there is no one-size-fits-all solution.  What’s appropriate in one situation and industry is inadequate or excessive in another.  There is also never enough time to test everything in every way.  Because of this, a pragmatic approach has to be taken based on an assessment of the risk of the change, release, industry, customer sophistication, and more.

That’s where the test plan comes in.  A test plan is simply a plan of what activities need to happen in order to test a change or a release.  For example, if a cosmetic change is made to an administration screen accessible only by the internal deployment team, the test plan might only contain developer ad-hoc testing.  For another example, if a critical core business process is re-implemented in another language, the test plan might include up to every section of testing below.
