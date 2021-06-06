import React, { useEffect, useRef, useState } from 'react';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import LoadingIndicator from '../UI/LoadingIndicator';
import './Search.css';

const url =
  'https://react-complete-guide-400e6-default-rtdb.asia-southeast1.firebasedatabase.app/ingredients.json';

const Search = React.memo((props) => {
  const [enteredSearchText, setEnteredSearchText] = useState('');
  const searchTextInputRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const onSearch = props.onSearch;

  const changeSearchTextHandler = (event) => {
    const searchText = event.target.value;
    setEnteredSearchText(searchText);
  };

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      setIsLoading(true);
      if (enteredSearchText === searchTextInputRef.current.value) {
        const query = enteredSearchText
          ? `?orderBy="title"&equalTo="${enteredSearchText}"`
          : '';
        const ingredients = [];
        fetch(url + query)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Failed to add ingredient');
            }
            return response.json();
          })
          .then((data) => {
            for (let key in data) {
              const ingredient = data[key];
              ingredients.push({ id: key, ...ingredient });
            }
            onSearch(ingredients);

            setIsLoading(false);
          })
          .catch((error) => {
            setError(error.message || 'Something went wrong');
          });
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [enteredSearchText, onSearch]);

  const closeModalHandler = () => {
    setError(null);
    setIsLoading(false);
  };

  return (
    <section className="search">
      {error && <ErrorModal onClose={closeModalHandler}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            type="text"
            value={enteredSearchText}
            onChange={changeSearchTextHandler}
            ref={searchTextInputRef}
          />
          {isLoading && <LoadingIndicator />}
        </div>
      </Card>
    </section>
  );
});

export default Search;
