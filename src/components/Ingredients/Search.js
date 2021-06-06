import React, { useEffect, useRef, useState } from 'react';
import useHttp from '../../hooks/use-http';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import './Search.css';

const url =
  'https://react-complete-guide-400e6-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients.json';

const Search = React.memo((props) => {
  console.log('Search');
  const [enteredSearchText, setEnteredSearchText] = useState('');
  const searchTextInputRef = useRef();
  const { sendRequest, data, isLoading, error, clear } = useHttp();
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
        const requestConfig = {
          url: url + query,
        };
        sendRequest(requestConfig);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [enteredSearchText, sendRequest]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const ingredients = [];
      for (let key in data) {
        const ingredient = data[key];
        ingredients.push({ id: key, ...ingredient });
      }
      onSearch(ingredients);
    }
  }, [onSearch, data, isLoading, error]);

  return (
    <section className="search">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <span>Loading...</span>}
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
