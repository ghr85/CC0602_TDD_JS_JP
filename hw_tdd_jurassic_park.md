# Homework: Jurassic Park

### Learning Objectives

- Be able to use the fundamental JavaScript language features and data types
- Be able to create an application using multiple interacting objects

## Brief

John Hammond has tasked you with creating an app to help him manage his theme park. He needs to be able to track and manage information about the various dinosaurs in his park and the number of visitors that they will attract.

Use the start point provided, which contains the tested `Dinosaur` model and the uncompleted tests for the MVP `Park` model. (You will need to write your own tests for the extension tasks.)

### MVP

A dinosaur must have:

- A species:white_check_mark:
- A diet (e.g. carnivore, herbivore or omnivore) :white_check_mark:
- An average number of visitors attracted per day :white_check_mark:

A park must have:

- A name :white_check_mark:
- A ticket price :white_check_mark:
- A collection of dinosaurs :white_check_mark:

A park must be able to:

- Add a dinosaur to its collection of dinosaurs :white_check_mark:
- Remove a dinosaur from its collection of dinosaurs :white_check_mark:
- Find the dinosaur that attracts the most visitors :white_check_mark:
- Find all dinosaurs of a particular species :white_check_mark:
- Calculate the total number of visitors per day :white_check_mark:
- Calculate the total number of visitors per year :white_check_mark:
- Calculate the total revenue from ticket sales for one year :white_check_mark:

### Extensions

A park must be able to:

- Remove all dinosaurs of a particular species :white_check_mark:
- Provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type  
Example: `{ 'carnivore': 5, 'herbivore': 2, 'omnivore': 1 }`

**Hint**: We want to avoid removing items from arrays while iterating over them. This is because iteration uses the index number to access the current item, and if you remove an item during one of the iterations, the position of each of the following items will be changed and lead to unexpected results. You will need to keep this principle in mind when removing all the dinosaurs of a particular species.

### Planning

By looking in the package.json you can see that the project already has mocha installed an a dependency. To get the package run `npm install` in the same directory as the package.json, which generates the node_modules.

Looking at the package.json, we can also see that a script has been added to run our tests with mocha, so we can run `npm test` to run the tests.

### Considerations

Remember to use the appropriate `assert` method for the data types you are comparing in your tests.
