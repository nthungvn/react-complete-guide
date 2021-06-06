import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import './Search.css';

const url =
  'https://react-complete-guide-400e6-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients.json';

const Search = React.memo((props) => {
  const [enteredSearchText, setEnteredSearchText] = useState('');
  const onSearch = props.onSearch;

  const changeSearchTextHandler = (event) => {
    const searchText = event.target.value.trim();
    setEnteredSearchText(searchText);
  };

  useEffect(() => {
    const query = enteredSearchText
      ? `?orderBy="title"&equalTo="${enteredSearchText}"`
      : '';
    const ingredients = [];
    fetch(url + query)
      .then((response) => response.json())
      .then((data) => {
        for (let key in data) {
          const ingredient = data[key];
          ingredients.push({ id: key, ...ingredient });
        }
        onSearch(ingredients);
      });
  }, [enteredSearchText, onSearch]);

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
