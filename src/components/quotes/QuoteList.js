import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, isDescendingMode) => {
  return quotes.sort((quoteA, quoteB) => {
    return isDescendingMode
      ? quoteB.id.localeCompare(quoteA.id)
      : quoteA.id.localeCompare(quoteB.id);
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const isDescendingMode = query.get('sorting') === 'desc';

  const sortedQuote = sortQuotes(props.quotes, isDescendingMode);

  const changeSortingHandler = () => {
    history.push(`/quotes?sorting=${isDescendingMode ? 'asc' : 'desc'}`);
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isDescendingMode ? 'Ascending' : 'Descending'}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuote.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
