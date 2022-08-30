---
layout: layouts/post-layout.njk
title: Difference between unit and integration testing
date: 2021-08-28
tags: ['post']
---
      
Under the umbrella of 'automated developer testing' there are 2 often confused activities: Unit testing and Integration testing. Each is meant to provide a different benefit than the other, but the fact that integration testing can be used for less effective unit testing leads to confusion of where the boundaries should lie.

In order to understand this, we need to come to a shared understanding of the definition of these two activities, so I'll start with that.

> Unit testing is the activity of producing and executing automated tests that validate the behavior of code under test.

> Integration testing is the activity of producing and executing automated tests that validate the integration of code under test with other components of the system.

In order to perform unit testing, you need to isolate the logic from all external dependencies. It should be structured such that you can provide input and receive the output without any consideration of the implementation of the code within this isolated logic. It could be a single method. It could be a series of methods. It could be five methods from 3 different classes. It doesn't matter what the implementation is within the boundary of this isolated logic which is what gives unit tests one of their greatest strengths: reliability.

This reliability gives you the freedom to refactor everything within the boundary of this isolated logic if you keep the logic isolated. Consider the situation where a new requirement needs to be implemented that causes this logic to behave in a different way when provided by a certain permutation of input. You can write an additional test against this isolated logic to validate the new behavior and then you have the flexibility to change ANYTHING within the isolated logic in any way you want without having to change any existing test. Maybe the isolated logic implemented a design pattern that no longer suits the required behavior, you can change it without having to change any existing test because unit tests don't depend on the implementation.

In order to perform integration testing, you inherently can't isolate the logic from all external dependencies because the entire purpose of integration testing is to validate the integration of code under test with external dependencies. You can't do this without knowledge of the implementation of the code under test. This gives integration one of its greatest drawbacks: brittleness.

Since you need to understand the implementation of how the code under test integrates with external dependencies, if you refactor the way the code under test integrates with external dependencies, you run a high risk of breaking existing integration tests.

Why is this important? Because many developers don’t understand the advantages that each activity has over the other, and it sometimes takes a lot of effort to refactor an existing code base to be able to isolate any logic.  If you don’t have isolated logic, you can’t write unit tests, you can only write integration tests that also validate behavior.

One of the biggest signs of whether you’re writing an integration test, or a unit test is whether you’re using Mocks, Stubs, or Spies.  What are these things?  We need to define them too.

> A Mock is an object that pretends to be an external dependency but behaves in a customized way depending on the test, with all interaction information collected.

> A Stub is like a mock, but only a subset of the object is customized.  You still have the interaction information collected.

> A Spy is like a Stub, but nothing is customized.  You still have the interaction information collected.

For simplicity’s sake I’ll refer to all 3 as Mocks.

Why would you use Mocks?  In order to perform integration testing, you need to isolate the code under test from any external dependency so that it can be tested, but you have a catch-22 here.  How do you isolate code under test from external dependencies when the code under test contains these external dependencies?  Maybe this external dependency is a database.

That’s where Mocks come in.  You can inject Mocks into code under test in place of the external dependencies. You’re then able to assess the collected information to ensure that the code under test integrates with the external dependency in the manner that it needs to for the system to work.  Without Mocks you wouldn’t be able to write tests that validate code under test that interacts with a database without having a database standing by with the necessary state to support that test.

Because of Mocks, you don’t need to isolate your logic from external dependencies.  This isolation is hard, and if you can implement automated developer testing without having to isolate logic, why would you ever bother isolating logic?

If you don’t have your logic isolated, you can only ever produce integration tests.  These integration tests will ALSO test behavior, so it feels like you’re able to do it all without any pesky logic isolation, which you are.  But here’s the downside.  Integration tests couple the test to the implementation of the code under test.  That makes it significantly more likely that any change to the code under test whatsoever breaks multiple tests.

Why is that a big deal?  It all comes down to what changes the most.  If you’re fixing a bug, it’s rarely because the code isn’t integrated the right way.  It’s mainly because some behavior of the code wasn’t implemented correctly.  If you’re enhancing functionality, it’s usually either adding new logic or enhancing existing logic, not modifying the way the code is integrated.

If you produce unit tests for behavior and integration tests for integration, then you will have far more confidence that you won’t introduce a regression to the code base when you perform either of these activities.  This is a by-product of unit testing’s greatest strength: reliability.

This reliability comes in the way of not having to modify an existing test.  As you enhance a code base, you likely must make radical changes to the way the isolated logic functions.  You never have to refactor a unit test unless the enhancement is meant to invalidate or modify previously implemented requirements.  If the isolated logic has behavior A, B, and C and you add behavior D, then the isolated logic should still display behavior A, B, and C in the way they did before without any change.

Let’s contrast this with integration tests that also validate behavior.  If the code under test has behavior A, B, and C and If the logic isn’t isolated from external dependencies, then you are significantly more limited in the way that you can implement behavior D.  This is because if you refactor any of the code under test, you have a higher risk of breaking the existing tests as these tests are tied to not only the behavior, but also the implementation of the code under test.  It’s not easy to understand whether these test failures are due to the behavior being modified or the implementation changing.  You’ll have to refactor these tests to maintain confidence in the behavior of the system and in order to do so you must have a deep understanding of the behavior that these tests were validating before your change. These tests might have been written by someone else who left the company last year, or the logic that is being validated could be extremely complex and difficult to manually re-assess which you’ll need to do to ensure you fix it correctly.

When you use unit tests to validate behavior and integration tests to validate the code under test integrates the way it should, then you have a code base that allows you to enhance it quicker with greater confidence.
