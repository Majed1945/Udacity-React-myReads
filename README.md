# MyReads Project
Demo: https://calip.io/0RVeyv3L#KX4HEgvw <br/>
For the Udacity React course's first project, this is my implementation with extra functionality. In order to save your books and keep track of what you're reading, MyReads acts as a digital bookcase. It makes it possible for you to control your virtual bookshelf and monitor the progress of your books (Currently Reading, Want to Read, Read). Please take note that not all of the books you're looking for may be available in MyReads as they are sourced from Udacity's API.

## Backend Server

To simplify the development process, Udacity has provided a backend server for the development of this project. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).

## Project Set Up

1. Clone the project.

2. Install the dependencies.

```
npm install
```

3. Start the application.

```
npm start
```
