import React from 'react';
import "./App.css"
import "./components/Search"
import "./components/List"



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

  const [searchTerm, setSearchTerm] = React.useState('React');
  // A
  const handleSearch = event => {
    // C
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter(story => story.title.toLowerCase().includes(searchTerm.toLowerCase()))



  return (
    <div className='container content my-4'>
      <div className=''>
        <h1>My Hacker Stories</h1>

        <Search search={searchTerm} onSearch={handleSearch} />

        <hr />

        <List list={searchedStories} />

      </div>

    </div>
  );
}


// Search component
const Search = ({ search, onSearch }) => (
  <div className='search'>
    <input id="search" value={search} onChange={onSearch} type="text" placeholder='Search' />
  </div>
)



// List component
const List = ({ list }) =>
  <ol>
    {list.map(({ objectID, ...item }) =>
      <Item
        key={objectID}
        {...item}
      />)}
  </ol>


const Item = ({ title, url, author, num_comments, points }) =>
  <li >
    <span>
      <a href={url}>{title} | </a>
    </span>
    <span>{author} | </span>
    <span>{num_comments} | </span>
    <span>{points} | </span>
  </li>




export default App;