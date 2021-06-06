import React, { useEffect, useRef, useState } from 'react';
import Card from '../UI/Card';
import './Search.css';

const url =
  'https://react-complete-guide-400e6-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients.json';

const Search = React.memo((props) => {
  const [enteredSearchText, setEnteredSearchText] = useState('');
  const searchTextInputRef = useRef();
  const onSearch = props.onSearch;

  const changeSearchTextHandler = (event) => {
    const searchText = event.target.value;
    setEnteredSearchText(searchText);
  };

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      if (enteredSearchText === searchTextInputRef.current.value) {
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
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [enteredSearchText, onSearch]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            type="text"
            value={enteredSearchText}
            onChange={changeSearchTextHandler}
            ref={searchTextInputRef}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
