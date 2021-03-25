---
layout: layouts/post-layout.njk
title: Definition of Ready
date: 2021-03-24
tags: ['process']
---

# Background

A Definition of Ready (DoR) is <!-- Excerpt Start -->a set of guidelines agreed upon by the team that determines whether an issue is ready for a sprint.<!-- Excerpt End --> This definition is purposely generic as there can be a different DoR for different things within the department.

# Definition of Ready for a Work Item

There are certain criteria that should be present regardless of whether the item in question is a story or a bug.

## The item has an estimate

There are multiple different degrees of estimates and a Story-level estimate must have been performed before a Jira item can be considered ‘Ready’.

## A Fix Version has been specified

If the item includes a change to a product, a product version should be added to the Story that indicates the product iteration that will include the associated change.

## Testing Strategy is defined

A review of the Testing Strategy Considerations page is performed by the team. They will decide which considerations they want to take into account during the implementation of the change. Special notes should be taken to identify what external resources (servers, licenses, experts) would be required to validate both functional and non-functional requirements so the team can be proactive in requisitioning those resources.

### Acceptance tests are defined

Regardless of an item being a story or a bug, there will be acceptance tests associated with any Jira issue. This defines all tests that have to pass to validate that the change does what it is meant to do. These are often documented in a Given-When-Then format.

It’s unnecessary to define acceptance tests to the degree of having manual steps to follow or running automation tests as part of the definition of ready. A listing of all the different scenarios and their desired outcomes will help identify ambiguity upfront.

### Regression test areas are identified

It is important to include regression testing for the area around the change that will be implemented. For example, if you’re changing a control on a screen, it makes sense to identify what regression testing should be included to validate the change.

This regression testing could be automated or manual. It could be scripted or ad hoc. Ensure you’re picking the right kind of testing for the right kind of change.

It’s impossible to identify all regression tests before you start work on an issue because as you implement the change, you could identify potential impact to seemingly unrelated parts of the product. This regression test listing will grow as you go.

# Definition of Ready for a Story

This section defines the guidelines that should be followed before a Story is considered ready for inclusion in a sprint.

## Acceptance Criteria have been documented

There should be a list of acceptance criteria documented in the Story and agreed upon by the Team and Product Owner.

## A User Story sentence is included

There should be a user story sentence in the format “As an X I want to Y so that Z” in order to describe the context of the Story.

# Definition of Ready for a Bug

This section defines the guidelines that should be followed before a Bug is considered ready for inclusion in a sprint.

Some of these items should be handled by other departments before the bug reaches the product backlog.

## Business impact is defined

The impact that the bug is having on the customer’s business needs to be defined. This is important because it is the largest contributor to determining the priority of this bug against all other work in the product backlog. This is also important because it can provide some context to the development team in how to approach the bug.

## Steps to reproduce are defined

Steps to reproduce are critical to a bug in that they provide context and guidance on how to produce the bug that needs to be addressed.

Actual results are important because they help someone attempting to reproduce the error to understand if they’ve done so successfully.

Expected results are important because they help someone attempting to resolve the bug to understand what the end-user needs to happen that isn’t happening.

## The affected version is defined

Unless we know the version of our product where the bug is found (and is affecting our customer(s)) we can’t make good prioritization decisions nor can we make a good decision on what the fix version should be.

## Customer is defined

In situations where we need to reach out to the customer to get more information related to a bug, we need to have the customer listed.
