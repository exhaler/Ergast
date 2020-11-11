# Ergast
The purpose of this exercise is to create a single page application using [Ergast API](https://ergast.com/mrd/), that presents a list that shows the F1 world champions starting from 2005 until 2015. Clicking on an item shows the list of the winners for every race for the selected year. The highlighted row represents the winner that has been the world champion in the same season.

I kept things simple by using the well-established [Angular Material](https://material.angular.io/), and chose to use Angular as i've already worked with it, love Typescript and also wanted to test v10.

I assumed the target audience of the website are people who don't know a lot about F1, but are curious to have some basic information about each season. As such the website will use an accordion to show each season with a list of each round in the season. The champion of that season is clearly highlighted with an icon next to his name. I also implemented a button to show race details for each round along with the drivers details for that particular round. The idea behind the UI was to keep things simple, make it easy for the visitor to see the race and driver details without navigating away from the page.

The SPA is hosted on github https://exhaler.github.io/Ergast by using the gh-branch.

## Development server

Run `npm start` for a dev server, the browser will open and automatically navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end
