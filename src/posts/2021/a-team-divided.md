---
layout: layouts/post-layout.njk
title: A team divided?
date: 2021-02-07
tags: ['post']
---

Things were reaching a breaking point in my R&D team. The developers and the QA members were having more and more disagreements. <!-- Excerpt Start -->Each side felt like the other side wasn't hearing them<!-- Excerpt End -->, and each felt they were getting overruled by the other. These disagreements focused around the quality-related activities that had to go on through our work.

One situation had the QA member telling the developer that they had to write automated API tests for each scenario for both XML and JSON response types. This didn't make sense because we use a third-party library behind the scenes that serializes objects to either JSON or XML depending on the type specified.

That being said, the QA member didn't know this. He has to treat the product as a black box, so from his perspective, this was understandably necessary.

There was another argument I heard about where a developer and qa member each were arguing that they didn't want to be the one to author the manual test plan for a software change. The developer argued that it was the qa member's job to do it, and the qa member argued that they didn't have enough time to do it so the developer would have to do it.

There are a few problems here.

The team members aren't cooperating on establishing a testing strategy at the story level. When the team starts work on a story, they should come together not only to establish a design for the implementation of the change, but also to establish a strategy for testing it.

That's not happening here. If it were happening then there wouldn't be an argument on what automated tests should be created. The developer has knowledge about the internal implementation should be shared which would prevent the duplication of effort.

I'm also curious where the qa member is spending all of his time. If he didn't have time to author a manual test plan, nor could he add the additional tests, then where was he spending all of his time? Maybe it's been going into writing unnecessary automated tests, or writing other manual test cases. Maybe he's being spread too thin across multiple projects.

Another consideration is that the qa member might be looking at the automated tests as being necessary to test for every single permutation of what could be broken behind the scenes. The purpose of testing is not to find every single defect in a product, but rather an indicator that provides some insight into how many defects are in the product. Anything more than that would take too much time and effort to be practical.
