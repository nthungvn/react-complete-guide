import React from 'react';
import Card from '../UI/Card';
import './Search.css';

const Search = React.memo((props) => {
  // const [enteredSearchText, setEnteredSearchText] = useState('');

  const changeSearchTextHandler = (event) => {
    const searchText = event.target.value.trim();
    props.onSearch(searchText);
  };

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            type="text"
            // value={enteredSearchText}
            onChange={changeSearchTextHandler}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
