---
title: Liar's dice
date: 2020-08-06
technologies: ['nodejs', 'typescript', 'angular']
---
## Description
[Liar's dice](https://en.wikipedia.org/wiki/Liar%27s_dice) is a class of dice games for two or more players requiring the ability to deceive and to detect an opponent's deception.

## Repositories
[liars-dice](https://github.com/ryanroundhouse/liars-dice)
Server is implemented in node.js and distributed via [dockerimage](https://hub.docker.com/repository/docker/ryanroundhouse/liar-server).  It makes use of express for the API and ws for websockets for synchronous communication.  It's written in primarily typescript.
Client is being implemented in angular.

## Developer details
This is a fun and simple game that I often use when I'm trying to learn new technologies as I've internalized the rules.  This prevents me from getting stuck trying to figure out requirements when I want to implement a simple multiplayer turn-based game.