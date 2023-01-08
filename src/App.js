import React from 'react';
import "./App.css"







const App = () => {
  const stories = [
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

  return (
    <div className='container content my-4'>
      <div className=''>
        <h1>My Hacker Stories</h1>

        <Search />

        <hr />

        <List list={stories} />

      </div>

    </div>
  );
}



// List component
const List = props => (
  <ol>
    {props.list.map(item =>
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


// Search component
const Search = () => {
  const handleChange = event => {
    console.log(event.target.value);
  };

  return (
    <div className='search'>
      <input id="search" onChange={handleChange} type="text" placeholder='Search' />
    </div>
  )
}






export default App;