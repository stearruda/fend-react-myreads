MyReads
===============================

# Table of Contents

* [Description](#description)
* [Project Instructions](#project-instructions)
* [Run the Application](#run-the-application)
* [Backend Server](#backend-server)
* [Code Dependencies](#code-dependencies)

## Description

Project created as part of the Udacity Front-End Developer Nanodegree.

## Project Instructions

In this project, a starter template is given to add interactivity to the app by refactoring the static code.

The goal of the template, is to save time by providing a static example of the CSS and HTML markup that may be used, but without any of the React code that is needed to complete the project.

Another option was to start the project from scratch using [Create React App](https://github.com/facebookincubator/create-react-app) to bootstrap the project.

## Run the Application

In order to run the application you have some options:

1. Open it [here](https://stearruda.github.io/react-myreads/)

2. Run it localy
* Download as .zip file or clone this project:

    ```
    $ git clone https://github.com/stearruda/react-myreads.git
    ```

* Install all project dependencies with `npm install`
* Start the development server with `npm start`

## Backend Server

To simplify the development process, a backend server was provided to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* `getAll`
* `update`
* `search`


* Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Code Dependencies

* [Project React MyReads - Starter Code](https://github.com/udacity/reactnd-project-myreads-starter)
* [Create React App](https://github.com/facebookincubator/create-react-app)
* [React Router](https://www.npmjs.com/package/react-router-dom)
* [BooksAPI](src/BooksAPI.js) (Provided by Udacity)

 
