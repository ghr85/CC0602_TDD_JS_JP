# Codeclan Week 06 Day 01
## Introduction to JavaScript
### TDD and JS - Mocha
### Brassic Park (no plz...)

In this task you're asked to model a Jurassic Park by the rather irresponsible Mr Hammond.
To do this you need to practice TDD/BDD in Javascript using Mocha, tests and model for Dinosaur is already
given. You're given the required behaviours for the Park model class but need to beef them out into tests
and then write the corresponding functions thereafter.

#### Notes
* make a habit of practicing the classic FOR loop. It'll see you in good stead later and well as giving
you a feel for the 'what's under the hood' factor for other methods.
* Always remember to *TEST FIRST AND FAIL*. This is really important as is watching the test count.
* length is a property of an array and not a function.
* whenever you're comparing the content of a data structure you need to use deepStrictEquals
* be careful of mutable functions - slice() with no args will give you a dummy copy to play with
* sort is going to be important - try to get a deeper understanding of it in JS, along with filter,map and reduce as they seem to be common factors in Ruby, Java & JS
* where you used to use 'element' in iterators/blocks now use 'el'. Seems to be the done thing.
* stick to your variable naming convention *represents_type*


#### Files
* package.json - node.js requirements (Mocha)
* gitgnore - ignore file for Node packages
* hw_tdd_jurassic_park.md - instructions for exercise
* park_spec.js - test specs for park model
* dinosaur_spec.js - test specs for dinosaur model
* dinosaur.js - javascript dinosaur model
* park.js - javascript park model
