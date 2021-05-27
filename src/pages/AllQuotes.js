import { Fragment } from 'react';
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  {
    id: 'q1',
    author: 'Hung',
    text: 'Learning new thing'
  },
  {
    id: 'q2',
    author: 'Phuoc',
    text: 'Learning new thing'
  }
];

const AllQuotes = (props) => {
  return (
    <Fragment>
      <QuoteList quotes={DUMMY_QUOTES} />
    </Fragment>
  );
};

export default AllQuotes;
