import React from 'react';
import "./App.css"


const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const numbers = [1, 4, 9, 16];
const newNumbers = numbers.map(number => number * 3);
console.log(newNumbers)



function App() {
  return (
    <div className='container content my-4'>
      <div className=''>
        <h1>My Hacker Stories</h1>
        <label htmlFor="search" className='mr-3'>Search: </label>
        <input id="search" type="text" />

        <hr />

        <List />

      </div>

    </div>
  );

}

// List component
function List() {
  return (

    <ol>

      {list.map(item =>
        <li key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
        </li>
      )}
    </ol>
  )
}
export default App;