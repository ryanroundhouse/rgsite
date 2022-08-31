---
title: Liar's dice
date: 2020-08-06
layout: layouts/post-layout.njk
technologies:
  ['angular', 'nodejs', 'typescript', 'bootstrap', 'github-actions', 'docker']
tags: ['project']
---

## Description

[Liar's dice](https://en.wikipedia.org/wiki/Liar%27s_dice) is a class of dice games for two or more players requiring the ability to deceive and to detect an opponent's deception.

## Repositories

[liars-dice on github](https://github.com/ryanroundhouse/liars-dice)

## Developer details

This is a fun and simple game that I often use when I'm trying to learn new technologies as I've internalized the rules. This prevents me from getting stuck trying to figure out requirements when I want to implement a simple multiplayer turn-based game.

The front-end is built in Angular 10 and is served by a nodejs server. This front-end communicates with a restful api built in express implemented in the nodejs server. All server code is implemented in Typescript rather than plain javascript to ensure type-safety. Github actions are utilitzed to automatically run unit tests, package the solution into a dockerimage, and push the dockerimage to dockerhub.

## How do I get it?

Github actions are used to automatically publish the latest version of the game as a dockerimage [here](https://hub.docker.com/repository/docker/ryanroundhouse/liar-server)

## How do I run the server?

```powershell
PS> docker run -d -p 3000:3000 ryanroundhouse/liar-server:v1.0
```

Latest commit can be found at the top of this page next to where it lists the number of commits.
