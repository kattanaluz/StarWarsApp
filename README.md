# Star Wars Project

## Project Summary

Web page where the user can find information about Star Wars characters.

The application was built using React.js. It has a couple components and it is using [The Star Wars API](https://swapi.dev/about) to fetch the content needed.

## How to Install and Run

Clone the repo down, open the terminal in the root directory and install all dependencies by running:

```
npm i
```

Once all dependencies are installed, run

```
npm start
```

This will open the project on localhost:3000.

## How to Run Tests

The app uses Cypress to run end-to-end tests. To run cypress tests execute this command:

```
npm run cy
```

A new cypress window will open up with a list of all tests available, pick one and watch it run through all tests.

The app uses React Testing Library for unit testing. To run React Testing Library execute this command:

```
npm run test
```
