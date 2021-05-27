import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  {
    id: 'q1',
    author: 'Hung',
    text: 'Learning new thing',
  },
  {
    id: 'q2',
    author: 'Phuoc',
    text: 'Learning new thing',
  },
];

const AllQuotes = (props) => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
