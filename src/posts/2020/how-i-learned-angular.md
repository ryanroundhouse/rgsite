---
layout: layouts/post-layout.njk 
title: How I learned Angular and Nodejs?
date: 2020-10-31
tags: ['post']
---
I wanted to gain a deeper understanding of Angular, Typescript, Bootstrap, and Node since that's the direction we're taking our technology stack at my work over the next few years.  I decided to <!-- Excerpt Start -->focus on small achieveable steps that each built upon the previous step<!-- Excerpt End --> since that's the only manageable way to maintain momentum and achieve a large goal like this.

## Phase 1 - build something small that works
The subject of the product was a simple dice game called Liar's dice.  I chose this because it had very simple rules that I already understood so that I could focus on development rather than on understanding requirements.  I created a nodejs server with express serving an API that controlled the game itself.  I created a simple javascript page with a few buttons and textboxes that would interact with the back-end.  Though leveraging websockets and session IDs I successfully created a game that could be manually pushed through the 'happy path' with multiple players.

## Phase 2 - convert to typescript
In the first phase, I had implemented the back-end in javascript, which wasn't good enough.  I wanted to use Typescript so that I would have type safety and practice that more on both the back-end and the upcoming Angular front-end.  I went through file by file, renaming js files to ts files.  I then changed the package.json scripts to compile the typescript to javascript, then spent some time editing the existing code to include all of the typescript types and signatures.

## Phase 3 - unit test what I built
Once the back-end was converted to typescript, I started writing unit tests. The first unit test I wrote was 10 lines.  The next was 30 lines.  The next was 50 lines.  This was quickly getting out of control.  I took a step back, looked at my code, and realized that I had put all of the application logic within the express endpoint handlers themselves.  I took the opportunity to refactor my code so that the express endpoints merely validated what was passed in, converted these values to a known type, and sent the call in to the application logic.  This allowed me to build more unit tests.  There were another few refactorings that I made after this one which involved dependency injection in order to be able to inject the current state into each individual method to make tests smaller.

## Phase 4 - refactor what I built into something better
Once all the application-logic unit tests were written, I took a look at the file and folder organization, which wasn't good enough.  Since I had started with something bare-bones and converted it in place, it just didn't feel right anymore.  I went out spalunking through github to find templates of well-laid-out node projects.  I finally found one in [Typescript Node Handler](https://github.com/microsoft/TypeScript-Node-Starter).  I studied the way the files were organized and how the components built upon and consumed one another, then refactored my code to be similar.  This is a step that I wouldn't have been able to do effectively at the start of this project because until I worked through the conversion of js to ts and other issues, I didn't have a strong enough foundation of knowledge to understand this.

## Phase 5 - iteratively add content
I then spent a lot of time converting the simple buttons and textboxes into an angular application.  I invested time up front mocking out many different designs to use, and then settled on one so that I could start off on the right foot when it came to building out the various angular components.

## Conclusion
The thing that made this approach a success for me was that each phase built upon the last.  I was able to gain more and more understanding that built upon understanding that came before.  I had many ah-hah moments that wouldn't have occurred on their own.  This game is still in development, but you can find more information about it in the [project page](/projects/liars-dice/).