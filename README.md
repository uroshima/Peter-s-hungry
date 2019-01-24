## Peter-s-hungry

### Background & Overview

Peter-s-hungry is a simple 1-player game. Food items are falling from the top and your job is to help Peter (Peter Griffin from the show Family Guy) to eat/catch the items and not miss on them. Eating an item brings you points, different items - different number of points. The game is over when Peter misses on 10 items.

### Functionality & MVP

Within the game, users will be able to:

 * Start the game
 * Move Peter left or right
 * View their current score

In addition, this project will include:

 * Game rules & instructions
 * A production Readme

### Wireframes

This app will consist of a single screen with the game Title, nav links to my Github and LinkedIn pages and game rules & instructions.

![screen shot 2018-08-19 at 7 37 28 pm](https://user-images.githubusercontent.com/25918181/44317685-60b44580-a3e7-11e8-92fe-086b993e13ec.png)


### Architecture and Technologies

This project will be implemented with the following technologies:

* Vanilla JavaScript for overall structure and game logic
* HTML5 Canvas for DOM manipulation and rendering
* Webpack to bundle and serve up the various scripts

In addition to the webpack entry file, there will be four scripts involved in this project:

* game.js: this script will handle the updating and rendering of the canvas elements.

* circle.js: this script will handle the logic of the food-items elements of the game.

* player.js: this script will handle the logic of Peter as an element of the game.

### Implementation Timeline

### Day 1:
Basic setup. This will include all necessary Node modules as well as getting webpack up and running. Create webpack.config.js, package.json and the file structure of the 4 scripts mentioned above. Review the basics of Canvas and get a general page layout setup.

* Bundle with webpack
* Review enough Canvas to have the basic layout of the game displayed

### Day 2:
Build player.js and game.js. Create and render the hero of the game - Peter and be able to move left and right. Add a background to the game screen.

* Complete player.js
* Render the hero on the Canvas screen
* Render the background image on the Canvas screen
* Make sure the hero is able to move around left & right

### Day 3:
Build circle.js. Add images for each of the various food items in the game.

* Complete circle.js 
* Render the food items on the Canvas screen
* Complete the logic for the food items and the interactions between the food and Peter

### Day 4:
Install the controls for the user to interact with the game. Style the frontend, making it polished and professional. Add personal links (github and linkedin) and game rules & instructions

* Create controls
* Have a styled Canvas, nice looking controls and title
* Add personal links
* Add styling to game page

### Bonus features

There are some additional features that could be added if extra time:

 * Add Peter's famous sounds & sayings
 * Add high scores in database

### Future Features

In the near future I would like to make this game much more user friendly and entertaining with adding these features:

 * Add a few more characters for user to choose
 * Add options for different game difficulties
 * Add a few more levels to the game
